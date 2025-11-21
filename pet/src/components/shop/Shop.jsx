import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart, FaStar, FaSearch, FaTrash, FaTimes } from "react-icons/fa";
import { useState } from "react";

// Import your local images
import premiumDogFood from "../../assets/food.jpg";
import comfortPetBed from "../../assets/bed.jpg";
import interactiveToySet from "../../assets/toy.jpg";
import groomingKit from "../../assets/bath.jpg";
import designerCollar from "../../assets/belt.jpg";
import healthSupplements from "../../assets/medicine.jpg";
import travelCarrier from "../../assets/travel.jpg";
import trainingTreats from "../../assets/training.jpg";
import fallbackImage from "../../assets/travel.jpg";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Premium Dog Food",
      price: 29.99,
      category: "food",
      image: premiumDogFood,
      rating: 4.8,
      description: "High-quality nutrition for your furry friend",
      featured: true
    },
    {
      id: 2,
      name: "Comfort Pet Bed",
      price: 49.99,
      category: "bedding",
      image: comfortPetBed,
      rating: 4.9,
      description: "Ultra-soft and comfortable sleeping space",
      featured: true
    },
    {
      id: 3,
      name: "Interactive Toy Set",
      price: 24.99,
      category: "toys",
      image: interactiveToySet,
      rating: 4.6,
      description: "Keep your pet entertained for hours",
      featured: false
    },
    {
      id: 4,
      name: "Grooming Kit",
      price: 34.99,
      category: "grooming",
      image: groomingKit,
      rating: 4.7,
      description: "Complete grooming essentials",
      featured: false
    },
    {
      id: 5,
      name: "Designer Collar",
      price: 19.99,
      category: "accessories",
      image: designerCollar,
      rating: 4.5,
      description: "Stylish and durable collar",
      featured: true
    },
    {
      id: 6,
      name: "Health Supplements",
      price: 39.99,
      category: "health",
      image: healthSupplements,
      rating: 4.8,
      description: "Essential vitamins and minerals",
      featured: false
    },
    {
      id: 7,
      name: "Travel Carrier",
      price: 59.99,
      category: "travel",
      image: travelCarrier,
      rating: 4.4,
      description: "Safe and comfortable travel solution",
      featured: false
    },
    {
      id: 8,
      name: "Training Treats",
      price: 14.99,
      category: "food",
      image: trainingTreats,
      rating: 4.9,
      description: "Delicious rewards for training",
      featured: true
    }
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "food", name: "Food & Treats" },
    { id: "toys", name: "Toys" },
    { id: "bedding", name: "Bedding" },
    { id: "grooming", name: "Grooming" },
    { id: "accessories", name: "Accessories" },
    { id: "health", name: "Health" },
    { id: "travel", name: "Travel" }
  ];

  // Filter products based on category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1, cartId: Date.now() + product.id }]);
    }
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(cartId);
      return;
    }
    setCart(cart.map(item =>
      item.cartId === cartId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      {/* Cart Sidebar */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsCartOpen(false)}
        />
      )}
      
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isCartOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col"
      >
        {/* Cart Header */}
        <div className="p-6 border-b border-orange-200 flex justify-between items-center bg-orange-500 text-white">
          <div className="flex items-center space-x-2">
            <FaShoppingCart />
            <h2 className="text-2xl font-bold">Your Cart</h2>
            {cart.length > 0 && (
              <span className="bg-white text-orange-500 rounded-full px-2 py-1 text-sm font-bold">
                {getCartItemCount()}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-orange-600 rounded-full transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center text-orange-600 py-12">
              <FaShoppingCart className="text-6xl mx-auto mb-4 opacity-30" />
              <p className="text-xl font-semibold mb-2">Your cart is empty</p>
              <p className="text-orange-500">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <motion.div
                  key={item.cartId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-4 bg-orange-50 rounded-lg p-4 border border-orange-200"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = fallbackImage;
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-orange-900 truncate">{item.name}</h3>
                    <p className="text-orange-600 font-bold">${item.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm"
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors flex-shrink-0"
                  >
                    <FaTrash />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-orange-200 bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-orange-900">Total:</span>
              <span className="text-2xl font-bold text-orange-500">${getTotalPrice()}</span>
            </div>
            <div className="space-y-2">
              <motion.button 
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout
              </motion.button>
              <button
                onClick={clearCart}
                className="w-full border border-orange-500 text-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </motion.div>

      <section id="shop" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Cart Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-between items-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex items-center space-x-3"
              >
                <FaShoppingCart className="text-4xl text-orange-500" />
                <h1 className="text-3xl font-bold text-orange-900">PetShop</h1>
              </motion.div>
              
              {/* Cart Button */}
              <motion.button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-orange-500 text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-orange-600 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaShoppingCart />
                <span>View Cart</span>
                {getCartItemCount() > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
                  >
                    {getCartItemCount()}
                  </motion.span>
                )}
              </motion.button>
            </div>

            <h2 className="text-5xl font-bold text-orange-900 mb-4">
              Premium Pet Products
            </h2>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto">
              Discover premium products for your beloved pets. Quality you can trust, prices you'll love.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white text-orange-700 hover:bg-orange-100 shadow-md"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white"
              />
            </div>
          </motion.div>

          {/* Products Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-orange-700">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-orange-100"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = fallbackImage;
                    }}
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  <motion.button
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaHeart className="text-orange-400" />
                  </motion.button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-orange-900">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-amber-400" />
                      <span className="text-sm text-orange-700">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-orange-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">${product.price}</span>
                    <motion.button
                      onClick={() => addToCart(product)}
                      className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium flex items-center space-x-2 hover:bg-orange-600 transition-colors duration-300 text-sm shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaShoppingCart className="text-xs" />
                      <span>Add to Cart</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State for Search */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FaSearch className="text-6xl text-orange-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-800 mb-2">No products found</h3>
              <p className="text-orange-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-xl mb-8 opacity-90">
                Contact us for special orders or custom pet products!
              </p>
              <motion.button
                className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Specialists
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Shop;