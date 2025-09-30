import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Refund Policy - Code4Degree</title>
        <meta name="description" content="Code4Degree Refund Policy. Information on refunds, cancellations, and quality assurance." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Refund Policy</h1>
        <p className="text-gray-700 mb-6">
          Code4Degree strives for complete customer satisfaction. Please read our refund policy carefully:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Refund After Delivery:</h2>
        <p className="text-gray-700 mb-6">
          Once a project (Web, Android APK, hosting, and documentation) is delivered, refunds are not provided.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Cancellation:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>You may cancel the order before we start working on your project. A full refund will be provided in such cases.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quality Assurance:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>We ensure projects are fully functional and delivered as per agreed specifications.</li>
          <li>Any technical issues reported within 3 days of delivery will be resolved free of charge.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disputes:</h2>
        <p className="text-gray-700 mb-6">
          Any disputes regarding orders will be resolved amicably.
        </p>
      </motion.div>
    </div>
  );
};

export default RefundPolicy;
