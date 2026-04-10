'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Factory, Building2, Utensils, Stethoscope, Truck, Shield, Cog, Store, HardHat, Cpu, Wheat, GraduationCap } from 'lucide-react'

const industries = [
  { icon: Factory, name: 'Oil & Gas / Energy' },
  { icon: Building2, name: 'Construction & Engineering' },
  { icon: Utensils, name: 'Hospitality & Tourism' },
  { icon: Stethoscope, name: 'Healthcare & Medical Services' },
  { icon: Truck, name: 'Manufacturing & Logistics' },
  { icon: Shield, name: 'Security & Facility Management' },
  { icon: Cog, name: 'Fabrication and Machine Shops' },
  { icon: Store, name: 'Retail & Customer Service' },
  { icon: HardHat, name: 'Infrastructure Projects' },
  { icon: Cpu, name: 'Information Technology' },
  { icon: Wheat, name: 'Agriculture & Food Processing' },
  { icon: GraduationCap, name: 'Education & Training' },
]

interface IndustriesProps {
  showBanner?: boolean
}

export default function Industries({ showBanner = true }: IndustriesProps) {
  return (
    <section id="industries" className="section-padding bg-light">
      <div className="container-custom">
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden h-48 sm:h-64 mb-16"
          >
            <Image
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8e?w=1200&q=80"
              alt="Global industrial landscape"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-dark/60 flex items-center justify-center px-6">
              <div className="text-center text-white">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl">
                  Industries We <span className="text-primary">Serve</span>
                </h2>
                <p className="mt-2 text-white/90 max-w-xl mx-auto">
                  Expertise across diverse sectors for comprehensive staffing solutions
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group"
            >
              <div className="h-full p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                  <industry.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-sm text-dark group-hover:text-primary transition-colors">{industry.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
