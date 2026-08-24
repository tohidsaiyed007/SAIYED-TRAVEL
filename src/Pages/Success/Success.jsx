
// // // // import "./Success.css";

// // // // import {
// // // //   useLocation,
// // // //   useNavigate,
// // // // } from "react-router-dom";

// // // // import {
// // // //   FaPlaneDeparture,
// // // //   FaCheckCircle,
// // // //   FaDownload,
// // // //   FaPrint,
// // // //   FaHome,
// // // // } from "react-icons/fa";

// // // // import Navbar from "../../Components/Navbar/Navbar";
// // // // import Footer from "../../Components/Footer/Footer";


// // // // function Success() {

// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();


// // // //   // =====================================================
// // // //   // GET BOOKING DATA
// // // //   // =====================================================

// // // //   const state = location.state || {};


// // // //   const {
// // // //     bookingId,
// // // //     pnr,

// // // //     passenger,
// // // //     passengers,

// // // //     travellers,

// // // //     flight,

// // // //     seat,
// // // //     seats,

// // // //     meal,
// // // //     meals,

// // // //     baggage,

// // // //     total,
// // // //     discount,
// // // //     taxes,
// // // //     convenienceFee,
// // // //     paymentMethod,

// // // //   } = state;


// // // //   // =====================================================
// // // //   // FINAL PASSENGERS
// // // //   // =====================================================

// // // //   let finalPassengers = [];


// // // //   if (
// // // //     Array.isArray(passengers) &&
// // // //     passengers.length > 0
// // // //   ) {

// // // //     finalPassengers = passengers;

// // // //   } else if (
// // // //     Array.isArray(
// // // //       state?.booking?.passengers
// // // //     ) &&
// // // //     state.booking.passengers.length > 0
// // // //   ) {

// // // //     finalPassengers =
// // // //       state.booking.passengers;

// // // //   } else if (
// // // //     passenger
// // // //   ) {

// // // //     finalPassengers = [
// // // //       passenger,
// // // //     ];

// // // //   }


// // // //   // =====================================================
// // // //   // FINAL SEATS
// // // //   // =====================================================

// // // //   const finalSeats =
// // // //     Array.isArray(seats)
// // // //       ? seats
// // // //       : seat
// // // //       ? [seat]
// // // //       : [];


// // // //   // =====================================================
// // // //   // FINAL MEALS
// // // //   // =====================================================

// // // //   const finalMeals =
// // // //     Array.isArray(meals)
// // // //       ? meals
// // // //       : meal
// // // //       ? [meal]
// // // //       : [];


// // // //   // =====================================================
// // // //   // FINAL BAGGAGE
// // // //   // =====================================================

// // // //   const finalBaggage =
// // // //     Array.isArray(baggage)
// // // //       ? baggage
// // // //       : baggage
// // // //       ? [baggage]
// // // //       : [];


// // // //   // =====================================================
// // // //   // COUNTS
// // // //   // =====================================================

// // // //   const adultCount =
// // // //     Number(
// // // //       travellers?.adults
// // // //     ) ||
// // // //     finalPassengers.filter(
// // // //       (item) =>
// // // //         String(
// // // //           item?.type || "Adult"
// // // //         ).toLowerCase() === "adult"
// // // //     ).length;


// // // //   const childCount =
// // // //     Number(
// // // //       travellers?.children
// // // //     ) ||
// // // //     finalPassengers.filter(
// // // //       (item) =>
// // // //         String(
// // // //           item?.type || ""
// // // //         ).toLowerCase() === "child"
// // // //     ).length;


// // // //   const infantCount =
// // // //     Number(
// // // //       travellers?.infants
// // // //     ) ||
// // // //     finalPassengers.filter(
// // // //       (item) =>
// // // //         String(
// // // //           item?.type || ""
// // // //         ).toLowerCase() === "infant"
// // // //     ).length;


// // // //   // =====================================================
// // // //   // NO BOOKING
// // // //   // =====================================================

// // // //   if (!flight) {

// // // //     return (
// // // //       <>
// // // //         <Navbar />

// // // //         <section className="success-page">

// // // //           <div className="no-booking">

// // // //             <FaPlaneDeparture />

// // // //             <h2>
// // // //               No Booking Found ✈️
// // // //             </h2>

// // // //             <p>
// // // //               Please complete your booking before
// // // //               viewing your ticket.
// // // //             </p>

// // // //             <button
// // // //               onClick={() =>
// // // //                 navigate("/")
// // // //               }
// // // //             >
// // // //               Back To Home
// // // //             </button>

// // // //           </div>

// // // //         </section>

// // // //         <Footer />
// // // //       </>
// // // //     );

// // // //   }


// // // //   // =====================================================
// // // //   // BOOKING ID
// // // //   // =====================================================

// // // //   const finalBookingId =
// // // //     bookingId ||
// // // //     state?.booking?.bookingId ||
// // // //     "ST-PENDING";


// // // //   // =====================================================
// // // //   // PNR
// // // //   // =====================================================

// // // //   const airlinePNR =
// // // //     pnr ||
// // // //     state?.booking?.pnr ||
// // // //     "N/A";


// // // //   // =====================================================
// // // //   // FLIGHT
// // // //   // =====================================================

// // // //   const airline =
// // // //     flight.airline ||
// // // //     "Airline";


// // // //   const flightNo =
// // // //     flight.flightNo ||
// // // //     "N/A";


// // // //   const fromCode =
// // // //     flight.fromCode ||
// // // //     flight.from ||
// // // //     "N/A";


// // // //   const toCode =
// // // //     flight.toCode ||
// // // //     flight.to ||
// // // //     "N/A";


// // // //   const fromCity =
// // // //     flight.fromCity ||
// // // //     flight.from ||
// // // //     "N/A";


// // // //   const toCity =
// // // //     flight.toCity ||
// // // //     flight.to ||
// // // //     "N/A";


// // // //   const fromAirport =
// // // //     flight.fromAirport ||
// // // //     "";


// // // //   const toAirport =
// // // //     flight.toAirport ||
// // // //     "";


// // // //   const departureDate =
// // // //     flight.departureDate ||
// // // //     flight.date ||
// // // //     "N/A";


// // // //   const arrivalDate =
// // // //     flight.arrivalDate ||
// // // //     flight.date ||
// // // //     departureDate;


// // // //   const departureTime =
// // // //     flight.departureTime ||
// // // //     flight.departure ||
// // // //     "N/A";


// // // //   const arrivalTime =
// // // //     flight.arrivalTime ||
// // // //     flight.arrival ||
// // // //     "N/A";


// // // //   const duration =
// // // //     flight.duration ||
// // // //     "N/A";


// // // //   const stops =
// // // //     flight.stops ||
// // // //     "Non-stop";


// // // //   const aircraft =
// // // //     flight.aircraft ||
// // // //     "N/A";


// // // //   const departureTerminal =
// // // //     flight.departureTerminal ||
// // // //     "N/A";


// // // //   const arrivalTerminal =
// // // //     flight.arrivalTerminal ||
// // // //     "N/A";


// // // //   const cabin =
// // // //     flight.cabin ||
// // // //     flight.cabinClass ||
// // // //     flight.selectedCabin ||
// // // //     "Economy";


// // // //   // =====================================================
// // // //   // BAGGAGE
// // // //   // =====================================================

// // // //   const baggageText =
// // // //     finalBaggage[0]?.weight ||
// // // //     flight.checkinBaggage ||
// // // //     "15 KG";


// // // //   // =====================================================
// // // //   // FARES
// // // //   // =====================================================

// // // //   const flightFare =
// // // //     Number(
// // // //       flight.finalPrice ??
// // // //       flight.price ??
// // // //       0
// // // //     );


// // // //   const seatPrice =
// // // //     Number(
// // // //       state?.pricing?.seatPrice
// // // //     ) ||
// // // //     (
// // // //       finalSeats.length *
// // // //       300
// // // //     );


// // // //   const mealPrice =
// // // //     Number(
// // // //       state?.pricing?.mealPrice
// // // //     ) ||
// // // //     finalMeals.reduce(
// // // //       (
// // // //         totalPrice,
// // // //         item
// // // //       ) =>
// // // //         totalPrice +
// // // //         Number(
// // // //           item?.price || 0
// // // //         ),
// // // //       0
// // // //     );


// // // //   const baggagePrice =
// // // //     Number(
// // // //       state?.pricing?.baggagePrice
// // // //     ) ||
// // // //     finalBaggage.reduce(
// // // //       (
// // // //         totalPrice,
// // // //         item
// // // //       ) =>
// // // //         totalPrice +
// // // //         Number(
// // // //           item?.price || 0
// // // //         ),
// // // //       0
// // // //     );


// // // //   const taxAmount =
// // // //     Number(taxes) ||
// // // //     0;


// // // //   const convenience =
// // // //     Number(
// // // //       convenienceFee
// // // //     ) ||
// // // //     0;


// // // //   const discountAmount =
// // // //     Number(discount) ||
// // // //     0;


// // // //   const finalTotal =
// // // //     Number(total) ||
// // // //     (
// // // //       flightFare +
// // // //       seatPrice +
// // // //       mealPrice +
// // // //       baggagePrice +
// // // //       taxAmount +
// // // //       convenience -
// // // //       discountAmount
// // // //     );


// // // //   // =====================================================
// // // //   // AIRLINE LOGO
// // // //   // =====================================================

// // // //   const airlineLogo =
// // // //     flight.logo ||
// // // //     "";


// // // //   // =====================================================
// // // //   // QR
// // // //   // =====================================================

// // // //   const qrInformation =
// // // //     encodeURIComponent(
// // // //       JSON.stringify({

// // // //         bookingId:
// // // //           finalBookingId,

// // // //         pnr:
// // // //           airlinePNR,

// // // //         passengers:
// // // //           finalPassengers.map(
// // // //             (item) => ({
// // // //               name:
// // // //                 `${item?.firstName || ""} ${
// // // //                   item?.lastName || ""
// // // //                 }`.trim(),

// // // //               type:
// // // //                 item?.type ||
// // // //                 "Adult",
// // // //             })
// // // //           ),

// // // //         airline,

// // // //         flightNo,

// // // //         from:
// // // //           fromCode,

// // // //         to:
// // // //           toCode,

// // // //         seats:
// // // //           finalSeats,

// // // //       })
// // // //     );


// // // //   const qrCodeUrl =
// // // //     `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrInformation}`;


// // // //   // =====================================================
// // // //   // PRINT
// // // //   // =====================================================

// // // //   const handlePrint = () => {

// // // //     window.print();

// // // //   };


// // // //   // =====================================================
// // // //   // DOWNLOAD
// // // //   // =====================================================

// // // //   const handleDownload = () => {

// // // //     window.print();

// // // //   };


// // // //   // =====================================================
// // // //   // PASSENGER NAME
// // // //   // =====================================================

// // // //   const getPassengerName =
// // // //     (item) => {

// // // //       const name =
// // // //         `${item?.firstName || ""} ${
// // // //           item?.lastName || ""
// // // //         }`.trim();

// // // //       return (
// // // //         name ||
// // // //         "Passenger"
// // // //       );

// // // //     };


// // // //   // =====================================================
// // // //   // PASSENGER TYPE
// // // //   // =====================================================

// // // //   const getPassengerType =
// // // //     (item) => {

// // // //       const type =
// // // //         String(
// // // //           item?.type ||
// // // //           "Adult"
// // // //         );

// // // //       return type;

// // // //     };


// // // //   // =====================================================
// // // //   // PASSENGER SEAT
// // // //   //
// // // //   // Infant gets NO seat
// // // //   // =====================================================

// // // //   const getPassengerSeat =
// // // //     (
// // // //       item,
// // // //       index
// // // //     ) => {

// // // //       const type =
// // // //         String(
// // // //           item?.type ||
// // // //           "Adult"
// // // //         ).toLowerCase();


// // // //       if (
// // // //         type === "infant"
// // // //       ) {

// // // //         return "No Seat";

// // // //       }


// // // //       return (
// // // //         item?.seat ||
// // // //         item?.seatNumber ||
// // // //         finalSeats[index] ||
// // // //         "N/A"
// // // //       );

// // // //     };


// // // //   // =====================================================
// // // //   // PASSENGER MEAL
// // // //   // =====================================================

// // // //   const getPassengerMeal =
// // // //     (
// // // //       item,
// // // //       index
// // // //     ) => {

// // // //       return (
// // // //         item?.meal ||
// // // //         item?.mealName ||
// // // //         finalMeals[index]?.name ||
// // // //         finalMeals[0]?.name ||
// // // //         "No Meal"
// // // //       );

// // // //     };


// // // //   // =====================================================
// // // //   // PASSENGER BAGGAGE
// // // //   // =====================================================

// // // //   const getPassengerBaggage =
// // // //     (
// // // //       item,
// // // //       index
// // // //     ) => {

// // // //       return (
// // // //         item?.baggage ||
// // // //         item?.baggageWeight ||
// // // //         finalBaggage[index]?.weight ||
// // // //         finalBaggage[0]?.weight ||
// // // //         baggageText
// // // //       );

// // // //     };


// // // //   // =====================================================
// // // //   // UI
// // // //   // =====================================================

// // // //   return (
// // // //     <>
// // // //       <Navbar />


// // // //       <section className="success-page">


// // // //         {/* =================================================
// // // //                     SUCCESS MESSAGE
// // // //         ================================================= */}

// // // //         <div className="success-message">

// // // //           <FaCheckCircle />

// // // //           <h1>
// // // //             Booking Successful
// // // //           </h1>

// // // //           <p>
// // // //             Your flight ticket has been confirmed successfully.
// // // //           </p>

// // // //         </div>


// // // //         {/* =================================================
// // // //                     E-TICKET
// // // //         ================================================= */}

// // // //         <div className="eticket">


// // // //           {/* =================================================
// // // //                     HEADER
// // // //           ================================================= */}

// // // //           <div className="eticket-header">


// // // //             <div className="saiyed-brand">

// // // //               <div className="saiyed-logo">

// // // //                 <FaPlaneDeparture />

// // // //               </div>

// // // //               <div>

// // // //                 <h1>
// // // //                   Saiyed Travels
// // // //                 </h1>

// // // //                 <p>
// // // //                   Flight Booking & Travel Services
// // // //                 </p>

// // // //               </div>

// // // //             </div>


// // // //             <div className="airline-brand">

// // // //               {airlineLogo ? (

// // // //                 <img
// // // //                   src={airlineLogo}
// // // //                   alt={airline}
// // // //                 />

// // // //               ) : (

// // // //                 <div className="airline-no-logo">

// // // //                   <FaPlaneDeparture />

// // // //                 </div>

// // // //               )}


// // // //               <div>

// // // //                 <strong>
// // // //                   {airline}
// // // //                 </strong>

// // // //                 <span>
// // // //                   {flightNo}
// // // //                 </span>

// // // //               </div>

// // // //             </div>


// // // //           </div>


// // // //           {/* =================================================
// // // //                     BOOKING DETAILS
// // // //           ================================================= */}

// // // //           <div className="ticket-section">

// // // //             <div className="section-title blue">
// // // //               Booking Details [Confirmed]
// // // //             </div>


// // // //             <div className="details-table booking-table">

// // // //               <div className="table-heading">
// // // //                 Booking ID
// // // //               </div>

// // // //               <div className="table-heading">
// // // //                 GDS PNR
// // // //               </div>

// // // //               <div className="table-heading">
// // // //                 Airline PNR
// // // //               </div>

// // // //               <div className="table-heading">
// // // //                 Booking Date
// // // //               </div>


// // // //               <div className="table-value">
// // // //                 {finalBookingId}
// // // //               </div>

// // // //               <div className="table-value">
// // // //                 {airlinePNR}
// // // //               </div>

// // // //               <div className="table-value pnr">
// // // //                 {airlinePNR}
// // // //               </div>

// // // //               <div className="table-value">

// // // //                 {new Date().toLocaleDateString(
// // // //                   "en-IN",
// // // //                   {
// // // //                     day:
// // // //                       "2-digit",

// // // //                     month:
// // // //                       "short",

// // // //                     year:
// // // //                       "numeric",
// // // //                   }
// // // //                 )}

// // // //               </div>

// // // //             </div>

// // // //           </div>


// // // //           {/* =================================================
// // // //                     FLIGHT DETAILS
// // // //           ================================================= */}

// // // //           <div className="ticket-section">

// // // //             <div className="section-title orange">
// // // //               Flight Details
// // // //             </div>


// // // //             <div className="flight-note">

// // // //               Subject to prior sale, price and schedule
// // // //               changes. Please check your flight details
// // // //               before travelling.

// // // //             </div>


// // // //             <div className="route-title">

// // // //               {fromCode} - {toCode}

// // // //             </div>


// // // //             <div className="flight-table">


// // // //               <div className="flight-heading">
// // // //                 Carrier / Dep Date
// // // //               </div>

// // // //               <div className="flight-heading">
// // // //                 Flight No
// // // //               </div>

// // // //               <div className="flight-heading">
// // // //                 Departure / Dep Terminal
// // // //               </div>

// // // //               <div className="flight-heading">
// // // //                 Arrival / Arr Terminal
// // // //               </div>

// // // //               <div className="flight-heading">
// // // //                 Dep Time / Dep Date
// // // //               </div>

// // // //               <div className="flight-heading">
// // // //                 Arr Time / Arr Date
// // // //               </div>

// // // //               <div className="flight-heading">
// // // //                 Duration
// // // //               </div>

// // // //               <div className="flight-heading">
// // // //                 Fare Class
// // // //               </div>


// // // //               <div className="flight-value carrier-cell">

// // // //                 {airlineLogo ? (

// // // //                   <img
// // // //                     src={airlineLogo}
// // // //                     alt={airline}
// // // //                   />

// // // //                 ) : (

// // // //                   <FaPlaneDeparture />

// // // //                 )}

// // // //                 <span>
// // // //                   {airline}
// // // //                 </span>

// // // //                 <small>
// // // //                   {departureDate}
// // // //                 </small>

// // // //               </div>


// // // //               <div className="flight-value">

// // // //                 {flightNo}

// // // //               </div>


// // // //               <div className="flight-value">

// // // //                 <strong>
// // // //                   {fromCity}
// // // //                 </strong>

// // // //                 <span>
// // // //                   {fromAirport}
// // // //                 </span>

// // // //                 <small>
// // // //                   Terminal {departureTerminal}
// // // //                 </small>

// // // //               </div>


// // // //               <div className="flight-value">

// // // //                 <strong>
// // // //                   {toCity}
// // // //                 </strong>

// // // //                 <span>
// // // //                   {toAirport}
// // // //                 </span>

// // // //                 <small>
// // // //                   Terminal {arrivalTerminal}
// // // //                 </small>

// // // //               </div>


// // // //               <div className="flight-value">

// // // //                 <strong>
// // // //                   {departureTime}
// // // //                 </strong>

// // // //                 <small>
// // // //                   {departureDate}
// // // //                 </small>

// // // //               </div>


// // // //               <div className="flight-value">

// // // //                 <strong>
// // // //                   {arrivalTime}
// // // //                 </strong>

// // // //                 <small>
// // // //                   {arrivalDate}
// // // //                 </small>

// // // //               </div>


// // // //               <div className="flight-value">

// // // //                 <strong>
// // // //                   {duration}
// // // //                 </strong>

// // // //                 <small>
// // // //                   {stops}
// // // //                 </small>

// // // //               </div>


// // // //               <div className="flight-value">

// // // //                 <strong>
// // // //                   {cabin}
// // // //                 </strong>

// // // //                 <small>
// // // //                   {flight.refundable
// // // //                     ? "Refundable"
// // // //                     : "Non Refundable"}
// // // //                 </small>

// // // //               </div>


// // // //             </div>


// // // //             <div className="important-flight-note">

// // // //               <strong>
// // // //                 ● IMPORTANT:
// // // //               </strong>

// // // //               Check-in counters close 60 minutes
// // // //               prior to departure. All times are local time.

// // // //             </div>

// // // //           </div>


// // // //           {/* =================================================
// // // //                     PASSENGER DETAILS
// // // //           ================================================= */}

// // // //           <div className="ticket-section">

// // // //             <div className="section-title orange">
// // // //               Passenger Details
// // // //             </div>


// // // //             {/* Passenger count */}

// // // //             <div
// // // //               style={{
// // // //                 marginBottom:
// // // //                   "12px",
// // // //                 fontWeight:
// // // //                   "600",
// // // //               }}
// // // //             >

// // // //               Total Passengers:{" "}

// // // //               {finalPassengers.length}

// // // //               {"  |  "}

// // // //               Adults: {adultCount}

// // // //               {"  |  "}

// // // //               Children: {childCount}

// // // //               {"  |  "}

// // // //               Infants: {infantCount}

// // // //             </div>


// // // //             {/* =================================================
// // // //                     ALL PASSENGERS
// // // //             ================================================= */}

// // // //             <div className="passenger-table">


// // // //               {/* HEADER */}

// // // //               <div className="passenger-heading">
// // // //                 Passenger Name
// // // //               </div>

// // // //               <div className="passenger-heading">
// // // //                 Type
// // // //               </div>

// // // //               <div className="passenger-heading">
// // // //                 Sector
// // // //               </div>

// // // //               <div className="passenger-heading">
// // // //                 PNR
// // // //               </div>

// // // //               <div className="passenger-heading">
// // // //                 Seat
// // // //               </div>

// // // //               <div className="passenger-heading">
// // // //                 Meal
// // // //               </div>

// // // //               <div className="passenger-heading">
// // // //                 Baggage
// // // //               </div>


// // // //               {/* =================================================
// // // //                     PASSENGERS
// // // //               ================================================= */}

// // // //               {finalPassengers.map(
// // // //                 (
// // // //                   item,
// // // //                   index
// // // //                 ) => (

// // // //                   <div
// // // //                     key={
// // // //                       item?._id ||
// // // //                       `${getPassengerName(item)}-${index}`
// // // //                     }
// // // //                     style={{
// // // //                       display:
// // // //                         "contents",
// // // //                     }}
// // // //                   >


// // // //                     {/* NAME */}

// // // //                     <div className="passenger-value">

// // // //                       <strong>

// // // //                         {getPassengerName(
// // // //                           item
// // // //                         ).toUpperCase()}

// // // //                       </strong>


// // // //                       <small>

// // // //                         Passport:{" "}

// // // //                         {item?.passport ||
// // // //                           "N/A"}

// // // //                       </small>


// // // //                       <small>

// // // //                         DOB:{" "}

// // // //                         {item?.dob ||
// // // //                           "N/A"}

// // // //                       </small>


// // // //                       <small>

// // // //                         Gender:{" "}

// // // //                         {item?.gender ||
// // // //                           "N/A"}

// // // //                       </small>

// // // //                     </div>


// // // //                     {/* TYPE */}

// // // //                     <div className="passenger-value">

// // // //                       {getPassengerType(
// // // //                         item
// // // //                       )}

// // // //                     </div>


// // // //                     {/* SECTOR */}

// // // //                     <div className="passenger-value">

// // // //                       {fromCode} - {toCode}

// // // //                     </div>


// // // //                     {/* PNR */}

// // // //                     <div className="passenger-value pnr">

// // // //                       {airlinePNR}

// // // //                     </div>


// // // //                     {/* SEAT */}

// // // //                     <div className="passenger-value">

// // // //                       <strong>

// // // //                         {getPassengerSeat(
// // // //                           item,
// // // //                           index
// // // //                         )}

// // // //                       </strong>

// // // //                     </div>


// // // //                     {/* MEAL */}

// // // //                     <div className="passenger-value">

// // // //                       {getPassengerMeal(
// // // //                         item,
// // // //                         index
// // // //                       )}

// // // //                     </div>


// // // //                     {/* BAGGAGE */}

// // // //                     <div className="passenger-value">

// // // //                       {getPassengerBaggage(
// // // //                         item,
// // // //                         index
// // // //                       )}

// // // //                     </div>


// // // //                   </div>

// // // //                 )
// // // //               )}

// // // //             </div>


// // // //             <div className="passenger-note">

// // // //               You have been informed that you have to carry
// // // //               valid identity papers during your journey.
// // // //               Please check your flight details before travel.

// // // //             </div>

// // // //           </div>


// // // //           {/* =================================================
// // // //                     FARE + PAYMENT
// // // //           ================================================= */}

// // // //           <div className="fare-payment-section">


// // // //             <div className="fare-summary">

// // // //               <div className="section-title orange">
// // // //                 Fare Summary
// // // //               </div>


// // // //               <div className="fare-row">

// // // //                 <span>
// // // //                   Flight Fare
// // // //                 </span>

// // // //                 <strong>
// // // //                   ₹ {flightFare.toLocaleString("en-IN")}
// // // //                 </strong>

// // // //               </div>


// // // //               <div className="fare-row">

// // // //                 <span>
// // // //                   Seat Fee
// // // //                 </span>

// // // //                 <strong>
// // // //                   ₹ {seatPrice.toLocaleString("en-IN")}
// // // //                 </strong>

// // // //               </div>


// // // //               <div className="fare-row">

// // // //                 <span>
// // // //                   Meal Fee
// // // //                 </span>

// // // //                 <strong>
// // // //                   ₹ {mealPrice.toLocaleString("en-IN")}
// // // //                 </strong>

// // // //               </div>


// // // //               <div className="fare-row">

// // // //                 <span>
// // // //                   Baggage Fee
// // // //                 </span>

// // // //                 <strong>
// // // //                   ₹ {baggagePrice.toLocaleString("en-IN")}
// // // //                 </strong>

// // // //               </div>


// // // //               <div className="fare-row">

// // // //                 <span>
// // // //                   Taxes
// // // //                 </span>

// // // //                 <strong>
// // // //                   ₹ {taxAmount.toLocaleString("en-IN")}
// // // //                 </strong>

// // // //               </div>


// // // //               <div className="fare-row">

// // // //                 <span>
// // // //                   Convenience Fee
// // // //                 </span>

// // // //                 <strong>
// // // //                   ₹ {convenience.toLocaleString("en-IN")}
// // // //                 </strong>

// // // //               </div>


// // // //               {discountAmount > 0 && (

// // // //                 <div className="fare-row discount">

// // // //                   <span>
// // // //                     Discount
// // // //                   </span>

// // // //                   <strong>
// // // //                     - ₹{" "}
// // // //                     {discountAmount.toLocaleString("en-IN")}
// // // //                   </strong>

// // // //                 </div>

// // // //               )}


// // // //               <div className="fare-total">

// // // //                 <span>
// // // //                   Total
// // // //                 </span>

// // // //                 <strong>
// // // //                   ₹ {finalTotal.toLocaleString("en-IN")}
// // // //                 </strong>

// // // //               </div>

// // // //             </div>


// // // //             {/* PAYMENT */}

// // // //             <div className="payment-summary">

// // // //               <div className="section-title orange">
// // // //                 Payment Summary
// // // //               </div>


// // // //               <div className="payment-row">

// // // //                 <span>
// // // //                   Payment Type
// // // //                 </span>

// // // //                 <strong>
// // // //                   {paymentMethod || "UPI"}
// // // //                 </strong>

// // // //               </div>


// // // //               <div className="payment-row">

// // // //                 <span>
// // // //                   Amount
// // // //                 </span>

// // // //                 <strong>
// // // //                   ₹ {finalTotal.toLocaleString("en-IN")}
// // // //                 </strong>

// // // //               </div>


// // // //               <div className="payment-row">

// // // //                 <span>
// // // //                   Payment Date
// // // //                 </span>

// // // //                 <strong>
// // // //                   {new Date().toLocaleDateString(
// // // //                     "en-IN"
// // // //                   )}
// // // //                 </strong>

// // // //               </div>


// // // //               <div className="payment-row">

// // // //                 <span>
// // // //                   Payment Status
// // // //                 </span>

// // // //                 <strong className="paid">
// // // //                   Paid
// // // //                 </strong>

// // // //               </div>


// // // //               <div className="payment-row">

// // // //                 <span>
// // // //                   Payment Mode
// // // //                 </span>

// // // //                 <strong>
// // // //                   {paymentMethod || "UPI"}
// // // //                 </strong>

// // // //               </div>

// // // //             </div>

// // // //           </div>


// // // //           {/* =================================================
// // // //                     QR
// // // //           ================================================= */}

// // // //           <div className="qr-brand-section">


// // // //             <div className="saiyed-promo">

// // // //               <div className="promo-logo">

// // // //                 <FaPlaneDeparture />

// // // //               </div>

// // // //               <div>

// // // //                 <h2>
// // // //                   Saiyed Travels
// // // //                 </h2>

// // // //                 <p>
// // // //                   Your Journey, Our Responsibility
// // // //                 </p>

// // // //                 <span>
// // // //                   Flight Booking • Visa • Holidays
// // // //                 </span>

// // // //               </div>

// // // //             </div>


// // // //             <div className="ticket-qr">

// // // //               <img
// // // //                 src={qrCodeUrl}
// // // //                 alt="Booking QR Code"
// // // //               />

// // // //               <small>
// // // //                 Scan to verify booking
// // // //               </small>

// // // //             </div>

// // // //           </div>


// // // //           {/* =================================================
// // // //                     TERMS
// // // //           ================================================= */}

// // // //           <div className="terms-section">

// // // //             <h3>
// // // //               Important Information
// // // //             </h3>

// // // //             <p>
// // // //               1. Please carry valid government issued
// // // //               identity proof during your journey.
// // // //             </p>

// // // //             <p>
// // // //               2. Please reach the airport before the
// // // //               recommended check-in time.
// // // //             </p>

// // // //             <p>
// // // //               3. Baggage allowance is subject to airline
// // // //               rules and ticket conditions.
// // // //             </p>

// // // //             <p>
// // // //               4. Please verify all flight details before
// // // //               travelling.
// // // //             </p>

// // // //           </div>


// // // //           {/* =================================================
// // // //                     FOOTER
// // // //           ================================================= */}

// // // //           <div className="eticket-footer">

// // // //             <div>

// // // //               <strong>
// // // //                 Saiyed Travels
// // // //               </strong>

// // // //               <span>
// // // //                 Flight Booking & Travel Services
// // // //               </span>

// // // //             </div>


// // // //             <div>

// // // //               <span>
// // // //                 Booking ID: {finalBookingId}
// // // //               </span>

// // // //               <span>
// // // //                 PNR: {airlinePNR}
// // // //               </span>

// // // //             </div>

// // // //           </div>


// // // //         </div>


// // // //         {/* =================================================
// // // //                     BUTTONS
// // // //         ================================================= */}

// // // //         <div className="success-buttons">

// // // //           <button
// // // //             className="download-btn"
// // // //             onClick={
// // // //               handleDownload
// // // //             }
// // // //           >

// // // //             <FaDownload />

// // // //             Download Ticket

// // // //           </button>


// // // //           <button
// // // //             className="print-btn"
// // // //             onClick={
// // // //               handlePrint
// // // //             }
// // // //           >

// // // //             <FaPrint />

// // // //             Print Ticket

// // // //           </button>


// // // //           <button
// // // //             className="home-btn"
// // // //             onClick={() =>
// // // //               navigate("/")
// // // //             }
// // // //           >

// // // //             <FaHome />

// // // //             Back To Home

// // // //           </button>

// // // //         </div>


// // // //       </section>


// // // //       <Footer />

// // // //     </>
// // // //   );

// // // // }


// // // // export default Success;


// // // import "./Success.css";

// // // import {
// // //   useLocation,
// // //   useNavigate,
// // // } from "react-router-dom";

// // // import { useState } from "react";

// // // import {
// // //   FaPlaneDeparture,
// // //   FaCheckCircle,
// // //   FaDownload,
// // //   FaPrint,
// // //   FaHome,
// // //   FaEye,
// // //   FaEyeSlash,
// // // } from "react-icons/fa";

// // // import Navbar from "../../Components/Navbar/Navbar";
// // // import Footer from "../../Components/Footer/Footer";


// // // function Success() {

// // //   const location = useLocation();
// // //   const navigate = useNavigate();

// // //   // =====================================================
// // //   // PRICE SHOW / HIDE
// // //   // =====================================================

// // //   const [showPrice, setShowPrice] =
// // //     useState(false);


// // //   // =====================================================
// // //   // GET BOOKING DATA
// // //   // =====================================================

// // //   const state = location.state || {};

// // //   const {
// // //     bookingId,
// // //     pnr,

// // //     passenger,
// // //     passengers,

// // //     travellers,

// // //     flight,

// // //     seat,
// // //     seats,

// // //     meal,
// // //     meals,

// // //     baggage,

// // //     total,
// // //     discount,
// // //     taxes,
// // //     convenienceFee,
// // //     paymentMethod,

// // //   } = state;


// // //   // =====================================================
// // //   // FINAL PASSENGERS
// // //   // =====================================================

// // //   let finalPassengers = [];


// // //   if (
// // //     Array.isArray(passengers) &&
// // //     passengers.length > 0
// // //   ) {

// // //     finalPassengers = passengers;

// // //   } else if (
// // //     Array.isArray(
// // //       state?.booking?.passengers
// // //     ) &&
// // //     state.booking.passengers.length > 0
// // //   ) {

// // //     finalPassengers =
// // //       state.booking.passengers;

// // //   } else if (
// // //     passenger
// // //   ) {

// // //     finalPassengers = [
// // //       passenger,
// // //     ];

// // //   }


// // //   // =====================================================
// // //   // FINAL SEATS
// // //   // =====================================================

// // //   const finalSeats =
// // //     Array.isArray(seats)
// // //       ? seats
// // //       : seat
// // //       ? [seat]
// // //       : [];


// // //   // =====================================================
// // //   // FINAL MEALS
// // //   // =====================================================

// // //   const finalMeals =
// // //     Array.isArray(meals)
// // //       ? meals
// // //       : meal
// // //       ? [meal]
// // //       : [];


// // //   // =====================================================
// // //   // FINAL BAGGAGE
// // //   // =====================================================

// // //   const finalBaggage =
// // //     Array.isArray(baggage)
// // //       ? baggage
// // //       : baggage
// // //       ? [baggage]
// // //       : [];


// // //   // =====================================================
// // //   // COUNTS
// // //   // =====================================================

// // //   const adultCount =
// // //     Number(
// // //       travellers?.adults
// // //     ) ||
// // //     finalPassengers.filter(
// // //       (item) =>
// // //         String(
// // //           item?.type || "Adult"
// // //         ).toLowerCase() === "adult"
// // //     ).length;


// // //   const childCount =
// // //     Number(
// // //       travellers?.children
// // //     ) ||
// // //     finalPassengers.filter(
// // //       (item) =>
// // //         String(
// // //           item?.type || ""
// // //         ).toLowerCase() === "child"
// // //     ).length;


// // //   const infantCount =
// // //     Number(
// // //       travellers?.infants
// // //     ) ||
// // //     finalPassengers.filter(
// // //       (item) =>
// // //         String(
// // //           item?.type || ""
// // //         ).toLowerCase() === "infant"
// // //     ).length;


// // //   // =====================================================
// // //   // NO BOOKING
// // //   // =====================================================

// // //   if (!flight) {

// // //     return (
// // //       <>
// // //         <Navbar />

// // //         <section className="success-page">

// // //           <div className="no-booking">

// // //             <FaPlaneDeparture />

// // //             <h2>
// // //               No Booking Found ✈️
// // //             </h2>

// // //             <p>
// // //               Please complete your booking before
// // //               viewing your ticket.
// // //             </p>

// // //             <button
// // //               onClick={() =>
// // //                 navigate("/")
// // //               }
// // //             >
// // //               Back To Home
// // //             </button>

// // //           </div>

// // //         </section>

// // //         <Footer />
// // //       </>
// // //     );

// // //   }


// // //   // =====================================================
// // //   // BOOKING ID
// // //   // =====================================================

// // //   const finalBookingId =
// // //     bookingId ||
// // //     state?.booking?.bookingId ||
// // //     "ST-PENDING";


// // //   // =====================================================
// // //   // PNR
// // //   // =====================================================

// // //   const airlinePNR =
// // //     pnr ||
// // //     state?.booking?.pnr ||
// // //     "N/A";


// // //   // =====================================================
// // //   // FLIGHT
// // //   // =====================================================

// // //   const airline =
// // //     flight.airline ||
// // //     "Airline";


// // //   const flightNo =
// // //     flight.flightNo ||
// // //     "N/A";


// // //   const fromCode =
// // //     flight.fromCode ||
// // //     flight.from ||
// // //     "N/A";


// // //   const toCode =
// // //     flight.toCode ||
// // //     flight.to ||
// // //     "N/A";


// // //   const fromCity =
// // //     flight.fromCity ||
// // //     flight.from ||
// // //     "N/A";


// // //   const toCity =
// // //     flight.toCity ||
// // //     flight.to ||
// // //     "N/A";


// // //   const fromAirport =
// // //     flight.fromAirport ||
// // //     "";


// // //   const toAirport =
// // //     flight.toAirport ||
// // //     "";


// // //   const departureDate =
// // //     flight.departureDate ||
// // //     flight.date ||
// // //     "N/A";


// // //   const arrivalDate =
// // //     flight.arrivalDate ||
// // //     flight.date ||
// // //     departureDate;


// // //   const departureTime =
// // //     flight.departureTime ||
// // //     flight.departure ||
// // //     "N/A";


// // //   const arrivalTime =
// // //     flight.arrivalTime ||
// // //     flight.arrival ||
// // //     "N/A";


// // //   const duration =
// // //     flight.duration ||
// // //     "N/A";


// // //   const stops =
// // //     flight.stops ||
// // //     "Non-stop";


// // //   const aircraft =
// // //     flight.aircraft ||
// // //     "N/A";


// // //   const departureTerminal =
// // //     flight.departureTerminal ||
// // //     "N/A";


// // //   const arrivalTerminal =
// // //     flight.arrivalTerminal ||
// // //     "N/A";


// // //   const cabin =
// // //     flight.cabin ||
// // //     flight.cabinClass ||
// // //     flight.selectedCabin ||
// // //     "Economy";


// // //   // =====================================================
// // //   // BAGGAGE
// // //   // =====================================================

// // //   const baggageText =
// // //     finalBaggage[0]?.weight ||
// // //     flight.checkinBaggage ||
// // //     "15 KG";


// // //   // =====================================================
// // //   // FARES
// // //   // =====================================================

// // //   const flightFare =
// // //     Number(
// // //       flight.finalPrice ??
// // //       flight.price ??
// // //       0
// // //     );


// // //   const seatPrice =
// // //     Number(
// // //       state?.pricing?.seatPrice
// // //     ) ||
// // //     (
// // //       finalSeats.length *
// // //       300
// // //     );


// // //   const mealPrice =
// // //     Number(
// // //       state?.pricing?.mealPrice
// // //     ) ||
// // //     finalMeals.reduce(
// // //       (
// // //         totalPrice,
// // //         item
// // //       ) =>
// // //         totalPrice +
// // //         Number(
// // //           item?.price || 0
// // //         ),
// // //       0
// // //     );


// // //   const baggagePrice =
// // //     Number(
// // //       state?.pricing?.baggagePrice
// // //     ) ||
// // //     finalBaggage.reduce(
// // //       (
// // //         totalPrice,
// // //         item
// // //       ) =>
// // //         totalPrice +
// // //         Number(
// // //           item?.price || 0
// // //         ),
// // //       0
// // //     );


// // //   const taxAmount =
// // //     Number(taxes) ||
// // //     0;


// // //   const convenience =
// // //     Number(
// // //       convenienceFee
// // //     ) ||
// // //     0;


// // //   const discountAmount =
// // //     Number(discount) ||
// // //     0;


// // //   const finalTotal =
// // //     Number(total) ||
// // //     (
// // //       flightFare +
// // //       seatPrice +
// // //       mealPrice +
// // //       baggagePrice +
// // //       taxAmount +
// // //       convenience -
// // //       discountAmount
// // //     );


// // //   // =====================================================
// // //   // AIRLINE LOGO
// // //   // =====================================================

// // //   const airlineLogo =
// // //     flight.logo ||
// // //     "";


// // //   // =====================================================
// // //   // QR
// // //   // =====================================================

// // //   const qrInformation =
// // //     encodeURIComponent(
// // //       JSON.stringify({

// // //         bookingId:
// // //           finalBookingId,

// // //         pnr:
// // //           airlinePNR,

// // //         passengers:
// // //           finalPassengers.map(
// // //             (item) => ({

// // //               name:
// // //                 `${item?.firstName || ""} ${
// // //                   item?.lastName || ""
// // //                 }`.trim(),

// // //               type:
// // //                 item?.type ||
// // //                 "Adult",

// // //             })
// // //           ),

// // //         airline,

// // //         flightNo,

// // //         from:
// // //           fromCode,

// // //         to:
// // //           toCode,

// // //         seats:
// // //           finalSeats,

// // //       })
// // //     );


// // //   const qrCodeUrl =
// // //     `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrInformation}`;


// // //   // =====================================================
// // //   // PRINT
// // //   // =====================================================

// // //   const handlePrint = () => {

// // //     window.print();

// // //   };


// // //   // =====================================================
// // //   // DOWNLOAD
// // //   // =====================================================

// // //   const handleDownload = () => {

// // //     window.print();

// // //   };


// // //   // =====================================================
// // //   // PASSENGER NAME
// // //   // =====================================================

// // //   const getPassengerName =
// // //     (item) => {

// // //       const name =
// // //         `${item?.firstName || ""} ${
// // //           item?.lastName || ""
// // //         }`.trim();

// // //       return (
// // //         name ||
// // //         "Passenger"
// // //       );

// // //     };


// // //   // =====================================================
// // //   // PASSENGER TYPE
// // //   // =====================================================

// // //   const getPassengerType =
// // //     (item) => {

// // //       const type =
// // //         String(
// // //           item?.type ||
// // //           "Adult"
// // //         );

// // //       return type;

// // //     };


// // //   // =====================================================
// // //   // PASSENGER SEAT
// // //   // =====================================================

// // //   const getPassengerSeat =
// // //     (
// // //       item,
// // //       index
// // //     ) => {

// // //       const type =
// // //         String(
// // //           item?.type ||
// // //           "Adult"
// // //         ).toLowerCase();


// // //       if (
// // //         type === "infant"
// // //       ) {

// // //         return "No Seat";

// // //       }


// // //       return (
// // //         item?.seat ||
// // //         item?.seatNumber ||
// // //         finalSeats[index] ||
// // //         "N/A"
// // //       );

// // //     };


// // //   // =====================================================
// // //   // PASSENGER MEAL
// // //   // =====================================================

// // //   const getPassengerMeal =
// // //     (
// // //       item,
// // //       index
// // //     ) => {

// // //       return (
// // //         item?.meal ||
// // //         item?.mealName ||
// // //         finalMeals[index]?.name ||
// // //         finalMeals[0]?.name ||
// // //         "No Meal"
// // //       );

// // //     };


// // //   // =====================================================
// // //   // PASSENGER BAGGAGE
// // //   // =====================================================

// // //   const getPassengerBaggage =
// // //     (
// // //       item,
// // //       index
// // //     ) => {

// // //       return (
// // //         item?.baggage ||
// // //         item?.baggageWeight ||
// // //         finalBaggage[index]?.weight ||
// // //         finalBaggage[0]?.weight ||
// // //         baggageText
// // //       );

// // //     };


// // //   // =====================================================
// // //   // UI
// // //   // =====================================================

// // //   return (

// // //     <>
// // //       <Navbar />


// // //       <section className="success-page">


// // //         {/* =================================================
// // //                     SUCCESS MESSAGE
// // //         ================================================= */}

// // //         <div className="success-message">

// // //           <FaCheckCircle />

// // //           <h1>
// // //             Booking Successful
// // //           </h1>

// // //           <p>
// // //             Your flight ticket has been confirmed successfully.
// // //           </p>

// // //         </div>


// // //         {/* =================================================
// // //                     E-TICKET
// // //         ================================================= */}

// // //         <div className="eticket">


// // //           {/* =================================================
// // //                     HEADER
// // //           ================================================= */}

// // //           <div className="eticket-header">


// // //             <div className="saiyed-brand">

// // //               <div className="saiyed-logo">

// // //                 <FaPlaneDeparture />

// // //               </div>

// // //               <div>

// // //                 <h1>
// // //                   Saiyed Travels
// // //                 </h1>

// // //                 <p>
// // //                   Flight Booking & Travel Services
// // //                 </p>

// // //               </div>

// // //             </div>


// // //             <div className="airline-brand">

// // //               {airlineLogo ? (

// // //                 <img
// // //                   src={airlineLogo}
// // //                   alt={airline}
// // //                 />

// // //               ) : (

// // //                 <div className="airline-no-logo">

// // //                   <FaPlaneDeparture />

// // //                 </div>

// // //               )}


// // //               <div>

// // //                 <strong>
// // //                   {airline}
// // //                 </strong>

// // //                 <span>
// // //                   {flightNo}
// // //                 </span>

// // //               </div>

// // //             </div>

// // //           </div>


// // //           {/* =================================================
// // //                     BOOKING DETAILS
// // //           ================================================= */}

// // //           <div className="ticket-section">

// // //             <div className="section-title blue">
// // //               Booking Details [Confirmed]
// // //             </div>


// // //             <div className="details-table booking-table">

// // //               <div className="table-heading">
// // //                 Booking ID
// // //               </div>

// // //               <div className="table-heading">
// // //                 GDS PNR
// // //               </div>

// // //               <div className="table-heading">
// // //                 Airline PNR
// // //               </div>

// // //               <div className="table-heading">
// // //                 Booking Date
// // //               </div>


// // //               <div className="table-value">
// // //                 {finalBookingId}
// // //               </div>

// // //               <div className="table-value">
// // //                 {airlinePNR}
// // //               </div>

// // //               <div className="table-value pnr">
// // //                 {airlinePNR}
// // //               </div>

// // //               <div className="table-value">

// // //                 {new Date().toLocaleDateString(
// // //                   "en-IN",
// // //                   {
// // //                     day: "2-digit",
// // //                     month: "short",
// // //                     year: "numeric",
// // //                   }
// // //                 )}

// // //               </div>

// // //             </div>

// // //           </div>


// // //           {/* =================================================
// // //                     FLIGHT DETAILS
// // //           ================================================= */}

// // //           <div className="ticket-section">

// // //             <div className="section-title orange">
// // //               Flight Details
// // //             </div>


// // //             <div className="flight-note">

// // //               Subject to prior sale, price and schedule
// // //               changes. Please check your flight details
// // //               before travelling.

// // //             </div>


// // //             <div className="route-title">

// // //               {fromCode} - {toCode}

// // //             </div>


// // //             <div className="flight-table">


// // //               <div className="flight-heading">
// // //                 Carrier / Dep Date
// // //               </div>

// // //               <div className="flight-heading">
// // //                 Flight No
// // //               </div>

// // //               <div className="flight-heading">
// // //                 Departure / Dep Terminal
// // //               </div>

// // //               <div className="flight-heading">
// // //                 Arrival / Arr Terminal
// // //               </div>

// // //               <div className="flight-heading">
// // //                 Dep Time / Dep Date
// // //               </div>

// // //               <div className="flight-heading">
// // //                 Arr Time / Arr Date
// // //               </div>

// // //               <div className="flight-heading">
// // //                 Duration
// // //               </div>

// // //               <div className="flight-heading">
// // //                 Fare Class
// // //               </div>


// // //               <div className="flight-value carrier-cell">

// // //                 {airlineLogo ? (

// // //                   <img
// // //                     src={airlineLogo}
// // //                     alt={airline}
// // //                   />

// // //                 ) : (

// // //                   <FaPlaneDeparture />

// // //                 )}

// // //                 <span>
// // //                   {airline}
// // //                 </span>

// // //                 <small>
// // //                   {departureDate}
// // //                 </small>

// // //               </div>


// // //               <div className="flight-value">
// // //                 {flightNo}
// // //               </div>


// // //               <div className="flight-value">

// // //                 <strong>
// // //                   {fromCity}
// // //                 </strong>

// // //                 <span>
// // //                   {fromAirport}
// // //                 </span>

// // //                 <small>
// // //                   Terminal {departureTerminal}
// // //                 </small>

// // //               </div>


// // //               <div className="flight-value">

// // //                 <strong>
// // //                   {toCity}
// // //                 </strong>

// // //                 <span>
// // //                   {toAirport}
// // //                 </span>

// // //                 <small>
// // //                   Terminal {arrivalTerminal}
// // //                 </small>

// // //               </div>


// // //               <div className="flight-value">

// // //                 <strong>
// // //                   {departureTime}
// // //                 </strong>

// // //                 <small>
// // //                   {departureDate}
// // //                 </small>

// // //               </div>


// // //               <div className="flight-value">

// // //                 <strong>
// // //                   {arrivalTime}
// // //                 </strong>

// // //                 <small>
// // //                   {arrivalDate}
// // //                 </small>

// // //               </div>


// // //               <div className="flight-value">

// // //                 <strong>
// // //                   {duration}
// // //                 </strong>

// // //                 <small>
// // //                   {stops}
// // //                 </small>

// // //               </div>


// // //               <div className="flight-value">

// // //                 <strong>
// // //                   {cabin}
// // //                 </strong>

// // //                 <small>
// // //                   {flight.refundable
// // //                     ? "Refundable"
// // //                     : "Non Refundable"}
// // //                 </small>

// // //               </div>

// // //             </div>


// // //             <div className="important-flight-note">

// // //               <strong>
// // //                 ● IMPORTANT:
// // //               </strong>

// // //               Check-in counters close 60 minutes
// // //               prior to departure. All times are local time.

// // //             </div>

// // //           </div>


// // //           {/* =================================================
// // //                     PASSENGER DETAILS
// // //           ================================================= */}

// // //           <div className="ticket-section">

// // //             <div className="section-title orange">
// // //               Passenger Details
// // //             </div>


// // //             <div
// // //               style={{
// // //                 marginBottom: "12px",
// // //                 fontWeight: "600",
// // //               }}
// // //             >

// // //               Total Passengers:{" "}
// // //               {finalPassengers.length}

// // //               {"  |  "}

// // //               Adults: {adultCount}

// // //               {"  |  "}

// // //               Children: {childCount}

// // //               {"  |  "}

// // //               Infants: {infantCount}

// // //             </div>


// // //             <div className="passenger-table">


// // //               <div className="passenger-heading">
// // //                 Passenger Name
// // //               </div>

// // //               <div className="passenger-heading">
// // //                 Type
// // //               </div>

// // //               <div className="passenger-heading">
// // //                 Sector
// // //               </div>

// // //               <div className="passenger-heading">
// // //                 PNR
// // //               </div>

// // //               <div className="passenger-heading">
// // //                 Seat
// // //               </div>

// // //               <div className="passenger-heading">
// // //                 Meal
// // //               </div>

// // //               <div className="passenger-heading">
// // //                 Baggage
// // //               </div>


// // //               {finalPassengers.map(
// // //                 (
// // //                   item,
// // //                   index
// // //                 ) => (

// // //                   <div
// // //                     key={
// // //                       item?._id ||
// // //                       `${getPassengerName(item)}-${index}`
// // //                     }
// // //                     style={{
// // //                       display: "contents",
// // //                     }}
// // //                   >


// // //                     <div className="passenger-value">

// // //                       <strong>

// // //                         {getPassengerName(
// // //                           item
// // //                         ).toUpperCase()}

// // //                       </strong>


// // //                       <small>

// // //                         Passport:{" "}
// // //                         {item?.passport ||
// // //                           "N/A"}

// // //                       </small>


// // //                       <small>

// // //                         DOB:{" "}
// // //                         {item?.dob ||
// // //                           "N/A"}

// // //                       </small>


// // //                       <small>

// // //                         Gender:{" "}
// // //                         {item?.gender ||
// // //                           "N/A"}

// // //                       </small>

// // //                     </div>


// // //                     <div className="passenger-value">

// // //                       {getPassengerType(
// // //                         item
// // //                       )}

// // //                     </div>


// // //                     <div className="passenger-value">

// // //                       {fromCode} - {toCode}

// // //                     </div>


// // //                     <div className="passenger-value pnr">

// // //                       {airlinePNR}

// // //                     </div>


// // //                     <div className="passenger-value">

// // //                       <strong>

// // //                         {getPassengerSeat(
// // //                           item,
// // //                           index
// // //                         )}

// // //                       </strong>

// // //                     </div>


// // //                     <div className="passenger-value">

// // //                       {getPassengerMeal(
// // //                         item,
// // //                         index
// // //                       )}

// // //                     </div>


// // //                     <div className="passenger-value">

// // //                       {getPassengerBaggage(
// // //                         item,
// // //                         index
// // //                       )}

// // //                     </div>


// // //                   </div>

// // //                 )
// // //               )}

// // //             </div>


// // //             <div className="passenger-note">

// // //               You have been informed that you have to carry
// // //               valid identity papers during your journey.
// // //               Please check your flight details before travel.

// // //             </div>

// // //           </div>


// // //           {/* =================================================
// // //                     FARE + PAYMENT
// // //                     HIDDEN BY DEFAULT
// // //           ================================================= */}

// // //           {showPrice && (

// // //             <div className="fare-payment-section">


// // //               {/* =================================================
// // //                         FARE SUMMARY
// // //               ================================================= */}

// // //               <div className="fare-summary">

// // //                 <div className="section-title orange">
// // //                   Fare Summary
// // //                 </div>


// // //                 <div className="fare-row">

// // //                   <span>
// // //                     Flight Fare
// // //                   </span>

// // //                   <strong>
// // //                     ₹ {flightFare.toLocaleString("en-IN")}
// // //                   </strong>

// // //                 </div>


// // //                 <div className="fare-row">

// // //                   <span>
// // //                     Seat Fee
// // //                   </span>

// // //                   <strong>
// // //                     ₹ {seatPrice.toLocaleString("en-IN")}
// // //                   </strong>

// // //                 </div>


// // //                 <div className="fare-row">

// // //                   <span>
// // //                     Meal Fee
// // //                   </span>

// // //                   <strong>
// // //                     ₹ {mealPrice.toLocaleString("en-IN")}
// // //                   </strong>

// // //                 </div>


// // //                 <div className="fare-row">

// // //                   <span>
// // //                     Baggage Fee
// // //                   </span>

// // //                   <strong>
// // //                     ₹ {baggagePrice.toLocaleString("en-IN")}
// // //                   </strong>

// // //                 </div>


// // //                 <div className="fare-row">

// // //                   <span>
// // //                     Taxes
// // //                   </span>

// // //                   <strong>
// // //                     ₹ {taxAmount.toLocaleString("en-IN")}
// // //                   </strong>

// // //                 </div>


// // //                 <div className="fare-row">

// // //                   <span>
// // //                     Convenience Fee
// // //                   </span>

// // //                   <strong>
// // //                     ₹ {convenience.toLocaleString("en-IN")}
// // //                   </strong>

// // //                 </div>


// // //                 {discountAmount > 0 && (

// // //                   <div className="fare-row discount">

// // //                     <span>
// // //                       Discount
// // //                     </span>

// // //                     <strong>
// // //                       - ₹{" "}
// // //                       {discountAmount.toLocaleString(
// // //                         "en-IN"
// // //                       )}
// // //                     </strong>

// // //                   </div>

// // //                 )}


// // //                 <div className="fare-total">

// // //                   <span>
// // //                     Total
// // //                   </span>

// // //                   <strong>
// // //                     ₹ {finalTotal.toLocaleString("en-IN")}
// // //                   </strong>

// // //                 </div>

// // //               </div>


// // //               {/* =================================================
// // //                         PAYMENT SUMMARY
// // //               ================================================= */}

// // //               <div className="payment-summary">

// // //                 <div className="section-title orange">
// // //                   Payment Summary
// // //                 </div>


// // //                 <div className="payment-row">

// // //                   <span>
// // //                     Payment Type
// // //                   </span>

// // //                   <strong>
// // //                     {paymentMethod || "UPI"}
// // //                   </strong>

// // //                 </div>


// // //                 <div className="payment-row">

// // //                   <span>
// // //                     Amount
// // //                   </span>

// // //                   <strong>
// // //                     ₹ {finalTotal.toLocaleString("en-IN")}
// // //                   </strong>

// // //                 </div>


// // //                 <div className="payment-row">

// // //                   <span>
// // //                     Payment Date
// // //                   </span>

// // //                   <strong>

// // //                     {new Date().toLocaleDateString(
// // //                       "en-IN"
// // //                     )}

// // //                   </strong>

// // //                 </div>


// // //                 <div className="payment-row">

// // //                   <span>
// // //                     Payment Status
// // //                   </span>

// // //                   <strong className="paid">
// // //                     Paid
// // //                   </strong>

// // //                 </div>


// // //                 <div className="payment-row">

// // //                   <span>
// // //                     Payment Mode
// // //                   </span>

// // //                   <strong>
// // //                     {paymentMethod || "UPI"}
// // //                   </strong>

// // //                 </div>

// // //               </div>

// // //             </div>

// // //           )}


// // //           {/* =================================================
// // //                     QR
// // //           ================================================= */}

// // //           <div className="qr-brand-section">


// // //             <div className="saiyed-promo">

// // //               <div className="promo-logo">

// // //                 <FaPlaneDeparture />

// // //               </div>


// // //               <div>

// // //                 <h2>
// // //                   Saiyed Travels
// // //                 </h2>

// // //                 <p>
// // //                   Your Journey, Our Responsibility
// // //                 </p>

// // //                 <span>
// // //                   Flight Booking • Visa • Holidays
// // //                 </span>

// // //               </div>

// // //             </div>


// // //             <div className="ticket-qr">

// // //               <img
// // //                 src={qrCodeUrl}
// // //                 alt="Booking QR Code"
// // //               />

// // //               <small>
// // //                 Scan to verify booking
// // //               </small>

// // //             </div>

// // //           </div>


// // //           {/* =================================================
// // //                     TERMS
// // //           ================================================= */}

// // //           <div className="terms-section">

// // //             <h3>
// // //               Important Information
// // //             </h3>

// // //             <p>
// // //               1. Please carry valid government issued
// // //               identity proof during your journey.
// // //             </p>

// // //             <p>
// // //               2. Please reach the airport before the
// // //               recommended check-in time.
// // //             </p>

// // //             <p>
// // //               3. Baggage allowance is subject to airline
// // //               rules and ticket conditions.
// // //             </p>

// // //             <p>
// // //               4. Please verify all flight details before
// // //               travelling.
// // //             </p>

// // //           </div>


// // //           {/* =================================================
// // //                     FOOTER
// // //           ================================================= */}

// // //           <div className="eticket-footer">

// // //             <div>

// // //               <strong>
// // //                 Saiyed Travels
// // //               </strong>

// // //               <span>
// // //                 Flight Booking & Travel Services
// // //               </span>

// // //             </div>


// // //             <div>

// // //               <span>
// // //                 Booking ID: {finalBookingId}
// // //               </span>

// // //               <span>
// // //                 PNR: {airlinePNR}
// // //               </span>

// // //             </div>

// // //           </div>


// // //         </div>


// // //         {/* =================================================
// // //                     BUTTONS
// // //         ================================================= */}

// // //         <div className="success-buttons">


// // //           {/* SHOW / HIDE PRICE */}

// // //           <button
// // //             className="price-btn"
// // //             type="button"
// // //             onClick={() =>
// // //               setShowPrice(
// // //                 (prev) => !prev
// // //               )
// // //             }
// // //           >

// // //             {showPrice ? (
// // //               <>
// // //                 <FaEyeSlash />
// // //                 Hide Price
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <FaEye />
// // //                 Show Price
// // //               </>
// // //             )}

// // //           </button>


// // //           {/* DOWNLOAD */}

// // //           <button
// // //             className="download-btn"
// // //             onClick={
// // //               handleDownload
// // //             }
// // //           >

// // //             <FaDownload />

// // //             Download Ticket

// // //           </button>


// // //           {/* PRINT */}

// // //           <button
// // //             className="print-btn"
// // //             onClick={
// // //               handlePrint
// // //             }
// // //           >

// // //             <FaPrint />

// // //             Print Ticket

// // //           </button>


// // //           {/* HOME */}

// // //           <button
// // //             className="home-btn"
// // //             onClick={() =>
// // //               navigate("/")
// // //             }
// // //           >

// // //             <FaHome />

// // //             Back To Home

// // //           </button>

// // //         </div>


// // //       </section>


// // //       <Footer />

// // //     </>

// // //   );

// // // }


// // // export default Success;

// // import "./Success.css";

// // import {
// //   useEffect,
// //   useMemo,
// // } from "react";

// // import {
// //   useLocation,
// //   useNavigate,
// // } from "react-router-dom";

// // import {
// //   FaPlaneDeparture,
// //   FaCheckCircle,
// //   FaDownload,
// //   FaPrint,
// //   FaHome,
// //   FaArrowLeft,
// // } from "react-icons/fa";

// // import Navbar from "../../Components/Navbar/Navbar";
// // import Footer from "../../Components/Footer/Footer";


// // function Success() {

// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const state = location.state || {};

// //   // =====================================================
// //   // BOOKING DATA
// //   // Supports:
// //   // 1. Payment -> direct state
// //   // 2. MyBookings -> state.booking
// //   // =====================================================

// //   const booking =
// //     state?.booking ||
// //     null;


// //   // =====================================================
// //   // NORMALIZE BOOKING
// //   // =====================================================

// //   const data = useMemo(() => {

// //     const source =
// //       booking || state || {};

// //     const flight =
// //       source?.flight ||
// //       {};

// //     return {

// //       bookingId:
// //         source?.bookingId ||
// //         source?.id ||
// //         "ST-PENDING",

// //       pnr:
// //         source?.pnr ||
// //         "N/A",

// //       airline:
// //         source?.airline ||
// //         flight?.airline ||
// //         flight?.airlineName ||
// //         "Airline",

// //       flightNo:
// //         source?.flightNo ||
// //         source?.flightNumber ||
// //         flight?.flightNo ||
// //         flight?.flightNumber ||
// //         "N/A",

// //       from:
// //         source?.from ||
// //         flight?.from ||
// //         flight?.fromCity ||
// //         flight?.departureCity ||
// //         flight?.origin ||
// //         "N/A",

// //       to:
// //         source?.to ||
// //         flight?.to ||
// //         flight?.toCity ||
// //         flight?.arrivalCity ||
// //         flight?.destination ||
// //         "N/A",

// //       fromCode:
// //         source?.fromCode ||
// //         flight?.fromCode ||
// //         source?.from ||
// //         flight?.from ||
// //         "N/A",

// //       toCode:
// //         source?.toCode ||
// //         flight?.toCode ||
// //         source?.to ||
// //         flight?.to ||
// //         "N/A",

// //       fromCity:
// //         source?.fromCity ||
// //         flight?.fromCity ||
// //         source?.from ||
// //         flight?.from ||
// //         "N/A",

// //       toCity:
// //         source?.toCity ||
// //         flight?.toCity ||
// //         source?.to ||
// //         flight?.to ||
// //         "N/A",

// //       fromAirport:
// //         source?.fromAirport ||
// //         flight?.fromAirport ||
// //         "",

// //       toAirport:
// //         source?.toAirport ||
// //         flight?.toAirport ||
// //         "",

// //       departureDate:
// //         source?.departureDate ||
// //         flight?.departureDate ||
// //         flight?.date ||
// //         "N/A",

// //       arrivalDate:
// //         source?.arrivalDate ||
// //         flight?.arrivalDate ||
// //         flight?.date ||
// //         source?.departureDate ||
// //         "N/A",

// //       departureTime:
// //         source?.departure ||
// //         source?.departureTime ||
// //         flight?.departureTime ||
// //         flight?.departure ||
// //         "N/A",

// //       arrivalTime:
// //         source?.arrival ||
// //         source?.arrivalTime ||
// //         flight?.arrivalTime ||
// //         flight?.arrival ||
// //         "N/A",

// //       duration:
// //         source?.duration ||
// //         flight?.duration ||
// //         "N/A",

// //       stops:
// //         source?.stops ||
// //         flight?.stops ||
// //         "Non-stop",

// //       aircraft:
// //         source?.aircraft ||
// //         flight?.aircraft ||
// //         "N/A",

// //       departureTerminal:
// //         source?.departureTerminal ||
// //         flight?.departureTerminal ||
// //         "N/A",

// //       arrivalTerminal:
// //         source?.arrivalTerminal ||
// //         flight?.arrivalTerminal ||
// //         "N/A",

// //       cabin:
// //         source?.cabin ||
// //         source?.cabinClass ||
// //         flight?.cabin ||
// //         flight?.cabinClass ||
// //         "Economy",

// //       logo:
// //         source?.logo ||
// //         flight?.logo ||
// //         "",

// //       passenger:
// //         source?.passenger ||
// //         null,

// //       passengers:
// //         Array.isArray(source?.passengers)
// //           ? source.passengers
// //           : [],

// //       seat:
// //         source?.seat ||
// //         null,

// //       seats:
// //         Array.isArray(source?.seats)
// //           ? source.seats
// //           : [],

// //       meal:
// //         source?.meal ||
// //         null,

// //       meals:
// //         Array.isArray(source?.meals)
// //           ? source.meals
// //           : [],

// //       baggage:
// //         source?.baggage ||
// //         null,

// //       baggages:
// //         Array.isArray(source?.baggages)
// //           ? source.baggages
// //           : [],

// //       adults:
// //         Number(
// //           source?.adults ||
// //           source?.travellers?.adults ||
// //           0
// //         ),

// //       children:
// //         Number(
// //           source?.children ||
// //           source?.travellers?.children ||
// //           0
// //         ),

// //       infants:
// //         Number(
// //           source?.infants ||
// //           source?.travellers?.infants ||
// //           0
// //         ),

// //       price:
// //         Number(
// //           source?.finalPrice ??
// //           source?.total ??
// //           source?.price ??
// //           0
// //         ),

// //       total:
// //         Number(
// //           source?.total ??
// //           source?.finalPrice ??
// //           source?.price ??
// //           0
// //         ),

// //       discount:
// //         Number(
// //           source?.discount ||
// //           0
// //         ),

// //       taxes:
// //         Number(
// //           source?.taxes ||
// //           0
// //         ),

// //       convenienceFee:
// //         Number(
// //           source?.convenienceFee ||
// //           0
// //         ),

// //       paymentMethod:
// //         source?.paymentMethod ||
// //         "UPI",

// //       paymentStatus:
// //         source?.paymentStatus ||
// //         "Paid",

// //       status:
// //         source?.status ||
// //         source?.bookingStatus ||
// //         "Confirmed",

// //       createdAt:
// //         source?.createdAt ||
// //         null,

// //     };

// //   }, [booking, state]);


// //   // =====================================================
// //   // RECOVER BOOKING AFTER REFRESH
// //   // =====================================================

// //   const savedBooking =
// //     (() => {

// //       try {

// //         const saved =
// //           localStorage.getItem(
// //             "lastBooking"
// //           );

// //         if (!saved) {
// //           return null;
// //         }

// //         return JSON.parse(saved);

// //       } catch (error) {

// //         console.error(
// //           "LAST BOOKING LOAD ERROR:",
// //           error
// //         );

// //         return null;

// //       }

// //     })();


// //   const hasCurrentBooking =
// //     Boolean(
// //       booking ||
// //       state?.flight ||
// //       state?.bookingId
// //     );


// //   const activeBooking =
// //     hasCurrentBooking
// //       ? data
// //       : savedBooking
// //         ? (() => {

// //             const saved =
// //               savedBooking;

// //             return {

// //               bookingId:
// //                 saved?.bookingId ||
// //                 saved?.id ||
// //                 "ST-PENDING",

// //               pnr:
// //                 saved?.pnr ||
// //                 "N/A",

// //               airline:
// //                 saved?.airline ||
// //                 saved?.flight?.airline ||
// //                 "Airline",

// //               flightNo:
// //                 saved?.flightNo ||
// //                 saved?.flight?.flightNo ||
// //                 "N/A",

// //               from:
// //                 saved?.from ||
// //                 saved?.flight?.from ||
// //                 "N/A",

// //               to:
// //                 saved?.to ||
// //                 saved?.flight?.to ||
// //                 "N/A",

// //               fromCode:
// //                 saved?.fromCode ||
// //                 saved?.flight?.fromCode ||
// //                 saved?.from ||
// //                 "N/A",

// //               toCode:
// //                 saved?.toCode ||
// //                 saved?.flight?.toCode ||
// //                 saved?.to ||
// //                 "N/A",

// //               fromCity:
// //                 saved?.fromCity ||
// //                 saved?.flight?.fromCity ||
// //                 saved?.from ||
// //                 "N/A",

// //               toCity:
// //                 saved?.toCity ||
// //                 saved?.flight?.toCity ||
// //                 saved?.to ||
// //                 "N/A",

// //               fromAirport:
// //                 saved?.fromAirport ||
// //                 saved?.flight?.fromAirport ||
// //                 "",

// //               toAirport:
// //                 saved?.toAirport ||
// //                 saved?.flight?.toAirport ||
// //                 "",

// //               departureDate:
// //                 saved?.departureDate ||
// //                 saved?.flight?.departureDate ||
// //                 saved?.flight?.date ||
// //                 "N/A",

// //               arrivalDate:
// //                 saved?.arrivalDate ||
// //                 saved?.flight?.arrivalDate ||
// //                 saved?.flight?.date ||
// //                 "N/A",

// //               departureTime:
// //                 saved?.departure ||
// //                 saved?.departureTime ||
// //                 saved?.flight?.departureTime ||
// //                 "N/A",

// //               arrivalTime:
// //                 saved?.arrival ||
// //                 saved?.arrivalTime ||
// //                 saved?.flight?.arrivalTime ||
// //                 "N/A",

// //               duration:
// //                 saved?.duration ||
// //                 saved?.flight?.duration ||
// //                 "N/A",

// //               stops:
// //                 saved?.stops ||
// //                 saved?.flight?.stops ||
// //                 "Non-stop",

// //               departureTerminal:
// //                 saved?.departureTerminal ||
// //                 saved?.flight?.departureTerminal ||
// //                 "N/A",

// //               arrivalTerminal:
// //                 saved?.arrivalTerminal ||
// //                 saved?.flight?.arrivalTerminal ||
// //                 "N/A",

// //               cabin:
// //                 saved?.cabin ||
// //                 saved?.flight?.cabin ||
// //                 "Economy",

// //               logo:
// //                 saved?.logo ||
// //                 saved?.flight?.logo ||
// //                 "",

// //               passenger:
// //                 saved?.passenger ||
// //                 null,

// //               passengers:
// //                 Array.isArray(
// //                   saved?.passengers
// //                 )
// //                   ? saved.passengers
// //                   : [],

// //               seat:
// //                 saved?.seat ||
// //                 null,

// //               seats:
// //                 Array.isArray(
// //                   saved?.seats
// //                 )
// //                   ? saved.seats
// //                   : [],

// //               meal:
// //                 saved?.meal ||
// //                 null,

// //               meals:
// //                 Array.isArray(
// //                   saved?.meals
// //                 )
// //                   ? saved.meals
// //                   : [],

// //               baggage:
// //                 saved?.baggage ||
// //                 null,

// //               baggages:
// //                 Array.isArray(
// //                   saved?.baggages
// //                 )
// //                   ? saved.baggages
// //                   : [],

// //               adults:
// //                 Number(
// //                   saved?.adults ||
// //                   0
// //                 ),

// //               children:
// //                 Number(
// //                   saved?.children ||
// //                   0
// //                 ),

// //               infants:
// //                 Number(
// //                   saved?.infants ||
// //                   0
// //                 ),

// //               price:
// //                 Number(
// //                   saved?.finalPrice ??
// //                   saved?.total ??
// //                   saved?.price ??
// //                   0
// //                 ),

// //               total:
// //                 Number(
// //                   saved?.total ??
// //                   saved?.finalPrice ??
// //                   saved?.price ??
// //                   0
// //                 ),

// //               discount:
// //                 Number(
// //                   saved?.discount ||
// //                   0
// //                 ),

// //               taxes:
// //                 Number(
// //                   saved?.taxes ||
// //                   0
// //                 ),

// //               convenienceFee:
// //                 Number(
// //                   saved?.convenienceFee ||
// //                   0
// //                 ),

// //               paymentMethod:
// //                 saved?.paymentMethod ||
// //                 "UPI",

// //               paymentStatus:
// //                 saved?.paymentStatus ||
// //                 "Paid",

// //               status:
// //                 saved?.status ||
// //                 saved?.bookingStatus ||
// //                 "Confirmed",

// //               createdAt:
// //                 saved?.createdAt ||
// //                 null,

// //             };

// //           })()
// //         : null;


// //   // =====================================================
// //   // SAVE CURRENT BOOKING
// //   // =====================================================

// //   useEffect(() => {

// //     if (
// //       hasCurrentBooking &&
// //       (booking || state?.flight)
// //     ) {

// //       try {

// //         const toSave =
// //           booking ||
// //           state;

// //         localStorage.setItem(
// //           "lastBooking",
// //           JSON.stringify(toSave)
// //         );

// //       } catch (error) {

// //         console.error(
// //           "BOOKING SAVE ERROR:",
// //           error
// //         );

// //       }

// //     }

// //   }, [
// //     booking,
// //     state,
// //     hasCurrentBooking,
// //   ]);


// //   // =====================================================
// //   // AUTO DOWNLOAD
// //   // =====================================================

// //   useEffect(() => {

// //     if (
// //       state?.autoDownload &&
// //       activeBooking
// //     ) {

// //       const timer =
// //         setTimeout(() => {

// //           window.print();

// //         }, 900);

// //       return () => {
// //         clearTimeout(timer);
// //       };

// //     }

// //   }, [
// //     state?.autoDownload,
// //     activeBooking,
// //   ]);


// //   // =====================================================
// //   // PASSENGERS
// //   // =====================================================

// //   const finalPassengers =
// //     activeBooking
// //       ? (
// //           activeBooking.passengers.length > 0
// //             ? activeBooking.passengers
// //             : activeBooking.passenger
// //               ? [activeBooking.passenger]
// //               : []
// //         )
// //       : [];


// //   // =====================================================
// //   // SEATS
// //   // =====================================================

// //   const finalSeats =
// //     activeBooking
// //       ? (
// //           activeBooking.seats.length > 0
// //             ? activeBooking.seats
// //             : activeBooking.seat
// //               ? [activeBooking.seat]
// //               : []
// //         )
// //       : [];


// //   // =====================================================
// //   // MEALS
// //   // =====================================================

// //   const finalMeals =
// //     activeBooking
// //       ? (
// //           activeBooking.meals.length > 0
// //             ? activeBooking.meals
// //             : activeBooking.meal
// //               ? [activeBooking.meal]
// //               : []
// //         )
// //       : [];


// //   // =====================================================
// //   // BAGGAGE
// //   // =====================================================

// //   const finalBaggages =
// //     activeBooking
// //       ? (
// //           activeBooking.baggages.length > 0
// //             ? activeBooking.baggages
// //             : activeBooking.baggage
// //               ? [activeBooking.baggage]
// //               : []
// //         )
// //       : [];


// //   // =====================================================
// //   // COUNTS
// //   // =====================================================

// //   const adultCount =
// //     activeBooking?.adults ||
// //     finalPassengers.filter(
// //       (item) =>
// //         String(
// //           item?.type ||
// //           "Adult"
// //         ).toLowerCase() === "adult"
// //     ).length;


// //   const childCount =
// //     activeBooking?.children ||
// //     finalPassengers.filter(
// //       (item) =>
// //         String(
// //           item?.type ||
// //           ""
// //         ).toLowerCase() === "child"
// //     ).length;


// //   const infantCount =
// //     activeBooking?.infants ||
// //     finalPassengers.filter(
// //       (item) =>
// //         String(
// //           item?.type ||
// //           ""
// //         ).toLowerCase() === "infant"
// //     ).length;


// //   // =====================================================
// //   // FORMAT
// //   // =====================================================

// //   const formatMoney = (amount) => {

// //     return Number(
// //       amount || 0
// //     ).toLocaleString(
// //       "en-IN"
// //     );

// //   };


// //   // =====================================================
// //   // VALUE
// //   // =====================================================

// //   const displayValue = (
// //     item,
// //     fallback = "N/A"
// //   ) => {

// //     if (
// //       item === null ||
// //       item === undefined ||
// //       item === ""
// //     ) {

// //       return fallback;

// //     }

// //     if (
// //       typeof item === "object"
// //     ) {

// //       return (
// //         item?.name ||
// //         item?.title ||
// //         item?.value ||
// //         item?.weight ||
// //         item?.seat ||
// //         fallback
// //       );

// //     }

// //     return String(item);

// //   };


// //   // =====================================================
// //   // PASSENGER NAME
// //   // =====================================================

// //   const passengerName = (
// //     passenger
// //   ) => {

// //     if (!passenger) {
// //       return "Passenger";
// //     }

// //     const fullName =
// //       `${passenger?.firstName || ""} ${
// //         passenger?.lastName || ""
// //       }`.trim();

// //     return (
// //       fullName ||
// //       passenger?.name ||
// //       passenger?.fullName ||
// //       "Passenger"
// //     );

// //   };


// //   // =====================================================
// //   // PASSENGER SEAT
// //   // =====================================================

// //   const passengerSeat = (
// //     passenger,
// //     index
// //   ) => {

// //     const type =
// //       String(
// //         passenger?.type ||
// //         "Adult"
// //       ).toLowerCase();

// //     if (
// //       type === "infant"
// //     ) {

// //       return "No Seat";

// //     }

// //     return displayValue(
// //       passenger?.seat ||
// //       passenger?.seatNumber ||
// //       finalSeats[index] ||
// //       finalSeats[0],
// //       "N/A"
// //     );

// //   };


// //   // =====================================================
// //   // PASSENGER MEAL
// //   // =====================================================

// //   const passengerMeal = (
// //     passenger,
// //     index
// //   ) => {

// //     return displayValue(
// //       passenger?.meal ||
// //       passenger?.mealName ||
// //       finalMeals[index]?.name ||
// //       finalMeals[index]?.value ||
// //       finalMeals[0]?.name ||
// //       finalMeals[0]?.value,
// //       "No Meal"
// //     );

// //   };


// //   // =====================================================
// //   // PASSENGER BAGGAGE
// //   // =====================================================

// //   const passengerBaggage = (
// //     passenger,
// //     index
// //   ) => {

// //     return displayValue(
// //       passenger?.baggage ||
// //       passenger?.baggageWeight ||
// //       finalBaggages[index]?.weight ||
// //       finalBaggages[index]?.value ||
// //       finalBaggages[0]?.weight ||
// //       finalBaggages[0]?.value,
// //       "15 KG"
// //     );

// //   };


// //   // =====================================================
// //   // FARE
// //   // =====================================================

// //   const flightFare =
// //     Number(
// //       activeBooking?.price ||
// //       0
// //     );


// //   const seatPrice =
// //     finalSeats.reduce(
// //       (sum, item) =>
// //         sum +
// //         Number(
// //           item?.price ||
// //           0
// //         ),
// //       0
// //     );


// //   const mealPrice =
// //     finalMeals.reduce(
// //       (sum, item) =>
// //         sum +
// //         Number(
// //           item?.price ||
// //           0
// //         ),
// //       0
// //     );


// //   const baggagePrice =
// //     finalBaggages.reduce(
// //       (sum, item) =>
// //         sum +
// //         Number(
// //           item?.price ||
// //           0
// //         ),
// //       0
// //     );


// //   const taxAmount =
// //     Number(
// //       activeBooking?.taxes ||
// //       0
// //     );


// //   const convenienceFee =
// //     Number(
// //       activeBooking?.convenienceFee ||
// //       0
// //     );


// //   const discount =
// //     Number(
// //       activeBooking?.discount ||
// //       0
// //     );


// //   const finalTotal =
// //     Number(
// //       activeBooking?.total ||
// //       0
// //     ) ||
// //     (
// //       flightFare +
// //       seatPrice +
// //       mealPrice +
// //       baggagePrice +
// //       taxAmount +
// //       convenienceFee -
// //       discount
// //     );


// //   // =====================================================
// //   // QR
// //   // =====================================================

// //   const qrData =
// //     activeBooking
// //       ? encodeURIComponent(
// //           JSON.stringify({

// //             bookingId:
// //               activeBooking.bookingId,

// //             pnr:
// //               activeBooking.pnr,

// //             flight:
// //               activeBooking.flightNo,

// //             from:
// //               activeBooking.fromCode,

// //             to:
// //               activeBooking.toCode,

// //           })
// //         )
// //       : "";


// //   const qrCodeUrl =
// //     qrData
// //       ? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrData}`
// //       : "";


// //   // =====================================================
// //   // PRINT / DOWNLOAD
// //   // =====================================================

// //   const handlePrint = () => {

// //     window.print();

// //   };


// //   const handleDownload = () => {

// //     window.print();

// //   };


// //   // =====================================================
// //   // NO BOOKING
// //   // =====================================================

// //   if (!activeBooking) {

// //     return (

// //       <>
// //         <Navbar />

// //         <main className="success-page">

// //           <div className="no-booking">

// //             <FaPlaneDeparture />

// //             <h2>
// //               No Booking Found
// //             </h2>

// //             <p>
// //               Booking details are not available.
// //             </p>

// //             <button
// //               type="button"
// //               onClick={() =>
// //                 navigate("/my-bookings")
// //               }
// //             >

// //               <FaArrowLeft />

// //               Go To My Bookings

// //             </button>

// //           </div>

// //         </main>

// //         <Footer />
// //       </>

// //     );

// //   }


// //   // =====================================================
// //   // UI
// //   // =====================================================

// //   return (

// //     <>

// //       <Navbar />

// //       <main className="success-page">

// //         {/* SUCCESS */}

// //         <div className="success-message">

// //           <div className="success-icon">

// //             <FaCheckCircle />

// //           </div>

// //           <h1>
// //             Booking Successful
// //           </h1>

// //           <p>
// //             Your flight ticket has been confirmed successfully.
// //           </p>

// //         </div>


// //         {/* ACTION BUTTONS */}

// //         <div className="success-buttons">

// //           <button
// //             type="button"
// //             className="back-btn"
// //             onClick={() =>
// //               navigate("/my-bookings")
// //             }
// //           >

// //             <FaArrowLeft />

// //             My Bookings

// //           </button>


// //           <button
// //             type="button"
// //             className="download-btn"
// //             onClick={handleDownload}
// //           >

// //             <FaDownload />

// //             Download Ticket

// //           </button>


// //           <button
// //             type="button"
// //             className="print-btn"
// //             onClick={handlePrint}
// //           >

// //             <FaPrint />

// //             Print Ticket

// //           </button>


// //           <button
// //             type="button"
// //             className="home-btn"
// //             onClick={() =>
// //               navigate("/")
// //             }
// //           >

// //             <FaHome />

// //             Home

// //           </button>

// //         </div>


// //         {/* =================================================
// //                        E-TICKET
// //         ================================================= */}

// //         <section
// //           className="eticket"
// //           id="flight-ticket"
// //         >

// //           {/* HEADER */}

// //           <header className="eticket-header">

// //             <div className="saiyed-brand">

// //               <div className="saiyed-logo">

// //                 <FaPlaneDeparture />

// //               </div>

// //               <div>

// //                 <h1>
// //                   Saiyed Travels
// //                 </h1>

// //                 <p>
// //                   Flight Booking & Travel Services
// //                 </p>

// //               </div>

// //             </div>


// //             <div className="airline-brand">

// //               {activeBooking.logo ? (

// //                 <img
// //                   src={activeBooking.logo}
// //                   alt={activeBooking.airline}
// //                 />

// //               ) : (

// //                 <div className="airline-no-logo">

// //                   <FaPlaneDeparture />

// //                 </div>

// //               )}

// //               <div>

// //                 <strong>
// //                   {activeBooking.airline}
// //                 </strong>

// //                 <span>
// //                   {activeBooking.flightNo}
// //                 </span>

// //               </div>

// //             </div>

// //           </header>


// //           {/* BOOKING DETAILS */}

// //           <section className="ticket-section">

// //             <div className="section-title blue">
// //               Booking Details
// //             </div>

// //             <div className="booking-grid">

// //               <div>
// //                 <span>
// //                   Booking ID
// //                 </span>

// //                 <strong>
// //                   {activeBooking.bookingId}
// //                 </strong>
// //               </div>


// //               <div>
// //                 <span>
// //                   PNR
// //                 </span>

// //                 <strong className="pnr">
// //                   {activeBooking.pnr}
// //                 </strong>
// //               </div>


// //               <div>
// //                 <span>
// //                   Status
// //                 </span>

// //                 <strong className="confirmed">
// //                   {activeBooking.status}
// //                 </strong>
// //               </div>


// //               <div>
// //                 <span>
// //                   Booking Date
// //                 </span>

// //                 <strong>
// //                   {activeBooking.createdAt
// //                     ? new Date(
// //                         activeBooking.createdAt
// //                       ).toLocaleDateString(
// //                         "en-IN"
// //                       )
// //                     : new Date().toLocaleDateString(
// //                         "en-IN"
// //                       )}
// //                 </strong>
// //               </div>

// //             </div>

// //           </section>


// //           {/* FLIGHT */}

// //           <section className="ticket-section">

// //             <div className="section-title orange">
// //               Flight Details
// //             </div>


// //             <div className="route-card">

// //               <div className="airport-block">

// //                 <span>
// //                   FROM
// //                 </span>

// //                 <h2>
// //                   {activeBooking.fromCode}
// //                 </h2>

// //                 <strong>
// //                   {activeBooking.fromCity}
// //                 </strong>

// //                 {activeBooking.fromAirport && (
// //                   <small>
// //                     {activeBooking.fromAirport}
// //                   </small>
// //                 )}

// //                 <b>
// //                   {activeBooking.departureTime}
// //                 </b>

// //                 <small>
// //                   {activeBooking.departureDate}
// //                 </small>

// //               </div>


// //               <div className="route-middle">

// //                 <span>
// //                   {activeBooking.flightNo}
// //                 </span>

// //                 <div className="route-line">

// //                   <FaPlaneDeparture />

// //                 </div>

// //                 <small>
// //                   {activeBooking.duration}
// //                 </small>

// //                 <small>
// //                   {activeBooking.stops}
// //                 </small>

// //               </div>


// //               <div className="airport-block">

// //                 <span>
// //                   TO
// //                 </span>

// //                 <h2>
// //                   {activeBooking.toCode}
// //                 </h2>

// //                 <strong>
// //                   {activeBooking.toCity}
// //                 </strong>

// //                 {activeBooking.toAirport && (
// //                   <small>
// //                     {activeBooking.toAirport}
// //                   </small>
// //                 )}

// //                 <b>
// //                   {activeBooking.arrivalTime}
// //                 </b>

// //                 <small>
// //                   {activeBooking.arrivalDate}
// //                 </small>

// //               </div>

// //             </div>


// //             <div className="flight-info-grid">

// //               <div>
// //                 <span>
// //                   Airline
// //                 </span>

// //                 <strong>
// //                   {activeBooking.airline}
// //                 </strong>
// //               </div>


// //               <div>
// //                 <span>
// //                   Flight
// //                 </span>

// //                 <strong>
// //                   {activeBooking.flightNo}
// //                 </strong>
// //               </div>


// //               <div>
// //                 <span>
// //                   Cabin
// //                 </span>

// //                 <strong>
// //                   {activeBooking.cabin}
// //                 </strong>
// //               </div>


// //               <div>
// //                 <span>
// //                   Aircraft
// //                 </span>

// //                 <strong>
// //                   {activeBooking.aircraft}
// //                 </strong>
// //               </div>


// //               <div>
// //                 <span>
// //                   Departure Terminal
// //                 </span>

// //                 <strong>
// //                   {activeBooking.departureTerminal}
// //                 </strong>
// //               </div>


// //               <div>
// //                 <span>
// //                   Arrival Terminal
// //                 </span>

// //                 <strong>
// //                   {activeBooking.arrivalTerminal}
// //                 </strong>
// //               </div>

// //             </div>

// //           </section>


// //           {/* PASSENGERS */}

// //           <section className="ticket-section">

// //             <div className="section-title orange">
// //               Passenger Details
// //             </div>


// //             <div className="passenger-count">

// //               Total Passengers:
// //               {" "}
// //               <strong>
// //                 {finalPassengers.length}
// //               </strong>

// //               <span>|</span>

// //               Adults:
// //               {" "}
// //               <strong>
// //                 {adultCount}
// //               </strong>

// //               <span>|</span>

// //               Children:
// //               {" "}
// //               <strong>
// //                 {childCount}
// //               </strong>

// //               <span>|</span>

// //               Infants:
// //               {" "}
// //               <strong>
// //                 {infantCount}
// //               </strong>

// //             </div>


// //             <div className="passenger-list">

// //               {finalPassengers.length > 0 ? (

// //                 finalPassengers.map(
// //                   (
// //                     passenger,
// //                     index
// //                   ) => (

// //                     <article
// //                       className="passenger-card"
// //                       key={
// //                         passenger?._id ||
// //                         `${passengerName(
// //                           passenger
// //                         )}-${index}`
// //                       }
// //                     >

// //                       <div className="passenger-main">

// //                         <span>
// //                           Passenger
// //                         </span>

// //                         <strong>
// //                           {passengerName(
// //                             passenger
// //                           ).toUpperCase()}
// //                         </strong>

// //                         <small>
// //                           {passenger?.gender ||
// //                             "N/A"}
// //                           {" • "}
// //                           {passenger?.dob ||
// //                             "DOB N/A"}
// //                         </small>

// //                       </div>


// //                       <div>

// //                         <span>
// //                           Type
// //                         </span>

// //                         <strong>
// //                           {passenger?.type ||
// //                             "Adult"}
// //                         </strong>

// //                       </div>


// //                       <div>

// //                         <span>
// //                           Seat
// //                         </span>

// //                         <strong>
// //                           {passengerSeat(
// //                             passenger,
// //                             index
// //                           )}
// //                         </strong>

// //                       </div>


// //                       <div>

// //                         <span>
// //                           Meal
// //                         </span>

// //                         <strong>
// //                           {passengerMeal(
// //                             passenger,
// //                             index
// //                           )}
// //                         </strong>

// //                       </div>


// //                       <div>

// //                         <span>
// //                           Baggage
// //                         </span>

// //                         <strong>
// //                           {passengerBaggage(
// //                             passenger,
// //                             index
// //                           )}
// //                         </strong>

// //                       </div>


// //                       <div>

// //                         <span>
// //                           PNR
// //                         </span>

// //                         <strong className="pnr">
// //                           {activeBooking.pnr}
// //                         </strong>

// //                       </div>

// //                     </article>

// //                   )

// //           : (

// //                 <div className="no-passenger">
// //                   Passenger details unavailable.
// //                 </div>

// //               )}

// //             </div>

// //           </section>


// //           {/* FARE + PAYMENT */}

// //           <section className="fare-payment">

// //             <div className="fare-box">

// //               <div className="section-title orange">
// //                 Fare Summary
// //               </div>


// //               <div className="fare-row">

// //                 <span>
// //                   Flight Fare
// //                 </span>

// //                 <strong>
// //                   ₹ {formatMoney(
// //                     flightFare
// //                   )}
// //                 </strong>

// //               </div>


// //               <div className="fare-row">

// //                 <span>
// //                   Seat Fee
// //                 </span>

// //                 <strong>
// //                   ₹ {formatMoney(
// //                     seatPrice
// //                   )}
// //                 </strong>

// //               </div>


// //               <div className="fare-row">

// //                 <span>
// //                   Meal Fee
// //                 </span>

// //                 <strong>
// //                   ₹ {formatMoney(
// //                     mealPrice
// //                   )}
// //                 </strong>

// //               </div>


// //               <div className="fare-row">

// //                 <span>
// //                   Baggage Fee
// //                 </span>

// //                 <strong>
// //                   ₹ {formatMoney(
// //                     baggagePrice
// //                   )}
// //                 </strong>

// //               </div>


// //               <div className="fare-row">

// //                 <span>
// //                   Taxes
// //                 </span>

// //                 <strong>
// //                   ₹ {formatMoney(
// //                     activeBooking.taxes
// //                   )}
// //                 </strong>

// //               </div>


// //               <div className="fare-row">

// //                 <span>
// //                   Convenience Fee
// //                 </span>

// //                 <strong>
// //                   ₹ {formatMoney(
// //                     activeBooking.convenienceFee
// //                   )}
// //                 </strong>

// //               </div>


// //               {activeBooking.discount > 0 && (

// //                 <div className="fare-row discount">

// //                   <span>
// //                     Discount
// //                   </span>

// //                   <strong>
// //                     - ₹{" "}
// //                     {formatMoney(
// //                       activeBooking.discount
// //                     )}
// //                   </strong>

// //                 </div>

// //               )}


// //               <div className="fare-total">

// //                 <span>
// //                   Total Amount
// //                 </span>

// //                 <strong>
// //                   ₹ {formatMoney(
// //                     finalTotal
// //                   )}
// //                 </strong>

// //               </div>

// //             </div>


// //             <div className="payment-box">

// //               <div className="section-title orange">
// //                 Payment Summary
// //               </div>


// //               <div className="payment-row">

// //                 <span>
// //                   Payment Method
// //                 </span>

// //                 <strong>
// //                   {activeBooking.paymentMethod}
// //                 </strong>

// //               </div>


// //               <div className="payment-row">

// //                 <span>
// //                   Amount
// //                 </span>

// //                 <strong>
// //                   ₹ {formatMoney(
// //                     finalTotal
// //                   )}
// //                 </strong>

// //               </div>


// //               <div className="payment-row">

// //                 <span>
// //                   Payment Status
// //                 </span>

// //                 <strong className="paid">
// //                   {activeBooking.paymentStatus}
// //                 </strong>

// //               </div>

// //             </div>

// //           </section>


// //           {/* QR */}

// //           <section className="qr-section">

// //             <div className="promo">

// //               <div className="promo-icon">

// //                 <FaPlaneDeparture />

// //               </div>

// //               <div>

// //                 <h2>
// //                   Saiyed Travels
// //                 </h2>

// //                 <p>
// //                   Your Journey, Our Responsibility
// //                 </p>

// //                 <small>
// //                   Flight Booking • Visa • Holidays
// //                 </small>

// //               </div>

// //             </div>


// //             {qrCodeUrl && (

// //               <div className="qr-box">

// //                 <img
// //                   src={qrCodeUrl}
// //                   alt="Booking QR Code"
// //                 />

// //                 <span>
// //                   Scan to verify booking
// //                 </span>

// //               </div>

// //             )}

// //           </section>


// //           {/* IMPORTANT */}

// //           <section className="important-section">

// //             <h3>
// //               Important Information
// //             </h3>

// //             <p>
// //               1. Please carry valid government issued
// //               identity proof during your journey.
// //             </p>

// //             <p>
// //               2. Please reach the airport before the
// //               recommended check-in time.
// //             </p>

// //             <p>
// //               3. Baggage allowance is subject to airline
// //               rules and ticket conditions.
// //             </p>

// //             <p>
// //               4. Please verify all flight details before
// //               travelling.
// //             </p>

// //           </section>


// //           {/* FOOTER */}

// //           <footer className="ticket-footer">

// //             <div>

// //               <strong>
// //                 Saiyed Travels
// //               </strong>

// //               <span>
// //                 Flight Booking & Travel Services
// //               </span>

// //             </div>


// //             <div>

// //               <span>
// //                 Booking ID:
// //                 {" "}
// //                 {activeBooking.bookingId}
// //               </span>

// //               <span>
// //                 PNR:
// //                 {" "}
// //                 {activeBooking.pnr}
// //               </span>

// //             </div>

// //           </footer>

// //         </section>

// //       </main>


// //       <Footer />

// //     </>

// //   );

// // }    ) 


// // export default Success;










// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   FaDownload,
// //   FaEye,
// //   FaPlaneDeparture,
// // } from "react-icons/fa";

// // import "./Success.css";

// // function MyBookings() {
// //   const navigate = useNavigate();

// //   /*
// //   |--------------------------------------------------------------------------
// //   | OPEN SUCCESS / TICKET PAGE
// //   |--------------------------------------------------------------------------
// //   */

// //   const openTicket = (booking, autoDownload = false) => {
// //     if (!booking) {
// //       alert("Booking details not found.");
// //       return;
// //     }

// //     navigate("/success", {
// //       state: {
// //         booking: booking,
// //         fromMyBookings: true,
// //         autoDownload: autoDownload,
// //       },
// //     });
// //   };

// //   /*
// //   |--------------------------------------------------------------------------
// //   | MONEY FORMAT
// //   |--------------------------------------------------------------------------
// //   */

// //   const formatMoney = (value) => {
// //     const number = Number(value);

// //     if (!Number.isFinite(number)) {
// //       return "0";
// //     }

// //     return number.toLocaleString("en-IN");
// //   };

// //   /*
// //   |--------------------------------------------------------------------------
// //   | BOOKING STATUS
// //   |--------------------------------------------------------------------------
// //   */

// //   const getStatus = (booking) => {
// //     return (
// //       booking?.bookingStatus ||
// //       booking?.status ||
// //       "Confirmed"
// //     );
// //   };

// //   /*
// //   |--------------------------------------------------------------------------
// //   | BOOKING ID
// //   |--------------------------------------------------------------------------
// //   */

// //   const getBookingId = (booking) => {
// //     return (
// //       booking?.bookingId ||
// //       booking?._id ||
// //       "N/A"
// //     );
// //   };

// //   /*
// //   |--------------------------------------------------------------------------
// //   | PNR
// //   |--------------------------------------------------------------------------
// //   */

// //   const getPNR = (booking) => {
// //     return booking?.pnr || "N/A";
// //   };

// //   /*
// //   |--------------------------------------------------------------------------
// //   | FLIGHT
// //   |--------------------------------------------------------------------------
// //   */

// //   const getFlightName = (booking) => {
// //     const flight = booking?.flight || {};

// //     return (
// //       flight?.airline ||
// //       flight?.airlineName ||
// //       flight?.name ||
// //       booking?.airline ||
// //       "Flight"
// //     );
// //   };

// //   const getFlightNumber = (booking) => {
// //     const flight = booking?.flight || {};

// //     return (
// //       flight?.flightNumber ||
// //       flight?.flightNo ||
// //       booking?.flightNumber ||
// //       "N/A"
// //     );
// //   };

// //   /*
// //   |--------------------------------------------------------------------------
// //   | TOTAL
// //   |--------------------------------------------------------------------------
// //   */

// //   const getTotal = (booking) => {
// //     return (
// //       booking?.finalPrice ??
// //       booking?.total ??
// //       booking?.price ??
// //       0
// //     );
// //   };

// //   /*
// //   |--------------------------------------------------------------------------
// //   | PASSENGER
// //   |--------------------------------------------------------------------------
// //   */

// //   const getPassengerName = (booking) => {
// //     const passenger =
// //       booking?.passenger ||
// //       booking?.passengers?.[0];

// //     if (!passenger) {
// //       return "Passenger";
// //     }

// //     const fullName = [
// //       passenger?.firstName,
// //       passenger?.middleName,
// //       passenger?.lastName,
// //     ]
// //       .filter(Boolean)
// //       .join(" ");

// //     return (
// //       fullName ||
// //       passenger?.name ||
// //       passenger?.fullName ||
// //       "Passenger"
// //     );
// //   };

// //   /*
// //   |--------------------------------------------------------------------------
// //   | DATE
// //   |--------------------------------------------------------------------------
// //   */

// //   const formatDate = (date) => {
// //     if (!date) {
// //       return "N/A";
// //     }

// //     const parsedDate = new Date(date);

// //     if (Number.isNaN(parsedDate.getTime())) {
// //       return date;
// //     }

// //     return parsedDate.toLocaleDateString("en-IN", {
// //       day: "2-digit",
// //       month: "short",
// //       year: "numeric",
// //     });
// //   };

// //   /*
// //   |--------------------------------------------------------------------------
// //   | DEMO / EXISTING BOOKINGS
// //   |
// //   | IMPORTANT:
// //   | Yahan tumhara existing API wala bookings array use hoga.
// //   | Agar tumhare original MyBookings.jsx me fetchMyBookings()
// //   | aur bookings state already hai, to neeche ka UI usi array
// //   | par directly kaam karega.
// //   |--------------------------------------------------------------------------
// //   */

// //   const bookings = [];

// //   /*
// //   |--------------------------------------------------------------------------
// //   | UI
// //   |--------------------------------------------------------------------------
// //   */

// //   return (
// //     <main className="my-bookings-page">

// //       <div className="my-bookings-container">

// //         {/* HEADER */}

// //         <div className="my-bookings-header">

// //           <div>

// //             <h1>
// //               My Bookings
// //             </h1>

// //             <p>
// //               View and manage your flight bookings
// //             </p>

// //           </div>

// //         </div>


// //         {/* NO BOOKINGS */}

// //         {bookings.length === 0 ? (

// //           <section className="no-bookings">

// //             <div className="no-bookings-icon">
// //               <FaPlaneDeparture />
// //             </div>

// //             <h2>
// //               No Upcoming Bookings
// //             </h2>

// //             <p>
// //               You don't have any upcoming bookings.
// //             </p>

// //             <button
// //               type="button"
// //               className="book-flight-btn"
// //               onClick={() => navigate("/flights")}
// //             >
// //               Book a Flight
// //             </button>

// //           </section>

// //         ) : (

// //           /* BOOKINGS */

// //           <div className="booking-list">

// //             {bookings.map((booking, index) => {

// //               const bookingId =
// //                 getBookingId(booking);

// //               const pnr =
// //                 getPNR(booking);

// //               const status =
// //                 getStatus(booking);

// //               const flightName =
// //                 getFlightName(booking);

// //               const flightNumber =
// //                 getFlightNumber(booking);

// //               const passengerName =
// //                 getPassengerName(booking);

// //               const total =
// //                 getTotal(booking);

// //               const bookingDate =
// //                 booking?.createdAt ||
// //                 booking?.bookingDate ||
// //                 booking?.date;

// //               return (

// //                 <article
// //                   className="booking-card"
// //                   key={
// //                     booking?._id ||
// //                     booking?.bookingId ||
// //                     index
// //                   }
// //                 >

// //                   {/* TOP */}

// //                   <div className="booking-card-top">

// //                     <div className="airline-info">

// //                       <div className="airline-icon">
// //                         <FaPlaneDeparture />
// //                       </div>

// //                       <div>

// //                         <h3>
// //                           {flightName}
// //                         </h3>

// //                         <span>
// //                           {flightNumber}
// //                         </span>

// //                       </div>

// //                     </div>


// //                     <span
// //                       className={`booking-status ${
// //                         String(status)
// //                           .toLowerCase()
// //                           .replace(/\s+/g, "-")
// //                       }`}
// //                     >
// //                       {status}
// //                     </span>

// //                   </div>


// //                   {/* DETAILS */}

// //                   <div className="booking-details">

// //                     <div className="booking-detail">

// //                       <span>
// //                         Booking ID
// //                       </span>

// //                       <strong>
// //                         {bookingId}
// //                       </strong>

// //                     </div>


// //                     <div className="booking-detail">

// //                       <span>
// //                         PNR
// //                       </span>

// //                       <strong>
// //                         {pnr}
// //                       </strong>

// //                     </div>


// //                     <div className="booking-detail">

// //                       <span>
// //                         Passenger
// //                       </span>

// //                       <strong>
// //                         {passengerName}
// //                       </strong>

// //                     </div>


// //                     <div className="booking-detail">

// //                       <span>
// //                         Booking Date
// //                       </span>

// //                       <strong>
// //                         {formatDate(bookingDate)}
// //                       </strong>

// //                     </div>


// //                     <div className="booking-detail">

// //                       <span>
// //                         Total Amount
// //                       </span>

// //                       <strong>
// //                         ₹ {formatMoney(total)}
// //                       </strong>

// //                     </div>

// //                   </div>


// //                   {/* ACTIONS */}

// //                   <div className="booking-actions">

// //                     {/* VIEW TICKET */}

// //                     <button
// //                       type="button"
// //                       className="view-ticket-btn"
// //                       onClick={() =>
// //                         openTicket(
// //                           booking,
// //                           false
// //                         )
// //                       }
// //                     >

// //                       <FaEye />

// //                       <span>
// //                         View Ticket
// //                       </span>

// //                     </button>


// //                     {/* DOWNLOAD TICKET */}

// //                     <button
// //                       type="button"
// //                       className="download-btn"
// //                       onClick={() =>
// //                         openTicket(
// //                           booking,
// //                           true
// //                         )
// //                       }
// //                     >

// //                       <FaDownload />

// //                       <span>
// //                         Download
// //                       </span>

// //                     </button>

// //                   </div>

// //                 </article>

// //               );

// //             })}

// //           </div>

// //         )}

// //       </div>

// //     </main>
// //   );
// // }

// // export default MyBookings;








































































// import React, {
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";

// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import {
//   FaCheck,
//   FaDownload,
//   FaArrowLeft,
//   FaPlaneDeparture,
//   FaPrint,
// } from "react-icons/fa";

// import "./Success.css";


// function Success() {

//   const navigate = useNavigate();
//   const location = useLocation();

//   const ticketRef = useRef(null);

//   const [activeBooking, setActiveBooking] =
//     useState(null);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState("");


//   /* =====================================================
//      HELPERS
//   ===================================================== */

//   const firstValue = (...values) => {

//     for (const value of values) {

//       if (
//         value !== undefined &&
//         value !== null &&
//         value !== ""
//       ) {
//         return value;
//       }

//     }

//     return "";
//   };


//   const formatMoney = (value) => {

//     const number = Number(value);

//     if (!Number.isFinite(number)) {
//       return "0";
//     }

//     return number.toLocaleString("en-IN", {
//       maximumFractionDigits: 2,
//     });
//   };


//   const formatDate = (value) => {

//     if (!value) {
//       return "N/A";
//     }

//     const date = new Date(value);

//     if (Number.isNaN(date.getTime())) {
//       return String(value);
//     }

//     return date.toLocaleDateString(
//       "en-IN",
//       {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       }
//     );
//   };


//   const formatDateTime = (value) => {

//     if (!value) {
//       return "N/A";
//     }

//     const date = new Date(value);

//     if (Number.isNaN(date.getTime())) {
//       return String(value);
//     }

//     return date.toLocaleString(
//       "en-IN",
//       {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//         hour: "2-digit",
//         minute: "2-digit",
//       }
//     );
//   };


//   const getObject = (value) => {

//     if (
//       value &&
//       typeof value === "object"
//     ) {
//       return value;
//     }

//     return {};
//   };


//   /* =====================================================
//      GET BOOKING FROM LOCATION
//   ===================================================== */

//   useEffect(() => {

//     let cancelled = false;

//     const loadBooking = async () => {

//       setLoading(true);
//       setError("");

//       try {

//         /*
//          * 1. FIRST PRIORITY:
//          * MyBookings -> Success
//          */

//         const stateBooking =
//           location.state?.booking;

//         if (
//           stateBooking &&
//           typeof stateBooking === "object"
//         ) {

//           if (!cancelled) {

//             setActiveBooking(
//               stateBooking
//             );

//             setLoading(false);

//           }

//           return;
//         }


//         /*
//          * 2. SECOND PRIORITY:
//          * localStorage booking
//          */

//         const storageKeys = [
//           "activeBooking",
//           "booking",
//           "latestBooking",
//           "bookingData",
//           "successBooking",
//         ];


//         for (const key of storageKeys) {

//           const raw =
//             localStorage.getItem(key);

//           if (!raw) {
//             continue;
//           }

//           try {

//             const parsed =
//               JSON.parse(raw);

//             if (
//               parsed &&
//               typeof parsed === "object"
//             ) {

//               if (!cancelled) {

//                 setActiveBooking(
//                   parsed
//                 );

//                 setLoading(false);

//               }

//               return;

//             }

//           } catch (parseError) {

//             console.warn(
//               `Unable to parse ${key}`,
//               parseError
//             );

//           }

//         }


//         /*
//          * 3. FALLBACK:
//          * If booking id is available,
//          * fetch it from backend.
//          */

//         const bookingId =
//           firstValue(
//             location.state?.bookingId,
//             location.state?.id,
//             localStorage.getItem(
//               "bookingId"
//             )
//           );


//         const token =
//           localStorage.getItem(
//             "token"
//           );


//         if (
//           bookingId &&
//           token
//         ) {

//           const response =
//             await fetch(
//               `http://localhost:5000/api/bookings/${encodeURIComponent(
//                 bookingId
//               )}`,
//               {
//                 method: "GET",

//                 headers: {
//                   Authorization:
//                     `Bearer ${token}`,

//                   "Content-Type":
//                     "application/json",
//                 },
//               }
//             );


//           if (response.ok) {

//             const result =
//               await response.json();


//             const booking =
//               result?.booking ||
//               result?.data ||
//               result;


//             if (
//               booking &&
//               typeof booking === "object"
//             ) {

//               if (!cancelled) {

//                 setActiveBooking(
//                   booking
//                 );

//                 setLoading(false);

//               }

//               return;

//             }

//           }

//         }


//         /*
//          * NOTHING FOUND
//          */

//         if (!cancelled) {

//           setError(
//             "Booking details could not be found."
//           );

//           setLoading(false);

//         }

//       } catch (err) {

//         console.error(
//           "SUCCESS PAGE BOOKING ERROR:",
//           err
//         );

//         if (!cancelled) {

//           setError(
//             "Unable to load booking details."
//           );

//           setLoading(false);

//         }

//       }

//     };


//     loadBooking();


//     return () => {

//       cancelled = true;

//     };

//   }, [
//     location.state,
//   ]);


//   /* =====================================================
//      NORMALIZED BOOKING DATA
//   ===================================================== */

//   const booking =
//     getObject(activeBooking);


//   const flight =
//     getObject(
//       booking.flight
//     );


//   const passenger =
//     getObject(
//       booking.passenger ||
//       booking.passengers?.[0]
//     );


//   const passengers =
//     Array.isArray(
//       booking.passengers
//     ) &&
//     booking.passengers.length
//       ? booking.passengers
//       : booking.passenger
//         ? [booking.passenger]
//         : [];


//   const seat =
//     booking.seat ||
//     booking.seats?.[0] ||
//     "";


//   const meal =
//     booking.meal ||
//     booking.meals?.[0] ||
//     "";


//   const baggage =
//     booking.baggage ||
//     booking.baggages?.[0] ||
//     "";


//   /* =====================================================
//      BASIC DETAILS
//   ===================================================== */

//   const bookingId =
//     firstValue(
//       booking.bookingId,
//       booking._id,
//       "N/A"
//     );


//   const pnr =
//     firstValue(
//       booking.pnr,
//       booking.PNR,
//       "N/A"
//     );


//   const status =
//     firstValue(
//       booking.bookingStatus,
//       booking.status,
//       "Confirmed"
//     );


//   const paymentMethod =
//     firstValue(
//       booking.paymentMethod,
//       "N/A"
//     );


//   const paymentStatus =
//     firstValue(
//       booking.paymentStatus,
//       "Paid"
//     );


//   /* =====================================================
//      FLIGHT DETAILS
//   ===================================================== */

//   const airline =
//     firstValue(
//       flight.airline,
//       flight.airlineName,
//       flight.name,
//       booking.airline,
//       "Saiyed Travels"
//     );


//   const flightNumber =
//     firstValue(
//       flight.flightNumber,
//       flight.flightNo,
//       flight.number,
//       booking.flightNumber,
//       "N/A"
//     );


//   const departureCity =
//     firstValue(
//       flight.departureCity,
//       flight.fromCity,
//       flight.from,
//       flight.origin,
//       booking.departureCity,
//       booking.from,
//       "N/A"
//     );


//   const arrivalCity =
//     firstValue(
//       flight.arrivalCity,
//       flight.toCity,
//       flight.to,
//       flight.destination,
//       booking.arrivalCity,
//       booking.to,
//       "N/A"
//     );


//   const departureTime =
//     firstValue(
//       flight.departureTime,
//       flight.departure,
//       booking.departureTime,
//       "N/A"
//     );


//   const arrivalTime =
//     firstValue(
//       flight.arrivalTime,
//       flight.arrival,
//       booking.arrivalTime,
//       "N/A"
//     );


//   const departureDate =
//     firstValue(
//       flight.departureDate,
//       flight.date,
//       booking.departureDate,
//       booking.travelDate,
//       booking.date
//     );


//   /* =====================================================
//      PASSENGER DETAILS
//   ===================================================== */

//   const passengerName =
//     firstValue(
//       [
//         passenger.firstName,
//         passenger.middleName,
//         passenger.lastName,
//       ]
//         .filter(Boolean)
//         .join(" "),

//       passenger.name,
//       passenger.fullName,

//       "Passenger"
//     );


//   const passengerEmail =
//     firstValue(
//       passenger.email,
//       booking.email,
//       "N/A"
//     );


//   const passengerPhone =
//     firstValue(
//       passenger.phone,
//       passenger.mobile,
//       booking.phone,
//       "N/A"
//     );


//   const passengerGender =
//     firstValue(
//       passenger.gender,
//       "N/A"
//     );


//   const passengerAge =
//     firstValue(
//       passenger.age,
//       "N/A"
//     );


//   const passengerPassport =
//     firstValue(
//       passenger.passportNumber,
//       passenger.passport,
//       "N/A"
//     );


//   /* =====================================================
//      FARE
//   ===================================================== */

//   const flightFare =
//     Number(
//       firstValue(
//         booking.price,
//         booking.flightFare,
//         booking.baseFare,
//         0
//       )
//     ) || 0;


//   const seatPrice =
//     Number(
//       firstValue(
//         booking.seatPrice,
//         booking.seatFee,
//         0
//       )
//     ) || 0;


//   const mealPrice =
//     Number(
//       firstValue(
//         booking.mealPrice,
//         booking.mealFee,
//         0
//       )
//     ) || 0;


//   const baggagePrice =
//     Number(
//       firstValue(
//         booking.baggagePrice,
//         booking.baggageFee,
//         0
//       )
//     ) || 0;


//   const taxes =
//     Number(
//       firstValue(
//         booking.taxes,
//         booking.tax,
//         0
//       )
//     ) || 0;


//   const convenienceFee =
//     Number(
//       firstValue(
//         booking.convenienceFee,
//         booking.convenienceFees,
//         0
//       )
//     ) || 0;


//   const discount =
//     Number(
//       firstValue(
//         booking.discount,
//         0
//       )
//     ) || 0;


//   const databaseTotal =
//     Number(
//       firstValue(
//         booking.finalPrice,
//         booking.total,
//         0
//       )
//     ) || 0;


//   const calculatedTotal =
//     flightFare +
//     seatPrice +
//     mealPrice +
//     baggagePrice +
//     taxes +
//     convenienceFee -
//     discount;


//   const finalTotal =
//     databaseTotal > 0
//       ? databaseTotal
//       : Math.max(
//           calculatedTotal,
//           0
//         );


//   /* =====================================================
//      QR CODE
//   ===================================================== */

//   const qrCodeUrl =
//     firstValue(
//       booking.qrCodeUrl,
//       booking.qrCode,
//       booking.qr,
//       ""
//     );


//   /* =====================================================
//      DOWNLOAD / PRINT
//   ===================================================== */

//   const downloadTicket = async () => {

//     if (!activeBooking) {

//       alert(
//         "Booking details not found."
//       );

//       return;

//     }


//     /*
//      * Browser print dialog.
//      *
//      * User can select:
//      * Save as PDF
//      */

//     window.print();

//   };


//   /* =====================================================
//      AUTO DOWNLOAD
//   ===================================================== */

//   useEffect(() => {

//     if (
//       !loading &&
//       activeBooking &&
//       location.state?.autoDownload
//     ) {

//       const timer =
//         setTimeout(() => {

//           window.print();

//         }, 700);


//       return () =>
//         clearTimeout(timer);

//     }

//   }, [
//     loading,
//     activeBooking,
//     location.state,
//   ]);


//   /* =====================================================
//      LOADING
//   ===================================================== */

//   if (loading) {

//     return (

//       <main className="success-page">

//         <div className="success-loading">

//           <h2>
//             Loading Ticket...
//           </h2>

//           <p>
//             Please wait while we load your booking.
//           </p>

//         </div>

//       </main>

//     );

//   }


//   /* =====================================================
//      ERROR
//   ===================================================== */

//   if (
//     !activeBooking ||
//     error
//   ) {

//     return (

//       <main className="success-page">

//         <div className="success-error">

//           <div className="success-icon">
//             !
//           </div>

//           <h2>
//             Ticket Not Found
//           </h2>

//           <p>
//             {error ||
//               "Booking details are unavailable."}
//           </p>

//           <div className="success-actions">

//             <button
//               type="button"
//               className="back-bookings-btn"
//               onClick={() =>
//                 navigate(
//                   "/my-bookings"
//                 )
//               }
//             >

//               <FaArrowLeft />

//               My Bookings

//             </button>

//           </div>

//         </div>

//       </main>

//     );

//   }


//   /* =====================================================
//      PAGE
//   ===================================================== */

//   return (

//     <main className="success-page">

//       <div className="success-container">


//         {/* =================================================
//            SUCCESS HEADER
//         ================================================= */}

//         <section className="success-header">

//           <div className="success-icon">

//             <FaCheck />

//           </div>

//           <h1>
//             Booking Confirmed
//           </h1>

//           <p>
//             Your flight booking has been successfully confirmed.
//           </p>

//         </section>


//         {/* =================================================
//            ACTION BUTTONS
//         ================================================= */}

//         <div className="success-actions">

//           <button
//             type="button"
//             className="back-bookings-btn"
//             onClick={() =>
//               navigate(
//                 "/my-bookings"
//               )
//             }
//           >

//             <FaArrowLeft />

//             My Bookings

//           </button>


//           <button
//             type="button"
//             className="download-ticket-btn"
//             onClick={downloadTicket}
//           >

//             <FaDownload />

//             Download Ticket

//           </button>

//         </div>


//         {/* =================================================
//            TICKET
//         ================================================= */}

//         <section
//           className="ticket"
//           ref={ticketRef}
//         >


//           {/* =================================================
//              TICKET TOP
//           ================================================= */}

//           <div className="ticket-top">

//             <div className="ticket-brand">

//               <div className="ticket-brand-icon">

//                 <FaPlaneDeparture />

//               </div>

//               <div>

//                 <h2>
//                   Saiyed Travels
//                 </h2>

//                 <span>
//                   Flight Booking & Travel Services
//                 </span>

//               </div>

//             </div>


//             <div className="ticket-status">

//               {status}

//             </div>

//           </div>


//           {/* =================================================
//              BOOKING INFO
//           ================================================= */}

//           <section className="booking-info">

//             <div className="booking-info-box">

//               <span>
//                 Booking ID
//               </span>

//               <strong>
//                 {bookingId}
//               </strong>

//             </div>


//             <div className="booking-info-box">

//               <span>
//                 PNR
//               </span>

//               <strong>
//                 {pnr}
//               </strong>

//             </div>


//             <div className="booking-info-box">

//               <span>
//                 Booking Date
//               </span>

//               <strong>
//                 {formatDateTime(
//                   booking.createdAt
//                 )}
//               </strong>

//             </div>


//             <div className="booking-info-box">

//               <span>
//                 Payment Status
//               </span>

//               <strong>
//                 {paymentStatus}
//               </strong>

//             </div>


//             <div className="booking-info-box">

//               <span>
//                 Adults
//               </span>

//               <strong>
//                 {booking.adults ?? 1}
//               </strong>

//             </div>


//             <div className="booking-info-box">

//               <span>
//                 Children / Infants
//               </span>

//               <strong>
//                 {booking.children ?? 0}
//                 {" / "}
//                 {booking.infants ?? 0}
//               </strong>

//             </div>

//           </section>


//           {/* =================================================
//              FLIGHT
//           ================================================= */}

//           <section className="ticket-section">

//             <h2 className="section-title orange">
//               Flight Details
//             </h2>


//             <div className="flight-details">


//               <div className="flight-point">

//                 <strong className="flight-time">
//                   {departureTime}
//                 </strong>

//                 <span className="flight-city">
//                   {departureCity}
//                 </span>

//                 <span className="flight-date">
//                   {formatDate(
//                     departureDate
//                   )}
//                 </span>

//               </div>


//               <div className="flight-middle">

//                 <div className="flight-number">
//                   {airline}
//                   {" • "}
//                   {flightNumber}
//                 </div>

//                 <div className="flight-line" />

//               </div>


//               <div className="flight-point">

//                 <strong className="flight-time">
//                   {arrivalTime}
//                 </strong>

//                 <span className="flight-city">
//                   {arrivalCity}
//                 </span>

//                 <span className="flight-date">
//                   {formatDate(
//                     departureDate
//                   )}
//                 </span>

//               </div>


//             </div>

//           </section>


//           {/* =================================================
//              PASSENGERS
//           ================================================= */}

//           <section className="ticket-section">

//             <h2 className="section-title orange">
//               Passenger Details
//             </h2>


//             {passengers.length > 0 ? (

//               <div className="passenger-grid">

//                 {passengers.map(
//                   (item, index) => {

//                     const p =
//                       getObject(item);


//                     const name =
//                       firstValue(
//                         [
//                           p.firstName,
//                           p.middleName,
//                           p.lastName,
//                         ]
//                           .filter(Boolean)
//                           .join(" "),

//                         p.name,
//                         p.fullName,

//                         "Passenger"
//                       );


//                     return (

//                       <div
//                         className="passenger-card"
//                         key={
//                           p._id ||
//                           index
//                         }
//                       >

//                         <h4>
//                           Passenger {index + 1}
//                         </h4>


//                         <div className="passenger-row">

//                           <span>
//                             Name
//                           </span>

//                           <strong>
//                             {name}
//                           </strong>

//                         </div>


//                         <div className="passenger-row">

//                           <span>
//                             Gender
//                           </span>

//                           <strong>
//                             {firstValue(
//                               p.gender,
//                               "N/A"
//                             )}
//                           </strong>

//                         </div>


//                         <div className="passenger-row">

//                           <span>
//                             Age
//                           </span>

//                           <strong>
//                             {firstValue(
//                               p.age,
//                               "N/A"
//                             )}
//                           </strong>

//                         </div>


//                         <div className="passenger-row">

//                           <span>
//                             Email
//                           </span>

//                           <strong>
//                             {firstValue(
//                               p.email,
//                               passengerEmail,
//                               "N/A"
//                             )}
//                           </strong>

//                         </div>


//                         <div className="passenger-row">

//                           <span>
//                             Phone
//                           </span>

//                           <strong>
//                             {firstValue(
//                               p.phone,
//                               p.mobile,
//                               passengerPhone,
//                               "N/A"
//                             )}
//                           </strong>

//                         </div>


//                         {p.passportNumber && (

//                           <div className="passenger-row">

//                             <span>
//                               Passport
//                             </span>

//                             <strong>
//                               {p.passportNumber}
//                             </strong>

//                           </div>

//                         )}

//                       </div>

//                     );

//                   }
//                 )}

//               </div>

//             ) : (

//               <div className="passenger-grid">

//                 <div className="passenger-card">

//                   <h4>
//                     Passenger 1
//                   </h4>


//                   <div className="passenger-row">

//                     <span>
//                       Name
//                     </span>

//                     <strong>
//                       {passengerName}
//                     </strong>

//                   </div>


//                   <div className="passenger-row">

//                     <span>
//                       Gender
//                     </span>

//                     <strong>
//                       {passengerGender}
//                     </strong>

//                   </div>


//                   <div className="passenger-row">

//                     <span>
//                       Age
//                     </span>

//                     <strong>
//                       {passengerAge}
//                     </strong>

//                   </div>


//                   <div className="passenger-row">

//                     <span>
//                       Email
//                     </span>

//                     <strong>
//                       {passengerEmail}
//                     </strong>

//                   </div>


//                   <div className="passenger-row">

//                     <span>
//                       Phone
//                     </span>

//                     <strong>
//                       {passengerPhone}
//                     </strong>

//                   </div>


//                   {passengerPassport !== "N/A" && (

//                     <div className="passenger-row">

//                       <span>
//                         Passport
//                       </span>

//                       <strong>
//                         {passengerPassport}
//                       </strong>

//                     </div>

//                   )}

//                 </div>

//               </div>

//             )}

//           </section>


//           {/* =================================================
//              SEAT / MEAL / BAGGAGE
//           ================================================= */}

//           <section className="ticket-section">

//             <h2 className="section-title orange">
//               Additional Services
//             </h2>


//             <div className="passenger-grid">


//               <div className="passenger-card">

//                 <h4>
//                   Seat
//                 </h4>

//                 <div className="passenger-row">

//                   <span>
//                     Selected Seat
//                   </span>

//                   <strong>
//                     {typeof seat === "object"
//                       ? firstValue(
//                           seat.seatNumber,
//                           seat.number,
//                           seat.name,
//                           "Not Selected"
//                         )
//                       : firstValue(
//                           seat,
//                           "Not Selected"
//                         )}
//                   </strong>

//                 </div>

//               </div>


//               <div className="passenger-card">

//                 <h4>
//                   Meal
//                 </h4>

//                 <div className="passenger-row">

//                   <span>
//                     Selected Meal
//                   </span>

//                   <strong>
//                     {typeof meal === "object"
//                       ? firstValue(
//                           meal.name,
//                           meal.mealName,
//                           "Not Selected"
//                         )
//                       : firstValue(
//                           meal,
//                           "Not Selected"
//                         )}
//                   </strong>

//                 </div>

//               </div>


//               <div className="passenger-card">

//                 <h4>
//                   Baggage
//                 </h4>

//                 <div className="passenger-row">

//                   <span>
//                     Baggage
//                   </span>

//                   <strong>
//                     {typeof baggage === "object"
//                       ? firstValue(
//                           baggage.name,
//                           baggage.weight,
//                           baggage.quantity,
//                           "Not Selected"
//                         )
//                       : firstValue(
//                           baggage,
//                           "Not Selected"
//                         )}
//                   </strong>

//                 </div>

//               </div>

//             </div>

//           </section>


//           {/* =================================================
//              FARE + PAYMENT
//           ================================================= */}

//           <section className="fare-payment">


//             <div className="fare-box">

//               <div className="section-title orange">
//                 Fare Summary
//               </div>


//               <div className="fare-row">

//                 <span>
//                   Flight Fare
//                 </span>

//                 <strong>
//                   ₹ {formatMoney(
//                     flightFare
//                   )}
//                 </strong>

//               </div>


//               <div className="fare-row">

//                 <span>
//                   Seat Fee
//                 </span>

//                 <strong>
//                   ₹ {formatMoney(
//                     seatPrice
//                   )}
//                 </strong>

//               </div>


//               <div className="fare-row">

//                 <span>
//                   Meal Fee
//                 </span>

//                 <strong>
//                   ₹ {formatMoney(
//                     mealPrice
//                   )}
//                 </strong>

//               </div>


//               <div className="fare-row">

//                 <span>
//                   Baggage Fee
//                 </span>

//                 <strong>
//                   ₹ {formatMoney(
//                     baggagePrice
//                   )}
//                 </strong>

//               </div>


//               <div className="fare-row">

//                 <span>
//                   Taxes
//                 </span>

//                 <strong>
//                   ₹ {formatMoney(
//                     taxes
//                   )}
//                 </strong>

//               </div>


//               <div className="fare-row">

//                 <span>
//                   Convenience Fee
//                 </span>

//                 <strong>
//                   ₹ {formatMoney(
//                     convenienceFee
//                   )}
//                 </strong>

//               </div>


//               {discount > 0 && (

//                 <div className="fare-row discount">

//                   <span>
//                     Discount
//                   </span>

//                   <strong>
//                     - ₹{" "}
//                     {formatMoney(
//                       discount
//                     )}
//                   </strong>

//                 </div>

//               )}


//               <div className="fare-total">

//                 <span>
//                   Total Amount
//                 </span>

//                 <strong>
//                   ₹ {formatMoney(
//                     finalTotal
//                   )}
//                 </strong>

//               </div>

//             </div>


//             <div className="payment-box">

//               <div className="section-title orange">
//                 Payment Summary
//               </div>


//               <div className="payment-row">

//                 <span>
//                   Payment Method
//                 </span>

//                 <strong>
//                   {paymentMethod}
//                 </strong>

//               </div>


//               <div className="payment-row">

//                 <span>
//                   Amount
//                 </span>

//                 <strong>
//                   ₹ {formatMoney(
//                     finalTotal
//                   )}
//                 </strong>

//               </div>


//               <div className="payment-row">

//                 <span>
//                   Payment Status
//                 </span>

//                 <strong className="paid">
//                   {paymentStatus}
//                 </strong>

//               </div>


//               {booking.paymentId && (

//                 <div className="payment-row">

//                   <span>
//                     Payment ID
//                   </span>

//                   <strong>
//                     {booking.paymentId}
//                   </strong>

//                 </div>

//               )}


//               {booking.orderId && (

//                 <div className="payment-row">

//                   <span>
//                     Order ID
//                   </span>

//                   <strong>
//                     {booking.orderId}
//                   </strong>

//                 </div>

//               )}

//             </div>


//           </section>


//           {/* =================================================
//              QR
//           ================================================= */}

//           <section className="qr-section">

//             <div className="promo">

//               <div className="promo-icon">

//                 <FaPlaneDeparture />

//               </div>

//               <div>

//                 <h2>
//                   Saiyed Travels
//                 </h2>

//                 <p>
//                   Your Journey, Our Responsibility
//                 </p>

//                 <small>
//                   Flight Booking • Visa • Holidays
//                 </small>

//               </div>

//             </div>


//             {qrCodeUrl && (

//               <div className="qr-box">

//                 <img
//                   src={qrCodeUrl}
//                   alt="Booking QR Code"
//                 />

//                 <span>
//                   Scan to verify booking
//                 </span>

//               </div>

//             )}

//           </section>


//           {/* =================================================
//              IMPORTANT
//           ================================================= */}

//           <section className="important-section">

//             <h3>
//               Important Information
//             </h3>

//             <p>
//               1. Please carry valid government issued
//               identity proof during your journey.
//             </p>

//             <p>
//               2. Please reach the airport before the
//               recommended check-in time.
//             </p>

//             <p>
//               3. Baggage allowance is subject to airline
//               rules and ticket conditions.
//             </p>

//             <p>
//               4. Please verify all flight details before
//               travelling.
//             </p>

//           </section>


//           {/* =================================================
//              FOOTER
//           ================================================= */}

//           <footer className="ticket-footer">

//             <div>

//               <strong>
//                 Saiyed Travels
//               </strong>

//               <span>
//                 Flight Booking & Travel Services
//               </span>

//             </div>


//             <div>

//               <span>
//                 Booking ID:
//                 {" "}
//                 {bookingId}
//               </span>

//               <span>
//                 PNR:
//                 {" "}
//                 {pnr}
//               </span>

//             </div>

//           </footer>


//         </section>

//       </div>

//     </main>

//   );

// }


// export default Success;




























































// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   FaCheck,
//   FaDownload,
//   FaEye,
//   FaEyeSlash,
//   FaPlaneDeparture,
//   FaArrowLeft,
//   FaQrcode,
//   FaPrint,
// } from "react-icons/fa";

// import "./Success.css";


// /* =========================================================
//    HELPERS
// ========================================================= */

// const money = (value) => {
//   const number = Number(value);

//   if (!Number.isFinite(number)) {
//     return "0";
//   }

//   return number.toLocaleString("en-IN");
// };


// const firstValue = (...values) => {
//   for (const value of values) {
//     if (
//       value !== undefined &&
//       value !== null &&
//       String(value).trim() !== ""
//     ) {
//       return value;
//     }
//   }

//   return "";
// };


// const getBookingFromStorage = () => {
//   const keys = [
//     "activeBooking",
//     "booking",
//     "lastBooking",
//     "bookingData",
//     "successBooking",
//   ];

//   for (const key of keys) {
//     try {
//       const raw = localStorage.getItem(key);

//       if (!raw) continue;

//       const parsed = JSON.parse(raw);

//       if (parsed && typeof parsed === "object") {
//         return parsed.booking || parsed.data || parsed;
//       }
//     } catch (error) {
//       console.warn(`Unable to read ${key}`, error);
//     }
//   }

//   return null;
// };


// const getPassengers = (booking) => {
//   if (!booking) {
//     return [];
//   }

//   if (
//     Array.isArray(booking.passengers) &&
//     booking.passengers.length > 0
//   ) {
//     return booking.passengers;
//   }

//   if (booking.passenger) {
//     return [booking.passenger];
//   }

//   return [];
// };


// const getFlight = (booking) => {
//   if (!booking) {
//     return {};
//   }

//   if (
//     booking.flight &&
//     typeof booking.flight === "object" &&
//     !Array.isArray(booking.flight)
//   ) {
//     return booking.flight;
//   }

//   return {};
// };


// const getDate = (value) => {
//   if (!value) {
//     return "—";
//   }

//   try {
//     const date = new Date(value);

//     if (Number.isNaN(date.getTime())) {
//       return String(value);
//     }

//     return date.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return String(value);
//   }
// };


// const getTime = (value) => {
//   if (!value) {
//     return "—";
//   }

//   const text = String(value);

//   if (/^\d{1,2}:\d{2}/.test(text)) {
//     return text.substring(0, 5);
//   }

//   try {
//     const date = new Date(value);

//     if (!Number.isNaN(date.getTime())) {
//       return date.toLocaleTimeString("en-IN", {
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: false,
//       });
//     }
//   } catch {
//     // ignore
//   }

//   return text;
// };


// /* =========================================================
//    COMPONENT
// ========================================================= */

// function Success() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [activeBooking, setActiveBooking] = useState(null);
//   const [showPrice, setShowPrice] = useState(true);
//   const [loading, setLoading] = useState(true);


//   /* =======================================================
//      LOAD BOOKING
//   ======================================================= */

//   useEffect(() => {
//     let booking = null;

//     if (location.state?.booking) {
//       booking = location.state.booking;
//     }

//     if (!booking) {
//       booking = getBookingFromStorage();
//     }

//     if (booking) {
//       setActiveBooking(booking);
//     }

//     setLoading(false);
//   }, [location.state]);


//   /* =======================================================
//      AUTO DOWNLOAD
//   ======================================================= */

//   useEffect(() => {
//     if (
//       !loading &&
//       activeBooking &&
//       location.state?.autoDownload
//     ) {
//       const timer = setTimeout(() => {
//         window.print();
//       }, 900);

//       return () => clearTimeout(timer);
//     }
//   }, [
//     loading,
//     activeBooking,
//     location.state,
//   ]);


//   /* =======================================================
//      DATA
//   ======================================================= */

//   const flight = useMemo(
//     () => getFlight(activeBooking),
//     [activeBooking]
//   );


//   const passengers = useMemo(
//     () => getPassengers(activeBooking),
//     [activeBooking]
//   );


//   if (loading) {
//     return (
//       <div className="success-page">
//         <div className="success-loading">
//           <h2>Loading Ticket...</h2>
//           <p>Please wait.</p>
//         </div>
//       </div>
//     );
//   }


//   if (!activeBooking) {
//     return (
//       <div className="success-page">
//         <div className="success-error">
//           <div className="success-error-icon">
//             <FaEye />
//           </div>

//           <h2>Booking Not Found</h2>

//           <p>
//             We could not find the booking details for
//             this ticket.
//           </p>

//           <button
//             type="button"
//             className="primary-btn"
//             onClick={() => navigate("/my-bookings")}
//           >
//             <FaArrowLeft />
//             Back to My Bookings
//           </button>
//         </div>
//       </div>
//     );
//   }


//   /* =======================================================
//      BOOKING VALUES
//   ======================================================= */

//   const bookingId = firstValue(
//     activeBooking.bookingId,
//     activeBooking.id,
//     activeBooking._id,
//     "—"
//   );


//   const gdsPnr = firstValue(
//     activeBooking.gdsPnr,
//     activeBooking.gdsPNR,
//     activeBooking.gds,
//     activeBooking.pnr,
//     "—"
//   );


//   const airlinePnr = firstValue(
//     activeBooking.airlinePnr,
//     activeBooking.airlinePNR,
//     activeBooking.pnr,
//     "—"
//   );


//   const bookingDate = firstValue(
//     activeBooking.bookingDate,
//     activeBooking.createdAt,
//     new Date()
//   );


//   /* =======================================================
//      FLIGHT VALUES
//   ======================================================= */

//   const airline = firstValue(
//     flight.airline,
//     flight.airlineName,
//     activeBooking.airline,
//     "Airline"
//   );


//   const airlineCode = firstValue(
//     flight.airlineCode,
//     flight.code,
//     activeBooking.airlineCode,
//     ""
//   );


//   const flightNumber = firstValue(
//     flight.flightNumber,
//     flight.flightNo,
//     flight.number,
//     activeBooking.flightNumber,
//     activeBooking.flightNo,
//     "—"
//   );


//   const from = firstValue(
//     flight.from,
//     flight.origin,
//     flight.departureAirport,
//     activeBooking.from,
//     activeBooking.origin,
//     "—"
//   );


//   const to = firstValue(
//     flight.to,
//     flight.destination,
//     flight.arrivalAirport,
//     activeBooking.to,
//     activeBooking.destination,
//     "—"
//   );


//   const fromCity = firstValue(
//     flight.fromCity,
//     flight.originCity,
//     flight.departureCity,
//     activeBooking.fromCity,
//     from
//   );


//   const toCity = firstValue(
//     flight.toCity,
//     flight.destinationCity,
//     flight.arrivalCity,
//     activeBooking.toCity,
//     to
//   );


//   const departureTime = firstValue(
//     flight.departureTime,
//     flight.depTime,
//     activeBooking.departureTime,
//     "—"
//   );


//   const arrivalTime = firstValue(
//     flight.arrivalTime,
//     flight.arrTime,
//     activeBooking.arrivalTime,
//     "—"
//   );


//   const departureDate = firstValue(
//     flight.departureDate,
//     flight.depDate,
//     activeBooking.departureDate,
//     flight.date
//   );


//   const arrivalDate = firstValue(
//     flight.arrivalDate,
//     flight.arrDate,
//     activeBooking.arrivalDate,
//     flight.date
//   );


//   const departureTerminal = firstValue(
//     flight.departureTerminal,
//     flight.depTerminal,
//     activeBooking.departureTerminal,
//     "—"
//   );


//   const arrivalTerminal = firstValue(
//     flight.arrivalTerminal,
//     flight.arrTerminal,
//     activeBooking.arrivalTerminal,
//     "—"
//   );


//   const duration = firstValue(
//     flight.duration,
//     activeBooking.duration,
//     "—"
//   );


//   const fareClass = firstValue(
//     flight.fareClass,
//     flight.class,
//     activeBooking.fareClass,
//     "Economy"
//   );


//   const refundStatus = firstValue(
//     flight.refundStatus,
//     flight.refundable === true
//       ? "Refundable"
//       : "Non Refundable",
//     activeBooking.refundStatus,
//     "Non Refundable"
//   );


//   /* =======================================================
//      PASSENGER
//   ======================================================= */

//   const firstPassenger = passengers[0] || {};


//   /* =======================================================
//      FARES
//   ======================================================= */

//   const flightFare = Number(
//     firstValue(
//       activeBooking.flightFare,
//       activeBooking.price,
//       activeBooking.baseFare,
//       0
//     )
//   );


//   const seatPrice = Number(
//     firstValue(
//       activeBooking.seatPrice,
//       activeBooking.seatFee,
//       activeBooking.seat?.price,
//       0
//     )
//   );


//   const mealPrice = Number(
//     firstValue(
//       activeBooking.mealPrice,
//       activeBooking.mealFee,
//       activeBooking.meal?.price,
//       0
//     )
//   );


//   const baggagePrice = Number(
//     firstValue(
//       activeBooking.baggagePrice,
//       activeBooking.baggageFee,
//       activeBooking.baggage?.price,
//       0
//     )
//   );


//   const taxes = Number(
//     firstValue(
//       activeBooking.taxes,
//       activeBooking.tax,
//       0
//     )
//   );


//   const convenienceFee = Number(
//     firstValue(
//       activeBooking.convenienceFee,
//       activeBooking.convenience,
//       0
//     )
//   );


//   const discount = Number(
//     firstValue(
//       activeBooking.discount,
//       0
//     )
//   );


//   let finalTotal = Number(
//     firstValue(
//       activeBooking.finalPrice,
//       activeBooking.total,
//       activeBooking.amount,
//       0
//     )
//   );


//   if (!finalTotal) {
//     finalTotal =
//       flightFare +
//       seatPrice +
//       mealPrice +
//       baggagePrice +
//       taxes +
//       convenienceFee -
//       discount;
//   }


//   /* =======================================================
//      PAYMENT
//   ======================================================= */

//   const paymentMethod = firstValue(
//     activeBooking.paymentMethod,
//     activeBooking.paymentType,
//     activeBooking.paymentMode,
//     "—"
//   );


//   const paymentStatus = firstValue(
//     activeBooking.paymentStatus,
//     "Paid"
//   );


//   const paymentDate = firstValue(
//     activeBooking.paymentDate,
//     activeBooking.paidAt,
//     activeBooking.createdAt,
//     ""
//   );


//   /* =======================================================
//      TICKET NUMBER
//   ======================================================= */

//   const ticketNumber = firstValue(
//     activeBooking.ticketNumber,
//     firstPassenger.ticketNumber,
//     activeBooking.ticketNo,
//     bookingId
//   );


//   /* =======================================================
//      BAGGAGE
//   ======================================================= */

//   const baggage = firstValue(
//     firstPassenger.baggage,
//     firstPassenger.baggageAllowance,
//     activeBooking.baggageAllowance,
//     "15 KG (Included)"
//   );


//   /* =======================================================
//      QR
//   ======================================================= */

//   const qrData = encodeURIComponent(
//     JSON.stringify({
//       bookingId,
//       pnr: airlinePnr,
//       flightNumber,
//       from,
//       to,
//       passenger:
//         firstValue(
//           firstPassenger.name,
//           firstPassenger.fullName,
//           firstPassenger.firstName
//             ? `${firstPassenger.firstName} ${firstPassenger.lastName || ""}`
//             : "Passenger"
//         ),
//     })
//   );


//   const qrCodeUrl =
//     `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${qrData}`;


//   /* =======================================================
//      PRICE COMPONENT
//   ======================================================= */

//   const Price = ({ value }) => {
//     if (!showPrice) {
//       return (
//         <span className="hidden-price">
//           ••••••
//         </span>
//       );
//     }

//     return (
//       <>
//         ₹ {money(value)}
//       </>
//     );
//   };


//   /* =======================================================
//      DOWNLOAD / PRINT
//   ======================================================= */

//   const handleDownload = () => {
//     window.print();
//   };


//   /* =======================================================
//      RENDER
//   ======================================================= */

//   return (
//     <div className="success-page">

//       <div className="success-container">

//         {/* =================================================
//             TOP SUCCESS HEADER
//         ================================================= */}

//         <div className="success-header">

//           <div className="success-icon">
//             <FaCheck />
//           </div>

//           <h1>
//             Booking Confirmed
//           </h1>

//           <p>
//             Your flight ticket has been successfully booked.
//           </p>

//         </div>


//         {/* =================================================
//             ACTIONS
//         ================================================= */}

//         <div className="success-actions">

//           <button
//             type="button"
//             className="back-bookings-btn"
//             onClick={() =>
//               navigate("/my-bookings")
//             }
//           >
//             <FaArrowLeft />
//             My Bookings
//           </button>


//           <button
//             type="button"
//             className="price-toggle-btn"
//             onClick={() =>
//               setShowPrice((value) => !value)
//             }
//           >
//             {showPrice ? (
//               <>
//                 <FaEyeSlash />
//                 Hide Price
//               </>
//             ) : (
//               <>
//                 <FaEye />
//                 Show Price
//               </>
//             )}
//           </button>


//           <button
//             type="button"
//             className="download-ticket-btn"
//             onClick={handleDownload}
//           >
//             <FaDownload />
//             Download Ticket
//           </button>


//           <button
//             type="button"
//             className="print-ticket-btn"
//             onClick={handleDownload}
//           >
//             <FaPrint />
//             Print
//           </button>

//         </div>


//         {/* =================================================
//             TICKET
//         ================================================= */}

//         <main className="ticket" id="success-ticket">


//           {/* =================================================
//               TICKET HEADER
//           ================================================= */}

//           <div className="ticket-top">

//             <div className="ticket-brand">

//               <div className="ticket-brand-icon">
//                 <FaPlaneDeparture />
//               </div>

//               <div>

//                 <h2>
//                   Saiyed Travels
//                 </h2>

//                 <span>
//                   Flight Booking & Travel Services
//                 </span>

//               </div>

//             </div>


//             <div className="airline-box">

//               <strong>
//                 {airline}
//               </strong>

//               {airlineCode && (
//                 <span>
//                   {airlineCode}
//                 </span>
//               )}

//               <small>
//                 {flightNumber}
//               </small>

//             </div>

//           </div>


//           {/* =================================================
//               BOOKING DETAILS
//           ================================================= */}

//           <section className="ticket-section">

//             <div className="section-title blue">
//               Booking Details
//               <span className="confirmed-badge">
//                 Confirmed
//               </span>
//             </div>


//             <div className="booking-grid">

//               <div className="booking-box">

//                 <span>
//                   Booking ID
//                 </span>

//                 <strong>
//                   {bookingId}
//                 </strong>

//               </div>


//               <div className="booking-box">

//                 <span>
//                   GDS PNR
//                 </span>

//                 <strong>
//                   {gdsPnr}
//                 </strong>

//               </div>


//               <div className="booking-box">

//                 <span>
//                   Airline PNR
//                 </span>

//                 <strong className="blue-text">
//                   {airlinePnr}
//                 </strong>

//               </div>


//               <div className="booking-box">

//                 <span>
//                   Booking Date
//                 </span>

//                 <strong>
//                   {getDate(bookingDate)}
//                 </strong>

//               </div>

//             </div>

//           </section>


//           {/* =================================================
//               FLIGHT DETAILS
//           ================================================= */}

//           <section className="ticket-section">

//             <div className="section-title orange">
//               Flight Details
//             </div>


//             <p className="flight-note">
//               Subject to prior sale, price and schedule
//               changes. Please check your flight details
//               before travelling.
//             </p>


//             <div className="route-title">

//               ({String(from).toUpperCase()})
//               {" - "}
//               ({String(to).toUpperCase()})

//             </div>


//             <div className="flight-table">


//               <div className="flight-table-head">

//                 <span>
//                   Carrier / Dep Date
//                 </span>

//                 <span>
//                   Flight No
//                 </span>

//                 <span>
//                   Departure / Dep Terminal
//                 </span>

//                 <span>
//                   Arrival / Arr Terminal
//                 </span>

//                 <span>
//                   Dep Time / Dep Date
//                 </span>

//                 <span>
//                   Arr Time / Arr Date
//                 </span>

//                 <span>
//                   Duration
//                 </span>

//                 <span>
//                   Fare Class
//                 </span>

//               </div>


//               <div className="flight-table-body">


//                 <div className="carrier-cell">

//                   <div className="mini-airline-icon">
//                     <FaPlaneDeparture />
//                   </div>

//                   <strong>
//                     {airline}
//                   </strong>

//                   <small>
//                     {getDate(departureDate)}
//                   </small>

//                 </div>


//                 <div>
//                   <strong>
//                     {flightNumber}
//                   </strong>
//                 </div>


//                 <div>

//                   <strong>
//                     {fromCity}
//                   </strong>

//                   <small>
//                     {from}
//                   </small>

//                   <small>
//                     Terminal {departureTerminal}
//                   </small>

//                 </div>


//                 <div>

//                   <strong>
//                     {toCity}
//                   </strong>

//                   <small>
//                     {to}
//                   </small>

//                   <small>
//                     Terminal {arrivalTerminal}
//                   </small>

//                 </div>


//                 <div>

//                   <strong>
//                     {getTime(departureTime)}
//                   </strong>

//                   <small>
//                     {getDate(departureDate)}
//                   </small>

//                 </div>


//                 <div>

//                   <strong>
//                     {getTime(arrivalTime)}
//                   </strong>

//                   <small>
//                     {getDate(arrivalDate)}
//                   </small>

//                 </div>


//                 <div>

//                   <strong>
//                     {duration}
//                   </strong>

//                   <small>
//                     Non-stop
//                   </small>

//                 </div>


//                 <div>

//                   <strong>
//                     {fareClass}
//                   </strong>

//                   <small>
//                     {refundStatus}
//                   </small>

//                 </div>

//               </div>

//             </div>


//             <div className="important-flight-note">

//               <strong>
//                 ● IMPORTANT:
//               </strong>

//               Check-in counters close 60 minutes
//               prior to departure. All times are local time.

//             </div>

//           </section>


//           {/* =================================================
//               PASSENGER DETAILS
//           ================================================= */}

//           <section className="ticket-section">

//             <div className="section-title orange">
//               Passenger Details
//             </div>


//             {passengers.length > 0 ? (

//               <div className="passenger-table">

//                 <div className="passenger-head">

//                   <span>
//                     Passenger Name
//                   </span>

//                   <span>
//                     Type
//                   </span>

//                   <span>
//                     Sector
//                   </span>

//                   <span>
//                     Airline PNR
//                   </span>

//                   <span>
//                     Ticket Number
//                   </span>

//                   <span>
//                     Baggage
//                   </span>

//                   <span>
//                     Status
//                   </span>

//                 </div>


//                 {passengers.map(
//                   (passenger, index) => {

//                     const passengerName =
//                       firstValue(
//                         passenger.name,
//                         passenger.fullName,
//                         passenger.passengerName,
//                         passenger.firstName
//                           ? `${passenger.firstName} ${passenger.lastName || ""}`
//                           : `Passenger ${index + 1}`
//                       );


//                     const passengerType =
//                       firstValue(
//                         passenger.type,
//                         passenger.passengerType,
//                         "Adult"
//                       );


//                     const passport =
//                       firstValue(
//                         passenger.passport,
//                         passenger.passportNumber,
//                         ""
//                       );


//                     const dob =
//                       firstValue(
//                         passenger.dob,
//                         passenger.dateOfBirth,
//                         ""
//                       );


//                     const passengerBaggage =
//                       firstValue(
//                         passenger.baggage,
//                         passenger.baggageAllowance,
//                         baggage
//                       );


//                     return (

//                       <div
//                         className="passenger-row-ticket"
//                         key={
//                           passenger._id ||
//                           passenger.id ||
//                           index
//                         }
//                       >

//                         <div className="passenger-name">

//                           <strong>
//                             {passengerName}
//                           </strong>

//                           {passport && (
//                             <small>
//                               Passport: {passport}
//                             </small>
//                           )}

//                           {dob && (
//                             <small>
//                               DOB: {dob}
//                             </small>
//                           )}

//                         </div>


//                         <div>
//                           {passengerType}
//                         </div>


//                         <div>
//                           ({from}) - ({to})
//                         </div>


//                         <div className="blue-text">
//                           {airlinePnr}
//                         </div>


//                         <div>
//                           {firstValue(
//                             passenger.ticketNumber,
//                             passenger.ticketNo,
//                             ticketNumber
//                           )}
//                         </div>


//                         <div>
//                           {passengerBaggage}
//                         </div>


//                         <div>

//                           <span className="status-confirmed">
//                             Confirmed
//                           </span>

//                         </div>

//                       </div>

//                     );

//                   }
//                 )}

//               </div>

//             ) : (

//               <div className="no-passenger">
//                 Passenger details unavailable.
//               </div>

//             )}


//             <p className="passenger-note">
//               You have been informed that you have to carry
//               valid identity papers during your journey.
//               Please check your flight details before travel.
//             </p>

//           </section>


//           {/* =================================================
//               FARE + PAYMENT
//           ================================================= */}

//           <section className="fare-payment">


//             {/* FARE */}

//             <div className="fare-box">

//               <div className="box-title">
//                 Fare Summary
//               </div>


//               <div className="fare-row">

//                 <span>
//                   Flight Fare
//                 </span>

//                 <strong>
//                   <Price value={flightFare} />
//                 </strong>

//               </div>


//               <div className="fare-row">

//                 <span>
//                   Seat Fee
//                 </span>

//                 <strong>
//                   <Price value={seatPrice} />
//                 </strong>

//               </div>


//               <div className="fare-row">

//                 <span>
//                   Meal Fee
//                 </span>

//                 <strong>
//                   <Price value={mealPrice} />
//                 </strong>

//               </div>


//               <div className="fare-row">

//                 <span>
//                   Baggage Fee
//                 </span>

//                 <strong>
//                   <Price value={baggagePrice} />
//                 </strong>

//               </div>


//               <div className="fare-row">

//                 <span>
//                   Taxes
//                 </span>

//                 <strong>
//                   <Price value={taxes} />
//                 </strong>

//               </div>


//               <div className="fare-row">

//                 <span>
//                   Convenience Fee
//                 </span>

//                 <strong>
//                   <Price value={convenienceFee} />
//                 </strong>

//               </div>


//               {discount > 0 && (

//                 <div className="fare-row discount">

//                   <span>
//                     Discount
//                   </span>

//                   <strong>
//                     {showPrice
//                       ? `- ₹ ${money(discount)}`
//                       : "••••••"}
//                   </strong>

//                 </div>

//               )}


//               <div className="fare-total">

//                 <span>
//                   Total
//                 </span>

//                 <strong>
//                   <Price value={finalTotal} />
//                 </strong>

//               </div>

//             </div>


//             {/* PAYMENT */}

//             <div className="payment-box">

//               <div className="box-title">
//                 Payment Summary
//               </div>


//               <div className="payment-row">

//                 <span>
//                   Payment Type
//                 </span>

//                 <strong>
//                   {paymentMethod}
//                 </strong>

//               </div>


//               <div className="payment-row">

//                 <span>
//                   Amount
//                 </span>

//                 <strong>
//                   <Price value={finalTotal} />
//                 </strong>

//               </div>


//               <div className="payment-row">

//                 <span>
//                   Payment Date
//                 </span>

//                 <strong>
//                   {paymentDate
//                     ? getDate(paymentDate)
//                     : "—"}
//                 </strong>

//               </div>


//               <div className="payment-row">

//                 <span>
//                   Payment Status
//                 </span>

//                 <strong className="paid">
//                   {paymentStatus}
//                 </strong>

//               </div>


//               <div className="payment-row">

//                 <span>
//                   Payment Mode
//                 </span>

//                 <strong>
//                   {paymentMethod}
//                 </strong>

//               </div>

//             </div>

//           </section>


//           {/* =================================================
//               QR SECTION
//           ================================================= */}

//           <section className="qr-section">

//             <div className="promo">

//               <div className="promo-icon">
//                 <FaPlaneDeparture />
//               </div>

//               <div>

//                 <h2>
//                   Saiyed Travels
//                 </h2>

//                 <p>
//                   Your Journey, Our Responsibility
//                 </p>

//                 <small>
//                   Flight Booking • Visa • Holidays
//                 </small>

//               </div>

//             </div>


//             <div className="qr-box">

//               <div className="qr-title">
//                 <FaQrcode />
//                 Booking Verification
//               </div>

//               <img
//                 src={qrCodeUrl}
//                 alt="Booking QR Code"
//                 loading="eager"
//               />

//               <span>
//                 Scan to verify booking
//               </span>

//             </div>

//           </section>


//           {/* =================================================
//               IMPORTANT INFORMATION
//           ================================================= */}

//           <section className="important-section">

//             <h3>
//               Important Information
//             </h3>

//             <p>
//               1. Please carry valid government issued
//               identity proof during your journey.
//             </p>

//             <p>
//               2. Please reach the airport before the
//               recommended check-in time.
//             </p>

//             <p>
//               3. Baggage allowance is subject to airline
//               rules and ticket conditions.
//             </p>

//             <p>
//               4. Please verify all flight details before
//               travelling.
//             </p>

//           </section>


//           {/* =================================================
//               FOOTER
//           ================================================= */}

//           <footer className="ticket-footer">

//             <div>

//               <strong>
//                 Saiyed Travels
//               </strong>

//               <span>
//                 Flight Booking & Travel Services
//               </span>

//             </div>


//             <div>

//               <span>
//                 Booking ID: {bookingId}
//               </span>

//               <span>
//                 PNR: {airlinePnr}
//               </span>

//             </div>

//           </footer>


//         </main>

//       </div>

//     </div>
//   );
// }


// export default Success;













import "./Success.css";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  FaPlaneDeparture,
  FaCheckCircle,
  FaDownload,
  FaPrint,
  FaHome,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


function Success() {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // ROUTER STATE
  // =====================================================

  const routerState = location.state || {};

  /*
    IMPORTANT:

    MyBookings se:
    navigate("/success", {
      state: {
        booking: booking,
        fromMyBookings: true
      }
    })

    aur Payment/Booking se:
    navigate("/success", {
      state: booking
    })

    dono format support honge.
  */

  const booking = useMemo(() => {
    if (
      routerState?.booking &&
      typeof routerState.booking === "object"
    ) {
      return routerState.booking;
    }

    return routerState;
  }, [routerState]);


  // =====================================================
  // PRICE SHOW / HIDE
  // =====================================================

  const [showPrice, setShowPrice] =
    useState(false);


  // =====================================================
  // AUTO DOWNLOAD / PRINT
  // =====================================================

  useEffect(() => {
    if (!routerState?.autoDownload) {
      return;
    }

    const timer = setTimeout(() => {
      window.print();
    }, 900);

    return () => clearTimeout(timer);
  }, [routerState?.autoDownload]);


  // =====================================================
  // FLIGHT
  // =====================================================

  const flight =
    booking?.flight &&
    typeof booking.flight === "object"
      ? booking.flight
      : {};


  // =====================================================
  // PASSENGERS
  // =====================================================

  const passengers = useMemo(() => {
    if (
      Array.isArray(booking?.passengers) &&
      booking.passengers.length > 0
    ) {
      return booking.passengers;
    }

    if (
      Array.isArray(booking?.travellersList) &&
      booking.travellersList.length > 0
    ) {
      return booking.travellersList;
    }

    if (
      Array.isArray(booking?.travellers) &&
      booking.travellers.length > 0
    ) {
      return booking.travellers;
    }

    if (booking?.passenger) {
      return [booking.passenger];
    }

    return [];
  }, [booking]);


  // =====================================================
  // SEATS
  // =====================================================

  const seats = useMemo(() => {
    if (
      Array.isArray(booking?.seats) &&
      booking.seats.length > 0
    ) {
      return booking.seats;
    }

    if (booking?.seat) {
      return [booking.seat];
    }

    return [];
  }, [booking]);


  // =====================================================
  // MEALS
  // =====================================================

  const meals = useMemo(() => {
    if (
      Array.isArray(booking?.meals) &&
      booking.meals.length > 0
    ) {
      return booking.meals;
    }

    if (booking?.meal) {
      return [booking.meal];
    }

    return [];
  }, [booking]);


  // =====================================================
  // BAGGAGE
  // =====================================================

  const baggages = useMemo(() => {
    if (
      Array.isArray(booking?.baggages) &&
      booking.baggages.length > 0
    ) {
      return booking.baggages;
    }

    if (booking?.baggage) {
      return [booking.baggage];
    }

    return [];
  }, [booking]);


  // =====================================================
  // BOOKING ID
  // =====================================================

  const bookingId =
    booking?.bookingId ||
    booking?._id ||
    "ST-PENDING";


  // =====================================================
  // PNR
  // =====================================================

  const pnr =
    booking?.pnr ||
    booking?.PNR ||
    "N/A";


  // =====================================================
  // FLIGHT BASIC DATA
  // =====================================================

  const airline =
    flight?.airline ||
    booking?.airline ||
    "Airline";


  const flightNo =
    flight?.flightNo ||
    flight?.flightNumber ||
    booking?.flightNo ||
    "N/A";


  // =====================================================
  // ROUTE
  // =====================================================

  const fromCode =
    flight?.fromCode ||
    booking?.fromCode ||
    flight?.from ||
    "N/A";


  const toCode =
    flight?.toCode ||
    booking?.toCode ||
    flight?.to ||
    "N/A";


  const fromCity =
    flight?.fromCity ||
    booking?.fromCity ||
    flight?.from ||
    "N/A";


  const toCity =
    flight?.toCity ||
    booking?.toCity ||
    flight?.to ||
    "N/A";


  const fromAirport =
    flight?.fromAirport ||
    booking?.fromAirport ||
    "";


  const toAirport =
    flight?.toAirport ||
    booking?.toAirport ||
    "";


  // =====================================================
  // DATE / TIME
  // =====================================================

  const departureDate =
    flight?.departureDate ||
    booking?.departureDate ||
    flight?.date ||
    booking?.date ||
    "N/A";


  const arrivalDate =
    flight?.arrivalDate ||
    booking?.arrivalDate ||
    departureDate;


  const departureTime =
    flight?.departureTime ||
    booking?.departureTime ||
    flight?.departure ||
    "N/A";


  const arrivalTime =
    flight?.arrivalTime ||
    booking?.arrivalTime ||
    flight?.arrival ||
    "N/A";


  // =====================================================
  // OTHER FLIGHT DETAILS
  // =====================================================

  const duration =
    flight?.duration ||
    booking?.duration ||
    "N/A";


  const stops =
    flight?.stops ||
    booking?.stops ||
    "Non-stop";


  const aircraft =
    flight?.aircraft ||
    booking?.aircraft ||
    "N/A";


  const departureTerminal =
    flight?.departureTerminal ||
    booking?.departureTerminal ||
    "N/A";


  const arrivalTerminal =
    flight?.arrivalTerminal ||
    booking?.arrivalTerminal ||
    "N/A";


  const cabin =
    flight?.cabin ||
    flight?.cabinClass ||
    flight?.selectedCabin ||
    booking?.cabin ||
    "Economy";


  const airlineLogo =
    flight?.logo ||
    booking?.airlineLogo ||
    "";


  // =====================================================
  // PASSENGER COUNTS
  // =====================================================

  const adultCount =
    Number(booking?.adults) ||
    Number(booking?.travellers?.adults) ||
    passengers.filter(
      (item) =>
        String(
          item?.type || "Adult"
        ).toLowerCase() === "adult"
    ).length;


  const childCount =
    Number(booking?.children) ||
    Number(booking?.travellers?.children) ||
    passengers.filter(
      (item) =>
        String(
          item?.type || ""
        ).toLowerCase() === "child"
    ).length;


  const infantCount =
    Number(booking?.infants) ||
    Number(booking?.travellers?.infants) ||
    passengers.filter(
      (item) =>
        String(
          item?.type || ""
        ).toLowerCase() === "infant"
    ).length;


  // =====================================================
  // PRICE HELPERS
  // =====================================================

  const numberValue = (value) => {
    const number = Number(value);
    return Number.isFinite(number)
      ? number
      : 0;
  };


  // =====================================================
  // FARE
  // =====================================================

  const flightFare =
    numberValue(
      booking?.flightFare
    ) ||
    numberValue(
      booking?.priceDetails?.flightFare
    ) ||
    numberValue(
      flight?.finalPrice
    ) ||
    numberValue(
      flight?.price
    );


  const seatFare =
    numberValue(
      booking?.seatFare
    ) ||
    numberValue(
      booking?.seatPrice
    ) ||
    numberValue(
      booking?.priceDetails?.seatCharges
    ) ||
    seats.reduce(
      (sum, item) => {
        if (
          item &&
          typeof item === "object"
        ) {
          return (
            sum +
            numberValue(
              item?.price
            )
          );
        }

        return sum;
      },
      0
    );


  const mealFare =
    numberValue(
      booking?.mealFare
    ) ||
    numberValue(
      booking?.mealPrice
    ) ||
    numberValue(
      booking?.priceDetails?.mealCharges
    ) ||
    meals.reduce(
      (sum, item) =>
        sum +
        numberValue(
          item?.price
        ),
      0
    );


  const baggageFare =
    numberValue(
      booking?.baggageFare
    ) ||
    numberValue(
      booking?.baggagePrice
    ) ||
    numberValue(
      booking?.priceDetails?.baggageCharges
    ) ||
    baggages.reduce(
      (sum, item) =>
        sum +
        numberValue(
          item?.price
        ),
      0
    );


  const taxes =
    numberValue(
      booking?.taxes
    ) ||
    numberValue(
      booking?.tax
    );


  const convenienceFee =
    numberValue(
      booking?.convenienceFee
    );


  const discount =
    numberValue(
      booking?.discount
    );


  // =====================================================
  // TOTAL
  // =====================================================

  const calculatedTotal =
    flightFare +
    seatFare +
    mealFare +
    baggageFare +
    taxes +
    convenienceFee -
    discount;


  const finalTotal =
    numberValue(
      booking?.total
    ) ||
    numberValue(
      booking?.totalAmount
    ) ||
    numberValue(
      booking?.finalPrice
    ) ||
    numberValue(
      booking?.priceDetails?.total
    ) ||
    calculatedTotal;


  // =====================================================
  // PAYMENT
  // =====================================================

  const paymentMethod =
    booking?.paymentMethod ||
    "UPI";


  const paymentStatus =
    booking?.paymentStatus ||
    "Paid";


  const bookingStatus =
    booking?.bookingStatus ||
    booking?.status ||
    "Confirmed";


  // =====================================================
  // PASSENGER HELPERS
  // =====================================================

  const getPassengerName = (item) => {
    if (item?.name) {
      return item.name;
    }

    const name =
      `${item?.firstName || ""} ${
        item?.lastName || ""
      }`.trim();

    return name || "Passenger";
  };


  const getPassengerType = (item) => {
    const type =
      item?.type ||
      "Adult";

    return (
      String(type)
        .charAt(0)
        .toUpperCase() +
      String(type).slice(1)
    );
  };


  const getPassengerSeat = (
    item,
    index
  ) => {
    const type =
      String(
        item?.type || "Adult"
      ).toLowerCase();

    if (type === "infant") {
      return "No Seat";
    }

    const seat =
      item?.seat ||
      item?.seatNumber;

    if (seat) {
      if (
        typeof seat === "object"
      ) {
        return (
          seat?.seatNumber ||
          seat?.seat ||
          "N/A"
        );
      }

      return seat;
    }

    const selectedSeat =
      seats[index];

    if (
      selectedSeat &&
      typeof selectedSeat === "object"
    ) {
      return (
        selectedSeat?.seatNumber ||
        selectedSeat?.seat ||
        "N/A"
      );
    }

    return (
      selectedSeat ||
      "N/A"
    );
  };


  const getPassengerMeal = (
    item,
    index
  ) => {
    if (
      typeof item?.meal === "object"
    ) {
      return (
        item.meal?.name ||
        "No Meal"
      );
    }

    return (
      item?.meal ||
      item?.mealName ||
      meals[index]?.name ||
      meals[0]?.name ||
      "No Meal"
    );
  };


  const baggageText =
    baggages[0]?.weight ||
    flight?.checkinBaggage ||
    booking?.checkinBaggage ||
    "15 KG";


  const getPassengerBaggage = (
    item,
    index
  ) => {
    if (
      typeof item?.baggage === "object"
    ) {
      return (
        item.baggage?.weight ||
        baggageText
      );
    }

    return (
      item?.baggage ||
      item?.baggageWeight ||
      baggages[index]?.weight ||
      baggageText
    );
  };


  // =====================================================
  // QR CODE
  // =====================================================

  const qrData = encodeURIComponent(
    JSON.stringify({
      bookingId,
      pnr,
      passenger: passengers.map(
        (item) =>
          getPassengerName(item)
      ),
      airline,
      flightNo,
      from: fromCode,
      to: toCode,
      seats: seats.map(
        (item) =>
          typeof item === "object"
            ? (
                item?.seatNumber ||
                item?.seat ||
                ""
              )
            : item
      ),
    })
  );


  const qrCodeUrl =
    `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrData}`;


  // =====================================================
  // DATE
  // =====================================================

  const bookingDate =
    booking?.createdAt
      ? new Date(
          booking.createdAt
        ).toLocaleDateString(
          "en-IN",
          {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }
        )
      : new Date().toLocaleDateString(
          "en-IN",
          {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }
        );


  // =====================================================
  // PRINT / PDF
  // =====================================================

  const handlePrint = () => {
    window.print();
  };


  const handleDownload = () => {
    window.print();
  };


  // =====================================================
  // NO BOOKING
  // =====================================================

  if (
    !booking ||
    !booking.flight
  ) {
    return (
      <>
        <Navbar />

        <section className="success-page">
          <div className="no-booking">
            <div className="no-booking-icon">
              <FaPlaneDeparture />
            </div>

            <h2>
              No Booking Found ✈️
            </h2>

            <p>
              Booking information is not
              available. Please open the
              ticket from My Bookings again.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate("/my-bookings")
              }
            >
              <FaHome />
              My Bookings
            </button>
          </div>
        </section>

        <Footer />
      </>
    );
  }


  // =====================================================
  // UI
  // =====================================================

  return (
    <>
      <Navbar />

      <main className="success-page">

        {/* =================================================
                    SUCCESS MESSAGE
        ================================================= */}

        <div className="success-message">

          <div className="success-icon">
            <FaCheckCircle />
          </div>

          <div>
            <h1>
              Booking Successful
            </h1>

            <p>
              Your flight ticket has been
              confirmed successfully.
            </p>
          </div>

        </div>


        {/* =================================================
                    TICKET
        ================================================= */}

        <div
          className="eticket"
          id="ticket-print-area"
        >

          {/* =================================================
                      HEADER
          ================================================= */}

          <div className="eticket-header">

            <div className="saiyed-brand">

              <div className="saiyed-logo">
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


            <div className="airline-brand">

              {airlineLogo ? (
                <img
                  src={airlineLogo}
                  alt={airline}
                />
              ) : (
                <div className="airline-no-logo">
                  <FaPlaneDeparture />
                </div>
              )}

              <div>
                <strong>
                  {airline}
                </strong>

                <span>
                  {flightNo}
                </span>
              </div>

            </div>

          </div>


          {/* =================================================
                      BOOKING DETAILS
          ================================================= */}

          <section className="ticket-section">

            <div className="section-title blue">
              Booking Details — Confirmed
            </div>

            <div className="details-table booking-table">

              <div className="table-heading">
                Booking ID
              </div>

              <div className="table-heading">
                GDS PNR
              </div>

              <div className="table-heading">
                Airline PNR
              </div>

              <div className="table-heading">
                Booking Date
              </div>


              <div className="table-value">
                {bookingId}
              </div>

              <div className="table-value">
                {pnr}
              </div>

              <div className="table-value pnr">
                {pnr}
              </div>

              <div className="table-value">
                {bookingDate}
              </div>

            </div>

          </section>


          {/* =================================================
                      FLIGHT DETAILS
          ================================================= */}

          <section className="ticket-section">

            <div className="section-title orange">
              Flight Details
            </div>

            <div className="flight-note">
              Subject to prior sale, price and
              schedule changes. Please check your
              flight details before travelling.
            </div>

            <div className="route-title">
              {fromCode} → {toCode}
            </div>


            <div className="flight-table">

              <div className="flight-heading">
                Carrier / Date
              </div>

              <div className="flight-heading">
                Flight No
              </div>

              <div className="flight-heading">
                Departure
              </div>

              <div className="flight-heading">
                Arrival
              </div>

              <div className="flight-heading">
                Departure Time
              </div>

              <div className="flight-heading">
                Arrival Time
              </div>

              <div className="flight-heading">
                Duration
              </div>

              <div className="flight-heading">
                Class
              </div>


              <div className="flight-value carrier-cell">

                {airlineLogo ? (
                  <img
                    src={airlineLogo}
                    alt={airline}
                  />
                ) : (
                  <FaPlaneDeparture />
                )}

                <span>
                  {airline}
                </span>

                <small>
                  {departureDate}
                </small>

              </div>


              <div className="flight-value">
                <strong>
                  {flightNo}
                </strong>

                <small>
                  {aircraft}
                </small>
              </div>


              <div className="flight-value">
                <strong>
                  {fromCity}
                </strong>

                <span>
                  {fromCode}
                </span>

                <small>
                  {fromAirport}
                </small>

                <small>
                  Terminal {departureTerminal}
                </small>
              </div>


              <div className="flight-value">
                <strong>
                  {toCity}
                </strong>

                <span>
                  {toCode}
                </span>

                <small>
                  {toAirport}
                </small>

                <small>
                  Terminal {arrivalTerminal}
                </small>
              </div>


              <div className="flight-value">
                <strong>
                  {departureTime}
                </strong>

                <small>
                  {departureDate}
                </small>
              </div>


              <div className="flight-value">
                <strong>
                  {arrivalTime}
                </strong>

                <small>
                  {arrivalDate}
                </small>
              </div>


              <div className="flight-value">
                <strong>
                  {duration}
                </strong>

                <small>
                  {stops}
                </small>
              </div>


              <div className="flight-value">
                <strong>
                  {cabin}
                </strong>

                <small>
                  {flight?.refundable
                    ? "Refundable"
                    : "Non Refundable"}
                </small>
              </div>

            </div>


            <div className="important-flight-note">
              <strong>
                ● IMPORTANT:
              </strong>{" "}
              Check-in counters close 60 minutes
              prior to departure. All times are
              local time.
            </div>

          </section>


          {/* =================================================
                      PASSENGER DETAILS
          ================================================= */}

          <section className="ticket-section">

            <div className="section-title orange">
              Passenger Details
            </div>

            <div className="passenger-count-line">

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


            <div className="passenger-table">

              <div className="passenger-heading">
                Passenger Name
              </div>

              <div className="passenger-heading">
                Type
              </div>

              <div className="passenger-heading">
                Sector
              </div>

              <div className="passenger-heading">
                PNR
              </div>

              <div className="passenger-heading">
                Seat
              </div>

              <div className="passenger-heading">
                Meal
              </div>

              <div className="passenger-heading">
                Baggage
              </div>


              {passengers.map(
                (item, index) => (
                  <div
                    key={
                      item?._id ||
                      `${getPassengerName(item)}-${index}`
                    }
                    className="passenger-row"
                  >

                    <div className="passenger-value">

                      <strong>
                        {getPassengerName(
                          item
                        ).toUpperCase()}
                      </strong>

                      <small>
                        DOB:{" "}
                        {item?.dob || "N/A"}
                      </small>

                      <small>
                        Gender:{" "}
                        {item?.gender || "N/A"}
                      </small>

                    </div>


                    <div className="passenger-value">
                      {getPassengerType(item)}
                    </div>


                    <div className="passenger-value">
                      {fromCode} - {toCode}
                    </div>


                    <div className="passenger-value pnr">
                      {pnr}
                    </div>


                    <div className="passenger-value">
                      <strong>
                        {getPassengerSeat(
                          item,
                          index
                        )}
                      </strong>
                    </div>


                    <div className="passenger-value">
                      {getPassengerMeal(
                        item,
                        index
                      )}
                    </div>


                    <div className="passenger-value">
                      {getPassengerBaggage(
                        item,
                        index
                      )}
                    </div>

                  </div>
                )
              )}

            </div>


            <div className="passenger-note">
              You have been informed that you
              have to carry valid identity papers
              during your journey. Please check
              your flight details before travel.
            </div>

          </section>


          {/* =================================================
                      FARE + PAYMENT
          ================================================= */}

          {showPrice && (
            <section className="fare-payment-section">

              {/* FARE */}

              <div className="fare-summary">

                <div className="section-title orange">
                  Fare Summary
                </div>


                <div className="fare-row">
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


                <div className="fare-row">
                  <span>
                    Seat Fee
                  </span>

                  <strong>
                    ₹{" "}
                    {seatFare.toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>


                <div className="fare-row">
                  <span>
                    Meal Fee
                  </span>

                  <strong>
                    ₹{" "}
                    {mealFare.toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>


                <div className="fare-row">
                  <span>
                    Baggage Fee
                  </span>

                  <strong>
                    ₹{" "}
                    {baggageFare.toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>


                <div className="fare-row">
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


                <div className="fare-row">
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
                  <div className="fare-row discount">
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


                <div className="fare-total">
                  <span>
                    Total
                  </span>

                  <strong>
                    ₹{" "}
                    {finalTotal.toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>

              </div>


              {/* PAYMENT */}

              <div className="payment-summary">

                <div className="section-title orange">
                  Payment Summary
                </div>


                <div className="payment-row">
                  <span>
                    Payment Type
                  </span>

                  <strong>
                    {paymentMethod}
                  </strong>
                </div>


                <div className="payment-row">
                  <span>
                    Amount
                  </span>

                  <strong>
                    ₹{" "}
                    {finalTotal.toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>


                <div className="payment-row">
                  <span>
                    Payment Date
                  </span>

                  <strong>
                    {bookingDate}
                  </strong>
                </div>


                <div className="payment-row">
                  <span>
                    Payment Status
                  </span>

                  <strong className="paid">
                    {paymentStatus}
                  </strong>
                </div>


                <div className="payment-row">
                  <span>
                    Booking Status
                  </span>

                  <strong className="confirmed">
                    {bookingStatus}
                  </strong>
                </div>

              </div>

            </section>
          )}


          {/* =================================================
                      QR + BRAND
          ================================================= */}

          <section className="qr-brand-section">

            <div className="saiyed-promo">

              <div className="promo-logo">
                <FaPlaneDeparture />
              </div>

              <div>
                <h2>
                  Saiyed Travels
                </h2>

                <p>
                  Your Journey, Our Responsibility
                </p>

                <span>
                  Flight Booking • Visa • Holidays
                </span>
              </div>

            </div>


            <div className="ticket-qr">

              <img
                src={qrCodeUrl}
                alt="Booking QR Code"
              />

              <small>
                Scan to verify booking
              </small>

            </div>

          </section>


          {/* =================================================
                      IMPORTANT INFORMATION
          ================================================= */}

          <section className="terms-section">

            <h3>
              Important Information
            </h3>

            <p>
              1. Please carry valid government
              issued identity proof during your
              journey.
            </p>

            <p>
              2. Please reach the airport before
              the recommended check-in time.
            </p>

            <p>
              3. Baggage allowance is subject to
              airline rules and ticket conditions.
            </p>

            <p>
              4. Please verify all passenger and
              flight details before travelling.
            </p>

          </section>


          {/* =================================================
                      FOOTER
          ================================================= */}

          <footer className="eticket-footer">

            <div>
              <strong>
                Saiyed Travels
              </strong>

              <span>
                Flight Booking & Travel Services
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

          </footer>

        </div>


        {/* =================================================
                    ACTION BUTTONS
        ================================================= */}

        <div className="success-buttons">

          <button
            type="button"
            className="price-btn"
            onClick={() =>
              setShowPrice(
                (previous) => !previous
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


          <button
            type="button"
            className="download-btn"
            onClick={handleDownload}
          >
            <FaDownload />
            Download / PDF
          </button>


          <button
            type="button"
            className="print-btn"
            onClick={handlePrint}
          >
            <FaPrint />
            Print Ticket
          </button>


          <button
            type="button"
            className="home-btn"
            onClick={() =>
              navigate("/my-bookings")
            }
          >
            <FaHome />
            My Bookings
          </button>

        </div>

      </main>

      <Footer />
    </>
  );
}


export default Success;