'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  image?: string
  imageAlt?: string
}

export default function PageHeader({ title, subtitle, image, imageAlt = '' }: PageHeaderProps) {
  return (
    <section className="relative h-64 sm:h-80 overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-dark/70" />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-dark" />}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white px-4"
        >
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
