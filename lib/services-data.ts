import type { LucideIcon } from 'lucide-react'
import { UserPlus, FileCheck, Plane, Headphones } from 'lucide-react'

export type ServiceSlug =
  | 'recruitment-skilled-semi-skilled'
  | 'documentation-visa-support'
  | 'pre-departure-orientation'
  | 'post-placement-assistance'

export interface ServiceDefinition {
  slug: ServiceSlug
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
    title: 'Recruitment for skilled and semi-skilled roles',
    shortDescription: 'Comprehensive talent sourcing and placement for various skill levels.',
    icon: UserPlus,
    description:
      'We identify, screen, and place candidates who match your technical and cultural requirements. Our process reduces time-to-hire while maintaining quality and compliance for overseas deployments.',
    benefits: [
      'Role-specific sourcing across GCC and European markets',
      'Structured screening and shortlisting',
      'Transparent communication with clients and candidates',
      'Support aligned with your workforce plans',
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
    title: 'Documentation and visa support',
    shortDescription: 'End-to-end assistance with paperwork and visa processing.',
    icon: FileCheck,
    description:
      'Navigating work permits and documentation can be complex. We guide candidates and employers through the required paperwork with clear timelines and checklists.',
    benefits: [
      'Checklist-driven document collection',
      'Coordination with authorised processes where applicable',
      'Reduced errors and resubmissions',
      'Single point of contact for status updates',
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
    title: 'Pre-departure orientation',
    shortDescription: 'Preparing candidates for their new roles and destinations.',
    icon: Plane,
    description:
      'Successful relocation starts before the flight. We prepare candidates on workplace expectations, culture, and practical matters so they arrive confident and ready.',
    benefits: [
      'Role and employer-specific briefing',
      'Cultural and practical orientation',
      'Q&A with experienced coordinators',
      'Materials candidates can revisit',
    ],
    processSteps: [
      { title: 'Briefing schedule', detail: 'Align sessions with deployment dates.' },
      { title: 'Content delivery', detail: 'Cover role, location, and compliance reminders.' },
      { title: 'Q&A', detail: 'Address individual concerns before travel.' },
      { title: 'Final checklist', detail: 'Travel documents, contacts, and arrival steps.' },
    ],
  },
  {
    slug: 'post-placement-assistance',
    title: 'Post-placement assistance',
    shortDescription: 'Ongoing support after deployment for smooth transition.',
    icon: Headphones,
    description:
      'The first weeks in a new country matter. We stay available to help candidates and employers resolve early issues and keep engagement productive.',
    benefits: [
      'Structured follow-up touchpoints',
      'Escalation path for urgent issues',
      'Feedback loop to improve future placements',
      'Retention-focused communication',
    ],
    processSteps: [
      { title: 'Arrival check-in', detail: 'Confirm safe arrival and initial settling.' },
      { title: '30-day review', detail: 'Gather feedback from candidate and employer.' },
      { title: 'Issue resolution', detail: 'Coordinate on workplace or logistics concerns.' },
      { title: 'Ongoing support', detail: 'Defined channel for HR and candidate queries.' },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return servicesList.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return servicesList.map((s) => s.slug)
}
