'use client'

import Link from 'next/link'
import LazyImage from '@/components/LazyImage'
import { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// Import all service images
import service1 from "@/public/images/facial1.webp"
import service2 from "@/public/images/facial2.webp"
import service3 from "@/public/images/facial3.webp"
import service4 from "@/public/images/facial4.webp"
import service5 from "@/public/images/facial5.webp"
import service6 from "@/public/images/image7.webp"
import threading1 from "@/public/images/threading1.webp"
import wax1 from "@/public/images/wax1.webp"
import wax2 from "@/public/images/wax2.webp"
import wax3 from "@/public/images/wax3.webp"
import wax4 from "@/public/images/wax4.webp"
import wax5 from "@/public/images/wax5.webp"
import wax6 from "@/public/images/wax6.webp"
import wax7 from "@/public/images/fullbodywax1.webp"
import wax8 from "@/public/images/ricawax1.webp"
import wax9 from "@/public/images/chocalatewax.webp"
import wax10 from "@/public/images/bikini&hipwax.jpg"
import wax11 from "@/public/images/ricawax2.webp"
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
import makeup9 from "@/public/images/makeup9.jpg"
import makeup10 from "@/public/images/makeup10.jpg"
import makeup11 from "@/public/images/makeup11.jpg"
import makeup12 from "@/public/images/makeup12.jpg"
import makeup13 from "@/public/images/makeup13.jpg"
import manicure1 from "@/public/images/Manicure & Pedicure1.jpg"
import manicure2 from "@/public/images/Manicure & Pedicure2.jpg"
import manicure3 from "@/public/images/Manicure & Pedicure3.jpg"
import manicure4 from "@/public/images/Manicure & Pedicure4.jpg"
import manicure5 from "@/public/images/Manicure & Pedicure5.png"
import manicure6 from "@/public/images/Manicure & Pedicure6.avif"
import mehndi1 from "@/public/images/mehndi1.jpeg"
import mehndi2 from "@/public/images/mehndi2.jpeg"
import mehndi3 from "@/public/images/mehndi3.jpg"
import mehndi4 from "@/public/images/mehndi4.avif"
import mehndi5 from "@/public/images/mehndi5.jpeg"
import mehndi6 from "@/public/images/mehndi6.jpeg"
import mehndi7 from "@/public/images/mehndi7.jpeg"
import mehndi8 from "@/public/images/mehndi8.jpeg"
import mehndi9 from "@/public/images/mehndi9.jpg"
import mehndi10 from "@/public/images/mehndi10.avif"
import mehndi11 from "@/public/images/mehndi11.avif"
import mehndi12 from "@/public/images/mehndi12.avif"

interface Service {
  id: string
  title: string
  price: string
  image: string | StaticImageData
  category: string
}

// All services from all categories
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
  { id: '11', title: 'Full Body Wax - Sugar Wax', price: '₹999', image: wax7, category: 'Hair Removal' },
  { id: '12', title: 'Full Body Wax - Chocolate Wax', price: '₹1,499', image: wax9, category: 'Hair Removal' },
  { id: '13', title: 'Full Body Wax - Rica Wax', price: '₹1,999', image: wax11, category: 'Hair Removal' },
  { id: '14', title: 'Full Legs Wax - Sugar Wax', price: '₹399', image: wax1, category: 'Hair Removal' },
  { id: '15', title: 'Full Legs Wax - Chocolate Wax', price: '₹599', image: wax5, category: 'Hair Removal' },
  { id: '16', title: 'Full Legs Wax - Rica Wax', price: '₹699', image: wax6, category: 'Hair Removal' },
  { id: '17', title: 'Bikini & Hips Wax - Rica Wax', price: '₹1,299', image: wax8, category: 'Hair Removal' },
  { id: '18', title: 'Bikini & Hips Wax - Been Wax', price: '₹1,499', image: wax10, category: 'Hair Removal' },
  { id: '19', title: 'Face Wax', price: '₹499', image: wax4, category: 'Hair Removal' },
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
  
  // Manicure & Pedicure
  { id: '34', title: 'Basic Manicure', price: '₹299', image: manicure1, category: 'Manicure & Pedicure' },
  { id: '35', title: 'Clean-Up Manicure', price: '₹399', image: manicure3, category: 'Manicure & Pedicure' },
  { id: '36', title: 'Express Manicure', price: '₹499', image: manicure4, category: 'Manicure & Pedicure' },
  { id: '37', title: 'Basic Pedicure', price: '₹499', image: manicure2, category: 'Manicure & Pedicure' },
  { id: '38', title: 'Clean-Up Pedicure', price: '₹599', image: manicure6, category: 'Manicure & Pedicure' },
  { id: '39', title: 'Express Pedicure', price: '₹699', image: manicure5, category: 'Manicure & Pedicure' },
  
  // Mehndi
  { id: '40', title: 'Minimal / Floral Mehndi', price: '₹500', image: mehndi3, category: 'Mehndi' },
  { id: '41', title: 'Guest Mehndi', price: '₹500', image: mehndi9, category: 'Mehndi' },
  { id: '42', title: 'Engagement / Wedding Guest Mehndi', price: '₹500', image: mehndi11, category: 'Mehndi' },
  { id: '43', title: 'Arabic Mehndi (Per Hand)', price: '₹400', image: mehndi4, category: 'Mehndi' },
  { id: '45', title: 'Traditional Mehndi (Per Hand)', price: '₹1,000', image: mehndi1, category: 'Mehndi' },
  { id: '46', title: 'Arabic Bridal Mehndi', price: '₹3,000', image: mehndi10, category: 'Mehndi' },
  { id: '47', title: 'Full Hands (Front + Back)', price: '₹4,000', image: mehndi12, category: 'Mehndi' },
  { id: '48', title: 'Bridal Mehndi', price: '₹5,000', image: mehndi7, category: 'Mehndi' },
  { id: '49', title: 'Full Hands + Full Legs', price: '₹5,000', image: mehndi5, category: 'Mehndi' },
  { id: '50', title: 'Full Hands + Legs', price: '₹7,000', image: mehndi6, category: 'Mehndi' },
  { id: '51', title: 'Rajasthani / Traditional Bridal Mehndi', price: '₹7,000', image: mehndi8, category: 'Mehndi' },
  { id: '52', title: 'Premium Bridal Mehndi (Custom Design)', price: '₹9,999', image: mehndi2, category: 'Mehndi' },
]

// Helper function to get random services from each category
const getRandomServicesFromCategories = (services: Service[], servicesPerCategory: number = 2): Service[] => {
  // Group services by category
  const groupedByCategory: Record<string, Service[]> = {}
  services.forEach(service => {
    if (!groupedByCategory[service.category]) {
      groupedByCategory[service.category] = []
    }
    groupedByCategory[service.category].push(service)
  })

  // Get random services from each category
  const selectedServices: Service[] = []
  Object.keys(groupedByCategory).forEach(category => {
    const categoryServices = groupedByCategory[category]
    // Shuffle and take up to servicesPerCategory
    const shuffled = [...categoryServices].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, Math.min(servicesPerCategory, categoryServices.length))
    selectedServices.push(...selected)
  })

  // Shuffle the final array to mix categories
  return selectedServices.sort(() => Math.random() - 0.5)
}

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    // Get 2-3 random services from each category on component mount
    const randomServices = getRandomServicesFromCategories(allServices, 2)
    setServices(randomServices)
  }, [])


  return (
    <section className="services-section bg-hero-light py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 fade-on-scroll">
          <h2 className="services-title text-hero-text-dark mb-4">
            Our Services
          </h2>
          <p className="services-subtitle text-hero-text-dark">
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
                      <LazyImage
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
