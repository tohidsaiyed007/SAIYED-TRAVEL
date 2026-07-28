

// // // // import "./FilterSidebar.css";

// // // // function FilterSidebar({
// // // //   selectedAirlines,
// // // //   onAirlineChange,
// // // // }) {

// // // //   return (
// // // //     <aside className="filter-sidebar">

// // // //       <h2>Filters</h2>

// // // //       {/* Airlines */}

// // // //       <div className="filter-section">

// // // //         <h3>Airlines</h3>

// // // //         <label>

// // // //           <input
// // // //             type="checkbox"
// // // //             checked={selectedAirlines.includes("IndiGo")}
// // // //             onChange={() => onAirlineChange("IndiGo")}
// // // //           />

// // // //           IndiGo

// // // //         </label>

// // // //         <label>

// // // //           <input
// // // //             type="checkbox"
// // // //             checked={selectedAirlines.includes("Air India")}
// // // //             onChange={() => onAirlineChange("Air India")}
// // // //           />

// // // //           Air India

// // // //         </label>

// // // //         <label>

// // // //           <input
// // // //             type="checkbox"
// // // //             checked={selectedAirlines.includes("Emirates")}
// // // //             onChange={() => onAirlineChange("Emirates")}
// // // //           />

// // // //           Emirates

// // // //         </label>

// // // //         <label>

// // // //           <input
// // // //             type="checkbox"
// // // //             checked={selectedAirlines.includes("Akasa Air")}
// // // //             onChange={() => onAirlineChange("Akasa Air")}
// // // //           />

// // // //           Akasa Air

// // // //         </label>

// // // //         <label>

// // // //           <input
// // // //             type="checkbox"
// // // //             checked={selectedAirlines.includes("SpiceJet")}
// // // //             onChange={() => onAirlineChange("SpiceJet")}
// // // //           />

// // // //           SpiceJet

// // // //         </label>

// // // //         <label>

// // // //           <input
// // // //             type="checkbox"
// // // //             checked={selectedAirlines.includes("Qatar Airways")}
// // // //             onChange={() => onAirlineChange("Qatar Airways")}
// // // //           />

// // // //           Qatar Airways

// // // //         </label>

// // // //       </div>

// // // //       {/* Stops */}

// // // //       <div className="filter-section">

// // // //         <h3>Stops</h3>

// // // //         <label>
// // // //           <input type="checkbox" disabled />
// // // //           Non Stop
// // // //         </label>

// // // //         <label>
// // // //           <input type="checkbox" disabled />
// // // //           1 Stop
// // // //         </label>

// // // //         <label>
// // // //           <input type="checkbox" disabled />
// // // //           2+ Stops
// // // //         </label>

// // // //       </div>

// // // //       {/* Cabin */}

// // // //       <div className="filter-section">

// // // //         <h3>Cabin</h3>

// // // //         <label>
// // // //           <input type="checkbox" disabled />
// // // //           Economy
// // // //         </label>

// // // //         <label>
// // // //           <input type="checkbox" disabled />
// // // //           Premium Economy
// // // //         </label>

// // // //         <label>
// // // //           <input type="checkbox" disabled />
// // // //           Business
// // // //         </label>

// // // //       </div>

// // // //       {/* Price */}

// // // //       <div className="filter-section">

// // // //         <h3>Price</h3>

// // // //         <input
// // // //           type="range"
// // // //           min="1000"
// // // //           max="50000"
// // // //           disabled
// // // //         />

// // // //         <p>₹1,000 - ₹50,000</p>

// // // //       </div>

// // // //     </aside>
// // // //   );
// // // // }

// // // // export default FilterSidebar;


// // // import "./FilterSidebar.css";

// // // function FilterSidebar({
// // //   selectedAirlines,
// // //   onAirlineChange,
// // //   selectedStops,
// // //   onStopsChange,
// // // }) {

// // //   return (
// // //     <aside className="filter-sidebar">

// // //       <h2>Filters</h2>

// // //       {/* Airlines */}

// // //       <div className="filter-section">

// // //         <h3>Airlines</h3>

// // //         <label>
// // //           <input
// // //             type="checkbox"
// // //             checked={selectedAirlines.includes("IndiGo")}
// // //             onChange={() => onAirlineChange("IndiGo")}
// // //           />
// // //           IndiGo
// // //         </label>

// // //         <label>
// // //           <input
// // //             type="checkbox"
// // //             checked={selectedAirlines.includes("Air India")}
// // //             onChange={() => onAirlineChange("Air India")}
// // //           />
// // //           Air India
// // //         </label>

// // //         <label>
// // //           <input
// // //             type="checkbox"
// // //             checked={selectedAirlines.includes("Emirates")}
// // //             onChange={() => onAirlineChange("Emirates")}
// // //           />
// // //           Emirates
// // //         </label>

// // //         <label>
// // //           <input
// // //             type="checkbox"
// // //             checked={selectedAirlines.includes("Akasa Air")}
// // //             onChange={() => onAirlineChange("Akasa Air")}
// // //           />
// // //           Akasa Air
// // //         </label>

// // //         <label>
// // //           <input
// // //             type="checkbox"
// // //             checked={selectedAirlines.includes("SpiceJet")}
// // //             onChange={() => onAirlineChange("SpiceJet")}
// // //           />
// // //           SpiceJet
// // //         </label>

// // //         <label>
// // //           <input
// // //             type="checkbox"
// // //             checked={selectedAirlines.includes("Qatar Airways")}
// // //             onChange={() => onAirlineChange("Qatar Airways")}
// // //           />
// // //           Qatar Airways
// // //         </label>

// // //       </div>

// // //       {/* Stops */}

// // //       <div className="filter-section">

// // //         <h3>Stops</h3>

// // //         <label>
// // //           <input
// // //             type="checkbox"
// // //             checked={selectedStops.includes("Non Stop")}
// // //             onChange={() => onStopsChange("Non Stop")}
// // //           />
// // //           Non Stop
// // //         </label>

// // //         <label>
// // //           <input
// // //             type="checkbox"
// // //             checked={selectedStops.includes("1 Stop")}
// // //             onChange={() => onStopsChange("1 Stop")}
// // //           />
// // //           1 Stop
// // //         </label>

// // //         <label>
// // //           <input
// // //             type="checkbox"
// // //             checked={selectedStops.includes("2+ Stops")}
// // //             onChange={() => onStopsChange("2+ Stops")}
// // //           />
// // //           2+ Stops
// // //         </label>

// // //       </div>

// // //       {/* Cabin */}

// // //       <div className="filter-section">

// // //         <h3>Cabin</h3>

// // //         <label>
// // //           <input type="checkbox" disabled />
// // //           Economy
// // //         </label>

// // //         <label>
// // //           <input type="checkbox" disabled />
// // //           Premium Economy
// // //         </label>

// // //         <label>
// // //           <input type="checkbox" disabled />
// // //           Business
// // //         </label>

// // //       </div>

// // //       {/* Price */}

// // //       <div className="filter-section">

// // //         <h3>Price</h3>

// // //         <input
// // //           type="range"
// // //           min="1000"
// // //           max="50000"
// // //           disabled
// // //         />

// // //         <p>₹1,000 - ₹50,000</p>

// // //       </div>

// // //     </aside>
// // //   );
// // // }

// // // export default FilterSidebar;




// // import "./FilterSidebar.css";

// // function FilterSidebar({
// //   selectedAirlines,
// //   onAirlineChange,
// //   selectedStops,
// //   onStopsChange,
// //   maxPrice,
// //   setMaxPrice,
// // }) {

// //   return (
// //     <aside className="filter-sidebar">

// //       <h2>Filters</h2>

// //       {/* Airlines */}

// //       <div className="filter-section">

// //         <h3>Airlines</h3>

// //         <label>
// //           <input
// //             type="checkbox"
// //             checked={selectedAirlines.includes("IndiGo")}
// //             onChange={() => onAirlineChange("IndiGo")}
// //           />
// //           IndiGo
// //         </label>

// //         <label>
// //           <input
// //             type="checkbox"
// //             checked={selectedAirlines.includes("Air India")}
// //             onChange={() => onAirlineChange("Air India")}
// //           />
// //           Air India
// //         </label>

// //         <label>
// //           <input
// //             type="checkbox"
// //             checked={selectedAirlines.includes("Emirates")}
// //             onChange={() => onAirlineChange("Emirates")}
// //           />
// //           Emirates
// //         </label>

// //         <label>
// //           <input
// //             type="checkbox"
// //             checked={selectedAirlines.includes("Akasa Air")}
// //             onChange={() => onAirlineChange("Akasa Air")}
// //           />
// //           Akasa Air
// //         </label>

// //         <label>
// //           <input
// //             type="checkbox"
// //             checked={selectedAirlines.includes("SpiceJet")}
// //             onChange={() => onAirlineChange("SpiceJet")}
// //           />
// //           SpiceJet
// //         </label>

// //         <label>
// //           <input
// //             type="checkbox"
// //             checked={selectedAirlines.includes("Qatar Airways")}
// //             onChange={() => onAirlineChange("Qatar Airways")}
// //           />
// //           Qatar Airways
// //         </label>

// //       </div>

// //       {/* Stops */}

// //       <div className="filter-section">

// //         <h3>Stops</h3>

// //         <label>
// //           <input
// //             type="checkbox"
// //             checked={selectedStops.includes("Non Stop")}
// //             onChange={() => onStopsChange("Non Stop")}
// //           />
// //           Non Stop
// //         </label>

// //         <label>
// //           <input
// //             type="checkbox"
// //             checked={selectedStops.includes("1 Stop")}
// //             onChange={() => onStopsChange("1 Stop")}
// //           />
// //           1 Stop
// //         </label>

// //         <label>
// //           <input
// //             type="checkbox"
// //             checked={selectedStops.includes("2+ Stops")}
// //             onChange={() => onStopsChange("2+ Stops")}
// //           />
// //           2+ Stops
// //         </label>

// //       </div>

// //       {/* Cabin */}

// //       <div className="filter-section">

// //         <h3>Cabin</h3>

// //         <label>
// //           <input type="checkbox" disabled />
// //           Economy
// //         </label>

// //         <label>
// //           <input type="checkbox" disabled />
// //           Premium Economy
// //         </label>

// //         <label>
// //           <input type="checkbox" disabled />
// //           Business
// //         </label>

// //       </div>

// //       {/* Price */}

// //       <div className="filter-section">

// //         <h3>Price</h3>

// //         <input
// //           type="range"
// //           min="1000"
// //           max="50000"
// //           step="500"
// //           value={maxPrice}
// //           onChange={(e) => setMaxPrice(Number(e.target.value))}
// //         />

// //         <p>Up to ₹{maxPrice.toLocaleString()}</p>

// //       </div>

// //     </aside>
// //   );
// // }

// // export default FilterSidebar;



// import "./FilterSidebar.css";

// function FilterSidebar({
//   selectedAirlines,
//   onAirlineChange,
//   selectedStops,
//   onStopsChange,
//   maxPrice,
//   setMaxPrice,
//   resetFilters,
// }) {
//   return (
//     <aside className="filter-sidebar">
//       <h2>Filters</h2>

//       {/* Airlines */}

//       <div className="filter-section">
//         <h3>Airlines</h3>

//         <label>
//           <input
//             type="checkbox"
//             checked={selectedAirlines.includes("IndiGo")}
//             onChange={() => onAirlineChange("IndiGo")}
//           />
//           IndiGo
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             checked={selectedAirlines.includes("Air India")}
//             onChange={() => onAirlineChange("Air India")}
//           />
//           Air India
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             checked={selectedAirlines.includes("Emirates")}
//             onChange={() => onAirlineChange("Emirates")}
//           />
//           Emirates
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             checked={selectedAirlines.includes("Akasa Air")}
//             onChange={() => onAirlineChange("Akasa Air")}
//           />
//           Akasa Air
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             checked={selectedAirlines.includes("SpiceJet")}
//             onChange={() => onAirlineChange("SpiceJet")}
//           />
//           SpiceJet
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             checked={selectedAirlines.includes("Qatar Airways")}
//             onChange={() => onAirlineChange("Qatar Airways")}
//           />
//           Qatar Airways
//         </label>
//       </div>

//       {/* Stops */}

//       <div className="filter-section">
//         <h3>Stops</h3>

//         <label>
//           <input
//             type="checkbox"
//             checked={selectedStops.includes("Non Stop")}
//             onChange={() => onStopsChange("Non Stop")}
//           />
//           Non Stop
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             checked={selectedStops.includes("1 Stop")}
//             onChange={() => onStopsChange("1 Stop")}
//           />
//           1 Stop
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             checked={selectedStops.includes("2+ Stops")}
//             onChange={() => onStopsChange("2+ Stops")}
//           />
//           2+ Stops
//         </label>
//       </div>

//       {/* Cabin */}

//       <div className="filter-section">
//         <h3>Cabin</h3>

//         <label>
//           <input type="checkbox" disabled />
//           Economy
//         </label>

//         <label>
//           <input type="checkbox" disabled />
//           Premium Economy
//         </label>

//         <label>
//           <input type="checkbox" disabled />
//           Business
//         </label>
//       </div>

//       {/* Price */}

//       <div className="filter-section">
//         <h3>Price</h3>

//         <input
//           type="range"
//           min="1000"
//           max="50000"
//           step="500"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(Number(e.target.value))}
//         />

//         <p>Up to ₹{maxPrice.toLocaleString()}</p>
//       </div>

//       {/* Reset Filters */}

//       <div className="filter-section">
//         <button
//           className="reset-filter-btn"
//           onClick={resetFilters}
//         >
//           Reset Filters
//         </button>
//       </div>
//     </aside>
//   );
// }

// export default FilterSidebar;



import "./FilterSidebar.css";

// function FilterSidebar({
//   selectedAirlines,
//   onAirlineChange,
//   selectedStops,
//   onStopsChange,

//   // NEW
//   selectedCabins,
//   onCabinChange,

//   maxPrice,
//   setMaxPrice,
//   resetFilters,
// }) {

function FilterSidebar({
  selectedAirlines,
  onAirlineChange,

  selectedStops,
  onStopsChange,

  selectedCabins,
  onCabinChange,

  // NEW
  selectedTimes,
  onTimeChange,

  maxPrice,
  setMaxPrice,

  resetFilters,
}) {
  return (
    <aside className="filter-sidebar">

      <h2>Filters</h2>

      {/* Airlines */}

      <div className="filter-section">

        <h3>Airlines</h3>

        <label>
          <input
            type="checkbox"
            checked={selectedAirlines.includes("IndiGo")}
            onChange={() => onAirlineChange("IndiGo")}
          />
          IndiGo
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedAirlines.includes("Air India")}
            onChange={() => onAirlineChange("Air India")}
          />
          Air India
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedAirlines.includes("Emirates")}
            onChange={() => onAirlineChange("Emirates")}
          />
          Emirates
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedAirlines.includes("Akasa Air")}
            onChange={() => onAirlineChange("Akasa Air")}
          />
          Akasa Air
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedAirlines.includes("SpiceJet")}
            onChange={() => onAirlineChange("SpiceJet")}
          />
          SpiceJet
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedAirlines.includes("Qatar Airways")}
            onChange={() => onAirlineChange("Qatar Airways")}
          />
          Qatar Airways
        </label>

      </div>

      {/* Stops */}

      <div className="filter-section">

        <h3>Stops</h3>

        <label>
          <input
            type="checkbox"
            checked={selectedStops.includes("Non Stop")}
            onChange={() => onStopsChange("Non Stop")}
          />
          Non Stop
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedStops.includes("1 Stop")}
            onChange={() => onStopsChange("1 Stop")}
          />
          1 Stop
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedStops.includes("2+ Stops")}
            onChange={() => onStopsChange("2+ Stops")}
          />
          2+ Stops
        </label>

      </div>

      {/* Cabin */}

      <div className="filter-section">

        <h3>Cabin</h3>

        <label>
          <input
            type="checkbox"
            checked={selectedCabins.includes("Economy")}
            onChange={() => onCabinChange("Economy")}
          />
          Economy
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedCabins.includes("Premium Economy")}
            onChange={() => onCabinChange("Premium Economy")}
          />
          Premium Economy
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedCabins.includes("Business")}
            onChange={() => onCabinChange("Business")}
          />
          Business
        </label>
      </div>

            {/* Departure Time */}

      <div className="filter-section">

        <h3>Departure Time</h3>

        <label>
          <input
            type="checkbox"
            checked={selectedTimes.includes("earlyMorning")}
            onChange={() => onTimeChange("earlyMorning")}
          />
          🌅 Early Morning
          <small> (00:00 - 06:00)</small>
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedTimes.includes("morning")}
            onChange={() => onTimeChange("morning")}
          />
          🌞 Morning
          <small> (06:00 - 12:00)</small>
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedTimes.includes("afternoon")}
            onChange={() => onTimeChange("afternoon")}
          />
          🌇 Afternoon
          <small> (12:00 - 18:00)</small>
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedTimes.includes("evening")}
            onChange={() => onTimeChange("evening")}
          />
          🌙 Evening
          <small> (18:00 - 24:00)</small>
        </label>

      </div>

            {/* Price */}

      <div className="filter-section">

        <h3>Price</h3>

        <input
          type="range"
          min="1000"
          max="50000"
          step="500"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Number(e.target.value))
          }
        />

        <p>Up to ₹{maxPrice.toLocaleString()}</p>

      </div>

      {/* Reset Filters */}

      <div className="filter-section">

        <button
          className="reset-filter-btn"
          onClick={resetFilters}
        >
          Reset Filters
        </button>

      </div>

    </aside>
  );
}

export default FilterSidebar;