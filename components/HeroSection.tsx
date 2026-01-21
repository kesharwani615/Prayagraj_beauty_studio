"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import makeup1 from "@/public/images/now-word-bold-text-style.webp"
import makeup2 from "@/public/images/image-2.webp"
import makeup3 from "@/public/images/beautiful-woman.webp"
import group from "@/public/images/Group.webp"

const HeroSection = () => {
    const videos = ["/Video/video1.webm", "/Video/video2.webm", "/Video/video3.webm"]
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
        }, 7000) // Change video every 5 seconds

        return () => clearInterval(interval)
    }, [videos.length])

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load()
            videoRef.current.play().catch((error) => {
                console.log("Video autoplay failed:", error)
            })
        }
    }, [currentVideoIndex])

    return (
        <div className="hero-section relative overflow-hidden">
            {/* Dark Top Section */}
            <div className="relative hero-section-content min-h-screen py-12 lg:py-16 flex items-center fade-on-scroll">
                {/* Mobile/Tablet Background Video */}
                <video
                    ref={videoRef}
                    key={currentVideoIndex}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-40 block lg:hidden transition-opacity duration-1000"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={videos[currentVideoIndex]}
                />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 overflow-hidden">

                        {/* Left: Text Content */}
                        <div className="flex flex-col justify-center pt-15 space-y-10 lg:space-y-8 ">
                            <h1 className="text-white text-3xl lg:text-5xl font-bold">
                                Beauty Services<br/>
                                Delivered to<br/>
                                <span className="text-hero-accent">Your Home</span>
                            </h1>

                            <p className=" text-white/90 text-base lg:text-xl ">
                                Premium beauty treatments and skincare services at your doorstep. Experience luxury beauty care in the comfort of your home.
                            </p>

                           {/* Voucher Card */}
                           <Link 
                             href="/services"
                             className="bg-white/10 backdrop-blur-sm rounded-full 
  flex items-center gap-4 
  px-1 py-2
  h-25 lg:h-25
  min-w-80 max-w-md
  lg:w-25 lg:min-w-0 lg:max-w-none
  lg:hover:min-w-80 lg:hover:max-w-md
  voucher-expand
  overflow-hidden
  group
  cursor-pointer
  hover:shadow-lg
  transition-all duration-300
  hover:bg-white/15">
  {/* Icon Circle */}
  <div className="w-[6rem] h-[rem] flex items-center justify-center bg-white/20 rounded-full shrink-0 ">
    <Image 
      src={makeup1}
      alt="Gift"
      className="w-full h-full  object-contain rotate-slow rounded-full"
    />
  </div>
  
  {/* Text Content */}
  <div className="opacity-100 w-auto overflow-hidden 
    lg:opacity-0 lg:w-0
    lg:group-hover:opacity-100 
    lg:group-hover:w-auto 
    voucher-text-expand
    whitespace-nowrap">
    <h3 className="text-white font-bold text-base lg:text-lg">✨ Special Offer</h3>
    <p className="text-white/90 text-sm lg:text-base font-medium">Premium Beauty Services</p>
    <p className="text-hero-accent text-xs lg:text-sm font-semibold mt-1">Explore & Book Now →</p>
  </div>
</Link>
                        </div>

                        {/* Right: Decorative Area */}
                        {/* <div className="relative hidden lg:block">
                            <div className="hero-oval-angle relative right-[-3rem] top-[9rem] w-[30rem] h-[37rem] border-2 border-[#ecd8bd]"
                                style={
                                    {
                                     borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                                     boxShadow: "0 0 120px rgba(236,216,189,0.3),inset 0 0 60px rgba(236,216,189,0.2)"
                                    }
                            }>
                               
                                <Image src={makeup2}
                                    alt="Gift"
                                    className="absolute top-[12%] left-[12%] w-[40px] h-[40px] object-contain"/>
                            
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>

            {/* Light Bottom Section */}
            <div className="hero-light">
                {/* container mobile padding size padding appied on media query */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="w-full lg:w-1/2 flex justify-between py-3 fade-on-scroll">
                            <div className=" flex flex-col items-center justify-center gap-2 ">
                                <div className="h-[50px] w-[50px]">
                                <Image src={group}
                                alt="Premium Products"
                                className="w-full h-full object-contain"/>
                                </div>
                                <h3 className="text-[#2d2d2d] font-semibold ">Premium Products</h3>
                            </div>
                            <div className=" flex flex-col items-center justify-center gap-2">
                                <div className="h-[50px] w-[50px]">
                                <Image src={group}
                                alt="Expert Staff"
                                className="w-full h-full object-contain"/>
                                </div>
                                <h3 className="text-[#2d2d2d] font-semibold">Expert Staff</h3>
                            </div>
                            <div className=" flex flex-col items-center justify-center gap-2">
                                <div className="h-[50px] w-[50px]">
                                <Image src={group}
                                alt="Home Service"
                                className="w-full h-full object-contain"/>
                                </div>
                                <h3 className="text-[#2d2d2d] font-semibold">Home Service</h3>
                            </div>
                        </div>
                </div>
            </div>
            <div className="container relative hidden lg:block right-[-5%] xl:right-[-70px] ">
            <div className="relative top-0 ">
            <div className="hero-oval-angle absolute bottom-0 right-[10%] w-[30rem] h-[37rem] border-2 border-[#ecd8bd] fade-on-scroll"
                                style={
                                    {
                                     borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                                     boxShadow: "0 0 120px rgba(236,216,189,0.3),inset 0 0 60px rgba(236,216,189,0.2)"
                                    }
                            }>
                               
                                <Image src={makeup2}
                                    alt="Gift"
                                    className="absolute top-[12%] left-[12%] w-[40px] h-[40px] object-contain"/>
                            
                            </div>
            <Image src={makeup3}
            alt="Gift"
            className="absolute bottom-[-91px] right-0 w-[45rem] h-[45rem]  object-contain fade-on-scroll"/>      
        
            </div>
        </div>
        </div>
    )
}

export default HeroSection
