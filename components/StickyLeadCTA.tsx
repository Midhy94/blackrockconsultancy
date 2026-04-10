'use client'

import { MessageSquare } from 'lucide-react'
import { useLeadModal } from '@/contexts/LeadModalContext'

export default function StickyLeadCTA() {
  const { open } = useLeadModal()

  return (
    <button
      type="button"
      onClick={() => open({ leadType: 'business' })}
      className="fixed bottom-24 right-6 z-40 flex items-center gap-2 rounded-full bg-dark text-white pl-4 pr-5 py-3 shadow-lg hover:bg-secondary hover:shadow-xl transition-all text-sm font-semibold"
      aria-label="Get a quote or contact us"
    >
      <MessageSquare size={18} className="text-primary" />
      Get a Quote
    </button>
  )
}
