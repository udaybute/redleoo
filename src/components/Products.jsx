import React from 'react';
import k1 from "../images/k1.jpg";
import k2 from "../images/k2.jpg";
import k3 from "../images/k3.jpg";

// Sample extended product structure
const products = [
  {
    id: 1,
    name: '3D Photo Keychain',
    price: '₹180',
    tag: '🔥 Best Seller',
    author: 'RedLeeo Studio',
    size: '5x3 cm',
    material: 'PLA - Glossy',
    image: k1,
    desc: 'Custom photo keychain with 3D pop-out effect. Great for personal gifts.',
  },
  {
    id: 2,
    name: 'Iron Man Bust (15cm)',
    price: '₹799',
    tag: '🛡️ Marvel Fan Pick',
    author: 'RedLeeo Studio',
    size: '15 cm',
    material: 'PLA - Matte Red/Gold',
    image: k2,
    desc: 'Premium Iron Man collectible bust. Smooth matte finish, high-detail.',
  },
  {
    id: 3,
    name: 'Mechanical Gear Keychain',
    price: '₹149',
    tag: '⚙️ Functional',
    author: 'RedLeeo Studio',
    size: '4x4 cm',
    material: 'PLA - Dual Color',
    image: k3,
    desc: 'Working mechanical keychain with rotating gears. Perfect for engineers.',
  },
  {
    id: 4,
    name: 'Custom Moon Lamp (12cm)',
    price: '₹899',
    tag: '🌕 Romantic Pick',
    author: 'RedLeeo Studio',
    size: '12 cm',
    material: 'PLA + LED',
    image: k2,
    desc: 'Personalized moon lamp with name/date engraving. Ideal for anniversaries.',
  },
  {
    id: 5,
    name: 'Nameplate Tag',
    price: '₹499',
    tag: '🧷 Personalized',
    author: 'RedLeeo Studio',
    size: 'Upto 12 characters',
    material: 'PLA - Multiple Colors',
    image: k1,
    desc: 'Custom 3D printed nameplate. Great for desks, gifts, or workspace identity.',
  }
];

const Products = () => {
  return (
    <section id="products" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">🎁 Our Bestselling 3D Gifts</h2>
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-warning text-dark mb-2">{product.tag}</span>
                  <h5 className="card-title fw-semibold">{product.name}</h5>
                  <p className="small text-muted mb-1">By {product.author}</p>
                  <p className="mb-2">{product.desc}</p>
                  <ul className="list-unstyled small text-muted mb-3">
                    <li><strong>Size:</strong> {product.size}</li>
                    <li><strong>Material:</strong> {product.material}</li>
                  </ul>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <h5 className="text-danger fw-bold mb-0">{product.price}</h5>
                    <a href="#purchase" className="btn btn-sm btn-outline-danger">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
