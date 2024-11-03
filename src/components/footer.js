import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div
      className="bg-cover bg-center py-10"
      style={{
        backgroundImage: "url('https://preview.colorlib.com/theme/staging/img/footer-bg.jpg')",
      }}
    >
      <div className='flex flex-col lg:flex-row items-center justify-between lg:ml-[200px] lg:mr-[200px] lg:mt-10 lg:mb-20 px-4 lg:px-0'>
        <h2 className='text-[#ffffff] mt-10 text-2xl lg:text-4xl' style={{ fontFamily: "Aldrich, sans-serif" }}>
          READY TO WORK WITH US?
        </h2>
        <div className='flex mt-4 lg:mt-10 w-full lg:w-[25%]'>
          <input
            type="text"
            placeholder='Enter your email...'
            className='pl-3 h-[7vh] w-full'
          />
          <div className='bg-[#dfa667] h-[7vh] w-[20%] flex items-center justify-center'>
            <FontAwesomeIcon icon={faPaperPlane} className='text-2xl' />
          </div>
        </div>
      </div>

      <hr className='w-[76%] mx-auto mt-10 border-t border-[#707070] lg:mb-[80px]' />

      <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 mt-10 px-4 lg:px-0'>
        <div className='lg:ml-[200px] lg:mt-[20px]'>
          <div className='text-white text-center lg:text-left'>
            <Link>
              <img src="https://preview.colorlib.com/theme/staging/img/logo.png" alt="" className="mx-auto lg:mx-0 lg:mb-4" />
            </Link>
            <h3 className='text-[#707070] lg:mb-[2px]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
              7176 Blue Spring Lane
            </h3>
            <h3 className='text-[#707070] lg:mb-[32px]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
              Santa Monica, CA 90403
            </h3>
            <h3 className='text-[#707070] lg:mb-[2px]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
              Info.colorlib@gmail.com
            </h3>
            <h3 className='text-[#707070] lg:mb-[55px]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
              +84 123 456 789
            </h3>
            <div className='text-white flex gap-4 justify-center lg:justify-start mt-4'>
              <Link to="/">
                <FontAwesomeIcon icon={faFacebook} className='text-2xl' />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faTwitter} className='text-2xl' />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faInstagram} className='text-2xl' />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faLinkedin} className='text-2xl' />
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 lg:gap-28 mt-2 lg:ml-[200px]'>
          <div className='text-center lg:text-left'>
            <h2 className='text-white text-lg font-bold mb-4 lg:mb-8' style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}>
              Company
            </h2>
            <Link>
              <p className='text-[#707070] mb-4 ' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
                About Us
              </p>
            </Link>
            <Link>
              <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
                Services
              </p>
            </Link>
            <Link>
              <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
                Our Works
              </p>
            </Link>
            <Link>
              <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
                Career
              </p>
            </Link>
            <Link>
              <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
                FAQs
              </p>
            </Link>
          </div>

          <div className='text-center lg:text-left'>
            <h2 className='text-white text-lg font-bold mb-4 lg:mb-8' style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}>
              Services
            </h2>
            <Link>
              <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
                Architecture
              </p>
            </Link>
            <Link>
              <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
                Interior Design
              </p>
            </Link>
            <Link>
              <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
                Exterior Design
              </p>
            </Link>
            <Link>
              <p className='text-[#707070] mb-4' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
                Planning
              </p>
            </Link>
          </div>

          <div className='text-center lg:text-left'>
            <h2 className='text-white text-lg font-bold mb-4 lg:mb-8' style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}>
              Get In Touch
            </h2>
            <p className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
              7176 Blue Spring Lane
            </p>
            <p className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
              Santa Monica, CA 90403
            </p>
            <p className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
              Info.colorlib@gmail.com
            </p>
            <p className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: "400", lineHeight: "26px" }}>
              +84 123 456 789
            </p>
          </div>
        </div>
      </div>

      <hr className='mt-10 w-[76%] mx-auto border-t border-[#707070] lg:mt-[100px]' />
      <div className='flex flex-col lg:flex-row items-center justify-between lg:ml-[200px] lg:mr-[200px] mt-6 px-4 lg:px-0'>
        <div>
          <p className='text-[#707070] text-center lg:text-left' style={{ marginLeft: "0px" }}>
            Copyright © 2024 All rights reserved | This template is made with by <Link to='/' className='text-white font-bold'>Colorlib</Link>
          </p>
        </div>
        <div className='flex justify-center lg:justify-end mt-2'>
          <Link to="/" className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}>
            Terms & Conditions
          </Link>
          <span className='text-[#707070] mx-4'>|</span>
          <Link to="/" className='text-[#707070]' style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
