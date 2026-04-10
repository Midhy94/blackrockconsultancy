'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container-custom text-center relative z-10"
      >
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
          Ready to Find Your Next Talent?
        </h2>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto">
          Connect with BLACK ROCKS CONSULTANCY for reliable manpower solutions. We&apos;re here to bridge the gap between skilled professionals and your organization.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-8 bg-white text-primary hover:bg-light px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl hover:scale-105"
        >
          <Users size={20} />
          Hire Talent Today
        </Link>
      </motion.div>
    </section>
  )
}
