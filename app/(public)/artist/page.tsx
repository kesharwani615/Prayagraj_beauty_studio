'use client';

import { useRouter } from 'next/navigation';
import ScrollAnimationScript from '@/components/ScrollAnimationScript';

const artists = [
  {
    name: "Amisha Kesharwani",
    image: "/images/artist5.jpg",
    bio: `Amisha is our Lead Makeup Artist with over 4 years of hands-on experience in bridal and special event makeup.
She has successfully completed 200+ makeup looks, working with brides, models, and clients for weddings, parties, and professional events. Amisha specializes in natural, elegant, and flawless makeup that enhances your natural features while ensuring long-lasting results. Her keen eye for detail and personalized approach make every client feel confident and camera-ready on their special day.`,
    certificates: ["Certified Makeup Artist - ABC Academy", "Advanced Bridal Makeup Course", "Color Theory Certification"],
    awardImages: ["/images/artist1.jpeg", "/images/artist4.jpg"],
  }
];

export default function Artist() {
  const router = useRouter();

  return (
    <>
      <ScrollAnimationScript />
      <div className="min-h-screen bg-linear-to-b from-pink-50 to-white py-12 px-4 relative">
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 z-10"
        >
          ← Back
        </button>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl mt-3 md:text-5xl font-bold text-gray-800 text-center mb-12 font-playfair fade-on-scroll">
            Meet Our Artists
          </h1>
          <div className="space-y-12">
            {artists.map((artist, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 fade-on-scroll ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-120 md:h-200 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">{artist.name}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{artist.bio}</p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Certificates</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {artist.certificates.map((cert, i) => (
                        <li key={i}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Award Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {artist.awardImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Award ${i + 1}`}
                          className="w-full h-72 sm:h-48 object-cover rounded-lg shadow-md"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => router.push('/book-appointment')}
                      className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
                    >
                      Book Appointment Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}