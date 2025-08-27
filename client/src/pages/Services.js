import React, { useEffect, useState } from 'react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const filterServices = (category) => {
    setActiveFilter(category);
  };
  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web solutions using modern technologies',
      technologies: ['PHP', 'Laravel', '.NET', 'Java', 'Python', 'WordPress', 'WooCommerce'],
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Secure'],
      category: 'web'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      technologies: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Ionic'],
      features: ['Cross-platform', 'Native Performance', 'App Store Ready', 'Push Notifications']
    },
    {
      title: 'Frontend Development',
      description: 'Modern, interactive user interfaces',
      technologies: ['React.js', 'Angular', 'Vue.js', 'Node.js', 'TypeScript'],
      features: ['Modern UI', 'Interactive', 'Performance Optimized', 'Accessibility']
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions',
      technologies: ['SEO', 'SMO', 'PPC', 'Content Marketing', 'Email Marketing'],
      features: ['ROI Focused', 'Data-driven', 'Multi-channel', 'Conversion Optimization']
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero py-5" style={{ marginTop: '76px' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold text-white mb-4 animate-title">Our Services</h1>
            <p className="lead text-light mb-4 animate-subtitle">Comprehensive digital solutions to grow your business</p>
            <div className="hero-stats row text-center">
              <div className="col-6 col-md-3 mb-3">
                <div className="stat-box">
                  <h3 className="text-cyan">50+</h3>
                  <p className="text-light">Projects</p>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="stat-box">
                  <h3 className="text-cyan">4</h3>
                  <p className="text-light">Services</p>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="stat-box">
                  <h3 className="text-cyan">24/7</h3>
                  <p className="text-light">Support</p>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="stat-box">
                  <h3 className="text-cyan">100%</h3>
                  <p className="text-light">Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-4 bg-dark-pattern">
        <div className="container">
          <div className="text-center">
            <div className="filter-buttons">
              {['all', 'web', 'mobile', 'design', 'marketing'].map((filter) => (
                <button
                  key={filter}
                  className={`btn filter-btn mx-2 mb-2 ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => filterServices(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 bg-gradient-dark">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6 col-xl-6 mb-4">
                <div 
                  className={`service-card card h-100 ${visibleCards.includes(index) ? 'animate-in' : ''}`}
                  data-index={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-body p-4">
                    <div className="service-icon mb-3">
                      <i className="fas fa-code fa-3x"></i>
                    </div>
                    <h3 className="card-title text-white mb-3">{service.title}</h3>
                    <p className="card-text text-light mb-4">{service.description}</p>
                    
                    <div className="technologies-section mb-4">
                      <h6 className="fw-bold text-cyan mb-3">Technologies:</h6>
                      <div className="tech-grid">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="features-section mb-4">
                      <h6 className="fw-bold text-cyan mb-3">Key Features:</h6>
                      <ul className="feature-list">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="feature-item">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span className="text-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="card-footer-custom">
                      <button className="btn btn-gradient w-100">Get Started</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 bg-dark-pattern">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white mb-4">Our Process</h2>
            <p className="lead text-light">How we deliver exceptional results</p>
          </div>
          <div className="row">
            {['Discovery', 'Planning', 'Design', 'Development', 'Testing', 'Launch'].map((step, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">{index + 1}</div>
                  <h6 className="text-white mt-2">{step}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;