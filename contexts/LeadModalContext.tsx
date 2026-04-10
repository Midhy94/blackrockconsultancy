'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type LeadType = 'business' | 'individual'

export interface OpenLeadModalOptions {
  leadType?: LeadType
  /** Pre-fills "Job Role / applied position" for Individual leads */
  jobTitle?: string
}

interface LeadModalState {
  isOpen: boolean
  leadType: LeadType
  jobTitle: string
}

interface LeadModalContextValue {
  open: (opts?: OpenLeadModalOptions) => void
  close: () => void
  state: LeadModalState
}

const LeadModalContext = createContext<LeadModalContextValue | null>(null)

const defaultState: LeadModalState = {
  isOpen: false,
  leadType: 'business',
  jobTitle: '',
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LeadModalState>(defaultState)

  const open = useCallback((opts?: OpenLeadModalOptions) => {
    setState({
      isOpen: true,
      leadType: opts?.leadType ?? 'business',
      jobTitle: opts?.jobTitle ?? '',
    })
  }, [])

  const close = useCallback(() => {
    setState((s) => ({ ...s, isOpen: false }))
  }, [])

  const value = useMemo(
    () => ({
      open,
      close,
      state,
    }),
    [open, close, state]
  )

  return <LeadModalContext.Provider value={value}>{children}</LeadModalContext.Provider>
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext)
  if (!ctx) {
    throw new Error('useLeadModal must be used within LeadModalProvider')
  }
  return ctx
}
