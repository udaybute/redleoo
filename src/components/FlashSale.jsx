import React from 'react';

const FlashSale = () => {
  return (
    <div className="bg-warning text-dark text-center py-4 px-2">
      <h3 className="fw-bold mb-2">⚡FLASH SALE ON NOW!⚡</h3>
      <p className="mb-2">🎁 Magical 3D Keychains at Unbeatable Prices!</p>
      <ul className="list-unstyled">
        <li>✨ Buy 1 @ ₹180</li>
        <li>✨ Buy 2, Get 1 FREE (3 for ₹360)</li>
        <li>✨ Buy 3, Get 2 FREE (5 for ₹540)</li>
      </ul>
      <p className="mb-2 fw-bold">🚚 FREE DELIVERY all over India (4–6 days)</p>
      <p className="mb-3">📲 Send photos & address on WhatsApp: <strong>7058894231</strong></p>
      <a href="https://wa.me/917058894231" className="btn btn-danger">
        Order Now on WhatsApp
      </a>
    </div>
  );
};

export default FlashSale;
