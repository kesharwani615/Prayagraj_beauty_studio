'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import offer1 from "@/public/images/image5.png"
import offer2 from "@/public/images/image6.png"
import offer3 from "@/public/images/image7.png"
import offer4 from "@/public/images/bridal1.jpg"
import offer5 from "@/public/images/image8.png"
import offer6 from "@/public/images/image9.png"
import offer7 from "@/public/images/image3.png"
import offer8 from "@/public/images/image4.png"

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
    {
      id: 4,
      title: 'Bridal Makeup Package',
      description: 'Flat 15% OFF',
      price: 'Special Offer',
      image: offer4,
    },
    {
      id: 5,
      title: 'HD / Airbrush Makeup',
      description: '₹1,000 OFF',
      price: 'Special Offer',
      image: offer5,
    },
    {
      id: 6,
      title: 'Makeup + Hairstyle Combo',
      description: 'Save ₹2,000',
      price: 'Special Offer',
      image: offer6,
    },
    {
      id: 7,
      title: 'Facial + Wax Combo',
      description: 'Flat 10% OFF',
      price: 'Special Offer',
      image: offer7,
    },
    {
      id: 8,
      title: 'Pre-Bridal Package',
      description: 'Save up to ₹3,000',
      price: 'Special Offer',
      image: offer8,
    },
  ]


  return (
    <section className="monthly-offers-section bg-hero-light py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fade-on-scroll" >
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 fade-in-on-load">
          <h2 className="monthly-offers-title text-hero-text-light! mb-4">
            Monthly Offers
          </h2>
          <p className="monthly-offers-subtitle text-hero-text-dark/80">
            Special promotions on our premium beauty services
          </p>
        </div>

        {/* Offers Carousel */}
        <div className="monthly-offers-carousel-wrapper mb-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
              {offers.map((offer) => (
                <CarouselItem key={offer.id} className="pl-2 sm:pl-3 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
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
                        {offer.price === 'Special Offer' ? (
                          <span className="text-hero-accent">{offer.description}</span>
                        ) : (
                          <>
                            {offer.price} <span className="text-sm text-hero-text-dark/60 font-normal">| session</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="monthly-offers-arrow-prev-custom lg:hidden" />
            <CarouselNext className="monthly-offers-arrow-next-custom lg:hidden" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center fade-on-scroll">
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