import React from 'react'

const SocialSection = () => {
    return (
        <div>
            <section className="bg-white py-10 text-center">
                <h2 className='text-2xl md:text-3xl font-bold text-[#800020] mb-6'>Follow Us</h2>

                <div className='flex justify-center items-center gap-8 flex-wrap'>
                    <a
                        href="#"
                        target=""
                        rel=""
                    >
                        <img
                            src="/instagram.jpg"
                            alt="Instagram"
                            className="w-20 h-20 hover:scale-110 transition-transform"
                        />
                    </a>
                    <a
                        href="#"
                        target=""
                        rel=""
                    >
                        <img
                            src="facebook.jpg"
                            alt="Facebook"
                            className="w-15 h-15 hover:scale-110 transition-transform"
                        />
                    </a>

                    <a
                        href="#"
                        target=""
                        rel=""
                    >
                        <img
                            src="tiktok.jpg"
                            alt="Tiktok"
                            className="w-14 h-14 hover:scale-110 transition-transform rounded-xl"
                        />
                    </a>
                    <a
                        href="#"
                        target=""
                        rel=""
                    >
                        <img
                            src="twitter.jpg"
                            alt="Tiktok"
                            className="w-14 h-14 hover:scale-110 transition-transform rounded-xl"
                        />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default SocialSection