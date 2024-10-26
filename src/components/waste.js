<section className='ourWorks'>
<div>
    <p className='text-center text-[#dfa667] text-xl mb-4 mt-20 ' style={{ letterSpacing: "1px", fontWeight: "bold" }}>OUR WORKS</p>
    <h1 className='text-center text-semibold text-5xl mb-10' style={{ letterSpacing: "1px" }} >LATEST PROJECTS</h1>
</div>

<div className="flex items-center justify-center">
    {/* Left Arrow */}
    <button className="text-5xl font-bold p-2 bg-white shadow-md rounded-full ml-4 mr-4">
        &#8249;
    </button>

    {/* Image Gallery */}
    <div className="flex overflow-x-auto w-full space-x-4 mx-4">
        <div className="flex-none w-[24%] h-full">
            <img
                src="https://preview.colorlib.com/theme/staging/img/project/project-1.jpg"
                alt="Image 1"
                className="w-full h-[80vh] object-cover shadow-lg"
            />
        </div>
        <div className="flex-none w-[24%] h-full">
            <img
                src="https://preview.colorlib.com/theme/staging/img/project/project-2.jpg"
                alt="Image 2"
                className="w-full h-[80vh] object-cover shadow-lg"
            />
        </div>
        <div className="flex-none w-[24%] h-full">
            <img
                src="https://preview.colorlib.com/theme/staging/img/project/project-3.jpg"
                alt="Image 3"
                className="w-full h-[80vh] object-cover shadow-lg"
            />
        </div>
        <div className="flex-none w-[24%] h-full">
            <img
                src="https://preview.colorlib.com/theme/staging/img/project/project-4.jpg"
                alt="Image 4"
                className="w-full h-[80vh] object-cover shadow-lg"
            />
        </div>
    </div>

    {/* Right Arrow */}
    <button className="text-5xl font-bold p-2 bg-white shadow-md rounded-full mr-4">
        &#8250;
    </button>
</div>

</section>
