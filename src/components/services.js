import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);




  const services = [
    {
      title: 'INTERIOR DESIGN',
      description: 'As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.',
      points: [
        'Energy allocation.',
        'Fire protection, safety',
        'Lifts and escalators.',
        'Facade engineering.'
      ],
      icon: 'https://preview.colorlib.com/theme/staging/img/services/services-1.png'
    },
    {
      title: 'OFFICE DESIGN',
      description: 'Our commitment to exceptional quality has never wavered. To date, ranks as one of the most highly-regarded construction.',
      points: [
        'Active system.',
        'Air conditioning.',
        'BSRIA blue book.',
        'Building services engineer.'
      ],
      icon: 'https://preview.colorlib.com/theme/staging/img/services/services-2.png'
    },
    {
      title: 'HOME DESIGN',
      description: 'Interdisciplinary architectural studio with cultural, residential and commercial projects built worldwide.',
      points: [
        'Pipework.',
        'Plant room.',
        'Plumbing.',
        'Rules of Thumb'
      ],
      icon: 'https://preview.colorlib.com/theme/staging/img/services/services-3.png'
    },
    {
      title: 'DESIGN DRAWING',
      description: 'Creating architectural and creative solutions to help people realize their vision and make them a reality.',
      points: [
        'Guidelines for building.',
        'Thermal comfort.',
        'Types of building services.',
        'Types of heating system.'
      ],
      icon: 'https://preview.colorlib.com/theme/staging/img/services/services-4.png'
    }
  ];

  const stats = [
    { number: 85, label: "PROJECTS  COMPLETED" },
    { number: 127, label: "HAPPY CLIENTS" },
    { number: 36, label: "AWARDS RECEIVED" },
    { number: 74, label: "CUPS OF COFFEE" },
  ];


  return (
    <>
      <section className='header'>
        <div className='bg-transparent h-[50vh]' style={{ background: "url('https://preview.colorlib.com/theme/staging/img/hero/hero-1.jpg')" }}>
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
      
          <div className="text-center mt-20 md:mt-40 lg:mt-20">
            <h3
              className="text-white text-3xl md:text-5xl font-semibold"
              style={{ fontFamily: "Aldrich, sans-serif" }}
            >
              OUR SERVICES
            </h3>
            <p className="text-white mt-4 md:mt-10 font-semibold">
              <Link to="">HOME ~</Link>
              <span className="text-[#dfa667]"> Services</span>
            </p>
          </div>
        </div>

      </section>


      <section className="py-16 bg-white">
        <div className="text-left mb-8 ml-8 sm:ml-20 md:ml-[280px]  text-center sm:text-left ">
          <h2 className="text-md sm:text-lg font-bold text-orange-400">OUR SPECIALIZATION</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">WHAT WE DO</h3>
        </div>
        <div className="max-w-full md:max-w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg text-center sm:text-left">
              <div className="flex justify-center sm:justify-start mb-4">
                <img src={service.icon} alt={service.title} className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 text-center sm:text-left" style={{ fontFamily: "FontAwesome" }}>
                {service.title}
              </h4>
              <p className="text-gray-500 mb-4 text-center sm:text-left" style={{ fontSize: "16px" }}>
                {service.description}
              </p>
              <ul className="text-center sm:text-left text-black space-y-1" style={{ fontFamily: "FontAwesome", lineHeight: "28px", fontSize: "16px" }}>
                {service.points.map((point, i) => (
                  <li key={i} className="list-disc list-inside">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#212529] sm:h-[30vh]    py-16 mb-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center justify-around items-center gap-0">
          {stats.map((stat, index) => (
            <div key={index} className=" lg:flex lg:text-center w-[15%] mr-32 sm:mr-0 mt-6">
              <h2 className="text-7xl font-bold text-[#dfa667]">{stat.number}</h2>
              <p className="text-white text-xl font-semibold ml-4 sm:ml-0 " style={{ fontFamily: "Aldrich, sans-serif", fontWeight: "400", marginTop: "14px" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='branding ' style={{ marginTop: "200px", marginBottom: "200px" }}>
  <div className='flex items-center justify-center flex-wrap'>
    <div className='mb-10 text-center md:text-left sm:mr-32 md:-mr-4 lg:mr-32'>
      <h4 className='text-[#dfa667] mb-2 ' style={{ fontSize: "17px", fontWeight: "650", letterSpacing: "1px" }}>BRANDING</h4>
      <h1 className='text-4xl' style={{ fontFamily: "Aldrich, sans-serif", fontWeight: "400" }}>OUR CLIENTS</h1>
    </div>
    <div className='ml-0 md:ml-20 w-full md:w-auto'>
      <div className='flex items-center justify-center gap-10 flex-wrap'>
        <Link to="/services">
          <img src="https://preview.colorlib.com/theme/staging/img/logo/logo-1.png" alt="" />
        </Link>
        <Link to="/services">
          <img src="https://preview.colorlib.com/theme/staging/img/logo/logo-2.png" alt="" />
        </Link>
        <Link to="/services">
          <img src="https://preview.colorlib.com/theme/staging/img/logo/logo-3.png" alt="" />
        </Link>
      </div>
      <div className='flex items-center justify-center gap-16 mt-10 flex-wrap'>
        <Link to="/services">
          <img src="https://preview.colorlib.com/theme/staging/img/logo/logo-4.png" alt="" />
        </Link>
        <Link to="/services">
          <img src="https://preview.colorlib.com/theme/staging/img/logo/logo-3.png" alt="" />
        </Link>
        <Link to="/services">
          <img src="https://preview.colorlib.com/theme/staging/img/logo/logo-5.png" alt="" />
        </Link>
      </div>
    </div>
  </div>
</section>






    </>
  )
}
