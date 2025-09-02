import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ChatWidget from '../components/ChatWidget';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: 20, suffix: '+', label: 'Projects/Year' },
    { number: 24, suffix: '/7', label: 'Support' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
    { number: 5, suffix: '+', label: 'Years Experience' }
  ];

  const services = [
    {
      title: 'Online Branding',
      gradient: 'linear-gradient(135deg, #00d4aa 0%, #00a085 100%)',
      image: '/images/graphic.png'
    },
    {
      title: 'UI/UX Design', 
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      image: '/images/ui.jpg'
    },
    {
      title: 'Desktop Application',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      image: '/images/desktop.jpg'
    },
    {
      title: 'Web Development',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      image: '/images/web.png'
    },

  ];

  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navbarBg, setNavbarBg] = useState('transparent');
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const statsRef = useRef(null);
  const companyDescRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const industriesRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      setTranslateX(prev => {
        const newValue = prev - 1;
        if (newValue <= -services.length * 320) {
          return 0;
        }
        return newValue;
      });
    };
    
    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Check if company description section is in view
      if (companyDescRef.current) {
        const rect = companyDescRef.current.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 100;
        setNavbarBg(isInView ? 'white' : 'transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update navbar background
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.backgroundColor = navbarBg;
      navbar.style.transition = 'background-color 0.3s ease';
      navbar.style.boxShadow = navbarBg === 'white' ? '0 2px 10px rgba(0,0,0,0.1)' : 'none';
    }
  }, [navbarBg]);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionName = entry.target.dataset.section;
        setVisibleSections(prev => new Set([...prev, sectionName]));
        
        if (sectionName === 'stats' && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      }
    });
  }, [hasAnimated]);

  const handleElementIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const elementId = entry.target.dataset.animateId;
        if (elementId) {
          setAnimatedElements(prev => new Set([...prev, elementId]));
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
        }
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    const refs = [statsRef, companyDescRef, heroRef, servicesRef, whyChooseRef, industriesRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [handleIntersection]);

  useEffect(() => {
    const elementObserver = new IntersectionObserver(handleElementIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const animatedElements = document.querySelectorAll('[data-animate-id]');
    animatedElements.forEach(element => {
      elementObserver.observe(element);
    });

    return () => elementObserver.disconnect();
  }, [handleElementIntersection]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 30);
    });
  };

  return (
    <div className="modern-homepage">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes borderRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float3D {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          25% { transform: translateY(-20px) rotateX(10deg) rotateY(90deg); }
          50% { transform: translateY(-40px) rotateX(20deg) rotateY(180deg); }
          75% { transform: translateY(-20px) rotateX(10deg) rotateY(270deg); }
        }
        
        @keyframes rotate3D {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
        
        @keyframes pulse3D {
          0%, 100% { transform: scale(1) rotateX(0deg); }
          50% { transform: scale(1.1) rotateX(180deg); }
        }
        
        @keyframes morphCube {
          0% { border-radius: 0%; transform: rotateY(0deg); }
          25% { border-radius: 25%; transform: rotateY(90deg); }
          50% { border-radius: 50%; transform: rotateY(180deg); }
          75% { border-radius: 25%; transform: rotateY(270deg); }
          100% { border-radius: 0%; transform: rotateY(360deg); }
        }
        
        @keyframes cardFloat3D {
          0%, 100% { transform: rotateY(0deg) rotateX(0deg) translateZ(0px); }
          50% { transform: rotateY(5deg) rotateX(2deg) translateZ(10px); }
        }
        
        .scroll-animate {
          opacity: 0;
          transition: all 0.8s ease-out;
        }
        
        .scroll-animate.fade-up {
          transform: translateY(30px);
        }
        
        .scroll-animate.fade-left {
          transform: translateX(-30px);
        }
        
        .scroll-animate.fade-right {
          transform: translateX(30px);
        }
        
        .scroll-animate.scale {
          transform: scale(0.9);
        }
        
        .scroll-animate.delay-1 { transition-delay: 0.1s; }
        .scroll-animate.delay-2 { transition-delay: 0.2s; }
        .scroll-animate.delay-3 { transition-delay: 0.3s; }
        .scroll-animate.delay-4 { transition-delay: 0.4s; }
        .scroll-animate.delay-5 { transition-delay: 0.5s; }
        .scroll-animate.delay-6 { transition-delay: 0.6s; }
        .scroll-animate.delay-7 { transition-delay: 0.7s; }
        .scroll-animate.delay-8 { transition-delay: 0.8s; }
      `}</style>

      {/* Hero Section */}
      <section className="modern-hero" style={{ 
        marginTop: '76px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <style jsx>{`
          @keyframes floatUp {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
            50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
          }
          
          @keyframes gentleRotate {
            0% { transform: rotateY(0deg) rotateZ(0deg); }
            100% { transform: rotateY(360deg) rotateZ(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.9; }
          }
          
          .bg-element {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
          }
          
          .bg-shape {
            position: absolute;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
            pointer-events: none;
            z-index: 1;
          }
        `}</style>
        
        {/* 3D Background Animation Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}>
          <div className="bg-element" style={{
            top: '10%',
            left: '5%',
            width: '60px',
            height: '60px',
            animation: 'floatUp 8s ease-in-out infinite'
          }}></div>
          <div className="bg-element" style={{
            top: '20%',
            right: '10%',
            width: '40px',
            height: '40px',
            animation: 'floatUp 10s ease-in-out infinite reverse'
          }}></div>
          <div className="bg-element" style={{
            bottom: '30%',
            left: '15%',
            width: '80px',
            height: '80px',
            animation: 'pulse 6s ease-in-out infinite'
          }}></div>
          <div className="bg-shape" style={{
            top: '15%',
            right: '20%',
            width: '100px',
            height: '100px',
            borderRadius: '20px',
            animation: 'gentleRotate 20s linear infinite'
          }}></div>
          <div className="bg-shape" style={{
            bottom: '20%',
            right: '5%',
            width: '70px',
            height: '70px',
            borderRadius: '15px',
            animation: 'gentleRotate 15s linear infinite reverse'
          }}></div>
        </div>
        
        <div className="container-fluid" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center h-100" ref={heroRef} data-section="hero" style={{ minHeight: '100vh' }}>
            {/* Left Content */}
            <div className="col-lg-5 col-md-12">
              <div className="hero-content">
                <h1 className="hero-title fw-bold mb-2 scroll-animate fade-left delay-1" data-animate-id="hero-1">Web Development.</h1>
                <h1 className="hero-title fw-bold mb-2 scroll-animate fade-left delay-2" data-animate-id="hero-2">Desktop Application.</h1>
                <h1 className="hero-title fw-bold mb-2 scroll-animate fade-left delay-3" data-animate-id="hero-3">Mobile Application.</h1>
                <h1 className="hero-title fw-bold mb-2 scroll-animate fade-left delay-4" data-animate-id="hero-4">UI/UX Design.</h1>
                <h1 className="hero-title fw-bold mb-3 scroll-animate fade-left delay-5" data-animate-id="hero-5">Graphic Design.</h1>
                <p className="lead mb-4 animated-text scroll-animate fade-left delay-6" data-animate-id="hero-6">
                  Stay ahead of the competition with our cutting-edge solutions.
                </p>
                
                <div className="scroll-animate fade-left delay-7" data-animate-id="hero-7">
                  <Link to="/contact" className="cta-button" style={{ transition: 'all 0.3s ease' }}>
                    Get In Touch With Us
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Content - Sliding Service Cards */}
            <div className="col-lg-7 col-md-12 scroll-animate fade-right delay-4" data-animate-id="hero-slider">
              <div className="service-slider">
                <div className="slider-track" style={{
                  transform: `translateX(${translateX}px)`,
                  transition: 'transform 0.5s ease'
                }}>
                  {[...services, ...services].map((service, index) => (
                    <div key={index} className="service-slide">
                      <div 
                        className="service-card-modern" 
                        style={{ 
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${service.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        <div className="service-illustration">
                          <div className="illustration-content">
                            <div className="floating-elements">
                              <div className="element-1"></div>
                              <div className="element-2"></div>
                              <div className="element-3"></div>
                            </div>
                          </div>
                        </div>
                        <h3>{service.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Integrated Services Section */}
      <section className="integrated-services py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container" ref={servicesRef} data-section="services">
          <div className="row">
            <div className="col-lg-4 mb-4 scroll-animate fade-left delay-1" data-animate-id="services-intro">
              <div className="service-intro-card p-4 h-100" style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                borderRadius: '20px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="service-bg-pattern" style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  transform: 'translate(30px, -30px)'
                }}></div>
                <h2 className="fw-bold mb-3" style={{ fontSize: '1.8rem', position: 'relative', zIndex: 2 }}>INTEGRATED SERVICES</h2>
                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', position: 'relative', zIndex: 2 }}>
                  We think big and have hands in all leading technology platforms to provide you wide array of services.
                </p>
              </div>
            </div>
            
            <div className="col-lg-8">
              <div className="row g-4">
                <div className="col-lg-6 col-md-6 scroll-animate fade-up delay-2" data-animate-id="service-web">
                  <div className="service-card-integrated p-4" style={{
                    background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)',
                    borderRadius: '25px',
                    border: '3px solid #29b6f6',
                    minHeight: '220px',
                    boxShadow: '0 8px 25px rgba(41, 182, 246, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                    <div className="text-center">
                      <div className="service-icon mb-3 mx-auto" style={{
                        width: '70px',
                        height: '70px',
                        background: 'linear-gradient(135deg, #29b6f6 0%, #1976d2 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(41, 182, 246, 0.3)'
                      }}>
                        <i className="fas fa-code" style={{ color: 'white', fontSize: '28px' }}></i>
                      </div>
                      <h4 className="fw-bold mb-3" style={{ color: '#1565c0', fontSize: '1.2rem' }}>Web Development</h4>
                      <div className="tech-badges d-flex flex-wrap gap-2 justify-content-center mb-3">
                        <span className="badge px-3 py-1" style={{ background: '#1976d2', color: 'white', fontSize: '11px', borderRadius: '15px' }}>PHP</span>
                        <span className="badge px-3 py-1" style={{ background: '#1976d2', color: 'white', fontSize: '11px', borderRadius: '15px' }}>.NET</span>
                        <span className="badge px-3 py-1" style={{ background: '#1976d2', color: 'white', fontSize: '11px', borderRadius: '15px' }}>JAVA</span>
                        <span className="badge px-3 py-1" style={{ background: '#1976d2', color: 'white', fontSize: '11px', borderRadius: '15px' }}>PYTHON</span>
                      </div>
                      <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.4', margin: 0 }}>
                        Expert web development using modern technologies for scalable solutions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6 scroll-animate fade-up delay-3" data-animate-id="service-ecommerce">
                  <div className="service-card-integrated p-4" style={{
                    background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
                    borderRadius: '25px',
                    border: '3px solid #ff9800',
                    minHeight: '220px',
                    boxShadow: '0 8px 25px rgba(255, 152, 0, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                    <div className="text-center">
                      <div className="service-icon mb-3 mx-auto" style={{
                        width: '70px',
                        height: '70px',
                        background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(255, 152, 0, 0.3)'
                      }}>
                        <i className="fas fa-shopping-cart" style={{ color: 'white', fontSize: '28px' }}></i>
                      </div>
                      <h4 className="fw-bold mb-3" style={{ color: '#e65100', fontSize: '1.2rem' }}>Ecommerce Development</h4>
                      <div className="tech-badges d-flex flex-wrap gap-2 justify-content-center mb-3">
                        <span className="badge px-3 py-1" style={{ background: '#f57c00', color: 'white', fontSize: '11px', borderRadius: '15px' }}>WORDPRESS</span>
                        <span className="badge px-3 py-1" style={{ background: '#f57c00', color: 'white', fontSize: '11px', borderRadius: '15px' }}>WOOCOMMERCE</span>
                      </div>
                      <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.4', margin: 0 }}>
                        Powerful ecommerce solutions for seamless online shopping experiences.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 scroll-animate fade-up delay-4" data-animate-id="service-mobile">
                  <div className="service-card-integrated p-4" style={{
                    background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
                    borderRadius: '25px',
                    border: '3px solid #9c27b0',
                    minHeight: '220px',
                    boxShadow: '0 8px 25px rgba(156, 39, 176, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                    <div className="text-center">
                      <div className="service-icon mb-3 mx-auto" style={{
                        width: '70px',
                        height: '70px',
                        background: 'linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(156, 39, 176, 0.3)'
                      }}>
                        <i className="fas fa-mobile-alt" style={{ color: 'white', fontSize: '28px' }}></i>
                      </div>
                      <h4 className="fw-bold mb-3" style={{ color: '#6a1b9a', fontSize: '1.1rem' }}>Mobile App Development</h4>
                      <div className="tech-badges d-flex flex-wrap gap-2 justify-content-center mb-3">
                        <span className="badge px-2 py-1" style={{ background: '#6a1b9a', color: 'white', fontSize: '10px', borderRadius: '12px' }}>SWIFT</span>
                        <span className="badge px-2 py-1" style={{ background: '#6a1b9a', color: 'white', fontSize: '10px', borderRadius: '12px' }}>KOTLIN</span>
                        <span className="badge px-2 py-1" style={{ background: '#6a1b9a', color: 'white', fontSize: '10px', borderRadius: '12px' }}>FLUTTER</span>
                      </div>
                      <p style={{ color: '#666', fontSize: '12px', lineHeight: '1.4', margin: 0 }}>
                        High-quality iOS and Android apps using modern technologies.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 scroll-animate fade-up delay-5" data-animate-id="service-trending">
                  <div className="service-card-integrated p-4" style={{
                    background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
                    borderRadius: '25px',
                    border: '3px solid #00bcd4',
                    minHeight: '220px',
                    boxShadow: '0 8px 25px rgba(0, 188, 212, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                    <div className="text-center">
                      <div className="service-icon mb-3 mx-auto" style={{
                        width: '70px',
                        height: '70px',
                        background: 'linear-gradient(135deg, #00bcd4 0%, #00695c 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0, 188, 212, 0.3)'
                      }}>
                        <i className="fas fa-chart-line" style={{ color: 'white', fontSize: '28px' }}></i>
                      </div>
                      <h4 className="fw-bold mb-3" style={{ color: '#00695c', fontSize: '1.1rem' }}>Trending Technologies</h4>
                      <div className="tech-badges d-flex flex-wrap gap-2 justify-content-center mb-3">
                        <span className="badge px-2 py-1" style={{ background: '#00695c', color: 'white', fontSize: '10px', borderRadius: '12px' }}>REACT.JS</span>
                        <span className="badge px-2 py-1" style={{ background: '#00695c', color: 'white', fontSize: '10px', borderRadius: '12px' }}>NODE.JS</span>
                        <span className="badge px-2 py-1" style={{ background: '#00695c', color: 'white', fontSize: '10px', borderRadius: '12px' }}>ANGULAR.JS</span>
                      </div>
                      <p style={{ color: '#666', fontSize: '12px', lineHeight: '1.4', margin: 0 }}>
                        Latest trending technologies for modern scalable solutions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 scroll-animate fade-up delay-6" data-animate-id="service-marketing">
                  <div className="service-card-integrated p-4" style={{
                    background: 'linear-gradient(135deg, #fff9c4 0%, #fff59d 100%)',
                    borderRadius: '25px',
                    border: '3px solid #fbc02d',
                    minHeight: '220px',
                    boxShadow: '0 8px 25px rgba(251, 192, 45, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                    <div className="text-center">
                      <div className="service-icon mb-3 mx-auto" style={{
                        width: '70px',
                        height: '70px',
                        background: 'linear-gradient(135deg, #fbc02d 0%, #f57f17 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(251, 192, 45, 0.3)'
                      }}>
                        <i className="fas fa-bullhorn" style={{ color: 'white', fontSize: '28px' }}></i>
                      </div>
                      <h4 className="fw-bold mb-3" style={{ color: '#f57f17', fontSize: '1.1rem' }}>Digital Marketing</h4>
                      <div className="tech-badges d-flex flex-wrap gap-2 justify-content-center mb-3">
                        <span className="badge px-2 py-1" style={{ background: '#f57f17', color: 'white', fontSize: '10px', borderRadius: '12px' }}>SEO</span>
                        <span className="badge px-2 py-1" style={{ background: '#f57f17', color: 'white', fontSize: '10px', borderRadius: '12px' }}>SMO</span>
                        <span className="badge px-2 py-1" style={{ background: '#f57f17', color: 'white', fontSize: '10px', borderRadius: '12px' }}>PPC</span>
                        <span className="badge px-2 py-1" style={{ background: '#f57f17', color: 'white', fontSize: '10px', borderRadius: '12px' }}>SMM</span>
                      </div>
                      <p style={{ color: '#666', fontSize: '12px', lineHeight: '1.4', margin: 0 }}>
                        Comprehensive digital marketing to boost online presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5 scroll-animate fade-up delay-7" data-animate-id="services-cta">
            <h3 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '2rem' }}>
              Let's Ask Experts And Obtain <span style={{ color: '#e91e63' }}>Free Proposal</span>
            </h3>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{
                position: 'absolute',
                inset: '-2px',
                background: 'linear-gradient(45deg, #4facfe, #e91e63, #ffc107, #4facfe)',
                borderRadius: '27px',
                backgroundSize: '400% 400%',
                animation: 'borderRotate 3s linear infinite',
                zIndex: 0
              }}></div>
              <Link 
                to="/contact" 
                className="btn px-4 py-2"
                style={{
                  position: 'relative',
                  background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
                  color: 'white',
                  borderRadius: '25px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  border: 'none',
                  zIndex: 1,
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Let's Connect →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5" style={{ 
        backgroundColor: 'white', 
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}>
        <div className="container" ref={whyChooseRef} data-section="whychoose">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <p className="text-uppercase fw-bold mb-3 scroll-animate fade-left delay-1" data-animate-id="why-1" style={{ color: '#e91e63', fontSize: '14px', letterSpacing: '1px' }}>WHY CHOOSE US</p>
              <h2 className="fw-bold mb-4 scroll-animate fade-left delay-2" data-animate-id="why-2" style={{ color: '#1a237e', fontSize: '2.2rem', lineHeight: '1.2' }}>
                Why The NeoArch <span style={{ color: '#e91e63' }}>Ranked Top</span> Among The Leading<br />
                Web Development & Digital<br />
                Marketing Companies
              </h2>
              <p className="text-muted mb-4 scroll-animate fade-left delay-3" data-animate-id="why-3" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                We pride ourselves on staying up-to-date with the latest trends and technologies in the industry, which allows us to offer cutting-edge solutions to our clients. Whether you need a new website, or a comprehensive digital marketing strategy, we have the expertise to deliver results.
              </p>
              
              <div className="features-list scroll-animate fade-left delay-4" data-animate-id="features-list">
                {[
                  'Secured from vulnerable attacks',
                  'A Dedicated Team of Experts',
                  'Reduction in cost and raises standards',
                  'Completion of Project in Given Time',
                  'Gives more value to customers',
                  '24*7 support facility',
                  'Feasible and Convenient',
                  'Responsive and SEO-Optimized'
                ].map((feature, index) => (
                  <div key={index} className={`d-flex align-items-center mb-2 scroll-animate fade-left delay-${Math.min(index + 5, 8)}`} data-animate-id={`feature-${index}`} style={{
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                    <div className="me-3" style={{ 
                      width: '24px', 
                      height: '24px', 
                      backgroundColor: '#ffc107', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.2s ease'
                    }}>
                      <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>✓</span>
                    </div>
                    <span style={{ color: '#666', fontSize: '15px' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-6 mb-4">
              <div className="position-relative">
                <div className="team-image-container" style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #e91e63 100%)',
                  borderRadius: '20px',
                  padding: '3px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    background: 'white',
                    borderRadius: '17px',
                    padding: '20px',
                    position: 'relative'
                  }}>
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="GJTecho Team celebrating success" 
                      className="img-fluid rounded"
                      style={{ 
                        width: '100%', 
                        height: 'auto',
                        transition: 'transform 0.3s ease'
                      }}
                    />

                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <p style={{ color: '#e91e63', fontSize: '16px', fontWeight: '500', marginBottom: '20px' }}>
                    Here we make sure that you have made the best decision for your<br />
                    project to start with and shape the product as you imagine.
                  </p>
                  
                  <h3 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.8rem' }}>
                    Let's Start a <span style={{ color: '#e91e63' }}>New Project</span> Together
                  </h3>
                  
                  <p className="text-muted mb-4">Don't wait to achieve your online goals – Contact us today</p>
                  
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{
                      position: 'absolute',
                      inset: '-2px',
                      background: 'linear-gradient(45deg, #4facfe, #e91e63, #ffc107, #4facfe)',
                      borderRadius: '27px',
                      backgroundSize: '400% 400%',
                      animation: 'borderRotate 3s linear infinite',
                      zIndex: 0
                    }}></div>
                    <Link 
                      to="/contact" 
                      className="btn btn-outline-primary px-4 py-2"
                      style={{
                        position: 'relative',
                        background: 'white',
                        borderColor: 'transparent',
                        color: '#1a237e',
                        borderRadius: '25px',
                        fontWeight: '500',
                        textDecoration: 'none',
                        zIndex: 1,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px) scale(1.05)';
                        e.target.style.boxShadow = '0 10px 25px rgba(26, 35, 126, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Request A Quote →
                    </Link>
                  </div>
                  <style jsx>{`
                    @keyframes borderRotate {
                      0% { background-position: 0% 50%; }
                      50% { background-position: 100% 50%; }
                      100% { background-position: 0% 50%; }
                    }
                  `}</style>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Work For Section */}
      <section className="industries-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container" ref={industriesRef} data-section="industries">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 scroll-animate fade-left delay-1" data-animate-id="industries-intro">
              <p className="text-uppercase fw-bold mb-3" style={{ color: '#e91e63', fontSize: '14px', letterSpacing: '1px' }}>INDUSTRIES WE WORK FOR</p>
              <h2 className="fw-bold mb-4" style={{ color: '#1a237e', fontSize: '2.5rem', lineHeight: '1.2' }}>
                Helping<br />
                Businesses in All<br />
                Domains
              </h2>
              <p className="text-muted" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Our main focus as a web agency is to provide strategic planning & the industry's best services to compete in the market.
              </p>
            </div>
            
            <div className="col-lg-8">
              <div className="row g-3">
                {[
                  { name: 'Social Networking', color: '#7dd3fc', icon: '🌐' },
                  { name: 'Digital Marketing', color: '#fde047', icon: '📊' },
                  { name: 'Ecommerce Development', color: '#86efac', icon: '🛒' },
                  { name: 'Video Service', color: '#fdba74', icon: '🎬' },
                  { name: 'Banking Service', color: '#d9f99d', icon: '🏦' },
                  { name: 'Enterprise Service', color: '#f9a8d4', icon: '🏢' },
                  { name: 'Education Service', color: '#c4b5fd', icon: '🎓' },
                  { name: 'Tour and Travels', color: '#86efac', icon: '✈️' },
                  { name: 'Health Service', color: '#7dd3fc', icon: '⚕️' },
                  { name: 'Event & Ticket', color: '#60a5fa', icon: '🎫' },
                  { name: 'Restaurant Service', color: '#fef3c7', icon: '🍽️' },
                  { name: 'Business Consultant', color: '#86efac', icon: '💼' }
                ].map((industry, index) => (
                  <div key={index} className={`col-6 col-md-4 col-lg-3 scroll-animate scale delay-${Math.min(index + 2, 8)}`} data-animate-id={`industry-${index}`}>
                    <div 
                      className="industry-card p-4 text-center h-100 d-flex flex-column justify-content-center"
                      style={{
                        backgroundColor: industry.color,
                        borderRadius: '20px',
                        minHeight: '120px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px) scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'translateY(0) scale(1)'}
                    >
                      <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{industry.icon}</div>
                      <h6 className="fw-bold mb-0" style={{ color: '#1a237e', fontSize: '14px', lineHeight: '1.3' }}>
                        {industry.name}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5" style={{ 
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)',
        backgroundSize: '400% 400%',
        animation: 'gradientWave 6s ease infinite',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <style jsx>{`
          @keyframes gradientWave {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
          }
          
          .floating-elements {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
          }
          
          .floating-circle {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            animation: bounce 3s ease-in-out infinite;
          }
          
          .circle-1 {
            width: 60px;
            height: 60px;
            top: 10%;
            left: 5%;
            animation-delay: 0s;
          }
          
          .circle-2 {
            width: 40px;
            height: 40px;
            top: 20%;
            right: 10%;
            animation-delay: 1s;
          }
          
          .circle-3 {
            width: 80px;
            height: 80px;
            bottom: 15%;
            left: 15%;
            animation-delay: 2s;
          }
          
          .rotating-border {
            position: absolute;
            inset: -3px;
            background: conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff6b6b);
            border-radius: 25px;
            animation: rotate 3s linear infinite;
            z-index: -1;
          }
          
          .sparkle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            animation: sparkle 2s ease-in-out infinite;
          }
          
          @media (max-width: 768px) {
            .stats-section {
              padding: 3rem 1rem !important;
            }
            .stat-card {
              margin-bottom: 2rem !important;
            }
            .floating-elements {
              display: none;
            }
          }
        `}</style>
        
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row text-center" ref={statsRef} data-section="stats">
            {stats.map((stat, index) => (
              <div key={index} className={`col-6 col-md-3 mb-4 scroll-animate fade-up delay-${index + 1}`} data-animate-id={`stat-${index}`}>
                <div className="stat-card p-4" style={{ 
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '22px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}>
                  <div className="rotating-border"></div>
                  
                  <div className="sparkle" style={{ top: '15px', left: '20px', animationDelay: '0s' }}></div>
                  <div className="sparkle" style={{ top: '25px', right: '25px', animationDelay: '0.5s' }}></div>
                  <div className="sparkle" style={{ bottom: '20px', left: '30px', animationDelay: '1s' }}></div>
                  
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '15px',
                    width: '35px',
                    height: '35px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px'
                  }}>
                    {index === 0 ? '📊' : index === 1 ? '🕐' : index === 2 ? '😊' : '⭐'}
                  </div>
                  
                  <h3 className="fw-bold counter-number mb-2" style={{ 
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: '800',
                    lineHeight: '1',
                    textShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    animation: 'bounce 2s ease-in-out infinite'
                  }}>
                    {counters[index]}{stat.suffix}
                  </h3>
                  <p className="mb-0" style={{ 
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '600',
                    letterSpacing: '0.5px',
                    textShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="lets-work-together py-5" style={{ 
        backgroundColor: 'white', 
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <style jsx>{`
          @media (max-width: 768px) {
            .lets-work-together {
              background-image: none !important;
              padding: 3rem 1rem !important;
            }
            .lets-work-together .container {
              padding: 0 !important;
            }
            .lets-work-together h2 {
              font-size: 1.8rem !important;
              line-height: 1.3 !important;
            }
            .decorative-circle-left,
            .decorative-circle-right {
              display: none !important;
            }
          }
        `}</style>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <p className="text-uppercase fw-bold mb-3 scroll-animate fade-up delay-1" data-animate-id="work-1" style={{ color: '#e91e63', fontSize: '14px', letterSpacing: '1px' }}>LET'S WORK TOGETHER</p>
              <h2 className="fw-bold mb-4 scroll-animate fade-up delay-2" data-animate-id="work-2" style={{ color: '#1a237e', fontSize: '2.5rem', lineHeight: '1.2' }}>
                We Love to Listen to Your<br />
                Requirements
              </h2>
              
              <div className="mb-4 scroll-animate fade-up delay-3" data-animate-id="work-3">
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <div style={{
                    position: 'absolute',
                    inset: '-2px',
                    background: 'linear-gradient(45deg, #4facfe, #e91e63, #ffc107, #4facfe)',
                    borderRadius: '27px',
                    backgroundSize: '400% 400%',
                    animation: 'borderRotate 3s linear infinite',
                    zIndex: 0
                  }}></div>
                  <Link 
                    to="/contact" 
                    className="btn px-4 py-2"
                    style={{
                      position: 'relative',
                      background: 'white',
                      color: '#1a237e',
                      borderColor: 'transparent',
                      borderRadius: '25px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      zIndex: 1
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#1a237e';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'white';
                      e.target.style.color = '#1a237e';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Estimate Project →
                  </Link>
                </div>
              </div>
              
              <div className="d-flex align-items-center justify-content-center gap-2 scroll-animate fade-up delay-4" data-animate-id="work-4" style={{ color: '#666' }}>
                <span>Or call us now</span>
                <i className="fas fa-phone" style={{ color: '#1a237e' }}></i>
                <a href="tel:+918866392521" style={{ color: '#1a237e', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}
                   onMouseEnter={(e) => e.target.style.color = '#e91e63'}
                   onMouseLeave={(e) => e.target.style.color = '#1a237e'}>
                  +91 88663 92521
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="decorative-circle-left" style={{
          position: 'absolute',
          top: '20%',
          left: '-5%',
          width: '200px',
          height: '150px',
          background: 'linear-gradient(135deg, #ffd54f 0%, #ffb300 100%)',
          borderRadius: '50% 30% 50% 30%',
          opacity: 0.8,
          zIndex: 1
        }}></div>
        
        <div className="decorative-circle-right" style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '180px',
          height: '120px',
          background: 'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)',
          borderRadius: '30% 50% 30% 50%',
          opacity: 0.8,
          zIndex: 1
        }}></div>
      </section>
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Home;