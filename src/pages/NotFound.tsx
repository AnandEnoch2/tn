import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = ({ isEnglish }: { isEnglish: boolean }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-5">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-300">404</h1>
        <h2 className="text-3xl font-bold text-primary-800 mt-4 mb-6">
          {isEnglish ? "Page Not Found" : <span className="tamil">பக்கம் கண்டுபிடிக்கப்படவில்லை</span>}
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          {isEnglish 
            ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." 
            : <span className="tamil">நீங்கள் தேடும் பக்கம் அகற்றப்பட்டிருக்கலாம், அதன் பெயர் மாற்றப்பட்டிருக்கலாம், அல்லது தற்காலிகமாக கிடைக்காமல் இருக்கலாம்.</span>}
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <Home size={18} className="mr-2" />
          {isEnglish ? "Back to Home" : <span className="tamil">முகப்புக்குத் திரும்புங்கள்</span>}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;