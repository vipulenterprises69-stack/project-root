import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Sparkles, Wrench } from 'lucide-react';
import { Button } from './components/ui/button';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Diploma Projects',
      subtitle: 'Perfect for Diploma Students',
      icon: Check,
      price: '₹7,000 - ₹10,000',
      popular: false,
      features: [
        'Complete Source Code',
        'Full Documentation',
        'PPT Presentation',
        'Basic Hosting Setup',
        'Email Support',
        'Project Demo Video'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Degree Projects',
      subtitle: 'Ideal for Engineering Students',
      icon: Crown,
      price: '₹10,000 - ₹15,000',
      popular: true,
      features: [
        'Advanced Source Code',
        'Comprehensive Documentation',
        'Professional PPT',
        'Premium Hosting Setup',
        'Priority Support',
        'Project Demo Video',
        'Code Explanation Session',
        'Deployment Assistance'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Gen AI Projects',
      subtitle: 'Cutting-edge AI Solutions',
      icon: Sparkles,
      price: '₹15,000 - ₹20,000',
      popular: false,
      features: [
        'AI/ML Integration',
        'Advanced Algorithms',
        'Research Documentation',
        'Technical PPT',
        'Cloud Hosting',
        'Premium Support',
        'Model Training Data',
        'Performance Analytics'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Custom Projects',
      subtitle: 'Tailored to Your Needs',
      icon: Wrench,
      price: 'Contact for Quote',
      popular: false,
      features: [
        'Custom ERP Solutions',
        'Bespoke Gen AI Models',
        'Full-stack Web Apps',
        'Native Android Apps',
        'Dedicated Project Manager',
        'Flexible Requirements',
        'Scalable Architecture',
        'Personalized Support'
      ],
      color: 'from-orange-500 to-amber-600'
    }
  ];

  const handleOrderPlan = (planTitle) => {
    const message = `Hi! I want to order a ${planTitle} from Code4Degree. Please provide more details.`;
    window.open(`https://wa.me/919172309315?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Package</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with everything included. No hidden costs, just quality projects delivered on time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`bg-gradient-to-r ${plan.color} p-8 text-white ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="flex items-center mb-4">
                    <plan.icon className="h-8 w-8 mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold">{plan.title}</h3>
                      <p className="opacity-80">{plan.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-4xl font-bold">{plan.price}</div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center text-sm text-orange-600 font-medium mb-6 p-3 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 mr-2" />
                    Urgent services available
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => handleOrderPlan(plan.title)}
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                    >
                      Order Package
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
