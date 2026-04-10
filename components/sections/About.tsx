'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Compass } from 'lucide-react'

interface AboutProps {
  showVisionMission?: boolean
  imageSrc?: string
}

export default function About({
  showVisionMission = true,
  imageSrc = 'https://images.unsplash.com/photo-1552664730-d307ca884211?w=800&q=80',
}: AboutProps) {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${showVisionMission ? 'mb-16' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={imageSrc}
              alt="Professional business meeting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark">
              About <span className="text-primary">BLACK ROCKS CONSULTANCY</span>
            </h2>
            <p className="mt-6 text-secondary leading-relaxed">
              BLACK ROCKS CONSULTANCY is a start-up recruitment firm duly registered under the Ministry of Corporate Affairs and approved by the Ministry of External Affairs, Government of India. The company specializes in manpower recruitment and HR support for overseas client companies.
            </p>
            <p className="mt-4 text-secondary leading-relaxed">
              We bridge the gap between skilled professionals and client companies across the Middle East / GCC and Europe by offering practical and reliable staffing solutions.
            </p>
          </motion.div>
        </div>

        {showVisionMission && (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-light border border-gray-100 hover:border-primary/20 transition-colors group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Compass size={28} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-dark mb-3">Vision</h3>
            <p className="text-secondary leading-relaxed">
              To become a dependable partner for overseas recruitment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-light border border-gray-100 hover:border-primary/20 transition-colors group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Target size={28} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-dark mb-3">Mission</h3>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Provide qualified manpower to industries abroad
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Support candidates in building sustainable careers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Maintain compliance and transparency in all processes
              </li>
            </ul>
          </motion.div>
        </div>
        )}
      </div>
    </section>
  )
}
