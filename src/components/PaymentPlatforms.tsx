import React from 'react';
import { motion } from 'framer-motion';

const PaymentPlatforms = ({ isEnglish }: { isEnglish: boolean }) => {
  const platformInfo = [
    { 
      name: "Google Pay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/1200px-Google_Pay_Logo_%282020%29.svg.png",
      steps: isEnglish ? [
        "Open Google Pay app on your mobile",
        "Tap on 'Bills' on the home screen",
        "Select 'Municipal Tax' under categories",
        "Search for 'Tamil Nadu Urban eSavai'",
        "Enter your property tax number and verify",
        "Review and confirm payment"
      ] : [
        "உங்கள் மொபைலில் கூகுள் பே ஆப்ஸைத் திறக்கவும்",
        "முகப்புத் திரையில் 'பில்ஸ்' என்பதைத் தட்டவும்",
        "வகைகளின் கீழ் 'நகராட்சி வரி' என்பதைத் தேர்ந்தெடுக்கவும்",
        "'தமிழ்நாடு அர்பன் eSavai' என்பதைத் தேடவும்",
        "உங்கள் சொத்து வரி எண்ணை உள்ளிட்டு சரிபார்க்கவும்",
        "மதிப்பாய்வு செய்து கட்டணத்தை உறுதிப்படுத்தவும்"
      ]
    },
    { 
      name: "PhonePe",
      logo: "https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png",
      steps: isEnglish ? [
        "Open PhonePe app on your mobile",
        "Select 'Pay Bills' option",
        "Under categories, tap on 'Property Tax'",
        "Select 'Tamil Nadu Urban eSavai Municipal Tax'",
        "Enter your property ID and verify details",
        "Proceed to payment and confirm"
      ] : [
        "உங்கள் மொபைலில் PhonePe ஆப்ஸைத் திறக்கவும்",
        "'Pay Bills' விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
        "வகைகளின் கீழ், 'சொத்து வரி' என்பதைத் தட்டவும்",
        "'தமிழ்நாடு அர்பன் eSavai நகராட்சி வரி' என்பதைத் தேர்ந்தெடுக்கவும்",
        "உங்கள் சொத்து ஐடியை உள்ளிட்டு விவரங்களை சரிபார்க்கவும்",
        "கட்டணத்திற்குச் செல்லவும் மற்றும் உறுதிப்படுத்தவும்"
      ]
    },
    { 
      name: "Paytm",
      logo: "https://logodownload.org/wp-content/uploads/2019/06/paytm-logo-0.png",
      steps: isEnglish ? [
        "Launch Paytm app on your smartphone",
        "Tap on 'Pay Bills' section",
        "Choose 'Municipal Tax' from available options",
        "Select 'Tamil Nadu' and then 'Municipal Corporation'",
        "Enter your property tax ID and verify",
        "Make the payment using preferred method"
      ] : [
        "உங்கள் ஸ்மார்ட்ஃபோனில் பேட்டிஎம் ஆப்ஸைத் தொடங்கவும்",
        "'Pay Bills' பிரிவைத் தட்டவும்",
        "கிடைக்கும் விருப்பங்களிலிருந்து 'நகராட்சி வரி' என்பதைத் தேர்வுசெய்யவும்",
        "'தமிழ்நாடு' மற்றும் 'நகராட்சி' என்பதைத் தேர்ந்தெடுக்கவும்",
        "உங்கள் சொத்து வரி ஐடியை உள்ளிட்டு சரிபார்க்கவும்",
        "விருப்பமான முறையைப் பயன்படுத்தி கட்டணத்தைச் செலுத்தவும்"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {isEnglish ? "How to Pay Using Mobile Apps" : <span className="tamil">மொபைல் ஆப்ஸ் மூலம் பணம் செலுத்துவது எப்படி</span>}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {isEnglish 
              ? "Follow these step-by-step guides to pay your property tax using popular mobile payment applications." 
              : <span className="tamil">பிரபலமான மொபைல் பணம் செலுத்தும் பயன்பாடுகளைப் பயன்படுத்தி உங்கள் சொத்து வரியைச் செலுத்த இந்த படிப்படியான வழிகாட்டிகளைப் பின்பற்றவும்.</span>}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platformInfo.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card h-full"
            >
              <div className="h-20 flex items-center justify-center mb-6 relative">
                <div className="w-40 h-auto object-contain">
                  <img src={platform.logo} alt={`${platform.name} logo`} className="w-full h-full object-contain" />
                </div>
                <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary-800 mb-4 text-center">
                {isEnglish 
                  ? `Pay with ${platform.name}` 
                  : <span className="tamil">{platform.name} மூலம் செலுத்தவும்</span>}
              </h3>
              
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                {platform.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex">
                    <span className="text-primary-600 font-medium mr-2">{stepIndex + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            {isEnglish 
              ? "All payments are processed securely and are PCI DSS compliant. Your data is protected with industry-standard encryption." 
              : <span className="tamil">அனைத்து கட்டணங்களும் பாதுகாப்பாக செயலாக்கப்படுகின்றன மற்றும் PCI DSS இணக்கமானவை. உங்கள் தரவு தொழில் தர மறையாக்கத்துடன் பாதுகாக்கப்படுகிறது.</span>}
          </p>
          <a href="#" className="btn btn-primary">
            {isEnglish ? "Pay Now" : <span className="tamil">இப்போது செலுத்த</span>}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlatforms;