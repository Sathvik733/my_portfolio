import { useEffect, useState } from 'react'
import './App.css'

const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: [
      'Python',
      'Java',
      'C#',
      'C',
      'JavaScript',
      'SQL',
      'Bash',
      'Django',
      'Flask',
      'React',
      'Node.js',
      'Next.js',
      'Electron.js',
    ],
  },
  {
    title: 'AI & LLM',
    items: [
      'Prompt Engineering',
      'LLM Fundamentals',
      'AI Agents',
      'LangChain Basics',
      'AI Automation',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'AWS ECS Fargate',
      'RDS',
      'S3',
      'CloudFront',
      'IAM',
      'Docker',
      'Terraform',
      'GitHub Actions',
    ],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'Oracle SQL', 'MySQL', 'MongoDB', 'Google Cloud Spanner'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Linux', 'JIRA', 'REST APIs', 'Agile/Scrum'],
  },
]

const projects = [
  {
    title: 'Varitas Labs',
    type: 'Secure Online Examination Platform',
    icon: 'shield',
    description:
      'Secure cross-platform online examination platform with anti-cheating features, real-time monitoring, and distributed backend services.',
    stack: ['Electron.js', 'Docker', 'Kubernetes', 'WebSocket', 'Microservices'],
  },
  {
    title: 'Cloud-Based Healthcare Management System',
    type: 'Microservices Healthcare Platform',
    icon: 'cloud',
    description:
      'Cloud-based healthcare platform with microservices architecture, analytics, optimized performance, and reduced cloud cost.',
    stack: [
      'AWS ECS Fargate',
      'RDS PostgreSQL',
      'React',
      'CloudFront',
      'ElastiCache',
      'Kinesis',
      'SageMaker',
    ],
  },
  {
    title: 'Cardiovascular Disease Prediction',
    type: 'Machine Learning Dashboard',
    icon: 'activity',
    description:
      'ML model for cardiovascular disease prediction with 90% accuracy and dashboards for interpreting key health indicators.',
    stack: ['Python', 'KNN', 'Machine Learning', 'Data Preprocessing', 'Visualization'],
  },
]

const certifications = [
  'AI agents, Generative AI, and LLM application fundamentals',
  'Cloud deployment practice with AWS ECS Fargate, RDS, S3, CloudFront, and IAM',
  'DevOps workflow experience with Docker, GitHub Actions, Terraform, and CI/CD',
]

const focusAreas = ['Fullstack Development', 'Backend APIs', 'Cloud Systems', 'AI Automation']

function ProjectIcon({ type }) {
  const iconPaths = {
    shield: (
      <path d="M12 3.2 5.4 5.8v5.1c0 4.2 2.7 7.9 6.6 9.1 3.9-1.2 6.6-4.9 6.6-9.1V5.8L12 3.2Zm0 3.2v10.7c-2.4-.9-4-3.4-4-6.2V7.6l4-1.2Zm1.4 0 4 1.2v3.3c0 2.8-1.6 5.3-4 6.2V6.4Z" />
    ),
    cloud: (
      <path d="M7.8 18.5a5.3 5.3 0 0 1-.5-10.6 6.4 6.4 0 0 1 11.9 2.7 4 4 0 0 1-1 7.9H7.8Zm.1-2h10.3a2 2 0 0 0 .1-4h-.9l-.1-.9a4.4 4.4 0 0 0-8.4-1.4l-.3.8-.9-.1a3.3 3.3 0 0 0 .2 6.6Z" />
    ),
    activity: (
      <path d="M13.3 20.4h-2.1l-2.7-8.1-1.3 3.1H3v-2h2.8l1.9-4.6h1.8l2.8 8.2 2.4-13.4h2l2.1 9.8H21v2h-3.8l-1.3-6-2.6 11Z" />
    ),
  }

  return (
    <svg className="project-icon" viewBox="0 0 24 24" aria-hidden="true">
      {iconPaths[type]}
    </svg>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#hero" aria-label="Aileni Sathvik Reddy portfolio home">
          <img src="/software-engineer-logo.svg" alt="" />
          <span>Aileni Sathvik Reddy</span>
        </a>
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          aria-label="Toggle color theme"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </nav>

      <section className="hero-section section-fade" id="hero">
        <div className="hero-copy">
          <div className="status-row">
            <span className="status-dot"></span>
            Open to internships and junior developer roles in France / Europe
          </div>
          <p className="eyebrow">Software Engineer - Paris, France</p>
          <h1>Aileni Sathvik Reddy</h1>
          <p className="hero-text">
            Software Engineering Master's student at EPITA with professional
            experience in backend systems, automation, fullstack development,
            cloud platforms, and AI-enabled applications.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href="#contact">
              Email Me
            </a>
          </div>
          <div className="focus-row" aria-label="Engineering focus areas">
            {focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>

        <aside className="profile-panel" aria-label="Portfolio summary">
          <div className="panel-grid"></div>
          <div className="profile-orbit">
            <span>AI</span>
            <span>API</span>
            <span>AWS</span>
          </div>
          <div className="profile-core">
            <p>Seeking</p>
            <strong>Software Engineering Internships</strong>
          </div>
          <div className="stats-grid">
            <div>
              <strong>1.5 yrs</strong>
              <span>Software engineering experience</span>
            </div>
            <div>
              <strong>EPITA</strong>
              <span>MSc Software Engineering</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section section-fade" id="about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Proactive software engineer focused on scalable systems and useful products.</h2>
        </div>
        <div className="about-grid">
          <p>
            I am a detail-oriented Master's student in Software Engineering at
            EPITA, Paris. I enjoy building scalable backend services, integrating
            APIs, automating repetitive workflows, and creating user-facing
            applications with clean engineering foundations.
          </p>
          <div className="highlight-card">
            <span>Target Roles</span>
            <strong>
              Software engineering internships and junior developer roles across
              France and Europe.
            </strong>
          </div>
        </div>
      </section>

      <section className="metrics-section section-fade" aria-label="Portfolio highlights">
        <article>
          <strong>Python + REST APIs</strong>
          <span>Automation, backend services, and integration work</span>
        </article>
        <article>
          <strong>React + Node.js</strong>
          <span>Fullstack applications with responsive UI patterns</span>
        </article>
        <article>
          <strong>AWS + Docker</strong>
          <span>Cloud-aware delivery using modern DevOps workflows</span>
        </article>
      </section>

      <section className="section section-fade" id="skills">
        <div className="section-heading compact">
          <p className="eyebrow">Skills</p>
          <h2>Fullstack, cloud, automation, and AI engineering skills.</h2>
        </div>
        <div className="skills-grid grouped">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-fade" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Professional engineering work in automation, APIs, and delivery.</h2>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <div>
              <span>Sep 2023 - Feb 2025</span>
              <h3>Software Engineer</h3>
              <p className="company">Genpact International Pvt. Ltd. - Hyderabad, India</p>
            </div>
            <p>
              Worked on Python automation tools, backend services, REST API
              integrations, database workflows, Docker-based delivery, GitHub
              Actions CI/CD, Agile/Scrum collaboration, and AI-driven automation
              concepts.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-fade" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Applied software projects spanning cloud, security, and machine learning.</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-header">
                <div className="project-icon-box">
                  <ProjectIcon type={project.icon} />
                </div>
                <div className="project-topline">
                  <span>{project.type}</span>
                  <a href="#contact" aria-label={`Contact Sathvik about ${project.title}`}>
                    Discuss
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-fade" id="education">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Graduate software engineering education in Paris.</h2>
        </div>
        <article className="timeline-item education-card">
          <div>
            <span>Feb 2025 - Present</span>
            <h3>Master of Science in Software Engineering</h3>
            <p className="company">EPITA - Ecole d'Ingenieurs en Informatique</p>
          </div>
          <p>
            Studying advanced software engineering in Paris, France, with focus
            areas aligned to fullstack development, scalable systems, cloud
            engineering, and modern software delivery.
          </p>
        </article>
      </section>

      <section className="section section-fade" id="certifications">
        <div className="section-heading">
          <p className="eyebrow">Certifications</p>
          <h2>Learning areas and professional focus relevant to engineering roles.</h2>
        </div>
        <div className="cert-grid">
          {certifications.map((certification) => (
            <article className="cert-card" key={certification}>
              <span>Focus</span>
              <p>{certification}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section section-fade" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Available for software engineering internships and junior roles.</h2>
        </div>
        <div className="contact-card">
          <a href="mailto:sathvik733.fr@gmail.com">sathvik733.fr@gmail.com</a>
          <a href="tel:+33780745942">+33 780 745 942</a>
          <span>Paris, France</span>
        </div>
      </section>
    </main>
  )
}

export default App
