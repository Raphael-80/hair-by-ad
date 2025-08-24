import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialSection from '../components/SocialSection';
import Footer from '../components/Footer';

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="relative h-[600px] bg-cover bg-screen bg-no-repeat" style={{ backgroundImage: "url('/image4.jpg')" }}>
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
                            <Link to="/contact" className="hover:text-yellow-300">
                                <a>Contact Us</a>
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
                                    Contact
                                </a>
                            </Link>
                        </div>
                    )}
                </header>


            </div>
            {/* Mission, Vision, and Care Section */}
            <section className="py-12 px-6 md:px-20 bg-pink-50">
                <h2 className="text-3xl font-bold text-[#800020] text-center mb-10">What We Stand For</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Mission */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="flex justify-center items-center bg-gray-100">
                            <img src="/mission.jpg" alt="Mission" className="h-32 w-auto object-contain" />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                            <p className="text-gray-700">
                                We strive to provide top-quality beauty services that uplift, inspire, and bring out the best in our clients.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="flex justify-center items-center bg-gray-100">
                            <img src="/excellence_icon.jpg" alt="Vision" className="h-32 w-auto object-contain" />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                            <p className="text-gray-700">
                                To be the go-to beauty destination, known for our creativity, care, and commitment to every client’s glow.
                            </p>
                        </div>
                    </div>

                    {/* Care */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="flex justify-center items-center bg-gray-100">
                            <img src="/care_icon.jpg" alt="Care" className="h-32 w-auto object-contain" />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">Our Care</h3>
                            <p className="text-gray-700">
                                We treat every client like royalty—listening, understanding, and serving with warmth and attention to detail.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <SocialSection />
            <Footer />
        </div>
    )
}

export default Hero