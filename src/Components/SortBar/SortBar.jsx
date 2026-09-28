import "./SortBar.css";

function SortBar({ sortBy, setSortBy }) {
  return (
    <div className="sort-bar">
      <span>Sort By:</span>

      <button
        className={sortBy === "price" ? "active" : ""}
        onClick={() => setSortBy("price")}
      >
        💰 Cheapest
      </button>

      <button
        className={sortBy === "duration" ? "active" : ""}
        onClick={() => setSortBy("duration")}
      >
        ⚡ Fastest
      </button>
    </div>
  );
}

export default SortBar;