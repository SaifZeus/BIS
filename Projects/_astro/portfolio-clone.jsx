import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'stack', 'expertise', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'Keras', icon: '⚡' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'Scikit-learn', icon: '📊' },
    { name: 'OpenCV', icon: '👁️' },
    { name: 'Streamlit', icon: '🎯' },
    { name: 'Apache Spark', icon: '⚙️' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🌐' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Power BI', icon: '📈' },
    { name: 'Tableau', icon: '📉' },
    { name: 'Flask', icon: '🧪' },
    { name: 'FastAPI', icon: '⚡' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git', icon: '🌿' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Jupyter', icon: '📓' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Vercel', icon: '▲' }
  ];

  const projects = [
    {
      title: 'Attention Is All You Need',
      description: 'Pure PyTorch implementation of the Transformer',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'SWAN Quote Generator',
      description: 'Because sometimes, the right words can light the stars inside you',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'ML Pipeline Framework',
      description: 'End-to-end MLOps pipeline with automated deployment',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      link: '#'
    }
  ];

  const expertise = [
    {
      title: 'AI & ML Engineering',
      items: [
        'Fine-tuned large language models (LLMs) such as BERT and GPT for domain-specific NLP tasks',
        'Applied Generative AI techniques using Hugging Face Transformers',
        'Designed and deployed end-to-end ML pipelines with FastAPI and Docker',
        'Developed and optimized advanced ML/DL models for real-world AI applications',
        'Built and deployed Computer Vision and NLP solutions'
      ]
    },
    {
      title: 'DevOps & MLOps',
      items: [
        'Built and monitored CI/CD pipelines using Jenkins and GitHub Actions',
        'Managed containerized ML services with Docker and Kubernetes',
        'Implemented MLOps pipelines using MLflow and DVC for model versioning',
        'Worked with Apache Airflow for orchestrating ETL pipelines',
        'Deployed models on AWS (SageMaker, Lambda) and Azure ML'
      ]
    },
    {
      title: 'Data Science & Analysis',
      items: [
        'Performed EDA using Pandas, NumPy, Seaborn, and Matplotlib',
        'Built interactive dashboards with Power BI and Tableau',
        'Conducted statistical analysis, hypothesis testing, and A/B experiments',
        'Expert in SQL, PostgreSQL, BigQuery, and Snowflake for Data Warehousing',
        'Applied Clustering, Regression, and Time Series Forecasting techniques'
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for your message!');
    setTimeout(() => setFormStatus(''), 3000);
    e.target.reset();
  };

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-primary: #0a0a0f;
          --bg-secondary: #14141f;
          --bg-tertiary: #1e1e2e;
          --accent-cyan: #00f5ff;
          --accent-purple: #b794f4;
          --accent-pink: #ff6ec7;
          --text-primary: #f8f8ff;
          --text-secondary: #a8a8b8;
          --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --gradient-2: linear-gradient(135deg, #00f5ff 0%, #b794f4 100%);
          --gradient-3: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        body {
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        body::before {
          content: '';
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(0, 245, 255, 0.08) 0%, transparent 50%);
          animation: rotate 30s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .portfolio {
          position: relative;
          z-index: 1;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          z-index: 1000;
          padding: 1.5rem 2rem;
          animation: slideDown 0.6s ease-out;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Space Mono', monospace;
          font-size: 1.5rem;
          font-weight: 700;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(0, 245, 255, 0.3)); }
          50% { filter: drop-shadow(0 0 20px rgba(0, 245, 255, 0.6)); }
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-2);
          transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--accent-cyan);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 4rem;
          position: relative;
        }

        .hero-content {
          max-width: 1400px;
          width: 100%;
          text-align: center;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-greeting {
          font-size: 1.2rem;
          color: var(--accent-cyan);
          margin-bottom: 1rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: fadeInUp 1s ease-out 0.2s backwards;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #00f5ff 50%, #b794f4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          animation: fadeInUp 1s ease-out 0.4s backwards;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 300;
          animation: fadeInUp 1s ease-out 0.6s backwards;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 800px;
          margin: 0 auto 3rem;
          line-height: 1.8;
          animation: fadeInUp 1s ease-out 0.8s backwards;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          color: var(--accent-cyan);
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        /* Tech Stack Section */
        .tech-stack {
          padding: 6rem 2rem;
          overflow: hidden;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .section-title {
          text-align: center;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 4rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stack-scroll {
          display: flex;
          gap: 3rem;
          animation: scroll 60s linear infinite;
          width: max-content;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .stack-item {
          background: var(--bg-tertiary);
          padding: 2rem 3rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          gap: 1.5rem;
          white-space: nowrap;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .stack-item:hover {
          transform: translateY(-10px);
          border-color: var(--accent-cyan);
          box-shadow: 0 20px 60px rgba(0, 245, 255, 0.2);
        }

        .stack-icon {
          font-size: 2.5rem;
        }

        .stack-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Expertise Section */
        .expertise {
          padding: 6rem 2rem;
          background: var(--bg-secondary);
        }

        .expertise-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .expertise-card {
          background: var(--bg-tertiary);
          padding: 3rem;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .expertise-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--gradient-2);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .expertise-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-cyan);
          box-shadow: 0 20px 60px rgba(0, 245, 255, 0.15);
        }

        .expertise-card:hover::before {
          transform: scaleX(1);
        }

        .expertise-card h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .expertise-card ul {
          list-style: none;
        }

        .expertise-card li {
          color: var(--text-secondary);
          margin-bottom: 1.2rem;
          padding-left: 2rem;
          position: relative;
          line-height: 1.6;
        }

        .expertise-card li::before {
          content: '•+';
          position: absolute;
          left: 0;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        /* Projects Section */
        .projects {
          padding: 6rem 2rem;
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
        }

        .projects-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .project-card {
          background: var(--bg-tertiary);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 80px rgba(0, 245, 255, 0.2);
        }

        .project-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-content {
          padding: 2rem;
        }

        .project-card h3 {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .project-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-cyan);
          font-weight: 600;
          text-decoration: none;
        }

        /* Contact Section */
        .contact {
          padding: 6rem 2rem;
          background: var(--bg-primary);
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-intro {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-intro p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .contact-form {
          background: var(--bg-tertiary);
          padding: 3rem;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .form-group {
          margin-bottom: 2rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: var(--bg-secondary);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: var(--text-primary);
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 0 3px rgba(0, 245, 255, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 150px;
        }

        .submit-btn {
          width: 100%;
          padding: 1.2rem;
          background: var(--gradient-2);
          border: none;
          border-radius: 12px;
          color: var(--bg-primary);
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 245, 255, 0.3);
        }

        .form-status {
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(0, 245, 255, 0.1);
          border-radius: 12px;
          color: var(--accent-cyan);
          text-align: center;
        }

        /* Footer */
        footer {
          padding: 3rem 2rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          background: var(--bg-primary);
        }

        footer p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .swan-emoji {
          display: inline-block;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .nav-links.mobile-active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg-secondary);
            padding: 2rem;
            gap: 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .menu-toggle {
            display: block;
          }

          .hero {
            padding: 6rem 1rem 4rem;
          }

          .projects-grid,
          .expertise-grid {
            grid-template-columns: 1fr;
          }

          .stack-scroll {
            gap: 2rem;
          }

          .stack-item {
            padding: 1.5rem 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">Aya Nabil</div>
          <ul className={`nav-links ${menuOpen ? 'mobile-active' : ''}`}>
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#stack" className={activeSection === 'stack' ? 'active' : ''}>Tech Stack</a></li>
            <li><a href="#expertise" className={activeSection === 'expertise' ? 'active' : ''}>Expertise</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-greeting">Hi, I'm Aya Nabil</div>
          <h1 className="hero-title">AI Engineer</h1>
          <p className="hero-subtitle">Full-Stack AI Engineer | Applied Data Scientist | Microsoft Ambassador</p>
          <p className="hero-description">
            B.Sc. Computing and Data Science | Building intelligent systems that transform data into actionable insights
          </p>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="tech-stack">
        <h2 className="section-title">My Full Tech Stack</h2>
        <div className="stack-scroll">
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="stack-item">
              <span className="stack-icon">{tech.icon}</span>
              <span className="stack-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="expertise">
        <div className="expertise-container">
          <h2 className="section-title">How I Solve Your AI Challenges</h2>
          <div className="expertise-grid">
            {expertise.map((area, index) => (
              <div key={index} className="expertise-card">
                <h3>{area.title}</h3>
                <ul>
                  {area.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="projects-container">
          <h2 className="section-title">My Work</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} className="project-link">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-intro">
            <h2 className="section-title">Let's Talk</h2>
            <p>Have an AI project in mind? I'm currently available for freelance work and collaborations.</p>
            <p>Let's build something impactful together.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
            {formStatus && <div className="form-status">✅ {formStatus}</div>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Built with ❤️ by AyaNexus <span className="swan-emoji">🦢</span></p>
      </footer>
    </div>
  );
}
