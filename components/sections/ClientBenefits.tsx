'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Globe, ListOrdered, LifeBuoy, Briefcase } from 'lucide-react'

const benefits = [
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'We currently service Saudi Arabia and are expanding across the UAE, Qatar, Oman, Kuwait, Bahrain, and European markets including the UK, Germany, Portugal, Italy, and France.',
  },
  {
    icon: ListOrdered,
    title: 'Structured Process',
    description:
      'From requirement understanding and screening to documentation and deployment, our process ensures timely and legally compliant manpower solutions.',
  },
  {
    icon: LifeBuoy,
    title: 'Comprehensive Support',
    description:
      'We provide pre-departure orientation, cultural training, and post-placement support for candidates.',
  },
  {
    icon: Briefcase,
    title: 'Client Efficiency',
    description:
      'We reduce employer workload by delivering verified, pre-screened manpower through reliable and coordinated timelines.',
  },
]

export default function ClientBenefits() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Business professionals collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark">
              Why Partner with <span className="text-primary">Us?</span>
            </h2>
            <p className="mt-4 text-secondary max-w-2xl">
              What sets BLACK ROCKS CONSULTANCY apart for employers and candidates
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-light border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-2">{benefit.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
