'use client'

import { useEffect, useState } from 'react'

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loader once page is fully loaded
    const handleLoad = () => {
      // Small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300"
      style={{ 
        backgroundColor: 'var(--hero-light-bg)',
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? 'auto' : 'none'
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo/Spinner */}
        <div className="relative">
          {/* Spinning circle */}
          <div 
            className="w-16 h-16 border-4 rounded-full animate-spin"
            style={{
              borderColor: 'rgba(212, 175, 55, 0.2)',
              borderTopColor: 'var(--hero-accent)'
            }}
          ></div>
          {/* Center logo or text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: 'var(--hero-accent)' }}
            ></div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <p className="font-semibold text-lg tracking-wide" style={{ color: 'var(--hero-text-dark)', fontFamily: 'var(--font-montserrat), sans-serif' }}>
            Prayagraj Beauty Studio
          </p>
          <p className="text-sm mt-1" style={{ color: 'rgba(45, 45, 45, 0.6)', fontFamily: 'var(--font-montserrat), sans-serif' }}>
            Loading...
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageLoader
