import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import AppShell from '@/components/AppShell'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/+|\/+$/g, '') ?? ''
const faviconPath = `/${[basePath, 'favicon.png'].filter(Boolean).join('/')}`

export const metadata: Metadata = {
  title: 'BLACK ROCKS CONSULTANCY | Connecting Skills with Global Opportunities',
  description:
    'Professionally managed overseas manpower recruitment and HR support—registered under MCA and approved by MEA, Government of India—connecting talent with the GCC and Europe.',
  keywords: 'recruitment, manpower, HR support, overseas jobs, GCC, Europe, staffing',
  icons: {
    icon: faviconPath,
    shortcut: faviconPath,
    apple: faviconPath,
  },
  openGraph: {
    title: 'BLACK ROCKS CONSULTANCY | Connecting Skills with Global Opportunities',
    description:
      'Overseas manpower recruitment and HR support—MCA registered, MEA approved—GCC and Europe.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <Navbar />
        <AppShell>
          <main className="pt-14">{children}</main>
          <Footer />
          <WhatsAppButton />
        </AppShell>
      </body>
    </html>
  )
}
