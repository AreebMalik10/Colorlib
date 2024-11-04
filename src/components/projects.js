import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './css/projects.css'

export default function Projects() {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () =>{
    setShowDropdown(!showDropdown);
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  return (

    <>
      <section className='header'>
        <div className='bg-transparent h-[50vh]' style={{ background: "url('https://preview.colorlib.com/theme/staging/img/hero/hero-1.jpg')" }}>
        <div className="relative z-10 w-full bg-transparent" style={{ marginTop: '0px' }}>
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
            <div className="hidden md:flex md:gap-6 lg:flex text-white lg:gap-10 mt-8">
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
            <div className="hidden md:hidden lg:flex flex-col text-sm md:text-lg text-white -mb-4 md:-mb-10 mt-4 md:mt-0 text-center md:text-right">
              <span>Call us for any questions</span>
              <span className="text-[#dfa667] text-lg md:text-2xl font-semibold">+01 123 456 789</span>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-20 ">
              <div className="fixed left-0 top-0 w-64 bg-white h-full transform transition-transform duration-300">
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
 
          <div className="text-center mt-20 md:mt-40 lg:mt-20 lg:mt-22">
            <h3
              className="text-white text-3xl md:text-5xl font-semibold"
              style={{ fontFamily: "Aldrich, sans-serif" }}
            >
              OUR PROJECTS
            </h3>
            <p className="text-white mt-4 md:mt-10 font-semibold">
              <Link to="">HOME ~</Link>
              <span className="text-[#dfa667]"> Projects</span>
            </p>
          </div>
        </div>

      </section>

      <section className="images">
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10 md:mt-20">
          {/* First Project */}
          <div className="text-center w-full md:w-[45%] lg:w-auto">
            <img
              src="https://preview.colorlib.com/theme/staging/img/project/project-p1.jpg"
              alt="Office Building"
              className="w-full md:w-[600px] h-[30vh] md:h-[50vh] object-cover"
            />
            <Link to="/projects">
              <h2
                className="text-lg md:text-2xl mt-4 tracking-widest font-semibold"
                style={{ fontFamily: "Aldrich, sans-serif" }}
              >
                OFFICE BUILDING
              </h2>
            </Link>
          </div>

          {/* Second Project */}
          <div className="text-center w-full md:w-[45%] lg:w-auto">
            <img
              src="https://preview.colorlib.com/theme/staging/img/project/project-2.jpg"
              alt="Furniture Decorative"
              className="w-full md:w-[600px] h-[30vh] md:h-[50vh] object-cover"
            />
            <Link to="/projects">
              <h2
                className="text-lg md:text-2xl mt-4 tracking-widest font-semibold"
                style={{ fontFamily: "Aldrich, sans-serif" }}
              >
                FURNITURE DECORATIVE
              </h2>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10 md:mt-20">
          {/* Third Project */}
          <div className="text-center w-full md:w-[45%] lg:w-auto">
            <img
              src="https://preview.colorlib.com/theme/staging/img/project/project-2.jpg"
              alt="Interior Design"
              className="w-full md:w-[600px] h-[30vh] md:h-[50vh] object-cover"
            />
            <Link to="/projects">
              <h2
                className="text-lg md:text-2xl mt-4 tracking-widest font-semibold"
                style={{ fontFamily: "Aldrich, sans-serif" }}
              >
                INTERIOR DESIGN
              </h2>
            </Link>
          </div>

          {/* Fourth Project */}
          <div className="text-center w-full md:w-[45%] lg:w-auto">
            <img
              src="https://www.allplan.com/fileadmin/_processed_/c/9/csm_b_C3_BCrogestaltung_201709_448ffae9f6.jpg"
              alt="Home Building"
              className="w-full md:w-[600px] h-[30vh] md:h-[50vh] object-cover"
            />
            <Link to="/projects">
              <h2
                className="text-lg md:text-2xl mt-4 tracking-widest font-semibold"
                style={{ fontFamily: "Aldrich, sans-serif" }}
              >
                HOME BUILDING
              </h2>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10 md:mt-20 mb-10 md:mb-20">
          {/* Fifth Project */}
          <div className="text-center w-full md:w-[45%] lg:w-auto">
            <img
              src="https://preview.colorlib.com/theme/staging/img/about-pic.jpg"
              alt="Decoration"
              className="w-full md:w-[600px] h-[30vh] md:h-[50vh] object-cover"
            />
            <Link to="/projects">
              <h2
                className="text-lg md:text-2xl mt-4 tracking-widest font-semibold"
                style={{ fontFamily: "Aldrich, sans-serif" }}
              >
                DECORATION
              </h2>
            </Link>
          </div>

          {/* Sixth Project */}
          <div className="text-center w-full md:w-[45%] lg:w-auto">
            <img
              src="https://preview.colorlib.com/theme/staging/img/project/project-3.jpg"
              alt="Furniture Decorative"
              className="w-full md:w-[600px] h-[30vh] md:h-[50vh] object-cover"
            />
            <Link to="/projects">
              <h2
                className="text-lg md:text-2xl mt-4 tracking-widest font-semibold"
                style={{ fontFamily: "Aldrich, sans-serif" }}
              >
                FURNITURE
              </h2>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center mb-10 md:mb-20">
        <button className="relative inline-block px-8 md:px-12 py-3 md:py-4 font-bold text-black group">
          <span className="absolute top-0 right-0 w-6 md:w-8 h-6 md:h-8 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
          <span className="absolute bottom-0 left-0 w-6 md:w-8 h-6 md:h-8 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
          <span className="relative z-10 text-lg md:text-2xl font-bold">Load More</span>
        </button>
      </section>


    </>

  )
}
