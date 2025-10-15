import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '../components/Card'; // Import your custom Card
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is GroceryTrack™?",
    answer: "GroceryTrack™ is a smart budgeting web app that helps you understand, manage, and save on your grocery spending. By scanning your receipts, we provide detailed insights into price changes, spending patterns, and even nutritional information."
  },
  {
    question: "How does GroceryTrack™ work?",
    answer: "Simply snap a picture of your grocery receipt (or upload a digital one). Our AI-powered OCR extracts all the item details. You can then review and correct any data, and the app instantly provides analytics on your spending, personal inflation, and more."
  },
  {
    question: "What kind of insights will I get?",
    answer: "You'll see breakdowns of spending by category and store, personal inflation rates for items you buy regularly, price volatility alerts, budget projections, and nutritional summaries of your purchases. We go beyond just total spending to show you what's really driving your costs."
  },
  {
    question: "Is my data safe and private?",
    answer: "Yes, absolutely. We prioritize your privacy and data security. We comply with UK GDPR regulations and use industry-standard encryption and security measures. We do not sell, trade, or rent your personal data. Please refer to our Privacy Policy for more details."
  },
  {
    question: "How accurate is the receipt scanning?",
    answer: "Our advanced OCR technology is highly accurate. However, receipt quality can vary. We allow you to easily review and correct any scanned data to ensure your insights are always precise."
  },
  {
    question: "What are the subscription plans?",
    answer: "We offer two plans: Lite for individuals (12 scans/month) and Family for shared households (30 scans/month with household sharing). Both plans give you access to all analytics and insights. Visit our Pricing page for full details."
  },
  {
    question: "Can I use GroceryTrack™ with my family/household?",
    answer: "Yes, our Family Plan is designed for this! It allows you to link multiple users to a single household, sharing receipts, budgets, and insights for collective financial management."
  },
  {
    question: "What if I have an issue or feedback?",
    answer: "We're here to help! You can contact us via email at support@grocerytrack.co.uk or use the in-app feedback form once you're logged into the application."
  },
  {
    question: "What happens if I go over my scan limit?",
    answer: "If you reach your monthly scan limit, you won't be able to scan new receipts until your limit resets. You can upgrade to a higher plan at any time to get more scans, or wait until the next month's allowance."
  },
  {
    question: "Can I use GroceryTrack™ for business expenses?",
    answer: "GroceryTrack™ is designed and optimized for personal and household grocery spending. While you could technically scan business receipts, our analytics and categorization are geared towards household food and essentials, so it might not be the best fit for detailed business expense tracking."
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mb-4">
      <div
        className="flex justify-between items-center p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-slate-900">{question}</h3>
        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <CardContent className="pt-0 text-slate-700 leading-relaxed">
              {answer}
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

export default function FAQsPage() {
  const handleGetStarted = () => {
    window.location.href = 'https://app.grocerytrack.co.uk'; // Link to your Base44 app
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-slate-700">
            Find answers to common questions about GroceryTrack™
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-slate-700 mb-6">
            Still have questions? We're here to help!
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg px-8 py-6 text-lg font-semibold rounded-lg"
          >
            Contact Support →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
