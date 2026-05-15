import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">HAUSPIRE</Link>
          <p>
            Designing thoughtful, livable spaces that blend style with functionality. 
            Crafting environments you'll truly love to live in.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Our Projects</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services#kitchen">Kitchen Design</Link></li>
            <li><Link href="/services#bedroom">Bedroom Design</Link></li>
            <li><Link href="/services#3d">3D/VR Visualization</Link></li>
            <li><Link href="/services#remodel">Remodel Spaces</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Pune, Maharashtra, India</p>
          <p>Email: hello@hauspire.com</p>
          <p>Phone: +91 766 664 5800</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hauspire. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #111;
          color: #eee;
          padding: 5rem 0 2rem;
          margin-top: 5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 4rem;
        }

        .footer-brand .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 1.5rem;
          display: block;
        }

        .footer-brand p {
          color: #999;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .footer h4 {
          color: white;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .footer ul {
          list-style: none;
        }

        .footer ul li {
          margin-bottom: 0.75rem;
        }

        .footer ul li a {
          color: #999;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer ul li a:hover {
          color: var(--primary);
        }

        .footer-contact p {
          color: #999;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
        }

        .footer-bottom {
          margin-top: 5rem;
          padding-top: 2rem;
          border-top: 1px solid #222;
          text-align: center;
          color: #666;
          font-size: 0.85rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
