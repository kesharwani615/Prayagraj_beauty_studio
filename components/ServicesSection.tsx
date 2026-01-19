'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import { StaticImageData } from 'next/image'
import service1 from "@/public/images/image5.png"
import service2 from "@/public/images/image6.png"
import service3 from "@/public/images/image7.png"
import service4 from "@/public/images/image8.png"
import service5 from "@/public/images/image9.png"

interface Service {
  id: number
  title: string
  price: string
  image: string | StaticImageData
  hasOffer?: boolean
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Laser Facial Rejuvenation',
      price: '₹2,999',
      image: service1,
      hasOffer: true
    },
    {
      id: 2,
      title: 'Glow Peel Treatment',
      price: '₹1,999',
      image: service2,
    },
    {
      id: 3,
      title: 'Chemical Peeling',
      price: '₹1,799',
      image: service3,
    },
    {
      id: 4,
      title: 'Microneedling',
      price: '₹2,499',
      image: service4,
    },
    {
      id: 5,
      title: 'Microneedling with Botox',
      price: '₹4,999',
      image: service5,
    }
  ]

  // Custom arrow components
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="services-arrow services-arrow-prev"
      aria-label="Previous service"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M15 19l-7-7 7-7" 
        />
      </svg>
    </button>
  )

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="services-arrow services-arrow-next"
      aria-label="Next service"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </button>
  )

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <section className="services-section bg-hero-light py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 fade-in-on-load">
          <h2 className="services-title text-hero-text-dark mb-4">
            Our Services
          </h2>
          <p className="services-subtitle text-hero-text-dark/80">
            Premium beauty treatments for all ages - We come to your home!
          </p>
        </div>

        {/* Services Carousel */}
        <div className="services-carousel-wrapper mb-12">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-3">
                <div className="service-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Service Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Fallback */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Service Image</span>
                    </div> */}
                  </div>

                  {/* Service Info */}
                  <div className="p-4 lg:p-6 fade-in-on-load">
                    {/* Offer Badge */}
                    {/* {service.hasOffer && (
                      <div className="service-offer-badge mb-2">
                        Oferta
                      </div>
                    )} */}

                    {/* Service Title */}
                    <h3 className="service-card-title mb-3">
                      {service.title}
                    </h3>

                    {/* Service Price */}
                    <div className="service-price font-semibold">
                      {service.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="services-cta-button inline-block fade-in-on-load"
            aria-label="View all services"
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
