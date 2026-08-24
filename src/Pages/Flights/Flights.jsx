
// import "./Flights.css";

// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// import Navbar from "../../Components/Navbar/Navbar";
// import FlightSearch from "../../Components/FlightSearch/FlightSearch";
// import FlightCard from "../../Components/FlightCard/FlightCard";
// import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
// import SortBar from "../../Components/SortBar/SortBar";
// import SearchSummary from "../../Components/SearchSummary/SearchSummary";
// import Footer from "../../Components/Footer/Footer";

// function Flights() {
//   const location = useLocation();

//   // ==========================================
//   // FLIGHTS
//   // ==========================================

//   const [flights, setFlights] = useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState("");

//   // ==========================================
//   // FILTERS
//   // ==========================================

//   const [selectedAirlines, setSelectedAirlines] =
//     useState([]);

//   const [selectedStops, setSelectedStops] =
//     useState([]);

//   const [selectedCabins, setSelectedCabins] =
//     useState([]);

//   const [selectedTimes, setSelectedTimes] =
//     useState([]);

//   const [maxPrice, setMaxPrice] =
//     useState(50000);

//   const [sortBy, setSortBy] =
//     useState("price");

//   // ==========================================
//   // SEARCH DATA
//   // ==========================================

//   const searchData =
//     location.state || {};

//   const searchFrom =
//     searchData.from || "";

//   const searchTo =
//     searchData.to || "";

//   const searchDate =
//     searchData.departureDate || "";

//   const travellers =
//     searchData.travellers || {
//       adults: 1,
//       children: 0,
//       infants: 0,
//       cabin: "Economy",
//     };

//   // ==========================================
//   // NORMALIZE TEXT
//   // ==========================================

//   const normalizePlace = (
//     value
//   ) => {
//     if (!value) {
//       return "";
//     }

//     return String(value)
//       .replace(/\([^)]*\)/g, "")
//       .trim()
//       .toLowerCase();
//   };

//   // ==========================================
//   // NORMALIZE DATE
//   // ==========================================

//   const normalizeDate = (
//     value
//   ) => {
//     if (!value) {
//       return "";
//     }

//     // Date object
//     if (
//       value instanceof Date
//     ) {
//       const year =
//         value.getFullYear();

//       const month =
//         String(
//           value.getMonth() + 1
//         ).padStart(2, "0");

//       const day =
//         String(
//           value.getDate()
//         ).padStart(2, "0");

//       return `${year}-${month}-${day}`;
//     }

//     const stringValue =
//       String(value).trim();

//     // Already YYYY-MM-DD
//     if (
//       /^\d{4}-\d{2}-\d{2}$/.test(
//         stringValue
//       )
//     ) {
//       return stringValue;
//     }

//     // Handle ISO date
//     if (
//       stringValue.includes("T")
//     ) {
//       return stringValue
//         .split("T")[0];
//     }

//     return stringValue;
//   };

//   // ==========================================
//   // FETCH FLIGHTS
//   // ==========================================

//   const fetchFlights = async () => {
//     try {
//       setLoading(true);

//       setError("");

//       // const response =
//       //   await fetch(
//       //     "https://saiyed-travels-backend-1.onrender.com/api/flights"
//       //   );

//       const response = await fetch(
//   "http://localhost:5000/api/flights"
// );

//       const data =
//         await response.json();

//       console.log(
//         "CUSTOMER FLIGHTS:",
//         data
//       );

//       if (!response.ok) {
//         throw new Error(
//           data.message ||
//             "Unable to fetch flights."
//         );
//       }

//       const flightList =
//         Array.isArray(
//           data.flights
//         )
//           ? data.flights
//           : [];

//       setFlights(
//         flightList
//       );

//     } catch (error) {
//       console.error(
//         "Customer Flights Error:",
//         error
//       );

//       setFlights([]);

//       setError(
//         "Unable to connect to server. Please try again."
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
//   // AIRLINE FILTER
//   // ==========================================

//   const handleAirlineChange = (
//     airline
//   ) => {
//     setSelectedAirlines(
//       (previous) => {

//         if (
//           previous.includes(
//             airline
//           )
//         ) {
//           return previous.filter(
//             (item) =>
//               item !== airline
//           );
//         }

//         return [
//           ...previous,
//           airline,
//         ];
//       }
//     );
//   };

//   // ==========================================
//   // STOPS FILTER
//   // ==========================================

//   const handleStopsChange = (
//     stop
//   ) => {
//     setSelectedStops(
//       (previous) => {

//         if (
//           previous.includes(
//             stop
//           )
//         ) {
//           return previous.filter(
//             (item) =>
//               item !== stop
//           );
//         }

//         return [
//           ...previous,
//           stop,
//         ];
//       }
//     );
//   };

//   // ==========================================
//   // CABIN FILTER
//   // ==========================================

//   const handleCabinChange = (
//     cabin
//   ) => {
//     setSelectedCabins(
//       (previous) => {

//         if (
//           previous.includes(
//             cabin
//           )
//         ) {
//           return previous.filter(
//             (item) =>
//               item !== cabin
//           );
//         }

//         return [
//           ...previous,
//           cabin,
//         ];
//       }
//     );
//   };

//   // ==========================================
//   // TIME FILTER
//   // ==========================================

//   const handleTimeChange = (
//     time
//   ) => {
//     setSelectedTimes(
//       (previous) => {

//         if (
//           previous.includes(
//             time
//           )
//         ) {
//           return previous.filter(
//             (item) =>
//               item !== time
//           );
//         }

//         return [
//           ...previous,
//           time,
//         ];
//       }
//     );
//   };

//   // ==========================================
//   // RESET FILTERS
//   // ==========================================

//   const resetFilters = () => {
//     setSelectedAirlines([]);

//     setSelectedStops([]);

//     setSelectedCabins([]);

//     setSelectedTimes([]);

//     setMaxPrice(50000);

//     setSortBy("price");
//   };

//   // ==========================================
//   // GET PRICE
//   // ==========================================

//   const getPrice = (
//     flight
//   ) => {

//     if (
//       flight.finalPrice !==
//         undefined &&
//       flight.finalPrice !==
//         null
//     ) {
//       return Number(
//         flight.finalPrice
//       );
//     }

//     if (
//       Array.isArray(
//         flight.cabins
//       ) &&
//       flight.cabins.length >
//         0
//     ) {
//       return Number(
//         flight.cabins[0]
//           .price || 0
//       );
//     }

//     return 0;
//   };

//   // ==========================================
//   // GET CABIN NAMES
//   // ==========================================

//   const getCabinNames = (
//     flight
//   ) => {

//     if (
//       !Array.isArray(
//         flight.cabins
//       )
//     ) {
//       return [];
//     }

//     return flight.cabins
//       .map(
//         (cabin) =>
//           cabin.name
//       )
//       .filter(Boolean);
//   };

//   // ==========================================
//   // GET DEPARTURE HOUR
//   // ==========================================

//   const getDepartureHour = (
//     time
//   ) => {

//     if (!time) {
//       return 0;
//     }

//     const value =
//       String(time)
//         .trim()
//         .toUpperCase();

//     const match =
//       value.match(
//         /^(\d{1,2}):(\d{2})\s*(AM|PM)?/
//       );

//     if (!match) {
//       return 0;
//     }

//     let hour =
//       Number(match[1]);

//     const period =
//       match[3];

//     if (
//       period === "AM" &&
//       hour === 12
//     ) {
//       hour = 0;
//     }

//     if (
//       period === "PM" &&
//       hour !== 12
//     ) {
//       hour += 12;
//     }

//     return hour;
//   };

//   // ==========================================
//   // DURATION TO MINUTES
//   // ==========================================

//   const getMinutes = (
//     duration
//   ) => {

//     if (!duration) {
//       return 0;
//     }

//     const match =
//       String(duration).match(
//         /(\d+)h\s*(\d+)m/i
//       );

//     if (!match) {
//       return 0;
//     }

//     return (
//       Number(match[1]) * 60 +
//       Number(match[2])
//     );
//   };

//   // ==========================================
//   // FILTER FLIGHTS
//   // ==========================================

//   const filteredFlights =
//     flights
//       .filter((flight) => {

//         // ======================================
//         // FROM
//         // ======================================

//         const flightFrom =
//           normalizePlace(
//             flight.fromCity
//           );

//         const requestedFrom =
//           normalizePlace(
//             searchFrom
//           );

//         // ======================================
//         // TO
//         // ======================================

//         const flightTo =
//           normalizePlace(
//             flight.toCity
//           );

//         const requestedTo =
//           normalizePlace(
//             searchTo
//           );

//         // ======================================
//         // ROUTE MATCH
//         // ======================================

//         const routeMatch =
//           !requestedFrom ||
//           !requestedTo ||
//           (
//             flightFrom ===
//               requestedFrom &&
//             flightTo ===
//               requestedTo
//           );

//         // ======================================
//         // DATE MATCH
//         // ======================================

//         const flightDate =
//           normalizeDate(
//             flight.departureDate
//           );

//         const requestedDate =
//           normalizeDate(
//             searchDate
//           );

//         const dateMatch =
//           !requestedDate ||
//           flightDate ===
//             requestedDate;

//         // ======================================
//         // DEBUG
//         // ======================================

//         console.log(
//           "FLIGHT CHECK:",
//           {
//             flightNo:
//               flight.flightNo,

//             flightFrom:
//               flight.fromCity,

//             requestedFrom:
//               searchFrom,

//             flightTo:
//               flight.toCity,

//             requestedTo:
//               searchTo,

//             flightDate:
//               flightDate,

//             requestedDate:
//               requestedDate,

//             routeMatch:
//               routeMatch,

//             dateMatch:
//               dateMatch,
//           }
//         );

//         // ======================================
//         // AIRLINE
//         // ======================================

//         const airlineMatch =
//           selectedAirlines.length ===
//             0 ||
//           selectedAirlines.includes(
//             flight.airline
//           );

//         // ======================================
//         // STOPS
//         // ======================================

//         const stopMatch =
//           selectedStops.length ===
//             0 ||
//           selectedStops.includes(
//             flight.stops
//           );

//         // ======================================
//         // CABIN
//         // ======================================

//         const flightCabins =
//           getCabinNames(
//             flight
//           );

//         const cabinMatch =
//           selectedCabins.length ===
//             0 ||
//           selectedCabins.some(
//             (cabin) =>
//               flightCabins.includes(
//                 cabin
//               )
//           );

//         // ======================================
//         // TIME
//         // ======================================

//         const hour =
//           getDepartureHour(
//             flight.departureTime
//           );

//         const timeMatch =
//           selectedTimes.length ===
//             0 ||
//           selectedTimes.some(
//             (time) => {

//               if (
//                 time ===
//                 "earlyMorning"
//               ) {
//                 return (
//                   hour >= 0 &&
//                   hour < 6
//                 );
//               }

//               if (
//                 time ===
//                 "morning"
//               ) {
//                 return (
//                   hour >= 6 &&
//                   hour < 12
//                 );
//               }

//               if (
//                 time ===
//                 "afternoon"
//               ) {
//                 return (
//                   hour >= 12 &&
//                   hour < 18
//                 );
//               }

//               if (
//                 time ===
//                 "evening"
//               ) {
//                 return (
//                   hour >= 18 &&
//                   hour < 24
//                 );
//               }

//               return true;
//             }
//           );

//         // ======================================
//         // PRICE
//         // ======================================

//         const priceMatch =
//           getPrice(
//             flight
//           ) <=
//           Number(maxPrice);

//         // ======================================
//         // FINAL MATCH
//         // ======================================

//         return (
//           routeMatch &&
//           dateMatch &&
//           airlineMatch &&
//           stopMatch &&
//           cabinMatch &&
//           timeMatch &&
//           priceMatch
//         );
//       })

//       // ========================================
//       // SORT
//       // ========================================

//       .sort((a, b) => {

//         if (
//           sortBy ===
//           "price"
//         ) {
//           return (
//             getPrice(a) -
//             getPrice(b)
//           );
//         }

//         if (
//           sortBy ===
//           "duration"
//         ) {
//           return (
//             getMinutes(
//               a.duration
//             ) -
//             getMinutes(
//               b.duration
//             )
//           );
//         }

//         return 0;
//       });

//   // ==========================================
//   // PAGE
//   // ==========================================

//   return (
//     <>
//       <Navbar />

//       <section className="flights-page">

//         {/* ====================================
//             SEARCH
//         ==================================== */}

//         <div className="flight-search-area">

//           <FlightSearch />

//         </div>

//         {/* ====================================
//             MAIN
//         ==================================== */}

//         <div className="flight-layout">

//           {/* ==================================
//               FILTER SIDEBAR
//           ================================== */}

//           <FilterSidebar
//             selectedAirlines={
//               selectedAirlines
//             }

//             onAirlineChange={
//               handleAirlineChange
//             }

//             selectedStops={
//               selectedStops
//             }

//             onStopsChange={
//               handleStopsChange
//             }

//             selectedCabins={
//               selectedCabins
//             }

//             onCabinChange={
//               handleCabinChange
//             }

//             selectedTimes={
//               selectedTimes
//             }

//             onTimeChange={
//               handleTimeChange
//             }

//             maxPrice={
//               maxPrice
//             }

//             setMaxPrice={
//               setMaxPrice
//             }

//             resetFilters={
//               resetFilters
//             }
//           />

//           {/* ==================================
//               RESULTS
//           ================================== */}

//           <div className="flight-results">

//             {/* SEARCH SUMMARY */}

//             <SearchSummary
//               from={
//                 searchFrom
//               }

//               to={
//                 searchTo
//               }

//               departureDate={
//                 searchDate
//               }

//               travellers={
//                 travellers
//               }
//             />

//             {/* =================================
//                 HEADER
//             ================================= */}

//             <div className="results-header">

//               <div>

//                 <h2>
//                   Available Flights
//                 </h2>

//                 <p>
//                   {loading
//                     ? "Loading flights..."
//                     : `${filteredFlights.length} Flights Found`}
//                 </p>

//               </div>

//             </div>

//             {/* =================================
//                 SORT
//             ================================= */}

//             {!loading &&
//               !error &&
//               flights.length >
//                 0 && (

//                 <SortBar
//                   sortBy={
//                     sortBy
//                   }

//                   setSortBy={
//                     setSortBy
//                   }
//                 />

//               )}

//             {/* =================================
//                 LOADING
//             ================================= */}

//             {loading && (

//               <div className="flights-message">

//                 <div className="loading-spinner"></div>

//                 <h2>
//                   Loading Flights ✈️
//                 </h2>

//                 <p>
//                   Please wait...
//                 </p>

//               </div>

//             )}

//             {/* =================================
//                 ERROR
//             ================================= */}

//             {!loading &&
//               error && (

//                 <div className="flights-message error-message">

//                   <h2>
//                     Something went wrong
//                   </h2>

//                   <p>
//                     {error}
//                   </p>

//                   <button
//                     onClick={
//                       fetchFlights
//                     }
//                   >
//                     Try Again
//                   </button>

//                 </div>

//               )}

//             {/* =================================
//                 NO FLIGHTS
//             ================================= */}

//             {!loading &&
//               !error &&
//               flights.length ===
//                 0 && (

//                 <div className="flights-message">

//                   <h2>
//                     No Flights Available ✈️
//                   </h2>

//                   <p>
//                     No flights have been
//                     added by the admin yet.
//                   </p>

//                 </div>

//               )}

//             {/* =================================
//                 NO MATCH
//             ================================= */}

//             {!loading &&
//               !error &&
//               flights.length >
//                 0 &&
//               filteredFlights.length ===
//                 0 && (

//                 <div className="flights-message">

//                   <h2>
//                     No Flights Found ✈️
//                   </h2>

//                   <p>
//                     No flight is available
//                     for:
//                   </p>

//                   <strong>
//                     {searchFrom ||
//                       "Any City"}{" "}
//                     →{" "}
//                     {searchTo ||
//                       "Any City"}
//                   </strong>

//                   {searchDate && (
//                     <p>
//                       Travel Date:{" "}
//                       {searchDate}
//                     </p>
//                   )}

//                   <button
//                     onClick={
//                       resetFilters
//                     }
//                   >
//                     Reset Filters
//                   </button>

//                 </div>

//               )}

//             {/* =================================
//                 FLIGHT CARDS
//             ================================= */}

//             {!loading &&
//               !error &&
//               filteredFlights.length >
//                 0 && (

//                 <div className="flight-list">

//                   {filteredFlights.map(
//                     (flight) => (

//                       <FlightCard
//                         key={
//                           flight._id
//                         }

//                         flight={
//                           flight
//                         }
//                       />

//                     )
//                   )}

//                 </div>

//               )}

//           </div>

//         </div>

//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Flights;




import "./Flights.css";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import FlightSearch from "../../Components/FlightSearch/FlightSearch";
import FlightCard from "../../Components/FlightCard/FlightCard";
import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import SortBar from "../../Components/SortBar/SortBar";
import SearchSummary from "../../Components/SearchSummary/SearchSummary";
import Footer from "../../Components/Footer/Footer";

function Flights() {

  const location = useLocation();

  // ==========================================
  // FLIGHTS
  // ==========================================

  const [flights, setFlights] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  // ==========================================
  // FILTERS
  // ==========================================

  const [selectedAirlines, setSelectedAirlines] =
    useState([]);

  const [selectedStops, setSelectedStops] =
    useState([]);

  const [selectedCabins, setSelectedCabins] =
    useState([]);

  const [selectedTimes, setSelectedTimes] =
    useState([]);

  const [maxPrice, setMaxPrice] =
    useState(50000);

  const [sortBy, setSortBy] =
    useState("price");


  // ==========================================
  // SEARCH DATA
  // ==========================================

  const searchData =
    location.state || {};

  const searchFrom =
    searchData.from || "";

  const searchTo =
    searchData.to || "";

  const searchDate =
    searchData.departureDate || "";


  // ==========================================
  // TRAVELLERS
  // ==========================================

  const travellers =
    searchData.travellers || {

      adults: 1,

      children: 0,

      infants: 0,

      cabin: "Economy",

    };


  // ==========================================
  // NORMALIZE COUNTS
  // ==========================================

  const adultCount =
    Math.max(
      Number(
        travellers.adults
      ) || 1,
      1
    );


  const childCount =
    Math.max(
      Number(
        travellers.children
      ) || 0,
      0
    );


  const infantCount =
    Math.max(
      Number(
        travellers.infants
      ) || 0,
      0
    );


  // ==========================================
  // NORMALIZE TEXT
  // ==========================================

  const normalizePlace = (
    value
  ) => {

    if (!value) {
      return "";
    }

    return String(value)
      .replace(/\([^)]*\)/g, "")
      .trim()
      .toLowerCase();

  };


  // ==========================================
  // NORMALIZE DATE
  // ==========================================

  const normalizeDate = (
    value
  ) => {

    if (!value) {
      return "";
    }


    if (
      value instanceof Date
    ) {

      const year =
        value.getFullYear();

      const month =
        String(
          value.getMonth() + 1
        ).padStart(
          2,
          "0"
        );

      const day =
        String(
          value.getDate()
        ).padStart(
          2,
          "0"
        );

      return `${year}-${month}-${day}`;

    }


    const stringValue =
      String(value).trim();


    if (
      /^\d{4}-\d{2}-\d{2}$/.test(
        stringValue
      )
    ) {

      return stringValue;

    }


    if (
      stringValue.includes("T")
    ) {

      return stringValue
        .split("T")[0];

    }


    return stringValue;

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
          "http://localhost:5000/api/flights"
        );


      const data =
        await response.json();


      console.log(
        "CUSTOMER FLIGHTS:",
        data
      );


      if (!response.ok) {

        throw new Error(
          data.message ||
          "Unable to fetch flights."
        );

      }


      const flightList =
        Array.isArray(
          data.flights
        )
          ? data.flights
          : [];


      setFlights(
        flightList
      );

    } catch (error) {

      console.error(
        "Customer Flights Error:",
        error
      );


      setFlights([]);


      setError(
        "Unable to connect to server. Please try again."
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
  // AIRLINE FILTER
  // ==========================================

  const handleAirlineChange = (
    airline
  ) => {

    setSelectedAirlines(
      (previous) => {

        if (
          previous.includes(
            airline
          )
        ) {

          return previous.filter(
            (item) =>
              item !== airline
          );

        }


        return [
          ...previous,
          airline,
        ];

      }
    );

  };


  // ==========================================
  // STOPS FILTER
  // ==========================================

  const handleStopsChange = (
    stop
  ) => {

    setSelectedStops(
      (previous) => {

        if (
          previous.includes(
            stop
          )
        ) {

          return previous.filter(
            (item) =>
              item !== stop
          );

        }


        return [
          ...previous,
          stop,
        ];

      }
    );

  };


  // ==========================================
  // CABIN FILTER
  // ==========================================

  const handleCabinChange = (
    cabin
  ) => {

    setSelectedCabins(
      (previous) => {

        if (
          previous.includes(
            cabin
          )
        ) {

          return previous.filter(
            (item) =>
              item !== cabin
          );

        }


        return [
          ...previous,
          cabin,
        ];

      }
    );

  };


  // ==========================================
  // TIME FILTER
  // ==========================================

  const handleTimeChange = (
    time
  ) => {

    setSelectedTimes(
      (previous) => {

        if (
          previous.includes(
            time
          )
        ) {

          return previous.filter(
            (item) =>
              item !== time
          );

        }


        return [
          ...previous,
          time,
        ];

      }
    );

  };


  // ==========================================
  // RESET FILTERS
  // ==========================================

  const resetFilters = () => {

    setSelectedAirlines([]);

    setSelectedStops([]);

    setSelectedCabins([]);

    setSelectedTimes([]);

    setMaxPrice(50000);

    setSortBy("price");

  };


  // ==========================================
  // GET PASSENGER TOTAL PRICE
  // ==========================================

  const getPrice = (
    flight
  ) => {

    // ------------------------------------------
    // ADULT FARE
    // ------------------------------------------

    const adultFare =
      Number(
        flight.adultFare
      ) || 0;


    // ------------------------------------------
    // CHILD FARE
    // ------------------------------------------

    const childFare =
      Number(
        flight.childFare
      ) || 0;


    // ------------------------------------------
    // INFANT FARE
    // ------------------------------------------

    const infantFare =
      Number(
        flight.infantFare
      ) || 0;


    // ------------------------------------------
    // FALLBACK ADULT FARE
    // ------------------------------------------

    const fallbackFare =
      Number(
        flight.finalPrice
      ) ||
      Number(
        flight.cabins?.[0]
          ?.price
      ) ||
      0;


    const finalAdultFare =
      adultFare > 0
        ? adultFare
        : fallbackFare;


    // ------------------------------------------
    // CHILD FALLBACK
    // ------------------------------------------

    const finalChildFare =
      childFare > 0
        ? childFare
        : finalAdultFare;


    // ------------------------------------------
    // INFANT
    // ------------------------------------------

    const finalInfantFare =
      infantFare > 0
        ? infantFare
        : 0;


    // ------------------------------------------
    // FINAL PASSENGER TOTAL
    // ------------------------------------------

    const adultTotal =
      finalAdultFare *
      adultCount;


    const childTotal =
      finalChildFare *
      childCount;


    const infantTotal =
      finalInfantFare *
      infantCount;


    const total =
      adultTotal +
      childTotal +
      infantTotal;


    return total;

  };


  // ==========================================
  // GET CABIN NAMES
  // ==========================================

  const getCabinNames = (
    flight
  ) => {

    if (
      !Array.isArray(
        flight.cabins
      )
    ) {

      return [];

    }


    return flight.cabins
      .map(
        (cabin) =>
          cabin.name
      )
      .filter(Boolean);

  };


  // ==========================================
  // GET DEPARTURE HOUR
  // ==========================================

  const getDepartureHour = (
    time
  ) => {

    if (!time) {
      return 0;
    }


    const value =
      String(time)
        .trim()
        .toUpperCase();


    const match =
      value.match(
        /^(\d{1,2}):(\d{2})\s*(AM|PM)?/
      );


    if (!match) {
      return 0;
    }


    let hour =
      Number(match[1]);


    const period =
      match[3];


    if (
      period === "AM" &&
      hour === 12
    ) {

      hour = 0;

    }


    if (
      period === "PM" &&
      hour !== 12
    ) {

      hour += 12;

    }


    return hour;

  };


  // ==========================================
  // DURATION TO MINUTES
  // ==========================================

  const getMinutes = (
    duration
  ) => {

    if (!duration) {
      return 0;
    }


    const match =
      String(duration).match(
        /(\d+)h\s*(\d+)m/i
      );


    if (!match) {
      return 0;
    }


    return (
      Number(match[1]) * 60 +
      Number(match[2])
    );

  };


  // ==========================================
  // FILTER FLIGHTS
  // ==========================================

  const filteredFlights =
    flights
      .filter(
        (flight) => {

          // ======================================
          // FROM
          // ======================================

          const flightFrom =
            normalizePlace(
              flight.fromCity
            );


          const requestedFrom =
            normalizePlace(
              searchFrom
            );


          // ======================================
          // TO
          // ======================================

          const flightTo =
            normalizePlace(
              flight.toCity
            );


          const requestedTo =
            normalizePlace(
              searchTo
            );


          // ======================================
          // ROUTE MATCH
          // ======================================

          const routeMatch =
            !requestedFrom ||
            !requestedTo ||
            (
              flightFrom ===
                requestedFrom &&
              flightTo ===
                requestedTo
            );


          // ======================================
          // DATE MATCH
          // ======================================

          const flightDate =
            normalizeDate(
              flight.departureDate
            );


          const requestedDate =
            normalizeDate(
              searchDate
            );


          const dateMatch =
            !requestedDate ||
            flightDate ===
              requestedDate;


          // ======================================
          // DEBUG
          // ======================================

          console.log(
            "FLIGHT CHECK:",
            {
              flightNo:
                flight.flightNo,

              flightFrom:
                flight.fromCity,

              requestedFrom:
                searchFrom,

              flightTo:
                flight.toCity,

              requestedTo:
                searchTo,

              flightDate,

              requestedDate,

              routeMatch,

              dateMatch,

              adultCount,

              childCount,

              infantCount,

              calculatedPrice:
                getPrice(
                  flight
                ),
            }
          );


          // ======================================
          // AIRLINE
          // ======================================

          const airlineMatch =
            selectedAirlines.length ===
              0 ||
            selectedAirlines.includes(
              flight.airline
            );


          // ======================================
          // STOPS
          // ======================================

          const stopMatch =
            selectedStops.length ===
              0 ||
            selectedStops.includes(
              flight.stops
            );


          // ======================================
          // CABIN
          // ======================================

          const flightCabins =
            getCabinNames(
              flight
            );


          const cabinMatch =
            selectedCabins.length ===
              0 ||
            selectedCabins.some(
              (cabin) =>
                flightCabins.includes(
                  cabin
                )
            );


          // ======================================
          // TIME
          // ======================================

          const hour =
            getDepartureHour(
              flight.departureTime
            );


          const timeMatch =
            selectedTimes.length ===
              0 ||
            selectedTimes.some(
              (time) => {

                if (
                  time ===
                  "earlyMorning"
                ) {

                  return (
                    hour >= 0 &&
                    hour < 6
                  );

                }


                if (
                  time ===
                  "morning"
                ) {

                  return (
                    hour >= 6 &&
                    hour < 12
                  );

                }


                if (
                  time ===
                  "afternoon"
                ) {

                  return (
                    hour >= 12 &&
                    hour < 18
                  );

                }


                if (
                  time ===
                  "evening"
                ) {

                  return (
                    hour >= 18 &&
                    hour < 24
                  );

                }


                return true;

              }
            );


          // ======================================
          // PRICE
          // ======================================

          const priceMatch =
            getPrice(
              flight
            ) <=
            Number(
              maxPrice
            );


          // ======================================
          // FINAL MATCH
          // ======================================

          return (
            routeMatch &&
            dateMatch &&
            airlineMatch &&
            stopMatch &&
            cabinMatch &&
            timeMatch &&
            priceMatch
          );

        }
      )


      // ==========================================
      // SORT
      // ==========================================

      .sort(
        (a, b) => {

          if (
            sortBy ===
            "price"
          ) {

            return (
              getPrice(a) -
              getPrice(b)
            );

          }


          if (
            sortBy ===
            "duration"
          ) {

            return (
              getMinutes(
                a.duration
              ) -
              getMinutes(
                b.duration
              )
            );

          }


          return 0;

        }
      );


  // ==========================================
  // PAGE
  // ==========================================

  return (
    <>
      <Navbar />


      <section className="flights-page">


        {/* ====================================
              SEARCH
        ==================================== */}

        <div className="flight-search-area">

          <FlightSearch />

        </div>


        {/* ====================================
              MAIN
        ==================================== */}

        <div className="flight-layout">


          {/* ==================================
              FILTER SIDEBAR
          ================================== */}

          <FilterSidebar

            selectedAirlines={
              selectedAirlines
            }

            onAirlineChange={
              handleAirlineChange
            }

            selectedStops={
              selectedStops
            }

            onStopsChange={
              handleStopsChange
            }

            selectedCabins={
              selectedCabins
            }

            onCabinChange={
              handleCabinChange
            }

            selectedTimes={
              selectedTimes
            }

            onTimeChange={
              handleTimeChange
            }

            maxPrice={
              maxPrice
            }

            setMaxPrice={
              setMaxPrice
            }

            resetFilters={
              resetFilters
            }

          />


          {/* ==================================
              RESULTS
          ================================== */}

          <div className="flight-results">


            {/* SEARCH SUMMARY */}

            <SearchSummary

              from={
                searchFrom
              }

              to={
                searchTo
              }

              departureDate={
                searchDate
              }

              travellers={
                travellers
              }

            />


            {/* =================================
                HEADER
            ================================= */}

            <div className="results-header">

              <div>

                <h2>
                  Available Flights
                </h2>

                <p>

                  {loading
                    ? "Loading flights..."
                    : `${filteredFlights.length} Flights Found`}

                </p>

              </div>


              {/* PASSENGER SUMMARY */}

              <div
                className="passenger-price-summary"
                style={{
                  padding:
                    "10px 14px",

                  background:
                    "#f8fafc",

                  borderRadius:
                    "10px",

                  fontSize:
                    "13px",

                  color:
                    "#475569",
                }}
              >

                <strong>
                  {adultCount} Adult
                  {adultCount > 1
                    ? "s"
                    : ""}
                </strong>


                {childCount > 0 && (

                  <>
                    {" • "}

                    <strong>
                      {childCount} Child
                      {childCount > 1
                        ? "ren"
                        : ""}
                    </strong>

                  </>

                )}


                {infantCount > 0 && (

                  <>
                    {" • "}

                    <strong>
                      {infantCount} Infant
                      {infantCount > 1
                        ? "s"
                        : ""}
                    </strong>

                  </>

                )}

              </div>

            </div>


            {/* =================================
                SORT
            ================================= */}

            {!loading &&
              !error &&
              flights.length >
                0 && (

                <SortBar

                  sortBy={
                    sortBy
                  }

                  setSortBy={
                    setSortBy
                  }

                />

              )}


            {/* =================================
                LOADING
            ================================= */}

            {loading && (

              <div className="flights-message">

                <div className="loading-spinner"></div>

                <h2>
                  Loading Flights ✈️
                </h2>

                <p>
                  Please wait...
                </p>

              </div>

            )}


            {/* =================================
                ERROR
            ================================= */}

            {!loading &&
              error && (

                <div className="flights-message error-message">

                  <h2>
                    Something went wrong
                  </h2>

                  <p>
                    {error}
                  </p>


                  <button
                    onClick={
                      fetchFlights
                    }
                  >
                    Try Again
                  </button>

                </div>

              )}


            {/* =================================
                NO FLIGHTS
            ================================= */}

            {!loading &&
              !error &&
              flights.length ===
                0 && (

                <div className="flights-message">

                  <h2>
                    No Flights Available ✈️
                  </h2>

                  <p>
                    No flights have been
                    added by the admin yet.
                  </p>

                </div>

              )}


            {/* =================================
                NO MATCH
            ================================= */}

            {!loading &&
              !error &&
              flights.length >
                0 &&
              filteredFlights.length ===
                0 && (

                <div className="flights-message">

                  <h2>
                    No Flights Found ✈️
                  </h2>

                  <p>
                    No flight is available
                    for:
                  </p>

                  <strong>

                    {searchFrom ||
                      "Any City"}

                    {" → "}

                    {searchTo ||
                      "Any City"}

                  </strong>


                  {searchDate && (

                    <p>

                      Travel Date:{" "}
                      {searchDate}

                    </p>

                  )}


                  <button
                    onClick={
                      resetFilters
                    }
                  >
                    Reset Filters
                  </button>

                </div>

              )}


            {/* =================================
                FLIGHT CARDS
            ================================= */}

            {!loading &&
              !error &&
              filteredFlights.length >
                0 && (

                <div className="flight-list">

                  {filteredFlights.map(
                    (flight) => (

                      <FlightCard

                        key={
                          flight._id
                        }

                        flight={
                          flight
                        }

                        /* IMPORTANT */
                        travellers={
                          travellers
                        }

                      />

                    )
                  )}

                </div>

              )}

          </div>

        </div>

      </section>


      <Footer />

    </>
  );

}


export default Flights;