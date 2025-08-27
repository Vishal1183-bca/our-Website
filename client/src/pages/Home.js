import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    { name: 'Web Development', icon: 'fas fa-code', description: 'PHP, .NET, Java, Python, WordPress' },
    { name: 'Mobile Development', icon: 'fas fa-mobile-alt', description: 'Swift, Kotlin, Flutter, React Native' },
    { name: 'UI/UX Design', icon: 'fas fa-paint-brush', description: 'User-centered design solutions' },
    { name: 'Digital Marketing', icon: 'fas fa-bullhorn', description: 'SEO, SMO, PPC, Content Marketing' }
  ];

  const slidingServices = [
    { name: 'Web Development', icon: 'fas fa-code', description: 'Custom websites & web applications', color: '#007bff' },
    { name: 'Mobile Apps', icon: 'fas fa-mobile-alt', description: 'iOS & Android applications', color: '#28a745' },
    { name: 'UI/UX Design', icon: 'fas fa-paint-brush', description: 'Beautiful user experiences', color: '#dc3545' },
    { name: 'Digital Marketing', icon: 'fas fa-bullhorn', description: 'SEO, PPC & Social Media', color: '#ffc107' },
    { name: 'E-commerce', icon: 'fas fa-shopping-cart', description: 'Online stores & marketplaces', color: '#17a2b8' },
    { name: 'Cloud Solutions', icon: 'fas fa-cloud', description: 'AWS, Azure & Google Cloud', color: '#6f42c1' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidingServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slidingServices.length]);

  const stats = [
    { number: 20, suffix: '+', label: 'Projects/Year' },
    { number: 24, suffix: '/7', label: 'Support' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
    { number: 5, suffix: '+', label: 'Years Experience' }
  ];

  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

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
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5" style={{ marginTop: '76px' }}>
        <div className="container">
          <div className="row align-items-center" style={{ minHeight: '75vh' }}>
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Transform Your Digital Presence</h1>
              <p className="lead mb-4">
                We're a Vadodara-based digital agency specializing in web development, mobile apps, 
                UI/UX design, and digital marketing. Fast delivery, 24/7 support, and cost-effective 
                solutions for global clients.
              </p>
              <div className="d-flex gap-3">
                <Link to="/contact" className="btn btn-light btn-lg glass-effect">Get Started</Link>
                <Link to="/services" className="btn btn-outline-light btn-lg glass-effect">Our Services</Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <i className="fas fa-laptop-code display-1 mb-4"></i>
              <div className="row text-center" ref={statsRef}>
                {stats.map((stat, index) => (
                  <div key={index} className="col-6 mb-3">
                    <h3 className="fw-bold counter-number">
                      {counters[index]}{stat.suffix}
                    </h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Services Section */}
      <section className="py-5 bg-gradient-light section-pattern">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Our Services</h2>
            <p className="lead text-light">Comprehensive digital solutions for your business growth</p>
          </div>
          <div className="sliding-container position-relative overflow-hidden">
            <div 
              className="sliding-wrapper d-flex transition-transform" 
              style={{
                transform: `translateX(-${currentSlide * 320}px)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {[...slidingServices, ...slidingServices].map((service, index) => (
                <div key={index} className="slide-card mx-2" style={{ minWidth: '300px' }}>
                  <div className="card h-100 text-center border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div 
                        className="icon-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: '80px',
                          height: '80px',
                          backgroundColor: service.color,
                          borderRadius: '50%'
                        }}
                      >
                        <i className={`${service.icon} fa-2x text-white`}></i>
                      </div>
                      <h5 className="card-title">{service.name}</h5>
                      <p className="card-text text-muted">{service.description}</p>
                      <Link to="/services" className="btn btn-outline-primary btn-sm">Learn More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Static Services Section */}
      <section className="py-5 bg-gradient-primary section-pattern">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Why Choose Our Services?</h2>
            <p className="lead text-light">Quality features that set us apart</p>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 text-center border-0 shadow-sm">
                  <div className="card-body">
                    <i className={`${service.icon} fa-3x text-primary mb-3`}></i>
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                    <Link to="/services" className="btn btn-outline-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Start Your Project?</h2>
          <p className="lead mb-4">Let's discuss how we can help transform your digital presence and grow your business.</p>
          <Link to="/contact" className="btn btn-gradient btn-lg">Get Free Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;