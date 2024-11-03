import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Waste() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <>
      <section className='header'>
        <div className='bg-transparent h-[120vh]' style={{ background: "url('https://preview.colorlib.com/theme/staging/img/hero/hero-1.jpg')" }}>
          <div className="relative z-10 w-full bg-transparent" style={{ marginTop: '70px' }}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
              {/* Left side logo and "Staging" */}
              <div className="flex items-center space-x-2 mb-4 md:mb-0 w-full md:w-auto justify-between">
                <Link
                  to="/"
                  className="text-3xl md:text-5xl font-bold text-white mt-2 md:mt-6"
                  style={{ fontFamily: 'Aldrich, sans-serif' }}
                >
                  Staging
                </Link>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white text-2xl focus:outline-none ml-auto"
                  >
                    <FontAwesomeIcon icon={faBars} className="mt-4" />
                  </button>
                </div>
              </div>

              {/* Centered navigation links for desktop */}
              <div className="hidden md:flex md:gap-6 lg:flex lg:gap-10 text-white gap-10 mt-8">
                <Link to="/" className="hover:text-[#dfa667] border-b-2 border-yellow-500 text-xl font-semibold text-white">
                  Home
                </Link>
                <Link to="/projects" className="hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white">
                  Projects
                </Link>
                <Link to="/about" className="hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white">
                  About
                </Link>

                {/* Pages Button for Desktop */}
                <div className="relative">
                  <button onClick={handleToggleDropdown} className="hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white">
                    Pages
                  </button>
                  {/* Dropdown for Desktop */}
                  {showDropdown && (
                    <div className="absolute bg-white mt-2 w-[330%] rounded-md shadow-lg p-2">
                      <Link to="/projects" className="text-[#111111] block px-4 py-2 text-lg font-bold">Project Details</Link>
                      <Link to="/about" className="text-[#111111] block px-4 py-2 text-lg font-bold">About</Link>
                      <Link to="/services" className="text-[#111111] block px-4 py-2 text-lg font-bold">Services</Link>
                      <Link to="/blogdetails" className="text-[#111111] block px-4 py-2 text-lg font-bold">Blog Details</Link>
                    </div>
                  )}
                </div>

                <Link to="/blog" className="hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white">
                  Blog
                </Link>
                <Link to="/contact" className="hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white">
                  Contact
                </Link>
              </div>

              {/* Right side contact information */}
              <div className="hidden md:hidden  lg:flex  flex-col text-sm md:text-lg text-white -mb-4 md:-mb-10 mt-4 md:mt-0 text-center md:text-right">
                <span>Call us for any questions</span>
                <span className="text-[#dfa667] text-lg md:text-2xl font-semibold">+01 123 456 789</span>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-20 ">
                <div className="fixed left-0 top-0 w-64 bg-white h-full transform transition-transform duration-300 mt-16">
                  <div className="flex flex-col items-start p-6">
                    {/* Close Button */}
                    <button className="self-end text-black mb-4" onClick={() => setIsMenuOpen(false)}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    {/* Navigation Links for Mobile */}
                    <Link to="/" className="my-2 text-black">Home</Link>
                    <Link to="/projects" className="my-2 text-black">Projects</Link>
                    <Link to="/about" className="my-2 text-black">About</Link>
                    <button onClick={handleToggleDropdown} className="my-2 text-black">Pages</button>

                    {/* Dropdown Menu under "Pages" for Mobile */}
                    {showDropdown && (
                      <div className="bg-white flex flex-col mt-2 ml-4">
                        <Link to="/projects" className="my-2 text-black">Project Details</Link>
                        <Link to="/about" className="my-2 text-black">About</Link>
                        <Link to="/services" className="my-2 text-black">Services</Link>
                        <Link to="/blogdetails" className="my-2 text-black">Blog Details</Link>
                      </div>
                    )}
                    <Link to="/blog" className="my-2 text-black">Blog</Link>
                    <Link to="/contact" className="my-2 text-black">Contact</Link>
                  </div>

                  <div className="flex flex-col text-center mt-4 text-black">
                    <span>Call us for any questions</span>
                    <span className="text-[#dfa667] text-lg font-semibold">+01 123 456 789</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className=" flex flex-col items-center justify-center h-full text-center text-white px-4 " >
            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-widest sm:text-6xl md:text-6xl lg:text-7xl" style={{ fontFamily: "Aldrich, sans-serif", marginTop: "-250px" }}>QUALITY IS NOT ONLY <br /> OUR STANDARD.</h1>

            <button class="relative inline-block px-16 py-7 font-bold text-black group  mt-10">
              <span class="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
              <span class="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
              <span class="relative z-10 text-white" >See Project</span>
            </button>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-[65%] flex items-center justify-between w-full px-4" style={{ marginBottom: "300px" }}>
            {/* Left Arrow */}
            <button className="relative inline-block px-6 py-4 font-bold text-black group hidden lg:inline-block" style={{ marginLeft: "170px", marginBottom: "1800px" }}>
              <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
              <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
              <span className="relative z-10 text-white"><FontAwesomeIcon icon={faChevronLeft} /></span>
            </button>

            {/* Right Arrow */}
            <button className="relative inline-block px-6 py-4 font-bold text-black group hidden lg:inline-block" style={{ marginRight: "170px", marginBottom: "1800px" }}>
              <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
              <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
              <span className="relative z-10 text-white"><FontAwesomeIcon icon={faChevronRight} /></span>
            </button>
          </div>


          {/* Bottom Section */}
          <div className="absolute bottom-0 w-full flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-10 text-white -mb-56 lg:ml-10 ">
            {/* Page Indicator */}
            <div className="flex items-center space-x-2 md:space-x-4 text-lg md:text-2xl" style={{ marginLeft: "0", marginRight: "0" }}>
              <span className="text-sm md:text-lg font-semibold">01</span>
              <div className="w-10 md:w-16 h-px bg-white"></div>
              <span className="text-sm md:text-lg font-semibold">02</span>
            </div>

            {/* Discover More Button */}
            <button className="text-center text-lg md:text-xl text-gray-300 hover:text-white mt-2 md:mt-0">
              Discover more
            </button>

            {/* Social Media Icons */}
            <div className="flex space-x-4 md:space-x-8 mr-0 md:mr-14 mt-2 md:mt-0">
              <a href="#" className="hover:text-gray-400 text-xl md:text-2xl" role="button" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="hover:text-gray-400 text-xl md:text-2xl" role="button" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-gray-400 text-xl md:text-2xl" role="button" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-gray-400 text-xl md:text-2xl" role="button" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>











        </div>

      </section>







    </>
  )
}
