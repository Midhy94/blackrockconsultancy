import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { jobListings } from '@/lib/jobs-data'
import JobListClient from '@/components/jobs/JobListClient'
import CareerApplicationForm from '@/components/jobs/CareerApplicationForm'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Jobs Available | BLACK ROCKS CONSULTANCY',
  description:
    'Explore career opportunities at BLACK ROCKS CONSULTANCY. Apply for roles in recruitment, documentation, and business development.',
}

export default function JobsPage() {
  return (
    <>
      <PageHeader
        title="Careers at Blackrocks"
        subtitle="Join a team dedicated to connecting skilled professionals with global opportunities. We value integrity, compliance, and practical solutions."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
        imageAlt="Professional team collaboration"
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="#job-openings"
              className="inline-flex items-center rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-dark hover:border-primary/30 hover:text-primary transition-colors"
            >
              Jobs Opening
            </a>
            <a
              href="#apply-job"
              className="inline-flex items-center rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-dark hover:border-primary/30 hover:text-primary transition-colors"
            >
              Apply Job
            </a>
          </div>
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark">
              Jobs <span className="text-primary">Available</span>
            </h2>
            <p className="mt-3 text-secondary leading-relaxed">
              Current openings are listed below. Select &ldquo;Apply now&rdquo; to submit your details and resume through our candidate form.
            </p>
          </div>
          <div id="job-openings">
            <JobListClient jobs={jobListings} />
          </div>
          <div className="mt-14">
            <CareerApplicationForm />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
