import React from 'react';
import { motion } from 'motion/react';
import matchesDashboard from 'figma:asset/f6edc2d13c2a8fc421fb8bb227ba6854d4352d78.png';
import buyerProfile from 'figma:asset/553fd9d4fa8743708bc8969f3f65e29d0bf04a76.png';
import propertyDetails from 'figma:asset/488875195ff2dd64ee1af0880186edb0f38fd31f.png';

export function ProductShowcase() {
  const features = [
    {
      title: 'Smart Property Matching',
      description: 'Automatically match renters with properties based on their criteria. Filter by neighborhood, rent range, bedrooms, and more. See all matching properties with detailed information at a glance.',
      component: matchesDashboard,
      highlights: [
        'AI-powered matching algorithm',
        'Advanced filtering options',
        'Real-time property data',
        'Sortable results table'
      ],
      reverse: false
    },
    {
      title: 'Detailed Property Views',
      description: 'View comprehensive property details including photos, location, rent, brokerage info, and complete activity history. Track showing status and manage proposals all in one place.',
      component: propertyDetails,
      highlights: [
        'Photo galleries',
        'Brokerage contact info',
        'Activity timeline tracking',
        'Status management'
      ],
      reverse: true
    },
    {
      title: 'Streamlined Client Onboarding',
      description: 'Add new renters quickly with organized forms capturing personal information, financials, preferences, and amenities. Everything structured for efficient property matching.',
      component: buyerProfile,
      highlights: [
        'Comprehensive client profiles',
        'Preference tracking',
        'Financial information',
        'Amenity requirements'
      ],
      reverse: false
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-sm text-orange-700">Product Tour</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
            See closR in action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed specifically for NYC real estate professionals
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                feature.reverse ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={feature.reverse ? 'md:col-start-2' : ''}>
                <h3 className="text-3xl mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#3C8DFF] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={feature.reverse ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#3C8DFF] rounded-3xl opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                    {/* Browser Chrome */}
                    <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 mx-4 bg-gray-700 rounded px-3 py-1 text-xs text-gray-400">
                        app.closrcrm.com
                      </div>
                    </div>
                    {/* Screenshot */}
                    <img 
                      src={feature.component} 
                      alt={feature.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-xl mb-2">Automated Workflows</h4>
              <p className="text-gray-600">
                Set up automated follow-ups, reminders, and task assignments to never miss an opportunity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl mb-2">Performance Analytics</h4>
              <p className="text-gray-600">
                Track your conversion rates, deal velocity, and revenue metrics with detailed reporting.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl mb-2">Instant Notifications</h4>
              <p className="text-gray-600">
                Get real-time alerts when new properties match your buyers' criteria or when deals progress.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}