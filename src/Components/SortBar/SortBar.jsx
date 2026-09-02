
// import "./SortBar.css";

// function SortBar({ sortBy, setSortBy }) {
//   return (
//     <div className="sort-bar">

//       <div className="sort-left">
//         <span>Sort By:</span>
//       </div>

//       <div className="sort-options">

//         <button
//           className={sortBy === "price" ? "active" : ""}
//           onClick={() => setSortBy("price")}
//         >
//           💰 Cheapest
//         </button>

//         <button
//           className={sortBy === "duration" ? "active" : ""}
//           onClick={() => setSortBy("duration")}
//         >
//           ⚡ Fastest
//         </button>

//       </div>

//     </div>
//   );
// }

// export default SortBar;

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