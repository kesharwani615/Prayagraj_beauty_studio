'use client'

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


  return (
    <section className="services-section bg-hero-light py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 fade-on-scroll">
          <h2 className="services-title text-hero-text-dark mb-4">
            Our Services
          </h2>
          <p className="services-subtitle text-hero-text-dark/80">
            Premium beauty treatments for all ages - We come to your home!
          </p>
        </div>

        {/* Services Carousel */}
        <div className="services-carousel-wrapper mb-12 relative fade-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.id} className="pl-2 sm:pl-3 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="service-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                    {/* Service Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Service Info */}
                    <div className="p-4 lg:p-6 fade-in-on-load">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="services-arrow-prev-custom" />
            <CarouselNext className="services-arrow-next-custom" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center fade-on-scroll">
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
