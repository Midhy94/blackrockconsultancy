import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Services from '@/components/sections/Services'
import ClientBenefits from '@/components/sections/ClientBenefits'
import CandidateSupport from '@/components/sections/CandidateSupport'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services | BLACK ROCKS CONSULTANCY',
  description: 'Recruitment, documentation, visa support, pre-departure orientation, and post-placement assistance for overseas staffing.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="End-to-end recruitment and HR support for overseas placements"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        imageAlt="Modern office workspace"
      />
      <Services showBanner={false} />
      <ClientBenefits />
      <CandidateSupport />
      <CTASection />
    </>
  )
}
