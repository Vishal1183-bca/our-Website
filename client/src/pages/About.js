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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .heading-font {
          font-family: 'Playfair Display', 'Inter', serif;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .text-shadow {
          text-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
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
        
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-30px) translateX(10px); }
          50% { transform: translateY(-60px) translateX(-5px); }
          75% { transform: translateY(-30px) translateX(-10px); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes morphing {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        
        .scroll-animate {
          opacity: 0;
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, opacity;
        }
        
        .scroll-animate.fade-up {
          transform: translateY(60px);
        }
        
        .scroll-animate.fade-left {
          transform: translateX(-60px);
        }
        
        .scroll-animate.fade-right {
          transform: translateX(60px);
        }
        
        .scroll-animate.scale {
          transform: scale(0.8) translateY(30px);
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
        
        .particle-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        
        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: particleFloat 8s ease-in-out infinite;
        }
        
        .gradient-bg {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        
        .morphing-shape {
          animation: morphing 8s ease-in-out infinite;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
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
      <section className="about-hero py-5 gradient-bg" style={{ 
        position: 'relative',
        overflow: 'hidden',
        marginTop: '76px',
        minHeight: '100vh'
      }}>
        {/* Animated Particles Background */}
        <div className="particle-bg">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 6 + 4}px`,
                height: `${Math.random() * 6 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 10 + 8}s`
              }}
            />
          ))}
        </div>
        
        {/* Glass Overlay */}
        <div className="glass-effect" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 mb-4">
              <div className="about-content">
                <h2 className="fw-bold mb-4 scroll-animate fade-left delay-1 heading-font" data-animate-id="about-title" style={{ 
                  fontSize: '3rem', 
                  lineHeight: '1.1',
                  marginBottom: '2rem',
                  background: 'linear-gradient(135deg, #fff 0%, #f0f8ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  fontWeight: '700',
                  letterSpacing: '-0.02em'
                }}>
                  Architecting Digital Excellence
                </h2>
                
                <p className="mb-4 scroll-animate fade-left delay-2" data-animate-id="about-desc1" style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '16px', 
                  lineHeight: '1.6',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}>
                  At <span style={{ color: '#fff', fontWeight: '600', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>NeoArch</span>, we specialize in crafting innovative digital architectures that transform businesses. Our expert team designs cutting-edge web solutions, develops robust applications, and creates seamless user experiences that drive growth and engagement in today's competitive digital landscape.
                </p>
                
                <h3 className="fw-bold mb-3 scroll-animate fade-left delay-3 heading-font" data-animate-id="about-subtitle1" style={{ 
                  color: '#fff', 
                  fontSize: '2rem',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  fontWeight: '600',
                  letterSpacing: '-0.01em'
                }}>
                  Innovation Meets Excellence
                </h3>
                
                <p className="mb-4 scroll-animate fade-left delay-4" data-animate-id="about-desc2" style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '16px', 
                  lineHeight: '1.6',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}>
                  We combine <span style={{ color: '#fff', fontWeight: '600', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>creative innovation</span> with technical expertise to deliver exceptional digital solutions. Our approach focuses on understanding your unique business needs and creating tailored strategies that maximize impact while ensuring cost-effectiveness and timely delivery.
                </p>
                
                <h3 className="fw-bold mb-3 scroll-animate fade-left delay-5 heading-font" data-animate-id="about-subtitle2" style={{ 
                  color: '#fff', 
                  fontSize: '2rem',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  fontWeight: '600',
                  letterSpacing: '-0.01em'
                }}>
                  Your Success, Our Mission
                </h3>
                
                <p className="mb-4 scroll-animate fade-left delay-6" data-animate-id="about-desc3" style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '16px', 
                  lineHeight: '1.6',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}>
                  From concept to deployment, we partner with you every step of the way. Our dedicated professionals leverage the latest technologies and industry best practices to build <span style={{ color: '#fff', fontWeight: '600', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>scalable, secure, and stunning</span> digital solutions that not only meet your current needs but also adapt to future growth.
                </p>
                
                <div className="scroll-animate fade-left delay-7" data-animate-id="about-cta">
                  <Link 
                    to="/contact" 
                    className="btn px-4 py-2"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                      color: 'white',
                      borderRadius: '25px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      border: '2px solid rgba(255,255,255,0.3)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) translateY(0)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                    }}
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="col-lg-6 mb-4">
              <div className="about-image-container scroll-animate fade-right delay-3 floating-element hover-lift" data-animate-id="about-image" style={{ 
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
                    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                    border: '3px solid rgba(255,255,255,0.3)'
                  }}
                />
                
                {/* Enhanced Decorative Elements */}
                <div className="pulse-element morphing-shape" style={{
                  position: 'absolute',
                  top: '10%',
                  left: '-10%',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
                  opacity: 0.8,
                  zIndex: -1,
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}></div>
                
                <div className="floating-element morphing-shape" style={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '-5%',
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                  opacity: 0.8,
                  zIndex: -1,
                  boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)',
                  animationDelay: '2s',
                  backdropFilter: 'blur(10px)'
                }}></div>
                
                <div className="pulse-element morphing-shape" style={{
                  position: 'absolute',
                  top: '60%',
                  left: '-5%',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
                  opacity: 0.8,
                  zIndex: -1,
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
                  animationDelay: '4s',
                  backdropFilter: 'blur(10px)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Background Decorative Elements */}
        <div className="rotating-element morphing-shape" style={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
          zIndex: 0,
          border: '2px dashed rgba(255,255,255,0.2)',
          backdropFilter: 'blur(5px)'
        }}></div>
        
        <div className="floating-element morphing-shape" style={{
          position: 'absolute',
          bottom: '10%',
          left: '3%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
          zIndex: 0,
          border: '2px dashed rgba(255,255,255,0.15)',
          animationDelay: '3s',
          backdropFilter: 'blur(5px)'
        }}></div>
        
        {/* Additional Enhanced Floating Elements */}
        <div className="pulse-element morphing-shape" style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
          zIndex: 0,
          animationDelay: '1s',
          backdropFilter: 'blur(8px)'
        }}></div>
        
        <div className="rotating-element morphing-shape" style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
          zIndex: 0,
          animationDelay: '2s',
          backdropFilter: 'blur(6px)'
        }}></div>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission-section py-5" style={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 50%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(233, 30, 99, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(26, 35, 126, 0.05) 0%, transparent 50%)',
          zIndex: 0
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header Text */}
          <div className="row mb-5">
            <div className="col-lg-6 scroll-animate fade-up delay-1" data-animate-id="vm-header">
              <h2 className="fw-bold mb-4 heading-font text-gradient" style={{ fontSize: '2.8rem', lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }}>
                Building Tomorrow's Digital Foundation Today
              </h2>
            </div>
            <div className="col-lg-6 scroll-animate fade-up delay-2" data-animate-id="vm-description">
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                In today's digital-first world, your online presence is the cornerstone of business success. NeoArch understands that every pixel, every interaction, and every line of code contributes to your brand's digital narrative.
              </p>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                We don't just build websites and applications; we architect digital experiences that resonate with your audience, drive engagement, and convert visitors into loyal customers. Our holistic approach ensures your digital assets work seamlessly together to achieve your business objectives.
              </p>
            </div>
          </div>

          {/* Vision and Mission Cards */}
          <div className="row">
            {/* Our Vision */}
            <div className="col-lg-6 mb-4">
              <div className="vision-card scroll-animate fade-left delay-3 hover-lift" data-animate-id="vision-card" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(233, 30, 99, 0.1)'
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
                
                <h3 className="fw-bold mb-4 text-center heading-font" style={{ color: '#e91e63', fontSize: '2rem', fontWeight: '600', letterSpacing: '-0.01em' }}>Our Vision</h3>
                
                <div className="vision-points">
                  {[
                    'To be the premier digital architecture firm that transforms businesses through innovative technology solutions and creative excellence.',
                    'Pioneering next-generation web technologies and development methodologies that set new industry standards.',
                    'Creating digital ecosystems that seamlessly integrate user experience, functionality, and business intelligence.',
                    'Fostering long-term partnerships built on trust, transparency, and measurable results.',
                    'Empowering businesses to thrive in the digital age through scalable and future-ready solutions.'
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
              <div className="mission-card scroll-animate fade-right delay-4 hover-lift" data-animate-id="mission-card" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(26, 35, 126, 0.1)'
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
                
                <h3 className="fw-bold mb-4 text-center heading-font" style={{ color: '#e91e63', fontSize: '2rem', fontWeight: '600', letterSpacing: '-0.01em' }}>Our Mission</h3>
                
                <div className="mission-points">
                  {[
                    'Delivering cutting-edge digital solutions that combine aesthetic excellence with robust functionality and optimal performance.',
                    'Collaborating closely with clients to understand their vision and translate it into powerful digital experiences.',
                    'Maintaining the highest standards of code quality, security, and user experience across all our projects.',
                    'Providing ongoing support and strategic guidance to ensure our clients\' continued digital success and growth.',
                    'Building sustainable, scalable solutions that adapt and evolve with changing business needs and market dynamics.'
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
        background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 50%, #f0f8ff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(233, 30, 99, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26, 35, 126, 0.03) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(79, 172, 254, 0.02) 0%, transparent 50%)',
          zIndex: 0
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center mb-5">
            <p className="text-uppercase fw-bold mb-2 scroll-animate fade-up delay-1" data-animate-id="wcu-subtitle" style={{ 
              color: '#e91e63', 
              fontSize: '14px', 
              letterSpacing: '2px',
              marginBottom: '1rem'
            }}>
              WE ARE AWESOME
            </p>
            <h2 className="fw-bold scroll-animate fade-up delay-2 shimmer-text heading-font" data-animate-id="wcu-title" style={{ 
              fontSize: '3rem',
              marginBottom: '3rem',
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}>
              Why Choose Us
            </h2>
          </div>

          <div className="row g-4">
            {/* Research and Analysis */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card scroll-animate fade-up delay-3 hover-lift" data-animate-id="feature-1" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                borderRadius: '20px',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
                border: '1px solid rgba(79, 172, 254, 0.1)',
                height: '100%',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
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
                <h4 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.3rem' }}>Strategic Planning & Research</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>Deep market analysis and user research to create data-driven digital strategies.</p>
              </div>
            </div>

            {/* Affordable Digital Solutions */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card scroll-animate fade-up delay-4 hover-lift" data-animate-id="feature-2" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                borderRadius: '20px',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
                border: '1px solid rgba(168, 237, 234, 0.2)',
                height: '100%',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
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
                <h4 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.3rem' }}>Premium Quality, Fair Pricing</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>Enterprise-grade solutions at competitive rates without compromising on quality.</p>
              </div>
            </div>

            {/* Creative and Innovative Solutions */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card scroll-animate fade-up delay-5 hover-lift" data-animate-id="feature-3" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                borderRadius: '20px',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
                border: '1px solid rgba(102, 126, 234, 0.15)',
                height: '100%',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
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
                <h4 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.3rem' }}>Innovation & Creativity</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>Cutting-edge designs and technologies that set your brand apart from competitors.</p>
              </div>
            </div>

            {/* Transparency and Ease of Work */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card scroll-animate fade-up delay-6 hover-lift" data-animate-id="feature-4" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                borderRadius: '20px',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
                border: '1px solid rgba(137, 247, 254, 0.2)',
                height: '100%',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
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
                <h4 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '1.3rem' }}>Transparent Communication</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>Clear project timelines, regular updates, and collaborative development process.</p>
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