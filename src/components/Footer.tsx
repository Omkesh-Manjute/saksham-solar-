import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Saksham Solar Electricity Logo" className="h-20 w-20 object-contain" />
              <span className="text-xl font-bold">Saksham Solar Electricity</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's trusted solar energy partner. Helping homes and businesses 
              save up to 90% on electricity bills with clean, renewable energy.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <span className="text-xs font-bold">𝕏</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <span className="text-xs font-bold">📷</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <span className="text-xs font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/calculator" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Solar Calculator</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Pricing Plans</Link></li>
              <li><Link to="/subsidy" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Govt Subsidy</Link></li>
              <li><Link to="/finance" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">EMI Options</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Our Projects</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 mt-0.5" />
                <span className="text-gray-400 text-sm">+91 99235 19061</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 mt-0.5" />
                <span className="text-gray-400 text-sm">prashant@sakshamsolar.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/Swio5zF3MCdoRazF9" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">
                  Gaddatoli Shivaji Nagar, near Bajaj hospital Gondia
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © 2025 Saksham Solar Electricity. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Designed & Developed by{' '}
              <a
                href="https://www.omkeshsinghthakur.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
              >
                Omkesh AI Lab
              </a>
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-yellow-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
