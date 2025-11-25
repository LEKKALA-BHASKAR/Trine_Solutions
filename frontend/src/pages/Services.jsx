import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowRight, Zap, Shield, Cloud, BarChart3, FileCheck, Wrench, CheckCircle2 } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const iconMap = {
  Zap,
  Shield,
  Cloud,
  BarChart3,
  FileCheck,
  Wrench,
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${API}/services`);
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen" data-testid="services-page">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-orange-blue opacity-90"></div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" data-testid="services-hero-title">
            Enterprise Solutions That Drive Results
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-95 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive services designed to accelerate your digital transformation and achieve sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => {
        const Icon = iconMap[service.icon] || Zap;
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            className={`py-20 ${isEven ? 'gradient-subtle' : ''}`}
            data-testid={`service-section-${index}`}
          >
            <div className="container">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                <div className={!isEven ? 'md:col-start-2' : ''}>
                  <div className="w-20 h-20 rounded-3xl bg-gradient-orange-blue flex items-center justify-center mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">{service.title}</h2>
                  <p className="text-lg opacity-80 mb-8 leading-relaxed">{service.description}</p>

                  {/* Capabilities */}
                  {service.capabilities && service.capabilities.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-4">Key Capabilities</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                            <span>{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tools */}
                  {service.tools && service.tools.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Technologies & Tools</h3>
                      <div className="flex flex-wrap gap-3">
                        {service.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 glass-card text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className={!isEven ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="glass-card p-8 rounded-3xl">
                    <img
                      src={`https://images.unsplash.com/photo-${[
                        '1551288049-bebda4e38f71',
                        '1563986768609-322da13575f3',
                        '1544197150-b99a580bb7a8',
                        '1551288049-bebda4e38f71',
                        '1450101499163-c8848c66ca85',
                        '1581091226825-a6a2a5aee158',
                      ][index % 6]}?w=800`}
                      alt={service.title}
                      className="rounded-2xl w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" data-testid="process-title">Our Approach</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your business goals and challenges' },
              { step: '02', title: 'Strategy', description: 'Design tailored solutions aligned with your objectives' },
              { step: '03', title: 'Implementation', description: 'Execute with precision using agile methodologies' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and support' },
            ].map((phase, index) => (
              <div key={index} className="glass-card p-8" data-testid={`process-step-${index}`}>
                <div className="text-5xl font-bold text-gradient mb-4">{phase.step}</div>
                <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                <p className="opacity-80">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-subtle">
        <div className="container text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="services-cta-title">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <button className="btn-primary flex items-center space-x-2 mx-auto" data-testid="services-cta-btn">
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;