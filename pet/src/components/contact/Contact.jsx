import { useState } from 'react';
import { FaPaw, FaCommentDots, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaMapMarkedAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaDog, FaCat, FaDove } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      petType: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* Animated Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-400 py-20 text-white animate-fade-in">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            We'd Love to Hear From You
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up animation-delay-100">
            Have questions about pet care? Need to schedule an appointment? Reach out to our team!
          </p>
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info Card */}
          <div className="lg:w-1/3 animate-slide-up animation-delay-200">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaPaw className="text-orange-500 mr-3 text-xl" /> Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4 text-orange-500">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Our Location</h3>
                    <p className="text-gray-600">123 Pet Street, Animal City, PC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4 text-orange-500">
                    <FaPhone className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone Numbers</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-gray-600">Emergency: (123) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4 text-orange-500">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Address</h3>
                    <p className="text-gray-600">info@petcare.com</p>
                    <p className="text-gray-600">support@petcare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4 text-orange-500">
                    <FaClock className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 8am - 7pm</p>
                    <p className="text-gray-600">Sat: 9am - 5pm</p>
                    <p className="text-gray-600">Sun: 10am - 4pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-500 p-3 rounded-full transition-colors duration-300">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-500 p-3 rounded-full transition-colors duration-300">
                    <FaTwitter />
                  </a>
                  <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-500 p-3 rounded-full transition-colors duration-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-500 p-3 rounded-full transition-colors duration-300">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Pet Illustration */}
            <div className="mt-8 text-center animate-pulse-slow flex justify-center space-x-6">
              <FaDog className="text-orange-400 text-5xl" />
              <FaCat className="text-orange-400 text-5xl" />
              <FaDove className="text-orange-400 text-5xl" />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3 animate-slide-up animation-delay-300">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaCommentDots className="text-orange-500 mr-3 text-xl" /> Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <label htmlFor="petType" className="block text-gray-700 font-medium mb-2">Pet Type (Optional)</label>
                    <select 
                      id="petType" 
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="fish">Fish</option>
                      <option value="reptile">Reptile</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 transform hover:scale-[1.01] shadow-md"
                >
                  Send Message <FaPaperPlane className="inline ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="bg-gray-100 py-16 animate-fade-in animation-delay-400">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex justify-center items-center">
            <FaMapMarkedAlt className="text-orange-500 mr-3" /> Find Our Clinic
          </h2>
          
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179535!2d-73.987844924264!3d40.74844097138964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              title="PetCare Clinic Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;