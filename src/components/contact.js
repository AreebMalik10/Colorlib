import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Contact() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>


            <section className='header'>
                <div
                    className="bg-cover bg-center h-[20vh] items-center justify-center"
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
                </div>


            </section>
            <section className='contact'>
                <div className='mt-40 ml-52 mb-20'>
                    <p className='text-[#dfa667] ' style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", letterSpacing: "1px" }}>INFORMATION</p>
                    <h1 className='' style={{ fontFamily: "Aldrich, sans-serif", fontSize: "42px", lineHeight: "50px", fontWeight: "400" }}>CONTACT DETAILS</h1>
                    <p className='text-[#707070]' style={{ fontSize: "18px", fontFamily: "Poppins, sans-serif", fontWeight: "400", lineHeight: "26px", marginTop: "20px" }}>As you might expect of a company that began as a high- <br />  end interiors contractor, we pay strict attention.</p>
                </div>

                <div className='flex items-center  ml-52 mb-10'>
                    <img src="https://preview.colorlib.com/theme/staging/img/contact/ci-1.png"
                        alt="Phone Number "
                        className='w-[4%] '
                    />
                    <div className='ml-6'>
                        <h3 className='text-[#dfa667] ' style={{ fontFamily: "Aldrich, sans-serif", marginBottom: "10px", fontSize: "18px", fontWeight: "400" }}>PHONE NUMBER</h3>
                        <p className='text-[#111111] text-lg' style={{ fontFamily: "Poppins, sans-serif" }}>+01 123 456 789</p>
                    </div>

                    <img src="https://preview.colorlib.com/theme/staging/img/contact/ci-2.png"
                        alt="Email Address"
                        className='w-[4%] ' style={{ marginLeft: "170px" }} />
                    <div className='ml-6'>
                        <h3 className='text-[#dfa667] ' style={{ fontFamily: "Aldrich, sans-serif", marginBottom: "10px", fontSize: "18px", fontWeight: "400" }}>EMAIL ADDRESS</h3>
                        <p className='text-[#111111] text-lg' style={{ fontFamily: "Poppins, sans-serif" }}>info.colorlib@gmail.com</p>
                    </div>

                    <img src="https://preview.colorlib.com/theme/staging/img/contact/ci-3.png"
                        alt="Office Location"
                        className='w-[4%] ' style={{ marginLeft: "170px" }} />
                    <div className='ml-6'>
                        <h3 className='text-[#dfa667] ' style={{ fontFamily: "Aldrich, sans-serif", marginBottom: "10px", fontSize: "18px", fontWeight: "400" }}>OFFICE LOCATION</h3>
                        <p className='text-[#111111] text-lg' style={{ fontFamily: "Poppins, sans-serif" }}>7176 Blue Spring Lane, NY, US</p>
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

            <section className=' ml-52 mt-20 mb-32'>
                <div>
                    <h4 className='text-[#dfa667] text-xl' style={{ fontFamily: "Poppins, sans-serif" }}>FORM</h4>
                    <h1 className='text-[#111111] mt-4 mb-2' style={{ fontFamily: "Aldrich, sans-serif", fontSize: "42px", lineHeight: "50px", fontWeight: "400" }}>GET IN TOUCH</h1>
                    <p className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: "400", lineHeight: "26px" }}>As you might expect of a company that began as a high- <br /> end interiors contractor, we pay strict attention.</p>
                </div>
                <div className='container w-[70%] h-[60vh] mt-20 border '>
                    <div className='flex mt-10 ml-10 '>
                        <input type="text"
                            placeholder='Name'
                            className='text-[#b7b7b7] border h-[7vh] w-[40%] px-4 ' />

                        <input type="text"
                            placeholder='Email '
                            className='border ml-10 h-[7vh] w-[40%] px-4' />
                    </div>
                    <div className="ml-10">
                        <textarea
                            placeholder="Message"
                            className="border  mt-10 w-[84%] h-[23vh] px-4 pt-2 text-left "
                        />
                    </div>

                    <button className='bg-[#dfa667] text-white w-[20%] h-[8vh] font-bold text-lg mt-10 ml-10'>Send Message</button>
                </div>
            </section>
        </>
    )
}
