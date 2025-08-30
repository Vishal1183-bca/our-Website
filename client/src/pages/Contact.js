import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'vishalbhaliya54@gmail.com'
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_vishalbhaliya54', // Try this Service ID format
        'template_rdl0lq8', // Your Template ID
        templateParams,
        'PjU6a8Kd00jPw3JUb' // Your Public Key
      );
      
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
      
    } catch (error) {
      console.error('EmailJS Error:', error);
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
                <a href="tel:+918866392521" style={{ 
                  color: '#1a237e', 
                  textDecoration: 'none', 
                  fontWeight: '500',
                  fontSize: 'clamp(14px, 2.5vw, 16px)'
                }}>
                  (+91) 88663 92521
                </a>
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
                  We are available Monday - Saturday, 24/7
                </p>
                <a href="#" style={{ color: '#1a237e', textDecoration: 'none', fontWeight: '500' }}>
                  GJTecho.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Contact;