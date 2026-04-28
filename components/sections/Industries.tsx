'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Factory,
  Building2,
  HardHat,
  Truck,
  Cpu,
  Cog,
  Utensils,
  Stethoscope,
  Store,
  Shield,
  GraduationCap,
  Wheat,
} from 'lucide-react'

const industries = [
  {
    icon: Factory,
    name: 'Oil & Gas and Energy',
    description:
      'Specialist recruitment for upstream, midstream, and downstream operations, providing technical experts for a demanding global energy sector.',
  },
  {
    icon: Building2,
    name: 'Construction & Engineering',
    description:
      'Connecting skilled engineers and on-site professionals with large-scale international building and design projects.',
  },
  {
    icon: HardHat,
    name: 'Infrastructure',
    description:
      'Sourcing experienced teams for the development of residential and commercial spaces, as well as transport networks like roads, railways, and bridges.',
  },
  {
    icon: Truck,
    name: 'Manufacturing & Logistics',
    description:
      'Providing manpower for production and supply chain management, from factory floor specialists to logistics coordinators.',
  },
  {
    icon: Cpu,
    name: 'Information Technology & Technical Services',
    description:
      'Sourcing specialized IT talent and technical support teams for the rapidly evolving digital landscape.',
  },
  {
    icon: Cog,
    name: 'Fabrication & Machine Shops',
    description:
      'Expert staffing for high-precision metalwork, welding, and industrial manufacturing environments.',
  },
  {
    icon: Utensils,
    name: 'Hospitality & Tourism',
    description:
      'Supplying talent for hotel, travel, and tourism sectors to ensure premium guest experiences.',
  },
  {
    icon: Stethoscope,
    name: 'Healthcare & Medical Services',
    description:
      'Connecting qualified medical professionals and support staff with international healthcare providers.',
  },
  {
    icon: Store,
    name: 'Retail & Customer Service',
    description:
      'Staffing retail environments with professionals focused on sales excellence and customer satisfaction.',
  },
  {
    icon: Shield,
    name: 'Security & Facility Management',
    description:
      'Providing trained personnel for safety, maintenance, and efficient operation of facilities.',
  },
  {
    icon: GraduationCap,
    name: 'Education & Training',
    description:
      'Recruiting educators and training specialists for institutional and professional development.',
  },
  {
    icon: Wheat,
    name: 'Agriculture & Food Processing',
    description:
      'Delivering manpower for farming and global food supply chains, from cultivation to processing.',
  },
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
              src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Industrial and logistics operations"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-dark/60 flex items-center justify-center px-6">
              <div className="text-center text-white">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl">
                  Industries We <span className="text-primary">Serve</span>
                </h2>
                <p className="mt-2 text-white/90 max-w-2xl mx-auto text-sm sm:text-base">
                  Expertise across key sectors where we recruit and deploy talent internationally
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group"
            >
              <div className="h-full p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors shrink-0">
                  <industry.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-base text-dark group-hover:text-primary transition-colors mb-2">
                  {industry.name}
                </h3>
                <p className="text-secondary text-sm leading-relaxed flex-1">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
