<?php

declare(strict_types=1);

require_once __DIR__ . '/lib/MimeSmtp.php';

use BlackrocksForms\MailException;
use BlackrocksForms\MimeSmtp;

function br_forms_json(int $code, array $payload): void
{
    http_response_code($code);
    header('Content-Type: application/json; charset=UTF-8');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

/** @return array<string, mixed> */
function br_forms_load_config(): array
{
    $path = __DIR__ . '/config.php';
    if (! is_file($path)) {
        br_forms_json(500, [
            'error' => 'Mail is not configured. On the server, copy config.example.php to config.php and enter your SMTP details.',
        ]);
    }
    /** @var array<string, mixed> $cfg */
    $cfg = require $path;
    $required = ['smtp_host', 'smtp_port', 'smtp_user', 'smtp_pass', 'mail_from', 'mail_to'];
    foreach ($required as $key) {
        if (! isset($cfg[$key]) || (is_string($cfg[$key]) && trim($cfg[$key]) === '')) {
            br_forms_json(500, ['error' => "Mail config is missing required key: {$key}"]);
        }
    }
    $cfg['smtp_port'] = (int) $cfg['smtp_port'];

    return $cfg;
}

function br_forms_honeypot_spam(?string $websiteField): bool
{
    if ($websiteField === null) {
        return false;
    }

    return trim($websiteField) !== '';
}

const BR_FORMS_MAX_BYTES = 8 * 1024 * 1024;

/** @return array{0:bool,1:?string} */
function br_forms_validate_cv_upload(array $file): array
{
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
        return [false, 'CV upload failed'];
    }
    if (($file['size'] ?? 0) > BR_FORMS_MAX_BYTES) {
        return [false, 'CV file is too large (max 8 MB)'];
    }
    $name = (string) ($file['name'] ?? '');
    $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
    if (! in_array($ext, ['pdf', 'doc', 'docx'], true)) {
        return [false, 'CV must be a PDF or Word document'];
    }

    return [true, null];
}

function br_forms_send_safe(
    array $cfg,
    string $replyTo,
    string $subject,
    string $textBody,
    array $attachments = []
): void {
    try {
        MimeSmtp::send($cfg, (string) $cfg['mail_to'], $replyTo, $subject, $textBody, $attachments);
    } catch (MailException $e) {
        br_forms_json(500, ['error' => 'Failed to send email. Check SMTP settings in config.php.']);
    } catch (Throwable $e) {
        br_forms_json(500, ['error' => 'Failed to send message.']);
    }
}
