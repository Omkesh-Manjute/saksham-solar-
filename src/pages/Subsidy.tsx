import { Link } from 'react-router-dom';
import { Building2, FileText, CheckCircle, Gift, TrendingDown, HelpCircle } from 'lucide-react';

export default function Subsidy() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gift className="h-4 w-4" />
            <span>Government Scheme</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            PM Surya Ghar Muft Bijli Yojana
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get up to ₹78,000 subsidy on solar installation and enjoy free electricity
          </p>
        </div>

        {/* Main Subsidy Card */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 mb-16 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 rounded-2xl p-6">
              <div className="text-5xl font-bold mb-2">₹30,000</div>
              <div className="text-yellow-100 mb-1">for 1 kW system</div>
              <div className="text-sm opacity-80">~40% of cost covered</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <div className="text-5xl font-bold mb-2">₹60,000</div>
              <div className="text-yellow-100 mb-1">for 2 kW system</div>
              <div className="text-sm opacity-80">~40% of cost covered</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <div className="text-5xl font-bold mb-2">₹78,000</div>
              <div className="text-yellow-100 mb-1">for 3 kW+ system</div>
              <div className="text-sm opacity-80">Maximum subsidy</div>
            </div>
          </div>
        </div>

        {/* About Scheme */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Scheme</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The <strong>PM Surya Ghar Muft Bijli Yojana</strong> is a Government of India initiative 
              launched to promote rooftop solar adoption among residential households. The scheme aims 
              to provide free electricity up to 300 units per month through solar power.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <TrendingDown className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Save on Bills</h3>
                  <p className="text-gray-600 text-sm">Get up to 300 units of free electricity every month</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Central + State</h3>
                  <p className="text-gray-600 text-sm">Additional state subsidies may be available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Citizenship', desc: 'Must be an Indian citizen' },
              { title: 'Property', desc: 'Own a house with suitable roof space' },
              { title: 'Connection', desc: 'Have an active electricity connection' },
              { title: 'Document', desc: 'Latest electricity bill in your name' },
              { title: 'Roof Type', desc: ' RCC, tiled, or metal sheet roof' },
              { title: 'No Default', desc: 'No pending dues with DISCOM' },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white border border-gray-200 rounded-xl p-6">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subsidy Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Get Subsidy</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Register on Portal',
                desc: 'Visit pmsuryaghar.gov.in and create your account with basic details',
                icon: FileText,
              },
              {
                step: '02',
                title: 'Apply for Rooftop Solar',
                desc: 'Fill the application form with your electricity connection details',
                icon: Building2,
              },
              {
                step: '03',
                title: 'Get Feasibility Approved',
                desc: 'DISCOM will review and approve your application for installation',
                icon: CheckCircle,
              },
              {
                step: '04',
                title: 'Installation',
                desc: 'Get your solar system installed by our certified team',
                icon: Building2,
              },
              {
                step: '05',
                title: 'Inspection & Commissioning',
                desc: 'DISCOM inspects and commissions the system with net meter',
                icon: CheckCircle,
              },
              {
                step: '06',
                title: 'Subsidy Received',
                desc: 'Subsidy amount directly credited to your bank account within 30 days',
                icon: Gift,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  {item.step}
                </div>
                <div className="flex-1 bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Required */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents Required</h2>
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Aadhaar Card',
                'Latest Electricity Bill',
                'Property Documents / Ownership Proof',
                'Bank Account Details (for subsidy)',
                'PAN Card',
                'Passport Size Photograph',
              ].map((doc, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* State-wise Additional Subsidy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">State-wise Additional Subsidy</h2>
          <div className="bg-gray-50 rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">State</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Additional Subsidy</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Total Benefit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { state: 'Maharashtra', additional: 'Up to ₹20,000', total: 'Up to ₹98,000' },
                  { state: 'Gujarat', additional: 'Up to ₹25,000', total: 'Up to ₹1,03,000' },
                  { state: 'Rajasthan', additional: 'Up to ₹15,000', total: 'Up to ₹93,000' },
                  { state: 'Karnataka', additional: 'Up to ₹20,000', total: 'Up to ₹98,000' },
                  { state: 'Tamil Nadu', additional: 'Up to ₹18,000', total: 'Up to ₹96,000' },
                  { state: 'Delhi', additional: 'Up to ₹22,000', total: 'Up to ₹1,00,000' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{row.state}</td>
                    <td className="py-4 px-4 text-green-600 font-medium">{row.additional}</td>
                    <td className="py-4 px-4 text-yellow-600 font-bold">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-4">* State subsidies are subject to change. Please verify with local authorities.</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to receive the subsidy?',
                a: 'After installation and commissioning, the subsidy is typically credited to your bank account within 30 days.',
              },
              {
                q: 'Can I get subsidy for old solar installations?',
                a: 'No, the subsidy is only available for new installations registered after the scheme launch date.',
              },
              {
                q: 'Is the subsidy taxable?',
                a: 'No, the solar subsidy received under PM Surya Ghar is not taxable as per current regulations.',
              },
              {
                q: 'What if I change my bank account?',
                a: 'You must update your bank details on the portal before subsidy processing. Subsidy is only credited to the registered account.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <HelpCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                </div>
                <p className="text-gray-600 ml-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Claim Your Subsidy?</h2>
          <p className="text-xl text-yellow-100 mb-8">
            Let us help you with the entire process from registration to installation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculator"
              className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-50 transition-colors"
            >
              Calculate Your Savings
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white/10 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
