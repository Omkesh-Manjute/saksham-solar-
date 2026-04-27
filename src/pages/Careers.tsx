import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Zap, CheckCircle, Upload, MapPin, Clock, TrendingUp } from 'lucide-react';

const vacancies = [
  {
    id: 1,
    title: 'Solar Electrician',
    type: 'Full-time',
    experience: '1-3 years',
    location: 'Gondia',
    salary: '₹15,000 - ₹25,000',
    openings: 5,
    description: 'Install and maintain solar panels, inverters, and electrical systems.',
    requirements: ['ITI Electrician', 'Solar installation experience', 'Valid driving license'],
  },
  {
    id: 2,
    title: 'Solar Installer',
    type: 'Full-time',
    experience: 'Freshers welcome',
    location: 'Multiple Cities',
    salary: '₹12,000 - ₹20,000',
    openings: 10,
    description: 'Assist in solar panel installation and system setup at customer sites.',
    requirements: ['10th/12th pass', 'Willing to travel', 'Physical fitness'],
  },
  {
    id: 3,
    title: 'Sales Executive',
    type: 'Full-time',
    experience: '1-2 years',
    location: 'Gondia, Bhandara',
    salary: '₹20,000 - ₹35,000 + Incentives',
    openings: 3,
    description: 'Generate leads, conduct site surveys, and close solar sales.',
    requirements: ['Graduate', 'Sales experience', 'Good communication skills'],
  },
  {
    id: 4,
    title: 'Project Manager',
    type: 'Full-time',
    experience: '3-5 years',
    location: 'Gondia',
    salary: '₹40,000 - ₹60,000',
    openings: 2,
    description: 'Manage solar installation projects from planning to commissioning.',
    requirements: ['Engineering degree', 'Project management experience', 'Team leadership'],
  },
  {
    id: 5,
    title: 'Service Technician',
    type: 'Full-time',
    experience: '2-4 years',
    location: 'All Locations',
    salary: '₹18,000 - ₹30,000',
    openings: 4,
    description: 'Provide after-sales service and maintenance for installed systems.',
    requirements: ['ITI/Diploma', 'Troubleshooting skills', 'Customer service oriented'],
  },
];

const benefits = [
  { icon: TrendingUp, title: 'Career Growth', desc: 'Clear growth path with training programs' },
  { icon: Clock, title: 'Work-Life Balance', desc: 'Flexible working hours' },
  { icon: Users, title: 'Great Team', desc: 'Work with industry experts' },
  { icon: Zap, title: 'Impact', desc: 'Contribute to green energy mission' },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    location: '',
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Job application:', { jobId: selectedJob, ...formData });
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase className="h-4 w-4" />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Build Your Career in Solar
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of India's renewable energy revolution. We're hiring passionate individuals 
            across multiple roles.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { value: '100+', label: 'Team Members' },
            { value: '15+', label: 'Open Positions' },
            { value: '500+', label: 'Hires Since 2020' },
            { value: '95%', label: 'Retention Rate' },
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-6 text-center text-white">
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-purple-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Work With Us?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
          <div className="space-y-4">
            {vacancies.map((job) => (
              <div
                key={job.id}
                className={`bg-white border-2 rounded-2xl overflow-hidden transition-all ${
                  selectedJob === job.id ? 'border-purple-400 shadow-lg' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                          {job.openings} Openings
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.type}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.experience}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">{job.salary}</div>
                      <button className="text-purple-600 font-medium text-sm hover:underline mt-1">
                        {selectedJob === job.id ? 'Close Details' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>

                {selectedJob === job.id && (
                  <div className="border-t border-gray-100 p-6 bg-gray-50">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Job Description</h4>
                        <p className="text-gray-600 text-sm">{job.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedJob(job.id)}
                      className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        {selectedJob && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply for this Position</h2>
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        placeholder="e.g., 2 years"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Location *
                    </label>
                    <select
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    >
                      <option value="">Select location</option>
                      <option value="Gondia">Gondia</option>
                      <option value="Bhandara">Bhandara</option>
                      <option value="Balaghat">Balaghat</option>
                      <option value="Tumsar">Tumsar</option>
                      <option value="Nagpur">Nagpur</option>
                      <option value="Any">Any Location</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume (PDF/DOC)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 text-sm">
                        Drag and drop your resume here, or{' '}
                        <label className="text-purple-600 cursor-pointer hover:underline">
                          browse
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                            className="hidden"
                          />
                        </label>
                      </p>
                      <p className="text-gray-400 text-xs mt-1">Max file size: 5MB</p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all"
                  >
                    Submit Application
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for applying. Our HR team will review your application and 
                    contact you within 3-5 business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedJob(null);
                      setFormData({ name: '', phone: '', email: '', experience: '', location: '', resume: null });
                    }}
                    className="text-purple-600 font-medium hover:underline"
                  >
                    Apply for another position
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Role?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented individuals. Send us your resume!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all"
          >
            Contact HR Team
          </Link>
        </div>
      </div>
    </div>
  );
}
