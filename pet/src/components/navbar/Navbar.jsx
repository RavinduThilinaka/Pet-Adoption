import { motion, AnimatePresence } from "framer-motion";
import { FaPaw, FaShoppingCart, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { name: "Home", path: "home" },
    { name: "Services", path: "services" },
    { name: "About", path: "about" },
    { name: "Shop", path: "shop" },
    { name: "Contact", path: "contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 10, stiffness: 100 }}
      className={`fixed w-full z-50 ${scrolled ? "bg-white shadow-lg" : "bg-orange-50"} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <FaPaw className="text-orange-500 text-3xl" />
            </motion.div>
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              PetCare
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 relative">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative"
                >
                  <button
                    onClick={() => scrollToSection(item.path)}
                    className={`px-3 py-2 text-lg font-medium ${scrolled ? "text-orange-900" : "text-orange-900"} relative z-10 cursor-pointer`}
                  >
                    {item.name}
                  </button>
                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div
                        layoutId="navHover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-0 left-0 w-full h-full bg-orange-100 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Contact and Cart */}
            <div className="flex items-center space-x-6 ml-6">
              <motion.a
                href="tel:+1234567890"
                className="flex items-center text-orange-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhoneAlt className="mr-2 text-orange-500" />
                <span className="font-medium">(123) 456-7890</span>
              </motion.a>

              <motion.button
                className="relative p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaShoppingCart className="text-orange-500 text-xl" />
                <motion.span
                  className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  3
                </motion.span>
              </motion.button>

              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-medium shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(245, 158, 11, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
              >
                Book Now
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orange-900 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.path)}
                    className="block w-full text-left px-3 py-3 rounded-lg text-lg font-medium text-orange-900 hover:bg-orange-50 cursor-pointer"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              
              <div className="pt-4 mt-4 border-t border-orange-100">
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center px-3 py-3 text-orange-900"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaPhoneAlt className="mr-3 text-orange-500" />
                  <span className="font-medium">(123) 456-7890</span>
                </motion.a>
                
                <motion.button
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-medium shadow-lg flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                >
                  <FaPaw />
                  <span>Book Appointment</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;