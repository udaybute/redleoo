import React from 'react';

const Contact = () => (
  <section id="contact" className="py-5" style={{ backgroundColor: '#e8f5e9' }}>
    <div className="container text-center">
      <h2 className="fw-bold mb-4" style={{ color: '#2e7d32' }}>Need a Custom Design?</h2>
      <p className="lead mb-4">
        Send us your ideas, photos, or sketches — and we’ll bring them to life in 3D!
      </p>
      <a href="https://wa.me/917058894231" className="btn btn-success btn-lg me-2" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-whatsapp me-2"></i>Message on WhatsApp
      </a>
      <a href="tel:7058894231" className="btn btn-outline-secondary btn-lg">
        <i className="bi bi-telephone me-2"></i>Call: 7058894231
      </a>
    </div>
  </section>
);

export default Contact;
