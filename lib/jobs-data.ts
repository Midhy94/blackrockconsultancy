export interface JobListing {
  id: string
  title: string
  location: string
  experience: string
  description: string
}

/**
 * Edit this array to add or remove open roles.
 * `id` should stay unique and stable for keys.
 */
export const jobListings: JobListing[] = [
  {
    id: '1',
    title: 'Overseas Recruitment Coordinator',
    location: 'Mumbai (hybrid)',
    experience: '2–5 years',
    description:
      'Coordinate between clients and candidates for overseas placements. Strong communication and documentation discipline required.',
  },
  {
    id: '2',
    title: 'HR Documentation Specialist',
    location: 'Mumbai',
    experience: '1–3 years',
    description:
      'Manage visa-related paperwork, checklists, and follow-ups. Attention to detail and experience with compliance workflows preferred.',
  },
  {
    id: '3',
    title: 'Business Development Executive',
    location: 'Remote / Mumbai',
    experience: '3–7 years',
    description:
      'Grow client relationships in GCC and European markets. Experience in B2B staffing or recruitment sales is a plus.',
  },
]
