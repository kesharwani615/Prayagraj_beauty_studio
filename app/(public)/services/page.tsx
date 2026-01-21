'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import bridal1 from "@/public/images/bridal1.webp"
import hair1 from "@/public/images/hairstyle1.webp"
import service1 from "@/public/images/facial1.webp"
import service2 from "@/public/images/facial2.webp"
import service3 from "@/public/images/facial3.webp"
import service4 from "@/public/images/facial4.webp"
import service5 from "@/public/images/facial5.webp"
import service6 from "@/public/images/image7.webp"
import service8 from "@/public/images/hairremoval1.webp"
import service9 from "@/public/images/image-2.webp"
import wax1 from "@/public/images/wax1.webp"
import wax2 from "@/public/images/wax2.webp"
import wax3 from "@/public/images/wax3.webp"
import wax4 from "@/public/images/wax4.webp"
import threading1 from "@/public/images/threading1.webp"
import wax5 from "@/public/images/wax5.webp"
import wax6 from "@/public/images/wax6.webp"
import wax7 from "@/public/images/fullbodywax1.webp"
import wax8 from "@/public/images/ricawax1.webp"
import wax9 from "@/public/images/chocalatewax.webp"
import wax10 from "@/public/images/bikini&hipwax.jpg"
import wax11 from "@/public/images/ricawax2.webp"
import ScrollAnimationScript from '@/components/ScrollAnimationScript'
import haircut1 from "@/public/images/haircut1.webp"
import haircut2 from "@/public/images/haircut2.webp"
import haircut3 from "@/public/images/haircut3.webp"
import haircut4 from "@/public/images/haircut4.webp"
import haircut5 from "@/public/images/haircut5.avif"
import haircut6 from "@/public/images/haircut6.avif"
import makeup1 from "@/public/images/makeup1.jpg"
import makeup2 from "@/public/images/makeup2.avif"
import makeup3 from "@/public/images/makeup3.webp"
import makeup4 from "@/public/images/makeup4.jpg"
import makeup5 from "@/public/images/makeup5.webp"
import makeup6 from "@/public/images/makeup6.avif"
import makeup9 from "@/public/images/makeup9.avif"
import makeup10 from "@/public/images/makeup10.avif"
import makeup11 from "@/public/images/makeup11.jpg"
import makeup12 from "@/public/images/makeup12.avif"
import makeup13 from "@/public/images/makeup13.jpg"

interface Service {
  id: string
  title: string
  price: string
  image: any
  category: string
}

// Helper function to extract numeric price value for sorting
const getPriceValue = (price: string): number => {
  return parseInt(price.replace(/[₹,]/g, ''), 10)
}

// Define category order
const categoryOrder = ['Facial', 'Hair Removal', 'Hair Cut & Hair Care', 'Makeup', 'Manicure & Pedicure', 'Mehndi']

const allServices: Service[] = [
  // Facial Treatments
  { id: '1', title: 'Classic facial ', price: '₹499', image: service1, category: 'Facial' },
  { id: '2', title: 'Deep cleansing/acne facial', price: '₹999', image: service2, category: 'Facial' },
  { id: '3', title: 'Hydrating faical', price: '₹1,199', image: service3, category: 'Facial' },
  { id: '4', title: 'Anti-aging faical', price: '₹1,499', image: service4, category: 'Facial' },
  { id: '5', title: 'Brightening/radiance faical', price: '₹1,799', image: service5, category: 'Facial' },
  { id: '10', title: 'Calming/sensitive skin faical ', price: '₹2,499', image: service6, category: 'Facial' },
  
  // Hair Removal
  { id: '7', title: 'Eyebrow Lamination', price: '₹29', image: threading1, category: 'Hair Removal' },
  
  // Full Body Wax (Excluding Bikini & Hips)
  { id: '11', title: 'Full Body Wax - Sugar Wax', price: '₹999', image: wax7, category: 'Hair Removal' },
  { id: '12', title: 'Full Body Wax - Chocolate Wax', price: '₹1,499', image: wax9, category: 'Hair Removal' },
  { id: '13', title: 'Full Body Wax - Rica Wax', price: '₹1,999', image: wax11, category: 'Hair Removal' },
  
  // Full Legs Wax
  { id: '14', title: 'Full Legs Wax - Sugar Wax', price: '₹399', image: wax1, category: 'Hair Removal' },
  { id: '15', title: 'Full Legs Wax - Chocolate Wax', price: '₹599', image: wax5, category: 'Hair Removal' },
  { id: '16', title: 'Full Legs Wax - Rica Wax', price: '₹699', image: wax6, category: 'Hair Removal' },
  
  // Bikini & Hips Wax
  { id: '17', title: 'Bikini & Hips Wax - Rica Wax', price: '₹1,299', image: wax8, category: 'Hair Removal' },
  { id: '18', title: 'Bikini & Hips Wax - Been Wax', price: '₹1,499', image: wax10, category: 'Hair Removal' },
  
  // Face Wax
  { id: '19', title: 'Face Wax', price: '₹499', image: wax4, category: 'Hair Removal' },
  
  // Full Arms With U/A Half Legs Wax
  { id: '20', title: 'Full Arms With U/A Half Legs Wax - Sugar Wax', price: '₹199', image: wax1, category: 'Hair Removal' },
  { id: '21', title: 'Full Arms With U/A Half Legs Wax - Chocolate Wax', price: '₹299', image: wax2, category: 'Hair Removal' },
  { id: '22', title: 'Full Arms With U/A Half Legs Wax - Rica Wax', price: '₹349', image: wax3, category: 'Hair Removal' },
  
  // Hair Cut & Hair Care
  { id: '53', title: 'Hair Trimming', price: '₹149', image: haircut1, category: 'Hair Cut & Hair Care' },
  { id: '54', title: 'Layer Cut / Step Cut', price: '₹249', image: haircut4, category: 'Hair Cut & Hair Care' },
  { id: '55', title: 'Hair Wash & Blow Dry', price: '₹299', image: haircut2, category: 'Hair Cut & Hair Care' },
  { id: '56', title: 'Hair Styling', price: '₹499', image: haircut5, category: 'Hair Cut & Hair Care' },
  { id: '57', title: 'Bridal Bun / Juda', price: '₹699', image: haircut6, category: 'Hair Cut & Hair Care' },
  { id: '58', title: 'Hair Straight / Curl', price: '₹999', image: haircut3, category: 'Hair Cut & Hair Care' },
  
  // Makeup
  { id: '23', title: 'Natural Makeup', price: '₹999', image: makeup11, category: 'Makeup' },
  { id: '24', title: 'Party Makeup', price: '₹1,499', image: makeup12, category: 'Makeup' },
  { id: '25', title: 'Matte Makeup', price: '₹1,999', image: makeup10, category: 'Makeup' },
  { id: '26', title: 'HD Makeup', price: '₹2,499', image: makeup9, category: 'Makeup' },
  { id: '27', title: 'Glam Makeup', price: '₹2,999', image: makeup4, category: 'Makeup' },
  { id: '28', title: 'Smokey Makeup', price: '₹3,499', image: makeup6, category: 'Makeup' },
  { id: '29', title: 'Reception Makeup', price: '₹4,999', image: makeup1, category: 'Makeup' },
  { id: '30', title: 'Engagement Makeup', price: '₹5,999', image: makeup13, category: 'Makeup' },
  { id: '31', title: 'Bridal Makeup', price: '₹9,999', image: makeup3, category: 'Makeup' },
  { id: '32', title: 'Bridal HD Makeup', price: '₹12,999', image: makeup5, category: 'Makeup' },
  { id: '33', title: 'Airbrush Makeup', price: '₹14,999', image: makeup2, category: 'Makeup' },
  
  // Manicure Services
  { id: '34', title: 'Basic Manicure', price: '₹299', image: service9, category: 'Manicure & Pedicure' },
  { id: '35', title: 'Clean-Up Manicure', price: '₹399', image: service9, category: 'Manicure & Pedicure' },
  { id: '36', title: 'Express Manicure', price: '₹499', image: service9, category: 'Manicure & Pedicure' },
  
  // Pedicure Services
  { id: '37', title: 'Basic Pedicure', price: '₹499', image: service9, category: 'Manicure & Pedicure' },
  { id: '38', title: 'Clean-Up Pedicure', price: '₹599', image: service9, category: 'Manicure & Pedicure' },
  { id: '39', title: 'Express Pedicure', price: '₹699', image: service9, category: 'Manicure & Pedicure' },
  
  // Mehndi Services
  { id: '40', title: 'Minimal / Floral Mehndi', price: '₹500', image: service9, category: 'Mehndi' },
  { id: '41', title: 'Guest Mehndi', price: '₹500', image: service9, category: 'Mehndi' },
  { id: '42', title: 'Engagement / Wedding Guest Mehndi', price: '₹500', image: service9, category: 'Mehndi' },
  { id: '43', title: 'Arabic Mehndi (Per Hand)', price: '₹400', image: service9, category: 'Mehndi' },
  { id: '44', title: 'Arabic Mehndi (Per Hand) - Premium', price: '₹700', image: service9, category: 'Mehndi' },
  { id: '45', title: 'Traditional Mehndi (Per Hand)', price: '₹1,000', image: service9, category: 'Mehndi' },
  { id: '46', title: 'Arabic Bridal Mehndi', price: '₹3,000', image: service9, category: 'Mehndi' },
  { id: '47', title: 'Full Hands (Front + Back)', price: '₹4,000', image: service9, category: 'Mehndi' },
  { id: '48', title: 'Bridal Mehndi', price: '₹5,000', image: service9, category: 'Mehndi' },
  { id: '49', title: 'Full Hands + Full Legs', price: '₹5,000', image: service9, category: 'Mehndi' },
  { id: '50', title: 'Full Hands + Legs', price: '₹7,000', image: service9, category: 'Mehndi' },
  { id: '51', title: 'Rajasthani / Traditional Bridal Mehndi', price: '₹7,000', image: service9, category: 'Mehndi' },
  { id: '52', title: 'Premium Bridal Mehndi (Custom Design)', price: '₹9,999', image: service9, category: 'Mehndi' },
]

// Sort services: maintain category order, sort by price within each category
const services: Service[] = (() => {
  // Group services by category
  const groupedByCategory: Record<string, Service[]> = {}
  allServices.forEach(service => {
    if (!groupedByCategory[service.category]) {
      groupedByCategory[service.category] = []
    }
    groupedByCategory[service.category].push(service)
  })

  // Sort within each category by price (lowest to highest)
  Object.keys(groupedByCategory).forEach(category => {
    groupedByCategory[category].sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price))
  })

  // Combine in the defined category order
  const sorted: Service[] = []
  categoryOrder.forEach(category => {
    if (groupedByCategory[category]) {
      sorted.push(...groupedByCategory[category])
    }
  })

  return sorted
})()

const ServicesPage = () => {
  const categories = categoryOrder.filter(cat => 
    services.some(s => s.category === cat)
  )
  const [visibleCount, setVisibleCount] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {}
    categories.forEach(category => {
      initial[category] = 6
    })
    return initial
  })

  const handleShowMore = (category: string, totalCount: number) => {
    setVisibleCount(prev => ({
      ...prev,
      [category]: totalCount // Show all items
    }))
  }

  // Re-initialize observer for newly shown cards
  useEffect(() => {
    const initializeObserver = () => {
      const elements = document.querySelectorAll('.fade-on-scroll:not(.active)')
      
      if (elements.length > 0) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('active')
              } else {
                entry.target.classList.remove('active')
              }
            })
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
          }
        )

        elements.forEach((el) => {
          // Check if already in viewport when shown
          const rect = el.getBoundingClientRect()
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
          if (isInViewport) {
            // Immediately add active class if already visible
            el.classList.add('active')
          } else {
            // Observe for when it enters viewport
            observer.observe(el)
          }
        })

        return () => {
          elements.forEach((el) => observer.unobserve(el))
        }
      }
    }

    // Small delay to ensure DOM is updated after state change
    const timeoutId = setTimeout(() => {
      initializeObserver()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [visibleCount])

  return (
    <>
      <Navbar />
      <main className="services-page bg-hero-light min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-hero-light mt-[6rem] fade-on-scroll">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <nav className="text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-hero-text-dark/60 hover:text-hero-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-hero-text-dark/40">/</li>
                <li>
                  <Link href="/services" className="text-hero-accent font-semibold">
                    Services
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="services-hero bg-hero-light py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Images */}
              <div className="grid grid-cols-2 gap-4 fade-on-scroll">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={bridal1}
                    alt="Professional beauty services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={hair1}
                    alt="Beauty treatments at home"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Right: Text Content */}
              <div className="space-y-4 fade-on-scroll">
                <h1 className="services-page-title text-hero-text-dark">
                  The Place Of <span className="text-hero-accent">Beauty</span>
                </h1>
                <p className="services-page-description text-hero-text-dark/80">
                  Explore our beauty services, choose the one you like and follow the link to book. We'll be glad to serve you at your home with premium quality treatments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        <section className="services-categories py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {categories.map((category) => {
              const categoryServices = services.filter(s => s.category === category)
              const visibleServices = categoryServices.slice(0, visibleCount[category] || 6)
              const hasMore = categoryServices.length > (visibleCount[category] || 6)
              
              return (
                <div key={category} className="mb-16 lg:mb-20">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="services-category-title text-hero-text-dark opacity-100">
                      {category}
                    </h2>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {visibleServices.map((service) => (
                      <div key={service.id} className="service-card-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 fade-on-scroll flex flex-col h-full">
                        {/* Service Image */}
                        <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>

                        {/* Service Info */}
                        <div className="p-5 lg:p-6 flex flex-col flex-grow">
                          <h3 className="service-card-item-title mb-2 line-clamp-2 min-h-[3rem]">
                            {service.title}
                          </h3>
                          <p className="service-card-item-price font-semibold text-lg mb-4">
                            {service.price}
                          </p>
                          <Link
                            href={`/services/${service.id}`}
                            className="service-book-button inline-flex items-center gap-2 text-[#2d2d2d] hover:text-hero-accent transition-colors duration-200 font-medium mt-auto"
                          >
                            Book Now
                            <svg 
                              className="w-4 h-4 text-hero-accent" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Show More Button */}
                  {hasMore && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => handleShowMore(category, categoryServices.length)}
                        className="services-explore-button inline-flex items-center gap-2 px-6 py-3 bg-hero-text-dark text-white rounded-lg hover:bg-[#1a1a1a] transition-all duration-300 font-medium"
                      >
                        Show More ({categoryServices.length - (visibleCount[category] || 6)} more)
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollAnimationScript />
    </>
  )
}

export default ServicesPage
