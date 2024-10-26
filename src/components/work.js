import React, { useState } from "react";

export default function Work() {
    const [startIndex, setStartIndex] = useState(0);


    const images = [
        "https://preview.colorlib.com/theme/staging/img/project/project-1.jpg",
        "https://preview.colorlib.com/theme/staging/img/project/project-2.jpg",
        "https://preview.colorlib.com/theme/staging/img/project/project-3.jpg",
        "https://preview.colorlib.com/theme/staging/img/project/project-4.jpg",
        "https://preview.colorlib.com/theme/staging/img/project/project-2.jpg",
    ];

    const totalImages = images.length;
    const visibleImages = 4;

    // Function to go to the next set of images
    const nextImages = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    // Function to go to the previous set of images
    const prevImages = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    // Determine which images are visible
    const visibleImageIndexes = Array.from({ length: visibleImages }, (_, i) =>
        (startIndex + i) % totalImages
    );



    return (
        <>
            <div>
                <p className='text-center text-[#dfa667] text-xl mb-4 mt-20 ' style={{ letterSpacing: "1px", fontWeight: "bold" }}>OUR WORKS</p>
                <h1 className='text-center text-semibold text-5xl mb-10' style={{ letterSpacing: "1px" }} >LATEST PROJECTS</h1>
            </div>

            <div className="flex items-center justify-center">
                {/* Left Arrow */}
                <button
                    className="text-5xl font-bold p-2 bg-white shadow-md rounded-full ml-4 mr-4"
                    onClick={prevImages}
                >
                    &#8249;
                </button>

                {/* Image Gallery */}
                <div className="flex overflow-hidden w-full space-x-4 mx-4">
                    {visibleImageIndexes.map((index) => (
                        <div
                            key={index}
                            className="relative flex-none w-[24%] h-full group"
                        >
                            <img
                                src={images[index]}
                                alt={`Image ${index + 1}`}
                                className="w-full h-[80vh] object-cover shadow-lg"
                            />
                            {/* Overlay that appears on hover */}
                            <div className="absolute bottom-0 left-0 w-[80%] h-[15vh] overflow-hidden text-center p-4 bg-white bg-opacity-90 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ml-10 mb-20">
                                <p className="text-lg font-bold text-[#dfa667]" style={{letterSpacing:"2px", fontSize:"14px"}}>INTERIORS</p>
                                <h3 className="text-2xl font-bold text-gray-800" style={{fontFamily:"Aldrich, sans-serif", fontWeight:"450"}}>Lower River Street Astoria</h3>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Right Arrow */}
                <button
                    className="text-5xl font-bold p-2 bg-white shadow-md rounded-full mr-4"
                    onClick={nextImages}
                >
                    &#8250;
                </button>
            </div>
        </>
    )
}
