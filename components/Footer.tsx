'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're on the home page, prevent default and scroll smoothly
    if (window.location.pathname === '/') {
      e.preventDefault()
      const element = document.getElementById('about-us')
      if (element) {
        // Account for fixed navbar height
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }
  return (
    <footer className="footer-section bg-hero-text-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Left Section - Logo, Slogan, Social Media */}
          <div className="footer-logo-section space-y-4">
            {/* Logo */}
            <div className="footer-logo flex items-center gap-2">
              <div className="relative">
                <span className="footer-logo-a text-4xl lg:text-5xl font-bold relative z-10">Prayagraj Beauty Studio</span>
                {/* Decorative lines/leaves extending from A */}
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
              {/* <span className="footer-logo-text text-xl lg:text-2xl font-semibold">LAB</span> */}
            </div>

            {/* Slogan */}
            <div className="footer-slogan space-y-1">
              <h3 className="footer-slogan-main text-lg lg:text-xl font-bold">
                Beauty & More
              </h3>
              <p className="footer-slogan-tagline text-sm lg:text-base text-white/90">
                Invest in your skin!
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="footer-social flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Middle-Left Section - Navigation Links */}
          <div className="footer-pages">
            <h4 className="footer-heading text-base lg:text-lg font-semibold mb-4">
              Pages
            </h4>
            <ul className="footer-links space-y-2">
              <li>
                <Link 
                  href="/#about-us" 
                  onClick={handleAboutClick}
                  className="footer-link text-white/80 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link text-white/80 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="footer-link text-white/80 hover:text-white transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link text-white/80 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle-Right Section - Contact Information */}
          <div className="footer-contact">
            <h4 className="footer-heading text-base lg:text-lg font-semibold mb-4">
              Contact
            </h4>
            <ul className="footer-contact-info space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <svg 
                  className="w-5 h-5 mt-0.5 shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210" className="hover:text-white transition-colors duration-200">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg 
                  className="w-5 h-5 mt-0.5 shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:prayagrajbeautystudio@gmail.com" className="hover:text-white transition-colors duration-200 break-all">
                prayagrajbeautystudio@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg 
                  className="w-5 h-5 mt-0.5 shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="break-words">
                  Home Service Available<br />
                  All Major Cities, India
                </span>
              </li>
            </ul>
          </div>

          {/* Right Section - Operating Hours */}
          <div className="footer-hours">
            <h4 className="footer-heading text-base lg:text-lg font-semibold mb-4">
              Schedule
            </h4>
            <ul className="footer-hours-info space-y-2 text-white/80">
              <li>
                Mon-Fri: 09:00-19:00
              </li>
              <li>
                Sat: 09:00-17:00
              </li>
              <li>
                Sun: Closed
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="footer-copyright text-center text-white/80 text-sm">
            All rights reserved © Beauty Services
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
