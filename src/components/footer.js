import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div
        className="h-screen"
        style={{
          backgroundImage: "url('https://preview.colorlib.com/theme/staging/img/footer-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='flex items-center justify-between '>
          <h2 className='text-[#ffffff] mt-20 ' style={{ fontFamily: "Aldrich, sans-serif", marginLeft: "240px", fontSize: "40px", fontWeight: "400" }}>READY TO WORK WITH US?</h2>
          <div className=' flex mt-20 w-[25%]' style={{ marginRight: "200px" }}>
            <input type="text"
              placeholder='Enter your email...'
              className='pl-3 h-[7vh] w-[150%]' />
            <div className='bg-[#dfa667] h-[7vh] w-[20%] flex items-center justify-center'>
              <FontAwesomeIcon icon={faPaperPlane}
                className='text-2xl  '
              />
            </div>
          </div>

        </div>

        <hr className='w-[76%] mx-auto mt-20 border-t border-[#707070]' />
        <div className='flex  gap-20 mt-20 '>
          <div className=' ' style={{ marginLeft: "200px" }}>
            <div className='text-white mt-4'>
              <Link>
                <img src="https://preview.colorlib.com/theme/staging/img/logo.png" alt="" />
              </Link>
              <br />
              <h3 className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>7176 Blue Spring Lane</h3>
              <h3 className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>Santa Monica, CA 90403</h3>
            </div>
            <br />
            <div className='text-white '>
              <h3 className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>Info.colorlib@gmail.com</h3>
              <h3 className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>+84 123 456 789</h3>
            </div>
            <br />
            <div className='text-white flex  gap-8 mt-4'>
              <Link to="/">
                <FontAwesomeIcon icon={faFacebook}
                  className='text-2xl' />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faTwitter}
                  className='text-2xl' />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faInstagram}
                  className='text-2xl' />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faLinkedin}
                  className='text-2xl' />
              </Link>
            </div>
          </div>

          <div className='flex gap-28 mt-2 ' style={{ marginLeft: "200px" }}>

            <div className=''>
              <h2 className='text-white text-lg font-bold mb-10 ' style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}>Company</h2>
              <Link>
                <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }} >About Us</p>
              </Link>

              <Link>
                <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }} >Services</p>
              </Link>

              <Link>
                <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }} >Our Works</p>
              </Link>

              <Link>
                <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }} >Career</p>
              </Link>

              <Link>
                <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }} >FAQs</p>
              </Link>
            </div>

            <div className='mb-6'>
              <h2 className='text-white text-lg font-bold mb-10 ' style={{ font: "Poppins, sans-serif", fontWeight: "600" }}>Services</h2>
              <Link>
                <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }} >Architecture</p>
              </Link>

              <Link>
                <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }} >Interior Design</p>
              </Link>

              <Link>
                <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }} >Exterior Design</p>
              </Link>

              <Link>
                <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }} >Planning</p>
              </Link>

            </div>

            <div className=''>
              <h2 className='text-white text-lg font-bold mb-8' style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}>Get In Touch</h2>
              <p className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>7176 Blue Spring Lane</p>
              <p className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>Santa Monica, CA 90403</p>
              <br />
              <p className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>Info.colorlib@gmail.com</p>
              <p className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>+84 123 456 789</p>

            </div>
          </div>
        </div>

        <hr className='  mt-20 w-[76%] mx-auto border-t border-[#707070] ' />
        <div className='flex items-center justify-between mt-6 '>
          <div>
          <p className='text-[#707070] ' style={{marginLeft:"200px"}}>Copyright © 2024 All rights reserved | This template is made with  by <Link to='/' className='text-white font-bold'>Colorlib</Link> 

          </p>
          </div>
          <div className='flex' style={{marginRight:"200px"}}>
          <Link to="/" className='text-[#707070]' style={{fontFamily:"Poppins, sans-serif",fontSize:"16px"}}>
            Terms of use
          </Link>
          <span className='text-[#707070] ml-6 mr-6 '>|</span>
          <Link to="/" className='text-[#707070]' style={{fontFamily:"Poppins, sans-serif",fontSize:"16px"}}>Privacy Policy</Link>
        </div>
        </div>
      </div>

    </>
  )
}
