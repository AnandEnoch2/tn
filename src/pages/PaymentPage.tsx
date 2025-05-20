import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, AlertCircle } from 'lucide-react';

const PaymentPage = ({ isEnglish }: { isEnglish: boolean }) => {
  const [propertyId, setPropertyId] = useState('');
  const [searchBy, setSearchBy] = useState<'propertyid' | 'mobile'>('propertyid');
  const [propertyDetails, setPropertyDetails] = useState<null | {
    owner: string;
    address: string;
    area: string;
    taxAmount: number;
    dueDate: string;
    assessment: string;
  }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would fetch data from an API
    // For demo purposes, we'll just show mock data
    setPropertyDetails({
      owner: isEnglish ? "Ramesh Kumar" : "ரமேஷ் குமார்",
      address: isEnglish ? "123, Gandhi Street, T Nagar, Chennai - 600017" : "123, காந்தி தெரு, தி நகர், சென்னை - 600017",
      area: "1200 sq.ft",
      taxAmount: 5400,
      dueDate: "15-10-2025",
      assessment: "TNP12345678",
    });
  };

  const handleClear = () => {
    setPropertyId('');
    setPropertyDetails(null);
  };

  return (
    <div>
      <div className="bg-primary-800 py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-white">
            {isEnglish ? "Pay Property Tax" : <span className="tamil">சொத்து வரி செலுத்துங்கள்</span>}
          </h1>
          <p className="text-white/80 mt-2">
            {isEnglish 
              ? "Search for your property and make payment securely" 
              : <span className="tamil">உங்கள் சொத்தைத் தேடி பாதுகாப்பாக பணம் செலுத்துங்கள்</span>}
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="flex items-center bg-primary-50 text-primary-800 p-4 rounded-lg mb-6">
                <Info className="flex-shrink-0 mr-3" />
                <p>
                  {isEnglish 
                    ? "You can search using your Property Tax ID or registered mobile number." 
                    : <span className="tamil">நீங்கள் உங்கள் சொத்து வரி ஐடி அல்லது பதிவுசெய்யப்பட்ட மொபைல் எண்ணைப் பயன்படுத்தி தேடலாம்.</span>}
                </p>
              </div>
              
              <form onSubmit={handleSearch}>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="searchBy"
                        checked={searchBy === 'propertyid'}
                        onChange={() => setSearchBy('propertyid')}
                        className="mr-2"
                      />
                      <span>
                        {isEnglish ? "Search by Property Tax ID" : <span className="tamil">சொத்து வரி ஐடி மூலம் தேடுங்கள்</span>}
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="searchBy"
                        checked={searchBy === 'mobile'}
                        onChange={() => setSearchBy('mobile')}
                        className="mr-2"
                      />
                      <span>
                        {isEnglish ? "Search by Mobile Number" : <span className="tamil">மொபைல் எண் மூலம் தேடுங்கள்</span>}
                      </span>
                    </label>
                  </div>
                  
                  <input
                    type={searchBy === 'mobile' ? 'tel' : 'text'}
                    value={propertyId}
                    onChange={(e) => setPropertyId(e.target.value)}
                    placeholder={searchBy === 'propertyid' 
                      ? (isEnglish ? "Enter Property Tax ID" : "சொத்து வரி ஐடியை உள்ளிடவும்")
                      : (isEnglish ? "Enter Registered Mobile Number" : "பதிவு செய்யப்பட்ட மொபைல் எண்ணை உள்ளிடவும்")}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                
                <div className="flex gap-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary flex-1"
                  >
                    {isEnglish ? "Search Property" : <span className="tamil">சொத்தைத் தேடுங்கள்</span>}
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="btn btn-outline"
                  >
                    {isEnglish ? "Clear" : <span className="tamil">அழி</span>}
                  </button>
                </div>
              </form>
              
              {propertyDetails && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 pt-8 border-t border-gray-200"
                >
                  <h3 className="text-xl font-bold text-primary-800 mb-4">
                    {isEnglish ? "Property Details" : <span className="tamil">சொத்து விவரங்கள்</span>}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        {isEnglish ? "Owner Name" : <span className="tamil">உரிமையாளர் பெயர்</span>}
                      </p>
                      <p className="font-medium">{propertyDetails.owner}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        {isEnglish ? "Property Address" : <span className="tamil">சொத்து முகவரி</span>}
                      </p>
                      <p className="font-medium">{propertyDetails.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        {isEnglish ? "Assessment Number" : <span className="tamil">மதிப்பீட்டு எண்</span>}
                      </p>
                      <p className="font-medium">{propertyDetails.assessment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        {isEnglish ? "Property Area" : <span className="tamil">சொத்து பரப்பளவு</span>}
                      </p>
                      <p className="font-medium">{propertyDetails.area}</p>
                    </div>
                  </div>
                  
                  <div className="bg-primary-50 p-5 rounded-lg mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-primary-800 font-medium">
                          {isEnglish ? "Tax Amount Due" : <span className="tamil">செலுத்த வேண்டிய வரித் தொகை</span>}
                        </p>
                        <p className="text-2xl font-bold text-primary-900">₹{propertyDetails.taxAmount.toLocaleString()}</p>
                      </div>
                      <div className="mt-3 md:mt-0">
                        <p className="text-primary-800 font-medium">
                          {isEnglish ? "Due Date" : <span className="tamil">காலக்கெடு தேதி</span>}
                        </p>
                        <p className="text-lg font-bold text-primary-900">{propertyDetails.dueDate}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Warning for late payment */}
                  <div className="flex items-start bg-yellow-50 text-yellow-800 p-4 rounded-lg mb-8">
                    <AlertCircle className="flex-shrink-0 mr-3 mt-1" />
                    <p className="text-sm">
                      {isEnglish 
                        ? "A penalty of 2% per month will be applied for payments made after the due date. Please pay on time to avoid additional charges." 
                        : <span className="tamil">தேதிக்குப் பிறகு செய்யப்படும் கட்டணங்களுக்கு மாதத்திற்கு 2% அபராதம் விதிக்கப்படும். கூடுதல் கட்டணங்களைத் தவிர்க்க தயவுசெய்து சரியான நேரத்தில் கட்டணம் செலுத்தவும்.</span>}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <button className="btn btn-primary px-10 py-3 text-lg">
                      {isEnglish ? "Proceed to Payment" : <span className="tamil">கட்டணத்திற்குச் செல்லவும்</span>}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;