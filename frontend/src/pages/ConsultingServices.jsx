import { Link } from 'react-router-dom';
import { Users, Briefcase, Calendar, FileText, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';

const ConsultingServices = () => {
  const services = [
    {
      id: 'contingent-staffing',
      title: 'Contingent Staffing',
      description: 'Flexible staffing solutions to meet your temporary and project-based needs. We provide top-tier talent to help you scale your workforce efficiently.',
      icon: Users,
      path: '/consulting/contingent-staffing',
      features: ['Rapid Deployment', 'Scalable Workforce', 'Vetted Professionals', 'Cost-Effective']
    },
    {
      id: 'permanent-hiring',
      title: 'Permanent Hiring',
      description: 'Find the perfect long-term additions to your team. Our rigorous screening process ensures you get candidates who fit your culture and technical requirements.',
      icon: Briefcase,
      path: '/consulting/permanent-hiring',
      features: ['Executive Search', 'Cultural Fit Assessment', 'Technical Screening', 'Retention Focus']
    },
    {
      id: 'contract-to-hire',
      title: 'Contract to Hire',
      description: 'Evaluate talent on the job before making a long-term commitment. Reduce hiring risks while ensuring the candidate is the right match for your organization.',
      icon: Calendar,
      path: '/consulting/contract-to-hire',
      features: ['Risk Mitigation', 'Performance Evaluation', 'Seamless Transition', 'Flexible Terms']
    },
    {
      id: 'statement-of-work',
      title: 'Statement of Work',
      description: 'Outcome-based project delivery. We take responsibility for deliverables and milestones, allowing you to focus on your core business objectives.',
      icon: FileText,
      path: '/consulting/statement-of-work',
      features: ['Defined Deliverables', 'Milestone Tracking', 'Project Management', 'Quality Assurance']
    },
    {
      id: 'managed-services',
      title: 'Managed Services',
      description: 'Comprehensive management of your IT operations and specific business functions. Improve efficiency and reduce operational overhead.',
      icon: Settings,
      path: '/consulting/managed-services',
      features: ['24/7 Support', 'SLA Adherence', 'Process Optimization', 'Strategic Partnership']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SEO 
        title="Consulting Services - Trine Solutions"
        description="Expert consulting services including Contingent Staffing, Permanent Hiring, Contract to Hire, Statement of Work, and Managed Services."
        canonicalUrl="https://trinesolutions.com/consulting"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Strategic Consulting Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-100">
            Empowering your business with specialized talent and strategic solutions to drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={service.path}
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Optimize Your Workforce?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your specific needs and find the right consulting solution for your business.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ConsultingServices;
