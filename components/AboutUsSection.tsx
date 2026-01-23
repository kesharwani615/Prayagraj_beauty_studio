'use client'

import React, { useState } from 'react'
import LazyImage from '@/components/LazyImage'
import woman1 from "@/public/images/female-model-wedding-bridal-makeup.webp"
import woman2 from "@/public/images/model-light-makeup-holding-spring-flowers.webp"

const AboutUsSection = () => {
  const [activeFeature, setActiveFeature] = useState('professional')
  
  const serviceFeatures = [
    { id: 'professional', name: 'Expert Professionals' },
    { id: 'quality', name: 'Premium Products' },
    { id: 'convenience', name: 'Home Service' },
    { id: 'trust', name: 'Trusted Service' },
  ]

  const serviceBenefits = [
    'Trained and certified beauty experts at your doorstep',
    'Only premium, tested beauty products used',
    'Save time - no need to travel to salons',
    'Personalized service tailored to your needs',
    'Hygienic and safe beauty treatments',
    'Flexible scheduling that fits your routine',
  ]

  return (
    <section id="about-us" className="about-us-section relative fade-on-scroll">
      {/* Top Section - About Us */}
      <div className="about-us-top bg-hero-dark py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            
            {/* Left Portrait */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="relative aspect-[2/3] max-w-[200px] mx-auto">
                <LazyImage
                  src={woman1}
                  alt="Professional beauty expert - Home beauty services"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 1024px) 0vw, 200px"
                />
              </div>
            </div>

            {/* Central Text Content */}
            <div className="lg:col-span-3 text-center space-y-6 fade-in-on-load relative">
              {/* Decorative Dots */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block" aria-hidden="true">
                <div className="flex flex-col gap-2">
                  <div className="w-1 h-1 bg-hero-light rounded-full opacity-40"></div>
                  <div className="w-1 h-1 bg-hero-light rounded-full opacity-40"></div>
                  <div className="w-1 h-1 bg-hero-light rounded-full opacity-40"></div>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block" aria-hidden="true">
                <div className="flex flex-col gap-2">
                  <div className="w-1 h-1 bg-hero-light rounded-full opacity-40"></div>
                  <div className="w-1 h-1 bg-hero-light rounded-full opacity-40"></div>
                  <div className="w-1 h-1 bg-hero-light rounded-full opacity-40"></div>
                </div>
              </div>

              {/* Subtitle */}
              <p className="about-us-subtitle text-hero-light text-sm lg:text-base uppercase tracking-wider">
                About Us
              </p>

              {/* Headline */}
              <h2 className="about-us-headline text-white">
                Expertise, combined with quality:<br />
                The essence of beauty.
              </h2>

              {/* Description */}
              <p className="about-us-description text-white/90 max-w-3xl mx-auto">
                We bring exceptional skin care and beauty products right to your doorstep. Our team of specialists in beauty and wellness provides innovative and precise services, ensuring an optimal level of treatment and care. Experience personalized beauty solutions in the comfort of your home, tailored to your unique needs.
              </p>
            </div>

            {/* Right Portrait */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="relative aspect-[2/3] max-w-[200px] mx-auto">
                <LazyImage
                  src={woman2}
                  alt="Beauty specialist providing home services"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 1024px) 0vw, 200px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Why Choose Us */}
      <div className="about-us-bottom bg-[#1a1a1a] py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 fade-on-scroll">
          
          {/* Main Title */}
          <h3 className="about-us-treatment-title text-white mb-8 lg:mb-12 fade-in-on-load">
            Why Choose Our Home Beauty Services?
          </h3>

          {/* Service Feature Tabs */}
          <div className="flex flex-wrap gap-3 lg:gap-4 mb-12 ">
            {serviceFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`treatment-tab px-4 lg:px-6 py-2 lg:py-3 rounded-lg transition-all duration-300 ${
                  activeFeature === feature.id
                    ? 'bg-hero-light text-hero-dark font-semibold'
                    : 'bg-transparent border border-white/20 text-white hover:border-white/40'
                }`}
                aria-label={`Select ${feature.name} feature`}
                aria-pressed={activeFeature === feature.id}
              >
                <span className="text-xs lg:text-sm whitespace-nowrap">{feature.name}</span>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left: Trust Building Description */}
            <div className="treatment-description fade-in-on-load">
              <h4 className="text-white text-xl lg:text-2xl font-semibold mb-4">
                Your Beauty, Our Commitment
              </h4>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-4">
                We understand that choosing a beauty service is about trust. That's why we bring salon-quality treatments directly to your home with certified professionals who care about your beauty and comfort. No more rushing to appointments or waiting in crowded salons.
              </p>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                Our team uses only premium, tested products and follows strict hygiene standards. Every service is personalized to match your skin type, preferences, and schedule. Experience the luxury of professional beauty care in the comfort and privacy of your own home.
              </p>
            </div>

            {/* Right: Benefits List */}
            <div className="treatment-effects fade-in-on-load">
              <h4 className="text-white text-xl lg:text-2xl font-semibold mb-6">
                What You Get:
              </h4>
              <ul className="space-y-3">
                {serviceBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-hero-light text-lg mt-1" aria-hidden="true">•</span>
                    <span className="text-white/90 text-sm lg:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Decorative Star */}
          <div className="absolute bottom-8 right-8 w-16 h-16 opacity-30 hidden lg:block" style={{ perspective: '500px' }} aria-hidden="true">
            <svg 
              className="w-full h-full text-[#ffbd08] rotate-earth-3d" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
