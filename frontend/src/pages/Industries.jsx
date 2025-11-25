import { Building2, Heart, ShoppingBag, Factory, GraduationCap, Truck } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      name: 'Banking & Finance',
      description: 'Digital banking solutions, risk management, regulatory compliance, and fraud detection systems.',
      image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800',
      solutions: ['Core Banking Modernization', 'Payment Processing', 'Wealth Management', 'Compliance Automation'],
      impact: ['40% faster transaction processing', '60% reduction in compliance costs', '99.9% uptime achieved'],
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'Patient care optimization, electronic health records, telemedicine platforms, and medical IoT solutions.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
      solutions: ['EHR Integration', 'Telemedicine Platforms', 'Medical Imaging AI', 'Patient Data Security'],
      impact: ['50% improvement in patient outcomes', 'HIPAA compliance achieved', '30% operational cost reduction'],
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Smart factory solutions, predictive maintenance, supply chain optimization, and quality control systems.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      solutions: ['Industrial IoT', 'Predictive Maintenance', 'Supply Chain Visibility', 'Quality Automation'],
      impact: ['35% increase in production efficiency', '45% reduction in downtime', '$5M annual savings'],
    },
    {
      icon: ShoppingBag,
      name: 'Retail & E-Commerce',
      description: 'Omnichannel commerce, inventory management, customer analytics, and personalized shopping experiences.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      solutions: ['E-commerce Platforms', 'Inventory Optimization', 'Customer Analytics', 'Personalization AI'],
      impact: ['55% increase in online sales', '40% improvement in customer retention', '25% cart abandonment reduction'],
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Learning management systems, virtual classrooms, student analytics, and educational content platforms.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      solutions: ['LMS Implementation', 'Virtual Learning', 'Student Performance Analytics', 'Administrative Automation'],
      impact: ['75% increase in student engagement', '50% administrative time saved', 'Global reach expansion'],
    },
    {
      icon: Truck,
      name: 'Logistics & Transportation',
      description: 'Fleet management, route optimization, real-time tracking, and warehouse automation solutions.',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800',
      solutions: ['Fleet Management', 'Route Optimization', 'Warehouse Automation', 'Real-time Tracking'],
      impact: ['30% fuel cost reduction', '50% faster delivery times', '99% on-time delivery rate'],
    },
  ];

  return (
    <div className="min-h-screen" data-testid="industries-page">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-blue-orange opacity-90"></div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" data-testid="industries-hero-title">
            Industry-Specific Expertise
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-95 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Deep domain knowledge and tailored solutions for your industry's unique challenges.
          </p>
        </div>
      </section>

      {/* Industries Detail */}
      {industries.map((industry, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={index}
            className={`py-20 ${isEven ? 'gradient-subtle' : ''}`}
            data-testid={`industry-section-${index}`}
          >
            <div className="container">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                <div className={!isEven ? 'md:col-start-2' : ''}>
                  <div className="w-20 h-20 rounded-3xl bg-gradient-orange-blue flex items-center justify-center mb-6">
                    <industry.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">{industry.name}</h2>
                  <p className="text-lg opacity-80 mb-8 leading-relaxed">{industry.description}</p>

                  {/* Solutions */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Our Solutions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industry.solutions.map((solution, idx) => (
                        <div key={idx} className="glass-card px-4 py-3 text-sm font-medium">
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Impact & Results</h3>
                    <div className="space-y-2">
                      {industry.impact.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                          <span className="opacity-80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={!isEven ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="glass-card p-4 rounded-3xl">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="rounded-2xl w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="industries-cta-title">
              Don't See Your Industry?
            </h2>
            <p className="text-lg opacity-80 mb-10">
              We work across many sectors. Let's discuss how we can help your specific business needs.
            </p>
            <button className="btn-primary" data-testid="industries-cta-btn">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;