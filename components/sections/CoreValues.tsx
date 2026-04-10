'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Shield, Wrench } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Honesty in recruitment',
    description: 'Transparent and ethical practices in every placement.',
  },
  {
    icon: Users,
    title: 'Respect for candidates and clients',
    description: 'Treating every stakeholder with dignity and professionalism.',
  },
  {
    icon: Shield,
    title: 'Compliance with regulations',
    description: 'Adhering to all legal and regulatory requirements.',
  },
  {
    icon: Wrench,
    title: 'Practical solutions tailored to needs',
    description: 'Custom staffing solutions that fit your business.',
  },
]

export default function CoreValues() {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark">
            Our <span className="text-primary">Core Values</span>
          </h2>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon size={26} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-dark mb-2">{value.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
