import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4" style={{ fontSize: '2rem', color: '#d32f2f' }}>
          About <span style={{ color: '#333' }}>RedLeeo 3D Printing</span>
        </h2>
        <p className="lead text-muted mb-5">
          At <strong>RedLeeo</strong>, we specialize in delivering high-quality, customized 3D printed products...
        </p>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 rounded shadow-sm h-100 text-white" style={{ backgroundColor: '#4CAF50' }}>
              <h5 className="mb-2">🛠️ Custom 3D Design</h5>
              <p className="mb-0 small">We turn your imagination into reality using industry-grade 3D printing technology.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded shadow-sm h-100 text-white" style={{ backgroundColor: '#2196F3' }}>
              <h5 className="mb-2">🚚 Fast & Free Shipping</h5>
              <p className="mb-0 small">All orders are delivered anywhere in India within 4–6 days, with tracking.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded shadow-sm h-100 text-white" style={{ backgroundColor: '#FF5722' }}>
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
