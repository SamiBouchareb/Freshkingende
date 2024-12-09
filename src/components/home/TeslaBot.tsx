import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Clock, Shield } from 'lucide-react';

interface TeslaBotProps {
  id: string;
}

export function TeslaBot({ id }: TeslaBotProps) {
  const benefits = [
    {
      icon: Bot,
      title: 'Advanced Automation',
      description: 'State-of-the-art robotic assistance for precise and efficient food preparation'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Reduced wait times with automated order processing and preparation'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Continuous operation ensuring fresh food availability around the clock'
    },
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'Advanced safety protocols and consistent quality control'
    }
  ];

  return (
    <section id={id} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Future of Food Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience revolutionary food service with Tesla Bot integration. 
            Combining cutting-edge robotics with our commitment to fresh, healthy food.
          </p>
        </motion.div>

        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  {React.createElement(benefit.icon, { className: 'w-6 h-6 text-green-600' })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
