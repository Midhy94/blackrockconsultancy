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
        title="Industries We Serve"
        subtitle="Expertise across key sectors where we recruit and deploy talent internationally"
        image="https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=2000"
        imageAlt="Industrial facility and infrastructure background"
      />
      <Industries showBanner={false} />
      <CTASection />
    </>
  )
}
