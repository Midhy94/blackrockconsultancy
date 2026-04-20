'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { servicesList } from '@/lib/services-data'

interface ServicesProps {
  showBanner?: boolean
}

export default function Services({ showBanner = true }: ServicesProps) {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden h-48 sm:h-64 mb-16"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
              alt="Modern office workspace"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-dark/50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl">
                  Our Core <span className="text-primary">Services</span>
                </h2>
                <p className="mt-2 text-white/90 max-w-xl mx-auto text-sm sm:text-base">
                  Overseas manpower recruitment, documentation and visa processing, pre-departure orientation, and post-placement support
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={service.href}
                className="block h-full p-6 rounded-2xl bg-light border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon size={26} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{service.shortDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
