import { useState, useEffect } from 'react';

const Service = () => {
  const [activeService, setActiveService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = (scrollY / (docHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'virtual-meet',
      title: 'Virtual Meet & Greet',
      description: 'Interactive video sessions with pets before adoption',
      icon: '🎥',
      details: 'Our VR-enabled platform lets you interact with pets remotely through live video feeds and 360° views. Schedule play sessions and get to know their personality before committing.',
      color: 'bg-orange-100'
    },
    {
      id: 'trial-period',
      title: 'Trial Adoption Period',
      description: '2-week trial to ensure perfect compatibility',
      icon: '⏳',
      details: 'Not sure if it\'s the right fit? Take your potential pet home for a 2-week trial with full support from our team. We provide all supplies during this period.',
      color: 'bg-orange-50'
    },
    {
      id: 'pet-matching',
      title: 'AI-Powered Matching',
      description: 'Smart algorithm finds your perfect pet companion',
      icon: '🤖',
      details: 'Our advanced AI analyzes your lifestyle, home environment, and preferences to suggest the most compatible pets from our database.',
      color: 'bg-orange-100'
    },
    {
      id: 'post-adoption',
      title: 'Post-Adoption Care',
      description: 'Lifetime support for you and your pet',
      icon: '❤️',
      details: 'Free vet checkups for 6 months, training sessions, and 24/7 support line. Join our community of pet parents for exclusive events and resources.',
      color: 'bg-orange-50'
    },
    {
      id: 'bonding-program',
      title: 'Bonding Accelerator',
      description: 'Structured activities to build immediate connection',
      icon: '⚡',
      details: 'Specialized program with guided exercises and activities to help you and your new pet form a deep bond quickly and naturally.',
      color: 'bg-orange-100'
    }
  ];

  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Document title (replacement for Next/Head) */}
      <title>Innovative Pet Adoption Services | Paws & Home</title>
      <meta name="description" content="Revolutionary pet adoption services with virtual meetups, trial periods, and AI matching" />

      {/* Animated scroll indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-orange-500 transition-all duration-300 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>



      {/* Services grid with innovative layout */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-orange-500">Revolutionary</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've transformed pet adoption with technology and psychology to create perfect matches that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${service.color} ${
                activeService === service.id ? 'scale-105 z-10 shadow-2xl' : 'hover:scale-[1.03]'
              }`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="p-8 cursor-pointer">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-orange-600 font-medium mb-4">{service.description}</p>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700 mt-4">{service.details}</p>
                  <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-bl-full opacity-20" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-orange-300 rounded-tr-full opacity-30" />
            </div>
          ))}
          
          {/* The "only one" special service card */}
          <div className="relative col-span-1 md:col-span-2 lg:col-span-3 rounded-3xl overflow-hidden bg-gradient-to-r from-orange-400 to-orange-600 p-1 shadow-2xl mt-8">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    <span className="text-orange-600">The "Only One"</span> Guarantee
                  </h3>
                  <p className="text-gray-700 mb-6">
                    We promise you'll never find another pet adoption service like ours. If you do, we'll donate $100 to the animal shelter of your choice.
                  </p>
                  <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                    Challenge Us
                  </button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 bg-orange-100 rounded-full animate-ping opacity-20" />
                    <div className="absolute inset-4 bg-orange-200 rounded-full animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute inset-8 bg-orange-300 rounded-full flex items-center justify-center text-6xl">
                      🏆
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial carousel with 3D effect */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Happy <span className="text-orange-500">Tails</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI matching found me the perfect cat - it's like they knew me better than I knew myself!",
                author: "Jamie L.",
                pet: "Adopted: Miso, 2-year-old tabby"
              },
              {
                quote: "The trial period took all the pressure off. By day 3, we knew Benny was meant to be with us forever.",
                author: "The Rodriguez Family",
                pet: "Adopted: Benny, 3-year-old beagle"
              },
              {
                quote: "Virtual meetups saved us so much time. We connected with our dog before even visiting the shelter!",
                author: "Alex & Sam",
                pet: "Adopted: Luna, 1-year-old lab mix"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105 ${
                  index === 1 ? 'md:scale-110 z-10 border-2 border-orange-300' : 'hover:z-20'
                }`}
              >
                <div className="text-orange-400 text-4xl mb-4">“</div>
                <p className="text-gray-700 text-lg mb-6">{testimonial.quote}</p>
                <div className="border-t border-orange-200 pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-orange-500 text-sm">{testimonial.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-400 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Meet <span className="text-orange-100">Your Match</span>?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Take our 2-minute quiz and we'll show you pets that fit your lifestyle perfectly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Matching Quiz
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
              Book Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Custom animations in style tag */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Service;