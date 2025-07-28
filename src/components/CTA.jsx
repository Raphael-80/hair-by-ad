import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
    return (
        <div className="bg-white py-12 px-6 md:px-16">
            <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
                <div>
                    <img src="/CTA-img.jpg" alt="High Standards" className='rounded-lg shadow-md w-full object-cover' />
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#800020] mb-4 uppercase">
                        High Standards Are On Us
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Experience flawless beauty tailored to you. From precision techniques to
                        luxurious care, we uphold excellence in every detail. Book your session
                        today and let our expert stylists deliver a standard that exceeds
                        expectations because you deserve nothing but the best.
                    </p>
                    <button className="bg-yellow-400 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-300 flex items-center gap-2">
                        Book Now <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CTA