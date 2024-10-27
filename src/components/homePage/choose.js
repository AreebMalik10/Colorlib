import React from 'react'

export default function Choose() {
  return (
    <div className="relative h-[75vh] bg-cover bg-center flex items-center justify-center mb-20 mt-32" style={{ backgroundImage: `url(https://preview.colorlib.com/theme/staging/img/call-bg.jpg)` }}>
    <div className="absolute inset-0 bg-black opacity-10"></div>
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="text-center text-white">
        <h2 className="text-lg font-semibold text-[#dfa667] mb-4 sm:mb-6 md:mb-8">WHY CHOOSE US?</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight sm:leading-normal md:leading-[52px]">
          OUR ABILITY TO DELIVER OUTSTANDING <br /> RESULTS FOR OUR CLIENTS STARTS WITH <br /> OUR TEAM OF SMART.
        </h1>
        <button className="bg-[#dfa667] text-base sm:text-lg hover:bg-yellow-600 text-white py-3 px-8 sm:py-4 sm:px-12 rounded-md font-bold">
          Contact Us
        </button>
      </div>
    </div>
  </div>
  
  )
}
