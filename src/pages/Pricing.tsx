import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Home, Building, Factory } from 'lucide-react';

const residentialPlans = [
  {
    name: 'Basic',
    kw: '1 kW',
    originalPrice: 80000,
    subsidy: 30000,
    savings: '₹1,500',
    suitable: '1-2 BHK, Small Homes',
    features: ['5-6 panels', '1kW Inverter', 'Net Metering', '2 Year Maintenance', '5 Year Warranty'],
  },
  {
    name: 'Standard',
    kw: '2 kW',
    originalPrice: 150000,
    subsidy: 60000,
    savings: '₹3,000',
    suitable: '2-3 BHK, Medium Homes',
    popular: true,
    features: ['10-12 panels', '2kW Inverter', 'Net Metering', '2 Year Maintenance', '10 Year Warranty', 'Mobile App Monitoring'],
  },
  {
    name: 'Premium',
    kw: '3 kW',
    originalPrice: 220000,
    subsidy: 78000,
    savings: '₹4,500',
    suitable: '3+ BHK, Large Homes',
    features: ['15-18 panels', '3kW Inverter', 'Net Metering', '5 Year Maintenance', '25 Year Warranty', 'Mobile App Monitoring', 'Priority Support'],
  },
  {
    name: 'Elite',
    kw: '5 kW',
    originalPrice: 350000,
    subsidy: 78000,
    savings: '₹7,500',
    suitable: 'Villas, Large Properties',
    features: ['25-30 panels', '5kW Inverter', 'Net Metering', '5 Year Maintenance', '25 Year Warranty', 'Mobile App Monitoring', 'Priority Support', 'Battery Backup Option'],
  },
];

const commercialPlans = [
  {
    name: 'Shop Owner',
    kw: '5 kW',
    originalPrice: 350000,
    subsidy: 78000,
    savings: '₹7,500',
    suitable: 'Small Shops, Offices',
    features: ['25-30 panels', '5kW Inverter', 'Net Metering', 'AMC Available', '25 Year Warranty', 'GST Invoice'],
  },
  {
    name: 'SME',
    kw: '10 kW',
    originalPrice: 650000,
    subsidy: 'Custom',
    savings: '₹15,000',
    suitable: 'Medium Businesses',
    features: ['50-60 panels', '10kW Inverter', 'Net Metering', 'AMC Available', '25 Year Warranty', 'GST Invoice', 'Dedicated Support'],
  },
  {
    name: 'Industrial',
    kw: '50+ kW',
    originalPrice: 'Custom',
    subsidy: 'Custom',
    savings: '₹75,000+',
    suitable: 'Factories, Warehouses',
    features: ['Custom Solution', 'Industrial Inverter', 'Net Metering', 'AMC Available', '25 Year Warranty', 'GST Invoice', 'Dedicated Team', 'ROI Analysis'],
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('Standard');

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>Transparent Pricing</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Solar System Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect solar system for your needs with government subsidy benefits
          </p>
        </div>

        {/* Subsidy Banner */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 mb-16 text-white shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-in fade-in slide-in-from-bottom duration-500 delay-100">
              <div className="text-4xl font-bold mb-2">₹30,000</div>
              <div className="text-yellow-100 uppercase tracking-wider text-xs font-bold">Subsidy on 1kW</div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom duration-500 delay-200">
              <div className="text-4xl font-bold mb-2">₹60,000</div>
              <div className="text-yellow-100 uppercase tracking-wider text-xs font-bold">Subsidy on 2kW</div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom duration-500 delay-300">
              <div className="text-4xl font-bold mb-2">₹78,000</div>
              <div className="text-yellow-100 uppercase tracking-wider text-xs font-bold">Subsidy on 3kW+</div>
            </div>
          </div>
        </div>

        {/* Residential Plans */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Home className="h-8 w-8 text-yellow-600" />
              <h2 className="text-3xl font-bold text-gray-900">Residential Plans</h2>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-full">Click to select plan</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentialPlans.map((plan, index) => (
              <div
                key={index}
                onClick={() => setSelectedPlan(plan.name)}
                className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-500 cursor-pointer relative group flex flex-col h-full ${
                  selectedPlan === plan.name 
                    ? 'border-yellow-400 shadow-2xl scale-105 z-10' 
                    : 'border-gray-100 shadow-lg hover:border-yellow-200 hover:shadow-xl'
                }`}
              >
                {/* Popular/Selected Tag */}
                {plan.popular ? (
                  <div className="bg-yellow-400 text-yellow-900 text-center py-2 font-bold text-xs uppercase tracking-widest">
                    Most Popular
                  </div>
                ) : selectedPlan === plan.name ? (
                  <div className="bg-yellow-100 text-yellow-700 text-center py-2 font-bold text-xs uppercase tracking-widest">
                    Selected Plan
                  </div>
                ) : (
                  <div className="h-[32px]"></div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    {selectedPlan === plan.name && (
                      <div className="bg-yellow-500 rounded-full p-1 shadow-inner animate-in zoom-in duration-300">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="text-4xl font-bold text-yellow-600 mb-1">{plan.kw}</div>
                  <p className="text-gray-500 text-sm mb-4">{plan.suitable}</p>
                  
                  <div className="space-y-2 mb-6 p-4 bg-gray-50 rounded-xl">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Original Price</span>
                      <span className="line-through text-gray-400">₹{(plan.originalPrice as number).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Subsidy</span>
                      <span className="text-green-600 font-medium">- ₹{typeof plan.subsidy === 'number' ? plan.subsidy.toLocaleString() : plan.subsidy}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between">
                      <span className="text-sm font-bold text-gray-700">Final Price</span>
                      <span className="text-xl font-extrabold text-yellow-600">
                        ₹{typeof plan.subsidy === 'number' ? (plan.originalPrice as number - plan.subsidy).toLocaleString() : 'Custom'}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-tighter mb-1">Monthly Savings</div>
                    <div className="text-3xl font-bold text-green-600">{plan.savings}</div>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/calculator?plan=${plan.name}`}
                    className={`block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl ${
                      selectedPlan === plan.name
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white transform scale-105'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Quote Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Plans */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Building className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Commercial Plans</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {commercialPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-100 shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">{plan.kw}</div>
                  <p className="text-gray-500 text-sm mb-4">{plan.suitable}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Starting Price</span>
                      <span className="text-gray-900 font-medium">
                        {typeof plan.originalPrice === 'number' ? `₹${plan.originalPrice.toLocaleString()}` : plan.originalPrice}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subsidy</span>
                      <span className="text-green-600">{plan.subsidy}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Monthly Savings</div>
                    <div className="text-2xl font-bold text-green-600">{plan.savings}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="block w-full py-3 rounded-xl font-semibold text-center bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Contact for Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agricultural Plans */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Factory className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Agricultural (Solar Pumps)</h2>
          </div>
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Solar Pump Solutions for Farmers</h3>
                <p className="text-gray-600 mb-6">
                  Replace diesel pumps with solar-powered pumps and save on fuel costs. 
                  Government subsidy available under PM-KUSUM scheme.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>3 HP to 10 HP solar pumps available</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Up to 60% subsidy under PM-KUSUM</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Zero fuel cost - free sunlight!</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Low maintenance, 25 year life</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Farm Quote
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Solar Pump Pricing</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">3 HP Pump</span>
                    <span className="font-semibold">₹2.5 - 3.0 Lakh</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">5 HP Pump</span>
                    <span className="font-semibold">₹4.0 - 5.0 Lakh</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">7.5 HP Pump</span>
                    <span className="font-semibold">₹6.0 - 7.5 Lakh</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">10 HP Pump</span>
                    <span className="font-semibold">₹8.0 - 10 Lakh</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">* Prices include subsidy. Final cost may vary.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'Is the subsidy applicable on all systems?', a: 'Yes, subsidy is available for residential systems up to 3kW. For systems above 3kW, subsidy is capped at ₹78,000.' },
              { q: 'What is the payback period?', a: 'Typically 3-5 years depending on your electricity consumption and system size. After that, you get free electricity for 20+ years.' },
              { q: 'Is maintenance included?', a: 'Yes, we provide 2 years of free maintenance with all installations. Extended AMC plans are also available.' },
              { q: 'Can I get financing?', a: 'Yes, we partner with multiple banks and NBFCs for easy EMI options. No-cost EMI available for eligible customers.' },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-gray-600 mb-8">Our solar experts will help you select the perfect system for your needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculator"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all"
            >
              Use Solar Calculator
            </Link>
            <Link
              to="/contact"
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              Talk to Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
