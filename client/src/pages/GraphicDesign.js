import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const GraphicDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: '76px' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '80px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '4px',
                  height: '80px',
                  background: 'linear-gradient(to bottom, #007bff, #e91e63)',
                  borderRadius: '2px'
                }}></div>
                <img 
                  src="/images/graphic.png" 
                  alt="Graphic Design" 
                  style={{ width: '100%', maxWidth: '500px' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p style={{ color: '#e91e63', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>OVERVIEW</p>
              <h1 style={{ color: '#1a237e', fontSize: '48px', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '24px' }}>
                Custom Graphic Design
              </h1>
              <h3 style={{ color: '#e91e63', fontSize: '20px', marginBottom: '24px' }}>
                Are you in need of creative graphic design services?
              </h3>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
                Look no further! We offer a wide range of services to meet all your graphic design needs. Our services include advertisement design, logo design, brochure design, and corporate identity design. Graphic design is one way that companies connect with consumers. Design can be used to promote and sell products, to convey a message, or to develop a brand identity.
              </p>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                Graphic design is also known as communication design, and Graphic Designers are essentially visual communicators. They bring visual concepts to life, most commonly through graphic design software, and inform or engage consumers through text, graphics and images.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section style={{ backgroundColor: '#e8f5e8', padding: '80px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 style={{ color: '#1a237e', fontSize: '40px', fontWeight: 'bold', lineHeight: '1.3', marginBottom: '24px' }}>
                We use advanced graphic designing tools to create impressive ideas for you
              </h2>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
                We have an experienced team of designers who specialize in creating high-quality visuals that will captivate your audience and make your business stand out from the competition. Our designs are tailored to meet the needs of each individual customer and our goal is to ensure that it reflects the values and culture of your company.
              </p>
              
              <div className="row" style={{ marginBottom: '32px' }}>
                <div className="col-6">
                  <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}># User-Friendly Interface</p>
                  <p style={{ color: '#666', fontSize: '14px' }}># 95% Repeat business</p>
                </div>
                <div className="col-6">
                  <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}># 98% Happy Clients</p>
                  <p style={{ color: '#666', fontSize: '14px' }}># Quality Service UX</p>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                style={{
                  background: 'linear-gradient(45deg, #e91e63, #9c27b0)',
                  color: 'white',
                  padding: '12px 32px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'inline-block'
                }}
              >
                Request A Quote →
              </Link>
            </div>
            
            <div className="col-lg-6">
              <div style={{ position: 'relative', height: '400px' }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '80px',
                  background: '#fef3c7',
                  padding: '16px 24px',
                  borderRadius: '20px',
                  transform: 'rotate(-8deg)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                }}>
                  <span style={{ color: '#1a237e', fontSize: '18px', fontWeight: 'bold' }}>Brand</span>
                </div>
                
                <div style={{
                  position: 'absolute',
                  top: '80px',
                  right: '20px',
                  background: '#f8bbd9',
                  padding: '16px 24px',
                  borderRadius: '20px',
                  transform: 'rotate(12deg)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                }}>
                  <span style={{ color: '#1a237e', fontSize: '18px', fontWeight: 'bold' }}>Quality</span>
                </div>
                
                <div style={{
                  position: 'absolute',
                  top: '200px',
                  right: '60px',
                  background: '#bfdbfe',
                  padding: '16px 24px',
                  borderRadius: '20px',
                  transform: 'rotate(-5deg)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                }}>
                  <span style={{ color: '#1a237e', fontSize: '18px', fontWeight: 'bold' }}>Value</span>
                </div>
                
                <div style={{
                  position: 'absolute',
                  top: '280px',
                  right: '120px',
                  background: '#a7f3d0',
                  padding: '16px 24px',
                  borderRadius: '20px',
                  transform: 'rotate(8deg)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                }}>
                  <span style={{ color: '#1a237e', fontSize: '18px', fontWeight: 'bold' }}>Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <p style={{ color: '#e91e63', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>SERVICE</p>
            <h2 style={{ color: '#1a237e', fontSize: '40px', fontWeight: 'bold', marginBottom: '16px' }}>Graphic Design services we offer</h2>
            <p style={{ color: '#666', fontSize: '16px' }}>We think big and have hands in all leading technology platforms to provide you wide array of services.</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                height: '180px',
                minHeight: '180px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#fff3cd',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '24px' }}>🎨</span>
                </div>
                <div>
                  <h5 style={{ color: '#1a237e', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Logo Designing</h5>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                    A logo is a symbol made up of text and images that identifies a business. A good logo shows what a company does and what the brand values.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                height: '180px',
                minHeight: '180px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#d1ecf1',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '24px' }}>📦</span>
                </div>
                <div>
                  <h5 style={{ color: '#1a237e', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Packaging Design</h5>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                    Packaging design is the process of conceptualizing and executing the physical form, and visual look and feel of a product's outer packaging.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                height: '180px',
                minHeight: '180px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f8d7da',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '24px' }}>📄</span>
                </div>
                <div>
                  <h5 style={{ color: '#1a237e', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Brochure Design</h5>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                    A brochure is an informative paper document that can be folded into a template, pamphlet, or leaflet. A brochure can also be a set of related unfolded papers put into a pocket folder or packet.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                height: '180px',
                minHeight: '180px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#e2e3e5',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '24px' }}>📋</span>
                </div>
                <div>
                  <h5 style={{ color: '#1a237e', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Flyer Design</h5>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                    A flyer is usually a single, unfolded printed sheet that is used to draw attention to an event, service, product or idea. A flyer usually contains a very simple message that can be conveyed quickly.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                height: '180px',
                minHeight: '180px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#d4edda',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '24px' }}>📰</span>
                </div>
                <div>
                  <h5 style={{ color: '#1a237e', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Newsletter Designing</h5>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                    A newsletter is an important point of contact. Whether you're designing one for a school, a business, another type of organization, or just for your family and friends, you want it to reflect your message.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                height: '180px',
                minHeight: '180px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#ffeaa7',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '24px' }}>💼</span>
                </div>
                <div>
                  <h5 style={{ color: '#1a237e', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Business Card Designs</h5>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                    Business cards are cards bearing business information about a company or individual. It is an extremely effective marketing tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: 'white', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <p style={{ color: '#e91e63', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>LET'S WORK TOGETHER</p>
              <h2 style={{ color: '#1a237e', fontSize: '40px', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '32px' }}>
                We Love to Listen to Your Requirements
              </h2>
              
              <div style={{ marginBottom: '24px' }}>
                <Link 
                  to="/contact" 
                  style={{
                    background: 'white',
                    color: '#1a237e',
                    padding: '12px 32px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    border: '2px solid #1a237e',
                    display: 'inline-block'
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
        
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '200px',
          height: '100px',
          background: 'linear-gradient(135deg, #ffd54f 0%, #ffb300 100%)',
          borderRadius: '0 50px 0 0',
          opacity: 0.8
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '180px',
          height: '80px',
          background: 'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)',
          borderRadius: '50px 0 0 0',
          opacity: 0.8
        }}></div>
      </section>
    </div>
  );
};

export default GraphicDesign;