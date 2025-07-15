// src/components/WhatsAppWidget.jsx
import React from 'react';
import whatsappIcon from '../images/whatsapp.png'; // Should be a 50x50 PNG

const WhatsAppWidget = () => {
  const phoneNumber = "917058894231"; // Your WhatsApp number
  const defaultMessage = "Hi RedLeeo, I’d like to know more about your 3D printing services! [page_url]";
  const currentUrl = window.location.href;
  const messageWithURL = defaultMessage.replace("[page_url]", currentUrl);

  return (
    <div className="whatsapp-container" data-aos="zoom-in-up">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageWithURL)}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="img-fluid" />
      </a>
    </div>
  );
};

export default WhatsAppWidget;
