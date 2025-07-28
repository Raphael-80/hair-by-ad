import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { services } from '../data/services';

const Services = () => {
    return (
        <div className='my-12 px-4 md:px-20'>
            <h2 className='text-3xl font-bold mb-6 text-center md:text-4xl text-[#800020]'>Our Services</h2>
            <p className="text-gray-600 text-center md:text-lg mt-2">
                Indulge in Expert Care and Signature Treatment
            </p>


            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                autoplay={{ delay: 3000 }}
                pagination={false}
                modules={[Autoplay, Pagination]}

            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className='bg-white rounded-xl border border-gray-200 shadow-md p-4 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1'>
                            <img src={service.image} alt={service.title} className='w-full h-100 object-cover rounded-md mb-4' />
                            <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                            <p className='text-gray-600'>{service.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Services