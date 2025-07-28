import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const InstagramSection = () => {
    return (
        <div>
            <section className="py-16 px-6 md:px-20 bg-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-10">
                    Connect With Us On Instagram
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                    <img src="/IG_5.jpg" alt="Insta 1" className="rounded-lg object-cover w-full h-[460px]" />

                    <div className="flex flex-col gap-6">
                        <img src="/IG_4.jpg" alt="Insta 2" className="rounded-lg object-cover w-full h-[218px]" />
                        <img src="/IG_2.jpg" alt="Insta 3" className="rounded-lg object-cover w-full h-[218px]" />
                    </div>

                    <img src="/IG_1.jpg" alt="Insta 4" className="rounded-lg object-cover w-full h-[460px]" />
                </div>

                <button className="bg-yellow-400 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-300 flex items-center gap-2 cursor-pointer mx-auto">
                    Instagram <FaArrowRight />
                </button>
            </section>
        </div>
    )
}

export default InstagramSection