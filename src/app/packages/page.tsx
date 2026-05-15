export default function PackagesPage() {
  const plans = [
    {
      name: "Balance Interior",
      price: "₹ 7 Lac",
      description: "Standard design services for a balanced living space.",
      features: [
        "Standard layout planning",
        "Essential furniture pieces",
        "Comfortable color schemes",
        "Basic material selection",
        "Basic support included"
      ]
    },
    {
      name: "Harmony Interior",
      price: "₹ 7.5 Lac",
      description: "Premium comfort and aesthetics for your home.",
      features: [
        "Everything in Balance Plan",
        "Premium material selection",
        "Customized decor options",
        "Enhanced lighting design",
        "Free upgrades on select services",
        "Extended customer support"
      ],
      popular: true
    },
    {
      name: "Emphasis Interior",
      price: "₹ 10.5 Lac",
      description: "Luxury and advanced customization for your dream space.",
      features: [
        "Everything in Harmony Plan",
        "3D Photorealistic Renderings",
        "Premium luxury materials",
        "Advanced storage solutions",
        "Exclusive lounge access",
        "Personalized project management"
      ]
    }
  ];

  return (
    <main className="packages-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Pricing Plans</h1>
          <p>Transparent pricing tailored to your needs and budget.</p>
        </div>
      </section>

      <section className="pricing-grid container">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card glass-panel ${plan.popular ? "popular" : ""}`}>
            {plan.popular && <span className="popular-badge">Most Popular</span>}
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <p className="plan-price">{plan.price}</p>
              <p className="plan-desc">{plan.description}</p>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex}>
                  <span className="check">✓</span> {feature}
                </li>
              ))}
            </ul>
            <a href="/contact" className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"}`}>
              Purchase Now
            </a>
          </div>
        ))}
      </section>

      <section className="faq-section container">
        <h2>Payment FAQs</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How can I pay?</h4>
            <p>We accept payments via credit/debit cards, net banking, UPI, and digital wallets.</p>
          </div>
          <div className="faq-item">
            <h4>Is there a deposit?</h4>
            <p>Yes, we require a 30% non-refundable deposit to initiate the design process.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer installments?</h4>
            <p>Yes, we offer installment plans spread over the project timeline.</p>
          </div>
          <div className="faq-item">
            <h4>Do I get a receipt?</h4>
            <p>Absolutely. Detailed invoices and receipts are provided for all payments.</p>
          </div>
        </div>
      </section>

      <style>{`
        .packages-page {
          padding-bottom: 5rem;
        }

        .page-header {
          padding: 10rem 0 5rem;
          background-color: #f9f9f9;
          text-align: center;
        }

        .page-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          padding: 5rem 1rem;
        }

        .pricing-card {
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s ease;
        }

        .pricing-card:hover {
          transform: translateY(-10px);
        }

        .pricing-card.popular {
          border: 2px solid var(--primary);
          background-color: white;
          transform: scale(1.05);
          z-index: 10;
        }

        .pricing-card.popular:hover {
          transform: scale(1.05) translateY(-10px);
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary);
          color: white;
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .plan-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .plan-header h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--secondary);
        }

        .plan-price {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .plan-desc {
          color: #666;
          font-size: 0.95rem;
        }

        .plan-features {
          list-style: none;
          margin-bottom: 3rem;
          flex-grow: 1;
        }

        .plan-features li {
          margin-bottom: 1rem;
          font-size: 0.95rem;
          color: #555;
          display: flex;
          gap: 0.75rem;
        }

        .check {
          color: var(--primary);
          font-weight: 800;
        }

        .pricing-card .btn {
          width: 100%;
          text-align: center;
        }

        .faq-section {
          padding: 5rem 1rem;
          border-top: 1px solid #eee;
        }

        .faq-section h2 {
          text-align: center;
          margin-bottom: 4rem;
          font-size: 2.2rem;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-item h4 {
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .faq-item p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .pricing-card.popular {
            transform: scale(1);
          }
          .pricing-card.popular:hover {
            transform: translateY(-10px);
          }
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
