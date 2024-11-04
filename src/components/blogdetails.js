import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faQuoteLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './css/blogdetails.css'

export default function Blogdetails() {

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
              <div className="fixed left-0 top-0 w-64 bg-white h-full transform transition-transform duration-300 ">
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
      </div>
    </section>

            <section className='flex justify-center'>
                <div className="w-full md:w-[60%] mt-10 px-4" style={{ alignContent: "center" }}>
                    <p className="text-[#b7b7b7] mb-2 ml-6 text-sm md:text-base" style={{ fontSize: "15px", fontWeight: "500", letterSpacing: "2px", textTransform: "uppercase" }}>
                        December 20, 2019 • <span className='ml-16 mr-16'> By John Doe</span> • Planning
                    </p>
                    <h1 className="text-2xl md:text-4xl font-bold ml-6" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600", lineHeight: "48px" }}>
                        Target and Amazon Shopping List for <br /> Home Stagers
                    </h1>
                    <div className="bg-transparent shadow-lg rounded-lg p-6 shadow shadow-t-0 shadow-left-0 shadow-r-0 outline-none">
                        <img
                            src="https://preview.colorlib.com/theme/staging/img/project/project-3.jpg"
                            alt="Get Shit Done"
                            className="w-full h-[65vh] mb-6 object-cover" // Changed w-[100%] to w-full and added object-cover for responsiveness
                        />
                        <p className="text-[#7d8184] mt-10" style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", lineHeight: "32px" }}>
                            Forget Ebay and other forms of advertising for your property that costs you hard earned money. Properties have ready several locations around the world to take your free listings for any luxury property you have. <br /><br />
                            Each location web site is purpose built so every Search Engine will pick up new listings within minutes. This way your customers only have to type in keywords relating to their search for a luxury home and the Search Engine will show the Invest Asset web site applicable to their location they are looking for. <br /><br />
                            Most real estate companies are way too busy with selling their client’s properties to put any effort forth to their web site. Hence, making it difficult for web surfers to find their listings. <br />
                        </p>
                    </div>

                    <div className='org bg-[#dfa667] mt-10 mb-10 h-auto flex items-center justify-center text-left p-4'> {/* Added padding for better alignment */}
                        <div className='content w-full'>
                            <h3 className='text-[#fff] text-lg md:text-xl text-sm mx-auto' style={{ fontFamily: "Aldrich, sans-serif", lineHeight: "32px", textTransform: "uppercase", maxWidth: "90%" }}>
                                “Without question this is the stager you want to use! Jennifer <br />staged a hard to sell home for me and we sold it fast! …. Jennifer <br /> made it possible.”
                            </h3>
                            <p className='text-[#fff] mt-4 text-base font-bold text-sm md:text-sm mx-auto' style={{ fontFamily: "Aldrich, sans-serif", textTransform: "uppercase", letterSpacing: "4px", maxWidth: "90%" }}>
                                Martin Lockhart
                                <FontAwesomeIcon className='text-[#ffffff] text-3xl md:text-5xl ' style={{ marginLeft: "500px" }} icon={faQuoteLeft} />
                            </p>
                        </div>
                    </div>



                    <div>
                        <p className='text-[#7d8184]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", lineHeight: "32px" }}>
                            Now times have changed and we at Investment Assets Properties are thinking of the customer before the business. If you have a property in a location not listed at Investment Assets Properties. Don’t worry. A quick email to us will ensure your location is built to accommodate your listing. <br /><br />
                            Selling your luxury home, condominium or property should not be a painstaking event. It should be easy and stress-free and it should be able to be advertised on a global scale for free. Investment Assets Properties can and will do this for you in a hassle-free way. <br />
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-6 mb-20 mt-10'>
                        <img src="https://preview.colorlib.com/theme/staging/img/blog/details/bi-1.jpg" alt="" className="w-full md:w-[30%] object-cover" />
                        <img src="https://preview.colorlib.com/theme/staging/img/blog/details/bi-2.jpg" alt="" className="w-full md:w-[30%] object-cover" />
                        <img src="https://preview.colorlib.com/theme/staging/img/blog/details/bi-3.jpg" alt="" className="w-full md:w-[30%] object-cover" />
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-6 mb-10'>
                        <p>Tags:
                            <Link className='text-[#b7b7b7]' style={{ letterSpacing: "1px", fontWeight: "600", marginRight: "12px", marginLeft: "12px" }}>BRANDING</Link>
                            <Link className='text-[#b7b7b7]' style={{ letterSpacing: "1px", fontWeight: "600", marginRight: "12px", marginLeft: "12px" }}>OFFICE</Link>
                            <Link className='text-[#b7b7b7]' style={{ letterSpacing: "1px", fontWeight: "600", marginRight: "12px", marginLeft: "12px" }}>CREATIVE</Link>
                        </p>
                        <div className='flex gap-6'>
                            <Link>
                                <FontAwesomeIcon icon={faFacebook} className='text-2xl' />
                            </Link>
                            <Link>
                                <FontAwesomeIcon icon={faTwitter} className='text-2xl' />
                            </Link>
                            <Link>
                                <FontAwesomeIcon icon={faInstagram} className='text-2xl' />
                            </Link>
                            <Link>
                                <FontAwesomeIcon icon={faLinkedin} className='text-2xl' />
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row mb-20 ml-10 mt-32'>
                        <img src="https://preview.colorlib.com/theme/staging/img/blog/blog-about.png" alt="" className="w-full md:w-[30%] lg:-mt-6 object-cover" />
                        <div className='ml-10'>
                            <h3 className='text-[#111111] text-xl' style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600", marginBottom: "12px" }}>Dana Vaughn</h3>
                            <h4 className='text-[#7d8184] text-xl' style={{ lineHeight: "32px" }}>
                                Now times have changed and we at Investment Assets Properties are <br />thinking of the customer before the business. If you have a property in a location not listed at Investment Assets Properties.
                            </h4>
                        </div>
                    </div>

                    <div className='flex flex-col  md:flex-row   justify-between mb-10'>
                        <div className='flex mb-20 sm:mb-6 '>
                            <img src="https://preview.colorlib.com/theme/staging/img/blog/details/prev.jpg" alt="" className='h-[13vh] w-auto' />
                            <div className='ml-6 '>
                                <Link>
                                    <h4 className='text-[#8d8d8d] ' style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", marginBottom: "4px", marginTop: "6px" }}>Previous Post</h4>
                                    <h2 className='text-[#353535]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", fontWeight: "600" }}>Popular Uses of the Internet</h2>
                                </Link>
                            </div>
                        </div>

                        <div className='flex sm:mb-0 md:mt-56 lg:mt-0'>
                            <div className='mr-6 mt-2 '>
                                <Link>
                                    <h4 className='text-right text-[#8d8d8d]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px" }}>Next Post</h4>
                                    <h2 className='text-[#353535]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", fontWeight: "600" }}>Help Finding Information Online</h2>
                                </Link>
                            </div>
                            <img src="https://preview.colorlib.com/theme/staging/img/blog/details/next.jpg" alt="" className='h-[13vh] w-auto' />
                        </div>
                    </div>

                    <div className='mb-20'>
                        <h2 className='text-[#111111] mt-20' style={{ fontFamily: "Aldrich, sans-serif", marginBottom: "35px", fontSize: "26px", fontWeight: "450" }}>LEAVE A REPLY</h2>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <input type="text" placeholder="Your name" className='bg-[#f9f9f9] border-[#f9f9f9] border-2 w-full md:w-[45%] h-[50px] rounded-md' />
                            <input type="email" placeholder="Your email" className='bg-[#f9f9f9] border-[#f9f9f9] border-2 w-full md:w-[45%] h-[50px] rounded-md' />
                        </div>
                        <textarea placeholder="Your message" className='bg-[#f9f9f9] border-[#f9f9f9] border-2 w-full h-[150px] mt-4 rounded-md' />
                        <button className='bg-black text-[#fff] font-bold px-12 py-4 mt-4 '>
                            Submit Now
                        </button>
                    </div>
                </div>
            </section>

        </>

    )
}
