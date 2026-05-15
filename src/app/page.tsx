"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000",
      title: "Thoughtful Livable Spaces.",
      subtitle: "Blending style with functionality."
    },
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000",
      title: "Premium Interior Design.",
      subtitle: "Crafting environments you truly love."
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
      title: "Architectural Excellence.",
      subtitle: "From concept to flawless completion."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="home-wrapper">
      {/* Hero Slider Section */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${slide.image})` }}
          >
            <div className="slide-content container">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <div className="hero-actions">
                <Link href="/projects" className="btn btn-primary">Discover Projects</Link>
                <Link href="/contact" className="btn btn-outline">Book Consultation</Link>
              </div>
            </div>
          </div>
        ))}
        
        <div className="slider-nav">
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`nav-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Overview Section */}
      <section className="about-overview container">
        <div className="about-content">
          <span className="section-label">Our Philosophy</span>
          <h2>Spaces that feel designed, not decorated.</h2>
          <p>
            Curated materials, precise planning, and timeless detailing—crafted for homes 
            and commercial spaces. We believe the most successful projects are born from a true partnership.
          </p>
          <Link href="/about" className="link-arrow">Learn more about us &rarr;</Link>
        </div>
        <div className="about-stats">
          <div className="stat">
            <span className="stat-num">30K+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat">
            <span className="stat-num">420+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="stat-num">1986</span>
            <span className="stat-label">Established</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header-inline">
            <div>
              <span className="section-label">Expertise</span>
              <h2>Our Specialized Services</h2>
            </div>
            <Link href="/services" className="btn btn-outline-dark">View All Services</Link>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏛️</div>
              <h3>Architecture</h3>
              <p>Comprehensive architectural services from concept to execution.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛋️</div>
              <h3>Interior Design</h3>
              <p>Tailored interiors that reflect your personality and lifestyle.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📐</div>
              <h3>2D/3D Layouts</h3>
              <p>Photorealistic visualizations of your future space.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Custom Solutions</h3>
              <p>Bespoke furniture and specific requirements handled perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects container">
        <div className="section-header-center">
          <span className="section-label">Portfolio</span>
          <h2>Latest Masterpieces</h2>
        </div>
        
        <div className="portfolio-grid">
          <div className="portfolio-item large">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" alt="Villa" />
            <div className="item-overlay">
              <div className="item-text">
                <h3>Minimalist Villa</h3>
                <span>Residential • Pune</span>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1512918766671-ad650b9b73ad?auto=format&fit=crop&q=80&w=800" alt="Loft" />
            <div className="item-overlay">
              <div className="item-text">
                <h3>Industrial Loft</h3>
                <span>Commercial</span>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=800" alt="Deco" />
            <div className="item-overlay">
              <div className="item-text">
                <h3>Art Deco Nook</h3>
                <span>Residential</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="center-action">
          <Link href="/projects" className="btn btn-primary">Explore Full Portfolio</Link>
        </div>
      </section>

      <style>{`
        /* Global Home Styles */
        .home-wrapper {
          background-color: var(--background);
        }

        .section-label {
          display: block;
          color: var(--primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }

        .link-arrow {
          display: inline-block;
          margin-top: 1.5rem;
          color: var(--primary);
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        
        .link-arrow:hover {
          transform: translateX(5px);
        }

        /* Buttons */
        .btn {
          padding: 1rem 2.5rem;
          border-radius: 4px;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
          text-decoration: none;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        .btn-primary {
          background-color: var(--primary);
          color: white;
          border: 1px solid var(--primary);
        }

        .btn-primary:hover {
          background-color: transparent;
          color: white;
        }

        .btn-outline {
          background-color: transparent;
          color: white;
          border: 1px solid white;
        }

        .btn-outline:hover {
          background-color: white;
          color: var(--foreground);
        }

        .btn-outline-dark {
          background-color: transparent;
          color: var(--foreground);
          border: 1px solid var(--foreground);
        }

        .btn-outline-dark:hover {
          background-color: var(--foreground);
          color: var(--background);
        }

        /* Hero Slider */
        .hero-slider {
          height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 5s ease-out;
          transform: scale(1.05);
          display: flex;
          align-items: center;
        }

        .slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 1;
        }

        .slide-content {
          color: white;
          max-width: 800px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease 0.5s;
        }

        .slide.active .slide-content {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-title {
          font-size: 4.5rem;
          font-weight: 300;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }

        .slide-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 3rem;
          opacity: 0.9;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        .slider-nav {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 10;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .nav-dot.active {
          background: transparent;
          border-color: white;
          transform: scale(1.3);
        }

        /* About Overview */
        .about-overview {
          padding: 8rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .about-content h2 {
          font-size: 2.8rem;
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .about-content p {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.8;
        }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-size: 3.5rem;
          font-weight: 300;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Services Section */
        .services-section {
          background-color: #f9f9f7;
          padding: 8rem 2rem;
        }

        .section-header-inline {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 5rem;
        }

        .section-header-inline h2 {
          font-size: 2.5rem;
          font-weight: 300;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 3rem 2rem;
          border: 1px solid #eee;
          transition: all 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border-color: transparent;
        }

        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        .service-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .service-card p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Featured Projects */
        .featured-projects {
          padding: 8rem 2rem;
        }

        .section-header-center {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-header-center h2 {
          font-size: 2.5rem;
          font-weight: 300;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: 400px;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .portfolio-item {
          position: relative;
          overflow: hidden;
        }

        .portfolio-item.large {
          grid-row: span 2;
        }

        .portfolio-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .portfolio-item:hover img {
          transform: scale(1.05);
        }

        .item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%);
          display: flex;
          align-items: flex-end;
          padding: 3rem;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .portfolio-item:hover .item-overlay {
          opacity: 1;
        }

        .item-text {
          color: white;
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .portfolio-item:hover .item-text {
          transform: translateY(0);
        }

        .item-text h3 {
          font-size: 1.8rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        .item-text span {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary);
        }

        .center-action {
          text-align: center;
        }

        .center-action .btn-primary:hover {
          background-color: var(--foreground);
          border-color: var(--foreground);
          color: white;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .about-overview {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .slide-title {
            font-size: 3rem;
          }
          .hero-actions {
            flex-direction: column;
          }
          .section-header-inline {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
          .portfolio-item.large {
            grid-row: span 1;
          }
        }
      `}</style>
    </main>
  );
}

