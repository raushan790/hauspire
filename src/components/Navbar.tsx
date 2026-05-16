"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "nav-item nav-link active" : "nav-item nav-link";

  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div className="container position-relative" style={{ zIndex: 9 }}>
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
          <Link href="/" className="navbar-brand">
            <h1 className="m-0 display-5 text-white">
              <span className="text-primary">H</span>AUSPIRE
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
            <div className="navbar-nav ml-auto py-0">
              <Link href="/" className={isActive("/")}>Home</Link>
              <Link href="/about" className={isActive("/about")}>About</Link>
              <Link href="/services" className={isActive("/services")}>Services</Link>
              <Link href="/projects" className={isActive("/projects")}>Projects</Link>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link href="/blog" className="dropdown-item">Blog Grid</Link>
                </div>
              </div>
              <Link href="/contact" className={isActive("/contact")}>Contact</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
