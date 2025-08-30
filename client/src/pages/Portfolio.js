import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: 'E-commerce Web Development',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'ecommerce-web'
    },
    {
      title: 'Hotel Management Desktop Application',
      category: 'Desktop Application',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'hotel-management'
    },
    {
      title: 'Udhar Book App Development',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'udhar-book-app'
    },
    {
      title: 'Personal Portfolio Web Development',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'personal-portfolio'
    },
    {
      title: 'Restaurant Management Desktop',
      category: 'Desktop Application',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'restaurant-management'
    },
    {
      title: 'Expense Tracker Java Development',
      category: 'Desktop Application',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'expense-tracker'
    },
    {
      title: 'UI/UX Design Project',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'ui-ux-design'
    },
    {
      title: 'Graphic Design Portfolio',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'graphic-design'
    }
  ];

  return (
    <div className="portfolio-page">
      <style jsx>{`
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
      
      <section className="py-5" style={{ marginTop: '76px', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-uppercase fw-bold mb-2" style={{ color: '#e91e63', fontSize: '14px', letterSpacing: '2px' }}>PORTFOLIO</p>
            <h1 className="fw-bold portfolio-title" style={{ color: '#1a237e', fontSize: '2.5rem' }}>
              Our <span style={{ color: '#e91e63' }}>Work</span>
            </h1>
          </div>

          <div className="portfolio-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {projects.map((project, index) => (
              <div key={index} className="portfolio-card" style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                maxWidth: '400px',
                margin: '0 auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                
                <div style={{ padding: '2rem' }}>
                  <h4 className="fw-bold mb-2" style={{ color: '#1a237e', fontSize: '1.2rem', lineHeight: '1.3' }}>
                    {project.title}
                  </h4>
                  <p className="mb-3" style={{ color: '#666', fontSize: '14px' }}>
                    {project.category}
                  </p>
                  
                  <Link 
                    to={`/portfolio/${project.slug}`}
                    className="btn"
                    style={{
                      background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '8px 20px',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 5px 15px rgba(233, 30, 99, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    View Details
                  </Link>
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