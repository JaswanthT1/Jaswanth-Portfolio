import { useEffect, useState } from "react";
import "./App.css";

function App() {

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  sections.forEach((section) => {
    section.classList.add("section-hidden");
    observer.observe(section);
  });

  return () => observer.disconnect();
}, []);


  const roles = [
  "Full-Stack Applications",
  "Python Applications",
  "Backend Systems",
  "AI-Powered Tools",
];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="portfolio">
      <section className="hero">
        <div className="hero-grid"></div>

        <nav className="navbar">
            <div className="nav-tagline">
                BUILD SOFTWARE THAT MATTERS.
            </div>
        
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">SOFTWARE & AI BUILDER</p>

          <h1>
            Hi, I'm <span>Jaswanth Kakumanu.</span>
          </h1>

          <h2>
            I build{" "}
            <strong key={roleIndex}>
              {roles[roleIndex]}
            </strong>
          </h2>

          <p className="hero-description" >
            I build practical software using Python, FastAPI, React and AI —
            focused on solving real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>
      </section>

  <section className="about" id="about">
  <div className="section-container">
    <div className="about-heading">
      <p className="section-label">ABOUT ME</p>

      <h2>
        I build software with
        <span> purpose.</span>
      </h2>
    </div>

    <div className="about-text">
      <p>
        I'm Jaswanth, a developer who enjoys turning ideas into practical
        software. My main focus is Python, FastAPI, React and AI-powered
        applications.
      </p>

      <p>
        I like understanding how things work across the stack — from
        databases and backend APIs to frontend interfaces and deployment.
      </p>
    </div>
  </div>
</section>


    <section className="skills" id="skills">
  <div className="section-container">
    <div className="skills-heading">
      <p className="section-label">SKILLS</p>

      <h2>
        Tools I use to
        <span> build.</span>
      </h2>

      <p className="skills-intro">
        Technologies and tools I've worked with while building practical
        applications and projects.
      </p>
    </div>

    <div className="skills-grid">
      <div className="skill-card">
        <h3>Frontend</h3>
        <div className="skill-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Vite</span>
        </div>
      </div>

      <div className="skill-card">
        <h3>Backend</h3>
        <div className="skill-list">
          <span>Python</span>
          <span>FastAPI</span>
          <span>SQLAlchemy</span>
          <span>REST APIs</span>
          <span>JWT</span>
        </div>
      </div>

      <div className="skill-card">
        <h3>Database</h3>
        <div className="skill-list">
          <span>MySQL</span>
        </div>
      </div>

      <div className="skill-card">
        <h3>AI</h3>
        <div className="skill-list">
          <span>AI / LLM</span>
          <span>AI Integration</span>
          <span>Prompt Engineering</span>
        </div>
      </div>

      <div className="skill-card">
        <h3>Tools</h3>
        <div className="skill-list">
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>MySQL Workbench</span>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="projects" id="projects">
  <div className="section-container">

    <div className="projects-heading">
      <p className="section-label">PROJECTS</p>

      <h2>
        Things I've
        <span> built.</span>
      </h2>

      <p className="projects-intro">
        Practical projects focused on building useful software,
        solving real problems and learning through hands-on development.
      </p>
    </div>

    <div className="projects-grid">

      <article className="project-card">
        <div className="project-top">
          <p className="project-number">01</p>
          <span className="project-status">LIVE</span>
        </div>

        <h3>JobFlow</h3>

        <p className="project-tagline">
          Track applications. Stay organized. Land your next role.
        </p>

        <p className="project-description">
          A full-stack job application tracker with authentication,
          application management, search, filtering and interview tracking.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>FastAPI</span>
          <span>MySQL</span>
          <span>JWT</span>
        </div>

        <div className="project-links">
          <a
            href="https://job-flow-brown.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>

          <a
            href="https://github.com/JaswanthT1/JobFlow"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </article>

 <article className="project-card">
  <div className="project-top">
    <p className="project-number">02</p>
    <span className="project-status">LIVE</span>
  </div>

  <h3>RootCause</h3>

  <p className="project-tagline">
    From error logs to probable root cause.
  </p>

  <p className="project-description">
    A log analysis and incident detection application that parses
    application logs, identifies errors, detects potential incidents,
    and recommends investigation steps.
  </p>

  <div className="project-tech">
    <span>Python</span>
    <span>FastAPI</span>
    <span>React</span>
    <span>Log Analysis</span>
  </div>

  <div className="project-links">
    <a
      href="https://root-cause-ashy.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo ↗
    </a>

```
<a
  href="https://github.com/JaswanthT1/RootCause"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub ↗
</a>
```

  </div>
</article>


    </div>

  </div>
</section>


    <section className="contact" id="contact">
  <div className="section-container">

    <div className="contact-content">
      <p className="section-label">CONTACT</p>

      <h2>
        Let's build something
        <span> useful.</span>
      </h2>

      <p className="contact-description">
        I'm currently looking for opportunities where I can learn,
        contribute and build practical software with a strong team.
      </p>

      <div className="contact-links">
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jaswanth001@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email Me ↗
        </a>

        <a
          href="https://github.com/JaswanthT1"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/jaswanthkakumanu/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>

  </div>
    </section>
        <footer className="footer">
      <div className="footer-content">
        <p>© 2026 Jaswanth Kakumanu</p>

        <p>
          Built with React, Vite and CSS.
        </p>
      </div>
    </footer>
    
    </main>
  );
}

export default App;