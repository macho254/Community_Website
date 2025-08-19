import { Link } from 'react-router-dom';
import logo from '../assets/logo_light.png';
import { useState } from 'react';
 
export default function Navbar() {
  return (
    <nav className="bg-[#111] text-white px-6 py-4 flex justify-between items-center relative">
      {/* Logo on the left */}
      <div className="text-2xl font-bold text-gold">BitBridge</div>

      {/* Links on the right */}
      <div className="flex gap-6">
        <Link to= "/" className="hover:text-gold transition">Home</Link>
        <Link to="/about" className="hover:text-gold transition">About</Link>
        <Link to="/podcast" className="hover:text-gold transition">Podcast</Link>
        <Link to ="/donate" className="hover:text-gold transition">Donate</Link>
      </div>
    </nav>
  );
}
 



