import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = ({ isEnglish }: { isEnglish: boolean }) => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-primary-700 pb-2 inline-block">
              {isEnglish ? "About Us" : <span className="tamil">எங்களைப் பற்றி</span>}
            </h3>
            <p className="mb-4">
              {isEnglish 
                ? "The Tamil Nadu Municipal Corporation is dedicated to providing efficient and transparent tax collection services to all citizens."
                : <span className="tamil">தமிழ்நாடு நகராட்சி அனைத்து குடிமக்களுக்கும் திறமையான மற்றும் வெளிப்படையான வரி சேகரிப்பு சேவைகளை வழங்குவதில் அர்ப்பணிப்புடன் உள்ளது.</span>
              }
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-primary-700 pb-2 inline-block">
              {isEnglish ? "Quick Links" : <span className="tamil">விரைவு இணைப்புகள்</span>}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/payment-methods" className="hover:text-accent transition-colors">
                  {isEnglish ? "Payment Methods" : <span className="tamil">கட்டண முறைகள்</span>}
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-accent transition-colors">
                  {isEnglish ? "Tax Calculator" : <span className="tamil">வரி கணிப்பான்</span>}
                </Link>
              </li>
              <li>
                <Link to="/due-dates" className="hover:text-accent transition-colors">
                  {isEnglish ? "Due Dates" : <span className="tamil">காலக்கெடு தேதிகள்</span>}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-accent transition-colors">
                  {isEnglish ? "FAQ" : <span className="tamil">அடிக்கடி கேட்கப்படும் கேள்விகள்</span>}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-primary-700 pb-2 inline-block">
              {isEnglish ? "Contact Us" : <span className="tamil">தொடர்பு கொள்ளுங்கள்</span>}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-accent" />
                <span>
                  {isEnglish 
                    ? "1, Municipal Office Road, Chennai - 600001, Tamil Nadu, India"
                    : <span className="tamil">1, நகராட்சி அலுவலக சாலை, சென்னை - 600001, தமிழ்நாடு, இந்தியா</span>
                  }
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-accent" />
                <span>+91 44 2536 0000</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-accent" />
                <span>contact@tnmunicipal.gov.in</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-primary-700 pb-2 inline-block">
              {isEnglish ? "Follow Us" : <span className="tamil">எங்களை பின்தொடரவும்</span>}
            </h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-2">
                {isEnglish ? "Working Hours" : <span className="tamil">வேலை நேரம்</span>}
              </h4>
              <p>
                {isEnglish 
                  ? "Monday - Friday: 9:00 AM - 5:30 PM"
                  : <span className="tamil">திங்கள் - வெள்ளி: காலை 9:00 - மாலை 5:30</span>
                }
              </p>
              <p>
                {isEnglish 
                  ? "Saturday: 9:00 AM - 1:00 PM"
                  : <span className="tamil">சனி: காலை 9:00 - மதியம் 1:00</span>
                }
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-primary-700 text-center">
          <p>
            {isEnglish 
              ? "© 2025 Tamil Nadu Municipal Corporation. All Rights Reserved."
              : <span className="tamil">© 2025 தமிழ்நாடு நகராட்சி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</span>
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;