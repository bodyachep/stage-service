import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Імпорти всіх твоїх компонентів
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features'; 
import Advantages from './components/Advantages/Advantages'; 
import FeaturesList from './components/FeaturesList/FeaturesList'; 
import Gallery from './components/Gallery/Gallery'; 
import Dashboard from './components/Dashboard/Dashboard'; 
import StartupDash from './components/StartupDash/StartupDash';
import Divider from './components/Divider/Divider'; // спорт лінія
import Footer from './components/Footer/Footer';

// ОДИН НОВИЙ РЯДОК: Імпортуємо наш новий прайс-лист!
import Services from './components/Services/Services'; 

// Імпорти окремих сторінок
import About from './pages/About/About'; 
import Reviews from './pages/Reviews/Reviews'; 

// 📦 Збираємо ідеальну Головну сторінку
const HomePage = () => {
  return (
    <main>
      <Hero />
      <Divider /> {/* 🔥 Спортивна лінія */}
      <Advantages />
      <Divider /> {/* 🔥 Спортивна лінія */}
      <Features />
      <Divider /> {/* 🔥 Спортивна лінія */}
      <Dashboard />
      <Divider /> {/* 🔥 Спортивна лінія */}
      <FeaturesList />
      <Divider /> {/* 🔥 Спортивна лінія */}
      <StartupDash />
      <Divider /> {/* 🔥 Спортивна лінія */}
      <Gallery />
    </main>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />

        {/* СТОРІНКА ПОСЛУГ: Об'єднуємо чорний блок <Features /> та наш прайс <Services /> */}
        <Route 
          path="/services" 
          element={
            <main>
              <Services />
            </main>
          } 
        /> 
      </Routes>
      <Divider /> {/* 🔥 Спортивна лінія */}
      <Footer />
    </Router>
    
  );
}

export default App;