import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Contact() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () =>{
      setShowDropdown(!showDropdown);
    }
    return (
        <>

         
<section className='header'>
        <div className='bg-transparent h-[15vh]' style={{ background: "url('https://preview.colorlib.com/theme/staging/img/hero/hero-1.jpg')" }}>
          <div className='flex items-center justify-between' style={{marginTop:"70px"}}>
            <Link to="/" className='text-5xl font-bold text-white mt-0 ml-2'>Staging 
            <span className="text-yellow-300">.</span>

            </Link>
            <div className='text-white flex gap-10 mt-4'>
              <Link to="/" className='hover:text-[#dfa667] border-b-2 border-yellow-500 text-xl font-semibold text-white'>Home</Link>
              <Link to="/projects" className='hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white'>Projects</Link>
              <Link to="/about" className='hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white'>About</Link>
              <div>
              <button onClick={handleToggleDropdown} className='hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white'>Pages</button>
              
              {showDropdown && (
                <div className=' bg-white w-[9%] h-[15vh]  absolute flex flex-col mt-2'>
                  <Link to="/projects" className='text-[#111111] ml-4 text-lg font-bold '>Project Details</Link>
                  <Link to="/about" className='text-[#111111] ml-4 text-lg font-bold'>About</Link>
                  <Link to="/services" className='text-[#111111] ml-4 text-lg font-bold'>Services</Link>
                  <Link to="/blogdetails" className='text-[#111111] ml-4 text-lg font-bold'>Blog Details</Link>

                </div>
              )}
              </div>
              <Link to="/blog" className='hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white'>Blog</Link>
              <Link to="/contact" className='hover:border-b-2 hover:border-yellow-500 text-xl font-semibold text-white'>Contact</Link>
            </div>

            <div className='text-white mr-32 mt-8'>
              <p  className='text-[#b7b7b7]' style={{fontFamily:"Aldrich, sans-serif"}}>Call us for any questions</p>
              <p className='text-[#dfa667] text-2xl font-semibold'>+01 123 456 789
              </p>
            </div>
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
