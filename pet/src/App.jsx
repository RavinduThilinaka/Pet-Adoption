import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import HeroSection from './components/home/Hero';
import Service from './components/services/Service';
import Shop from './components/shop/Shop'; // Import the Shop component
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router basename="/Pet-Adoption">
     <Routes>
      <Route
        path='/'
        element={
          <div>
            <Navbar/>
            <div id="home">
              <HeroSection/>
            </div>
            <div id="services">
              <Service/>
            </div>
            <div id="shop">
              <Shop/>
            </div>
            <div id="about">
              <About/>
            </div>
            <div id="contact">
              <Contact/>
            </div>
            <Footer/>
          </div>
        }
      />
     </Routes>
    </Router>
  );
}

export default App;