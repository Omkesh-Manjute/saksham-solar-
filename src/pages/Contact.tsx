import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    monthlyBill: '',
    roofType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const submissionData = new FormData();
    submissionData.append("access_key", "d71d3cf1-978b-4032-a372-f760fb5fb3dd");
    submissionData.append("subject", `New Contact Form Submission from ${formData.name}`);
    submissionData.append("from_name", "Saksham Solar Website");
    
    // Add all form fields
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', city: '', monthlyBill: '', roofType: '', message: '' });
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="h-4 w-4" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about solar? Our experts are here to help you with free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="h-6 w-6" />
                <h3 className="font-semibold text-lg">Call Us</h3>
              </div>
              <p className="text-yellow-100 mb-2">Speak to our solar experts</p>
              <a href="tel:+919923519061" className="text-2xl font-bold hover:underline">
                +91 99235 19061
              </a>
              <p className="text-sm text-yellow-100 mt-2">Mon-Sat, 9AM-7PM</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="h-6 w-6" />
                <h3 className="font-semibold text-lg">WhatsApp</h3>
              </div>
              <p className="text-green-100 mb-2">Chat with us instantly</p>
              <a
                href="https://wa.me/919923519061"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold hover:underline"
              >
                Start Conversation
              </a>
              <p className="text-sm text-green-100 mt-2">Quick response guaranteed</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="h-6 w-6" />
                <h3 className="font-semibold text-lg">Email Us</h3>
              </div>
              <p className="text-blue-100 mb-2">Send us your queries</p>
              <a href="mailto:prashant@sakshamsolar.com" className="text-lg font-bold hover:underline">
                prashant@sakshamsolar.com
              </a>
              <p className="text-sm text-blue-100 mt-2">Response within 24 hours</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white overflow-y-auto max-h-[300px]">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6" />
                <h3 className="font-semibold text-lg">Visit Us</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-1">Main Office</h4>
                  <a href="https://maps.app.goo.gl/Swio5zF3MCdoRazF9" target="_blank" rel="noopener noreferrer" className="block text-purple-100 text-sm hover:text-white transition-colors">
                    Gaddatoli Shivaji Nagar,<br />
                    near Bajaj hospital Gondia.
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">2nd Office</h4>
                  <p className="text-purple-100 text-sm">
                    Saksham Solar Electricity,<br />
                    TVS showroom Ke samne,<br />
                    fulchur naka, Gondia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <select
                        required
                        name="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      >
                        <option value="">Select your city</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Gondia">Gondia</option>
                        <option value="Bhandara">Bhandara</option>
                        <option value="Chandrapur">Chandrapur</option>
                        <option value="Amravati">Amravati</option>
                        <option value="Wardha">Wardha</option>
                        <option value="Yavatmal">Yavatmal</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Electricity Bill (₹)
                      </label>
                      <input
                        type="number"
                        name="monthlyBill"
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="e.g., 3000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Roof Type
                      </label>
                      <select
                        name="roofType"
                        value={formData.roofType}
                        onChange={(e) => setFormData({ ...formData, roofType: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      >
                        <option value="">Select roof type</option>
                        <option value="terrace">Terrace (RCC)</option>
                        <option value="tilted">Tiled Roof</option>
                        <option value="metal">Metal Sheet</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                      placeholder="Tell us about your solar requirements..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been received. Our solar expert will contact you 
                    within 24 hours to discuss your requirements.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', city: '', monthlyBill: '', roofType: '', message: '' });
                    }}
                    className="text-yellow-600 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Service Areas</h2>
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Local Districts</h3>
                <p className="text-gray-600 text-sm">Gondia, Bhandara, Tumsar, Tirora</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Vidarbha Region</h3>
                <p className="text-gray-600 text-sm">Nagpur, Amravati, Wardha</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-16 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Business Hours</h2>
              <p className="text-gray-300 mb-6">
                Visit our office or call us during business hours for immediate assistance
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-6 mb-4">
                <Clock className="h-12 w-12 mx-auto mb-3" />
                <p className="text-lg font-semibold">Emergency Support</p>
                <p className="text-gray-300 text-sm">Available 24/7 for existing customers</p>
              </div>
              <a
                href="tel:+919923519061"
                className="inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-gray-100 p-4 rounded-xl text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
              <span className="font-bold">f</span>
            </a>
            <a href="#" className="bg-gray-100 p-4 rounded-xl text-gray-600 hover:bg-gray-900 hover:text-white transition-colors">
              <span className="font-bold">𝕏</span>
            </a>
            <a href="#" className="bg-gray-100 p-4 rounded-xl text-gray-600 hover:bg-pink-600 hover:text-white transition-colors">
              <span className="font-bold">📷</span>
            </a>
            <a href="#" className="bg-gray-100 p-4 rounded-xl text-gray-600 hover:bg-blue-700 hover:text-white transition-colors">
              <span className="font-bold">in</span>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Go Solar?</h2>
          <p className="text-xl text-gray-600 mb-8">Get a free consultation and custom quote today</p>
          <Link
            to="/calculator"
            className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all"
          >
            Calculate Your Savings
          </Link>
        </div>
      </div>
    </div>
  );
}
