import { useState } from "react";
import "./App.css";
import ProjectList from "./components/ProjectList";
import FilterBar from "./components/FilterBar";

const projects = [
  {
    id: 1,
    title: "Student Directory",
    description: "A React application featuring student profiles, reusable components, props, and interactive sections.",
    techStack: ["React", "CSS"],
    category: "Frontend",
    githubLink: "https://github.com/rawatimansingh718-Vk/task11",
    demoLink: "https://rawatimansingh718-vk.github.io/task11/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "My personal website showcasing web programming assignments and my development journey.",
    techStack: ["HTML", "CSS"],
    category: "Frontend",
    githubLink: "https://github.com/rawatimansingh718-Vk/Iman",
    demoLink: "https://rawatimansingh718-vk.github.io/Iman/",
  },
  {
    id: 3,
    title: "Book Search App",
    description: "A book discovery application that searches for books and displays book information using the Open Library API.",
    techStack: ["JavaScript", "CSS"],
    category: "Frontend",
    githubLink: "https://github.com/rawatimansingh718-Vk/webpro-book-search",
    demoLink: "https://rawatimansingh718-vk.github.io/webpro-book-search/",
  },
  {
    id: 4,
    title: "Personal Portfolio – Week 10_1",
    description: "A personal portfolio website showcasing my profile, skills, and web development journey.",
    techStack: ["HTML", "CSS"],
    category: "Frontend",
    githubLink: "https://github.com/rawatimansingh718-Vk/portfolio",
    demoLink: "https://rawatimansingh718-vk.github.io/portfolio/",
  },
];

function CounterPanel({ title, value, onIncrease, onDecrease }) {
  return (
    <div className="counter-panel">
      <h3>{title}</h3>
      <div className="counter-number">{value}</div>
      <div className="counter-buttons">
        <button onClick={onDecrease}>− Decrease</button>
        <button onClick={onIncrease}>+ Increase</button>
      </div>
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState(["Learn React", "Practice useState"]);
  const [newItem, setNewItem] = useState("");
  const [sharedCount, setSharedCount] = useState(0);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.techStack.includes(activeFilter)
        );

  function addItem() {
    const trimmedItem = newItem.trim();
    if (!trimmedItem) return;
    setItems([...items, trimmedItem]);
    setNewItem("");
  }

  function removeItem(indexToRemove) {
    setItems(items.filter((_, index) => index !== indexToRemove));
  }

  return (
    <main className="app-container">
      <header className="hero">
        <span className="hero-label">✦ MY CREATIVE SPACE</span>
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
            <p>A selection of my learning journey and creations.</p>
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

      <section className="react-practice" id="react-practice">
        <div className="practice-heading">
          <span className="section-label">WEEK 12 · REACT STATE</span>
          <h2>Interactive React Practice</h2>
          <p>
            Three practical examples demonstrating React useState
            and sharing state between components.
          </p>
        </div>

        <div className="practice-grid">
          <article className="practice-card">
            <span className="example-number">EXAMPLE 01</span>
            <h3>Toggle Visibility</h3>
            <p>Show or hide content using a React state variable.</p>
            <button
              className="practice-button"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? "Hide Content" : "Show Content"}
            </button>
            {isVisible && (
              <div className="visible-message">
                ✨ Hello! This content is now visible.
              </div>
            )}
          </article>

          <article className="practice-card">
            <span className="example-number">EXAMPLE 02</span>
            <h3>Add & Remove Items</h3>
            <p>Add new items to the list or remove existing ones.</p>
            <div className="add-item-form">
              <input
                type="text"
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") addItem();
                }}
                placeholder="Enter a new item..."
              />
              <button className="practice-button" onClick={addItem}>
                + Add
              </button>
            </div>
            <ul className="practice-list">
              {items.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <span>{item}</span>
                  <button
                    className="remove-button"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <span className="item-count">{items.length} items in list</span>
          </article>

          <article className="practice-card shared-counter-card">
            <span className="example-number">EXAMPLE 03</span>
            <h3>Lift State Between Counters</h3>
            <p>
              Both counters share one state variable managed by
              their parent component.
            </p>
            <div className="shared-total">
              Shared Count: <strong>{sharedCount}</strong>
            </div>
            <div className="counter-grid">
              <CounterPanel
                title="Counter A"
                value={sharedCount}
                onIncrease={() => setSharedCount(sharedCount + 1)}
                onDecrease={() => setSharedCount(sharedCount - 1)}
              />
              <CounterPanel
                title="Counter B"
                value={sharedCount}
                onIncrease={() => setSharedCount(sharedCount + 1)}
                onDecrease={() => setSharedCount(sharedCount - 1)}
              />
            </div>
            <button
              className="reset-button"
              onClick={() => setSharedCount(0)}
            >
              Reset Both Counters
            </button>
          </article>
        </div>
      </section>

      <footer>
        <p>Designed & Built by Iman Rawat</p>
        <span>© 2026 · React Portfolio Gallery</span>
      </footer>
    </main>
  );
}

export default App;
