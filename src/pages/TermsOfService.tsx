import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, Handshake } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-4">
            <FileText className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms of Service</h1>
          <p className="text-gray-500 text-sm">Last Updated: April 29, 2025</p>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Please read these Terms of Service carefully before using the Saksham Solar Electricity website
            or engaging our services. By accessing our website, you agree to be bound by these terms.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          {/* Section 1 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Handshake className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
            </div>
            <p className="text-gray-600 mb-4">
              By accessing or using the website <strong>sakshamsolar.com</strong> ("the Website"), you confirm that you are at least 18 years of age, have read and understood these Terms of Service, and agree to be legally bound by them.
            </p>
            <p className="text-gray-600">
              These Terms apply to all visitors, customers, and anyone else who accesses or uses our services. If you disagree with any part of these terms, you may not access the website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">2. Our Services</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Saksham Solar Electricity provides solar energy solutions including but not limited to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Rooftop solar panel supply and installation for residential and commercial properties.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Free site survey and solar energy feasibility assessment.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Assistance with PM Surya Ghar Yojana subsidy application and documentation.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Solar financing and EMI solutions in partnership with authorized financial institutions.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>After-sales service, AMC (Annual Maintenance Contract), and system monitoring.</span></li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm italic">
              All services are subject to availability in your area. We currently serve all districts of the Vidarbha region of Maharashtra.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Scale className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">3. Quotations & Pricing</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>All pricing displayed on the website is indicative and subject to change based on current market rates, government policies, and site-specific requirements.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>A formal written quotation will be provided after a physical site survey. This quotation will be valid for 30 days from the date of issue.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Subsidy amounts are subject to government approval and may vary. Saksham Solar is not responsible for delays or changes in government subsidy disbursement.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Any payment made confirms acceptance of the final agreed scope and pricing as per the signed contract/agreement.</span></li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">4. Installation & Warranty</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Solar Panels:</strong> 25-year performance warranty as per manufacturer's terms.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Inverters:</strong> 5-year warranty (extendable to 10 years with AMC).</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Installation Workmanship:</strong> 1-year warranty on all installation and civil work.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Warranty is void in cases of physical damage, tampering, natural disasters (flood, lightning strike), or unauthorized modifications.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Installation timelines are estimates; delays due to weather, supply chain, or government approval processes are not the liability of Saksham Solar.</span></li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <XCircle className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">5. User Responsibilities</h2>
            </div>
            <p className="text-gray-600 mb-4">By using our website and services, you agree to:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Provide accurate and complete information in all forms and communications.</span></li>
              <li className="flex items-start space-x-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Ensure proper access to the installation site as agreed with our team.</span></li>
              <li className="flex items-start space-x-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Make timely payments as per the agreed schedule.</span></li>
              <li className="flex items-start space-x-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Notify us promptly of any system issues or service requirements.</span></li>
              <li className="flex items-start space-x-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Not attempt to modify, tamper with, or move the installed solar system without prior written permission.</span></li>
              <li className="flex items-start space-x-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Not use the website for any unlawful, harmful, or fraudulent purpose.</span></li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">6. Limitation of Liability</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Saksham Solar Electricity shall not be liable for:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Delays or non-performance caused by government policy changes, grid connectivity issues, or force majeure events (floods, earthquakes, etc.).</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Variation in energy generation due to weather conditions, shading, or system soiling.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Loss of income or indirect damages arising from system downtime.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Third-party actions, including decisions by electricity distribution companies (DISCOMs).</span></li>
            </ul>
            <p className="text-gray-600 mt-4">
              Our total liability in any case shall not exceed the amount paid by the customer for the specific service in question.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Scale className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">7. Cancellation & Refund Policy</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Before Installation Begins:</strong> Cancellation requests submitted before the start of installation may be eligible for a refund of the booking amount, minus any expenses already incurred (survey, documentation, material orders).</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>After Installation Begins:</strong> No refund will be issued once materials have been procured and installation has commenced.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>All refund requests must be submitted in writing to <a href="mailto:prashant@sakshamsolar.com" className="text-yellow-600 hover:underline">prashant@sakshamsolar.com</a>.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>Approved refunds will be processed within 15 business days.</span></li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Governing Law & Jurisdiction</h2>
            <p className="text-gray-600">
              These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in <strong>Gondia, Maharashtra, India</strong>.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Changes to These Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of our website or services after any changes constitutes your acceptance of the new terms. We recommend checking this page periodically.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Have Questions About These Terms?</h2>
            <p className="text-gray-800 mb-4">
              Our team is happy to clarify any part of these terms.
            </p>
            <a
              href="mailto:prashant@sakshamsolar.com"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              prashant@sakshamsolar.com
            </a>
          </div>

        </div>

        {/* Footer Credit */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm">
            © 2025 Saksham Solar Electricity. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Designed & Developed by{' '}
            <span className="text-yellow-600 font-semibold">Omkesh AI Lab</span>
          </p>
        </div>

      </div>
    </div>
  );
}
