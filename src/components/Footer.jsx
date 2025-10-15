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
            <div className="w-9 h-9 bg-gradient-to
