import React from 'react';
import logo from '../images/logo1.png'; // Adjust path if needed

const Nav = () => {
  return (
    <nav style={styles.nav} className=''>
      <div style={styles.logoContainer}>
        <img src={logo} alt="RedLeeo Logo" style={styles.logoImage} />
      </div>
      <ul style={styles.menu}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#products" className="btn-red">Start Shopping</a>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    background: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    height: '80px', // Fixed navbar height
    overflow: 'hidden',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    zIndex: 999
  },
  logoContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoImage: {
    height: '220px',
    marginTop: '0px', // Adjust vertically to look centered
    objectFit: 'contain',
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    margin: 0
  }
};

export default Nav;
