import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialSection from '../components/SocialSection';
import Footer from '../components/Footer';
import blogs from '../data/Blog.json'

const Blog = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>

      <div className="relative h-[600px] bg-cover bg-screen bg-no-repeat" style={{ backgroundImage: "url('/Newsletter.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <header className="absolute top-0 left-0 w-full z-20 p-4 md:p-6">
          <div className="flex justify-between items-center mb-6 text-white">
            <Link to="/">
              <div className="flex items-center gap-2">
                <img src="/LOGO.png" alt="Logo" className="h-10 w-auto" />
              </div>
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 font-medium">
              <Link to="/">
                <a className="hover:text-yellow-300">Home</a>
              </Link>
              <Link to="/about">
                <a className="hover:text-yellow-300">About Us</a>
              </Link>
              <Link to="/services">
                <a className="hover:text-yellow-300">Services</a>
              </Link>
              <Link to="/blog" className="hover:text-yellow-300">
                <a>Blog</a>
              </Link>
              <Link to="/contact">
                <a className="hover:text-yellow-300">Contact Us</a>
              </Link>
            </div>
            <div className="md:hidden">
              {menuOpen ? (
                <FaTimes
                  className="text-2xl cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                />
              ) : (
                <FaBars
                  className="text-2xl cursor-pointer"
                  onClick={() => setMenuOpen(true)}
                />
              )}
            </div>

          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col gap-6 mb-8 bg-[#421625] text-white font-medium p-6 rounded-lg animate-fade-in-down">
              <Link to="/" className="hover:text-yellow-300 text-center">
                <a>Home</a>
              </Link>
              <Link to="/about" className="hover:text-yellow-300 text-center">
                <a>
                  About Us
                </a>
              </Link>
              <Link to="/services" className="hover:text-yellow-300 text-center">
                <a>
                  Services
                </a>
              </Link>
              <Link to="/blog" className="hover:text-yellow-300 text-center">
                <a>
                  Blog
                </a>
              </Link>
              <Link to="/contact" className="hover:text-yellow-300 text-center">
                <a>
                  Contact Us
                </a>
              </Link>
            </div>
          )}
        </header>


      </div>

      <section className="py-12 px-6 md:px-20 bg-pink-50">
        <h2 className="text-3xl font-bold text-[#800020] text-center mb-10">Our Blogs</h2>
        <div className='grid md:grid-cols-2 gap-6 p-6'>
          {blogs.map((blog) => (
            <div key={blog.id} className='bg-white rounded-xl shadow p-4 hover:shadow-xl transition duration-300 hover:scale-105'>
              <img src={blog.image} alt={blog.title} className='w-full h-70 object-cover rounded-lg' />
              <h2 className='text-xl font-bold mt-4'>{blog.title}</h2>
              <button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>Read More</button>
            </div>
          ))}
        </div>
      </section>

      <SocialSection />
      <Footer />
    </div>
  )
}

export default Blog