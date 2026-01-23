import React from 'react'
import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { allServices, type Service } from '../data/services'
import service1 from "@/public/images/facial1.webp"
import service2 from "@/public/images/facial2.webp"
import service3 from "@/public/images/facial3.webp"
import service4 from "@/public/images/facial4.webp"
import service5 from "@/public/images/facial5.webp"
import service6 from "@/public/images/image7.webp"
import service7 from "@/public/images/threading1.webp"
import service8 from "@/public/images/makeup3.webp"
import service9 from "@/public/images/makeup12.jpg"

interface ServiceDetail {
  id: string
  title: string
  price: string
  image: any
  category: string
  description: string
  duration: string
  benefits: string[]
  process: string[]
  whatToExpect: string
}

const serviceDetails: ServiceDetail[] = [
  {
    id: '1',
    title: 'Classic facial',
    price: '₹499',
    image: service1,
    category: 'Facial',
    description: 'Classic facial treatment that provides deep cleansing and hydration for your skin. This traditional facial includes cleansing, exfoliation, extraction, massage, and mask application to leave your skin refreshed and glowing.',
    duration: '60-75 minutes',
    benefits: [
      'Deep cleansing and pore unclogging',
      'Improved skin hydration',
      'Relaxing facial massage',
      'Removes dead skin cells',
      'Enhances skin radiance',
      'Suitable for all skin types'
    ],
    process: [
      'Skin consultation and analysis',
      'Deep cleansing with suitable cleanser',
      'Gentle exfoliation',
      'Steam and extraction (if needed)',
      'Facial massage for relaxation',
      'Mask application and moisturization'
    ],
    whatToExpect: 'Your skin will feel clean, refreshed, and hydrated immediately after treatment. Regular sessions (monthly) help maintain healthy, glowing skin. Suitable for all skin types and ages.'
  },
  {
    id: '2',
    title: 'Deep cleansing/acne facial',
    price: '₹999',
    image: service2,
    category: 'Facial',
    description: 'Specialized facial treatment designed to deeply cleanse pores and treat acne-prone skin. This treatment includes thorough cleansing, extraction of blackheads and whiteheads, and acne-fighting ingredients to clear and prevent breakouts.',
    duration: '60-75 minutes',
    benefits: [
      'Deep pore cleansing',
      'Reduces acne and breakouts',
      'Removes blackheads and whiteheads',
      'Controls excess oil production',
      'Prevents future acne',
      'Improves skin clarity'
    ],
    process: [
      'Skin consultation and acne assessment',
      'Deep cleansing with acne-fighting cleanser',
      'Steam to open pores',
      'Gentle extraction of impurities',
      'Acne treatment mask application',
      'Oil-free moisturizer and SPF'
    ],
    whatToExpect: 'Immediate improvement in skin clarity. Some redness may occur after extraction but subsides quickly. Regular sessions (every 2-3 weeks) help control acne. Follow post-treatment care instructions for best results.'
  },
  {
    id: '3',
    title: 'Hydrating faical',
    price: '₹1,199',
    image: service3,
    category: 'Facial',
    description: 'Intensive hydrating facial treatment that replenishes moisture and restores skin\'s natural barrier. Perfect for dry, dehydrated skin, this treatment uses premium hydrating serums and masks to leave your skin plump, soft, and glowing.',
    duration: '60-75 minutes',
    benefits: [
      'Deep hydration and moisture retention',
      'Restores skin\'s natural barrier',
      'Reduces dryness and flakiness',
      'Improves skin elasticity',
      'Smooths fine lines from dehydration',
      'Leaves skin plump and radiant'
    ],
    process: [
      'Skin consultation and hydration assessment',
      'Gentle cleansing',
      'Hydrating serum application',
      'Facial massage with hydrating products',
      'Intensive hydrating mask',
      'Moisturizer and protective barrier'
    ],
    whatToExpect: 'Immediate improvement in skin hydration and softness. Your skin will feel plump and smooth. Best results with regular monthly sessions. Perfect for dry or dehydrated skin types.'
  },
  {
    id: '4',
    title: 'Anti-aging faical',
    price: '₹1,499',
    image: service4,
    category: 'Facial',
    description: 'Professional anti-aging facial treatment designed to combat signs of aging. This comprehensive treatment targets fine lines, wrinkles, and loss of elasticity to restore youthful, radiant skin.',
    duration: '60-75 minutes',
    benefits: [
      'Reduces fine lines and wrinkles',
      'Improves skin elasticity and firmness',
      'Minimizes age spots and pigmentation',
      'Tightens loose skin',
      'Boosts collagen production',
      'Restores youthful glow'
    ],
    process: [
      'Skin consultation and analysis',
      'Deep cleansing and exfoliation',
      'Anti-aging serum application',
      'Facial massage and treatment',
      'Hydrating mask application',
      'Moisturizer and SPF application'
    ],
    whatToExpect: 'Your skin will feel smoother and more hydrated immediately. Results improve with regular sessions. Recommended 4-6 sessions for optimal anti-aging benefits. Suitable for all skin types.'
  },
  {
    id: '5',
    title: 'Brightening/radiance faical',
    price: '₹1,799',
    image: service5,
    category: 'Facial',
    description: 'Professional brightening facial treatment that targets dullness, dark spots, and uneven skin tone. This treatment uses advanced brightening agents to reveal radiant, glowing skin with improved clarity and luminosity.',
    duration: '60-75 minutes',
    benefits: [
      'Brightens and evens skin tone',
      'Reduces dark spots and hyperpigmentation',
      'Improves skin radiance and glow',
      'Minimizes dullness',
      'Enhances skin clarity',
      'Suitable for all skin types'
    ],
    process: [
      'Skin consultation and analysis',
      'Deep cleansing and exfoliation',
      'Brightening serum application',
      'Facial massage and treatment',
      'Brightening mask application',
      'Moisturizer and SPF application'
    ],
    whatToExpect: 'Immediate glow and radiance after treatment. Skin will appear brighter and more even-toned. Results improve with regular sessions. Recommended 4-6 sessions for optimal brightening. Use SPF daily to maintain results.'
  },
  {
    id: '10',
    title: 'Calming/sensitive skin faical',
    price: '₹2,499',
    image: service6,
    category: 'Facial',
    description: 'Gentle facial treatment specially designed for sensitive and reactive skin. This calming treatment soothes irritation, reduces redness, and provides gentle care without causing any discomfort.',
    duration: '60-75 minutes',
    benefits: [
      'Soothes sensitive and irritated skin',
      'Reduces redness and inflammation',
      'Gentle and non-irritating',
      'Restores skin barrier',
      'Provides calming relief',
      'Suitable for sensitive skin types'
    ],
    process: [
      'Skin consultation and sensitivity assessment',
      'Gentle cleansing with mild products',
      'Calming serum application',
      'Gentle facial massage',
      'Soothing mask application',
      'Moisturizer and protective barrier'
    ],
    whatToExpect: 'Immediate soothing and calming effect on your skin. Redness and irritation will be reduced. Perfect for sensitive, reactive, or rosacea-prone skin. Regular sessions help maintain skin calmness.'
  },
  {
    id: '7',
    title: 'Eyebrow Lamination',
    price: '₹29',
    image: service7,
    category: 'Hair Removal',
    description: 'Professional eyebrow lamination service that shapes and sets your eyebrows in place. This treatment gives you perfectly groomed, fuller-looking eyebrows that last for weeks.',
    duration: '45 minutes',
    benefits: [
      'Perfectly shaped eyebrows',
      'Fuller, thicker appearance',
      'Long-lasting results (4-6 weeks)',
      'Low maintenance',
      'Suitable for all eyebrow types',
      'Instant transformation'
    ],
    process: [
      'Consultation on desired shape',
      'Cleansing and preparation',
      'Application of lifting solution',
      'Setting and shaping',
      'Neutralizing solution',
      'Final styling and tinting (optional)'
    ],
    whatToExpect: 'Immediate results with perfectly shaped eyebrows. Avoid getting eyebrows wet for 24 hours. Results last 4-6 weeks. Regular maintenance recommended every 4-6 weeks.'
  },
  {
    id: '8',
    title: 'Bridal Makeup',
    price: '₹3,999',
    image: service8,
    category: 'Makeup Services',
    description: 'Complete bridal makeup service for your special day. Our professional makeup artists create a stunning, long-lasting look that photographs beautifully and stays perfect throughout your celebration.',
    duration: '2-3 hours',
    benefits: [
      'Professional bridal look',
      'Long-lasting makeup',
      'Photography-ready',
      'Trial session available',
      'Customized to your style',
      'Touch-up kit included'
    ],
    process: [
      'Pre-wedding consultation',
      'Trial session (optional)',
      'Skin preparation and priming',
      'Foundation and concealer',
      'Eye makeup and contouring',
      'Lip color and final touches',
      'Setting spray application'
    ],
    whatToExpect: 'Beautiful, camera-ready makeup that lasts all day. Trial session recommended 1-2 weeks before wedding. Touch-up kit provided for the day. Professional photography-friendly finish.'
  },
  {
    id: '9',
    title: 'Party Makeup',
    price: '₹1,999',
    image: service9,
    category: 'Makeup Services',
    description: 'Glamorous party makeup service for special occasions. Whether it\'s a birthday, anniversary, or any celebration, we create a stunning look that makes you stand out.',
    duration: '60-90 minutes',
    benefits: [
      'Glamorous party look',
      'Long-lasting makeup',
      'Customized to occasion',
      'Professional finish',
      'Suitable for all skin types',
      'Photography-ready'
    ],
    process: [
      'Consultation on desired look',
      'Skin preparation',
      'Base makeup application',
      'Eye makeup and highlighting',
      'Contouring and blush',
      'Lip color and setting'
    ],
    whatToExpect: 'Stunning makeup that lasts throughout your event. Customized look based on your preferences and occasion. Professional finish suitable for photos and videos.'
  }
]

interface PageProps {
  params: Promise<{
    id: string
  }>
}

// Helper function to generate default details for services without specific details
const generateDefaultDetails = (service: Service): ServiceDetail => {
  const categoryDefaults: Record<string, { duration: string; description: string; benefits: string[]; process: string[]; whatToExpect: string }> = {
    'Facial': {
      duration: '60-75 minutes',
      description: `Professional ${service.title.toLowerCase()} treatment designed to enhance your skin's health and appearance. Our expert beauticians bring salon-quality care directly to your home.`,
      benefits: [
        'Professional treatment at home',
        'Deep cleansing and nourishment',
        'Improved skin texture',
        'Relaxing experience',
        'Suitable for all skin types',
        'Expert care and attention'
      ],
      process: [
        'Initial consultation',
        'Skin analysis',
        'Treatment application',
        'Relaxation and care',
        'Post-treatment guidance',
        'Follow-up recommendations'
      ],
      whatToExpect: 'Your skin will feel refreshed and rejuvenated after treatment. Results improve with regular sessions. Our professional team ensures a comfortable and effective experience.'
    },
    'Hair Removal': {
      duration: '30-60 minutes',
      description: `Professional ${service.title.toLowerCase()} service for smooth, hair-free skin. Our expert technicians use premium products and techniques for effective hair removal.`,
      benefits: [
        'Smooth, hair-free skin',
        'Professional technique',
        'Premium products used',
        'Long-lasting results',
        'Comfortable experience',
        'Expert care'
      ],
      process: [
        'Consultation and preparation',
        'Cleansing the area',
        'Application of product',
        'Hair removal process',
        'Soothing treatment',
        'Aftercare instructions'
      ],
      whatToExpect: 'Smooth, hair-free skin immediately after treatment. Some redness may occur but subsides quickly. Results last for several weeks. Regular sessions recommended for best results.'
    },
    'Hair Cut & Hair Care': {
      duration: '45-90 minutes',
      description: `Professional ${service.title.toLowerCase()} service delivered to your home. Our skilled hairstylists provide expert cuts and styling for your convenience.`,
      benefits: [
        'Expert hairstyling',
        'Professional cuts',
        'Convenient home service',
        'Personalized styling',
        'Quality products used',
        'Satisfaction guaranteed'
      ],
      process: [
        'Consultation on desired style',
        'Hair wash and preparation',
        'Cutting and styling',
        'Blow dry and finishing',
        'Final touches',
        'Styling tips and care'
      ],
      whatToExpect: 'Fresh, styled hair that looks salon-perfect. Our professional stylists ensure you get the look you want. Convenient home service saves you time and effort.'
    },
    'Makeup': {
      duration: '60-120 minutes',
      description: `Professional ${service.title.toLowerCase()} service for your special occasion. Our makeup artists create stunning looks that last all day and photograph beautifully.`,
      benefits: [
        'Professional makeup application',
        'Long-lasting makeup',
        'Photography-ready finish',
        'Customized to your style',
        'Premium products used',
        'Expert artistry'
      ],
      process: [
        'Consultation on desired look',
        'Skin preparation',
        'Base makeup application',
        'Eye makeup and contouring',
        'Lip color and finishing',
        'Setting and touch-up kit'
      ],
      whatToExpect: 'Beautiful, camera-ready makeup that lasts throughout your event. Our professional artists ensure you look stunning. Touch-up kit provided for the day.'
    },
    'Manicure & Pedicure': {
      duration: '60-90 minutes',
      description: `Professional ${service.title.toLowerCase()} service for well-groomed hands and feet. Our technicians provide expert nail care and pampering.`,
      benefits: [
        'Well-groomed nails',
        'Relaxing experience',
        'Professional nail care',
        'Premium products used',
        'Long-lasting results',
        'Expert technique'
      ],
      process: [
        'Consultation and nail assessment',
        'Cleansing and preparation',
        'Cutting and shaping',
        'Cuticle care',
        'Polish application',
        'Finishing and care tips'
      ],
      whatToExpect: 'Beautiful, well-groomed nails that look salon-perfect. Your hands and feet will feel pampered and cared for. Results last for weeks with proper care.'
    },
    'Mehndi': {
      duration: '60-180 minutes',
      description: `Professional ${service.title.toLowerCase()} service for beautiful henna designs. Our skilled artists create intricate patterns that last for weeks.`,
      benefits: [
        'Beautiful henna designs',
        'Traditional and modern patterns',
        'Long-lasting color',
        'Expert artistry',
        'Customized designs',
        'Professional application'
      ],
      process: [
        'Consultation on design',
        'Preparation of henna',
        'Design application',
        'Drying and setting',
        'Removal and care',
        'Aftercare instructions'
      ],
      whatToExpect: 'Stunning henna designs that develop into rich, dark color over 24-48 hours. Designs last 1-3 weeks depending on care. Our artists ensure beautiful, intricate patterns.'
    }
  }

  const defaults = categoryDefaults[service.category] || categoryDefaults['Facial']

  return {
    id: service.id,
    title: service.title,
    price: service.price,
    image: service.image,
    category: service.category,
    description: defaults.description,
    duration: defaults.duration,
    benefits: defaults.benefits,
    process: defaults.process,
    whatToExpect: defaults.whatToExpect
  }
}

const ServiceDetailPage = async ({ params }: PageProps) => {
  // Await params in Next.js 16+ App Router
  const { id } = await params
  
  // First, try to find service in the listing
  const baseService = allServices.find(s => s.id === id)
  
  if (!baseService) {
    notFound()
  }

  // Try to find detailed info, otherwise generate defaults
  const detailedService = serviceDetails.find(s => s.id === id)
  const service = detailedService || generateDefaultDetails(baseService)

  return (
    <>
      <Navbar />
      <main className="service-detail-page bg-hero-light min-h-screen">
        {/* Breadcrumb with Back Button */}
        <div className="bg-hero-light border-b mt-20 border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Back Button */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-2 text-[#2d2d2d] hover:text-hero-accent transition-all duration-200 font-semibold rounded-lg hover:bg-white/80 border border-transparent hover:border-gray-200 shadow-sm"
                aria-label="Back to services"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Back to Services</span>
                <span className="sm:hidden">Back</span>
              </Link>

              {/* Breadcrumb */}
              <nav className="text-sm hidden md:block" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  <li>
                    <Link href="/" className="text-hero-text-dark/60 hover:text-hero-accent transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="text-hero-text-dark/40">/</li>
                  <li>
                    <Link href="/services" className="text-hero-text-dark/60 hover:text-hero-accent transition-colors">
                      Services
                    </Link>
                  </li>
                  <li className="text-hero-text-dark/40">/</li>
                  <li className="text-hero-accent font-semibold">{service.title}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        {/* Service Detail Content */}
        <section className="service-detail-content py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left: Image */}
              <div className="service-detail-image">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                  <LazyImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Details */}
              <div className="service-detail-info space-y-6">
                <div>
                  <span className="service-detail-category text-hero-accent font-semibold text-sm uppercase tracking-wider">
                    {service.category}
                  </span>
                  <h1 className="service-detail-title text-hero-text-dark mt-2 mb-4">
                    {service.title}
                  </h1>
                  <p className="service-detail-price text-hero-accent font-bold text-3xl mb-6">
                    {service.price}
                  </p>
                </div>

                <div className="service-detail-description">
                  <p className="text-hero-text-dark/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="service-detail-duration bg-white p-4 rounded-lg">
                  <p className="text-black">
                    <span className="font-semibold">Duration:</span> {service.duration}
                  </p>
                </div>

                {/* Book Now Button */}
                <Link
                  href="/contact"
                  className="service-detail-book-button inline-flex items-center gap-2 px-8 py-4 bg-hero-text-dark text-white rounded-lg font-semibold hover:bg-hero-text-dark/90 transition-all duration-300 hover:transform hover:translateY(-2px) hover:shadow-lg"
                >
                  Book Appointment
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 lg:mt-16 grid md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Benefits */}
              <div className="service-detail-section">
                <h2 className="service-detail-section-title text-hero-text-dark mb-4">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg 
                        className="w-5 h-5 text-hero-accent mt-0.5 shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-hero-text-dark/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="service-detail-section">
                <h2 className="service-detail-section-title text-hero-text-dark mb-4">
                  Treatment Process
                </h2>
                <ol className="space-y-3">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-hero-accent text-white text-sm font-semibold shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-hero-text-dark/80">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* What to Expect */}
            <div className="mt-12 lg:mt-16 service-detail-section">
              <h2 className="service-detail-section-title text-hero-text-dark mb-4">
                What to Expect
              </h2>
              <div className="bg-white p-6 lg:p-8 rounded-lg">
                <p className="text-black leading-relaxed">
                  {service.whatToExpect}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ServiceDetailPage
