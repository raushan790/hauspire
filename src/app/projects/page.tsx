"use client";
import { useState } from "react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const projects = [
    { title: "Industrial Loft", category: "Industrial", image: "https://images.unsplash.com/photo-1512918766671-ad650b9b73ad?auto=format&fit=crop&q=80&w=800" },
    { title: "Mediterranean Villa", category: "Mediterranean", image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=800" },
    { title: "Rustic Cottage", category: "Rustic", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
    { title: "Minimalist Studio", category: "Minimalism", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800" },
    { title: "Contemporary Condo", category: "Contemporary", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800" },
    { title: "Modern Workspace", category: "Modern", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { title: "Coastal Retreat", category: "Coastal", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
    { title: "Bohemian Living", category: "Bohemian", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800" }
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="projects-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our diverse portfolio of stunning interior designs.</p>
        </div>
      </section>

      <section className="projects-section container">
        <div className="filter-bar">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card glass-panel animate-in">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>View Project</span>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .projects-page {
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

        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 4rem;
          padding: 0 1rem;
        }

        .filter-btn {
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          border: 1px solid #ddd;
          background: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .filter-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 3rem;
          padding: 0 1rem;
        }

        .project-card {
          overflow: hidden;
          transition: transform 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
        }

        .project-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-overlay span {
          color: white;
          border: 1px solid white;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          backdrop-filter: blur(5px);
        }

        .project-info {
          padding: 2rem;
        }

        .project-category {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary);
          font-weight: 700;
          display: block;
          margin-bottom: 0.5rem;
        }

        .project-info h3 {
          font-size: 1.5rem;
          margin: 0;
        }

        .animate-in {
          animation: fadeIn 0.6s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 576px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
