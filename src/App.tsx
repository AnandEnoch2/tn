import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PaymentMethods from './pages/PaymentMethods';
import PaymentPage from './pages/PaymentPage';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import InactivityAds from './components/InactivityAds';

function App() {
  const [isEnglish, setIsEnglish] = useState<boolean>(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar toggleLanguage={toggleLanguage} isEnglish={isEnglish} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home isEnglish={isEnglish} />} />
            <Route path="/payment-methods" element={<PaymentMethods isEnglish={isEnglish} />} />
            <Route path="/payment" element={<PaymentPage isEnglish={isEnglish} />} />
            <Route path="/calculator" element={<Calculator isEnglish={isEnglish} />} />
            <Route path="/contact" element={<Contact isEnglish={isEnglish} />} />
            <Route path="*" element={<NotFound isEnglish={isEnglish} />} />
          </Routes>
        </main>
        <Footer isEnglish={isEnglish} />
        <InactivityAds timeout={10000} />
      </div>
    </Router>
  );
}

export default App;