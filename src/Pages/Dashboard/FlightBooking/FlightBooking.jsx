
// import "./FlightBooking.css";

// import { useState } from "react";

// import SearchFlight from "../SearchFlight/SearchFlight";
// import FlightTable from "../FlightTable/FlightTable";
// import AddFlight from "../AddFlight/AddFlight";

// function FlightBooking() {

//   const [showModal, setShowModal] = useState(false);

//   return (

//     <section className="flight-booking-page">

//       {/* Header */}

//       <div className="flight-booking-header">

//         <div>

//           <h1>Flight Management</h1>

//           <p>
//             Manage domestic and international flights from one place.
//           </p>

//         </div>

//         <button
//           className="add-flight-btn"
//           onClick={() => setShowModal(true)}
//         >
//           + Add Flight
//         </button>

//       </div>

//       {/* Search */}

//       <SearchFlight />

//       {/* Table */}

//       <FlightTable />

//       {/* Modal */}

//       {showModal && (

//         <AddFlight
//           closeModal={() => setShowModal(false)}
//         />

//       )}

//     </section>

//   );

// }

// export default FlightBooking;



import "./FlightBooking.css";
import { useState } from "react";

import SearchFlight from "../SearchFlight/SearchFlight";
import FlightTable from "../FlightTable/FlightTable";
import AddFlight from "../AddFlight/AddFlight";

function FlightBooking() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="flight-booking-page">

      {/* HEADER */}
      <div className="flight-booking-header">

        <div className="flight-booking-heading">
          <h1>Flight Management</h1>

          <p>
            Manage domestic and international flights from one place.
          </p>
        </div>

        <button
          type="button"
          className="add-flight-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Flight
        </button>

      </div>


      {/* SEARCH */}
      <SearchFlight />


      {/* FLIGHT TABLE */}
      <FlightTable />


      {/* ADD FLIGHT MODAL */}
      {showModal && (
        <AddFlight
          closeModal={() => setShowModal(false)}
        />
      )}

    </section>
  );
}

export default FlightBooking;