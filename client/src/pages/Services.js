import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web solutions using modern technologies',
      technologies: ['PHP', 'Laravel', '.NET', 'Java', 'Python', 'WordPress', 'WooCommerce'],
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Secure']
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
    <section className="py-5" style={{ marginTop: '76px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our Services</h1>
          <p className="lead">Comprehensive digital solutions to grow your business</p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-primary">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                  
                  <h6 className="fw-bold">Technologies:</h6>
                  <div className="mb-3">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge bg-light text-dark me-1 mb-1">{tech}</span>
                    ))}
                  </div>

                  <h6 className="fw-bold">Key Features:</h6>
                  <ul className="list-unstyled">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fas fa-check text-success me-2"></i>{feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;