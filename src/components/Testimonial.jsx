import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Amelia Laurent",
        text: "Absolutely the best salon experience I've ever had. The attention to detail and the luxurious atmosphere made me feel truly pampered.",
        image: "/pp1.jpg"
    },
    {
        name: "Isabelle Monroe",
        text: "Professional, elegant, and deeply relaxing. This salon is a hidden gem. I wouldn't trust anyone else with my hair.",
        image: "/pp2.jpg"
    },
    {
        name: "Zara Khali",
        text: "Exquisite service and stunning results. You walk in as a client and leave as art.",
        image: "/pp3.jpg"
    },
    {
        name: "Sarah Jones",
        text: "From the moment I walked in, I felt like royalty. My silk press came out flawless - I'm obsessed.",
        image: "/pp4.jpg"
    },
    {
        name: "Nneka Roberts",
        text: "They truly understand hair and elegance. My bridal updo was nothing short of magical.",
        image: "/pp5.jpg"
    },
    {
        name: "Chioma Daniels",
        text: "I've never felt more confident and beautiful. Every visit feels like a luxury retreat.",
        image: "/pp6.jpg"
    },
]

const Testimonial = () => {
    return (
        <div>
            <div>
                <section className="bg-white py-16 px-6 md:px-20">
                    <div className="text-center mb:10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#800020]">
                            Customer Review
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Luxury delivered. Beauty admired. Confidence in every visit.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                        {testimonials.map((review, index) => (
                            <div
                                key={index}
                                className="border border-gray-500 rounded-lg p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
                            >
                                <FaQuoteLeft className="text-yellow-500 text-xl mb-4" />
                                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                    {review.text}
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <span className="font-medium text-gray-800 text-sm">
                                        {review.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Testimonial