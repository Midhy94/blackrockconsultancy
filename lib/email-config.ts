/** Primary inbox for website enquiries, applications, and lead forms. */
export const SITE_INBOX_EMAIL = 'info@blackrocksconsultancy.com'

/** CV / resume uploads (bytes). */
export const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024

const ALLOWED_CV_EXTENSIONS = new Set(['pdf', 'doc', 'docx'])

export function isAllowedCvFilename(name: string): boolean {
  const ext = name.split('.').pop()?.toLowerCase()
  return Boolean(ext && ALLOWED_CV_EXTENSIONS.has(ext))
}
