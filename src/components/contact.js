import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';



export default function Contact() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <>
            <section className="header">
      <div
        className="bg-cover bg-center h-[15vh] items-center justify-center"
        style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/staging/img/hero/hero-1.jpg)' }}
      >
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
            <div className="hidden md:flex md:gap-6 lg:flex lg:gap-10 text-white lg-10 mt-8">
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
                      <Link to="/projects" className="text-[#111111] text-lg font-bold">Project Details</Link>
                      <Link to="/about" className="text-[#111111] text-lg font-bold">About</Link>
                      <Link to="/services" className="text-[#111111] text-lg font-bold">Services</Link>
                      <Link to="/blogdetails" className="text-[#111111] text-lg font-bold">Blog Details</Link>
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
      </div>
    </section>

            
    <section className='contact'>
  <div className='lg:mt-40 lg:ml-52 lg:mb-20 max-w-full ml-4 mr-4 mt-10 sm:ml-10 md:ml-20'>
    <p className='text-[#dfa667]' style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", letterSpacing: "1px" }}>INFORMATION</p>
    <h1 className='' style={{ fontFamily: "Aldrich, sans-serif", fontSize: "42px", lineHeight: "50px", fontWeight: "400" }}>CONTACT DETAILS</h1>
    <p className='text-[#707070] text-base sm:text-sm' style={{ fontSize: "18px", fontFamily: "Poppins, sans-serif", fontWeight: "400", lineHeight: "26px", marginTop: "20px" }}>
      As you might expect of a company that began as a high- <br /> end interiors contractor, we pay strict attention.
    </p>
  </div>

  <div className='flex items-center lg:ml-52 lg:gap-28 mb-10 flex-wrap ml-4 mt-10  sm:ml-10 md:ml-20 space-y-6 sm:space-y-10 sm:space-x-6 md:space-x-12'>
    <div className='flex items-center w-full lg:mt-10 sm:w-auto md:mt-6'>
      <img src="https://preview.colorlib.com/theme/staging/img/contact/ci-1.png" alt="Phone Number" className='lg:w-[25%] sm:w-[8%] md:w-[20%]' />
      <div className='ml-6'>
        <h3 className='text-[#dfa667]' style={{ fontFamily: "Aldrich, sans-serif", marginBottom: "10px", fontSize: "18px", fontWeight: "400" }}>PHONE NUMBER</h3>
        <p className='text-[#111111] text-base md:text-lg' style={{ fontFamily: "Poppins, sans-serif" }}>+01 123 456 789</p>
      </div>
    </div>

    <div className='flex items-center w-full sm:w-auto sm:mt-6'>
      <img src="https://preview.colorlib.com/theme/staging/img/contact/ci-2.png" alt="Email Address" className='lg:w-[35%] sm:w-[8%] md:w-[20%] sm:ml-10 md:ml-16' />
      <div className='ml-6'>
        <h3 className='text-[#dfa667]' style={{ fontFamily: "Aldrich, sans-serif", marginBottom: "10px", fontSize: "18px", fontWeight: "400" }}>EMAIL ADDRESS</h3>
        <p className='text-[#111111] text-base md:text-lg' style={{ fontFamily: "Poppins, sans-serif" }}>info.colorlib@gmail.com</p>
      </div>
    </div>

    <div className='flex items-center w-full sm:w-auto sm:mt-6 '>
      <img src="https://preview.colorlib.com/theme/staging/img/contact/ci-3.png" alt="Office Location" className='lg:w-[15%] sm:w-[8%] md:w-[20%] sm:ml-10 md:ml-16' />
      <div className='ml-6'>
        <h3 className='text-[#dfa667]' style={{ fontFamily: "Aldrich, sans-serif", marginBottom: "10px", fontSize: "18px", fontWeight: "400" }}>OFFICE LOCATION</h3>
        <p className='text-[#111111] text-base md:text-lg' style={{ fontFamily: "Poppins, sans-serif" }}>7176 Blue Spring Lane, NY, US</p>
      </div>
    </div>
  </div>
</section>

            <section className='Map mt-20'>
                <div className="map-container flex items-center justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24174.33335147052!2d-74.23476853912928!3d40.76660661863331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2s!4v1730188797836!5m2!1sen!2s"
                        width="1250"
                        height="550"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Embed"
                    ></iframe>
                </div>

            </section>

            <section className=' lg:ml-52 lg:mt-20 lg:mb-32 ml-2 mb-10 mt-20 md:ml-8'>
                <div >
                    <h4 className='text-[#dfa667] text-xl' style={{ fontFamily: "Poppins, sans-serif" }}>FORM</h4>
                    <h1 className='text-[#111111] mt-4 mb-2' style={{ fontFamily: "Aldrich, sans-serif", fontSize: "42px", lineHeight: "50px", fontWeight: "400" }}>GET IN TOUCH</h1>
                    <p className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: "400", lineHeight: "26px" }}>As you might expect of a company that began as a high- <br /> end interiors contractor, we pay strict attention.</p>
                </div>
                <div className='container lg:w-[70%] lg:h-[60vh] lg:mt-20   border-hidden '>
                    <div className='flex mt-10 lg:ml-0 ml-10 '>
                        <input type="text"
                            placeholder='Name'
                            className='text-[#b7b7b7] border h-[7vh] w-[40%] px-4 ' />

                        <input type="text"
                            placeholder='Email '
                            className='border ml-10 h-[7vh] w-[40%] px-4' />
                    </div>
                    <div className="ml-10 lg:ml-0">
                        <textarea
                            placeholder="Message"
                            className="border  mt-10 lg:w-[84%] lg:h-[23vh] w-[91%] h-[23vh] md:w-[87%] md:h-[15vh] px-4 pt-2 text-left "
                        />
                    </div>

                    <button className='bg-[#dfa667] text-white lg:w-[20%] lg:h-[8vh] w-[40%] h-[8vh] md:w-[30%] h-[6vh] font-bold text-lg mt-10 ml-10 lg:ml-0'>Send Message</button>
                </div>
            </section>
        </>
    )
}
