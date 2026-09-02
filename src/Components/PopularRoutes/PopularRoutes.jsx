// // // // // // // // import "./PopularRoutes.css";

// // // // // // // // function PopularRoutes() {
// // // // // // // //   return (
// // // // // // // //     <section className="popular-routes">

// // // // // // // //       <div className="section-title">
// // // // // // // //         <h2>Popular Flight Routes</h2>
// // // // // // // //         <p>Book the most searched destinations at the best fares.</p>
// // // // // // // //       </div>

// // // // // // // //       <div className="routes-grid">

// // // // // // // //         <div className="route-card">
// // // // // // // //           <img
// // // // // // // //             src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600"
// // // // // // // //             alt="Delhi"
// // // // // // // //           />
// // // // // // // //           <div className="route-content">
// // // // // // // //             <h3>Delhi → Mumbai</h3>
// // // // // // // //             <p>Starting From</p>
// // // // // // // //             <h4>₹2,499</h4>
// // // // // // // //             <button>Book Now</button>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <div className="route-card">
// // // // // // // //           <img
// // // // // // // //             src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600"
// // // // // // // //             alt="Dubai"
// // // // // // // //           />
// // // // // // // //           <div className="route-content">
// // // // // // // //             <h3>Delhi → Dubai</h3>
// // // // // // // //             <p>Starting From</p>
// // // // // // // //             <h4>₹12,999</h4>
// // // // // // // //             <button>Book Now</button>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <div className="route-card">
// // // // // // // //           <img
// // // // // // // //             src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600"
// // // // // // // //             alt="Goa"
// // // // // // // //           />
// // // // // // // //           <div className="route-content">
// // // // // // // //             <h3>Jaipur → Goa</h3>
// // // // // // // //             <p>Starting From</p>
// // // // // // // //             <h4>₹4,199</h4>
// // // // // // // //             <button>Book Now</button>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //       </div>

// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default PopularRoutes;


// // // // // // // import "./PopularRoutes.css";
// // // // // // // import { useEffect, useState } from "react";

// // // // // // // function PopularRoutes() {
// // // // // // //   const [routes, setRoutes] = useState([]);

// // // // // // //   useEffect(() => {
// // // // // // //     fetch("https://dummyjson.com/products?limit=6")
// // // // // // //       .then((res) => res.json())
// // // // // // //       .then((data) => {
// // // // // // //         setRoutes(data.products);
// // // // // // //       });
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <section className="popular-routes">

// // // // // // //       <div className="section-title">
// // // // // // //         <h2>Popular Flight Routes</h2>
// // // // // // //         <p>Book the most searched destinations at the best fares.</p>
// // // // // // //       </div>

// // // // // // //       <div className="routes-grid">

// // // // // // //         {routes.map((item) => (

// // // // // // //           <div className="route-card" key={item.id}>

// // // // // // //             <img src={item.thumbnail} alt={item.title} />

// // // // // // //             <div className="route-content">

// // // // // // //               <h3>{item.title}</h3>

// // // // // // //               <p>Starting From</p>

// // // // // // //               <h4>₹ {item.price * 100}</h4>

// // // // // // //               <button>Book Now</button>

// // // // // // //             </div>

// // // // // // //           </div>

// // // // // // //         ))}

// // // // // // //       </div>

// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default PopularRoutes;


// // // // // // // import "./PopularRoutes.css";

// // // // // // // function PopularRoutes() {

// // // // // // //   const routes = [
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       from: "Delhi",
// // // // // // //       to: "Mumbai",
// // // // // // //       price: "₹2,499",
// // // // // // //       image: "https://picsum.photos/600/400?random=101"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 2,
// // // // // // //       from: "Delhi",
// // // // // // //       to: "Dubai",
// // // // // // //       price: "₹12,999",
// // // // // // //       image: "https://picsum.photos/600/400?random=102"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 3,
// // // // // // //       from: "Mumbai",
// // // // // // //       to: "Goa",
// // // // // // //       price: "₹3,199",
// // // // // // //       image: "https://picsum.photos/600/400?random=103"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 4,
// // // // // // //       from: "Mumbai",
// // // // // // //       to: "Singapore",
// // // // // // //       price: "₹15,999",
// // // // // // //       image: "https://picsum.photos/600/400?random=104"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <section className="popular-routes">

// // // // // // //       <div className="section-title">
// // // // // // //         <h2>Popular Flight Routes</h2>
// // // // // // //         <p>Book the most searched destinations at the best fares.</p>
// // // // // // //       </div>

// // // // // // //       <div className="routes-grid">

// // // // // // //         {routes.map((item) => (

// // // // // // //           <div className="route-card" key={item.id}>

// // // // // // //             <img src={item.image} alt={item.from} />

// // // // // // //             <div className="route-content">

// // // // // // //               <h3>{item.from} → {item.to}</h3>

// // // // // // //               <p>Starting From</p>

// // // // // // //               <h4>{item.price}</h4>

// // // // // // //               <button>Book Now →</button>

// // // // // // //             </div>

// // // // // // //           </div>

// // // // // // //         ))}

// // // // // // //       </div>

// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default PopularRoutes;




// // // // // // import "./PopularRoutes.css";

// // // // // // function PopularRoutes() {

// // // // // //   const routes = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       from: "Delhi",
// // // // // //       to: "Mumbai",
// // // // // //       airline: "IndiGo",
// // // // // //       price: "₹2,499",
// // // // // //       image:
// // // // // //         "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       from: "Delhi",
// // // // // //       to: "Dubai",
// // // // // //       airline: "Emirates",
// // // // // //       price: "₹12,999",
// // // // // //       image:
// // // // // //         "https://images.unsplash.com/photo-1540339832862-474599807836?w=800&auto=format&fit=crop",
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       from: "Mumbai",
// // // // // //       to: "Goa",
// // // // // //       airline: "Air India",
// // // // // //       price: "₹3,199",
// // // // // //       image:
// // // // // //         "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
// // // // // //     },
// // // // // //     {
// // // // // //       id: 4,
// // // // // //       from: "Mumbai",
// // // // // //       to: "Singapore",
// // // // // //       airline: "Singapore Airlines",
// // // // // //       price: "₹15,999",
// // // // // //       image:
// // // // // //         "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section className="popular-routes">

// // // // // //       <div className="section-title">
// // // // // //         <h2>Popular Flight Routes</h2>
// // // // // //         <p>Discover the most booked domestic & international flights.</p>
// // // // // //       </div>

// // // // // //       <div className="routes-grid">

// // // // // //         {routes.map((item) => (
// // // // // //           <div className="route-card" key={item.id}>

// // // // // //             <img src={item.image} alt={item.to} />

// // // // // //             <div className="route-content">

// // // // // //               <span className="airline">{item.airline}</span>

// // // // // //               <h3>
// // // // // //                 {item.from} → {item.to}
// // // // // //               </h3>

// // // // // //               <p>Starting From</p>

// // // // // //               <h4>{item.price}</h4>

// // // // // //               <button>Book Flight</button>

// // // // // //             </div>

// // // // // //           </div>
// // // // // //         ))}

// // // // // //       </div>

// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // export default PopularRoutes;


// // // // // import "./PopularRoutes.css";
// // // // // import flights from "../../Data/flights";
// // // // // // import popularRoutes from "../../Data/popularRoutes";

// // // // // function PopularRoutes() {
// // // // //   return (
// // // // //     <section className="popular-routes">

// // // // //       <div className="section-title">
// // // // //         <h2>Popular Flight Routes</h2>
// // // // //         <p>Discover the most booked routes.</p>
// // // // //       </div>

// // // // //       <div className="routes-grid">

// // // // //         {flights.map((flight) => (
// // // // //           <div className="route-card" key={flight.id}>

// // // // //             <img src={flight.image} alt={flight.to} />

// // // // //             <div className="route-content">

// // // // //               <span className="airline">
// // // // //                 {flight.airline}
// // // // //               </span>

// // // // //               <h3>
// // // // //                 {flight.from} → {flight.to}
// // // // //               </h3>

// // // // //               <p>{flight.duration}</p>

// // // // //               <h4>₹ {flight.price}</h4>

// // // // //               <button>Book Flight</button>

// // // // //             </div>

// // // // //           </div>
// // // // //         ))}

// // // // //       </div>

// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // export default PopularRoutes;


// // // // import "./PopularRoutes.css";
// // // // import popularRoutes from "../../Data/popularRoutes";

// // // // function PopularRoutes() {
// // // //   return (
// // // //     <section className="popular-routes">

// // // //       <div className="section-title">
// // // //         <h2>Popular Flight Routes</h2>
// // // //         <p>Discover the most booked routes.</p>
// // // //       </div>

// // // //       <div className="routes-grid">

// // // //         {popularRoutes.map((flight) => (

// // // //           <div className="route-card" key={flight.id}>

// // // //             <img src={flight.image} alt={flight.to} />

// // // //             <div className="route-content">

// // // //               <span className="airline">
// // // //                 {flight.airline}
// // // //               </span>

// // // //               <h3>
// // // //                 {flight.from} → {flight.to}
// // // //               </h3>

// // // //               <p>{flight.duration}</p>

// // // //               <h4>₹ {flight.price}</h4>

// // // //               <button>Book Flight</button>

// // // //             </div>

// // // //           </div>

// // // //         ))}

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }

// // // // export default PopularRoutes;



// // // import { useEffect, useMemo, useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // import "./PopularRoutes.css";

// // // import {
// // //   FaPlaneDeparture,
// // //   FaClock,
// // //   FaArrowRight,
// // //   FaSuitcaseRolling,
// // //   FaChair,
// // // } from "react-icons/fa";


// // // const API_URL =
// // //   "https://saiyed-travels-backend-1.onrender.com/api/flights";


// // // function PopularRoutes() {

// // //   const navigate = useNavigate();

// // //   const [flights, setFlights] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState("");


// // //   // =====================================================
// // //   // GET USER ROLE
// // //   // =====================================================

// // //   const userRole =
// // //     localStorage.getItem("userRole") || "customer";


// // //   // =====================================================
// // //   // LOAD ADMIN ADDED FLIGHTS
// // //   // =====================================================

// // //   useEffect(() => {

// // //     let mounted = true;

// // //     const loadFlights = async () => {

// // //       try {

// // //         setLoading(true);
// // //         setError("");

// // //         const response = await fetch(API_URL, {
// // //           method: "GET",
// // //           cache: "no-store",
// // //         });


// // //         if (!response.ok) {
// // //           throw new Error("Failed to load flights");
// // //         }


// // //         const data = await response.json();


// // //         if (!mounted) return;


// // //         const flightList =
// // //           Array.isArray(data)
// // //             ? data
// // //             : Array.isArray(data.flights)
// // //               ? data.flights
// // //               : [];


// // //         setFlights(flightList);


// // //       } catch (err) {

// // //         console.error(
// // //           "PopularRoutes Error:",
// // //           err
// // //         );

// // //         if (mounted) {
// // //           setError(
// // //             "Flights load nahi ho pa rahi hain."
// // //           );
// // //         }

// // //       } finally {

// // //         if (mounted) {
// // //           setLoading(false);
// // //         }

// // //       }

// // //     };


// // //     loadFlights();


// // //     return () => {
// // //       mounted = false;
// // //     };

// // //   }, []);


// // //   // =====================================================
// // //   // GET PRICE ACCORDING TO LOGIN ROLE
// // //   // =====================================================

// // //   const getFlightPrice = (flight) => {

// // //     if (
// // //       userRole === "agent" ||
// // //       userRole === "admin"
// // //     ) {

// // //       return (
// // //         flight.agentPrice ??
// // //         flight.agentFare ??
// // //         flight.price ??
// // //         flight.customerPrice ??
// // //         0
// // //       );

// // //     }


// // //     return (
// // //       flight.customerPrice ??
// // //       flight.customerFare ??
// // //       flight.price ??
// // //       flight.agentPrice ??
// // //       0
// // //     );

// // //   };


// // //   // =====================================================
// // //   // GET AIRLINE LOGO
// // //   // =====================================================

// // //   const getAirlineLogo = (flight) => {

// // //     return (
// // //       flight.airlineLogo ||
// // //       flight.logo ||
// // //       flight.airlineImage ||
// // //       flight.image ||
// // //       ""
// // //     );

// // //   };


// // //   // =====================================================
// // //   // FORMAT PRICE
// // //   // =====================================================

// // //   const formatPrice = (price) => {

// // //     const number =
// // //       Number(price) || 0;

// // //     return number.toLocaleString("en-IN");

// // //   };


// // //   // =====================================================
// // //   // FORMAT DATE
// // //   // =====================================================

// // //   const formatDate = (date) => {

// // //     if (!date) return "Date not available";


// // //     try {

// // //       return new Date(date).toLocaleDateString(
// // //         "en-IN",
// // //         {
// // //           day: "2-digit",
// // //           month: "short",
// // //           year: "numeric",
// // //         }
// // //       );

// // //     } catch {

// // //       return date;

// // //     }

// // //   };


// // //   // =====================================================
// // //   // DISPLAY FLIGHTS
// // //   // =====================================================

// // //   const displayFlights = useMemo(() => {

// // //     return [...flights]
// // //       .filter((flight) => flight)
// // //       .slice(0, 8);

// // //   }, [flights]);


// // //   // =====================================================
// // //   // BOOK FLIGHT
// // //   // =====================================================

// // //   const handleBookFlight = (flight) => {

// // //     navigate("/flights", {
// // //       state: {
// // //         selectedFlight: flight,
// // //       },
// // //     });

// // //   };


// // //   // =====================================================
// // //   // VIEW ALL
// // //   // =====================================================

// // //   const handleViewAll = () => {

// // //     navigate("/flights");

// // //   };


// // //   // =====================================================
// // //   // LOADING
// // //   // =====================================================

// // //   if (loading) {

// // //     return (

// // //       <section className="popular-routes">

// // //         <div className="popular-header">

// // //           <div>
// // //             <span className="section-badge">
// // //               FLIGHTS
// // //             </span>

// // //             <h2>
// // //               Popular Flight Routes
// // //             </h2>

// // //             <p>
// // //               Latest flights added by Saiyed Travels.
// // //             </p>
// // //           </div>

// // //         </div>


// // //         <div className="routes-loading">

// // //           <div className="route-skeleton"></div>
// // //           <div className="route-skeleton"></div>
// // //           <div className="route-skeleton"></div>

// // //         </div>

// // //       </section>

// // //     );

// // //   }


// // //   // =====================================================
// // //   // ERROR
// // //   // =====================================================

// // //   if (error) {

// // //     return (

// // //       <section className="popular-routes">

// // //         <div className="popular-header">

// // //           <div>

// // //             <span className="section-badge">
// // //               FLIGHTS
// // //             </span>

// // //             <h2>
// // //               Popular Flight Routes
// // //             </h2>

// // //             <p>
// // //               Latest flights added by Saiyed Travels.
// // //             </p>

// // //           </div>

// // //         </div>


// // //         <div className="routes-message">

// // //           <FaPlaneDeparture />

// // //           <h3>
// // //             Flights unavailable
// // //           </h3>

// // //           <p>
// // //             {error}
// // //           </p>

// // //           <button
// // //             type="button"
// // //             onClick={handleViewAll}
// // //           >
// // //             View Flights
// // //           </button>

// // //         </div>

// // //       </section>

// // //     );

// // //   }


// // //   // =====================================================
// // //   // NO FLIGHTS
// // //   // =====================================================

// // //   if (displayFlights.length === 0) {

// // //     return (

// // //       <section className="popular-routes">

// // //         <div className="popular-header">

// // //           <div>

// // //             <span className="section-badge">
// // //               FLIGHTS
// // //             </span>

// // //             <h2>
// // //               Popular Flight Routes
// // //             </h2>

// // //             <p>
// // //               Latest flights added by Saiyed Travels.
// // //             </p>

// // //           </div>

// // //         </div>


// // //         <div className="routes-message">

// // //           <FaPlaneDeparture />

// // //           <h3>
// // //             No flights available
// // //           </h3>

// // //           <p>
// // //             Admin ne abhi koi flight add nahi ki hai.
// // //           </p>

// // //         </div>

// // //       </section>

// // //     );

// // //   }


// // //   // =====================================================
// // //   // MAIN
// // //   // =====================================================

// // //   return (

// // //     <section className="popular-routes">

// // //       {/* =================================================
// // //                     HEADER
// // //       ================================================= */}

// // //       <div className="popular-header">

// // //         <div className="popular-heading">

// // //           <span className="section-badge">
// // //             FLIGHTS
// // //           </span>

// // //           <h2>
// // //             Popular Flight Routes
// // //           </h2>

// // //           <p>
// // //             Latest flights added by Saiyed Travels.
// // //           </p>

// // //         </div>


// // //         <button
// // //           type="button"
// // //           className="view-all-btn"
// // //           onClick={handleViewAll}
// // //         >

// // //           View All Flights

// // //           <FaArrowRight />

// // //         </button>

// // //       </div>


// // //       {/* =================================================
// // //                     FLIGHT CARDS
// // //       ================================================= */}

// // //       <div className="routes-grid">

// // //         {displayFlights.map((flight, index) => {

// // //           const price =
// // //             getFlightPrice(flight);


// // //           const logo =
// // //             getAirlineLogo(flight);


// // //           const airline =
// // //             flight.airline ||
// // //             "Airline";


// // //           const from =
// // //             flight.from ||
// // //             flight.departureCity ||
// // //             "From";


// // //           const to =
// // //             flight.to ||
// // //             flight.arrivalCity ||
// // //             "To";


// // //           const flightNumber =
// // //             flight.flightNumber ||
// // //             flight.flightNo ||
// // //             "Flight";


// // //           const duration =
// // //             flight.duration ||
// // //             "Non-stop";


// // //           const seats =
// // //             flight.seats ??
// // //             flight.availableSeats ??
// // //             0;


// // //           const cabin =
// // //             flight.cabin ||
// // //             flight.class ||
// // //             "Economy";


// // //           return (

// // //             <article
// // //               className="route-card"
// // //               key={
// // //                 flight._id ||
// // //                 flight.id ||
// // //                 `${from}-${to}-${flightNumber}-${index}`
// // //               }
// // //             >


// // //               {/* =========================================
// // //                             TOP
// // //               ========================================= */}

// // //               <div className="route-card-top">

// // //                 <div className="airline-box">

// // //                   {logo ? (

// // //                     <img
// // //                       src={logo}
// // //                       alt={airline}
// // //                       className="airline-logo"
// // //                       onError={(e) => {
// // //                         e.currentTarget.style.display =
// // //                           "none";

// // //                         e.currentTarget
// // //                           .nextElementSibling
// // //                           ?.classList.add(
// // //                             "show-airline-icon"
// // //                           );
// // //                       }}
// // //                     />

// // //                   ) : null}


// // //                   <div
// // //                     className={`airline-icon ${
// // //                       logo
// // //                         ? ""
// // //                         : "show-airline-icon"
// // //                     }`}
// // //                   >

// // //                     <FaPlaneDeparture />

// // //                   </div>


// // //                   <div className="airline-info">

// // //                     <strong>
// // //                       {airline}
// // //                     </strong>

// // //                     <span>
// // //                       {flightNumber}
// // //                     </span>

// // //                   </div>

// // //                 </div>


// // //                 <span className="route-status">
// // //                   Scheduled
// // //                 </span>

// // //               </div>


// // //               {/* =========================================
// // //                             ROUTE
// // //               ========================================= */}

// // //               <div className="route-main">

// // //                 <div className="route-location">

// // //                   <strong>
// // //                     {from}
// // //                   </strong>

// // //                   <span>
// // //                     Departure
// // //                   </span>

// // //                 </div>


// // //                 <div className="route-line">

// // //                   <span className="route-dot"></span>

// // //                   <span className="route-dash"></span>

// // //                   <FaPlaneDeparture />

// // //                   <span className="route-dash"></span>

// // //                   <span className="route-dot"></span>

// // //                 </div>


// // //                 <div className="route-location right">

// // //                   <strong>
// // //                     {to}
// // //                   </strong>

// // //                   <span>
// // //                     Arrival
// // //                   </span>

// // //                 </div>

// // //               </div>


// // //               {/* =========================================
// // //                             DETAILS
// // //               ========================================= */}

// // //               <div className="route-details">

// // //                 <div className="route-detail">

// // //                   <FaClock />

// // //                   <div>

// // //                     <small>
// // //                       Duration
// // //                     </small>

// // //                     <strong>
// // //                       {duration}
// // //                     </strong>

// // //                   </div>

// // //                 </div>


// // //                 <div className="route-detail">

// // //                   <FaSuitcaseRolling />

// // //                   <div>

// // //                     <small>
// // //                       Baggage
// // //                     </small>

// // //                     <strong>
// // //                       {flight.checkInBaggage ||
// // //                         flight.baggage ||
// // //                         "As per fare"}
// // //                     </strong>

// // //                   </div>

// // //                 </div>


// // //                 <div className="route-detail">

// // //                   <FaChair />

// // //                   <div>

// // //                     <small>
// // //                       Cabin
// // //                     </small>

// // //                     <strong>
// // //                       {cabin}
// // //                     </strong>

// // //                   </div>

// // //                 </div>

// // //               </div>


// // //               {/* =========================================
// // //                             BOTTOM
// // //               ========================================= */}

// // //               <div className="route-card-bottom">

// // //                 <div className="route-price">

// // //                   <span>
// // //                     Starting from
// // //                   </span>

// // //                   <strong>
// // //                     ₹{formatPrice(price)}
// // //                   </strong>

// // //                   <small>
// // //                     per passenger
// // //                   </small>

// // //                 </div>


// // //                 <button
// // //                   type="button"
// // //                   className="book-flight-btn"
// // //                   onClick={() =>
// // //                     handleBookFlight(flight)
// // //                   }
// // //                 >

// // //                   Book Flight

// // //                   <FaArrowRight />

// // //                 </button>

// // //               </div>


// // //               {/* =========================================
// // //                             DATE
// // //               ========================================= */}

// // //               {flight.date && (

// // //                 <div className="route-date">

// // //                   Travel Date:
// // //                   {" "}
// // //                   <strong>
// // //                     {formatDate(flight.date)}
// // //                   </strong>

// // //                   {seats > 0 && (

// // //                     <span>
// // //                       {seats} seats available
// // //                     </span>

// // //                   )}

// // //                 </div>

// // //               )}

// // //             </article>

// // //           );

// // //         })}

// // //       </div>


// // //       {/* =================================================
// // //                     VIEW ALL MOBILE
// // //       ================================================= */}

// // //       <button
// // //         type="button"
// // //         className="mobile-view-all"
// // //         onClick={handleViewAll}
// // //       >

// // //         View All Flights

// // //         <FaArrowRight />

// // //       </button>

// // //     </section>

// // //   );

// // // }


// // // export default PopularRoutes;


// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./PopularRoutes.css";

// // import {
// //   FaPlaneDeparture,
// //   FaArrowRight,
// //   FaClock,
// //   FaSuitcaseRolling,
// //   FaChair,
// // } from "react-icons/fa";

// // const API_URL =
// //   "https://saiyed-travels-backend-1.onrender.com/api/flights";

// // const flightImages = [
// //   "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=85",
// //   "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=85",
// //   "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1600&q=85",
// //   "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1600&q=85",
// //   "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1600&q=85",
// //   "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=85",
// //   "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1600&q=85",
// //   "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1600&q=85",
// // ];

// // function PopularRoutes() {
// //   const navigate = useNavigate();

// //   const [flights, setFlights] = useState([]);
// //   const [imageIndex, setImageIndex] = useState(0);
// //   const [loading, setLoading] = useState(true);

// //   const userRole =
// //     localStorage.getItem("userRole") || "customer";

// //   /* ================================
// //      IMAGE AUTO CHANGE
// //   ================================= */

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setImageIndex((prev) =>
// //         (prev + 1) % flightImages.length
// //       );
// //     }, 1200);

// //     return () => clearInterval(timer);
// //   }, []);

// //   /* ================================
// //      LOAD FLIGHTS
// //   ================================= */

// //   useEffect(() => {
// //     const loadFlights = async () => {
// //       try {
// //         const response = await fetch(API_URL, {
// //           cache: "no-store",
// //         });

// //         if (!response.ok) {
// //           throw new Error("Failed to load flights");
// //         }

// //         const data = await response.json();

// //         const list = Array.isArray(data)
// //           ? data
// //           : Array.isArray(data.flights)
// //           ? data.flights
// //           : [];

// //         setFlights(list);
// //       } catch (error) {
// //         console.error(
// //           "Popular Routes Error:",
// //           error
// //         );
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadFlights();
// //   }, []);

// //   /* ================================
// //      PRICE
// //   ================================= */

// //   const getPrice = (flight) => {
// //     if (
// //       userRole === "agent" ||
// //       userRole === "admin"
// //     ) {
// //       return (
// //         flight.agentPrice ??
// //         flight.agentFare ??
// //         flight.price ??
// //         0
// //       );
// //     }

// //     return (
// //       flight.customerPrice ??
// //       flight.customerFare ??
// //       flight.price ??
// //       0
// //     );
// //   };

// //   const formatPrice = (price) => {
// //     return Number(price || 0).toLocaleString(
// //       "en-IN"
// //     );
// //   };

// //   /* ================================
// //      NO FLIGHT
// //   ================================= */

// //   if (!loading && flights.length === 0) {
// //     return (
// //       <section className="popular-routes">

// //         <div className="popular-title">
// //           <span>FLIGHTS</span>

// //           <h2>Popular Flight Routes</h2>

// //           <p>
// //             Discover the latest flights available
// //             with Saiyed Travels.
// //           </p>
// //         </div>

// //         <div className="no-flights-card">
// //           <FaPlaneDeparture />

// //           <h3>No Flights Available</h3>

// //           <p>
// //             Admin ne abhi koi flight add nahi ki hai.
// //           </p>
// //         </div>

// //       </section>
// //     );
// //   }

// //   /* ================================
// //      SELECT FIRST FLIGHT
// //   ================================= */

// //   const flight = flights[0];

// //   const from =
// //     flight.from ||
// //     flight.departureCity ||
// //     "Delhi";

// //   const to =
// //     flight.to ||
// //     flight.arrivalCity ||
// //     "Dubai";

// //   const airline =
// //     flight.airline ||
// //     "Saiyed Travels";

// //   const flightNumber =
// //     flight.flightNumber ||
// //     flight.flightNo ||
// //     "Flight";

// //   const duration =
// //     flight.duration ||
// //     "Non-stop";

// //   const baggage =
// //     flight.checkInBaggage ||
// //     flight.baggage ||
// //     "20 KG";

// //   const cabin =
// //     flight.cabin ||
// //     flight.class ||
// //     "Economy";

// //   /* ================================
// //      BOOK
// //   ================================= */

// //   const handleBook = () => {
// //     navigate("/flights", {
// //       state: {
// //         selectedFlight: flight,
// //       },
// //     });
// //   };

// //   return (
// //     <section className="popular-routes">

// //       {/* ==============================
// //              TITLE
// //       ============================== */}

// //       <div className="popular-title">

// //         <span>FLIGHTS</span>

// //         <h2>Popular Flight Routes</h2>

// //         <p>
// //           Discover the latest flights available
// //           with Saiyed Travels.
// //         </p>

// //       </div>


// //       {/* ==============================
// //              ONE BIG CARD
// //       ============================== */}

// //       <div className="big-flight-card">

// //         {/* IMAGE */}

// //         <div className="big-flight-image">

// //           <img
// //             key={imageIndex}
// //             src={flightImages[imageIndex]}
// //             alt="Flight"
// //           />

// //           <div className="image-overlay"></div>

// //           <div className="image-text">

// //             <span>
// //               ✈ FEATURED FLIGHT
// //             </span>

// //             <h3>
// //               Fly Anywhere With
// //               <br />
// //               Saiyed Travels
// //             </h3>

// //             <p>
// //               Comfortable journeys at the
// //               best available prices.
// //             </p>

// //           </div>


// //           {/* IMAGE DOTS */}

// //           <div className="image-dots">

// //             {flightImages.map((_, index) => (
// //               <button
// //                 key={index}
// //                 className={
// //                   index === imageIndex
// //                     ? "active"
// //                     : ""
// //                 }
// //                 onClick={() =>
// //                   setImageIndex(index)
// //                 }
// //                 aria-label={`Image ${
// //                   index + 1
// //                 }`}
// //               />
// //             ))}

// //           </div>

// //         </div>


// //         {/* FLIGHT INFORMATION */}

// //         <div className="big-flight-content">

// //           {/* TOP */}

// //           <div className="big-flight-top">

// //             <div className="airline-info">

// //               <div className="airline-icon">
// //                 <FaPlaneDeparture />
// //               </div>

// //               <div>

// //                 <strong>
// //                   {airline}
// //                 </strong>

// //                 <small>
// //                   {flightNumber}
// //                 </small>

// //               </div>

// //             </div>

// //             <span className="scheduled">
// //               Scheduled
// //             </span>

// //           </div>


// //           {/* ROUTE */}

// //           <div className="big-route">

// //             <div className="airport">

// //               <strong>{from}</strong>

// //               <span>
// //                 Departure
// //               </span>

// //             </div>


// //             <div className="route-middle">

// //               <span className="route-line"></span>

// //               <FaPlaneDeparture />

// //               <span className="route-line"></span>

// //               <small>
// //                 {duration}
// //               </small>

// //             </div>


// //             <div className="airport right">

// //               <strong>{to}</strong>

// //               <span>
// //                 Arrival
// //               </span>

// //             </div>

// //           </div>


// //           {/* DETAILS */}

// //           <div className="flight-details">

// //             <div>
// //               <FaClock />

// //               <span>
// //                 <small>Duration</small>
// //                 <b>{duration}</b>
// //               </span>
// //             </div>


// //             <div>
// //               <FaSuitcaseRolling />

// //               <span>
// //                 <small>Baggage</small>
// //                 <b>{baggage}</b>
// //               </span>
// //             </div>


// //             <div>
// //               <FaChair />

// //               <span>
// //                 <small>Cabin</small>
// //                 <b>{cabin}</b>
// //               </span>
// //             </div>

// //           </div>


// //           {/* BOTTOM */}

// //           <div className="flight-bottom">

// //             <div className="price">

// //               <small>
// //                 Starting from
// //               </small>

// //               <strong>
// //                 ₹{formatPrice(getPrice(flight))}
// //               </strong>

// //               <span>
// //                 per passenger
// //               </span>

// //             </div>


// //             <button
// //               className="book-flight"
// //               onClick={handleBook}
// //             >

// //               Book Flight

// //               <FaArrowRight />

// //             </button>

// //           </div>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default PopularRoutes;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./PopularRoutes.css";

// import {
//   FaPlaneDeparture,
//   FaArrowRight,
//   FaClock,
//   FaSuitcaseRolling,
//   FaChair,
// } from "react-icons/fa";


// const API_URL =
//   "https://saiyed-travels-backend-1.onrender.com/api/flights";


// const flightImages = [
//   "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=85",
//   "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=85",
//   "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1600&q=85",
//   "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1600&q=85",
//   "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1600&q=85",
//   "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=85",
//   "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1600&q=85",
//   "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1600&q=85",
// ];


// function PopularRoutes() {

//   const navigate = useNavigate();


//   const [flights, setFlights] = useState([]);

//   const [imageIndex, setImageIndex] = useState(0);

//   const [loading, setLoading] = useState(true);


//   /* =====================================================
//      USER ROLE
//   ===================================================== */

//   const userRole =
//     localStorage.getItem("userRole") || "customer";


//   /* =====================================================
//      AUTO CHANGE IMAGES
//   ===================================================== */

//   useEffect(() => {

//     const timer = setInterval(() => {

//       setImageIndex((prev) => {

//         return (
//           (prev + 1) %
//           flightImages.length
//         );

//       });

//     }, 1200);


//     return () => {

//       clearInterval(timer);

//     };

//   }, []);


//   /* =====================================================
//      LOAD FLIGHTS
//   ===================================================== */

//   useEffect(() => {

//     let mounted = true;


//     const loadFlights = async () => {

//       try {

//         setLoading(true);


//         const response = await fetch(
//           API_URL,
//           {
//             method: "GET",
//             cache: "no-store",
//           }
//         );


//         if (!response.ok) {

//           throw new Error(
//             `Failed to load flights: ${response.status}`
//           );

//         }


//         const data =
//           await response.json();


//         let list = [];


//         if (Array.isArray(data)) {

//           list = data;

//         } else if (
//           Array.isArray(data?.flights)
//         ) {

//           list = data.flights;

//         } else if (
//           Array.isArray(data?.data)
//         ) {

//           list = data.data;

//         }


//         if (mounted) {

//           setFlights(list);

//         }

//       } catch (error) {

//         console.error(
//           "Popular Routes Error:",
//           error
//         );


//         if (mounted) {

//           setFlights([]);

//         }

//       } finally {

//         if (mounted) {

//           setLoading(false);

//         }

//       }

//     };


//     loadFlights();


//     return () => {

//       mounted = false;

//     };

//   }, []);


//   /* =====================================================
//      LOADING
//   ===================================================== */

//   if (loading) {

//     return (

//       <section className="popular-routes">

//         <div className="popular-title">

//           <span>FLIGHTS</span>

//           <h2>
//             Popular Flight Routes
//           </h2>

//           <p>
//             Loading available flights...
//           </p>

//         </div>


//         <div className="no-flights-card">

//           <FaPlaneDeparture />

//           <h3>
//             Loading Flights...
//           </h3>

//           <p>
//             Please wait while flights
//             are loading.
//           </p>

//         </div>

//       </section>

//     );

//   }


//   /* =====================================================
//      NO FLIGHTS
//   ===================================================== */

//   if (
//     !Array.isArray(flights) ||
//     flights.length === 0
//   ) {

//     return (

//       <section className="popular-routes">

//         <div className="popular-title">

//           <span>FLIGHTS</span>

//           <h2>
//             Popular Flight Routes
//           </h2>

//           <p>
//             Discover the latest flights
//             available with Saiyed Travels.
//           </p>

//         </div>


//         <div className="no-flights-card">

//           <FaPlaneDeparture />

//           <h3>
//             No Flights Available
//           </h3>

//           <p>
//             Admin ne abhi koi flight
//             add nahi ki hai.
//           </p>

//         </div>

//       </section>

//     );

//   }


//   /* =====================================================
//      FIRST FLIGHT
//   ===================================================== */

//   const flight =
//     flights[0] || {};


//   /* =====================================================
//      FLIGHT DATA SAFELY
//   ===================================================== */

//   const from =
//     flight?.from ||
//     flight?.departureCity ||
//     flight?.origin ||
//     flight?.source ||
//     "Delhi";


//   const to =
//     flight?.to ||
//     flight?.arrivalCity ||
//     flight?.destination ||
//     flight?.dest ||
//     "Dubai";


//   const airline =
//     flight?.airline ||
//     flight?.airlineName ||
//     flight?.carrier ||
//     "Saiyed Travels";


//   const flightNumber =
//     flight?.flightNumber ||
//     flight?.flightNo ||
//     flight?.number ||
//     "Flight";


//   const duration =
//     flight?.duration ||
//     flight?.flightDuration ||
//     "Non-stop";


//   const baggage =
//     flight?.checkInBaggage ||
//     flight?.checkinBaggage ||
//     flight?.baggage ||
//     flight?.checkIn ||
//     "20 KG";


//   const cabin =
//     flight?.cabin ||
//     flight?.cabinClass ||
//     flight?.class ||
//     "Economy";


//   /* =====================================================
//      PRICE
//   ===================================================== */

//   const getPrice = () => {

//     if (
//       userRole === "agent" ||
//       userRole === "admin"
//     ) {

//       return (
//         flight?.agentPrice ??
//         flight?.agentFare ??
//         flight?.agent_price ??
//         flight?.price ??
//         flight?.fare ??
//         0
//       );

//     }


//     return (
//       flight?.customerPrice ??
//       flight?.customerFare ??
//       flight?.customer_price ??
//       flight?.price ??
//       flight?.fare ??
//       0
//     );

//   };


//   const formatPrice = (price) => {

//     const numericPrice =
//       Number(price || 0);


//     return numericPrice.toLocaleString(
//       "en-IN"
//     );

//   };


//   /* =====================================================
//      BOOK FLIGHT
//   ===================================================== */

//   const handleBook = () => {

//     navigate(
//       "/flights",
//       {
//         state: {
//           selectedFlight: flight,
//         },
//       }
//     );

//   };


//   /* =====================================================
//      RENDER
//   ===================================================== */

//   return (

//     <section className="popular-routes">


//       {/* =================================================
//           TITLE
//       ================================================= */}

//       <div className="popular-title">

//         <span>
//           FLIGHTS
//         </span>


//         <h2>
//           Popular Flight Routes
//         </h2>


//         <p>
//           Discover the latest flights
//           available with Saiyed Travels.
//         </p>

//       </div>



//       {/* =================================================
//           BIG SINGLE CARD
//       ================================================= */}

//       <div className="big-flight-card">


//         {/* ===============================================
//             IMAGE
//         =============================================== */}

//         <div className="big-flight-image">


//           <img
//             key={imageIndex}
//             src={
//               flightImages[imageIndex]
//             }
//             alt="Flight"
//           />


//           <div className="image-overlay"></div>


//           <div className="image-text">

//             <span>
//               ✈ FEATURED FLIGHT
//             </span>


//             <h3>

//               Fly Anywhere With

//               <br />

//               Saiyed Travels

//             </h3>


//             <p>

//               Comfortable journeys at the
//               best available prices.

//             </p>

//           </div>


//           {/* =========================================
//               IMAGE DOTS
//           ========================================= */}

//           <div className="image-dots">

//             {flightImages.map(
//               (_, index) => (

//                 <button
//                   key={index}
//                   type="button"
//                   className={
//                     index === imageIndex
//                       ? "active"
//                       : ""
//                   }
//                   onClick={() =>
//                     setImageIndex(index)
//                   }
//                   aria-label={
//                     `Show image ${
//                       index + 1
//                     }`
//                   }
//                 />

//               )
//             )}

//           </div>

//         </div>



//         {/* ===============================================
//             FLIGHT CONTENT
//         =============================================== */}

//         <div className="big-flight-content">


//           {/* =========================================
//               TOP
//           ========================================= */}

//           <div className="big-flight-top">


//             <div className="airline-info">

//               <div className="airline-icon">

//                 <FaPlaneDeparture />

//               </div>


//               <div>

//                 <strong>
//                   {airline}
//                 </strong>


//                 <small>
//                   {flightNumber}
//                 </small>

//               </div>

//             </div>


//             <span className="scheduled">
//               Scheduled
//             </span>

//           </div>



//           {/* =========================================
//               ROUTE
//           ========================================= */}

//           <div className="big-route">


//             <div className="airport">

//               <strong>
//                 {from}
//               </strong>


//               <span>
//                 Departure
//               </span>

//             </div>



//             <div className="route-middle">

//               <span className="route-line"></span>


//               <FaPlaneDeparture />


//               <span className="route-line"></span>


//               <small>
//                 {duration}
//               </small>

//             </div>



//             <div className="airport right">

//               <strong>
//                 {to}
//               </strong>


//               <span>
//                 Arrival
//               </span>

//             </div>

//           </div>



//           {/* =========================================
//               DETAILS
//           ========================================= */}

//           <div className="flight-details">


//             <div>

//               <FaClock />

//               <span>

//                 <small>
//                   Duration
//                 </small>

//                 <b>
//                   {duration}
//                 </b>

//               </span>

//             </div>



//             <div>

//               <FaSuitcaseRolling />

//               <span>

//                 <small>
//                   Baggage
//                 </small>

//                 <b>
//                   {baggage}
//                 </b>

//               </span>

//             </div>



//             <div>

//               <FaChair />

//               <span>

//                 <small>
//                   Cabin
//                 </small>

//                 <b>
//                   {cabin}
//                 </b>

//               </span>

//             </div>

//           </div>



//           {/* =========================================
//               BOTTOM
//           ========================================= */}

//           <div className="flight-bottom">


//             <div className="price">

//               <small>
//                 Starting from
//               </small>


//               <strong>

//                 ₹
//                 {formatPrice(
//                   getPrice()
//                 )}

//               </strong>


//               <span>
//                 per passenger
//               </span>

//             </div>



//             <button
//               type="button"
//               className="book-flight"
//               onClick={handleBook}
//             >

//               Book Flight

//               <FaArrowRight />

//             </button>

//           </div>

//         </div>

//       </div>

//     </section>

//   );

// }


// export default PopularRoutes;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PopularRoutes.css";

import { FaPlaneDeparture, FaArrowRight } from "react-icons/fa";

function PopularRoutes() {
  const navigate = useNavigate();

  const [imageIndex, setImageIndex] = useState(0);

  const flightImages = [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1800&q=90",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % flightImages.length);
    }, 900);

    return () => clearInterval(interval);
  }, [flightImages.length]);

  const goToFlights = () => {
    navigate("/flights");
  };

  return (
    <section className="popular-routes">

      <div className="section-title">
        <span>EXPLORE FLIGHTS</span>

        <h2>Fly With Saiyed Travels</h2>

        <p>
          Discover amazing destinations and book your
          next journey with us.
        </p>
      </div>

      <div className="flight-showcase-card">

        <img
          key={imageIndex}
          src={flightImages[imageIndex]}
          alt="Flight"
          className="flight-showcase-image"
        />

        <div className="flight-showcase-overlay"></div>

        <div className="flight-showcase-content">

          <div className="flight-badge">
            <FaPlaneDeparture />
            <span>FLIGHT TRAVEL</span>
          </div>

          <h2>
            Your Journey
            <br />
            Starts Here
          </h2>

          <p>
            Find the best flights, explore new
            destinations and travel comfortably
            with Saiyed Travels.
          </p>

          <button
            type="button"
            className="view-flights-btn"
            onClick={goToFlights}
          >
            <span>View Flights</span>
            <FaArrowRight />
          </button>

        </div>

        <div className="flight-image-dots">
          {flightImages.map((_, index) => (
            <span
              key={index}
              className={
                index === imageIndex ? "active" : ""
              }
            ></span>
          ))}
        </div>

      </div>

    </section>
  );
}

export default PopularRoutes;