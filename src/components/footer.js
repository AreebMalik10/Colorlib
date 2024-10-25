import React from 'react'

export default function Footer() {
  return (
    <>
    
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Column - Brand and Address */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Staging.</h2>
          <p>7176 Blue Spring Lane<br />Santa Monica, CA 90403</p>
          <p className="mt-4">info.colorlib@gmail.com<br />+84 123 456 789</p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Center Column - Company Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Our Works</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Career</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
          </ul>
        </div>

        {/* Center Column - Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Architecture</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Interior Design</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Exterior Design</a></li>
            <li><a href="#" className="hover:text-gray-400">Planning</a></li>
          </ul>
        </div>

        {/* Right Column - Contact and Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
          <p>7176 Blue Spring Lane<br />Santa Monica, CA 90403</p>
          <p className="mt-4">info.colorlib@gmail.com<br />+84 123 456 789</p>
          <div className="mt-6">
            <form>
              <input
                type="email"
                placeholder="Enter your email..."
                className="px-4 py-2 w-full rounded-lg text-black"
              />
              <button
                type="submit"
                className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; 2024 All rights reserved | This template is made with <span className="text-orange-500">&hearts;</span> by Colorlib</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">Terms of use</a>
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
    </footer>


    </>
  )
}
