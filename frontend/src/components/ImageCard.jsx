import { useState } from 'react';
import { ZoomIn } from 'lucide-react';

/**
 * ImageCard - A reusable image card component with hover effects and zoom functionality
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 * @param {string} title - Card title
 * @param {string} subtitle - Card subtitle
 * @param {string} description - Card description
 * @param {string} badge - Optional badge text
 * @param {function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 * @param {boolean} showZoom - Whether to show zoom icon on hover
 * @param {string} aspectRatio - Aspect ratio class (e.g., 'aspect-square', 'aspect-video')
 */
const ImageCard = ({
  src,
  alt,
  title,
  subtitle,
  description,
  badge,
  onClick,
  className = '',
  showZoom = true,
  aspectRatio = 'aspect-video',
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      {/* Image Container with Zoom Effect */}
      <div className={`relative overflow-hidden ${aspectRatio}`}>
        {/* Skeleton loader */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        
        {/* Error fallback */}
        {hasError && (
          <div className="absolute inset-0 bg-gradient-to-br from-trine-orange/20 to-trine-green/20 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image unavailable</span>
          </div>
        )}
        
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-trine-black via-trine-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Zoom Icon */}
        {showZoom && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>
          </div>
        )}
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-trine-orange/90 backdrop-blur-sm text-white text-xs font-semibold">
              {badge}
            </span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-bold text-trine-black group-hover:text-trine-orange transition-colors mb-2">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-sm text-trine-green font-medium mb-2">{subtitle}</p>
        )}
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        )}
        {children}
      </div>
    </article>
  );
};

export default ImageCard;
