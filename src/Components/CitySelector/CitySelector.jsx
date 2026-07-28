// import "./CitySelector.css";
// import airports from "../../Data/airports";
// import { FaSearch, FaPlaneDeparture } from "react-icons/fa";

// function CitySelector({ onSelect }) {
//   return (
//     <div className="city-selector">

//       <div className="city-search">

//         <FaSearch />

//         <input
//           type="text"
//           placeholder="Search city or airport"
//         />

//       </div>

//       <div className="airport-list">

//         {airports.map((airport) => (

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
import { useState } from "react";
import airports from "../../Data/airports";
import { FaSearch, FaPlaneDeparture } from "react-icons/fa";

function CitySelector({ onSelect }) {
  const [search, setSearch] = useState("");

  const filteredAirports = airports.filter(
    (airport) =>
      airport.city.toLowerCase().includes(search.toLowerCase()) ||
      airport.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="city-selector">

      <div className="city-search">

        <FaSearch />

        <input
          type="text"
          placeholder="Search city or airport"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="airport-list">

        {filteredAirports.map((airport) => (

          <div
            className="airport-item"
            key={airport.id}
            onClick={() => onSelect(airport.city)}
          >

            <div className="airport-left">

              <FaPlaneDeparture />

              <div>

                <h3>{airport.city}</h3>

                <p>{airport.country}</p>

              </div>

            </div>

            <span>{airport.code}</span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CitySelector;