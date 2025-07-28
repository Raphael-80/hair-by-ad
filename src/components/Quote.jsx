import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const Quote = () => {
    return (
        <div className='relative w-full h-[600px] md:h-[400px] bg-center bg-cover flex items-center justify-center' style={{ backgroundImage: "url('/quote.jpg" }}>
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="relative z-20 max-w-2xl text-center px-4 text-white">
                <FaQuoteLeft className="text-3xl md:text-4xl mx-auto mb-4 bg-white/20 p-2 rounded-full" />
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                    Hairdressers are a wonderful breed. <br />
                    You work one on one with another human being and the object is to make
                    them feel so much better.
                </p>
            </div>
        </div>
    )
}

export default Quote