/** Google Maps short link for the Mumbai office (same pin as the site map). */
export const googleMapsOfficeUrl =
  'https://maps.app.goo.gl/VGgZHX5Ebdh7uUoq5?g_st=aw' as const

/**
 * Embed URL for the Contact section iframe (matches the Maps place above).
 * If the map ever looks wrong, re-copy from Google Maps → Share → Embed a map.
 */
export const googleMapsEmbedSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9693612639894!2d72.886!3d19.109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fae3613e61%3A0xfce22c55d14e6a0a!2sBlack%20Rocks%20Consultancy!5e0!3m2!1sen!2sin!4v1746276000000' as const

export const officeAddressLines = [
  '1st Floor, Black Rocks Consultancy',
  'H Kantilal Compound, E, Andheri–Kurla Rd',
  'Sag Baug, Marol, Saki Naka',
  'Mumbai, Maharashtra 400072',
] as const

/** Single line for footer and compact copy. */
export const officeAddressOneLine =
  '1st Floor, Black Rocks Consultancy, H Kantilal Compound, E, Andheri–Kurla Rd, Sag Baug, Marol, Saki Naka, Mumbai, Maharashtra 400072' as const
