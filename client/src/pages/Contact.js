import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('/api/contact', formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
    
    setLoading(false);
  };

  return (
    <section className="py-5" style={{ marginTop: '76px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="lead">Ready to start your project? Get in touch with our team</p>
        </div>

        {status.message && (
          <div className={`alert alert-${status.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`}>
            {status.message}
            <button type="button" className="btn-close" onClick={() => setStatus({ type: '', message: '' })}></button>
          </div>
        )}

        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="service" className="form-label">Service Interested In *</label>
                      <select
                        className="form-select"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="consultation">Free Consultation</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Project Details *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                    {loading ? (
                      <>
                        <i className="fas fa-spinner fa-spin me-2"></i>Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title mb-4">Get in Touch</h3>
                
                <div className="contact-info">
                  <div className="d-flex mb-3">
                    <i className="fas fa-map-marker-alt text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1">Address</h6>
                      <p className="text-muted mb-0">Vadodara, Gujarat, India</p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-3">
                    <i className="fas fa-phone text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1">Phone</h6>
                      <p className="text-muted mb-0">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-3">
                    <i className="fas fa-envelope text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1">Email</h6>
                      <p className="text-muted mb-0">info@digitalagency.com</p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <i className="fas fa-clock text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1">Support Hours</h6>
                      <p className="text-muted mb-0">24/7 Available</p>
                    </div>
                  </div>
                </div>

                <div className="bg-light p-3 rounded">
                  <h6 className="fw-bold mb-2">Quick Response Guarantee</h6>
                  <p className="small text-muted mb-0">We respond to all inquiries within 2 hours during business hours and within 24 hours on weekends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;