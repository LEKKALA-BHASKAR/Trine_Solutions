/**
 * SkeletonLoader - Reusable skeleton loading components
 */

export const SkeletonCard = ({ className = '' }) => (
  <div className={`bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse ${className}`}>
    <div className="aspect-video bg-gray-200" />
    <div className="p-6 space-y-4">
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  </div>
);

export const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div 
        key={i}
        className="h-4 bg-gray-200 rounded animate-pulse"
        style={{ width: `${100 - (i * 10)}%` }}
      />
    ))}
  </div>
);

export const SkeletonAvatar = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };
  
  return (
    <div className={`${sizes[size]} rounded-full bg-gray-200 animate-pulse ${className}`} />
  );
};

export const SkeletonImage = ({ aspectRatio = 'aspect-video', className = '' }) => (
  <div className={`${aspectRatio} bg-gray-200 rounded-xl animate-pulse ${className}`} />
);

export const SkeletonButton = ({ width = 'w-32', className = '' }) => (
  <div className={`${width} h-12 bg-gray-200 rounded-full animate-pulse ${className}`} />
);

export const SkeletonGrid = ({ count = 6, columns = 3, className = '' }) => (
  <div className={`grid gap-6 ${className}`} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

// Green/Orange themed skeleton with gradient animation
export const GradientSkeleton = ({ className = '' }) => (
  <div className={`relative overflow-hidden bg-gray-200 rounded-xl ${className}`}>
    <div 
      className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(247, 139, 31, 0.1), rgba(34, 197, 94, 0.1), transparent)',
      }}
    />
    <style jsx>{`
      @keyframes shimmer {
        100% { transform: translateX(100%); }
      }
    `}</style>
  </div>
);

export default {
  Card: SkeletonCard,
  Text: SkeletonText,
  Avatar: SkeletonAvatar,
  Image: SkeletonImage,
  Button: SkeletonButton,
  Grid: SkeletonGrid,
  Gradient: GradientSkeleton,
};
