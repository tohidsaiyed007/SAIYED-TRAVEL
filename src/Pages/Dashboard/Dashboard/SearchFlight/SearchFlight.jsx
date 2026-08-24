import "./SearchFlight.css";

import {
  FaSearch,
  FaRedoAlt,
} from "react-icons/fa";

function SearchFlight() {

  return (

    <section className="search-flight">

      <div className="search-title">

        <h2>Search Flights</h2>

        <p>
          Search flights using filters
        </p>

      </div>

      <div className="search-grid">

        {/* Airline */}

        <div className="search-field">

          <label>Airline</label>

          <input
            type="text"
            placeholder="Emirates"
          />

        </div>

        {/* Flight No */}

        <div className="search-field">

          <label>Flight No</label>

          <input
            type="text"
            placeholder="EK-501"
          />

        </div>

        {/* From */}

        <div className="search-field">

          <label>From</label>

          <input
            type="text"
            placeholder="Delhi"
          />

        </div>

        {/* To */}

        <div className="search-field">

          <label>To</label>

          <input
            type="text"
            placeholder="Dubai"
          />

        </div>

        {/* Date */}

        <div className="search-field">

          <label>Date</label>

          <input type="date" />

        </div>

        {/* Status */}

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