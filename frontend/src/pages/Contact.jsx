import { useState } from 'react';
import axios from 'axios';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Thank you! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive, Tech Park, CA 94025',
      phone: '+1 (555) 123-4567',
      email: 'sf@trinesolutions.com',
    },
    {
      city: 'New York',
      address: '456 Business Avenue, Manhattan, NY 10001',
      phone: '+1 (555) 234-5678',
      email: 'ny@trinesolutions.com',
    },
    {
      city: 'London',
      address: '789 Tech Street, Canary Wharf, London E14 5AB',
      phone: '+44 20 1234 5678',
      email: 'london@trinesolutions.com',
    },
  ];

  const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We serve Banking, Healthcare, Manufacturing, Retail, Education, and Logistics sectors with specialized solutions.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity, typically ranging from 3-12 months for enterprise implementations.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we provide 24/7 managed IT services and ongoing support packages to ensure your systems run smoothly.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and retainer-based engagements.',
    },
  ];

  return (
    <div className="min-h-screen" data-testid="contact-page">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-trine-green via-trine-lightblue to-trine-green"></div>
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-20 left-20 w-72 h-72 bg-trine-orange rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" data-testid="contact-hero-title">
            Let's Start a Conversation
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-95 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Get in touch with our team to discuss how we can help transform your business.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass-card p-8 md:p-12 rounded-3xl hover:border-trine-orange/30 transition-all duration-300" data-testid="contact-form">
              <h2 className="text-3xl font-bold mb-8 text-trine-black">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="contact-name-input"
                    className="w-full px-6 py-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 outline-none focus:border-trine-orange focus:ring-2 focus:ring-trine-orange/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="contact-email-input"
                    className="w-full px-6 py-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 outline-none focus:border-trine-orange focus:ring-2 focus:ring-trine-orange/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    data-testid="contact-company-input"
                    className="w-full px-6 py-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 outline-none focus:border-trine-orange focus:ring-2 focus:ring-trine-orange/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    data-testid="contact-message-input"
                    className="w-full px-6 py-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 outline-none focus:border-trine-orange focus:ring-2 focus:ring-trine-orange/20 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="contact-submit-btn"
                  className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-trine-black">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-trine-orange to-trine-lightblue flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-trine-black">Phone</h3>
                      <p className="opacity-80">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-trine-lightblue to-trine-green flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-trine-black">Email</h3>
                      <p className="opacity-80">info@trinesolutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-trine-green to-trine-orange flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-trine-black">Headquarters</h3>
                      <p className="opacity-80">123 Innovation Drive, Tech Park<br />Silicon Valley, CA 94025</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="glass-card p-8 rounded-3xl hover:border-trine-lightblue/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-trine-black">Office Locations</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="pb-6 border-b border-gray-300 dark:border-gray-700 last:border-0" data-testid={`office-${index}`}>
                      <h4 className="font-bold text-lg mb-2 text-trine-orange">{office.city}</h4>
                      <p className="text-sm opacity-80 mb-1">{office.address}</p>
                      <p className="text-sm opacity-80 mb-1">{office.phone}</p>
                      <p className="text-sm opacity-80">{office.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 gradient-subtle">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" data-testid="faq-title">
            <span className="bg-gradient-to-r from-trine-orange to-trine-lightblue bg-clip-text text-transparent">Frequently Asked Questions</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover:border-trine-green/30 transition-all duration-300" data-testid={`faq-${index}`}>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-trine-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-trine-black">{faq.question}</h3>
                    <p className="opacity-80 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gradient-to-br from-trine-lightblue/10 to-trine-green/10">
        <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <MapPin className="w-16 h-16 mr-4 text-trine-orange" />
          <span className="text-2xl font-semibold">Interactive Map</span>
        </div>
      </section>
    </div>
  );
};

export default Contact;