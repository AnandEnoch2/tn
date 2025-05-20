import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface InactivityAdsProps {
  timeout?: number;
}

const InactivityAds: React.FC<InactivityAdsProps> = ({ timeout = 10000 }) => {
  const [showAds, setShowAds] = useState(false);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  let timer: NodeJS.Timeout;

  const ads = [
    {
      id: 1,
      image: "/pic7.JPG",
      title: "Temple",
      
    },
    {
      id: 2,
      image: "/pic5.JPG",
      title: "Development",
      
    },
    {
      id: 3,
      image: "/pic8.JPG",
      title: "Green City Program",
      
    },
    {
      id: 4,
      image: "/pic9.JPG",
      title: "Urban Development",
     
    },
    {
      id: 5,
      image: "/pic1.JPG",
      title: "Economic Zone",
      
    },
    {
      id: 6,
      image: "pic4.JPG",
      title: "Highway",
     
    }
    
  ];

  const resetTimer = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => setShowAds(true), timeout);
  };

  useEffect(() => {
    const handleActivity = () => {
      setShowAds(false);
      setCurrentAdIndex(0);
      resetTimer();
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => document.addEventListener(event, handleActivity));

    resetTimer();

    return () => {
      if (timer) clearTimeout(timer);
      events.forEach(event => document.removeEventListener(event, handleActivity));
    };
  }, []);

  useEffect(() => {
    let slideTimer: NodeJS.Timeout;
    if (showAds) {
      slideTimer = setInterval(() => {
        setCurrentAdIndex((prev) => (prev + 1) % ads.length);
      }, 2000);
    }
    return () => clearInterval(slideTimer);
  }, [showAds]);

  if (!showAds) return null;

  const currentAd = ads[currentAdIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      >
        <button
          onClick={() => setShowAds(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-200 z-50"
          aria-label="Close ads"
        >
          <X size={24} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentAd.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative"
          >
            <img
              src={currentAd.image}
              alt={currentAd.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="text-4xl font-bold text-white mb-2">{currentAd.title}</h3>
              <p className="text-xl text-gray-200">{currentAd.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {ads.map((ad, index) => (
            <div
              key={ad.id}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentAdIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InactivityAds;
