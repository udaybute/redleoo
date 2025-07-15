import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-danger" style={{ fontSize: '2rem' }}>
          About <span className="text-dark">RedLeeo 3D Printing</span>
        </h2>
        <p className="lead text-muted mb-5">
          At <strong>RedLeeo</strong>, we specialize in delivering high-quality, customized 3D printed products crafted with precision and love.
        </p>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="p-4 rounded shadow-sm h-100 text-white bg-success">
              <h5 className="mb-2">🛠️ Custom 3D Design</h5>
              <p className="mb-0 small">We turn your imagination into reality using industry-grade 3D printing technology.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-4 rounded shadow-sm h-100 text-white bg-primary">
              <h5 className="mb-2">🚚 Fast & Free Shipping</h5>
              <p className="mb-0 small">All orders are delivered anywhere in India within 4–6 days, with tracking.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-4 rounded shadow-sm h-100 text-white bg-danger">
              <h5 className="mb-2">📸 Personalized Gifts</h5>
              <p className="mb-0 small">Send us your photo and get a magical 3D keychain—perfect for gifting!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
