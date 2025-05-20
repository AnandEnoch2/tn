import React, { useState } from 'react';
import { Calculator as CalculatorIcon, Info } from 'lucide-react';

const Calculator = ({ isEnglish }: { isEnglish: boolean }) => {
  const [propertyType, setPropertyType] = useState('residential');
  const [area, setArea] = useState('');
  const [age, setAge] = useState('0-15');
  const [zone, setZone] = useState('A');
  const [calculatedTax, setCalculatedTax] = useState<number | null>(null);

  const calculateTax = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic tax calculation logic (simplified for demo)
    const baseRate = {
      'A': { residential: 4, commercial: 8 },
      'B': { residential: 3, commercial: 6 },
      'C': { residential: 2, commercial: 4 }
    }[zone][propertyType as 'residential' | 'commercial'];
    
    const ageMultiplier = {
      '0-15': 1,
      '16-30': 0.9,
      '30+': 0.8
    }[age];
    
    const areaNum = parseFloat(area);
    const annualTax = baseRate * areaNum * ageMultiplier;
    setCalculatedTax(Math.round(annualTax));
  };

  return (
    <div>
      <div className="bg-primary-800 py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <CalculatorIcon size={32} />
            {isEnglish ? "Property Tax Calculator" : <span className="tamil">சொத்து வரி கணிப்பான்</span>}
          </h1>
          <p className="text-white/80 mt-2">
            {isEnglish 
              ? "Estimate your property tax based on various factors" 
              : <span className="tamil">பல்வேறு காரணிகளின் அடிப்படையில் உங்கள் சொத்து வரியை மதிப்பிடவும்</span>}
          </p>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="flex items-center bg-primary-50 text-primary-800 p-4 rounded-lg mb-6">
                <Info className="flex-shrink-0 mr-3" />
                <p className="text-sm">
                  {isEnglish 
                    ? "This calculator provides an estimate. Actual tax may vary based on additional factors." 
                    : <span className="tamil">இந்த கணிப்பான் ஒரு மதிப்பீட்டை வழங்குகிறது. கூடுதல் காரணிகளின் அடிப்படையில் உண்மையான வரி மாறுபடலாம்.</span>}
                </p>
              </div>

              <form onSubmit={calculateTax} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {isEnglish ? "Property Type" : <span className="tamil">சொத்து வகை</span>}
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="propertyType"
                        value="residential"
                        checked={propertyType === 'residential'}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="mr-2"
                      />
                      <span>
                        {isEnglish ? "Residential" : <span className="tamil">குடியிருப்பு</span>}
                      </span>
                    </label>
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="propertyType"
                        value="commercial"
                        checked={propertyType === 'commercial'}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="mr-2"
                      />
                      <span>
                        {isEnglish ? "Commercial" : <span className="tamil">வணிக</span>}
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {isEnglish ? "Built-up Area (sq.ft)" : <span className="tamil">கட்டப்பட்ட பகுதி (சதுர அடி)</span>}
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {isEnglish ? "Building Age" : <span className="tamil">கட்டிட வயது</span>}
                  </label>
                  <select
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="0-15">0-15 {isEnglish ? "years" : <span className="tamil">ஆண்டுகள்</span>}</option>
                    <option value="16-30">16-30 {isEnglish ? "years" : <span className="tamil">ஆண்டுகள்</span>}</option>
                    <option value="30+">30+ {isEnglish ? "years" : <span className="tamil">ஆண்டுகள்</span>}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {isEnglish ? "Zone" : <span className="tamil">மண்டலம்</span>}
                  </label>
                  <select
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="A">{isEnglish ? "Zone A (Prime Area)" : <span className="tamil">மண்டலம் A (முதன்மை பகுதி)</span>}</option>
                    <option value="B">{isEnglish ? "Zone B (Commercial Area)" : <span className="tamil">மண்டலம் B (வணிக பகுதி)</span>}</option>
                    <option value="C">{isEnglish ? "Zone C (Other Areas)" : <span className="tamil">மண்டலம் C (பிற பகுதிகள்)</span>}</option>
                  </select>
                </div>

                <button type="submit" className="w-full btn btn-primary py-3">
                  {isEnglish ? "Calculate Tax" : <span className="tamil">வரியைக் கணக்கிடுங்கள்</span>}
                </button>
              </form>

              {calculatedTax !== null && (
                <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                  <h3 className="text-xl font-bold text-primary-800 mb-2">
                    {isEnglish ? "Estimated Annual Property Tax" : <span className="tamil">மதிப்பிடப்பட்ட வருடாந்திர சொத்து வரி</span>}
                  </h3>
                  <p className="text-3xl font-bold text-primary-900">₹{calculatedTax.toLocaleString()}</p>
                  <p className="text-sm text-primary-700 mt-2">
                    {isEnglish 
                      ? "This is an approximate calculation. Actual tax may vary." 
                      : <span className="tamil">இது ஒரு தோராயமான கணக்கீடு. உண்மையான வரி மாறுபடலாம்.</span>}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;