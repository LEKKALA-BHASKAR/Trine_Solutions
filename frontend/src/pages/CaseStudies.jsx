import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowRight, ExternalLink } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [selectedStudy, setSelectedStudy] = useState(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get(`${API}/case-studies`);
        setCaseStudies(response.data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
      }
    };
    fetchCaseStudies();
  }, []);

  return (
    <div className="min-h-screen" data-testid="case-studies-page">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-orange-blue opacity-90"></div>
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
                className="glass-card overflow-hidden group cursor-pointer"
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
                  <span className="text-sm text-orange-500 font-semibold uppercase">{study.industry}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{study.title}</h3>
                  <p className="text-sm opacity-80 mb-4 line-clamp-2">{study.challenge}</p>
                  <button className="text-orange-500 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
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
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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
              <span className="text-sm text-orange-500 font-semibold uppercase">{selectedStudy.industry}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{selectedStudy.title}</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Challenge</h3>
                  <p className="opacity-80 leading-relaxed">{selectedStudy.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Solution</h3>
                  <p className="opacity-80 leading-relaxed">{selectedStudy.solution}</p>
                </div>

                {selectedStudy.technologies && selectedStudy.technologies.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedStudy.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 glass text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold mb-3">Results & Impact</h3>
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