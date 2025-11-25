import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

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
    { icon: Facebook, url: '#', label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, url: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: Linkedin, url: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: Instagram, url: '#', label: 'Instagram', color: '#E4405F' },
    { icon: Youtube, url: '#', label: 'YouTube', color: '#FF0000' },
  ];

  return (
    <footer className="relative overflow-hidden" data-testid="main-footer" role="contentinfo" aria-label="Site footer">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" aria-hidden="true"></div>
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-orange-blue flex items-center justify-center font-bold text-2xl text-white shadow-xl" aria-hidden="true">
                T
              </div>
              <span className="text-2xl font-bold text-white">Trine Solutions</span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-base">
              Driving digital excellence with intelligent solutions. Your trusted partner in enterprise transformation.
            </p>
            <address className="space-y-4 text-gray-300 not-italic">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-400 group-hover:text-orange-300 transition-colors" aria-hidden="true" />
                <span className="group-hover:text-white transition-colors">123 Innovation Drive, Tech Park, Silicon Valley, CA 94025</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Phone className="w-5 h-5 flex-shrink-0 text-orange-400 group-hover:text-orange-300 transition-colors" aria-hidden="true" />
                <a href="tel:+15551234567" className="group-hover:text-white transition-colors">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Mail className="w-5 h-5 flex-shrink-0 text-orange-400 group-hover:text-orange-300 transition-colors" aria-hidden="true" />
                <a href="mailto:info@trinesolutions.com" className="group-hover:text-white transition-colors">info@trinesolutions.com</a>
              </div>
            </address>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <nav key={index} aria-labelledby={`footer-section-${index}`}>
              <h3 id={`footer-section-${index}`} className="text-white text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300" aria-hidden="true" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="glass-card p-8 rounded-3xl mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-white text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for the latest insights and updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-orange-500 transition-colors min-w-[300px]"
              />
              <button className="px-8 py-3 rounded-full bg-gradient-orange-blue text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Trine Solutions. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4" data-testid="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`social-${social.label.toLowerCase()}`}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors" data-testid="privacy-policy-link">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors" data-testid="terms-link">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;