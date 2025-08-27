import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'E-commerce Platform', tech: 'Laravel, Vue.js', category: 'Web Development' },
    { title: 'Mobile Banking App', tech: 'Flutter, Firebase', category: 'Mobile Development' },
    { title: 'Corporate Website', tech: 'WordPress, Custom Theme', category: 'Web Development' },
    { title: 'Restaurant App', tech: 'React Native, Node.js', category: 'Mobile Development' }
  ];

  return (
    <section className="py-5" style={{ marginTop: '76px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our Portfolio</h1>
          <p className="lead">Showcasing our successful projects and client achievements</p>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="card-title">{project.title}</h5>
                    <span className="badge bg-primary">{project.category}</span>
                  </div>
                  <p className="text-muted mb-3">{project.tech}</p>
                  <div className="project-placeholder bg-light rounded p-4 text-center mb-3" style={{ minHeight: '200px' }}>
                    <i className="fas fa-image fa-3x text-muted"></i>
                    <p className="text-muted mt-2 mb-0">Project Screenshot</p>
                  </div>
                  <button className="btn btn-outline-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="row mt-5 text-center">
          <div className="col-md-3 mb-4">
            <h2 className="fw-bold text-primary">20+</h2>
            <p>Projects Completed Annually</p>
          </div>
          <div className="col-md-3 mb-4">
            <h2 className="fw-bold text-primary">100%</h2>
            <p>Client Satisfaction Rate</p>
          </div>
          <div className="col-md-3 mb-4">
            <h2 className="fw-bold text-primary">15+</h2>
            <p>Industries Served</p>
          </div>
          <div className="col-md-3 mb-4">
            <h2 className="fw-bold text-primary">5+</h2>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;