import React from 'react';
import PaymentMethodsSection from '../components/PaymentMethodsSection';
import PaymentPlatforms from '../components/PaymentPlatforms';

const PaymentMethods = ({ isEnglish }: { isEnglish: boolean }) => {
  return (
    <div>
      <div className="bg-primary-800 py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-white">
            {isEnglish ? "Payment Methods" : <span className="tamil">கட்டண முறைகள்</span>}
          </h1>
          <p className="text-white/80 mt-2">
            {isEnglish 
              ? "Choose from various payment options for your convenience" 
              : <span className="tamil">உங்கள் வசதிக்காக பல்வேறு கட்டண விருப்பங்களிலிருந்து தேர்வு செய்யவும்</span>}
          </p>
        </div>
      </div>
      
      <PaymentMethodsSection isEnglish={isEnglish} />
      <PaymentPlatforms isEnglish={isEnglish} />
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {isEnglish ? "Offline Payment Options" : <span className="tamil">ஆஃப்லைன் கட்டண விருப்பங்கள்</span>}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isEnglish 
                ? "If you prefer to pay in person, you can visit any of these designated municipal offices across Tamil Nadu." 
                : <span className="tamil">நேரில் கட்டணம் செலுத்த விரும்பினால், தமிழ்நாடு முழுவதும் உள்ள இந்த குறிப்பிட்ட நகராட்சி அலுவலகங்களில் எதையும் நீங்கள் பார்வையிடலாம்.</span>}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {isEnglish ? "Chennai Corporation" : <span className="tamil">சென்னை மாநகராட்சி</span>}
              </h3>
              <p className="text-gray-700 mb-2">
                {isEnglish 
                  ? "Ripon Building, EVK Sampath Road, Chennai - 600003" 
                  : <span className="tamil">ரிப்பன் கட்டிடம், EVK சம்பத் சாலை, சென்னை - 600003</span>}
              </p>
              <p className="text-gray-600 mb-1">
                {isEnglish ? "Phone:" : <span className="tamil">தொலைபேசி:</span>} 044-25619200
              </p>
              <p className="text-gray-600">
                {isEnglish ? "Hours:" : <span className="tamil">நேரம்:</span>} 9:00 AM - 5:00 PM
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {isEnglish ? "Coimbatore Corporation" : <span className="tamil">கோயம்புத்தூர் மாநகராட்சி</span>}
              </h3>
              <p className="text-gray-700 mb-2">
                {isEnglish 
                  ? "Big Bazaar Street, Town Hall, Coimbatore - 641001" 
                  : <span className="tamil">பெரிய பஜார் தெரு, டவுன் ஹால், கோயம்புத்தூர் - 641001</span>}
              </p>
              <p className="text-gray-600 mb-1">
                {isEnglish ? "Phone:" : <span className="tamil">தொலைபேசி:</span>} 0422-2390261
              </p>
              <p className="text-gray-600">
                {isEnglish ? "Hours:" : <span className="tamil">நேரம்:</span>} 9:00 AM - 5:00 PM
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {isEnglish ? "Madurai Corporation" : <span className="tamil">மதுரை மாநகராட்சி</span>}
              </h3>
              <p className="text-gray-700 mb-2">
                {isEnglish 
                  ? "Arignar Anna Maligai, Tallakulam, Madurai - 625002" 
                  : <span className="tamil">அறிஞர் அண்ணா மாளிகை, தல்லாகுளம், மதுரை - 625002</span>}
              </p>
              <p className="text-gray-600 mb-1">
                {isEnglish ? "Phone:" : <span className="tamil">தொலைபேசி:</span>} 0452-2531010
              </p>
              <p className="text-gray-600">
                {isEnglish ? "Hours:" : <span className="tamil">நேரம்:</span>} 9:00 AM - 5:00 PM
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {isEnglish ? "Trichy Corporation" : <span className="tamil">திருச்சி மாநகராட்சி</span>}
              </h3>
              <p className="text-gray-700 mb-2">
                {isEnglish 
                  ? "Main Guard Gate, Tiruchirappalli - 620001" 
                  : <span className="tamil">மெயின் கார்டு கேட், திருச்சிராப்பள்ளி - 620001</span>}
              </p>
              <p className="text-gray-600 mb-1">
                {isEnglish ? "Phone:" : <span className="tamil">தொலைபேசி:</span>} 0431-2415706
              </p>
              <p className="text-gray-600">
                {isEnglish ? "Hours:" : <span className="tamil">நேரம்:</span>} 9:00 AM - 5:00 PM
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {isEnglish ? "Salem Corporation" : <span className="tamil">சேலம் மாநகராட்சி</span>}
              </h3>
              <p className="text-gray-700 mb-2">
                {isEnglish 
                  ? "Fort Main Road, Salem - 636001" 
                  : <span className="tamil">கோட்டை மெயின் ரோடு, சேலம் - 636001</span>}
              </p>
              <p className="text-gray-600 mb-1">
                {isEnglish ? "Phone:" : <span className="tamil">தொலைபேசி:</span>} 0427-2215122
              </p>
              <p className="text-gray-600">
                {isEnglish ? "Hours:" : <span className="tamil">நேரம்:</span>} 9:00 AM - 5:00 PM
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {isEnglish ? "Tirunelveli Corporation" : <span className="tamil">திருநெல்வேலி மாநகராட்சி</span>}
              </h3>
              <p className="text-gray-700 mb-2">
                {isEnglish 
                  ? "10/2 Trivandrum High Road, Tirunelveli - 627001" 
                  : <span className="tamil">10/2 திருவனந்தபுரம் நெடுஞ்சாலை, திருநெல்வேலி - 627001</span>}
              </p>
              <p className="text-gray-600 mb-1">
                {isEnglish ? "Phone:" : <span className="tamil">தொலைபேசி:</span>} 0462-2501962
              </p>
              <p className="text-gray-600">
                {isEnglish ? "Hours:" : <span className="tamil">நேரம்:</span>} 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentMethods;
