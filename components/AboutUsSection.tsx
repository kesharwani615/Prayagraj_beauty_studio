'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import woman1 from "@/public/images/female-model-wedding-bridal-makeup.jpg"
import woman2 from "@/public/images/model-light-makeup-holding-spring-flowers.jpg"

const AboutUsSection = () => {
  const [activeTreatment, setActiveTreatment] = useState('classic-gold')
  
  const treatments = [
    { id: 'classic-gold', name: 'A Classic Gold' },
    { id: 'caviar-power', name: 'Caviar Power' },
    { id: 'hyaluron', name: 'X-Treme Hyaluron Infusion' },
    { id: 'clinical-care', name: 'Clinical Care' },
    { id: 'peeling-acid', name: 'Peeling Acid' },
  ]

  const treatmentEffects = [
    'Stimulates facial muscles',
    'Harmonizes energy flow',
    'Revitalizes, refreshes, regenerates',
    'Reduces visible expression lines',
    'Cell renewal',
    'Removes toxins',
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
                <Image
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
                <Image
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

      {/* Bottom Section - Treatments */}
      <div className="about-us-bottom bg-[#1a1a1a] py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 fade-on-scroll">
          
          {/* Main Title */}
          <h3 className="about-us-treatment-title text-white mb-8 lg:mb-12 fade-in-on-load">
            Innovative Cosmetic Treatments
          </h3>

          {/* Treatment Tabs */}
          <div className="flex flex-wrap gap-3 lg:gap-4 mb-12 ">
            {treatments.map((treatment) => (
              <button
                key={treatment.id}
                onClick={() => setActiveTreatment(treatment.id)}
                className={`treatment-tab px-4 lg:px-6 py-2 lg:py-3 rounded-lg transition-all duration-300 ${
                  activeTreatment === treatment.id
                    ? 'bg-hero-light text-hero-dark font-semibold'
                    : 'bg-transparent border border-white/20 text-white hover:border-white/40'
                }`}
                aria-label={`Select ${treatment.name} treatment`}
                aria-pressed={activeTreatment === treatment.id}
              >
                <span className="text-xs lg:text-sm whitespace-nowrap">{treatment.name}</span>
              </button>
            ))}
          </div>

          {/* Treatment Details */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left: Description */}
            <div className="treatment-description fade-in-on-load">
              <h4 className="text-white text-xl lg:text-2xl font-semibold mb-4">
                Vitamin A Benefits
              </h4>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                Vitamin A plays a crucial role in skin structure and function. It supports collagen formation, enhances enzymatic activity, and activates repair mechanisms, leading to remarkable results. Regular treatments with Vitamin A-based products help achieve fresh, elastic, and radiant skin that glows with health and vitality.
              </p>
            </div>

            {/* Right: Effects List */}
            <div className="treatment-effects fade-in-on-load">
              <h4 className="text-white text-xl lg:text-2xl font-semibold mb-6">
                Effects of Treatment:
              </h4>
              <ul className="space-y-3">
                {treatmentEffects.map((effect, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-hero-light text-lg mt-1" aria-hidden="true">•</span>
                    <span className="text-white/90 text-sm lg:text-base">{effect}</span>
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
