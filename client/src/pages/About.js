import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-5" style={{ marginTop: '76px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Our Agency</h1>
          <p className="lead">Your trusted digital partner in Vadodara</p>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Who We Are</h2>
            <p>We are a dynamic digital agency based in Vadodara, specializing in comprehensive digital solutions for businesses worldwide. With a focus on innovation, quality, and client satisfaction, we deliver cutting-edge web development, mobile applications, UI/UX design, and digital marketing services.</p>
            <p>Our small-to-medium sized team handles around 20 projects annually, ensuring personalized attention and quality delivery for each client. We pride ourselves on quick turnaround times, cost-effective solutions, and 24/7 support.</p>
          </div>
          <div className="col-lg-6 text-center">
            <div className="bg-light p-5 rounded">
              <i className="fas fa-users fa-4x text-primary mb-3"></i>
              <h4>Expert Team</h4>
              <p>Dedicated professionals with years of experience</p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <i className="fas fa-target fa-3x text-primary mb-3"></i>
              <h5>Our Mission</h5>
              <p>To empower businesses with innovative digital solutions that drive growth and success in the digital landscape.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <i className="fas fa-eye fa-3x text-primary mb-3"></i>
              <h5>Our Vision</h5>
              <p>To be the leading digital agency in Gujarat, known for excellence, innovation, and client satisfaction.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <i className="fas fa-heart fa-3x text-primary mb-3"></i>
              <h5>Our Values</h5>
              <p>Quality, integrity, innovation, and client-first approach in everything we do.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold text-center mb-4">Why Choose Us?</h2>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="d-flex">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <div>
                    <h6>Individualized Service</h6>
                    <p className="text-muted mb-0">Personalized attention for every project</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <div>
                    <h6>Cost-Effective Pricing</h6>
                    <p className="text-muted mb-0">Competitive rates without compromising quality</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <div>
                    <h6>Quick Turnaround</h6>
                    <p className="text-muted mb-0">Fast delivery within agreed timelines</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <div>
                    <h6>24/7 Support</h6>
                    <p className="text-muted mb-0">Round-the-clock assistance when you need it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 bg-light mt-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Work Together?</h2>
          <p className="lead mb-4">Let's discuss how we can help transform your digital presence.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get Started Today</Link>
        </div>
      </section>
    </section>
  );
};

export default About;