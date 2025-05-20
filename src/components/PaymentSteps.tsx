import React from 'react';
import { motion } from 'framer-motion';
import { Search, CreditCard, CheckCircle, Smartphone } from 'lucide-react';

const PaymentSteps = ({ isEnglish }: { isEnglish: boolean }) => {
  const steps = [
    {
      id: 1,
      icon: <Search className="h-8 w-8 text-primary-600" />,
      title: isEnglish ? "Find Your Property" : <span className="tamil">உங்கள் சொத்தைக் கண்டறியுங்கள்</span>,
      description: isEnglish 
        ? "Enter your property ID or search using your mobile number to locate your tax details." 
        : <span className="tamil">உங்கள் வரி விவரங்களைக் கண்டறிய உங்கள் சொத்து ஐடியை உள்ளிடவும் அல்லது உங்கள் மொபைல் எண்ணைப் பயன்படுத்தி தேடவும்.</span>
    },
    {
      id: 2,
      icon: <Smartphone className="h-8 w-8 text-primary-600" />,
      title: isEnglish ? "Choose Payment Method" : <span className="tamil">கட்டண முறையைத் தேர்ந்தெடுங்கள்</span>,
      description: isEnglish 
        ? "Select your preferred payment option - UPI apps, credit/debit cards, or net banking." 
        : <span className="tamil">உங்கள் விருப்பமான கட்டண விருப்பத்தைத் தேர்ந்தெடுக்கவும் - UPI ஆப்ஸ், கிரெடிட்/டெபிட் கார்டுகள் அல்லது நெட் பேங்கிங்.</span>
    },
    {
      id: 3,
      icon: <CreditCard className="h-8 w-8 text-primary-600" />,
      title: isEnglish ? "Complete Payment" : <span className="tamil">கட்டணத்தை முடிக்கவும்</span>,
      description: isEnglish 
        ? "Follow the simple steps to authenticate and complete your payment securely." 
        : <span className="tamil">அங்கீகரிக்க எளிய படிகளைப் பின்பற்றி உங்கள் கட்டணத்தைப் பாதுகாப்பாக முடிக்கவும்.</span>
    },
    {
      id: 4,
      icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
      title: isEnglish ? "Get Receipt" : <span className="tamil">ரசீதைப் பெறுங்கள்</span>,
      description: isEnglish 
        ? "Receive your payment receipt instantly via SMS and email for your records." 
        : <span className="tamil">உங்கள் பதிவுகளுக்காக SMS மற்றும் மின்னஞ்சல் மூலம் உங்கள் கட்டண ரசீதை உடனடியாகப் பெறுங்கள்.</span>
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {isEnglish ? "Simple 4-Step Payment Process" : <span className="tamil">எளிய 4-படி கட்டண செயல்முறை</span>}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {isEnglish 
              ? "Follow these simple steps to complete your property tax payment quickly and securely." 
              : <span className="tamil">உங்கள் சொத்து வரி கட்டணத்தை விரைவாகவும் பாதுகாப்பாகவும் முடிக்க இந்த எளிய படிகளைப் பின்பற்றவும்.</span>}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="w-8 h-8 flex items-center justify-center bg-primary-600 text-white rounded-full text-lg font-bold mr-3">
                        {step.id}
                      </span>
                      <h3 className="text-xl font-bold text-primary-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSteps;