import { Link } from 'react-router-dom';
import logo from '../assets/logo_light.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-background border-b border-gold">
      <Link to="/" className="flex items-center space-x-2">
  <img src={logo} alt="BitBridge Logo" className="w-8 h-8 object-contain" />
  <span className="text-gold font-bold text-xl">BitBridge</span>
</Link>

      <ul className="flex space-x-6 text-sm">
  <li>
    <Link to="/" className="hover:text-gold">Home</Link>
  </li>
  <li>
    <Link to="/blog" className="hover:text-gold cursor-pointer">Blog</Link>
  </li>
  <li>
    <Link to="/podcast" className="hover:text-gold">Podcast</Link>
  </li>
  <li>
    <Link to="/join" className="hover:text-gold">Join</Link>
  </li>
</ul>
    </nav>
  );
}

