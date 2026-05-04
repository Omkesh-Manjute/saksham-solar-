import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Sun, TrendingDown, CheckCircle, AlertCircle, IndianRupee, TrendingUp, Loader2, Zap, Send } from 'lucide-react';
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

  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [isLeadSubmitting, setIsLeadSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const locations = [
    'Nagpur', 'Mumbai', 'Pune', 'Gondia', 'Bhandara', 'Chandrapur',
    'Amravati', 'Wardha', 'Yavatmal', 'Other'
  ];

  const calculateSolar = () => {
    const bill = parseFloat(formData.monthlyBill);
    if (!bill || bill < 500) return;

    // Calculation logic
    let systemSize: number;
    if (bill <= 1500) systemSize = 1;
    else if (bill <= 3000) systemSize = 2;
    else if (bill <= 4500) systemSize = 3;
    else if (bill <= 6000) systemSize = 4;
    else systemSize = 5;

    let cost: number;
    if (systemSize === 1) cost = 65000;
    else if (systemSize === 2) cost = 145000;
    else if (systemSize === 3) cost = 200000;
    else if (systemSize === 4) cost = 245000;
    else cost = 290000;

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

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLeadSubmitting(true);
    setError(null);

    const submissionData = new FormData();
    submissionData.append("access_key", "d4e4b47c-4675-4619-a15a-58fa40105738");
    submissionData.append("subject", `Solar Quote Request from ${leadForm.name} (${formData.location})`);
    submissionData.append("from_name", "Saksham Solar Website");
    
    submissionData.append("Name", leadForm.name);
    submissionData.append("Phone", leadForm.phone);
    submissionData.append("Email", leadForm.email);
    submissionData.append("Location", formData.location || "Not specified");
    submissionData.append("Monthly Bill", formData.monthlyBill || "Not specified");
    
    if (result) {
      submissionData.append("Recommended System", `${result.systemSize} kW`);
      submissionData.append("Estimated Savings", `₹${Math.round(result.monthlySavings)}/month`);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();
      if (data.success) {
        setLeadSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send request. Please check your connection.");
    } finally {
      setIsLeadSubmitting(false);
    }
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
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-in fade-in slide-in-from-left duration-700 h-fit">
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
                <p className="text-xs text-gray-500 mt-1">Average household: ₹2,000-₹5,000</p>
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

          {/* Results and Lead Form */}
          <div className="lg:sticky lg:top-24 space-y-6">
            {result ? (
              <div className="bg-white rounded-2xl shadow-xl p-8 animate-in fade-in zoom-in duration-700 border-2 border-green-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Recommendation</h2>
                </div>

                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white mb-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-sm opacity-90 mb-1 font-bold uppercase tracking-widest">System Size</div>
                    <div className="text-6xl font-extrabold mb-2 flex justify-center items-baseline">
                      <CountUp end={result.systemSize} />
                      <span className="text-2xl ml-2">kW</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">System Cost</span>
                    <span className="font-bold text-gray-900">₹{result.cost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Govt. Subsidy</span>
                    <span className="font-bold text-green-600">- ₹{result.subsidy.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-yellow-50 rounded-xl px-4">
                    <span className="font-bold text-gray-700">Final Price</span>
                    <span className="text-2xl font-black text-yellow-600">₹{result.finalCost.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                    <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-500 font-bold uppercase">Monthly Savings</div>
                    <div className="text-xl font-black text-green-700">₹{Math.round(result.monthlySavings).toLocaleString()}</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                    <Sun className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-500 font-bold uppercase">Payback</div>
                    <div className="text-xl font-black text-blue-700">{result.paybackPeriod.toFixed(1)} yrs</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-8 text-white text-center shadow-lg">
                <Sun className="h-12 w-12 mx-auto mb-4 opacity-50 animate-pulse" />
                <h3 className="text-xl font-bold mb-2">See Your Savings</h3>
                <p className="text-yellow-100 text-sm">
                  Fill in the calculator to see your potential cost savings and government subsidy details.
                </p>
              </div>
            )}

            {/* Lead Capture Form - Always Visible */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Get Free Quote</h3>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Fill this form and our experts will contact you for a site survey and detailed proposal.
              </p>
              
              {!leadSubmitted ? (
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                  />
                  
                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={isLeadSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {isLeadSubmitting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                    <span>{isLeadSubmitting ? 'Sending...' : 'Request Consultation'}</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h4>
                  <p className="text-gray-600 text-sm text-center">
                    Thank you, {leadForm.name}! Our team will contact you on {leadForm.phone} shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
