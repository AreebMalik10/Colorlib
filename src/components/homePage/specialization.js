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
        {
            number: 85, label: "PROJECTS COMPLETED"
        },
        {
            number: 127, label: "HAPPY CLIENTS"
        },
        {
            number: 36, label: "AWARDS RECEIVED"
        },
        {
            number: 74, label: "CUPS OF COFFEE"
        }
    ]
  

  return (

    <section className='ourSpecialization'>
                <div className="py-16 bg-white text-center ml-48 mr-32 mt-20">
                    <div className="text-[#dfa667] text-lg font-semibold text-left mb-4" style={{ letterSpacing: "1px" }}>OUR SPECIALIZATION</div>
                    <h2 className="text-5xl  text-gray-800 mb-12 text-left mb-10" style={{ fontFamily: "Aldrich, sans-serif", letterSpacing: "1px" }}>WHAT WE DO</h2>

                    {/* Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col items-left">
                                <img src={service.Image} alt={service.title} className="w-[20%] h-[10vh] mb-4 !text-left" /> {/* Image rendered here */}
                                <h3 className="text-3xl  text-left text-[ #111111] mb-2 mt-6 " style={{ fontFamily: "Aldrich, sans-serif", fontWeight: "520" }}>{service.title}</h3>
                                <p className="text-[#707070]  text-left mt-6" style={{ fontSize: "18px", fontFamily: "Poppins, sans-serif", lineHeight: "26px", fontWeight: "400", letterSpacing: "1px" }}>{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="flex items-center justify-center space-x-2 ">
                                    <div className="text-7xl font-bold text-[#dfa667] mt-20">{stat.number}</div>
                                    <div className="text-gray-700 font-semibold text-left !mr-28 mt-24" style={{ fontFamily: "Aldrich, sans-serif", fontSize: "1.5rem" }}>{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </section>

    )
}
