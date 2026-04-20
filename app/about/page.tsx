import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import About from '@/components/sections/About'
import CoreValues from '@/components/sections/CoreValues'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Us | BLACK ROCKS CONSULTANCY',
  description:
    'Professionally managed overseas manpower recruitment and HR support, registered under MCA and approved by MEA, Government of India. Vision, mission, and core values.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="A vital link between talent and global industries, with a primary focus on the GCC and European regions"
        image="https://images.unsplash.com/photo-1552664730-d307ca884211?w=1920&q=80"
        imageAlt="Professional business meeting"
      />
      <About />
      <CoreValues />
      <CTASection />
    </>
  )
}
