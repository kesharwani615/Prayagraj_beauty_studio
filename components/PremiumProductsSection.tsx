import Link from 'next/link'
import Image from 'next/image'
import facialTreatment1 from "@/public/images/pexels4.jpg"
import facialTreatment2 from "@/public/images/pexels1.jpg"

const PremiumProductsSection = () => {
  return (
    <section className="premium-products-section relative">
      {/* Light Beige Top Strip */}
      <div className="premium-top-strip h-2 lg:h-3 bg-hero-light"></div>

      {/* Main Content Section */}
      <div className="premium-main-content bg-hero-dark py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left: Large Vertical Image */}
            <div className="premium-image-left relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] lg:aspect-[2/3] rounded-lg overflow-hidden fade-on-scroll">
                <Image
                  src={facialTreatment2}
                  alt="Professional facial treatment at home - Beauty Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Fallback placeholder */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-white/40 text-sm">Treatment Image</span>
                </div> */}
              </div>
            </div>

            {/* Right: Text Content and Bottom Image */}
            <div className="premium-content-right order-1 lg:order-2 space-y-8 fade-on-scroll">
              
              {/* Upper Right: Text Content */}
              <div className="premium-text-content space-y-6">
                <h2 className="premium-headline text-white">
                  Premium Beauty Products & Professional Skincare Treatments
                </h2>
                
                <p className="premium-description text-white/90">
                  Experience luxury beauty care combined with quality and science. We bring exceptional professional skincare products and beauty treatments right to your doorstep. No need to step out - we come to you!
                </p>

                {/* CTA Button */}
                <Link
                  href="/book-appointment"
                  className="premium-cta-button inline-flex items-center gap-3 fade-on-scroll"
                  aria-label="Book Appointment"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <span>BOOK APPOINTMENT</span>
                </Link>
              </div>

              {/* Bottom Right: Horizontal Image */}
              <div className="premium-image-bottom relative fade-on-scroll">
                <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-lg overflow-hidden">
                  <Image
                    src={facialTreatment1}
                    alt="Facial mask treatment at home - Professional beauty services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Fallback placeholder */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-white/40 text-sm">Mask Treatment Image</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        {/* Star/Floral in bottom left */}
        <div className="absolute bottom-0 left-0 w-24 h-24 premium-decorative-star opacity-60" style={{ perspective: '500px' }} aria-hidden="true">
          <svg 
            className="w-full h-full text-[#ffbd08] rotate-earth-3d" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>

        {/* Dashed Arc in bottom right */}
        <div className="absolute bottom-8 right-8 w-32 h-32 premium-decorative-arc opacity-40" aria-hidden="true">
          <svg 
            className="w-full h-full text-white" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeDasharray="5,5"
            viewBox="0 0 200 200"
          >
            <path 
              d="M 100 150 Q 150 100 200 50" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Light Beige Bottom Strip */}
      <div className="premium-bottom-strip h-4 lg:h-6 bg-hero-light"></div>
    </section>
  )
}

export default PremiumProductsSection
