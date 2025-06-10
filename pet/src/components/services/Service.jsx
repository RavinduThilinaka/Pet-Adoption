import { useState } from 'react';

const Service= () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Dog Walking",
      description: "Professional dog walking services to keep your pet active and healthy. We offer 30-minute and 60-minute walks.",
      price: "$15 - $25",
      category: "dogs",
      icon: "🐕"
    },
    {
      id: 2,
      title: "Pet Grooming",
      description: "Full-service grooming including bath, haircut, nail trimming, and ear cleaning for all breeds.",
      price: "$30 - $80",
      category: "grooming",
      icon: "✂️"
    },
    {
      id: 3,
      title: "Cat Sitting",
      description: "In-home cat care including feeding, litter box cleaning, and playtime while you're away.",
      price: "$20 per visit",
      category: "cats",
      icon: "🐈"
    },
    {
      id: 4,
      title: "Pet Boarding",
      description: "Safe and comfortable overnight stays for your pets with 24/7 supervision.",
      price: "$40 per night",
      category: "boarding",
      icon: "🏠"
    },
    {
      id: 5,
      title: "Veterinary Care",
      description: "Basic veterinary services including vaccinations, health checks, and minor treatments.",
      price: "Varies",
      category: "health",
      icon: "🏥"
    },
    {
      id: 6,
      title: "Pet Training",
      description: "Professional obedience training for dogs of all ages and breeds.",
      price: "$60 per session",
      category: "dogs",
      icon: "🎓"
    },
    {
      id: 7,
      title: "Pet Taxi",
      description: "Transportation service for vet visits, grooming appointments, or any other needs.",
      price: "$25 per trip",
      category: "transport",
      icon: "🚗"
    },
    {
      id: 8,
      title: "Exotic Pet Care",
      description: "Specialized care for birds, reptiles, and other exotic pets.",
      price: "Starting at $25",
      category: "exotic",
      icon: "🦜"
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'dogs', name: 'Dogs' },
    { id: 'cats', name: 'Cats' },
    { id: 'grooming', name: 'Grooming' },
    { id: 'boarding', name: 'Boarding' },
    { id: 'health', name: 'Health' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
            Our <span className="text-orange-600">Pet Care</span> Services
          </h1>
          <p className="max-w-xl mx-auto text-xl text-gray-600">
            Professional care for your beloved pets. We treat them like family!
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-orange-600 text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-100 shadow-sm hover:text-orange-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ${
                hoveredCard === service.id 
                  ? 'transform -translate-y-3 shadow-xl border-2 border-orange-300' 
                  : 'border border-gray-100 hover:border-orange-200'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4 animate-bounce">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-600 font-bold">{service.price}</span>
                  <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors duration-300 font-medium">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-orange-600 rounded-xl p-8 md:p-12 text-center text-white relative overflow-hidden animate-pulse-slow">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-500 rounded-full opacity-20 animate-float-delay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Can't find what you need?</h2>
            <p className="text-orange-100 max-w-2xl mx-auto mb-6 text-lg">
              We offer custom pet care solutions tailored to your specific needs. Contact us to discuss how we can help!
            </p>
            <button className="px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Add these to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s ease-in-out infinite 2s;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Service;