import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Leadership', path: '/about' },
        { name: 'Vision & Mission', path: '/about' },
        { name: 'Sustainability', path: '/about' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Digital Transformation', path: '/services' },
        { name: 'Cybersecurity', path: '/services' },
        { name: 'Cloud & DevOps', path: '/services' },
        { name: 'Data & Analytics', path: '/services' },
        { name: 'Risk & Compliance', path: '/services' },
        { name: 'IT Advisory', path: '/services' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { name: 'Finance', path: '/industries' },
        { name: 'Healthcare', path: '/industries' },
        { name: 'Retail', path: '/industries' },
        { name: 'Manufacturing', path: '/industries' },
        { name: 'Education', path: '/industries' },
        { name: 'Logistics', path: '/industries' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Insights', path: '/insights' },
        { name: 'Whitepapers', path: '/insights' },
        { name: 'Podcast', path: '/insights' },
        { name: 'News & Updates', path: '/insights' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Support', path: '/contact' },
        { name: 'FAQs', path: '/contact' },
        { name: 'Helpdesk', path: '/contact' },
        { name: 'Client Portal', path: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Youtube, url: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-blue-orange text-white" data-testid="main-footer">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-bold text-xl" style={{ color: '#002C5F' }}>
                T
              </div>
              <span className="text-2xl font-bold">Trine Solutions</span>
            </div>
            <p className="text-sm mb-6 opacity-90 leading-relaxed">
              Driving digital excellence with intelligent solutions. Your trusted partner in enterprise transformation.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Innovation Drive, Tech Park, Silicon Valley, CA 94025</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@trinesolutions.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm opacity-90 hover:opacity-100 hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm opacity-90">
              © {new Date().getFullYear()} Trine Solutions. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4" data-testid="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`social-${social.label.toLowerCase()}`}
                  className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="#" className="opacity-90 hover:opacity-100 transition-opacity" data-testid="privacy-policy-link">
                Privacy Policy
              </Link>
              <Link to="#" className="opacity-90 hover:opacity-100 transition-opacity" data-testid="terms-link">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;