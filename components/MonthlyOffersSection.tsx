'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import { StaticImageData } from 'next/image'
import offer1 from "@/public/images/image5.png"
import offer2 from "@/public/images/image6.png"
import offer3 from "@/public/images/image7.png"

interface Offer {
  id: number
  title: string
  description?: string
  price: string
  image: string | StaticImageData
}

const MonthlyOffersSection = () => {
  const offers: Offer[] = [
    {
      id: 1,
      title: 'Eyebrow Lamination',
      price: '₹999',
      image: offer1,
    },
    {
      id: 2,
      title: 'Permanent Hair Removal – Smart Package',
      description: 'Underarms, Full Bikini, Full Legs',
      price: '₹4,999',
      image: offer2,
    },
    {
      id: 3,
      title: 'Progressive Permanent Hair Removal',
      description: 'Package: 3 Full Body Sessions + 6 Laser Hair Removal Sessions',
      price: '₹7,999',
      image: offer3,
    },
  ]

  // Custom arrow components
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="monthly-offers-arrow monthly-offers-arrow-prev"
      aria-label="Previous offer"
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
      className="monthly-offers-arrow monthly-offers-arrow-next"
      aria-label="Next offer"
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
    autoplay: true,
    autoplaySpeed: 4000,
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
    <section className="monthly-offers-section bg-hero-light py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 fade-in-on-load">
          <h2 className="monthly-offers-title text-hero-text-dark mb-4">
            Monthly Offers
          </h2>
          <p className="monthly-offers-subtitle text-hero-text-dark/80">
            Special promotions on our premium beauty services
          </p>
        </div>

        {/* Offers Carousel */}
        <div className="monthly-offers-carousel-wrapper mb-12">
          <Slider {...settings}>
            {offers.map((offer) => (
              <div key={offer.id} className="px-3">
                <div className="monthly-offer-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  {/* Offer Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Offer Info */}
                  <div className="p-5 lg:p-6">
                    {/* Offer Title */}
                    <h3 className="monthly-offer-title mb-2">
                      {offer.title}
                    </h3>

                    {/* Offer Description */}
                    {offer.description && (
                      <p className="monthly-offer-description mb-3">
                        {offer.description}
                      </p>
                    )}

                    {/* Offer Price */}
                    <div className="monthly-offer-price text-hero-accent font-semibold text-lg">
                      {offer.price} <span className="text-sm text-hero-text-dark/60 font-normal">| session</span>
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
            className="monthly-offers-cta-button inline-block fade-in-on-load"
            aria-label="View all services"
          >
            VIEW SERVICES PAGE
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MonthlyOffersSection
