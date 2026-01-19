'use client'

import { useEffect } from 'react'
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PremiumProductsSection from "@/components/PremiumProductsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSection from "@/components/AboutUsSection";
import MonthlyOffersSection from "@/components/MonthlyOffersSection";
import Footer from "@/components/Footer";
// import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash === '#about-us') {
      setTimeout(() => {
        const element = document.getElementById('about-us')
        if (element) {
          const navbarHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navbarHeight
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [])

  return (
    <main>
      <Navbar/>
      <HeroSection />
      <PremiumProductsSection />
      <ServicesSection />
      <AboutUsSection />
      <MonthlyOffersSection />
      {/* <NewsletterSection /> */}
      <Footer />
    </main>
  );
}
