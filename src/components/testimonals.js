import React, { useState } from 'react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(2);

    const testimonials = [
        {
            name: "Renee Calhoun",
            role: "CEO Wooley",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
            name: "Renee Calhoun",
            role: "CEO Wooley",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
            name: "Renee Calhoun",
            role: "CEO Woolley",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
            name: "Renee Calhoun",
            role: "CEO Wooley",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
            name: "Renee Calhoun",
            role: "CEO Wooley",
            image: "https://randomuser.me/api/portraits/men/3.jpg",
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const getDisplayIndexes = () => {
        // Circular display of images around the current index
        const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        const nextIndex = (currentIndex + 1) % testimonials.length;
        const secondPrevIndex = (currentIndex - 2 + testimonials.length) % testimonials.length;
        const secondNextIndex = (currentIndex + 2) % testimonials.length;

        return [secondPrevIndex, prevIndex, currentIndex, nextIndex, secondNextIndex];
    };

    const displayIndexes = getDisplayIndexes();

    return (
        <div className="bg-gray-100 py-10 px-4 mt-20">
            <h4 className='text-center font-semibold text-xl text-[#dfa667]'>Testimonials</h4>
            <h2 className="text-center text-5xl text-gray-800 mb-8 mt-6">WHAT YOUR CLIENTS SAY</h2>
            <div className="max-w-6xl h-[50vh] mx-auto shadow-lg rounded-lg p-8 relative mt-10 ">
                <p className="text-[#212529] text-center text-3xl italic mb-8 mt-10 ml-36 mr-36" style={{ lineHeight: "1.5" }}>
                    "Fast and accurate at solving mental math problems involving addition, subtraction, multiplication, division and percentages but without high-level skills that might be required in jobs requiring complex calculation and analysis."
                </p>

                {/* Next and Previous Buttons */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer">
                    <button onClick={handlePrevious} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer">
                    <button onClick={handleNext} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Display five images around the current image */}
            <div className="flex justify-center items-center space-x-4 -mt-10">
                {displayIndexes.map((index, i) => (
                    <div key={index} className="text-center">
                        <img
                            className={`w-${i === 2 ? '32' : '20'} h-${i === 2 ? '32' : '20'} rounded-full border-4 ${i === 2 ? 'border-gray-400' : 'border-gray-200'}`}
                            src={testimonials[index].image}
                            alt={testimonials[index].name}
                        />
                        {i === 2 && (
                            <div className="text-center mt-2">
                                <h4 className="font-bold text-gray-800">{testimonials[index].name}</h4>
                                <p className="text-orange-500 text-sm">{testimonials[index].role}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
