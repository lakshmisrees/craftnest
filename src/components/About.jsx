import React from 'react';

const About = () => {
  return (
    <section className="relative py-20 px-4 md:px-10 bg-gradient-to-br from-pink-50 via-white to-indigo-50 overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Optional avatar or logo */}
        <img
          src="C:\Users\imlak\craftnest\logo.jpg"
          alt="Craft Nest"
          className="mx-auto mb-6 w-24 h-24 object-cover rounded-full border-4 border-purple-200 shadow-md"
        />

        {/* Heading with underline accent */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4 inline-block relative">
          About CraftNest
          <span className="block mx-auto mt-1 h-1 w-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></span>
        </h2>

        {/* Main description */}
        <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          CraftNest is a cozy little corner of the web where handmade meets heart.
          We celebrate artisans and creators by showcasing unique, beautiful, and thoughtfully crafted pieces.
          Whether you're here to explore or support, we’re glad to have you as part of our creative nest.
        </p>

        {/* Inspiring quote */}
        <blockquote className="mt-10 text-purple-600 text-md md:text-lg border-l-4 border-purple-300 pl-6 italic bg-purple-50/60 py-4 rounded-md shadow-sm">
          “The desire to create is one of the deepest yearnings of the human soul.”<br />
          <span className="not-italic font-semibold text-purple-500">– Dieter F. Uchtdorf</span>
        </blockquote>
      </div>
    </section>
  );
};

export default About;