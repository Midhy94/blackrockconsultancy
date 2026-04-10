'use client'

import type { ReactNode } from 'react'
import { LeadModalProvider } from '@/contexts/LeadModalContext'
import LeadFormModal from '@/components/LeadFormModal'
import StickyLeadCTA from '@/components/StickyLeadCTA'

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <LeadModalProvider>
      {children}
      <LeadFormModal />
      <StickyLeadCTA />
    </LeadModalProvider>
  )
}
