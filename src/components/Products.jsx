import React from 'react'
import k1 from "../images/k1.jpg";
import k2 from "../images/k2.jpg";
import k3 from "../images/k3.jpg";

const products = [
  {
    id: 1,
    name: 'Magical 3D Keychain',
    price: 'From ₹180',
    desc: `✨ Buy 1 @ ₹180\n✨ Buy 2, Get 1 FREE (₹360 for 3)\n✨ Buy 3, Get 2 FREE (₹540 for 5)\n\n• Personalized with your photo\n• Unique 3D effect\n• Ideal gift for all occasions`,
    image: k1,
  },
  {
    id: 2,
    name: 'Iron Man Bust',
    price: '₹799',
    desc: `A premium 15cm Iron Man bust with incredible detail.\n• Great for collectors & Marvel fans\n• High-durability PLA plastic\n• Smooth matte finish`,
    image: k2,
  },
  {
    id: 3,
    name: 'Key Keychain',
    price: '₹149',
    desc: `Functional mechanical gear keychain.\n• Moving parts\n• Eye-catching design\n• Great gift for engineers & makers`,
    image: k3,
  },
  {
    id: 4,
    name: '3D MOON',
    price: '₹349',
    desc: `Stylish skull-shaped pen holder.\n• Holds 8-10 pens\n• Great for desks or gifts\n• Dark black matte texture`,
    image: k2,
  },
  {
    id: 5,
    name: 'Custom Nameplate',
    price: '₹499',
    desc: `Create your personalized nameplate.\n• Upto 12 characters\n• Available in multiple colors\n• Perfect for desks, gifts, or decor`,
    image: k1,
  }
];



const Products = () => {
 return (
    <section id="products" className="section">
      <h2>Our Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
        {products.map(product => (
          <div key={product.id} style={{ background: '#fff', padding: 20, borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
           <img src={product.image} alt={product.name} style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: '10px' }} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.desc}</p>
            <a href="#purchase" className="btn-red">Buy Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products
