'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'
import { middleEastContact, middleEastTelHref } from '@/lib/contact'

const footerLinks = {
  company: [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/jobs', label: 'Careers' },
    { href: '/process', label: 'Recruitment Process' },
    { href: '/contact', label: 'Contact' },
  ],
}

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/black-rocks-manpower-and-human-resource-consultancy-pvt-ltd/',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/black_rocks_consultancy?igsh=MXM3amdyZHoydmZneQ==',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/share/1AQfcCGaLR/',
    label: 'Facebook',
  },
]

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/+|\/+$/g, '') ?? ''
const lightLogoSrc = `/${[basePath, 'SBR-logo-Light.png'].filter(Boolean).join('/')}`

export default function Footer() {
  const pathname = usePathname() ?? ''
  const normalizePath = (value: string) => (value.length > 1 ? value.replace(/\/+$/, '') : value)
  const stripBasePath = (value: string) => {
    if (!basePath) return value
    const prefix = `/${basePath}`
    if (value === prefix) return '/'
    return value.startsWith(`${prefix}/`) ? value.slice(prefix.length) : value
  }
  const currentPath = normalizePath(stripBasePath(pathname))
  const isActive = (href: string) =>
    normalizePath(stripBasePath(href)) === '/services'
      ? currentPath === '/services' || currentPath.startsWith('/services/')
      : currentPath === normalizePath(stripBasePath(href))

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src={lightLogoSrc}
                alt="BLACK ROCKS CONSULTANCY"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Connecting skilled professionals with global opportunities in GCC and Europe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors text-sm ${
                      isActive(link.href) ? 'text-red-500 font-semibold' : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <span>I Floor, H. Kantilal & Co&apos;s Compound, Saki Naka, K.A Road, Kurla West, Mumbai – 72</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a href="tel:+917304424022" className="hover:text-primary transition-colors">+91 73044 24022</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <span>
                  {middleEastContact.name} — {middleEastContact.title}:{' '}
                  <a href={middleEastTelHref()} className="hover:text-primary transition-colors">
                    {middleEastContact.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <a href="mailto:info@blackrocksconsultancy.com" className="hover:text-primary transition-colors">info@blackrocksconsultancy.com</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BLACK ROCKS CONSULTANCY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
