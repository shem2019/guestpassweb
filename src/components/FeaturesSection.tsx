"use client";

import {
  UserPlus,
  QrCode,
  Shield,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Clock,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeaturesSection() {
  const features = [
    {
      icon: UserPlus,
      title: "Visitor Registration",
      description:
        "Real-time entry system with instant visitor registration and verification.",
      color: "text-green-600",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    },
    {
      icon: QrCode,
      title: "Pre-Admit System",
      description:
        "QR-based pre-admission system for seamless visitor experience.",
      color: "text-yellow-500",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
    },
    {
      icon: Shield,
      title: "OTP Exit Validation",
      description:
        "Secure exit validation using one-time passwords for enhanced security.",
      color: "text-green-600",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    },
    {
      icon: BarChart3,
      title: "Admin Dashboards",
      description:
        "Comprehensive analytics and reporting tools for administrators.",
      color: "text-yellow-500",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    },
    {
      icon: Users,
      title: "Host Management",
      description:
        "Complete visitor management system for hosts and residents.",
      color: "text-green-600",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
    },
    {
      icon: CheckCircle2,
      title: "Smart Automation",
      description:
        "Automated workflows and intelligent visitor flow management.",
      color: "text-yellow-500",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        // Use a cubic‑bezier array for ease
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Complete Visitor Management{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">
              Solution
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Everything you need to manage visitors efficiently, securely, and
            professionally with cutting-edge technology.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 text-green-600">
              <Smartphone className="w-5 h-5" />
              <span className="font-medium">Mobile Ready</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-500">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Real-time Updates</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Bank-level Security</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="group hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300 bg-white/80 backdrop-blur-sm overflow-hidden h-full rounded-xl">
                <div className="relative overflow-hidden">
                  <motion.div
                    className="h-48 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <feature.icon
                        className={`w-6 h-6 ${feature.color}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4"
                  >
                    <button className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 h-auto flex items-center font-medium transition-all duration-200">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 max-w-4xl mx-auto border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Visitor Management?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust GuestPass for
              their estate security needs.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-200 font-medium inline-flex items-center">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
