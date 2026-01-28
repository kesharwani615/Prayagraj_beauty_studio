'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleLinkClick = () => {
    onClose()
  }

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClose()
    // If we're on the home page, prevent default and scroll smoothly
    if (window.location.pathname === '/') {
      e.preventDefault()
      setTimeout(() => {
        const element = document.getElementById('about-us')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100) // Small delay to allow menu to close
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 bg-navbar-bg z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav 
            className="flex flex-col px-6 py-8 space-y-6" 
            aria-label="Mobile navigation"
          >
            <Link
              href="/#about-us"
              onClick={handleAboutClick}
              className="mobile-menu-link py-2 tracking-wide"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={handleLinkClick}
              className="mobile-menu-link py-2 tracking-wide"
            >
              Services
            </Link>
            <Link
              href="/artist"
              onClick={handleLinkClick}
              className="mobile-menu-link py-2 tracking-wide"
            >
              Artist
            </Link>
            <Link
              href="/privacy-policy"
              onClick={handleLinkClick}
              className="mobile-menu-link py-2 tracking-wide"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="mobile-menu-link py-2 tracking-wide"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile CTA Button */}
          <div className="px-6 py-6 mt-auto border-t border-gray-800">
            <Link
              href="/book-appointment"
              onClick={handleLinkClick}
              className="navbar-button block w-full px-6 py-3 border border-navbar-border rounded-full tracking-wider text-center hover:bg-navbar-text hover:text-navbar-bg transition-all duration-200"
              aria-label="Book Appointment"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
