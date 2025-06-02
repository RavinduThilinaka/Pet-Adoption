import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-12 pb-6 border-t-4 border-orange-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-2xl font-bold text-orange-500 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Paws & Care
            </h3>
            <p className="text-gray-600 mb-4">Your trusted partner in pet wellness since 2015. We love your pets as much as you do!</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300 transform hover:scale-125">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300 transform hover:scale-125">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300 transform hover:scale-125">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300 transform hover:scale-125">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                  Grooming
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                  Veterinary Care
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">123 Pet Street, Animal City</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">hello@pawscare.com</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Mon-Sat: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pet Care Tips</h3>
            <p className="text-gray-600 mb-4">Subscribe for pet care tips and special offers!</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
              />
              <button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Paws & Care. All rights reserved.
              <a href="#" className="text-orange-500 hover:underline ml-2">Privacy Policy</a>
              <a href="#" className="text-orange-500 hover:underline ml-2">Terms of Service</a>
            </p>
            <p className="text-orange-500 text-sm flex items-center animate-pulse">
              Made with 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              for pets
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;