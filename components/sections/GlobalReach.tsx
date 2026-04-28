'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Star } from 'lucide-react'

const gccCountries = [
  {
    name: 'Saudi Arabia',
    active: true,
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=1200&q=80',
    alt: 'Riyadh skyline in Saudi Arabia',
  },
  {
    name: 'UAE',
    active: false,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    alt: 'Burj Khalifa and Dubai cityscape in UAE',
  },
  {
    name: 'Qatar',
    active: false,
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1200&q=80',
    alt: 'Doha skyline in Qatar',
  },
  {
    name: 'Oman',
    active: false,
    image: 'https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?w=1200&q=80',
    alt: 'Sultan Qaboos Grand Mosque architecture in Oman',
  },
  {
    name: 'Kuwait',
    active: false,
    image: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Kuwait Towers in Kuwait City',
  },
  {
    name: 'Bahrain',
    active: false,
    image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Manama skyline in Bahrain',
  },
]

const europeCountries = [
  {
    name: 'UK',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80',
    alt: 'Big Ben and Westminster Bridge in London',
  },
  {
    name: 'Germany',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80',
    alt: 'Brandenburg Gate in Berlin Germany',
  },
  {
    name: 'Portugal',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80',
    alt: 'Lisbon cityscape and historic Portuguese architecture',
  },
  {
    name: 'Italy',
    image: 'https://images.unsplash.com/photo-1529154036614-a60975f5c760?w=1200&q=80',
    alt: 'Colosseum monument in Rome Italy',
  },
  {
    name: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    alt: 'Eiffel Tower in Paris France',
  },
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

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {gccCountries.map((country) => (
                <div
                  key={country.name}
                  className={`relative rounded-xl overflow-hidden border transition-all min-h-[110px] ${
                    country.active
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-100 hover:border-primary/20'
                  }`}
                >
                  <Image
                    src={country.image}
                    alt={country.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 260px"
                  />
                  <div className="absolute inset-0 bg-dark/55" />
                  <div className="relative z-10 p-4 h-full flex items-start justify-between gap-2">
                    <span className="font-medium text-white">{country.name}</span>
                    {country.active && (
                      <span className="flex items-center gap-1 text-xs font-semibold text-primary bg-white/90 px-2 py-1 rounded-full">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {europeCountries.map((country) => (
                <div
                  key={country.name}
                  className="relative rounded-xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-all min-h-[110px]"
                >
                  <Image
                    src={country.image}
                    alt={country.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 260px"
                  />
                  <div className="absolute inset-0 bg-dark/55" />
                  <div className="relative z-10 p-4 h-full flex items-start">
                    <span className="font-medium text-white">{country.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
