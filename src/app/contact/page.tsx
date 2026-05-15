export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Happy to answer all your questions. Let's start your design journey.</p>
        </div>
      </section>

      <section className="contact-section container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card glass-panel">
              <h3>Get in Touch</h3>
              <p>
                Have a project in mind? Or just want to say hello? 
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="contact-details">
                <div className="detail-item">
                  <span className="icon">📍</span>
                  <div>
                    <h4>Address</h4>
                    <p>Pune, Maharashtra, India</p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="icon">📞</span>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 766 664 5800</p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>hello@hauspire.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form glass-panel">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service">
                  <option>Interior Design</option>
                  <option>Architecture</option>
                  <option>3D Visualization</option>
                  <option>Custom Furniture</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows={5} placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
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

        .contact-section {
          padding: 5rem 1rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: flex-start;
        }

        .info-card {
          padding: 3rem;
        }

        .info-card h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }

        .info-card p {
          color: #666;
          line-height: 1.7;
          margin-bottom: 3rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .detail-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .detail-item .icon {
          font-size: 1.5rem;
          background: rgba(155, 126, 86, 0.1);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--primary);
        }

        .detail-item h4 {
          margin-bottom: 0.25rem;
          font-size: 1.1rem;
        }

        .detail-item p {
          margin: 0;
          color: #777;
        }

        .contact-form {
          padding: 3rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: #444;
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 576px) {
          .info-card, .contact-form {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </main>
  );
}
