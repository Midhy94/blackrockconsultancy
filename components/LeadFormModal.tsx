'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLeadModal, type LeadType } from '@/contexts/LeadModalContext'
import { servicesList } from '@/lib/services-data'

type FieldErrors = Partial<Record<string, string>>

function submitLead(payload: {
  leadType: LeadType
  data: Record<string, string>
  resumeFileName?: string
}) {
  const route = payload.leadType === 'business' ? 'sales' : 'hr'
  // Mock / structured hook for future API: route business → sales, individual → HR
  console.info(`[LeadForm] route=${route}`, payload)
}

export default function LeadFormModal() {
  const { state, close } = useLeadModal()
  const [mounted, setMounted] = useState(false)
  const [leadType, setLeadType] = useState<LeadType>('business')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitting, setSubmitting] = useState(false)

  // Business fields
  const [bName, setBName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [bEmail, setBEmail] = useState('')
  const [serviceRequired, setServiceRequired] = useState('')
  const [bMessage, setBMessage] = useState('')

  // Individual fields
  const [iName, setIName] = useState('')
  const [iEmail, setIEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('')
  const [positionAppliedFor, setPositionAppliedFor] = useState('')
  const [currentLocation, setCurrentLocation] = useState('')
  const [keySkills, setKeySkills] = useState('')
  const [resume, setResume] = useState<File | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (state.isOpen) {
      setLeadType(state.leadType)
      setPositionAppliedFor(state.jobTitle)
      setErrors({})
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [state.isOpen, state.leadType, state.jobTitle])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && state.isOpen) close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [state.isOpen, close])

  function validate(): boolean {
    const next: FieldErrors = {}
    if (leadType === 'business') {
      if (!bName.trim()) next.bName = 'Required'
      if (!companyName.trim()) next.companyName = 'Required'
      if (!bEmail.trim()) next.bEmail = 'Required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bEmail)) next.bEmail = 'Invalid email'
      if (!serviceRequired) next.serviceRequired = 'Required'
      if (!bMessage.trim()) next.bMessage = 'Required'
    } else {
      if (!iName.trim()) next.iName = 'Required'
      if (!iEmail.trim()) next.iEmail = 'Required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(iEmail)) next.iEmail = 'Invalid email'
      if (!phone.trim()) next.phone = 'Required'
      if (!dob.trim()) next.dob = 'Required'
      if (!positionAppliedFor.trim()) next.positionAppliedFor = 'Required'
      if (!currentLocation.trim()) next.currentLocation = 'Required'
      if (!resume) next.resume = 'Required'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 400))
    if (leadType === 'business') {
      submitLead({
        leadType: 'business',
        data: {
          name: bName,
          companyName,
          email: bEmail,
          serviceRequired,
          message: bMessage,
        },
      })
    } else {
      submitLead({
        leadType: 'individual',
        data: {
          name: iName,
          email: iEmail,
          phone,
          dob,
          positionAppliedFor,
          currentLocation,
          keySkills,
        },
        resumeFileName: resume?.name,
      })
    }
    setSubmitting(false)
    close()
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {state.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-gray-100"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-100 bg-white">
              <h2 id="lead-modal-title" className="font-heading font-semibold text-lg text-dark">
                Get in touch
              </h2>
              <button
                type="button"
                onClick={close}
                className="p-2 rounded-lg text-secondary hover:text-dark hover:bg-light transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-5">
              <div>
                <p className="text-sm font-medium text-dark mb-2">I am a:</p>
                <div className="flex rounded-lg border border-gray-200 p-1 bg-light">
                  <button
                    type="button"
                    onClick={() => {
                      setLeadType('business')
                      setErrors({})
                    }}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
                      leadType === 'business'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-secondary hover:text-dark'
                    }`}
                  >
                    Business
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLeadType('individual')
                      setErrors({})
                    }}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
                      leadType === 'individual'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-secondary hover:text-dark'
                    }`}
                  >
                    Individual
                  </button>
                </div>
              </div>

              <div className="min-h-[280px]">
                {leadType === 'business' ? (
                  <motion.div
                    key="business"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <Field
                      label="Name"
                      value={bName}
                      onChange={setBName}
                      error={errors.bName}
                    />
                    <Field
                      label="Company name"
                      value={companyName}
                      onChange={setCompanyName}
                      error={errors.companyName}
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={bEmail}
                      onChange={setBEmail}
                      error={errors.bEmail}
                    />
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1">
                        Service required
                      </label>
                      <select
                        value={serviceRequired}
                        onChange={(e) => setServiceRequired(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      >
                        <option value="">Select a service</option>
                        {servicesList.map((s) => (
                          <option key={s.slug} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.serviceRequired && (
                        <p className="mt-1 text-xs text-primary">{errors.serviceRequired}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1">Message</label>
                      <textarea
                        value={bMessage}
                        onChange={(e) => setBMessage(e.target.value)}
                        rows={4}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        placeholder="Tell us about your hiring needs"
                      />
                      {errors.bMessage && (
                        <p className="mt-1 text-xs text-primary">{errors.bMessage}</p>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="individual"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <Field
                      label="Name"
                      value={iName}
                      onChange={setIName}
                      error={errors.iName}
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={iEmail}
                      onChange={setIEmail}
                      error={errors.iEmail}
                    />
                    <Field
                      label="Phone"
                      type="tel"
                      value={phone}
                      onChange={setPhone}
                      error={errors.phone}
                    />
                    <Field
                      label="Date of Birth (DOB)"
                      type="date"
                      value={dob}
                      onChange={setDob}
                      error={errors.dob}
                    />
                    <Field
                      label="Position Applied For"
                      value={positionAppliedFor}
                      onChange={setPositionAppliedFor}
                      error={errors.positionAppliedFor}
                    />
                    <Field
                      label="Current Location (City)"
                      value={currentLocation}
                      onChange={setCurrentLocation}
                      error={errors.currentLocation}
                    />
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1">
                        Key Skills (Optional)
                      </label>
                      <textarea
                        value={keySkills}
                        onChange={(e) => setKeySkills(e.target.value)}
                        rows={3}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1">
                        CV Upload (Mandatory)
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                        className="block w-full text-sm text-secondary file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                      />
                      {errors.resume && (
                        <p className="mt-1 text-xs text-primary">{errors.resume}</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white py-3 rounded-lg font-semibold transition-all"
              >
                {submitting ? 'Sending…' : 'Submit'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}

function Field({
  label,
  value,
  onChange,
  error,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
  type?: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-dark mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      />
      {error && <p className="mt-1 text-xs text-primary">{error}</p>}
    </div>
  )
}
