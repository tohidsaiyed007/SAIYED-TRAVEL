// import "./TravellerSelector.css";
// import { useState } from "react";

// function TravellerSelector({ onClose }) {

//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [infants, setInfants] = useState(0);
//   const [cabin, setCabin] = useState("Economy");

//   return (
//     <div className="traveller-popup">

//       <h2>Travellers & Cabin Class</h2>

//       <div className="traveller-row">

//         <span>Adults</span>

//         <div className="counter">

//           <button
//             onClick={() => adults > 1 && setAdults(adults - 1)}
//           >
//             -
//           </button>

//           <strong>{adults}</strong>

//           <button
//             onClick={() => setAdults(adults + 1)}
//           >
//             +
//           </button>

//         </div>

//       </div>

//       <div className="traveller-row">

//         <span>Children</span>

//         <div className="counter">

//           <button
//             onClick={() => children > 0 && setChildren(children - 1)}
//           >
//             -
//           </button>

//           <strong>{children}</strong>

//           <button
//             onClick={() => setChildren(children + 1)}
//           >
//             +
//           </button>

//         </div>

//       </div>

//       <div className="traveller-row">

//         <span>Infants</span>

//         <div className="counter">

//           <button
//             onClick={() => infants > 0 && setInfants(infants - 1)}
//           >
//             -
//           </button>

//           <strong>{infants}</strong>

//           <button
//             onClick={() => setInfants(infants + 1)}
//           >
//             +
//           </button>

//         </div>

//       </div>

//       <div className="cabin-section">

//         <h3>Cabin Class</h3>

//         <select
//           value={cabin}
//           onChange={(e) => setCabin(e.target.value)}
//         >

//           <option>Economy</option>

//           <option>Premium Economy</option>

//           <option>Business</option>

//           <option>First Class</option>

//         </select>

//       </div>

//       <button
//         className="done-btn"
//         onClick={onClose}
//       >
//         Done
//       </button>

//     </div>
//   );
// }

// export default TravellerSelector;











import "./TravellerSelector.css";
import { useState } from "react";

function TravellerSelector({
  travellers,
  onDone,
  onClose,
}) {

  const [adults, setAdults] = useState(travellers.adults);
  const [children, setChildren] = useState(travellers.children);
  const [infants, setInfants] = useState(travellers.infants);
  const [cabin, setCabin] = useState(travellers.cabin);

  const handleDone = () => {
    onDone({
      adults,
      children,
      infants,
      cabin,
    });
  };

  return (
    <div className="traveller-popup">

      <h2>Travellers & Cabin Class</h2>

      {/* Adults */}

      <div className="traveller-row">

        <span>Adults</span>

        <div className="counter">

          <button
            type="button"
            onClick={() => adults > 1 && setAdults(adults - 1)}
          >
            -
          </button>

          <strong>{adults}</strong>

          <button
            type="button"
            onClick={() => setAdults(adults + 1)}
          >
            +
          </button>

        </div>

      </div>

      {/* Children */}

      <div className="traveller-row">

        <span>Children</span>

        <div className="counter">

          <button
            type="button"
            onClick={() => children > 0 && setChildren(children - 1)}
          >
            -
          </button>

          <strong>{children}</strong>

          <button
            type="button"
            onClick={() => setChildren(children + 1)}
          >
            +
          </button>

        </div>

      </div>

      {/* Infants */}

      <div className="traveller-row">

        <span>Infants</span>

        <div className="counter">

          <button
            type="button"
            onClick={() => infants > 0 && setInfants(infants - 1)}
          >
            -
          </button>

          <strong>{infants}</strong>

          <button
            type="button"
            onClick={() => setInfants(infants + 1)}
          >
            +
          </button>

        </div>

      </div>

      {/* Cabin */}

      <div className="cabin-section">

        <h3>Cabin Class</h3>

        <select
          value={cabin}
          onChange={(e) => setCabin(e.target.value)}
        >
          <option>Economy</option>
          <option>Premium Economy</option>
          <option>Business</option>
          <option>First Class</option>
        </select>

      </div>

      {/* Buttons */}

      <div className="traveller-buttons">

        <button
          type="button"
          className="cancel-btn"
          onClick={onClose}
        >
          Cancel
        </button>

        <button
          type="button"
          className="done-btn"
          onClick={handleDone}
        >
          Done
        </button>

      </div>

    </div>
  );
}

export default TravellerSelector;
