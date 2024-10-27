import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Choose from './homePage/choose';
import Team from './homePage/team';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="projectHeader">
        <div
          className="bg-cover bg-center h-[60vh] items-center justify-center"
          style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/staging/img/hero/hero-1.jpg)' }}
        >
          <div className="relative z-10 w-full bg-transparent">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">

              {/* Left side logo and "Staging" */}
              <div className="flex items-center space-x-2 mb-4 -ml-48 md:mb-0 sm:ml-0">
                <Link
                  to="/"
                  className="text-3xl md:text-5xl font-bold text-white mt-2 md:mt-6 ml-4 md:ml-16"
                  style={{ fontFamily: "Aldrich, sans-serif" }}
                >
                  Staging
                </Link>
                <span className="w-2 h-2 bg-[#dfa667] rounded-full mt-4 md:mt-10"></span>


                {/*  Menu for Mobile */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white text-2xl focus:outline-none ml-auto"
                  >
                    <FontAwesomeIcon icon={faBars} className='mt-4 ' style={{ marginRight: "-320px" }} />

                  </button>
                </div>
              </div>

              {/* Centered navigation links */}
              <div
                className={`flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-9 mt-2 md:mt-6 md:-ml-10 ${isMenuOpen ? "block" : "hidden"
                  } md:flex`}
              >
                <a
                  href="#"
                  className="hover:text-[#dfa667] border-b-2 border-yellow-500 text-base md:text-xl font-semibold text-white"
                >
                  Home
                </a>
                <Link
                  to="/projects"
                  className="hover:border-b-2 hover:border-yellow-500 text-base md:text-xl font-semibold text-white"
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className="hover:border-b-2 hover:border-yellow-500 text-base md:text-xl font-semibold text-white"
                >
                  About
                </Link>
                <Link
                  to="/"
                  className="hover:border-b-2 hover:border-yellow-500 text-base md:text-xl font-semibold text-white"
                >
                  Pages
                </Link>
                <Link
                  to="/"
                  className="hover:border-b-2 hover:border-yellow-500 text-base md:text-xl font-semibold text-white"
                >
                  Blog
                </Link>
                <Link
                  to="/"
                  className="hover:border-b-2 hover:border-yellow-500 text-base md:text-xl font-semibold text-white"
                >
                  Contact
                </Link>
              </div>

              {/* Right side contact information */}
              <div className="hidden md:flex flex-col text-sm md:text-lg text-white -mb-4 md:-mb-10 mt-4 md:mt-0 text-center md:text-right">
                <span>Call us for any questions</span>
                <span className="text-[#dfa667] text-lg md:text-2xl font-semibold">
                  +01 123 456 789
                </span>
              </div>
            </div>

            {/* shown only when menu is open */}
            {isMenuOpen && (
              <div className="flex md:hidden flex-col text-center mt-4 text-white">
                <span>Call us for any questions</span>
                <span className="text-[#dfa667] text-lg font-semibold">+01 123 456 789</span>
              </div>
            )}
          </div>

          <div className="text-center mt-20 md:mt-28">
            <h3
              className="text-white text-3xl md:text-5xl font-semibold"
              style={{ fontFamily: "Aldrich, sans-serif" }}
            >
              ABOUT US
            </h3>
            <p className="text-white mt-4 md:mt-10 font-semibold">
              <Link to="">HOME ~</Link>
              <span className="text-[#dfa667]"> About Us</span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 px-4 md:px-8 lg:px-24 bg-white text-gray-800 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 ml-4 md:ml-12 lg:ml-28 mr-4 md:mr-12 lg:mr-32 mt-10 md:mt-12 lg:mt-14">

          {/* First Column (Small Column) */}
          <div className="lg:w-1/3 w-full text-center lg:text-left">
            <h2 className="text-md md:text-lg font-semibold text-orange-400 uppercase mb-2" style={{ fontWeight: "600" }}>Who Are We</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "Aldrich, sans-serif", fontWeight: "450" }}>About Us</h1>
            <p className="text-sm md:text-lg mt-2 text-gray-600" style={{ fontFamily: "Poppins, sans-serif", color: "rgb(112, 112, 112)", fontSize: "17px", lineHeight: "26px", fontWeight: "400", marginTop: "30px" }}>
              As you might expect of a company that began as a high-end interiors contractor.
            </p>
          </div>

          {/* Second Column (Larger Column) */}
          <div className="lg:w-2/3 w-full">

            {/* Main Paragraph */}
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 lg:mb-10" style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", color: "rgb(112, 112, 112)", lineHeight: "26px", fontWeight: "400" }}>
              Metasurfaces are generally designed by placing scatterers in periodic or pseudo-periodic grids.
              We propose and discuss design rules for functional metasurfaces with randomly placed, anisotropic elements that randomly sample. Quisque sit amet nisl ante.
            </p>

            {/* Sub-columns for Mission and Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

              {/* Our Mission */}
              <div className="text-center sm:text-left">
                <div className="flex flex-col items-center sm:items-start">
                  <img src="https://preview.colorlib.com/theme/staging/img/services/services-5.png" alt="Mission Icon" className="w-16 h-16 md:w-20 md:h-20 mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "Aldrich, sans-serif", fontWeight: "400" }}>OUR MISSION</h3>
                  <p className="text-sm md:text-base text-gray-600 mt-2" style={{ fontFamily: "Poppins, sans-serif", color: "rgb(112, 112, 112)", lineHeight: "26px", fontWeight: "400", fontSize: "17px" }}>
                    As you might expect of a company that began as a high-end interiors contractor, we pay strict
                    attention. Anisotropic elements that randomly sample.
                  </p>
                </div>
              </div>

              {/* Our Vision */}
              <div className="text-center sm:text-left">
                <div className="flex flex-col items-center sm:items-start">
                  <img src="https://preview.colorlib.com/theme/staging/img/services/services-6.png" alt="Vision Icon" className="w-16 h-16 md:w-20 md:h-20 mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "Aldrich, sans-serif", fontWeight: "400" }}>OUR VISION</h3>
                  <p className="text-sm md:text-base text-gray-600 mt-2" style={{ fontFamily: "Poppins, sans-serif", color: "rgb(112, 112, 112)", lineHeight: "26px", fontWeight: "400", fontSize: "17px" }}>
                    Our commitment to exceptional quality has never wavered. Today ranks as one of the most
                    highly-regarded constructions. Anisotropic elements that randomly sample.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section>

      <div className="relative h-[75vh] bg-cover bg-center flex items-center justify-center mb-20 mt-32" style={{ backgroundImage: `url(https://preview.colorlib.com/theme/staging/img/call-bg.jpg)` }}>
  <div className="absolute inset-0 bg-black opacity-10"></div>
  <div className="relative z-10 flex items-center justify-center min-h-screen">
    <div className="text-center text-white">
      <h2 className="text-lg font-semibold text-[#dfa667] mb-4 sm:mb-6 md:mb-8">WHY CHOOSE US?</h2>
      <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight sm:leading-[36px] md:leading-[52px]">
        OUR ABILITY TO BRING OUTSTANDING <br /> RESULTS FOR OUR CUSTOMERS.
      </h1>
      <button className="bg-[#dfa667] text-base sm:text-lg hover:bg-yellow-600 text-white py-3 px-8 sm:py-4 sm:px-12 rounded-md font-bold">
        Contact Us
      </button>
    </div>
  </div>
</div>


      </section>

      <section className='mb-20'>
        <Team />
      </section>

    </>

  )
}
