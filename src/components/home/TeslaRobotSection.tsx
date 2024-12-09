import React from 'react';
import { motion } from 'framer-motion';

const TeslaRobotSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Future of Food Service: Tesla Bot Integration
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the next generation of food service with our planned Tesla Bot integration. 
            Combining cutting-edge robotics with our commitment to fresh, healthy food delivery.
          </p>
        </motion.div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/DrNcXgoFv20"
              title="Tesla Bot Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Efficient Delivery</h3>
            <p className="text-gray-600">
              24/7 automated delivery service ensuring your fresh meals arrive promptly and safely.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Contactless Service</h3>
            <p className="text-gray-600">
              Hygienic, contact-free delivery system prioritizing your safety and convenience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Integration</h3>
            <p className="text-gray-600">
              AI-powered service adapting to your preferences and delivery needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeslaRobotSection;
