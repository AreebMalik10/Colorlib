import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {

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
                  <FontAwesomeIcon icon={faBars} className='mt-4 'style={{marginRight:"-320px"}}/>
                 
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
