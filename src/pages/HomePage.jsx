import React from 'react';
import { ShoppingCart, ScanLine, TrendingUp, Eye, DollarSign, Sprout, Camera, BarChart3, Lightbulb, Users, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/Card';
import { Link } from 'react-router-dom';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex-shrink-0">
        <Icon className="w-6 h-6 text-emerald-600" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const handleGetStarted = () => {
    window.location.href = 'https://app.grocerytrack.co.uk';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            GroceryTrack™ - Smarter Grocery Habits Made{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Effortless
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 font-medium mb-4">
            Empowering households, one receipt at a time.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Groceries make up 12-15% of the average household budget - yet most families don't know where that money goes. Prices shift weekly, receipts pile up, and small overspends add up fast.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            GroceryTrack™ helps you take back control - not with spreadsheets, but with simple, automated insights that make smarter grocery decisions second nature.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-lg"
          >
            Get Started →
          </button>
        </motion.div>
      </section>

      {/* Why Track Groceries */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              Why Track Groceries?
            </h3>
            <p className="text-xl text-center text-slate-700 mb-12">
              Because groceries are the one expense you can actually control.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FeatureCard icon={Eye} title="Visibility" description="See exactly what drives your costs — down to the item level." />
              <FeatureCard icon={DollarSign} title="Smarter Spending" description="Spot patterns and opportunities to make more informed choices — no guesswork, just clarity." />
              <FeatureCard icon={Sprout} title="Better Living" description="Connect your grocery spend to nutrition and food quality — for smarter, more informed shopping" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How GroceryTrack Helps */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-6">
              How GroceryTrack™ Helps
            </h3>
            <p className="text-lg text-center text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Built by a qualified accountant who got tired of spreadsheets, GroceryTrack™ turns everyday receipts into professional-grade insights:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FeatureCard icon={Camera} title="Scan any grocery receipt" description="Paper or digital - we handle it all." />
              <FeatureCard icon={BarChart3} title="Analyse trends" description="Across items, stores, and prices over time." />
              <FeatureCard icon={Lightbulb} title="Act on personalized insights" description="Shop smarter and save more with actionable recommendations." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes GroceryTrack Different */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-6">
              What Makes GroceryTrack™ Different
            </h3>
            <p className="text-lg text-center text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              GroceryTrack™ goes beyond budgeting apps. Instead of just telling you{' '}
              <strong>"You spent £400 on groceries,"</strong> it shows what's driving those costs - item by item, store by store, over time.
            </p>
            <div className="text-center">
              <Link
                to="/features"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 border border-emerald-600 bg-white hover:bg-emerald-50 text-emerald-700 shadow-sm h-10 px-4 py-2"
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans & Pricing CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h3>
            <p className="text-xl text-center text-slate-700 mb-8">
              Same powerful insights, just sized for your household.
            </p>
            <Link
              to="/pricing"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg transition-all duration-300 px-8 py-4 rounded-lg text-lg font-semibold inline-block"
            >
              View Pricing →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🚀 Join the Movement
            </h3>
            <p className="text-xl text-white mb-8">
              Start tracking, learning, and saving - one receipt at a time.
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-white text-emerald-700 hover:bg-slate-100 shadow-lg px-8 py-6 text-lg font-semibold rounded-lg"
            >
              Get Started →
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

