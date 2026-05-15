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
              <a href="#projects" className="btn btn-primary">Discover More</a>
              <a href="/contact" className="btn btn-secondary">Book Consultation</a>
            </div>
          </div>
        </div>
      </header>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          /* We will replace this with a real hero image from the portfolio later */
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

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
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
