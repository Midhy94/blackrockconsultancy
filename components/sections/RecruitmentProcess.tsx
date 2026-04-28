'use client'

import { motion } from 'framer-motion'
import { Search, Users, ClipboardCheck, FileText, Plane } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Requirement Gathering',
    description: 'Understanding your staffing needs and job specifications.',
  },
  {
    icon: Users,
    title: 'Candidate Sourcing',
    description: 'Identifying and attracting qualified talent from our network.',
  },
  {
    icon: ClipboardCheck,
    title: 'Screening & Interviews',
    description: 'Rigorous vetting to ensure the right fit for your organization.',
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description: 'GAMCA Medical, Biometrics, Trade Test, Visa Stamping, Air Ticketing.',
  },
  {
    icon: Plane,
    title: 'Deployment Abroad',
    description: 'Smooth transition and onboarding at your location.',
  },
]

export default function RecruitmentProcess() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark">
            Recruitment <span className="text-primary">Process</span>
          </h2>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
            From requirement understanding and rigorous screening to documentation and final deployment—a systematic,
            transparent path
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />
          <div className="space-y-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-5 z-10">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-sm shadow-lg shadow-primary/25">
                    {index + 1}
                  </div>
                </div>
                <div className="relative bg-light p-5 sm:p-6 rounded-2xl border border-gray-100 hover:border-primary/25 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white border border-primary/15 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <step.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-primary">Process Step</p>
                      <h3 className="font-heading font-semibold text-lg text-dark mt-1">{step.title}</h3>
                      <p className="text-secondary text-sm mt-2 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
