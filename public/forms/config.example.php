<?php

/**
 * Copy this file to config.php on the server (same folder as contact.php).
 * Do not commit config.php — it contains your SMTP password.
 *
 * Use your hosting provider’s outgoing mail settings (often mail.yourdomain.com).
 */

return [
    'smtp_host' => 'mail.blackrocksconsultancy.com',
    'smtp_port' => 587,
    /** tls = STARTTLS on 587; ssl = implicit SSL (usually port 465); empty = plain (not recommended) */
    'smtp_secure' => 'tls',
    /** Must be the same mailbox as smtp_pass (Gmail app password or cPanel mailbox password). */
    'smtp_user' => 'apply@blackrocksconsultancy.com',
    'smtp_pass' => 'your-mailbox-or-app-password',
    'mail_from' => 'apply@blackrocksconsultancy.com',
    'mail_from_name' => 'BLACK ROCKS website',
    'mail_to' => 'apply@blackrocksconsultancy.com',
];
