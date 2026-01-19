'use client'

import React, { useState } from 'react'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call - replace with actual newsletter subscription logic
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="newsletter-section bg-hero-dark py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="newsletter-box bg-hero-light rounded-lg p-8 lg:p-12 relative overflow-hidden">
            
            {/* Decorative Icon - Top Left */}
            <div className="absolute top-6 left-6 w-12 h-12 opacity-50" aria-hidden="true">
              <svg 
                className="w-full h-full text-hero-text-dark" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                {/* Leaf/Petal decorative icon */}
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2 8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" opacity="0.6"/>
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Heading */}
              <h2 className="newsletter-heading text-hero-text-dark mb-6 lg:mb-8 text-center lg:text-left">
                Subscribe to receive the latest offers from our beauty services
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                  {/* Email Input */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="newsletter-input flex-1 px-4 lg:px-6 py-3 lg:py-4 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-hero-accent"
                    aria-label="Email address"
                  />

                  {/* Subscribe Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="newsletter-button px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold uppercase tracking-wider transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                    aria-label="Subscribe to newsletter"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Subscribed!
                      </span>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
