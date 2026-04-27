import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Sun, TrendingDown, CheckCircle, AlertCircle, IndianRupee, TrendingUp } from 'lucide-react';
import CountUp from '../components/CountUp';

export default function SolarCalculator() {
  const [formData, setFormData] = useState({
    monthlyBill: '',
    location: '',
    houseType: 'residential',
    roofType: 'terrace',
  });
  const [result, setResult] = useState<null | {
    systemSize: number;
    cost: number;
    subsidy: number;
    finalCost: number;
    monthlySavings: number;
    paybackPeriod: number;
    annualSavings: number;
  }>(null);
  const [submitted, setSubmitted] = useState(false);

  const locations = [
    'Nagpur', 'Mumbai', 'Pune', 'Delhi', 'Bangalore', 'Chennai',
    'Hyderabad', 'Ahmedabad', 'Jaipur', 'Other'
  ];

  const calculateSolar = () => {
    const bill = parseFloat(formData.monthlyBill);
    if (!bill || bill < 500) return;

    // Calculation logic based on PRD
    let systemSize: number;
    if (bill <= 1500) systemSize = 1;
    else if (bill <= 3000) systemSize = 2;
    else if (bill <= 4500) systemSize = 3;
    else if (bill <= 6000) systemSize = 4;
    else systemSize = 5;

    const costPerKw = 65000;
    const cost = systemSize * costPerKw;

    let subsidy: number;
    if (systemSize === 1) subsidy = 30000;
    else if (systemSize === 2) subsidy = 60000;
    else subsidy = 78000;

    const finalCost = cost - subsidy;
    const monthlySavings = bill * 0.85;
    const annualSavings = monthlySavings * 12;
    const paybackPeriod = finalCost / annualSavings;

    setResult({
      systemSize,
      cost,
      subsidy,
      finalCost,
      monthlySavings,
      paybackPeriod,
      annualSavings,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateSolar();
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Lead submitted:', { ...formData, result });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-700">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            <span>Free Solar Calculator</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your Solar Savings
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant recommendations for your solar system size, cost, and savings
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-in fade-in slide-in-from-left duration-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Electricity Bill (₹)
                </label>
                <div className="relative group">
                  <IndianRupee className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                  <input
                    type="number"
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    placeholder="Enter your monthly bill"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-lg transition-all"
                    required
                    min="500"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Average Indian household: ₹2,000-₹5,000</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-lg transition-all"
                  required
                >
                  <option value="">Select your city</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['residential', 'commercial', 'industrial', 'agricultural'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, houseType: type })}
                      className={`py-3 px-4 rounded-xl border-2 font-medium transition-all duration-300 capitalize relative overflow-hidden group ${formData.houseType === type
                          ? 'border-yellow-500 bg-yellow-50 text-yellow-700 shadow-md scale-105'
                          : 'border-gray-200 text-gray-600 hover:border-yellow-300 hover:bg-yellow-50/50'
                        }`}
                    >
                      <span className="relative z-10">{type}</span>
                      {formData.houseType === type && (
                        <div className="absolute right-2 top-2 animate-in zoom-in duration-300">
                          <CheckCircle className="h-4 w-4 text-yellow-600" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roof Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'terrace', label: 'Terrace (RCC)' },
                    { value: 'tilted', label: 'Tiled Roof' },
                    { value: 'metal', label: 'Metal Sheet' },
                    { value: 'other', label: 'Other' },
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, roofType: type.value })}
                      className={`py-3 px-4 rounded-xl border-2 font-medium transition-all duration-300 relative overflow-hidden group ${formData.roofType === type.value
                          ? 'border-yellow-500 bg-yellow-50 text-yellow-700 shadow-md scale-105'
                          : 'border-gray-200 text-gray-600 hover:border-yellow-300 hover:bg-yellow-50/50'
                        }`}
                    >
                      <span className="relative z-10">{type.label}</span>
                      {formData.roofType === type.value && (
                        <div className="absolute right-2 top-2 animate-in zoom-in duration-300">
                          <CheckCircle className="h-4 w-4 text-yellow-600" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform active:scale-[0.98]"
              >
                Calculate My Solar System
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {result ? (
              <>
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-in fade-in zoom-in duration-700">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Your Solar Recommendation</h2>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white mb-6 shadow-lg transform hover:scale-[1.02] transition-transform">
                    <div className="text-center">
                      <div className="text-sm opacity-90 mb-1 font-bold uppercase tracking-widest">Recommended System Size</div>
                      <div className="text-6xl font-extrabold mb-2 flex justify-center items-baseline">
                        <CountUp end={result.systemSize} />
                        <span className="text-2xl ml-2">kW</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block text-sm font-medium">
                        Perfect for your electricity usage
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">System Cost</span>
                      <span className="font-bold text-gray-900 text-lg">₹<CountUp end={result.cost} /></span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Government Subsidy</span>
                      <span className="font-bold text-green-600 text-lg">- ₹<CountUp end={result.subsidy} /></span>
                    </div>
                    <div className="flex justify-between items-center py-5 bg-yellow-50 rounded-2xl px-6 shadow-inner border border-yellow-100">
                      <span className="font-bold text-gray-700">Final Price</span>
                      <span className="text-3xl font-black text-yellow-600">₹<CountUp end={result.finalCost} /></span>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100 group hover:bg-green-100 transition-colors">
                      <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Monthly Savings</div>
                      <div className="text-2xl font-black text-green-700">₹<CountUp end={Math.round(result.monthlySavings)} /></div>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100 group hover:bg-blue-100 transition-colors">
                      <Sun className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Payback Period</div>
                      <div className="text-2xl font-black text-blue-700"><CountUp end={Number(result.paybackPeriod.toFixed(1))} /> yrs</div>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div className="text-sm text-gray-600">
                        <p className="font-medium text-gray-900 mb-1">Additional Benefits:</p>
                        <ul className="space-y-1">
                          <li>• Annual Savings: ₹{Math.round(result.annualSavings).toLocaleString()}</li>
                          <li>• 25+ year system lifespan</li>
                          <li>• Easy EMI options available</li>
                          <li>• Free maintenance for 2 years</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lead Capture Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Get Free Quote</h3>
                  {!submitted ? (
                    <form onSubmit={handleLeadSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all"
                      >
                        Get Free Consultation
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                      <p className="text-gray-600">Our expert will contact you within 24 hours</p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sun className="h-12 w-12 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enter Your Details
                </h3>
                <p className="text-gray-600 mb-6">
                  Fill in the form to get personalized solar recommendations with cost breakdown and savings calculation
                </p>
                <div className="bg-gray-50 rounded-xl p-4 text-left">
                  <h4 className="font-semibold text-gray-900 mb-3">What you'll get:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Recommended system size</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Cost after subsidy</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Monthly & annual savings</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Payback period</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Solar Saves You Money</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Generate Power</h3>
              <p className="text-gray-600 text-sm">Solar panels convert sunlight into electricity for your home</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reduce Bills</h3>
              <p className="text-gray-600 text-sm">Use solar power first, grid power only when needed</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Save Long-term</h3>
              <p className="text-gray-600 text-sm">25+ years of free electricity after payback period</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-yellow-600 font-semibold hover:text-yellow-700"
          >
            <span>Have questions? Talk to our solar experts</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
