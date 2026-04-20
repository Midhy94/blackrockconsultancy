import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Industries from '@/components/sections/Industries'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Industries We Focus On | BLACK ROCKS CONSULTANCY',
  description:
    'Recruitment focus across Oil & Gas and Energy, construction, infrastructure, manufacturing, IT, fabrication, hospitality, healthcare, retail, security, education, and agriculture.',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Focus On"
        subtitle="Focused expertise across the sectors where we recruit and deploy talent internationally"
        image="https://images.unsplash.com/photo-1504307651254-35680f356041?w=1920&q=80"
        imageAlt="Diverse industries"
      />
      <Industries showBanner={false} />
      <CTASection />
    </>
  )
}
