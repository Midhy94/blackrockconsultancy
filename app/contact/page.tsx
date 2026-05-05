import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact Us | BLACK ROCKS CONSULTANCY',
  description:
    'Get in touch with BLACK ROCKS CONSULTANCY. Mumbai office (Marol, Andheri–Kurla Rd), phone, email, WhatsApp. Hire talent for GCC and Europe.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for your staffing needs"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
        imageAlt="Contact"
      />
      <Contact />
    </>
  )
}
