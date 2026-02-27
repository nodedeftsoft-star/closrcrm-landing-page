import React from 'react';
import { motion } from 'motion/react';

export function SocialProof() {
  const stats = [
    { value: '10,000+', label: 'NYC Properties' },
    { value: '500+', label: 'Active Agents' },
    { value: '95%', label: 'Match Accuracy' },
    { value: 'Daily', label: 'Data Updates' },
  ];

  return (
    <div className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mb-8"
        >
          Trusted by NYC's top realtors and brokers
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl bg-gradient-to-r from-[#3C8DFF] to-[#5BA3FF] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}