import { Link } from 'react-router-dom';
import { Home, Building, Factory, CheckCircle, MapPin, Zap } from 'lucide-react';
import CountUp from '../components/CountUp';

const projects = [
  {
    id: 1,
    title: 'Residential Installation - Gondia',
    category: 'residential',
    size: '3 kW',
    location: 'Gondia, Maharashtra',
    savings: '₹4,500/month',
    image: '🏠',
    description: 'Complete rooftop solar installation for a 3BHK home with net metering',
    features: ['12 Solar Panels', '3kW Inverter', 'Net Meter Installed', 'Mobile Monitoring'],
  },
  {
    id: 2,
    title: 'Commercial Setup - Bhandara',
    category: 'commercial',
    size: '10 kW',
    location: 'Bhandara, Maharashtra',
    savings: '₹15,000/month',
    image: '🏢',
    description: 'Solar installation for office building with battery backup option',
    features: ['40 Solar Panels', '10kW Inverter', 'Battery Backup', 'Priority Support'],
  },
  {
    id: 3,
    title: 'Industrial Project - Tumsar',
    category: 'industrial',
    size: '50 kW',
    location: 'Tumsar, Maharashtra',
    savings: '₹75,000/month',
    image: '🏭',
    description: 'Large-scale solar installation for manufacturing unit',
    features: ['200+ Solar Panels', '50kW Inverter', 'SCADA System', 'AMC Included'],
  },
  {
    id: 4,
    title: 'Farm Solar Pump - Gondia',
    category: 'agricultural',
    size: '5 HP',
    location: 'Gondia, Maharashtra',
    savings: '₹8,000/month',
    image: '🚜',
    description: 'Solar water pump installation replacing diesel pump',
    features: ['5 HP Solar Pump', 'Panel Array', 'Pump Controller', 'PM-KUSUM Subsidy'],
  },
  {
    id: 5,
    title: 'Residential Installation - Bhandara',
    category: 'residential',
    size: '5 kW',
    location: 'Bhandara, Maharashtra',
    savings: '₹7,500/month',
    image: '🏡',
    description: 'Premium solar system for large independent house',
    features: ['20 Solar Panels', '5kW Inverter', 'Hybrid System', 'App Monitoring'],
  },
  {
    id: 6,
    title: 'School Solar Project - Nagpur',
    category: 'commercial',
    size: '25 kW',
    location: 'Nagpur, Maharashtra',
    savings: '₹35,000/month',
    image: '🏫',
    description: 'Solar installation for educational institution',
    features: ['100 Solar Panels', '25kW Inverter', 'Net Metering', 'Educational Demo'],
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 25, suffix: '+ MW', label: 'Total Capacity' },
  { value: 15, suffix: '+', label: 'Cities Covered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="h-4 w-4" />
            <span>Our Portfolio</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Completed Solar Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our successful installations across residential, commercial, and industrial segments
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 text-center text-white">
              <div className="text-4xl font-bold mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-yellow-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Projects', icon: Zap },
            { id: 'residential', label: 'Residential', icon: Home },
            { id: 'commercial', label: 'Commercial', icon: Building },
            { id: 'industrial', label: 'Industrial', icon: Factory },
            { id: 'agricultural', label: 'Agricultural', icon: Factory },
          ].map((cat) => (
            <button
              key={cat.id}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl border-2 border-gray-200 font-medium text-gray-600 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
            >
              <cat.icon className="h-5 w-5" />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 h-48 flex items-center justify-center">
                <span className="text-8xl">{project.image}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-gray-500">System Size</div>
                    <div className="font-semibold text-gray-900">{project.size}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Monthly Savings</div>
                    <div className="font-bold text-green-600">{project.savings}</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Installation Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Site Survey', desc: 'Free assessment of your property' },
              { step: '2', title: 'Design', desc: 'Custom system design & proposal' },
              { step: '3', title: 'Approval', desc: 'DISCOM & subsidy approval' },
              { step: '4', title: 'Installation', desc: 'Professional installation' },
              { step: '5', title: 'Commissioning', desc: 'Net meter & system activation' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white border-2 border-yellow-400 text-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Highlight */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 mb-16 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-4">⭐⭐⭐⭐⭐</div>
            <blockquote className="text-2xl font-medium mb-6">
              "Saksham Solar Electricity installed a 5kW system at our factory. The team was professional, 
              installation was quick, and we're already seeing 70% reduction in electricity bills!"
            </blockquote>
            <div>
              <div className="font-bold text-lg">Mahesh Agrawal</div>
              <div className="text-yellow-100">Owner, Agrawal Rice Mill, Gondia</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Happy Customers?</h2>
          <p className="text-xl text-gray-600 mb-8">Get your solar installation done by experts</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculator"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all"
            >
              Calculate Your Savings
            </Link>
            <Link
              to="/contact"
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
