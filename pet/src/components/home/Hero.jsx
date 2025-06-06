import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaPaw, FaHeart, FaArrowRight, FaStar, FaDog, FaCat } from 'react-icons/fa';
import petImage1 from '../../assets/pet1.jpg'; // Replace with your images
import petImage2 from '../../assets/pet2.jpg';
import petImage3 from '../../assets/pet3.jpg';
import petImage4 from '../../assets/pet4.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();

  // Your pet images for the background carousel
  const backgroundImages = [
    { src: petImage1, alt: "Happy dog playing" },
    { src: petImage2, alt: "Cat being cared for" },
    { src: petImage3, alt: "Veterinarian with pet" },
    { src: petImage4, alt: "Pet family" }
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const startBounceAnimation = async () => {
    await controls.start({
      y: [0, -20, 0],
      transition: { duration: 0.8, repeat: Infinity, repeatType: 'reverse' }
    });
  };

  useEffect(() => {
    startBounceAnimation();
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img 
              src={backgroundImages[currentSlide].src} 
              alt={backgroundImages[currentSlide].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 via-amber-900/50 to-yellow-900/40" />
            <div className="absolute inset-0 backdrop-blur-[1px]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`paw-${i}`}
            className="absolute text-orange-200/40"
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
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg mb-8"
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

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
            >
              <span className="block">Premium Care</span>
              <span className="block bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
                For Your Pets
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-xl md:text-2xl text-orange-100 max-w-2xl"
            >
              Our certified specialists provide loving, professional care that keeps 
              tails wagging and purrs coming 24/7.
            </motion.p>

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
              </motion.button>

              <motion.button
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-5 bg-white/90 backdrop-blur-sm text-orange-600 rounded-xl font-bold border-2 border-orange-200 hover:bg-orange-50 transition-all shadow-sm hover:shadow-md flex items-center group"
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
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-sm">
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
            </motion.div>
          </div>

          {/* Right content - Can be left empty or add additional content */}
          <div className="relative"></div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-orange-500 w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;