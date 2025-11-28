import { Link } from 'react-router-dom';
import { Shield, FileText, Lock, Eye, Database, Users, Globe, Mail, CheckCircle, ArrowRight } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = 'November 28, 2024';

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We may collect personal information that you provide directly to us, including but not limited to: name, email address, phone number, company name, job title, and any other information you choose to provide when contacting us, subscribing to our newsletter, or using our services.'
        },
        {
          subtitle: 'Automatically Collected Information',
          text: 'When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the site, and information about how you interact with the site.'
        },
        {
          subtitle: 'Cookies and Tracking Technologies',
          text: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'We use the information we collect to provide, maintain, and improve our services, to process transactions, send you related information, and provide customer support.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your information to communicate with you about products, services, offers, promotions, and events, and provide other news and information about us and our partners. You can opt-out of receiving promotional communications at any time.'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We use the information to monitor and analyze trends, usage, and activities in connection with our services, and to improve and personalize the services.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Users,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with third-party service providers who perform services on our behalf, such as web hosting, data analysis, payment processing, email delivery, and customer service.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business, your information may be transferred as part of that transaction.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.'
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: Shield,
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain processing of your information.'
        },
        {
          subtitle: 'Data Portability',
          text: 'Where applicable, you have the right to receive a copy of your personal information in a structured, machine-readable format.'
        },
        {
          subtitle: 'Opt-Out',
          text: 'You may opt out of receiving promotional communications from us by following the instructions in those messages or by contacting us directly. Even if you opt out, we may still send you non-promotional communications.'
        }
      ]
    },
    {
      id: 'international',
      title: 'International Data Transfers',
      icon: Globe,
      content: [
        {
          subtitle: 'Cross-Border Transfers',
          text: 'Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place for such transfers.'
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
            <Shield className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold tracking-wide">Your Privacy Matters</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
            We are committed to protecting your privacy and ensuring the security of your personal information.
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
              At Trine Solutions, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you visit our website or use our services. Please read this privacy policy carefully. If you do 
              not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="container max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Table of Contents</h2>
          <nav className="grid md:grid-cols-2 gap-3">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-gray-700 group-hover:text-orange-600 transition-colors font-medium">
                  {section.title}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16">
        <div className="container max-w-4xl px-6 space-y-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.subtitle}</h3>
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
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container relative z-10 text-center text-white px-6">
          <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            If you have any questions or concerns about this Privacy Policy or our data practices, 
            please don't hesitate to contact us.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2 mx-auto">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
