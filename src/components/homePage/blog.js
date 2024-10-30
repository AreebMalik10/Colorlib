import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPaperPlane, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Blog() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <>
            <section className="blogHeader">
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
                            OUR BLOGS
                        </h3>
                        <p className="text-white mt-4 md:mt-10 font-semibold">
                            <Link to="">HOME ~</Link>
                            <span className="text-[#dfa667]"> Blogs</span>
                        </p>
                    </div>
                </div>
            </section>

            <section className='MainContent'>
                <div className="flex flex-col md:flex-row items-start p-8 space-y-8 md:space-y-0 md:space-x-12 ml-10">
                    {/* First Column (Main Content) */}
                    <div className="w-full md:w-[52%] ml-32">
                        <p className="text-[#b7b7b7] mb-2 ml-6 " style={{ fontSize: "15px", fontWeight: "500", letterSpacing: "2px", textTransform: "uppercase" }}>December 20, 2019 • <span className='ml-16 mr-16'> By John Doe</span> • Planning</p>
                        <h1 className="text-4xl font-bold ml-6" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600", lineHeight: "48px" }}>Target and Amazon Shopping List for <br /> Home Stagers</h1>
                        <div className="bg-transparent  shadow-lg rounded-lg p-6 shadow shadow-t-0 shadow-left-0 shadow-r-0 outline-none" >
                            <img
                                src="https://preview.colorlib.com/theme/staging/img/project/project-3.jpg"
                                alt="Get Shit Done"
                                className="w-[100%] h-[65vh]  mb-6 "
                            />
                            <p className=" text-[#707070]  mt-10 ml-14" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400", lineHeight: "26px", fontSize: "17px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                            <div className="flex items-center ml-14">
                                <hr className="w-12 h-px bg-gray-300 border-0" />
                                <button className="bg-transparent text-black font-bold py-2 px-4 rounded ml-2">
                                    Read More
                                </button>
                            </div>
                        </div>

                        <div className=' bg-[#dfa667] mt-10 mb-10 h-[30vh] flex items-center justify-center text-center  '>
                            <div>
                                <h3 className='text-[#fff] text-left ' style={{ fontFamily: "Aldrich, sans-serif", fontSize: "24px", lineHeight: "32px", marginLeft: "50px", textTransform: "uppercase", marginRight: "50px" }}>“Without question this is the stager you want to use! Jennifer staged a hard to sell home for me and we sold it fast! …. Jennifer made it possible.”</h3>
                                <p className='text-[#fff] mt-4 text-left' style={{ fontFamily: "Aldrich, sans-serif", fontSize: "22px", letterSpacing: "4px", marginLeft: "50px", marginTop: "-10px" }}>Martin Lockhart
                                    <FontAwesomeIcon className='text-[#ffffff] text-5xl ' style={{ marginLeft: "470px" }} icon={faQuoteLeft} />

                                </p>
                            </div>
                        </div>

                        {/* Second Picture */}
                        <div className='mt-10'>
                            <p className="text-[#b7b7b7] mb-2 ml-6 " style={{ fontSize: "15px", fontWeight: "500", letterSpacing: "2px", textTransform: "uppercase" }}>December 20, 2019 • <span className='ml-16 mr-16'> By John Doe</span> • Planning</p>
                            <h1 className="text-4xl font-bold ml-6 " style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600", lineHeight: "48px" }}>6 Ideas for Team Building & Employee Appreciation for Home Stagers</h1>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <img
                                    src="https://preview.colorlib.com/theme/staging/img/project/project-1.jpg"
                                    alt="Get Shit Done"
                                    className="w-[100%] h-[65vh]  mb-6 "
                                />
                                <p className=" text-[#707070]  mt-10 ml-14" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400", lineHeight: "26px", fontSize: "17px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div className="flex items-center ml-14">
                                    <hr className="w-12 h-px bg-gray-300 border-0" />
                                    <button className="bg-transparent text-black font-bold py-2 px-4 rounded ml-2">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Third Picture */}
                        <div className='mt-10'>
                            <p className="text-[#b7b7b7] mb-2 ml-6 " style={{ fontSize: "15px", fontWeight: "500", letterSpacing: "2px", textTransform: "uppercase" }}>December 20, 2019 • <span className='ml-16 mr-16'> By John Doe</span> • Planning</p>
                            <h1 className="text-4xl font-bold ml-6" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600", lineHeight: "48px" }}>How to Find the Best Price Structure for Your Home Staging Services
                            </h1>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <img
                                    src="https://preview.colorlib.com/theme/staging/img/project/project-1.jpg"
                                    alt="Get Shit Done"
                                    className="w-[100%] h-[65vh]  mb-6 "
                                />
                                <p className=" text-[#707070]  mt-10 ml-14" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400", lineHeight: "26px", fontSize: "17px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div className="flex items-center ml-14">
                                    <hr className="w-12 h-px bg-gray-300 border-0" />
                                    <button className="bg-transparent text-black font-bold py-2 px-4 rounded ml-2">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Second Column (Sidebar) */}
                    <div className="w-full md:w-[25%] flex flex-col   space-y-4 !ml-20" >
                        <div className="text-center md:text-left">
                            <img
                                src="https://preview.colorlib.com/theme/staging/img/testimonial/ta-2.png"
                                alt="Author"
                                className="w-32 h-32 rounded-full mb-4 text-center ml-32"
                            />
                            <p className="text-[#353535] mb-4 text-center" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "26px", fontWeight: "400", fontSize: "17px" }}>
                                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                            <img src="https://preview.colorlib.com/theme/staging/img/blog/signature.png"
                                alt="Signature"
                                className='mt-8 ml-24 mb-6' />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border  border-gray-300  px-4 py-3 w-full"
                            style={{ borderTop: "hidden", borderLeft: "hidden", borderRight: "hidden" }}
                        />
                        <div className="mt-4 text-left">
                            <h2 className="text-lg text-[#111111] font-semibold  mt-10" style={{ fontFamily: "Aldrich, sans-serif", fontSize: "22px", textTransform: "uppercase", marginBottom: "10px", fontWeight: "400" }}>Categories</h2>
                            <ul className="space-y-2">
                                <li className="text-[#b7b7b7]" style={{ fontSize: "17px", lineHeight: "42px" }}>Work Space</li>
                                <li className="text-[#b7b7b7]" style={{ fontSize: "17px", lineHeight: "42px" }}>Office Building</li>
                                <li className="text-[#b7b7b7]" style={{ fontSize: "17px", lineHeight: "42px" }}>HomeStay</li>
                                <li className="text-[#b7b7b7]" style={{ fontSize: "17px", lineHeight: "42px" }}>Making</li>
                                <li className="text-[#b7b7b7]" style={{ fontSize: "17px", lineHeight: "42px" }}>Process</li>

                            </ul>
                        </div>
                        <div>
                            <h2 className='' style={{ fontFamily: "Aldrich, sans-serif", fontSize: "22px", fontWeight: "400", marginBottom: "20px" }}>FEATURE NEWS</h2>

                            <div className='flex items-left '>
                                <img src="https://preview.colorlib.com/theme/staging/img/blog/latest-1.jpg"
                                    alt="img1"
                                    className='w-[25%] h-[12vh]'
                                />

                                <div className='ml-6 '>
                                    <Link to="/">
                                        <p className='text-[#b7b7b7]' style={{ fontSize: "14px", textTransform: "uppercase", fontWeight: "600", letterSpacing: "2px" }}>
                                            December 20, 2019
                                        </p>


                                        <h3 className=' text-[#111111],text-bold text-lg' style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "26px", marginTop: "15px", marginleft: "20px", marginRight: "20px", fontWeight: "600" }}>
                                            Grace Millane's mother tells killer she died 'terrified
                                        </h3>
                                    </Link>
                                </div>


                            </div>

                            {/*Second feature news item */}
                            <div className='flex items-left mt-6'>
                                <img src="https://preview.colorlib.com/theme/staging/img/blog/latest-2.jpg"
                                    alt="img1"
                                    className='w-[25%] h-[12vh]'
                                />

                                <div className='ml-6 '>
                                    <Link to="/">
                                        <p className='text-[#b7b7b7]' style={{ fontSize: "14px", textTransform: "uppercase", fontWeight: "600", letterSpacing: "2px" }}>
                                            December 20, 2019
                                        </p>


                                        <h3 className=' text-[#111111],text-bold text-lg' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", lineHeight: "26px", marginTop: "15px", marginleft: "20px", marginRight: "20px", fontWeight: "600" }}>
                                            A 'gregarious' gap-year student who dreamed.
                                        </h3>
                                    </Link>
                                </div>


                            </div>

                            {/*Third feature news item */}
                            <div className='flex items-left mt-6'>
                                <img src="https://preview.colorlib.com/theme/staging/img/blog/latest-3.jpg"
                                    alt="img1"
                                    className='w-[25%] h-[12vh]'
                                />

                                <div className='ml-6 '>
                                    <Link to="/">
                                        <p className='text-[#b7b7b7]' style={{ fontSize: "14px", textTransform: "uppercase", fontWeight: "600", letterSpacing: "2px" }}>
                                            December 20, 2019
                                        </p>


                                        <h3 className=' text-[#111111],text-bold text-lg' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", lineHeight: "26px", marginTop: "15px", marginleft: "20px", marginRight: "20px", fontWeight: "600" }}>
                                            A 'gregarious' gap-year student who dreamed.
                                        </h3>
                                    </Link>
                                </div>


                            </div>
                        </div>
                        <section className='tag'>
                            <h2 className="text-lg text-[#111111] font-semibold  mt-10" style={{ fontFamily: "Aldrich, sans-serif", fontSize: "22px", textTransform: "uppercase", marginBottom: "10px", fontWeight: "400" }}>Tag</h2>
                            <p className='text-[#b7b7b7] ' style={{ fontSize: "15px", letterSpacing: "1px", fontWeight: "600" }}><Link span className='hover:text-black'>BRANDING</Link> <span className='-mt-10'>.</span>  <Link span className='hover:text-black'>OFFICE</Link> <span>.</span> <Link span className='hover:text-black'>CREATIVE</Link> <span>. </span><Link span className='hover:text-black'>BUILDING</Link> <span>.</span>  <Link span className='hover:text-black'>PORFFOLIO</Link> . <Link span className='hover:text-black'>PRODUCTS</Link> . <Link span className='hover:text-black'>WEBSITE</Link> . <Link span className='hover:text-black'>DESIGN</Link> . <Link span className='hover:text-black'>WORKING SPACE</Link></p>
                        </section>

                        <section className='socialmedialinks'>
                            <FontAwesomeIcon icon={faFacebook} className='text-2xl p-2 border-4 border-transparent hover:border-orange-600  ' />
                            <FontAwesomeIcon icon={faTwitter} className='text-2xl p-2 border-4 border-transparent hover:border-orange-600' />
                            <FontAwesomeIcon icon={faInstagram} className='text-2xl p-2 border-4 border-transparent hover:border-orange-600' />
                            <FontAwesomeIcon icon={faLinkedin} className='text-2xl p-2 border-4 border-transparent hover:border-orange-600' />

                        </section>


                        <section className='newsletter'>
                            <h2 className="text-lg text-[#111111] font-semibold  mt-10" style={{ fontFamily: "Aldrich, sans-serif", fontSize: "22px", textTransform: "uppercase", marginBottom: "10px", fontWeight: "400" }}>Newsletter</h2>
                            <div className="flex items-center border border-gray-300 border-t-0 border-l-0 border-r-0 w-full">
                                <input
                                    type="text"
                                    placeholder="Your email address"
                                    className="px-4 py-3 w-full border-0 focus:outline-none"

                                />
                                <FontAwesomeIcon icon={faPaperPlane} className="text-2xl text-gray-400 mr-4" />
                            </div>
                        </section>
                    </div>
                </div>



            </section>
        </>

    )
}
