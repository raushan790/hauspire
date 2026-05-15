"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <Link href="/" className="logo">HAUSPIRE</Link>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/packages" onClick={() => setMenuOpen(false)}>Packages</Link>
          <Link href="/team" onClick={() => setMenuOpen(false)}>Team</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>

        <div className="nav-right">
          <Link href="/contact" className="nav-cta btn btn-primary">Consult Now</Link>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          z-index: 1000;
          padding: 0.75rem 2rem;
          border-radius: 50px;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--primary);
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--foreground);
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a:hover { color: var(--primary); }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after { width: 100%; }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-cta {
          padding: 0.5rem 1.5rem;
          font-size: 0.85rem;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .bar {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--foreground);
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .bar.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .bar.open:nth-child(2) { opacity: 0; }
        .bar.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        @media (max-width: 992px) {
          .nav-links {
            display: none;
            position: absolute;
            top: calc(100% + 1rem);
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.97);
            backdrop-filter: blur(20px);
            flex-direction: column;
            align-items: center;
            gap: 0;
            border-radius: 20px;
            padding: 1rem 0;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          }

          .nav-links.open { display: flex; }

          .nav-links a {
            width: 100%;
            text-align: center;
            padding: 1rem 2rem;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            font-size: 1rem;
          }

          .nav-links a:last-child { border-bottom: none; }

          .hamburger { display: flex; }

          .nav-cta { display: none; }
        }
      `}</style>
    </nav>
  );
}
