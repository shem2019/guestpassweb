import { motion } from "framer-motion";

import { Shield, Smartphone, Users, Zap, Clock, Lock, BarChart3, CheckCircle, Globe, Star } from 'lucide-react';

export function AnimatedScrollingFeatures() {
  const features = [
    { icon: Shield, title: "Secure Entry", color: "text-green-500", bg: "bg-green-100" },
    { icon: Smartphone, title: "Mobile App", color: "text-yellow-500", bg: "bg-yellow-100" },
    { icon: Users, title: "Guest Management", color: "text-green-500", bg: "bg-green-100" },
    { icon: Zap, title: "Instant Access", color: "text-yellow-500", bg: "bg-yellow-100" },
    { icon: Clock, title: "Real-time Tracking", color: "text-green-500", bg: "bg-green-100" },
    { icon: Lock, title: "Advanced Security", color: "text-yellow-500", bg: "bg-yellow-100" },
    { icon: BarChart3, title: "Analytics", color: "text-green-500", bg: "bg-green-100" },
    { icon: CheckCircle, title: "Easy Setup", color: "text-yellow-500", bg: "bg-yellow-100" },
    { icon: Globe, title: "Cloud Based", color: "text-green-500", bg: "bg-green-100" },
    { icon: Star, title: "Premium Support", color: "text-yellow-500", bg: "bg-yellow-100" },
  ];

  // Duplicate features for seamless loop
  const duplicatedFeatures = [...features, ...features];

  return (
    <div className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Visitor Management Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover all the powerful features that make GuestPass the perfect solution for modern estates
          </p>
        </div>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-8">
        <motion.div
          className="flex space-x-6"
          animate={{ x: [-1000, 0] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: "calc(200% + 1000px)" }}
        >
          {duplicatedFeatures.map((feature, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg border border-gray-200 min-w-[280px] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">Advanced security and convenience</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <motion.div
          className="flex space-x-6"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: "calc(200% + 1000px)" }}
        >
          {duplicatedFeatures.reverse().map((feature, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg border border-gray-200 min-w-[280px] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">Smart visitor management solution</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}