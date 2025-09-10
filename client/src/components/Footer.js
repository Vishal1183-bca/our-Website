import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>NeoArch</h5>
            <p>Your trusted partner for web development, mobile apps,Desktop Appliction,UI/UX design, and graphic design services.</p>
            <div className="social-links">
             
              <a href="#" className="text-white me-3"><i className="fab fa-github"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/services/web-development" className="text-white-50">Web Development</Link></li>
              <li><Link to="/services/app-development" className="text-white-50">Mobile Development</Link></li>
              <li><Link to="/services/ui-ux" className="text-white-50">UI/UX Design</Link></li>
              <li><Link to="/services/graphic-design" className="text-white-50">Graphic Design</Link></li>
              <li><Link to="/services/desktop-application" className="text-white-50">Desktop Application</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <p className="mb-1"><i className="fas fa-map-marker-alt me-2"></i>Vadodara, Gujarat, India</p>
            <p className="mb-1"><i className="fas fa-phone me-2"></i>+91 9586399316  </p>
            <p className="mb-1"><i className="fas fa-phone me-2"></i>+91 9173040278</p>
            <p className="mb-1"><i className="fas fa-envelope me-2"></i>neoarch2025@gmail.com</p>
            <p><i className="fas fa-clock me-2"></i>24/7 Support Available</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} NeoArch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;