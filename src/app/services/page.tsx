export default function ServicesPage() {
  const services = [
    {
      title: "Kitchen Design",
      description: "Custom modular kitchens designed for efficiency and style.",
      icon: "🍳"
    },
    {
      title: "Bedroom Interiors",
      description: "Transforming your bedroom into a sanctuary of comfort and elegance.",
      icon: "🛏️"
    },
    {
      title: "2D/3D Layouts",
      description: "Photorealistic visualizations to help you see your dream home before it's built.",
      icon: "📐"
    },
    {
      title: "Furniture & Decor",
      description: "Bespoke furniture pieces and curated decor to match your style.",
      icon: "🛋️"
    },
    {
      title: "Custom Solutions",
      description: "Tailor-made interior solutions for unique spaces and specific needs.",
      icon: "✨"
    },
    {
      title: "Architecture & Planning",
      description: "Comprehensive architectural services from concept to execution.",
      icon: "🏢"
    }
  ];

  return (
    <main className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive interior design solutions tailored to your lifestyle.</p>
        </div>
      </section>

      <section className="services-grid container">
        {services.map((service, index) => (
          <div key={index} className="service-card glass-panel">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="/contact" className="service-link">Learn More &rarr;</a>
          </div>
        ))}
      </section>

      <section className="cta-section container">
        <div className="cta-card glass-panel">
          <h2>Need a custom solution?</h2>
          <p>We're here to help you bring your vision to life.</p>
          <a href="/contact" className="btn btn-primary">Book a Consultation</a>
        </div>
      </section>

      <style>{`
        .services-page {
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          padding: 5rem 2rem;
        }

        .service-card {
          padding: 3rem 2rem;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .service-card p {
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .service-link {
          font-weight: 600;
          color: var(--primary);
          font-size: 0.9rem;
        }

        .cta-section {
          padding: 5rem 2rem;
        }

        .cta-card {
          padding: 5rem;
          text-align: center;
          background: linear-gradient(135deg, var(--secondary), #1a2a3a);
          color: white;
        }

        .cta-card h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-card p {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .cta-card {
            padding: 3rem 1.5rem;
          }
          .cta-card h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
