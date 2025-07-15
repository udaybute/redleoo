// FAQSection.jsx
import React from 'react';

const FAQSection = () => {
  return (
    <section id="faq" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-up">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {[
            {
              q: "How long does delivery take?",
              a: "Delivery typically takes 3-7 business days depending on your location."
            },
            {
              q: "Can I print my own design?",
              a: "Yes! You can send us your STL file or we can help create one."
            },
            {
              q: "Do you offer bulk pricing?",
              a: "Absolutely. Contact us for a quote based on your quantity."
            }
          ].map((item, index) => (
            <div className="accordion-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {item.q}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
