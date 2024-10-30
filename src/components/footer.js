import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#212529] w-full h-[80vh]'>
      <div className='flex items-center justify-between' >
      <h2 className='text-white mt-20 ' style={{textTransform:"uppercase", marginLeft:"200px"}}>Ready to Work with us?</h2>
      <div className='flex '>
      <input type="text"
      placeholder='Enter your email...'
      className='mt-20'
       /> 
      <FontAwesomeIcon icon={faPaperPlane} 
      className='bg-[#dfa667] h-[5vh] mt-20 '/>
      </div>
      </div>

    </div>
  )
}
