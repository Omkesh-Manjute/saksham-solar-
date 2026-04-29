import { Shield, Lock, Eye, Database, Bell, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-4">
            <Shield className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last Updated: April 29, 2025</p>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            At Saksham Solar Electricity, we are committed to protecting your personal information
            and your right to privacy. This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          {/* Section 1 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Database className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">1. Information We Collect</h2>
            </div>
            <p className="text-gray-600 mb-4">We collect the following types of information when you interact with our website or services:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Personal Information:</strong> Name, phone number, email address, and home/site address provided through contact or enquiry forms.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Technical Information:</strong> IP address, browser type, device type, and pages visited on our website (collected automatically via analytics).</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Communication Data:</strong> Messages sent via our Contact form, WhatsApp, or email correspondence.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Job Application Data:</strong> Name, phone, email, experience, and resume information submitted through our Careers page.</span></li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Eye className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
            </div>
            <p className="text-gray-600 mb-4">We use your information solely for legitimate business purposes, including:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>To respond to your enquiries and provide free solar consultations.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>To prepare and send customized solar installation quotations.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>To process job applications and contact eligible candidates.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>To send you updates about your solar installation project or after-sales service.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>To improve our website and services based on usage patterns.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span>To comply with legal obligations under Indian law.</span></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Lock className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">3. Data Security</h2>
            </div>
            <p className="text-gray-600 mb-4">
              We implement industry-standard security measures to protect your personal data. Our website uses HTTPS encryption for all data transmission. Form submissions are processed via Web3Forms, a secure third-party service.
            </p>
            <p className="text-gray-600">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security. We encourage you to contact us immediately if you suspect any unauthorized use of your data.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Bell className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">4. Data Sharing & Third Parties</h2>
            </div>
            <p className="text-gray-600 mb-4">
              We do <strong>not sell, rent, or trade</strong> your personal information to any third party. We may share your information only in the following limited circumstances:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Service Partners:</strong> Trusted local installation partners who assist us in fulfilling your solar project (bound by confidentiality).</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Legal Requirements:</strong> When required by law, court order, or government authority in India.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Web3Forms:</strong> Our form processing service provider, used to deliver form submissions to our email.</span></li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">5. Cookies & Tracking</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Our website may use basic cookies to improve your browsing experience. These are small text files stored on your device. You can disable cookies through your browser settings at any time. We do not use cookies for advertising or cross-site tracking.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Mail className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">6. Your Rights</h2>
            </div>
            <p className="text-gray-600 mb-4">You have the following rights regarding your personal data:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Access:</strong> Request a copy of the personal information we hold about you.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Correction:</strong> Ask us to correct inaccurate or incomplete information.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Deletion:</strong> Request deletion of your personal data from our records.</span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 font-bold mt-1">•</span><span><strong>Opt-out:</strong> Unsubscribe from any communications from us at any time.</span></li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise any of these rights, please contact us at:{' '}
              <a href="mailto:prashant@sakshamsolar.com" className="text-yellow-600 font-semibold hover:underline">
                prashant@sakshamsolar.com
              </a>
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised "Last Updated" date. We encourage you to review this page periodically.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Questions About Your Privacy?</h2>
            <p className="text-gray-800 mb-4">
              Contact our team and we'll respond within 24 hours.
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
