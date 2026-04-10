import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import CoreValues from '@/components/sections/CoreValues'
import Services from '@/components/sections/Services'
import Industries from '@/components/sections/Industries'
import CTASection from '@/components/sections/CTASection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />
      <About
        showVisionMission={false}
        imageSrc="https://images.pexels.com/photos/7875996/pexels-photo-7875996.jpeg?w=800&q=80"
      />
      <CoreValues />
      <Services />
      <Industries />
      {/* Quick links to other pages */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/process"
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all flex items-center justify-between"
            >
              <span className="font-heading font-semibold text-dark group-hover:text-primary transition-colors">
                Recruitment Process
              </span>
              <ArrowRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/global-reach"
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all flex items-center justify-between"
            >
              <span className="font-heading font-semibold text-dark group-hover:text-primary transition-colors">
                Global Reach
              </span>
              <ArrowRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/contact"
              className="group p-6 rounded-2xl bg-primary hover:bg-primary-dark border border-primary transition-all flex items-center justify-between"
            >
              <span className="font-heading font-semibold text-white">
                Contact Us
              </span>
              <ArrowRight size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
