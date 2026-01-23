'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const PrivacyPolicyPage = () => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en')

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: January 2024',
      sections: [
        {
          title: 'Introduction',
          content: 'We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our home beauty services.'
        },
        {
          title: 'Information We Collect',
          content: 'We collect information that you provide directly to us, including your name, contact information, address, service preferences, and any other information you choose to provide when booking our services.'
        },
        {
          title: 'How We Use Your Information',
          content: 'We use the information we collect to provide, maintain, and improve our services, process your bookings, communicate with you about your appointments, send you service updates, and respond to your inquiries.'
        },
        {
          title: 'Information Sharing',
          content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only with our service providers who assist us in operating our business, conducting our services, or serving you, as long as those parties agree to keep this information confidential.'
        },
        {
          title: 'Data Security',
          content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.'
        },
        {
          title: 'Your Rights',
          content: 'You have the right to access, update, or delete your personal information at any time. You may also opt-out of receiving promotional communications from us by contacting us directly.'
        },
        {
          title: 'Cookies',
          content: 'We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, though this may affect the functionality of our website.'
        },
        {
          title: 'Changes to This Policy',
          content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.'
        },
        {
          title: 'Contact Us',
          content: 'If you have any questions about this Privacy Policy, please contact us through our contact page or email us directly.'
        }
      ]
    },
    hi: {
      title: 'गोपनीयता नीति',
      lastUpdated: 'अंतिम अपडेट: जनवरी 2024',
      sections: [
        {
          title: 'परिचय',
          content: 'हम आपकी गोपनीयता की सुरक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर जाते हैं और हमारी होम ब्यूटी सेवाओं का उपयोग करते हैं, तो हम आपकी जानकारी कैसे एकत्र, उपयोग, खुलासा और सुरक्षित करते हैं।'
        },
        {
          title: 'हम कौन सी जानकारी एकत्र करते हैं',
          content: 'हम वह जानकारी एकत्र करते हैं जो आप हमें सीधे प्रदान करते हैं, जिसमें आपका नाम, संपर्क जानकारी, पता, सेवा वरीयताएं, और कोई भी अन्य जानकारी शामिल है जो आप हमारी सेवाएं बुक करते समय प्रदान करना चुनते हैं।'
        },
        {
          title: 'हम आपकी जानकारी का उपयोग कैसे करते हैं',
          content: 'हम एकत्र की गई जानकारी का उपयोग अपनी सेवाएं प्रदान करने, बनाए रखने और सुधारने, आपकी बुकिंग को संसाधित करने, आपके अपॉइंटमेंट के बारे में आपसे संवाद करने, आपको सेवा अपडेट भेजने और आपकी पूछताछ का जवाब देने के लिए करते हैं।'
        },
        {
          title: 'जानकारी साझाकरण',
          content: 'हम आपकी व्यक्तिगत जानकारी को तीसरे पक्षों को बेचते, व्यापार या किराए पर नहीं देते हैं। हम आपकी जानकारी केवल अपने सेवा प्रदाताओं के साथ साझा कर सकते हैं जो हमारे व्यवसाय को संचालित करने, हमारी सेवाएं संचालित करने, या आपकी सेवा करने में हमारी सहायता करते हैं, जब तक कि वे पक्ष इस जानकारी को गोपनीय रखने के लिए सहमत हैं।'
        },
        {
          title: 'डेटा सुरक्षा',
          content: 'हम आपकी व्यक्तिगत जानकारी को अनधिकृत पहुंच, परिवर्तन, खुलासा या विनाश से बचाने के लिए उपयुक्त सुरक्षा उपाय लागू करते हैं। हालांकि, इंटरनेट पर प्रसारण का कोई भी तरीका 100% सुरक्षित नहीं है।'
        },
        {
          title: 'आपके अधिकार',
          content: 'आपको किसी भी समय अपनी व्यक्तिगत जानकारी तक पहुंचने, अपडेट करने या हटाने का अधिकार है। आप हमसे सीधे संपर्क करके हमारे प्रचार संचार प्राप्त करने से बाहर निकलने का भी विकल्प चुन सकते हैं।'
        },
        {
          title: 'कुकीज़',
          content: 'हम अपनी वेबसाइट पर आपके अनुभव को बढ़ाने के लिए कुकीज़ का उपयोग करते हैं। आप अपने ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ को अक्षम करना चुन सकते हैं, हालांकि इससे हमारी वेबसाइट की कार्यक्षमता प्रभावित हो सकती है।'
        },
        {
          title: 'इस नीति में परिवर्तन',
          content: 'हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। हम इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके और "अंतिम अपडेट" तिथि अपडेट करके आपको किसी भी परिवर्तन के बारे में सूचित करेंगे।'
        },
        {
          title: 'हमसे संपर्क करें',
          content: 'यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमारे संपर्क पृष्ठ के माध्यम से हमसे संपर्क करें या हमें सीधे ईमेल करें।'
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <>
      <Navbar />
      <main className="privacy-policy-page bg-hero-light min-h-screen">
        {/* Header */}
        <div className="bg-hero-light border-b mt-20 border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 text-[#2d2d2d] hover:text-hero-accent transition-all duration-200 font-semibold rounded-lg hover:bg-white/80 border border-transparent hover:border-gray-200 shadow-sm"
                aria-label="Back to home"
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
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </Link>

              {/* Language Toggle */}
              <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-[#2d2d2d]! hover:bg-gray-100'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    language === 'hi'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-[#2d2d2d] hover:bg-gray-100'
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-hero-text-dark mb-2">
              {currentContent.title}
            </h1>
            <p className="text-hero-text-dark/60 text-sm">
              {currentContent.lastUpdated}
            </p>
          </div>
        </div>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {currentContent.sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h2 className="text-2xl font-semibold text-[#2d2d2d] mb-4">
                    {section.title}
                  </h2>
                  <p className="text-[#2d2d2d]/80 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-12 text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-[#2d2d2d] mb-4">
                  {language === 'en' ? 'Have Questions?' : 'कोई प्रश्न हैं?'}
                </h2>
                <p className="text-[#2d2d2d]/80 mb-6">
                  {language === 'en'
                    ? 'If you have any questions about our Privacy Policy, please feel free to contact us.'
                    : 'यदि हमारी गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करने में संकोच न करें।'}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#2d2d2d] text-white rounded-lg font-semibold hover:bg-[#2d2d2d]/90 transition-all duration-300 hover:transform hover:translateY(-2px) hover:shadow-lg"
                >
                  {language === 'en' ? 'Contact Us' : 'हमसे संपर्क करें'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicyPage
