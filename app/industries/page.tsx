import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Industries from '@/components/sections/Industries'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Industries We Serve | BLACK ROCKS CONSULTANCY',
  description: 'Staffing solutions for Oil & Gas, Construction, Hospitality, Healthcare, Manufacturing, IT, and more across GCC and Europe.',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="Expertise across diverse sectors for comprehensive staffing solutions"
        image="https://images.unsplash.com/photo-1504307651254-35680f356041?w=1920&q=80"
        imageAlt="Diverse industries"
      />
      <Industries showBanner={false} />
      <CTASection />
    </>
  )
}
