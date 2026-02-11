import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-700">
          Craft<span className="text-pink-500">Nest</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold text-base">
          <li>
            <a href="#home" className="hover:text-purple-600 transition">Home</a>
          </li>
          <li>
            <a href="#shop" className="hover:text-purple-600 transition">Shop</a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-600 transition">About</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-purple-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;