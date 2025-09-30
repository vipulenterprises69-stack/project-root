import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Privacy Policy - Code4Degree</title>
        <meta name="description" content="Code4Degree Privacy Policy. Learn how we collect, use, and protect your information." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
        <p className="text-gray-700 mb-6">
          Code4Degree (“we”, “our”, “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Name, email, phone number, college, and project requirements when you submit the contact/order form.</li>
          <li>Usage data such as IP address, browser type, and pages visited for analytics purposes.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>To process your project orders and respond to inquiries.</li>
          <li>To provide updates on new projects or services (if you opt-in).</li>
          <li>To improve our website, services, and user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sharing Your Information:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>We do not sell, trade, or share your personal information with third parties.</li>
          <li>Information may be shared with our trusted service providers to fulfill your order.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security:</h2>
        <p className="text-gray-700 mb-6">
          We implement reasonable security measures to protect your data.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consent:</h2>
        <p className="text-gray-700 mb-6">
          By using our website, you agree to this Privacy Policy.
        </p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
