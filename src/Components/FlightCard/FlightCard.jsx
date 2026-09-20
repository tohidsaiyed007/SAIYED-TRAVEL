
// // import "./FlightCard.css";

// // import { useNavigate } from "react-router-dom";

// // import {
// //   FaClock,
// //   FaPlane,
// //   FaWifi,
// //   FaUtensils,
// //   FaBolt,
// //   FaChair,
// //   FaPlaneDeparture,
// //   FaPlaneArrival,
// // } from "react-icons/fa";


// // function FlightCard({
// //   flight,
// //   travellers = {
// //     adults: 1,
// //     children: 0,
// //     infants: 0,
// //     cabin: "Economy",
// //   },
// // }) {

// //   const navigate = useNavigate();


// //   // =====================================================
// //   // AIRLINE LOGOS
// //   // =====================================================

// //   const airlineLogos = {

// //     indigo:
// //       "https://images.kiwi.com/airlines/64/6E.png",

// //     "air india":
// //       "https://images.kiwi.com/airlines/64/AI.png",

// //     spicejet:
// //       "https://images.kiwi.com/airlines/64/SG.png",

// //     vistara:
// //       "https://images.kiwi.com/airlines/64/UK.png",

// //     "air india express":
// //       "https://images.kiwi.com/airlines/64/IX.png",

// //     emirates:
// //       "https://images.kiwi.com/airlines/64/EK.png",

// //     "qatar airways":
// //       "https://images.kiwi.com/airlines/64/QR.png",

// //     "etihad airways":
// //       "https://images.kiwi.com/airlines/64/EY.png",

// //     "oman air":
// //       "https://images.kiwi.com/airlines/64/WY.png",

// //     "saudi airlines":
// //       "https://images.kiwi.com/airlines/64/SV.png",

// //     "singapore airlines":
// //       "https://images.kiwi.com/airlines/64/SQ.png",

// //     lufthansa:
// //       "https://images.kiwi.com/airlines/64/LH.png",

// //     "british airways":
// //       "https://images.kiwi.com/airlines/64/BA.png",

// //     "turkish airlines":
// //       "https://images.kiwi.com/airlines/64/TK.png",

// //     "malaysia airlines":
// //       "https://images.kiwi.com/airlines/64/MH.png",

// //     "thai airways":
// //       "https://images.kiwi.com/airlines/64/TG.png",

// //     "indian airlines":
// //       "https://images.kiwi.com/airlines/64/IC.png",

// //   };


// //   const airlineName =
// //     String(
// //       flight.airline || ""
// //     )
// //       .trim()
// //       .toLowerCase();


// //   const airlineLogo =
// //     airlineLogos[
// //       airlineName
// //     ];


// //   // =====================================================
// //   // PASSENGER COUNTS
// //   // =====================================================

// //   const adultCount =
// //     Math.max(
// //       Number(
// //         travellers?.adults
// //       ) || 1,
// //       1
// //     );


// //   const childCount =
// //     Math.max(
// //       Number(
// //         travellers?.children
// //       ) || 0,
// //       0
// //     );


// //   const infantCount =
// //     Math.max(
// //       Number(
// //         travellers?.infants
// //       ) || 0,
// //       0
// //     );


// //   // =====================================================
// //   // PASSENGER FARES
// //   // =====================================================

// //   const adultFare =
// //     Number(
// //       flight.adultFare
// //     ) || 0;


// //   const childFare =
// //     Number(
// //       flight.childFare
// //     ) || 0;


// //   const infantFare =
// //     Number(
// //       flight.infantFare
// //     ) || 0;


// //   // =====================================================
// //   // FALLBACK FARE
// //   //
// //   // Agar admin ne adultFare nahi diya hai,
// //   // to old finalPrice use hoga.
// //   // =====================================================

// //   const fallbackFare =
// //     flight.finalPrice !==
// //       undefined &&
// //     flight.finalPrice !== null
// //       ? Number(
// //           flight.finalPrice
// //         ) || 0
// //       : Number(
// //           flight.cabins?.[0]
// //             ?.price || 0
// //         );


// //   const finalAdultFare =
// //     adultFare > 0
// //       ? adultFare
// //       : fallbackFare;


// //   const finalChildFare =
// //     childFare > 0
// //       ? childFare
// //       : finalAdultFare;


// //   const finalInfantFare =
// //     infantFare > 0
// //       ? infantFare
// //       : 0;


// //   // =====================================================
// //   // TOTAL PASSENGER FARE
// //   // =====================================================

// //   const adultTotal =
// //     finalAdultFare *
// //     adultCount;


// //   const childTotal =
// //     finalChildFare *
// //     childCount;


// //   const infantTotal =
// //     finalInfantFare *
// //     infantCount;


// //   const passengerFareTotal =
// //     adultTotal +
// //     childTotal +
// //     infantTotal;


// //   // =====================================================
// //   // MEAL PRICES
// //   // =====================================================

// //   const adultMealPrice =
// //     Number(
// //       flight.adultMealPrice
// //     ) || 0;


// //   const childMealPrice =
// //     Number(
// //       flight.childMealPrice
// //     ) || 0;


// //   const infantMealPrice =
// //     Number(
// //       flight.infantMealPrice
// //     ) || 0;


// //   // =====================================================
// //   // SEAT PRICES
// //   // =====================================================

// //   const adultSeatPrice =
// //     Number(
// //       flight.adultSeatPrice
// //     ) || 0;


// //   const childSeatPrice =
// //     Number(
// //       flight.childSeatPrice
// //     ) || 0;


// //   const infantSeatPrice =
// //     Number(
// //       flight.infantSeatPrice
// //     ) || 0;


// //   // =====================================================
// //   // BAGGAGE PRICES
// //   // =====================================================

// //   const adultBaggagePrice =
// //     Number(
// //       flight.adultBaggagePrice
// //     ) || 0;


// //   const childBaggagePrice =
// //     Number(
// //       flight.childBaggagePrice
// //     ) || 0;


// //   const infantBaggagePrice =
// //     Number(
// //       flight.infantBaggagePrice
// //     ) || 0;


// //   // =====================================================
// //   // OPTIONAL SERVICE TOTALS
// //   //
// //   // Ye prices abhi sirf booking ko pass honge.
// //   // Customer actually service select karega tab
// //   // Booking page par add honge.
// //   // =====================================================

// //   const maximumMealTotal =
// //     adultMealPrice * adultCount +
// //     childMealPrice * childCount +
// //     infantMealPrice * infantCount;


// //   const maximumSeatTotal =
// //     adultSeatPrice * adultCount +
// //     childSeatPrice * childCount +
// //     infantSeatPrice * infantCount;


// //   const maximumBaggageTotal =
// //     adultBaggagePrice * adultCount +
// //     childBaggagePrice * childCount +
// //     infantBaggagePrice * infantCount;


// //   // =====================================================
// //   // CABINS
// //   // =====================================================

// //   const cabins =
// //     Array.isArray(
// //       flight.cabins
// //     )
// //       ? flight.cabins
// //       : [];


// //   const cabinNames =
// //     cabins
// //       .map(
// //         (cabin) =>
// //           cabin.name
// //       )
// //       .filter(Boolean);


// //   const cabinText =
// //     cabinNames.length > 0
// //       ? cabinNames.join(
// //           " • "
// //         )
// //       : "Economy";


// //   // =====================================================
// //   // SEATS
// //   // =====================================================

// //   const totalSeats =
// //     cabins.reduce(
// //       (
// //         total,
// //         cabin
// //       ) =>
// //         total +
// //         Number(
// //           cabin.totalSeats ||
// //             0
// //         ),
// //       0
// //     );


// //   const availableSeats =
// //     cabins.reduce(
// //       (
// //         total,
// //         cabin
// //       ) =>
// //         total +
// //         Number(
// //           cabin.availableSeats ||
// //             0
// //         ),
// //       0
// //     );


// //   // =====================================================
// //   // PRICE FORMAT
// //   // =====================================================

// //   const formattedPrice =
// //     passengerFareTotal.toLocaleString(
// //       "en-IN"
// //     );


// //   // =====================================================
// //   // DATE FORMAT
// //   // =====================================================

// //   const formatDate = (
// //     date
// //   ) => {

// //     if (!date) {
// //       return "";
// //     }


// //     const parts =
// //       String(date).split("-");


// //     if (
// //       parts.length !== 3
// //     ) {
// //       return date;
// //     }


// //     const [
// //       year,
// //       month,
// //       day,
// //     ] = parts;


// //     const dateObject =
// //       new Date(
// //         Number(year),
// //         Number(month) - 1,
// //         Number(day)
// //       );


// //     return dateObject.toLocaleDateString(
// //       "en-IN",
// //       {
// //         day: "2-digit",
// //         month: "short",
// //         year: "numeric",
// //       }
// //     );

// //   };


// //   // =====================================================
// //   // VIEW DETAILS
// //   // =====================================================

// //   const handleViewDetails =
// //     () => {

// //       navigate(
// //         "/flight-details",
// //         {
// //           state: {

// //             flight,

// //             travellers,

// //             pricing: {

// //               adultFare:
// //                 finalAdultFare,

// //               childFare:
// //                 finalChildFare,

// //               infantFare:
// //                 finalInfantFare,

// //               adultTotal,

// //               childTotal,

// //               infantTotal,

// //               passengerFareTotal,

// //               maximumMealTotal,

// //               maximumSeatTotal,

// //               maximumBaggageTotal,

// //             },

// //           },
// //         }
// //       );

// //     };


// //   // =====================================================
// //   // BOOK NOW
// //   // =====================================================

// //   const handleBooking =
// //     () => {

// //       // -----------------------------------------------
// //       // CHECK LOGIN
// //       // -----------------------------------------------

// //       const token =
// //         localStorage.getItem(
// //           "token"
// //         );


// //       const user =
// //         localStorage.getItem(
// //           "user"
// //         );


// //       // -----------------------------------------------
// //       // FLIGHT ID
// //       // -----------------------------------------------

// //       const flightId =
// //         flight?._id ||
// //         flight?.id ||
// //         flight?.flightId;


// //       if (!flightId) {

// //         alert(
// //           "Flight ID is missing. Please refresh the flights and try again."
// //         );

// //         return;

// //       }


// //       // -----------------------------------------------
// //       // COMPLETE BOOKING FLIGHT DATA
// //       // -----------------------------------------------

// //       const bookingFlight = {

// //         ...flight,

// //         _id:
// //           flightId,

// //         flightId:
// //           flightId,

// //         finalPrice:
// //           passengerFareTotal,

// //         // Passenger-wise fares
// //         adultFare:
// //           finalAdultFare,

// //         childFare:
// //           finalChildFare,

// //         infantFare:
// //           finalInfantFare,

// //         // Passenger-wise totals
// //         adultTotal,

// //         childTotal,

// //         infantTotal,

// //         passengerFareTotal,

// //         // Service prices
// //         adultMealPrice,

// //         childMealPrice,

// //         infantMealPrice,

// //         adultSeatPrice,

// //         childSeatPrice,

// //         infantSeatPrice,

// //         adultBaggagePrice,

// //         childBaggagePrice,

// //         infantBaggagePrice,

// //       };


// //       // -----------------------------------------------
// //       // BOOKING STATE
// //       // -----------------------------------------------

// //       const bookingState = {

// //         flight:
// //           bookingFlight,

// //         flightId,

// //         travellers: {

// //           adults:
// //             adultCount,

// //           children:
// //             childCount,

// //           infants:
// //             infantCount,

// //           cabin:
// //             travellers?.cabin ||
// //             "Economy",

// //         },

// //         pricing: {

// //           adultFare:
// //             finalAdultFare,

// //           childFare:
// //             finalChildFare,

// //           infantFare:
// //             finalInfantFare,

// //           adultTotal,

// //           childTotal,

// //           infantTotal,

// //           passengerFareTotal,

// //           maximumMealTotal,

// //           maximumSeatTotal,

// //           maximumBaggageTotal,

// //         },

// //       };


// //       // -----------------------------------------------
// //       // NOT LOGGED IN
// //       // -----------------------------------------------

// //       if (
// //         !token ||
// //         !user
// //       ) {

// //         navigate(
// //           "/login",
// //           {
// //             state: {

// //               from:
// //                 "/booking",

// //               bookingState,

// //             },

// //           }
// //         );

// //         return;

// //       }


// //       // -----------------------------------------------
// //       // LOGGED IN
// //       // -----------------------------------------------

// //       navigate(
// //         "/booking",
// //         {
// //           state:
// //             bookingState,
// //         }
// //       );

// //     };


// //   // =====================================================
// //   // RETURN
// //   // =====================================================

// //   return (

// //     <article
// //       className="flight-card"
// //     >

// //       {/* ================================================
// //           AIRLINE
// //       ================================================ */}

// //       <div className="flight-left">

// //         <div className="airline-logo-placeholder">

// //           {airlineLogo ? (

// //             <img
// //               src={
// //                 airlineLogo
// //               }
// //               alt={`${flight.airline} logo`}
// //               className="airline-logo"
// //               onError={(e) => {

// //                 e.currentTarget.style.display =
// //                   "none";

// //               }}
// //             />

// //           ) : (

// //             <FaPlane />

// //           )}

// //         </div>


// //         <div className="airline-info">

// //           <h3>
// //             {flight.airline ||
// //               "Airline"}
// //           </h3>

// //           <p>
// //             {flight.flightNo ||
// //               "Flight Number"}
// //           </p>

// //           <small>
// //             {flight.flightType ||
// //               "Domestic"}
// //           </small>


// //           {flight.aircraft && (

// //             <small>
// //               {flight.aircraft}
// //             </small>

// //           )}

// //         </div>

// //       </div>


// //       {/* ================================================
// //           ROUTE
// //       ================================================ */}

// //       <div className="flight-middle">

// //         {/* DEPARTURE */}

// //         <div className="flight-point">

// //           <FaPlaneDeparture />

// //           <strong>
// //             {flight.departureTime ||
// //               "--:--"}
// //           </strong>

// //           <h3>
// //             {flight.fromCity ||
// //               "Departure"}
// //           </h3>


// //           {flight.fromCode && (

// //             <span>
// //               {flight.fromCode}
// //             </span>

// //           )}


// //           {flight.fromAirport && (

// //             <small>
// //               {flight.fromAirport}
// //             </small>

// //           )}


// //           {flight.departureDate && (

// //             <small>
// //               {formatDate(
// //                 flight.departureDate
// //               )}
// //             </small>

// //           )}


// //           {flight.departureTerminal && (

// //             <small>
// //               Terminal{" "}
// //               {flight.departureTerminal}
// //             </small>

// //           )}

// //         </div>


// //         {/* CENTER */}

// //         <div className="flight-info">

// //           <div className="duration">

// //             <FaClock />

// //             <span>
// //               {flight.duration ||
// //                 "—"}
// //             </span>

// //           </div>


// //           <div className="flight-line">

// //             <span></span>

// //             <FaPlane />

// //             <span></span>

// //           </div>


// //           <strong>
// //             {flight.stops ||
// //               "Non-stop"}
// //           </strong>


// //           {flight.stopCity && (

// //             <small>
// //               Via{" "}
// //               {flight.stopCity}
// //             </small>

// //           )}


// //           {flight.layoverDuration && (

// //             <small>
// //               Layover:{" "}
// //               {flight.layoverDuration}
// //             </small>

// //           )}

// //         </div>


// //         {/* ARRIVAL */}

// //         <div className="flight-point">

// //           <FaPlaneArrival />

// //           <strong>
// //             {flight.arrivalTime ||
// //               "--:--"}
// //           </strong>

// //           <h3>
// //             {flight.toCity ||
// //               "Arrival"}
// //           </h3>


// //           {flight.toCode && (

// //             <span>
// //               {flight.toCode}
// //             </span>

// //           )}


// //           {flight.toAirport && (

// //             <small>
// //               {flight.toAirport}
// //             </small>

// //           )}


// //           {flight.arrivalDate && (

// //             <small>
// //               {formatDate(
// //                 flight.arrivalDate
// //               )}
// //             </small>

// //           )}


// //           {flight.arrivalTerminal && (

// //             <small>
// //               Terminal{" "}
// //               {flight.arrivalTerminal}
// //             </small>

// //           )}

// //         </div>

// //       </div>


// //       {/* ================================================
// //           RIGHT SIDE
// //       ================================================ */}

// //       <div className="flight-right">

// //         <span className="offer-badge">

// //           {flight.status ||
// //             "Scheduled"}

// //         </span>


// //         {/* PASSENGER PRICE */}

// //         <h2>
// //           ₹ {formattedPrice}
// //         </h2>


// //         <p
// //           style={{
// //             fontSize: "12px",
// //             color: "#6b7280",
// //             marginTop: "-6px",
// //           }}
// //         >
// //           {adultCount} Adult
// //           {adultCount > 1
// //             ? "s"
// //             : ""}
// //           {childCount > 0 &&
// //             ` • ${childCount} Child${
// //               childCount > 1
// //                 ? "ren"
// //                 : ""
// //             }`}
// //           {infantCount > 0 &&
// //             ` • ${infantCount} Infant${
// //               infantCount > 1
// //                 ? "s"
// //                 : ""
// //             }`}
// //         </p>


// //         <p className="cabin-text">

// //           <FaChair />

// //           {cabinText}

// //         </p>


// //         {/* =================================================
// //             FARE BREAKDOWN
// //         ================================================= */}

// //         <div
// //           style={{
// //             margin:
// //               "10px 0",
// //             padding:
// //               "10px",
// //             border:
// //               "1px solid #e5e7eb",
// //             borderRadius:
// //               "8px",
// //             background:
// //               "#f8fafc",
// //             fontSize:
// //               "12px",
// //           }}
// //         >

// //           <div
// //             style={{
// //               display:
// //                 "flex",
// //               justifyContent:
// //                 "space-between",
// //               marginBottom:
// //                 "5px",
// //             }}
// //           >

// //             <span>
// //               Adults ({adultCount})
// //             </span>

// //             <strong>
// //               ₹{" "}
// //               {adultTotal.toLocaleString(
// //                 "en-IN"
// //               )}
// //             </strong>

// //           </div>


// //           {childCount > 0 && (

// //             <div
// //               style={{
// //                 display:
// //                   "flex",
// //                 justifyContent:
// //                   "space-between",
// //                 marginBottom:
// //                   "5px",
// //               }}
// //             >

// //               <span>
// //                 Children ({childCount})
// //               </span>

// //               <strong>
// //                 ₹{" "}
// //                 {childTotal.toLocaleString(
// //                   "en-IN"
// //                 )}
// //               </strong>

// //             </div>

// //           )}


// //           {infantCount > 0 && (

// //             <div
// //               style={{
// //                 display:
// //                   "flex",
// //                 justifyContent:
// //                   "space-between",
// //               }}
// //             >

// //               <span>
// //                 Infants ({infantCount})
// //               </span>

// //               <strong>
// //                 ₹{" "}
// //                 {infantTotal.toLocaleString(
// //                   "en-IN"
// //                 )}
// //               </strong>

// //             </div>

// //           )}

// //         </div>


// //         {/* CABIN PRICES */}

// //         {cabins.length > 0 && (

// //           <div className="cabin-price-list">

// //             {cabins.map(
// //               (
// //                 cabin,
// //                 index
// //               ) => (

// //                 <div
// //                   key={`${cabin.name}-${index}`}
// //                   className="cabin-price-item"
// //                 >

// //                   <span>
// //                     {cabin.name}
// //                   </span>

// //                   <strong>
// //                     ₹{" "}
// //                     {Number(
// //                       cabin.price ||
// //                         0
// //                     ).toLocaleString(
// //                       "en-IN"
// //                     )}
// //                   </strong>

// //                 </div>

// //               )
// //             )}

// //           </div>

// //         )}


// //         {/* FEATURES */}

// //         <div className="flight-extra">

// //           <span>
// //             🧳{" "}
// //             {flight.checkinBaggage ||
// //               "15 KG"}
// //           </span>


// //           <span>

// //             💺{" "}

// //             {availableSeats}

// //             {totalSeats >
// //               0 &&
// //               ` / ${totalSeats}`}

// //             {" "}Seats

// //           </span>


// //           {flight.cabinBaggage && (

// //             <span>
// //               🎒{" "}
// //               {flight.cabinBaggage}
// //             </span>

// //           )}


// //           {flight.mealAvailable && (

// //             <span>

// //               <FaUtensils />

// //               Free Meal

// //             </span>

// //           )}


// //           {flight.wifiAvailable && (

// //             <span>

// //               <FaWifi />

// //               Wi-Fi

// //             </span>

// //           )}


// //           {flight.powerAvailable && (

// //             <span>

// //               <FaBolt />

// //               Power

// //             </span>

// //           )}


// //           {flight.entertainmentAvailable && (

// //             <span>

// //               🎬 Entertainment

// //             </span>

// //           )}


// //           {flight.refundable && (

// //             <span>
// //               🟢 Refundable
// //             </span>

// //           )}


// //           {flight.changeable && (

// //             <span>
// //               🔄 Changeable
// //             </span>

// //           )}

// //         </div>


// //         {/* BUTTONS */}

// //         <div className="flight-buttons">

// //           <button
// //             type="button"
// //             className="details-btn"
// //             onClick={
// //               handleViewDetails
// //             }
// //           >
// //             View Details
// //           </button>


// //           <button
// //             type="button"
// //             className="book-btn"
// //             onClick={
// //               handleBooking
// //             }
// //           >
// //             Book Now
// //           </button>

// //         </div>

// //       </div>

// //     </article>

// //   );

// // }


// // export default FlightCard;



// import "./FlightCard.css";

// import { useNavigate } from "react-router-dom";

// import {
//   FaClock,
//   FaPlane,
//   FaWifi,
//   FaUtensils,
//   FaBolt,
//   FaChair,
//   FaPlaneDeparture,
//   FaPlaneArrival,
// } from "react-icons/fa";


// function FlightCard({
//   flight,
//   travellers = {
//     adults: 1,
//     children: 0,
//     infants: 0,
//     cabin: "Economy",
//   },
// }) {

//   const navigate = useNavigate();

//   // =====================================================
//   // USER ROLE / EXACT FARE SOURCE
//   // =====================================================

//   let userRole = "customer";

//   try {
//     const storedUser = localStorage.getItem("user");
//     const parsedUser = storedUser ? JSON.parse(storedUser) : null;
//     userRole = String(
//       parsedUser?.role ||
//         parsedUser?.userRole ||
//         localStorage.getItem("userRole") ||
//         "customer"
//     ).toLowerCase();
//   } catch {
//     userRole = String(
//       localStorage.getItem("userRole") ||
//         "customer"
//     ).toLowerCase();
//   }

//   const isAgent = userRole === "agent";


//   // =====================================================
//   // AIRLINE LOGOS
//   // =====================================================

//   const airlineLogos = {

//     indigo:
//       "https://images.kiwi.com/airlines/64/6E.png",

//     "air india":
//       "https://images.kiwi.com/airlines/64/AI.png",

//     spicejet:
//       "https://images.kiwi.com/airlines/64/SG.png",

//     vistara:
//       "https://images.kiwi.com/airlines/64/UK.png",

//     "air india express":
//       "https://images.kiwi.com/airlines/64/IX.png",

//     emirates:
//       "https://images.kiwi.com/airlines/64/EK.png",

//     "qatar airways":
//       "https://images.kiwi.com/airlines/64/QR.png",

//     "etihad airways":
//       "https://images.kiwi.com/airlines/64/EY.png",

//     "oman air":
//       "https://images.kiwi.com/airlines/64/WY.png",

//     "saudi airlines":
//       "https://images.kiwi.com/airlines/64/SV.png",

//     "singapore airlines":
//       "https://images.kiwi.com/airlines/64/SQ.png",

//     lufthansa:
//       "https://images.kiwi.com/airlines/64/LH.png",

//     "british airways":
//       "https://images.kiwi.com/airlines/64/BA.png",

//     "turkish airlines":
//       "https://images.kiwi.com/airlines/64/TK.png",

//     "malaysia airlines":
//       "https://images.kiwi.com/airlines/64/MH.png",

//     "thai airways":
//       "https://images.kiwi.com/airlines/64/TG.png",

//     "indian airlines":
//       "https://images.kiwi.com/airlines/64/IC.png",

//   };


//   const airlineName =
//     String(
//       flight.airline || ""
//     )
//       .trim()
//       .toLowerCase();


//   const airlineLogo =
//     airlineLogos[
//       airlineName
//     ];


//   // =====================================================
//   // PASSENGER COUNTS
//   // =====================================================

//   const adultCount =
//     Math.max(
//       Number(
//         travellers?.adults
//       ) || 1,
//       1
//     );


//   const childCount =
//     Math.max(
//       Number(
//         travellers?.children
//       ) || 0,
//       0
//     );


//   const infantCount =
//     Math.max(
//       Number(
//         travellers?.infants
//       ) || 0,
//       0
//     );


//   // =====================================================
//   // PASSENGER FARES
//   // EXACTLY FROM ADD FLIGHT
//   // Customer -> customer fares
//   // Agent    -> agent fares
//   // =====================================================

//   const adultFare = Number(
//     isAgent
//       ? flight.agentAdultFare
//       : flight.adultFare
//   ) || 0;

//   const childFare = Number(
//     isAgent
//       ? flight.agentChildFare
//       : flight.childFare
//   ) || 0;

//   const infantFare = Number(
//     isAgent
//       ? flight.agentInfantFare
//       : flight.infantFare
//   ) || 0;

//   // Do not replace an admin-entered fare with another
//   // customer's/agent's fare. Only use legacy public price
//   // when the corresponding adult fare is genuinely absent.
//   const legacyFare = Number(
//     flight.finalPrice ??
//       flight.baseFare ??
//       flight.cabins?.[0]?.price ??
//       0
//   ) || 0;

//   const finalAdultFare =
//     adultFare > 0 ? adultFare : legacyFare;

//   const finalChildFare =
//     childFare > 0 ? childFare : finalAdultFare;

//   const finalInfantFare =
//     infantFare > 0 ? infantFare : 0;


//   // =====================================================
//   // TOTAL PASSENGER FARE
//   // =====================================================

//   const adultTotal =
//     finalAdultFare *
//     adultCount;


//   const childTotal =
//     finalChildFare *
//     childCount;


//   const infantTotal =
//     finalInfantFare *
//     infantCount;


//   const passengerFareTotal =
//     adultTotal +
//     childTotal +
//     infantTotal;


//   // =====================================================
//   // MEAL PRICES
//   // =====================================================

//   const adultMealPrice =
//     Number(
//       flight.adultMealPrice
//     ) || 0;


//   const childMealPrice =
//     Number(
//       flight.childMealPrice
//     ) || 0;


//   const infantMealPrice =
//     Number(
//       flight.infantMealPrice
//     ) || 0;


//   // =====================================================
//   // SEAT PRICES
//   // =====================================================

//   const adultSeatPrice =
//     Number(
//       flight.adultSeatPrice
//     ) || 0;


//   const childSeatPrice =
//     Number(
//       flight.childSeatPrice
//     ) || 0;


//   const infantSeatPrice =
//     Number(
//       flight.infantSeatPrice
//     ) || 0;


//   // =====================================================
//   // BAGGAGE PRICES
//   // =====================================================

//   const adultBaggagePrice =
//     Number(
//       flight.adultBaggagePrice
//     ) || 0;


//   const childBaggagePrice =
//     Number(
//       flight.childBaggagePrice
//     ) || 0;


//   const infantBaggagePrice =
//     Number(
//       flight.infantBaggagePrice
//     ) || 0;


//   // =====================================================
//   // OPTIONAL SERVICE TOTALS
//   //
//   // Ye prices abhi sirf booking ko pass honge.
//   // Customer actually service select karega tab
//   // Booking page par add honge.
//   // =====================================================

//   const maximumMealTotal =
//     adultMealPrice * adultCount +
//     childMealPrice * childCount +
//     infantMealPrice * infantCount;


//   const maximumSeatTotal =
//     adultSeatPrice * adultCount +
//     childSeatPrice * childCount +
//     infantSeatPrice * infantCount;


//   const maximumBaggageTotal =
//     adultBaggagePrice * adultCount +
//     childBaggagePrice * childCount +
//     infantBaggagePrice * infantCount;


//   // =====================================================
//   // CABINS
//   // =====================================================

//   const cabins =
//     Array.isArray(
//       flight.cabins
//     )
//       ? flight.cabins
//       : [];


//   const cabinNames =
//     cabins
//       .map(
//         (cabin) =>
//           cabin.name
//       )
//       .filter(Boolean);


//   const cabinText =
//     cabinNames.length > 0
//       ? cabinNames.join(
//           " • "
//         )
//       : "Economy";

//   // =====================================================
//   // BAGGAGE - EXACT VALUES FROM ADD FLIGHT
//   // =====================================================

//   const cabinBaggage =
//     flight.cabinBaggage ||
//     flight.cabins?.[0]?.cabinBaggage ||
//     "";

//   const checkinBaggage =
//     flight.checkinBaggage ||
//     flight.cabins?.[0]?.checkinBaggage ||
//     flight.cabins?.[0]?.baggage ||
//     "";


//   // =====================================================
//   // SEATS
//   // =====================================================

//   const totalSeats =
//     cabins.reduce(
//       (
//         total,
//         cabin
//       ) =>
//         total +
//         Number(
//           cabin.totalSeats ||
//             0
//         ),
//       0
//     );


//   const availableSeats =
//     cabins.reduce(
//       (
//         total,
//         cabin
//       ) =>
//         total +
//         Number(
//           cabin.availableSeats ||
//             0
//         ),
//       0
//     );


//   // =====================================================
//   // PRICE FORMAT
//   // =====================================================

//   const formattedPrice =
//     passengerFareTotal.toLocaleString(
//       "en-IN"
//     );


//   // =====================================================
//   // DATE FORMAT
//   // =====================================================

//   const formatDate = (
//     date
//   ) => {

//     if (!date) {
//       return "";
//     }


//     const parts =
//       String(date).split("-");


//     if (
//       parts.length !== 3
//     ) {
//       return date;
//     }


//     const [
//       year,
//       month,
//       day,
//     ] = parts;


//     const dateObject =
//       new Date(
//         Number(year),
//         Number(month) - 1,
//         Number(day)
//       );


//     return dateObject.toLocaleDateString(
//       "en-IN",
//       {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       }
//     );

//   };


//   // =====================================================
//   // VIEW DETAILS
//   // =====================================================

//   const handleViewDetails =
//     () => {

//       navigate(
//         "/flight-details",
//         {
//           state: {

//             flight,

//             travellers,

//             pricing: {

//               adultFare:
//                 finalAdultFare,

//               childFare:
//                 finalChildFare,

//               infantFare:
//                 finalInfantFare,

//               adultTotal,

//               childTotal,

//               infantTotal,

//               passengerFareTotal,

//               maximumMealTotal,

//               maximumSeatTotal,

//               maximumBaggageTotal,

//             },

//           },
//         }
//       );

//     };


//   // =====================================================
//   // BOOK NOW
//   // =====================================================

//   const handleBooking =
//     () => {

//       // -----------------------------------------------
//       // CHECK LOGIN
//       // -----------------------------------------------

//       const token =
//         localStorage.getItem(
//           "token"
//         );


//       const user =
//         localStorage.getItem(
//           "user"
//         );


//       // -----------------------------------------------
//       // FLIGHT ID
//       // -----------------------------------------------

//       const flightId =
//         flight?._id ||
//         flight?.id ||
//         flight?.flightId;


//       if (!flightId) {

//         alert(
//           "Flight ID is missing. Please refresh the flights and try again."
//         );

//         return;

//       }


//       // -----------------------------------------------
//       // COMPLETE BOOKING FLIGHT DATA
//       // -----------------------------------------------

//       const bookingFlight = {

//         ...flight,

//         _id:
//           flightId,

//         flightId:
//           flightId,

//         finalPrice:
//           passengerFareTotal,

//         // Passenger-wise fares
//         adultFare:
//           finalAdultFare,

//         childFare:
//           finalChildFare,

//         infantFare:
//           finalInfantFare,

//         // Passenger-wise totals
//         adultTotal,

//         childTotal,

//         infantTotal,

//         passengerFareTotal,

//         // Service prices
//         adultMealPrice,

//         childMealPrice,

//         infantMealPrice,

//         adultSeatPrice,

//         childSeatPrice,

//         infantSeatPrice,

//         adultBaggagePrice,

//         childBaggagePrice,

//         infantBaggagePrice,

//         // Exact fare role used for this booking
//         fareRole: userRole,

//         // Exact baggage from Add Flight
//         cabinBaggage,
//         checkinBaggage,
//         baggage: {
//           cabinBaggage,
//           cabin: cabinBaggage,
//           checkinBaggage,
//           checkin: checkinBaggage,
//           weight: checkinBaggage,
//         },

//       };


//       // -----------------------------------------------
//       // BOOKING STATE
//       // -----------------------------------------------

//       const bookingState = {

//         flight:
//           bookingFlight,

//         flightId,

//         travellers: {

//           adults:
//             adultCount,

//           children:
//             childCount,

//           infants:
//             infantCount,

//           cabin:
//             travellers?.cabin ||
//             "Economy",

//         },

//         pricing: {

//           adultFare:
//             finalAdultFare,

//           childFare:
//             finalChildFare,

//           infantFare:
//             finalInfantFare,

//           adultTotal,

//           childTotal,

//           infantTotal,

//           passengerFareTotal,

//           maximumMealTotal,

//           maximumSeatTotal,

//           maximumBaggageTotal,

//           fareRole: userRole,

//           cabinBaggage,
//           checkinBaggage,

//         },

//       };


//       // -----------------------------------------------
//       // NOT LOGGED IN
//       // -----------------------------------------------

//       if (
//         !token ||
//         !user
//       ) {

//         navigate(
//           "/login",
//           {
//             state: {

//               from:
//                 "/booking",

//               bookingState,

//             },

//           }
//         );

//         return;

//       }


//       // -----------------------------------------------
//       // LOGGED IN
//       // -----------------------------------------------

//       navigate(
//         "/booking",
//         {
//           state:
//             bookingState,
//         }
//       );

//     };


//   // =====================================================
//   // RETURN
//   // =====================================================

//   return (

//     <article
//       className="flight-card"
//     >

//       {/* ================================================
//           AIRLINE
//       ================================================ */}

//       <div className="flight-left">

//         <div className="airline-logo-placeholder">

//           {airlineLogo ? (

//             <img
//               src={
//                 airlineLogo
//               }
//               alt={`${flight.airline} logo`}
//               className="airline-logo"
//               onError={(e) => {

//                 e.currentTarget.style.display =
//                   "none";

//               }}
//             />

//           ) : (

//             <FaPlane />

//           )}

//         </div>


//         <div className="airline-info">

//           <h3>
//             {flight.airline ||
//               "Airline"}
//           </h3>

//           <p>
//             {flight.flightNo ||
//               "Flight Number"}
//           </p>

//           <small>
//             {flight.flightType ||
//               "Domestic"}
//           </small>


//           {flight.aircraft && (

//             <small>
//               {flight.aircraft}
//             </small>

//           )}

//         </div>

//       </div>


//       {/* ================================================
//           ROUTE
//       ================================================ */}

//       <div className="flight-middle">

//         {/* DEPARTURE */}

//         <div className="flight-point">

//           <FaPlaneDeparture />

//           <strong>
//             {flight.departureTime ||
//               "--:--"}
//           </strong>

//           <h3>
//             {flight.fromCity ||
//               "Departure"}
//           </h3>


//           {flight.fromCode && (

//             <span>
//               {flight.fromCode}
//             </span>

//           )}


//           {flight.fromAirport && (

//             <small>
//               {flight.fromAirport}
//             </small>

//           )}


//           {flight.departureDate && (

//             <small>
//               {formatDate(
//                 flight.departureDate
//               )}
//             </small>

//           )}


//           {flight.departureTerminal && (

//             <small>
//               Terminal{" "}
//               {flight.departureTerminal}
//             </small>

//           )}

//         </div>


//         {/* CENTER */}

//         <div className="flight-info">

//           <div className="duration">

//             <FaClock />

//             <span>
//               {flight.duration ||
//                 "—"}
//             </span>

//           </div>


//           <div className="flight-line">

//             <span></span>

//             <FaPlane />

//             <span></span>

//           </div>


//           <strong>
//             {flight.stops ||
//               "Non-stop"}
//           </strong>


//           {flight.stopCity && (

//             <small>
//               Via{" "}
//               {flight.stopCity}
//             </small>

//           )}


//           {flight.layoverDuration && (

//             <small>
//               Layover:{" "}
//               {flight.layoverDuration}
//             </small>

//           )}

//         </div>


//         {/* ARRIVAL */}

//         <div className="flight-point">

//           <FaPlaneArrival />

//           <strong>
//             {flight.arrivalTime ||
//               "--:--"}
//           </strong>

//           <h3>
//             {flight.toCity ||
//               "Arrival"}
//           </h3>


//           {flight.toCode && (

//             <span>
//               {flight.toCode}
//             </span>

//           )}


//           {flight.toAirport && (

//             <small>
//               {flight.toAirport}
//             </small>

//           )}


//           {flight.arrivalDate && (

//             <small>
//               {formatDate(
//                 flight.arrivalDate
//               )}
//             </small>

//           )}


//           {flight.arrivalTerminal && (

//             <small>
//               Terminal{" "}
//               {flight.arrivalTerminal}
//             </small>

//           )}

//         </div>

//       </div>


//       {/* ================================================
//           RIGHT SIDE
//       ================================================ */}

//       <div className="flight-right">

//         <span className="offer-badge">

//           {flight.status ||
//             "Scheduled"}

//         </span>


//         {/* PASSENGER PRICE */}

//         <h2>
//           ₹ {formattedPrice}
//         </h2>


//         <p
//           style={{
//             fontSize: "12px",
//             color: "#6b7280",
//             marginTop: "-6px",
//           }}
//         >
//           {adultCount} Adult
//           {adultCount > 1
//             ? "s"
//             : ""}
//           {childCount > 0 &&
//             ` • ${childCount} Child${
//               childCount > 1
//                 ? "ren"
//                 : ""
//             }`}
//           {infantCount > 0 &&
//             ` • ${infantCount} Infant${
//               infantCount > 1
//                 ? "s"
//                 : ""
//             }`}
//         </p>


//         <p className="cabin-text">

//           <FaChair />

//           {cabinText}

//         </p>


//         {/* =================================================
//             FARE BREAKDOWN
//         ================================================= */}

//         <div
//           style={{
//             margin:
//               "10px 0",
//             padding:
//               "10px",
//             border:
//               "1px solid #e5e7eb",
//             borderRadius:
//               "8px",
//             background:
//               "#f8fafc",
//             fontSize:
//               "12px",
//           }}
//         >

//           <div
//             style={{
//               display:
//                 "flex",
//               justifyContent:
//                 "space-between",
//               marginBottom:
//                 "5px",
//             }}
//           >

//             <span>
//               Adults ({adultCount})
//             </span>

//             <strong>
//               ₹{" "}
//               {adultTotal.toLocaleString(
//                 "en-IN"
//               )}
//             </strong>

//           </div>


//           {childCount > 0 && (

//             <div
//               style={{
//                 display:
//                   "flex",
//                 justifyContent:
//                   "space-between",
//                 marginBottom:
//                   "5px",
//               }}
//             >

//               <span>
//                 Children ({childCount})
//               </span>

//               <strong>
//                 ₹{" "}
//                 {childTotal.toLocaleString(
//                   "en-IN"
//                 )}
//               </strong>

//             </div>

//           )}


//           {infantCount > 0 && (

//             <div
//               style={{
//                 display:
//                   "flex",
//                 justifyContent:
//                   "space-between",
//               }}
//             >

//               <span>
//                 Infants ({infantCount})
//               </span>

//               <strong>
//                 ₹{" "}
//                 {infantTotal.toLocaleString(
//                   "en-IN"
//                 )}
//               </strong>

//             </div>

//           )}

//         </div>


//         {/* CABIN PRICES */}

//         {cabins.length > 0 && (

//           <div className="cabin-price-list">

//             {cabins.map(
//               (
//                 cabin,
//                 index
//               ) => (

//                 <div
//                   key={`${cabin.name}-${index}`}
//                   className="cabin-price-item"
//                 >

//                   <span>
//                     {cabin.name}
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {Number(
//                       isAgent
//                         ? (cabin.agentPrice ?? cabin.agentAdultFare ?? 0)
//                         : (cabin.price ?? cabin.adultFare ?? 0)
//                     ).toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>

//                 </div>

//               )
//             )}

//           </div>

//         )}


//         {/* FEATURES */}

//         <div className="flight-extra">

//           <span>
//             🧳{" "}
//             {checkinBaggage || "—"}
//           </span>


//           <span>

//             💺{" "}

//             {availableSeats}

//             {totalSeats >
//               0 &&
//               ` / ${totalSeats}`}

//             {" "}Seats

//           </span>


//           {flight.cabinBaggage && (

//             <span>
//               🎒{" "}
//               {flight.cabinBaggage}
//             </span>

//           )}


//           {flight.mealAvailable && (

//             <span>

//               <FaUtensils />

//               Free Meal

//             </span>

//           )}


//           {flight.wifiAvailable && (

//             <span>

//               <FaWifi />

//               Wi-Fi

//             </span>

//           )}


//           {flight.powerAvailable && (

//             <span>

//               <FaBolt />

//               Power

//             </span>

//           )}


//           {flight.entertainmentAvailable && (

//             <span>

//               🎬 Entertainment

//             </span>

//           )}


//           {flight.refundable && (

//             <span>
//               🟢 Refundable
//             </span>

//           )}


//           {flight.changeable && (

//             <span>
//               🔄 Changeable
//             </span>

//           )}

//         </div>


//         {/* BUTTONS */}

//         <div className="flight-buttons">

//           <button
//             type="button"
//             className="details-btn"
//             onClick={
//               handleViewDetails
//             }
//           >
//             View Details
//           </button>


//           <button
//             type="button"
//             className="book-btn"
//             onClick={
//               handleBooking
//             }
//           >
//             Book Now
//           </button>

//         </div>

//       </div>

//     </article>

//   );

// }


// export default FlightCard;



import "./FlightCard.css";

import { useNavigate } from "react-router-dom";

import {
  FaClock,
  FaPlane,
  FaWifi,
  FaUtensils,
  FaBolt,
  FaChair,
  FaPlaneDeparture,
  FaPlaneArrival,
} from "react-icons/fa";


function FlightCard({
  flight,
  travellers = {
    adults: 1,
    children: 0,
    infants: 0,
    cabin: "Economy",
  },
}) {

  const navigate = useNavigate();

  // =====================================================
  // USER ROLE / EXACT FARE SOURCE
  // =====================================================

  let userRole = "customer";

  try {
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    userRole = String(
      parsedUser?.role ||
        parsedUser?.userRole ||
        localStorage.getItem("userRole") ||
        "customer"
    ).toLowerCase();
  } catch {
    userRole = String(
      localStorage.getItem("userRole") ||
        "customer"
    ).toLowerCase();
  }

  const isAgent = userRole === "agent";


  // =====================================================
  // AIRLINE LOGOS
  // =====================================================

  const airlineLogos = {

    indigo:
      "https://images.kiwi.com/airlines/64/6E.png",

    "air india":
      "https://images.kiwi.com/airlines/64/AI.png",

    spicejet:
      "https://images.kiwi.com/airlines/64/SG.png",

    vistara:
      "https://images.kiwi.com/airlines/64/UK.png",

    "air india express":
      "https://images.kiwi.com/airlines/64/IX.png",

    emirates:
      "https://images.kiwi.com/airlines/64/EK.png",

    "qatar airways":
      "https://images.kiwi.com/airlines/64/QR.png",

    "etihad airways":
      "https://images.kiwi.com/airlines/64/EY.png",

    "oman air":
      "https://images.kiwi.com/airlines/64/WY.png",

    "saudi airlines":
      "https://images.kiwi.com/airlines/64/SV.png",

    "singapore airlines":
      "https://images.kiwi.com/airlines/64/SQ.png",

    lufthansa:
      "https://images.kiwi.com/airlines/64/LH.png",

    "british airways":
      "https://images.kiwi.com/airlines/64/BA.png",

    "turkish airlines":
      "https://images.kiwi.com/airlines/64/TK.png",

    "malaysia airlines":
      "https://images.kiwi.com/airlines/64/MH.png",

    "thai airways":
      "https://images.kiwi.com/airlines/64/TG.png",

    "indian airlines":
      "https://images.kiwi.com/airlines/64/IC.png",

  };


  const airlineName =
    String(
      flight.airline || ""
    )
      .trim()
      .toLowerCase();


  const airlineLogo =
    airlineLogos[
      airlineName
    ];


  // =====================================================
  // PASSENGER COUNTS
  // =====================================================

  const adultCount =
    Math.max(
      Number(
        travellers?.adults
      ) || 1,
      1
    );


  const childCount =
    Math.max(
      Number(
        travellers?.children
      ) || 0,
      0
    );


  const infantCount =
    Math.max(
      Number(
        travellers?.infants
      ) || 0,
      0
    );


  // =====================================================
  // PASSENGER FARES
  // EXACTLY FROM ADD FLIGHT
  // Customer -> customer fares
  // Agent    -> agent fares
  // =====================================================

  const adultFare = Number(
    isAgent
      ? flight.agentAdultFare
      : flight.adultFare
  ) || 0;

  const childFare = Number(
    isAgent
      ? flight.agentChildFare
      : flight.childFare
  ) || 0;

  const infantFare = Number(
    isAgent
      ? flight.agentInfantFare
      : flight.infantFare
  ) || 0;

  // Do not replace an admin-entered fare with another
  // customer's/agent's fare. Only use legacy public price
  // when the corresponding adult fare is genuinely absent.
  const legacyFare = Number(
    flight.finalPrice ??
      flight.baseFare ??
      flight.cabins?.[0]?.price ??
      0
  ) || 0;

  const finalAdultFare =
    adultFare > 0 ? adultFare : legacyFare;

  const finalChildFare =
    childFare > 0 ? childFare : finalAdultFare;

  const finalInfantFare =
    infantFare > 0 ? infantFare : 0;


  // =====================================================
  // TOTAL PASSENGER FARE
  // =====================================================

  const adultTotal =
    finalAdultFare *
    adultCount;


  const childTotal =
    finalChildFare *
    childCount;


  const infantTotal =
    finalInfantFare *
    infantCount;


  const passengerFareTotal =
    adultTotal +
    childTotal +
    infantTotal;


  // =====================================================
  // MEAL PRICES
  // =====================================================

  const adultMealPrice =
    Number(
      flight.adultMealPrice
    ) || 0;


  const childMealPrice =
    Number(
      flight.childMealPrice
    ) || 0;


  const infantMealPrice =
    Number(
      flight.infantMealPrice
    ) || 0;


  // =====================================================
  // SEAT PRICES
  // =====================================================

  const adultSeatPrice =
    Number(
      flight.adultSeatPrice
    ) || 0;


  const childSeatPrice =
    Number(
      flight.childSeatPrice
    ) || 0;


  const infantSeatPrice =
    Number(
      flight.infantSeatPrice
    ) || 0;


  // =====================================================
  // BAGGAGE PRICES
  // =====================================================

  const adultBaggagePrice =
    Number(
      flight.adultBaggagePrice
    ) || 0;


  const childBaggagePrice =
    Number(
      flight.childBaggagePrice
    ) || 0;


  const infantBaggagePrice =
    Number(
      flight.infantBaggagePrice
    ) || 0;


  // =====================================================
  // OPTIONAL SERVICE TOTALS
  //
  // Ye prices abhi sirf booking ko pass honge.
  // Customer actually service select karega tab
  // Booking page par add honge.
  // =====================================================

  const maximumMealTotal =
    adultMealPrice * adultCount +
    childMealPrice * childCount +
    infantMealPrice * infantCount;


  const maximumSeatTotal =
    adultSeatPrice * adultCount +
    childSeatPrice * childCount +
    infantSeatPrice * infantCount;


  const maximumBaggageTotal =
    adultBaggagePrice * adultCount +
    childBaggagePrice * childCount +
    infantBaggagePrice * infantCount;


  // =====================================================
  // CABINS
  // =====================================================

  const cabins =
    Array.isArray(
      flight.cabins
    )
      ? flight.cabins
      : [];


  const cabinNames =
    cabins
      .map(
        (cabin) =>
          cabin.name
      )
      .filter(Boolean);


  const cabinText =
    cabinNames.length > 0
      ? cabinNames.join(
          " • "
        )
      : "Economy";

  // =====================================================
  // BAGGAGE - EXACT VALUES FROM ADD FLIGHT
  // =====================================================

  const baggageObject =
    flight?.baggage && typeof flight.baggage === "object"
      ? flight.baggage
      : {};

  const cabinBaggageCandidates = [
    flight?.cabinBaggage,
    baggageObject?.cabinBaggage,
    baggageObject?.cabin,
    flight?.cabins?.[0]?.cabinBaggage,
    flight?.cabins?.[0]?.baggage?.cabinBaggage,
    flight?.cabins?.[0]?.baggage?.cabin,
  ];

  const cabinBaggage =
    cabinBaggageCandidates.find(
      (value) => typeof value === "string" && value.trim()
    ) || "";

  const checkinBaggageCandidates = [
    flight?.checkinBaggage,
    baggageObject?.checkinBaggage,
    baggageObject?.checkin,
    baggageObject?.weight,
    flight?.cabins?.[0]?.checkinBaggage,
    flight?.cabins?.[0]?.baggage,
    flight?.cabins?.[0]?.baggage?.checkinBaggage,
    flight?.cabins?.[0]?.baggage?.checkin,
    flight?.cabins?.[0]?.baggage?.weight,
  ];

  const checkinBaggage =
    checkinBaggageCandidates.find(
      (value) => typeof value === "string" && value.trim()
    ) || "";


  // =====================================================
  // SEATS
  // =====================================================

  const totalSeats =
    cabins.reduce(
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
    cabins.reduce(
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


  // =====================================================
  // PRICE FORMAT
  // =====================================================

  const formattedPrice =
    passengerFareTotal.toLocaleString(
      "en-IN"
    );


  // =====================================================
  // DATE FORMAT
  // =====================================================

  const formatDate = (
    date
  ) => {

    if (!date) {
      return "";
    }


    const parts =
      String(date).split("-");


    if (
      parts.length !== 3
    ) {
      return date;
    }


    const [
      year,
      month,
      day,
    ] = parts;


    const dateObject =
      new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
      );


    return dateObject.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );

  };


  // =====================================================
  // VIEW DETAILS
  // =====================================================

  const handleViewDetails =
    () => {

      navigate(
        "/flight-details",
        {
          state: {

            flight,

            travellers,

            pricing: {

              adultFare:
                finalAdultFare,

              childFare:
                finalChildFare,

              infantFare:
                finalInfantFare,

              adultTotal,

              childTotal,

              infantTotal,

              passengerFareTotal,

              maximumMealTotal,

              maximumSeatTotal,

              maximumBaggageTotal,

            },

          },
        }
      );

    };


  // =====================================================
  // BOOK NOW
  // =====================================================

  const handleBooking =
    () => {

      // -----------------------------------------------
      // CHECK LOGIN
      // -----------------------------------------------

      const token =
        localStorage.getItem(
          "token"
        );


      const user =
        localStorage.getItem(
          "user"
        );


      // -----------------------------------------------
      // FLIGHT ID
      // -----------------------------------------------

      const flightId =
        flight?._id ||
        flight?.id ||
        flight?.flightId;


      if (!flightId) {

        alert(
          "Flight ID is missing. Please refresh the flights and try again."
        );

        return;

      }


      // -----------------------------------------------
      // COMPLETE BOOKING FLIGHT DATA
      // -----------------------------------------------

      const bookingFlight = {

        ...flight,

        _id:
          flightId,

        flightId:
          flightId,

        finalPrice:
          passengerFareTotal,

        // Passenger-wise fares
        adultFare:
          finalAdultFare,

        childFare:
          finalChildFare,

        infantFare:
          finalInfantFare,

        // Passenger-wise totals
        adultTotal,

        childTotal,

        infantTotal,

        passengerFareTotal,

        // Service prices
        adultMealPrice,

        childMealPrice,

        infantMealPrice,

        adultSeatPrice,

        childSeatPrice,

        infantSeatPrice,

        adultBaggagePrice,

        childBaggagePrice,

        infantBaggagePrice,

        // Exact fare role used for this booking
        fareRole: userRole,

        // Exact baggage from Add Flight
        cabinBaggage,
        checkinBaggage,
        baggage: {
          cabinBaggage,
          cabin: cabinBaggage,
          checkinBaggage,
          checkin: checkinBaggage,
          weight: checkinBaggage,
        },

      };


      // -----------------------------------------------
      // BOOKING STATE
      // -----------------------------------------------

      const bookingState = {

        flight:
          bookingFlight,

        flightId,

        travellers: {

          adults:
            adultCount,

          children:
            childCount,

          infants:
            infantCount,

          cabin:
            travellers?.cabin ||
            "Economy",

        },

        pricing: {

          adultFare:
            finalAdultFare,

          childFare:
            finalChildFare,

          infantFare:
            finalInfantFare,

          adultTotal,

          childTotal,

          infantTotal,

          passengerFareTotal,

          maximumMealTotal,

          maximumSeatTotal,

          maximumBaggageTotal,

          fareRole: userRole,

          cabinBaggage,
          checkinBaggage,

        },

      };


      // -----------------------------------------------
      // NOT LOGGED IN
      // -----------------------------------------------

      if (
        !token ||
        !user
      ) {

        navigate(
          "/login",
          {
            state: {

              from:
                "/booking",

              bookingState,

            },

          }
        );

        return;

      }


      // -----------------------------------------------
      // LOGGED IN
      // -----------------------------------------------

      navigate(
        "/booking",
        {
          state:
            bookingState,
        }
      );

    };


  // =====================================================
  // RETURN
  // =====================================================

  return (

    <article
      className="flight-card"
    >

      {/* ================================================
          AIRLINE
      ================================================ */}

      <div className="flight-left">

        <div className="airline-logo-placeholder">

          {airlineLogo ? (

            <img
              src={
                airlineLogo
              }
              alt={`${flight.airline} logo`}
              className="airline-logo"
              onError={(e) => {

                e.currentTarget.style.display =
                  "none";

              }}
            />

          ) : (

            <FaPlane />

          )}

        </div>


        <div className="airline-info">

          <h3>
            {flight.airline ||
              "Airline"}
          </h3>

          <p>
            {flight.flightNo ||
              "Flight Number"}
          </p>

          <small>
            {flight.flightType ||
              "Domestic"}
          </small>


          {flight.aircraft && (

            <small>
              {flight.aircraft}
            </small>

          )}

        </div>

      </div>


      {/* ================================================
          ROUTE
      ================================================ */}

      <div className="flight-middle">

        {/* DEPARTURE */}

        <div className="flight-point">

          <FaPlaneDeparture />

          <strong>
            {flight.departureTime ||
              "--:--"}
          </strong>

          <h3>
            {flight.fromCity ||
              "Departure"}
          </h3>


          {flight.fromCode && (

            <span>
              {flight.fromCode}
            </span>

          )}


          {flight.fromAirport && (

            <small>
              {flight.fromAirport}
            </small>

          )}


          {flight.departureDate && (

            <small>
              {formatDate(
                flight.departureDate
              )}
            </small>

          )}


          {flight.departureTerminal && (

            <small>
              Terminal{" "}
              {flight.departureTerminal}
            </small>

          )}

        </div>


        {/* CENTER */}

        <div className="flight-info">

          <div className="duration">

            <FaClock />

            <span>
              {flight.duration ||
                "—"}
            </span>

          </div>


          <div className="flight-line">

            <span></span>

            <FaPlane />

            <span></span>

          </div>


          <strong>
            {flight.stops ||
              "Non-stop"}
          </strong>


          {flight.stopCity && (

            <small>
              Via{" "}
              {flight.stopCity}
            </small>

          )}


          {flight.layoverDuration && (

            <small>
              Layover:{" "}
              {flight.layoverDuration}
            </small>

          )}

        </div>


        {/* ARRIVAL */}

        <div className="flight-point">

          <FaPlaneArrival />

          <strong>
            {flight.arrivalTime ||
              "--:--"}
          </strong>

          <h3>
            {flight.toCity ||
              "Arrival"}
          </h3>


          {flight.toCode && (

            <span>
              {flight.toCode}
            </span>

          )}


          {flight.toAirport && (

            <small>
              {flight.toAirport}
            </small>

          )}


          {flight.arrivalDate && (

            <small>
              {formatDate(
                flight.arrivalDate
              )}
            </small>

          )}


          {flight.arrivalTerminal && (

            <small>
              Terminal{" "}
              {flight.arrivalTerminal}
            </small>

          )}

        </div>

      </div>


      {/* ================================================
          RIGHT SIDE
      ================================================ */}

      <div className="flight-right">

        <span className="offer-badge">

          {flight.status ||
            "Scheduled"}

        </span>


        {/* PASSENGER PRICE */}

        <h2>
          ₹ {formattedPrice}
        </h2>


        <p
          style={{
            fontSize: "12px",
            color: "#6b7280",
            marginTop: "-6px",
          }}
        >
          {adultCount} Adult
          {adultCount > 1
            ? "s"
            : ""}
          {childCount > 0 &&
            ` • ${childCount} Child${
              childCount > 1
                ? "ren"
                : ""
            }`}
          {infantCount > 0 &&
            ` • ${infantCount} Infant${
              infantCount > 1
                ? "s"
                : ""
            }`}
        </p>


        <p className="cabin-text">

          <FaChair />

          {cabinText}

        </p>


        {/* =================================================
            FARE BREAKDOWN
        ================================================= */}

        <div
          style={{
            margin:
              "10px 0",
            padding:
              "10px",
            border:
              "1px solid #e5e7eb",
            borderRadius:
              "8px",
            background:
              "#f8fafc",
            fontSize:
              "12px",
          }}
        >

          <div
            style={{
              display:
                "flex",
              justifyContent:
                "space-between",
              marginBottom:
                "5px",
            }}
          >

            <span>
              Adults ({adultCount})
            </span>

            <strong>
              ₹{" "}
              {adultTotal.toLocaleString(
                "en-IN"
              )}
            </strong>

          </div>


          {childCount > 0 && (

            <div
              style={{
                display:
                  "flex",
                justifyContent:
                  "space-between",
                marginBottom:
                  "5px",
              }}
            >

              <span>
                Children ({childCount})
              </span>

              <strong>
                ₹{" "}
                {childTotal.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

          )}


          {infantCount > 0 && (

            <div
              style={{
                display:
                  "flex",
                justifyContent:
                  "space-between",
              }}
            >

              <span>
                Infants ({infantCount})
              </span>

              <strong>
                ₹{" "}
                {infantTotal.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

          )}

        </div>


        {/* CABIN PRICES */}

        {cabins.length > 0 && (

          <div className="cabin-price-list">

            {cabins.map(
              (
                cabin,
                index
              ) => (

                <div
                  key={`${cabin.name}-${index}`}
                  className="cabin-price-item"
                >

                  <span>
                    {cabin.name}
                  </span>

                  <strong>
                    ₹{" "}
                    {Number(
                      isAgent
                        ? (cabin.agentPrice ?? cabin.agentAdultFare ?? 0)
                        : (cabin.price ?? cabin.adultFare ?? 0)
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                </div>

              )
            )}

          </div>

        )}


        {/* FEATURES */}

        <div className="flight-extra">

          <span>
            🧳{" "}
            {checkinBaggage || "—"}
          </span>


          <span>

            💺{" "}

            {availableSeats}

            {totalSeats >
              0 &&
              ` / ${totalSeats}`}

            {" "}Seats

          </span>


          {cabinBaggage && (

            <span>
              🎒{" "}
              {cabinBaggage}
            </span>

          )}


          {flight.mealAvailable && (

            <span>

              <FaUtensils />

              Free Meal

            </span>

          )}


          {flight.wifiAvailable && (

            <span>

              <FaWifi />

              Wi-Fi

            </span>

          )}


          {flight.powerAvailable && (

            <span>

              <FaBolt />

              Power

            </span>

          )}


          {flight.entertainmentAvailable && (

            <span>

              🎬 Entertainment

            </span>

          )}


          {flight.refundable && (

            <span>
              🟢 Refundable
            </span>

          )}


          {flight.changeable && (

            <span>
              🔄 Changeable
            </span>

          )}

        </div>


        {/* BUTTONS */}

        <div className="flight-buttons">

          <button
            type="button"
            className="details-btn"
            onClick={
              handleViewDetails
            }
          >
            View Details
          </button>


          <button
            type="button"
            className="book-btn"
            onClick={
              handleBooking
            }
          >
            Book Now
          </button>

        </div>

      </div>

    </article>

  );

}


export default FlightCard;