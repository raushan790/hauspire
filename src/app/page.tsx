"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2500",
      title: "Design Delights",
      subtitle: "We design thoughtful, livable spaces."
    },
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2500",
      title: "Your Vision, Realized",
      subtitle: "Blending style with functionality."
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2500",
      title: "Pune's Finest",
      subtitle: "Creating environments you truly love."
    }
  ];

  const testimonials = [
    {
      text: "The design by Hauspire exceeded my expectations. They brought innovative ideas and quality workmanship that made all the difference.",
      author: "Pooja Deshmukh"
    },
    {
      text: "Hauspire transformed my living room into a modern yet cozy space. Their attention to detail is impeccable. Highly recommend!",
      author: "Sneha Sharma"
    },
    {
      text: "From consultation to execution, Hauspire ensured a seamless experience. My bedroom now feels like a luxurious retreat.",
      author: "Niharika Rao"
    }
  ];

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(heroTimer);
  }, [heroSlides.length]);

  useEffect(() => {
    const testTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testTimer);
  }, [testimonials.length]);

  return (
    <main className="home-wrapper">
      {/* 1. HERO SLIDER */}
      <section className="hero-section">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content container">
              <span className="hero-tagline fade-up-1">Welcome to Hauspire</span>
              <h1 className="hero-title fade-up-2">{slide.title}</h1>
              <p className="hero-subtitle fade-up-3">{slide.subtitle}</p>
              <div className="hero-actions fade-up-4">
                <Link href="/contact" className="btn btn-gold">Book For Consultation</Link>
                <Link href="/projects" className="btn btn-transparent">Discover More</Link>
              </div>
            </div>
          </div>
        ))}
        
        <div className="slider-indicators">
          {heroSlides.map((_, index) => (
            <button 
              key={index} 
              className={`indicator-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. AWARDS & RECOGNITION (Stats) */}
      <section className="stats-section bg-dark text-white">
        <div className="container">
          <div className="stats-header">
            <span className="section-subtitle gold-text">Awards & Recognitions</span>
            <h2>Our relentless dedication to excellence</h2>
            <p>
              By integrating cutting-edge business insights, multidisciplinary expertise, 
              and stringent design principles, we continuously break new ground in creativity. 
              As leaders in the industry in Pune, we take immense pride in enhancing lives 
              through exceptional interior design solutions.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-number">100+</span>
              <span className="stat-label">Awards Won</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">300+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">200</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">50+</span>
              <span className="stat-label">Expert Designers</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US & SERVICES */}
      <section className="services-section container">
        <div className="two-col-layout">
          <div className="text-col">
            <span className="section-subtitle">What We Do</span>
            <h2>Why choose us</h2>
            <p className="lead-text">
              At Hauspire, we blend creativity and functionality to craft personalized 
              interior designs tailored to your style and needs. With premium materials, 
              expert craftsmanship, and seamless customization options, we transform spaces 
              into stunning masterpieces!
            </p>
            <Link href="/contact" className="btn btn-outline-dark mt-4">Book Consult</Link>
          </div>
          <div className="services-grid-mini">
            <div className="service-mini">
              <h4>Kitchen</h4>
              <p>Modern layouts & premium materials.</p>
            </div>
            <div className="service-mini">
              <h4>Bedroom</h4>
              <p>Transforming rooms into sanctuaries.</p>
            </div>
            <div className="service-mini">
              <h4>2D/3D Layouts</h4>
              <p>Professional visualization.</p>
            </div>
            <div className="service-mini">
              <h4>Custom Solutions</h4>
              <p>Furniture & decor planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BEST GALLERY (Latest Projects) */}
      <section className="gallery-section bg-light">
        <div className="container">
          <div className="section-header-center">
            <span className="section-subtitle">Best Gallery</span>
            <h2>Interior Design Styles</h2>
          </div>
          
          <div className="masonry-gallery">
            <div className="gallery-item large">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" alt="Industrial" />
              <div className="gallery-overlay">
                <h3>Industrial</h3>
                <span className="cat">Interior</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Mediterranean" />
              <div className="gallery-overlay">
                <h3>Mediterranean</h3>
                <span className="cat">Interior</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800" alt="Rustic" />
              <div className="gallery-overlay">
                <h3>Rustic</h3>
                <span className="cat">Interior</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800" alt="Minimalism" />
              <div className="gallery-overlay">
                <h3>Minimalism</h3>
                <span className="cat">Interior</span>
              </div>
            </div>
          </div>
          
          <div className="center-action mt-5">
            <Link href="/projects" className="btn btn-outline-dark">See All Projects</Link>
          </div>
        </div>
      </section>

      {/* 5. CLIENT FEEDBACK (Testimonial Slider) */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="section-header-center">
              <span className="section-subtitle gold-text">Client Feedback</span>
              <h2 className="text-white">Hear from our clients.</h2>
              <div className="rating-box">
                <span className="stars">★★★★★</span>
                <span className="score">4.82</span>
                <span className="reviews">(2,488 Ratings)</span>
              </div>
            </div>

            <div className="testimonial-slider">
              {testimonials.map((test, index) => (
                <div 
                  key={index} 
                  className={`testimonial-slide ${index === currentTestimonial ? "active" : ""}`}
                >
                  <p className="quote">"{test.text}"</p>
                  <h4 className="author">— {test.author}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Global & Utility */
        .home-wrapper {
          background-color: var(--background);
          overflow-x: hidden;
        }

        .section-subtitle {
          display: block;
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.8rem;
          margin-bottom: 1rem;
        }

        .gold-text {
          color: #d4af37;
        }

        .bg-dark { background-color: #111; }
        .bg-light { background-color: #f9f9f9; }
        .text-white { color: white; }
        .mt-4 { margin-top: 2rem; }
        .mt-5 { margin-top: 4rem; }
        .center-action { text-align: center; }

        /* Buttons */
        .btn {
          padding: 1.2rem 2.5rem;
          border-radius: 0;
          font-weight: 600;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          display: inline-block;
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .btn-gold {
          background-color: var(--primary);
          color: white;
          border: 1px solid var(--primary);
        }

        .btn-gold:hover {
          background-color: transparent;
          color: white;
        }

        .btn-transparent {
          background-color: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.5);
        }

        .btn-transparent:hover {
          background-color: white;
          color: black;
        }

        .btn-outline-dark {
          background-color: transparent;
          color: var(--foreground);
          border: 1px solid var(--foreground);
        }

        .btn-outline-dark:hover {
          background-color: var(--foreground);
          color: white;
        }

        /* 1. Hero Slider */
        .hero-section {
          height: 100vh;
          width: 100%;
          position: relative;
          background-color: black;
        }

        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
          z-index: 0;
        }

        .hero-slide.active {
          opacity: 1;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 5rem;
          color: white;
          max-width: 800px;
        }

        .hero-tagline {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: var(--primary);
          margin-bottom: 1.5rem;
          display: block;
        }

        .hero-title {
          font-size: 5rem;
          font-weight: 300;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-family: serif;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          font-weight: 300;
          margin-bottom: 3rem;
          opacity: 0.9;
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        /* Hero Animations */
        .fade-up-1, .fade-up-2, .fade-up-3, .fade-up-4 {
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-slide.active .fade-up-1 { animation: fadeUp 0.8s ease forwards 0.3s; }
        .hero-slide.active .fade-up-2 { animation: fadeUp 0.8s ease forwards 0.5s; }
        .hero-slide.active .fade-up-3 { animation: fadeUp 0.8s ease forwards 0.7s; }
        .hero-slide.active .fade-up-4 { animation: fadeUp 0.8s ease forwards 0.9s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .slider-indicators {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .indicator-dot.active {
          background: white;
          transform: scale(1.5);
        }

        /* 2. Stats Section */
        .stats-section {
          padding: 7rem 0;
          background-image: linear-gradient(rgba(17,17,17,0.95), rgba(17,17,17,0.95)), url('https://images.unsplash.com/photo-1541888081-30cb334f55db?auto=format&fit=crop&q=80&w=2000');
          background-attachment: fixed;
          background-position: center;
        }

        .stats-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 5rem;
        }

        .stats-header h2 {
          font-size: 2.8rem;
          font-weight: 300;
          margin-bottom: 1.5rem;
          font-family: serif;
        }

        .stats-header p {
          color: #aaa;
          line-height: 1.8;
          font-size: 1.1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .stat-box {
          padding: 2rem;
          border: 1px solid rgba(255,255,255,0.1);
          transition: transform 0.3s ease;
        }

        .stat-box:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
        }

        .stat-number {
          display: block;
          font-size: 3.5rem;
          font-weight: 300;
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-family: serif;
        }

        .stat-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #ccc;
        }

        /* 3. Services Layout */
        .services-section {
          padding: 8rem 2rem;
        }

        .two-col-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .text-col h2 {
          font-size: 3rem;
          font-family: serif;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        .lead-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #555;
        }

        .services-grid-mini {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .service-mini {
          padding-left: 1.5rem;
          border-left: 2px solid var(--primary);
        }

        .service-mini h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .service-mini p {
          color: #666;
          font-size: 0.9rem;
        }

        /* 4. Masonry Gallery */
        .gallery-section {
          padding: 8rem 0;
        }

        .section-header-center {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header-center h2 {
          font-size: 3rem;
          font-weight: 300;
          font-family: serif;
        }

        .masonry-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 300px;
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          background: #000;
        }

        .gallery-item.large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
          transition: transform 0.8s ease, opacity 0.4s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
          opacity: 1;
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 2rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.4s ease;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
          opacity: 1;
        }

        .gallery-overlay h3 {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 0.25rem;
        }

        .gallery-overlay .cat {
          font-size: 0.8rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* 5. Testimonial Slider */
        .testimonial-section {
          background-color: #1a1a1a;
          padding: 8rem 0;
          position: relative;
        }

        .testimonial-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .rating-box {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .stars {
          color: #d4af37;
          font-size: 1.5rem;
        }
        
        .score {
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .reviews {
          color: #888;
          font-size: 0.9rem;
        }

        .testimonial-slider {
          position: relative;
          min-height: 200px;
          margin-top: 4rem;
        }

        .testimonial-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          visibility: hidden;
        }

        .testimonial-slide.active {
          opacity: 1;
          transform: scale(1);
          visibility: visible;
        }

        .quote {
          color: white;
          font-size: 1.8rem;
          font-style: italic;
          font-weight: 300;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-family: serif;
        }

        .author {
          color: var(--primary);
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .two-col-layout { grid-template-columns: 1fr; gap: 4rem; }
          .masonry-gallery { grid-template-columns: repeat(2, 1fr); }
          .gallery-item.large { grid-column: span 1; grid-row: span 1; }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.8rem; }
          .hero-subtitle { font-size: 1rem; }
          .hero-actions { flex-direction: column; }
          .btn { text-align: center; }
          .services-section { padding: 5rem 1.5rem; }
          .services-grid-mini { grid-template-columns: 1fr; }
          .gallery-section { padding: 5rem 0; }
          .masonry-gallery { grid-template-columns: 1fr; grid-auto-rows: 250px; }
          .testimonial-section { padding: 5rem 1rem; }
          .quote { font-size: 1.25rem; }
          .stats-section { padding: 5rem 1rem; background-attachment: scroll; }
        }
      `}</style>
    </main>
  );
}

