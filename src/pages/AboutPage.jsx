import React from 'react';
import { ShoppingCart, Heart, Target, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/Card'; // Import your custom Card
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const handleGetStarted = () => {
    window.location.href = 'https://app.grocerytrack.co.uk'; // Link to your Base44 app
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-6 md:px-6 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">About GroceryTrack™</h1>
            </div>
          </div>
        </motion.div>

        {/* My Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  From Spreadsheets to Smarter Grocery Habits
                </h2>
              </div>

              <div className="prose prose-slate max-w-none space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  As a qualified accountant, I spent years helping businesses understand their finances.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  But tracking my own grocery spending? Tedious spreadsheets and hours of manual entry.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  That's when I realised: <strong>groceries are 12–15% of household budgets</strong> — one of the few controllable expenses — yet most families have no clear visibility.
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-6">
                  <p className="text-emerald-800 font-medium text-center">
                    GroceryTrack™ was born to fix that — transforming everyday receipts into instant insights, empowering households to save, shop smarter, and make healthier choices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                To empower households to make smarter grocery decisions through effortless receipt tracking, insightful analytics, and habit-forming simplicity.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Philosophy</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 font-bold text-sm">✓</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Full access for all users:</strong> No "Premium" tiers.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 font-bold text-sm">✓</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Household sharing:</strong> Lite for individuals, Family for shared households.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 font-bold text-sm">✓</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Transparent & simple:</strong> Clear pricing, data stays yours.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Why It Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Why It Matters</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Understanding grocery habits gives households control — over spending, waste, and nutrition.
              </p>
              <p className="text-slate-800 font-medium text-lg">
                GroceryTrack™ isn't just an app; it's a movement to help families spend smarter, save more, and live healthier.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-8"
        >
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg px-8 py-6 text-lg font-semibold rounded-lg"
          >
            Get Started →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
