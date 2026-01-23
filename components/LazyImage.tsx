'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { StaticImageData } from 'next/image'

interface LazyImageProps extends Omit<ImageProps, 'onLoad' | 'onLoadingComplete' | 'onError'> {
  src: string | StaticImageData
  alt: string
  skeletonClassName?: string
}

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  skeletonClassName = '',
  ...props 
}: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className="relative w-full h-full">
      {/* Skeleton Loader */}
      {isLoading && !hasError && (
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse ${skeletonClassName}`}
          aria-hidden="true"
        >
          <div className="w-full h-full bg-gray-200/50"></div>
        </div>
      )}

      {/* Image */}
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoadingComplete={handleLoadingComplete}
          onError={handleError}
          loading="lazy"
          {...props}
        />
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Image not available</span>
        </div>
      )}
    </div>
  )
}

export default LazyImage
