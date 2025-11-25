import { useEffect, useState } from 'react';
import axios from 'axios';
import { Target, Eye, Award, Users, Globe2, TrendingUp } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(`${API}/team`);
        setTeam(response.data);
      } catch (error) {
        console.error('Error fetching team:', error);
      }
    };
    fetchTeam();
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Expert Consultants' },
    { icon: Globe2, value: '30+', label: 'Countries Served' },
    { icon: Award, value: '200+', label: 'Projects Delivered' },
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
  ];

  const timeline = [
    { year: '2015', event: 'Company Founded', description: 'Started with a vision to transform enterprise technology' },
    { year: '2017', event: 'Global Expansion', description: 'Opened offices in Europe and Asia' },
    { year: '2019', event: 'Cloud Excellence', description: 'Achieved premier partnership status with major cloud providers' },
    { year: '2021', event: 'AI Innovation', description: 'Launched AI and Machine Learning practice' },
    { year: '2023', event: 'Sustainability Leader', description: 'Recognized for sustainable IT practices' },
    { year: '2025', event: 'Continued Growth', description: 'Expanding services in quantum computing and edge AI' },
  ];

  const certifications = [
    'ISO 27001', 'ISO 9001', 'AWS Advanced Partner', 'Microsoft Gold Partner', 
    'Google Cloud Partner', 'SOC 2 Type II', 'PCI DSS', 'HIPAA Compliant'
  ];

  return (
    <div className="min-h-screen" data-testid="about-page">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-blue-orange opacity-90"></div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" data-testid="about-hero-title">
            Transforming Enterprises Since 2015
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-95 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We are a global team of innovators, strategists, and technologists dedicated to driving digital excellence.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-subtle">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-8 text-center" data-testid={`stat-card-${index}`}>
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <div className="text-4xl font-bold mb-2 text-gradient">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-10" data-testid="vision-card">
              <div className="w-16 h-16 rounded-2xl bg-gradient-orange-blue flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg opacity-80 leading-relaxed">
                To be the world's most trusted partner in enterprise digital transformation, empowering organizations to achieve sustainable growth through innovative technology solutions.
              </p>
            </div>
            <div className="glass-card p-10" data-testid="mission-card">
              <div className="w-16 h-16 rounded-2xl bg-gradient-orange-blue flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg opacity-80 leading-relaxed">
                To deliver cutting-edge solutions that drive operational excellence, enhance security, and accelerate innovation while maintaining the highest standards of quality and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 gradient-subtle">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" data-testid="timeline-title">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-orange-blue hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} data-testid={`timeline-item-${index}`}>
                  <div className="flex-1 md:text-right md:pr-12">
                    {index % 2 === 0 && (
                      <div className="glass-card p-6">
                        <div className="text-2xl font-bold text-orange-500 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                        <p className="opacity-80">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="w-6 h-6 rounded-full bg-gradient-orange-blue border-4 border-white dark:border-gray-900 z-10 hidden md:block"></div>
                  <div className="flex-1 md:pl-12">
                    {index % 2 !== 0 && (
                      <div className="glass-card p-6">
                        <div className="text-2xl font-bold text-orange-500 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                        <p className="opacity-80">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" data-testid="team-title">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={member.id} className="glass-card overflow-hidden group" data-testid={`team-member-${index}`}>
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-orange-500 font-semibold mb-3">{member.position}</p>
                  <p className="text-sm opacity-80">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 gradient-subtle">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" data-testid="certifications-title">Certifications & Partnerships</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center group hover:bg-gradient-orange-blue hover:text-white transition-all duration-300"
                data-testid={`certification-${index}`}
              >
                <Award className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <p className="text-sm font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" data-testid="culture-title">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8" data-testid="culture-innovation">
              <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
              <p className="opacity-80 leading-relaxed">
                We foster a culture of continuous learning and experimentation, encouraging our team to push boundaries and explore new technologies.
              </p>
            </div>
            <div className="glass-card p-8" data-testid="culture-collaboration">
              <h3 className="text-2xl font-bold mb-4">Collaborative Spirit</h3>
              <p className="opacity-80 leading-relaxed">
                Our success is built on teamwork, diversity, and the collective expertise of professionals from around the world.
              </p>
            </div>
            <div className="glass-card p-8" data-testid="culture-impact">
              <h3 className="text-2xl font-bold mb-4">Meaningful Impact</h3>
              <p className="opacity-80 leading-relaxed">
                We're committed to delivering solutions that create lasting value for our clients and contribute to a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;