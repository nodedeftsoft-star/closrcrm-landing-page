import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import heroImage from 'figma:asset/701907b3a26e44e09f1c1a3167198cdc767fc387.png';
import productPreviewVideo from '../assets/productpreview.mov';

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl tracking-tight"
          >
            <a href="/">
              <svg width="105" height="50" viewBox="0 0 105 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="105" height="50" rx="16" fill="#5B9FFF"/>
                <text x="52.5" y="33" fill="white" fontSize="22" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.85">closR</text>
              </svg>
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
            <a href="http://localhost:3001/login" className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">Sign In</a>
            <a href="http://localhost:3001/signup" className="px-6 py-2.5 bg-[#3C8DFF] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
              Get Started
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#3C8DFF] rounded-full animate-pulse"></span>
              <span className="text-sm text-blue-700">New: Daily NYC property data updates</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight">
              The CRM built for NYC real estate professionals
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Manage buyer, seller, renter, and landlord lifecycles in one place. 
              Daily data pulls of all NYC properties to match your clients with their perfect property.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="http://localhost:3001/signup" className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                Get Started for $1
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-full hover:border-gray-300 hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Daily NYC data updates
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Start at just $1
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#3C8DFF] rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <img 
                src={heroImage} 
                alt="CRM Dashboard" 
                className="w-full rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#3C8DFF] rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">1247 Properties Matched</div>
                    <div className="text-sm text-gray-900">with perspective buyers and renters</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 -z-10"></div>
    </div>

    {/* Video Modal */}
    <AnimatePresence>
      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoModalOpen(false)}
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video */}
            <video
              src={productPreviewVideo}
              controls
              autoPlay
              className="w-full h-auto"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}