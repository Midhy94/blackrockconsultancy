import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import GlobalReach from '@/components/sections/GlobalReach'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Global Reach | BLACK ROCKS CONSULTANCY',
  description:
    'Currently serving Saudi Arabia, with expansion across the GCC (UAE, Qatar, Oman, Kuwait, Bahrain) and key European markets including the UK, Germany, Portugal, Italy, and France.',
}

export default function GlobalReachPage() {
  return (
    <>
      <PageHeader
        title="Global Reach"
        subtitle="Connecting talent with opportunities across GCC and Europe"
        image="https://images.unsplash.com/photo-1524660988542-c440f9c6f63e?w=1920&q=80"
        imageAlt="Global reach"
      />
      <GlobalReach showBanner={false} />
      <CTASection />
    </>
  )
}
