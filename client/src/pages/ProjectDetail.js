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
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A modern, responsive personal portfolio website showcasing professional skills, projects, and achievements with smooth animations and interactive elements.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive Design'],
      features: ['Responsive Design', 'Smooth Animations', 'Project Showcase', 'Contact Form', 'SEO Optimized', 'Fast Loading']
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
      title: 'Graphic Design Portfolio',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A collection of creative graphic design works including brand identity, marketing materials, digital illustrations, and print designs for various clients.',
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'CorelDRAW'],
      features: ['Brand Identity Design', 'Marketing Materials', 'Digital Illustrations', 'Print Design', 'Logo Design', 'Social Media Graphics']
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
        }
        
        @media (max-width: 576px) {
          .project-hero h1 {
            font-size: 1.5rem !important;
          }
          .project-content {
            padding: 1rem !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="project-hero py-5" style={{ 
        background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)',
        marginTop: '76px'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <Link to="/portfolio" className="btn btn-outline-primary mb-3" style={{ borderRadius: '25px' }}>
                ← Back to Portfolio
              </Link>
              <h1 className="fw-bold mb-3" style={{ color: '#1a237e', fontSize: '2.5rem' }}>
                {project.title}
              </h1>
              <p className="mb-3" style={{ color: '#e91e63', fontSize: '16px', fontWeight: '500' }}>
                {project.category}
              </p>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                {project.description}
              </p>
            </div>
            <div className="col-lg-6 mb-4">
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
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-5" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="project-content" style={{ padding: '2rem' }}>
                <h3 className="fw-bold mb-4" style={{ color: '#1a237e' }}>Technologies Used</h3>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag" style={{
                      background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="project-content" style={{ padding: '2rem' }}>
                <h3 className="fw-bold mb-4" style={{ color: '#1a237e' }}>Key Features</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {project.features.map((feature, index) => (
                    <li key={index} className="mb-2" style={{ color: '#666' }}>
                      <i className="fas fa-check-circle me-2" style={{ color: '#e91e63' }}></i>
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
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <h3 className="fw-bold mb-3" style={{ color: '#1a237e' }}>
            Interested in a Similar Project?
          </h3>
          <p className="mb-4" style={{ color: '#666' }}>
            Let's discuss how we can bring your ideas to life with our expertise.
          </p>
          <Link 
            to="/contact" 
            className="btn px-4 py-2"
            style={{
              background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            Get Started →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;