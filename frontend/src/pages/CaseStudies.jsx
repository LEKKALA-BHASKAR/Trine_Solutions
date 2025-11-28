import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowRight, ExternalLink } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Mock case studies data
const mockCaseStudies = [
  {
    id: 1,
    title: 'Digital Banking Transformation',
    industry: 'Finance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    challenge: 'A major bank needed to modernize its legacy systems to compete with fintech disruptors.',
    solution: 'We implemented a cloud-native core banking platform with real-time payment processing capabilities.',
    results: '40% reduction in transaction time, 60% improvement in customer satisfaction, and $5M annual savings.',
    technologies: ['AWS', 'Kubernetes', 'React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 2,
    title: 'Healthcare Data Platform',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
    challenge: 'A healthcare network needed to unify patient data across 50+ facilities while maintaining HIPAA compliance.',
    solution: 'We built a secure, scalable data platform that integrates EHR systems and enables real-time analytics.',
    results: '50% faster patient diagnosis, 100% HIPAA compliance, and improved care coordination.',
    technologies: ['Azure', 'Python', 'TensorFlow', 'FHIR', 'Snowflake']
  },
  {
    id: 3,
    title: 'Smart Manufacturing IoT',
    industry: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    challenge: 'A global manufacturer needed predictive maintenance to reduce downtime across 100+ production lines.',
    solution: 'We deployed an IoT sensor network with ML-powered predictive analytics for equipment health.',
    results: '45% reduction in unplanned downtime, 30% increase in production efficiency, and $10M saved annually.',
    technologies: ['AWS IoT', 'Python', 'TensorFlow', 'Grafana', 'TimescaleDB']
  },
  {
    id: 4,
    title: 'E-commerce Platform Optimization',
    industry: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    challenge: 'A retail giant experienced performance issues and high cart abandonment rates during peak traffic.',
    solution: 'We rebuilt their e-commerce platform with microservices architecture and personalization AI.',
    results: '55% improvement in page load times, 25% reduction in cart abandonment, and 40% revenue increase.',
    technologies: ['React', 'Node.js', 'Redis', 'Elasticsearch', 'GCP']
  }
];

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [selectedStudy, setSelectedStudy] = useState(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get(`${API}/case-studies`);
        setCaseStudies(response.data.length > 0 ? response.data : mockCaseStudies);
      } catch (error) {
        console.error('Error fetching case studies:', error);
        setCaseStudies(mockCaseStudies);
      }
    };
    fetchCaseStudies();
  }, []);

  return (
    <div className="min-h-screen" data-testid="case-studies-page">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-trine-orange via-trine-orange/80 to-trine-lightblue"></div>
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-trine-green rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" data-testid="case-studies-hero-title">
            Success Stories
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-95 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Real results from real partnerships. Discover how we've helped businesses transform and thrive.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="glass-card overflow-hidden group cursor-pointer hover:border-trine-orange/30 transition-all duration-300"
                onClick={() => setSelectedStudy(study)}
                data-testid={`case-study-card-${index}`}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-trine-orange font-semibold uppercase">{study.industry}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 text-trine-black">{study.title}</h3>
                  <p className="text-sm opacity-80 mb-4 line-clamp-2">{study.challenge}</p>
                  <button className="text-trine-lightblue font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedStudy && (
        <div
          className="fixed inset-0 bg-trine-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStudy(null)}
          data-testid="case-study-modal"
        >
          <div
            className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-96 overflow-hidden rounded-t-3xl">
              <img
                src={selectedStudy.image}
                alt={selectedStudy.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-2xl font-bold hover:scale-110 transition-transform"
                data-testid="close-modal-btn"
              >
                ×
              </button>
            </div>
            <div className="p-8 md:p-12">
              <span className="text-sm text-trine-orange font-semibold uppercase">{selectedStudy.industry}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-trine-black">{selectedStudy.title}</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-trine-lightblue">Challenge</h3>
                  <p className="opacity-80 leading-relaxed">{selectedStudy.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-trine-green">Solution</h3>
                  <p className="opacity-80 leading-relaxed">{selectedStudy.solution}</p>
                </div>

                {selectedStudy.technologies && selectedStudy.technologies.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-trine-orange">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedStudy.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 glass text-sm font-medium rounded-full border border-trine-orange/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-trine-orange to-trine-lightblue bg-clip-text text-transparent">Results & Impact</h3>
                  <p className="opacity-80 leading-relaxed">{selectedStudy.results}</p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-300 dark:border-gray-700">
                <button className="btn-primary flex items-center space-x-2">
                  <span>Discuss Your Project</span>
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;