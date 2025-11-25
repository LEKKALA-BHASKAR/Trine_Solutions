import { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, User, Tag, Search, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Mock blog posts data
const mockBlogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise: 2025 and Beyond',
    excerpt: 'Discover how artificial intelligence is reshaping enterprise operations and what businesses need to prepare for the AI-driven future.',
    author: 'Dr. Sarah Mitchell',
    date: 'Nov 20, 2024',
    readTime: '8 min read',
    category: 'AI & Innovation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800'
  },
  {
    id: 2,
    title: 'Zero Trust Security: A Complete Implementation Guide',
    excerpt: 'Learn how to implement zero trust architecture to protect your organization from modern cyber threats.',
    author: 'Michael Chen',
    date: 'Nov 18, 2024',
    readTime: '12 min read',
    category: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800'
  },
  {
    id: 3,
    title: 'Multi-Cloud Strategy: Best Practices for 2025',
    excerpt: 'A comprehensive guide to building and managing a multi-cloud infrastructure for enterprise scalability.',
    author: 'Emily Rodriguez',
    date: 'Nov 15, 2024',
    readTime: '10 min read',
    category: 'Cloud Computing',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800'
  },
  {
    id: 4,
    title: 'Digital Transformation Success Stories',
    excerpt: 'Real-world case studies of successful digital transformation initiatives and key lessons learned.',
    author: 'James Wilson',
    date: 'Nov 12, 2024',
    readTime: '7 min read',
    category: 'Digital Transformation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
  },
  {
    id: 5,
    title: 'GDPR and Beyond: Navigating Global Data Privacy',
    excerpt: 'Understanding the evolving landscape of data privacy regulations and how to stay compliant.',
    author: 'Lisa Park',
    date: 'Nov 10, 2024',
    readTime: '9 min read',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800'
  }
];

const Insights = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(`${API}/blog`);
        const posts = response.data.length > 0 ? response.data : mockBlogPosts;
        setBlogPosts(posts);
        setFilteredPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setBlogPosts(mockBlogPosts);
        setFilteredPosts(mockBlogPosts);
      }
    };
    fetchBlogPosts();
  }, []);

  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery, blogPosts]);

  const categories = ['All', 'AI & Innovation', 'Cybersecurity', 'Cloud Computing', 'Compliance', 'Digital Transformation'];

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen" data-testid="insights-page">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-trine-black via-gray-900 to-trine-black"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 bg-trine-orange rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-trine-lightblue rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in-up">
            <TrendingUp className="w-4 h-4 text-trine-orange" />
            <span className="text-sm font-medium">Latest Insights & Thought Leadership</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up" data-testid="insights-hero-title" style={{ animationDelay: '0.1s' }}>
            Stories That Inspire Innovation
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Expert perspectives on technology trends, best practices, and industry innovations from our team of thought leaders.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="flex flex-col gap-8">
            {/* Search */}
            <div className="max-w-2xl mx-auto w-full">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search insights, articles, and topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="insights-search-input"
                  className="w-full pl-14 pr-6 py-4 rounded-2xl glass-card text-lg outline-none focus:ring-2 focus:ring-trine-orange transition-all"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-trine-orange to-trine-lightblue text-white shadow-lg scale-105'
                      : 'glass-card hover:scale-105 hover:shadow-md hover:border-trine-orange/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 gradient-subtle">
          <div className="container">
            <div className="flex items-center space-x-3 mb-12">
              <div className="w-1 h-8 bg-gradient-to-b from-trine-orange to-trine-lightblue rounded-full"></div>
              <h2 className="text-3xl font-bold text-trine-black">Featured Article</h2>
            </div>
            <div className="relative overflow-hidden rounded-3xl" data-testid="featured-post">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-3 h-[400px] md:h-auto overflow-hidden relative group">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trine-black/60 to-transparent"></div>
                </div>
                <div className="md:col-span-2 bg-white dark:bg-gray-900 p-10 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-trine-orange/10 text-trine-orange font-semibold text-sm mb-4 w-fit">
                    <Tag className="w-3 h-3" />
                    <span>{featuredPost.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-trine-black">{featuredPost.title}</h3>
                  <p className="text-lg opacity-80 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm opacity-70 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="btn-primary flex items-center space-x-2 group w-fit">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-trine-lightblue to-trine-green rounded-full"></div>
            <h2 className="text-3xl font-bold text-trine-black">Latest Insights</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article key={post.id} className="group cursor-pointer" data-testid={`blog-post-${index}`}>
                <div className="relative overflow-hidden rounded-2xl mb-5 h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-semibold text-trine-orange">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-trine-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-trine-orange transition-colors line-clamp-2 text-trine-black">
                    {post.title}
                  </h3>
                  <p className="text-base opacity-70 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm opacity-60 pt-3 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="text-trine-lightblue font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300 pt-2">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trine-orange via-trine-lightblue to-trine-green"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-trine-green rounded-full filter blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Join 50,000+ Subscribers</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="newsletter-title">
              Never Miss an Insight
            </h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Get exclusive access to expert perspectives, industry trends, and actionable strategies delivered directly to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                data-testid="newsletter-email-input"
                className="flex-1 px-8 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 outline-none focus:bg-white/30 transition-all text-lg"
              />
              <button className="px-10 py-4 rounded-full bg-white text-trine-orange font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl" data-testid="newsletter-subscribe-btn">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm opacity-75 mt-6">
              No spam, unsubscribe anytime. Read our <a href="#" className="underline hover:text-white">privacy policy</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;