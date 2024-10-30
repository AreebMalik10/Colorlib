import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
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
            <section className="servicesHeader">
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
                                        <FontAwesomeIcon icon={faBars} className='mt-4 ' style={{ marginRight: "-320px" }} />

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
                            OUR SERVICES
                        </h3>
                        <p className="text-white mt-4 md:mt-10 font-semibold">
                            <Link to="">HOME ~</Link>
                            <span className="text-[#dfa667]"> Services</span>
                        </p>
                    </div>
                </div>
            </section >


            <section className="py-16 bg-white">
                <div className="text-left mb-8" style={{ marginLeft: "330px" }}>
                    <h2 className="text-lg font-bold  text-orange-400">OUR SPECIALIZATION</h2>
                    <h3 className="text-4xl font-bold text-gray-800 mt-2">WHAT WE DO</h3>
                </div>
                <div className="max-w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[2px] -mx-2 px-4 " style={{ marginLeft: "300px" }}>
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg text-center">
                            <div className="flex justify-left mb-4">
                                <img src={service.icon} alt={service.title} className="w-16 h-16" />
                            </div>
                            <h4 className="text-2xl font-bold mb-2 text-gray-800 text-left" style={{ fontFamily: "FontAwesome" }}>{service.title}</h4>
                            <p className="text-gray-500 mb-4 text-left" style={{ fontSize: "17px" }}>{service.description}</p>
                            <ul className="text-left text-black space-y-1" style={{ fontFamily: "FontAwesome", lineHeight: "36px", fontSize: "17px" }}>
                                {service.points.map((point, i) => (
                                    <li key={i} className="list-disc list-inside">{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-black h-[30vh] py-16 mb-10">
                <div className="container mx-auto flex  justify-center justify-around items-center gap-0">
                    {stats.map((stat, index) => (
                        <div key={index} className=" flex text-center w-[15%] mt-6">
                            <h2 className="text-7xl font-bold text-[#dfa667]">{stat.number}</h2>
                            <p className="text-white text-xl font-semibold  " style={{ fontFamily: "Aldrich, sans-serif", fontWeight: "400", marginTop: "14px" }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='branding ' style={{marginTop:"200px", marginBottom:"200px"}}>
                <div className='flex items-center justify-center'>
                    <div className='mb-10'>
                        <h4 className='text-[#dfa667] mb-2 ' style={{fontSize:"17px", fontWeight:"650", letterSpacing:"1px"}}>BRANDING</h4>
                        <h1 className='text-4xl' style={{fontFamily:"Aldrich, sans-serif", fontWeight:"400"}}>OUR CLIENTS</h1>
                    </div>
                    <div className='' style={{marginLeft:"200px"}}>
                        <div className='flex items-center justify-center gap-10 '>
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
                        <div className='flex items-center justify-center gap-16 mt-10'>
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
