import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const DesktopApplication = () => {
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
    <div className="desktop-application-page">
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
                  Professional Desktop Application Development
                </h1>
                <p className="mb-4" style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                  Transform your business with powerful desktop applications that deliver exceptional performance and user experience. We create robust, scalable, and feature-rich desktop solutions that work seamlessly across Windows, macOS, and Linux platforms.
                </p>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                  Desktop applications offer superior performance, offline functionality, and enhanced security compared to web-based solutions. Whether you need enterprise software, productivity tools, or specialized applications, we deliver solutions that meet your exact requirements.
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
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Desktop Application Development" 
                    style={{ width: '300px', height: '200px', borderRadius: '15px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technology Icons */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 scroll-animate fade-up delay-3" data-animate-id="tech-icons">
                {[
                  { name: 'C#/.NET', color: '#512bd4' },
                  { name: 'Java', color: '#ed8b00' },
                  { name: 'Python', color: '#3776ab' },
                  { name: 'C++', color: '#00599c' },
                  { name: 'Electron', color: '#47848f' },
                  { name: 'Qt', color: '#41cd52' },
                  { name: 'WPF', color: '#512bd4' },
                  { name: 'JavaFX', color: '#ed8b00' }
                ].map((tech, index) => (
                  <div key={index} style={{
                    padding: '10px 20px',
                    background: 'white',
                    borderRadius: '25px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    color: tech.color,
                    fontWeight: '600',
                    fontSize: '14px'
                  }}>
                    {tech.name}
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
            <h2 className="fw-bold scroll-animate fade-up delay-2" data-animate-id="services-title" style={{ color: '#1a237e', fontSize: '2.5rem' }}>Our Desktop Application Services</h2>
            <p className="scroll-animate fade-up delay-3" data-animate-id="services-desc" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              We deliver comprehensive desktop application solutions tailored to your business needs and technical requirements.
            </p>
          </div>
          
          <div className="row services-grid">
            {[
              {
                title: 'Custom Desktop Software',
                description: 'Tailored desktop applications built from scratch to meet your specific business requirements with advanced functionality and seamless user experience.',
                icon: '💻'
              },
              {
                title: 'Cross-Platform Applications',
                description: 'Develop once, deploy everywhere. Our cross-platform solutions work seamlessly on Windows, macOS, and Linux systems.',
                icon: '🌐'
              },
              {
                title: 'Enterprise Applications',
                description: 'Robust enterprise-grade desktop solutions with advanced security, scalability, and integration capabilities for large organizations.',
                icon: '🏢'
              },
              {
                title: 'Database Integration',
                description: 'Seamless integration with various databases including SQL Server, MySQL, PostgreSQL, and Oracle for efficient data management.',
                icon: '🗄️'
              },
              {
                title: 'Legacy System Modernization',
                description: 'Transform your outdated desktop applications with modern technologies while preserving existing functionality and data.',
                icon: '🔄'
              },
              {
                title: 'Desktop App Maintenance',
                description: 'Ongoing support, updates, bug fixes, and performance optimization to keep your desktop applications running smoothly.',
                icon: '🛠️'
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
            <h2 className="fw-bold scroll-animate fade-up delay-2" data-animate-id="process-title" style={{ color: '#1a237e', fontSize: '2.5rem' }}>Our Development Process</h2>
            <p className="scroll-animate fade-up delay-3" data-animate-id="process-desc" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Our structured approach ensures efficient development and delivery of high-quality desktop applications.
            </p>
          </div>
          
          <div className="process-steps">
            {[
              {
                number: '1',
                title: 'Requirements Analysis',
                description: 'We begin with comprehensive analysis of your business needs, target users, and technical requirements. This includes understanding the platform preferences, performance expectations, integration needs, and security requirements. We also analyze existing systems and workflows to ensure seamless integration.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '2',
                title: 'Architecture & Design',
                description: 'Our team creates detailed system architecture and user interface designs. We focus on creating intuitive user experiences while ensuring robust backend architecture. This phase includes wireframing, UI/UX design, database design, and technical architecture planning.',
                image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '3',
                title: 'Development & Testing',
                description: 'Using agile methodology, we develop your desktop application with regular testing and quality assurance. Our development process includes unit testing, integration testing, performance testing, and security testing to ensure a robust and reliable application.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '4',
                title: 'Deployment & Support',
                description: 'We handle the complete deployment process including installation packages, user training, and documentation. Our ongoing support includes regular updates, bug fixes, performance monitoring, and technical assistance to ensure optimal application performance.',
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
              
             
              <div className="text-center scroll-animate fade-up delay-4" data-animate-id="work-4" style={{ color: '#666' }}>
                <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                  <span>Or call us now</span>
                  <i className="fas fa-phone" style={{ color: '#1a237e' }}></i>
                  <a href="tel:+919586399316" style={{ color: '#1a237e', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}
                     onMouseEnter={(e) => e.target.style.color = '#e91e63'}
                     onMouseLeave={(e) => e.target.style.color = '#1a237e'}>
                    +91 9586399316
                  </a>
                </div>
                <div>
                  <a href="tel:+919173040278" style={{ color: '#1a237e', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}
                     onMouseEnter={(e) => e.target.style.color = '#e91e63'}
                     onMouseLeave={(e) => e.target.style.color = '#1a237e'}>
                    +91 9173040278
                  </a>
                </div>
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

export default DesktopApplication;