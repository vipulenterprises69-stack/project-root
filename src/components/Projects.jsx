import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Database, Brain, FileText, Users, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button.jsx';

const Projects = () => {
  const projects = [
    {
      title: 'ERP Management System',
      description: 'Complete enterprise resource planning system with inventory, HR, and finance modules.',
      icon: Database,
      features: ['Multi-user Dashboard', 'Inventory Management', 'Report Generation', 'Role-based Access'],
    },
    {
      title: 'Learning Management System',
      description: 'Full-featured LMS with course management, student tracking, and assessment tools.',
      icon: Users,
      features: ['Course Creation', 'Student Progress', 'Quiz System', 'Certificate Generation'],
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Intelligent chatbot with natural language processing and machine learning capabilities.',
      icon: Brain,
      features: ['NLP Integration', 'Context Awareness', 'Multi-language Support', 'Analytics Dashboard'],
    },
    {
      title: 'Resume Builder Pro',
      description: 'Professional resume builder with multiple templates and ATS optimization.',
      icon: FileText,
      features: ['Multiple Templates', 'ATS Optimization', 'PDF Export', 'Real-time Preview'],
    },
    {
      title: 'Document Summarizer',
      description: 'AI-powered document summarization tool with support for multiple file formats.',
      icon: MessageSquare,
      features: ['Multi-format Support', 'AI Summarization', 'Keyword Extraction', 'Export Options'],
    },
    {
      title: 'E-commerce Platform',
      description: 'Complete online shopping platform with payment integration and admin panel.',
      icon: Code,
      features: ['Product Management', 'Payment Gateway', 'Order Tracking', 'Admin Dashboard'],
    }
  ];

  const handleOrderProject = (projectTitle) => {
    const message = `Hi! I'm interested in the ${projectTitle} project from Code4Degree. Can you provide more details?`;
    window.open(`https://wa.me/919172309315?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of professional-grade projects designed for final year and diploma students
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{project.description}</p>

              <div className="space-y-3 mb-8">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                <Button
                  onClick={() => handleOrderProject(project.title)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Order Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;