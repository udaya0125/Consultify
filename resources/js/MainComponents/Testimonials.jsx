import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechNova Solutions",
      content: "Consultify transformed our digital strategy. Their insights helped us increase operational efficiency by 40% within just six months.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director, FinServe Group",
      content: "The team at Consultify provided exceptional guidance during our restructuring process. Their expertise was invaluable in navigating complex market challenges.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Elena Thompson",
      role: "Marketing Director, Luxe Retail",
      content: "Consultify's market analysis completely reshaped our customer engagement strategy. We've seen a 65% increase in customer retention since implementation.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "James Wilson",
      role: "CFO, AeroDynamics Inc.",
      content: "The financial consulting services from Consultify helped us optimize our cash flow and identify new revenue streams we hadn't previously considered.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
      name: "Olivia Chen",
      role: "HR Director, GlobalTech",
      content: "Consultify's organizational development program revolutionized our talent management approach, reducing turnover by 35% in the first year.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Determine which slides to show based on screen size
  const getVisibleSlides = () => {
    if (typeof window === 'undefined') return [0, 1, 2];
    
    const width = window.innerWidth;
    if (width < 768) return [currentSlide];
    if (width < 1024) return [
      currentSlide,
      currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1
    ];
    
    // For larger screens, show 3 slides
    return [
      currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1,
      currentSlide,
      currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1
    ];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-lg mb-2 block">Client Testimonials</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Consultify has helped organizations transform their operations and achieve remarkable results.
          </p>
        </div>
        
        {/* Slider controls */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="group flex justify-center items-center bg-white shadow-md w-14 h-14 transition-all duration-300 rounded-full hover:bg-indigo-50 hover:shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg className="h-6 w-6 text-indigo-600 group-hover:text-indigo-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            <div className="flex space-x-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-indigo-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="group flex justify-center items-center bg-white shadow-md w-14 h-14 transition-all duration-300 rounded-full hover:bg-indigo-50 hover:shadow-lg"
              aria-label="Next testimonial"
            >
              <svg className="h-6 w-6 text-indigo-600 group-hover:text-indigo-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Testimonial cards */}
        <div className="flex justify-center items-stretch gap-8 overflow-hidden">
          {visibleSlides.map((slideIndex, index) => {
            const testimonial = testimonials[slideIndex];
            const isCenter = slideIndex === currentSlide;
            
            return (
              <div
                key={slideIndex}
                className={`flex flex-col transition-all duration-500 rounded-xl overflow-hidden ${
                  isCenter 
                    ? 'transform scale-105 shadow-xl border-t-4 border-indigo-600' 
                    : 'transform scale-95 shadow-lg border-t-4 border-gray-300 opacity-90'
                }`}
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  minHeight: '420px'
                }}
              >
                <div className="bg-white p-8 flex flex-col flex-grow">
                  <div className={`flex items-center mb-6 transition-all duration-500 ${
                    isCenter ? 'text-indigo-600' : 'text-amber-500'
                  }`}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
                      </svg>
                    ))}
                  </div>
                  
                  <div className="mb-8 relative">
                    <svg className="absolute -top-6 -left-2 w-12 h-12 text-indigo-100 opacity-70" viewBox="0 0 100 100">
                      <path fill="currentColor" d="M23,21l8,8c6,6,15,15,25,15c7,0,12-5,12-12c0-8-7-14-14-21c-7-7-15-14-24-14C20,-3,11,6,5,12c-6,6-8,15-6,22c2,7,8,13,15,16c7,3,16,3,23,0c7-3,12-9,15-15L23,21z"/>
                      <path fill="currentColor" d="M73,21l8,8c6,6,15,15,25,15c7,0,12-5,12-12c0-8-7-14-14-21c-7-7-15-14-24-14C70,-3,61,6,55,12c-6,6-8,15-6,22c2,7,8,13,15,16c7,3,16,3,23,0c7-3,12-9,15-15L73,21z"/>
                    </svg>
                    <p className={`text-lg leading-8 transition-all duration-500 relative z-10 ${
                      isCenter ? 'text-gray-800' : 'text-gray-600'
                    }`}>
                      {testimonial.content}
                    </p>
                  </div>
                  
                  <div className="mt-auto flex items-center">
                    <img 
                      className="rounded-full object-cover w-14 h-14 shadow-md" 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                    />
                    <div className="ml-4">
                      <h5 className={`font-semibold transition-all duration-500 ${
                        isCenter ? 'text-indigo-700' : 'text-gray-800'
                      }`}>
                        {testimonial.name}
                      </h5>
                      <span className="text-sm text-gray-600 block">{testimonial.role}</span>
                      <div className={`w-12 h-1 rounded-full mt-2 transition-all duration-500 ${
                        isCenter ? 'bg-indigo-600' : 'bg-gray-300'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
            <div className="text-gray-600">Client Satisfaction Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
            <div className="text-gray-600">Successful Projects</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl font-bold text-indigo-600 mb-2">15</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;