import { useState, useEffect } from 'react';
import { X, ZoomIn, ExternalLink, ChevronLeft, ChevronRight, Filter, Grid, Layers } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: 'Enterprise Cloud Migration',
    category: 'Cloud Solutions',
    client: 'Global Finance Corp',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
    description: 'Migrated legacy infrastructure to multi-cloud environment, achieving 99.99% uptime.',
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform'],
    results: ['40% cost reduction', '99.99% uptime', '3x faster deployment'],
  },
  {
    id: 2,
    title: 'AI-Powered Analytics Platform',
    category: 'Data Analytics',
    client: 'Retail Innovation Inc',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    description: 'Built real-time analytics dashboard with predictive ML models for inventory optimization.',
    technologies: ['Python', 'TensorFlow', 'React', 'BigQuery'],
    results: ['65% better forecasting', '30% inventory reduction', 'Real-time insights'],
  },
  {
    id: 3,
    title: 'Healthcare Data Security',
    category: 'Cybersecurity',
    client: 'MedCare Systems',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
    description: 'Implemented zero-trust security architecture ensuring HIPAA compliance.',
    technologies: ['Zero Trust', 'SIEM', 'IAM', 'Encryption'],
    results: ['100% HIPAA compliant', 'Zero breaches', '50% faster audits'],
  },
  {
    id: 4,
    title: 'Smart Factory IoT',
    category: 'Digital Transformation',
    client: 'Industrial Tech Co',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
    description: 'Deployed IoT sensors and ML-driven predictive maintenance across 50+ production lines.',
    technologies: ['IoT', 'Edge Computing', 'Python', 'Grafana'],
    results: ['45% less downtime', '30% efficiency gain', '$5M annual savings'],
  },
  {
    id: 5,
    title: 'E-commerce Platform Redesign',
    category: 'Web Development',
    client: 'Fashion Forward Ltd',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
    description: 'Complete platform rebuild with headless architecture and personalization engine.',
    technologies: ['Next.js', 'Node.js', 'GraphQL', 'Elasticsearch'],
    results: ['55% faster load time', '40% more conversions', '25% cart abandonment reduction'],
  },
  {
    id: 6,
    title: 'Banking App Modernization',
    category: 'Mobile Development',
    client: 'Digital Bank Plus',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
    description: 'Native mobile banking app with biometric auth and real-time transactions.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
    results: ['4.8 App Store rating', '2M+ downloads', '60% digital adoption'],
  },
  {
    id: 7,
    title: 'Supply Chain Optimization',
    category: 'Data Analytics',
    client: 'Global Logistics Inc',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400',
    description: 'End-to-end supply chain visibility platform with route optimization AI.',
    technologies: ['Python', 'Apache Kafka', 'React', 'MongoDB'],
    results: ['30% fuel savings', '50% faster deliveries', 'Real-time tracking'],
  },
  {
    id: 8,
    title: 'EdTech Learning Platform',
    category: 'Web Development',
    client: 'Learn Global Academy',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
    description: 'Scalable LMS with video streaming, live classes, and AI-powered assessments.',
    technologies: ['React', 'WebRTC', 'AWS', 'Node.js'],
    results: ['1M+ students', '95% completion rate', 'Global reach'],
  },
  {
    id: 9,
    title: 'DevOps Transformation',
    category: 'Cloud Solutions',
    client: 'Tech Startup Hub',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400',
    description: 'Implemented CI/CD pipelines, infrastructure as code, and monitoring solutions.',
    technologies: ['GitLab CI', 'Terraform', 'Prometheus', 'Kubernetes'],
    results: ['10x faster releases', '99.9% uptime', 'Zero manual deployments'],
  },
];

const categories = ['All', 'Cloud Solutions', 'Data Analytics', 'Cybersecurity', 'Digital Transformation', 'Web Development', 'Mobile Development'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === selectedCategory);

  const openLightbox = (project) => {
    setSelectedProject(project);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject?.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const prevProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject?.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedProject]);

  return (
    <div className="min-h-screen" data-testid="portfolio-page">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-trine-black/90 via-trine-black/70 to-trine-green/30"></div>
        </div>
        
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-20 left-20 w-96 h-96 bg-trine-orange rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-trine-green rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative z-10 text-center text-white">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Layers className="w-4 h-4 text-trine-orange" />
              <span className="text-sm font-semibold">Our Work</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6" data-testid="portfolio-hero-title">
              <span className="block text-white">Featured</span>
              <span className="block bg-gradient-to-r from-trine-orange via-trine-green to-trine-orange bg-clip-text text-transparent mt-2">
                Portfolio
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Explore our collection of successful projects that showcase our expertise in delivering 
              transformative digital solutions across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-trine-orange" />
            <span className="text-sm font-semibold text-gray-600">Filter by Category</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-trine-orange to-trine-green text-white shadow-lg scale-105'
                    : 'glass-card hover:scale-105 hover:shadow-md hover:border-trine-orange/30 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Portfolio Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {filteredProjects.map((project, index) => {
              // Vary heights for masonry effect
              const heightClass = index % 3 === 0 ? 'row-span-2' : '';
              const imageHeight = index % 3 === 0 ? 'h-80' : 'h-56';
              
              return (
                <article
                  key={project.id}
                  className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${heightClass}`}
                  onClick={() => openLightbox(project)}
                  data-testid={`portfolio-item-${index}`}
                >
                  {/* Image Container with Zoom Effect */}
                  <div className={`relative overflow-hidden ${imageHeight}`}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-trine-black via-trine-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-trine-orange/90 backdrop-blur-sm text-white text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-trine-black group-hover:text-trine-orange transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{project.client}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-trine-green/10 text-trine-green text-xs rounded-md font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedProject && (
        <div 
          className="fixed inset-0 bg-trine-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Project details"
          data-testid="portfolio-lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
            data-testid="close-lightbox-btn"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prevProject(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextProject(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div 
            className="max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 md:h-full min-h-[400px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-trine-black/50 to-transparent md:bg-gradient-to-r"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-trine-orange/10 text-trine-orange font-semibold text-sm mb-4">
                  {selectedProject.category}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-trine-black mb-2">
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-500 mb-6">{selectedProject.client}</p>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-trine-black mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-trine-orange/10 hover:text-trine-orange transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-trine-black mb-3">Key Results</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedProject.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-trine-green/5 rounded-xl"
                      >
                        <div className="w-2 h-2 rounded-full bg-trine-green"></div>
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-trine-orange to-trine-green text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                  <span>Start Your Project</span>
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trine-orange via-trine-orange to-trine-green"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-trine-green rounded-full filter blur-3xl"></div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="portfolio-cta-title">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and passion for excellence.
          </p>
          <button 
            className="px-10 py-4 rounded-full bg-white text-trine-orange font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
            data-testid="portfolio-cta-btn"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
