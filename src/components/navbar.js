import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faTabletAlt, faMobileAlt, faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div
    className="flex items-center bg-[#333] h-20 px-4 sm:px-2 md:px-4"
    style={{ borderBottom: "1px solid #444", borderTop: "1px solid #444" }}
>
    {/* Logo */}
    <div className="flex items-center space-x-1 mr-8">
        <span
            className="text-white font-semibold text-4xl sm:text-3xl"
            style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: "200" }}
        >
            colorlib
        </span>
        <span className="text-green-500 text-3xl sm:text-2xl">.</span>
    </div>

    {/* Staging */}
    <div className="hidden sm:flex items-center justify-center w-36 h-20 bg-[#222] text-gray-300 text-2xl font-medium sm:text-lg md:text-2xl mr-auto">
        + STAGING
    </div>

    {/* Icons */}
    <div className="flex items-center space-x-4 sm:space-x-2 md:space-x-4 ml-auto">
        {/* Desktop Icon */}
        <button
            className="flex items-center justify-center w-16 h-20 bg-transparent border border-[#444] text-gray-300 text-2xl hover:bg-[#222] font-medium hidden md:flex"
            style={{ marginRight: "-17px" }}
        >
            <FontAwesomeIcon icon={faDesktop} />
        </button>

        {/* Tablet Icon */}
        <button
            className="flex items-center justify-center w-12 h-16 bg-transparent border border-[#444] text-gray-300 text-xl font-medium hidden md:flex md:w-16 md:h-20 hover:bg-[#222]"
            style={{ marginRight: "-17px" }}
        >
            <FontAwesomeIcon icon={faTabletAlt} />
        </button>

        {/* Mobile Icon */}
        <button
            className="flex items-center justify-center w-12 h-16 bg-transparent border border-[#444] text-gray-300 text-xl font-medium hidden md:flex md:w-16 md:h-20 hover:bg-[#222]"
            style={{ marginRight: "-17px" }}
        >
            <FontAwesomeIcon icon={faMobileAlt} />
        </button>

        {/* Cart Icon */}
        <button
            className="flex items-center justify-center w-14 h-20 text-xl sm:w-12 sm:h-16 md:w-16 md:h-20 bg-green-300 hover:bg-[#222]"
            style={{ marginRight: "-17px" }}
        >
            <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
        </button>

        {/* Close Icon */}
        <button
            className="flex items-center justify-center w-14 h-20 text-xl sm:w-12 sm:h-16 md:w-16 md:h-20 text-gray-300 hover:bg-[#222]"
            style={{ marginRight: "-17px" }}
        >
            <FontAwesomeIcon icon={faTimes} />
        </button>
    </div>
</div>

    );
}
