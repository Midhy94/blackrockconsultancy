'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative size-full">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Professional team collaboration"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #E53935 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
          >
            Connecting Skills with{' '}
            <span className="text-primary">Global Opportunities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed"
          >
            BLACK ROCKS CONSULTANCY specializes in overseas manpower recruitment and HR support, connecting skilled,
            semi-skilled, and professional candidates with international employers across the GCC and European markets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl hover:scale-105"
            >
              <Users size={20} />
              Find Talent
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-dark hover:bg-secondary text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl border-2 border-dark"
            >
              <Mail size={20} />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
