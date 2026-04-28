'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FileText, Globe, Plane, MessageCircle } from 'lucide-react'

const supportItems = [
  {
    icon: FileText,
    title: 'Documentation & visa support',
    description:
      'Guidance through legal formalities, biometrics, and visa stamping so you meet employer and regulatory requirements.',
  },
  {
    icon: Globe,
    title: 'Cultural awareness training',
    description:
      'Sessions that prepare you for life and work abroad, aligned with our pre-departure orientation program.',
  },
  {
    icon: Plane,
    title: 'Travel & settlement',
    description:
      'Help with travel procedures and practical steps so you can settle confidently into your new role and location.',
  },
  {
    icon: MessageCircle,
    title: 'Post-placement communication',
    description:
      'We stay in touch after deployment with settlement support aimed at your long-term career success.',
  },
]

export default function CandidateSupport() {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark">
              Candidate <span className="text-primary">Support</span>
            </h2>
            <p className="mt-4 text-secondary max-w-2xl">
              We support our candidates throughout their journey to global opportunities
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl order-2"
          >
            <Image
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Candidate onboarding and support session"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-2">{item.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
