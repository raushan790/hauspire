export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="container">
          <div className="hero-content glass-panel">
            <h1>We design thoughtful, <br/>livable spaces.</h1>
            <p>
              We blend style with functionality to create environments you’ll truly love to live in. 
              From concept to completion, every detail is thoughtfully designed.
            </p>
            <div className="hero-actions">
              <a href="/projects" className="btn btn-primary">Discover More</a>
              <a href="/contact" className="btn btn-secondary">Book Consultation</a>
            </div>
          </div>
        </div>
      </header>

      <section className="features container">
        <div className="section-title">
          <h2>Why Choose Hauspire</h2>
          <p>We craft personalized interior designs tailored to your style and needs.</p>
        </div>
        <div className="features-grid">
          <div className="feature-item glass-panel">
            <span className="feature-icon">💎</span>
            <h3>Premium Materials</h3>
            <p>Only the finest materials for a lasting and luxurious finish.</p>
          </div>
          <div className="feature-item glass-panel">
            <span className="feature-icon">🛠️</span>
            <h3>Expert Craftsmanship</h3>
            <p>Skilled professionals dedicated to perfection in every detail.</p>
          </div>
          <div className="feature-item glass-panel">
            <span className="feature-icon">🎨</span>
            <h3>Seamless Customization</h3>
            <p>Designs as unique as you are, tailored to your every need.</p>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <div className="section-title">
            <h2>Our Specialized Services</h2>
            <p>Transforming rooms and weaving dreams through design excellence.</p>
          </div>
          <div className="services-summary">
            <div className="service-thumb">
              <h3>Interior Decoration</h3>
              <a href="/services" className="text-link">Explore Service &rarr;</a>
            </div>
            <div className="service-thumb">
              <h3>2D/3D Layouts</h3>
              <a href="/services" className="text-link">Explore Service &rarr;</a>
            </div>
            <div className="service-thumb">
              <h3>Custom Solutions</h3>
              <a href="/services" className="text-link">Explore Service &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-preview container">
        <div className="section-header">
          <h2>Latest Projects</h2>
          <a href="/projects" className="text-link">See all projects &rarr;</a>
        </div>
        <div className="projects-teaser-grid">
          <div className="project-teaser glass-panel">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" alt="Modern Living" />
            <div className="teaser-info">
              <h3>Classic Living</h3>
              <p>Kerala</p>
            </div>
          </div>
          <div className="project-teaser glass-panel">
            <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=800" alt="Art Deco" />
            <div className="teaser-info">
              <h3>Art Deco Nook</h3>
              <p>Pune</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000') center/cover no-repeat;
          position: relative;
        }
        
        .hero-content {
          max-width: 650px;
          padding: 3rem;
          color: white;
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-content p {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
          text-decoration: none;
        }

        .btn-primary {
          background-color: var(--primary);
          color: white;
          border: 2px solid var(--primary);
        }

        .btn-primary:hover {
          background-color: var(--primary-hover);
          border-color: var(--primary-hover);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background-color: white;
          color: var(--foreground);
          transform: translateY(-2px);
        }

        .section-title {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-title p {
          color: #666;
          font-size: 1.1rem;
        }

        .features {
          padding: 7rem 1rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .feature-item {
          padding: 3rem 2rem;
          text-align: center;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .feature-item h3 {
          margin-bottom: 1rem;
        }

        .feature-item p {
          color: #666;
          font-size: 0.95rem;
        }

        .services-preview {
          background-color: #f9f9f9;
          padding: 7rem 1rem;
        }

        .services-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-thumb {
          background: white;
          padding: 3rem 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          text-align: center;
        }

        .service-thumb h3 {
          margin-bottom: 1.5rem;
        }

        .text-link {
          color: var(--primary);
          font-weight: 700;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .projects-preview {
          padding: 7rem 1rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
        }

        .projects-teaser-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .project-teaser {
          overflow: hidden;
          padding: 0;
        }

        .project-teaser img {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        .teaser-info {
          padding: 2rem;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .features-grid, .services-summary, .projects-teaser-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-content h1 {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 2rem;
          }
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .hero-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
