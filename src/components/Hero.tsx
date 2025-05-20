import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ isEnglish }: { isEnglish: boolean }) => {
  return (
    <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 md:py-24">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-accent opacity-10 rounded-bl-full"></div>
        <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-accent opacity-10 rounded-tr-full"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {isEnglish ? (
                <>Tamil Nadu Municipal <span className="text-accent">Property Tax</span> Portal</>
              ) : (
                <span className="tamil">
                  தமிழ்நாடு நகராட்சி <span className="text-accent">சொத்து வரி</span> தளம்
                </span>
              )}
            </h1>
            <p className="text-lg mb-8 text-gray-100 max-w-xl">
              {isEnglish ? (
                "Pay your property tax easily through multiple online payment options. Quick, secure, and hassle-free."
              ) : (
                <span className="tamil">
                  பல்வேறு ஆன்லைன் கட்டண விருப்பங்கள் மூலம் உங்கள் சொத்து வரியை எளிதாக செலுத்துங்கள். விரைவான, பாதுகாப்பான, மற்றும் தொந்தரவு இல்லாத.
                </span>
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/payment-methods" className="btn btn-secondary flex items-center">
                {isEnglish ? "Payment Methods" : <span className="tamil">கட்டண முறைகள்</span>}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/calculator" className="btn btn-outline bg-white/10 text-white border-white hover:bg-white/20">
                {isEnglish ? "Tax Calculator" : <span className="tamil">வரி கணிப்பான்</span>}
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-primary-900 font-bold text-xl mb-4">
                {isEnglish ? "Quick Payment" : <span className="tamil">விரைவு கட்டணம்</span>}
              </h3>
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {isEnglish ? "Property Tax ID / UID" : <span className="tamil">சொத்து வரி ஐடி / யூஐடி</span>}
                </label>
                <input 
                  type="text" 
                  className="w-full p-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-500"
                  placeholder={isEnglish ? "Enter your Tax ID" : "உங்கள் வரி ஐடியை உள்ளிடவும்"}
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  {isEnglish ? "Find by mobile number" : <span className="tamil">மொபைல் எண் மூலம் கண்டுபிடி</span>}
                </label>
                <div className="form-switch inline-block align-middle">
                  <input type="checkbox" id="toggle-mobile" className="form-switch-checkbox" />
                </div>
              </div>
              <button className="w-full btn btn-primary">
                {isEnglish ? "Proceed to Pay" : <span className="tamil">கட்டணம் செலுத்த தொடரவும்</span>}
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold text-accent">3+</div>
            <div className="text-sm">
              {isEnglish ? "Payment Methods" : <span className="tamil">கட்டண முறைகள்</span>}
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold text-accent">200+</div>
            <div className="text-sm">
              {isEnglish ? "Municipalities" : <span className="tamil">நகராட்சிகள்</span>}
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold text-accent">24/7</div>
            <div className="text-sm">
              {isEnglish ? "Online Access" : <span className="tamil">ஆன்லைன் அணுகல்</span>}
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold text-accent">100%</div>
            <div className="text-sm">
              {isEnglish ? "Secure" : <span className="tamil">பாதுகாப்பான</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;