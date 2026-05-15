export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Hauspire</h1>
          <p>Designing thoughtful, livable spaces since 1986.</p>
        </div>
      </section>

      <section className="about-content container">
        <div className="about-grid">
          <div className="about-text">
            <h2>We blend style with functionality</h2>
            <p>
              At Hauspire, we believe that your living space should be a reflection 
              of your personality. We design environments that are not only 
              aesthetically pleasing but also highly functional and livable.
            </p>
            <p>
              From concept to completion, every detail is thoughtfully designed 
              and carefully executed to reflect your unique personality, lifestyle, 
              and needs.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <h3>235+</h3>
                <p>Client Satisfactions</p>
              </div>
              <div className="stat-item">
                <h3>420+</h3>
                <p>Work Experiences</p>
              </div>
              <div className="stat-item">
                <h3>30K</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
              alt="Interior Design" 
              className="glass-panel"
            />
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          padding: 10rem 0 5rem;
          background-color: #f9f9f9;
          text-align: center;
        }

        .page-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: var(--foreground);
        }

        .page-header p {
          font-size: 1.1rem;
          color: #666;
        }

        .about-content {
          padding: 5rem 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .about-text h2 {
          font-size: 2.2rem;
          margin-bottom: 2rem;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: #555;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat-item h3 {
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }

        .about-image img {
          width: 100%;
          border-radius: 20px;
          object-fit: cover;
          height: 500px;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .about-image {
            order: -1;
          }
        }
      `}</style>
    </main>
  );
}
