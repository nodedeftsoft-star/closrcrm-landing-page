import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <div className="py-24 bg-gradient-to-br from-purple-600 via-[#3C8DFF] to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight">
            Ready to transform your real estate business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join hundreds of NYC realtors and brokers who are closing more deals with closR.
            Get started today for just $1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://localhost:3001/signup" className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
              Get Started for $1
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://calendly.com/closrcrm" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#3C8DFF] transition-all duration-200">
              Schedule Demo
            </a>
          </div>
          <p className="mt-8 text-blue-100 text-sm">
            $1 to start • Daily NYC property updates • Cancel anytime
          </p>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
    </div>
  );
}