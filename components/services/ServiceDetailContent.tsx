'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, ListOrdered } from 'lucide-react'
import { getServiceBySlug, type ServiceSlug } from '@/lib/services-data'
import { useLeadModal } from '@/contexts/LeadModalContext'

export default function ServiceDetailContent({ slug }: { slug: ServiceSlug }) {
  const service = getServiceBySlug(slug)
  const { open } = useLeadModal()

  if (!service) return null

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
            >
                <Image
                  src={service.introImage}
                  alt={service.introImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark">
                Service <span className="text-primary">Overview</span>
              </h2>
              <p className="mt-6 text-secondary leading-relaxed">{service.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-2xl sm:text-3xl text-dark mb-10 text-center"
          >
            Key <span className="text-primary">benefits</span>
          </motion.h2>
          <ul className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 p-5 rounded-2xl bg-white border border-gray-100"
              >
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={22} />
                <span className="text-secondary text-sm leading-relaxed">{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-2xl sm:text-3xl text-dark mb-10 flex items-center gap-2"
          >
            <ListOrdered className="text-primary" size={28} />
            How we <span className="text-primary">work</span>
          </motion.h2>
          <ol className="grid sm:grid-cols-2 gap-6">
            {service.processSteps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 rounded-2xl border border-gray-100 bg-light/60 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-heading font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                  <h3 className="font-heading font-semibold text-dark">{step.title}</h3>
                  <p className="mt-1 text-secondary text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            Ready to get started?
          </h2>
          <p className="mt-3 text-white/90 max-w-xl mx-auto text-sm sm:text-base">
            Contact us for a conversation about your staffing or documentation needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => open({ leadType: 'business' })}
              className="inline-flex justify-center bg-white text-primary hover:bg-light px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Get a quote
            </button>
            <Link
              href="/contact"
              className="inline-flex justify-center border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
