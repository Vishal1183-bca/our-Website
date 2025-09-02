import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isContactPage ? 'navbar-contact' : 'navbar-default'}`} style={{
      background: 'white !important',
      backgroundColor: 'white !important',
      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      backdropFilter: 'blur(15px)',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
    }}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/" style={{
          color: '#e91e63',
          fontSize: '1.5rem',
          textShadow: 'none',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '10px'
          }}>
            <i className="fas fa-code" style={{ color: 'white', fontSize: '18px' }}></i>
          </div>
          NeoArch
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{
          border: '1px solid rgba(0,0,0,0.3)'
        }}>
          <span className="navbar-toggler-icon" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")"
          }}></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{
                color: '#333',
                fontWeight: '500',
                margin: '0 0.5rem',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{
                color: '#333',
                fontWeight: '500',
                margin: '0 0.5rem',
                transition: 'all 0.3s ease'
              }}>ABOUT</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                color: '#333',
                fontWeight: '500',
                margin: '0 0.5rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}>SERVICES+</a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown" style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '10px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                padding: '10px 0',
                minWidth: '200px'
              }}>
                <li><Link className="dropdown-item" to="/services/web-development" style={{
                  color: '#333',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.color = '#e91e63';
                }} onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#333';
                }}>Web Development</Link></li>
                <li><Link className="dropdown-item" to="/services/app-development" style={{
                  color: '#333',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.color = '#e91e63';
                }} onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#333';
                }}>App Development</Link></li>
                <li><Link className="dropdown-item" to="/services/ui-ux" style={{
                  color: '#333',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.color = '#e91e63';
                }} onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#333';
                }}>UI/UX</Link></li>
                <li><Link className="dropdown-item" to="/services/graphic-design" style={{
                  color: '#333',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.color = '#e91e63';
                }} onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#333';
                }}>Graphic Design</Link></li>
                <li><Link className="dropdown-item" to="/services/desktop-application" style={{
                  color: '#333',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.color = '#e91e63';
                }} onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#333';
                }}>Desktop Application</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio" style={{
                color: '#333',
                fontWeight: '500',
                margin: '0 0.5rem',
                transition: 'all 0.3s ease'
              }}>PORTFOLIO</Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/contact" className="btn btn-sm" style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                padding: '8px 20px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;