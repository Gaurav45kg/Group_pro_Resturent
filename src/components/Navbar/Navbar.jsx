// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-white shadow bg-gradient-to-r from-white to-pink-200">
      <div className="text-2xl font-bold">FOODY</div>
      <ul className="flex space-x-8 text-lg">
        <li className="hover:text-orange-500 cursor-pointer" onClick={() => scrollToSection('home')}>
          Home
        </li>
        <li className="hover:text-orange-500 cursor-pointer" onClick={() => scrollToSection('about')}>
          About Us
        </li>
        <li className="hover:text-orange-500 cursor-pointer" onClick={() => scrollToSection('services')}>
          Services
        </li>
        <li className="hover:text-orange-500 cursor-pointer" onClick={() => scrollToSection('team')}>
          Team
        </li>
        <li className="hover:text-orange-500 cursor-pointer" onClick={() => scrollToSection('reservation')}>
          Reservation
        </li>
      </ul>
      <button className="px-5 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition duration-300">
        Our Menu
      </button>
    </nav>
  );
};

export default Navbar;
