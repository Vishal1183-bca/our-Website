import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
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
    <div className="web-development-page">
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
                  Creative Web Development Service
                </h1>
                <p className="mb-4" style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                  A high-performance website is helpful for higher audience engagement and conversion rates. Your website is a powerful tool for expanding your business worldwide, whether you are a start-up or big enterprise, we design SEO-friendly, optimized & high performing website to make a positive and long-lasting impact on your customers.
                </p>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                  Web development can range from building simple static websites to complex web applications that require high levels of functionality and interactivity. It is an essential part of modern-day businesses and organizations, as a website can serve as a crucial tool for marketing, communication, and customer engagement.
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
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Web Development" 
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
                  { name: 'PHP', color: '#777bb4' },
                  { name: '.NET', color: '#512bd4' },
                  { name: 'Rails', color: '#cc0000' },
                  { name: 'Python', color: '#3776ab' },
                  { name: 'Node.js', color: '#339933' },
                  { name: 'MySQL', color: '#4479a1' },
                  { name: 'WordPress', color: '#21759b' },
                  { name: 'Magento', color: '#ee672f' }
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
            <h2 className="fw-bold scroll-animate fade-up delay-2" data-animate-id="services-title" style={{ color: '#1a237e', fontSize: '2.5rem' }}>Our Services</h2>
            <p className="scroll-animate fade-up delay-3" data-animate-id="services-desc" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              We think big and have hands in all leading technology platforms to provide you wide array of services.
            </p>
          </div>
          
          <div className="row services-grid">
            {[
              {
                title: 'Customized Website',
                description: 'Want to stand out from the competition? Avail our client centric custom website designing services in accordance with your business goals and theme.',
                icon: '💻'
              },
              {
                title: 'Landing Web Page Designing',
                description: 'A separate landing page for your paid ads gives you proper analysis of conversion rate from the ad. We create attractive one page parallax website for your business.',
                icon: '🎨'
              },
              {
                title: 'Static Website',
                description: 'Best for small & Medium businesses which needs an informative website to showcase their services & products and let visitors contact you.',
                icon: '📄'
              },
              {
                title: 'Dynamic Website',
                description: 'Get full control of a functional rich, fine-tuned and interactive website with our user-friendly easy to use admin panel to manage website.',
                icon: '⚡'
              },
              {
                title: 'Animated Website',
                description: 'Want a website which speaks your story? Our team of expert webs designers can cook a CSS animated website which can easily makes your website stand out.',
                icon: '🎬'
              },
              {
                title: 'Website Redesign',
                description: 'Revamping your site, which includes updating content,refreshing layouts, & improving navigation for better conversions and site performance.',
                icon: '🔄'
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

export default WebDevelopment;