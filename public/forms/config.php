<?php

/**
 * Replace smtp_user / smtp_pass (and host if needed) with your cPanel email credentials.
 * This file is listed in .gitignore — do not commit real passwords.
 */

return [
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    'smtp_secure' => 'tls',
    /** Must match the mailbox that owns the app password below. */
    'smtp_user' => 'apply@blackrocksconsultancy.com',
    'smtp_pass' => 'gsgg qkki igja anzm',
    'mail_from' => 'apply@blackrocksconsultancy.com',
    'mail_from_name' => 'Black Rocks Consultancy',
    'mail_to' => 'apply@blackrocksconsultancy.com',
];
