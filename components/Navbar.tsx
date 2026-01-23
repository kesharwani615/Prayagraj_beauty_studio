'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
          isScrolled ? 'bg-navbar-bg shadow-lg' : 'bg-navbar-bg'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 fade-in-on-load">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 space-x-2 group shrink-0"
              aria-label="Home"
            >
              <div className="relative ">
                {/* Logo Text */}
                <div className="navbar-logo relative tracking-tight">
                  <span className="relative z-10">Prayagraj Beauty Studio</span>
                  {/* Decorative lines */}
                  {/* <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-navbar-text opacity-30"></div>
                    <div className="absolute top-4 right-2 w-2 h-0.5 bg-navbar-text opacity-30"></div>
                  </div> */}
                   <div className="absolute -left-3 top-1 w-6 h-12 opacity-50" aria-hidden="true">
                  <svg 
                    className="w-full h-full text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 12c0-4 2-6 4-8M6 4c2 2 4 4 4 8M10 4c-2 2-4 4-4 8" strokeLinecap="round"/>
                    <path d="M2 20c0-4 2-6 4-8M6 12c2 2 4 4 4 8" strokeLinecap="round"/>
                  </svg>
                </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-5 xl:space-x-8 shrink min-w-0">
              <Link 
                href="/#about-us" 
                className="navbar-link tracking-wide whitespace-nowrap"
                onClick={(e) => {
                  // If we're on the home page, prevent default and scroll smoothly
                  if (window.location.pathname === '/') {
                    e.preventDefault()
                    const element = document.getElementById('about-us')
                    if (element) {
                      // Account for fixed navbar height
                      const navbarHeight = 80 // Approximate navbar height
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                      const offsetPosition = elementPosition - navbarHeight

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                    }
                  }
                }}
              >
                About
              </Link>
              <Link href="/services" className="navbar-link tracking-wide whitespace-nowrap">
                Services
              </Link>
              <Link href="/privacy-policy" className="navbar-link tracking-wide whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="/contact" className="navbar-link tracking-wide whitespace-nowrap">
                Contact
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block shrink-0 ml-2 lg:ml-4 relative group">
              <Link
                href="/book-appointment"
                className="navbar-button px-3 lg:px-4 xl:px-6 py-2 lg:py-2 xl:py-2.5 border border-navbar-border rounded-full tracking-wider hover:bg-navbar-text hover:text-navbar-bg! transition-all duration-200 whitespace-nowrap inline-block"
                aria-label="Book Appointment"
              >
                BOOK NOW
              </Link>
              
              {/* Phone Number Tooltip on Hover */}
              <div className="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50 ">
                <div className="bg-navbar-text text-navbar-bg px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                  <a 
                    href="tel:+919876543210" 
                    className="flex items-center gap-2 text-sm font-semibold hover:underline "
                  >
                    <span className='shake-animation'>
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                        />
                    </svg>
                        </span>

                    +91 98765 43210
                  </a>
                </div>
                {/* Arrow pointing up */}
                <div className="absolute -top-1 right-4 w-2 h-2 bg-navbar-text transform rotate-45"></div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-navbar-text focus:outline-none focus:ring-2 focus:ring-navbar-text focus:ring-offset-2 focus:ring-offset-navbar-bg rounded-md p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-navbar-text transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-navbar-text transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-navbar-text transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}

export default Navbar
