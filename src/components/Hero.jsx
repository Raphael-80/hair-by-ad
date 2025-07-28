import React, { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-[linear-gradient(200deg,_#800020,_#b76e79)] text-white px-6 md:px-10 py-8">
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                    <img src="/LOGO.png" alt="Logo" className="h-10 w-auto" />
                </div>
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
                    <a href="#" className="hover:text-yellow-300">Services</a>
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
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-6 mb-8 bg-[#421625] p-6 rounded-lg animate-fade-in-down">
                    <a href="#" className="hover:text-yellow-300 text-center">
                        Home
                    </a>
                    <a href="#" className="hover:text-yellow-300 text-center">
                        About Us
                    </a>
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

            {/* Hero Content */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-snug">WHERE BEAUTY BECOMES <br /> ART AND LUXURY</h1>
                    <p className="mt-4 text-lg text-gray-200">Enter a sanctuary of elegance, where every <br /> detail is crafted to elevate your natural allure.</p>
                    <button className="mt-6 bg-yellow-400 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-300">Book Now</button>
                </div>

                {/* Image Section */}
                <div className="flex gap-4 w-full max-w-2xl mx-auto">
                    {/* Left Side */}
                    <div className="flex flex-col gap-4 w-1/2">
                        <img src="/image1.jpg" alt="Curly Hair" className="w-full h-48 md:h-52 lg:h-56 rounded-tl-4xl object-cover" />
                        <img src="/image3.jpg" className="rounded-bl-4xl object-cover w-full h-48 sm:h-44 md:h-52 lg:h-56" alt="hairdresser at work" />
                    </div>
                    {/* Right Side */}
                    <div className="w-1/2">
                        <img src="/image2.jpg" className="w-full h-full max-h-[432px] md:max-h-[440px] lg:max-h-[460px] rounded-tr-4xl rounded-br-4xl object-cover" alt="salon setup" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero