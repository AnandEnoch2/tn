import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Ban as Bank, Check } from 'lucide-react';

const PaymentMethodsSection = ({ isEnglish }: { isEnglish: boolean }) => {
  const paymentMethods = [
    {
      id: 1,
      icon: <Smartphone className="h-10 w-10 text-primary-600" />,
      title: isEnglish ? "Mobile Payment Apps" : <span className="tamil">மொபைல் பணம் செலுத்தும் ஆப்ஸ்</span>,
      description: isEnglish 
        ? "Pay using popular UPI apps like Google Pay, PhonePe, Paytm, and more." 
        : <span className="tamil">Google Pay, PhonePe, Paytm போன்ற பிரபலமான UPI ஆப்ஸ்களைப் பயன்படுத்தி பணம் செலுத்தலாம்.</span>,
      apps: ["Google Pay", "PhonePe", "Paytm", "BHIM UPI"],
      link: "https://www.npci.org.in/what-we-do/upi/product-overview"
    },
    {
      id: 2,
      icon: <CreditCard className="h-10 w-10 text-primary-600" />,
      title: isEnglish ? "Credit/Debit Cards" : <span className="tamil">கிரெடிட்/டெபிட் கார்டுகள்</span>,
      description: isEnglish 
        ? "Securely pay using any major credit or debit card issued in India." 
        : <span className="tamil">இந்தியாவில் வழங்கப்பட்ட எந்த முக்கிய கிரெடிட் அல்லது டெபிட் கார்டைப் பயன்படுத்தி பாதுகாப்பாக பணம் செலுத்தலாம்.</span>,
      cards: ["Visa", "Mastercard", "RuPay", "Maestro"],
      link: "https://www.rbi.org.in/Scripts/FAQView.aspx?Id=72"
    },
    {
      id: 3,
      icon: <Bank className="h-10 w-10 text-primary-600" />,
      title: isEnglish ? "Net Banking" : <span className="tamil">நெட் பேங்கிங்</span>,
      description: isEnglish 
        ? "Direct payment through your bank's online portal with instant confirmation." 
        : <span className="tamil">உங்கள் வங்கியின் ஆன்லைன் போர்டல் மூலம் உடனடி உறுதிப்படுத்தலுடன் நேரடி பணம் செலுத்தல்.</span>,
      banks: ["SBI", "HDFC", "ICICI", "Axis Bank", "Indian Bank", "Canara Bank"],
      link: "https://www.onlinesbi.sbi/personal/onlinebanking.html"
    },
    {
      id: 4,
      icon: <Check className="h-10 w-10 text-primary-600" />,
      title: isEnglish ? "Offline Methods" : <span className="tamil">ஆஃப்லைன் முறைகள்</span>,
      description: isEnglish 
        ? "Visit your nearest municipal office to pay by cash or cheque." 
        : <span className="tamil">பணம் அல்லது காசோலை மூலம் பணம் செலுத்த உங்களுக்கு அருகிலுள்ள நகராட்சி அலுவலகத்தைப் பார்வையிடவும்.</span>,
      options: [
        isEnglish ? "Cash payment at municipal office" : "நகராட்சி அலுவலகத்தில் ரொக்கம் செலுத்தல்", 
        isEnglish ? "Cheque deposit" : "காசோலை டெபாசிட்"
      ],
      link: "https://tnurbanepay.tn.gov.in/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {isEnglish ? "Payment Methods" : <span className="tamil">கட்டண முறைகள்</span>}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {isEnglish 
              ? "Choose from a variety of convenient payment options to pay your municipal taxes easily and securely." 
              : <span className="tamil">உங்கள் நகராட்சி வரிகளை எளிதாகவும் பாதுகாப்பாகவும் செலுத்த பல்வேறு வசதியான கட்டண விருப்பங்களில் இருந்து தேர்வு செய்யவும்.</span>}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {paymentMethods.map((method) => (
            <motion.div
              key={method.id}
              variants={itemVariants}
              className="card hover:border-l-4 hover:border-l-primary-600 transition-all group h-full"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 group-hover:text-primary-600 transition-colors">{method.icon}</div>
                <h3 className="text-xl font-bold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                
                {method.apps && (
                  <div className="mt-auto">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">
                      {isEnglish ? "Supported Apps:" : <span className="tamil">ஆதரிக்கப்படும் ஆப்ஸ்:</span>}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {method.apps.map((app) => (
                        <span key={app} className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {method.cards && (
                  <div className="mt-auto">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">
                      {isEnglish ? "Accepted Cards:" : <span className="tamil">ஏற்கப்படும் அட்டைகள்:</span>}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {method.cards.map((card) => (
                        <span key={card} className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                          {card}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {method.banks && (
                  <div className="mt-auto">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">
                      {isEnglish ? "Supported Banks:" : <span className="tamil">ஆதரிக்கப்படும் வங்கிகள்:</span>}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {method.banks.slice(0, 3).map((bank) => (
                        <span key={bank} className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                          {bank}
                        </span>
                      ))}
                      {method.banks.length > 3 && (
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                          +{method.banks.length - 3} {isEnglish ? "more" : <span className="tamil">மேலும்</span>}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                {method.options && (
                  <div className="mt-auto">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">
                      {isEnglish ? "Available Options:" : <span className="tamil">கிடைக்கும் விருப்பங்கள்:</span>}
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      {method.options.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;