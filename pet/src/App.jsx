import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Service from './components/services/Service';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
