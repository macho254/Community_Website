import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-[#111] text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src={logo} alt="BitBridge Logo" className="h-8 w-8" /> */}
          <span className="font-bold text-xl text-gold">BitBridge</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/podcast" className="hover:text-yellow-400">Podcast</Link>
          <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
          {/* <Link to="/donate" className="hover:text-yellow-400">Donate</Link> */}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col items-center mt-4 space-y-4 md:hidden"
          >
            <Link to="/" onClick={handleLinkClick} className="hover:text-yellow-400">Home</Link>
            <Link to="/about" onClick={handleLinkClick} className="hover:text-yellow-400">About</Link>
            <Link to="/podcast" onClick={handleLinkClick} className="hover:text-yellow-400">Podcast</Link>
            <Link to="/projects" onClick={handleLinkClick} className="hover:text-yellow-400">Projects</Link>
            {/* <Link to="/donate" onClick={handleLinkClick} className="hover:text-yellow-400">Donate</Link> */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}








