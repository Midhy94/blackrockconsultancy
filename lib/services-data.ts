import type { LucideIcon } from 'lucide-react'
import { UserPlus, FileCheck, Plane, Headphones } from 'lucide-react'

export type ServiceSlug =
  | 'recruitment-skilled-semi-skilled'
  | 'documentation-visa-support'
  | 'pre-departure-orientation'
  | 'post-placement-assistance'

export interface ServiceDefinition {
  slug: ServiceSlug
  href: `/services/${ServiceSlug}`
  title: string
  shortDescription: string
  icon: LucideIcon
  /** Longer copy for landing page */
  description: string
  benefits: string[]
  processSteps: { title: string; detail: string }[]
}

export const servicesList: ServiceDefinition[] = [
  {
    slug: 'recruitment-skilled-semi-skilled',
    href: '/services/recruitment-skilled-semi-skilled',
    title: 'Overseas Manpower Recruitment',
    shortDescription:
      'Sourcing and placing skilled, semi-skilled, and professional workforces across diverse international industries.',
    icon: UserPlus,
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
  },
  {
    slug: 'documentation-visa-support',
    href: '/services/documentation-visa-support',
    title: 'Documentation & Visa Processing',
    shortDescription:
      'Legal formalities, biometrics, visa stamping, and ticket coordination with full regulatory compliance.',
    icon: FileCheck,
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
  },
  {
    slug: 'pre-departure-orientation',
    href: '/services/pre-departure-orientation',
    title: 'Pre-Departure Orientation',
    shortDescription:
      'Pre-departure sessions on labor laws, workplace safety, culture, and essential travel-readiness guidance.',
    icon: Plane,
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
  },
  {
    slug: 'post-placement-assistance',
    href: '/services/post-placement-assistance',
    title: 'Post-Placement Support',
    shortDescription:
      'Continuous communication and settlement assistance for long-term career success.',
    icon: Headphones,
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
  },
]

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return servicesList.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return servicesList.map((s) => s.slug)
}
