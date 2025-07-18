import React from 'react'

const About = () => {
  return (
    <div>
        <section className='w-full bg-[linear-gradient(90deg,_#F3D5C0,_#FFF7F2)]'>
            <div className='flex flex-col md:flex-row'>
                {/* Left Image */}
                <div className='md:w-1/2 w-full'>
                    <img src="/image4.jpg" alt="Salon Interior" className='w-full h-full object-cover'/>
                </div>

                {/* Right Text Content */}
                <div className='md:w-1/2 w-full flex items-center justify-center px-6 py-12 md:py-0 bg-[#fff5ef]'>
                    <div className='max-w-md'>
                        <h2 className='text-3xl md:text-4xl font-bold text-[#800020] mb-4'>About Us</h2>
                        <p className='text-gray-800 leading-relaxed text-base md:text-lg'>We offer a luxurious escape where expert stylists craft timeless looks tailored to you.
                            Each service blends artistry and comfort, enuring you leave feeling confident, radiant, and beautifully refined because you deserve nothing less.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About