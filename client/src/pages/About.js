import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
    <div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .scroll-animate {
          opacity: 0;
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .scroll-animate.fade-up {
          transform: translateY(50px);
        }
        
        .scroll-animate.fade-left {
          transform: translateX(-50px);
        }
        
        .scroll-animate.fade-right {
          transform: translateX(50px);
        }
        
        .scroll-animate.delay-1 { transition-delay: 0.1s; }
        .scroll-animate.delay-2 { transition-delay: 0.2s; }
        .scroll-animate.delay-3 { transition-delay: 0.3s; }
        .scroll-animate.delay-4 { transition-delay: 0.4s; }
        .scroll-animate.delay-5 { transition-delay: 0.5s; }
        .scroll-animate.delay-6 { transition-delay: 0.6s; }
        .scroll-animate.delay-7 { transition-delay: 0.7s; }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        .pulse-element {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .rotating-element {
          animation: rotate 20s linear infinite;
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #1a237e 25%, #e91e63 50%, #1a237e 75%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        /* Responsive Design */
        @media (max-width: 1400px) {
          .about-hero .container {
            max-width: 1200px;
          }
          .about-hero h2 {
            font-size: 2.2rem !important;
          }
        }
        
        @media (max-width: 1200px) {
          .about-hero h2 {
            font-size: 2rem !important;
          }
          .about-hero h3 {
            font-size: 1.6rem !important;
          }
          .vision-mission-section h2 {
            font-size: 1.9rem !important;
          }
        }
        
        @media (max-width: 992px) {
          .about-hero h2 {
            font-size: 1.8rem !important;
            text-align: center;
          }
          .about-hero h3 {
            font-size: 1.4rem !important;
          }
          .about-hero .about-image-container {
            margin-top: 3rem;
          }
          .vision-mission-section .vision-card,
          .vision-mission-section .mission-card {
            margin-bottom: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .about-hero {
            padding: 3rem 0 !important;
          }
          .about-hero h2 {
            font-size: 1.6rem !important;
            line-height: 1.3 !important;
          }
          .about-hero h3 {
            font-size: 1.2rem !important;
          }
          .about-hero p {
            font-size: 14px !important;
          }
          .about-hero .about-content {
            padding: 0 1rem;
          }
          .vision-mission-section {
            padding: 2rem 0 !important;
          }
          .vision-mission-section h2 {
            font-size: 1.5rem !important;
          }
          .vision-card, .mission-card {
            padding: 1.5rem !important;
          }
          .why-choose-section {
            padding: 2rem 0 !important;
          }
          .why-choose-section h2 {
            font-size: 1.6rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .about-hero h2 {
            font-size: 1.4rem !important;
          }
          .about-hero .container {
            padding: 0 1rem;
          }
          .vision-mission-section .container {
            padding: 0 1rem;
          }
          .why-choose-section .container {
            padding: 0 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .about-hero h2 {
            font-size: 1.3rem !important;
          }
          .about-hero h3 {
            font-size: 1.1rem !important;
          }
        }
      `}</style>

      {/* Hero About Section */}
      <section className="about-hero py-5" style={{ 
        background: 'linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 50%, #f0f8ff 100%)', 
        position: 'relative',
        overflow: 'hidden',
        marginTop: '76px'
      }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 mb-4">
              <div className="about-content">
                <h2 className="fw-bold mb-4 scroll-animate fade-left delay-1 shimmer-text" data-animate-id="about-title" style={{ 
                  fontSize: '2.5rem', 
                  lineHeight: '1.2',
                  marginBottom: '2rem'
                }}>
                  Unlock Your Business's True Potential
                </h2>
                
                <p className="mb-4 scroll-animate fade-left delay-2" data-animate-id="about-desc1" style={{ 
                  color: '#666', 
                  fontSize: '16px', 
                  lineHeight: '1.6' 
                }}>
                  With <span style={{ color: '#e91e63', fontWeight: '600' }}>GJTecho.com</span> by your side, you can unlock the true potential of your business and take it to the next level with our comprehensive set of digital solutions. We'll help you create an engaging website that will draw in new customers, craft high-quality content to boost online visibility, and leverage social media to increase brand awareness.
                </p>
                
                <h3 className="fw-bold mb-3 scroll-animate fade-left delay-3" data-animate-id="about-subtitle1" style={{ 
                  color: '#1a237e', 
                  fontSize: '1.8rem' 
                }}>
                  More For Less
                </h3>
                
                <p className="mb-4 scroll-animate fade-left delay-4" data-animate-id="about-desc2" style={{ 
                  color: '#666', 
                  fontSize: '16px', 
                  lineHeight: '1.6' 
                }}>
                  At GJTecho.com, we believe in delivering <span style={{ color: '#e91e63', fontWeight: '600' }}>more for less</span>. We offer a wide range of IT solutions at prices that are much lower than most other digital agencies but with no compromise on quality or service delivery.
                </p>
                
                <h3 className="fw-bold mb-3 scroll-animate fade-left delay-5" data-animate-id="about-subtitle2" style={{ 
                  color: '#1a237e', 
                  fontSize: '1.8rem' 
                }}>
                  Achieve Your Goals
                </h3>
                
                <p className="mb-4 scroll-animate fade-left delay-6" data-animate-id="about-desc3" style={{ 
                  color: '#666', 
                  fontSize: '16px', 
                  lineHeight: '1.6' 
                }}>
                  Our talented team will analyze your goals and develop a tailored strategy that will help you reach them faster and more efficiently. With our advanced technology, we can provide the <span style={{ color: '#e91e63', fontWeight: '600' }}>highest quality of services</span> at a fraction of the cost, saving you time and money in the long run!
                </p>
                
                <div className="scroll-animate fade-left delay-7" data-animate-id="about-cta">
                  <Link 
                    to="/contact" 
                    className="btn px-4 py-2"
                    style={{
                      background: 'linear-gradient(135deg, #ff7b7b 0%, #ff9a9a 100%)',
                      color: 'white',
                      borderRadius: '25px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="col-lg-6 mb-4">
              <div className="about-image-container scroll-animate fade-right delay-3 floating-element" data-animate-id="about-image" style={{ 
                position: 'relative',
                textAlign: 'center'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team working together" 
                  className="img-fluid"
                  style={{ 
                    borderRadius: '20px',
                    maxWidth: '100%',
                    height: 'auto',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                />
                
                {/* Decorative Elements */}
                <div className="pulse-element" style={{
                  position: 'absolute',
                  top: '10%',
                  left: '-10%',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #ff7b7b 0%, #ff9a9a 100%)',
                  borderRadius: '50%',
                  opacity: 0.8,
                  zIndex: -1,
                  boxShadow: '0 0 20px rgba(255, 123, 123, 0.4)'
                }}></div>
                
                <div className="floating-element" style={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '-5%',
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #7b7bff 0%, #9a9aff 100%)',
                  borderRadius: '50%',
                  opacity: 0.8,
                  zIndex: -1,
                  boxShadow: '0 0 20px rgba(123, 123, 255, 0.4)',
                  animationDelay: '2s'
                }}></div>
                
                <div className="pulse-element" style={{
                  position: 'absolute',
                  top: '60%',
                  left: '-5%',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #7bff7b 0%, #9aff9a 100%)',
                  borderRadius: '50%',
                  opacity: 0.8,
                  zIndex: -1,
                  boxShadow: '0 0 20px rgba(123, 255, 123, 0.4)',
                  animationDelay: '4s'
                }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="rotating-element" style={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, rgba(233, 30, 99, 0.1), rgba(233, 30, 99, 0.2))',
          borderRadius: '50%',
          zIndex: 0,
          border: '2px dashed rgba(233, 30, 99, 0.3)'
        }}></div>
        
        <div className="floating-element" style={{
          position: 'absolute',
          bottom: '10%',
          left: '3%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, rgba(26, 35, 126, 0.1), rgba(26, 35, 126, 0.2))',
          borderRadius: '50%',
          zIndex: 0,
          border: '2px dashed rgba(26, 35, 126, 0.3)',
          animationDelay: '3s'
        }}></div>
        
        {/* Additional Floating Elements */}
        <div className="pulse-element" style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, rgba(255, 193, 7, 0.1), rgba(255, 193, 7, 0.2))',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          zIndex: 0,
          animationDelay: '1s'
        }}></div>
        
        <div className="rotating-element" style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, rgba(79, 172, 254, 0.1), rgba(79, 172, 254, 0.2))',
          borderRadius: '50% 20% 50% 20%',
          zIndex: 0,
          animationDelay: '2s'
        }}></div>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission-section py-5" style={{ 
        background: 'linear-gradient(135deg, #f0f2f5 0%, #e8eef5 50%, #f5f7fa 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          {/* Header Text */}
          <div className="row mb-5">
            <div className="col-lg-6 scroll-animate fade-up delay-1" data-animate-id="vm-header">
              <h2 className="fw-bold mb-4" style={{ color: '#1a237e', fontSize: '2.2rem', lineHeight: '1.3' }}>
                Website Banega Tabhi Toh Business Badhega
              </h2>
            </div>
            <div className="col-lg-6 scroll-animate fade-up delay-2" data-animate-id="vm-description">
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                A website is an online identity - which is as important as an office for your business. Today your online reputation can create or destroy your brand image and customer perspective towards your product or service.
              </p>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                A recent study shows that by 2023, over 85% of consumers in the world decide on availing a service or buying a product by comparing several websites, even bulk orders have increased up to 25% over the last year. So, a result-oriented website can play a really important role in adding revenue to your business.
              </p>
            </div>
          </div>

          {/* Vision and Mission Cards */}
          <div className="row">
            {/* Our Vision */}
            <div className="col-lg-6 mb-4">
              <div className="vision-card scroll-animate fade-left delay-3" data-animate-id="vision-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Icon */}
                <div className="mb-4" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #ffc107 0%, #ff8f00 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 8px 20px rgba(255, 193, 7, 0.3)'
                  }}>
                    <i className="fas fa-lightbulb" style={{ color: 'white', fontSize: '2rem' }}></i>
                  </div>
                </div>
                
                <h3 className="fw-bold mb-4 text-center" style={{ color: '#e91e63', fontSize: '1.8rem' }}>Our Vision</h3>
                
                <div className="vision-points">
                  {[
                    'Leading provider: Our vision is to be a leading provider of innovative and effective digital solutions that help businesses achieve their online goals.',
                    'Cutting-edge technology: We strive to stay at the forefront of emerging technologies and industry trends to provide our clients with the best possible outcomes.',
                    'Our vision is to continually raise the bar of the customer experience by using the internet and technology we are helping you to build your online business.',
                    'Continuous improvement: We believe in continuously improving our services and processes to provide the best possible solutions to our clients.',
                    'Customer-centric approach'
                  ].map((point, index) => (
                    <div key={index} className="d-flex mb-3" style={{ alignItems: 'flex-start' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#1a237e',
                        borderRadius: '50%',
                        marginTop: '8px',
                        marginRight: '12px',
                        flexShrink: 0
                      }}></div>
                      <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="col-lg-6 mb-4">
              <div className="mission-card scroll-animate fade-right delay-4" data-animate-id="mission-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Icon */}
                <div className="mb-4" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #1a237e 0%, #3f51b5 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 8px 20px rgba(26, 35, 126, 0.3)',
                    position: 'relative'
                  }}>
                    <i className="fas fa-flag" style={{ color: 'white', fontSize: '2rem' }}></i>
                    <div style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-5px',
                      width: '20px',
                      height: '20px',
                      background: '#e91e63',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                </div>
                
                <h3 className="fw-bold mb-4 text-center" style={{ color: '#e91e63', fontSize: '1.8rem' }}>Our Mission</h3>
                
                <div className="mission-points">
                  {[
                    'Our mission is to provide exceptional web development and digital marketing services that help businesses succeed online.',
                    'We strive to create innovative and customized web solutions that meet our clients\' unique needs and goals.',
                    'We aim to build long-lasting relationships with our clients by providing responsive and personalized customer service.',
                    'Our mission is to empower businesses of all sizes and industries to leverage the power of digital marketing to achieve their growth objectives.',
                    'Our mission is to be a trusted and reliable partner for our clients, providing them with the guidance and support they need to succeed online.'
                  ].map((point, index) => (
                    <div key={index} className="d-flex mb-3" style={{ alignItems: 'flex-start' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#1a237e',
                        borderRadius: '50%',
                        marginTop: '8px',
                        marginRight: '12px',
                        flexShrink: 0
                      }}></div>
                      <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @media (max-width: 768px) {
            .vision-mission-section h2 {
              font-size: 1.6rem !important;
              text-align: center;
              margin-bottom: 2rem !important;
            }
            .vision-mission-section h3 {
              font-size: 1.4rem !important;
            }
            .vision-card, .mission-card {
              padding: 1.5rem !important;
              margin-bottom: 2rem !important;
            }
            .vision-mission-section .container {
              padding: 0 1rem;
            }
          }
        `}</style>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section py-5" style={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 50%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-uppercase fw-bold mb-2 scroll-animate fade-up delay-1" data-animate-id="wcu-subtitle" style={{ 
              color: '#e91e63', 
              fontSize: '14px', 
              letterSpacing: '2px',
              marginBottom: '1rem'
            }}>
              WE ARE AWESOME
            </p>
            <h2 className="fw-bold scroll-animate fade-up delay-2 shimmer-text" data-animate-id="wcu-title" style={{ 
              fontSize: '2.5rem',
              marginBottom: '3rem'
            }}>
              Why Choose Us
            </h2>
          </div>

          <div className="row g-4">
            {/* Research and Analysis */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card scroll-animate fade-up delay-3" data-animate-id="feature-1" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}>
                <div className="feature-icon mb-4" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  boxShadow: '0 8px 20px rgba(79, 172, 254, 0.3)'
                }}>
                  <i className="fas fa-search" style={{ color: 'white', fontSize: '2rem' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.3rem' }}>Research and Analysis</h4>
              </div>
            </div>

            {/* Affordable Digital Solutions */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card scroll-animate fade-up delay-4" data-animate-id="feature-2" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}>
                <div className="feature-icon mb-4" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  boxShadow: '0 8px 20px rgba(168, 237, 234, 0.3)'
                }}>
                  <i className="fas fa-dollar-sign" style={{ color: '#1a237e', fontSize: '2rem' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.3rem' }}>Affordable digital solutions</h4>
              </div>
            </div>

            {/* Creative and Innovative Solutions */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card scroll-animate fade-up delay-5" data-animate-id="feature-3" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}>
                <div className="feature-icon mb-4" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
                }}>
                  <i className="fas fa-lightbulb" style={{ color: 'white', fontSize: '2rem' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.3rem' }}>Creative and innovative solutions</h4>
              </div>
            </div>

            {/* Transparency and Ease of Work */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card scroll-animate fade-up delay-6" data-animate-id="feature-4" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}>
                <div className="feature-icon mb-4" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  boxShadow: '0 8px 20px rgba(137, 247, 254, 0.3)'
                }}>
                  <i className="fas fa-check-circle" style={{ color: 'white', fontSize: '2rem' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.3rem' }}>Transparency and ease of work</h4>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @media (max-width: 768px) {
            .why-choose-section h2 {
              font-size: 1.8rem !important;
            }
            .why-choose-section .feature-card {
              padding: 2rem 1rem !important;
              margin-bottom: 2rem !important;
            }
            .why-choose-section .feature-icon {
              width: 60px !important;
              height: 60px !important;
            }
            .why-choose-section .feature-icon i {
              font-size: 1.5rem !important;
            }
            .why-choose-section h4 {
              font-size: 1.1rem !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default About;