import React from 'react';
import { HiSparkles } from 'react-icons/hi2'; // Optional: for a decorative icon

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-100 via-pink-50 to-white py-24 px-6 text-center overflow-hidden">
      {/* Decorative blob / graphic (optional) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 opacity-25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 opacity-30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto">
        {/* Optional custom icon */}
        <div className="flex justify-center mb-4">
          <HiSparkles className="text-5xl text-purple-500 animate-pulse" />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-purple-800 tracking-tight leading-tight mb-5">
          Handmade With Love <span className="inline-block animate-wiggle">🎨</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          Discover beautiful handmade crafts and artistic creations nurtured with passion,
          creativity, and care — made to warm your heart and home.
        </p>

        <a
          href="#shop"
          className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-purple-700 hover:scale-105 transition duration-300"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
};

export default Hero;