// // import "./TravellerSelector.css";
// // import { useState } from "react";

// // function TravellerSelector({ onClose }) {

// //   const [adults, setAdults] = useState(1);
// //   const [children, setChildren] = useState(0);
// //   const [infants, setInfants] = useState(0);
// //   const [cabin, setCabin] = useState("Economy");

// //   return (
// //     <div className="traveller-popup">

// //       <h2>Travellers & Cabin Class</h2>

// //       <div className="traveller-row">

// //         <span>Adults</span>

// //         <div className="counter">

// //           <button
// //             onClick={() => adults > 1 && setAdults(adults - 1)}
// //           >
// //             -
// //           </button>

// //           <strong>{adults}</strong>

// //           <button
// //             onClick={() => setAdults(adults + 1)}
// //           >
// //             +
// //           </button>

// //         </div>

// //       </div>

// //       <div className="traveller-row">

// //         <span>Children</span>

// //         <div className="counter">

// //           <button
// //             onClick={() => children > 0 && setChildren(children - 1)}
// //           >
// //             -
// //           </button>

// //           <strong>{children}</strong>

// //           <button
// //             onClick={() => setChildren(children + 1)}
// //           >
// //             +
// //           </button>

// //         </div>

// //       </div>

// //       <div className="traveller-row">

// //         <span>Infants</span>

// //         <div className="counter">

// //           <button
// //             onClick={() => infants > 0 && setInfants(infants - 1)}
// //           >
// //             -
// //           </button>

// //           <strong>{infants}</strong>

// //           <button
// //             onClick={() => setInfants(infants + 1)}
// //           >
// //             +
// //           </button>

// //         </div>

// //       </div>

// //       <div className="cabin-section">

// //         <h3>Cabin Class</h3>

// //         <select
// //           value={cabin}
// //           onChange={(e) => setCabin(e.target.value)}
// //         >

// //           <option>Economy</option>

// //           <option>Premium Economy</option>

// //           <option>Business</option>

// //           <option>First Class</option>

// //         </select>

// //       </div>

// //       <button
// //         className="done-btn"
// //         onClick={onClose}
// //       >
// //         Done
// //       </button>

// //     </div>
// //   );
// // }

// // export default TravellerSelector;











// import "./TravellerSelector.css";
// import { useState } from "react";

// function TravellerSelector({
//   travellers,
//   onDone,
//   onClose,
// }) {

//   const [adults, setAdults] = useState(travellers.adults);
//   const [children, setChildren] = useState(travellers.children);
//   const [infants, setInfants] = useState(travellers.infants);
//   const [cabin, setCabin] = useState(travellers.cabin);

//   const handleDone = () => {
//     onDone({
//       adults,
//       children,
//       infants,
//       cabin,
//     });
//   };

//   return (
//     <div className="traveller-popup">

//       <h2>Travellers & Cabin Class</h2>

//       {/* Adults */}

//       <div className="traveller-row">

//         <span>Adults</span>

//         <div className="counter">

//           <button
//             type="button"
//             onClick={() => adults > 1 && setAdults(adults - 1)}
//           >
//             -
//           </button>

//           <strong>{adults}</strong>

//           <button
//             type="button"
//             onClick={() => setAdults(adults + 1)}
//           >
//             +
//           </button>

//         </div>

//       </div>

//       {/* Children */}

//       <div className="traveller-row">

//         <span>Children</span>

//         <div className="counter">

//           <button
//             type="button"
//             onClick={() => children > 0 && setChildren(children - 1)}
//           >
//             -
//           </button>

//           <strong>{children}</strong>

//           <button
//             type="button"
//             onClick={() => setChildren(children + 1)}
//           >
//             +
//           </button>

//         </div>

//       </div>

//       {/* Infants */}

//       <div className="traveller-row">

//         <span>Infants</span>

//         <div className="counter">

//           <button
//             type="button"
//             onClick={() => infants > 0 && setInfants(infants - 1)}
//           >
//             -
//           </button>

//           <strong>{infants}</strong>

//           <button
//             type="button"
//             onClick={() => setInfants(infants + 1)}
//           >
//             +
//           </button>

//         </div>

//       </div>

//       {/* Cabin */}

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

//       {/* Buttons */}

//       <div className="traveller-buttons">

//         <button
//           type="button"
//           className="cancel-btn"
//           onClick={onClose}
//         >
//           Cancel
//         </button>

//         <button
//           type="button"
//           className="done-btn"
//           onClick={handleDone}
//         >
//           Done
//         </button>

//       </div>

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
  const [adults, setAdults] = useState(
    Number(travellers?.adults) || 1
  );

  const [children, setChildren] = useState(
    Number(travellers?.children) || 0
  );

  const [infants, setInfants] = useState(
    Number(travellers?.infants) || 0
  );

  const [cabin, setCabin] = useState(
    travellers?.cabin || "Economy"
  );

  // =====================================================
  // LIMITS
  // =====================================================

  const MAX_ADULTS = 9;
  const MAX_CHILDREN = 9;

  // Normally one infant per adult
  const maxInfants = adults;

  // Total passengers
  const totalPassengers =
    adults +
    children +
    infants;

  const MAX_TOTAL_PASSENGERS = 9;


  // =====================================================
  // ADULT
  // =====================================================

  const decreaseAdult = () => {
    if (adults <= 1) return;

    const newAdults = adults - 1;

    setAdults(newAdults);

    // Agar infants adults se zyada ho rahe hain
    // to infants ko automatically reduce karenge.
    if (infants > newAdults) {
      setInfants(newAdults);
    }
  };


  const increaseAdult = () => {
    if (adults >= MAX_ADULTS) return;

    if (
      adults +
        children +
        infants >=
      MAX_TOTAL_PASSENGERS
    ) {
      return;
    }

    setAdults(adults + 1);
  };


  // =====================================================
  // CHILD
  // =====================================================

  const decreaseChild = () => {
    if (children <= 0) return;

    setChildren(
      children - 1
    );
  };


  const increaseChild = () => {
    if (children >= MAX_CHILDREN) return;

    if (
      adults +
        children +
        infants >=
      MAX_TOTAL_PASSENGERS
    ) {
      return;
    }

    setChildren(
      children + 1
    );
  };


  // =====================================================
  // INFANT
  // =====================================================

  const decreaseInfant = () => {
    if (infants <= 0) return;

    setInfants(
      infants - 1
    );
  };


  const increaseInfant = () => {
    // One infant per adult
    if (infants >= maxInfants) {
      return;
    }

    if (
      adults +
        children +
        infants >=
      MAX_TOTAL_PASSENGERS
    ) {
      return;
    }

    setInfants(
      infants + 1
    );
  };


  // =====================================================
  // DONE
  // =====================================================

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

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="traveller-header">

        <div>
          <h2>
            Travellers & Cabin Class
          </h2>

          <p>
            Select passengers for your flight
          </p>
        </div>

      </div>


      {/* =================================================
          ADULTS
      ================================================= */}

      <div className="traveller-row">

        <div className="traveller-info">

          <strong>
            Adults
          </strong>

          <small>
            12+ years
          </small>

        </div>


        <div className="counter">

          <button
            type="button"
            onClick={
              decreaseAdult
            }
            disabled={
              adults <= 1
            }
          >
            −
          </button>

          <strong>
            {adults}
          </strong>

          <button
            type="button"
            onClick={
              increaseAdult
            }
            disabled={
              adults >=
                MAX_ADULTS ||
              totalPassengers >=
                MAX_TOTAL_PASSENGERS
            }
          >
            +
          </button>

        </div>

      </div>


      {/* =================================================
          CHILDREN
      ================================================= */}

      <div className="traveller-row">

        <div className="traveller-info">

          <strong>
            Children
          </strong>

          <small>
            2–11 years
          </small>

        </div>


        <div className="counter">

          <button
            type="button"
            onClick={
              decreaseChild
            }
            disabled={
              children <= 0
            }
          >
            −
          </button>

          <strong>
            {children}
          </strong>

          <button
            type="button"
            onClick={
              increaseChild
            }
            disabled={
              children >=
                MAX_CHILDREN ||
              totalPassengers >=
                MAX_TOTAL_PASSENGERS
            }
          >
            +
          </button>

        </div>

      </div>


      {/* =================================================
          INFANTS
      ================================================= */}

      <div className="traveller-row">

        <div className="traveller-info">

          <strong>
            Infants
          </strong>

          <small>
            Under 2 years
          </small>

        </div>


        <div className="counter">

          <button
            type="button"
            onClick={
              decreaseInfant
            }
            disabled={
              infants <= 0
            }
          >
            −
          </button>

          <strong>
            {infants}
          </strong>

          <button
            type="button"
            onClick={
              increaseInfant
            }
            disabled={
              infants >=
                maxInfants ||
              totalPassengers >=
                MAX_TOTAL_PASSENGERS
            }
          >
            +
          </button>

        </div>

      </div>


      {/* =================================================
          INFO
      ================================================= */}

      <div className="traveller-note">

        <span>
          Total Travellers
        </span>

        <strong>
          {totalPassengers}
        </strong>

      </div>


      <div className="traveller-note infant-note">

        <span>
          Infants allowed
        </span>

        <strong>
          {maxInfants}
        </strong>

      </div>


      {/* =================================================
          CABIN
      ================================================= */}

      <div className="cabin-section">

        <h3>
          Cabin Class
        </h3>

        <select
          value={cabin}
          onChange={(e) =>
            setCabin(
              e.target.value
            )
          }
        >

          <option value="Economy">
            Economy
          </option>

          <option value="Premium Economy">
            Premium Economy
          </option>

          <option value="Business">
            Business
          </option>

          <option value="First Class">
            First Class
          </option>

        </select>

      </div>


      {/* =================================================
          BUTTONS
      ================================================= */}

      <div className="traveller-buttons">

        <button
          type="button"
          className="cancel-btn"
          onClick={
            onClose
          }
        >
          Cancel
        </button>


        <button
          type="button"
          className="done-btn"
          onClick={
            handleDone
          }
        >
          Done
        </button>

      </div>

    </div>
  );
}

export default TravellerSelector;