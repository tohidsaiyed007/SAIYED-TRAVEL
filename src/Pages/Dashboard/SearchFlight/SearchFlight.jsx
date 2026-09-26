// // import "./SearchFlight.css";

// // import { FaSearch, FaRedoAlt } from "react-icons/fa";

// // function SearchFlight() {
// //   return (
// //     <section className="search-flight">

// //       <div className="search-title">

// //         <h2>Search Flights</h2>

// //         <p>Find flights quickly using filters</p>

// //       </div>

// //       <div className="search-grid">

// //         <div className="search-field">
// //           <label>Airline</label>
// //           <input
// //             type="text"
// //             placeholder="Emirates"
// //           />
// //         </div>

// //         <div className="search-field">
// //           <label>Flight Number</label>
// //           <input
// //             type="text"
// //             placeholder="EK-501"
// //           />
// //         </div>

// //         <div className="search-field">
// //           <label>From</label>
// //           <input
// //             type="text"
// //             placeholder="Delhi"
// //           />
// //         </div>

// //         <div className="search-field">
// //           <label>To</label>
// //           <input
// //             type="text"
// //             placeholder="Dubai"
// //           />
// //         </div>

// //         <div className="search-field">
// //           <label>Date</label>
// //           <input type="date" />
// //         </div>

// //         <div className="search-field">
// //           <label>Status</label>

// //           <select>

// //             <option>All</option>

// //             <option>Scheduled</option>

// //             <option>Delayed</option>

// //             <option>Cancelled</option>

// //           </select>

// //         </div>

// //       </div>

// //       <div className="search-buttons">

// //         <button className="search-btn">

// //           <FaSearch />

// //           Search

// //         </button>

// //         <button className="reset-btn">

// //           <FaRedoAlt />

// //           Reset

// //         </button>

// //       </div>

// //     </section>
// //   );
// // }

// // export default SearchFlight;



// import "./SearchFlight.css";

// import { useState } from "react";
// import { FaSearch, FaRedoAlt } from "react-icons/fa";

// function SearchFlight({ flights = [], setFlights, allFlights = [] }) {
//   const [filters, setFilters] = useState({
//     airline: "",
//     flightNumber: "",
//     from: "",
//     to: "",
//     date: "",
//     status: "All",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFilters((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSearch = () => {
//     let filtered = allFlights.length
//       ? [...allFlights]
//       : [...flights];

//     filtered = filtered.filter((flight) => {
//       const airline =
//         String(
//           flight.airline ||
//             flight.airlineName ||
//             ""
//         ).toLowerCase();

//       const flightNumber =
//         String(
//           flight.flightNumber ||
//             flight.flightNo ||
//             flight.flight ||
//             ""
//         ).toLowerCase();

//       const from =
//         String(
//           flight.from ||
//             flight.fromCity ||
//             flight.departureCity ||
//             ""
//         ).toLowerCase();

//       const to =
//         String(
//           flight.to ||
//             flight.toCity ||
//             flight.arrivalCity ||
//             ""
//         ).toLowerCase();

//       const status =
//         String(
//           flight.status ||
//             ""
//         ).toLowerCase();

//       const flightDate =
//         flight.date ||
//         flight.departureDate ||
//         "";

//       const matchAirline =
//         !filters.airline ||
//         airline.includes(
//           filters.airline.toLowerCase()
//         );

//       const matchFlightNumber =
//         !filters.flightNumber ||
//         flightNumber.includes(
//           filters.flightNumber.toLowerCase()
//         );

//       const matchFrom =
//         !filters.from ||
//         from.includes(
//           filters.from.toLowerCase()
//         );

//       const matchTo =
//         !filters.to ||
//         to.includes(
//           filters.to.toLowerCase()
//         );

//       const matchDate =
//         !filters.date ||
//         flightDate === filters.date;

//       const matchStatus =
//         filters.status === "All" ||
//         status ===
//           filters.status.toLowerCase();

//       return (
//         matchAirline &&
//         matchFlightNumber &&
//         matchFrom &&
//         matchTo &&
//         matchDate &&
//         matchStatus
//       );
//     });

//     setFlights(filtered);
//   };

//   const handleReset = () => {
//     setFilters({
//       airline: "",
//       flightNumber: "",
//       from: "",
//       to: "",
//       date: "",
//       status: "All",
//     });

//     setFlights(allFlights);
//   };

//   return (
//     <section className="search-flight">

//       <div className="search-title">

//         <h2>Search Flights</h2>

//         <p>
//           Find flights quickly using filters
//         </p>

//       </div>

//       <div className="search-grid">

//         {/* AIRLINE */}

//         <div className="search-field">

//           <label>
//             Airline
//           </label>

//           <input
//             type="text"
//             name="airline"
//             value={filters.airline}
//             onChange={handleChange}
//             placeholder="Emirates"
//           />

//         </div>


//         {/* FLIGHT NUMBER */}

//         <div className="search-field">

//           <label>
//             Flight Number
//           </label>

//           <input
//             type="text"
//             name="flightNumber"
//             value={filters.flightNumber}
//             onChange={handleChange}
//             placeholder="EK-501"
//           />

//         </div>


//         {/* FROM */}

//         <div className="search-field">

//           <label>
//             From
//           </label>

//           <input
//             type="text"
//             name="from"
//             value={filters.from}
//             onChange={handleChange}
//             placeholder="Delhi"
//           />

//         </div>


//         {/* TO */}

//         <div className="search-field">

//           <label>
//             To
//           </label>

//           <input
//             type="text"
//             name="to"
//             value={filters.to}
//             onChange={handleChange}
//             placeholder="Dubai"
//           />

//         </div>


//         {/* DATE */}

//         <div className="search-field">

//           <label>
//             Date
//           </label>

//           <input
//             type="date"
//             name="date"
//             value={filters.date}
//             onChange={handleChange}
//           />

//         </div>


//         {/* STATUS */}

//         <div className="search-field">

//           <label>
//             Status
//           </label>

//           <select
//             name="status"
//             value={filters.status}
//             onChange={handleChange}
//           >

//             <option value="All">
//               All
//             </option>

//             <option value="Scheduled">
//               Scheduled
//             </option>

//             <option value="Delayed">
//               Delayed
//             </option>

//             <option value="Cancelled">
//               Cancelled
//             </option>

//           </select>

//         </div>

//       </div>


//       {/* BUTTONS */}

//       <div className="search-buttons">

//         <button
//           type="button"
//           className="search-btn"
//           onClick={handleSearch}
//         >

//           <FaSearch />

//           Search

//         </button>


//         <button
//           type="button"
//           className="reset-btn"
//           onClick={handleReset}
//         >

//           <FaRedoAlt />

//           Reset

//         </button>

//       </div>

//     </section>
//   );
// }

// export default SearchFlight;













import "./SearchFlight.css";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchFlight({ bookings = [], onSearch }) {
  const [pnr, setPnr] = useState("");

  const handleSearch = () => {
    const searchPNR = pnr.trim();

    if (!searchPNR) {
      onSearch?.([]);
      return;
    }

    const result = bookings.filter((booking) => {
      const bookingPNR = String(
        booking?.pnr ||
        booking?.PNR ||
        booking?.pnrNumber ||
        ""
      )
        .trim()
        .toLowerCase();

      return bookingPNR === searchPNR.toLowerCase();
    });

    onSearch?.(result);
  };

  return (
    <section className="search-flight">

      <div className="search-title">
        <h2>Search Flight</h2>

        <p>
          Search your flight using PNR number
        </p>
      </div>

      <div className="pnr-search-box">

        <input
          type="text"
          placeholder="Enter PNR Number"
          value={pnr}
          onChange={(e) =>
            setPnr(e.target.value)
          }
        />

        <button
          type="button"
          onClick={handleSearch}
        >
          <FaSearch />
          Search
        </button>

      </div>

    </section>
  );
}

export default SearchFlight;