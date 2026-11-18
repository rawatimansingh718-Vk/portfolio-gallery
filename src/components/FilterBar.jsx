function FilterBar({ activeFilter, setActiveFilter }) {
  const filters = ["All", "React", "JavaScript", "HTML", "CSS"];

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={
            activeFilter === filter ? "filter-btn active" : "filter-btn"
          }
          onClick={() => setActiveFilter(filter)}
        >
          {filter === "All" ? "✦ All Projects" : filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
