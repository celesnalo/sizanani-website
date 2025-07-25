import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import logo from '../assets/sme-logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-brand-600">
              <img src={logo} alt="Sizanani Masuku Enterprise Logo" className="h-28 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-600">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-600">Services</Link>
            <Link
              to="/contact"
              className="bg-brand-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-700"
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)}>
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 text-gray-700">Home</Link>
          <Link to="/about" className="block px-3 py-2 text-gray-700">About</Link>
          <Link to="/services" className="block px-3 py-2 text-gray-700">Services</Link>
          <Link
            to="/contact"
            className="block px-3 py-2 bg-brand-600 text-white rounded-md"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}