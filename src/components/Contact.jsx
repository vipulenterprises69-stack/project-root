import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../../src/ui/button';
import { toast } from '../../src/ui/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    projectType: '',
    message: ''
  });
  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.college || !formData.projectType || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive"
      });
      return;
    }
    const whatsappMessage = `Hi! I'm ${formData.name} from ${formData.college}. I'm interested in ${formData.projectType} project. ${formData.message}`;
    window.open(`https://wa.me/9172309315?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with our team shortly!"
    });
    setFormData({
      name: '',
      college: '',
      projectType: '',
      message: ''
    });
  };
  return <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Contact us today and let's discuss your requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600">+91 9172309 315</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">code4degree@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Code4Degree?</h4>
              <ul className="space-y-3">
                {['Professional quality projects', 'Complete documentation included', 'Fast delivery guaranteed', 'Post-delivery support', 'Affordable pricing', 'Trusted by 500+ students'].map((item, index) => <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>)}
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Enter your full name" />
                </div>

                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                    College/University *
                  </label>
                  <input type="text" id="college" name="college" value={formData.college} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Enter your college name" />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option value="">Select project type</option>
                    <option value="Diploma Project">Diploma Project</option>
                    <option value="Degree Project">Degree Project</option>
                    <option value="Gen AI Project">Gen AI Project</option>
                    <option value="Custom Project">Custom Project</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Tell us about your project requirements..." />
                </div>

                <motion.div whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;
