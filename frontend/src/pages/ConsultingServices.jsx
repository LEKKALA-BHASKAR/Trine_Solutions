import { Link } from 'react-router-dom';
import { Users, Briefcase, Calendar, FileText, Settings, ArrowRight, CheckCircle2, Star, Zap, Target, Shield, Globe } from 'lucide-react';
import SEO from '@/components/SEO';

const ConsultingServices = () => {
  const services = [
    {
      id: 'contingent-staffing',
      title: 'Contingent Staffing',
      description: 'Flexible staffing solutions to meet your temporary and project-based needs. We provide top-tier talent to help you scale your workforce efficiently.',
      icon: Users,
      path: '/consulting/contingent-staffing',
      features: ['Rapid Deployment', 'Scalable Workforce', 'Vetted Professionals', 'Cost-Effective'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-500/10 to-red-500/10',
      stats: '500+ Placements'
    },
    {
      id: 'permanent-hiring',
      title: 'Permanent Hiring',
      description: 'Find the perfect long-term additions to your team. Our rigorous screening process ensures you get candidates who fit your culture and technical requirements.',
      icon: Briefcase,
      path: '/consulting/permanent-hiring',
      features: ['Executive Search', 'Cultural Fit Assessment', 'Technical Screening', 'Retention Focus'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-500/10 to-emerald-500/10',
      stats: '92% Success Rate'
    },
    {
      id: 'contract-to-hire',
      title: 'Contract to Hire',
      description: 'Evaluate talent on the job before making a long-term commitment. Reduce hiring risks while ensuring the candidate is the right match for your organization.',
      icon: Calendar,
      path: '/consulting/contract-to-hire',
      features: ['Risk Mitigation', 'Performance Evaluation', 'Seamless Transition', 'Flexible Terms'],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
      stats: '85% Conversion Rate'
    },
    {
      id: 'statement-of-work',
      title: 'Statement of Work',
      description: 'Outcome-based project delivery. We take responsibility for deliverables and milestones, allowing you to focus on your core business objectives.',
      icon: FileText,
      path: '/consulting/statement-of-work',
      features: ['Defined Deliverables', 'Milestone Tracking', 'Project Management', 'Quality Assurance'],
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-indigo-500/10',
      stats: '50+ Projects'
    },
    {
      id: 'managed-services',
      title: 'Managed Services',
      description: 'Comprehensive management of your IT operations and specific business functions. Improve efficiency and reduce operational overhead.',
      icon: Settings,
      path: '/consulting/managed-services',
      features: ['24/7 Support', 'SLA Adherence', 'Process Optimization', 'Strategic Partnership'],
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-violet-500/10 to-purple-500/10',
      stats: '99.9% Uptime'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-cyan-950/20">
      <SEO 
        title="Consulting Services - Trine Solutions"
        description="Expert consulting services including Contingent Staffing, Permanent Hiring, Contract to Hire, Statement of Work, and Managed Services."
        canonicalUrl="https://trinesolutions.com/consulting"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-black/20"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Target className="w-4 h-4 text-cyan-300" />
                <span className="text-sm font-medium text-white">Strategic Consulting Solutions</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Consulting
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed text-white">
                Empower your business with specialized talent, strategic solutions, and proven expertise 
                to drive transformation and sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                    Schedule Consultation
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative hidden lg:flex justify-center items-center">
              <img 
                src="/sample-Group1810.svg" 
                alt="Consulting Services Illustration" 
                className="w-full h-auto max-w-[600px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" />
              Our Service Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Strategic <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Consulting</span> Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the right engagement model for your unique business needs and drive sustainable growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Stats */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                        {service.stats}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link 
                      to={service.path}
                      className={`inline-flex items-center justify-center w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${service.color} text-white shadow-lg hover:shadow-xl hover:scale-105`}
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                    <div className="absolute inset-[2px] rounded-3xl bg-white dark:bg-gray-900"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/20"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center text-white">
          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            Ready to Transform
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-200 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-12 opacity-90 leading-relaxed">
            Partner with Trine Solutions to find the perfect consulting solution for your unique business needs. 
            Let us help you achieve exceptional results and drive sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <button className="px-12 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingServices;