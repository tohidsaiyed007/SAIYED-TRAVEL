// // import { useEffect, useState } from "react";
// // import "./FlightTable.css";

// // import {
// //   FaEye,
// //   FaEdit,
// //   FaTrash,
// //   FaPlane,
// // } from "react-icons/fa";

// // import EditFlight from "../EditFlight/EditFlight";
// // import DeleteFlight from "../DeleteFlight/DeleteFlight";
// // import FlightDetails from "../FlightDetails/FlightDetails";

// // function FlightTable() {

// //   // ==========================================
// //   // MODAL STATES
// //   // ==========================================

// //   const [showEditModal, setShowEditModal] =
// //     useState(false);

// //   const [showDeleteModal, setShowDeleteModal] =
// //     useState(false);

// //   const [showDetailsModal, setShowDetailsModal] =
// //     useState(false);


// //   // ==========================================
// //   // SELECTED FLIGHT
// //   // ==========================================

// //   const [selectedFlight, setSelectedFlight] =
// //     useState(null);


// //   // ==========================================
// //   // FLIGHTS
// //   // ==========================================

// //   const [flights, setFlights] =
// //     useState([]);

// //   const [loading, setLoading] =
// //     useState(true);

// //   const [error, setError] =
// //     useState("");


// //   // ==========================================
// //   // GET TOKEN
// //   // ==========================================

// //   const getToken = () => {

// //     return localStorage.getItem("token");

// //   };


// //   // ==========================================
// //   // FETCH FLIGHTS
// //   // ==========================================

// //   const fetchFlights = async () => {

// //     try {

// //       setLoading(true);

// //       setError("");


// //       const response = await fetch(
// //         "https://saiyed-travels-backend-1.onrender.com/api/flights"
// //       );


// //       const data =
// //         await response.json();


// //       if (!response.ok) {

// //         setError(
// //           data.message ||
// //           "Unable to load flights."
// //         );

// //         return;

// //       }


// //       /*
// //         Backend agar:
// //         { flights: [...] }
// //         bhejta hai
// //         ya directly [...]
// //         dono handle honge.
// //       */

// //       const flightList =
// //         Array.isArray(data)
// //           ? data
// //           : data.flights || [];


// //       setFlights(flightList);


// //     } catch (error) {

// //       console.error(
// //         "Fetch Flights Error:",
// //         error
// //       );


// //       setError(
// //         "Unable to connect to server."
// //       );


// //     } finally {

// //       setLoading(false);

// //     }

// //   };


// //   // ==========================================
// //   // LOAD FLIGHTS
// //   // ==========================================

// //   useEffect(() => {

// //     fetchFlights();

// //   }, []);


// //   // ==========================================
// //   // VIEW
// //   // ==========================================

// //   const handleView = (flight) => {

// //     setSelectedFlight(flight);

// //     setShowDetailsModal(true);

// //   };


// //   // ==========================================
// //   // EDIT
// //   // ==========================================

// //   const handleEdit = (flight) => {

// //     setSelectedFlight(flight);

// //     setShowEditModal(true);

// //   };


// //   // ==========================================
// //   // DELETE
// //   // ==========================================

// //   const handleDelete = (flight) => {

// //     setSelectedFlight(flight);

// //     setShowDeleteModal(true);

// //   };


// //   // ==========================================
// //   // DELETE SUCCESS
// //   // ==========================================

// //   const handleDeleteSuccess = (deletedId) => {

// //     setFlights((previousFlights) =>

// //       previousFlights.filter(
// //         (flight) =>
// //           flight._id !== deletedId
// //       )

// //     );

// //     setShowDeleteModal(false);

// //     setSelectedFlight(null);

// //   };


// //   // ==========================================
// //   // EDIT SUCCESS
// //   // ==========================================

// //   const handleEditSuccess = (updatedFlight) => {

// //     setFlights((previousFlights) =>

// //       previousFlights.map(
// //         (flight) =>

// //           flight._id ===
// //           updatedFlight._id

// //             ? updatedFlight

// //             : flight
// //       )

// //     );

// //     setShowEditModal(false);

// //     setSelectedFlight(null);

// //   };


// //   // ==========================================
// //   // FORMAT PRICE
// //   // ==========================================

// //   const formatPrice = (price) => {

// //     if (
// //       price === undefined ||
// //       price === null ||
// //       price === ""
// //     ) {

// //       return "—";

// //     }


// //     const numericPrice =
// //       Number(price);


// //     if (Number.isNaN(numericPrice)) {

// //       return price;

// //     }


// //     return `₹${numericPrice.toLocaleString(
// //       "en-IN"
// //     )}`;

// //   };


// //   // ==========================================
// //   // STATUS
// //   // ==========================================

// //   const getStatusClass = (status) => {

// //     return (
// //       status || "Scheduled"
// //     )
// //       .toLowerCase()
// //       .replace(/\s+/g, "-");

// //   };


// //   return (

// //     <section className="flight-table-card">


// //       {/* ======================================
// //                     HEADER
// //       ====================================== */}

// //       <div className="flight-table-header">

// //         <div>

// //           <h2>
// //             Flight List
// //           </h2>

// //           <p>
// //             Manage all flights added by admin
// //           </p>

// //         </div>


// //         <div className="flight-total">

// //           <FaPlane />

// //           <span>
// //             {flights.length} Flights
// //           </span>

// //         </div>

// //       </div>


// //       {/* ======================================
// //                     ERROR
// //       ====================================== */}

// //       {error && (

// //         <div className="flight-error">

// //           {error}

// //         </div>

// //       )}


// //       {/* ======================================
// //                     LOADING
// //       ====================================== */}

// //       {loading ? (

// //         <div className="flight-loading">

// //           <div className="flight-loader"></div>

// //           <p>
// //             Loading flights...
// //           </p>

// //         </div>

// //       ) : (


// //         /* ====================================
// //                     TABLE
// //         ==================================== */

// //         <div className="flight-table-responsive">

// //           <table>

// //             <thead>

// //               <tr>

// //                 <th>
// //                   #
// //                 </th>

// //                 <th>
// //                   Airline
// //                 </th>

// //                 <th>
// //                   Flight No
// //                 </th>

// //                 <th>
// //                   Route
// //                 </th>

// //                 <th>
// //                   Departure
// //                 </th>

// //                 <th>
// //                   Arrival
// //                 </th>

// //                 <th>
// //                   Duration
// //                 </th>

// //                 <th>
// //                   Seats
// //                 </th>

// //                 <th>
// //                   Price
// //                 </th>

// //                 <th>
// //                   Status
// //                 </th>

// //                 <th>
// //                   Action
// //                 </th>

// //               </tr>

// //             </thead>


// //             <tbody>

// //               {flights.length === 0 ? (

// //                 <tr>

// //                   <td
// //                     colSpan="11"
// //                     className="no-flights"
// //                   >

// //                     <div className="no-flights-content">

// //                       <FaPlane />

// //                       <h3>
// //                         No Flights Added
// //                       </h3>

// //                       <p>
// //                         Add a flight from the
// //                         "+ Add Flight" button.
// //                       </p>

// //                     </div>

// //                   </td>

// //                 </tr>

// //               ) : (

// //                 flights.map(
// //                   (flight, index) => (

// //                     <tr
// //                       key={flight._id}
// //                     >


// //                       {/* ID */}

// //                       <td>
// //                         #{index + 1}
// //                       </td>


// //                       {/* Airline */}

// //                       <td>

// //                         <strong>
// //                           {flight.airline ||
// //                             "—"}
// //                         </strong>

// //                       </td>


// //                       {/* Flight Number */}

// //                       <td>

// //                         <span className="flight-number">

// //                           {flight.flightNo ||
// //                             flight.flightNumber ||
// //                             "—"}

// //                         </span>

// //                       </td>


// //                       {/* Route */}

// //                       <td>

// //                         <span className="route">

// //                           {flight.from ||
// //                             "—"}

// //                           <span>
// //                             →
// //                           </span>

// //                           {flight.to ||
// //                             "—"}

// //                         </span>

// //                       </td>


// //                       {/* Departure */}

// //                       <td>

// //                         {flight.departure ||
// //                           flight.departureTime ||
// //                           "—"}

// //                       </td>


// //                       {/* Arrival */}

// //                       <td>

// //                         {flight.arrival ||
// //                           flight.arrivalTime ||
// //                           "—"}

// //                       </td>


// //                       {/* Duration */}

// //                       <td>

// //                         {flight.duration ||
// //                           "—"}

// //                       </td>


// //                       {/* Seats */}

// //                       <td>

// //                         {flight.seats ??
// //                           flight.availableSeats ??
// //                           "—"}

// //                       </td>


// //                       {/* Price */}

// //                       <td>

// //                         <strong className="flight-price">

// //                           {formatPrice(
// //                             flight.price
// //                           )}

// //                         </strong>

// //                       </td>


// //                       {/* Status */}

// //                       <td>

// //                         <span
// //                           className={`flight-status ${getStatusClass(
// //                             flight.status
// //                           )}`}
// //                         >

// //                           {flight.status ||
// //                             "Scheduled"}

// //                         </span>

// //                       </td>


// //                       {/* Actions */}

// //                       <td>

// //                         <div className="flight-actions">


// //                           {/* VIEW */}

// //                           <button
// //                             type="button"
// //                             className="view-btn"
// //                             title="View Flight"
// //                             onClick={() =>
// //                               handleView(
// //                                 flight
// //                               )
// //                             }
// //                           >

// //                             <FaEye />

// //                           </button>


// //                           {/* EDIT */}

// //                           <button
// //                             type="button"
// //                             className="edit-btn"
// //                             title="Edit Flight"
// //                             onClick={() =>
// //                               handleEdit(
// //                                 flight
// //                               )
// //                             }
// //                           >

// //                             <FaEdit />

// //                           </button>


// //                           {/* DELETE */}

// //                           <button
// //                             type="button"
// //                             className="delete-btn"
// //                             title="Delete Flight"
// //                             onClick={() =>
// //                               handleDelete(
// //                                 flight
// //                               )
// //                             }
// //                           >

// //                             <FaTrash />

// //                           </button>


// //                         </div>

// //                       </td>

// //                     </tr>

// //                   )

// //                 )

// //               )}

// //             </tbody>

// //           </table>

// //         </div>

// //       )}


// //       {/* ======================================
// //                     EDIT MODAL
// //       ====================================== */}

// //       {showEditModal &&
// //         selectedFlight && (

// //           <EditFlight

// //             flight={selectedFlight}

// //             closeModal={() => {

// //               setShowEditModal(false);

// //               setSelectedFlight(null);

// //             }}

// //             onSuccess={
// //               handleEditSuccess
// //             }

// //           />

// //         )}


// //       {/* ======================================
// //                     DELETE MODAL
// //       ====================================== */}

// //       {showDeleteModal &&
// //         selectedFlight && (

// //           <DeleteFlight

// //             flight={
// //               selectedFlight
// //             }

// //             flightName={
// //               selectedFlight.flightNo ||
// //               selectedFlight.flightNumber
// //             }

// //             closeModal={() => {

// //               setShowDeleteModal(false);

// //               setSelectedFlight(null);

// //             }}

// //             onSuccess={() =>
// //               handleDeleteSuccess(
// //                 selectedFlight._id
// //               )
// //             }

// //           />

// //         )}


// //       {/* ======================================
// //                     DETAILS MODAL
// //       ====================================== */}

// //       {showDetailsModal &&
// //         selectedFlight && (

// //           <FlightDetails

// //             flight={
// //               selectedFlight
// //             }

// //             closeModal={() => {

// //               setShowDetailsModal(false);

// //               setSelectedFlight(null);

// //             }}

// //           />

// //         )}

// //     </section>

// //   );

// // }

// // export default FlightTable;
























































































// import { useEffect, useState } from "react";
// import "./FlightTable.css";

// import {
//   FaEye,
//   FaEdit,
//   FaTrash,
//   FaPlane,
// } from "react-icons/fa";

// import EditFlight from "../EditFlight/EditFlight";
// import DeleteFlight from "../DeleteFlight/DeleteFlight";
// import FlightDetails from "../FlightDetails/FlightDetails";

// function FlightTable() {
//   // ==========================================
//   // MODAL STATES
//   // ==========================================

//   const [showEditModal, setShowEditModal] =
//     useState(false);

//   const [showDeleteModal, setShowDeleteModal] =
//     useState(false);

//   const [showDetailsModal, setShowDetailsModal] =
//     useState(false);

//   // ==========================================
//   // SELECTED FLIGHT
//   // ==========================================

//   const [selectedFlight, setSelectedFlight] =
//     useState(null);

//   // ==========================================
//   // FLIGHTS
//   // ==========================================

//   const [flights, setFlights] = useState([]);

//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState("");

//   // ==========================================
//   // FETCH FLIGHTS
//   // ==========================================

//   const fetchFlights = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await fetch(
//         "https://saiyed-travels-backend-1.onrender.com/api/flights"
//       );

//       const data = await response.json();

//       console.log("FLIGHTS FROM DATABASE:", data);

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Unable to load flights."
//         );
//       }

//       const flightList = Array.isArray(data)
//         ? data
//         : data.flights || [];

//       setFlights(flightList);
//     } catch (error) {
//       console.error(
//         "Fetch Flights Error:",
//         error
//       );

//       setError(
//         "Unable to connect to server."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // LOAD FLIGHTS
//   // ==========================================

//   useEffect(() => {
//     fetchFlights();
//   }, []);

//   // ==========================================
//   // VIEW
//   // ==========================================

//   const handleView = (flight) => {
//     setSelectedFlight(flight);
//     setShowDetailsModal(true);
//   };

//   // ==========================================
//   // EDIT
//   // ==========================================

//   const handleEdit = (flight) => {
//     setSelectedFlight(flight);
//     setShowEditModal(true);
//   };

//   // ==========================================
//   // DELETE
//   // ==========================================

//   const handleDelete = (flight) => {
//     setSelectedFlight(flight);
//     setShowDeleteModal(true);
//   };

//   // ==========================================
//   // EDIT SUCCESS
//   // ==========================================

//   const handleEditSuccess = (updatedFlight) => {
//     setFlights((previousFlights) =>
//       previousFlights.map((flight) =>
//         flight._id === updatedFlight._id
//           ? updatedFlight
//           : flight
//       )
//     );

//     setShowEditModal(false);
//     setSelectedFlight(null);
//   };

//   // ==========================================
//   // DELETE SUCCESS
//   // ==========================================

//   const handleDeleteSuccess = (deletedId) => {
//     setFlights((previousFlights) =>
//       previousFlights.filter(
//         (flight) =>
//           flight._id !== deletedId
//       )
//     );

//     setShowDeleteModal(false);
//     setSelectedFlight(null);
//   };

//   // ==========================================
//   // PRICE
//   // ==========================================

//   const formatPrice = (price) => {
//     if (
//       price === undefined ||
//       price === null ||
//       price === ""
//     ) {
//       return "—";
//     }

//     const numericPrice = Number(price);

//     if (Number.isNaN(numericPrice)) {
//       return price;
//     }

//     return `₹${numericPrice.toLocaleString(
//       "en-IN"
//     )}`;
//   };

//   // ==========================================
//   // GET SEAT INFORMATION
//   // ==========================================

//   const getSeats = (flight) => {
//     if (
//       !Array.isArray(flight.cabins) ||
//       flight.cabins.length === 0
//     ) {
//       return "—";
//     }

//     const totalSeats = flight.cabins.reduce(
//       (total, cabin) =>
//         total + Number(cabin.totalSeats || 0),
//       0
//     );

//     const availableSeats = flight.cabins.reduce(
//       (total, cabin) =>
//         total +
//         Number(cabin.availableSeats || 0),
//       0
//     );

//     return `${availableSeats}/${totalSeats}`;
//   };

//   // ==========================================
//   // GET PRICE
//   // ==========================================

//   const getFlightPrice = (flight) => {
//     if (
//       flight.finalPrice !== undefined &&
//       flight.finalPrice !== null
//     ) {
//       return flight.finalPrice;
//     }

//     // Backup: first cabin price
//     if (
//       Array.isArray(flight.cabins) &&
//       flight.cabins.length > 0
//     ) {
//       return flight.cabins[0].price;
//     }

//     return null;
//   };

//   // ==========================================
//   // STATUS CLASS
//   // ==========================================

//   const getStatusClass = (status) => {
//     return (status || "Scheduled")
//       .toLowerCase()
//       .replace(/\s+/g, "-");
//   };

//   // ==========================================
//   // ROUTE
//   // ==========================================

//   const getRoute = (flight) => {
//     const from =
//       flight.fromCity ||
//       flight.from ||
//       "—";

//     const to =
//       flight.toCity ||
//       flight.to ||
//       "—";

//     return {
//       from,
//       to,
//     };
//   };

//   // ==========================================
//   // DEPARTURE
//   // ==========================================

//   const getDeparture = (flight) => {
//     if (
//       flight.departureTime
//     ) {
//       return (
//         <>
//           <strong>
//             {flight.departureTime}
//           </strong>

//           {flight.departureDate && (
//             <small>
//               {flight.departureDate}
//             </small>
//           )}
//         </>
//       );
//     }

//     return flight.departure || "—";
//   };

//   // ==========================================
//   // ARRIVAL
//   // ==========================================

//   const getArrival = (flight) => {
//     if (
//       flight.arrivalTime
//     ) {
//       return (
//         <>
//           <strong>
//             {flight.arrivalTime}
//           </strong>

//           {flight.arrivalDate && (
//             <small>
//               {flight.arrivalDate}
//             </small>
//           )}
//         </>
//       );
//     }

//     return flight.arrival || "—";
//   };

//   // ==========================================
//   // RETURN UI
//   // ==========================================

//   return (
//     <section className="flight-table-card">

//       {/* ========================================
//           HEADER
//       ======================================== */}

//       <div className="flight-table-header">

//         <div>
//           <h2>
//             Flight List
//           </h2>

//           <p>
//             Manage all flights added by admin
//           </p>
//         </div>

//         <div className="flight-total">

//           <FaPlane />

//           <span>
//             {flights.length} Flights
//           </span>

//         </div>

//       </div>


//       {/* ========================================
//           ERROR
//       ======================================== */}

//       {error && (
//         <div className="flight-error">
//           {error}
//         </div>
//       )}


//       {/* ========================================
//           LOADING
//       ======================================== */}

//       {loading ? (

//         <div className="flight-loading">

//           <div className="flight-loader"></div>

//           <p>
//             Loading flights...
//           </p>

//         </div>

//       ) : (

//         <div className="flight-table-responsive">

//           <table>

//             <thead>

//               <tr>

//                 <th>#</th>

//                 <th>
//                   Airline
//                 </th>

//                 <th>
//                   Flight No
//                 </th>

//                 <th>
//                   Route
//                 </th>

//                 <th>
//                   Departure
//                 </th>

//                 <th>
//                   Arrival
//                 </th>

//                 <th>
//                   Duration
//                 </th>

//                 <th>
//                   Seats
//                 </th>

//                 <th>
//                   Price
//                 </th>

//                 <th>
//                   Status
//                 </th>

//                 <th>
//                   Action
//                 </th>

//               </tr>

//             </thead>


//             <tbody>

//               {flights.length === 0 ? (

//                 <tr>

//                   <td
//                     colSpan="11"
//                     className="no-flights"
//                   >

//                     <div className="no-flights-content">

//                       <FaPlane />

//                       <h3>
//                         No Flights Added
//                       </h3>

//                       <p>
//                         Add a flight from the
//                         "+ Add Flight" button.
//                       </p>

//                     </div>

//                   </td>

//                 </tr>

//               ) : (

//                 flights.map(
//                   (flight, index) => {

//                     const route =
//                       getRoute(flight);

//                     return (

//                       <tr
//                         key={flight._id}
//                       >

//                         {/* NUMBER */}

//                         <td>
//                           #{index + 1}
//                         </td>


//                         {/* AIRLINE */}

//                         <td>

//                           <strong>
//                             {flight.airline ||
//                               "—"}
//                           </strong>

//                         </td>


//                         {/* FLIGHT NUMBER */}

//                         <td>

//                           <span className="flight-number">

//                             {flight.flightNo ||
//                               "—"}

//                           </span>

//                         </td>


//                         {/* ROUTE */}

//                         <td>

//                           <span className="route">

//                             <strong>
//                               {route.from}
//                             </strong>

//                             <span>
//                               →
//                             </span>

//                             <strong>
//                               {route.to}
//                             </strong>

//                           </span>

//                           {flight.fromCode &&
//                             flight.toCode && (
//                               <small className="airport-code">
//                                 {flight.fromCode}
//                                 {" → "}
//                                 {flight.toCode}
//                               </small>
//                             )}

//                         </td>


//                         {/* DEPARTURE */}

//                         <td className="date-time-cell">

//                           {getDeparture(
//                             flight
//                           )}

//                         </td>


//                         {/* ARRIVAL */}

//                         <td className="date-time-cell">

//                           {getArrival(
//                             flight
//                           )}

//                         </td>


//                         {/* DURATION */}

//                         <td>

//                           {flight.duration ||
//                             "—"}

//                         </td>


//                         {/* SEATS */}

//                         <td>

//                           {getSeats(
//                             flight
//                           )}

//                         </td>


//                         {/* PRICE */}

//                         <td>

//                           <strong className="flight-price">

//                             {formatPrice(
//                               getFlightPrice(
//                                 flight
//                               )
//                             )}

//                           </strong>

//                         </td>


//                         {/* STATUS */}

//                         <td>

//                           <span
//                             className={`flight-status ${getStatusClass(
//                               flight.status
//                             )}`}
//                           >

//                             {flight.status ||
//                               "Scheduled"}

//                           </span>

//                         </td>


//                         {/* ACTIONS */}

//                         <td>

//                           <div className="flight-actions">

//                             {/* VIEW */}

//                             <button
//                               type="button"
//                               className="view-btn"
//                               title="View Flight"
//                               onClick={() =>
//                                 handleView(
//                                   flight
//                                 )
//                               }
//                             >
//                               <FaEye />
//                             </button>


//                             {/* EDIT */}

//                             <button
//                               type="button"
//                               className="edit-btn"
//                               title="Edit Flight"
//                               onClick={() =>
//                                 handleEdit(
//                                   flight
//                                 )
//                               }
//                             >
//                               <FaEdit />
//                             </button>


//                             {/* DELETE */}

//                             <button
//                               type="button"
//                               className="delete-btn"
//                               title="Delete Flight"
//                               onClick={() =>
//                                 handleDelete(
//                                   flight
//                                 )
//                               }
//                             >
//                               <FaTrash />
//                             </button>

//                           </div>

//                         </td>

//                       </tr>

//                     );
//                   }
//                 )

//               )}

//             </tbody>

//           </table>

//         </div>

//       )}


//       {/* ========================================
//           EDIT MODAL
//       ======================================== */}

//       {showEditModal &&
//         selectedFlight && (

//           <EditFlight
//             flight={selectedFlight}

//             closeModal={() => {
//               setShowEditModal(false);
//               setSelectedFlight(null);
//             }}

//             onSuccess={
//               handleEditSuccess
//             }
//           />

//         )}


//       {/* ========================================
//           DELETE MODAL
//       ======================================== */}

//       {showDeleteModal &&
//         selectedFlight && (

//           <DeleteFlight
//             flight={selectedFlight}

//             flightName={
//               selectedFlight.flightNo
//             }

//             closeModal={() => {
//               setShowDeleteModal(false);
//               setSelectedFlight(null);
//             }}

//             onSuccess={() =>
//               handleDeleteSuccess(
//                 selectedFlight._id
//               )
//             }

//           />

//         )}


//       {/* ========================================
//           DETAILS MODAL
//       ======================================== */}

//       {showDetailsModal &&
//         selectedFlight && (

//           <FlightDetails
//             flight={selectedFlight}

//             closeModal={() => {
//               setShowDetailsModal(false);
//               setSelectedFlight(null);
//             }}
//           />

//         )}

//     </section>
//   );
// }

// export default FlightTable;
























































import { useEffect, useState } from "react";
import "./FlightTable.css";

import {
  FaEye,
  FaEdit,
  FaTrash,
  FaPlane,
} from "react-icons/fa";

import EditFlight from "../EditFlight/EditFlight";
import DeleteFlight from "../DeleteFlight/DeleteFlight";
import FlightDetails from "../FlightDetails/FlightDetails";

function FlightTable() {
  // ==========================================
  // MODAL STATES
  // ==========================================

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [showDetailsModal, setShowDetailsModal] =
    useState(false);

  // ==========================================
  // SELECTED FLIGHT
  // ==========================================

  const [selectedFlight, setSelectedFlight] =
    useState(null);

  // ==========================================
  // FLIGHTS
  // ==========================================

  const [flights, setFlights] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // ==========================================
  // GET CURRENT USER ROLE
  // ==========================================

  const getUserRole = () => {
    try {
      const possibleKeys = [
        "user",
        "currentUser",
        "loggedInUser",
        "authUser",
      ];

      for (const key of possibleKeys) {
        const value =
          localStorage.getItem(key);

        if (!value) continue;

        try {
          const parsed =
            JSON.parse(value);

          if (
            parsed?.role
          ) {
            return String(
              parsed.role
            ).toLowerCase();
          }

          if (
            parsed?.user?.role
          ) {
            return String(
              parsed.user.role
            ).toLowerCase();
          }

          if (
            parsed?.accountType
          ) {
            return String(
              parsed.accountType
            ).toLowerCase();
          }
        } catch {
          const role =
            String(value).toLowerCase();

          if (
            role === "agent" ||
            role === "customer" ||
            role === "admin"
          ) {
            return role;
          }
        }
      }

      const directRoleKeys = [
        "role",
        "userRole",
        "accountType",
      ];

      for (const key of directRoleKeys) {
        const value =
          localStorage.getItem(key);

        if (!value) continue;

        const role =
          String(value).toLowerCase();

        if (
          role === "agent" ||
          role === "customer" ||
          role === "admin"
        ) {
          return role;
        }
      }
    } catch (error) {
      console.error(
        "GET USER ROLE ERROR:",
        error
      );
    }

    // Default customer.
    return "customer";
  };

  // ==========================================
  // FETCH FLIGHTS
  // ==========================================

  const fetchFlights = async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await fetch(
          "https://saiyed-travels-backend-1.onrender.com/api/flights"
        );

      const data =
        await response.json();

      console.log(
        "FLIGHTS FROM DATABASE:",
        data
      );

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to load flights."
        );
      }

      const flightList =
        Array.isArray(data)
          ? data
          : data.flights || [];

      setFlights(flightList);
    } catch (error) {
      console.error(
        "Fetch Flights Error:",
        error
      );

      setError(
        "Unable to connect to server."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // LOAD FLIGHTS
  // ==========================================

  useEffect(() => {
    fetchFlights();
  }, []);

  // ==========================================
  // VIEW
  // ==========================================

  const handleView = (flight) => {
    setSelectedFlight(flight);
    setShowDetailsModal(true);
  };

  // ==========================================
  // EDIT
  // ==========================================

  const handleEdit = (flight) => {
    setSelectedFlight(flight);
    setShowEditModal(true);
  };

  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = (flight) => {
    setSelectedFlight(flight);
    setShowDeleteModal(true);
  };

  // ==========================================
  // EDIT SUCCESS
  // ==========================================

  const handleEditSuccess = (
    updatedFlight
  ) => {
    setFlights(
      (previousFlights) =>
        previousFlights.map(
          (flight) =>
            flight._id ===
            updatedFlight._id
              ? updatedFlight
              : flight
        )
    );

    setShowEditModal(false);
    setSelectedFlight(null);
  };

  // ==========================================
  // DELETE SUCCESS
  // ==========================================

  const handleDeleteSuccess = (
    deletedId
  ) => {
    setFlights(
      (previousFlights) =>
        previousFlights.filter(
          (flight) =>
            flight._id !==
            deletedId
        )
    );

    setShowDeleteModal(false);
    setSelectedFlight(null);
  };

  // ==========================================
  // PRICE FORMAT
  // ==========================================

  const formatPrice = (price) => {
    if (
      price === undefined ||
      price === null ||
      price === ""
    ) {
      return "—";
    }

    const numericPrice =
      Number(price);

    if (
      Number.isNaN(
        numericPrice
      )
    ) {
      return price;
    }

    return `₹${numericPrice.toLocaleString(
      "en-IN"
    )}`;
  };

  // ==========================================
  // GET ROLE BASED PRICE
  // ==========================================

  const getFlightPrice = (
    flight
  ) => {
    const role =
      getUserRole();

    console.log(
      "FLIGHT PRICE ROLE:",
      role,
      flight.flightNo
    );

    // ========================================
    // AGENT
    // ========================================

    if (
      role === "agent"
    ) {
      if (
        flight.agentAdultFare !==
          undefined &&
        flight.agentAdultFare !==
          null &&
        flight.agentAdultFare !==
          ""
      ) {
        return flight.agentAdultFare;
      }

      // Agent fare not available.
      // Do NOT show customer fare.
      return null;
    }

    // ========================================
    // CUSTOMER
    // ========================================

    if (
      flight.adultFare !==
        undefined &&
      flight.adultFare !==
        null &&
      flight.adultFare !==
        ""
    ) {
      return flight.adultFare;
    }

    // ========================================
    // ADMIN / FALLBACK
    // ========================================

    if (
      role === "admin"
    ) {
      if (
        flight.adultFare !==
          undefined &&
        flight.adultFare !==
          null &&
        flight.adultFare !==
          ""
      ) {
        return flight.adultFare;
      }
    }

    return null;
  };

  // ==========================================
  // GET SEAT INFORMATION
  // ==========================================

  const getSeats = (
    flight
  ) => {
    if (
      !Array.isArray(
        flight.cabins
      ) ||
      flight.cabins.length === 0
    ) {
      return "—";
    }

    const totalSeats =
      flight.cabins.reduce(
        (
          total,
          cabin
        ) =>
          total +
          Number(
            cabin.totalSeats ||
              0
          ),
        0
      );

    const availableSeats =
      flight.cabins.reduce(
        (
          total,
          cabin
        ) =>
          total +
          Number(
            cabin.availableSeats ||
              0
          ),
        0
      );

    return `${availableSeats}/${totalSeats}`;
  };

  // ==========================================
  // STATUS CLASS
  // ==========================================

  const getStatusClass = (
    status
  ) => {
    return (
      status ||
      "Scheduled"
    )
      .toLowerCase()
      .replace(
        /\s+/g,
        "-"
      );
  };

  // ==========================================
  // ROUTE
  // ==========================================

  const getRoute = (
    flight
  ) => {
    const from =
      flight.fromCity ||
      flight.from ||
      "—";

    const to =
      flight.toCity ||
      flight.to ||
      "—";

    return {
      from,
      to,
    };
  };

  // ==========================================
  // DEPARTURE
  // ==========================================

  const getDeparture = (
    flight
  ) => {
    if (
      flight.departureTime
    ) {
      return (
        <>
          <strong>
            {
              flight.departureTime
            }
          </strong>

          {flight.departureDate && (
            <small>
              {
                flight.departureDate
              }
            </small>
          )}
        </>
      );
    }

    return (
      flight.departure ||
      "—"
    );
  };

  // ==========================================
  // ARRIVAL
  // ==========================================

  const getArrival = (
    flight
  ) => {
    if (
      flight.arrivalTime
    ) {
      return (
        <>
          <strong>
            {
              flight.arrivalTime
            }
          </strong>

          {flight.arrivalDate && (
            <small>
              {
                flight.arrivalDate
              }
            </small>
          )}
        </>
      );
    }

    return (
      flight.arrival ||
      "—"
    );
  };

  // ==========================================
  // RETURN UI
  // ==========================================

  return (
    <section className="flight-table-card">

      {/* HEADER */}

      <div className="flight-table-header">

        <div>
          <h2>
            Flight List
          </h2>

          <p>
            Manage all flights added by admin
          </p>
        </div>

        <div className="flight-total">

          <FaPlane />

          <span>
            {flights.length} Flights
          </span>

        </div>

      </div>

      {/* ERROR */}

      {error && (
        <div className="flight-error">
          {error}
        </div>
      )}

      {/* LOADING */}

      {loading ? (

        <div className="flight-loading">

          <div className="flight-loader"></div>

          <p>
            Loading flights...
          </p>

        </div>

      ) : (

        <div className="flight-table-responsive">

          <table>

            <thead>

              <tr>

                <th>
                  #
                </th>

                <th>
                  Airline
                </th>

                <th>
                  Flight No
                </th>

                <th>
                  Route
                </th>

                <th>
                  Departure
                </th>

                <th>
                  Arrival
                </th>

                <th>
                  Duration
                </th>

                <th>
                  Seats
                </th>

                <th>
                  Price
                </th>

                <th>
                  Status
                </th>

                <th>
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {flights.length === 0 ? (

                <tr>

                  <td
                    colSpan="11"
                    className="no-flights"
                  >

                    <div className="no-flights-content">

                      <FaPlane />

                      <h3>
                        No Flights Added
                      </h3>

                      <p>
                        Add a flight from the
                        "+ Add Flight" button.
                      </p>

                    </div>

                  </td>

                </tr>

              ) : (

                flights.map(
                  (
                    flight,
                    index
                  ) => {

                    const route =
                      getRoute(
                        flight
                      );

                    const price =
                      getFlightPrice(
                        flight
                      );

                    return (

                      <tr
                        key={
                          flight._id
                        }
                      >

                        {/* NUMBER */}

                        <td>
                          #{index + 1}
                        </td>

                        {/* AIRLINE */}

                        <td>

                          <strong>
                            {
                              flight.airline ||
                              "—"
                            }
                          </strong>

                        </td>

                        {/* FLIGHT NUMBER */}

                        <td>

                          <span className="flight-number">

                            {
                              flight.flightNo ||
                              "—"
                            }

                          </span>

                        </td>

                        {/* ROUTE */}

                        <td>

                          <span className="route">

                            <strong>
                              {
                                route.from
                              }
                            </strong>

                            <span>
                              →
                            </span>

                            <strong>
                              {
                                route.to
                              }
                            </strong>

                          </span>

                          {flight.fromCode &&
                            flight.toCode && (
                              <small className="airport-code">

                                {
                                  flight.fromCode
                                }

                                {" → "}

                                {
                                  flight.toCode
                                }

                              </small>
                            )}

                        </td>

                        {/* DEPARTURE */}

                        <td className="date-time-cell">

                          {
                            getDeparture(
                              flight
                            )
                          }

                        </td>

                        {/* ARRIVAL */}

                        <td className="date-time-cell">

                          {
                            getArrival(
                              flight
                            )
                          }

                        </td>

                        {/* DURATION */}

                        <td>

                          {
                            flight.duration ||
                            "—"
                          }

                        </td>

                        {/* SEATS */}

                        <td>

                          {
                            getSeats(
                              flight
                            )
                          }

                        </td>

                        {/* PRICE */}

                        <td>

                          <strong className="flight-price">

                            {formatPrice(
                              price
                            )}

                          </strong>

                        </td>

                        {/* STATUS */}

                        <td>

                          <span
                            className={`flight-status ${getStatusClass(
                              flight.status
                            )}`}
                          >

                            {
                              flight.status ||
                              "Scheduled"
                            }

                          </span>

                        </td>

                        {/* ACTIONS */}

                        <td>

                          <div className="flight-actions">

                            {/* VIEW */}

                            <button
                              type="button"
                              className="view-btn"
                              title="View Flight"
                              onClick={() =>
                                handleView(
                                  flight
                                )
                              }
                            >
                              <FaEye />
                            </button>

                            {/* EDIT */}

                            <button
                              type="button"
                              className="edit-btn"
                              title="Edit Flight"
                              onClick={() =>
                                handleEdit(
                                  flight
                                )
                              }
                            >
                              <FaEdit />
                            </button>

                            {/* DELETE */}

                            <button
                              type="button"
                              className="delete-btn"
                              title="Delete Flight"
                              onClick={() =>
                                handleDelete(
                                  flight
                                )
                              }
                            >
                              <FaTrash />
                            </button>

                          </div>

                        </td>

                      </tr>

                    );
                  }
                )

              )}

            </tbody>

          </table>

        </div>

      )}

      {/* EDIT MODAL */}

      {showEditModal &&
        selectedFlight && (

          <EditFlight
            flight={
              selectedFlight
            }

            closeModal={() => {
              setShowEditModal(
                false
              );

              setSelectedFlight(
                null
              );
            }}

            onSuccess={
              handleEditSuccess
            }
          />

        )}

      {/* DELETE MODAL */}

      {showDeleteModal &&
        selectedFlight && (

          <DeleteFlight
            flight={
              selectedFlight
            }

            flightName={
              selectedFlight.flightNo
            }

            closeModal={() => {
              setShowDeleteModal(
                false
              );

              setSelectedFlight(
                null
              );
            }}

            onSuccess={() =>
              handleDeleteSuccess(
                selectedFlight._id
              )
            }
          />

        )}

      {/* DETAILS MODAL */}

      {showDetailsModal &&
        selectedFlight && (

          <FlightDetails
            flight={
              selectedFlight
            }

            closeModal={() => {
              setShowDetailsModal(
                false
              );

              setSelectedFlight(
                null
              );
            }}
          />

        )}

    </section>
  );
}

export default FlightTable;