import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Address</h3>
            <p>STAND NO 2121</p>
            <p>TJAKASTAD</p>
            <p>MPUMALANGA, 1193, South Africa</p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-brand-400">Office Supplies</Link></li>
              <li><Link to="/services" className="hover:text-brand-400">Equipment Leasing</Link></li>
              <li><Link to="/services" className="hover:text-brand-400">After-sales Service</Link></li>
              <li><Link to="/services" className="hover:text-brand-400">Nationwide Logistics</Link></li>
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sizanani Masuku Enterprise</h3>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} South African Goods & Services Distributor | Sizanani Masuku Enterprise (Pty) Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}