
// // // // import "./FlightSearch.css";

// // // // import { useState, useEffect, useRef } from "react";
// // // // import { useNavigate } from "react-router-dom";

// // // // import DatePicker from "react-datepicker";
// // // // import "react-datepicker/dist/react-datepicker.css";

// // // // import CitySelector from "../CitySelector/CitySelector";
// // // // import TravellerSelector from "../TravellerSelector/TravellerSelector";

// // // // import {
// // // //   FaPlaneDeparture,
// // // //   FaPlaneArrival,
// // // //   FaExchangeAlt,
// // // //   FaCalendarAlt,
// // // //   FaUserFriends,
// // // //   FaSearch,
// // // // } from "react-icons/fa";

// // // // function FlightSearch() {
// // // //   const navigate = useNavigate();

// // // //   // ==========================================
// // // //   // FROM / TO
// // // //   // ==========================================

// // // //   const [from, setFrom] = useState("");
// // // //   const [to, setTo] = useState("");

// // // //   // ==========================================
// // // //   // DATE
// // // //   // ==========================================

// // // //   const [departureDate, setDepartureDate] =
// // // //     useState(null);

// // // //   // ==========================================
// // // //   // AVAILABLE DATES
// // // //   // ==========================================

// // // //   const [availableDates, setAvailableDates] =
// // // //     useState([]);

// // // //   const [loadingDates, setLoadingDates] =
// // // //     useState(false);

// // // //   // ==========================================
// // // //   // POPUPS
// // // //   // ==========================================

// // // //   const [showFromSelector, setShowFromSelector] =
// // // //     useState(false);

// // // //   const [showToSelector, setShowToSelector] =
// // // //     useState(false);

// // // //   const [showTraveller, setShowTraveller] =
// // // //     useState(false);

// // // //   // ==========================================
// // // //   // TRAVELLERS
// // // //   // ==========================================

// // // //   const [travellers, setTravellers] =
// // // //     useState({
// // // //       adults: 1,
// // // //       children: 0,
// // // //       infants: 0,
// // // //       cabin: "Economy",
// // // //     });

// // // //   // ==========================================
// // // //   // REFS
// // // //   // ==========================================

// // // //   const fromRef = useRef(null);
// // // //   const toRef = useRef(null);

// // // //   // ==========================================
// // // //   // NORMALIZE CITY
// // // //   // ==========================================

// // // //   const normalizeCity = (value) => {
// // // //     if (!value) {
// // // //       return "";
// // // //     }

// // // //     return String(value)
// // // //       .trim()
// // // //       .toLowerCase();
// // // //   };

// // // //   // ==========================================
// // // //   // DATE STRING
// // // //   // ==========================================

// // // //   const formatDateForSearch = (date) => {
// // // //     if (!date) {
// // // //       return "";
// // // //     }

// // // //     const year =
// // // //       date.getFullYear();

// // // //     const month =
// // // //       String(
// // // //         date.getMonth() + 1
// // // //       ).padStart(2, "0");

// // // //     const day =
// // // //       String(
// // // //         date.getDate()
// // // //       ).padStart(2, "0");

// // // //     return `${year}-${month}-${day}`;
// // // //   };

// // // //   // ==========================================
// // // //   // STRING DATE → DATE OBJECT
// // // //   // ==========================================

// // // //   const convertToDateObject = (
// // // //     dateString
// // // //   ) => {
// // // //     if (!dateString) {
// // // //       return null;
// // // //     }

// // // //     const parts =
// // // //       String(dateString).split("-");

// // // //     if (parts.length !== 3) {
// // // //       return null;
// // // //     }

// // // //     const year =
// // // //       Number(parts[0]);

// // // //     const month =
// // // //       Number(parts[1]) - 1;

// // // //     const day =
// // // //       Number(parts[2]);

// // // //     const date = new Date(
// // // //       year,
// // // //       month,
// // // //       day
// // // //     );

// // // //     date.setHours(
// // // //       0,
// // // //       0,
// // // //       0,
// // // //       0
// // // //     );

// // // //     return date;
// // // //   };

// // // //   // ==========================================
// // // //   // FETCH AVAILABLE DATES
// // // //   //
// // // //   // When From + To changes,
// // // //   // automatically find all flights
// // // //   // for that route.
// // // //   // ==========================================

// // // //   useEffect(() => {
// // // //     const fetchAvailableDates = async () => {
// // // //       // --------------------------------------
// // // //       // Both cities required
// // // //       // --------------------------------------

// // // //       if (!from || !to) {
// // // //         setAvailableDates([]);

// // // //         setDepartureDate(null);

// // // //         return;
// // // //       }

// // // //       // --------------------------------------
// // // //       // Same city protection
// // // //       // --------------------------------------

// // // //       if (
// // // //         normalizeCity(from) ===
// // // //         normalizeCity(to)
// // // //       ) {
// // // //         setAvailableDates([]);

// // // //         setDepartureDate(null);

// // // //         return;
// // // //       }

// // // //       try {
// // // //         setLoadingDates(true);

// // // //         console.log(
// // // //           "Checking available dates:"
// // // //         );

// // // //         console.log(
// // // //           "From:",
// // // //           from
// // // //         );

// // // //         console.log(
// // // //           "To:",
// // // //           to
// // // //         );

// // // //         // ------------------------------------
// // // //         // GET ALL FLIGHTS
// // // //         // ------------------------------------

// // // //         const response =
// // // //           await fetch(
// // // //             "http://localhost:5000/api/flights"
// // // //           );

// // // //         const data =
// // // //           await response.json();

// // // //         if (!response.ok) {
// // // //           throw new Error(
// // // //             data.message ||
// // // //             "Unable to load flights."
// // // //           );
// // // //         }

// // // //         const flights =
// // // //           Array.isArray(
// // // //             data.flights
// // // //           )
// // // //             ? data.flights
// // // //             : [];

// // // //         // ------------------------------------
// // // //         // FILTER ROUTE
// // // //         // ------------------------------------

// // // //         const routeFlights =
// // // //           flights.filter(
// // // //             (flight) => {

// // // //               const flightFrom =
// // // //                 normalizeCity(
// // // //                   flight.fromCity
// // // //                 );

// // // //               const flightTo =
// // // //                 normalizeCity(
// // // //                   flight.toCity
// // // //                 );

// // // //               return (
// // // //                 flightFrom ===
// // // //                 normalizeCity(from) &&
// // // //                 flightTo ===
// // // //                 normalizeCity(to)
// // // //               );
// // // //             }
// // // //           );

// // // //         console.log(
// // // //           "Route flights:",
// // // //           routeFlights
// // // //         );

// // // //         // ------------------------------------
// // // //         // GET UNIQUE DATES
// // // //         // ------------------------------------

// // // //         const uniqueDateStrings =
// // // //           [
// // // //             ...new Set(
// // // //               routeFlights
// // // //                 .map(
// // // //                   (flight) =>
// // // //                     flight.departureDate
// // // //                 )
// // // //                 .filter(Boolean)
// // // //                 .map(
// // // //                   (date) =>
// // // //                     String(date).trim()
// // // //                 )
// // // //             ),
// // // //           ].sort();

// // // //         console.log(
// // // //           "Available dates:",
// // // //           uniqueDateStrings
// // // //         );

// // // //         // ------------------------------------
// // // //         // CONVERT TO DATE OBJECTS
// // // //         // ------------------------------------

// // // //         const dateObjects =
// // // //           uniqueDateStrings
// // // //             .map(
// // // //               convertToDateObject
// // // //             )
// // // //             .filter(Boolean);

// // // //         setAvailableDates(
// // // //           dateObjects
// // // //         );

// // // //         // ------------------------------------
// // // //         // RESET OLD DATE
// // // //         // ------------------------------------

// // // //         setDepartureDate(
// // // //           null
// // // //         );

// // // //       } catch (error) {
// // // //         console.error(
// // // //           "Available Dates Error:",
// // // //           error
// // // //         );

// // // //         setAvailableDates([]);

// // // //         setDepartureDate(null);
// // // //       } finally {
// // // //         setLoadingDates(false);
// // // //       }
// // // //     };

// // // //     fetchAvailableDates();

// // // //   }, [from, to]);

// // // //   // ==========================================
// // // //   // SEARCH
// // // //   // ==========================================

// // // //   const handleSearch = () => {
// // // //     const cleanFrom =
// // // //       from.trim();

// // // //     const cleanTo =
// // // //       to.trim();

// // // //     // ----------------------------------------
// // // //     // FROM / TO
// // // //     // ----------------------------------------

// // // //     if (
// // // //       !cleanFrom ||
// // // //       !cleanTo
// // // //     ) {
// // // //       alert(
// // // //         "Please select departure and destination."
// // // //       );

// // // //       return;
// // // //     }

// // // //     // ----------------------------------------
// // // //     // SAME CITY
// // // //     // ----------------------------------------

// // // //     if (
// // // //       normalizeCity(cleanFrom) ===
// // // //       normalizeCity(cleanTo)
// // // //     ) {
// // // //       alert(
// // // //         "Departure and Destination cannot be the same."
// // // //       );

// // // //       return;
// // // //     }

// // // //     // ----------------------------------------
// // // //     // NO AVAILABLE DATE
// // // //     // ----------------------------------------

// // // //     if (
// // // //       availableDates.length ===
// // // //       0
// // // //     ) {
// // // //       alert(
// // // //         `No flights available from ${cleanFrom} to ${cleanTo}.`
// // // //       );

// // // //       return;
// // // //     }

// // // //     // ----------------------------------------
// // // //     // DATE
// // // //     // ----------------------------------------

// // // //     if (!departureDate) {
// // // //       alert(
// // // //         "Please select an available travel date."
// // // //       );

// // // //       return;
// // // //     }

// // // //     // ----------------------------------------
// // // //     // CHECK SELECTED DATE
// // // //     // ----------------------------------------

// // // //     const selectedDate =
// // // //       formatDateForSearch(
// // // //         departureDate
// // // //       );

// // // //     const isAvailable =
// // // //       availableDates.some(
// // // //         (date) =>
// // // //           formatDateForSearch(
// // // //             date
// // // //           ) === selectedDate
// // // //       );

// // // //     if (!isAvailable) {
// // // //       alert(
// // // //         "No flight is available on this date."
// // // //       );

// // // //       return;
// // // //     }

// // // //     console.log(
// // // //       "CUSTOMER SEARCH:"
// // // //     );

// // // //     console.log(
// // // //       "From:",
// // // //       cleanFrom
// // // //     );

// // // //     console.log(
// // // //       "To:",
// // // //       cleanTo
// // // //     );

// // // //     console.log(
// // // //       "Date:",
// // // //       selectedDate
// // // //     );

// // // //     // ----------------------------------------
// // // //     // GO TO FLIGHTS
// // // //     // ----------------------------------------

// // // //     navigate(
// // // //       "/flights",
// // // //       {
// // // //         state: {
// // // //           from: cleanFrom,

// // // //           to: cleanTo,

// // // //           departureDate:
// // // //             selectedDate,

// // // //           travellers,
// // // //         },
// // // //       }
// // // //     );
// // // //   };

// // // //   // ==========================================
// // // //   // FROM SELECT
// // // //   // ==========================================

// // // //   const handleFromSelect = (
// // // //     city
// // // //   ) => {
// // // //     setFrom(city);

// // // //     // When From changes,
// // // //     // old destination is removed.

// // // //     setTo("");

// // // //     setDepartureDate(null);

// // // //     setAvailableDates([]);

// // // //     setShowFromSelector(
// // // //       false
// // // //     );
// // // //   };

// // // //   // ==========================================
// // // //   // TO SELECT
// // // //   // ==========================================

// // // //   const handleToSelect = (
// // // //     city
// // // //   ) => {
// // // //     setTo(city);

// // // //     setDepartureDate(null);

// // // //     setShowToSelector(
// // // //       false
// // // //     );
// // // //   };

// // // //   // ==========================================
// // // //   // SWAP
// // // //   // ==========================================

// // // //   const handleSwap = () => {
// // // //     const oldFrom =
// // // //       from;

// // // //     const oldTo =
// // // //       to;

// // // //     setFrom(oldTo);

// // // //     setTo(oldFrom);

// // // //     setDepartureDate(null);
// // // //   };

// // // //   // ==========================================
// // // //   // TRAVELLER DONE
// // // //   // ==========================================

// // // //   const handleTravellerDone = (
// // // //     data
// // // //   ) => {
// // // //     setTravellers(data);

// // // //     setShowTraveller(
// // // //       false
// // // //     );
// // // //   };

// // // //   // ==========================================
// // // //   // CLICK OUTSIDE
// // // //   // ==========================================

// // // //   useEffect(() => {
// // // //     const handleClickOutside = (
// // // //       event
// // // //     ) => {

// // // //       // FROM

// // // //       if (
// // // //         fromRef.current &&
// // // //         !fromRef.current.contains(
// // // //           event.target
// // // //         )
// // // //       ) {
// // // //         setShowFromSelector(
// // // //           false
// // // //         );
// // // //       }

// // // //       // TO

// // // //       if (
// // // //         toRef.current &&
// // // //         !toRef.current.contains(
// // // //           event.target
// // // //         )
// // // //       ) {
// // // //         setShowToSelector(
// // // //           false
// // // //         );
// // // //       }

// // // //       // TRAVELLER

// // // //       if (
// // // //         !event.target.closest(
// // // //           ".traveller-popup"
// // // //         ) &&
// // // //         !event.target.closest(
// // // //           ".selector-content"
// // // //         )
// // // //       ) {
// // // //         setShowTraveller(
// // // //           false
// // // //         );
// // // //       }
// // // //     };

// // // //     document.addEventListener(
// // // //       "mousedown",
// // // //       handleClickOutside
// // // //     );

// // // //     return () => {
// // // //       document.removeEventListener(
// // // //         "mousedown",
// // // //         handleClickOutside
// // // //       );
// // // //     };

// // // //   }, []);

// // // //   // ==========================================
// // // //   // UI
// // // //   // ==========================================

// // // //   return (
// // // //     <section className="flight-search">

// // // //       <div className="search-card">

// // // //         {/* ====================================
// // // //             TABS
// // // //         ==================================== */}

// // // //         <div className="trip-tabs">

// // // //           <button
// // // //             type="button"
// // // //             className="active"
// // // //           >
// // // //             One Way
// // // //           </button>

// // // //           <button
// // // //             type="button"
// // // //           >
// // // //             Round Trip
// // // //           </button>

// // // //           <button
// // // //             type="button"
// // // //           >
// // // //             Multi City
// // // //           </button>

// // // //         </div>

// // // //         {/* ====================================
// // // //             SEARCH ROW
// // // //         ==================================== */}

// // // //         <div className="search-row">

// // // //           {/* ==================================
// // // //               FROM
// // // //           ================================== */}

// // // //           <div
// // // //             className="field selector-field"
// // // //             ref={fromRef}
// // // //           >

// // // //             <FaPlaneDeparture
// // // //               className="icon"
// // // //             />

// // // //             <div
// // // //               className="selector-content"
// // // //               onClick={() =>
// // // //                 setShowFromSelector(
// // // //                   true
// // // //                 )
// // // //               }
// // // //             >

// // // //               <p>
// // // //                 From
// // // //               </p>

// // // //               <h3>
// // // //                 {from ||
// // // //                   "Select City"}
// // // //               </h3>

// // // //               <span>
// // // //                 Select Departure City
// // // //               </span>

// // // //             </div>

// // // //             {showFromSelector && (

// // // //               <div className="selector-popup">

// // // //                 <CitySelector
// // // //                   type="from"
// // // //                   onSelect={
// // // //                     handleFromSelect
// // // //                   }
// // // //                 />

// // // //               </div>

// // // //             )}

// // // //           </div>

// // // //           {/* ==================================
// // // //               SWAP
// // // //           ================================== */}

// // // //           <button
// // // //             type="button"
// // // //             className="swap-btn"
// // // //             onClick={
// // // //               handleSwap
// // // //             }
// // // //             title="Swap cities"
// // // //           >

// // // //             <FaExchangeAlt />

// // // //           </button>

// // // //           {/* ==================================
// // // //               TO
// // // //           ================================== */}

// // // //           <div
// // // //             className="field selector-field"
// // // //             ref={toRef}
// // // //           >

// // // //             <FaPlaneArrival
// // // //               className="icon"
// // // //             />

// // // //             <div
// // // //               className="selector-content"
// // // //               onClick={() =>
// // // //                 setShowToSelector(
// // // //                   true
// // // //                 )
// // // //               }
// // // //             >

// // // //               <p>
// // // //                 To
// // // //               </p>

// // // //               <h3>
// // // //                 {to ||
// // // //                   "Select City"}
// // // //               </h3>

// // // //               <span>
// // // //                 Select Destination
// // // //               </span>

// // // //             </div>

// // // //             {showToSelector && (

// // // //               <div className="selector-popup">

// // // //                 <CitySelector
// // // //                   type="to"
// // // //                   selectedFrom={
// // // //                     from
// // // //                   }
// // // //                   onSelect={
// // // //                     handleToSelect
// // // //                   }
// // // //                 />

// // // //               </div>

// // // //             )}

// // // //           </div>

// // // //           {/* ==================================
// // // //               DATE
// // // //           ================================== */}

// // // //           <div className="field">

// // // //             <FaCalendarAlt
// // // //               className="icon"
// // // //             />

// // // //             <div>

// // // //               <p>
// // // //                 Departure
// // // //               </p>













// // // // <DatePicker
// // // //   selected={departureDate}

// // // //   onChange={(date) => {
// // // //     setDepartureDate(date);
// // // //   }}

// // // //   dateFormat="dd MMM yyyy"

// // // //   minDate={new Date()}

// // // //   // Sirf available flight dates select hongi
// // // //   includeDates={availableDates}

// // // //   // Available flight dates ko highlight karo
// // // //   dayClassName={(date) => {

// // // //     const currentDate =
// // // //       formatDateForSearch(date);

// // // //     const isAvailable =
// // // //       availableDates.some(
// // // //         (availableDate) =>
// // // //           formatDateForSearch(
// // // //             availableDate
// // // //           ) === currentDate
// // // //       );

// // // //     return isAvailable
// // // //       ? "flight-available-day"
// // // //       : undefined;
// // // //   }}

// // // //   className="date-picker"

// // // //   placeholderText={
// // // //     from && to
// // // //       ? loadingDates
// // // //         ? "Loading available dates..."
// // // //         : availableDates.length > 0
// // // //         ? "Select available date"
// // // //         : "No flights available"
// // // //       : "Select From & To first"
// // // //   }

// // // //   disabled={
// // // //     !from ||
// // // //     !to ||
// // // //     loadingDates ||
// // // //     availableDates.length === 0
// // // //   }

// // // //   onCalendarOpen={() => {

// // // //     if (
// // // //       from &&
// // // //       to &&
// // // //       availableDates.length === 0 &&
// // // //       !loadingDates
// // // //     ) {
// // // //       alert(
// // // //         `No flights available from ${from} to ${to}.`
// // // //       );
// // // //     }

// // // //   }}
// // // // />





// // // //   {/* 





// // // //                 <DatePicker
// // // //                   selected={
// // // //                     departureDate
// // // //                   }

// // // //                   onChange={(
// // // //                     date
// // // //                   ) => {

// // // //                     setDepartureDate(
// // // //                       date
// // // //                     );

// // // //                   }}

// // // //                   dateFormat="dd MMM yyyy"

// // // //                   minDate={
// // // //                     new Date()
// // // //                   }

// // // //                   // --------------------------------
// // // //                   // ONLY ADMIN ADDED DATES
// // // //                   // --------------------------------

// // // //                   includeDates={
// // // //                     availableDates
// // // //                   }

// // // //                   className="date-picker"

// // // //                   placeholderText={
// // // //                     from && to
// // // //                       ? loadingDates
// // // //                         ? "Loading available dates..."
// // // //                         : availableDates.length >
// // // //                           0
// // // //                           ? "Select available date"
// // // //                           : "No flights available"
// // // //                       : "Select From & To first"
// // // //                   }

// // // //                   disabled={
// // // //                     !from ||
// // // //                     !to ||
// // // //                     loadingDates ||
// // // //                     availableDates.length ===
// // // //                     0
// // // //                   }

// // // //                   onCalendarOpen={() => {
// // // //                     if (
// // // //                       from &&
// // // //                       to &&
// // // //                       availableDates.length ===
// // // //                       0 &&
// // // //                       !loadingDates
// // // //                     ) {
// // // //                       alert(
// // // //                         `No flights available from ${from} to ${to}.`
// // // //                       );
// // // //                     }
// // // //                   }}

// // // //                 /> */}

// // // //               <span>

// // // //                 {loadingDates
// // // //                   ? "Checking flights..."
// // // //                   : from && to
// // // //                     ? availableDates.length >
// // // //                       0
// // // //                       ? `${availableDates.length} available date${availableDates.length >
// // // //                         1
// // // //                         ? "s"
// // // //                         : ""
// // // //                       }`
// // // //                       : "No available dates"
// // // //                     : "Select From & To first"}

// // // //               </span>

// // // //             </div>

// // // //           </div>

// // // //           {/* ==================================
// // // //               TRAVELLERS
// // // //           ================================== */}

// // // //           <div className="field selector-field">

// // // //             <FaUserFriends
// // // //               className="icon"
// // // //             />

// // // //             <div
// // // //               className="selector-content"
// // // //               onClick={() =>
// // // //                 setShowTraveller(
// // // //                   true
// // // //                 )
// // // //               }
// // // //             >

// // // //               <p>
// // // //                 Travellers
// // // //               </p>

// // // //               <h3>

// // // //                 {
// // // //                   travellers.adults
// // // //                 }{" "}

// // // //                 Adult

// // // //                 {travellers.adults >
// // // //                   1
// // // //                   ? "s"
// // // //                   : ""}

// // // //               </h3>

// // // //               <span>
// // // //                 {travellers.cabin}
// // // //               </span>

// // // //             </div>

// // // //             {showTraveller && (

// // // //               <div className="selector-popup traveller-popup">

// // // //                 <TravellerSelector
// // // //                   travellers={
// // // //                     travellers
// // // //                   }

// // // //                   onDone={
// // // //                     handleTravellerDone
// // // //                   }

// // // //                   onClose={() =>
// // // //                     setShowTraveller(
// // // //                       false
// // // //                     )
// // // //                   }
// // // //                 />

// // // //               </div>

// // // //             )}

// // // //           </div>

// // // //           {/* ==================================
// // // //               SEARCH
// // // //           ================================== */}

// // // //           <button
// // // //             type="button"
// // // //             className="search-btn"
// // // //             onClick={
// // // //               handleSearch
// // // //             }
// // // //             title="Search Flights"
// // // //           >

// // // //             <FaSearch />

// // // //           </button>

// // // //         </div>

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }

// // // // export default FlightSearch;































// // // import "./FlightSearch.css";

// // // import { useState, useEffect, useRef } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // import DatePicker from "react-datepicker";
// // // import "react-datepicker/dist/react-datepicker.css";

// // // import CitySelector from "../CitySelector/CitySelector";
// // // import TravellerSelector from "../TravellerSelector/TravellerSelector";

// // // import {
// // //   FaPlaneDeparture,
// // //   FaPlaneArrival,
// // //   FaExchangeAlt,
// // //   FaCalendarAlt,
// // //   FaUserFriends,
// // //   FaSearch,
// // // } from "react-icons/fa";

// // // function FlightSearch() {
// // //   const navigate = useNavigate();

// // //   // ==========================================
// // //   // FROM / TO
// // //   // ==========================================

// // //   const [from, setFrom] = useState("");
// // //   const [to, setTo] = useState("");

// // //   // ==========================================
// // //   // DATE
// // //   // ==========================================

// // //   const [departureDate, setDepartureDate] =
// // //     useState(null);

// // //   // ==========================================
// // //   // AVAILABLE DATES
// // //   // ==========================================

// // //   const [availableDates, setAvailableDates] =
// // //     useState([]);

// // //   const [loadingDates, setLoadingDates] =
// // //     useState(false);

// // //   // ==========================================
// // //   // POPUPS
// // //   // ==========================================

// // //   const [showFromSelector, setShowFromSelector] =
// // //     useState(false);

// // //   const [showToSelector, setShowToSelector] =
// // //     useState(false);

// // //   const [showTraveller, setShowTraveller] =
// // //     useState(false);

// // //   // ==========================================
// // //   // TRAVELLERS
// // //   // ==========================================

// // //   const [travellers, setTravellers] =
// // //     useState({
// // //       adults: 1,
// // //       children: 0,
// // //       infants: 0,
// // //       cabin: "Economy",
// // //     });

// // //   // ==========================================
// // //   // REFS
// // //   // ==========================================

// // //   const fromRef = useRef(null);
// // //   const toRef = useRef(null);

// // //   // ==========================================
// // //   // NORMALIZE CITY
// // //   // ==========================================

// // //   const normalizeCity = (value) => {
// // //     if (!value) {
// // //       return "";
// // //     }

// // //     return String(value)
// // //       .replace(/\([^)]*\)/g, "")
// // //       .replace(/\s+/g, " ")
// // //       .trim()
// // //       .toLowerCase();
// // //   };

// // //   // ==========================================
// // //   // DATE STRING
// // //   // ==========================================

// // //   const formatDateForSearch = (date) => {
// // //     if (!date) {
// // //       return "";
// // //     }

// // //     const year =
// // //       date.getFullYear();

// // //     const month =
// // //       String(
// // //         date.getMonth() + 1
// // //       ).padStart(2, "0");

// // //     const day =
// // //       String(
// // //         date.getDate()
// // //       ).padStart(2, "0");

// // //     return `${year}-${month}-${day}`;
// // //   };

// // //   // ==========================================
// // //   // STRING DATE → DATE OBJECT
// // //   // ==========================================

// // //   const convertToDateObject = (value) => {
// // //     if (!value) {
// // //       return null;
// // //     }

// // //     // Date object
// // //     if (value instanceof Date && !isNaN(value.getTime())) {
// // //       const date = new Date(
// // //         value.getFullYear(),
// // //         value.getMonth(),
// // //         value.getDate()
// // //       );
// // //       date.setHours(0, 0, 0, 0);
// // //       return date;
// // //     }

// // //     const raw = String(value).trim();

// // //     // ISO / YYYY-MM-DD / YYYY-MM-DDTHH:mm:ss formats
// // //     const match = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);

// // //     if (match) {
// // //       const year = Number(match[1]);
// // //       const month = Number(match[2]) - 1;
// // //       const day = Number(match[3]);

// // //       const date = new Date(year, month, day);

// // //       if (
// // //         date.getFullYear() === year &&
// // //         date.getMonth() === month &&
// // //         date.getDate() === day
// // //       ) {
// // //         date.setHours(0, 0, 0, 0);
// // //         return date;
// // //       }
// // //     }

// // //     // Fallback for any valid date string
// // //     const parsed = new Date(raw);

// // //     if (!isNaN(parsed.getTime())) {
// // //       const date = new Date(
// // //         parsed.getFullYear(),
// // //         parsed.getMonth(),
// // //         parsed.getDate()
// // //       );
// // //       date.setHours(0, 0, 0, 0);
// // //       return date;
// // //     }

// // //     return null;
// // //   };

// // //   // ==========================================
// // //   // FETCH AVAILABLE DATES
// // //   //
// // //   // When From + To changes,
// // //   // automatically find all flights
// // //   // for that route.
// // //   // ==========================================

// // //   useEffect(() => {
// // //     let cancelled = false;

// // //     const fetchAvailableDates = async () => {
// // //       if (!from || !to) {
// // //         setAvailableDates([]);
// // //         setDepartureDate(null);
// // //         setLoadingDates(false);
// // //         return;
// // //       }

// // //       const selectedFrom = normalizeCity(from);
// // //       const selectedTo = normalizeCity(to);

// // //       if (!selectedFrom || !selectedTo || selectedFrom === selectedTo) {
// // //         setAvailableDates([]);
// // //         setDepartureDate(null);
// // //         setLoadingDates(false);
// // //         return;
// // //       }

// // //       try {
// // //         setLoadingDates(true);

// // //         console.log("Checking available dates for:", from, "→", to);

// // //         const response = await fetch(
// // //           "http://localhost:5000/api/flights"
// // //         );

// // //         const data = await response.json();

// // //         if (!response.ok) {
// // //           throw new Error(
// // //             data.message || "Unable to load flights."
// // //           );
// // //         }

// // //         const flights = Array.isArray(data.flights)
// // //           ? data.flights
// // //           : [];

// // //         // Support city name, airport name, code and values like "Jaipur (JAI)"
// // //         const placeMatches = (selectedValue, values) => {
// // //           const selected = normalizeCity(selectedValue);

// // //           return values
// // //             .filter(Boolean)
// // //             .some((value) => {
// // //               const normalized = normalizeCity(value);
// // //               return (
// // //                 normalized === selected ||
// // //                 normalized.includes(selected) ||
// // //                 selected.includes(normalized)
// // //               );
// // //             });
// // //         };

// // //         const routeFlights = flights.filter((flight) => {
// // //           const fromValues = [
// // //             flight.fromCity,
// // //             flight.fromCode,
// // //             flight.fromAirport,
// // //             flight.from,
// // //           ];

// // //           const toValues = [
// // //             flight.toCity,
// // //             flight.toCode,
// // //             flight.toAirport,
// // //             flight.to,
// // //           ];

// // //           return (
// // //             placeMatches(selectedFrom, fromValues) &&
// // //             placeMatches(selectedTo, toValues)
// // //           );
// // //         });

// // //         // Only keep valid future/admin-added flight dates
// // //         const uniqueDateStrings = [
// // //           ...new Set(
// // //             routeFlights
// // //               .map((flight) => {
// // //                 const value = flight.departureDate;

// // //                 if (!value) {
// // //                   return null;
// // //                 }

// // //                 const raw = String(value).trim();
// // //                 const match = raw.match(/^(\d{4}-\d{2}-\d{2})/);

// // //                 return match ? match[1] : raw;
// // //               })
// // //               .filter(Boolean)
// // //           ),
// // //         ].sort();

// // //         const today = new Date();
// // //         today.setHours(0, 0, 0, 0);

// // //         const dateObjects = uniqueDateStrings
// // //           .map(convertToDateObject)
// // //           .filter((date) => date && date >= today);

// // //         if (cancelled) return;

// // //         setAvailableDates(dateObjects);
// // //         setDepartureDate(null);

// // //         console.log("Route flights:", routeFlights);
// // //         console.log("Available dates:", uniqueDateStrings);
// // //         console.log("Available Date Objects:", dateObjects);

// // //       } catch (error) {
// // //         if (cancelled) return;

// // //         console.error("Available Dates Error:", error);
// // //         setAvailableDates([]);
// // //         setDepartureDate(null);

// // //       } finally {
// // //         if (!cancelled) {
// // //           setLoadingDates(false);
// // //         }
// // //       }
// // //     };

// // //     fetchAvailableDates();

// // //     return () => {
// // //       cancelled = true;
// // //     };
// // //   }, [from, to]);

// // //   // ==========================================
// // //   // SEARCH
// // //   // ==========================================

// // //   const handleSearch = () => {
// // //     const cleanFrom =
// // //       from.trim();

// // //     const cleanTo =
// // //       to.trim();

// // //     // ----------------------------------------
// // //     // FROM / TO
// // //     // ----------------------------------------

// // //     if (
// // //       !cleanFrom ||
// // //       !cleanTo
// // //     ) {
// // //       alert(
// // //         "Please select departure and destination."
// // //       );

// // //       return;
// // //     }

// // //     // ----------------------------------------
// // //     // SAME CITY
// // //     // ----------------------------------------

// // //     if (
// // //       normalizeCity(cleanFrom) ===
// // //       normalizeCity(cleanTo)
// // //     ) {
// // //       alert(
// // //         "Departure and Destination cannot be the same."
// // //       );

// // //       return;
// // //     }

// // //     // ----------------------------------------
// // //     // NO AVAILABLE DATE
// // //     // ----------------------------------------

// // //     if (
// // //       availableDates.length ===
// // //       0
// // //     ) {
// // //       alert(
// // //         `No flights available from ${cleanFrom} to ${cleanTo}.`
// // //       );

// // //       return;
// // //     }

// // //     // ----------------------------------------
// // //     // DATE
// // //     // ----------------------------------------

// // //     if (!departureDate) {
// // //       alert(
// // //         "Please select an available travel date."
// // //       );

// // //       return;
// // //     }

// // //     // ----------------------------------------
// // //     // CHECK SELECTED DATE
// // //     // ----------------------------------------

// // //     const selectedDate =
// // //       formatDateForSearch(
// // //         departureDate
// // //       );

// // //     const isAvailable =
// // //       availableDates.some(
// // //         (date) =>
// // //           formatDateForSearch(
// // //             date
// // //           ) === selectedDate
// // //       );

// // //     if (!isAvailable) {
// // //       alert(
// // //         "No flight is available on this date."
// // //       );

// // //       return;
// // //     }

// // //     console.log(
// // //       "CUSTOMER SEARCH:"
// // //     );

// // //     console.log(
// // //       "From:",
// // //       cleanFrom
// // //     );

// // //     console.log(
// // //       "To:",
// // //       cleanTo
// // //     );

// // //     console.log(
// // //       "Date:",
// // //       selectedDate
// // //     );

// // //     // ----------------------------------------
// // //     // GO TO FLIGHTS
// // //     // ----------------------------------------

// // //     navigate(
// // //       "/flights",
// // //       {
// // //         state: {
// // //           from: cleanFrom,

// // //           to: cleanTo,

// // //           departureDate:
// // //             selectedDate,

// // //           travellers,
// // //         },
// // //       }
// // //     );
// // //   };

// // //   // ==========================================
// // //   // FROM SELECT
// // //   // ==========================================

// // //   const handleFromSelect = (
// // //     city
// // //   ) => {
// // //     setFrom(city);

// // //     // When From changes,
// // //     // old destination is removed.

// // //     setTo("");

// // //     setDepartureDate(null);

// // //     setAvailableDates([]);

// // //     setShowFromSelector(
// // //       false
// // //     );
// // //   };

// // //   // ==========================================
// // //   // TO SELECT
// // //   // ==========================================

// // //   const handleToSelect = (
// // //     city
// // //   ) => {
// // //     setTo(city);

// // //     setDepartureDate(null);

// // //     setShowToSelector(
// // //       false
// // //     );
// // //   };

// // //   // ==========================================
// // //   // SWAP
// // //   // ==========================================

// // //   const handleSwap = () => {
// // //     const oldFrom =
// // //       from;

// // //     const oldTo =
// // //       to;

// // //     setFrom(oldTo);

// // //     setTo(oldFrom);

// // //     setDepartureDate(null);
// // //   };

// // //   // ==========================================
// // //   // TRAVELLER DONE
// // //   // ==========================================

// // //   const handleTravellerDone = (
// // //     data
// // //   ) => {
// // //     setTravellers(data);

// // //     setShowTraveller(
// // //       false
// // //     );
// // //   };

// // //   // ==========================================
// // //   // CLICK OUTSIDE
// // //   // ==========================================

// // //   useEffect(() => {
// // //     const handleClickOutside = (
// // //       event
// // //     ) => {

// // //       // FROM

// // //       if (
// // //         fromRef.current &&
// // //         !fromRef.current.contains(
// // //           event.target
// // //         )
// // //       ) {
// // //         setShowFromSelector(
// // //           false
// // //         );
// // //       }

// // //       // TO

// // //       if (
// // //         toRef.current &&
// // //         !toRef.current.contains(
// // //           event.target
// // //         )
// // //       ) {
// // //         setShowToSelector(
// // //           false
// // //         );
// // //       }

// // //       // TRAVELLER

// // //       if (
// // //         !event.target.closest(
// // //           ".traveller-popup"
// // //         ) &&
// // //         !event.target.closest(
// // //           ".selector-content"
// // //         )
// // //       ) {
// // //         setShowTraveller(
// // //           false
// // //         );
// // //       }
// // //     };

// // //     document.addEventListener(
// // //       "mousedown",
// // //       handleClickOutside
// // //     );

// // //     return () => {
// // //       document.removeEventListener(
// // //         "mousedown",
// // //         handleClickOutside
// // //       );
// // //     };

// // //   }, []);

// // //   // ==========================================
// // //   // UI
// // //   // ==========================================

// // //   return (
// // //     <section className="flight-search">

// // //       <div className="search-card">

// // //         {/* ====================================
// // //             TABS
// // //         ==================================== */}

// // //         <div className="trip-tabs">

// // //           <button
// // //             type="button"
// // //             className="active"
// // //           >
// // //             One Way
// // //           </button>

// // //           <button
// // //             type="button"
// // //           >
// // //             Round Trip
// // //           </button>

// // //           <button
// // //             type="button"
// // //           >
// // //             Multi City
// // //           </button>

// // //         </div>

// // //         {/* ====================================
// // //             SEARCH ROW
// // //         ==================================== */}

// // //         <div className="search-row">

// // //           {/* ==================================
// // //               FROM
// // //           ================================== */}

// // //           <div
// // //             className="field selector-field"
// // //             ref={fromRef}
// // //           >

// // //             <FaPlaneDeparture
// // //               className="icon"
// // //             />

// // //             <div
// // //               className="selector-content"
// // //               onClick={() =>
// // //                 setShowFromSelector(
// // //                   true
// // //                 )
// // //               }
// // //             >

// // //               <p>
// // //                 From
// // //               </p>

// // //               <h3>
// // //                 {from ||
// // //                   "Select City"}
// // //               </h3>

// // //               <span>
// // //                 Select Departure City
// // //               </span>

// // //             </div>

// // //             {showFromSelector && (

// // //               <div className="selector-popup">

// // //                 <CitySelector
// // //                   type="from"
// // //                   onSelect={
// // //                     handleFromSelect
// // //                   }
// // //                 />

// // //               </div>

// // //             )}

// // //           </div>

// // //           {/* ==================================
// // //               SWAP
// // //           ================================== */}

// // //           <button
// // //             type="button"
// // //             className="swap-btn"
// // //             onClick={
// // //               handleSwap
// // //             }
// // //             title="Swap cities"
// // //           >

// // //             <FaExchangeAlt />

// // //           </button>

// // //           {/* ==================================
// // //               TO
// // //           ================================== */}

// // //           <div
// // //             className="field selector-field"
// // //             ref={toRef}
// // //           >

// // //             <FaPlaneArrival
// // //               className="icon"
// // //             />

// // //             <div
// // //               className="selector-content"
// // //               onClick={() =>
// // //                 setShowToSelector(
// // //                   true
// // //                 )
// // //               }
// // //             >

// // //               <p>
// // //                 To
// // //               </p>

// // //               <h3>
// // //                 {to ||
// // //                   "Select City"}
// // //               </h3>

// // //               <span>
// // //                 Select Destination
// // //               </span>

// // //             </div>

// // //             {showToSelector && (

// // //               <div className="selector-popup">

// // //                 <CitySelector
// // //                   type="to"
// // //                   selectedFrom={
// // //                     from
// // //                   }
// // //                   onSelect={
// // //                     handleToSelect
// // //                   }
// // //                 />

// // //               </div>

// // //             )}

// // //           </div>

// // //           {/* ==================================
// // //               DATE
// // //           ================================== */}

// // //           <div className="field">

// // //             <FaCalendarAlt
// // //               className="icon"
// // //             />

// // //             <div>

// // //               <p>
// // //                 Departure
// // //               </p>

// // //               <DatePicker
// // //                 selected={departureDate}

// // //                 onChange={(date) => {
// // //                   if (!date) return;

// // //                   const selected = formatDateForSearch(date);

// // //                   const isAvailable = availableDates.some(
// // //                     (availableDate) =>
// // //                       formatDateForSearch(availableDate) === selected
// // //                   );

// // //                   if (isAvailable) {
// // //                     setDepartureDate(date);
// // //                   }
// // //                 }}

// // //                 dateFormat="dd MMM yyyy"

// // //                 minDate={new Date()}

// // //                 includeDates={availableDates}

// // //                 dayClassName={(date) => {
// // //                   const currentDate = formatDateForSearch(date);

// // //                   const isAvailable = availableDates.some(
// // //                     (availableDate) =>
// // //                       formatDateForSearch(availableDate) === currentDate
// // //                   );

// // //                   return isAvailable
// // //                     ? "flight-available-day"
// // //                     : undefined;
// // //                 }}

// // //                 className="date-picker"

// // //                 placeholderText={
// // //                   from && to
// // //                     ? loadingDates
// // //                       ? "Loading available dates..."
// // //                       : availableDates.length > 0
// // //                       ? "Select available date"
// // //                       : "No flights available"
// // //                     : "Select From & To first"
// // //                 }

// // //                 disabled={!from || !to || loadingDates || availableDates.length === 0}

// // //                 onCalendarOpen={() => {
// // //                   if (
// // //                     from &&
// // //                     to &&
// // //                     availableDates.length === 0 &&
// // //                     !loadingDates
// // //                   ) {
// // //                     alert(
// // //                       `No flights available from ${from} to ${to}.`
// // //                     );
// // //                   }
// // //                 }}
// // //               />

// // //               <span>

// // //                 {loadingDates
// // //                   ? "Checking flights..."
// // //                   : from && to
// // //                   ? availableDates.length >
// // //                     0
// // //                     ? `${availableDates.length} available date${
// // //                         availableDates.length >
// // //                         1
// // //                           ? "s"
// // //                           : ""
// // //                       }`
// // //                     : "No available dates"
// // //                   : "Select From & To first"}

// // //               </span>

// // //             </div>

// // //           </div>

// // //           {/* ==================================
// // //               TRAVELLERS
// // //           ================================== */}

// // //           <div className="field selector-field">

// // //             <FaUserFriends
// // //               className="icon"
// // //             />

// // //             <div
// // //               className="selector-content"
// // //               onClick={() =>
// // //                 setShowTraveller(
// // //                   true
// // //                 )
// // //               }
// // //             >

// // //               <p>
// // //                 Travellers
// // //               </p>

// // //               <h3>

// // //                 {
// // //                   travellers.adults
// // //                 }{" "}

// // //                 Adult

// // //                 {travellers.adults >
// // //                 1
// // //                   ? "s"
// // //                   : ""}

// // //               </h3>

// // //               <span>
// // //                 {travellers.cabin}
// // //               </span>

// // //             </div>

// // //             {showTraveller && (

// // //               <div className="selector-popup traveller-popup">

// // //                 <TravellerSelector
// // //                   travellers={
// // //                     travellers
// // //                   }

// // //                   onDone={
// // //                     handleTravellerDone
// // //                   }

// // //                   onClose={() =>
// // //                     setShowTraveller(
// // //                       false
// // //                     )
// // //                   }
// // //                 />

// // //               </div>

// // //             )}

// // //           </div>

// // //           {/* ==================================
// // //               SEARCH
// // //           ================================== */}

// // //           <button
// // //             type="button"
// // //             className="search-btn"
// // //             onClick={
// // //               handleSearch
// // //             }
// // //             title="Search Flights"
// // //           >

// // //             <FaSearch />

// // //           </button>

// // //         </div>

// // //       </div>

// // //     </section>
// // //   );
// // // }

// // // export default FlightSearch;

































// // import "./FlightSearch.css";

// // import { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";

// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";

// // import CitySelector from "../CitySelector/CitySelector";
// // import TravellerSelector from "../TravellerSelector/TravellerSelector";

// // import {
// //   FaPlaneDeparture,
// //   FaPlaneArrival,
// //   FaExchangeAlt,
// //   FaCalendarAlt,
// //   FaUserFriends,
// //   FaSearch,
// // } from "react-icons/fa";

// // function FlightSearch() {
// //   const navigate = useNavigate();

// //   // ==========================================
// //   // FROM / TO
// //   // ==========================================

// //   const [from, setFrom] = useState("");
// //   const [to, setTo] = useState("");

// //   // ==========================================
// //   // DATE
// //   // ==========================================

// //   const [departureDate, setDepartureDate] =
// //     useState(null);

// //   // ==========================================
// //   // AVAILABLE DATES
// //   // ==========================================

// //   const [availableDates, setAvailableDates] =
// //     useState([]);

// //   const [loadingDates, setLoadingDates] =
// //     useState(false);

// //   // ==========================================
// //   // POPUPS
// //   // ==========================================

// //   const [showFromSelector, setShowFromSelector] =
// //     useState(false);

// //   const [showToSelector, setShowToSelector] =
// //     useState(false);

// //   const [showTraveller, setShowTraveller] =
// //     useState(false);

// //   // ==========================================
// //   // TRAVELLERS
// //   // ==========================================

// //   const [travellers, setTravellers] =
// //     useState({
// //       adults: 1,
// //       children: 0,
// //       infants: 0,
// //       cabin: "Economy",
// //     });

// //   // ==========================================
// //   // REFS
// //   // ==========================================

// //   const fromRef = useRef(null);
// //   const toRef = useRef(null);

// //   // ==========================================
// //   // NORMALIZE CITY
// //   // ==========================================

// //   const normalizeCity = (value) => {
// //     if (!value) {
// //       return "";
// //     }

// //     return String(value)
// //       .replace(/\([^)]*\)/g, "")
// //       .replace(/\s+/g, " ")
// //       .trim()
// //       .toLowerCase();
// //   };

// //   // ==========================================
// //   // DATE STRING
// //   // ==========================================

// //   const formatDateForSearch = (date) => {
// //     if (!date) {
// //       return "";
// //     }

// //     const year =
// //       date.getFullYear();

// //     const month =
// //       String(
// //         date.getMonth() + 1
// //       ).padStart(2, "0");

// //     const day =
// //       String(
// //         date.getDate()
// //       ).padStart(2, "0");

// //     return `${year}-${month}-${day}`;
// //   };

// //   // ==========================================
// //   // STRING DATE → DATE OBJECT
// //   // ==========================================

// //   const convertToDateObject = (value) => {
// //     if (!value) {
// //       return null;
// //     }

// //     // Date object
// //     if (value instanceof Date && !isNaN(value.getTime())) {
// //       const date = new Date(
// //         value.getFullYear(),
// //         value.getMonth(),
// //         value.getDate()
// //       );
// //       date.setHours(0, 0, 0, 0);
// //       return date;
// //     }

// //     const raw = String(value).trim();

// //     // ISO / YYYY-MM-DD / YYYY-MM-DDTHH:mm:ss formats
// //     const match = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);

// //     if (match) {
// //       const year = Number(match[1]);
// //       const month = Number(match[2]) - 1;
// //       const day = Number(match[3]);

// //       const date = new Date(year, month, day);

// //       if (
// //         date.getFullYear() === year &&
// //         date.getMonth() === month &&
// //         date.getDate() === day
// //       ) {
// //         date.setHours(0, 0, 0, 0);
// //         return date;
// //       }
// //     }

// //     // Fallback for any valid date string
// //     const parsed = new Date(raw);

// //     if (!isNaN(parsed.getTime())) {
// //       const date = new Date(
// //         parsed.getFullYear(),
// //         parsed.getMonth(),
// //         parsed.getDate()
// //       );
// //       date.setHours(0, 0, 0, 0);
// //       return date;
// //     }

// //     return null;
// //   };

// //   // ==========================================
// //   // FETCH AVAILABLE DATES
// //   //
// //   // When From + To changes,
// //   // automatically find all flights
// //   // for that route.
// //   // ==========================================

// //   useEffect(() => {
// //     let cancelled = false;

// //     const fetchAvailableDates = async () => {
// //       if (!from || !to) {
// //         setAvailableDates([]);
// //         setDepartureDate(null);
// //         setLoadingDates(false);
// //         return;
// //       }

// //       const selectedFrom = normalizeCity(from);
// //       const selectedTo = normalizeCity(to);

// //       if (!selectedFrom || !selectedTo || selectedFrom === selectedTo) {
// //         setAvailableDates([]);
// //         setDepartureDate(null);
// //         setLoadingDates(false);
// //         return;
// //       }

// //       try {
// //         setLoadingDates(true);

// //         console.log("Checking available dates for:", from, "→", to);

// //         const response = await fetch(
// //           "http://localhost:5000/api/flights"
// //         );

// //         const data = await response.json();

// //         if (!response.ok) {
// //           throw new Error(
// //             data.message || "Unable to load flights."
// //           );
// //         }

// //         const flights = Array.isArray(data.flights)
// //           ? data.flights
// //           : [];

// //         // Support city name, airport name, code and values like "Jaipur (JAI)"
// //         const placeMatches = (selectedValue, values) => {
// //           const selected = normalizeCity(selectedValue);

// //           return values
// //             .filter(Boolean)
// //             .some((value) => {
// //               const normalized = normalizeCity(value);
// //               return (
// //                 normalized === selected ||
// //                 normalized.includes(selected) ||
// //                 selected.includes(normalized)
// //               );
// //             });
// //         };

// //         const routeFlights = flights.filter((flight) => {
// //           const fromValues = [
// //             flight.fromCity,
// //             flight.fromCode,
// //             flight.fromAirport,
// //             flight.from,
// //           ];

// //           const toValues = [
// //             flight.toCity,
// //             flight.toCode,
// //             flight.toAirport,
// //             flight.to,
// //           ];

// //           return (
// //             placeMatches(selectedFrom, fromValues) &&
// //             placeMatches(selectedTo, toValues)
// //           );
// //         });

// //         // Only keep valid future/admin-added flight dates
// //         const uniqueDateStrings = [
// //           ...new Set(
// //             routeFlights
// //               .map((flight) => {
// //                 const value = flight.departureDate;

// //                 if (!value) {
// //                   return null;
// //                 }

// //                 const raw = String(value).trim();
// //                 const match = raw.match(/^(\d{4}-\d{2}-\d{2})/);

// //                 return match ? match[1] : raw;
// //               })
// //               .filter(Boolean)
// //           ),
// //         ].sort();

// //         const today = new Date();
// //         today.setHours(0, 0, 0, 0);

// //         const dateObjects = uniqueDateStrings
// //           .map(convertToDateObject)
// //           .filter((date) => date && date >= today);

// //         if (cancelled) return;

// //         setAvailableDates(dateObjects);
// //         setDepartureDate(null);

// //         console.log("Route flights:", routeFlights);
// //         console.log("Available dates:", uniqueDateStrings);
// //         console.log("Available Date Objects:", dateObjects);

// //       } catch (error) {
// //         if (cancelled) return;

// //         console.error("Available Dates Error:", error);
// //         setAvailableDates([]);
// //         setDepartureDate(null);

// //       } finally {
// //         if (!cancelled) {
// //           setLoadingDates(false);
// //         }
// //       }
// //     };

// //     fetchAvailableDates();

// //     return () => {
// //       cancelled = true;
// //     };
// //   }, [from, to]);

// //   // ==========================================
// //   // SEARCH
// //   // ==========================================

// //   const handleSearch = () => {
// //     const cleanFrom =
// //       from.trim();

// //     const cleanTo =
// //       to.trim();

// //     // ----------------------------------------
// //     // FROM / TO
// //     // ----------------------------------------

// //     if (
// //       !cleanFrom ||
// //       !cleanTo
// //     ) {
// //       alert(
// //         "Please select departure and destination."
// //       );

// //       return;
// //     }

// //     // ----------------------------------------
// //     // SAME CITY
// //     // ----------------------------------------

// //     if (
// //       normalizeCity(cleanFrom) ===
// //       normalizeCity(cleanTo)
// //     ) {
// //       alert(
// //         "Departure and Destination cannot be the same."
// //       );

// //       return;
// //     }

// //     // ----------------------------------------
// //     // NO AVAILABLE DATE
// //     // ----------------------------------------

// //     if (
// //       availableDates.length ===
// //       0
// //     ) {
// //       alert(
// //         `No flights available from ${cleanFrom} to ${cleanTo}.`
// //       );

// //       return;
// //     }

// //     // ----------------------------------------
// //     // DATE
// //     // ----------------------------------------

// //     if (!departureDate) {
// //       alert(
// //         "Please select an available travel date."
// //       );

// //       return;
// //     }

// //     // ----------------------------------------
// //     // CHECK SELECTED DATE
// //     // ----------------------------------------

// //     const selectedDate =
// //       formatDateForSearch(
// //         departureDate
// //       );

// //     const isAvailable =
// //       availableDates.some(
// //         (date) =>
// //           formatDateForSearch(
// //             date
// //           ) === selectedDate
// //       );

// //     if (!isAvailable) {
// //       alert(
// //         "No flight is available on this date."
// //       );

// //       return;
// //     }

// //     console.log(
// //       "CUSTOMER SEARCH:"
// //     );

// //     console.log(
// //       "From:",
// //       cleanFrom
// //     );

// //     console.log(
// //       "To:",
// //       cleanTo
// //     );

// //     console.log(
// //       "Date:",
// //       selectedDate
// //     );

// //     // ----------------------------------------
// //     // GO TO FLIGHTS
// //     // ----------------------------------------

// //     navigate(
// //       "/flights",
// //       {
// //         state: {
// //           from: cleanFrom,

// //           to: cleanTo,

// //           departureDate:
// //             selectedDate,

// //           travellers,
// //         },
// //       }
// //     );
// //   };

// //   // ==========================================
// //   // FROM SELECT
// //   // ==========================================

// //   const handleFromSelect = (
// //     city
// //   ) => {
// //     setFrom(city);

// //     // When From changes,
// //     // old destination is removed.

// //     setTo("");

// //     setDepartureDate(null);

// //     setAvailableDates([]);

// //     setShowFromSelector(
// //       false
// //     );
// //   };

// //   // ==========================================
// //   // TO SELECT
// //   // ==========================================

// //   const handleToSelect = (
// //     city
// //   ) => {
// //     setTo(city);

// //     setDepartureDate(null);

// //     setShowToSelector(
// //       false
// //     );
// //   };

// //   // ==========================================
// //   // SWAP
// //   // ==========================================

// //   const handleSwap = () => {
// //     const oldFrom =
// //       from;

// //     const oldTo =
// //       to;

// //     setFrom(oldTo);

// //     setTo(oldFrom);

// //     setDepartureDate(null);
// //   };

// //   // ==========================================
// //   // TRAVELLER DONE
// //   // ==========================================

// //   const handleTravellerDone = (
// //     data
// //   ) => {
// //     setTravellers(data);

// //     setShowTraveller(
// //       false
// //     );
// //   };

// //   // ==========================================
// //   // CLICK OUTSIDE
// //   // ==========================================

// //   useEffect(() => {
// //     const handleClickOutside = (
// //       event
// //     ) => {

// //       // FROM

// //       if (
// //         fromRef.current &&
// //         !fromRef.current.contains(
// //           event.target
// //         )
// //       ) {
// //         setShowFromSelector(
// //           false
// //         );
// //       }

// //       // TO

// //       if (
// //         toRef.current &&
// //         !toRef.current.contains(
// //           event.target
// //         )
// //       ) {
// //         setShowToSelector(
// //           false
// //         );
// //       }

// //       // TRAVELLER

// //       if (
// //         !event.target.closest(
// //           ".traveller-popup"
// //         ) &&
// //         !event.target.closest(
// //           ".selector-content"
// //         )
// //       ) {
// //         setShowTraveller(
// //           false
// //         );
// //       }
// //     };

// //     document.addEventListener(
// //       "mousedown",
// //       handleClickOutside
// //     );

// //     return () => {
// //       document.removeEventListener(
// //         "mousedown",
// //         handleClickOutside
// //       );
// //     };

// //   }, []);

// //   // ==========================================
// //   // UI
// //   // ==========================================

// //   return (
// //     <section className="flight-search">

// //       <div className="search-card">

// //         {/* ====================================
// //             TABS
// //         ==================================== */}

// //         <div className="trip-tabs">

// //           <button
// //             type="button"
// //             className="active"
// //           >
// //             One Way
// //           </button>

// //           <button
// //             type="button"
// //           >
// //             Round Trip
// //           </button>

// //           <button
// //             type="button"
// //           >
// //             Multi City
// //           </button>

// //         </div>

// //         {/* ====================================
// //             SEARCH ROW
// //         ==================================== */}

// //         <div className="search-row">

// //           {/* ==================================
// //               FROM
// //           ================================== */}

// //           <div
// //             className="field selector-field"
// //             ref={fromRef}
// //           >

// //             <FaPlaneDeparture
// //               className="icon"
// //             />

// //             <div
// //               className="selector-content"
// //               onClick={() =>
// //                 setShowFromSelector(
// //                   true
// //                 )
// //               }
// //             >

// //               <p>
// //                 From
// //               </p>

// //               <h3>
// //                 {from ||
// //                   "Select City"}
// //               </h3>

// //               <span>
// //                 Select Departure City
// //               </span>

// //             </div>

// //             {showFromSelector && (

// //               <div className="selector-popup">

// //                 <CitySelector
// //                   type="from"
// //                   onSelect={
// //                     handleFromSelect
// //                   }
// //                 />

// //               </div>

// //             )}

// //           </div>

// //           {/* ==================================
// //               SWAP
// //           ================================== */}

// //           <button
// //             type="button"
// //             className="swap-btn"
// //             onClick={
// //               handleSwap
// //             }
// //             title="Swap cities"
// //           >

// //             <FaExchangeAlt />

// //           </button>

// //           {/* ==================================
// //               TO
// //           ================================== */}

// //           <div
// //             className="field selector-field"
// //             ref={toRef}
// //           >

// //             <FaPlaneArrival
// //               className="icon"
// //             />

// //             <div
// //               className="selector-content"
// //               onClick={() =>
// //                 setShowToSelector(
// //                   true
// //                 )
// //               }
// //             >

// //               <p>
// //                 To
// //               </p>

// //               <h3>
// //                 {to ||
// //                   "Select City"}
// //               </h3>

// //               <span>
// //                 Select Destination
// //               </span>

// //             </div>

// //             {showToSelector && (

// //               <div className="selector-popup">

// //                 <CitySelector
// //                   type="to"
// //                   selectedFrom={
// //                     from
// //                   }
// //                   onSelect={
// //                     handleToSelect
// //                   }
// //                 />

// //               </div>

// //             )}

// //           </div>

// //           {/* ==================================
// //               DATE
// //           ================================== */}

// //           <div className="field">

// //             <FaCalendarAlt
// //               className="icon"
// //             />

// //             <div>

// //               <p>
// //                 Departure
// //               </p>

// //               <DatePicker
// //                 selected={departureDate}

// //                 onChange={(date) => {
// //                   if (!date) return;

// //                   const selected = formatDateForSearch(date);

// //                   const isAvailable = availableDates.some(
// //                     (availableDate) =>
// //                       formatDateForSearch(availableDate) === selected
// //                   );

// //                   if (isAvailable) {
// //                     setDepartureDate(date);
// //                   }
// //                 }}

// //                 dateFormat="dd MMM yyyy"

// //                 minDate={new Date()}

// //                 includeDates={availableDates}

// //                 dayClassName={(date) => {
// //                   const currentDate = formatDateForSearch(date);

// //                   const isAvailable = availableDates.some(
// //                     (availableDate) =>
// //                       formatDateForSearch(availableDate) === currentDate
// //                   );

// //                   return isAvailable
// //                     ? "flight-available-day"
// //                     : undefined;
// //                 }}

// //                 className="date-picker"

// //                 placeholderText={
// //                   from && to
// //                     ? loadingDates
// //                       ? "Loading available dates..."
// //                       : availableDates.length > 0
// //                       ? "Select available date"
// //                       : "No flights available"
// //                     : "Select From & To first"
// //                 }

// //                 disabled={!from || !to || loadingDates || availableDates.length === 0}

// //                 onCalendarOpen={() => {
// //                   if (
// //                     from &&
// //                     to &&
// //                     availableDates.length === 0 &&
// //                     !loadingDates
// //                   ) {
// //                     alert(
// //                       `No flights available from ${from} to ${to}.`
// //                     );
// //                   }
// //                 }}
// //               />

// //               <span>

// //                 {loadingDates
// //                   ? "Checking flights..."
// //                   : from && to
// //                   ? availableDates.length >
// //                     0
// //                     ? `${availableDates.length} available date${
// //                         availableDates.length >
// //                         1
// //                           ? "s"
// //                           : ""
// //                       }`
// //                     : "No available dates"
// //                   : "Select From & To first"}

// //               </span>

// //             </div>

// //           </div>

// //           {/* ==================================
// //               TRAVELLERS
// //           ================================== */}

// //           <div className="field selector-field">

// //             <FaUserFriends
// //               className="icon"
// //             />

// //             <div
// //               className="selector-content"
// //               onClick={() =>
// //                 setShowTraveller(
// //                   true
// //                 )
// //               }
// //             >

// //               <p>
// //                 Travellers
// //               </p>

// //               <h3>

// //                 {
// //                   travellers.adults
// //                 }{" "}

// //                 Adult

// //                 {travellers.adults >
// //                 1
// //                   ? "s"
// //                   : ""}

// //               </h3>

// //               <span>
// //                 {travellers.cabin}
// //               </span>

// //             </div>

// //             {showTraveller && (

// //               <div className="selector-popup traveller-popup">

// //                 <TravellerSelector
// //                   travellers={
// //                     travellers
// //                   }

// //                   onDone={
// //                     handleTravellerDone
// //                   }

// //                   onClose={() =>
// //                     setShowTraveller(
// //                       false
// //                     )
// //                   }
// //                 />

// //               </div>

// //             )}

// //           </div>

// //           {/* ==================================
// //               SEARCH
// //           ================================== */}

// //           <button
// //             type="button"
// //             className="search-btn"
// //             onClick={
// //               handleSearch
// //             }
// //             title="Search Flights"
// //           >

// //             <FaSearch />

// //           </button>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default FlightSearch;



























// import "./FlightSearch.css";

// import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import CitySelector from "../CitySelector/CitySelector";
// import TravellerSelector from "../TravellerSelector/TravellerSelector";

// import {
//   FaPlaneDeparture,
//   FaPlaneArrival,
//   FaExchangeAlt,
//   FaCalendarAlt,
//   FaUserFriends,
//   FaSearch,
// } from "react-icons/fa";

// function FlightSearch() {
//   const navigate = useNavigate();

//   // ==========================================
//   // FROM / TO
//   // ==========================================

//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");

//   // ==========================================
//   // DATE
//   // ==========================================

//   const [departureDate, setDepartureDate] =
//     useState(null);

//   // ==========================================
//   // AVAILABLE DATES
//   // ==========================================

//   const [availableDates, setAvailableDates] =
//     useState([]);

//   const [loadingDates, setLoadingDates] =
//     useState(false);

//   // ==========================================
//   // POPUPS
//   // ==========================================

//   const [showFromSelector, setShowFromSelector] =
//     useState(false);

//   const [showToSelector, setShowToSelector] =
//     useState(false);

//   const [showTraveller, setShowTraveller] =
//     useState(false);

//   // ==========================================
//   // TRAVELLERS
//   // ==========================================

//   const [travellers, setTravellers] =
//     useState({
//       adults: 1,
//       children: 0,
//       infants: 0,
//       cabin: "Economy",
//     });

//   // ==========================================
//   // REFS
//   // ==========================================

//   const fromRef = useRef(null);
//   const toRef = useRef(null);

//   // ==========================================
//   // NORMALIZE CITY
//   // ==========================================

//   const normalizeCity = (value) => {
//     if (!value) {
//       return "";
//     }

//     return String(value)
//       .trim()
//       .toLowerCase();
//   };

//   // ==========================================
//   // DATE STRING
//   // ==========================================

//   const formatDateForSearch = (date) => {
//     if (!date) {
//       return "";
//     }

//     const year =
//       date.getFullYear();

//     const month =
//       String(
//         date.getMonth() + 1
//       ).padStart(2, "0");

//     const day =
//       String(
//         date.getDate()
//       ).padStart(2, "0");

//     return `${year}-${month}-${day}`;
//   };

//   // ==========================================
//   // STRING DATE → DATE OBJECT
//   // ==========================================

//   const convertToDateObject = (
//     dateString
//   ) => {
//     if (!dateString) {
//       return null;
//     }

//     const value =
//       String(dateString).trim();

//     const match =
//       value.match(
//         /^(\\d{4})-(\\d{2})-(\\d{2})$/
//       );

//     if (!match) {
//       return null;
//     }

//     const year =
//       Number(match[1]);

//     const month =
//       Number(match[2]) - 1;

//     const day =
//       Number(match[3]);

//     const date = new Date(
//       year,
//       month,
//       day
//     );

//     date.setHours(
//       0,
//       0,
//       0,
//       0
//     );

//     return date;
//   };

//   // ==========================================
//   // FETCH AVAILABLE DATES
//   //
//   // When From + To changes,
//   // automatically find all flights
//   // for that route.
//   // ==========================================

//   useEffect(() => {
//     const fetchAvailableDates = async () => {
//       // --------------------------------------
//       // Both cities required
//       // --------------------------------------

//       if (!from || !to) {
//         setAvailableDates([]);

//         setDepartureDate(null);

//         return;
//       }

//       // --------------------------------------
//       // Same city protection
//       // --------------------------------------

//       if (
//         normalizeCity(from) ===
//         normalizeCity(to)
//       ) {
//         setAvailableDates([]);

//         setDepartureDate(null);

//         return;
//       }

//       try {
//         setLoadingDates(true);

//         console.log(
//           "Checking available dates:"
//         );

//         console.log(
//           "From:",
//           from
//         );

//         console.log(
//           "To:",
//           to
//         );

//         // ------------------------------------
//         // GET ALL FLIGHTS
//         // ------------------------------------

//         const response =
//           await fetch(
//             "http://localhost:5000/api/flights"
//           );

//         const data =
//           await response.json();

//         if (!response.ok) {
//           throw new Error(
//             data.message ||
//             "Unable to load flights."
//           );
//         }

//         const flights =
//           Array.isArray(
//             data.flights
//           )
//             ? data.flights
//             : [];

//         // ------------------------------------
//         // FILTER ROUTE
//         // ------------------------------------

//         const selectedFrom = normalizeCity(from);
//         const selectedTo = normalizeCity(to);

//         const routeFlights =
//           flights.filter((flight) => {
//             const fromValues = [
//               flight.fromCity,
//               flight.fromCode,
//               flight.fromAirport,
//               flight.from
//             ]
//               .filter(Boolean)
//               .map(normalizeCity);

//             const toValues = [
//               flight.toCity,
//               flight.toCode,
//               flight.toAirport,
//               flight.to
//             ]
//               .filter(Boolean)
//               .map(normalizeCity);

//             const fromMatch =
//               fromValues.includes(selectedFrom);

//             const toMatch =
//               toValues.includes(selectedTo);

//             return fromMatch && toMatch;
//           });

//         console.log(
//           "Route flights:",
//           routeFlights
//         );

//         console.log(
//           "Matched route:",
//           selectedFrom,
//           "=>",
//           selectedTo
//         );

//         // ------------------------------------
//         // GET UNIQUE DATES
//         // ------------------------------------

//         const uniqueDateStrings =
//           [
//             ...new Set(
//               routeFlights
//                 .map((flight) => {
//                   const value =
//                     flight.departureDate ||
//                     flight.date;

//                   if (!value) {
//                     return null;
//                   }

//                   const raw =
//                     String(value).trim();

//                   // YYYY-MM-DD or ISO date
//                   if (
//                     /^\\d{4}-\\d{2}-\\d{2}/.test(
//                       raw
//                     )
//                   ) {
//                     return raw.slice(0, 10);
//                   }

//                   // DD-MM-YYYY
//                   const dmy =
//                     raw.match(
//                       /^(\\d{2})-(\\d{2})-(\\d{4})$/
//                     );

//                   if (dmy) {
//                     return `${dmy[3]}-${dmy[2]}-${dmy[1]}`;
//                   }

//                   // DD/MM/YYYY
//                   const slash =
//                     raw.match(
//                       /^(\\d{2})\\/(\\d{2})\\/(\\d{4})$/
//                     );

//                   if (slash) {
//                     return `${slash[3]}-${slash[2]}-${slash[1]}`;
//                   }

//                   return null;
//                 })
//                 .filter(Boolean)
//             ),
//           ].sort();

//         console.log(
//           "Available dates:",
//           uniqueDateStrings
//         );

//         // ------------------------------------
//         // CONVERT TO DATE OBJECTS
//         // ------------------------------------

//         const dateObjects =
//           uniqueDateStrings
//             .map(
//               convertToDateObject
//             )
//             .filter(Boolean);

//         setAvailableDates(
//           dateObjects
//         );

//         // ------------------------------------
//         // RESET OLD DATE
//         // ------------------------------------

//         setDepartureDate(
//           null
//         );

//       } catch (error) {
//         console.error(
//           "Available Dates Error:",
//           error
//         );

//         setAvailableDates([]);

//         setDepartureDate(null);
//       } finally {
//         setLoadingDates(false);
//       }
//     };

//     fetchAvailableDates();

//   }, [from, to]);

//   // ==========================================
//   // SEARCH
//   // ==========================================

//   const handleSearch = () => {
//     const cleanFrom =
//       from.trim();

//     const cleanTo =
//       to.trim();

//     // ----------------------------------------
//     // FROM / TO
//     // ----------------------------------------

//     if (
//       !cleanFrom ||
//       !cleanTo
//     ) {
//       alert(
//         "Please select departure and destination."
//       );

//       return;
//     }

//     // ----------------------------------------
//     // SAME CITY
//     // ----------------------------------------

//     if (
//       normalizeCity(cleanFrom) ===
//       normalizeCity(cleanTo)
//     ) {
//       alert(
//         "Departure and Destination cannot be the same."
//       );

//       return;
//     }

//     // ----------------------------------------
//     // NO AVAILABLE DATE
//     // ----------------------------------------

//     if (
//       availableDates.length ===
//       0
//     ) {
//       alert(
//         `No flights available from ${cleanFrom} to ${cleanTo}.`
//       );

//       return;
//     }

//     // ----------------------------------------
//     // DATE
//     // ----------------------------------------

//     if (!departureDate) {
//       alert(
//         "Please select an available travel date."
//       );

//       return;
//     }

//     // ----------------------------------------
//     // CHECK SELECTED DATE
//     // ----------------------------------------

//     const selectedDate =
//       formatDateForSearch(
//         departureDate
//       );

//     const isAvailable =
//       availableDates.some(
//         (date) =>
//           formatDateForSearch(
//             date
//           ) === selectedDate
//       );

//     if (!isAvailable) {
//       alert(
//         "No flight is available on this date."
//       );

//       return;
//     }

//     console.log(
//       "CUSTOMER SEARCH:"
//     );

//     console.log(
//       "From:",
//       cleanFrom
//     );

//     console.log(
//       "To:",
//       cleanTo
//     );

//     console.log(
//       "Date:",
//       selectedDate
//     );

//     // ----------------------------------------
//     // GO TO FLIGHTS
//     // ----------------------------------------

//     navigate(
//       "/flights",
//       {
//         state: {
//           from: cleanFrom,

//           to: cleanTo,

//           departureDate:
//             selectedDate,

//           travellers,
//         },
//       }
//     );
//   };

//   // ==========================================
//   // FROM SELECT
//   // ==========================================

//   const handleFromSelect = (
//     city
//   ) => {
//     setFrom(city);

//     // When From changes,
//     // old destination is removed.

//     setTo("");

//     setDepartureDate(null);

//     setAvailableDates([]);

//     setShowFromSelector(
//       false
//     );
//   };

//   // ==========================================
//   // TO SELECT
//   // ==========================================

//   const handleToSelect = (
//     city
//   ) => {
//     setTo(city);

//     setDepartureDate(null);

//     setShowToSelector(
//       false
//     );
//   };

//   // ==========================================
//   // SWAP
//   // ==========================================

//   const handleSwap = () => {
//     const oldFrom =
//       from;

//     const oldTo =
//       to;

//     setFrom(oldTo);

//     setTo(oldFrom);

//     setDepartureDate(null);
//   };

//   // ==========================================
//   // TRAVELLER DONE
//   // ==========================================

//   const handleTravellerDone = (
//     data
//   ) => {
//     setTravellers(data);

//     setShowTraveller(
//       false
//     );
//   };

//   // ==========================================
//   // CLICK OUTSIDE
//   // ==========================================

//   useEffect(() => {
//     const handleClickOutside = (
//       event
//     ) => {

//       // FROM

//       if (
//         fromRef.current &&
//         !fromRef.current.contains(
//           event.target
//         )
//       ) {
//         setShowFromSelector(
//           false
//         );
//       }

//       // TO

//       if (
//         toRef.current &&
//         !toRef.current.contains(
//           event.target
//         )
//       ) {
//         setShowToSelector(
//           false
//         );
//       }

//       // TRAVELLER

//       if (
//         !event.target.closest(
//           ".traveller-popup"
//         ) &&
//         !event.target.closest(
//           ".selector-content"
//         )
//       ) {
//         setShowTraveller(
//           false
//         );
//       }
//     };

//     document.addEventListener(
//       "mousedown",
//       handleClickOutside
//     );

//     return () => {
//       document.removeEventListener(
//         "mousedown",
//         handleClickOutside
//       );
//     };

//   }, []);

//   // ==========================================
//   // UI
//   // ==========================================

//   return (
//     <section className="flight-search">

//       <div className="search-card">

//         {/* ====================================
//             TABS
//         ==================================== */}

//         <div className="trip-tabs">

//           <button
//             type="button"
//             className="active"
//           >
//             One Way
//           </button>

//           <button
//             type="button"
//           >
//             Round Trip
//           </button>

//           <button
//             type="button"
//           >
//             Multi City
//           </button>

//         </div>

//         {/* ====================================
//             SEARCH ROW
//         ==================================== */}

//         <div className="search-row">

//           {/* ==================================
//               FROM
//           ================================== */}

//           <div
//             className="field selector-field"
//             ref={fromRef}
//           >

//             <FaPlaneDeparture
//               className="icon"
//             />

//             <div
//               className="selector-content"
//               onClick={() =>
//                 setShowFromSelector(
//                   true
//                 )
//               }
//             >

//               <p>
//                 From
//               </p>

//               <h3>
//                 {from ||
//                   "Select City"}
//               </h3>

//               <span>
//                 Select Departure City
//               </span>

//             </div>

//             {showFromSelector && (

//               <div className="selector-popup">

//                 <CitySelector
//                   type="from"
//                   onSelect={
//                     handleFromSelect
//                   }
//                 />

//               </div>

//             )}

//           </div>

//           {/* ==================================
//               SWAP
//           ================================== */}

//           <button
//             type="button"
//             className="swap-btn"
//             onClick={
//               handleSwap
//             }
//             title="Swap cities"
//           >

//             <FaExchangeAlt />

//           </button>

//           {/* ==================================
//               TO
//           ================================== */}

//           <div
//             className="field selector-field"
//             ref={toRef}
//           >

//             <FaPlaneArrival
//               className="icon"
//             />

//             <div
//               className="selector-content"
//               onClick={() =>
//                 setShowToSelector(
//                   true
//                 )
//               }
//             >

//               <p>
//                 To
//               </p>

//               <h3>
//                 {to ||
//                   "Select City"}
//               </h3>

//               <span>
//                 Select Destination
//               </span>

//             </div>

//             {showToSelector && (

//               <div className="selector-popup">

//                 <CitySelector
//                   type="to"
//                   selectedFrom={
//                     from
//                   }
//                   onSelect={
//                     handleToSelect
//                   }
//                 />

//               </div>

//             )}

//           </div>

//           {/* ==================================
//               DATE
//           ================================== */}

//           <div className="field">

//             <FaCalendarAlt
//               className="icon"
//             />

//             <div>

//               <p>
//                 Departure
//               </p>













// <DatePicker
//   selected={departureDate}

//   onChange={(date) => {
//     if (!date) {
//       setDepartureDate(null);
//       return;
//     }

//     const selected =
//       formatDateForSearch(date);

//     const isAvailable =
//       availableDates.some(
//         (availableDate) =>
//           formatDateForSearch(
//             availableDate
//           ) === selected
//       );

//     if (isAvailable) {
//       setDepartureDate(date);
//     }
//   }}

//   dateFormat="dd MMM yyyy"

//   minDate={new Date()}

//   // Sirf available flight dates select hongi
//   includeDates={availableDates}

//   // Available flight dates ko highlight karo
//   dayClassName={(date) => {

//     const currentDate =
//       formatDateForSearch(date);

//     const isAvailable =
//       availableDates.some(
//         (availableDate) =>
//           formatDateForSearch(
//             availableDate
//           ) === currentDate
//       );

//     return isAvailable
//       ? "flight-available-day"
//       : undefined;
//   }}

//   className="date-picker"

//   placeholderText={
//     from && to
//       ? loadingDates
//         ? "Loading available dates..."
//         : availableDates.length > 0
//         ? "Select available date"
//         : "No flights available"
//       : "Select From & To first"
//   }

//   disabled={
//     !from ||
//     !to ||
//     loadingDates ||
//     availableDates.length === 0
//   }

//   onCalendarOpen={() => {

//     if (
//       from &&
//       to &&
//       availableDates.length === 0 &&
//       !loadingDates
//     ) {
//       alert(
//         `No flights available from ${from} to ${to}.`
//       );
//     }

//   }}
// />





//   {/* 





//                 <DatePicker
//                   selected={
//                     departureDate
//                   }

//                   onChange={(
//                     date
//                   ) => {

//                     setDepartureDate(
//                       date
//                     );

//                   }}

//                   dateFormat="dd MMM yyyy"

//                   minDate={
//                     new Date()
//                   }

//                   // --------------------------------
//                   // ONLY ADMIN ADDED DATES
//                   // --------------------------------

//                   includeDates={
//                     availableDates
//                   }

//                   className="date-picker"

//                   placeholderText={
//                     from && to
//                       ? loadingDates
//                         ? "Loading available dates..."
//                         : availableDates.length >
//                           0
//                           ? "Select available date"
//                           : "No flights available"
//                       : "Select From & To first"
//                   }

//                   disabled={
//                     !from ||
//                     !to ||
//                     loadingDates ||
//                     availableDates.length ===
//                     0
//                   }

//                   onCalendarOpen={() => {
//                     if (
//                       from &&
//                       to &&
//                       availableDates.length ===
//                       0 &&
//                       !loadingDates
//                     ) {
//                       alert(
//                         `No flights available from ${from} to ${to}.`
//                       );
//                     }
//                   }}

//                 /> */}

//               <span>

//                 {loadingDates
//                   ? "Checking flights..."
//                   : from && to
//                     ? availableDates.length >
//                       0
//                       ? `${availableDates.length} available date${availableDates.length >
//                         1
//                         ? "s"
//                         : ""
//                       }`
//                       : "No available dates"
//                     : "Select From & To first"}

//               </span>

//             </div>

//           </div>

//           {/* ==================================
//               TRAVELLERS
//           ================================== */}

//           <div className="field selector-field">

//             <FaUserFriends
//               className="icon"
//             />

//             <div
//               className="selector-content"
//               onClick={() =>
//                 setShowTraveller(
//                   true
//                 )
//               }
//             >

//               <p>
//                 Travellers
//               </p>

//               <h3>

//                 {
//                   travellers.adults
//                 }{" "}

//                 Adult

//                 {travellers.adults >
//                   1
//                   ? "s"
//                   : ""}

//               </h3>

//               <span>
//                 {travellers.cabin}
//               </span>

//             </div>

//             {showTraveller && (

//               <div className="selector-popup traveller-popup">

//                 <TravellerSelector
//                   travellers={
//                     travellers
//                   }

//                   onDone={
//                     handleTravellerDone
//                   }

//                   onClose={() =>
//                     setShowTraveller(
//                       false
//                     )
//                   }
//                 />

//               </div>

//             )}

//           </div>

//           {/* ==================================
//               SEARCH
//           ================================== */}

//           <button
//             type="button"
//             className="search-btn"
//             onClick={
//               handleSearch
//             }
//             title="Search Flights"
//           >

//             <FaSearch />

//           </button>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default FlightSearch;










































import "./FlightSearch.css";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CitySelector from "../CitySelector/CitySelector";
import TravellerSelector from "../TravellerSelector/TravellerSelector";

import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExchangeAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaSearch,
} from "react-icons/fa";

function FlightSearch() {
  const navigate = useNavigate();

  // ==========================================
  // FROM / TO
  // ==========================================

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // ==========================================
  // DATE
  // ==========================================

  const [departureDate, setDepartureDate] =
    useState(null);

  // ==========================================
  // AVAILABLE DATES
  // ==========================================

  const [availableDates, setAvailableDates] =
    useState([]);

  const [loadingDates, setLoadingDates] =
    useState(false);

  // ==========================================
  // POPUPS
  // ==========================================

  const [showFromSelector, setShowFromSelector] =
    useState(false);

  const [showToSelector, setShowToSelector] =
    useState(false);

  const [showTraveller, setShowTraveller] =
    useState(false);

  // ==========================================
  // TRAVELLERS
  // ==========================================

  const [travellers, setTravellers] =
    useState({
      adults: 1,
      children: 0,
      infants: 0,
      cabin: "Economy",
    });

  // ==========================================
  // REFS
  // ==========================================

  const fromRef = useRef(null);
  const toRef = useRef(null);

  // ==========================================
  // NORMALIZE CITY
  // ==========================================

  const normalizeCity = (value) => {
    if (!value) {
      return "";
    }

    return String(value)
      .trim()
      .toLowerCase();
  };

  // ==========================================
  // DATE STRING
  // ==========================================

  const formatDateForSearch = (date) => {
    if (!date) {
      return "";
    }

    const year =
      date.getFullYear();

    const month =
      String(
        date.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        date.getDate()
      ).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // ==========================================
  // STRING DATE → DATE OBJECT
  // ==========================================

  const convertToDateObject = (
    dateString
  ) => {
    if (!dateString) {
      return null;
    }

    const value =
      String(dateString).trim();

    const match =
      value.match(
        /^(\d{4})-(\d{2})-(\d{2})$/
      );

    if (!match) {
      return null;
    }

    const year =
      Number(match[1]);

    const month =
      Number(match[2]) - 1;

    const day =
      Number(match[3]);

    const date = new Date(
      year,
      month,
      day
    );

    date.setHours(
      0,
      0,
      0,
      0
    );

    return date;
  };

  // ==========================================
  // FETCH AVAILABLE DATES
  //
  // When From + To changes,
  // automatically find all flights
  // for that route.
  // ==========================================

  useEffect(() => {
    const fetchAvailableDates = async () => {
      // --------------------------------------
      // Both cities required
      // --------------------------------------

      if (!from || !to) {
        setAvailableDates([]);

        setDepartureDate(null);

        return;
      }

      // --------------------------------------
      // Same city protection
      // --------------------------------------

      if (
        normalizeCity(from) ===
        normalizeCity(to)
      ) {
        setAvailableDates([]);

        setDepartureDate(null);

        return;
      }

      try {
        setLoadingDates(true);

        console.log(
          "Checking available dates:"
        );

        console.log(
          "From:",
          from
        );

        console.log(
          "To:",
          to
        );

        // ------------------------------------
        // GET ALL FLIGHTS
        // ------------------------------------

        const response =
          await fetch(
            "http://localhost:5000/api/flights"
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
            "Unable to load flights."
          );
        }

        const flights =
          Array.isArray(
            data.flights
          )
            ? data.flights
            : [];

        // ------------------------------------
        // FILTER ROUTE
        // ------------------------------------

        const selectedFrom = normalizeCity(from);
        const selectedTo = normalizeCity(to);

        const routeFlights =
          flights.filter((flight) => {
            const fromValues = [
              flight.fromCity,
              flight.fromCode,
              flight.fromAirport,
              flight.from
            ]
              .filter(Boolean)
              .map(normalizeCity);

            const toValues = [
              flight.toCity,
              flight.toCode,
              flight.toAirport,
              flight.to
            ]
              .filter(Boolean)
              .map(normalizeCity);

            const fromMatch =
              fromValues.includes(selectedFrom);

            const toMatch =
              toValues.includes(selectedTo);

            return fromMatch && toMatch;
          });

        console.log(
          "Route flights:",
          routeFlights
        );

        console.log(
          "Matched route:",
          selectedFrom,
          "=>",
          selectedTo
        );

        // ------------------------------------
        // GET UNIQUE DATES
        // ------------------------------------

        const uniqueDateStrings =
          [
            ...new Set(
              routeFlights
                .map((flight) => {
                  const value =
                    flight.departureDate ||
                    flight.date;

                  if (!value) {
                    return null;
                  }

                  const raw =
                    String(value).trim();

                  // YYYY-MM-DD or ISO date
                  if (
                    /^\d{4}-\d{2}-\d{2}/.test(
                      raw
                    )
                  ) {
                    return raw.slice(0, 10);
                  }

                  // DD-MM-YYYY
                  const dmy =
                    raw.match(
                      /^(\d{2})-(\d{2})-(\d{4})$/
                    );

                  if (dmy) {
                    return `${dmy[3]}-${dmy[2]}-${dmy[1]}`;
                  }

                  // DD/MM/YYYY
                  const slash =
                    raw.match(
                      /^(\d{2})\/(\d{2})\/(\d{4})$/
                    );

                  if (slash) {
                    return `${slash[3]}-${slash[2]}-${slash[1]}`;
                  }

                  return null;
                })
                .filter(Boolean)
            ),
          ].sort();

        console.log(
          "Available dates:",
          uniqueDateStrings
        );

        // ------------------------------------
        // CONVERT TO DATE OBJECTS
        // ------------------------------------

        const dateObjects =
          uniqueDateStrings
            .map(
              convertToDateObject
            )
            .filter(Boolean);

        setAvailableDates(
          dateObjects
        );

        // ------------------------------------
        // RESET OLD DATE
        // ------------------------------------

        setDepartureDate(
          null
        );

      } catch (error) {
        console.error(
          "Available Dates Error:",
          error
        );

        setAvailableDates([]);

        setDepartureDate(null);
      } finally {
        setLoadingDates(false);
      }
    };

    fetchAvailableDates();

  }, [from, to]);

  // ==========================================
  // SEARCH
  // ==========================================

  const handleSearch = () => {
    const cleanFrom =
      from.trim();

    const cleanTo =
      to.trim();

    // ----------------------------------------
    // FROM / TO
    // ----------------------------------------

    if (
      !cleanFrom ||
      !cleanTo
    ) {
      alert(
        "Please select departure and destination."
      );

      return;
    }

    // ----------------------------------------
    // SAME CITY
    // ----------------------------------------

    if (
      normalizeCity(cleanFrom) ===
      normalizeCity(cleanTo)
    ) {
      alert(
        "Departure and Destination cannot be the same."
      );

      return;
    }

    // ----------------------------------------
    // NO AVAILABLE DATE
    // ----------------------------------------

    if (
      availableDates.length ===
      0
    ) {
      alert(
        `No flights available from ${cleanFrom} to ${cleanTo}.`
      );

      return;
    }

    // ----------------------------------------
    // DATE
    // ----------------------------------------

    if (!departureDate) {
      alert(
        "Please select an available travel date."
      );

      return;
    }

    // ----------------------------------------
    // CHECK SELECTED DATE
    // ----------------------------------------

    const selectedDate =
      formatDateForSearch(
        departureDate
      );

    const isAvailable =
      availableDates.some(
        (date) =>
          formatDateForSearch(
            date
          ) === selectedDate
      );

    if (!isAvailable) {
      alert(
        "No flight is available on this date."
      );

      return;
    }

    console.log(
      "CUSTOMER SEARCH:"
    );

    console.log(
      "From:",
      cleanFrom
    );

    console.log(
      "To:",
      cleanTo
    );

    console.log(
      "Date:",
      selectedDate
    );

    // ----------------------------------------
    // GO TO FLIGHTS
    // ----------------------------------------

    navigate(
      "/flights",
      {
        state: {
          from: cleanFrom,

          to: cleanTo,

          departureDate:
            selectedDate,

          travellers,
        },
      }
    );
  };

  // ==========================================
  // FROM SELECT
  // ==========================================

  const handleFromSelect = (
    city
  ) => {
    setFrom(city);

    // When From changes,
    // old destination is removed.

    setTo("");

    setDepartureDate(null);

    setAvailableDates([]);

    setShowFromSelector(
      false
    );
  };

  // ==========================================
  // TO SELECT
  // ==========================================

  const handleToSelect = (
    city
  ) => {
    setTo(city);

    setDepartureDate(null);

    setShowToSelector(
      false
    );
  };

  // ==========================================
  // SWAP
  // ==========================================

  const handleSwap = () => {
    const oldFrom =
      from;

    const oldTo =
      to;

    setFrom(oldTo);

    setTo(oldFrom);

    setDepartureDate(null);
  };

  // ==========================================
  // TRAVELLER DONE
  // ==========================================

  const handleTravellerDone = (
    data
  ) => {
    setTravellers(data);

    setShowTraveller(
      false
    );
  };

  // ==========================================
  // CLICK OUTSIDE
  // ==========================================

  useEffect(() => {
    const handleClickOutside = (
      event
    ) => {

      // FROM

      if (
        fromRef.current &&
        !fromRef.current.contains(
          event.target
        )
      ) {
        setShowFromSelector(
          false
        );
      }

      // TO

      if (
        toRef.current &&
        !toRef.current.contains(
          event.target
        )
      ) {
        setShowToSelector(
          false
        );
      }

      // TRAVELLER

      if (
        !event.target.closest(
          ".traveller-popup"
        ) &&
        !event.target.closest(
          ".selector-content"
        )
      ) {
        setShowTraveller(
          false
        );
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  // ==========================================
  // UI
  // ==========================================

  return (
    <section className="flight-search">

      <div className="search-card">

        {/* ====================================
            TABS
        ==================================== */}

        <div className="trip-tabs">

          <button
            type="button"
            className="active"
          >
            One Way
          </button>

          <button
            type="button"
          >
            Round Trip
          </button>

          <button
            type="button"
          >
            Multi City
          </button>

        </div>

        {/* ====================================
            SEARCH ROW
        ==================================== */}

        <div className="search-row">

          {/* ==================================
              FROM
          ================================== */}

          <div
            className="field selector-field"
            ref={fromRef}
          >

            <FaPlaneDeparture
              className="icon"
            />

            <div
              className="selector-content"
              onClick={() =>
                setShowFromSelector(
                  true
                )
              }
            >

              <p>
                From
              </p>

              <h3>
                {from ||
                  "Select City"}
              </h3>

              <span>
                Select Departure City
              </span>

            </div>

            {showFromSelector && (

              <div className="selector-popup">

                <CitySelector
                  type="from"
                  onSelect={
                    handleFromSelect
                  }
                />

              </div>

            )}

          </div>

          {/* ==================================
              SWAP
          ================================== */}

          <button
            type="button"
            className="swap-btn"
            onClick={
              handleSwap
            }
            title="Swap cities"
          >

            <FaExchangeAlt />

          </button>

          {/* ==================================
              TO
          ================================== */}

          <div
            className="field selector-field"
            ref={toRef}
          >

            <FaPlaneArrival
              className="icon"
            />

            <div
              className="selector-content"
              onClick={() =>
                setShowToSelector(
                  true
                )
              }
            >

              <p>
                To
              </p>

              <h3>
                {to ||
                  "Select City"}
              </h3>

              <span>
                Select Destination
              </span>

            </div>

            {showToSelector && (

              <div className="selector-popup">

                <CitySelector
                  type="to"
                  selectedFrom={
                    from
                  }
                  onSelect={
                    handleToSelect
                  }
                />

              </div>

            )}

          </div>

          {/* ==================================
              DATE
          ================================== */}

          <div className="field">

            <FaCalendarAlt
              className="icon"
            />

            <div>

              <p>
                Departure
              </p>













<DatePicker
  selected={departureDate}

  onChange={(date) => {
    if (!date) {
      setDepartureDate(null);
      return;
    }

    const selected =
      formatDateForSearch(date);

    const isAvailable =
      availableDates.some(
        (availableDate) =>
          formatDateForSearch(
            availableDate
          ) === selected
      );

    if (isAvailable) {
      setDepartureDate(date);
    }
  }}

  dateFormat="dd MMM yyyy"

  minDate={new Date()}

  // Sirf available flight dates select hongi
  includeDates={availableDates}

  // Available flight dates ko highlight karo
  dayClassName={(date) => {

    const currentDate =
      formatDateForSearch(date);

    const isAvailable =
      availableDates.some(
        (availableDate) =>
          formatDateForSearch(
            availableDate
          ) === currentDate
      );

    return isAvailable
      ? "flight-available-day"
      : undefined;
  }}

  className="date-picker"

  placeholderText={
    from && to
      ? loadingDates
        ? "Loading available dates..."
        : availableDates.length > 0
        ? "Select available date"
        : "No flights available"
      : "Select From & To first"
  }

  disabled={
    !from ||
    !to ||
    loadingDates ||
    availableDates.length === 0
  }

  onCalendarOpen={() => {

    if (
      from &&
      to &&
      availableDates.length === 0 &&
      !loadingDates
    ) {
      alert(
        `No flights available from ${from} to ${to}.`
      );
    }

  }}
/>





  {/* 





                <DatePicker
                  selected={
                    departureDate
                  }

                  onChange={(
                    date
                  ) => {

                    setDepartureDate(
                      date
                    );

                  }}

                  dateFormat="dd MMM yyyy"

                  minDate={
                    new Date()
                  }

                  // --------------------------------
                  // ONLY ADMIN ADDED DATES
                  // --------------------------------

                  includeDates={
                    availableDates
                  }

                  className="date-picker"

                  placeholderText={
                    from && to
                      ? loadingDates
                        ? "Loading available dates..."
                        : availableDates.length >
                          0
                          ? "Select available date"
                          : "No flights available"
                      : "Select From & To first"
                  }

                  disabled={
                    !from ||
                    !to ||
                    loadingDates ||
                    availableDates.length ===
                    0
                  }

                  onCalendarOpen={() => {
                    if (
                      from &&
                      to &&
                      availableDates.length ===
                      0 &&
                      !loadingDates
                    ) {
                      alert(
                        `No flights available from ${from} to ${to}.`
                      );
                    }
                  }}

                /> */}

              <span>

                {loadingDates
                  ? "Checking flights..."
                  : from && to
                    ? availableDates.length >
                      0
                      ? `${availableDates.length} available date${availableDates.length >
                        1
                        ? "s"
                        : ""
                      }`
                      : "No available dates"
                    : "Select From & To first"}

              </span>

            </div>

          </div>

          {/* ==================================
              TRAVELLERS
          ================================== */}

          <div className="field selector-field">

            <FaUserFriends
              className="icon"
            />

            <div
              className="selector-content"
              onClick={() =>
                setShowTraveller(
                  true
                )
              }
            >

              <p>
                Travellers
              </p>

              <h3>

                {
                  travellers.adults
                }{" "}

                Adult

                {travellers.adults >
                  1
                  ? "s"
                  : ""}

              </h3>

              <span>
                {travellers.cabin}
              </span>

            </div>

            {showTraveller && (

              <div className="selector-popup traveller-popup">

                <TravellerSelector
                  travellers={
                    travellers
                  }

                  onDone={
                    handleTravellerDone
                  }

                  onClose={() =>
                    setShowTraveller(
                      false
                    )
                  }
                />

              </div>

            )}

          </div>

          {/* ==================================
              SEARCH
          ================================== */}

          <button
            type="button"
            className="search-btn"
            onClick={
              handleSearch
            }
            title="Search Flights"
          >

            <FaSearch />

          </button>

        </div>

      </div>

    </section>
  );
}

export default FlightSearch;
