
import { useState } from "react";
import ProjectList from "./components/ProjectList";
import FilterBar from "./components/FilterBar";

const projects = [
  {
    id: 1,
    title: "Student Directory",
    description:
      "A React application featuring student profiles, reusable components, props, and interactive sections.",
    techStack: ["React", "CSS"],
    category: "Frontend",
    githubLink:
      "https://github.com/rawatimansingh718-Vk/task11",
    demoLink:
      "https://rawatimansingh718-vk.github.io/task11/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "My personal website showcasing web programming assignments and my development journey.",
    techStack: ["HTML", "CSS"],
    category: "Frontend",
    githubLink:
      "https://github.com/rawatimansingh718-Vk/Iman",
    demoLink:
      "https://rawatimansingh718-vk.github.io/Iman/",
  },
  {
    id: 3,
    title: "Book Search App",
    description:
      "A book discovery application that searches for books and displays book information using the Open Library API.",
    techStack: ["JavaScript", "CSS"],
    category: "Frontend",
    githubLink:
      "https://github.com/rawatimansingh718-Vk/webpro-book-search",
    demoLink:
      "https://rawatimansingh718-vk.github.io/webpro-book-search/",
  },
];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.techStack.includes(activeFilter)
        );

  return (
    <main className="app-container">
      <header className="hero">
        <span className="hero-label">
          ✦ MY CREATIVE SPACE
        </span>

        <h1>
          My Developer
          <span> Portfolio.</span>
        </h1>

        <p>
          Hi, I'm Iman. I'm a Computer Engineering student
          passionate about web development, technology, and
          building creative digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore Projects ↓
          </a>

          <a
            href="https://github.com/rawatimansingh718-Vk"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Visit GitHub ↗
          </a>
        </div>
      </header>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div>
            <span className="section-label">MY WORK</span>
            <h2>Featured Projects</h2>
            <p>
              A selection of my learning journey and creations.
            </p>
          </div>

          <span className="project-count">
            {filteredProjects.length} Projects
          </span>
        </div>

        <FilterBar
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <ProjectList projects={filteredProjects} />
      </section>

      <footer>
        <p>Designed & Built by Iman Rawat</p>
        <span>© 2026 · React Portfolio Gallery</span>
      </footer>
    </main>
  );
}

export default App;
