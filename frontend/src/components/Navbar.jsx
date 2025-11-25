import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Moon, Sun, Globe, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode, language, setLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        data-testid="main-navbar"
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'w-[95%] lg:w-[90%]' : 'w-[98%] lg:w-[95%]'
        }`}
      >
        <div className="glass rounded-[30px] px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" data-testid="logo-link">
              <div className="w-10 h-10 rounded-xl bg-gradient-orange-blue flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="text-xl font-bold hidden sm:block" style={{ color: darkMode ? '#F5F5F5' : '#002C5F' }}>
                Trine Solutions
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-gradient-orange-blue text-white'
                      : 'hover:bg-opacity-10 hover:bg-gray-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                data-testid="search-button"
                className="p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-all duration-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                data-testid="theme-toggle"
                className="p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Language Selector */}
              <div className="relative hidden sm:block">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  data-testid="language-selector"
                  className="appearance-none bg-transparent pl-8 pr-3 py-2 rounded-full text-sm font-medium cursor-pointer outline-none hover:bg-opacity-10 hover:bg-gray-500 transition-all duration-300"
                >
                  <option value="EN">EN</option>
                  <option value="ES">ES</option>
                  <option value="FR">FR</option>
                  <option value="DE">DE</option>
                </select>
                <Globe className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="mobile-menu-toggle"
                className="lg:hidden p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[60] flex items-start justify-center pt-32" onClick={() => setSearchOpen(false)}>
          <div className="glass rounded-3xl p-6 w-[90%] max-w-2xl" onClick={(e) => e.stopPropagation()} data-testid="search-overlay">
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for services, insights, or solutions..."
                data-testid="search-input"
                className="flex-1 bg-transparent outline-none text-lg"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[55] lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="glass absolute right-4 top-20 w-[calc(100%-2rem)] max-w-sm rounded-3xl p-6"
            onClick={(e) => e.stopPropagation()}
            data-testid="mobile-menu"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-gradient-orange-blue text-white'
                      : 'hover:bg-opacity-10 hover:bg-gray-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;