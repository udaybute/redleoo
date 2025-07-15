import React from 'react';

const PurchaseForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = e.target.product.value;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const notes = e.target.notes.value;

    const message = `Hi, I am ${name}.
I want to buy: ${product}
Phone: ${phone}
Email: ${email}
Address: ${address}
Notes: ${notes}`;

    window.open(`https://wa.me/917058894231?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="purchase" className="py-5" style={{ background: 'linear-gradient(135deg, #f3f4f6, #e3f2fd)' }}>
      <div className="container">
        <div className="bg-white rounded-4 shadow p-4 p-md-5 mx-auto" style={{ maxWidth: '800px' }}>
          <h2 className="text-center fw-bold mb-4 text-danger">🛒 Purchase Inquiry</h2>
          <form onSubmit={handleSubmit} className="row g-4">
            <div className="col-md-6">
              <label className="form-label">👤 Full Name</label>
              <input type="text" name="name" className="form-control form-control-lg" placeholder="John Doe" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">📧 Email</label>
              <input type="email" name="email" className="form-control form-control-lg" placeholder="example@mail.com" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">📱 Phone Number</label>
              <input type="text" name="phone" className="form-control form-control-lg" placeholder="7058xxxxxx" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">🏠 Address</label>
              <input type="text" name="address" className="form-control form-control-lg" placeholder="City, State, PIN" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">🎁 Select Product</label>
              <select name="product" className="form-select form-select-lg" required>
                <option value="">Choose...</option>
                <option value="Iron Man Bust">Iron Man Bust</option>
                <option value="Gear Keychain">Gear Keychain</option>
                <option value="Pen Holder Skull">Pen Holder Skull</option>
                <option value="Custom Nameplate">Custom Nameplate</option>
                <option value="Architectural Model">Architectural Model</option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label">📝 Custom Notes</label>
              <textarea name="notes" rows="3" className="form-control form-control-lg" placeholder="Write your message here..."></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success btn-lg px-4 mt-2 shadow-sm">
                <i className="bi bi-whatsapp me-2"></i>Confirm & WhatsApp Us
              </button>
              <p className="text-muted mt-3 small">
                📎 <strong>After submitting, please send your image manually on WhatsApp.</strong>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PurchaseForm;
