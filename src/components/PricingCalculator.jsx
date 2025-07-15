import React, { useState } from 'react';

const PricingCalculator = () => {
  const [price, setPrice] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const size = e.target.size?.value || '';
    const quantity = parseInt(e.target.quantity.value, 10);

    let unitPrice = 0;

    // Pricing logic by category and size
    if (category === "Keychain") {
      unitPrice = quantity > 1 ? 130 : 180;
    } else if (category === "3D Moon") {
      if (size === "6cm") unitPrice = 549;
      else if (size === "12cm") unitPrice = 899;
      else if (size === "15cm") unitPrice = 1299;

      if (quantity > 1) {
        unitPrice = unitPrice * 0.9; // 10% discount
      }
    } else if (category === "3D Heart Lamp") {
      if (size === "12cm") unitPrice = 999;
      else if (size === "15cm") unitPrice = 1299;
    }

    const total = unitPrice * quantity;
    setPrice(total);
  };

  return (
    <section id="pricing" className="py-5 bg-white">
      <div className="container" data-aos="fade-up">
        <h2 className="text-center mb-4">Quote Estimator</h2>
        <form onSubmit={calculate} className="row g-3 justify-content-center">

          <div className="col-md-4">
            <label className="form-label">Category</label>
            <select name="category" className="form-select" required>
              <option value="">Select Category</option>
              <option value="Keychain">Key Keychain</option>
              <option value="3D Moon">3D Moon Lamp</option>
              <option value="3D Heart Lamp">3D Heart Lamp</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Size (if applicable)</label>
            <select name="size" className="form-select">
              <option value="">Select Size</option>
              <option value="6cm">6 cm</option>
              <option value="12cm">12 cm</option>
              <option value="15cm">15 cm</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Quantity</label>
            <input type="number" name="quantity" className="form-control" min="1" required />
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-danger mt-2" type="submit">Calculate</button>
            {price > 0 && (
              <div className="mt-3 fs-5">
                Estimated Price: <strong>₹{Math.round(price)}</strong>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default PricingCalculator;
