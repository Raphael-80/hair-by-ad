import React, { useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import Footer from "../components/Footer";
import SocialSection from "../components/SocialSection";
import { Link } from 'react-router-dom'
import { services } from '../data/services'; // Assuming you have a services data file

const Services = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
                <Link to="/">
                    <div className="flex items-center gap-2">
                        <img src="/LOGO.png" alt="Logo" className="h-10 w-auto" />
                    </div>
                </Link>
                <div className="hidden md:flex gap-6 font-medium">
                    <Link to='/'>
                        <a className="hover:text-yellow-300">
                            Home
                        </a>
                    </Link>
                    <Link to='/about'>
                        <a className="hover:text-yellow-300">
                            About Us
                        </a>
                    </Link>
                    <Link to="/services">
                        <a className="hover:text-yellow-300">Services</a>
                    </Link>
                    <a href="#" className="hover:text-yellow-300">Blog</a>
                    <a href="#" className="hover:text-yellow-300">Contact Us</a>
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
            </nav>

            {menuOpen && (
                <div className="md:hidden flex flex-col gap-6 mb-8 bg-[#421625] text-white font-medium p-6 rounded-lg animate-fade-in-down">
                    <Link href="#" className="hover:text-yellow-300 text-center">
                        Home
                    </Link>
                    <Link className="hover:text-yellow-300 text-center" to="/about">
                        <a>
                            About Us
                        </a>
                    </Link>
                    <a href="#" className="hover:text-yellow-300 text-center">
                        Services
                    </a>
                    <a href="#" className="hover:text-yellow-300 text-center">
                        Blog
                    </a>
                    <a href="#" className="hover:text-yellow-300 text-center">
                        Contact Us
                    </a>
                </div>
            )}

            <div className="px-6 py-12 bg-white min-h-screen">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300 border border-gray-100 hover:scale-105" key={index}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-60 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
                            <p className="text-gray-500 text-sm mb-3">{service.description}</p>
                            {/* <p className="font-semibold text-pink-600 mb-4">₦{service.price}</p> */}
                            <Link
                                to="/book-session"
                                className="inline-block bg-[#800020] text-white px-4 py-2 rounded hover:bg-[#800020] transition"
                            >
                                Book Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Services