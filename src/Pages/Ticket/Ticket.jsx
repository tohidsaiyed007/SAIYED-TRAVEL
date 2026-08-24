
// import "./Ticket.css";

// import {
//   FaPlaneDeparture,
//   FaDownload,
//   FaPrint,
//   FaHome,
// } from "react-icons/fa";

// import { useLocation, useNavigate } from "react-router-dom";


// function Ticket() {

//   const location = useLocation();
//   const navigate = useNavigate();

//   const booking =
//     location.state?.booking ||
//     location.state ||
//     {};


//   // =====================================================
//   // PASSENGERS
//   // =====================================================

//   const passengers =
//     Array.isArray(
//       booking.passengers
//     ) &&
//     booking.passengers.length > 0

//       ? booking.passengers

//       : booking.passenger

//       ? [booking.passenger]

//       : [];


//   // =====================================================
//   // TRAVELLER COUNTS
//   // =====================================================

//   const adultCount =
//     Number(
//       booking.adults ??
//       booking.travellers?.adults
//     ) ||
//     passengers.filter(
//       (p) =>
//         String(
//           p?.type || "Adult"
//         ).toLowerCase() ===
//         "adult"
//     ).length;


//   const childCount =
//     Number(
//       booking.children ??
//       booking.travellers?.children
//     ) ||
//     passengers.filter(
//       (p) =>
//         String(
//           p?.type || ""
//         ).toLowerCase() ===
//         "child"
//     ).length;


//   const infantCount =
//     Number(
//       booking.infants ??
//       booking.travellers?.infants
//     ) ||
//     passengers.filter(
//       (p) =>
//         String(
//           p?.type || ""
//         ).toLowerCase() ===
//         "infant"
//     ).length;


//   // =====================================================
//   // FLIGHT
//   // =====================================================

//   const flight =
//     booking.flight ||
//     {};


//   const airline =
//     flight.airline ||
//     "Saiyed Travels";


//   const flightNo =
//     flight.flightNo ||
//     "N/A";


//   const fromCity =
//     flight.fromCity ||
//     flight.from ||
//     "N/A";


//   const toCity =
//     flight.toCity ||
//     flight.to ||
//     "N/A";


//   const fromCode =
//     flight.fromCode ||
//     flight.from ||
//     "N/A";


//   const toCode =
//     flight.toCode ||
//     flight.to ||
//     "N/A";


//   const fromAirport =
//     flight.fromAirport ||
//     "";


//   const toAirport =
//     flight.toAirport ||
//     "";


//   const departureDate =
//     flight.departureDate ||
//     flight.date ||
//     "N/A";


//   const arrivalDate =
//     flight.arrivalDate ||
//     departureDate;


//   const departureTime =
//     flight.departureTime ||
//     flight.departure ||
//     "N/A";


//   const arrivalTime =
//     flight.arrivalTime ||
//     flight.arrival ||
//     "N/A";


//   const duration =
//     flight.duration ||
//     "N/A";


//   const stops =
//     flight.stops ||
//     "Non-stop";


//   const aircraft =
//     flight.aircraft ||
//     "N/A";


//   // =====================================================
//   // BOOKING
//   // =====================================================

//   const bookingId =
//     booking.bookingId ||
//     "N/A";


//   const pnr =
//     booking.pnr ||
//     "N/A";


//   // =====================================================
//   // ARRAYS
//   // =====================================================

//   const seats =
//     Array.isArray(
//       booking.seats
//     )
//       ? booking.seats
//       : booking.seat
//       ? [booking.seat]
//       : [];


//   const meals =
//     Array.isArray(
//       booking.meals
//     )
//       ? booking.meals
//       : booking.meal
//       ? [booking.meal]
//       : [];


//   const baggages =
//     Array.isArray(
//       booking.baggages
//     )
//       ? booking.baggages
//       : Array.isArray(
//           booking.baggage
//         )
//       ? booking.baggage
//       : booking.baggage
//       ? [booking.baggage]
//       : [];


//   // =====================================================
//   // HELPERS
//   // =====================================================

//   const getName = (passenger) => {

//     const name =
//       `${passenger?.firstName || ""} ${
//         passenger?.lastName || ""
//       }`.trim();

//     return (
//       name ||
//       "Passenger"
//     );

//   };


//   const getType = (passenger) => {

//     const type =
//       String(
//         passenger?.type ||
//         "Adult"
//       );


//     return type.charAt(0).toUpperCase() +
//       type.slice(1);

//   };


//   const getSeat = (
//     passenger,
//     index
//   ) => {

//     const type =
//       String(
//         passenger?.type ||
//         "Adult"
//       ).toLowerCase();


//     // Infant does not require seat

//     if (
//       type === "infant"
//     ) {

//       return "No Seat";

//     }


//     return (
//       passenger?.seat ||
//       passenger?.seatNumber ||
//       seats[index] ||
//       "N/A"
//     );

//   };


//   const getMeal = (
//     passenger,
//     index
//   ) => {

//     return (
//       passenger?.meal ||
//       passenger?.mealName ||
//       meals[index]?.name ||
//       "No Meal"
//     );

//   };


//   const getBaggage = (
//     passenger,
//     index
//   ) => {

//     return (
//       passenger?.baggage ||
//       passenger?.baggageWeight ||
//       baggages[index]?.weight ||
//       "15 KG (Included)"
//     );

//   };


//   // =====================================================
//   // FARE
//   // =====================================================

//   const flightFare =
//     Number(
//       booking.flightFare
//     ) ||
//     Number(
//       booking.priceDetails?.flightFare
//     ) ||
//     Number(
//       flight.finalPrice
//     ) ||
//     Number(
//       flight.price
//     ) ||
//     0;


//   const seatFare =
//     Number(
//       booking.seatFare
//     ) ||
//     Number(
//       booking.priceDetails?.seatCharges
//     ) ||
//     0;


//   const mealFare =
//     Number(
//       booking.mealFare
//     ) ||
//     Number(
//       booking.priceDetails?.mealCharges
//     ) ||
//     0;


//   const baggageFare =
//     Number(
//       booking.baggageFare
//     ) ||
//     Number(
//       booking.priceDetails?.baggageCharges
//     ) ||
//     0;


//   const tax =
//     Number(
//       booking.taxes
//     ) ||
//     0;


//   const convenienceFee =
//     Number(
//       booking.convenienceFee
//     ) ||
//     0;


//   const discount =
//     Number(
//       booking.discount
//     ) ||
//     0;


//   const total =
//     Number(
//       booking.total
//     ) ||
//     Number(
//       booking.priceDetails?.total
//     ) ||
//     (
//       flightFare +
//       seatFare +
//       mealFare +
//       baggageFare +
//       tax +
//       convenienceFee -
//       discount
//     );


//   // =====================================================
//   // PRINT
//   // =====================================================

//   const handlePrint = () => {

//     window.print();

//   };


//   // =====================================================
//   // DOWNLOAD
//   // =====================================================

//   const handleDownload = () => {

//     window.print();

//   };


//   // =====================================================
//   // NO TICKET
//   // =====================================================

//   if (
//     !bookingId ||
//     passengers.length === 0
//   ) {

//     return (

//       <section className="ticket-page">

//         <div className="no-ticket">

//           <h2>
//             Ticket Not Found ✈️
//           </h2>

//           <p>
//             Booking information is not available.
//           </p>

//           <button
//             type="button"
//             onClick={() =>
//               navigate("/")
//             }
//           >
//             <FaHome />
//             Back To Home
//           </button>

//         </div>

//       </section>

//     );

//   }


//   // =====================================================
//   // UI
//   // =====================================================

//   return (

//     <>

//       <section className="ticket-page">


//         {/* =================================================
//                     ACTION BUTTONS
//         ================================================= */}

//         <div className="ticket-actions">

//           <button
//             type="button"
//             onClick={
//               handleDownload
//             }
//           >

//             <FaDownload />

//             Download Ticket

//           </button>


//           <button
//             type="button"
//             onClick={
//               handlePrint
//             }
//           >

//             <FaPrint />

//             Print Ticket

//           </button>


//           <button
//             type="button"
//             onClick={() =>
//               navigate("/")
//             }
//           >

//             <FaHome />

//             Home

//           </button>

//         </div>


//         {/* =================================================
//                     TICKET
//         ================================================= */}

//         <div className="ticket-container">


//           {/* =================================================
//                     HEADER
//           ================================================= */}

//           <div className="ticket-header">


//             <div className="company-info">

//               <div className="company-logo">

//                 <FaPlaneDeparture />

//               </div>


//               <div>

//                 <h1>
//                   Saiyed Travels
//                 </h1>

//                 <p>
//                   Flight Booking & Travel Services
//                 </p>

//               </div>

//             </div>


//             <div className="ticket-title">

//               <h2>
//                 E-TICKET
//               </h2>

//               <span>
//                 CONFIRMED
//               </span>

//             </div>

//           </div>


//           {/* =================================================
//                     BOOKING INFORMATION
//           ================================================= */}

//           <div className="ticket-section">


//             <div className="section-heading">

//               Booking Information

//             </div>


//             <div className="booking-info-grid">


//               <div>

//                 <small>
//                   Booking ID
//                 </small>

//                 <strong>
//                   {bookingId}
//                 </strong>

//               </div>


//               <div>

//                 <small>
//                   PNR
//                 </small>

//                 <strong>
//                   {pnr}
//                 </strong>

//               </div>


//               <div>

//                 <small>
//                   Airline
//                 </small>

//                 <strong>
//                   {airline}
//                 </strong>

//               </div>


//               <div>

//                 <small>
//                   Flight Number
//                 </small>

//                 <strong>
//                   {flightNo}
//                 </strong>

//               </div>

//             </div>

//           </div>


//           {/* =================================================
//                     FLIGHT INFORMATION
//           ================================================= */}

//           <div className="ticket-section">


//             <div className="section-heading">

//               Flight Information

//             </div>


//             <div className="flight-route">


//               <div className="airport">

//                 <strong>
//                   {fromCode}
//                 </strong>

//                 <span>
//                   {fromCity}
//                 </span>

//                 <small>
//                   {fromAirport}
//                 </small>

//                 <b>
//                   {departureTime}
//                 </b>

//                 <small>
//                   {departureDate}
//                 </small>

//               </div>


//               <div className="route-line">

//                 <FaPlaneDeparture />

//                 <span>
//                   {duration}
//                 </span>

//                 <hr />

//                 <small>
//                   {stops}
//                 </small>

//               </div>


//               <div className="airport">

//                 <strong>
//                   {toCode}
//                 </strong>

//                 <span>
//                   {toCity}
//                 </span>

//                 <small>
//                   {toAirport}
//                 </small>

//                 <b>
//                   {arrivalTime}
//                 </b>

//                 <small>
//                   {arrivalDate}
//                 </small>

//               </div>

//             </div>


//             <div className="flight-extra-info">


//               <div>

//                 <small>
//                   Aircraft
//                 </small>

//                 <strong>
//                   {aircraft}
//                 </strong>

//               </div>


//               <div>

//                 <small>
//                   Departure Terminal
//                 </small>

//                 <strong>
//                   {flight.departureTerminal ||
//                     "N/A"}
//                 </strong>

//               </div>


//               <div>

//                 <small>
//                   Arrival Terminal
//                 </small>

//                 <strong>
//                   {flight.arrivalTerminal ||
//                     "N/A"}
//                 </strong>

//               </div>


//               <div>

//                 <small>
//                   Class
//                 </small>

//                 <strong>
//                   {flight.cabin ||
//                     flight.cabinClass ||
//                     "Economy"}
//                 </strong>

//               </div>

//             </div>

//           </div>


//           {/* =================================================
//                     PASSENGER SUMMARY
//           ================================================= */}

//           <div className="ticket-section">


//             <div className="section-heading">

//               Passenger Summary

//             </div>


//             <div className="passenger-count">

//               <span>
//                 Total Passengers:
//                 <strong>
//                   {passengers.length}
//                 </strong>
//               </span>


//               <span>
//                 Adults:
//                 <strong>
//                   {adultCount}
//                 </strong>
//               </span>


//               <span>
//                 Children:
//                 <strong>
//                   {childCount}
//                 </strong>
//               </span>


//               <span>
//                 Infants:
//                 <strong>
//                   {infantCount}
//                 </strong>
//               </span>

//             </div>

//           </div>


//           {/* =================================================
//                     ALL PASSENGERS
//           ================================================= */}

//           <div className="ticket-section">


//             <div className="section-heading">

//               Passenger Details

//             </div>


//             <div className="passengers-list">


//               {passengers.map(
//                 (
//                   item,
//                   index
//                 ) => (

//                   <div
//                     className="passenger-card"
//                     key={
//                       item?._id ||
//                       `${getName(item)}-${index}`
//                     }
//                   >


//                     {/* HEADER */}

//                     <div className="passenger-card-header">

//                       <h3>

//                         Passenger{" "}
//                         {index + 1}

//                       </h3>


//                       <span>

//                         {getType(
//                           item
//                         )}

//                       </span>

//                     </div>


//                     {/* DETAILS */}

//                     <div className="passenger-details">


//                       <div>

//                         <small>
//                           Full Name
//                         </small>

//                         <strong>
//                           {getName(
//                             item
//                           )}
//                         </strong>

//                       </div>


//                       <div>

//                         <small>
//                           Passenger Type
//                         </small>

//                         <strong>
//                           {getType(
//                             item
//                           )}
//                         </strong>

//                       </div>


//                       <div>

//                         <small>
//                           Gender
//                         </small>

//                         <strong>
//                           {item?.gender ||
//                             "N/A"}
//                         </strong>

//                       </div>


//                       <div>

//                         <small>
//                           Date of Birth
//                         </small>

//                         <strong>
//                           {item?.dob ||
//                             "N/A"}
//                         </strong>

//                       </div>


//                       <div>

//                         <small>
//                           Nationality
//                         </small>

//                         <strong>
//                           {item?.nationality ||
//                             "Indian"}
//                         </strong>

//                       </div>


//                       <div>

//                         <small>
//                           Passport
//                         </small>

//                         <strong>
//                           {item?.passport ||
//                             "N/A"}
//                         </strong>

//                       </div>


//                       <div>

//                         <small>
//                           Passport Expiry
//                         </small>

//                         <strong>
//                           {item?.passportExpiry ||
//                             "N/A"}
//                         </strong>

//                       </div>


//                       <div>

//                         <small>
//                           Seat
//                         </small>

//                         <strong>

//                           {getSeat(
//                             item,
//                             index
//                           )}

//                         </strong>

//                       </div>


//                       <div>

//                         <small>
//                           Meal
//                         </small>

//                         <strong>

//                           {getMeal(
//                             item,
//                             index
//                           )}

//                         </strong>

//                       </div>


//                       <div>

//                         <small>
//                           Baggage
//                         </small>

//                         <strong>

//                           {getBaggage(
//                             item,
//                             index
//                           )}

//                         </strong>

//                       </div>

//                     </div>


//                     {/* CONTACT */}

//                     {(item?.email ||
//                       item?.phone) && (

//                       <div className="passenger-contact">


//                         {item?.email && (

//                           <span>

//                             Email:
//                             {" "}
//                             {item.email}

//                           </span>

//                         )}


//                         {item?.phone && (

//                           <span>

//                             Phone:
//                             {" "}
//                             {item.phone}

//                           </span>

//                         )}

//                       </div>

//                     )}

//                   </div>

//                 )
//               )}

//             </div>

//           </div>


//           {/* =================================================
//                     SERVICES
//           ================================================= */}

//           <div className="ticket-section">


//             <div className="section-heading">

//               Selected Services

//             </div>


//             <div className="services-grid">


//               <div>

//                 <small>
//                   Seats
//                 </small>

//                 <strong>

//                   {seats.length > 0
//                     ? seats.join(", ")
//                     : "No Seat"}

//                 </strong>

//               </div>


//               <div>

//                 <small>
//                   Meals
//                 </small>

//                 <strong>

//                   {meals.length > 0

//                     ? meals
//                         .map(
//                           (item) =>
//                             item?.name ||
//                             "No Meal"
//                         )
//                         .join(", ")

//                     : "No Meal"}

//                 </strong>

//               </div>


//               <div>

//                 <small>
//                   Baggage
//                 </small>

//                 <strong>

//                   {baggages.length > 0

//                     ? baggages
//                         .map(
//                           (item) =>
//                             item?.weight ||
//                             "Included"
//                         )
//                         .join(", ")

//                     : "15 KG Included"}

//                 </strong>

//               </div>

//             </div>

//           </div>


//           {/* =================================================
//                     FARE SUMMARY
//           ================================================= */}

//           <div className="ticket-section">


//             <div className="section-heading">

//               Fare Summary

//             </div>


//             <div className="fare-summary">


//               <div>

//                 <span>
//                   Flight Fare
//                 </span>

//                 <strong>
//                   ₹{" "}
//                   {flightFare.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>

//               </div>


//               <div>

//                 <span>
//                   Seat Charges
//                 </span>

//                 <strong>
//                   ₹{" "}
//                   {seatFare.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>

//               </div>


//               <div>

//                 <span>
//                   Meal Charges
//                 </span>

//                 <strong>
//                   ₹{" "}
//                   {mealFare.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>

//               </div>


//               <div>

//                 <span>
//                   Baggage Charges
//                 </span>

//                 <strong>
//                   ₹{" "}
//                   {baggageFare.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>

//               </div>


//               <div>

//                 <span>
//                   Taxes
//                 </span>

//                 <strong>
//                   ₹{" "}
//                   {tax.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>

//               </div>


//               <div>

//                 <span>
//                   Convenience Fee
//                 </span>

//                 <strong>
//                   ₹{" "}
//                   {convenienceFee.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>

//               </div>


//               {discount > 0 && (

//                 <div className="discount-row">

//                   <span>
//                     Discount
//                   </span>

//                   <strong>
//                     - ₹{" "}
//                     {discount.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>

//                 </div>

//               )}


//               <div className="total-row">

//                 <span>
//                   Total Paid
//                 </span>

//                 <strong>
//                   ₹{" "}
//                   {total.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>

//               </div>

//             </div>

//           </div>


//           {/* =================================================
//                     PAYMENT
//           ================================================= */}

//           <div className="payment-info">


//             <div>

//               <small>
//                 Payment Method
//               </small>

//               <strong>
//                 {booking.paymentMethod ||
//                   "UPI"}
//               </strong>

//             </div>


//             <div>

//               <small>
//                 Payment Status
//               </small>

//               <strong className="paid">
//                 Paid
//               </strong>

//             </div>


//             <div>

//               <small>
//                 Booking Status
//               </small>

//               <strong className="confirmed">
//                 Confirmed
//               </strong>

//             </div>

//           </div>


//           {/* =================================================
//                     IMPORTANT INFORMATION
//           ================================================= */}

//           <div className="ticket-notice">

//             <h3>
//               Important Information
//             </h3>


//             <p>
//               • Please carry valid government issued
//               identity proof during your journey.
//             </p>


//             <p>
//               • Please reach the airport before the
//               recommended check-in time.
//             </p>


//             <p>
//               • Baggage allowance is subject to airline
//               rules and ticket conditions.
//             </p>


//             <p>
//               • Please verify all passenger and flight
//               details before travelling.
//             </p>

//           </div>


//           {/* =================================================
//                     FOOTER
//           ================================================= */}

//           <div className="ticket-footer">


//             <div>

//               <strong>
//                 Saiyed Travels
//               </strong>

//               <span>
//                 Your Journey, Our Responsibility
//               </span>

//             </div>


//             <div>

//               <span>
//                 Booking ID: {bookingId}
//               </span>

//               <span>
//                 PNR: {pnr}
//               </span>

//             </div>

//           </div>


//         </div>

//       </section>

//     </>

//   );

// }


// export default Ticket;




import "./Ticket.css";

import { useState } from "react";
import {
  FaPlaneDeparture,
  FaDownload,
  FaPrint,
  FaHome,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";


function Ticket() {

  const location = useLocation();
  const navigate = useNavigate();

  const booking =
    location.state?.booking ||
    location.state ||
    {};

  // =====================================================
  // PRICE SHOW / HIDE
  // =====================================================

  const [showPrice, setShowPrice] =
    useState(false);


  // =====================================================
  // PASSENGERS
  // =====================================================

  const passengers =
    Array.isArray(booking.passengers) &&
    booking.passengers.length > 0
      ? booking.passengers
      : booking.passenger
      ? [booking.passenger]
      : [];


  // =====================================================
  // FLIGHT
  // =====================================================

  const flight =
    booking.flight || {};


  const airline =
    flight.airline ||
    booking.airline ||
    "Saiyed Travels";


  const flightNo =
    flight.flightNo ||
    flight.flightNumber ||
    booking.flightNo ||
    "N/A";


  const fromCity =
    flight.fromCity ||
    flight.from ||
    booking.fromCity ||
    booking.from ||
    "N/A";


  const toCity =
    flight.toCity ||
    flight.to ||
    booking.toCity ||
    booking.to ||
    "N/A";


  const fromCode =
    flight.fromCode ||
    booking.fromCode ||
    fromCity;


  const toCode =
    flight.toCode ||
    booking.toCode ||
    toCity;


  const departureDate =
    flight.departureDate ||
    flight.date ||
    booking.departureDate ||
    booking.date ||
    "N/A";


  const departureTime =
    flight.departureTime ||
    flight.departure ||
    booking.departureTime ||
    "N/A";


  const arrivalTime =
    flight.arrivalTime ||
    flight.arrival ||
    booking.arrivalTime ||
    "N/A";


  const duration =
    flight.duration ||
    booking.duration ||
    "N/A";


  const stops =
    flight.stops ||
    booking.stops ||
    "Non-stop";


  // =====================================================
  // BOOKING
  // =====================================================

  const bookingId =
    booking.bookingId ||
    booking._id ||
    "N/A";


  const pnr =
    booking.pnr ||
    booking.PNR ||
    "N/A";


  // =====================================================
  // PASSENGER COUNT
  // =====================================================

  const adultCount =
    Number(booking.adults) ||
    passengers.filter(
      (p) =>
        String(
          p?.type || "Adult"
        ).toLowerCase() === "adult"
    ).length;


  const childCount =
    Number(booking.children) ||
    passengers.filter(
      (p) =>
        String(
          p?.type || ""
        ).toLowerCase() === "child"
    ).length;


  const infantCount =
    Number(booking.infants) ||
    passengers.filter(
      (p) =>
        String(
          p?.type || ""
        ).toLowerCase() === "infant"
    ).length;


  // =====================================================
  // SEATS
  // =====================================================

  const seats =
    Array.isArray(booking.seats)
      ? booking.seats
      : booking.seat
      ? [booking.seat]
      : [];


  // =====================================================
  // MEALS
  // =====================================================

  const meals =
    Array.isArray(booking.meals)
      ? booking.meals
      : booking.meal
      ? [booking.meal]
      : [];


  // =====================================================
  // BAGGAGE
  // =====================================================

  const baggages =
    Array.isArray(booking.baggages)
      ? booking.baggages
      : booking.baggage
      ? [booking.baggage]
      : [];


  // =====================================================
  // FARE
  // =====================================================

  const flightFare =
    Number(
      booking.flightFare
    ) ||
    Number(
      booking.priceDetails?.flightFare
    ) ||
    Number(
      flight.price
    ) ||
    Number(
      flight.finalPrice
    ) ||
    0;


  const seatFare =
    Number(
      booking.seatFare
    ) ||
    Number(
      booking.priceDetails?.seatCharges
    ) ||
    0;


  const mealFare =
    Number(
      booking.mealFare
    ) ||
    Number(
      booking.priceDetails?.mealCharges
    ) ||
    0;


  const baggageFare =
    Number(
      booking.baggageFare
    ) ||
    Number(
      booking.priceDetails?.baggageCharges
    ) ||
    0;


  const taxes =
    Number(
      booking.taxes
    ) ||
    Number(
      booking.tax
    ) ||
    0;


  const convenienceFee =
    Number(
      booking.convenienceFee
    ) ||
    0;


  const discount =
    Number(
      booking.discount
    ) ||
    0;


  const total =
    Number(
      booking.total
    ) ||
    Number(
      booking.totalAmount
    ) ||
    Number(
      booking.priceDetails?.total
    ) ||
    (
      flightFare +
      seatFare +
      mealFare +
      baggageFare +
      taxes +
      convenienceFee -
      discount
    );


  // =====================================================
  // PASSENGER NAME
  // =====================================================

  const getPassengerName = (
    passenger
  ) => {

    if (
      passenger?.name
    ) {
      return passenger.name;
    }


    const fullName =
      `${passenger?.firstName || ""} ${
        passenger?.lastName || ""
      }`.trim();


    return (
      fullName ||
      "Passenger"
    );

  };


  // =====================================================
  // PASSENGER TYPE
  // =====================================================

  const getPassengerType = (
    passenger
  ) => {

    const type =
      passenger?.type ||
      "Adult";


    return (
      String(type)
        .charAt(0)
        .toUpperCase() +
      String(type).slice(1)
    );

  };


  // =====================================================
  // SEAT
  // =====================================================

  const getPassengerSeat = (
    passenger,
    index
  ) => {

    if (
      String(
        passenger?.type || ""
      ).toLowerCase() === "infant"
    ) {

      return "No Seat";

    }


    return (
      passenger?.seat ||
      passenger?.seatNumber ||
      seats[index] ||
      "N/A"
    );

  };


  // =====================================================
  // MEAL
  // =====================================================

  const getPassengerMeal = (
    passenger,
    index
  ) => {

    return (
      passenger?.meal ||
      passenger?.mealName ||
      meals[index]?.name ||
      "No Meal"
    );

  };


  // =====================================================
  // BAGGAGE
  // =====================================================

  const getPassengerBaggage = (
    passenger,
    index
  ) => {

    return (
      passenger?.baggage ||
      passenger?.baggageWeight ||
      baggages[index]?.weight ||
      "15 KG (Included)"
    );

  };


  // =====================================================
  // PRINT
  // =====================================================

  const handlePrint = () => {

    window.print();

  };


  // =====================================================
  // DOWNLOAD / PDF
  // =====================================================

  const handleDownload = () => {

    window.print();

  };


  // =====================================================
  // NO BOOKING
  // =====================================================

  if (
    passengers.length === 0
  ) {

    return (

      <section className="ticket-page">

        <div className="no-ticket">

          <h2>
            Ticket Not Found ✈️
          </h2>

          <p>
            Booking information is not available.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/")
            }
          >
            <FaHome />
            Back To Home
          </button>

        </div>

      </section>

    );

  }


  // =====================================================
  // UI
  // =====================================================

  return (

    <section className="ticket-page">


      {/* =================================================
                  ACTION BUTTONS
      ================================================= */}

      <div className="ticket-actions">


        {/* PRICE BUTTON */}

        <button
          type="button"
          className="price-toggle-btn"
          onClick={() =>
            setShowPrice(
              !showPrice
            )
          }
        >

          {showPrice ? (
            <>
              <FaEyeSlash />
              Hide Price
            </>
          ) : (
            <>
              <FaEye />
              Show Price
            </>
          )}

        </button>


        {/* PRINT */}

        <button
          type="button"
          onClick={
            handlePrint
          }
        >

          <FaPrint />

          Print Ticket

        </button>


        {/* PDF */}

        <button
          type="button"
          onClick={
            handleDownload
          }
        >

          <FaDownload />

          Print / PDF

        </button>


        {/* HOME */}

        <button
          type="button"
          onClick={() =>
            navigate("/")
          }
        >

          <FaHome />

          Home

        </button>

      </div>


      {/* =================================================
                  TICKET
      ================================================= */}

      <div className="ticket-container">


        {/* HEADER */}

        <div className="ticket-header">


          <div className="company-info">

            <div className="company-logo">

              <FaPlaneDeparture />

            </div>


            <div>

              <h1>
                Saiyed Travels
              </h1>

              <p>
                Flight Booking & Travel Services
              </p>

            </div>

          </div>


          <div className="ticket-title">

            <h2>
              E-TICKET
            </h2>

            <span>
              CONFIRMED
            </span>

          </div>

        </div>


        {/* BOOKING INFO */}

        <div className="ticket-section">

          <div className="section-heading">
            Booking Information
          </div>


          <div className="booking-info-grid">


            <div>

              <small>
                Booking ID
              </small>

              <strong>
                {bookingId}
              </strong>

            </div>


            <div>

              <small>
                PNR
              </small>

              <strong>
                {pnr}
              </strong>

            </div>


            <div>

              <small>
                Airline
              </small>

              <strong>
                {airline}
              </strong>

            </div>


            <div>

              <small>
                Flight Number
              </small>

              <strong>
                {flightNo}
              </strong>

            </div>

          </div>

        </div>


        {/* FLIGHT */}

        <div className="ticket-section">

          <div className="section-heading">
            Flight Information
          </div>


          <div className="flight-route">


            <div className="airport">

              <strong>
                {fromCode}
              </strong>

              <span>
                {fromCity}
              </span>

              <b>
                {departureTime}
              </b>

              <small>
                {departureDate}
              </small>

            </div>


            <div className="route-line">

              <FaPlaneDeparture />

              <span>
                {duration}
              </span>

              <hr />

              <small>
                {stops}
              </small>

            </div>


            <div className="airport">

              <strong>
                {toCode}
              </strong>

              <span>
                {toCity}
              </span>

              <b>
                {arrivalTime}
              </b>

              <small>
                {departureDate}
              </small>

            </div>

          </div>

        </div>


        {/* PASSENGER COUNT */}

        <div className="ticket-section">

          <div className="section-heading">
            Passenger Summary
          </div>


          <div className="passenger-count">

            <span>
              Total:
              <strong>
                {passengers.length}
              </strong>
            </span>


            <span>
              Adults:
              <strong>
                {adultCount}
              </strong>
            </span>


            <span>
              Children:
              <strong>
                {childCount}
              </strong>
            </span>


            <span>
              Infants:
              <strong>
                {infantCount}
              </strong>
            </span>

          </div>

        </div>


        {/* ALL PASSENGERS */}

        <div className="ticket-section">

          <div className="section-heading">
            Passenger Details
          </div>


          <div className="passengers-list">


            {passengers.map(
              (
                passenger,
                index
              ) => (

                <div
                  className="passenger-card"
                  key={
                    passenger?._id ||
                    index
                  }
                >


                  <div className="passenger-card-header">

                    <h3>
                      Passenger {index + 1}
                    </h3>

                    <span>
                      {getPassengerType(
                        passenger
                      )}
                    </span>

                  </div>


                  <div className="passenger-details">


                    <div>

                      <small>
                        Full Name
                      </small>

                      <strong>
                        {getPassengerName(
                          passenger
                        )}
                      </strong>

                    </div>


                    <div>

                      <small>
                        Type
                      </small>

                      <strong>
                        {getPassengerType(
                          passenger
                        )}
                      </strong>

                    </div>


                    <div>

                      <small>
                        Gender
                      </small>

                      <strong>
                        {passenger?.gender ||
                          "N/A"}
                      </strong>

                    </div>


                    <div>

                      <small>
                        Date of Birth
                      </small>

                      <strong>
                        {passenger?.dob ||
                          "N/A"}
                      </strong>

                    </div>


                    <div>

                      <small>
                        Nationality
                      </small>

                      <strong>
                        {passenger?.nationality ||
                          "Indian"}
                      </strong>

                    </div>


                    <div>

                      <small>
                        Seat
                      </small>

                      <strong>
                        {getPassengerSeat(
                          passenger,
                          index
                        )}
                      </strong>

                    </div>


                    <div>

                      <small>
                        Meal
                      </small>

                      <strong>
                        {getPassengerMeal(
                          passenger,
                          index
                        )}
                      </strong>

                    </div>


                    <div>

                      <small>
                        Baggage
                      </small>

                      <strong>
                        {getPassengerBaggage(
                          passenger,
                          index
                        )}
                      </strong>

                    </div>


                  </div>


                  {(passenger?.email ||
                    passenger?.phone) && (

                    <div className="passenger-contact">

                      {passenger?.email && (

                        <span>
                          Email:{" "}
                          {passenger.email}
                        </span>

                      )}


                      {passenger?.phone && (

                        <span>
                          Phone:{" "}
                          {passenger.phone}
                        </span>

                      )}

                    </div>

                  )}

                </div>

              )
            )}

          </div>

        </div>


        {/* SERVICES */}

        <div className="ticket-section">

          <div className="section-heading">
            Selected Services
          </div>


          <div className="services-grid">


            <div>

              <small>
                Seats
              </small>

              <strong>

                {seats.length
                  ? seats.join(", ")
                  : "No Seat"}

              </strong>

            </div>


            <div>

              <small>
                Meals
              </small>

              <strong>

                {meals.length
                  ? meals
                      .map(
                        (m) =>
                          m?.name ||
                          "No Meal"
                      )
                      .join(", ")
                  : "No Meal"}

              </strong>

            </div>


            <div>

              <small>
                Baggage
              </small>

              <strong>

                {baggages.length
                  ? baggages
                      .map(
                        (b) =>
                          b?.weight ||
                          "Included"
                      )
                      .join(", ")
                  : "15 KG Included"}

              </strong>

            </div>

          </div>

        </div>


        {/* =================================================
                    PRICE SECTION
        ================================================= */}

        {showPrice && (

          <div className="ticket-section price-section">

            <div className="section-heading">
              Fare Summary
            </div>


            <div className="fare-summary">


              <div>

                <span>
                  Flight Fare
                </span>

                <strong>
                  ₹{" "}
                  {flightFare.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>


              <div>

                <span>
                  Seat Charges
                </span>

                <strong>
                  ₹{" "}
                  {seatFare.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>


              <div>

                <span>
                  Meal Charges
                </span>

                <strong>
                  ₹{" "}
                  {mealFare.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>


              <div>

                <span>
                  Baggage Charges
                </span>

                <strong>
                  ₹{" "}
                  {baggageFare.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>


              <div>

                <span>
                  Taxes
                </span>

                <strong>
                  ₹{" "}
                  {taxes.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>


              <div>

                <span>
                  Convenience Fee
                </span>

                <strong>
                  ₹{" "}
                  {convenienceFee.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>


              {discount > 0 && (

                <div className="discount-row">

                  <span>
                    Discount
                  </span>

                  <strong>
                    - ₹{" "}
                    {discount.toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                </div>

              )}


              <div className="total-row">

                <span>
                  Total Paid
                </span>

                <strong>
                  ₹{" "}
                  {total.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>

            </div>

          </div>

        )}


        {/* PAYMENT STATUS */}

        <div className="payment-info">


          <div>

            <small>
              Payment Method
            </small>

            <strong>
              {booking.paymentMethod ||
                "UPI"}
            </strong>

          </div>


          <div>

            <small>
              Payment Status
            </small>

            <strong>
              Paid
            </strong>

          </div>


          <div>

            <small>
              Booking Status
            </small>

            <strong>
              Confirmed
            </strong>

          </div>

        </div>


        {/* NOTICE */}

        <div className="ticket-notice">

          <h3>
            Important Information
          </h3>

          <p>
            • Please carry valid government
            issued identity proof during your journey.
          </p>

          <p>
            • Please reach the airport before
            the recommended check-in time.
          </p>

          <p>
            • Baggage allowance is subject to
            airline rules and ticket conditions.
          </p>

          <p>
            • Please verify all passenger and
            flight details before travelling.
          </p>

        </div>


        {/* FOOTER */}

        <div className="ticket-footer">

          <div>

            <strong>
              Saiyed Travels
            </strong>

            <span>
              Your Journey, Our Responsibility
            </span>

          </div>


          <div>

            <span>
              Booking ID: {bookingId}
            </span>

            <span>
              PNR: {pnr}
            </span>

          </div>

        </div>


      </div>

    </section>

  );

}


export default Ticket;