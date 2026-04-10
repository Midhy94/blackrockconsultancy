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
            A streamlined, transparent approach from requirement to deployment
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <step.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary">Step {index + 1}</span>
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
