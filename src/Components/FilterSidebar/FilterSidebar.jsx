import "./FilterSidebar.css";

function FilterSidebar({
  selectedAirlines,
  onAirlineChange,
  selectedStops,
  onStopsChange,
  selectedCabins,
  onCabinChange,
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

        {[
          "IndiGo",
          "Air India",
          "Emirates",
          "Akasa Air",
          "SpiceJet",
          "Qatar Airways",
        ].map((airline) => (
          <label key={airline}>
            <input
              type="checkbox"
              checked={selectedAirlines.includes(airline)}
              onChange={() => onAirlineChange(airline)}
            />
            {airline}
          </label>
        ))}
      </div>

      {/* Stops */}
      <div className="filter-section">
        <h3>Stops</h3>

        {["Non Stop", "1 Stop", "2+ Stops"].map((stop) => (
          <label key={stop}>
            <input
              type="checkbox"
              checked={selectedStops.includes(stop)}
              onChange={() => onStopsChange(stop)}
            />
            {stop}
          </label>
        ))}
      </div>

      {/* Cabin */}
      <div className="filter-section">
        <h3>Cabin</h3>

        {[
          "Economy",
          "Premium Economy",
          "Business",
        ].map((cabin) => (
          <label key={cabin}>
            <input
              type="checkbox"
              checked={selectedCabins.includes(cabin)}
              onChange={() => onCabinChange(cabin)}
            />
            {cabin}
          </label>
        ))}
      </div>

      {/* Departure Time */}
      <div className="filter-section">
        <h3>Departure Time</h3>

        {[
          ["earlyMorning", "🌅 Early Morning", "00:00 - 06:00"],
          ["morning", "🌞 Morning", "06:00 - 12:00"],
          ["afternoon", "🌇 Afternoon", "12:00 - 18:00"],
          ["evening", "🌙 Evening", "18:00 - 24:00"],
        ].map(([value, label, time]) => (
          <label key={value}>
            <input
              type="checkbox"
              checked={selectedTimes.includes(value)}
              onChange={() => onTimeChange(value)}
            />

            {label}
            <small> ({time})</small>
          </label>
        ))}
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

        <p>
          Up to ₹{maxPrice.toLocaleString()}
        </p>
      </div>

      <button
        className="reset-filter-btn"
        onClick={resetFilters}
      >
        Reset Filters
      </button>

    </aside>
  );
}

export default FilterSidebar;