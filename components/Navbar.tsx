'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { servicesList } from '@/lib/services-data'

const mainNavItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/industries', label: 'Industries' },
  { href: '/jobs', label: 'Careers' },
  { href: '/process', label: 'Recruitment Process' },
  { href: '/global-reach', label: 'Global Reach' },
  { href: '/contact', label: 'Contact' },
] as const

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/+|\/+$/g, '') ?? ''
const logoSrc = `/${[basePath, 'SBR-logo.png'].filter(Boolean).join('/')}`

export default function Navbar() {
  const pathname = usePathname() ?? ''
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const lastScrollY = useRef(0)
  const desktopDropdownRef = useRef<HTMLDivElement>(null)

  const servicesActive =
    pathname === '/services' || pathname.startsWith('/services/')
  const isActive = (href: string) => pathname === href

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)
      if (scrollY < 10) {
        setIsVisible(true)
      } else if (scrollY > lastScrollY.current) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      } ${!isVisible ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav className="container-custom px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img
              src={logoSrc}
              alt="BLACK ROCKS CONSULTANCY"
              width={180}
              height={48}
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors text-sm pb-1 border-b-2 ${
                isActive('/')
                  ? 'text-primary-dark border-primary'
                  : 'text-secondary border-transparent hover:text-primary hover:border-primary/40'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors text-sm pb-1 border-b-2 ${
                isActive('/about')
                  ? 'text-primary-dark border-primary'
                  : 'text-secondary border-transparent hover:text-primary hover:border-primary/40'
              }`}
            >
              About
            </Link>

            <div className="relative" ref={desktopDropdownRef}>
              <button
                type="button"
                onClick={() => setDesktopServicesOpen((o) => !o)}
                className={`inline-flex items-center gap-1 font-medium transition-colors text-sm pb-1 border-b-2 ${
                  servicesActive
                    ? 'text-primary-dark border-primary'
                    : 'text-secondary border-transparent hover:text-primary hover:border-primary/40'
                }`}
                aria-expanded={desktopServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${desktopServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full pt-2 z-50"
                  >
                    <div className="min-w-[280px] max-w-[320px] rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                      <Link
                        href="/services"
                        onClick={() => setDesktopServicesOpen(false)}
                        className={`block px-4 py-2.5 text-sm font-semibold hover:bg-light ${
                          isActive('/services') ? 'text-primary-dark bg-light' : 'text-dark hover:text-primary'
                        }`}
                      >
                        All services
                      </Link>
                      <div className="border-t border-gray-100 my-1" />
                      {servicesList.map((s) => (
                        <Link
                          key={s.slug}
                          href={s.href}
                          onClick={() => setDesktopServicesOpen(false)}
                          className={`block px-4 py-2 text-sm hover:bg-light line-clamp-2 ${
                            isActive(s.href) ? 'text-primary-dark bg-light font-medium' : 'text-secondary hover:text-primary'
                          }`}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainNavItems.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors text-sm pb-1 border-b-2 ${
                  isActive(link.href)
                    ? 'text-primary-dark border-primary'
                    : 'text-secondary border-transparent hover:text-primary hover:border-primary/40'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105 text-sm"
            >
              Hire Talent
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-dark hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-1 border-t border-gray-100 mt-3">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-2.5 px-2 rounded-md transition-colors ${
                    isActive('/') ? 'text-primary-dark bg-primary/10' : 'text-secondary hover:text-primary hover:bg-light'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-2.5 px-2 rounded-md transition-colors ${
                    isActive('/about') ? 'text-primary-dark bg-primary/10' : 'text-secondary hover:text-primary hover:bg-light'
                  }`}
                >
                  About
                </Link>

                <div className="border-t border-gray-100 my-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((o) => !o)}
                    className={`flex w-full items-center justify-between font-medium py-2.5 px-2 rounded-md transition-colors ${
                      servicesActive ? 'text-primary-dark bg-primary/10' : 'text-secondary hover:text-primary hover:bg-light'
                    }`}
                    aria-expanded={mobileServicesOpen}
                  >
                    Services
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-3 border-l-2 border-primary/20 ml-1"
                      >
                        <Link
                          href="/services"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setMobileServicesOpen(false)
                          }}
                          className={`block py-2 text-sm font-semibold ${
                            isActive('/services') ? 'text-primary-dark' : 'text-dark hover:text-primary'
                          }`}
                        >
                          All services
                        </Link>
                        {servicesList.map((s) => (
                          <Link
                            key={s.slug}
                            href={s.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setMobileServicesOpen(false)
                            }}
                            className={`block py-2 text-sm ${
                              isActive(s.href) ? 'text-primary-dark font-medium' : 'text-secondary hover:text-primary'
                            }`}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {mainNavItems.slice(2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium py-2.5 px-2 rounded-md transition-colors ${
                      isActive(link.href)
                        ? 'text-primary-dark bg-primary/10'
                        : 'text-secondary hover:text-primary hover:bg-light'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center mt-3"
                >
                  Hire Talent
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
