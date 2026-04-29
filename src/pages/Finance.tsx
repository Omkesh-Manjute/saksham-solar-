import { Link } from 'react-router-dom';
import { Calculator, Percent, CheckCircle, IndianRupee, TrendingDown, Landmark } from 'lucide-react';
import { useState } from 'react';

export default function Finance() {
  const [loanAmount, setLoanAmount] = useState(142000);
  const [tenure, setTenure] = useState(5);
  const [interestRate, setInterestRate] = useState(9.5);

  // EMI Calculation
  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const months = tenure * 12;
    const emi = principal * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - loanAmount;

  const bankPartners = [
    { name: 'State Bank of India', logo: 'SBI', rate: '8.5% onwards' },
    { name: 'HDFC Bank', logo: 'HDFC', rate: '9.0% onwards' },
    { name: 'ICICI Bank', logo: 'ICICI', rate: '9.2% onwards' },
    { name: 'Axis Bank', logo: 'AXIS', rate: '9.5% onwards' },
    { name: 'Tata Capital', logo: 'TATA', rate: '10.0% onwards' },
    { name: 'Bajaj Finserv', logo: 'BAJAJ', rate: '10.5% onwards' },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Landmark className="h-4 w-4" />
            <span>Easy Financing</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Solar Loan & EMI Options
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Make solar affordable with easy EMI options starting from ₹2,500/month
          </p>
        </div>

        {/* EMI Calculator */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">EMI Calculator</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (₹)
                </label>
                <input
                  type="range"
                  min="50000"
                  max="500000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-500">₹50,000</span>
                  <span className="text-lg font-semibold text-gray-900">₹{loanAmount.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">₹5,00,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Tenure (Years)
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[3, 5, 7, 10, 15].map((year) => (
                    <button
                      key={year}
                      onClick={() => setTenure(year)}
                      className={`py-2 rounded-lg font-medium transition-colors ${
                        tenure === year
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {year} Yr
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="range"
                  min="6"
                  max="22"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-500">6%</span>
                  <span className="text-lg font-semibold text-gray-900">{interestRate}%</span>
                  <span className="text-sm text-gray-500">22%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Your EMI Details</h3>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-6 text-center">
              <div className="text-sm opacity-80 mb-1">Monthly EMI</div>
              <div className="text-5xl font-bold">₹{emi.toLocaleString()}</div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Loan Amount</span>
                <span className="font-semibold">₹{loanAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Total Interest</span>
                <span className="font-semibold">₹{totalInterest.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Total Payment</span>
                <span className="font-semibold">₹{totalPayment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="opacity-80">Tenure</span>
                <span className="font-semibold">{tenure} Years ({tenure * 12} Months)</span>
              </div>
            </div>

            <div className="mt-6 bg-green-400/20 rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <TrendingDown className="h-5 w-5" />
                <span className="font-medium">Your solar savings (₹3,000-7,000/month) can cover your EMI!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Solar Loan?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Percent,
                title: 'Low Interest Rates',
                desc: 'Starting from 8.5% per annum with top banks',
              },
              {
                icon: CheckCircle,
                title: 'Quick Approval',
                desc: 'Get loan approval within 48-72 hours',
              },
              {
                icon: IndianRupee,
                title: 'Minimal Documentation',
                desc: 'Basic KYC and income proof required',
              },
              {
                icon: TrendingDown,
                title: 'Self-Liquidating',
                desc: 'Your electricity savings cover the EMI',
              },
              {
                icon: Landmark,
                title: 'Multiple Banks',
                desc: 'Choose from 10+ partner banks & NBFCs',
              },
              {
                icon: CheckCircle,
                title: 'No Prepayment Penalty',
                desc: 'Close your loan early without extra charges',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Banking Partners</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {bankPartners.map((bank, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                <div className="bg-gray-100 rounded-lg py-3 px-4 mb-3">
                  <span className="font-bold text-gray-700">{bank.logo}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{bank.name}</h3>
                <p className="text-green-600 text-sm font-medium">{bank.rate}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Loan Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Loan Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Apply Online', desc: 'Fill simple form with basic details' },
              { step: '2', title: 'Document Submission', desc: 'Upload KYC and income documents' },
              { step: '3', title: 'Verification', desc: 'Bank verifies and approves loan' },
              { step: '4', title: 'Disbursal', desc: 'Loan amount paid to installer' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Required */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents Required for Loan</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Identity & Address</h3>
                <ul className="space-y-2">
                  {['Aadhaar Card', 'PAN Card', 'Passport / Driving License', 'Utility Bill (Address Proof)'].map((doc, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Income Proof</h3>
                <ul className="space-y-2">
                  {['Salary Slips (3 months)', 'Bank Statements (6 months)', 'ITR (2 years)', 'Form 16'].map((doc, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* No-Cost EMI */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 mb-16 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">No-Cost EMI Available!</h2>
              <p className="text-green-100 mb-6">
                Get special no-cost EMI offers on select solar systems. 
                Pay only the principal amount with zero interest.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Available on 2kW and 3kW systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Tenure: 12, 18, 24 months</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Processing fee waived</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Example: 3kW System</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="opacity-80">Final Cost</span>
                  <span>₹1,42,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">24 Month EMI</span>
                  <span className="font-bold">₹5,917/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Interest</span>
                  <span className="text-green-300">₹0 (No-Cost)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Go Solar?</h2>
          <p className="text-xl text-gray-600 mb-8">Get pre-approved for a solar loan today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculator"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all"
            >
              Calculate Your Cost
            </Link>
            <Link
              to="/contact"
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              Apply for Loan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
