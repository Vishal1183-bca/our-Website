import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    { name: 'Web Development', icon: 'fas fa-code', description: 'PHP, .NET, Java, Python, WordPress' },
    { name: 'Mobile Development', icon: 'fas fa-mobile-alt', description: 'Swift, Kotlin, Flutter, React Native' },
    { name: 'UI/UX Design', icon: 'fas fa-paint-brush', description: 'User-centered design solutions' },
    { name: 'Digital Marketing', icon: 'fas fa-bullhorn', description: 'SEO, SMO, PPC, Content Marketing' }
  ];

  const stats = [
    { number: '20+', label: 'Projects/Year' },
    { number: '24/7', label: 'Support' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5" style={{ marginTop: '76px' }}>
        <div className="container">
          <div className="row align-items-center" style={{ minHeight: '75vh' }}>
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Transform Your Digital Presence</h1>
              <p className="lead mb-4">
                We're a Vadodara-based digital agency specializing in web development, mobile apps, 
                UI/UX design, and digital marketing. Fast delivery, 24/7 support, and cost-effective 
                solutions for global clients.
              </p>
              <div className="d-flex gap-3">
                <Link to="/contact" className="btn btn-light btn-lg">Get Started</Link>
                <Link to="/services" className="btn btn-outline-light btn-lg">Our Services</Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <i className="fas fa-laptop-code display-1 mb-4"></i>
              <div className="row text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="col-6 mb-3">
                    <h3 className="fw-bold">{stat.number}</h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Services</h2>
            <p className="lead">Comprehensive digital solutions for your business growth</p>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 text-center border-0 shadow-sm">
                  <div className="card-body">
                    <i className={`${service.icon} fa-3x text-primary mb-3`}></i>
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                    <Link to="/services" className="btn btn-outline-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Start Your Project?</h2>
          <p className="lead mb-4">Let's discuss how we can help transform your digital presence and grow your business.</p>
          <Link to="/contact" className="btn btn-light btn-lg">Get Free Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;