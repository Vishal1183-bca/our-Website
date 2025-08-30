import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const AppDevelopment = () => {
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
    <div className="app-development-page">
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
          .strategy-section .row {
            flex-direction: column;
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
        background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f8f9ff 100%)',
        marginTop: '76px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <div className="scroll-animate fade-right delay-1" data-animate-id="hero-image" style={{ textAlign: 'center' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  display: 'inline-block'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Mobile App Development" 
                    style={{ width: '300px', height: '200px', borderRadius: '15px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="scroll-animate fade-left delay-2" data-animate-id="hero-content">
                <p className="text-uppercase fw-bold mb-2" style={{ color: '#e91e63', fontSize: '14px', letterSpacing: '1px' }}>OVERVIEW</p>
                <h1 className="fw-bold mb-4" style={{ color: '#1a237e', fontSize: '2.5rem', lineHeight: '1.2' }}>
                  Custom Mobile App Solutions
                </h1>
                <p className="mb-4" style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                  If you are looking to build scalable and fast web applications that strive for your business growth, we can help you. To create reliable and fast applications, we follow six steps development process that includes consultation, web app planning, UI/UX design, web development, testing, and deployment.
                </p>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                  We offer different types of customized web application development as per your different needs. Whether you want to develop a custom web application, eCommerce, or web portal, we are the best fit for your requirements.Get a comprehensive set of services for your mobile app development needs. From concept to deployment, the company takes care of it all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="strategy-section py-5" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <div className="scroll-animate fade-left delay-1" data-animate-id="strategy-content">
                <h2 className="fw-bold mb-4" style={{ color: '#1a237e', fontSize: '2.2rem', lineHeight: '1.2' }}>
                  Get a complete strategy of mobile app development
                </h2>
                <h3 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.5rem' }}>
                  Hire Expert Cross Platform Mobile App Developers to Boost Your Business
                </h3>
                <p className="mb-4" style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                  Leverage the power of iOS and Android to build custom apps tailored to your needs.Make use of native and cross-platform solutions to create an impactful app experience.Work with experienced UI/UX designers who can bring life to your ideas.Get expert consultation, prototyping and other necessary services for better results.Rely on us for web development services - no matter what you need, we have got you covered!
                </p>
                
                <div className="row mb-4">
                  <div className="col-6">
                    <p style={{ color: '#666', fontSize: '14px' }}># User-Friendly Interface</p>
                    <p style={{ color: '#666', fontSize: '14px' }}># 95% Repeat business</p>
                  </div>
                  <div className="col-6">
                    <p style={{ color: '#666', fontSize: '14px' }}># 98% Happy Clients</p>
                    <p style={{ color: '#666', fontSize: '14px' }}># Quality Service UX</p>
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  className="btn px-4 py-2"
                  style={{
                    background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
                    color: 'white',
                    borderRadius: '25px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    border: 'none'
                  }}
                >
                  Request A Quote →
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="scroll-animate fade-right delay-2" data-animate-id="advantages-content">
                <h3 className="fw-bold mb-4" style={{ color: '#1a237e', fontSize: '1.5rem' }}>
                  Advantages of Mobile App Development
                </h3>
                <div className="advantages-list">
                  {[
                    'Substitution of Traditional Method of Market',
                    'An effective way of Branding and engaging the audience',
                    'Reduction in cost and raises standards',
                    'Increase in Revenue',
                    'Gives more value to customers',
                    '24*7 support facility',
                    'Feasible and Convenient',
                    'Secured from vulnerable attacks'
                  ].map((advantage, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                      <div className="me-3" style={{ 
                        width: '20px', 
                        height: '20px', 
                        backgroundColor: '#ffc107', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>✓</span>
                      </div>
                      <span style={{ color: '#666', fontSize: '14px' }}>{advantage}</span>
                    </div>
                  ))}
                </div>
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
            <h2 className="fw-bold scroll-animate fade-up delay-2" data-animate-id="services-title" style={{ color: '#1a237e', fontSize: '2.5rem' }}>Our Services</h2>
            <p className="scroll-animate fade-up delay-3" data-animate-id="services-desc" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              We think big and have hands in all leading technology platforms to provide you wide array of services.
            </p>
          </div>
          
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="service-card scroll-animate fade-up delay-1" data-animate-id="ios-service" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2.5rem',
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
                <div className="d-flex align-items-center mb-3">
                  <div style={{ fontSize: '3rem', marginRight: '1rem' }}>📱</div>
                  <h4 className="fw-bold mb-0" style={{ color: '#1a237e', fontSize: '1.3rem' }}>iOS App Development</h4>
                </div>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
                  iOS application development is the process of making mobile applications for Apple hardware, including iPhone, iPad and iPod Touch.
                </p>
              </div>
            </div>
            
            <div className="col-lg-6 mb-4">
              <div className="service-card scroll-animate fade-up delay-2" data-animate-id="android-service" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2.5rem',
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
                <div className="d-flex align-items-center mb-3">
                  <div style={{ fontSize: '3rem', marginRight: '1rem' }}>🤖</div>
                  <h4 className="fw-bold mb-0" style={{ color: '#1a237e', fontSize: '1.3rem' }}>Android App Development</h4>
                </div>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
                  Android App Development is the process by which new applications are created for the Android operating system.
                </p>
              </div>
            </div>
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
              Our design process follows a proven approach. We begin with a deep understanding of your needs and create a planning template.
            </p>
          </div>
          
          <div className="process-steps">
            {[
              {
                number: '1',
                title: 'Requirement Gathering',
                description: 'As with most custom projects, we have a tendency to begin by assembling information from the client. The initial analysis efforts within the project definition and a few general consultations is important for clarity. These initial be in the form of a project discovery session where lots of questions and clarifications are made. During the research and discovery phase, it is important to define web development strategies that work best for you and consider the Purpose,Target Audience,Content.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '2',
                title: 'Prototype',
                description: 'An actual prototype is designed based on the information gathered from quick design prototype is built, tested and reworked until an acceptable prototype is achieved. A prototype usually turns out to be a very crude version of the actual system, possible exhibiting limited functional capabilities, low reliability, and inefficient performance as compared to actual software.It also creates a base to produce the final system or software.',
                image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '3',
                title: 'Deployment',
                description: 'Deployment in web or app development means pushing changes or updates from one deployment environment to another deployment refers to moving an object to a space where some action can be performed on it. In the case of software development, deployment means making an application ready for delivery. The deployment process flow consists of 5 steps: Planning, development, testing, deploying, and monitoring.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '4',
                title: 'Support & Maintenance',
                description: '24/7 Emergency Support & Response, Basic support and troubleshooting, System availability and performance monitoring. A highly professional, experienced, and well-trained team to handle your project. Serving customers without any delay is the mission of our company.',
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

export default AppDevelopment;