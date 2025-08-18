import React, { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SocialSection from "../components/SocialSection";

const BookSession = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    setSubmitted(true);
                    form.reset();
                } else {
                    alert("Oops! Something went wrong.");
                }
            })
            .catch(() => alert("Oops! Something went wrong."));
    };

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

            {/* Main Booking Section */}
            <div className="flex flex-col md:flex-row h-[90vh] animate-fade-up duration-1000">
                {/* Left Image */}
                <div className="md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: "url('/booking.jpg')" }}></div>

                {/* Right Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-6 text-[#800020]">Book a Session</h1>
                    {!submitted ? (
                        <form
                            action="https://formspree.io/f/xvgqvqro" // <-- replace with your actual formspree link
                            method="POST"
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-[#800020]">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#800020]"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#800020]"
                                />
                            </div>

                            <select name="service" required className="w-full p-3 rounded-lg border border-[#800020] focus:outline-none focus:ring-2 focus:ring-[#800020]-500" id="">
                                <option value="">Select a Service</option>
                                <option value="Hair Ironing">Hair Ironing</option>
                                <option value="Hair Styling">Hair Styling</option>
                                <option value="Makeup">Makeup</option>
                                <option value="Coloring & Dye">Coloring & Dye</option>
                                <option value="Hair Braiding"> Hair Braiding</option>
                                <option value="Hair Treatment">Hair Treatment</option>
                                <option value="Scalp Massage">Scalp Massage</option>
                                <option value="Hair Cutting">Hair Cutting</option>
                                <option value="Hair Washing">Hair Washing</option>
                            </select>

                            <div>
                                <label className="block text-[#800020]">Preferred Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-pink-300"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-[#800020] hover:bg-[#800020] text-white font-semibold rounded-lg shadow-md transition-all duration-300 cursor-pointer"
                            >
                                Submit
                            </button>
                        </form>
                    ) : (
                        <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-md">
                            ✅ Thank you! Your booking has been submitted successfully.
                        </div>
                    )}
                </div>
            </div>
            <SocialSection />
            <Footer />
        </div>
    )
}

export default BookSession