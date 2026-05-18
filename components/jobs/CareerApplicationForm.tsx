'use client'

import { useState } from 'react'
import { submitCareerApplication } from '@/lib/form-submit-client'

type FormState = {
  name: string
  email: string
  phone: string
  dob: string
  positionAppliedFor: string
  currentLocation: string
  keySkills: string
  cv: File | null
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  dob: '',
  positionAppliedFor: '',
  currentLocation: '',
  keySkills: '',
  cv: null,
}

export default function CareerApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.cv) return

    setStatus('loading')
    setSubmitError(null)
    try {
      const fd = new FormData()
      fd.append('name', form.name.trim())
      fd.append('email', form.email.trim())
      fd.append('phone', form.phone.trim())
      fd.append('dob', form.dob)
      fd.append('positionAppliedFor', form.positionAppliedFor.trim())
      fd.append('currentLocation', form.currentLocation.trim())
      fd.append('keySkills', form.keySkills.trim())
      fd.append('website', '')
      fd.append('attachment', form.cv)
      await submitCareerApplication(fd)
      setStatus('success')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
      setSubmitError(err instanceof Error ? err.message : 'Unable to submit now. Please try again.')
    }
  }

  return (
    <form
      id="apply-job"
      onSubmit={handleSubmit}
      className="w-full p-6 sm:p-8 rounded-2xl bg-light border border-gray-100"
    >
      <h3 className="font-heading font-bold text-2xl text-dark">Apply Job</h3>
      <p className="mt-2 text-secondary text-sm">
        Complete the application form below and upload your CV to apply.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Input label="Name" required value={form.name} onChange={(v) => setForm((s) => ({ ...s, name: v }))} />
        <Input
          label="Email"
          type="email"
          required
          value={form.email}
          onChange={(v) => setForm((s) => ({ ...s, email: v }))}
        />
        <Input
          label="Phone"
          type="tel"
          required
          value={form.phone}
          onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
        />
        <Input
          label="Date of Birth (DOB)"
          type="date"
          required
          value={form.dob}
          onChange={(v) => setForm((s) => ({ ...s, dob: v }))}
        />
        <Input
          label="Position Applied For"
          required
          value={form.positionAppliedFor}
          onChange={(v) => setForm((s) => ({ ...s, positionAppliedFor: v }))}
        />
        <Input
          label="Current Location (City)"
          required
          value={form.currentLocation}
          onChange={(v) => setForm((s) => ({ ...s, currentLocation: v }))}
        />
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-dark mb-1">Key Skills (Optional)</label>
          <textarea
            value={form.keySkills}
            onChange={(e) => setForm((s) => ({ ...s, keySkills: e.target.value }))}
            rows={3}
            className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-dark mb-1">CV Upload (Mandatory)</label>
          <input
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={(e) => setForm((s) => ({ ...s, cv: e.target.files?.[0] ?? null }))}
            className="block w-full text-sm text-secondary file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all disabled:opacity-70"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Application'}
      </button>

      {status === 'success' && (
        <p className="mt-3 text-green-600 text-sm">Application submitted successfully.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-red-600 text-sm">
          {submitError ?? 'Unable to submit now. Please try again.'}
        </p>
      )}
    </form>
  )
}

function Input({
  label,
  value,
  onChange,
  required = false,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  type?: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-dark mb-1">
        {label} {required ? '(Required)' : ''}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      />
    </div>
  )
}
