import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PremiumProductsSection from "@/components/PremiumProductsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSection from "@/components/AboutUsSection";
import MonthlyOffersSection from "@/components/MonthlyOffersSection";
import Footer from "@/components/Footer";
import ScrollAnimationScript from "@/components/ScrollAnimationScript";
// import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <>
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
      {/* Client-side script for scroll animations and hash navigation */}
      <ScrollAnimationScript />
    </>
  );
}
