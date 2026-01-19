import Image from "next/image"
import makeup1 from "@/public/images/now-word-bold-text-style.png"
import makeup2 from "@/public/images/image-2.png"
import makeup3 from "@/public/images/beautiful-woman.png"
import group from "@/public/images/Group.png"


const HeroSection = () => {
    return (
        <div className="hero-section relative  overflow-hidden">
            {/* Dark Top Section */}
            <div className="hero-section-content min-h-[70vh] py-12 lg:py-16  flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12  overflow-hidden">

                        {/* Left: Text Content */}
                        <div className="flex flex-col justify-center space-y-6 lg:space-y-8 fade-on-scroll">
                            <h1 className="text-white text-4xl lg:text-6xl font-bold">
                                Beauty Services<br/>
                                Delivered to<br/>
                                <span className="text-hero-accent">Your Home</span>
                            </h1>

                            <p className=" text-white/90 text-lg lg:text-xl ">
                                Premium beauty treatments and skincare services at your doorstep. Experience luxury beauty care in the comfort of your home.
                            </p>

                           {/* Voucher Card */}
                           <div className="bg-white/10 backdrop-blur-sm rounded-full 
  flex items-center gap-4 
  px-1 py-2
  h-25 lg:h-25
  w-25 lg:w-25
  hover:min-w-80 hover:max-w-md
  voucher-expand
  overflow-hidden
  group
  cursor-pointer
  hover:shadow-lg">
  {/* Icon Circle */}
  <div className="w-[6rem] h-[rem] flex items-center justify-center bg-white/20 rounded-full shrink-0 ">
    <Image 
      src={makeup1}
      alt="Gift"
      className="w-full h-full  object-contain rotate-slow rounded-full"
    />
  </div>
  
  {/* Text Content */}
  <div className="opacity-0 w-0 overflow-hidden 
    group-hover:opacity-100 
    group-hover:w-auto 
    voucher-text-expand
    whitespace-nowrap ">
    <h3 className="text-white font-semibold">Gift Your Loved One</h3>
    <p className="text-white/80 text-sm">a Beauty Experience!</p>
    <p className="text-white/80 text-sm">Book Now</p>
  </div>
</div>
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
            <div className="hero-light fade-on-scroll">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="w-full lg:w-1/2 flex justify-between py-3">
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
            <div className="container relative hidden lg:block right-[-5%] xl:right-[-70px]">
            <div className="relative top-0">
            <div className="hero-oval-angle absolute bottom-0 right-[10%] w-[30rem] h-[37rem] border-2 border-[#ecd8bd]"
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
            className="absolute bottom-[-91px] right-0 w-[45rem] h-[45rem]  object-contain"/>      
        
            </div>
        </div>
        </div>
    )
}

export default HeroSection
