

// // import "./Flights.css";
// // import { useState } from "react";
// // import { useLocation } from "react-router-dom";

// // import Navbar from "../../Components/Navbar/Navbar";
// // import FlightSearch from "../../Components/FlightSearch/FlightSearch";
// // import FlightCard from "../../Components/FlightCard/FlightCard";
// // import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
// // import SortBar from "../../Components/SortBar/SortBar";
// // import SearchSummary from "../../Components/SearchSummary/SearchSummary";
// // import Footer from "../../Components/Footer/Footer";

// // import flights from "../../Data/flights";

// // function Flights() {
// //   const location = useLocation();

// //   const [selectedAirlines, setSelectedAirlines] = useState([]);
// //   const [selectedStops, setSelectedStops] = useState([]);
// //   const [selectedCabins, setSelectedCabins] = useState([]); // NEW
// //   const [maxPrice, setMaxPrice] = useState(50000);
// //   const [sortBy, setSortBy] = useState("price");

// //   const searchData = location.state || {
// //     from: "Delhi",
// //     to: "Mumbai",
// //     departureDate: new Date(),
// //     travellers: {
// //       adults: 1,
// //       children: 0,
// //       infants: 0,
// //       cabin: "Economy",
// //     },
// //   };

// //   const handleAirlineChange = (airline) => {
// //     if (selectedAirlines.includes(airline)) {
// //       setSelectedAirlines(
// //         selectedAirlines.filter((item) => item !== airline)
// //       );
// //     } else {
// //       setSelectedAirlines([
// //         ...selectedAirlines,
// //         airline,
// //       ]);
// //     }
// //   };

// //   const handleStopsChange = (stop) => {
// //     if (selectedStops.includes(stop)) {
// //       setSelectedStops(
// //         selectedStops.filter((item) => item !== stop)
// //       );
// //     } else {
// //       setSelectedStops([
// //         ...selectedStops,
// //         stop,
// //       ]);
// //     }
// //   };

// //   // NEW
// //   const handleCabinChange = (cabin) => {
// //     if (selectedCabins.includes(cabin)) {
// //       setSelectedCabins(
// //         selectedCabins.filter((item) => item !== cabin)
// //       );
// //     } else {
// //       setSelectedCabins([
// //         ...selectedCabins,
// //         cabin,
// //       ]);
// //     }
// //   };

// //   const resetFilters = () => {
// //     setSelectedAirlines([]);
// //     setSelectedStops([]);
// //     setSelectedCabins([]); // NEW
// //     setMaxPrice(50000);
// //     setSortBy("price");
// //   };

// //   const getMinutes = (duration) => {
// //     const match = duration.match(/(\d+)h\s*(\d+)m/);

// //     if (!match) return 0;

// //     return Number(match[1]) * 60 + Number(match[2]);
// //   };

// //   const filteredFlights = flights
// //     .filter((flight) => {
// //       const routeMatch =
// //         flight.from.toLowerCase() ===
// //           searchData.from.toLowerCase() &&
// //         flight.to.toLowerCase() ===
// //           searchData.to.toLowerCase();

// //       const airlineMatch =
// //         selectedAirlines.length === 0 ||
// //         selectedAirlines.includes(flight.airline);

// //       const stopMatch =
// //         selectedStops.length === 0 ||
// //         selectedStops.includes(flight.stops);

// //       // NEW
// //       const cabinMatch =
// //         selectedCabins.length === 0 ||
// //         selectedCabins.includes(flight.cabin);

// //       const priceMatch =
// //         flight.price <= maxPrice;

// //       return (
// //         routeMatch &&
// //         airlineMatch &&
// //         stopMatch &&
// //         cabinMatch &&
// //         priceMatch
// //       );
// //     })
// //     .sort((a, b) => {
// //       if (sortBy === "price") {
// //         return a.price - b.price;
// //       }

// //       if (sortBy === "duration") {
// //         return (
// //           getMinutes(a.duration) -
// //           getMinutes(b.duration)
// //         );
// //       }

// //       return 0;
// //     });

// //       return (
// //     <>
// //       <Navbar />

// //       <section className="flights-page">
// //         <div className="flight-search-area">
// //           <FlightSearch />
// //         </div>

// //         <div className="flight-layout">
// //           <FilterSidebar
// //             selectedAirlines={selectedAirlines}
// //             onAirlineChange={handleAirlineChange}
// //             selectedStops={selectedStops}
// //             onStopsChange={handleStopsChange}

// //             /* NEW */
// //             selectedCabins={selectedCabins}
// //             onCabinChange={handleCabinChange}

// //             maxPrice={maxPrice}
// //             setMaxPrice={setMaxPrice}
// //             resetFilters={resetFilters}
// //           />

// //           <div className="flight-results">
// //             <SearchSummary
// //               from={searchData.from}
// //               to={searchData.to}
// //               departureDate={searchData.departureDate}
// //               travellers={searchData.travellers}
// //             />

// //             <div className="results-header">
// //               <h2>Available Flights</h2>

// //               <p>{filteredFlights.length} Flights Found</p>
// //             </div>

// //             <SortBar
// //               sortBy={sortBy}
// //               setSortBy={setSortBy}
// //             />

// //             <div className="flight-list">
// //               {filteredFlights.length > 0 ? (
// //                 filteredFlights.map((flight) => (
// //                   <FlightCard
// //                     key={flight.id}
// //                     flight={flight}
// //                   />
// //                 ))
// //               ) : (
// //                 <div
// //                   style={{
// //                     textAlign: "center",
// //                     padding: "60px 20px",
// //                     background: "#fff",
// //                     borderRadius: "12px",
// //                     boxShadow:
// //                       "0 5px 20px rgba(0,0,0,.08)",
// //                   }}
// //                 >
// //                   <h2>No Flights Found ✈️</h2>

// //                   <p>
// //                     Try changing your filters or
// //                     search for another route.
// //                   </p>

// //                   <button
// //                     onClick={resetFilters}
// //                     style={{
// //                       marginTop: "20px",
// //                       padding: "12px 25px",
// //                       border: "none",
// //                       borderRadius: "8px",
// //                       background: "#0d6efd",
// //                       color: "#fff",
// //                       cursor: "pointer",
// //                       fontWeight: "600",
// //                     }}
// //                   >
// //                     Reset Filters
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }

// // export default Flights;


// import "./Flights.css";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// import Navbar from "../../Components/Navbar/Navbar";
// import FlightSearch from "../../Components/FlightSearch/FlightSearch";
// import FlightCard from "../../Components/FlightCard/FlightCard";
// import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
// import SortBar from "../../Components/SortBar/SortBar";
// import SearchSummary from "../../Components/SearchSummary/SearchSummary";
// import Footer from "../../Components/Footer/Footer";

// import flights from "../../Data/flights";

// function Flights() {

//   const location = useLocation();

//   const [selectedAirlines, setSelectedAirlines] = useState([]);
//   const [selectedStops, setSelectedStops] = useState([]);
//   const [selectedCabins, setSelectedCabins] = useState([]);

//   // NEW
//   const [selectedTimes, setSelectedTimes] = useState([]);

//   const [maxPrice, setMaxPrice] = useState(50000);
//   const [sortBy, setSortBy] = useState("price");

//   const searchData = location.state || {
//     from: "Delhi",
//     to: "Mumbai",
//     departureDate: new Date(),
//     travellers: {
//       adults: 1,
//       children: 0,
//       infants: 0,
//       cabin: "Economy",
//     },
//   };

//   const handleAirlineChange = (airline) => {

//     if (selectedAirlines.includes(airline)) {

//       setSelectedAirlines(
//         selectedAirlines.filter(
//           (item) => item !== airline
//         )
//       );

//     } else {

//       setSelectedAirlines([
//         ...selectedAirlines,
//         airline,
//       ]);

//     }

//   };

//   const handleStopsChange = (stop) => {

//     if (selectedStops.includes(stop)) {

//       setSelectedStops(
//         selectedStops.filter(
//           (item) => item !== stop
//         )
//       );

//     } else {

//       setSelectedStops([
//         ...selectedStops,
//         stop,
//       ]);

//     }

//   };

//   const handleCabinChange = (cabin) => {

//     if (selectedCabins.includes(cabin)) {

//       setSelectedCabins(
//         selectedCabins.filter(
//           (item) => item !== cabin
//         )
//       );

//     } else {

//       setSelectedCabins([
//         ...selectedCabins,
//         cabin,
//       ]);

//     }

//   };

//   // NEW
//   const handleTimeChange = (time) => {

//     if (selectedTimes.includes(time)) {

//       setSelectedTimes(
//         selectedTimes.filter(
//           (item) => item !== time
//         )
//       );

//     } else {

//       setSelectedTimes([
//         ...selectedTimes,
//         time,
//       ]);

//     }

//   };

//   const resetFilters = () => {

//     setSelectedAirlines([]);
//     setSelectedStops([]);
//     setSelectedCabins([]);

//     // NEW
//     setSelectedTimes([]);

//     setMaxPrice(50000);
//     setSortBy("price");

//   };

//   const getMinutes = (duration) => {

//     const match =
//       duration.match(/(\d+)h\s*(\d+)m/);

//     if (!match) return 0;

//     return (
//       Number(match[1]) * 60 +
//       Number(match[2])
//     );

//   };




import "./Flights.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import FlightSearch from "../../Components/FlightSearch/FlightSearch";
import FlightCard from "../../Components/FlightCard/FlightCard";
import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import SortBar from "../../Components/SortBar/SortBar";
import SearchSummary from "../../Components/SearchSummary/SearchSummary";
import Footer from "../../Components/Footer/Footer";

import flights from "../../Data/flights";

function Flights() {
  const location = useLocation();

  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedCabins, setSelectedCabins] = useState([]);

  // NEW - Departure Time Filter
  const [selectedTimes, setSelectedTimes] = useState([]);

  const [maxPrice, setMaxPrice] = useState(50000);
  const [sortBy, setSortBy] = useState("price");

  const searchData = location.state || {
    from: "Delhi",
    to: "Mumbai",
    departureDate: new Date(),
    travellers: {
      adults: 1,
      children: 0,
      infants: 0,
      cabin: "Economy",
    },
  };

  const handleAirlineChange = (airline) => {
    if (selectedAirlines.includes(airline)) {
      setSelectedAirlines(
        selectedAirlines.filter((item) => item !== airline)
      );
    } else {
      setSelectedAirlines([
        ...selectedAirlines,
        airline,
      ]);
    }
  };

  const handleStopsChange = (stop) => {
    if (selectedStops.includes(stop)) {
      setSelectedStops(
        selectedStops.filter((item) => item !== stop)
      );
    } else {
      setSelectedStops([
        ...selectedStops,
        stop,
      ]);
    }
  };

  const handleCabinChange = (cabin) => {
    if (selectedCabins.includes(cabin)) {
      setSelectedCabins(
        selectedCabins.filter((item) => item !== cabin)
      );
    } else {
      setSelectedCabins([
        ...selectedCabins,
        cabin,
      ]);
    }
  };

  // NEW - Departure Time
  const handleTimeChange = (time) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(
        selectedTimes.filter((item) => item !== time)
      );
    } else {
      setSelectedTimes([
        ...selectedTimes,
        time,
      ]);
    }
  };

  const resetFilters = () => {
    setSelectedAirlines([]);
    setSelectedStops([]);
    setSelectedCabins([]);

    // NEW
    setSelectedTimes([]);

    setMaxPrice(50000);
    setSortBy("price");
  };

    const getMinutes = (duration) => {
    const match = duration.match(/(\d+)h\s*(\d+)m/);

    if (!match) return 0;

    return Number(match[1]) * 60 + Number(match[2]);
  };

  // NEW - Get Departure Hour
  const getDepartureHour = (time) => {
    return Number(time.split(":")[0]);
  };

  const filteredFlights = flights
    .filter((flight) => {
      const routeMatch =
        flight.from.toLowerCase() ===
          searchData.from.toLowerCase() &&
        flight.to.toLowerCase() ===
          searchData.to.toLowerCase();

      const airlineMatch =
        selectedAirlines.length === 0 ||
        selectedAirlines.includes(flight.airline);

      const stopMatch =
        selectedStops.length === 0 ||
        selectedStops.includes(flight.stops);

      const cabinMatch =
        selectedCabins.length === 0 ||
        selectedCabins.includes(flight.cabin);

      // NEW - Departure Time Filter
      const timeMatch =
        selectedTimes.length === 0 ||
        selectedTimes.some((time) => {
          const hour = getDepartureHour(
            flight.departure
          );

          switch (time) {
            case "earlyMorning":
              return hour >= 0 && hour < 6;

            case "morning":
              return hour >= 6 && hour < 12;

            case "afternoon":
              return hour >= 12 && hour < 18;

            case "evening":
              return hour >= 18 && hour < 24;

            default:
              return false;
          }
        });

      const priceMatch =
        flight.price <= maxPrice;

      return (
        routeMatch &&
        airlineMatch &&
        stopMatch &&
        cabinMatch &&
        timeMatch &&
        priceMatch
      );
    })
    .sort((a, b) => {
      if (sortBy === "price") {
        return a.price - b.price;
      }

      if (sortBy === "duration") {
        return (
          getMinutes(a.duration) -
          getMinutes(b.duration)
        );
      }

      return 0;
    });

    return (
  <>
    <Navbar />

    <section className="flights-page">
      <div className="flight-search-area">
        <FlightSearch />
      </div>

      <div className="flight-layout">

        <FilterSidebar
          selectedAirlines={selectedAirlines}
          onAirlineChange={handleAirlineChange}

          selectedStops={selectedStops}
          onStopsChange={handleStopsChange}

          selectedCabins={selectedCabins}
          onCabinChange={handleCabinChange}

          selectedTimes={selectedTimes}
          onTimeChange={handleTimeChange}

          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}

          resetFilters={resetFilters}
        />

        <div className="flight-results">

          <SearchSummary
            from={searchData.from}
            to={searchData.to}
            departureDate={searchData.departureDate}
            travellers={searchData.travellers}
          />

          <div className="results-header">
            <h2>Available Flights</h2>
            <p>{filteredFlights.length} Flights Found</p>
          </div>

          <SortBar
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <div className="flight-list">

            {filteredFlights.length > 0 ? (

              filteredFlights.map((flight) => (
                <FlightCard
                  key={flight.id}
                  flight={flight}
                />
              ))

            ) : (

              <div
                style={{
                  textAlign: "center",
                  padding: "60px 20px",
                  background: "#fff",
                  borderRadius: "12px",
                  boxShadow:
                    "0 5px 20px rgba(0,0,0,.08)",
                }}
              >

                <h2>No Flights Found ✈️</h2>

                <p>
                  Try changing your filters or search
                  for another route.
                </p>

                <button
                  onClick={resetFilters}
                  style={{
                    marginTop: "20px",
                    padding: "12px 25px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#0d6efd",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Reset Filters
                </button>

              </div>

            )}

          </div>

        </div>

      </div>
    {/* </section>

    <Footer />
  </>
); */}

  </section>

  <Footer />
</>
);
}

export default Flights;