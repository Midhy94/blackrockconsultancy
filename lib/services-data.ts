import type { LucideIcon } from 'lucide-react'
import { UserPlus, FileCheck, Plane, Headphones } from 'lucide-react'

export type ServiceSlug =
  | 'overseas-manpower-recruitment'
  | 'documentation-visa-support'
  | 'pre-departure-orientation'
  | 'post-placement-assistance'

export interface ServiceDefinition {
  slug: ServiceSlug
  href: `/services/${ServiceSlug}`
  title: string
  shortDescription: string
  icon: LucideIcon
  introImage: string
  introImageAlt: string
  /** Longer copy for landing page */
  description: string
  benefits: string[]
  processSteps: { title: string; detail: string }[]
  faqItems: { question: string; answer: string }[]
}

export const servicesList: ServiceDefinition[] = [
  {
    slug: 'overseas-manpower-recruitment',
    href: '/services/overseas-manpower-recruitment',
    title: 'Overseas Manpower Recruitment',
    shortDescription:
      'Sourcing and placing skilled, semi-skilled, and professional workforces across diverse international industries.',
    icon: UserPlus,
    introImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    introImageAlt: 'Recruitment interview and candidate review session',
    description:
      'We specialize in sourcing and placing skilled, semi-skilled, and professional workforces across diverse international industries. We provide tailored staffing solutions to meet the specific technical requirements of global organizations.',
    benefits: [
      'Tailored staffing for your technical requirements',
      'Skilled, semi-skilled, and professional candidates',
      'Coverage across diverse international industries',
      'Solutions aligned to global organizational needs',
    ],
    processSteps: [
      { title: 'Requirement intake', detail: 'We capture role scope, skills, and compliance needs.' },
      { title: 'Sourcing & screening', detail: 'Targeted outreach, interviews, and reference checks.' },
      { title: 'Shortlist & coordination', detail: 'You review finalists; we coordinate interviews and offers.' },
      { title: 'Offer & mobilisation', detail: 'Documentation handoff and pre-deployment readiness.' },
    ],
    faqItems: [
      {
        question: 'What industries do you recruit for overseas roles?',
        answer:
          'We recruit across engineering, construction, healthcare, hospitality, and other demand-based sectors for GCC and international employers.',
      },
      {
        question: 'How do you ensure candidate quality?',
        answer:
          'Every profile goes through screening, qualification checks, and role-fit validation before being shared with employers.',
      },
    ],
  },
  {
    slug: 'documentation-visa-support',
    href: '/services/documentation-visa-support',
    title: 'Documentation & Visa Processing',
    shortDescription:
      'Legal formalities, biometrics, visa stamping, and ticket coordination with full regulatory compliance.',
    icon: FileCheck,
    introImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80',
    introImageAlt: 'Passport, visa forms, and travel documents on desk',
    description:
      'Our team manages the complexities of legal formalities, ensuring candidates meet the physical and professional standards required by employers. We handle biometrics, visa stamping, and ticket coordination so that all placements strictly adhere to Indian and international labour laws.',
    benefits: [
      'End-to-end management of legal formalities',
      'Support for biometrics, visa stamping, and tickets',
      'Standards aligned with employer requirements',
      'Compliance with Indian and international labour laws',
    ],
    processSteps: [
      { title: 'Document audit', detail: 'Review required forms and supporting evidence.' },
      { title: 'Preparation', detail: 'Complete applications per destination requirements.' },
      { title: 'Submission support', detail: 'Track submissions and respond to queries.' },
      { title: 'Clearance & handover', detail: 'Confirm approvals and next steps for travel.' },
    ],
    faqItems: [
      {
        question: 'Do you manage complete visa documentation?',
        answer:
          'Yes, we support end-to-end documentation and visa processing workflows as per destination and employer requirements.',
      },
      {
        question: 'What documents are typically required?',
        answer:
          'Common requirements include passport copies, qualifications, medical reports, and attestations, depending on destination-country rules.',
      },
    ],
  },
  {
    slug: 'pre-departure-orientation',
    href: '/services/pre-departure-orientation',
    title: 'Pre-Departure Orientation',
    shortDescription:
      'Pre-departure sessions on labor laws, workplace safety, culture, and essential travel-readiness guidance.',
    icon: Plane,
    introImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
    introImageAlt: 'Air travel and orientation preparation before departure',
    description:
      'Our Pre-Departure Orientation (PDO) helps candidates transition smoothly into overseas employment. Sessions cover destination-country labor laws, cultural norms, workplace safety, and practical travel readiness, including clear Dos and Don\'ts before deployment.',
    benefits: [
      'Clear guidance on destination labor laws and expectations',
      'Cultural orientation for smoother workplace integration',
      'Workplace safety awareness before departure',
      'Practical Dos and Don\'ts to reduce deployment risk',
    ],
    processSteps: [
      { title: 'PDO planning', detail: 'Schedule orientation aligned with deployment timelines.' },
      { title: 'Core training', detail: 'Cover labor laws, cultural norms, and workplace safety requirements.' },
      { title: 'Worker readiness', detail: 'Review role expectations and essential Dos and Don\'ts before travel.' },
      { title: 'Final pre-departure check', detail: 'Confirm documents, contacts, and arrival instructions.' },
    ],
    faqItems: [
      {
        question: 'What is covered in the pre-departure session?',
        answer:
          'The session covers local labor rules, cultural orientation, workplace expectations, and travel-readiness guidance.',
      },
      {
        question: 'Is orientation mandatory before deployment?',
        answer:
          'Yes, orientation is strongly recommended to reduce onboarding risk and ensure smoother transition at destination.',
      },
    ],
  },
  {
    slug: 'post-placement-assistance',
    href: '/services/post-placement-assistance',
    title: 'Post-Placement Support',
    shortDescription:
      'Continuous communication and settlement assistance for long-term career success.',
    icon: Headphones,
    introImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80',
    introImageAlt: 'Support team assisting deployed workforce remotely',
    description:
      'Our support continues after deployment. We provide full operational cooperation and act as a bridge between employer and employee to resolve early-stage challenges, onboarding concerns, or contractual queries during the placement period.',
    benefits: [
      'Continuous follow-up after the candidate reaches destination',
      'Operational coordination between employer and employee',
      'Faster resolution for onboarding and contractual concerns',
      'A dependable support channel during initial deployment',
    ],
    processSteps: [
      { title: 'Arrival check-in', detail: 'Confirm safe arrival and initial settling.' },
      { title: 'Initial coordination', detail: 'Align candidate, employer, and operations contacts.' },
      { title: 'Issue resolution', detail: 'Coordinate on workplace, accommodation, or contractual concerns.' },
      { title: 'Ongoing support', detail: 'Maintain a defined channel for HR and candidate queries.' },
    ],
    faqItems: [
      {
        question: 'What support is available after deployment?',
        answer:
          'We continue to coordinate between candidate and employer for onboarding, communication, and early-stage issue handling.',
      },
      {
        question: 'How are post-placement concerns handled?',
        answer:
          'Our operations team tracks concerns, aligns stakeholders, and supports timely resolution within agreed communication channels.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return servicesList.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return servicesList.map((s) => s.slug)
}
