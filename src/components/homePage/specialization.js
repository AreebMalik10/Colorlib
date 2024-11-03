import React from 'react'

export default function Specialization() {
    const services = [
        {
            title: "INTERIOR DESIGN",
            description: "As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.",
            Image: "https://preview.colorlib.com/theme/staging/img/services/services-1.png",
        },
        {
            title: "OFFICE DESIGN",
            description: "Our commitment to exceptional quality has never wavered. To this day, ranks as one of the most highly-regarded.",
            Image: "https://preview.colorlib.com/theme/staging/img/services/services-2.png",
        },
        {
            title: "HOME DESIGN",
            description: "Interdisciplinary architectural studio with cultural, residential, and commercial projects built worldwide.",
            Image: "https://preview.colorlib.com/theme/staging/img/services/services-3.png",
        },
        {
            title: "DESIGN DRAWING",
            description: "Creating architectural and creative solutions to help people realize their vision and make them a reality.",
            Image: "https://preview.colorlib.com/theme/staging/img/services/services-4.png",
        }
    ]

    const stats = [
        { number: 85, label: "PROJECTS COMPLETED" },
        { number: 127, label: "HAPPY CLIENTS" },
        { number: 36, label: "AWARDS RECEIVED" },
        { number: 74, label: "CUPS OF COFFEE" }
    ]

    return (
        <section className='ourSpecialization'>
            <div className="py-16 bg-white text-center mx-4 sm:mx-16 md:mx-32 lg:ml-48 lg:mr-32 mt-10">
                <div className="text-[#dfa667] text-lg font-semibold text-left mb-4" style={{ letterSpacing: "1px" }}>
                    OUR SPECIALIZATION
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 mb-12 text-left" style={{ fontFamily: "Aldrich, sans-serif", letterSpacing: "1px" }}>
                    WHAT WE DO
                </h2>

                {/* Services Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 mb-16">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center lg:items-start">
                            <img src={service.Image} alt={service.title} className="w-[50%] lg:w-[35%] xl:w-[20%] h-[10vh] mb-4 mx-auto lg:mx-0" />
                            <h3 className="text-2xl sm:text-3xl text-center lg:text-left text-[#111111] mb-2 mt-6" style={{ fontFamily: "Aldrich, sans-serif", fontWeight: "520" }}>
                                {service.title}
                            </h3>
                            <p className="text-[#707070] text-center lg:text-left mt-4 sm:mt-6 text-sm lg:text-base" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "26px", fontWeight: "400", letterSpacing: "1px" }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Stats Section */}
                <section className="bg-transparent sm:h-[30vh] py-16 mb-10 lg:-mb-20 lg:-ml-12 md:mr-[200px] lg:mr-0 mr-20 ">
                    <div className="container mx-auto flex flex-col sm:flex-row justify-center justify-around items-center gap-0 lg:flex-row md:flex-col justify-center justify-around items-center ">
                        {stats.map((stat, index) => (
                            <div key={index} className=" flex text-center w-[15%] mr-32 sm:mr-0 mt-6">
                                <h2 className="lg:text-7xl md:text-7xl text-7xl font-bold text-[#dfa667]">{stat.number}</h2>
                                <p className="text-black text-2xl font-semibold ml-4 sm:ml-0 " style={{ fontFamily: "Aldrich, sans-serif", fontWeight: "400", marginTop: "14px" }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}
