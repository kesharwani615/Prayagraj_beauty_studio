import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import bridal1 from "@/public/images/bridal1.jpg"
import hair1 from "@/public/images/hairstyle1.jpg"
import service1 from "@/public/images/facial1.jpg"
import service2 from "@/public/images/facial2.jpg"
import service3 from "@/public/images/facial3.jpg"
import service4 from "@/public/images/facial4.jpg"
import service5 from "@/public/images/facial5.jpg"
import service6 from "@/public/images/image7.png"
import service7 from "@/public/images/eyebrow1.jpg"
import service8 from "@/public/images/hairremoval1.jpg"
import service9 from "@/public/images/image-2.png"
import ScrollAnimationScript from '@/components/ScrollAnimationScript'

interface Service {
  id: string
  title: string
  price: string
  image: any
  category: string
}

const services: Service[] = [
  // Facial Treatments
  { id: '1', title: 'Classic facial ', price: '₹499', image: service1, category: 'Facial' },
  { id: '2', title: 'Deep cleansing/acne facial', price: '₹999', image: service2, category: 'Facial' },
  { id: '3', title: 'Hydrating faical', price: '₹1,199', image: service3, category: 'Facial' },
  { id: '4', title: 'Anti-aging faical', price: '₹1,499', image: service4, category: 'Facial' },
  { id: '5', title: 'Brightening/radiance faical', price: '₹1,799', image: service5, category: 'Facial' },
  { id: '10', title: 'Calming/sensitive skin faical ', price: '₹2,499', image: service6, category: 'Facial' },
  
  // Hair Removal
  { id: '7', title: 'Eyebrow Lamination', price: '₹999', image: service7, category: 'Hair Removal' },
  { id: '6', title: 'Permanent Hair Removal - Full Body', price: '₹4,999', image: service8, category: 'Hair Removal' },
  
  // Makeup Services
  { id: '8', title: 'Bridal Makeup', price: '₹3,999', image: service8, category: 'Makeup Services' },
  { id: '9', title: 'Party Makeup', price: '₹1,999', image: service9, category: 'Makeup Services' },
]

const ServicesPage = () => {
  const categories = Array.from(new Set(services.map(s => s.category)))

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
              
              return (
                <div key={category} className="mb-16 lg:mb-20">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="services-category-title text-hero-text-dark">
                      {category}
                    </h2>
                    {/* <Link
                      href={`/services?category=${encodeURIComponent(category)}`}
                      className="services-explore-button hidden md:inline-block"
                    >
                      Explore all
                    </Link> */}
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {categoryServices.map((service) => (
                      <div key={service.id} className="service-card-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 fade-on-scroll">
                        {/* Service Image */}
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>

                        {/* Service Info */}
                        <div className="p-5 lg:p-6 fade-on-scroll">
                          <h3 className="service-card-item-title mb-2">
                            {service.title}
                          </h3>
                          <p className="service-card-item-price  font-semibold text-lg mb-4">
                            {service.price}
                          </p>
                          <Link
                            href={`/services/${service.id}`}
                            className="service-book-button inline-flex items-center gap-2 text-[#2d2d2d] hover:text-hero-accent transition-colors duration-200 font-medium"
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
