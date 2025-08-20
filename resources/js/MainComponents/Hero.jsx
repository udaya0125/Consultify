import Wrapper from '@/BarComponents/Wrapper'
import React from 'react'

const Hero = () => {
  return (
      <div className="relative w-full h-[35rem]  py-12 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="6.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-blue-900/20 to-black/55"></div>

        <div className="relative flex items-center justify-center h-full">
          <div className="text-white text-center max-w-3xl px-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              Your Trusted Partner for Canada, Australia, UK, New Zealand, USA and more...
            </h1>
          </div>
        </div>
      </div>
   
  )
}

export default Hero
