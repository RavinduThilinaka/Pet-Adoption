import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPaw, FaHeart, FaArrowRight, FaStar, FaRegStar, FaDog, FaCat } from 'react-icons/fa';

const Home = () => {
  const controls = useAnimation();

  const startBounceAnimation = async () => {
    await controls.start({
      y: [0, -20, 0],
      transition: { duration: 0.8, repeat: Infinity, repeatType: 'reverse' }
    });
  };

  React.useEffect(() => {
    startBounceAnimation();
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 min-h-screen">
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating paw prints */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`paw-${i}`}
            className="absolute text-orange-200/30"
            style={{
              fontSize: `${Math.random() * 30 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, Math.random() * 60 - 30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <FaPaw />
          </motion.div>
        ))}

        {/* Floating hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-pink-300/20"
            style={{
              fontSize: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <FaHeart />
          </motion.div>
        ))}
      </div>

      {/* Glowing orb decoration */}
      <motion.div
        className="absolute -left-32 -top-32 w-64 h-64 rounded-full bg-gradient-to-r from-orange-300/30 to-amber-300/20 filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="relative">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mr-2"
              >
                <FaPaw className="text-orange-500 text-lg" />
              </motion.div>
              <span className="text-sm font-semibold text-orange-600">
                Trusted Pet Care Since 2010
              </span>
              <div className="ml-3 flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 w-4 h-4" />
                ))}
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900"
            >
              <span className="block">Where Pets</span>
              <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Get Premium Care
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl"
            >
              Our certified specialists provide loving, professional care that keeps 
              tails wagging and purrs coming 24/7.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center group"
              >
                <span>Book Appointment</span>
                <motion.span
                  animate={controls}
                  className="ml-3"
                >
                  <FaArrowRight />
                </motion.span>
                <div className="absolute inset-0 rounded-xl border-2 border-orange-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.button>

              <motion.button
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-5 bg-white text-orange-600 rounded-xl font-bold border-2 border-orange-200 hover:bg-orange-50 transition-all shadow-sm hover:shadow-md flex items-center group"
              >
                <span>Our Services</span>
                <motion.div
                  animate={{ 
                    x: [0, 5, 0],
                    transition: { duration: 1.5, repeat: Infinity }
                  }}
                  className="ml-3"
                >
                  <FaPaw className="text-orange-400" />
                </motion.div>
                <div className="absolute inset-0 rounded-xl border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl shadow-sm">
                <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.img
                      key={i}
                      src={`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${i+10}.jpg`}
                      alt="Happy customer"
                      className="w-10 h-10 rounded-full border-2 border-white"
                      initial={{ x: -5 * i, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-800">500+ Happy Clients</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400 w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <FaDog className="text-orange-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Dogs</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <FaCat className="text-orange-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Cats</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right content - image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-1">
              <img
                src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Happy dog with veterinarian"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent" />
              
              {/* Animated overlay elements */}
              <motion.div
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: 'spring' }}
              >
                <div className="bg-orange-100 p-2 rounded-lg mr-3">
                  <FaHeart className="text-orange-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">CERTIFIED</p>
                  <p className="font-bold text-orange-600">Veterinarians</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, type: 'spring' }}
              >
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-lg mr-3">
                    <FaPaw className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">OPEN</p>
                    <p className="font-bold text-amber-600">24/7 Emergency</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating pet elements */}
            <motion.div
              className="absolute -bottom-10 -left-10 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              <div className="text-4xl">🐕</div>
            </motion.div>

            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              <div className="text-3xl">🐈</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;