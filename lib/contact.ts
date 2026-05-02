/** Shared contact details shown across the site (footer, contact section, etc.). */
export const middleEastContact = {
  name: 'James',
  title: 'Middle East Point of Contact',
  phoneDisplay: '+966 53 448 0049',
  /** E.164 without spaces for tel: and wa.me */
  phoneDigits: '966534480049',
} as const

export function middleEastTelHref() {
  return `tel:+${middleEastContact.phoneDigits}`
}

export function middleEastWhatsAppHref(message: string) {
  return `https://wa.me/${middleEastContact.phoneDigits}?text=${encodeURIComponent(message)}`
}
