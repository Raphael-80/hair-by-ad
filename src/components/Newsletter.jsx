import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Newsletter = () => {
    return (
        <div>
            <section className="w-full h-[100px] bg-cover bg-center flex items-center justify-center px-4 md:px-20"
                style={{ backgroundImage: "url('/Newsletter.jpg" }}>
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-6">
                    {/* Text */}
                    <h2 className="text-white text-2xl md:text-3xl font-semibold">
                        Newsletter
                    </h2>

                    {/* Input & Button */}
                    <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-l-full bg-white text-sm text-black w-full md:w-80 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-white text-black px-4 py-2 rounded-r-full border-l border-gray-300"
                        >
                            <FaArrowRight />
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Newsletter