'use client'

import { motion } from 'framer-motion'
import { MapPin, Briefcase } from 'lucide-react'
import { useLeadModal } from '@/contexts/LeadModalContext'
import type { JobListing } from '@/lib/jobs-data'

export default function JobListClient({ jobs }: { jobs: JobListing[] }) {
  const { open } = useLeadModal()

  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {jobs.map((job, index) => (
        <motion.li
          key={job.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <article className="h-full flex flex-col p-6 rounded-2xl bg-light border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all">
            <h3 className="font-heading font-semibold text-lg text-dark">{job.title}</h3>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-secondary">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={16} className="text-primary shrink-0" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={16} className="text-primary shrink-0" />
                {job.experience}
              </span>
            </div>
            <p className="mt-4 text-secondary text-sm leading-relaxed flex-1">{job.description}</p>
            <button
              type="button"
              onClick={() =>
                open({
                  leadType: 'individual',
                  jobTitle: job.title,
                })
              }
              className="mt-6 w-full sm:w-auto inline-flex justify-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all"
            >
              Apply now
            </button>
          </article>
        </motion.li>
      ))}
    </ul>
  )
}
