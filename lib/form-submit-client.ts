function basePathPrefix(): string {
  const raw = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_BASE_PATH || '' : ''
  const bp = String(raw).replace(/^\/+|\/+$/g, '')
  return bp ? `/${bp}` : ''
}

async function readJson(res: Response): Promise<Record<string, unknown> | null> {
  const text = await res.text()
  if (!text.trim()) return null
  try {
    return JSON.parse(text) as Record<string, unknown>
  } catch {
    return null
  }
}

function errorFromResponse(res: Response, data: Record<string, unknown> | null, fallback: string): string {
  if (typeof data?.error === 'string') return data.error
  if (res.status === 404) {
    return 'Form handler not found. Upload the forms/ folder from the site package and ensure PHP is enabled.'
  }
  if (res.status >= 500) {
    return 'Server could not send email. Check forms/config.php SMTP settings on the host.'
  }
  return fallback
}

export async function submitContactForm(payload: {
  name: string
  email: string
  phone: string
  message: string
}): Promise<void> {
  const res = await fetch(`${basePathPrefix()}/forms/contact.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      website: '',
    }),
  })
  const data = await readJson(res)
  if (!res.ok) {
    throw new Error(errorFromResponse(res, data, 'Could not send message'))
  }
}

/** Expects fields: name, email, phone, dob, positionAppliedFor, currentLocation, keySkills, attachment (File), website (honeypot). */
export async function submitCareerApplication(fd: FormData): Promise<void> {
  const res = await fetch(`${basePathPrefix()}/forms/career.php`, {
    method: 'POST',
    body: fd,
  })
  const data = await readJson(res)
  if (!res.ok) {
    throw new Error(errorFromResponse(res, data, 'Could not submit application'))
  }
}

/**
 * Business: leadType, name, companyName, email, serviceRequired, message, website (honeypot).
 * Individual: same + phone, dob, positionAppliedFor, currentLocation, keySkills, attachment.
 */
export async function submitLeadForm(fd: FormData): Promise<void> {
  const res = await fetch(`${basePathPrefix()}/forms/lead.php`, {
    method: 'POST',
    body: fd,
  })
  const data = await readJson(res)
  if (!res.ok) {
    throw new Error(errorFromResponse(res, data, 'Could not send'))
  }
}
