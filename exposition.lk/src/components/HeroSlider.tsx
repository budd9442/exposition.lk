import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    'https://exposition.lk/static/media/ga15.ff0e01d3c075891814ff.jpg',
    'https://exposition.lk/static/media/ga17.2c83b8d6f98a77c4c098.jpg',
    'https://exposition.lk/static/media/ga16.c54d2b2285a14f24a765.jpg',
  ];

  const slideLogo = '/public/EXPO LOGO.png';
  const slideSubtitle = 'University Magazine Excellence';
  const slideDescription = 'Discover groundbreaking research, inspiring stories, and the future of education through our comprehensive magazine platform';

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt="Exposition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div className="max-w-5xl mx-auto px-4 w-full">
          <div className={`transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Logo with optimized sizing and reduced spacing */}
            <div className="flex flex-col items-center">
              <img 
                src={slideLogo} 
                alt="Exposition Logo"
                className="h-[180px] sm:h-[240px] md:h-[320px] lg:h-[400px] xl:h-[480px] w-auto max-w-[98vw] object-contain" 
              />
              <div className="w-full max-w-2xl mx-auto">
                <p className="text-xl md:text-3xl text-[#f1b759] mt-2 mb-1 font-light">
                  {slideSubtitle}
                </p>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  {slideDescription}
                </p>
              </div>
            </div>

            {/* CTA Buttons with reduced top margin */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#f1b759] to-[#d1a93a] hover:from-[#d1a93a] hover:to-[#b18b20] text-black font-semibold px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#f1b759]/25">
                <div className="flex items-center space-x-2">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>E-Magazine</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </button>

              <button className="group relative overflow-hidden border-2 border-[#f1b759]/50 hover:border-[#d1a93a] text-white hover:text-black font-semibold px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="relative z-10">Our Legacy</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#f1b759] to-[#d1a93a] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-[#f1b759] transition-all duration-300 z-20 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-[#f1b759] transition-all duration-300 z-20 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden transition-all duration-300 ${
              index === currentSlide 
                ? 'w-12 h-3 bg-[#f1b759] rounded-full' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#f1b759] to-[#d1a93a] rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs font-medium rotate-90 origin-center whitespace-nowrap">Scroll Down</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>

      {/* Bottom Gradient Overlay to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-900 z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSlider;