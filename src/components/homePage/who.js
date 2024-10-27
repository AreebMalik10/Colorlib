import React from 'react'

export default function Who() {
  return (
    <section className="flex flex-col lg:flex-row items-center py-12 px-8 ml-52">
                {/* Text Section */}
                <div className="lg:w-1/2 text-left space-y-6">
                    <h4 className="text-lg font-bold text-yellow-500 uppercase -mb-2">Who Are We</h4>
                    <h2 className="text-5xl font-semibold text-black">
                        WE PROPOSE AND <br /> DISCUSS DESIGN RULES
                    </h2>
                    <p className="text-lg text-[#707070] mr-36 !mt-14" style={{ fontFamily: "Poppins, sans-serif", lineHeight: '' }}>
                        Metasurfaces are generally designed by placing scatterers in periodic or pseudo-periodic grids. We propose and discuss design rules for functional metasurfaces with randomly placed.
                    </p>
                    <p className="text-lg text-[#707070] mr-36" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "26px" }}>
                        Anisotropic elements that randomly sample. Quisque sit amet nisl ante. Fusce lacinia non tellus id gravida. Cras neque dolor, volutpat et hendrerit et.
                    </p>
                    <button class="relative inline-block px-12 py-4 font-bold text-black group ">
                        <span class="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="relative z-10">Learn More</span>
                    </button>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
                    <img
                        src="https://preview.colorlib.com/theme/staging/img/about-pic.jpg"
                        alt="Discussion"
                        className=" w-[90%] shadow-lg"
                    />
                </div>
            </section>
  )
}
