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
  imageSrc = 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
              About <span className="text-primary">Us</span>
            </h2>
            <p className="mt-6 text-secondary leading-relaxed">
              Black Rocks Consultancy is a professionally managed overseas manpower recruitment and HR support firm. Registered under the Ministry of Corporate Affairs (MCA) and approved by the Ministry of External Affairs (MEA), Government of India, we serve as a vital link between talent and global industries.
            </p>
            <p className="mt-4 text-secondary leading-relaxed">
              We specialize in identifying and placing skilled, semi-skilled, and professional candidates with international employers, focusing primarily on the GCC and European regions. Our approach is built on transparency, ethical recruitment practices, and strict regulatory compliance to ensure a seamless experience.
            </p>
          </motion.div>
        </div>

        {showVisionMission && (
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark">
              Our <span className="text-primary">Purpose</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-light border border-gray-100 hover:border-primary/20 transition-colors group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Compass size={28} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-dark mb-3">Our Vision</h3>
            <p className="text-secondary leading-relaxed">
              To be a trusted global partner in reliable manpower recruitment.
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
            <h3 className="font-heading font-semibold text-xl text-dark mb-3">Our Mission</h3>
            <p className="text-secondary leading-relaxed">
              {
                "To provide reliable and qualified manpower to overseas industries while supporting candidates' long-term careers through transparent, ethical practices and full regulatory compliance."
              }
            </p>
          </motion.div>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}
