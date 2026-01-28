'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ScrollAnimationScript from "@/components/ScrollAnimationScript";

export default function BookAppointment() {
  const router = useRouter();

  return (
    <>
      <ScrollAnimationScript />
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center px-4 py-12 relative">
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
        >
          ← Back
        </button>
        <div className="max-w-lg w-full text-center fade-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Book Your Appointment
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We're excited to help you look and feel your best. Call us or message us on WhatsApp to schedule your visit and let us pamper you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919792615969"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-pulse shadow-lg hover:shadow-xl"
            >
              📞 Call Now: 97926 15969
            </a>
            <a
              href="https://wa.me/919792615969?text=Hi%20Prayagraj%20Beauty%20Studio%2C%20I%20want%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              💬 WhatsApp
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-8 leading-relaxed max-w-md mx-auto">
            If your call is not picked up, please don't worry. We may be busy assisting another client. Kindly try calling again after a few moments, and we'll be happy to assist you.
          </p>
        </div>
      </div>
    </>
  );
}