
// import "./CitySelector.css";
// import { useState } from "react";
// import airports from "../../Data/airports";
// import { FaSearch, FaPlaneDeparture } from "react-icons/fa";

// function CitySelector({ onSelect }) {
//   const [search, setSearch] = useState("");

//   const filteredAirports = airports.filter(
//     (airport) =>
//       airport.city.toLowerCase().includes(search.toLowerCase()) ||
//       airport.code.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="city-selector">

//       <div className="city-search">

//         <FaSearch />

//         <input
//           type="text"
//           placeholder="Search city or airport"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//       </div>

//       <div className="airport-list">

//         {filteredAirports.map((airport) => (

//           <div
//             className="airport-item"
//             key={airport.id}
//             onClick={() => onSelect(airport.city)}
//           >

//             <div className="airport-left">

//               <FaPlaneDeparture />

//               <div>

//                 <h3>{airport.city}</h3>

//                 <p>{airport.country}</p>

//               </div>

//             </div>

//             <span>{airport.code}</span>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// }

// export default CitySelector;




import "./CitySelector.css";

import { useEffect, useState } from "react";

import {
  FaSearch,
  FaPlaneDeparture,
} from "react-icons/fa";

function CitySelector({
  onSelect,
  selectedFrom = "",
  type = "from",
}) {
  const [search, setSearch] =
    useState("");

  const [flights, setFlights] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // ==========================================
  // FETCH ADMIN ADDED FLIGHTS
  // ==========================================

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);

        const response =
          await fetch(
            "https://saiyed-travels-backend-1.onrender.com/api/flights"
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to fetch flights"
          );
        }

        setFlights(
          Array.isArray(
            data.flights
          )
            ? data.flights
            : []
        );
      } catch (error) {
        console.error(
          "CitySelector Error:",
          error
        );

        setFlights([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  // ==========================================
  // CREATE CITY LIST FROM ADMIN FLIGHTS
  // ==========================================

  const cityMap = new Map();

  flights.forEach((flight) => {
    // ----------------------------------------
    // FROM
    // ----------------------------------------

    if (
      type === "from" &&
      flight.fromCity
    ) {
      const key =
        flight.fromCity
          .trim()
          .toLowerCase();

      if (!cityMap.has(key)) {
        cityMap.set(key, {
          city:
            flight.fromCity.trim(),

          country:
            flight.fromCountry ||
            "",

          code:
            flight.fromCode ||
            "",

          airport:
            flight.fromAirport ||
            "",
        });
      }
    }

    // ----------------------------------------
    // TO
    // ----------------------------------------

    if (
      type === "to" &&
      flight.toCity
    ) {
      // If From is selected,
      // only show destinations
      // available from that From city.

      if (
        selectedFrom &&
        flight.fromCity
      ) {
        const sameFrom =
          flight.fromCity
            .trim()
            .toLowerCase() ===
          selectedFrom
            .trim()
            .toLowerCase();

        if (!sameFrom) {
          return;
        }
      }

      const key =
        flight.toCity
          .trim()
          .toLowerCase();

      if (!cityMap.has(key)) {
        cityMap.set(key, {
          city:
            flight.toCity.trim(),

          country:
            flight.toCountry ||
            "",

          code:
            flight.toCode ||
            "",

          airport:
            flight.toAirport ||
            "",
        });
      }
    }
  });

  // ==========================================
  // ARRAY
  // ==========================================

  const cities = Array.from(
    cityMap.values()
  );

  // ==========================================
  // SEARCH
  // ==========================================

  const filteredCities =
    cities.filter((city) => {
      const searchText =
        search
          .trim()
          .toLowerCase();

      if (!searchText) {
        return true;
      }

      return (
        city.city
          .toLowerCase()
          .includes(searchText) ||

        city.code
          .toLowerCase()
          .includes(searchText) ||

        city.airport
          .toLowerCase()
          .includes(searchText) ||

        city.country
          .toLowerCase()
          .includes(searchText)
      );
    });

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="city-selector">

      {/* SEARCH */}

      <div className="city-search">

        <FaSearch />

        <input
          type="text"
          placeholder="Search city or airport"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

      </div>

      {/* LIST */}

      <div className="airport-list">

        {loading && (
          <div className="city-loading">
            Loading destinations...
          </div>
        )}

        {!loading &&
          filteredCities.length ===
            0 && (
            <div className="city-empty">

              {type === "to" &&
              selectedFrom
                ? `No destinations available from ${selectedFrom}`
                : "No cities available"}

            </div>
          )}

        {!loading &&
          filteredCities.map(
            (city) => (

              <div
                className="airport-item"
                key={`${type}-${city.city}-${city.code}`}
                onClick={() =>
                  onSelect(
                    city.city
                  )
                }
              >

                <div className="airport-left">

                  <FaPlaneDeparture />

                  <div>

                    <h3>
                      {city.city}
                    </h3>

                    {city.airport && (
                      <p>
                        {city.airport}
                      </p>
                    )}

                    {city.country && (
                      <small>
                        {city.country}
                      </small>
                    )}

                  </div>

                </div>

                {city.code && (
                  <span>
                    {city.code}
                  </span>
                )}

              </div>

            )
          )}

      </div>

    </div>
  );
}

export default CitySelector;