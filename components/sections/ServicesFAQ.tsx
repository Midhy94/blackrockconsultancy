'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

type FaqItem = { question: string; answer: string }

type FaqCategory = { title: string; items: FaqItem[] }

const faqCategories: FaqCategory[] = [
  {
    title: 'Overseas Manpower Recruitment',
    items: [
      {
        question: 'What industries do you specialize in for overseas recruitment?',
        answer:
          'We provide skilled, semi-skilled and professional manpower across various sectors, including Engineering, Construction, Healthcare and Hospitality, primarily for the Gulf countries.',
      },
      {
        question: 'How do you ensure the quality of the candidates?',
        answer:
          'Our vetting process includes rigorous technical screening, background checks and verification of certifications to ensure every candidate meets the specific standards of our international clients.',
      },
    ],
  },
  {
    title: 'Documentation & Visa Processing',
    items: [
      {
        question: 'Do you assist with the entire visa application process?',
        answer:
          'Yes, we handle the end-to-end documentation, including visa filing, medical reports and document attestation.',
      },
      {
        question: 'What medical documents are required for international deployment?',
        answer:
          'Requirements vary by country, but most roles require a standard Physical Medical Report and specialized tests, such as a Radiological Report and blood tests, among others.',
      },
    ],
  },
  {
    title: 'Pre-Departure Orientation',
    items: [
      {
        question: 'What is covered in the Pre-Departure Orientation (PDO)?',
        answer:
          'Our PDO sessions cover labor laws of the destination country, cultural norms, workplace safety, and essential "Dos and Don\'ts" to ensure a smooth transition for the worker.',
      },
      {
        question: 'Is the Pravasi Bhartiya Bima Yojana (PBBY) insurance included?',
        answer:
          'Yes, we ensure all candidates under the ECR category are covered by the mandatory PBBY insurance for their protection while working abroad.',
      },
    ],
  },
  {
    title: 'Post-Placement Support',
    items: [
      {
        question: 'What support do you provide after the candidate reaches the destination?',
        answer:
          'Our commitment extends beyond placement. We offer full operational cooperation, acting as a dedicated bridge between the employer and employee to resolve any initial challenges or contractual queries that may arise during the deployment phase.',
      },
    ],
  },
  {
    title: 'Trust & Compliance',
    items: [
      {
        question: 'How can I verify the legitimacy of Black Rocks Consultancy?',
        answer:
          'Black Rocks Consultancy is a fully licensed agency. We are registered with the Ministry of External Affairs (India) and operate via the eMigrate portal. You can verify our credentials using our RA no. RA6429437 license number on the official government portal.',
      },
    ],
  },
]

export default function ServicesFAQ() {
  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-secondary">
            Clear answers about our services, documentation, orientation, and compliance.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.05 }}
            >
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-dark mb-4 pb-2 border-b border-gray-200">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-gray-100 bg-light/50 hover:border-primary/15 transition-colors"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5 text-left font-medium text-dark [&::-webkit-details-marker]:hidden">
                      <span className="pr-2">{item.question}</span>
                      <ChevronDown
                        size={20}
                        className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                        aria-hidden
                      />
                    </summary>
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 -mt-1">
                      <p className="text-secondary text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
