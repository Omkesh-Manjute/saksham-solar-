import { Link } from 'react-router-dom';
import { Sun, Zap, Shield, TrendingUp, Award, CheckCircle, Star } from 'lucide-react';
import CountUp from '../components/CountUp';

const stats = [
  { value: 5000, suffix: '+', label: 'Happy Customers' },
  { value: 25, suffix: '+ MW', label: 'Solar Installed' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
];

const features = [
  {
    icon: Zap,
    title: 'Save Up to 90%',
    description: 'Reduce your electricity bills significantly with our efficient solar solutions.',
  },
  {
    icon: Shield,
    title: 'Govt Approved',
    description: 'All installations are government approved with subsidy benefits.',
  },
  {
    icon: TrendingUp,
    title: '25 Year Warranty',
    description: 'Long-term warranty on panels and comprehensive maintenance support.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only Tier-1 solar panels and components for maximum efficiency.',
  },
];

const testimonials = [
  {
    name: 'Sanjay Deshmukh',
    location: 'Gondia',
    image: '👨‍💼',
    rating: 5,
    text: 'Installed 3kW system in Gondia. My electricity bill dropped from ₹4500 to ₹800. Excellent service by Saksham Solar Electricity!',
  },
  {
    name: 'Vijay Patle',
    location: 'Nagpur',
    image: '🧑‍💼',
    rating: 5,
    text: 'Professional team, quick installation in Nagpur. The subsidy process was handled smoothly. Highly recommended!',
  },
  {
    name: 'Rahul Meshram',
    location: 'Bhandara',
    image: '🧑‍💼',
    rating: 5,
    text: 'Best investment for my home in Bhandara. The Saksham Solar Electricity team guided me through everything. Zero maintenance hassle.',
  },
  {
    name: 'Anita Bisen',
    location: 'Tumsar',
    image: '👩‍💼',
    rating: 5,
    text: 'Very happy with the solar installation at my shop in Tumsar. Significant savings on my commercial bill!',
  },
];

const pricingPlans = [
  {
    name: 'Basic',
    kw: '1kW',
    price: '₹65,000',
    afterSubsidy: '₹35,000',
    savings: '₹1,500/month',
    suitable: 'Small homes, 1-2 BHK',
  },
  {
    name: 'Standard',
    kw: '2kW',
    price: '₹1,45,000',
    afterSubsidy: '₹85,000',
    savings: '₹3,000/month',
    suitable: 'Medium homes, 2-3 BHK',
    popular: true,
  },
  {
    name: 'Premium',
    kw: '3kW',
    price: '₹2,00,000',
    afterSubsidy: '₹1,22,000',
    savings: '₹4,500/month',
    suitable: 'Large homes, 3+ BHK',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZjVlNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjQiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sun className="h-4 w-4" />
                <span>☀️ PM Surya Ghar Subsidy Available - Up to ₹78,000</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Save Up to{' '}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                  90%
                </span>{' '}
                on Electricity Bills
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Switch to clean, renewable solar energy and reduce your monthly expenses. 
                Get government subsidy up to ₹78,000 and start saving from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/calculator"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl text-center"
                >
                  Calculate Your Solar Cost
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-yellow-400 hover:text-yellow-600 transition-all text-center"
                >
                  Get Free Consultation
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600 text-sm">Govt Approved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600 text-sm">Subsidy Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600 text-sm">Easy EMI</span>
                </div>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl overflow-hidden group">
                <img 
                  src="https://apollo-power.com/wp-content/uploads/elementor/thumbs/V6A4488-1-r5zk45pp99ytbhthqna8oss5l4a4sn2nnbl1l3prsw.jpg" 
                  alt="Solar Installation" 
                  className="w-full h-auto rounded-2xl shadow-inner transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Savings Badge */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-bounce-slow">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Monthly Savings</div>
                      <div className="text-xl font-bold text-green-600">₹4,500+</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Label Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="font-bold text-xl">Premium Installation</h3>
                      <p className="text-gray-300 text-sm">Serving All Vidarbha</p>
                    </div>
                    <div className="bg-yellow-500 p-2 rounded-full shadow-lg">
                      <Sun className="h-6 w-6 text-white animate-spin-slow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Saksham Solar Electricity?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end solar solutions with the best quality and service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect solar system for your home with government subsidy
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                  plan.popular ? 'ring-2 ring-yellow-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="text-4xl font-bold text-yellow-600 my-2">{plan.kw}</div>
                  <p className="text-gray-500 text-sm">{plan.suitable}</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Original Price</span>
                    <span className="line-through">{plan.price}</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>After Subsidy</span>
                    <span>{plan.afterSubsidy}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Monthly Savings</span>
                    <span className="font-semibold">{plan.savings}</span>
                  </div>
                </div>
                <Link
                  to="/calculator"
                  className={`block w-full py-3 rounded-xl font-semibold text-center transition-colors ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/pricing"
              className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
            >
              View All Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">Trusted by 5000+ happy customers across India</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Get a free consultation and custom solar proposal for your home today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculator"
              className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-50 transition-colors"
            >
              Calculate Savings
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
