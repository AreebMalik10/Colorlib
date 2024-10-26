import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from './navbar.js';
import Work from './work.js';
import Testimonals from './testimonals';
import Team from './team.js'
import Footer from './footer.js';
import Choose from './choose.js';
import LatestNews from './latestNews.js';



export default function Home() {

    const services = [
        {
            title: "INTERIOR DESIGN",
            description: "As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.",
            Image: "https://preview.colorlib.com/theme/staging/img/services/services-1.png",
        },
        {
            title: "OFFICE DESIGN",
            description: "Our commitment to exceptional quality has never wavered. To this day, ranks as one of the most highly-regarded.",
            Image: "https://preview.colorlib.com/theme/staging/img/services/services-2.png",
        },
        {
            title: "HOME DESIGN",
            description: "Interdisciplinary architectural studio with cultural, residential, and commercial projects built worldwide.",
            Image: "https://preview.colorlib.com/theme/staging/img/services/services-3.png",
        },
        {
            title: "DESIGN DRAWING",
            description: "Creating architectural and creative solutions to help people realize their vision and make them a reality.",
            Image: "https://preview.colorlib.com/theme/staging/img/services/services-4.png",
        }
    ]

    const stats = [
        {
            number: 85, label: "PROJECTS COMPLETED"
        },
        {
            number: 127, label: "HAPPY CLIENTS"
        },
        {
            number: 36, label: "AWARDS RECEIVED"
        },
        {
            number: 74, label: "CUPS OF COFFEE"
        }
    ]


    return (

        <>

            <section className='nav-bar'>
                <Navbar />
            </section>


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
                                <span className="text-5xl font-bold text-white">Staging</span>
                                <span className="w-2 h-2 bg-[#dfa667] rounded-full mt-10"></span>
                            </div>

                            {/* Centered navigation links */}
                            <div className="flex space-x-9 mt-6">
                                <a href="#" className="hover:text-[#dfa667] text-underline text-xl font-semibold text-white">
                                    Home
                                </a>
                                <a href="#" className="hover:text-[#dfa667] text-xl font-semibold text-white">
                                    Projects
                                </a>
                                <a href="#" className="hover:text-[#dfa667] text-xl font-semibold text-white">
                                    About
                                </a>
                                <a href="#" className="hover:text-[#dfa667] text-xl font-semibold text-white">
                                    Pages
                                </a>
                                <a href="#" className="hover:text-[#dfa667] text-xl font-semibold text-white">
                                    Blog
                                </a>
                                <a href="#" className="hover:text-[#dfa667] text-xl font-semibold text-white">
                                    Contact
                                </a>
                            </div>

                            {/* Right side contact information */}
                            <div className="flex flex-col   text-xl text-white mt-2">
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
                        <h1 className="text-7xl font-bold tracking-widest " style={{ fontFamily: "Aldrich, sans-serif", marginTop:"-300px" }}>QUALITY IS NOT ONLY <br /> OUR STANDARD.</h1>

                        <button class="relative inline-block px-16 py-7 font-bold text-black group  mt-20">
                            <span class="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                            <span class="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                            <span class="relative z-10 text-white" >See Project</span>
                        </button>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute inset-y-0 flex justify-between items-center w-full px-4">
                        {/* Left Arrow */}
                        <button class="relative inline-block px-12 py-6 font-bold text-white text-2xl group " style={{ marginLeft: "160px" }}>
                            <span class="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                            <span class="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        {/* Right Arrow */}
                        <button class="relative inline-block px-12 py-6 font-bold text-white text-2xl group  " style={{ marginRight: "170px", marginTop: "10px" }}>
                            <span class="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                            <span class="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>                            <FontAwesomeIcon icon={faChevronRight} />
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
                </div>
            </section>

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

            <section>
                <Work />

            </section>


            <section className='ourSpecialization'>
                <div className="py-16 bg-white text-center ml-48 mr-32 mt-20">
                    <div className="text-[#dfa667] text-lg font-semibold text-left mb-4" style={{ letterSpacing: "1px" }}>OUR SPECIALIZATION</div>
                    <h2 className="text-5xl  text-gray-800 mb-12 text-left mb-10" style={{ fontFamily: "Aldrich, sans-serif", letterSpacing: "1px" }}>WHAT WE DO</h2>

                    {/* Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col items-left">
                                <img src={service.Image} alt={service.title} className="w-[20%] h-[10vh] mb-4 !text-left" /> {/* Image rendered here */}
                                <h3 className="text-3xl  text-left text-[ #111111] mb-2 mt-6 " style={{ fontFamily: "Aldrich, sans-serif", fontWeight: "520" }}>{service.title}</h3>
                                <p className="text-[#707070]  text-left mt-6" style={{ fontSize: "18px", fontFamily: "Poppins, sans-serif", lineHeight: "26px", fontWeight: "400", letterSpacing: "1px" }}>{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="flex items-center justify-center space-x-2 ">
                                    <div className="text-7xl font-bold text-[#dfa667] mt-20">{stat.number}</div>
                                    <div className="text-gray-700 font-semibold text-left !mr-28 mt-24" style={{ fontFamily: "Aldrich, sans-serif", fontSize: "1.5rem" }}>{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </section>

            <section>
                <Testimonals />
            </section>

            <section>
                <Team />
            </section>

            <section>
                <Choose />
            </section>

            <section>
                <LatestNews />
            </section>

            <section>
                <Footer />
            </section>



        </>

    )
}
