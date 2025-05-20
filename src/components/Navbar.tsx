import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = ({ toggleLanguage, isEnglish }: { toggleLanguage: () => void, isEnglish: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="Tamil Nadu Municipal Logo" className="h-12 w-12 mr-3" />
            <div>
              <h1 className="text-lg font-bold text-primary-900">
                {isEnglish ? (
                  "Tamil Nadu Municipal Tax Portal"
                ) : (
                  <span className="tamil">தமிழ்நாடு நகராட்சி வரி தளம்</span>
                )}
              </h1>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-700 font-medium whitespace-nowrap">
              {isEnglish ? "Home" : <span className="tamil">முகப்பு</span>}
            </Link>
            <Link to="/payment-methods" className="text-gray-700 hover:text-primary-700 font-medium whitespace-nowrap">
              {isEnglish ? "Payment Methods" : <span className="tamil">கட்டண முறைகள்</span>}
            </Link>
            <Link to="/calculator" className="text-gray-700 hover:text-primary-700 font-medium whitespace-nowrap">
              {isEnglish ? "Tax Calculator" : <span className="tamil">வரி கணிப்பான்</span>}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-700 font-medium whitespace-nowrap">
              {isEnglish ? "Contact" : <span className="tamil">தொடர்பு</span>}
            </Link>
            <button 
              onClick={toggleLanguage} 
              className="flex items-center text-primary-700 hover:text-primary-900 whitespace-nowrap"
              aria-label={isEnglish ? "Switch to Tamil" : "Switch to English"}
            >
              <Globe size={18} className="mr-1" />
              {isEnglish ? "தமிழ்" : "English"}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className="text-primary-700 hover:text-primary-900 mr-4"
              aria-label={isEnglish ? "Switch to Tamil" : "Switch to English"}
            >
              <Globe size={20} />
            </button>
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-primary-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary-700 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {isEnglish ? "Home" : <span className="tamil">முகப்பு</span>}
              </Link>
              <Link 
                to="/payment-methods" 
                className="text-gray-700 hover:text-primary-700 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {isEnglish ? "Payment Methods" : <span className="tamil">கட்டண முறைகள்</span>}
              </Link>
              <Link 
                to="/calculator" 
                className="text-gray-700 hover:text-primary-700 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {isEnglish ? "Tax Calculator" : <span className="tamil">வரி கணிப்பான்</span>}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary-700 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {isEnglish ? "Contact" : <span className="tamil">தொடர்பு</span>}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;