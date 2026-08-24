import "./SearchFlight.css";

import { FaSearch, FaRedoAlt } from "react-icons/fa";

function SearchFlight() {
  return (
    <section className="search-flight">

      <div className="search-title">

        <h2>Search Flights</h2>

        <p>Find flights quickly using filters</p>

      </div>

      <div className="search-grid">

        <div className="search-field">
          <label>Airline</label>
          <input
            type="text"
            placeholder="Emirates"
          />
        </div>

        <div className="search-field">
          <label>Flight Number</label>
          <input
            type="text"
            placeholder="EK-501"
          />
        </div>

        <div className="search-field">
          <label>From</label>
          <input
            type="text"
            placeholder="Delhi"
          />
        </div>

        <div className="search-field">
          <label>To</label>
          <input
            type="text"
            placeholder="Dubai"
          />
        </div>

        <div className="search-field">
          <label>Date</label>
          <input type="date" />
        </div>

        <div className="search-field">
          <label>Status</label>

          <select>

            <option>All</option>

            <option>Scheduled</option>

            <option>Delayed</option>

            <option>Cancelled</option>

          </select>

        </div>

      </div>

      <div className="search-buttons">

        <button className="search-btn">

          <FaSearch />

          Search

        </button>

        <button className="reset-btn">

          <FaRedoAlt />

          Reset

        </button>

      </div>

    </section>
  );
}

export default SearchFlight;