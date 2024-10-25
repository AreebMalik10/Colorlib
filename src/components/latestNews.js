import React from 'react'

export default function LatestNews() {
    const blogPosts = [
        {
            id:1,
            title:"Target and Amazon Shopping List for Home Stagers",
            category:"ARCHITECTURE",
            imageUrl:"https://preview.colorlib.com/theme/staging/img/blog/latest-1.jpg",
            link:"#"
        },
        {
            id:2,
            title:"6 Ideas for Team Building and Employee Appreciation for Home Stagers",
            category: "INTERIOR",
            imageUrl:"https://preview.colorlib.com/theme/staging/img/blog/latest-3.jpg",
            link:"#"
        },
        {
            id:3,
            title:"How to Find the Best Price Structure for Your Home Staging Services",
            category:"PLANNING",
            imageUrl:"https://preview.colorlib.com/theme/staging/img/blog/latest-2.jpg",
            link:"#"

        }
    ]
  return (
    <div className='container mx-auto py-16 px-4'>
                <p className='text-[#dfa667] font-bold'>LATEST NEWS</p>

     <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">FROM OUR BLOG</h2>
        <a href="#" className="text-sm font-semibold text-gray-500 hover:text-black">View All</a>
      </div>

     <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {blogPosts.map((post)=>(
            <div key={post.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
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
