import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sagar from '../images/SagarNishane.jpg'
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";
const CustomerReviews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const reviews = [
    {
      name: 'Uday Bute',
      comment: 'The 3D printed Iron Man bust was absolutely stunning! Loved the detail and quality.',
      rating: 5,
      image: c3,
    },
    {
      name: 'Niranjan Thakare',
      comment: 'Ordered a custom nameplate – perfectly done and timely delivered!',
      rating: 4,
      image: c2,
    },
    {
      name: 'Swapnil Varma',
      comment: 'Great experience with RedLeeo! They delivered exactly what I envisioned.',
      rating: 5,
      image: c1,
    },
    {
      name: 'Sagar Nishane',
      comment: 'Loved the quality and the quick response. Will definitely order again.',
      rating: 4,
      image: sagar,
    },
        {
      name: 'Shyam Deshmukh',
      comment: 'Loved the quality and the quick response. Will definitely order again.',
      rating: 4,
      image: c4,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 0,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="reviews" className="bg-light py-5">
      <div className="container" data-aos="fade-up">
        <h2 className="text-center mb-4 text-danger fw-bold">What Our Customers Say</h2>
        <Slider {...settings}>
          {reviews.map((review, idx) => (
            <div key={idx} className="px-3">
              <div className="card border-0 shadow-sm h-100 text-center p-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <h5 className="fw-semibold">{review.name}</h5>
                <p className="text-muted" style={{ fontSize: '0.95rem' }}>{review.comment}</p>
                <div className="text-warning">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill me-1"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReviews;
