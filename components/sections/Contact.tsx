'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { submitContactForm } from '@/lib/form-submit-client'
import { googleMapsEmbedSrc, googleMapsOfficeUrl, officeAddressLines } from '@/lib/office-location'

const whatsappNumber = '917304434022'
const whatsappMessage = 'Hello, I would like to know more about BLACK ROCKS CONSULTANCY services.'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await submitContactForm({
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        message: formState.message,
      })
      setStatus('success')
      setFormState({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark">
            <span className="text-primary">BLACK ROCKS CONSULTANCY</span>
          </h2>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
            Get in touch with us for your staffing needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                Office Address
              </h3>
              <p className="text-secondary leading-relaxed">
                {officeAddressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-4 flex items-center gap-2">
                <Phone size={20} className="text-primary" />
                Phone
              </h3>
              <div className="space-y-2">
                <a href="tel:+917304424022" className="block text-secondary hover:text-primary transition-colors">+91 73044 24022</a>
                <div className="flex items-center gap-2">
                  <a href="tel:+917304434022" className="block text-secondary hover:text-primary transition-colors">+91 73044 34022</a>
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    aria-hidden="true"
                    focusable="false"
                    className="fill-[#25D366]"
                  >
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.03 0C5.4 0 .02 5.38.02 12c0 2.1.55 4.16 1.59 5.98L0 24l6.18-1.61A11.97 11.97 0 0 0 12.02 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.51-8.52Zm-8.49 18.5h-.01a9.98 9.98 0 0 1-5.1-1.4l-.37-.22-3.67.96.98-3.58-.24-.37a9.96 9.96 0 0 1-1.53-5.35C2.1 6.5 6.52 2.08 12.03 2.08c2.67 0 5.18 1.04 7.07 2.94a9.92 9.92 0 0 1 2.93 7.06c0 5.5-4.48 9.9-10 9.9Zm5.48-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.25 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-4 flex items-center gap-2">
                <Mail size={20} className="text-primary" />
                Email
              </h3>
              <a href="mailto:info@blackrocksconsultancy.com" className="text-secondary hover:text-primary transition-colors">
                info@blackrocksconsultancy.com
              </a>
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                focusable="false"
                className="fill-current"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.03 0C5.4 0 .02 5.38.02 12c0 2.1.55 4.16 1.59 5.98L0 24l6.18-1.61A11.97 11.97 0 0 0 12.02 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.51-8.52Zm-8.49 18.5h-.01a9.98 9.98 0 0 1-5.1-1.4l-.37-.22-3.67.96.98-3.58-.24-.37a9.96 9.96 0 0 1-1.53-5.35C2.1 6.5 6.52 2.08 12.03 2.08c2.67 0 5.18 1.04 7.07 2.94a9.92 9.92 0 0 1 2.93 7.06c0 5.5-4.48 9.9-10 9.9Zm5.48-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.25 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-light border border-gray-100">
              <h3 className="font-heading font-semibold text-xl text-dark mb-6">Send us a message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formState.phone}
                  onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-lg font-semibold transition-all hover:shadow-lg disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
                {status === 'success' && (
                  <p className="text-green-600 text-sm">Thank you! Your message has been sent.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again or contact us directly.</p>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 space-y-2"
        >
          <div className="rounded-2xl overflow-hidden border border-gray-200 h-80">
            <iframe
              src={googleMapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BLACK ROCKS CONSULTANCY office on Google Maps"
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-sm text-secondary">
            <a
              href={googleMapsOfficeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              View larger map
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
