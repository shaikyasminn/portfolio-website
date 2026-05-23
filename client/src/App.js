import './App.css';

import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaReact
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMongodb
} from "react-icons/si";
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">

  <h2 className="logo">Portfolio</h2>

  <ul className="nav-links">

    <li><a href="#about">About</a></li>

    <li><a href="#skills">Skills</a></li>

    <li><a href="#projects">Projects</a></li>

    <li><a href="#contact">Contact</a></li>

  </ul>

</nav>
      {/* HERO SECTION */}
      <header className="hero">

        <h1>Shaik Yasmin</h1>

        <h2>Java Full Stack Developer</h2>

        <p>
          Computer Science undergraduate passionate about
          building scalable full-stack applications using
          Java, Spring Boot, React.js, and REST APIs.
        </p>

        <div className="buttons">

  <a href="/resume.pdf" download>
    <button>Download Resume</button>
  </a>

  <a
    href="https://github.com/shaikyasminn"
    target="_blank"
    rel="noreferrer"
  >
    <button>
  <FaGithub /> GitHub
</button>
  </a>

  <a
    href="https://linkedin.com/in/shaik-yasmin"
    target="_blank"
    rel="noreferrer"
  >
    <button>
  <FaLinkedin /> LinkedIn
</button>
  </a>

</div>

      </header>

      {/* ABOUT */}
      <section id='about'>

        <h2>About Me</h2>

        <div className="card">

          <p>
            Motivated Computer Science Engineering student with
            hands-on experience in Java Full Stack Development,
            Python-based web applications, and REST API development.
            Skilled in developing responsive and scalable web
            applications with strong problem-solving abilities.
          </p>

        </div>

      </section>

      {/* EDUCATION */}
      <section>

        <h2>Education</h2>

        <div className="project-grid">

          <div className="project-card">

            <h3>Raghu Engineering College</h3>

            <p>B.Tech in Computer Science & Engineering</p>

            <p>CGPA: 9.07</p>

          </div>

          <div className="project-card">

            <h3>Aditya Polytechnic College</h3>

            <p>Diploma in Computer Engineering</p>

            <p>Percentage: 93.35%</p>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id='skills'>

        <h2>Technical Skills</h2>

        <div className="skills">

          <span><FaJava /> Java</span>
          <span>Python</span>
          <span>C</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span><FaReact /> React.js</span>
          <span><SiSpringboot /> Spring Boot</span>
          <span>Angular</span>
          <span>Django REST Framework</span>
          <span><SiMongodb /> MongoDB</span>
          <span>MySQL</span>
          <span>REST APIs</span>
          <span>Git & GitHub</span>

        </div>

      </section>

      {/* PROJECTS */}
      <section id='projects'>

        <h2>Projects</h2>

        <div className="project-grid">

          <div className="project-card">

            <h3>Flight Reservation System</h3>

            <p>
              Developed a full-stack web application to manage
              flight booking and reservations with authentication,
              flight search, seat booking, and cancellation features.
            </p>

            <h4>Tech Stack</h4>

            <p>Java | Spring Boot | MySQL | HTML | CSS</p>

          </div>

          <div className="project-card">

            <h3>Student Management System</h3>

            <p>
              Developed a web application to manage student
              records with CRUD operations, search functionality,
              and efficient data handling.
            </p>

            <h4>Tech Stack</h4>

            <p>Python Flask | SQLite | Bootstrap</p>

          </div>

        </div>

      </section>

      {/* INTERNSHIPS */}
      <section>

        <h2>Internship Experience</h2>

        <div className="project-grid">

          <div className="project-card">

            <h3>Java Full Stack Developer Intern</h3>

            <p>
              Developed backend services using Spring Boot
              and Hibernate while designing responsive frontend
              interfaces using React and Angular.
            </p>

          </div>

          <div className="project-card">

            <h3>Python Full Stack Developer Intern</h3>

            <p>
              Built RESTful APIs using Django REST Framework
              and collaborated on React.js applications.
            </p>

          </div>

        </div>

      </section>

      {/* CERTIFICATIONS */}
      <section>

        <h2>Certifications</h2>

        <div className="skills">

          <span>Java Full Stack Development - MSME</span>

          <span>Programming in Java - NPTEL</span>

          <span>Database Management Systems - NPTEL</span>

          <span>Python Full Stack Development - AICTE</span>

          <span>Google AI-ML Virtual Internship</span>

        </div>

      </section>

      {/* CONTACT */}
      <section id='contact'>

        <h2>Contact</h2>

        <div className="card">

          <form>

            <input type="text" placeholder="Enter Name" />

            <input type="email" placeholder="Enter Email" />

            <textarea placeholder="Enter Message"></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default App;