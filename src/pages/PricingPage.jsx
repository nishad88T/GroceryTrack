import React from 'react';
import { ShoppingCart, Check, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/Card'; // Import your custom Card
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const handleGetStarted = () => {
    window.location.href = 'https://app.grocerytrack.co.uk'; // Link to your Base44 app
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Flexible Plans, Powerful Insights</h1>
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
            Choose the right fit for your household. Same powerful insights, just sized for your scanning needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-lg text-center text-slate-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            At GroceryTrack™, we believe everyone deserves full financial clarity over their groceries. That's why both our plans offer the *exact same powerful analytics and insights*. The only difference? Your monthly scan allowance and household sharing capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Lite Tier */}
            <Card className="hover:border-emerald-500 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-3xl">☕</div>
                  <CardTitle className="text-2xl">Lite</CardTitle>
                </div>
                <CardDescription className="text-base">Individuals / small households</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-slate-900">£2.59<span className="text-lg font-normal text-slate-600">/month</span></p>
                  <p className="text-slate-600">or £25.99/year</p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-semibold text-slate-900 mb-3">What You Get:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Full analytics & insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Full nutrition diagnostics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">AI Shopping List Generator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">12 scans/month</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Family Tier */}
            <Card className="border-2 border-emerald-500 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-3xl">👨👩👧👦</div>
                  <CardTitle className="text-2xl">Family</CardTitle>
                </div>
                <CardDescription className="text-base">Shared or growing households</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-slate-900">£5.99<span className="text-lg font-normal text-slate-600">/month</span></p>
                  <p className="text-slate-600">or £59.99/year</p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-semibold text-slate-900 mb-3">What You Get:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">All Lite Plan features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">30 scans/month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Household sharing & collaboration</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg px-8 py-6 text-lg font-semibold rounded-lg"
          >
            Get Started Today →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
