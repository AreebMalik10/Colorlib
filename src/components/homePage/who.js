import React from 'react'

export default function Who() {
  return (
    <section className="flex flex-col lg:flex-row items-center py-12 px-8 mx-auto max-w-screen-xl">
      {/* Text Section */}
      <div className="lg:w-1/2 text-left space-y-6 px-4">
        <h4 className="text-lg font-bold text-yellow-500 uppercase -mb-2">Who Are We</h4>
        <h2 className="text-3xl sm:text-5xl font-semibold text-black">
          WE PROPOSE AND <br /> DISCUSS DESIGN RULES
        </h2>
        <p className="text-lg text-[#707070] !mt-4" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "26px" }}>
          Metasurfaces are generally designed by placing scatterers in periodic or pseudo-periodic grids. We propose and discuss design rules for functional metasurfaces with randomly placed.
        </p>
        <p className="text-lg text-[#707070]" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "26px" }}>
          Anisotropic elements that randomly sample. Quisque sit amet nisl ante. Fusce lacinia non tellus id gravida. Cras neque dolor, volutpat et hendrerit et.
        </p>
        <button className="relative inline-block px-12 py-4 font-bold text-black group mt-4">
          <span className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
          <span className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
          <span className="relative z-10">Learn More</span>
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-8 flex justify-center">
  <img
    src="https://preview.colorlib.com/theme/staging/img/about-pic.jpg"
    alt="Discussion"
    className="w-full h-auto max-w-md sm:w-[90%] md:w-full lg:w-[80%] lg:max-w-full shadow-lg"
  />
</div>


    </section>
  )
}
