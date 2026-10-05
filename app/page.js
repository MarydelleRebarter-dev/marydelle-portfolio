'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'Food Ordering System',
    type: 'Web Application',
    description: 'A user-friendly ordering interface designed to make browsing food items and placing orders simple and organized.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'cyan'
  },
  {
    title: 'Hotel Booking System',
    type: 'Web Application',
    description: 'A booking-focused system concept for browsing rooms, managing reservations, and presenting information clearly.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'violet'
  },
  {
    title: 'Scholarship Management System',
    type: 'Management System',
    description: 'A system concept for organizing scholarship information and helping users manage application-related records.',
    tags: ['Java', 'C++', 'UI Design'],
    accent: 'blue'
  }
];

const skills = [
  ['Java', 'Programming'],
  ['C++', 'Programming'],
  ['HTML', 'Web'],
  ['CSS', 'Web'],
  ['JavaScript', 'Web'],
  ['Microsoft Office', 'Productivity'],
  ['Windows 10/11', 'Systems'],
  ['Basic Troubleshooting', 'IT Support']
];

export default function Home() {
  const [active, setActive] = useState('overview');
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="shell">
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="brand">
          <div className="brand-mark">M</div>
          <div>
            <strong>MARYDELLE</strong>
            <span>IT PORTFOLIO</span>
          </div>
        </div>

        <nav>
          {[
            ['overview', '⌂', 'Overview'],
            ['about', '◎', 'About me'],
            ['skills', '◇', 'Skills'],
            ['projects', '▣', 'Projects'],
            ['education', '▤', 'Education'],
            ['contact', '✉', 'Contact']
          ].map(([id, icon, label]) => (
            <button key={id} className={active === id ? 'nav-item active' : 'nav-item'} onClick={() => go(id)}>
              <span className="nav-icon">{icon}</span>{label}
            </button>
          ))}
        </nav>

        <div className="side-card">
          <span className="status-dot" />
          <div>
            <b>Open to opportunities</b>
            <small>Internships · IT support · Web development</small>
          </div>
        </div>

        <div className="sidebar-footer">
          <span>© 2026 Marydelle Rebarter</span>
          <span>Borongan City, Philippines</span>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div className="crumb"><span>PORTFOLIO</span><b>/</b><strong>{active.replace('-', ' ')}</strong></div>
          <div className="top-actions">
            <span className="availability"><i /> Available</span>
            <a href="mailto:marydellerebarter889@gmail.com">Contact me</a>
          </div>
        </header>

        <div className="page" id="overview">
          <section className="hero card">
            <div className="hero-copy">
              <span className="eyebrow">BS INFORMATION TECHNOLOGY · 4TH YEAR</span>
              <h1>Marydelle D.<br /><span>Rebarter</span></h1>
              <p className="hero-subtitle">Aspiring IT Professional <b>·</b> Web &amp; Software Development</p>
              <p className="hero-text">I’m an Information Technology student who enjoys building practical systems, learning new technologies, and creating simple, user-friendly digital experiences.</p>
              <div className="hero-actions">
                <button onClick={() => go('projects')} className="primary">View my projects <span>→</span></button>
                <button onClick={() => go('contact')} className="secondary">Get in touch</button>
              </div>
            </div>
            <div className="profile-wrap">
              <div className="profile-orbit orbit-one" />
              <div className="profile-orbit orbit-two" />
              <img className="avatar" src="/profile.jpg" alt="Marydelle D. Rebarter" />
              <div className="profile-label"><b>IT STUDENT</b><span>EST. 2023</span></div>
            </div>
          </section>

          <section className="stats-grid">
            <div className="stat card"><span className="stat-icon">⌁</span><div><b>2027</b><small>Expected graduation</small></div></div>
            <div className="stat card"><span className="stat-icon">◈</span><div><b>3+</b><small>Academic projects</small></div></div>
            <div className="stat card"><span className="stat-icon">⌘</span><div><b>5+</b><small>Web &amp; programming skills</small></div></div>
            <div className="stat card"><span className="stat-icon">★</span><div><b>Dean's</b><small>Lister</small></div></div>
          </section>

          <section className="dashboard-grid">
            <div className="card panel" id="about">
              <div className="panel-head"><div><span className="eyebrow">PROFILE</span><h2>About me</h2></div><span className="edit">●</span></div>
              <p>I am currently pursuing a Bachelor of Science in Information Technology at Eastern Samar State University. I’m developing my skills in programming, web development, troubleshooting, and productivity tools while working on school-based systems and interfaces.</p>
              <div className="info-list">
                <div><span>Location</span><b>Borongan City, Eastern Samar</b></div>
                <div><span>Focus</span><b>Web &amp; Software Development</b></div>
                <div><span>Languages</span><b>English · Tagalog · Waray</b></div>
              </div>
            </div>

            <div className="card panel" id="skills">
              <div className="panel-head"><div><span className="eyebrow">CAPABILITIES</span><h2>Technical skills</h2></div><span className="count">08</span></div>
              <div className="skill-grid">
                {skills.map(([name, type]) => <div className="skill" key={name}><span className="skill-bullet" /><div><b>{name}</b><small>{type}</small></div></div>)}
              </div>
            </div>
          </section>

          <section className="card projects-panel" id="projects">
            <div className="panel-head"><div><span className="eyebrow">SELECTED WORK</span><h2>Featured projects</h2></div><button className="view-all">VIEW ALL →</button></div>
            <div className="project-grid">
              {projects.map((project, i) => <article className="project" key={project.title}>
                <div className={`project-visual ${project.accent}`}>
                  <span>0{i + 1}</span>
                  <div className="mini-window"><i /><i /><i /><div className="mini-lines"><b /><b /><b /><b /></div></div>
                </div>
                <div className="project-body"><small>{project.type}</small><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div></div>
              </article>)}
            </div>
          </section>

          <section className="dashboard-grid lower">
            <div className="card panel" id="education">
              <div className="panel-head"><div><span className="eyebrow">ACADEMIC</span><h2>Education</h2></div><span className="count">01</span></div>
              <div className="timeline"><div className="timeline-dot" /><div><small>2023 — PRESENT</small><h3>Bachelor of Science in Information Technology</h3><p>Eastern Samar State University — Main Campus</p><span className="expected">Expected graduation · 2027</span></div></div>
              <div className="certs"><b>CERTIFICATIONS</b><span>Cisco Networking Academy · Networking Basics</span><span>Cisco Networking Academy · Networking Addressing and Basic Troubleshooting</span></div>
            </div>

            <div className="card panel" id="contact">
              <div className="panel-head"><div><span className="eyebrow">LET'S CONNECT</span><h2>Contact</h2></div><span className="edit">↗</span></div>
              <p>Have an opportunity, project, or internship in mind? I’d be happy to connect.</p>
              <div className="contact-links">
                <a href="mailto:marydellerebarter889@gmail.com"><span>✉</span><div><small>Email</small><b>marydellerebarter889@gmail.com</b></div></a>
                <a href="tel:+639101578245"><span>⌕</span><div><small>Phone</small><b>0910 157 8245</b></div></a>
              </div>
            </div>
          </section>

          <footer><span>Designed &amp; built with Next.js</span><span>Marydelle D. Rebarter · IT Portfolio</span></footer>
        </div>
      </section>
    </main>
  );
}
