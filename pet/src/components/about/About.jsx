import { motion, useScroll, useTransform } from "framer-motion";
import { FaPaw, FaHeart, FaShieldAlt, FaUsers, FaLeaf, FaClinicMedical } from "react-icons/fa";
import { GiDogBowl, GiSittingDog } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
      {/* Hero Parallax Section */}
      <motion.div 
        style={{ scale, y }}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <FaPaw className="text-orange-600 text-6xl" />
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold text-orange-900 mb-6">
            <span className="block">PET</span>
            <span className="text-orange-600">CARE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Revolutionizing pet wellness through innovation, compassion, and cutting-edge care
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Island Story Section */}
      <div className="relative z-20 -mt-32 mb-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.h2 
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-orange-900 mb-8"
              >
                Our <span className="text-orange-600">Journey</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 mb-6"
              >
                In 2010, Dr. Sarah Johnson envisioned a pet care revolution - a sanctuary where cutting-edge medicine meets unconditional love. What began as a single exam room has blossomed into a 20,000 sq ft wellness ecosystem.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 mb-6"
              >
                <div className="bg-orange-100 p-4 rounded-2xl flex items-center">
                  <FaClinicMedical className="text-orange-600 text-2xl mr-3" />
                  <span className="font-medium">5 Specialty Centers</span>
                </div>
                <div className="bg-orange-100 p-4 rounded-2xl flex items-center">
                  <RiTeamFill className="text-orange-600 text-2xl mr-3" />
                  <span className="font-medium">42 Care Experts</span>
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700"
              >
                Today, we're redefining veterinary excellence with our integrated approach combining advanced diagnostics, holistic therapies, and personalized wellness plans.
              </motion.p>
            </div>
            
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ scale: 0.9, rotate: -3 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Veterinary team" 
                  className="rounded-3xl shadow-xl w-full"
                />
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 6,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-6 -left-6 bg-orange-600 p-5 rounded-2xl shadow-lg"
                >
                  <GiDogBowl className="text-white text-3xl" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Value Cards */}
      <div className="relative z-10 px-4 mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-orange-900 text-center mb-20"
        >
          Our <span className="text-orange-600">Philosophy</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center"
                >
                  {value.icon}
                </motion.div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3D Team Gallery */}
      <div className="relative px-4 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-orange-900 rounded-[40px] shadow-2xl p-8 md:p-12 text-white overflow-hidden"
          >
            <div className="relative z-10">
              <motion.h2
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                The <span className="text-amber-300">Dream Team</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-orange-200 text-xl max-w-3xl mb-12"
              >
                Our multidisciplinary team brings together world-class veterinarians, board-certified specialists, and compassionate caregivers united by one mission.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl text-gray-800"
                >
                  <div className="h-64 overflow-hidden relative">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-orange-200 font-medium">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{member.bio}</p>
                    <div className="flex space-x-2">
                      {member.specialties.map((specialty, i) => (
                        <span key={i} className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-80 -right-80 w-[600px] h-[600px] rounded-full bg-orange-800/20"
            />
          </motion.div>
        </div>
      </div>

      {/* Interactive Mission Statement */}
      <div className="px-4 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-[40px] shadow-2xl p-8 md:p-12 text-white overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white" />
              <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white" />
            </div>
            
            <div className="relative z-10">
              <motion.h2
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-8"
              >
                Our <span className="text-amber-200">Promise</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8"
              >
                {missionStatements.map((statement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-400 p-3 rounded-xl mr-4">
                        {statement.icon}
                      </div>
                      <h3 className="text-xl font-bold text-amber-100">{statement.title}</h3>
                    </div>
                    <p className="text-orange-50">{statement.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Kinetic Call-to-Action */}
      <div className="px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-orange-500 to-amber-600 p-8 md:p-12 flex flex-col justify-center">
              <motion.h2
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Ready to Experience the Future of Pet Care?
              </motion.h2>
              <p className="text-orange-100 mb-6">
                Join our family of 10,000+ happy pets and their humans.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full shadow-lg w-max"
              >
                Book Your Visit
              </motion.div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 bg-orange-50 relative overflow-hidden">
              <motion.div
                animate={{ 
                  x: [0, 10, -10, 0],
                  y: [0, -10, 10, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }}
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-orange-200/50"
              />
              <motion.div
                animate={{ 
                  x: [0, -15, 15, 0],
                  y: [0, 15, -15, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-amber-200/50"
              />
              <div className="relative z-10">
                <GiSittingDog className="text-orange-600 text-6xl mb-6" />
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Why Choose PetCare?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaPaw className="text-orange-500 mr-3" />
                    <span>24/7 Telehealth Support</span>
                  </li>
                  <li className="flex items-center">
                    <FaPaw className="text-orange-500 mr-3" />
                    <span>AI-Powered Health Monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <FaPaw className="text-orange-500 mr-3" />
                    <span>Holistic Wellness Plans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Data for values cards
const values = [
  {
    icon: <FaHeart className="text-orange-600 text-5xl" />,
    title: "Heart-Led Care",
    description: "Every interaction is guided by genuine love for animals. We see pets as family members, not patients.",
  },
  {
    icon: <FaLeaf className="text-orange-600 text-5xl" />,
    title: "Holistic Approach",
    description: "Combining Western medicine with alternative therapies for complete mind-body wellness.",
  },
  {
    icon: <FaShieldAlt className="text-orange-600 text-5xl" />,
    title: "Safety First",
    description: "AAHA-accredited facility with the highest standards of care and sterilization protocols.",
  },
  {
    icon: <GiDogBowl className="text-orange-600 text-5xl" />,
    title: "Nutrition Focused",
    description: "Custom meal plans designed by veterinary nutritionists for optimal health.",
  },
  {
    icon: <FaUsers className="text-orange-600 text-5xl" />,
    title: "Community Built",
    description: "Weekly workshops and support groups to educate and connect pet parents.",
  },
  {
    icon: <FaClinicMedical className="text-orange-600 text-5xl" />,
    title: "Innovation Driven",
    description: "Pioneering regenerative therapies and minimally invasive procedures.",
  },
];

// Data for team members
const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    position: "Founder & Medical Director",
    bio: "Triple-board certified with 20+ years advancing veterinary medicine. Her research on canine arthritis has been published internationally.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialties: ["Surgery", "Nutrition", "Research"]
  },
  {
    name: "Dr. Michael Chen",
    position: "Chief of Surgery",
    bio: "Specializes in minimally invasive procedures with a 99.8% success rate. Trained at the Animal Medical Center in NYC.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialties: ["Orthopedics", "Laparoscopy", "Rehabilitation"]
  },
  {
    name: "Emma Rodriguez",
    position: "Director of Wellness",
    bio: "Integrates acupuncture, hydrotherapy, and CBD treatments into personalized care plans. Certified in Traditional Chinese Veterinary Medicine.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialties: ["Acupuncture", "Holistic Care", "Behavior"]
  }
];

// Mission statements
const missionStatements = [
  {
    icon: <FaHeart className="text-white text-xl" />,
    title: "Compassion Without Compromise",
    description: "We'll always treat your pet with the same love and attention we give our own, while maintaining the highest medical standards."
  },
  {
    icon: <FaLeaf className="text-white text-xl" />,
    title: "Innovation That Matters",
    description: "Continually investing in cutting-edge technology and training to deliver better outcomes with less stress for pets."
  },
  {
    icon: <FaShieldAlt className="text-white text-xl" />,
    title: "Transparent Care",
    description: "No hidden fees or unnecessary treatments. We explain every option clearly so you can make informed decisions."
  },
  {
    icon: <FaUsers className="text-white text-xl" />,
    title: "Community Commitment",
    description: "10% of our profits fund low-cost clinics and educational programs in underserved neighborhoods."
  }
];

export default About;