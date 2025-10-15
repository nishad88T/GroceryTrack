import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">GroceryTrack™</span>
          </Link>
          <p className="text-sm">Smart grocery tracking, budgeting, and insights.</p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/features" className="text-sm hover:text-emerald-400 transition-colors">Features</Link></li>
            <li><Link to="/pricing" className="text-sm hover:text-emerald-400 transition-colors">Pricing</Link></li>
            <li><Link to="/faqs" className="text-sm hover:text-emerald-400 transition-colors">FAQs</Link></li>
            <li><Link to="/about" className="text-sm hover:text-emerald-400 transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="text-sm hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm hover:text-emerald-400 transition-colors">Terms of Use</Link></li>
            <li><Link to="/cookies" className="text-sm hover:text-emerald-400 transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Contact/Social */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2">Email: <a href="mailto:support@grocerytrack.co.uk" className="hover:text-emerald-400 transition-colors">support@grocerytrack.co.uk</a></p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 border-t border-slate-700 mt-10 pt-8 text-center text-sm text-slate-500">
        © 2025 GroceryTrack™. All rights reserved.
      </div>
    </footer>
  );
}
