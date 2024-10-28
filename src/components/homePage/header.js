import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


export default function Header() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (event) => {
        event.preventDefault(); // Prevents navigation away if using Link

        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <section className='home'>
            <div className="relative w-full h-[150vh]">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/staging/img/hero/hero-1.jpg)' }}></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                {/* Navbar */}
                <div className="relative z-10 w-full">
                    <div className="container mx-auto flex justify-between items-center py-4 px-6">
                        {/* Left side logo and "Staging" */}
                        <div className="flex items-center space-x-2">
                            <span className="text-5xl font-bold text-white mt-6 ml-20" style={{ fontFamily: "Aldrich, sans-serif" }}>Staging</span>
                            <span className="w-2 h-2 bg-[#dfa667] rounded-full mt-10"></span>
                        </div>

                        {/* Centered navigation links */}
                        <div className="flex space-x-9 mt-6 -ml-10">
                            <a href="#" className="hover:text-[#dfa667] border-b-2 border-yellow-500 text-xl font-semibold text-white">
                                Home
                            </a>
                            <Link to="/projects" className="hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white">
                                Projects
                            </Link>
                            <Link to="/about" className="hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white">
                                About
                            </Link>
                            <div className="relative inline-block text-left">
            {/* Pages Link */}
            <Link
                to="#"
                className="hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white"
                onClick={toggleDropdown}
            >
                Pages
            </Link>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-48 z-50">
                    <Link to="/project-details">
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
                            Project Details
                        </button>
                    </Link>
                    <Link to="/more-details">
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
                            More Details
                        </button>
                    </Link>
                    <Link to="/services">
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
                            Services
                        </button>
                    </Link>
                    <Link to="/blog-details">
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
                            Blog Details
                        </button>
                    </Link>
                </div>
            )}
        </div>

                            <Link to="/blog" className="hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white" >
                                Blog
                            </Link>
                            <Link to="/" className="hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white">
                                Contact
                            </Link>
                        </div>

                        {/* Right side contact information */}
                        <div className="flex flex-col text-lg text-white -mb-10">
                            <span>Call us for any questions</span>
                            <span className="text-[#dfa667] text-2xl font-semibold">
                                +01 123 456 789
                            </span>
                        </div>
                    </div>

                </div>

                {/* Main Content Section */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 " >
                    {/* Heading */}
                    <h1 className="text-7xl font-bold tracking-widest " style={{ fontFamily: "Aldrich, sans-serif", marginTop: "-300px" }}>QUALITY IS NOT ONLY <br /> OUR STANDARD.</h1>

                    <button class="relative inline-block px-16 py-7 font-bold text-black group  mt-20">
                        <span class="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="relative z-10 text-white" >See Project</span>
                    </button>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute inset-y-0 flex justify-between items-center w-full px-4">
                    {/* Left Arrow */}
                    <button class="relative inline-block px-6 py-4 font-bold text-black group " style={{ marginLeft: "170px", marginBottom: "150px" }}>
                        <span class="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="relative z-10 text-white"><FontAwesomeIcon icon={faChevronLeft} /></span>
                    </button>

                    {/* Right Arrow */}
                    <button class="relative inline-block px-6 py-4 font-bold text-black group " style={{ marginRight: "170px", marginBottom: "150px" }}>
                        <span class="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                        <span class="relative z-10 text-white"><FontAwesomeIcon icon={faChevronRight} /></span>
                    </button>
                </div>
                <div className="relative w-full flex justify-between items-center py-6 px-10 text-white">
                    {/* Page Indicator */}
                    <div className="flex items-center space-x-4">
                        <span className="text-lg font-semibold">01</span>
                        <div className="w-16 h-px bg-white"></div>
                        <span className="text-lg font-semibold">02</span>
                    </div>

                    {/* Discover More Text */}
                    <div className="text-center text-sm text-gray-300">
                        <a href="#" className="hover:text-white">Discover more</a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="absolute bottom-14 w-full flex justify-between items-center py-6 px-10 text-white">
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
    )
}
