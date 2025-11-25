import { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, Zap, Award } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Consulting', 'Cybersecurity', 'Data Science', 'Operations'];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Cloud Architect',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$150k - $200k',
      description: 'Lead cloud transformation initiatives for enterprise clients.',
    },
    {
      id: 2,
      title: 'Cybersecurity Consultant',
      department: 'Cybersecurity',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Design and implement security solutions for Fortune 500 companies.',
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$130k - $180k',
      description: 'Build machine learning models and drive data-driven insights.',
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110k - $150k',
      description: 'Automate infrastructure and streamline CI/CD pipelines.',
    },
    {
      id: 5,
      title: 'Digital Transformation Consultant',
      department: 'Consulting',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$140k - $190k',
      description: 'Help clients navigate their digital transformation journey.',
    },
    {
      id: 6,
      title: 'Project Manager',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Manage complex enterprise technology projects.',
    },
  ];

  const filteredPositions = selectedDepartment === 'All'
    ? openPositions
    : openPositions.filter(pos => pos.department === selectedDepartment);

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and fitness programs',
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, performance bonuses, and equity options',
    },
    {
      icon: Zap,
      title: 'Professional Growth',
      description: 'Learning budgets, certifications, conferences, and mentorship programs',
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and generous PTO',
    },
  ];

  const values = [
    { icon: Award, title: 'Excellence', description: 'We strive for the highest quality in everything we do' },
    { icon: Users, title: 'Collaboration', description: 'Success is built on teamwork and diverse perspectives' },
    { icon: Zap, title: 'Innovation', description: 'We embrace new ideas and cutting-edge technologies' },
    { icon: Heart, title: 'Integrity', description: 'We operate with transparency, honesty, and accountability' },
  ];

  return (
    <div className="min-h-screen" data-testid="careers-page">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-orange-blue opacity-90"></div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" data-testid="careers-hero-title">
            Build Your Career with Us
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-95 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join a team of talented professionals shaping the future of enterprise technology.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 gradient-subtle">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" data-testid="why-join-title">Why Trine Solutions?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-8 text-center" data-testid={`benefit-${index}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-orange-blue flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="opacity-80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" data-testid="values-title">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center" data-testid={`value-${index}`}>
                <div className="w-20 h-20 rounded-full bg-gradient-orange-blue flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="opacity-80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 gradient-subtle">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8" data-testid="positions-title">Open Positions</h2>
          <p className="text-center text-lg opacity-80 mb-12">Find your next opportunity</p>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                data-testid={`department-${dept.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-gradient-orange-blue text-white'
                    : 'glass-card hover:scale-105'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Positions List */}
          <div className="max-w-5xl mx-auto space-y-6">
            {filteredPositions.map((position, index) => (
              <div key={position.id} className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300" data-testid={`position-${index}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <p className="opacity-80 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm opacity-70">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                  </div>
                  <button className="btn-primary" data-testid={`apply-btn-${index}`}>
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="careers-cta-title">
              Don't See the Right Role?
            </h2>
            <p className="text-lg opacity-80 mb-10">
              We're always looking for talented individuals. Send us your resume and let's talk.
            </p>
            <button className="btn-primary" data-testid="careers-cta-btn">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;