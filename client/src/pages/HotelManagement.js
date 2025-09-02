import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HotelManagement = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const techRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleElementIntersection = (entries) => {
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
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleElementIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const coreFeatures = [
    { icon: '👥', title: 'Customer Management', desc: 'Complete guest registration & check-in/out processes' },
    { icon: '🏨', title: 'Room Management', desc: 'Room allocation, availability tracking & status updates' },
    { icon: '👨💼', title: 'Employee Management', desc: 'Staff information & department management' },
    { icon: '🎯', title: 'Reception Dashboard', desc: 'Centralized control panel for all operations' }
  ];

  const techStack = [
    { name: 'Java Swing', color: '#f89820', icon: '☕' },
    { name: 'MySQL', color: '#00758f', icon: '🗄️' },
    { name: 'JDBC', color: '#ed1c24', icon: '🔗' },
    { name: 'NetBeans', color: '#1b6ec8', icon: '💻' }
  ];

  const capabilities = [
    'ID Verification (Passport, Aadhar, Voter ID, Driving License)',
    'Real-time Room Availability Checking',
    'Automatic Billing & Payment Processing',
    'Pick-up Service Coordination',
    'Department-wise Staff Organization',
    'Transportation Service Management'
  ];

  return (
    <div className="hotel-management-page">
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes rotate3D {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .scroll-animate {
          opacity: 0;
          transition: all 0.8s ease-out;
        }
        
        .scroll-animate.fade-up { transform: translateY(30px); }
        .scroll-animate.fade-left { transform: translateX(-30px); }
        .scroll-animate.fade-right { transform: translateX(30px); }
        .scroll-animate.scale { transform: scale(0.9); }
        
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        .delay-6 { transition-delay: 0.6s; }
        .delay-7 { transition-delay: 0.7s; }
        .delay-8 { transition-delay: 0.8s; }
        
        .gallery-item {
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 15px;
          overflow: hidden;
          position: relative;
        }
        
        .gallery-item:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(0,102,102,0.8), rgba(26,35,126,0.8));
          opacity: 0;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          z-index: 2;
        }
        
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
        
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease;
        }
        
        .popup-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          animation: zoomIn 0.3s ease;
        }
        
        .popup-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        
        .popup-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: white;
          border: none;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        
        .popup-close:hover {
          background: #ff4444;
          color: white;
          transform: scale(1.1);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoomIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .gallery-item {
            margin-bottom: 20px;
          }
          .popup-content {
            max-width: 95vw;
            max-height: 80vh;
          }
          .popup-close {
            top: -35px;
            width: 30px;
            height: 30px;
            font-size: 16px;
          }
        }
        
        @media (max-width: 480px) {
          .gallery-item {
            margin-bottom: 15px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section" style={{
        marginTop: '76px',
        background: 'linear-gradient(135deg, #006666 0%, #004d4d 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center" style={{ minHeight: '100vh' }} ref={heroRef}>
            <div className="col-lg-6">
              <div className="scroll-animate fade-left delay-1" data-animate-id="hero-badge">
                <span style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '1px'
                }}>
                  🏨 DESKTOP APPLICATION
                </span>
              </div>
              
              <h1 className="scroll-animate fade-left delay-2" data-animate-id="hero-title" style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                lineHeight: '1.1',
                margin: '20px 0',
                background: 'linear-gradient(135deg, #ffffff 0%, #b3e5fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                METROPOLE<br />
                Hotel Management<br />
                System
              </h1>
              
              <p className="scroll-animate fade-left delay-3" data-animate-id="hero-desc" style={{
                fontSize: '1.2rem',
                lineHeight: '1.6',
                marginBottom: '30px',
                color: 'rgba(255,255,255,0.9)'
              }}>
                Comprehensive desktop application built in Java Swing for streamlined hotel operations with intuitive interface and robust database management.
              </p>
              
              <div className="scroll-animate fade-left delay-4" data-animate-id="hero-buttons">
                <Link to="/contact" style={{
                  background: 'linear-gradient(135deg, #ffc107 0%, #ff8f00 100%)',
                  color: '#1a237e',
                  padding: '15px 30px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  marginRight: '15px',
                  display: 'inline-block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                  View Live Demo →
                </Link>
                
                <Link to="/contact" style={{
                  border: '2px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  padding: '13px 28px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  Download Source
                </Link>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="scroll-animate fade-right delay-3" data-animate-id="hero-image" style={{
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '30px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  animation: 'pulse 4s ease-in-out infinite'
                }}>
                  <div style={{
                    fontSize: '8rem',
                    marginBottom: '20px',
                    animation: 'rotate3D 10s linear infinite'
                  }}>🏨</div>
                  <h3 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>METROPOLE</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>Professional Hotel Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="features-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container" ref={featuresRef}>
          <div className="text-center mb-5">
            <p className="scroll-animate fade-up delay-1" data-animate-id="features-badge" style={{
              color: '#006666',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>🏨 CORE MANAGEMENT MODULES</p>
            
            <h2 className="scroll-animate fade-up delay-2" data-animate-id="features-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1a237e',
              marginBottom: '20px'
            }}>
              Comprehensive Hotel <span style={{ color: '#006666' }}>Operations</span>
            </h2>
          </div>
          
          <div className="row g-4">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`col-lg-6 scroll-animate fade-up delay-${index + 3}`} data-animate-id={`feature-${index}`}>
                <div style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(0,102,102,0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,102,102,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '20px',
                    animation: 'float 3s ease-in-out infinite'
                  }}>{feature.icon}</div>
                  
                  <h4 style={{
                    color: '#1a237e',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    marginBottom: '15px'
                  }}>{feature.title}</h4>
                  
                  <p style={{
                    color: '#666',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    margin: 0
                  }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-section py-5" style={{ backgroundColor: 'white' }}>
        <div className="container" ref={techRef}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="scroll-animate fade-left delay-1" data-animate-id="tech-badge" style={{
                color: '#006666',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>🔧 TECHNOLOGY STACK</p>
              
              <h2 className="scroll-animate fade-left delay-2" data-animate-id="tech-title" style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#1a237e',
                marginBottom: '20px'
              }}>
                Built with <span style={{ color: '#006666' }}>Modern</span><br />
                Technologies
              </h2>
              
              <p className="scroll-animate fade-left delay-3" data-animate-id="tech-desc" style={{
                color: '#666',
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '30px'
              }}>
                Developed using robust Java Swing framework with MySQL database integration, ensuring reliable performance and seamless user experience.
              </p>
              
              <div className="scroll-animate fade-left delay-4" data-animate-id="tech-list">
                <h5 style={{ color: '#1a237e', marginBottom: '15px' }}>System Capabilities:</h5>
                {capabilities.map((capability, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      background: '#006666',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                      fontSize: '12px',
                      color: 'white'
                    }}>✓</span>
                    <span style={{ color: '#666', fontSize: '14px' }}>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="row g-3">
                {techStack.map((tech, index) => (
                  <div key={index} className={`col-6 scroll-animate scale delay-${index + 3}`} data-animate-id={`tech-${index}`}>
                    <div style={{
                      background: `linear-gradient(135deg, ${tech.color}15 0%, ${tech.color}25 100%)`,
                      padding: '25px',
                      borderRadius: '20px',
                      textAlign: 'center',
                      border: `2px solid ${tech.color}30`,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                      e.currentTarget.style.background = `linear-gradient(135deg, ${tech.color}25 0%, ${tech.color}35 100%)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.background = `linear-gradient(135deg, ${tech.color}15 0%, ${tech.color}25 100%)`;
                    }}>
                      <div style={{
                        fontSize: '2.5rem',
                        marginBottom: '15px',
                        animation: 'pulse 2s ease-in-out infinite'
                      }}>{tech.icon}</div>
                      
                      <h5 style={{
                        color: tech.color,
                        fontSize: '1rem',
                        fontWeight: '700',
                        margin: 0
                      }}>{tech.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="gallery-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container" ref={galleryRef}>
          <div className="text-center mb-5">
            <p className="scroll-animate fade-up delay-1" data-animate-id="gallery-badge" style={{
              color: '#006666',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>📸 PROJECT GALLERY</p>
            
            <h2 className="scroll-animate fade-up delay-2" data-animate-id="gallery-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1a237e',
              marginBottom: '20px'
            }}>
              System <span style={{ color: '#006666' }}>Screenshots</span> & Interface
            </h2>
            
            <p className="scroll-animate fade-up delay-3" data-animate-id="gallery-desc" style={{
              color: '#666',
              fontSize: '16px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Explore the comprehensive interface and features of our Hotel Management System
            </p>
          </div>
          
          <div className="row g-4">
            {[
              { num: 1, title: 'Login Interface' },
              { num: 2, title: 'Dashboard Overview' },
              { num: 3, title: 'Customer Registration' },
              { num: 4, title: 'Room Management' },
              { num: 5, title: 'Booking System' },
              { num: 6, title: 'Employee Management' },
              { num: 7, title: 'Billing System' },
              { num: 8, title: 'Reports Module' },
              { num: 9, title: 'Settings Panel' },
              { num: 10, title: 'Database View' }
            ].map((item, index) => (
              <div key={item.num} className={`col-lg-4 col-md-6 scroll-animate fade-up delay-${Math.min(index + 4, 8)}`} data-animate-id={`gallery-${item.num}`}>
                <div 
                  className="gallery-item"
                  onClick={() => setSelectedImage(`/images/h${item.num}.png`)}
                  style={{
                    position: 'relative',
                    background: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    border: '2px solid rgba(0,102,102,0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden', background: 'linear-gradient(135deg, #006666 0%, #004d4d 100%)' }}>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'white'
                    }}>
                      <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🏨</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{item.title}</div>
                      <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '5px' }}>Screenshot {item.num}</div>
                    </div>
                    
                    <img 
                      src={`/images/h${item.num}.png`}
                      alt={`${item.title} - Hotel Management System`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1
                      }}
                      onLoad={(e) => {
                        e.target.previousSibling.style.display = 'none';
                      }}
                    />
                    
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(0,102,102,0.8), rgba(26,35,126,0.8))',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: '600',
                      zIndex: 2
                    }}
                    className="gallery-overlay">
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔍</div>
                        <div>Click to Enlarge</div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ padding: '15px' }}>
                    <h5 style={{ color: '#1a237e', fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>
                      {item.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5 scroll-animate fade-up delay-8" data-animate-id="gallery-cta">
            <p style={{ color: '#666', fontSize: '16px', marginBottom: '20px' }}>
              Want to see the system in action?
            </p>
            <Link to="/contact" style={{
              background: 'linear-gradient(135deg, #006666 0%, #004d4d 100%)',
              color: 'white',
              padding: '12px 25px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '600',
              display: 'inline-block',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>  
              Request Live Demo →
            </Link>
          </div>
        </div>
      </section>

      {/* Business Value Section */}
      <section className="value-section py-5" style={{
        background: 'linear-gradient(135deg, #1a237e 0%, #006666 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="scroll-animate fade-up delay-1" data-animate-id="value-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '20px'
            }}>
              Business <span style={{ color: '#ffc107' }}>Value</span> & Benefits
            </h2>
          </div>
          
          <div className="row g-4">
            {[
              { icon: '💰', title: 'Operational Benefits', items: ['Streamlined hotel operations', 'Real-time room availability', 'Automated billing system', 'Comprehensive guest history'] },
              { icon: '📈', title: 'Scalability Features', items: ['Modular architecture', 'Database-driven approach', 'Multi-user capability', 'Extensible design'] }
            ].map((section, index) => (
              <div key={index} className={`col-lg-6 scroll-animate fade-up delay-${index + 2}`} data-animate-id={`value-${index}`}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '30px',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  height: '100%'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{section.icon}</div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>{section.title}</h4>
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '12px'
                    }}>
                      <span style={{
                        width: '18px',
                        height: '18px',
                        background: '#ffc107',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '12px',
                        fontSize: '10px',
                        color: '#1a237e'
                      }}>✓</span>
                      <span style={{ fontSize: '14px' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <h2 className="scroll-animate fade-up delay-1" data-animate-id="cta-title" style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#1a237e',
            marginBottom: '20px'
          }}>
            Ready to Transform Your <span style={{ color: '#006666' }}>Hotel Operations?</span>
          </h2>
          
          <p className="scroll-animate fade-up delay-2" data-animate-id="cta-desc" style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '30px'
          }}>
            Get started with our comprehensive hotel management solution today
          </p>
          
          <div className="scroll-animate fade-up delay-3" data-animate-id="cta-buttons">
            <Link to="/contact" style={{
              background: 'linear-gradient(135deg, #006666 0%, #004d4d 100%)',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '600',
              marginRight: '15px',
              display: 'inline-block',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              Get Started Now →
            </Link>
            
            <Link to="/contact" style={{
              border: '2px solid #006666',
              color: '#006666',
              padding: '13px 28px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '600',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#006666';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#006666';
              e.target.style.transform = 'translateY(0)';
            }}>
              View Documentation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="popup-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img 
              src={selectedImage}
              alt="Hotel Management System Screenshot"
              className="popup-image"
              onError={(e) => {
                setSelectedImage(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelManagement;