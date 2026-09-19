// import "./Success.css";

// import {
//   useEffect,
//   useMemo,
//   useState,
// } from "react";

// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import {
//   FaPlaneDeparture,
//   FaCheckCircle,
//   FaDownload,
//   FaPrint,
//   FaHome,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";

// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";


// function Success() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // =====================================================
//   // ROUTER STATE
//   // =====================================================

//   const routerState = location.state || {};

//   /*
//     IMPORTANT:

//     MyBookings se:
//     navigate("/success", {
//       state: {
//         booking: booking,
//         fromMyBookings: true
//       }
//     })

//     aur Payment/Booking se:
//     navigate("/success", {
//       state: booking
//     })

//     dono format support honge.
//   */

//   const booking = useMemo(() => {
//     if (
//       routerState?.booking &&
//       typeof routerState.booking === "object"
//     ) {
//       return routerState.booking;
//     }

//     return routerState;
//   }, [routerState]);


//   // =====================================================
//   // PRICE SHOW / HIDE
//   // =====================================================

//   const [showPrice, setShowPrice] =
//     useState(false);


//   // =====================================================
//   // AUTO DOWNLOAD / PRINT
//   // =====================================================

//   useEffect(() => {
//     if (!routerState?.autoDownload) {
//       return;
//     }

//     const timer = setTimeout(() => {
//       window.print();
//     }, 900);

//     return () => clearTimeout(timer);
//   }, [routerState?.autoDownload]);


//   // =====================================================
//   // FLIGHT
//   // =====================================================

//   const flight =
//     booking?.flight &&
//     typeof booking.flight === "object"
//       ? booking.flight
//       : {};


//   // =====================================================
//   // PASSENGERS
//   // =====================================================

//   const passengers = useMemo(() => {
//     if (
//       Array.isArray(booking?.passengers) &&
//       booking.passengers.length > 0
//     ) {
//       return booking.passengers;
//     }

//     if (
//       Array.isArray(booking?.travellersList) &&
//       booking.travellersList.length > 0
//     ) {
//       return booking.travellersList;
//     }

//     if (
//       Array.isArray(booking?.travellers) &&
//       booking.travellers.length > 0
//     ) {
//       return booking.travellers;
//     }

//     if (booking?.passenger) {
//       return [booking.passenger];
//     }

//     return [];
//   }, [booking]);


//   // =====================================================
//   // SEATS
//   // =====================================================

//   const seats = useMemo(() => {
//     if (
//       Array.isArray(booking?.seats) &&
//       booking.seats.length > 0
//     ) {
//       return booking.seats;
//     }

//     if (booking?.seat) {
//       return [booking.seat];
//     }

//     return [];
//   }, [booking]);


//   // =====================================================
//   // MEALS
//   // =====================================================

//   const meals = useMemo(() => {
//     if (
//       Array.isArray(booking?.meals) &&
//       booking.meals.length > 0
//     ) {
//       return booking.meals;
//     }

//     if (booking?.meal) {
//       return [booking.meal];
//     }

//     return [];
//   }, [booking]);


//   // =====================================================
//   // BAGGAGE
//   // =====================================================

//   const baggages = useMemo(() => {
//     if (
//       Array.isArray(booking?.baggages) &&
//       booking.baggages.length > 0
//     ) {
//       return booking.baggages;
//     }

//     if (booking?.baggage) {
//       return [booking.baggage];
//     }

//     return [];
//   }, [booking]);


  

  

  


//   // =====================================================
//   // BOOKING ID
//   // =====================================================

//   const bookingId =
//     booking?.bookingId ||
//     booking?._id ||
//     "ST-PENDING";


//   // =====================================================
//   // PNR
//   // =====================================================

//   const pnr =
//     booking?.pnr ||
//     booking?.PNR ||
//     "N/A";


//   // =====================================================
//   // FLIGHT BASIC DATA
//   // =====================================================

//   const airline =
//     flight?.airline ||
//     booking?.airline ||
//     "Airline";


//   const flightNo =
//     flight?.flightNo ||
//     flight?.flightNumber ||
//     booking?.flightNo ||
//     "N/A";


//   // =====================================================
//   // ROUTE
//   // =====================================================

//   const fromCode =
//     flight?.fromCode ||
//     booking?.fromCode ||
//     flight?.from ||
//     "N/A";


//   const toCode =
//     flight?.toCode ||
//     booking?.toCode ||
//     flight?.to ||
//     "N/A";


//   const fromCity =
//     flight?.fromCity ||
//     booking?.fromCity ||
//     flight?.from ||
//     "N/A";


//   const toCity =
//     flight?.toCity ||
//     booking?.toCity ||
//     flight?.to ||
//     "N/A";


//   const fromAirport =
//     flight?.fromAirport ||
//     booking?.fromAirport ||
//     "";


//   const toAirport =
//     flight?.toAirport ||
//     booking?.toAirport ||
//     "";


//   // =====================================================
//   // DATE / TIME
//   // =====================================================

//   const departureDate =
//     flight?.departureDate ||
//     booking?.departureDate ||
//     flight?.date ||
//     booking?.date ||
//     "N/A";


//   const arrivalDate =
//     flight?.arrivalDate ||
//     booking?.arrivalDate ||
//     departureDate;


//   const departureTime =
//     flight?.departureTime ||
//     booking?.departureTime ||
//     flight?.departure ||
//     "N/A";


//   const arrivalTime =
//     flight?.arrivalTime ||
//     booking?.arrivalTime ||
//     flight?.arrival ||
//     "N/A";


//   // =====================================================
//   // OTHER FLIGHT DETAILS
//   // =====================================================

//   const duration =
//     flight?.duration ||
//     booking?.duration ||
//     "N/A";


//   const stops =
//     flight?.stops ||
//     booking?.stops ||
//     "Non-stop";


//   const aircraft =
//     flight?.aircraft ||
//     booking?.aircraft ||
//     "N/A";


//   const departureTerminal =
//     flight?.departureTerminal ||
//     booking?.departureTerminal ||
//     "N/A";


//   const arrivalTerminal =
//     flight?.arrivalTerminal ||
//     booking?.arrivalTerminal ||
//     "N/A";


//   const cabin =
//     flight?.cabin ||
//     flight?.cabinClass ||
//     flight?.selectedCabin ||
//     booking?.cabin ||
//     "Economy";


//   // const airlineLogo =
//   //   flight?.logo ||
//   //   booking?.airlineLogo ||
//   //   "";


//   // =====================================================
// // AIRLINE LOGOS
// // =====================================================

// const airlineLogos = {
//   indigo:
//     "https://images.kiwi.com/airlines/64/6E.png",

//   "air india":
//     "https://images.kiwi.com/airlines/64/AI.png",

//   "air india express":
//     "https://images.kiwi.com/airlines/64/IX.png",

//   spicejet:
//     "https://images.kiwi.com/airlines/64/SG.png",

//   vistara:
//     "https://images.kiwi.com/airlines/64/UK.png",

//   akasa:
//     "https://images.kiwi.com/airlines/64/QP.png",

//   "akasa air":
//     "https://images.kiwi.com/airlines/64/QP.png",

//   emirates:
//     "https://images.kiwi.com/airlines/64/EK.png",

//   "qatar airways":
//     "https://images.kiwi.com/airlines/64/QR.png",

//   "etihad airways":
//     "https://images.kiwi.com/airlines/64/EY.png",

//   "oman air":
//     "https://images.kiwi.com/airlines/64/WY.png",

//   "saudi airlines":
//     "https://images.kiwi.com/airlines/64/SV.png",

//   "saudi arabia":
//     "https://images.kiwi.com/airlines/64/SV.png",

//   salamair:
//     "https://images.kiwi.com/airlines/64/OV.png",

//   "salam air":
//     "https://images.kiwi.com/airlines/64/OV.png",

//   "flydubai":
//     "https://images.kiwi.com/airlines/64/FZ.png",

//   "air arabia":
//     "https://images.kiwi.com/airlines/64/G9.png",

//   "singapore airlines":
//     "https://images.kiwi.com/airlines/64/SQ.png",

//   lufthansa:
//     "https://images.kiwi.com/airlines/64/LH.png",

//   "british airways":
//     "https://images.kiwi.com/airlines/64/BA.png",

//   "turkish airlines":
//     "https://images.kiwi.com/airlines/64/TK.png",

//   "malaysia airlines":
//     "https://images.kiwi.com/airlines/64/MH.png",

//   "thai airways":
//     "https://images.kiwi.com/airlines/64/TG.png",
// };


// // =====================================================
// // GET AIRLINE LOGO
// // =====================================================

// const airlineName = String(
//   airline || ""
// )
//   .trim()
//   .toLowerCase();


// // =====================================================
// // FIRST PRIORITY:
// // DATABASE LOGO
// // =====================================================

// const storedAirlineLogo =
//   flight?.logo ||
//   booking?.airlineLogo ||
//   booking?.logo ||
//   "";


// // =====================================================
// // SECOND PRIORITY:
// // AIRLINE NAME LOGO
// // =====================================================

// const airlineLogo =
//   storedAirlineLogo ||
//   airlineLogos[airlineName] ||
//   "";


// // =====================================================
// // DEBUG
// // =====================================================

// console.log(
//   "TICKET AIRLINE:",
//   airline
// );

// console.log(
//   "TICKET AIRLINE LOGO:",
//   airlineLogo
// );
































//   // =====================================================
//   // PASSENGER COUNTS
//   // =====================================================

//   const adultCount =
//     Number(booking?.adults) ||
//     Number(booking?.travellers?.adults) ||
//     passengers.filter(
//       (item) =>
//         String(
//           item?.type || "Adult"
//         ).toLowerCase() === "adult"
//     ).length;


//   const childCount =
//     Number(booking?.children) ||
//     Number(booking?.travellers?.children) ||
//     passengers.filter(
//       (item) =>
//         String(
//           item?.type || ""
//         ).toLowerCase() === "child"
//     ).length;


//   const infantCount =
//     Number(booking?.infants) ||
//     Number(booking?.travellers?.infants) ||
//     passengers.filter(
//       (item) =>
//         String(
//           item?.type || ""
//         ).toLowerCase() === "infant"
//     ).length;


//   // =====================================================
//   // PRICE HELPERS
//   // =====================================================

//   const numberValue = (value) => {
//     const number = Number(value);
//     return Number.isFinite(number)
//       ? number
//       : 0;
//   };


//   // =====================================================
//   // FARE
//   // =====================================================

//   const flightFare =
//     numberValue(
//       booking?.flightFare
//     ) ||
//     numberValue(
//       booking?.priceDetails?.flightFare
//     ) ||
//     numberValue(
//       flight?.finalPrice
//     ) ||
//     numberValue(
//       flight?.price
//     );


//   const seatFare =
//     numberValue(
//       booking?.seatFare
//     ) ||
//     numberValue(
//       booking?.seatPrice
//     ) ||
//     numberValue(
//       booking?.priceDetails?.seatCharges
//     ) ||
//     seats.reduce(
//       (sum, item) => {
//         if (
//           item &&
//           typeof item === "object"
//         ) {
//           return (
//             sum +
//             numberValue(
//               item?.price
//             )
//           );
//         }

//         return sum;
//       },
//       0
//     );


//   const mealFare =
//     numberValue(
//       booking?.mealFare
//     ) ||
//     numberValue(
//       booking?.mealPrice
//     ) ||
//     numberValue(
//       booking?.priceDetails?.mealCharges
//     ) ||
//     meals.reduce(
//       (sum, item) =>
//         sum +
//         numberValue(
//           item?.price
//         ),
//       0
//     );


//   const baggageFare =
//     numberValue(
//       booking?.baggageFare
//     ) ||
//     numberValue(
//       booking?.baggagePrice
//     ) ||
//     numberValue(
//       booking?.priceDetails?.baggageCharges
//     ) ||
//     baggages.reduce(
//       (sum, item) =>
//         sum +
//         numberValue(
//           item?.price
//         ),
//       0
//     );


//   const taxes =
//     numberValue(
//       booking?.taxes
//     ) ||
//     numberValue(
//       booking?.tax
//     );


//   const convenienceFee =
//     numberValue(
//       booking?.convenienceFee
//     );


//   const discount =
//     numberValue(
//       booking?.discount
//     );


//   // =====================================================
//   // TOTAL
//   // =====================================================

//   const calculatedTotal =
//     flightFare +
//     seatFare +
//     mealFare +
//     baggageFare +
//     taxes +
//     convenienceFee -
//     discount;


//   const finalTotal =
//     numberValue(
//       booking?.total
//     ) ||
//     numberValue(
//       booking?.totalAmount
//     ) ||
//     numberValue(
//       booking?.finalPrice
//     ) ||
//     numberValue(
//       booking?.priceDetails?.total
//     ) ||
//     calculatedTotal;


//   // =====================================================
//   // PAYMENT
//   // =====================================================

//   const paymentMethod =
//     booking?.paymentMethod ||
//     "UPI";


//   const paymentStatus =
//     booking?.paymentStatus ||
//     "Paid";


//   const bookingStatus =
//     booking?.bookingStatus ||
//     booking?.status ||
//     "Confirmed";


//   // =====================================================
//   // PASSENGER HELPERS
//   // =====================================================

//   const getPassengerName = (item) => {
//     if (item?.name) {
//       return item.name;
//     }

//     const name =
//       `${item?.firstName || ""} ${
//         item?.lastName || ""
//       }`.trim();

//     return name || "Passenger";
//   };


//   const getPassengerType = (item) => {
//     const type =
//       item?.type ||
//       "Adult";

//     return (
//       String(type)
//         .charAt(0)
//         .toUpperCase() +
//       String(type).slice(1)
//     );
//   };


//   const getPassengerSeat = (
//     item,
//     index
//   ) => {
//     const type =
//       String(
//         item?.type || "Adult"
//       ).toLowerCase();

//     if (type === "infant") {
//       return "No Seat";
//     }

//     const seat =
//       item?.seat ||
//       item?.seatNumber;

//     if (seat) {
//       if (
//         typeof seat === "object"
//       ) {
//         return (
//           seat?.seatNumber ||
//           seat?.seat ||
//           "N/A"
//         );
//       }

//       return seat;
//     }

//     const selectedSeat =
//       seats[index];

//     if (
//       selectedSeat &&
//       typeof selectedSeat === "object"
//     ) {
//       return (
//         selectedSeat?.seatNumber ||
//         selectedSeat?.seat ||
//         "N/A"
//       );
//     }

//     return (
//       selectedSeat ||
//       "N/A"
//     );
//   };


//   const getPassengerMeal = (
//     item,
//     index
//   ) => {
//     if (
//       typeof item?.meal === "object"
//     ) {
//       return (
//         item.meal?.name ||
//         "No Meal"
//       );
//     }

//     return (
//       item?.meal ||
//       item?.mealName ||
//       meals[index]?.name ||
//       meals[0]?.name ||
//       "No Meal"
//     );
//   };


//   const cabinBaggage =
//     flight?.cabinBaggage ||
//     booking?.cabinBaggage ||
//     flight?.cabins?.[0]?.cabinBaggage ||
//     flight?.cabins?.[0]?.baggageCabin ||
//     "N/A";

//   const checkinBaggage =
//     flight?.checkinBaggage ||
//     booking?.checkinBaggage ||
//     flight?.cabins?.[0]?.baggage ||
//     flight?.cabins?.[0]?.checkinBaggage ||
//     "N/A";

//   const getPassengerBaggage = () => (
//     <>
//       <strong>Cabin Bag: {cabinBaggage}</strong>
//       <strong>Check-in Bag: {checkinBaggage}</strong>
//     </>
//   );


//   // =====================================================
//   // QR CODE
//   // =====================================================

//   const qrData = encodeURIComponent(
//     JSON.stringify({
//       bookingId,
//       pnr,
//       passenger: passengers.map(
//         (item) =>
//           getPassengerName(item)
//       ),
//       airline,
//       flightNo,
//       from: fromCode,
//       to: toCode,
//       seats: seats.map(
//         (item) =>
//           typeof item === "object"
//             ? (
//                 item?.seatNumber ||
//                 item?.seat ||
//                 ""
//               )
//             : item
//       ),
//     })
//   );


//   const qrCodeUrl =
//     `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrData}`;


//   // =====================================================
//   // DATE
//   // =====================================================

//   const bookingDate =
//     booking?.createdAt
//       ? new Date(
//           booking.createdAt
//         ).toLocaleDateString(
//           "en-IN",
//           {
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//           }
//         )
//       : new Date().toLocaleDateString(
//           "en-IN",
//           {
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//           }
//         );


//   // =====================================================
//   // PRINT / PDF
//   // =====================================================

//   const handlePrint = () => {
//     window.print();
//   };


//   const handleDownload = () => {
//     window.print();
//   };


//   // =====================================================
//   // NO BOOKING
//   // =====================================================

//   if (
//     !booking ||
//     !booking.flight
//   ) {
//     return (
//       <>
//         <Navbar />

//         <section className="success-page">
//           <div className="no-booking">
//             <div className="no-booking-icon">
//               <FaPlaneDeparture />
//             </div>

//             <h2>
//               No Booking Found ✈️
//             </h2>

//             <p>
//               Booking information is not
//               available. Please open the
//               ticket from My Bookings again.
//             </p>

//             <button
//               type="button"
//               onClick={() =>
//                 navigate("/my-bookings")
//               }
//             >
//               <FaHome />
//               My Bookings
//             </button>
//           </div>
//         </section>

//         <Footer />
//       </>
//     );
//   }


//   // =====================================================
//   // UI
//   // =====================================================

//   return (
//     <>
//       <Navbar />

//       <main className="success-page">

//         {/* =================================================
//                     SUCCESS MESSAGE
//         ================================================= */}

//         <div className="success-message">

//           <div className="success-icon">
//             <FaCheckCircle />
//           </div>

//           <div>
//             <h1>
//               Booking Successful
//             </h1>

//             <p>
//               Your flight ticket has been
//               confirmed successfully.
//             </p>
//           </div>

//         </div>


//         {/* =================================================
//                     TICKET
//         ================================================= */}

//         <div
//           className="eticket"
//           id="ticket-print-area"
//         >

//           {/* =================================================
//                       HEADER
//           ================================================= */}

//           <div className="eticket-header">

//             <div className="saiyed-brand">

//               <div className="saiyed-logo">
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


//             <div className="airline-brand">

//               {airlineLogo ? (
//                 <img
//                   src={airlineLogo}
//                   alt={airline}
//                 />
//               ) : (
//                 <div className="airline-no-logo">
//                   <FaPlaneDeparture />
//                 </div>
//               )}

//               <div>
//                 <strong>
//                   {airline}
//                 </strong>

//                 <span>
//                   {flightNo}
//                 </span>
//               </div>

//             </div>

//           </div>


//           {/* =================================================
//                       BOOKING DETAILS
//           ================================================= */}

//           <section className="ticket-section">

//             <div className="section-title blue">
//               Booking Details — Confirmed
//             </div>

//             <div className="details-table booking-table">

//               <div className="table-heading">
//                 Booking ID
//               </div>

//               <div className="table-heading">
//                 GDS PNR
//               </div>

//               <div className="table-heading">
//                 Airline PNR
//               </div>

//               <div className="table-heading">
//                 Booking Date
//               </div>


//               <div className="table-value">
//                 {bookingId}
//               </div>

//               <div className="table-value">
//                 {pnr}
//               </div>

//               <div className="table-value pnr">
//                 {pnr}
//               </div>

//               <div className="table-value">
//                 {bookingDate}
//               </div>

//             </div>

//           </section>


//           {/* =================================================
//                       FLIGHT DETAILS
//           ================================================= */}

//           <section className="ticket-section">

//             <div className="section-title orange">
//               Flight Details
//             </div>

//             <div className="flight-note">
//               Subject to prior sale, price and
//               schedule changes. Please check your
//               flight details before travelling.
//             </div>

//             <div className="route-title">
//               {fromCode} → {toCode}
//             </div>


//             <div className="flight-table">

//               <div className="flight-heading">
//                 Carrier / Date
//               </div>

//               <div className="flight-heading">
//                 Flight No
//               </div>

//               <div className="flight-heading">
//                 Departure
//               </div>

//               <div className="flight-heading">
//                 Arrival
//               </div>

//               <div className="flight-heading">
//                 Departure Time
//               </div>

//               <div className="flight-heading">
//                 Arrival Time
//               </div>

//               <div className="flight-heading">
//                 Duration
//               </div>

//               <div className="flight-heading">
//                 Class
//               </div>


//               <div className="flight-value carrier-cell">

//                 {airlineLogo ? (
//                   <img
//                     src={airlineLogo}
//                     alt={airline}
//                   />
//                 ) : (
//                   <FaPlaneDeparture />
//                 )}

//                 <span>
//                   {airline}
//                 </span>

//                 <small>
//                   {departureDate}
//                 </small>

//               </div>


//               <div className="flight-value">
//                 <strong>
//                   {flightNo}
//                 </strong>

//                 <small>
//                   {aircraft}
//                 </small>
//               </div>


//               <div className="flight-value">
//                 <strong>
//                   {fromCity}
//                 </strong>

//                 <span>
//                   {fromCode}
//                 </span>

//                 <small>
//                   {fromAirport}
//                 </small>

//                 <small>
//                   Terminal {departureTerminal}
//                 </small>
//               </div>


//               <div className="flight-value">
//                 <strong>
//                   {toCity}
//                 </strong>

//                 <span>
//                   {toCode}
//                 </span>

//                 <small>
//                   {toAirport}
//                 </small>

//                 <small>
//                   Terminal {arrivalTerminal}
//                 </small>
//               </div>


//               <div className="flight-value">
//                 <strong>
//                   {departureTime}
//                 </strong>

//                 <small>
//                   {departureDate}
//                 </small>
//               </div>


//               <div className="flight-value">
//                 <strong>
//                   {arrivalTime}
//                 </strong>

//                 <small>
//                   {arrivalDate}
//                 </small>
//               </div>


//               <div className="flight-value">
//                 <strong>
//                   {duration}
//                 </strong>

//                 <small>
//                   {stops}
//                 </small>
//               </div>


//               <div className="flight-value">
//                 <strong>
//                   {cabin}
//                 </strong>

//                 <small>
//                   {flight?.refundable
//                     ? "Refundable"
//                     : "Non Refundable"}
//                 </small>
//               </div>

//             </div>


//             <div className="important-flight-note">
//               <strong>
//                 ● IMPORTANT:
//               </strong>{" "}
//               Check-in counters close 60 minutes
//               prior to departure. All times are
//               local time.
//             </div>

//           </section>


//           {/* =================================================
//                       PASSENGER DETAILS
//           ================================================= */}

//           <section className="ticket-section">

//             <div className="section-title orange">
//               Passenger Details
//             </div>

//             <div className="passenger-count-line">

//               <span>
//                 Total:
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


//             <div className="passenger-table">

//               <div className="passenger-heading">
//                 Passenger Name
//               </div>

//               <div className="passenger-heading">
//                 Type
//               </div>

//               <div className="passenger-heading">
//                 Sector
//               </div>

//               <div className="passenger-heading">
//                 PNR
//               </div>

//               <div className="passenger-heading">
//                 Seat
//               </div>

//               <div className="passenger-heading">
//                 Meal
//               </div>

//               <div className="passenger-heading">
//                 Baggage
//               </div>


//               {passengers.map(
//                 (item, index) => (
//                   <div
//                     key={
//                       item?._id ||
//                       `${getPassengerName(item)}-${index}`
//                     }
//                     className="passenger-row"
//                   >

//                     <div className="passenger-value">

//                       <strong>
//                         {getPassengerName(
//                           item
//                         ).toUpperCase()}
//                       </strong>

//                       <small>
//                         DOB:{" "}
//                         {item?.dob || "N/A"}
//                       </small>

//                       <small>
//                         Gender:{" "}
//                         {item?.gender || "N/A"}
//                       </small>

//                     </div>


//                     <div className="passenger-value">
//                       {getPassengerType(item)}
//                     </div>


//                     <div className="passenger-value">
//                       {fromCode} - {toCode}
//                     </div>


//                     <div className="passenger-value pnr">
//                       {pnr}
//                     </div>


//                     <div className="passenger-value">
//                       <strong>
//                         {getPassengerSeat(
//                           item,
//                           index
//                         )}
//                       </strong>
//                     </div>


//                     <div className="passenger-value">
//                       {getPassengerMeal(
//                         item,
//                         index
//                       )}
//                     </div>


//                     <div className="passenger-value">
//                       {getPassengerBaggage(
//                         item,
//                         index
//                       )}
//                     </div>

//                   </div>
//                 )
//               )}

//             </div>


//             <div className="passenger-note">
//               You have been informed that you
//               have to carry valid identity papers
//               during your journey. Please check
//               your flight details before travel.
//             </div>

//           </section>


//           {/* =================================================
//                       FARE + PAYMENT
//           ================================================= */}

//           {showPrice && (
//             <section className="fare-payment-section">

//               {/* FARE */}

//               <div className="fare-summary">

//                 <div className="section-title orange">
//                   Fare Summary
//                 </div>


//                 <div className="fare-row">
//                   <span>
//                     Flight Fare
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {flightFare.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>


//                 <div className="fare-row">
//                   <span>
//                     Seat Fee
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {seatFare.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>


//                 <div className="fare-row">
//                   <span>
//                     Meal Fee
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {mealFare.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>


//                 <div className="fare-row">
//                   <span>
//                     Baggage Fee
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {baggageFare.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>


//                 <div className="fare-row">
//                   <span>
//                     Taxes
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {taxes.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>


//                 <div className="fare-row">
//                   <span>
//                     Convenience Fee
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {convenienceFee.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>


//                 {discount > 0 && (
//                   <div className="fare-row discount">
//                     <span>
//                       Discount
//                     </span>

//                     <strong>
//                       - ₹{" "}
//                       {discount.toLocaleString(
//                         "en-IN"
//                       )}
//                     </strong>
//                   </div>
//                 )}


//                 <div className="fare-total">
//                   <span>
//                     Total
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {finalTotal.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>

//               </div>


//               {/* PAYMENT */}

//               <div className="payment-summary">

//                 <div className="section-title orange">
//                   Payment Summary
//                 </div>


//                 <div className="payment-row">
//                   <span>
//                     Payment Type
//                   </span>

//                   <strong>
//                     {paymentMethod}
//                   </strong>
//                 </div>


//                 <div className="payment-row">
//                   <span>
//                     Amount
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {finalTotal.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>


//                 <div className="payment-row">
//                   <span>
//                     Payment Date
//                   </span>

//                   <strong>
//                     {bookingDate}
//                   </strong>
//                 </div>


//                 <div className="payment-row">
//                   <span>
//                     Payment Status
//                   </span>

//                   <strong className="paid">
//                     {paymentStatus}
//                   </strong>
//                 </div>


//                 <div className="payment-row">
//                   <span>
//                     Booking Status
//                   </span>

//                   <strong className="confirmed">
//                     {bookingStatus}
//                   </strong>
//                 </div>

//               </div>

//             </section>
//           )}


//           {/* =================================================
//                       QR + BRAND
//           ================================================= */}

//           <section className="qr-brand-section">

//             <div className="saiyed-promo">

//               <div className="promo-logo">
//                 <FaPlaneDeparture />
//               </div>

//               <div>
//                 <h2>
//                   Saiyed Travels
//                 </h2>

//                 <p>
//                   Your Journey, Our Responsibility
//                 </p>

//                 <span>
//                   Flight Booking • Visa • Holidays
//                 </span>
//               </div>

//             </div>


//             <div className="ticket-qr">

//               <img
//                 src={qrCodeUrl}
//                 alt="Booking QR Code"
//               />

//               <small>
//                 Scan to verify booking
//               </small>

//             </div>

//           </section>


//           {/* =================================================
//                       IMPORTANT INFORMATION
//           ================================================= */}

//           <section className="terms-section">

//             <h3>
//               Important Information
//             </h3>

//             <p>
//               1. Please carry valid government
//               issued identity proof during your
//               journey.
//             </p>

//             <p>
//               2. Please reach the airport before
//               the recommended check-in time.
//             </p>

//             <p>
//               3. Baggage allowance is subject to
//               airline rules and ticket conditions.
//             </p>

//             <p>
//               4. Please verify all passenger and
//               flight details before travelling.
//             </p>

//           </section>


//           {/* =================================================
//                       FOOTER
//           ================================================= */}

//           <footer className="eticket-footer">

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
//                 PNR: {pnr}
//               </span>
//             </div>

//           </footer>

//         </div>


//         {/* =================================================
//                     ACTION BUTTONS
//         ================================================= */}

//         <div className="success-buttons">

//           <button
//             type="button"
//             className="price-btn"
//             onClick={() =>
//               setShowPrice(
//                 (previous) => !previous
//               )
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
//             className="download-btn"
//             onClick={handleDownload}
//           >
//             <FaDownload />
//             Download / PDF
//           </button>


//           <button
//             type="button"
//             className="print-btn"
//             onClick={handlePrint}
//           >
//             <FaPrint />
//             Print Ticket
//           </button>


//           <button
//             type="button"
//             className="home-btn"
//             onClick={() =>
//               navigate("/my-bookings")
//             }
//           >
//             <FaHome />
//             My Bookings
//           </button>

//         </div>

//       </main>

//       <Footer />
//     </>
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


  // const airlineLogo =
  //   flight?.logo ||
  //   booking?.airlineLogo ||
  //   "";


  // =====================================================
// AIRLINE LOGOS
// =====================================================

const airlineLogos = {
  indigo:
    "https://images.kiwi.com/airlines/64/6E.png",

  "air india":
    "https://images.kiwi.com/airlines/64/AI.png",

  "air india express":
    "https://images.kiwi.com/airlines/64/IX.png",

  spicejet:
    "https://images.kiwi.com/airlines/64/SG.png",

  vistara:
    "https://images.kiwi.com/airlines/64/UK.png",

  akasa:
    "https://images.kiwi.com/airlines/64/QP.png",

  "akasa air":
    "https://images.kiwi.com/airlines/64/QP.png",

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

  "saudi arabia":
    "https://images.kiwi.com/airlines/64/SV.png",

  salamair:
    "https://images.kiwi.com/airlines/64/OV.png",

  "salam air":
    "https://images.kiwi.com/airlines/64/OV.png",

  "flydubai":
    "https://images.kiwi.com/airlines/64/FZ.png",

  "air arabia":
    "https://images.kiwi.com/airlines/64/G9.png",

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
};


// =====================================================
// GET AIRLINE LOGO
// =====================================================

const airlineName = String(
  airline || ""
)
  .trim()
  .toLowerCase();


// =====================================================
// FIRST PRIORITY:
// DATABASE LOGO
// =====================================================

const storedAirlineLogo =
  flight?.logo ||
  booking?.airlineLogo ||
  booking?.logo ||
  "";


// =====================================================
// SECOND PRIORITY:
// AIRLINE NAME LOGO
// =====================================================

const airlineLogo =
  storedAirlineLogo ||
  airlineLogos[airlineName] ||
  "";


// =====================================================
// DEBUG
// =====================================================

console.log(
  "TICKET AIRLINE:",
  airline
);

console.log(
  "TICKET AIRLINE LOGO:",
  airlineLogo
);
































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


  // =====================================================
  // BAGGAGE - ADMIN ENTERED DATA
  // =====================================================

  // Admin/booking baggage can be stored in different places.
  // Check the confirmed booking first, then its flight snapshot.
  const cabinBaggage =
    booking?.baggage?.cabinBaggage ||
    booking?.baggage?.cabin ||
    booking?.flight?.baggage?.cabinBaggage ||
    booking?.flight?.baggage?.cabin ||
    booking?.flight?.cabinBaggage ||
    booking?.cabinBaggage ||
    flight?.baggage?.cabinBaggage ||
    flight?.baggage?.cabin ||
    flight?.cabinBaggage ||
    flight?.cabins?.[0]?.cabinBaggage ||
    flight?.cabins?.[0]?.baggageCabin ||
    "";

  const checkinBaggage =
    booking?.baggage?.checkinBaggage ||
    booking?.baggage?.checkin ||
    booking?.baggage?.weight ||
    booking?.flight?.baggage?.checkinBaggage ||
    booking?.flight?.baggage?.checkin ||
    booking?.flight?.checkinBaggage ||
    booking?.checkinBaggage ||
    flight?.baggage?.checkinBaggage ||
    flight?.baggage?.checkin ||
    flight?.checkinBaggage ||
    flight?.cabins?.[0]?.checkinBaggage ||
    flight?.cabins?.[0]?.baggage ||
    "";

  console.log("TICKET BAGGAGE:", {
    bookingBaggage: booking?.baggage,
    flightBaggage: booking?.flight?.baggage,
    cabinBaggage,
    checkinBaggage,
  });

  const getPassengerBaggage = () => (
    <>
      <strong>Cabin Bag: {cabinBaggage}</strong>
      <strong>Check-in Bag: {checkinBaggage}</strong>
    </>
  );


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