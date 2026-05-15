export default function TeamPage() {
  const members = [
    {
      name: "Yogesh Tripathi",
      role: "Founder & Creative Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      bio: "Passionate about blending traditional aesthetics with modern functionality."
    },
    {
      name: "Chandravir Yadav",
      role: "Founder & Lead Architect",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      bio: "Specializes in creating structural masterpieces that inspire and endure."
    },
    {
      name: "Ananya Singh",
      role: "Senior Interior Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      bio: "Expert in minimalist and contemporary design styles for urban living."
    },
    {
      name: "Vikram Malhotra",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      bio: "Ensuring every project is delivered on time, within budget, and to perfection."
    }
  ];

  return (
    <main className="team-page">
      <section className="page-header">
        <div className="container">
          <h1>Meet Our Team</h1>
          <p>The passionate individuals behind every extraordinary space we create.</p>
        </div>
      </section>

      <section className="team-intro container">
        <div className="intro-content glass-panel">
          <h2>Designers, planners, and builders under one roof.</h2>
          <p>
            Behind every successful project is a team of passionate and talented 
            individuals working in harmony. Our architects, designers, and strategists 
            bring a diverse range of skills and perspectives to the table, but we are 
            united by a shared passion for creating extraordinary spaces.
          </p>
        </div>
      </section>

      <section className="team-grid container">
        {members.map((member, index) => (
          <div key={index} className="team-card glass-panel">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <span className="member-role">{member.role}</span>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="join-team container">
        <div className="join-card glass-panel">
          <h2>Ready to design with intent?</h2>
          <p>Connect with our senior designers to start your journey.</p>
          <a href="/contact" className="btn btn-primary">Book Consultation</a>
        </div>
      </section>

      <style>{`
        .team-page {
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

        .team-intro {
          padding: 5rem 1rem;
          text-align: center;
          max-width: 900px;
        }

        .intro-content {
          padding: 4rem;
        }

        .intro-content h2 {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }

        .intro-content p {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
          padding: 2rem 1rem 5rem;
        }

        .team-card {
          overflow: hidden;
          text-align: center;
          padding: 0;
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-10px);
        }

        .member-image {
          height: 300px;
          overflow: hidden;
        }

        .member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .team-card:hover .member-image img {
          transform: scale(1.05);
        }

        .member-info {
          padding: 2rem;
        }

        .member-info h3 {
          font-size: 1.4rem;
          margin-bottom: 0.25rem;
        }

        .member-role {
          display: block;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .member-info p {
          color: #777;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .join-team {
          padding: 5rem 1rem;
        }

        .join-card {
          padding: 4rem;
          text-align: center;
          background: #fdfdfc;
        }

        .join-card h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .join-card p {
          color: #666;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .intro-content {
            padding: 2rem;
          }
          .intro-content h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </main>
  );
}
