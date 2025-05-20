import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: React.ReactNode;
  answer: React.ReactNode;
}

const FAQSection = ({ isEnglish }: { isEnglish: boolean }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: isEnglish ? "How often do I need to pay property tax?" : <span className="tamil">சொத்து வரியை எத்தனை முறை செலுத்த வேண்டும்?</span>,
      answer: isEnglish 
        ? "Property tax in Tamil Nadu is typically paid semi-annually. The first half-year payment is due by April 15th, and the second half-year payment is due by October 15th of each financial year." 
        : <span className="tamil">தமிழ்நாட்டில் சொத்து வரி பொதுவாக அரையாண்டு முறையில் செலுத்தப்படுகிறது. முதல் அரையாண்டு கட்டணம் ஏப்ரல் 15 அன்றும், இரண்டாம் அரையாண்டு கட்டணம் ஒவ்வொரு நிதியாண்டின் அக்டோபர் 15 அன்றும் செலுத்த வேண்டும்.</span>
    },
    {
      question: isEnglish ? "What happens if I miss the payment deadline?" : <span className="tamil">கட்டண காலக்கெடுவை தவறவிட்டால் என்ன நடக்கும்?</span>,
      answer: isEnglish 
        ? "If you miss the payment deadline, a penalty of 2% per month will be applied on the outstanding amount. The maximum penalty can be up to 24% of the original tax amount." 
        : <span className="tamil">கட்டண காலக்கெடுவை தவறவிட்டால், நிலுவைத் தொகையில் மாதத்திற்கு 2% அபராதம் விதிக்கப்படும். அதிகபட்ச அபராதம் அசல் வரித் தொகையில் 24% வரை இருக்கலாம்.</span>
    },
    {
      question: isEnglish ? "How can I check my property tax details?" : <span className="tamil">எனது சொத்து வரி விவரங்களை எவ்வாறு சரிபார்ப்பது?</span>,
      answer: isEnglish 
        ? "You can check your property tax details by entering your Property Tax Assessment Number or your registered mobile number on the 'Tax Details' page. You can also visit your local municipal office with your property documents." 
        : <span className="tamil">'வரி விவரங்கள்' பக்கத்தில் உங்கள் சொத்து வரி மதிப்பீட்டு எண் அல்லது உங்கள் பதிவுசெய்யப்பட்ட மொபைல் எண்ணை உள்ளிடுவதன் மூலம் உங்கள் சொத்து வரி விவரங்களை சரிபார்க்கலாம். உங்கள் சொத்து ஆவணங்களுடன் உங்கள் உள்ளூர் நகராட்சி அலுவலகத்தையும் நீங்கள் பார்வையிடலாம்.</span>
    },
    {
      question: isEnglish ? "How is property tax calculated?" : <span className="tamil">சொத்து வரி எவ்வாறு கணக்கிடப்படுகிறது?</span>,
      answer: isEnglish 
        ? "Property tax is calculated based on the Annual Rental Value (ARV) of your property, which depends on factors like the location, built-up area, type of construction, age of the building, and usage (residential, commercial, etc.)." 
        : <span className="tamil">சொத்து வரி உங்கள் சொத்தின் வருடாந்திர வாடகை மதிப்பின் (ARV) அடிப்படையில் கணக்கிடப்படுகிறது, இது இருப்பிடம், கட்டப்பட்ட பகுதி, கட்டுமான வகை, கட்டிடத்தின் வயது மற்றும் பயன்பாடு (குடியிருப்பு, வணிக, போன்றவை) போன்ற காரணிகளைப் பொறுத்தது.</span>
    },
    {
      question: isEnglish ? "Can I pay someone else's property tax?" : <span className="tamil">நான் வேறு யாருடைய சொத்து வரியையும் செலுத்த முடியுமா?</span>,
      answer: isEnglish 
        ? "Yes, you can pay property tax for any property as long as you have the correct Property Tax Assessment Number or details. The payment will be credited to the respective property account regardless of who makes the payment." 
        : <span className="tamil">ஆம், சரியான சொத்து வரி மதிப்பீட்டு எண் அல்லது விவரங்கள் இருந்தால் நீங்கள் எந்த சொத்துக்கும் சொத்து வரி செலுத்தலாம். யார் பணம் செலுத்தினாலும் பணம் செலுத்துதல் அந்தந்த சொத்து கணக்கில் வரவு வைக்கப்படும்.</span>
    },
    {
      question: isEnglish ? "What payment methods are accepted?" : <span className="tamil">எந்த கட்டண முறைகள் ஏற்றுக்கொள்ளப்படுகின்றன?</span>,
      answer: isEnglish 
        ? "We accept various payment methods including UPI apps (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and offline payments at designated municipal offices." 
        : <span className="tamil">UPI ஆப்ஸ் (Google Pay, PhonePe, Paytm), கிரெடிட்/டெபிட் கார்டுகள், நெட் பேங்கிங் மற்றும் குறிப்பிடப்பட்ட நகராட்சி அலுவலகங்களில் ஆஃப்லைன் கட்டணங்கள் உட்பட பல்வேறு கட்டண முறைகளை நாங்கள் ஏற்றுக்கொள்கிறோம்.</span>
    },
    {
      question: isEnglish ? "How do I get a receipt for my payment?" : <span className="tamil">எனது கட்டணத்திற்கான ரசீதை எவ்வாறு பெறுவது?</span>,
      answer: isEnglish 
        ? "Once the payment is successful, you will receive an e-receipt on your registered email ID and a confirmation message on your mobile number immediately. You can also download the receipt from the 'Payment History' section on our website." 
        : <span className="tamil">கட்டணம் வெற்றிகரமாக முடிந்தவுடன், உங்கள் பதிவு செய்யப்பட்ட மின்னஞ்சல் ஐடியில் ஒரு மின்-ரசீது மற்றும் உங்கள் மொபைல் எண்ணில் உறுதிப்படுத்தல் செய்தியை உடனடியாகப் பெறுவீர்கள். எங்கள் வலைத்தளத்தில் உள்ள 'கட்டண வரலாறு' பிரிவிலிருந்தும் ரசீதை பதிவிறக்கலாம்.</span>
    },
    {
      question: isEnglish ? "Is there a discount for early payment?" : <span className="tamil">முன்கூட்டியே கட்டணம் செலுத்துவதற்கு தள்ளுபடி உள்ளதா?</span>,
      answer: isEnglish 
        ? "Yes, some municipalities offer an early payment incentive of up to 5% if you pay the full annual property tax before the first due date. Check with your specific municipality for applicable discounts." 
        : <span className="tamil">ஆம், முதல் காலக்கெடுவுக்கு முன் முழு ஆண்டு சொத்து வரியை செலுத்தினால், சில நகராட்சிகள் 5% வரை முன்கூட்டியே கட்டணம் செலுத்தும் ஊக்கத்தொகையை வழங்குகின்றன. பொருந்தக்கூடிய தள்ளுபடிகளுக்கு உங்கள் குறிப்பிட்ட நகராட்சியைச் சரிபார்க்கவும்.</span>
    },
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {isEnglish ? "Frequently Asked Questions" : <span className="tamil">அடிக்கடி கேட்கப்படும் கேள்விகள்</span>}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {isEnglish 
              ? "Find answers to common questions about property tax payments and our online portal." 
              : <span className="tamil">சொத்து வரி செலுத்துதல் மற்றும் எங்கள் ஆன்லைன் போர்டல் பற்றிய பொதுவான கேள்விகளுக்கான பதில்களைக் கண்டறியவும்.</span>}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className={`w-full px-6 py-4 text-left flex items-center justify-between ${
                  activeIndex === index ? "bg-primary-50" : "bg-white"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-primary-800">{faq.question}</h3>
                <span className="flex-shrink-0 text-primary-600">
                  {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;