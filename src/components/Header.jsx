import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'About', path: '/about' },
  ];

  const handleGetStarted = () => {
    window.location.href = 'https://app.grocerytrack.co.uk';
  };

  return (
    <header className="p-4 md:p-6 flex justify-between items-center bg-white/90 backdrop-blur-sm border-b border-emerald-100/50 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
          <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-slate-900">GroceryTrack™</h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-slate-700 hover:text-emerald-600 transition-colors duration-200 text-base font-medium"
          >
            {item.name}
          </Link>
        ))}
        <button
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg transition-all duration-300 px-5 py-2.5 rounded-lg text-base font-semibold"
        >
          Get Started
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-slate-600 hover:text-emerald-600">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed top-0 right-0 w-full h-full bg-white/95 backdrop-blur-lg z-50 flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900">GroceryTrack™</h1>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-600 hover:text-emerald-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-slate-800 hover:text-emerald-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleGetStarted}
                className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg transition-all duration-300 px-6 py-4 rounded-lg text-xl font-semibold"
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
