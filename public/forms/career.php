<?php

declare(strict_types=1);

require_once __DIR__ . '/_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    br_forms_json(405, ['error' => 'Method not allowed']);
}

if (br_forms_honeypot_spam($_POST['website'] ?? null)) {
    br_forms_json(400, ['error' => 'Invalid submission']);
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$dob = trim((string) ($_POST['dob'] ?? ''));
$positionAppliedFor = trim((string) ($_POST['positionAppliedFor'] ?? ''));
$currentLocation = trim((string) ($_POST['currentLocation'] ?? ''));
$keySkills = trim((string) ($_POST['keySkills'] ?? ''));

if ($name === '' || $email === '' || $phone === '' || $dob === '' || $positionAppliedFor === '' || $currentLocation === '') {
    br_forms_json(400, ['error' => 'Please complete all required fields']);
}
if (! filter_var($email, FILTER_VALIDATE_EMAIL)) {
    br_forms_json(400, ['error' => 'Invalid email']);
}

$file = $_FILES['attachment'] ?? null;
if (! is_array($file)) {
    br_forms_json(400, ['error' => 'CV file is required']);
}
[$ok, $err] = br_forms_validate_cv_upload($file);
if (! $ok) {
    br_forms_json(400, ['error' => $err !== null ? $err : 'Invalid CV']);
}

$content = (string) file_get_contents((string) $file['tmp_name']);
if ($content === '') {
    br_forms_json(400, ['error' => 'CV file is empty']);
}

$cfg = br_forms_load_config();

$mime = (string) ($file['type'] ?? 'application/octet-stream');
$fname = basename((string) ($file['name'] ?? 'cv.pdf'));

$text = "Position applied for: {$positionAppliedFor}\n"
    . "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nDate of birth: {$dob}\n"
    . "Current location: {$currentLocation}\nKey skills: " . ($keySkills !== '' ? $keySkills : '(none)') . "\n";

br_forms_send_safe(
    $cfg,
    $email,
    'Job application — ' . $positionAppliedFor,
    $text,
    [['filename' => $fname, 'content' => $content, 'mime' => $mime]]
);

br_forms_json(200, ['success' => true]);
