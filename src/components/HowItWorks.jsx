import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import v1 from "../videos/vk1.mp4";
import v2 from "../videos/vk2.mp4";
import v5 from "../videos/vk5.mp4";
import productad from "../images/all.png"
const HowItWorks = () => {
  return (
    <section className="py-2 bg-light" id="how-it-works">
      <div className="container text-center">
       <div className="container my-5 px-3">
  <h2 className="text-center fw-bold mb-4" style={{ color: '#d32f2f', fontSize: '1.8rem' }}>How It Works</h2>
  <div className="row g-3">

    <div className="col-6 col-md-3">
      <div className="p-3 text-center text-white rounded shadow-sm h-100" style={{ backgroundColor: '#5C6BC0' }}>
        <i className="bi bi-bag-fill fs-4 mb-2 d-block"></i>
        <p className="mb-0 small">Browse Products</p>
      </div>
    </div>

    <div className="col-6 col-md-3">
      <div className="p-3 text-center text-white rounded shadow-sm h-100" style={{ backgroundColor: '#26A69A' }}>
        <i className="bi bi-cart-check-fill fs-4 mb-2 d-block"></i>
        <p className="mb-0 small">Click Buy Now</p>
      </div>
    </div>

    <div className="col-6 col-md-3">
      <div className="p-3 text-center text-white rounded shadow-sm h-100" style={{ backgroundColor: '#FFA726' }}>
        <i className="bi bi-pencil-square fs-4 mb-2 d-block"></i>
        <p className="mb-0 small">Fill Your Details</p>
      </div>
    </div>

    <div className="col-6 col-md-3">
      <div className="p-3 text-center text-white rounded shadow-sm h-100" style={{ backgroundColor: '#43A047' }}>
        <i className="bi bi-whatsapp fs-4 mb-2 d-block"></i>
        <p className="mb-0 small">We’ll Contact You</p>
      </div>
    </div>

  </div>
</div>


        <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="ratio ratio-16x9">
                <img src={productad} alt="" />
  
              </div>
            </div>
            
            <div className="carousel-item">
              <div className="ratio ratio-16x9">
                <iframe
                  src={v5}
                  title="Video 2"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="carousel-item">
              <div className="ratio ratio-16x9">
                <iframe
                  src={v2}
                  title="Video 3"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
