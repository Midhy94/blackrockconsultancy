'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react'

const whatsappNumber = '917304424022'
const whatsappMessage = 'Hello, I would like to know more about BLACK ROCKS CONSULTANCY services.'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      if (res.ok) {
        setStatus('success')
        setFormState({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
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
                I Floor, H. Kantilal & Co&apos;s Compound,<br />
                Saki Naka, K.A Road,<br />
                Kurla West,<br />
                Mumbai – 72
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-4 flex items-center gap-2">
                <Phone size={20} className="text-primary" />
                Phone
              </h3>
              <div className="space-y-2">
                <a href="tel:+917304424022" className="block text-secondary hover:text-primary transition-colors">+91 73044 24022</a>
                <a href="tel:+917304434022" className="block text-secondary hover:text-primary transition-colors">+91 73044 34022</a>
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
              <MessageCircle size={20} />
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
          className="mt-16 rounded-2xl overflow-hidden border border-gray-200 h-80"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.8897!3d19.0761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da35eddb3fdd7b2!2sSaki%20Naka%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BLACK ROCKS CONSULTANCY Location"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
