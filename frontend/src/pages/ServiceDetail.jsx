import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowRight, ArrowLeft, CheckCircle2, Zap, Shield, Cloud, Server, Database, Lock, Globe, Code, Settings } from 'lucide-react';
import { iconMap, getIconByName } from '@/utils/serviceIcons';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
const API = `${BACKEND_URL}/api`;

// Default service data for fallback
const defaultServicesData = {
  'digital-transformation': {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    icon: 'Zap',
    description: 'Accelerate your business evolution with comprehensive digital transformation strategies that modernize operations, enhance customer experiences, and drive innovation.',
    fullDescription: 'Our Digital Transformation services help organizations reimagine their business models, processes, and customer experiences for the digital age. We combine strategic consulting with hands-on implementation to deliver measurable results.',
    capabilities: [
      'Business Process Automation',
      'Digital Strategy Development',
      'Legacy System Modernization',
      'Customer Experience Optimization',
      'Data-Driven Decision Making',
      'Digital Workplace Solutions'
    ],
    tools: ['AWS', 'Azure', 'Google Cloud', 'Salesforce', 'ServiceNow', 'Power Platform'],
    benefits: [
      '40% improvement in operational efficiency',
      '60% faster time-to-market',
      '50% reduction in manual processes',
      '35% increase in customer satisfaction'
    ],
    useCases: [
      'Enterprise Resource Planning (ERP) modernization',
      'Customer Relationship Management (CRM) implementation',
      'Business Intelligence and Analytics platforms',
      'Workflow automation and optimization'
    ]
  },
  'cloud-solutions': {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    icon: 'Cloud',
    description: 'Harness the power of cloud computing with scalable, secure, and cost-effective solutions that enable agility and innovation.',
    fullDescription: 'Our Cloud Solutions services provide end-to-end cloud adoption and optimization strategies. From migration planning to managed services, we help you leverage cloud technologies to achieve your business objectives.',
    capabilities: [
      'Cloud Migration & Strategy',
      'Multi-Cloud Architecture',
      'Cloud Security & Compliance',
      'Serverless Computing',
      'Container Orchestration',
      'Cloud Cost Optimization'
    ],
    tools: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Kubernetes', 'Docker', 'Terraform'],
    benefits: [
      '50% reduction in infrastructure costs',
      '99.99% uptime achieved',
      '70% faster deployment cycles',
      '40% improvement in scalability'
    ],
    useCases: [
      'Enterprise cloud migration',
      'Hybrid cloud deployments',
      'Cloud-native application development',
      'Disaster recovery and business continuity'
    ]
  },
  'ai-ml': {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: 'Cpu',
    description: 'Transform your business with intelligent solutions powered by artificial intelligence and machine learning technologies.',
    fullDescription: 'Our AI & ML services help organizations harness the power of artificial intelligence to automate processes, gain insights from data, and create intelligent applications that drive competitive advantage.',
    capabilities: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Machine Learning Models',
      'AI-Powered Automation',
      'Intelligent Chatbots'
    ],
    tools: ['TensorFlow', 'PyTorch', 'OpenAI', 'Azure AI', 'AWS SageMaker', 'Google AI'],
    benefits: [
      '60% improvement in prediction accuracy',
      '45% reduction in manual data processing',
      '3x faster decision making',
      '50% increase in customer engagement'
    ],
    useCases: [
      'Fraud detection and prevention',
      'Customer sentiment analysis',
      'Demand forecasting',
      'Automated document processing'
    ]
  },
  'cybersecurity': {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'Shield',
    description: 'Protect your organization with comprehensive security solutions that safeguard your data, systems, and reputation.',
    fullDescription: 'Our Cybersecurity services provide enterprise-grade protection against evolving threats. We implement defense-in-depth strategies that protect your assets while enabling business agility.',
    capabilities: [
      'Security Assessment & Auditing',
      'Threat Detection & Response',
      'Identity & Access Management',
      'Data Protection & Encryption',
      'Compliance & Governance',
      'Security Operations Center (SOC)'
    ],
    tools: ['Splunk', 'CrowdStrike', 'Palo Alto', 'Microsoft Sentinel', 'Okta', 'HashiCorp Vault'],
    benefits: [
      '90% reduction in security incidents',
      '100% compliance achievement',
      '70% faster threat detection',
      '50% reduction in breach costs'
    ],
    useCases: [
      'Zero trust architecture implementation',
      'Security compliance (SOC 2, HIPAA, PCI-DSS)',
      'Incident response planning',
      'Security awareness training'
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchService();
  }, [slug]);

  const fetchService = async () => {
    try {
      setLoading(true);
      // Try to fetch from API first
      const response = await axios.get(`${API}/services/${slug}`);
      setService(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching service:', err);
      // Fall back to default data
      const defaultService = defaultServicesData[slug];
      if (defaultService) {
        setService(defaultService);
        setError(null);
      } else {
        setError('Service not found');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-green-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-green-50 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Back to Services
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = getIconByName(service.icon);
  const serviceData = defaultServicesData[slug] || {};
  const fullDescription = service.fullDescription || serviceData.fullDescription || service.description;
  const benefits = service.benefits || serviceData.benefits || [];
  const useCases = service.useCases || serviceData.useCases || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-green-500/30"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Services</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Icon className="w-5 h-5 text-orange-400" />
              <span className="text-white font-semibold">Enterprise Solution</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              {fullDescription}
            </p>

            <Link to="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      {service.capabilities && service.capabilities.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-green-50 to-orange-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                  Key Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions to address your business challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {service.capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-800 font-semibold">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tools & Technologies Section */}
      {service.tools && service.tools.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
                  Technologies We Use
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-leading tools and platforms powering our solutions
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {service.tools.map((tool, index) => (
                <div key={index} className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all hover:scale-105 cursor-default">
                  <span className="text-white font-semibold">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                  Business Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable results that drive business growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-gradient-to-br from-green-50 to-orange-50 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-800 font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {useCases.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-orange-50 to-green-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                  Use Cases
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world applications of our {service.title} solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {useCases.map((useCase, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{useCase}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/95">
            Let's discuss how our {service.title.toLowerCase()} solutions can transform your business and drive growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <button className="px-10 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/services">
              <button className="px-10 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                Explore Other Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
