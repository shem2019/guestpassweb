import { useState } from 'react';
import { Menu, X, Shield, Smartphone, Users, Zap } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onLogin: (role: 'admin' | 'host') => void;
  onNavigate: (section: string) => void;
}

export function Header({ onLogin, onNavigate }: HeaderProps) {
  const [showLogin, setShowLogin] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'admin' | 'host'>('host');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogin = () => {
    onLogin(selectedRole);
    setShowLogin(false);
  };

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  const navigationItems = [
    { name: 'Home', path: 'home', icon: Shield },
    { name: 'Features', path: 'features', icon: Zap },
    { name: 'Pricing', path: 'pricing', icon: Users },
    { name: 'FAQ', path: 'faq', icon: Smartphone },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full bg-white/80 border-b border-gray-200 backdrop-blur-xl shadow-sm"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigate('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-lg font-bold">GP</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">GuestPass</span>
              <span className="text-xs text-gray-500 hidden sm:block">Smart Visitor Management</span>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-green-50 transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            {/* Desktop Login Button */}
            <motion.div
              className="hidden sm:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => setShowLogin(true)} 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-200 font-medium"
              >
                Login
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.path}
                      onClick={() => handleNavigate(item.path)}
                      className="flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-left text-gray-600 hover:text-gray-900 hover:bg-green-50 transition-all duration-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile Login Button */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setShowLogin(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-200 font-medium"
                  >
                    Login to GuestPass
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowLogin(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Welcome to GuestPass</h2>
                <p className="text-gray-600">Access your visitor management dashboard</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-base font-medium text-gray-900 mb-2">Select Your Role</label>
                  <div className="relative">
                    <select 
                      value={selectedRole} 
                      onChange={(e) => setSelectedRole(e.target.value as 'admin' | 'host')}
                      className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none pr-10"
                    >
                      <option value="host">Host - Manage your visitors</option>
                      <option value="admin">Admin - Estate management</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-base font-medium text-gray-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-base font-medium text-gray-900 mb-2">Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <button 
                  onClick={handleLogin} 
                  className="w-full h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg shadow-lg transition-all duration-200 font-medium"
                >
                  Access Dashboard
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}