import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
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
          entry.target.style.transform = 'translateY(0) scale(1)';
        }
      }
    });
  }, []);

  useEffect(() => {
    const elementObserver = new IntersectionObserver(handleElementIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll('[data-animate-id]');
    animatedElements.forEach(element => {
      elementObserver.observe(element);
    });

    return () => elementObserver.disconnect();
  }, [handleElementIntersection]);

  const projects = [
    {
      title: 'Graphic Design Portfolio',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'graphic-design',
      projectLink: 'https://behance.net/yourusername/graphic-design'
    },
    {
      title: 'Personal Portfolio Web Development',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'personal-portfolio',
      projectLink: 'https://vishal1183-bca.github.io/Personal-Portfolio-Website/'
    },
    {
      title: 'Udhar Book App Development',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'udhar-book-app',
      projectLink: 'https://github.com/yourusername/udhar-book-app'
    },
    {
      title: 'E-commerce Web Development',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'ecommerce-web',
      projectLink: 'https://your-ecommerce-project.com'
    },
    {
      title: 'Hotel Management Desktop Application',
      category: 'Desktop Application',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'hotel-management',
      projectLink: 'https://github.com/yourusername/hotel-management'
    },
    {
      title: 'Restaurant Management Desktop',
      category: 'Desktop Application',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'restaurant-management',
      projectLink: 'https://github.com/yourusername/restaurant-management'
    },
    {
      title: 'Expense Tracker Java Development',
      category: 'Desktop Application',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'expense-tracker',
      projectLink: 'https://github.com/yourusername/expense-tracker'
    }
  ];

  return (
    <div className="portfolio-page">
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .gradient-bg {
          background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #667eea 25%, #764ba2 50%, #667eea 75%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }
        

        
        .scroll-animate {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
        
        .scroll-animate.scale {
          transform: scale(0.8);
        }
        
        .scroll-animate.delay-1 { transition-delay: 0.1s; }
        .scroll-animate.delay-2 { transition-delay: 0.2s; }
        .scroll-animate.delay-3 { transition-delay: 0.3s; }
        .scroll-animate.delay-4 { transition-delay: 0.4s; }
        .scroll-animate.delay-5 { transition-delay: 0.5s; }
        .scroll-animate.delay-6 { transition-delay: 0.6s; }
        .scroll-animate.delay-7 { transition-delay: 0.7s; }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0,0,0,0.2) !important;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .portfolio-card {
            max-width: 100% !important;
          }
          .portfolio-title {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .portfolio-title {
            font-size: 1.5rem !important;
          }
          .portfolio-card {
            padding: 1rem !important;
          }
        }
      `}</style>
      
      <section className="py-5 gradient-bg" style={{ 
        marginTop: '76px', 
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh'
      }}>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center mb-5">
            <p className="text-uppercase fw-bold mb-2 scroll-animate fade-up delay-1" data-animate-id="portfolio-subtitle" style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontSize: '14px', 
              letterSpacing: '2px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              opacity: 0,
              transform: 'translateY(50px)'
            }}>PORTFOLIO</p>
            <h1 className="fw-bold portfolio-title scroll-animate fade-up delay-2 shimmer-text" data-animate-id="portfolio-title" style={{ 
              fontSize: '2.5rem',
              marginBottom: '1rem',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              opacity: 0,
              transform: 'translateY(50px)'
            }}>
              Our Creative <span style={{ color: '#fff' }}>Showcase</span>
            </h1>
            <p className="scroll-animate fade-up delay-3" data-animate-id="portfolio-desc" style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '18px',
              maxWidth: '600px',
              margin: '0 auto',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              opacity: 0,
              transform: 'translateY(50px)'
            }}>
              Discover our latest projects and creative solutions that bring ideas to life
            </p>
          </div>

          <div className="portfolio-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`portfolio-card scroll-animate scale hover-lift delay-${Math.min(index + 4, 7)}`}
                data-animate-id={`project-${index}`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                  maxWidth: '400px',
                  margin: '0 auto',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  opacity: 0,
                  transform: 'scale(0.8) translateY(30px)'
                }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  {/* Overlay Effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0'}
                  />
                </div>
                
                <div style={{ padding: '2rem', position: 'relative' }}>
                  <h4 className="fw-bold mb-2" style={{ color: '#1a237e', fontSize: '1.2rem', lineHeight: '1.3' }}>
                    {project.title}
                  </h4>
                  <span className="mb-3 d-inline-block" style={{ 
                    color: '#667eea', 
                    fontSize: '12px',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {project.category}
                  </span>
                  
                  <div className="d-flex gap-2 align-items-center justify-content-start">
                    <Link 
                      to={`/portfolio/${project.slug}`}
                      className="btn"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                        color: '#667eea',
                        border: '2px solid rgba(102, 126, 234, 0.3)',
                        borderRadius: '25px',
                        padding: '8px 20px',
                        fontSize: '14px',
                        fontWeight: '500',
                        transition: 'all 0.4s ease',
                        textDecoration: 'none',
                        display: 'inline-block',
                        backdropFilter: 'blur(10px)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(-3px) scale(1.05)';
                        e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))';
                        e.target.style.color = '#667eea';
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      View Details
                    </Link>
                    
                    <a 
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        padding: '8px 20px',
                        fontSize: '14px',
                        fontWeight: '500',
                        transition: 'all 0.4s ease',
                        textDecoration: 'none',
                        display: 'inline-block',
                        boxShadow: '0 4px 15px rgba(240, 147, 251, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px) scale(1.05)';
                        e.target.style.boxShadow = '0 8px 25px rgba(240, 147, 251, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = '0 4px 15px rgba(240, 147, 251, 0.3)';
                      }}
                    >
                      <i className="fas fa-external-link-alt me-2"></i>Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;