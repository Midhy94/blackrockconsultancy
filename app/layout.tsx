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

export const metadata: Metadata = {
  title: 'BLACK ROCKS CONSULTANCY | Connecting Skills with Global Opportunities',
  description: 'BLACK ROCKS CONSULTANCY specializes in Manpower Recruitment & Supply and HR support for overseas companies, connecting skilled professionals with opportunities in the GCC and European markets.',
  keywords: 'recruitment, manpower, HR support, overseas jobs, GCC, Europe, staffing',
  openGraph: {
    title: 'BLACK ROCKS CONSULTANCY | Connecting Skills with Global Opportunities',
    description: 'Manpower Recruitment & HR support for overseas companies',
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
