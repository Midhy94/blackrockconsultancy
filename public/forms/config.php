<?php

/**
 * Replace smtp_user / smtp_pass (and host if needed) with your cPanel email credentials.
 * This file is listed in .gitignore — do not commit real passwords.
 */

return [
    'smtp_host' => 'mail.blackrocksconsultancy.com',
    'smtp_port' => 587,
    'smtp_secure' => 'tls',
    'smtp_user' => 'noreply@blackrocksconsultancy.com',
    'smtp_pass' => 'your-mailbox-or-app-password',
    'mail_from' => 'noreply@blackrocksconsultancy.com',
    'mail_from_name' => 'BLACK ROCKS website',
    'mail_to' => 'info@blackrocksconsultancy.com',
];
