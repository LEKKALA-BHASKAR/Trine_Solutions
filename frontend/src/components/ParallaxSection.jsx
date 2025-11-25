import { useEffect, useState, useRef } from 'react';

/**
 * ParallaxSection - A reusable parallax scrolling section component
 * 
 * @param {string} backgroundImage - Background image URL
 * @param {number} speed - Parallax speed (0.1 - 1, default 0.5)
 * @param {string} overlayColor - Overlay gradient colors
 * @param {boolean} fixed - Whether to use fixed background
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Section content
 */
const ParallaxSection = ({
  backgroundImage,
  speed = 0.5,
  overlayColor = 'from-trine-black/80 via-trine-black/60 to-trine-green/20',
  fixed = false,
  className = '',
  minHeight = 'min-h-[60vh]',
  children,
}) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const sectionTop = rect.top + scrolled;
      const parallaxOffset = (scrolled - sectionTop) * speed;
      
      setOffset(parallaxOffset);
      
      // Check if section is visible
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section 
      ref={sectionRef}
      className={`relative overflow-hidden ${minHeight} ${className}`}
    >
      {/* Parallax Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center ${fixed ? 'bg-fixed' : ''}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: fixed ? 'none' : `translateY(${offset}px)`,
        }}
        aria-hidden="true"
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${overlayColor}`} />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-trine-orange rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-trine-green rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 h-full flex items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
