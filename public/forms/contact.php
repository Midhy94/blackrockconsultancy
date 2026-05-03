<?php

declare(strict_types=1);

require_once __DIR__ . '/_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    br_forms_json(405, ['error' => 'Method not allowed']);
}

$raw = (string) file_get_contents('php://input');
$data = json_decode($raw, true);
if (! is_array($data)) {
    br_forms_json(400, ['error' => 'Invalid request']);
}

if (br_forms_honeypot_spam(array_key_exists('website', $data) ? (string) $data['website'] : null)) {
    br_forms_json(400, ['error' => 'Invalid submission']);
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    br_forms_json(400, ['error' => 'Name, email, and message are required']);
}
if (! filter_var($email, FILTER_VALIDATE_EMAIL)) {
    br_forms_json(400, ['error' => 'Invalid email']);
}

$cfg = br_forms_load_config();

$text = "Name: {$name}\nEmail: {$email}\nPhone: " . ($phone !== '' ? $phone : '(not provided)') . "\n\n{$message}";

br_forms_send_safe($cfg, $email, 'Website enquiry from ' . $name, $text, []);

br_forms_json(200, ['success' => true]);
