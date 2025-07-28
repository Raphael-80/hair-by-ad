import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-[url('/about-hero.jpg')] bg-cover bg-center h-80 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold backdrop-blur-sm bg-black/40 px-6 py-3 rounded-lg">About Us</h1>
      </section>

      {/* Introduction */}
      <section className="px-6 md:px-20 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Hair by AD</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          At Hair by AD, we believe beauty is more than skin deep—it's confidence, elegance, and self-expression. 
          Our expert stylists and beauticians are here to transform your look while creating a relaxing, uplifting experience. 
          Whether it's a regular touch-up or a full glam session, you'll leave our salon feeling refreshed and radiant.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-pink-50 py-12 px-6 md:px-20 grid md:grid-cols-2 gap-10 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To empower individuals through personalized beauty services that enhance natural features and boost self-esteem. 
            We focus on quality, care, and creativity in everything we do.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To become the leading beauty destination where everyone feels seen, valued, and beautifully transformed. 
            We envision a world where beauty meets confidence and inner glow.
          </p>
        </div>
      </section>

      {/* Optional Team Section */}
      {/* 
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">Meet Our Stylists</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="/images/stylist1.jpg" alt="Stylist" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h4 className="text-lg font-bold">Jane Doe</h4>
            <p className="text-gray-500">Senior Hair Stylist</p>
          </div>
          {/* Add more stylists if needed */}
      {/* </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-12 text-center bg-gradient-to-r from-pink-400 to-pink-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Glow?</h2>
        <p className="mb-6">Book your appointment now and experience the beauty you deserve.</p>
        <a
          href="/book"
          className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-full hover:bg-pink-100 transition"
        >
          Book Now
        </a>
      </section>
    </div>
  );
};

export default About;
