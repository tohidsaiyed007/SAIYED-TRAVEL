
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

// //   const [from, setFrom] = useState("Delhi");
// //   const [to, setTo] = useState("Mumbai");

// //   const [departureDate, setDepartureDate] = useState(new Date());

// //   const [showFromSelector, setShowFromSelector] = useState(false);
// //   const [showToSelector, setShowToSelector] = useState(false);
// //   const [showTraveller, setShowTraveller] = useState(false);

// //   const [travellers, setTravellers] = useState({
// //   adults: 1,
// //   children: 0,
// //   infants: 0,
// //   cabin: "Economy",
// // });
  

// //   const fromRef = useRef(null);
// //   const toRef = useRef(null);

// //     const handleSearch = () => {

// //     if (!from.trim() || !to.trim()) {
// //       alert("Please select departure and destination.");
// //       return;
// //     }

// //     if (from === to) {
// //       alert("Departure and Destination cannot be the same.");
// //       return;
// //     }

// //     // navigate("/flights", {
// //     //   state: {
// //     //     from,
// //     //     to,
// //     //     departureDate,
// //     //   },
// //     // });


// //     navigate("/flights", {
// //   state: {
// //     from,
// //     to,
// //     departureDate,
// //     travellers,
// //   },
// // });

// //   };

// //   const handleFromSelect = (city) => {
// //     setFrom(city);
// //     setShowFromSelector(false);
// //   };

// //   const handleToSelect = (city) => {
// //     setTo(city);
// //     setShowToSelector(false);
// //   };

// //   const handleSwap = () => {
// //     const temp = from;
// //     setFrom(to);
// //     setTo(temp);
// //   };



// //   const handleTravellerDone = (data) => {
// //   setTravellers(data);
// //   setShowTraveller(false);
// // };



// //   useEffect(() => {

// //     const handleClickOutside = (event) => {

// //       if (
// //         fromRef.current &&
// //         !fromRef.current.contains(event.target)
// //       ) {
// //         setShowFromSelector(false);
// //       }

// //     //   if (
// //     //     toRef.current &&
// //     //     !toRef.current.contains(event.target)
// //     //   ) {
// //     //     setShowToSelector(false);
// //     //   }

// //     if (
// //   !event.target.closest(".traveller-popup") &&
// //   !event.target.closest(".selector-content")
// // ) {
// //   setShowTraveller(false);
// // }

// //     };

// //     document.addEventListener("mousedown", handleClickOutside);

// //     return () => {
// //       document.removeEventListener(
// //         "mousedown",
// //         handleClickOutside
// //       );
// //     };

// //   }, []);

// //   return (     <section className="flight-search">

// //       <div className="search-card">

// //         <div className="trip-tabs">
// //           <button className="active">One Way</button>
// //           <button>Round Trip</button>
// //           <button>Multi City</button>
// //         </div>

// //         <div className="search-row">

// //           {/* FROM */}

// //           <div
// //             className="field selector-field"
// //             ref={fromRef}
// //           >

// //             <FaPlaneDeparture className="icon" />

// //             <div
// //               className="selector-content"
// //               onClick={() => setShowFromSelector(true)}
// //             >
// //               <p>From</p>

// //               <h3>{from}</h3>

// //               <span>Select Departure City</span>

// //             </div>

// //             {showFromSelector && (

// //               <div className="selector-popup">

// //                 <CitySelector onSelect={handleFromSelect} />

// //               </div>

// //             )}

// //           </div>

// //           {/* SWAP */}

// //           <button
// //             className="swap-btn"
// //             onClick={handleSwap}
// //           >

// //             <FaExchangeAlt />

// //           </button>

// //           {/* TO */}

// //           <div
// //             className="field selector-field"
// //             ref={toRef}
// //           >

// //             <FaPlaneArrival className="icon" />

// //             <div
// //               className="selector-content"
// //               onClick={() => setShowToSelector(true)}
// //             >

// //               <p>To</p>

// //               <h3>{to}</h3>

// //               <span>Select Destination</span>

// //             </div>

// //             {showToSelector && (

// //               <div className="selector-popup">

// //                 <CitySelector onSelect={handleToSelect} />

// //               </div>

// //             )}

// //           </div>

// //           {/* DATE */}

// //           <div className="field">

// //             <FaCalendarAlt className="icon" />

// //             <div>

// //               <p>Departure</p>

// //               <DatePicker
// //                 selected={departureDate}
// //                 onChange={(date) => setDepartureDate(date)}
// //                 dateFormat="dd MMM yyyy"
// //                 minDate={new Date()}
// //                 className="date-picker"
// //               />

// //               <span>Select Travel Date</span>

// //             </div>

// //           </div>

// //           {/* TRAVELLERS */}

// //           {/* <div className="field">

// //             <FaUserFriends className="icon" />

// //             <div>

// //               <p>Travellers</p>

// //               <h3>1 Adult</h3>

// //               <span>Economy</span>

// //             </div>

// //           </div> */}

// //           <div className="field selector-field">

// //   <FaUserFriends className="icon" />

// //   <div
// //     className="selector-content"
// //     onClick={() => setShowTraveller(true)}
// //   >

// //     <p>Travellers</p>

// //     {/* <h3>1 Adult</h3>

// //     <span>Economy</span> */}

// //     <h3>
// //   {travellers.adults} Adult
// //   {travellers.adults > 1 ? "s" : ""}
// // </h3>

// // <span>{travellers.cabin}</span>

// //   </div>

// //   {showTraveller && (

// //     <div className="selector-popup">

// //       {/* <TravellerSelector
// //         onClose={() => setShowTraveller(false)}
// //       /> */}


// // <TravellerSelector
// //   travellers={travellers}
// //   onDone={handleTravellerDone}
// //   onClose={() => setShowTraveller(false)}
// // />
// //     </div>

// //   )}

// // </div>

// //           {/* SEARCH */}

// //           <button
// //             className="search-btn"
// //             onClick={handleSearch}
// //           >

// //             <FaSearch />

// //           </button>

// //         </div>

// //       </div>

// //     </section>
// //       );
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
//     useState(new Date());

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

//   const [travellers, setTravellers] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0,
//     cabin: "Economy",
//   });

//   // ==========================================
//   // REFS
//   // ==========================================

//   const fromRef = useRef(null);

//   const toRef = useRef(null);

//   // ==========================================
//   // FORMAT DATE
//   // IMPORTANT:
//   // Admin database date:
//   // 2026-08-20
//   //
//   // Customer search date:
//   // 2026-08-20
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
//   // SEARCH
//   // ==========================================

//   const handleSearch = () => {
//     const cleanFrom =
//       from.trim();

//     const cleanTo =
//       to.trim();

//     if (!cleanFrom || !cleanTo) {
//       alert(
//         "Please select departure and destination."
//       );

//       return;
//     }

//     if (
//       cleanFrom.toLowerCase() ===
//       cleanTo.toLowerCase()
//     ) {
//       alert(
//         "Departure and Destination cannot be the same."
//       );

//       return;
//     }

//     if (!departureDate) {
//       alert(
//         "Please select travel date."
//       );

//       return;
//     }

//     // --------------------------------------
//     // CONVERT DATE
//     // --------------------------------------

//     const formattedDate =
//       formatDateForSearch(
//         departureDate
//       );

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
//       formattedDate
//     );

//     // --------------------------------------
//     // GO TO FLIGHTS
//     // --------------------------------------

//     navigate("/flights", {
//       state: {
//         from: cleanFrom,

//         to: cleanTo,

//         departureDate:
//           formattedDate,

//         travellers,
//       },
//     });
//   };

//   // ==========================================
//   // FROM SELECT
//   // ==========================================

//   const handleFromSelect = (
//     city
//   ) => {
//     setFrom(city);

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

//     setShowToSelector(
//       false
//     );
//   };

//   // ==========================================
//   // SWAP
//   // ==========================================

//   const handleSwap = () => {
//     setFrom(to);

//     setTo(from);
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

//             <FaPlaneDeparture className="icon" />

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
//                 {from || "Select City"}
//               </h3>

//               <span>
//                 Select Departure City
//               </span>

//             </div>

//             {showFromSelector && (

//               <div className="selector-popup">

//                 <CitySelector
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

//             <FaPlaneArrival className="icon" />

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
//                 {to || "Select City"}
//               </h3>

//               <span>
//                 Select Destination
//               </span>

//             </div>

//             {showToSelector && (

//               <div className="selector-popup">

//                 <CitySelector
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

//             <FaCalendarAlt className="icon" />

//             <div>

//               <p>
//                 Departure
//               </p>

//               <DatePicker
//                 selected={
//                   departureDate
//                 }

//                 onChange={(
//                   date
//                 ) =>
//                   setDepartureDate(
//                     date
//                   )
//                 }

//                 dateFormat="dd MMM yyyy"

//                 minDate={
//                   new Date()
//                 }

//                 className="date-picker"

//                 placeholderText="Select date"

//               />

//               <span>
//                 Select Travel Date
//               </span>

//             </div>

//           </div>

//           {/* ==================================
//               TRAVELLERS
//           ================================== */}

//           <div className="field selector-field">

//             <FaUserFriends className="icon" />

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

//                 {travellers.adults}{" "}

//                 Adult
//                 {travellers.adults >
//                 1
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
//               SEARCH BUTTON
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

    const parts =
      String(dateString).split("-");

    if (parts.length !== 3) {
      return null;
    }

    const year =
      Number(parts[0]);

    const month =
      Number(parts[1]) - 1;

    const day =
      Number(parts[2]);

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

        const routeFlights =
          flights.filter(
            (flight) => {

              const flightFrom =
                normalizeCity(
                  flight.fromCity
                );

              const flightTo =
                normalizeCity(
                  flight.toCity
                );

              return (
                flightFrom ===
                  normalizeCity(from) &&
                flightTo ===
                  normalizeCity(to)
              );
            }
          );

        console.log(
          "Route flights:",
          routeFlights
        );

        // ------------------------------------
        // GET UNIQUE DATES
        // ------------------------------------

        const uniqueDateStrings =
          [
            ...new Set(
              routeFlights
                .map(
                  (flight) =>
                    flight.departureDate
                )
                .filter(Boolean)
                .map(
                  (date) =>
                    String(date).trim()
                )
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

              />

              <span>

                {loadingDates
                  ? "Checking flights..."
                  : from && to
                  ? availableDates.length >
                    0
                    ? `${availableDates.length} available date${
                        availableDates.length >
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
