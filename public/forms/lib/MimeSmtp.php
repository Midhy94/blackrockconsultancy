<?php
/**
 * Minimal SMTP (AUTH LOGIN + STARTTLS) + plain text + optional file attachments.
 * No external dependencies — suitable for shared cPanel hosting.
 */

declare(strict_types=1);

namespace BlackrocksForms;

final class MailException extends \Exception {}

final class MimeSmtp
{
    /**
     * @param array{smtp_host:string,smtp_port:int,smtp_secure?:string,smtp_user:string,smtp_pass:string,mail_from:string,mail_from_name?:string} $cfg
     * @param list<array{filename:string,content:string,mime?:string}> $attachments binary string content
     */
    public static function send(
        array $cfg,
        string $to,
        string $replyTo,
        string $subject,
        string $textBody,
        array $attachments = []
    ): void {
        $host = $cfg['smtp_host'];
        $port = (int) $cfg['smtp_port'];
        $user = $cfg['smtp_user'];
        $pass = $cfg['smtp_pass'];
        $fromEmail = $cfg['mail_from'];
        $fromName = $cfg['mail_from_name'] ?? 'BLACK ROCKS website';

        $boundary = 'bnd_' . bin2hex(random_bytes(12));
        $mime = self::buildMime($boundary, $textBody, $attachments);
        $headers = self::buildHeaders($fromEmail, $fromName, $replyTo, $subject, $boundary);

        $secure = strtolower((string) ($cfg['smtp_secure'] ?? ''));
        $useSsl = $port === 465 || $secure === 'ssl';
        $remote = $useSsl ? "ssl://{$host}:{$port}" : "tcp://{$host}:{$port}";

        $fp = @stream_socket_client(
            $remote,
            $errno,
            $errstr,
            45,
            STREAM_CLIENT_CONNECT,
            stream_context_create([
                'ssl' => [
                    'verify_peer' => true,
                    'verify_peer_name' => true,
                    'allow_self_signed' => false,
                ],
            ])
        );
        if (! $fp) {
            throw new MailException("Could not connect to SMTP server: {$errstr} ({$errno})");
        }
        stream_set_timeout($fp, 45);

        try {
            self::expect($fp, [220]);
            self::cmd($fp, 'EHLO blackrocks-forms');
            self::expect($fp, [250]);

            if (! $useSsl && ($port === 587 || $secure === 'tls')) {
                self::cmd($fp, 'STARTTLS');
                self::expect($fp, [220]);
                $cryptoOk = @stream_socket_enable_crypto(
                    $fp,
                    true,
                    STREAM_CRYPTO_METHOD_TLS_CLIENT
                );
                if (! $cryptoOk) {
                    throw new MailException('STARTTLS negotiation failed');
                }
                self::cmd($fp, 'EHLO blackrocks-forms');
                self::expect($fp, [250]);
            }

            self::cmd($fp, 'AUTH LOGIN');
            self::expect($fp, [334]);
            self::cmd($fp, base64_encode($user));
            self::expect($fp, [334]);
            self::cmd($fp, base64_encode($pass));
            self::expect($fp, [235]);

            self::cmd($fp, 'MAIL FROM:<' . self::addr($fromEmail) . '>');
            self::expect($fp, [250]);
            foreach (self::splitAddresses($to) as $addr) {
                self::cmd($fp, 'RCPT TO:<' . self::addr($addr) . '>');
                self::expect($fp, [250, 251]);
            }

            self::cmd($fp, 'DATA');
            self::expect($fp, [354]);

            $data = $headers . "\r\n\r\n" . $mime;
            $data = preg_replace("/\r\n\./", "\r\n..", $data) ?? $data;
            fwrite($fp, $data . "\r\n.\r\n");
            self::expect($fp, [250]);

            self::cmd($fp, 'QUIT');
            self::expect($fp, [221]);
        } finally {
            fclose($fp);
        }
    }

    private static function addr(string $email): string
    {
        return trim($email, '<> ');
    }

    /** @return list<string> */
    private static function splitAddresses(string $to): array
    {
        $parts = preg_split('/[,;]+/', $to) ?: [];
        $out = [];
        foreach ($parts as $p) {
            $p = trim($p);
            if ($p !== '') {
                $out[] = $p;
            }
        }
        return $out !== [] ? $out : [trim($to)];
    }

    private static function buildHeaders(
        string $fromEmail,
        string $fromName,
        string $replyTo,
        string $subject,
        string $boundary
    ): string {
        $encSubject = self::mimeHeaderEncode($subject);
        $encFrom = self::mimeHeaderEncode($fromName) . ' <' . self::addr($fromEmail) . '>';
        $lines = [
            'MIME-Version: 1.0',
            'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
            'From: ' . $encFrom,
            'Reply-To: ' . self::addr($replyTo),
            'Subject: ' . $encSubject,
            'X-Mailer: BLACK ROCKS website forms',
        ];
        return implode("\r\n", $lines);
    }

    private static function mimeHeaderEncode(string $s): string
    {
        if (function_exists('mb_encode_mimeheader')) {
            return mb_encode_mimeheader($s, 'UTF-8');
        }
        return '=?UTF-8?B?' . base64_encode($s) . '?=';
    }

    private static function buildMime(string $boundary, string $textBody, array $attachments): string
    {
        $chunks = [];
        $chunks[] = '--' . $boundary;
        $chunks[] = 'Content-Type: text/plain; charset=UTF-8';
        $chunks[] = 'Content-Transfer-Encoding: base64';
        $chunks[] = '';
        $chunks[] = rtrim(chunk_split(base64_encode($textBody), 76, "\r\n"));

        foreach ($attachments as $a) {
            $name = $a['filename'] ?? 'attachment';
            $name = self::safeFilename($name);
            $mime = $a['mime'] ?? 'application/octet-stream';
            $bin = $a['content'] ?? '';
            $chunks[] = '--' . $boundary;
            $chunks[] = 'Content-Type: ' . $mime . '; name="' . $name . '"';
            $chunks[] = 'Content-Transfer-Encoding: base64';
            $chunks[] = 'Content-Disposition: attachment; filename="' . $name . '"';
            $chunks[] = '';
            $chunks[] = rtrim(chunk_split(base64_encode($bin), 76, "\r\n"));
        }
        $chunks[] = '--' . $boundary . '--';
        return implode("\r\n", $chunks);
    }

    private static function safeFilename(string $name): string
    {
        $name = basename(str_replace(["\0", "\r", "\n"], '', $name));
        return $name !== '' ? $name : 'attachment.bin';
    }

    private static function cmd($fp, string $line): void
    {
        fwrite($fp, $line . "\r\n");
    }

    /** @param int[] $codes */
    private static function expect($fp, array $codes): string
    {
        $resp = '';
        while ($line = @fgets($fp, 8192)) {
            $resp .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') {
                break;
            }
        }
        $code = (int) substr($resp, 0, 3);
        if ($codes && ! in_array($code, $codes, true)) {
            throw new MailException('SMTP unexpected response: ' . trim($resp));
        }
        return $resp;
    }
}
