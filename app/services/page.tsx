import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Services from '@/components/sections/Services'
import ClientBenefits from '@/components/sections/ClientBenefits'
import CandidateSupport from '@/components/sections/CandidateSupport'
import ServicesFAQ from '@/components/sections/ServicesFAQ'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Our Core Services | BLACK ROCKS CONSULTANCY',
  description:
    'Overseas manpower recruitment, documentation and visa processing, pre-departure orientation, and post-placement support for international employers.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Core Services"
        subtitle="Overseas manpower recruitment, documentation and visa processing, pre-departure orientation, and post-placement support"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        imageAlt="Modern office workspace"
      />
      <Services showBanner={false} />
      <ClientBenefits />
      <CandidateSupport />
      <ServicesFAQ />
      <CTASection />
    </>
  )
}
