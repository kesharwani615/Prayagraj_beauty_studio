import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="contact-page fade-in-on-load">
        <section className="contact-section bg-hero-dark-black py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left Column - Contact Information */}
              <div className="contact-info-column space-y-6">
                <div>
                  <h1 className="contact-info-heading text-hero-light mb-4">
                    Contact Information
                  </h1>
                  <p className="contact-info-description text-hero-text-dark/80">
                    Feel free to reach out to us for appointments, inquiries, or to experience our premium beauty services at your home. We're here to make your beauty journey as convenient and luxurious as possible.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="contact-details space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="contact-icon-wrapper shrink-0">
                      <svg 
                        className="w-6 h-6 text-hero-accent" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="contact-detail-text text-hero-light">
                      Ews 163 kalnidipurm rajroopur prayagraj
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="contact-icon-wrapper shrink-0">
                      <svg 
                        className="w-6 h-6 text-hero-accent" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <a 
                        href="mailto:prayagrajbeautystudio@gmail.com" 
                        className="contact-detail-text text-hero-light hover:text-hero-accent transition-colors duration-200"
                      >
                        prayagrajbeautystudio@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="contact-icon-wrapper shrink-0">
                      <svg 
                        className="w-6 h-6 text-hero-accent" 
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
                    </div>
                    <div>
                      <a 
                        href="tel:+919876543210" 
                        className="contact-detail-text text-hero-light hover:text-hero-accent transition-colors duration-200"
                      >
                        +91 9792615969
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="contact-social flex items-center gap-4 pt-4">
                  <a
                    href="https://www.instagram.com/prayagraj_beauty_studio_07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icon w-12 h-12 rounded-full border-2 border-hero-accent flex items-center justify-center hover:bg-hero-accent hover:text-white transition-all duration-300"
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
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icon w-12 h-12 rounded-full border-2 border-hero-accent flex items-center justify-center hover:bg-hero-accent hover:text-white transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="contact-form-column">
                <h2 className="contact-form-heading text-hero-light mb-6">
                  Have a Question?
                </h2>

                {/* Business Hours */}
                <div className="contact-business-hours mb-8">
                  <p className="contact-hours-label text-hero-accent font-semibold mb-2">
                    Business Hours:
                  </p>
                  <p className="contact-hours-text text-hero-text-dark/80">
                    Mon - Fri: 08:00 AM To 09:00 PM<br />
                    Sat-Sun: 09:00 AM To 06:00 PM<br />
                  </p>
                </div>

                {/* Contact Form */}
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
