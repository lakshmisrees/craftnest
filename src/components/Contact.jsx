import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-purple-50 min-h-screen py-16 px-6 flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-purple-700 mb-6">Contact Us</h2>
      
      {submitted ? (
        <p className="text-green-600 text-xl">Thank you! We'll get back to you soon. 😊</p>
      ) : (
        <form 
          action="https://formspree.io/f/xovlwrov"  // replace this in Step 3
          method="POST"
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl space-y-6"
        >
          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;