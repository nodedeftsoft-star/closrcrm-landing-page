import React from 'react';
import { Zap, Users, BarChart3, Lock, Smartphone, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Daily NYC Property Data',
      description: 'Automatic daily pulls of all NYC properties. Match clients to properties based on their criteria instantly.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Complete Lifecycle Management',
      description: 'Track buyers, sellers, renters, and landlords from first contact to closing and beyond.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Smart Matching',
      description: 'AI-powered property matching that learns client preferences and surfaces the best opportunities.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Secure Client Data',
      description: 'Bank-level encryption keeps sensitive client and transaction information protected.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile CRM',
      description: 'Coming soon: Access client info, property matches, and updates on the go with native mobile apps.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'NYC Market Intel',
      description: 'Real-time market insights, neighborhood data, and pricing trends across all five boroughs.',
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
            Built specifically for real estate professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage client relationships and match them with their perfect NYC property.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}