import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import service1 from "@/public/images/image5.webp"
import service2 from "@/public/images/image6.webp"
import service3 from "@/public/images/image7.webp"
import service4 from "@/public/images/image8.webp"
import service5 from "@/public/images/image9.webp"
import service6 from "@/public/images/image3.webp"
import service7 from "@/public/images/image4.webp"
import service8 from "@/public/images/image-1.webp"
import service9 from "@/public/images/image-2.webp"

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
    title: 'Laser Facial Rejuvenation',
    price: '₹2,999',
    image: service1,
    category: 'Facial Treatments',
    description: 'Experience advanced laser technology for skin rejuvenation. This treatment helps reduce fine lines, wrinkles, age spots, and improves overall skin texture. Our expert technicians bring professional-grade equipment to your home for a comfortable and effective treatment.',
    duration: '60-90 minutes',
    benefits: [
      'Reduces fine lines and wrinkles',
      'Improves skin texture and tone',
      'Minimizes age spots and pigmentation',
      'Stimulates collagen production',
      'Tightens and firms the skin',
      'Safe and effective for all skin types'
    ],
    process: [
      'Initial consultation and skin analysis',
      'Cleansing and preparation of the treatment area',
      'Application of protective gel',
      'Laser treatment session',
      'Post-treatment care and moisturization',
      'Follow-up recommendations'
    ],
    whatToExpect: 'You may experience slight redness immediately after treatment, which typically subsides within a few hours. Results are visible within 2-3 weeks, with optimal results after 3-4 sessions. The treatment is virtually painless with minimal downtime.'
  },
  {
    id: '2',
    title: 'Glow Peel Treatment',
    price: '₹1,999',
    image: service2,
    category: 'Facial Treatments',
    description: 'Achieve radiant, glowing skin with our professional glow peel treatment. This gentle yet effective chemical peel removes dead skin cells, unclogs pores, and reveals brighter, smoother skin underneath.',
    duration: '45-60 minutes',
    benefits: [
      'Brightens and evens skin tone',
      'Reduces dark spots and hyperpigmentation',
      'Unclogs pores and prevents acne',
      'Improves skin texture',
      'Stimulates cell renewal',
      'Gives instant glow'
    ],
    process: [
      'Skin consultation and analysis',
      'Deep cleansing of the face',
      'Application of glow peel solution',
      'Neutralization and removal',
      'Hydrating mask application',
      'Moisturizer and SPF application'
    ],
    whatToExpect: 'Your skin will feel smoother immediately after treatment. You may experience slight tingling during the process. Mild redness may occur but fades quickly. Results are visible within 3-5 days with a noticeable glow.'
  },
  {
    id: '3',
    title: 'Chemical Peeling',
    price: '₹1,799',
    image: service3,
    category: 'Facial Treatments',
    description: 'Professional chemical peeling treatment that exfoliates the skin using safe chemical solutions. This treatment helps reduce acne scars, fine lines, and improves overall skin appearance.',
    duration: '45-60 minutes',
    benefits: [
      'Reduces acne scars and marks',
      'Minimizes fine lines and wrinkles',
      'Improves skin texture',
      'Reduces pigmentation',
      'Unclogs pores',
      'Promotes even skin tone'
    ],
    process: [
      'Pre-treatment skin assessment',
      'Cleansing and degreasing',
      'Application of chemical peel',
      'Monitoring and neutralization',
      'Cooling and soothing treatment',
      'Post-care instructions'
    ],
    whatToExpect: 'Mild peeling may occur 2-3 days after treatment. Your skin will be more sensitive to sun, so SPF is essential. Results improve with each session. Typically 3-5 sessions recommended for best results.'
  },
  {
    id: '4',
    title: 'Microneedling',
    price: '₹2,499',
    image: service4,
    category: 'Facial Treatments',
    description: 'Advanced microneedling treatment that creates micro-injuries to stimulate natural collagen production. This treatment helps reduce scars, fine lines, and improves skin elasticity.',
    duration: '60-75 minutes',
    benefits: [
      'Reduces acne scars and stretch marks',
      'Improves skin elasticity',
      'Minimizes fine lines and wrinkles',
      'Tightens loose skin',
      'Improves skin texture',
      'Stimulates collagen production'
    ],
    process: [
      'Skin preparation and numbing (if needed)',
      'Microneedling device application',
      'Serum infusion',
      'Cooling and soothing',
      'Protective barrier application',
      'Post-treatment care guidance'
    ],
    whatToExpect: 'Mild redness and sensitivity for 24-48 hours. Your skin may feel tight. Avoid sun exposure and use gentle skincare. Results become visible after 2-3 weeks. Multiple sessions recommended for optimal results.'
  },
  {
    id: '5',
    title: 'Microneedling with Botox',
    price: '₹4,999',
    image: service5,
    category: 'Facial Treatments',
    description: 'Combined treatment of microneedling with Botox for enhanced results. This advanced procedure addresses both texture and fine lines, providing comprehensive skin rejuvenation.',
    duration: '75-90 minutes',
    benefits: [
      'Reduces fine lines and wrinkles',
      'Improves skin texture',
      'Tightens and firms skin',
      'Reduces pore size',
      'Stimulates collagen production',
      'Long-lasting results'
    ],
    process: [
      'Consultation and skin analysis',
      'Cleansing and preparation',
      'Botox injection (if applicable)',
      'Microneedling treatment',
      'Serum application',
      'Post-treatment care'
    ],
    whatToExpect: 'Combined benefits of both treatments. Minimal downtime. Results visible within 1-2 weeks. Botox effects last 3-4 months. Microneedling benefits continue to improve over time.'
  },
  {
    id: '6',
    title: 'Permanent Hair Removal - Full Body',
    price: '₹4,999',
    image: service6,
    category: 'Hair Removal',
    description: 'Professional laser hair removal treatment for full body. Our advanced laser technology targets hair follicles to provide long-lasting hair reduction. Safe and effective for all skin types.',
    duration: '90-120 minutes',
    benefits: [
      'Permanent hair reduction',
      'Smooth, hair-free skin',
      'No more shaving or waxing',
      'Suitable for all body areas',
      'Safe for all skin types',
      'Long-lasting results'
    ],
    process: [
      'Consultation and patch test',
      'Cleansing the treatment area',
      'Application of cooling gel',
      'Laser treatment session',
      'Post-treatment soothing',
      'Aftercare instructions'
    ],
    whatToExpect: 'Mild redness and sensitivity immediately after treatment. Hair will shed naturally over 1-2 weeks. Multiple sessions (6-8) required for permanent results. Sessions spaced 4-6 weeks apart.'
  },
  {
    id: '7',
    title: 'Eyebrow Lamination',
    price: '₹999',
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
  params: {
    id: string
  }
}

const ServiceDetailPage = ({ params }: PageProps) => {
  const service = serviceDetails.find(s => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="service-detail-page bg-hero-light min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-hero-light border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm" aria-label="Breadcrumb">
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

        {/* Service Detail Content */}
        <section className="service-detail-content py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left: Image */}
              <div className="service-detail-image">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                  <Image
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
                  <p className="text-hero-text-dark">
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
                <p className="text-hero-text-dark/80 leading-relaxed">
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
