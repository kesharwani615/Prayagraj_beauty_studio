'use client'

import { useEffect } from 'react'

/**
 * Client component that initializes scroll animations and hash navigation
 * This component doesn't render anything, just runs client-side logic
 */
export default function ScrollAnimationScript() {
  useEffect(() => {
    // Initialize scroll-triggered animations
    const elements = document.querySelectorAll('.fade-on-scroll')

    if (elements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Element entered viewport - add active class
              entry.target.classList.add('active')
            } else {
              // Element left viewport - remove active class
              entry.target.classList.remove('active')
            }
          })
        },
        {
          threshold: 0.1, // Trigger when 10% of element is visible (earlier trigger)
          rootMargin: '0px 0px -100px 0px', // Start animation earlier as element approaches viewport
        }
      )

      elements.forEach((el) => observer.observe(el))

      // Cleanup function
      return () => {
        elements.forEach((el) => observer.unobserve(el))
      }
    }

    // Handle hash navigation on page load
    if (window.location.hash === '#about-us') {
      setTimeout(() => {
        const element = document.getElementById('about-us')
        if (element) {
          const navbarHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navbarHeight
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [])

  // This component doesn't render anything
  return null
}
