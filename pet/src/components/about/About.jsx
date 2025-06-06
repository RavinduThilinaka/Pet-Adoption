import { motion } from "framer-motion";
import { FaPaw, FaHeart, FaShieldAlt, FaUsers } from "react-icons/fa";

const About= () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
          About <span className="text-orange-600">PetCare</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Dedicated to providing exceptional care for your furry family members
          since 2010.
        </p>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="flex justify-center mt-6"
        >
          <FaPaw className="text-orange-400 text-4xl" />
        </motion.div>
      </motion.div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16 flex flex-col lg:flex-row items-center"
        >
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-3xl font-bold text-orange-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              PetCare was founded in 2010 by Dr. Sarah Johnson, a passionate
              veterinarian who wanted to create a holistic care center that
              treats pets like family. What started as a small clinic has grown
              into a premier pet care facility serving thousands of happy pets
              and their owners.
            </p>
            <p className="text-gray-600">
              Our mission is simple: to provide the highest quality care with
              compassion, expertise, and a personal touch that makes both pets
              and their humans feel at home.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <motion.img
              src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Veterinarian with dog"
              className="rounded-lg shadow-md w-full h-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 bg-orange-100 p-4 rounded-full shadow-lg"
            >
              <FaHeart className="text-orange-600 text-2xl" />
            </motion.div>
          </div>
        </motion.div>

        {/* Our Values Section */}
        <h2 className="text-3xl font-bold text-orange-900 mb-8 text-center">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-orange-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-orange-900 rounded-2xl shadow-xl p-8 text-white mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Meet Our Expert Team
          </h2>
          <p className="text-orange-200 mb-8 text-center max-w-4xl mx-auto">
            Our team of certified veterinarians, groomers, and pet care
            specialists bring years of experience and genuine love for animals to
            every interaction.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg text-gray-800"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl shadow-xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Experience PetCare?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Join our family of happy pets and owners. Schedule an appointment
            today and see the difference compassionate, expert care can make.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg"
          >
            Book an Appointment
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// Data for values cards
const values = [
  {
    icon: <FaHeart className="text-orange-600 text-2xl" />,
    title: "Compassion",
    description:
      "We treat every pet with the same love and care we'd give our own.",
  },
  {
    icon: <FaShieldAlt className="text-orange-600 text-2xl" />,
    title: "Safety",
    description:
      "Your pet's wellbeing is our top priority in everything we do.",
  },
  {
    icon: <FaUsers className="text-orange-600 text-2xl" />,
    title: "Community",
    description:
      "We're proud to be part of your pet's extended family and your local community.",
  },
  {
    icon: <FaPaw className="text-orange-600 text-2xl" />,
    title: "Expertise",
    description:
      "Our team stays at the forefront of pet care knowledge and techniques.",
  },
];

// Data for team members
const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    position: "Founder & Lead Veterinarian",
    bio: "With over 20 years of experience, Dr. Johnson specializes in preventive care and nutrition.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Chen",
    position: "Veterinary Surgeon",
    bio: "Board-certified surgeon with expertise in orthopedic procedures and minimally invasive techniques.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Emma Rodriguez",
    position: "Head Groomer",
    bio: "Certified master groomer with a gentle touch and an eye for style that pets love.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default About;