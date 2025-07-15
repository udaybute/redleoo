import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.WAVES({
          el: heroRef.current,
          mouseControls: true,
          touchControls: true,
          minHeight: 300,
          minWidth: 300,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xfbc02d,
          shininess: 50,
          waveHeight: 20,
          waveSpeed: 1.2,
          zoom: 0.75,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '30vh',
        maxHeight: '50vh',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
      }}
    >
      {/* Dark overlay for contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Centered content */}
      <div
        className="container d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          height: '100%',
          padding: '40px 10px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h1 className="display-5 fw-bold mb-3 text-white">
          Bring Your Ideas to Life with <span className="text-warning">RedLeeo</span> 3D Printing
        </h1>
        <p className="lead text-light mb-4">
          High-quality 3D Printed Models for Home, Hobby & Work
        </p>
        <a href="#products" className="btn btn-danger btn-lg shadow">Browse Products</a>
      </div>
    </section>
  );
};

export default Hero;
