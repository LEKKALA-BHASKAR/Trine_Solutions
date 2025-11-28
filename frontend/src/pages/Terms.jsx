import { Link } from 'react-router-dom';
import { FileText, Scale, AlertTriangle, CheckCircle, Shield, Users, Globe, Mail, ArrowRight, Ban, CreditCard, Copyright } from 'lucide-react';

const Terms = () => {
  const lastUpdated = 'November 28, 2024';

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        {
          text: 'By accessing and using the Trine Solutions website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.'
        },
        {
          text: 'We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of the website following any changes indicates your acceptance of the new Terms of Service.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: Globe,
      content: [
        {
          subtitle: 'Services Provided',
          text: 'Trine Solutions provides digital transformation consulting, cloud solutions, AI/ML services, cybersecurity solutions, and related technology services. Our services are designed to help businesses modernize their operations and achieve their digital goals.'
        },
        {
          subtitle: 'Service Availability',
          text: 'We strive to ensure our services are available 24/7, but we do not guarantee uninterrupted access. We may modify, suspend, or discontinue any part of our services at any time without liability.'
        }
      ]
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      icon: Users,
      content: [
        {
          subtitle: 'Accurate Information',
          text: 'You agree to provide accurate, current, and complete information when using our services or contacting us. You are responsible for maintaining the confidentiality of any account credentials.'
        },
        {
          subtitle: 'Lawful Use',
          text: 'You agree to use our website and services only for lawful purposes and in accordance with these Terms of Service. You shall not use our services in any way that violates any applicable federal, state, local, or international law or regulation.'
        },
        {
          subtitle: 'Prohibited Activities',
          text: 'You may not: (a) use our services for any illegal purpose; (b) attempt to gain unauthorized access to our systems; (c) interfere with or disrupt our services; (d) transmit any viruses or malicious code; (e) engage in any activity that could damage our reputation.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: Copyright,
      content: [
        {
          subtitle: 'Ownership',
          text: 'All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of Trine Solutions or its licensors and are protected by copyright, trademark, and other intellectual property laws.'
        },
        {
          subtitle: 'Limited License',
          text: 'We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. This license does not include the right to modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from our website.'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Payment Terms',
      icon: CreditCard,
      content: [
        {
          subtitle: 'Fees and Payment',
          text: 'Fees for our services are outlined in separate service agreements. All fees are due in accordance with the payment terms specified in your service agreement. We reserve the right to change our fees upon reasonable notice.'
        },
        {
          subtitle: 'Refund Policy',
          text: 'Refund policies are specified in individual service agreements. Generally, fees for services rendered are non-refundable unless otherwise stated in your specific agreement.'
        }
      ]
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Disclaimer',
          text: 'OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.'
        },
        {
          subtitle: 'Limitation',
          text: 'IN NO EVENT SHALL TRINE SOLUTIONS, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.'
        },
        {
          subtitle: 'Maximum Liability',
          text: 'Our total liability to you for any damages shall not exceed the amount paid by you, if any, for using our services during the twelve (12) months prior to the cause of action.'
        }
      ]
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      icon: Shield,
      content: [
        {
          text: 'You agree to defend, indemnify, and hold harmless Trine Solutions, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys\' fees) arising out of or relating to your violation of these Terms of Service or your use of our services.'
        }
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: Ban,
      content: [
        {
          subtitle: 'Termination Rights',
          text: 'We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, your right to use our services will immediately cease. All provisions of these Terms of Service which by their nature should survive termination shall survive termination.'
        }
      ]
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: Scale,
      content: [
        {
          text: 'These Terms of Service shall be governed by and construed in accordance with the laws of the State of Washington, United States, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in King County, Washington.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
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
            <FileText className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold tracking-wide">Legal Agreement</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            Terms of Service
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Please read these terms carefully before using our website and services.
          </p>
          
          <p className="text-sm text-white/70">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container max-w-4xl px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              Welcome to Trine Solutions. These Terms of Service ("Terms") govern your access to and use of our 
              website, products, and services. By accessing or using our services, you agree to be bound by these 
              Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or 
              use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="container max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Table of Contents</h2>
          <nav className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-gray-700 group-hover:text-green-600 transition-colors font-medium text-sm">
                  {section.title}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16">
        <div className="container max-w-4xl px-6 space-y-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                      {item.subtitle && (
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.subtitle}</h3>
                      )}
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container relative z-10 text-center text-white px-6">
          <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            If you have any questions about these Terms of Service, please contact us. 
            We're here to help clarify any concerns you may have.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-bold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2 mx-auto">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Terms;
