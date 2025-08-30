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
          GJTecho
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
              <Link className="nav-link dropdown-toggle" to="/services" style={{
                color: '#333',
                fontWeight: '500',
                margin: '0 0.5rem',
                transition: 'all 0.3s ease'
              }}>SERVICES+</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio" style={{
                color: '#333',
                fontWeight: '500',
                margin: '0 0.5rem',
                transition: 'all 0.3s ease'
              }}>PORTFOLIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs" style={{
                color: '#333',
                fontWeight: '500',
                margin: '0 0.5rem',
                transition: 'all 0.3s ease'
              }}>BLOGS</Link>
            </li>
            <li className="nav-item ms-3">
              <div className="d-flex gap-2">
                <a href="tel:+918866392521" className="btn btn-sm" style={{
                  background: isContactPage ? 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)' : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}>
                  <i className="fas fa-phone" style={{ fontSize: '14px' }}></i>
                </a>
                <Link to="/contact" className="btn btn-sm" style={{
                  background: isContactPage ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '8px 20px',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}>
                  Contact Us
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;