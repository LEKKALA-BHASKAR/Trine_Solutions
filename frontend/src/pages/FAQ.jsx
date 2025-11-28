import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, Phone, Mail, ArrowRight, Zap, Shield, Cloud, Users } from 'lucide-react';
import SEO, { pageSEO, structuredDataSchemas } from '@/components/SEO';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState({});

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'services', name: 'Services', icon: Zap },
    { id: 'pricing', name: 'Pricing & Billing', icon: Shield },
    { id: 'technical', name: 'Technical', icon: Cloud },
    { id: 'support', name: 'Support', icon: Users },
  ];

  const faqs = [
    // Services
    {
      id: 1,
      category: 'services',
      question: 'What services does Trine Solutions offer?',
      answer: 'Trine Solutions offers a comprehensive range of digital transformation services including: Digital Transformation Consulting, Cloud Solutions (AWS, Azure, Google Cloud), AI & Machine Learning, Cybersecurity Solutions, Custom Software Development, and IT Infrastructure Management. We tailor our services to meet the specific needs of each client across various industries.'
    },
    {
      id: 2,
      category: 'services',
      question: 'Which industries do you serve?',
      answer: 'We serve a wide range of industries including Telecommunications, Healthcare, Banking & Finance, Manufacturing, Retail & E-Commerce, Education, Logistics & Transportation, and Media & Broadcasting. Our team has deep domain expertise in each of these sectors, allowing us to deliver solutions that address industry-specific challenges.'
    },
    {
      id: 3,
      category: 'services',
      question: 'How do you approach digital transformation projects?',
      answer: 'Our approach follows a structured methodology: 1) Discovery - We analyze your current state and understand business goals. 2) Strategy - We design a tailored roadmap aligned with your objectives. 3) Implementation - We execute with precision using agile methodologies. 4) Optimization - We provide continuous improvement and support. This ensures successful outcomes and sustainable results.'
    },
    {
      id: 4,
      category: 'services',
      question: 'Can you help migrate our existing systems to the cloud?',
      answer: 'Absolutely! Cloud migration is one of our core specialties. We provide end-to-end cloud migration services including assessment, planning, execution, and post-migration optimization. We work with all major cloud platforms (AWS, Azure, GCP) and can help you choose the best solution based on your specific requirements, whether it\'s a lift-and-shift, re-platforming, or complete re-architecture approach.'
    },
    // Pricing & Billing
    {
      id: 5,
      category: 'pricing',
      question: 'How do you structure your pricing?',
      answer: 'We offer flexible pricing models to accommodate different needs: Fixed Price for well-defined projects with clear scope, Time & Materials for projects requiring flexibility, Retainer agreements for ongoing support and consultation, and Outcome-based pricing for specific deliverables. We provide detailed proposals after understanding your requirements.'
    },
    {
      id: 6,
      category: 'pricing',
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer a complimentary initial consultation to understand your business needs and challenges. During this session, we\'ll discuss your goals, current pain points, and potential solutions. This helps us provide you with a tailored proposal that addresses your specific requirements.'
    },
    {
      id: 7,
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, credit cards, and ACH payments. Payment terms are typically outlined in the service agreement and may vary based on project size and duration. We can also accommodate milestone-based payments for larger projects.'
    },
    {
      id: 8,
      category: 'pricing',
      question: 'Are there any hidden fees in your services?',
      answer: 'No, we believe in complete transparency. All costs are clearly outlined in our proposals and service agreements. Any additional work or change requests are discussed and approved before implementation, with associated costs communicated upfront.'
    },
    // Technical
    {
      id: 9,
      category: 'technical',
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in a wide range of modern technologies including: Cloud Platforms (AWS, Azure, GCP), AI/ML frameworks (TensorFlow, PyTorch), Programming languages (Python, JavaScript, Java, .NET), DevOps tools (Kubernetes, Docker, Jenkins), Data platforms (Snowflake, Databricks), and Security tools (Splunk, CrowdStrike). Our team stays current with emerging technologies to provide cutting-edge solutions.'
    },
    {
      id: 10,
      category: 'technical',
      question: 'How do you ensure the security of our data?',
      answer: 'Security is paramount in everything we do. We implement multiple layers of protection including: encryption at rest and in transit, role-based access controls, regular security audits and penetration testing, compliance with industry standards (SOC 2, HIPAA, PCI-DSS as applicable), secure development practices, and continuous monitoring. We also sign NDAs and follow strict data handling protocols.'
    },
    {
      id: 11,
      category: 'technical',
      question: 'Do you provide documentation and knowledge transfer?',
      answer: 'Yes, comprehensive documentation and knowledge transfer are integral parts of our delivery process. We provide detailed technical documentation, user guides, architectural diagrams, and conduct training sessions to ensure your team can effectively manage and maintain the solutions we build.'
    },
    {
      id: 12,
      category: 'technical',
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We have extensive experience integrating with various enterprise systems including ERPs (SAP, Oracle), CRMs (Salesforce, HubSpot), legacy applications, and third-party APIs. We design solutions that work seamlessly with your existing technology stack while enabling modernization.'
    },
    // Support
    {
      id: 13,
      category: 'support',
      question: 'What kind of support do you provide after project completion?',
      answer: 'We offer comprehensive post-implementation support including: 24/7 monitoring and incident response, regular maintenance and updates, performance optimization, bug fixes and troubleshooting, feature enhancements, and dedicated account management. Support packages can be customized based on your needs.'
    },
    {
      id: 14,
      category: 'support',
      question: 'How quickly do you respond to support requests?',
      answer: 'Our response times vary based on the severity of the issue: Critical issues (system down) - Within 1 hour, High priority issues - Within 4 hours, Medium priority - Within 8 business hours, Low priority - Within 24 business hours. We also provide escalation paths for urgent matters.'
    },
    {
      id: 15,
      category: 'support',
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs tailored to your team\'s needs. This includes hands-on training sessions, video tutorials, documentation, and ongoing coaching. We ensure your team has the skills and knowledge to effectively use and manage the solutions we implement.'
    },
    {
      id: 16,
      category: 'support',
      question: 'How can I reach your support team?',
      answer: 'You can reach our support team through multiple channels: Phone support during business hours, Email support (24/7 with guaranteed response times), Dedicated support portal for ticket management, Emergency hotline for critical issues. Contact details are provided in your service agreement.'
    },
  ];

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Generate FAQ schema for structured data
  const faqSchemaData = structuredDataSchemas.faqPage(faqs);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <SEO 
        {...pageSEO.faq}
        canonicalUrl="https://trinesolutions.com/faq"
        structuredData={faqSchemaData}
        breadcrumbs={[
          { name: 'Home', url: 'https://trinesolutions.com/' },
          { name: 'FAQ', url: 'https://trinesolutions.com/faq' }
        ]}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-400/20 via-transparent to-black/30"></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative z-10 text-center text-white px-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8 shadow-xl">
            <HelpCircle className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold tracking-wide">Help Center</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            Frequently Asked Questions
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto mb-12 text-white/90">
            Find answers to common questions about our services, pricing, and support.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-5 pr-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300 text-lg"
              />
              <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-gray-200 sticky top-0 z-30">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container max-w-4xl px-6">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</span>
                    {expandedItems[faq.id] ? (
                      <ChevronUp className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedItems[faq.id] && (
                    <div className="px-6 pb-5">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="container max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600">
              Can't find what you're looking for? Our team is here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/contact" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Send a Message</h3>
                <p className="text-gray-600 mb-4">Fill out our contact form and we'll get back to you within 2 hours.</p>
                <span className="text-orange-600 font-semibold flex items-center justify-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <a href="tel:+14252025165" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team during business hours.</p>
                <span className="text-green-600 font-semibold">+1 (425) 202-5165</span>
              </div>
            </a>

            <a href="mailto:trine@trinesolutions.com" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-green-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us an email anytime and we'll respond promptly.</p>
                <span className="text-orange-600 font-semibold">trine@trinesolutions.com</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container relative z-10 text-center text-white px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss how Trine Solutions can help you achieve your digital transformation goals.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2 mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
