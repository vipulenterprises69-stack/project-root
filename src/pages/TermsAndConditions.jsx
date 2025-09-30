 import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Terms & Conditions - Code4Degree</title>
        <meta name="description" content="Code4Degree Terms & Conditions. Read our service scope, order acceptance, intellectual property, payment, and disclaimer." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms & Conditions</h1>
        <p className="text-gray-700 mb-6">
          Welcome to Code4Degree. By accessing or using our website and services, you agree to the following terms:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Scope:</h2>
        <p className="text-gray-700 mb-6">
          We provide ready-to-use final year and diploma projects (Web, Android, PWA, Gen AI) with documentation, APK, and hosting.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Acceptance:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Orders are confirmed only after full payment.</li>
          <li>Delivery timelines depend on the type of project (Normal / Urgent).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Projects sold are licensed for personal academic use only.</li>
          <li>You may not resell, distribute, or claim the project as your own.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment:</h2>
        <p className="text-gray-700 mb-6">
          Payments are non-refundable once the project is delivered, except under exceptional circumstances.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer:</h2>
        <p className="text-gray-700 mb-6">
          We do not guarantee grades or results. Projects are provided as academic assistance only.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes:</h2>
        <p className="text-gray-700 mb-6">
          Code4Degree reserves the right to update these terms at any time.
        </p>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
