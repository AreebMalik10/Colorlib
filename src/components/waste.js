import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Waste() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () =>{
    setShowDropdown(!showDropdown);
  }




  return (
    <>
      <section className='header'>
        <div className='bg-transparent h-[120vh]' style={{ background: "url('https://preview.colorlib.com/theme/staging/img/hero/hero-1.jpg')" }}>
          <div className='flex items-center justify-between'>
            <h1 className='text-5xl font-bold text-white mt-6 ml-20'>Staging 
            <span className="text-yellow-300">.</span>

            </h1>
            <div className='text-white flex gap-10 mt-10'>
              <Link to="/home" className='hover:text-[#dfa667] border-b-2 border-yellow-500 text-xl font-semibold text-white'>Home</Link>
              <Link to="/project" className='hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white'>Projects</Link>
              <Link to="/about" className='hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white'>About</Link>
              <div>
              <button onClick={handleToggleDropdown} className='hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white'>Pages</button>
              
              {showDropdown && (
                <div className=' bg-white w-[9%] h-[15vh]  absolute flex flex-col mt-2'>
                  <Link to="/project" className='text-[#111111] ml-4 text-lg font-bold '>Project Details</Link>
                  <Link to="/about" className='text-[#111111] ml-4 text-lg font-bold'>About</Link>
                  <Link to="/services" className='text-[#111111] ml-4 text-lg font-bold'>Services</Link>
                  <Link to="/blogdetails" className='text-[#111111] ml-4 text-lg font-bold'>Blog Details</Link>

                </div>
              )}
              </div>
              <Link to="/blog" className='hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white'>Blog</Link>
              <Link to="/contact" className='hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white'>Contact</Link>
            </div>

            <div className='text-white mr-32 mt-12'>
              <p  className='text-[#b7b7b7]' style={{fontFamily:"Aldrich, sans-serif"}}>Call us for any questions</p>
              <p className='text-[#dfa667] text-2xl font-semibold'>+01 123 456 789
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center h-full text-center text-white px-4 " >
                    {/* Heading */}
                    <h1 className="text-7xl font-bold tracking-widest " style={{ fontFamily: "Aldrich, sans-serif", marginTop: "-300px" }}>QUALITY IS NOT ONLY <br /> OUR STANDARD.</h1>

                    <button class="relative inline-block px-16 py-7 font-bold text-black group  mt-20">
                        <span class="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="relative z-10 text-white" >See Project</span>
                    </button>
                </div>

                 {/* Navigation Arrows */}
                 <div className=" absolute top-[60%] flex  items-center justify-between w-full px-4" style={{marginBottom:"300px"}}>
                    {/* Left Arrow */}
                    <button class="relative inline-block px-6 py-4 font-bold text-black group " style={{ marginLeft: "170px", marginBottom: "1800px" }}>
                        <span class="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="relative z-10 text-white"><FontAwesomeIcon icon={faChevronLeft} /></span>
                    </button>

                    {/* Right Arrow */}
                    <button class="relative inline-block px-6 py-4 font-bold text-black group " style={{ marginRight: "170px", marginBottom: "1800px" }}>
                        <span class="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="relative z-10 text-white"><FontAwesomeIcon icon={faChevronRight} /></span>
                    </button>
                </div>

                {/* Bottom Section */}
                <div className="absolute bottom-0 w-full flex justify-between items-center py-6 px-10 text-white -mb-56">
                    {/* Page Indicator */}
                    <div className="flex items-center space-x-4 text-2xl" style={{ marginLeft: "90px" }}>
                        <span className="text-lg font-semibold">01</span>
                        <div className="w-16 h-px bg-white"></div>
                        <span className="text-lg font-semibold">02</span>
                    </div>

                    {/* Discover More Button */}
                    <button className="text-center text-xl text-gray-300 hover:text-white mr-0">
                        Discover more
                    </button>

                    {/* Social Media Icons */}
                    <div className="flex space-x-8 mr-14">
                        <a href="#" className="hover:text-gray-400 text-2xl " role="button" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="hover:text-gray-400 text-2xl" role="button" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="hover:text-gray-400 text-2xl" role="button" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="hover:text-gray-400 text-2xl" role="button" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>


           

                 

             



        </div>

      </section>

      





    </>
  )
}
