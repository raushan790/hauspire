import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <Link href="/" className="logo">
          HAUSPIRE
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link href="/contact" className="nav-cta btn btn-primary">
          Consult Now
        </Link>
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

        .nav-links a:hover {
          color: var(--primary);
        }

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

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-cta {
          padding: 0.5rem 1.5rem;
          font-size: 0.85rem;
        }

        @media (max-width: 992px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
