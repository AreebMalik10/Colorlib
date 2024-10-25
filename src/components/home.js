import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faTabletAlt, faMobileAlt, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { icon } from '@fortawesome/fontawesome-svg-core';
import Testimonals from './testimonals';
import Team from './team.js'
import Footer from './footer.js';
import Choose from './choose.js';
import LatestNews from './latestNews.js';

const StyledButton = styled.div`
  width: 150px;
  height: 50px;
  border: 1px solid #333;
  font-size: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  transition: 1s;
  color: #000;
  font-family: sans-serif;

  &::before,
  &::after {
    position: absolute;
    background: #e8e8e8;
    z-index: -1;
    transition: 1s;
    content: "";
  }

  &::before {
    height: 50px;
    width: 130px;
  }

  &::after {
    width: 150px;
    height: 30px;
  }

  &:hover::before {
    width: 0px;
    background: #e8e8e8;
  }

  &:hover::after {
    height: 0px;
    background: #fff;
  }

  &:hover {
    background: #fff;
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

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

            <section className='navbar'>
                <div className="bg-[#333] flex items-center justify-between px-6 py-4">
                    {/* Left Side - Logo */}
                    <div className="flex items-center space-x-4">
                        <div className="text-white text-4xl font-bold">colorlib<span className='text-green-500'>.</span></div>
                        <div className="text-gray-400 text-2xl">+ STAGING</div>
                    </div>

                    {/* Right Side - Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Device Icons */}
                        <div className="p-4  bg-gray-800 rounded-lg">
                            <FontAwesomeIcon icon={faDesktop} className="text-white text-2xl cursor-pointer" />
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <FontAwesomeIcon icon={faTabletAlt} className="text-white text-2xl cursor-pointer" />
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <FontAwesomeIcon icon={faMobileAlt} className="text-white text-2xl cursor-pointer" />
                        </div>

                        {/* Cart Icon */}
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <FontAwesomeIcon icon={faShoppingCart} className="text-green-500 text-2xl cursor-pointer" />
                        </div>

                        {/* Close Icon */}
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <FontAwesomeIcon icon={faTimes} className="text-white text-2xl cursor-pointer" />
                        </div>
                    </div>


                </div>
            </section>


            <section className='home'>
                <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://preview.colorlib.com/theme/staging/img/hero/hero-1.jpg)" }}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>

                    {/* Navbar */}
                    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6">
                        <div className="text-white text-5xl font-semibold ml-32">Staging<span className="text-yellow-400">.</span></div>
                        <div className="flex space-x-12 text-white">
                            <button className="text-xl font-bold underline decoration-yellow-400 !cursor-pointer hover:text-yellow-400">Home</button>
                            <button className="text-xl font-bold hover:underline decoration-yellow-400">Projects</button>
                            <button className="text-xl font-bold hover:text-yellow-400">About</button>
                            <button className="text-xl font-bold hover:text-yellow-400">Pages</button>
                            <button className="text-xl font-bold hover:text-yellow-400">Blog</button>
                            <button className="text-xl font-bold hover:text-yellow-400">Contact</button>
                        </div>
                        <div className="text-[#fff] text-md mr-20">
                            <p>Call us for any questions</p>
                            <a href="tel:+01123456789" className="text-lg text-yellow-400">+01 123 456 789</a>
                        </div>
                    </nav>

                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <h1 className="text-white text-8xl font-bold uppercase tracking-wide text-center ">
                            Quality is not only <br /> our standard.
                        </h1>

                        {/* Styled Button */}
                        <StyledButton>
                            <span className="noselect">Button</span>
                        </StyledButton>
                    </div>

                    {/* Left and Right arrows */}
                    <div className="absolute left-6 bottom-1/2 transform -translate-y-1/2">
                        <button className="text-white text-4xl hover:text-gray-300">{"<"}</button>
                    </div>
                    <div className="absolute right-6 bottom-1/2 transform -translate-y-1/2">
                        <button className="text-white text-4xl hover:text-gray-300">{">"}</button>
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
                    <button className="px-6 py-2 bg-black text-white font-bold hover:bg-gray-800 transition-all rounded-md mt-4">
                        Learn More
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

            <section className='ourWorks'>
                <div>
                    <p className='text-center text-[#dfa667] text-xl mb-4 mt-20 ' style={{ letterSpacing: "1px", fontWeight: "bold" }}>OUR WORKS</p>
                    <h1 className='text-center text-semibold text-5xl mb-10' style={{ letterSpacing: "1px" }} >LATEST PROJECTS</h1>
                </div>

                <div className="flex items-center justify-center">
                    {/* Left Arrow */}
                    <button className="text-5xl font-bold p-2 bg-white shadow-md rounded-full ml-4 mr-4">
                        &#8249;
                    </button>

                    {/* Image Gallery */}
                    <div className="flex overflow-x-auto w-full space-x-4 mx-4">
                        <div className="flex-none w-[24%] h-full">
                            <img
                                src="https://preview.colorlib.com/theme/staging/img/project/project-1.jpg"
                                alt="Image 1"
                                className="w-full h-[80vh] object-cover shadow-lg"
                            />
                        </div>
                        <div className="flex-none w-[24%] h-full">
                            <img
                                src="https://preview.colorlib.com/theme/staging/img/project/project-2.jpg"
                                alt="Image 2"
                                className="w-full h-[80vh] object-cover shadow-lg"
                            />
                        </div>
                        <div className="flex-none w-[24%] h-full">
                            <img
                                src="https://preview.colorlib.com/theme/staging/img/project/project-3.jpg"
                                alt="Image 3"
                                className="w-full h-[80vh] object-cover shadow-lg"
                            />
                        </div>
                        <div className="flex-none w-[24%] h-full">
                            <img
                                src="https://preview.colorlib.com/theme/staging/img/project/project-4.jpg"
                                alt="Image 4"
                                className="w-full h-[80vh] object-cover shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button className="text-5xl font-bold p-2 bg-white shadow-md rounded-full mr-4">
                        &#8250;
                    </button>
                </div>

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
                <Testimonals/>
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
                 <Footer/>
            </section>

            

        </>

    )
}
