import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/projets', label: 'Projets' },
    { path: '/construire-etranger', label: 'Construire depuis l\'étranger' },
    { path: '/nos-services', label: 'Nos services' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Compass className="h-10 w-10 text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-lg group-hover:bg-emerald-400/30 transition-all duration-300"></div>
              </div>
              <span 
                className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-emerald-600 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-emerald-400 transition-all duration-300"
                style={{
                  textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 0 1px 0 white, 1px 0 0 white, 0 -1px 0 white, -1px 0 0 white'
                }}
              >
                Studio 243
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
         
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                    location.pathname === item.path
                      ? 'text-white bg-emerald-500 shadow-lg shadow-emerald-500/25'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-white/20 backdrop-blur-sm'
                  }`}
                  style={{
                    textShadow: location.pathname === item.path 
                      ? 'none' 
                      : '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 0 1px 0 white, 1px 0 0 white, 0 -1px 0 white, -1px 0 0 white'
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {location.pathname !== item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-gray-700 hover:text-emerald-500 hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-lg border-t border-white/20"
          >
                         <div className="px-4 pt-4 pb-6 space-y-2">
               {/* Bouton prioritaire Diaspora pour mobile */}
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.1 }}
               >
                 <Link
                   to="/construire-etranger"
                   className="block px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg transition-all duration-300 transform hover:scale-105 mb-3"
                   style={{
                     textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                   }}
                   onClick={() => setIsOpen(false)}
                 >
                   🌍 Construire depuis l'étranger
                 </Link>
               </motion.div>
               
               {navItems.filter(item => item.path !== '/construire-etranger').map((item, index) => (
                 <motion.div
                   key={item.path}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: (index + 1) * 0.1 }}
                 >
                   <Link
                     to={item.path}
                     className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                       location.pathname === item.path
                         ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                         : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 hover:translate-x-2'
                     }`}
                     style={{
                       textShadow: location.pathname === item.path 
                         ? 'none' 
                         : '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 0 1px 0 white, 1px 0 0 white, 0 -1px 0 white, -1px 0 0 white'
                     }}
                     onClick={() => setIsOpen(false)}
                   >
                     {item.label}
                   </Link>
                 </motion.div>
               ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;