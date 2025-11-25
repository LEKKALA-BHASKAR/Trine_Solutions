import { useState, useEffect, useRef } from 'react';

/**
 * LazyImage - Optimized image loading with intersection observer
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 * @param {string} placeholder - Placeholder image or color
 * @param {string} className - Additional CSS classes
 * @param {boolean} blur - Whether to use blur-up effect
 * @param {object} props - Additional img props
 */
const LazyImage = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3Crect fill="%23F3F4F6"/%3E%3C/svg%3E',
  className = '',
  blur = true,
  aspectRatio,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${aspectRatio || ''} ${className}`}
    >
      {/* Placeholder / Loading State */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Animated gradient shimmer */}
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(247, 139, 31, 0.05), rgba(34, 197, 94, 0.05), transparent)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 2s infinite',
          }}
        />
      </div>

      {/* Actual Image */}
      {isInView && (
        <img
          src={hasError ? placeholder : src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded && !hasError
              ? 'opacity-100 scale-100'
              : blur
              ? 'opacity-0 scale-105 blur-sm'
              : 'opacity-0'
          }`}
          {...props}
        />
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <svg 
              className="w-12 h-12 mx-auto text-gray-300 mb-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <span className="text-sm text-gray-400">Image unavailable</span>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default LazyImage;
