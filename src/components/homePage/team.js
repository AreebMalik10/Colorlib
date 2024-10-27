import React from 'react'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Team() {
    return (
        <>
            <div className="bg-white py-12 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Section Title */}
                    <div className="mb-8">
                        <h4 className="text-xl text-left font-semibold text-orange-600 mb-2 sm:mb-4">OUR TEAM</h4>
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">MEET OUR TEAM</h2>
                            <div className="mt-4 sm:mt-0">
                                <button className="relative inline-block px-8 sm:px-12 py-3 sm:py-4 font-bold text-black group">
                                    <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                                    <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
                                    <span className="relative z-10">View All</span>
                                </button>
                            </div>
                        </div>

                    </div>




                    {/* Team Members */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {/* Team Member 1 */}
                        <div className="relative text-center group">
                            <img
                                src="https://preview.colorlib.com/theme/staging/img/team/team-1.jpg"
                                alt="Dolores Webster"
                                className="w-full h-[550px] object-cover rounded-lg"
                            />

                            <div className="absolute inset-0 flex flex-col text-left items-center justify-center " style={{ marginTop: "400px", marginLeft: "40px", alignItems: "initial" }}>
                                <h3 className="mt-4 text-xl font-semibold text-white">Dolores Webster</h3>
                                <p className="text-md font-semibold text-[#dfa667]">CEO & Founder</p>
                            </div>

                            {/* Hover content */}
                            <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 p-6 rounded-lg">
                                {/* Top Content */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-left text-white mb-2">Dolores Webster</h3>
                                    <p className="text-md font-semibold text-left text-[#dfa667] mb-4">CEO & Founder</p>
                                    {/* Horizontal Line */}
                                    <hr className='border-t border-[#b7b7b7] my-4 ' style={{ width: "100%", margin: "0 auto", marginTop: "40px" }} />

                                    {/* Description with margin */}
                                    <p className="text-[#b7b7b7] mb-8 mt-12 mr-6 text-left" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "26px" }}>
                                        Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
                                    </p>
                                </div>

                                {/* Icons at the bottom */}
                                <div className="flex space-x-6 text-left item-start">
                                    <a href="#" className="text-white text-left text-2xl hover:text-[#dfa667]">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#" className="text-white text-2xl hover:text-[#dfa667]">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="#" className="text-white text-2xl hover:text-[#dfa667]">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                            </div>


                        </div>




                        {/* Team Member 2 */}
                        <div className="relative text-center group">
                            <img
                                src="https://preview.colorlib.com/theme/staging/img/team/team-2.jpg"
                                alt="Dana Vaughn"
                                className="w-full h-[550px] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 flex flex-col text-left items-center justify-center " style={{ marginTop: "400px", marginLeft: "40px", alignItems: "initial" }}>
                                <h3 className="mt-4 text-xl font-semibold text-white">Dana Vaughn</h3>
                                <p className="text-md font-semibold text-[#dfa667]">Architect</p>
                            </div>

                            {/* Hover content */}
                            <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 p-6 rounded-lg">
                                {/* Top Content */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-left text-white mb-2">Dana Vaughn</h3>
                                    <p className="text-md font-semibold text-left text-[#dfa667] mb-4">Architect</p>
                                    <hr className='border-t border-[#b7b7b7] my-4 ' style={{ width: "100%", margin: "0 auto", marginTop: "40px" }} />
                                    {/* Description with margin */}
                                    <p className="text-[#b7b7b7] mb-8 mt-14 mr-6 text-left" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "26px" }}>
                                        Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
                                    </p>
                                </div>

                                {/* Icons at the bottom */}
                                <div className="flex space-x-6 text-left item-start">
                                    <a href="#" className="text-white text-left text-2xl hover:text-[#dfa667]">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#" className="text-white text-2xl hover:text-[#dfa667]">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="#" className="text-white text-2xl hover:text-[#dfa667]">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Team Member 3 */}
                        <div className="relative text-center group ">
                            <img
                                src="https://preview.colorlib.com/theme/staging/img/team/team-3.jpg"
                                alt="Jonathan McDaniel"
                                className="w-full h-[550px] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 flex flex-col text-left items-center justify-center " style={{ marginTop: "400px", marginLeft: "40px", alignItems: "initial" }}>
                                <h3 className="mt-4 text-xl font-semibold text-white">Janathan Mcdaniel</h3>
                                <p className="text-md font-semibold text-[#dfa667]">Architect</p>
                            </div>
                            {/* Hover content */}
                            <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 p-6 rounded-lg">
                                {/* Top Content */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-left text-white mb-2">Janathan Mcdaniel</h3>
                                    <p className="text-md font-semibold text-left text-[#dfa667] mb-4">Architect</p>
                                    <hr className='border-t  border-[#b7b7b7] my-4' style={{ width: "100%", margin: "0 auto", marginTop: "40px" }} />
                                    {/* Description with margin */}
                                    <p className="text-[#b7b7b7] mb-8 mt-14 mr-6 text-left" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "26px" }}>
                                        Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
                                    </p>
                                </div>

                                {/* Icons at the bottom */}
                                <div className="flex space-x-6 text-left item-start">
                                    <a href="#" className="text-white text-left text-2xl hover:text-[#dfa667]">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#" className="text-white text-2xl hover:text-[#dfa667]">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="#" className="text-white text-2xl hover:text-[#dfa667]">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                            </div>




                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}
