import React from 'react'

export default function LatestNews() {
  const blogPosts = [
    {
      id: 1,
      title: "Target and Amazon Shopping List for Home Stagers",
      category: "ARCHITECTURE",
      imageUrl: "https://preview.colorlib.com/theme/staging/img/blog/latest-1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "6 Ideas for Team Building and Employee Appreciation for Home Stagers",
      category: "INTERIOR",
      imageUrl: "https://preview.colorlib.com/theme/staging/img/blog/latest-3.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "How to Find the Best Price Structure for Your Home Staging Services",
      category: "PLANNING",
      imageUrl: "https://preview.colorlib.com/theme/staging/img/blog/latest-2.jpg",
      link: "#"
    }
  ]
  return (
    <div className='container mx-auto py-16 px-4'>
      <p className='text-[#dfa667] font-bold text-center md:text-left md:ml-32'>LATEST NEWS</p>

      <div className="flex justify-between items-center mb-8 md:mb-10 md:ml-32">
        <h2 className="text-4xl font-bold text-center md:text-left">FROM OUR BLOG</h2>
        <button className="relative inline-block px-8 py-2 font-bold text-black group md:px-12 md:py-4 md:mr-40 mt-4 md:mt-0">
          <span className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
          <span className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#c4c4c4]"></span>
          <span className="relative z-10">View All</span>
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-0 md:mx-32'>
        {blogPosts.map((post) => (
          <div key={post.id} className='bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto'>
            <img src={post.imageUrl} alt={post.title} className='w-full h-48 object-cover' />
            <div className="p-6">
              <p className="text-sm font-semibold text-gray-400 mb-2">{post.category}</p>
              <h3 className="text-xl font-bold mb-4">{post.title}</h3>
              <a href={post.link} className="text-orange-500 font-semibold hover:underline">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
