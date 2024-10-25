import React from 'react'

export default function Choose() {
  return (
    <div className="relative bg-cover bg-center min-h-screen mb-20 mt-32" style={{ backgroundImage: `url(https://preview.colorlib.com/theme/staging/img/call-bg.jpg)` }}>
    <div className="absolute inset-0 bg-black opacity-10"></div>
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="text-center text-white">
        <h2 className="text-lg font-semibold text-[#dfa667] mb-8">WHY CHOOSE US?</h2>
        <h1 className="text-5xl font-bold mb-6 leading-tight" style={{fontFamily:"Aldrich, sans-serif", fontWeight:"400"}}>
          OUR ABILITY TO DELIVER OUTSTANDING <br /> RESULTS FOR OUR CLIENTS STARTS WITH <br /> OUR TEAM OF SMART.
        </h1>
        <button className="bg-[#dfa667] text-lg hover:bg-yellow-600 text-white py-5 px-16 rounded-md font-bold">
          Contact Us
        </button>
      </div>
    </div>
  </div>
  )
}
