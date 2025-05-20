import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = ({ isEnglish }: { isEnglish: boolean }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary-600" />,
      title: isEnglish ? "Phone" : <span className="tamil">தொலைபேசி</span>,
      details: [
        "+91 44 2536 0000",
        "+91 44 2536 0001"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary-600" />,
      title: isEnglish ? "Email" : <span className="tamil">மின்னஞ்சல்</span>,
      details: [
        "contact@tnmunicipal.gov.in",
        "support@tnmunicipal.gov.in"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: isEnglish ? "Address" : <span className="tamil">முகவரி</span>,
      details: isEnglish 
        ? ["1, Municipal Office Road", "Chennai - 600001", "Tamil Nadu, India"]
        : ["1, நகராட்சி அலுவலக சாலை", "சென்னை - 600001", "தமிழ்நாடு, இந்தியா"]
    }
  ];

  return (
    <div>
      <div className="bg-primary-800 py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-white">
            {isEnglish ? "Contact Us" : <span className="tamil">தொடர்பு கொள்ளுங்கள்</span>}
          </h1>
          <p className="text-white/80 mt-2">
            {isEnglish 
              ? "Get in touch with us for any queries or assistance" 
              : <span className="tamil">எந்த கேள்விகளுக்கும் அல்லது உதவிக்கும் எங்களை தொடர்பு கொள்ளுங்கள்</span>}
          </p>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {info.icon}
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">{info.title}</h3>
                </div>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                {isEnglish ? "Send us a Message" : <span className="tamil">எங்களுக்கு செய்தி அனுப்புங்கள்</span>}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {isEnglish ? "Name" : <span className="tamil">பெயர்</span>}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {isEnglish ? "Email" : <span className="tamil">மின்னஞ்சல்</span>}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {isEnglish ? "Phone" : <span className="tamil">தொலைபேசி</span>}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {isEnglish ? "Subject" : <span className="tamil">பொருள்</span>}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    >
                      <option value="">
                        {isEnglish ? "Select a subject" : <span className="tamil">ஒரு பொருளைத் தேர்ந்தெடுக்கவும்</span>}
                      </option>
                      <option value="payment">
                        {isEnglish ? "Payment Issues" : <span className="tamil">கட்டண சிக்கல்கள்</span>}
                      </option>
                      <option value="technical">
                        {isEnglish ? "Technical Support" : <span className="tamil">தொழில்நுட்ப ஆதரவு</span>}
                      </option>
                      <option value="general">
                        {isEnglish ? "General Inquiry" : <span className="tamil">பொது விசாரணை</span>}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {isEnglish ? "Message" : <span className="tamil">செய்தி</span>}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary flex items-center justify-center gap-2">
                  <Send size={18} />
                  {isEnglish ? "Send Message" : <span className="tamil">செய்தி அனுப்பு</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;