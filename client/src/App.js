import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import WebDevelopment from './pages/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import GraphicDesign from './pages/GraphicDesign';
import DesktopApplication from './pages/DesktopApplication';
import HotelManagement from './pages/HotelManagement';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <style jsx global>{`
          /* Global Responsive Styles */
          * {
            box-sizing: border-box;
          }
          
          html, body {
            overflow-x: hidden;
            width: 100%;
          }
          
          .container-fluid {
            padding-left: 15px;
            padding-right: 15px;
          }
          
          /* Desktop Screens */
          @media (min-width: 1400px) {
            .container {
              max-width: 1320px;
            }
            h1, .hero-title {
              font-size: 3rem !important;
            }
            h2 {
              font-size: 2.5rem !important;
            }
            .service-card, .portfolio-card {
              padding: 2.5rem !important;
            }
          }
          
          @media (min-width: 1200px) and (max-width: 1399px) {
            .container {
              max-width: 1140px;
            }
            h1, .hero-title {
              font-size: 2.8rem !important;
            }
            h2 {
              font-size: 2.3rem !important;
            }
          }
          
          @media (min-width: 992px) and (max-width: 1199px) {
            .container {
              max-width: 960px;
            }
            h1, .hero-title {
              font-size: 2.5rem !important;
            }
            h2 {
              font-size: 2.1rem !important;
            }
            .service-card, .portfolio-card {
              padding: 2rem !important;
            }
          }
          
          /* Tablet Screens */
          @media (min-width: 768px) and (max-width: 991px) {
            .container {
              max-width: 720px;
              padding: 0 20px;
            }
            h1, .hero-title {
              font-size: 2.2rem !important;
              text-align: center;
            }
            h2 {
              font-size: 1.9rem !important;
              text-align: center;
            }
            h3 {
              font-size: 1.6rem !important;
            }
            .row {
              margin: 0 -10px;
            }
            .col-lg-6, .col-lg-4, .col-lg-3 {
              padding: 0 10px;
              margin-bottom: 2rem;
            }
            .service-card, .portfolio-card {
              padding: 1.8rem !important;
              margin-bottom: 1.5rem;
            }
            .btn {
              padding: 10px 25px !important;
              font-size: 14px !important;
            }
          }
          
          /* Mobile Screens */
          @media (max-width: 767px) {
            .container {
              max-width: 100%;
              padding: 0 15px;
            }
            h1, .hero-title {
              font-size: 1.8rem !important;
              line-height: 1.3 !important;
              text-align: center;
              margin-bottom: 1rem !important;
            }
            h2 {
              font-size: 1.6rem !important;
              line-height: 1.3 !important;
              text-align: center;
              margin-bottom: 1rem !important;
            }
            h3 {
              font-size: 1.4rem !important;
              text-align: center;
            }
            h4 {
              font-size: 1.2rem !important;
            }
            p {
              font-size: 14px !important;
              line-height: 1.5 !important;
            }
            .row {
              margin: 0 -8px;
            }
            .col-lg-6, .col-lg-4, .col-lg-3, .col-md-6 {
              padding: 0 8px;
              margin-bottom: 1.5rem;
            }
            .service-card, .portfolio-card {
              padding: 1.5rem !important;
              margin-bottom: 1.5rem;
              text-align: center;
            }
            .btn {
              padding: 8px 20px !important;
              font-size: 13px !important;
              width: auto !important;
              display: inline-block !important;
            }
            .d-flex {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
            }
            .gap-2, .gap-3, .gap-4 {
              gap: 1rem !important;
            }
            section {
              padding: 2rem 0 !important;
            }
            .py-5 {
              padding: 2rem 0 !important;
            }
            .mb-4, .mb-5 {
              margin-bottom: 1.5rem !important;
            }
            .navbar-nav {
              text-align: center;
              padding: 1rem 0;
            }
            .navbar-nav .nav-link {
              padding: 0.8rem 1rem !important;
              font-size: 16px !important;
            }
            .dropdown-menu {
              position: static !important;
              float: none !important;
              width: 100% !important;
              margin-top: 0 !important;
              background-color: #f8f9fa !important;
              border: none !important;
              border-radius: 0 !important;
              box-shadow: none !important;
            }
            .dropdown-item {
              text-align: center !important;
              padding: 0.8rem 1rem !important;
              font-size: 15px !important;
            }
          }
          
          /* Small Mobile Screens */
          @media (max-width: 575px) {
            .container {
              padding: 0 10px;
            }
            h1, .hero-title {
              font-size: 1.5rem !important;
            }
            h2 {
              font-size: 1.4rem !important;
            }
            h3 {
              font-size: 1.2rem !important;
            }
            p {
              font-size: 13px !important;
            }
            .service-card, .portfolio-card {
              padding: 1rem !important;
            }
            .btn {
              padding: 6px 15px !important;
              font-size: 12px !important;
            }
            section {
              padding: 1.5rem 0 !important;
            }
            .row {
              margin: 0 -5px;
            }
            .col-lg-6, .col-lg-4, .col-lg-3, .col-md-6 {
              padding: 0 5px;
            }
          }
          
          /* Extra Small Mobile Screens */
          @media (max-width: 480px) {
            h1, .hero-title {
              font-size: 1.3rem !important;
            }
            h2 {
              font-size: 1.2rem !important;
            }
            h3 {
              font-size: 1.1rem !important;
            }
            .service-card, .portfolio-card {
              padding: 0.8rem !important;
            }
          }
          
          /* Navbar Responsive */
          @media (max-width: 991px) {
            .navbar-brand {
              font-size: 1.3rem !important;
            }
            .navbar-toggler {
              padding: 0.25rem 0.5rem;
              font-size: 1rem;
            }
          }
          
          /* Image Responsive */
          img {
            max-width: 100%;
            height: auto;
          }
          
          /* Grid Responsive */
          .portfolio-grid {
            display: grid;
            gap: 2rem;
          }
          
          @media (min-width: 1200px) {
            .portfolio-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          @media (min-width: 768px) and (max-width: 1199px) {
            .portfolio-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (max-width: 767px) {
            .portfolio-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
          }
          
          /* Form Responsive */
          .form-control, .form-select {
            font-size: 14px !important;
          }
          
          @media (max-width: 767px) {
            .form-control, .form-select {
              font-size: 16px !important;
              padding: 12px !important;
            }
          }
          
          /* Animation Responsive */
          @media (max-width: 767px) {
            .scroll-animate {
              opacity: 1 !important;
              transform: none !important;
            }
          }
          
          /* Utility Classes */
          .text-responsive {
            font-size: clamp(0.875rem, 2.5vw, 1rem);
          }
          
          .heading-responsive {
            font-size: clamp(1.5rem, 5vw, 3rem);
          }
          
          .subheading-responsive {
            font-size: clamp(1.2rem, 4vw, 2.5rem);
          }
        `}</style>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/ui-ux" element={<DigitalMarketing />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/desktop-application" element={<DesktopApplication />} />
          <Route path="/hotel-management" element={<HotelManagement />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;