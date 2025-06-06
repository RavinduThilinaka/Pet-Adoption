import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Service from './components/services/Service';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
