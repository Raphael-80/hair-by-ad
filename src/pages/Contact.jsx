import React, { useState } from 'react'
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Contact = () => {
    const [menuOpen, setMenuOpen] = useState(false)
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
            <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-pink-50 sticky top-0 z-50">
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
                    <Link to="/blog">
                        <a className="hover:text-yellow-300">Blog</a>
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
            </nav>

            {menuOpen && (
                <div className="md:hidden flex flex-col gap-6 mb-8 bg-[#421625] text-white font-medium p-6 rounded-lg animate-fade-in-down">
                    <Link to="/" className="hover:text-yellow-300 text-center">
                        Home
                    </Link>
                    <Link className="hover:text-yellow-300 text-center" to="/about">
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

            <div className='bg-pink-50 py-16 px-6 lg:px-20'>
                <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
                    {/* Left Section - Contact Info */}
                    <div>
                        <h2 className='text-4xl font-bold text-gray-900 mb-6'>Get in Touch</h2>
                        <p className='text-gray-600 mb-6'>Have questions about our beauty services or products?
                            We'd love to hear from you! Fill out the form or use the details below to reach us.</p>

                        <div className='space-y-4'>
                            <div>
                                <h4 className='text-lg font-semibold text-gray-900'>Phone</h4>
                                <p className='text-gray-600'>+234 123 456 7890</p>
                            </div>

                            <div>
                                <h4 className='text-lg font-semibold text-gray-900'>Email</h4>
                                <p className='text-gray-600'>hair_by_AD@gmail.com</p>
                            </div>
                        </div>
                    </div>


                    {/* Right Section - Contact Form */}
                    <div className='bg-white shadow-xl rounded-2xl p-8'>
                        <h3 className='text-2xl font-semibold mb-6 text-gray-900'>Send us a Message</h3>

                        {!submitted ? (
                            <form action="https://formspree.io/f/xeoljrzp" method="POST" onSubmit={handleSubmit} className='space-y-4'>
                            <input type="text" name="name" placeholder='Your Name' className='w-full p-3 border border-[#800020] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]' required />
                            <input type="email" name="email" placeholder='Your Email' className='w-full p-3 border border-[#800020] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]' required />
                            <textarea rows="5" name="message" placeholder='Your Message' className='w-full p-3 border border-[#800020] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]' required></textarea>
                            <button type='submit' className='w-full bg-[#800020] text-white py-3 rounded-lg font-semibold hover:bg-[#800020] transition duration-300'>Send Message</button>
                        </form>
                        ) : (
                            <p className='text-green-500 font-bold'>Thank you for your message!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact