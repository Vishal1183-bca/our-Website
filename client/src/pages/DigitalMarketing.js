import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="ui-ux-page">
      <style jsx>{`
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
        
        .scroll-animate.delay-1 { transition-delay: 0.1s; }
        .scroll-animate.delay-2 { transition-delay: 0.2s; }
        .scroll-animate.delay-3 { transition-delay: 0.3s; }
        .scroll-animate.delay-4 { transition-delay: 0.4s; }
        .scroll-animate.delay-5 { transition-delay: 0.5s; }
        .scroll-animate.delay-6 { transition-delay: 0.6s; }
        
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 1.8rem !important;
          }
          .hero-section .container {
            padding: 0 1rem;
          }
          .services-grid .col-lg-4 {
            margin-bottom: 2rem;
          }
          .process-section .row {
            flex-direction: column;
          }
          .process-item {
            margin-bottom: 3rem;
          }
        }
        
        @media (max-width: 576px) {
          .hero-section h1 {
            font-size: 1.5rem !important;
          }
          .service-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section py-5" style={{ 
        background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 50%, #f8f9ff 100%)',
        marginTop: '76px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <div className="scroll-animate fade-left delay-1" data-animate-id="hero-content">
                <p className="text-uppercase fw-bold mb-2" style={{ color: '#e91e63', fontSize: '14px', letterSpacing: '1px' }}>OVERVIEW</p>
                <h1 className="fw-bold mb-4" style={{ color: '#1a237e', fontSize: '2.5rem', lineHeight: '1.2' }}>
                  Creative UI/UX Design Services
                </h1>
                <p className="mb-4" style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                  Transform your digital presence with exceptional user interface and user experience design. We create intuitive, engaging, and conversion-focused designs that delight users and drive business growth across all digital platforms.
                </p>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                  Our UI/UX design approach combines user research, creative design thinking, and data-driven insights to deliver experiences that not only look beautiful but also perform exceptionally well in achieving your business objectives.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="scroll-animate fade-right delay-2" data-animate-id="hero-image" style={{ textAlign: 'center' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  display: 'inline-block'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="UI/UX Design" 
                    style={{ width: '300px', height: '200px', borderRadius: '15px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Design Tools */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 scroll-animate fade-up delay-3" data-animate-id="tech-icons">
                {[
                  { name: 'Figma', color: '#f24e1e' },
                  { name: 'Adobe XD', color: '#ff61f6' },
                  { name: 'Sketch', color: '#f7b500' },
                  { name: 'Photoshop', color: '#31a8ff' },
                  { name: 'Illustrator', color: '#ff9a00' },
                  { name: 'InVision', color: '#ff3366' },
                  { name: 'Principle', color: '#6c5ce7' },
                  { name: 'Framer', color: '#0055ff' }
                ].map((tool, index) => (
                  <div key={index} style={{
                    padding: '10px 20px',
                    background: 'white',
                    borderRadius: '25px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    color: tool.color,
                    fontWeight: '600',
                    fontSize: '14px'
                  }}>
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-uppercase fw-bold mb-2 scroll-animate fade-up delay-1" data-animate-id="services-subtitle" style={{ color: '#e91e63', fontSize: '14px', letterSpacing: '1px' }}>SERVICE</p>
            <h2 className="fw-bold scroll-animate fade-up delay-2" data-animate-id="services-title" style={{ color: '#1a237e', fontSize: '2.5rem' }}>Our UI/UX Design Services</h2>
            <p className="scroll-animate fade-up delay-3" data-animate-id="services-desc" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              We deliver comprehensive design solutions that enhance user satisfaction and drive business success.
            </p>
          </div>
          
          <div className="row services-grid">
            {[
              {
                title: 'User Research & Analysis',
                description: 'Deep dive into user behavior, needs, and pain points through comprehensive research methodologies to inform design decisions.',
                icon: '🔍'
              },
              {
                title: 'Wireframing & Prototyping',
                description: 'Create detailed wireframes and interactive prototypes to visualize user journeys and test functionality before development.',
                icon: '📐'
              },
              {
                title: 'Visual Design',
                description: 'Craft stunning visual interfaces with modern design principles, typography, color theory, and brand consistency.',
                icon: '🎨'
              },
              {
                title: 'Mobile App Design',
                description: 'Design intuitive and engaging mobile applications for iOS and Android platforms with platform-specific guidelines.',
                icon: '📱'
              },
              {
                title: 'Web Design',
                description: 'Create responsive and user-friendly web interfaces that work seamlessly across all devices and browsers.',
                icon: '💻'
              },
              {
                title: 'Usability Testing',
                description: 'Conduct thorough usability testing to identify issues and optimize user experience for better conversion rates.',
                icon: '🧪'
              }
            ].map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className={`service-card scroll-animate fade-up delay-${index + 1}`} data-animate-id={`service-${index}`} style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  height: '100%',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                  <h4 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.3rem' }}>{service.title}</h4>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-5" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-uppercase fw-bold mb-2 scroll-animate fade-up delay-1" data-animate-id="process-subtitle" style={{ color: '#e91e63', fontSize: '14px', letterSpacing: '1px' }}>PROCESS</p>
            <h2 className="fw-bold scroll-animate fade-up delay-2" data-animate-id="process-title" style={{ color: '#1a237e', fontSize: '2.5rem' }}>Our Design Process</h2>
            <p className="scroll-animate fade-up delay-3" data-animate-id="process-desc" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Our user-centered design process ensures we create experiences that truly resonate with your target audience.
            </p>
          </div>
          
          <div className="process-steps">
            {[
              {
                number: '1',
                title: 'Discovery & Research',
                description: 'We start by understanding your business goals, target audience, and market landscape. Through user interviews, surveys, and competitive analysis, we gather insights that inform our design strategy and ensure we create solutions that meet real user needs.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '2',
                title: 'Ideation & Wireframing',
                description: 'Based on research insights, we brainstorm solutions and create detailed wireframes that outline the structure and functionality. This phase focuses on information architecture, user flows, and creating the blueprint for an intuitive user experience.',
                image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '3',
                title: 'Visual Design & Prototyping',
                description: 'We bring wireframes to life with stunning visual designs that align with your brand identity. Interactive prototypes are created to demonstrate user interactions and validate design concepts before moving to development.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '4',
                title: 'Testing & Iteration',
                description: 'We conduct usability testing with real users to identify pain points and areas for improvement. Based on feedback, we iterate and refine the design to ensure optimal user experience and maximum conversion rates.',
                image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              }
            ].map((step, index) => (
              <div key={index} className={`process-item mb-5 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4">
                    <div className={`scroll-animate ${index % 2 === 0 ? 'fade-right' : 'fade-left'} delay-${index + 1}`} data-animate-id={`process-image-${index}`}>
                      <div style={{
                        background: 'white',
                        borderRadius: '20px',
                        padding: '1rem',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative'
                      }}>
                        <img 
                          src={step.image}
                          alt={step.title}
                          style={{ width: '100%', height: '250px', borderRadius: '15px', objectFit: 'cover' }}
                        />
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          left: '-10px',
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '1.5rem',
                          fontWeight: 'bold'
                        }}>
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className={`scroll-animate ${index % 2 === 0 ? 'fade-left' : 'fade-right'} delay-${index + 2}`} data-animate-id={`process-content-${index}`}>
                      <h3 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.8rem' }}>{step.title}</h3>
                      <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="lets-work-together py-5" style={{ 
        background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <p className="text-uppercase fw-bold mb-3 scroll-animate fade-up delay-1" data-animate-id="cta-subtitle" style={{ 
                color: '#e91e63', 
                fontSize: '14px', 
                letterSpacing: '2px'
              }}>
                LET'S WORK TOGETHER
              </p>
              <h2 className="fw-bold mb-4 scroll-animate fade-up delay-2" data-animate-id="cta-title" style={{ 
                color: '#1a237e', 
                fontSize: '2.5rem',
                lineHeight: '1.2'
              }}>
                We Love to Listen to Your<br />Requirements
              </h2>
              
              <div className="mb-4 scroll-animate fade-up delay-3" data-animate-id="cta-button">
                <Link 
                  to="/contact" 
                  className="btn px-4 py-2"
                  style={{
                    background: 'white',
                    color: '#1a237e',
                    border: '2px solid #1a237e',
                    borderRadius: '25px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#1a237e';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#1a237e';
                  }}
                >
                  Estimate Project →
                </Link>
              </div>
              
              <div className="d-flex align-items-center justify-content-center gap-2 scroll-animate fade-up delay-4" data-animate-id="cta-phone" style={{ color: '#666' }}>
                <span>Or call us now</span>
                <i className="fas fa-phone" style={{ color: '#1a237e' }}></i>
                <a href="tel:+918866392521" style={{ 
                  color: '#1a237e', 
                  textDecoration: 'none', 
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e91e63'}
                onMouseLeave={(e) => e.target.style.color = '#1a237e'}>
                  +91 88663 92521
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '150px',
          height: '100px',
          background: 'linear-gradient(135deg, #ffd54f 0%, #ffb300 100%)',
          borderRadius: '0 100% 0 0',
          opacity: 0.8,
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '150px',
          height: '100px',
          background: 'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)',
          borderRadius: '100% 0 0 0',
          opacity: 0.8,
          zIndex: 1
        }}></div>
      </section>
    </div>
  );
};

export default DigitalMarketing;