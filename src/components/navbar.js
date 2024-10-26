import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faTabletAlt, faMobileAlt, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (

        <div className="flex items-center bg-[#333]  h-20 px-4" style={{borderBottom:"1px solid #444", borderTop:"1px solid #444"}}>
            {/* Logo */}
            <div className="flex items-center space-x-1 mr-8">
                <span className="text-white font-semibold text-4xl" style={{fontFamily:"'Open Sans', sans-serif",fontWeight:"200"}}>colorlib</span>
                <span className="text-green-500 text-3xl">.</span>
            </div>

            {/* Staging */}
            
            <div className="flex items-center justify-center w-36 h-20 bg-[#222] text-gray-300 text-2xl font-medium mr-auto">
                + STAGING
            </div>
           

            {/* Icons */}
            <div className="flex items-center space-x-4">
                {/* Desktop Icon */}
                <button className="flex items-center justify-center w-16 h-20 bg-transparent border border-[#444] text-gray-300 text-2xl hover:bg-[#222] font-medium mr-auto" style={{ marginRight: "-17px" }}>
                    <FontAwesomeIcon icon={faDesktop} />
                </button>

                {/* Tablet Icon */}
                <button className="flex items-center justify-center w-16 h-20 bg-transparent border border-[#444] text-gray-300 text-2xl hover:bg-[#222]" style={{ marginRight: "-17px" }}>
                    <FontAwesomeIcon icon={faTabletAlt} />
                </button>

                {/* Mobile Icon */}
                <button className="flex items-center justify-center w-16 h-20 bg-transparent border border-[#444] text-gray-300 text-2xl hover:bg-[#222]" style={{ marginRight: "-17px" }}>
                    <FontAwesomeIcon icon={faMobileAlt} />
                </button>

                {/* Cart Icon with green background */}
                <button className="flex items-center justify-center w-16 h-20 text-2xl bg-green-300 hover:bg-[#222] " style={{ marginRight: "-15px" }}>
                    <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
                </button>

                {/* Close Icon */}
                <button className="flex items-center justify-center w-16 h-20 text-2xl text-gray-300 hover:bg-[#222]" style={{ marginRight: "-15px" }}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>

    )
}


