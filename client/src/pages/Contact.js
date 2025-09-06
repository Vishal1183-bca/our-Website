import React, { useState, useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    agreed: false
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Formspree configuration
      const formData2 = new FormData();
      formData2.append('name', formData.name);
      formData2.append('email', formData.email);
      formData2.append('phone', formData.phone);
      formData2.append('service', formData.service);
      formData2.append('message', formData.message);

      // Send email using Formspree
      const response = await fetch('https://formspree.io/f/mdkdpbly', {
        method: 'POST',
        body: formData2,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        console.log('Formspree Success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        agreed: false
      });
      
      setSubmitStatus({ isSubmitting: false, isSubmitted: true, error: null });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ isSubmitting: false, isSubmitted: false, error: null });
      }, 5000);
      
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error('Formspree Error:', error);
      setSubmitStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: 'Failed to send message. Please try again.' 
      });
    }
  };

  return (
    <section className="contact-page" style={{ 
      marginTop: '76px',
      backgroundColor: 'white',
      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container py-3 py-md-5">
        <div className="row align-items-start align-items-lg-center">
          {/* Left Side - Form */}
          <div className="col-12 col-lg-7 mb-4 mb-lg-0 order-2 order-lg-1">
            <div className="contact-form-section">
              <p className="text-uppercase fw-bold mb-3" style={{ color: '#e91e63', fontSize: '14px', letterSpacing: '1px' }}>CONTACT NOW</p>
              <h1 className="fw-bold mb-3" style={{ 
                color: '#1a237e', 
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
                lineHeight: '1.2' 
              }}>
                Have Question? Write a<br className="d-none d-md-block" />
                Message
              </h1>
              <p className="mb-4" style={{ 
                color: '#666', 
                fontSize: 'clamp(14px, 2.5vw, 16px)' 
              }}>
                We will catch you as early as we receive the message
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Full Name*"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        border: 'none',
                        borderBottom: '2px solid #e0e0e0',
                        borderRadius: '0',
                        padding: '12px 0',
                        background: 'transparent',
                        fontSize: 'clamp(14px, 2.5vw, 16px)'
                      }}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Mobile Number*"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        border: 'none',
                        borderBottom: '2px solid #e0e0e0',
                        borderRadius: '0',
                        padding: '12px 0',
                        background: 'transparent',
                        fontSize: 'clamp(14px, 2.5vw, 16px)'
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        border: 'none',
                        borderBottom: '2px solid #e0e0e0',
                        borderRadius: '0',
                        padding: '12px 0',
                        background: 'transparent',
                        fontSize: 'clamp(14px, 2.5vw, 16px)'
                      }}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <select
                      className="form-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        border: 'none',
                        borderBottom: '2px solid #e0e0e0',
                        borderRadius: '0',
                        padding: '12px 0',
                        background: 'transparent',
                        fontSize: 'clamp(14px, 2.5vw, 16px)'
                      }}
                      required
                    >
                      <option value="">Interested In*</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="ecommerce">Ecommerce Development</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    placeholder="Brief about the project*"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      border: 'none',
                      borderBottom: '2px solid #e0e0e0',
                      borderRadius: '0',
                      padding: '15px 0',
                      background: 'transparent',
                      fontSize: '16px',
                      resize: 'none'
                    }}
                    required
                  ></textarea>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="agreed"
                    id="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    style={{ accentColor: '#e91e63' }}
                    required
                  />
                  <label className="form-check-label" htmlFor="agreed" style={{ fontSize: '14px', color: '#666' }}>
                    By clicking the 'Submit' button you agree to our <a href="#" style={{ color: '#e91e63' }}>Terms & Conditions</a>.
                  </label>
                </div>

                {/* Success Message */}
                {submitStatus.isSubmitted && (
                  <div className="alert alert-success mb-4" style={{
                    backgroundColor: '#d4edda',
                    borderColor: '#c3e6cb',
                    color: '#155724',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    border: '1px solid #c3e6cb'
                  }}>
                    <i className="fas fa-check-circle me-2"></i>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {/* Error Message */}
                {submitStatus.error && (
                  <div className="alert alert-danger mb-4" style={{
                    backgroundColor: '#f8d7da',
                    borderColor: '#f5c6cb',
                    color: '#721c24',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    border: '1px solid #f5c6cb'
                  }}>
                    <i className="fas fa-exclamation-circle me-2"></i>
                    {submitStatus.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitStatus.isSubmitting}
                  className="btn w-100 w-md-auto px-4 py-2"
                  style={{
                    background: submitStatus.isSubmitting 
                      ? 'linear-gradient(135deg, #ccc 0%, #999 100%)' 
                      : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    fontWeight: '500',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    transition: 'all 0.3s ease',
                    cursor: submitStatus.isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {submitStatus.isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin me-2"></i>
                      Sending...
                    </>
                  ) : (
                    'Submit →'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="col-12 col-lg-5 order-1 order-lg-2">
            <div className="contact-info-cards">
              {/* Phone Card */}
              <div className="contact-card mb-3 mb-md-4 p-3 p-md-4" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-phone" style={{ color: '#1a237e', fontSize: 'clamp(16px, 3vw, 20px)', marginRight: '10px' }}></i>
                  <h5 className="mb-0" style={{ color: '#1a237e', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 18px)' }}>Phone:</h5>
                </div>
                <p className="mb-2" style={{ color: '#666', fontSize: 'clamp(12px, 2vw, 14px)' }}>
                  Assistance hours: Monday - Saturday, 11 am to 9 pm
                </p>
                <div>
                  <a href="tel:+919586399316" style={{ 
                    color: '#1a237e', 
                    textDecoration: 'none', 
                    fontWeight: '500',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    display: 'block',
                    marginBottom: '5px'
                  }}>
                    (+91) 9586399316
                  </a>
                  <a href="tel:+919173040278" style={{ 
                    color: '#1a237e', 
                    textDecoration: 'none', 
                    fontWeight: '500',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    display: 'block'
                  }}>
                    (+91) 9173040278
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-card mb-4 p-4" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '20px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-envelope" style={{ color: '#1a237e', fontSize: '20px', marginRight: '10px' }}></i>
                  <h5 className="mb-0" style={{ color: '#1a237e', fontWeight: '600' }}>Email:</h5>
                </div>
                <p className="mb-2" style={{ color: '#666', fontSize: '14px' }}>
                  Our support team will get back to you during standard business hours.
                </p>
                <a href="mailto:info@gjtecho.com" style={{ color: '#e91e63', textDecoration: 'none', fontWeight: '500' }}>
                  Let's Connect - Click Here
                </a>
              </div>

              {/* Address Card */}
              <div className="contact-card mb-4 p-4" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '20px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-map-marker-alt" style={{ color: '#1a237e', fontSize: '20px', marginRight: '10px' }}></i>
                  <h5 className="mb-0" style={{ color: '#1a237e', fontWeight: '600' }}>Address:</h5>
                </div>
                <p className="mb-2" style={{ color: '#666', fontSize: '14px' }}>
                  Visit us at our office during business hours
                </p>
                <p style={{ color: '#1a237e', fontWeight: '500', fontSize: '14px', margin: 0 }}>
                  Vadodara, Gujarat, India
                </p>
              </div>

              {/* LinkedIn Card */}
              <div className="contact-card p-4" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '20px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <div className="d-flex align-items-center mb-2">
                  <i className="fab fa-linkedin" style={{ color: '#1a237e', fontSize: '20px', marginRight: '10px' }}></i>
                  <h5 className="mb-0" style={{ color: '#1a237e', fontWeight: '600' }}>LinkedIn:</h5>
                </div>
                <p className="mb-2" style={{ color: '#666', fontSize: '14px' }}>
                  Connect with us on professional network
                </p>
                <a href="https://linkedin.com/company/neoarch" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', textDecoration: 'none', fontWeight: '500' }}>
                  Follow NeoArch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Map Section */}
      <div className="map-section mt-5">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div style={{ height: '400px', background: '#f8f9fa', position: 'relative' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689047896!2d73.09773!3d22.3072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GJTecho Location"
                ></iframe>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(255,255,255,0.95)',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                  <h6 style={{ color: '#1a237e', fontWeight: '600', margin: 0, fontSize: '14px' }}>
                    📍 NeoArch Office
                  </h6>
                  <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: '#1a237e', fontWeight: '700', fontSize: '2rem' }}>Frequently Asked Questions</h2>
            <p style={{ color: '#666', fontSize: '16px' }}>Quick answers to common questions</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {[
                  {
                    id: 'faq1',
                    question: 'What services do you offer?',
                    answer: 'We offer web development, mobile app development, UI/UX design, digital marketing, and ecommerce solutions.'
                  },
                  {
                    id: 'faq2', 
                    question: 'How long does a typical project take?',
                    answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications may take 2-6 months.'
                  },
                  {
                    id: 'faq3',
                    question: 'Do you provide ongoing support?',
                    answer: 'Yes, we provide ongoing maintenance and support for all our projects with different service packages.'
                  },
                  {
                    id: 'faq4',
                    question: 'What is your development process?',
                    answer: 'We follow an agile methodology with regular client updates, including planning, design, development, testing, and deployment phases.'
                  }
                ].map((faq, index) => (
                  <div key={faq.id} className="accordion-item mb-3" style={{ border: 'none', borderRadius: '10px', overflow: 'hidden' }}>
                    <h2 className="accordion-header">
                      <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#${faq.id}`}
                        style={{
                          background: 'white',
                          border: 'none',
                          color: '#1a237e',
                          fontWeight: '600',
                          fontSize: '16px',
                          padding: '20px'
                        }}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div id={faq.id} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body" style={{ background: '#f8f9fa', color: '#666', padding: '20px' }}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;