function basePathPrefix(): string {
  const raw = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_BASE_PATH || '' : ''
  const bp = String(raw).replace(/^\/+|\/+$/g, '')
  return bp ? `/${bp}` : ''
}

async function readJson(res: Response): Promise<Record<string, unknown> | null> {
  try {
    return (await res.json()) as Record<string, unknown>
  } catch {
    return null
  }
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
    const msg = typeof data?.error === 'string' ? data.error : 'Could not send message'
    throw new Error(msg)
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
    const msg = typeof data?.error === 'string' ? data.error : 'Could not submit application'
    throw new Error(msg)
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
    const msg = typeof data?.error === 'string' ? data.error : 'Could not send'
    throw new Error(msg)
  }
}
