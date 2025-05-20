import React from 'react';
import Hero from '../components/Hero';
import PaymentSteps from '../components/PaymentSteps';
import PaymentMethodsSection from '../components/PaymentMethodsSection';
import FAQSection from '../components/FAQSection';

const Home = ({ isEnglish }: { isEnglish: boolean }) => {
  return (
    <div>
      <Hero isEnglish={isEnglish} />
      <PaymentSteps isEnglish={isEnglish} />
      <PaymentMethodsSection isEnglish={isEnglish} />
      <FAQSection isEnglish={isEnglish} />
      
      {/* Call to Action Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isEnglish 
              ? "Ready to Pay Your Property Tax?" 
              : <span className="tamil">உங்கள் சொத்து வரியை செலுத்த தயாரா?</span>}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {isEnglish 
              ? "Pay your property tax online now and get instant confirmation. It's quick, easy, and secure." 
              : <span className="tamil">உங்கள் சொத்து வரியை இப்போது ஆன்லைனில் செலுத்தி உடனடி உறுதிப்படுத்தலைப் பெறுங்கள். இது விரைவானது, எளிதானது மற்றும் பாதுகாப்பானது.</span>}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn btn-secondary">
              {isEnglish ? "Pay Property Tax" : <span className="tamil">சொத்து வரி செலுத்துங்கள்</span>}
            </button>
            <button className="btn btn-outline bg-transparent border-white text-white hover:bg-white/10">
              {isEnglish ? "Check Tax Status" : <span className="tamil">வரி நிலையை சரிபார்க்கவும்</span>}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;