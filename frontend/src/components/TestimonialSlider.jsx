import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

/**
 * TestimonialSlider - A premium testimonial carousel with client photos
 * 
 * @param {Array} testimonials - Array of testimonial objects
 * @param {boolean} autoPlay - Whether to auto-play the slider
 * @param {number} interval - Auto-play interval in ms (default: 5000)
 */
const TestimonialSlider = ({
  testimonials = [],
  autoPlay = true,
  interval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % testimonials.length);
  }, [activeIndex, testimonials.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length);
  }, [activeIndex, testimonials.length, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || testimonials.length <= 1) return;
    
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, nextSlide, testimonials.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (testimonials.length === 0) return null;

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 text-trine-orange fill-trine-orange" />
    ));
  };

  return (
    <div 
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Customer testimonials"
      aria-roledescription="carousel"
    >
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-3xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id || index}
              className="w-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
            >
              <div className="grid md:grid-cols-5 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Image Section */}
                <div className="md:col-span-2 relative h-64 md:h-full min-h-[350px] overflow-hidden">
                  <img
                    src={testimonial.image || testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:bg-gradient-to-t md:from-trine-black/60 md:to-transparent" />
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-trine-orange/90 flex items-center justify-center">
                    <Quote className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {renderStars(testimonial.rating || 5)}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-trine-orange/30">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-trine-black">{testimonial.name}</div>
                      <div className="text-trine-green font-medium">{testimonial.role}</div>
                      {testimonial.company && (
                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-trine-orange hover:text-white transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-trine-orange hover:text-white transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-gradient-to-r from-trine-orange to-trine-green'
                  : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && !isPaused && testimonials.length > 1 && (
        <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-trine-orange to-trine-green transition-none"
            style={{
              animation: `progress ${interval}ms linear infinite`,
            }}
          />
          <style jsx>{`
            @keyframes progress {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default TestimonialSlider;
