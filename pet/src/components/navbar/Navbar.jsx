import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaw, FaBone, FaHeart, FaPhone, FaHome, FaBars } from 'react-icons/fa';

const BubbleAnimation = () => {
  // Create a wider range of starting positions
  const createBubbleConfig = () => {
    const positions = [];
    for (let i = 0; i < 20; i++) {
      const startX = `${i * 5}%`; // Distribute evenly across 100% width
      const randomOffset = Math.random() * 20 - 10; // Random offset between -10% and +10%
      const endX = `${Math.min(Math.max(i * 5 + randomOffset, 0), 100)}%`; // Keep within 0-100%
      
      positions.push({
        startX,
        endX,
        size: Math.random() * 40 + 20, // Random size between 20-60px
        duration: Math.random() * 4 + 4, // Random duration between 4-8s
        delay: Math.random() * 8, // Random delay up to 8s
      });
    }
    return positions;
  };

  const bubbleConfigs = createBubbleConfig();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbleConfigs.map((config, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            background: `radial-gradient(circle at center, 
              rgba(165, 243, 252, 0.3) 0%,
              rgba(34, 211, 238, 0.2) 50%,
              rgba(103, 232, 249, 0.1) 100%)`
          }}
          initial={{
            width: config.size,
            height: config.size,
            x: config.startX,
            y: "120%",
            opacity: 0
          }}
          animate={{
            y: [null, "-120%"],
            x: [config.startX, config.endX],
            opacity: [0, 0.6, 0],
            scale: [1, 1.2, 0.8]
          }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: config.delay,
            times: [0, 0.5, 1]
          }}
        />
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Services', path: '/services', icon: <FaBone /> },
    { name: 'About', path: '/about', icon: <FaHeart /> },
    { name: 'Contact', path: '/contact', icon: <FaPhone /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 p-4 fixed w-full z-50 shadow-lg relative overflow-hidden"
    >
      <BubbleAnimation />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-2 backdrop-blur-sm p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            >
              <FaPaw className="h-8 w-8 text-white drop-shadow-lg" />
            </motion.div>
            <span className="text-2xl font-bold text-white tracking-wider drop-shadow-lg">MyPet</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative backdrop-blur-sm p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <Link
                  to={item.path}
                  className="flex items-center space-x-2 text-white hover:text-cyan-100 transition-colors duration-300"
                >
                  <motion.span 
                    className="text-lg drop-shadow-lg"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="font-medium drop-shadow-lg">{item.name}</span>
                </Link>
                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0 }}
                      className="h-0.5 bg-cyan-200 absolute bottom-0 left-0 shadow-lg"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#0891b2'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 border-2 border-white/50 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-xl backdrop-blur-sm drop-shadow-lg"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 backdrop-blur-sm rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <FaBars className="h-6 w-6 drop-shadow-lg" />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-gradient-to-b from-white/10 to-white/5 rounded-lg backdrop-blur-sm p-2"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  className="py-2 px-3 rounded-lg backdrop-blur-sm mb-2 hover:bg-white/10 transition-all duration-300"
                >
                  <Link
                    to={item.path}
                    className="flex items-center space-x-4 text-white hover:text-cyan-100 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-lg drop-shadow-lg"
                    >
                      {item.icon}
                    </motion.span>
                    <span className="font-medium drop-shadow-lg">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#0891b2'
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-white/10 border-2 border-white/50 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-xl backdrop-blur-sm drop-shadow-lg"
              >
                Book Now
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;