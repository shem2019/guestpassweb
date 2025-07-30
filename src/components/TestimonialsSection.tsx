import { Star, Quote, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "GuestPass has completely transformed how we manage visitors. The setup was incredibly easy, and our residents love the seamless experience.",
      author: "Sarah Johnson",
      role: "Estate Manager",
      estate: "Greenwood Estates",
      rating: 5,
      initials: "SJ",
      image: "https://images.unsplash.com/photo-1494790108755-2616b60d4e33?w=150&h=150&fit=crop&crop=face",
      videoTestimonial: true
    },
    {
      quote: "The security features give us complete peace of mind. Real-time notifications and comprehensive reporting have made our job so much easier.",
      author: "Michael Chen",
      role: "Security Director",
      estate: "Palm View Residences",
      rating: 5,
      initials: "MC",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      videoTestimonial: false
    },
    {
      quote: "Our visitors consistently praise how smooth and professional the entry process is now. GuestPass has elevated our entire visitor experience.",
      author: "Amanda Rodriguez",
      role: "Community Director",
      estate: "Sunset Gardens",
      rating: 5,
      initials: "AR",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      videoTestimonial: true
    },
    {
      quote: "The mobile app is fantastic! Residents can easily pre-approve visitors and track their arrivals. It's made our community much more secure and efficient.",
      author: "David Thompson",
      role: "Resident Council Chair",
      estate: "Oceanview Towers",
      rating: 5,
      initials: "DT",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      videoTestimonial: false
    },
    {
      quote: "Implementation was smooth and the support team was incredible. Within days, we saw significant improvements in our visitor management process.",
      author: "Jennifer Liu",
      role: "Operations Manager",
      estate: "Metropolitan Plaza",
      rating: 5,
      initials: "JL",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      videoTestimonial: true
    },
    {
      quote: "The analytics dashboard gives us insights we never had before. We can track visitor patterns and optimize our security protocols effectively.",
      author: "Robert Kim",
      role: "Facility Manager",
      estate: "Heritage Gardens",
      rating: 5,
      initials: "RK",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      videoTestimonial: false
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-64 h-64 bg-green-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-64 h-64 bg-yellow-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">
              Customers Say
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Don't just take our word for it. Here's what estate managers and residents are saying about GuestPass.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 Rating</span>
            </div>
            <div className="text-gray-600">100+ Happy Customers</div>
            <div className="text-gray-600">10+ Estates</div>
          </motion.div>
        </motion.div>

        {/* Desktop Testimonials Grid */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gray-200 h-full rounded-xl">
                  <div className="p-8">
                    <Quote className="w-10 h-10 text-green-200 mb-6" />
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <blockquote className="text-gray-600 mb-6 leading-relaxed text-lg">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 border-2 border-green-200 rounded-full overflow-hidden">
                          <ImageWithFallback
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {testimonial.videoTestimonial && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                            <Play className="w-5 h-5 text-white fill-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-green-600 font-medium">{testimonial.estate}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-green-200 hover:bg-green-50 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index >= currentIndex && index < currentIndex + 3
                      ? 'bg-green-500'
                      : 'bg-green-200'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-green-200 hover:bg-green-50 flex items-center justify-center transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Testimonials Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl">
                <div className="p-6">
                  <Quote className="w-8 h-8 text-green-200 mb-4" />
                  
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 border-2 border-green-200 rounded-full overflow-hidden">
                        <ImageWithFallback
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {testimonials[currentIndex].videoTestimonial && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
                      <div className="text-sm text-gray-600">{testimonials[currentIndex].role}</div>
                      <div className="text-sm text-green-600 font-medium">{testimonials[currentIndex].estate}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-green-200 hover:bg-green-50 flex items-center justify-center transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-green-500 w-6' : 'bg-green-200'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-green-200 hover:bg-green-50 flex items-center justify-center transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

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
              Join Our Growing Community
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the difference that professional visitor management makes for your estate.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-200 font-medium">
              Start Your Success Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}