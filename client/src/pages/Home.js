import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ChatWidget from '../components/ChatWidget';

const Home = () => {
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
  const statsRef = useRef(null);

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

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
      {/* Stats Section */}
      <section className="py-4 bg-dark-pattern" style={{ marginTop: '76px' }}>
        <div className="container">
          <div className="row text-center" ref={statsRef}>
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <div className="stat-card p-3">
                  <h3 className="fw-bold counter-number animated-text mb-1">
                    {counters[index]}{stat.suffix}
                  </h3>
                  <p className="animated-text mb-0 small">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="modern-hero">
        <div className="container-fluid">
          <div className="row align-items-center" style={{ minHeight: '70vh' }}>
            {/* Left Content */}
            <div className="col-lg-5 col-md-12">
              <div className="hero-content">
                <h1 className="hero-title fw-bold mb-2">Web Development.</h1>
                <h1 className="hero-title fw-bold mb-2">Desktop Application.</h1>
                <h1 className="hero-title fw-bold mb-2">Mobile Application.</h1>
                <h1 className="hero-title fw-bold mb-2">UI/UX Design.</h1>
                <h1 className="hero-title fw-bold mb-3">Graphic Design.</h1>
                <p className="lead mb-4 animated-text">
                  Stay ahead of the competition with our cutting-edge solutions.
                </p>
                
                <Link to="/contact" className="cta-button">
                  Get In Touch With Us
                </Link>
              </div>
            </div>
            
            {/* Right Content - Sliding Service Cards */}
            <div className="col-lg-7 col-md-12">
              <div className="service-slider">
                <div className="slider-track" style={{
                  transform: `translateX(${translateX}px)`
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
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Home;