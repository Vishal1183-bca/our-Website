import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = {
    'ecommerce-web': {
      title: 'E-commerce Web Development',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive e-commerce platform built with modern web technologies, featuring user authentication, product catalog, shopping cart, and secure payment integration.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'Bootstrap'],
      features: ['User Registration & Login', 'Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management', 'Admin Dashboard']
    },
    'hotel-management': {
      title: 'Hotel Management Desktop Application',
      category: 'Desktop Application',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive hotel management system for managing reservations, guest check-ins, room availability, and billing operations with an intuitive desktop interface.',
      technologies: ['Java', 'JavaFX', 'MySQL', 'JasperReports'],
      features: ['Room Booking System', 'Guest Management', 'Billing & Invoicing', 'Inventory Management', 'Staff Management', 'Reports Generation']
    },
    'udhar-book-app': {
      title: 'Udhar Book App Development',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A mobile application for managing personal loans and credit transactions, helping users track their lending and borrowing activities with friends and family.',
      technologies: ['Flutter', 'Firebase', 'Dart', 'Cloud Firestore'],
      features: ['Transaction Tracking', 'Contact Management', 'Payment Reminders', 'Transaction History', 'Secure Authentication', 'Offline Support']
    },
    'personal-portfolio': {
      title: 'Personal Portfolio Web Development',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      overview: 'A fully responsive Personal Portfolio Website built to showcase my profile, skills, projects, certifications, and achievements in a modern and professional way.',
      description: 'This comprehensive portfolio website serves as a digital showcase of my professional journey, technical expertise, and creative projects. Built with modern web technologies and featuring an intuitive user interface, it provides an interactive platform for recruiters, clients, and collaborators to explore my work and capabilities.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Figma'],
      keyFeatures: [
        '👤 About Me section with background and career goals',
        '💻 Skills showcase with icons for frontend & backend',
        '📂 Projects gallery with images & descriptions', 
        '📜 Certificates and achievements display',
        '📱 Fully responsive design for all devices',
        '🎨 Modern UI/UX with animations and smooth navigation'
      ],
      features: [
        'Interactive About Me Section',
        'Dynamic Skills Showcase',
        'Project Gallery with Filtering',
        'Certificates & Achievements Display',
        'Responsive Design for All Devices',
        'Smooth Scroll Navigation',
        'CSS Animations & Transitions',
        'Contact Form Integration',
        'SEO Optimized Structure',
        'Fast Loading Performance',
        'Cross-browser Compatibility',
        'Mobile-first Approach'
      ],
      purpose: 'To highlight my skills, experience, and projects in a professional digital portfolio, making it easier for recruiters, clients, and collaborators to explore my work.',
      projectLink: 'https://vishal1183-bca.github.io/Personal-Portfolio-Website/',
      shortDescription: 'A responsive portfolio website showcasing my skills, projects, and certifications with a modern UI/UX. Built using HTML, CSS, JavaScript, and Bootstrap, it provides an interactive way for recruiters and clients to explore my work.',
      gallery: [
        {
          title: 'Hero Section',
          description: 'Modern hero section with professional introduction and skills overview',
          image: '/images/1.png'
        },
        {
          title: 'About Me Section',
          description: 'Detailed introduction with professional background and experience',
          image: '/images/2.png'
        },
        {
          title: 'Certificates Section',
          description: 'Professional certifications and achievements showcase',
          image: '/images/3.png'
        },
        {
          title: 'Skills Section',
          description: 'Frontend and backend skills with technology icons and progress bars',
          image: '/images/4.png'
        },
        {
          title: 'Featured Projects',
          description: 'Colorful project cards showcasing different development projects',
          image: '/images/5.png'
        }
      ]
    },
    'restaurant-management': {
      title: 'Restaurant Management Desktop',
      category: 'Desktop Application',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A complete restaurant management solution handling order processing, inventory management, staff scheduling, and financial reporting for efficient restaurant operations.',
      technologies: ['C#', '.NET Framework', 'SQL Server', 'Crystal Reports'],
      features: ['Order Management', 'Menu Management', 'Inventory Control', 'Staff Scheduling', 'Sales Reports', 'Customer Management']
    },
    'expense-tracker': {
      title: 'Expense Tracker Java Development',
      category: 'Desktop Application',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A personal finance management application built in Java for tracking daily expenses, managing budgets, and generating financial reports with data visualization.',
      technologies: ['Java', 'Swing', 'SQLite', 'JFreeChart', 'Apache POI'],
      features: ['Expense Tracking', 'Budget Management', 'Category-wise Analysis', 'Data Visualization', 'Export to Excel', 'Monthly Reports']
    },
    'ui-ux-design': {
      title: 'UI/UX Design Project',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive UI/UX design project focusing on user research, wireframing, prototyping, and creating intuitive user interfaces for mobile and web applications.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      features: ['User Research', 'Wireframing', 'Interactive Prototypes', 'Design Systems', 'Usability Testing', 'Responsive Design']
    },
    'graphic-design': {
      title: 'SD Stroke Design - Professional Creative Design Platform',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      overview: 'SD Stroke Design is a modern, professional web-based contact platform built for a creative design agency. The website serves as a comprehensive showcase of design services and provides seamless client communication through an integrated contact system.',
      description: 'This project demonstrates modern web development practices with a focus on performance, security, and user experience, making it an ideal solution for creative agencies seeking a professional online presence. Built with Laravel 12 and featuring a database-free architecture for lightweight deployment.',
      technologies: ['Laravel 12', 'PHP 8.2+', 'PHPMailer 6.10', 'Blade Templating', 'Bootstrap', 'JavaScript ES6+'],
      keyFeatures: [
        '✅ Database-Free Architecture - No database required, lightweight deployment',
        '✅ Gmail SMTP Integration - Secure email delivery via Gmail',
        '✅ AJAX Contact Form - Real-time form submission without page reload',
        '✅ Mobile Responsive Design - Optimized for all device sizes',
        '✅ SEO Optimized - Meta tags, Open Graph, Twitter Cards',
        '✅ Professional UI/UX - Clean, modern design with smooth animations',
        '✅ Cross-Browser Compatible - Works on all modern browsers'
      ],
      services: [
        'Creative Design - Brochures, magazines, and visual content',
        'Virtual Samples - Brand tone setting and customer impression',
        'Raster to Vector - Document conversion services',
        'Web Design - Captivating online presence creation',
        'Print-Ready Files - Cost-effective custom print services',
        'Branding - Comprehensive brand identity development',
        'Apparel Design - Complete clothing design solutions',
        'Color Separation - Professional color separation services',
        'Mobile App Development - Android & iOS applications',
        'Software Development - Desktop and enterprise solutions',
        'Web Development - Responsive websites and web applications'
      ],
      features: [
        'Modern Clean Interface',
        'Smooth AOS Animations',
        'Interactive Elements',
        'Professional Typography',
        'CSRF Protection',
        'Input Validation',
        'Secure SMTP Authentication',
        'Optimized Performance',
        'Real-time Form Processing',
        'Professional Email Templates',
        'Cross-browser Support',
        'Mobile-first Design'
      ],
      technicalSpecs: {
        backend: ['Laravel 12', 'PHP 8.2+', 'PHPMailer 6.10', 'Composer'],
        frontend: ['Blade Templating', 'CSS3', 'JavaScript ES6+', 'AOS Library', 'Font Awesome 6.5.0', 'Bootstrap Icons'],
        security: ['CSRF Protection', 'Input Validation', 'Secure SMTP', 'Environment Configuration'],
        performance: ['Optimized Images', 'Minified Assets', 'Efficient AJAX', 'Responsive Sizing']
      },
      purpose: 'To provide creative agencies with a professional online presence that combines modern web development practices with effective client communication systems.',
      projectLink: 'https://behance.net/yourusername/graphic-design',
      shortDescription: 'A professional creative design platform built with Laravel 12, featuring database-free architecture, Gmail SMTP integration, and comprehensive design services showcase.',
      gallery: [
        {
          title: 'Homepage Design',
          description: 'Modern landing page with professional design showcase and service highlights',
          image: '/images/sd1.png'
        },
        {
          title: 'Services Portfolio',
          description: 'Comprehensive display of creative design services and capabilities',
          image: '/images/sd2.png'
        },
        {
          title: 'Contact System',
          description: 'AJAX-powered contact form with real-time validation and Gmail integration',
          image: '/images/sd3.png'
        },
        {
          title: 'Design Gallery',
          description: 'Professional portfolio showcase with smooth animations and responsive layout',
          image: '/images/sd4.png'
        },
        {
          title: 'Mobile Interface',
          description: 'Fully responsive design optimized for mobile devices and tablets',
          image: '/images/sd5.png'
        }
      ]
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div style={{ marginTop: '76px', padding: '2rem', textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <Link to="/portfolio" className="btn btn-primary">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-scale {
          animation: scaleIn 0.8s ease-out;
        }
        
        .feature-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .tech-tag {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .tech-tag:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 5px 15px rgba(233, 30, 99, 0.3);
        }
        
        @media (max-width: 768px) {
          .project-hero h1 {
            font-size: 1.8rem !important;
          }
          .project-image {
            height: 250px !important;
          }
          .tech-tag {
            font-size: 12px !important;
            padding: 5px 12px !important;
          }
          .feature-card {
            margin-bottom: 1rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .project-hero h1 {
            font-size: 1.5rem !important;
          }
          .project-content {
            padding: 1rem !important;
          }
          .overview-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="project-hero py-5" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        marginTop: '76px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.1)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 animate-slide-left">
              <Link to="/portfolio" className="btn mb-3" style={{ 
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '25px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.3)';
                e.target.style.transform = 'translateX(-5px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'translateX(0)';
              }}>
                ← Back to Portfolio
              </Link>
              <h1 className="fw-bold mb-3" style={{ color: 'white', fontSize: '2.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                {project.title}
              </h1>
              <p className="mb-3" style={{ color: '#ffc107', fontSize: '16px', fontWeight: '500' }}>
                {project.category}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', lineHeight: '1.6', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
                {project.overview || project.description}
              </p>
              
              {project.projectLink && (
                <a 
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-3"
                  style={{
                    background: 'linear-gradient(45deg, #e91e63, #ffc107)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 10px 25px rgba(233, 30, 99, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  View Live Project →
                </a>
              )}
            </div>
            <div className="col-lg-6 mb-4 animate-slide-right">
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {project.overview && (
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="overview-card animate-fade-up" style={{
                  background: 'white',
                  padding: '3rem',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  textAlign: 'center'
                }}>
                  <h2 className="fw-bold mb-4" style={{ color: '#1a237e', fontSize: '2rem' }}>Project Overview</h2>
                  <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.8', marginBottom: '2rem' }}>
                    {project.description}
                  </p>
                  {project.purpose && (
                    <div style={{
                      background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
                      color: 'white',
                      padding: '1.5rem',
                      borderRadius: '15px',
                      marginTop: '2rem'
                    }}>
                      <h4 className="fw-bold mb-2">Purpose</h4>
                      <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                        {project.purpose}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Features Section */}
      {project.keyFeatures && (
        <section className="py-5" style={{ backgroundColor: 'white' }}>
          <div className="container">
            <h2 className="fw-bold text-center mb-5 animate-fade-up" style={{ color: '#1a237e', fontSize: '2.2rem' }}>Key Features</h2>
            <div className="row g-4">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="col-lg-4 col-md-6 animate-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="feature-card" style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    padding: '2rem',
                    borderRadius: '15px',
                    height: '100%',
                    border: '2px solid transparent',
                    backgroundClip: 'padding-box'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      {feature.split(' ')[0]}
                    </div>
                    <p style={{ 
                      color: '#1a237e', 
                      fontWeight: '600',
                      fontSize: '16px',
                      lineHeight: '1.5',
                      margin: 0,
                      textAlign: 'center'
                    }}>
                      {feature.substring(feature.indexOf(' ') + 1)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Gallery */}
      {project.gallery && (
        <section className="py-5" style={{ backgroundColor: 'white' }}>
          <div className="container">
            <h2 className="fw-bold text-center mb-5 animate-fade-up" style={{ color: '#1a237e', fontSize: '2.2rem' }}>Project Gallery</h2>
            <div className="row g-4">
              {project.gallery.map((item, index) => (
                <div key={index} className="col-lg-6 col-md-6 animate-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="gallery-item" style={{
                    background: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  }}>
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                      <img 
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          objectPosition: 'center top',
                          transition: 'transform 0.3s ease',
                          borderRadius: '15px 15px 0 0'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        onError={(e) => {
                          e.target.style.backgroundColor = '#f8f9fa';
                          e.target.style.display = 'flex';
                          e.target.style.alignItems = 'center';
                          e.target.style.justifyContent = 'center';
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '1.5rem'
                      }}>
                        <div>
                          <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                            {item.title}
                          </h4>
                          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', margin: 0, lineHeight: '1.4' }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Specifications */}
      {project.technicalSpecs && (
        <section className="py-5" style={{ backgroundColor: 'white' }}>
          <div className="container">
            <h2 className="fw-bold text-center mb-5 animate-fade-up" style={{ color: '#1a237e', fontSize: '2.2rem' }}>Technical Specifications</h2>
            <div className="row g-4">
              {Object.entries(project.technicalSpecs).map(([category, items], index) => (
                <div key={category} className="col-lg-6 col-md-6 animate-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="tech-spec-card" style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    padding: '2rem',
                    borderRadius: '15px',
                    height: '100%',
                    border: '2px solid transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = '#e91e63';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #e91e63, #ffc107)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem',
                        fontSize: '1.5rem'
                      }}>
                        {category === 'backend' ? '🛠️' : 
                         category === 'frontend' ? '🎨' :
                         category === 'security' ? '🔒' : '⚡'}
                      </div>
                      <h4 style={{ 
                        color: '#1a237e', 
                        fontSize: '1.3rem', 
                        fontWeight: '700',
                        margin: 0,
                        textTransform: 'capitalize'
                      }}>
                        {category}
                      </h4>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} style={{
                          color: '#666',
                          fontSize: '14px',
                          marginBottom: '0.8rem',
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#1a237e'}
                        onMouseLeave={(e) => e.target.style.color = '#666'}>
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '6px',
                            height: '6px',
                            background: '#e91e63',
                            borderRadius: '50%'
                          }}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Offered */}
      {project.services && (
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="fw-bold text-center mb-5 animate-fade-up" style={{ color: '#1a237e', fontSize: '2.2rem' }}>Services Offered</h2>
            <div className="row g-3">
              {project.services.map((service, index) => (
                <div key={index} className="col-lg-4 col-md-6 animate-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="service-item" style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#e91e63',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }}></div>
                      <p style={{
                        color: '#1a237e',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '1.5',
                        margin: 0
                      }}>
                        {service}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies & Features */}
      <section className="py-5" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 animate-slide-left">
              <div className="project-content" style={{ padding: '2rem' }}>
                <h3 className="fw-bold mb-4" style={{ color: '#1a237e', fontSize: '1.8rem' }}>Technologies Used</h3>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag" style={{
                      background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '25px',
                      fontSize: '14px',
                      fontWeight: '500',
                      boxShadow: '0 4px 15px rgba(233, 30, 99, 0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4 animate-slide-right">
              <div className="project-content" style={{ padding: '2rem' }}>
                <h3 className="fw-bold mb-4" style={{ color: '#1a237e', fontSize: '1.8rem' }}>Technical Features</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {project.features.map((feature, index) => (
                    <li key={index} className="mb-3" style={{ 
                      color: '#666',
                      fontSize: '15px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#1a237e';
                      e.target.style.transform = 'translateX(10px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#666';
                      e.target.style.transform = 'translateX(0)';
                    }}>
                      <i className="fas fa-check-circle me-3" style={{ color: '#e91e63', fontSize: '16px' }}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.1)',
          zIndex: 1
        }}></div>
        
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <div className="animate-fade-up">
            <h3 className="fw-bold mb-3" style={{ color: 'white', fontSize: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Interested in a Similar Project?
            </h3>
            <p className="mb-4" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Let's discuss how we can bring your ideas to life with our expertise.
            </p>
            <Link 
              to="/contact" 
              className="btn px-5 py-3"
              style={{
                background: 'linear-gradient(45deg, #e91e63, #ffc107)',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(233, 30, 99, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px) scale(1.05)';
                e.target.style.boxShadow = '0 15px 35px rgba(233, 30, 99, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 25px rgba(233, 30, 99, 0.3)';
              }}
            >
              Get Started Today →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;