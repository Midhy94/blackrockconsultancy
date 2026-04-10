'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Star } from 'lucide-react'

const gccCountries = [
  { name: 'Saudi Arabia', active: true },
  { name: 'UAE', active: false },
  { name: 'Qatar', active: false },
  { name: 'Oman', active: false },
  { name: 'Kuwait', active: false },
  { name: 'Bahrain', active: false },
]

const europeCountries = [
  'Germany',
  'France',
  'Italy',
  'Spain',
  'UK',
]

interface GlobalReachProps {
  showBanner?: boolean
}

export default function GlobalReach({ showBanner = true }: GlobalReachProps) {
  return (
    <section id="global-reach" className="section-padding bg-light">
      <div className="container-custom">
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden h-40 sm:h-52 mb-12"
          >
            <Image
              src="https://images.unsplash.com/photo-1524660988542-c440f9c6f63e?w=1200&q=80"
              alt="Global reach - world map"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                Connecting Talent <span className="text-primary">Worldwide</span>
              </h2>
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* GCC Countries */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
          >
            <h3 className="font-heading font-semibold text-xl text-dark mb-6 flex items-center gap-2">
              <MapPin size={24} className="text-primary" />
              GCC Countries
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {gccCountries.map((country) => (
                <div
                  key={country.name}
                  className={`p-4 rounded-xl border transition-all ${
                    country.active
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-100 hover:border-primary/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-dark">{country.name}</span>
                    {country.active && (
                      <span className="flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        <Star size={12} />
                        Currently Serving
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Europe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
          >
            <h3 className="font-heading font-semibold text-xl text-dark mb-6 flex items-center gap-2">
              <MapPin size={24} className="text-primary" />
              Europe
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {europeCountries.map((country) => (
                <div
                  key={country}
                  className="p-4 rounded-xl border border-gray-100 hover:border-primary/20 transition-all"
                >
                  <span className="font-medium text-dark">{country}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
