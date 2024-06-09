import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-yellow-200 text-white py-12">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4 text-gray-600">Scoopease</h3>
          <p className="text-gray-400">© 2024 All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors duration-300"
          >
          About us
          </a>
          <a
            href="https://github.com/Laila-Habibi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors duration-300"
          >
           Contact us
          </a>
          <a
            href="mailto:habibi.laila2000@gmail.com"
            className="text-gray-600 hover:text-white transition-colors duration-300"
          >
          Testimonials
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
