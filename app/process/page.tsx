import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import RecruitmentProcess from '@/components/sections/RecruitmentProcess'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Recruitment Process | BLACK ROCKS CONSULTANCY',
  description: 'Our streamlined recruitment process: Requirement Gathering, Candidate Sourcing, Screening, Documentation Support, and Deployment Abroad.',
}

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        title="Recruitment Process"
        subtitle="A transparent approach from requirement to deployment"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
        imageAlt="Recruitment process"
      />
      <RecruitmentProcess />
      <CTASection />
    </>
  )
}
