// import "./Booking.css";

// import { useState } from "react";
// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";


// function Booking() {

//   const navigate = useNavigate();
//   const location = useLocation();


//   // =====================================================
//   // FLIGHT
//   // =====================================================

//   const selectedFlight =
//     location.state?.flight || null;


//   // =====================================================
//   // TRAVELLERS
//   // =====================================================

//   const travellers =
//     location.state?.travellers || {
//       adults: 1,
//       children: 0,
//       infants: 0,
//       cabin: "Economy",
//     };


//   const previousPricing =
//     location.state?.pricing || {};


//   // =====================================================
//   // PASSENGER COUNTS
//   // =====================================================

//   const adultCount = Math.max(
//     Number(travellers.adults) || 1,
//     1
//   );

//   const childCount = Math.max(
//     Number(travellers.children) || 0,
//     0
//   );

//   const infantCount = Math.max(
//     Number(travellers.infants) || 0,
//     0
//   );

//   const totalPassengers =
//     adultCount +
//     childCount +
//     infantCount;


//   // =====================================================
//   // ROLE BASED FARES
//   // =====================================================

//   const getLoggedInRole = () => {
//     const directRoleKeys = [
//       "userRole",
//       "role",
//       "accountType",
//     ];

//     for (const key of directRoleKeys) {
//       const value = localStorage.getItem(key);

//       if (value) {
//         const role = String(value).trim().toLowerCase();

//         if (role === "agent" || role === "customer" || role === "admin") {
//           return role;
//         }
//       }
//     }

//     const userKeys = [
//       "user",
//       "currentUser",
//       "loggedInUser",
//       "authUser",
//     ];

//     for (const key of userKeys) {
//       const value = localStorage.getItem(key);

//       if (!value) continue;

//       try {
//         const user = JSON.parse(value);
//         const role = String(
//           user?.role ||
//           user?.user?.role ||
//           user?.accountType ||
//           ""
//         ).trim().toLowerCase();

//         if (role === "agent" || role === "customer" || role === "admin") {
//           return role;
//         }
//       } catch {
//         const role = String(value).trim().toLowerCase();

//         if (role === "agent" || role === "customer" || role === "admin") {
//           return role;
//         }
//       }
//     }

//     return "customer";
//   };

//   const loggedInRole = getLoggedInRole();
//   const isAgent = loggedInRole === "agent";

//   // Agent gets only agent fare.
//   // Customer/admin gets customer fare.
//   const adultFare = Number(
//     isAgent
//       ? selectedFlight?.agentAdultFare ??
//         previousPricing?.agentAdultFare ??
//         0
//       : selectedFlight?.adultFare ??
//         previousPricing?.adultFare ??
//         selectedFlight?.finalPrice ??
//         0
//   );

//   const childFare = Number(
//     isAgent
//       ? selectedFlight?.agentChildFare ??
//         previousPricing?.agentChildFare ??
//         0
//       : selectedFlight?.childFare ??
//         previousPricing?.childFare ??
//         0
//   );

//   const infantFare = Number(
//     isAgent
//       ? selectedFlight?.agentInfantFare ??
//         previousPricing?.agentInfantFare ??
//         0
//       : selectedFlight?.infantFare ??
//         previousPricing?.infantFare ??
//         0
//   );

//   console.log("BOOKING FARE ROLE:", loggedInRole);
//   console.log("BOOKING FARES:", {
//     adultFare,
//     childFare,
//     infantFare,
//   });


//   // =====================================================
//   // PASSENGER TOTALS
//   // =====================================================

//   const adultTotal =
//     adultFare * adultCount;

//   const childTotal =
//     childFare * childCount;

//   const infantTotal =
//     infantFare * infantCount;

//   const passengerFareTotal =
//     adultTotal +
//     childTotal +
//     infantTotal;


//   // =====================================================
//   // PASSENGER OBJECT
//   // =====================================================

//   const createPassenger = (type) => ({
//     type,

//     firstName: "",
//     lastName: "",
//     dob: "",
//     gender: "",
//     nationality: "",
//     passport: "",
//     passportExpiry: "",

//     email: "",
//     phone: "",

//     city: "",
//     address: "",
//   });


//   // =====================================================
//   // CREATE PASSENGER LIST
//   // =====================================================

//   const createPassengerList = () => {

//     const list = [];


//     // Adults
//     for (
//       let i = 0;
//       i < adultCount;
//       i++
//     ) {

//       list.push(
//         createPassenger("Adult")
//       );

//     }


//     // Children
//     for (
//       let i = 0;
//       i < childCount;
//       i++
//     ) {

//       list.push(
//         createPassenger("Child")
//       );

//     }


//     // Infants
//     for (
//       let i = 0;
//       i < infantCount;
//       i++
//     ) {

//       list.push(
//         createPassenger("Infant")
//       );

//     }


//     return list;

//   };


//   // =====================================================
//   // PASSENGERS STATE
//   // =====================================================

//   const [
//     passengers,
//     setPassengers,
//   ] = useState(
//     createPassengerList
//   );


//   // =====================================================
//   // CHANGE PASSENGER
//   // =====================================================

//   const handlePassengerChange = (
//     index,
//     field,
//     value
//   ) => {

//     setPassengers(
//       (previousPassengers) =>
//         previousPassengers.map(
//           (
//             passenger,
//             passengerIndex
//           ) => {

//             if (
//               passengerIndex !== index
//             ) {
//               return passenger;
//             }


//             return {
//               ...passenger,
//               [field]: value,
//             };

//           }
//         )
//     );

//   };


//   // =====================================================
//   // VALIDATION
//   // =====================================================

//   const validatePassengers = () => {

//     for (
//       let i = 0;
//       i < passengers.length;
//       i++
//     ) {

//       const passenger =
//         passengers[i];

//       const passengerNumber =
//         i + 1;


//       if (
//         !passenger.firstName.trim()
//       ) {

//         alert(
//           `Please enter First Name for Passenger ${passengerNumber}`
//         );

//         return false;

//       }


//       if (
//         !passenger.lastName.trim()
//       ) {

//         alert(
//           `Please enter Last Name for Passenger ${passengerNumber}`
//         );

//         return false;

//       }


//       if (
//         !passenger.dob
//       ) {

//         alert(
//           `Please select Date of Birth for Passenger ${passengerNumber}`
//         );

//         return false;

//       }


//       if (
//         !passenger.gender
//       ) {

//         alert(
//           `Please select Gender for Passenger ${passengerNumber}`
//         );

//         return false;

//       }


//       if (
//         !passenger.nationality.trim()
//       ) {

//         alert(
//           `Please enter Nationality for Passenger ${passengerNumber}`
//         );

//         return false;

//       }


//       if (
//         !passenger.passport.trim()
//       ) {

//         alert(
//           `Please enter Passport Number for Passenger ${passengerNumber}`
//         );

//         return false;

//       }


//       if (
//         !passenger.passportExpiry
//       ) {

//         alert(
//           `Please select Passport Expiry for Passenger ${passengerNumber}`
//         );

//         return false;

//       }


//       // First passenger is contact passenger

//       if (
//         i === 0 &&
//         !passenger.email.trim()
//       ) {

//         alert(
//           "Please enter Email Address"
//         );

//         return false;

//       }


//       if (
//         i === 0 &&
//         !passenger.phone.trim()
//       ) {

//         alert(
//           "Please enter Phone Number"
//         );

//         return false;

//       }


//       if (
//         !passenger.city.trim()
//       ) {

//         alert(
//           `Please enter City for Passenger ${passengerNumber}`
//         );

//         return false;

//       }

//     }


//     return true;

//   };


//   // =====================================================
//   // PASSENGER LABEL
//   // =====================================================

//   const getPassengerLabel = (
//     type,
//     index
//   ) => {

//     const sameTypePassengers =
//       passengers.filter(
//         (item) =>
//           item.type === type
//       );


//     const currentIndex =
//       sameTypePassengers.findIndex(
//         (item) =>
//           item === passengers[index]
//       );


//     if (
//       type === "Adult"
//     ) {

//       return `Adult ${
//         currentIndex + 1
//       }`;

//     }


//     if (
//       type === "Child"
//     ) {

//       return `Child ${
//         currentIndex + 1
//       }`;

//     }


//     return `Infant ${
//       currentIndex + 1
//     }`;

//   };


//   // =====================================================
//   // PASSENGER FARE
//   // =====================================================

//   const getPassengerFare = (
//     type
//   ) => {

//     if (
//       type === "Child"
//     ) {

//       return childFare;

//     }


//     if (
//       type === "Infant"
//     ) {

//       return infantFare;

//     }


//     return adultFare;

//   };


//   // =====================================================
//   // BAGGAGE ALLOWANCE
//   // =====================================================

//   /*
//     Admin flight me baggage allowance
//     jis bhi field me save ho usko support
//     karne ke liye multiple fallbacks.
//   */

//   const baggageAllowance =
//     selectedFlight?.baggageAllowance ||
//     selectedFlight?.baggage ||
//     selectedFlight?.baggageIncluded ||
//     selectedFlight?.baggageLimit ||
//     selectedFlight?.checkInBaggage ||
//     selectedFlight?.baggageWeight ||
//     "As per Airline";


//   // =====================================================
//   // CONTINUE TO PAYMENT
//   // =====================================================

//   const handleContinue = () => {

//     // -----------------------------------------------
//     // VALIDATE PASSENGERS
//     // -----------------------------------------------

//     if (
//       !validatePassengers()
//     ) {

//       return;

//     }


//     // -----------------------------------------------
//     // GET FLIGHT ID
//     // -----------------------------------------------

//     const flightId =
//       selectedFlight?._id ||
//       selectedFlight?.id ||
//       selectedFlight?.flightId;


//     if (!flightId) {

//       alert(
//         "Flight ID is missing. Please go back and select the flight again."
//       );

//       console.error(
//         "FLIGHT ID MISSING:",
//         selectedFlight
//       );

//       return;

//     }


//     // -----------------------------------------------
//     // CLEAN FLIGHT DATA
//     // -----------------------------------------------

//     const flight = {

//       ...selectedFlight,

//       _id:
//         flightId,

//       flightId:
//         flightId,


//       // ---------------------------------------------
//       // FARES
//       // ---------------------------------------------

//       adultFare:
//         adultFare,

//       childFare:
//         childFare,

//       infantFare:
//         infantFare,

//       // Keep original fare values available for admin/debugging,
//       // while adultFare/childFare/infantFare above are role-specific.
//       agentAdultFare:
//         selectedFlight?.agentAdultFare ??
//         null,

//       agentChildFare:
//         selectedFlight?.agentChildFare ??
//         null,

//       agentInfantFare:
//         selectedFlight?.agentInfantFare ??
//         null,

//       fareRole:
//         loggedInRole,

//       adultTotal:
//         adultTotal,

//       childTotal:
//         childTotal,

//       infantTotal:
//         infantTotal,

//       passengerFareTotal:
//         passengerFareTotal,


//       // ---------------------------------------------
//       // BAGGAGE ALLOWANCE
//       // ---------------------------------------------

//       baggageAllowance:
//         baggageAllowance,


//       // ---------------------------------------------
//       // SEAT
//       // Airline will assign seat
//       // ---------------------------------------------

//       seat:
//         "Assigned by Airline",


//       // ---------------------------------------------
//       // MEAL
//       // Airline rules
//       // ---------------------------------------------

//       meal:
//         "As per Airline",

//     };


//     // =================================================
//     // BOOKING STATE
//     // =================================================

//     const bookingState = {

//       // -----------------------------------------------
//       // FLIGHT
//       // -----------------------------------------------

//       flight,

//       flightId,


//       // -----------------------------------------------
//       // TRAVELLERS
//       // -----------------------------------------------

//       travellers: {

//         adults:
//           adultCount,

//         children:
//           childCount,

//         infants:
//           infantCount,

//         totalPassengers:
//           totalPassengers,

//         cabin:
//           travellers.cabin ||
//           "Economy",

//       },


//       // -----------------------------------------------
//       // ALL PASSENGERS
//       // -----------------------------------------------

//       passengers:
//         passengers.map(
//           (passenger) => ({
//             ...passenger,

//             type:
//               passenger.type ||
//               "Adult",
//           })
//         ),


//       // -----------------------------------------------
//       // FIRST PASSENGER
//       // Backward compatibility
//       // -----------------------------------------------

//       passenger:
//         passengers[0],


//       // -----------------------------------------------
//       // PRICING
//       // -----------------------------------------------

//       pricing: {

//         adultFare,

//         childFare,

//         infantFare,

//         agentAdultFare:
//           selectedFlight?.agentAdultFare ??
//           null,

//         agentChildFare:
//           selectedFlight?.agentChildFare ??
//           null,

//         agentInfantFare:
//           selectedFlight?.agentInfantFare ??
//           null,

//         fareRole:
//           loggedInRole,

//         adultTotal:

//         childTotal,

//         infantTotal,

//         passengerFareTotal,

//         // No seat fee
//         totalSeatPrice:
//           0,

//         // No meal fee
//         mealTotal:
//           0,

//         // No extra baggage fee
//         baggagePrice:
//           0,

//       },


//       // -----------------------------------------------
//       // AIRLINE INFORMATION
//       // -----------------------------------------------

//       seat:
//         "Assigned by Airline",

//       meal:
//         "As per Airline",

//       baggage:
//         baggageAllowance,

//     };


//     // =================================================
//     // DEBUG
//     // =================================================

//     console.log(
//       "================================="
//     );

//     console.log(
//       "BOOKING → PAYMENT"
//     );

//     console.log(
//       "Flight:",
//       flight
//     );

//     console.log(
//       "Passengers:",
//       passengers
//     );

//     console.log(
//       "Adults:",
//       adultCount
//     );

//     console.log(
//       "Children:",
//       childCount
//     );

//     console.log(
//       "Infants:",
//       infantCount
//     );

//     console.log(
//       "Total Fare:",
//       passengerFareTotal
//     );

//     console.log(
//       "Baggage:",
//       baggageAllowance
//     );

//     console.log(
//       "================================="
//     );


//     // =================================================
//     // DIRECT PAYMENT
//     // =================================================

//     navigate(
//       "/payment",
//       {
//         state:
//           bookingState,
//       }
//     );

//   };


//   // =====================================================
//   // NO FLIGHT
//   // =====================================================

//   if (
//     !selectedFlight
//   ) {

//     return (
//       <>

//         <Navbar />

//         <section className="booking-page">

//           <div className="no-flight-selected">

//             <h2>
//               No Flight Selected ✈️
//             </h2>

//             <p>
//               Please search and select a
//               flight before continuing
//               to booking.
//             </p>

//             <button
//               className="back-home-btn"
//               onClick={() =>
//                 navigate("/")
//               }
//             >
//               Back To Home
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


//       <main className="booking-page">

//         <div className="booking-container">


//           {/* ============================================
//                      FLIGHT SUMMARY
//           ============================================ */}

//           <div className="booking-flight-summary">

//             <div className="booking-summary-top">

//               <div>

//                 <span className="booking-small-title">
//                   Booking Details
//                 </span>

//                 <h2>
//                   Passenger Details
//                 </h2>

//                 <p>

//                   {selectedFlight.airline}

//                   {" • "}

//                   {selectedFlight.flightNo}

//                   {" • "}

//                   {selectedFlight.fromCode}

//                   {" → "}

//                   {selectedFlight.toCode}

//                 </p>

//               </div>


//               <div className="booking-flight-price">

//                 <span>
//                   Ticket Fare
//                 </span>

//                 <strong>

//                   ₹{" "}

//                   {passengerFareTotal.toLocaleString(
//                     "en-IN"
//                   )}

//                 </strong>

//               </div>

//             </div>


//             {/* ==========================================
//                          TRAVELLER BADGES
//             ========================================== */}

//             <div className="traveller-badges">

//               <span className="traveller-badge">

//                 👤 {adultCount} Adult
//                 {adultCount > 1
//                   ? "s"
//                   : ""}

//               </span>


//               {childCount > 0 && (

//                 <span className="traveller-badge">

//                   🧒 {childCount} Child
//                   {childCount > 1
//                     ? "ren"
//                     : ""}

//                 </span>

//               )}


//               {infantCount > 0 && (

//                 <span className="traveller-badge">

//                   👶 {infantCount} Infant
//                   {infantCount > 1
//                     ? "s"
//                     : ""}

//                 </span>

//               )}


//               <span className="traveller-badge">

//                 💺{" "}

//                 {travellers.cabin ||
//                   "Economy"}

//               </span>

//             </div>


//             {/* ==========================================
//                        FLIGHT INFORMATION
//             ========================================== */}

//             <div className="fare-mini-summary">

//               <div>

//                 <span>
//                   Adult ({adultCount})
//                 </span>

//                 <strong>

//                   ₹{" "}

//                   {adultTotal.toLocaleString(
//                     "en-IN"
//                   )}

//                 </strong>

//               </div>


//               {childCount > 0 && (

//                 <div>

//                   <span>
//                     Child ({childCount})
//                   </span>

//                   <strong>

//                     ₹{" "}

//                     {childTotal.toLocaleString(
//                       "en-IN"
//                     )}

//                   </strong>

//                 </div>

//               )}


//               {infantCount > 0 && (

//                 <div>

//                   <span>
//                     Infant ({infantCount})
//                   </span>

//                   <strong>

//                     ₹{" "}

//                     {infantTotal.toLocaleString(
//                       "en-IN"
//                     )}

//                   </strong>

//                 </div>

//               )}

//             </div>


//             {/* ==========================================
//                          AIRLINE SERVICES
//             ========================================== */}

//             <div className="booking-airline-info">

//               <div>

//                 <span>
//                   Seat
//                 </span>

//                 <strong>
//                   Assigned by Airline
//                 </strong>

//               </div>


//               <div>

//                 <span>
//                   Meal
//                 </span>

//                 <strong>
//                   As per Airline
//                 </strong>

//               </div>


//               <div>

//                 <span>
//                   Baggage
//                 </span>

//                 <strong>
//                   {baggageAllowance}
//                 </strong>

//               </div>

//             </div>

//           </div>


//           {/* ============================================
//                        PASSENGER CARDS
//           ============================================ */}

//           <div className="passengers-list">

//             {passengers.map(
//               (
//                 passenger,
//                 index
//               ) => (

//                 <section
//                   key={index}
//                   className="passenger-card"
//                 >

//                   {/* HEADER */}

//                   <div className="passenger-card-header">

//                     <div>

//                       <h2>

//                         {getPassengerLabel(
//                           passenger.type,
//                           index
//                         )}

//                       </h2>

//                       <span
//                         className={`passenger-type ${passenger.type.toLowerCase()}`}
//                       >

//                         {passenger.type}

//                       </span>

//                     </div>


//                     <div className="passenger-fare">

//                       <span>
//                         Ticket Fare
//                       </span>

//                       <strong>

//                         ₹{" "}

//                         {getPassengerFare(
//                           passenger.type
//                         ).toLocaleString(
//                           "en-IN"
//                         )}

//                       </strong>

//                     </div>

//                   </div>


//                   {/* FORM */}

//                   <div className="passenger-form">


//                     {/* FIRST NAME */}

//                     <div className="form-field">

//                       <label>
//                         First Name
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="Enter first name"
//                         value={
//                           passenger.firstName
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "firstName",
//                             e.target.value
//                           )
//                         }
//                       />

//                     </div>


//                     {/* LAST NAME */}

//                     <div className="form-field">

//                       <label>
//                         Last Name
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="Enter last name"
//                         value={
//                           passenger.lastName
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "lastName",
//                             e.target.value
//                           )
//                         }
//                       />

//                     </div>


//                     {/* DOB */}

//                     <div className="form-field">

//                       <label>
//                         Date of Birth
//                       </label>

//                       <input
//                         type="date"
//                         value={
//                           passenger.dob
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "dob",
//                             e.target.value
//                           )
//                         }
//                       />

//                     </div>


//                     {/* GENDER */}

//                     <div className="form-field">

//                       <label>
//                         Gender
//                       </label>

//                       <select
//                         value={
//                           passenger.gender
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "gender",
//                             e.target.value
//                           )
//                         }
//                       >

//                         <option value="">
//                           Select Gender
//                         </option>

//                         <option value="Male">
//                           Male
//                         </option>

//                         <option value="Female">
//                           Female
//                         </option>

//                         <option value="Other">
//                           Other
//                         </option>

//                       </select>

//                     </div>


//                     {/* NATIONALITY */}

//                     <div className="form-field">

//                       <label>
//                         Nationality
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="Enter nationality"
//                         value={
//                           passenger.nationality
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "nationality",
//                             e.target.value
//                           )
//                         }
//                       />

//                     </div>


//                     {/* PASSPORT */}

//                     <div className="form-field">

//                       <label>
//                         Passport Number
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="Enter passport number"
//                         value={
//                           passenger.passport
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "passport",
//                             e.target.value
//                           )
//                         }
//                       />

//                     </div>


//                     {/* PASSPORT EXPIRY */}

//                     <div className="form-field">

//                       <label>
//                         Passport Expiry
//                       </label>

//                       <input
//                         type="date"
//                         value={
//                           passenger.passportExpiry
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "passportExpiry",
//                             e.target.value
//                           )
//                         }
//                       />

//                     </div>


//                     {/* EMAIL */}

//                     <div className="form-field">

//                       <label>

//                         Email Address

//                         {index !== 0 && (
//                           <span>
//                             {" "}Optional
//                           </span>
//                         )}

//                       </label>

//                       <input
//                         type="email"
//                         placeholder="Enter email address"
//                         value={
//                           passenger.email
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "email",
//                             e.target.value
//                           )
//                         }
//                       />

//                     </div>


//                     {/* PHONE */}

//                     <div className="form-field">

//                       <label>

//                         Phone Number

//                         {index !== 0 && (
//                           <span>
//                             {" "}Optional
//                           </span>
//                         )}

//                       </label>

//                       <input
//                         type="tel"
//                         placeholder="Enter phone number"
//                         value={
//                           passenger.phone
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "phone",
//                             e.target.value
//                           )
//                         }
//                       />

//                     </div>


//                     {/* CITY */}

//                     <div className="form-field">

//                       <label>
//                         City
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="Enter city"
//                         value={
//                           passenger.city
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "city",
//                             e.target.value
//                           )
//                         }
//                       />

//                     </div>


//                     {/* ADDRESS */}

//                     <div className="form-field full-width">

//                       <label>
//                         Full Address
//                       </label>

//                       <textarea
//                         rows="2"
//                         placeholder="Enter full address"
//                         value={
//                           passenger.address
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "address",
//                             e.target.value
//                           )
//                         }
//                       />

//                     </div>

//                   </div>

//                 </section>

//               )
//             )}

//           </div>


//           {/* ============================================
//                     FINAL BOOKING SUMMARY
//           ============================================ */}

//           <section className="booking-total-box">

//             <div className="total-heading">

//               <div>

//                 <span>
//                   Final Summary
//                 </span>

//                 <h3>
//                   Booking Summary
//                 </h3>

//               </div>


//               <div className="total-main-price">

//                 <span>
//                   Total
//                 </span>

//                 <strong>

//                   ₹{" "}

//                   {passengerFareTotal.toLocaleString(
//                     "en-IN"
//                   )}

//                 </strong>

//               </div>

//             </div>


//             <div className="total-rows">

//               <div>

//                 <span>
//                   Adult × {adultCount}
//                 </span>

//                 <strong>

//                   ₹{" "}

//                   {adultTotal.toLocaleString(
//                     "en-IN"
//                   )}

//                 </strong>

//               </div>


//               {childCount > 0 && (

//                 <div>

//                   <span>
//                     Child × {childCount}
//                   </span>

//                   <strong>

//                     ₹{" "}

//                     {childTotal.toLocaleString(
//                       "en-IN"
//                     )}

//                   </strong>

//                 </div>

//               )}


//               {infantCount > 0 && (

//                 <div>

//                   <span>
//                     Infant × {infantCount}
//                   </span>

//                   <strong>

//                     ₹{" "}

//                     {infantTotal.toLocaleString(
//                       "en-IN"
//                     )}

//                   </strong>

//                 </div>

//               )}

//             </div>


//             <div className="final-total">

//               <span>
//                 Total Flight Fare
//               </span>

//               <strong>

//                 ₹{" "}

//                 {passengerFareTotal.toLocaleString(
//                   "en-IN"
//                 )}

//               </strong>

//             </div>

//           </section>


//           {/* ============================================
//                          CONTINUE
//           ============================================ */}

//           <button
//             type="button"
//             className="continue-btn"
//             onClick={
//               handleContinue
//             }
//           >

//             Continue To Payment

//           </button>


//         </div>

//       </main>


//       <Footer />

//     </>
//   );

// }


// export default Booking;



import "./Booking.css";

import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


function Booking() {

  const navigate = useNavigate();
  const location = useLocation();


  // =====================================================
  // FLIGHT
  // =====================================================

  const selectedFlight =
    location.state?.flight || null;


  // =====================================================
  // TRAVELLERS
  // =====================================================

  const travellers =
    location.state?.travellers || {
      adults: 1,
      children: 0,
      infants: 0,
      cabin: "Economy",
    };


  const previousPricing =
    location.state?.pricing || {};


  // =====================================================
  // PASSENGER COUNTS
  // =====================================================

  const adultCount = Math.max(
    Number(travellers.adults) || 1,
    1
  );

  const childCount = Math.max(
    Number(travellers.children) || 0,
    0
  );

  const infantCount = Math.max(
    Number(travellers.infants) || 0,
    0
  );

  const totalPassengers =
    adultCount +
    childCount +
    infantCount;


  // =====================================================
  // ROLE BASED FARES
  // =====================================================

  const getLoggedInRole = () => {
    const directRoleKeys = [
      "userRole",
      "role",
      "accountType",
    ];

    for (const key of directRoleKeys) {
      const value = localStorage.getItem(key);

      if (value) {
        const role = String(value).trim().toLowerCase();

        if (role === "agent" || role === "customer" || role === "admin") {
          return role;
        }
      }
    }

    const userKeys = [
      "user",
      "currentUser",
      "loggedInUser",
      "authUser",
    ];

    for (const key of userKeys) {
      const value = localStorage.getItem(key);

      if (!value) continue;

      try {
        const user = JSON.parse(value);
        const role = String(
          user?.role ||
          user?.user?.role ||
          user?.accountType ||
          ""
        ).trim().toLowerCase();

        if (role === "agent" || role === "customer" || role === "admin") {
          return role;
        }
      } catch {
        const role = String(value).trim().toLowerCase();

        if (role === "agent" || role === "customer" || role === "admin") {
          return role;
        }
      }
    }

    return "customer";
  };

  const loggedInRole = getLoggedInRole();
  const isAgent = loggedInRole === "agent";

  // Agent gets only agent fare.
  // Customer/admin gets customer fare.
  const adultFare = Number(
    isAgent
      ? selectedFlight?.agentAdultFare ??
        previousPricing?.agentAdultFare ??
        0
      : selectedFlight?.adultFare ??
        previousPricing?.adultFare ??
        selectedFlight?.finalPrice ??
        0
  );

  const childFare = Number(
    isAgent
      ? selectedFlight?.agentChildFare ??
        previousPricing?.agentChildFare ??
        0
      : selectedFlight?.childFare ??
        previousPricing?.childFare ??
        0
  );

  const infantFare = Number(
    isAgent
      ? selectedFlight?.agentInfantFare ??
        previousPricing?.agentInfantFare ??
        0
      : selectedFlight?.infantFare ??
        previousPricing?.infantFare ??
        0
  );

  console.log("BOOKING FARE ROLE:", loggedInRole);
  console.log("BOOKING FARES:", {
    adultFare,
    childFare,
    infantFare,
  });


  // =====================================================
  // PASSENGER TOTALS
  // =====================================================

  const adultTotal =
    adultFare * adultCount;

  const childTotal =
    childFare * childCount;

  const infantTotal =
    infantFare * infantCount;

  const passengerFareTotal =
    adultTotal +
    childTotal +
    infantTotal;


  // =====================================================
  // PASSENGER OBJECT
  // =====================================================

  const createPassenger = (type) => ({
    type,

    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    nationality: "",
    passport: "",
    passportExpiry: "",

    email: "",
    phone: "",

    city: "",
    address: "",
  });


  // =====================================================
  // CREATE PASSENGER LIST
  // =====================================================

  const createPassengerList = () => {

    const list = [];


    // Adults
    for (
      let i = 0;
      i < adultCount;
      i++
    ) {

      list.push(
        createPassenger("Adult")
      );

    }


    // Children
    for (
      let i = 0;
      i < childCount;
      i++
    ) {

      list.push(
        createPassenger("Child")
      );

    }


    // Infants
    for (
      let i = 0;
      i < infantCount;
      i++
    ) {

      list.push(
        createPassenger("Infant")
      );

    }


    return list;

  };


  // =====================================================
  // PASSENGERS STATE
  // =====================================================

  const [
    passengers,
    setPassengers,
  ] = useState(
    createPassengerList
  );


  // =====================================================
  // CHANGE PASSENGER
  // =====================================================

  const handlePassengerChange = (
    index,
    field,
    value
  ) => {

    setPassengers(
      (previousPassengers) =>
        previousPassengers.map(
          (
            passenger,
            passengerIndex
          ) => {

            if (
              passengerIndex !== index
            ) {
              return passenger;
            }


            return {
              ...passenger,
              [field]: value,
            };

          }
        )
    );

  };


  // =====================================================
  // VALIDATION
  // =====================================================

  const validatePassengers = () => {

    for (
      let i = 0;
      i < passengers.length;
      i++
    ) {

      const passenger =
        passengers[i];

      const passengerNumber =
        i + 1;


      if (
        !passenger.firstName.trim()
      ) {

        alert(
          `Please enter First Name for Passenger ${passengerNumber}`
        );

        return false;

      }


      if (
        !passenger.lastName.trim()
      ) {

        alert(
          `Please enter Last Name for Passenger ${passengerNumber}`
        );

        return false;

      }


      if (
        !passenger.dob
      ) {

        alert(
          `Please select Date of Birth for Passenger ${passengerNumber}`
        );

        return false;

      }


      if (
        !passenger.gender
      ) {

        alert(
          `Please select Gender for Passenger ${passengerNumber}`
        );

        return false;

      }


      if (
        !passenger.nationality.trim()
      ) {

        alert(
          `Please enter Nationality for Passenger ${passengerNumber}`
        );

        return false;

      }


      if (
        !passenger.passport.trim()
      ) {

        alert(
          `Please enter Passport Number for Passenger ${passengerNumber}`
        );

        return false;

      }


      if (
        !passenger.passportExpiry
      ) {

        alert(
          `Please select Passport Expiry for Passenger ${passengerNumber}`
        );

        return false;

      }


      // First passenger is contact passenger

      if (
        i === 0 &&
        !passenger.email.trim()
      ) {

        alert(
          "Please enter Email Address"
        );

        return false;

      }


      if (
        i === 0 &&
        !passenger.phone.trim()
      ) {

        alert(
          "Please enter Phone Number"
        );

        return false;

      }


      if (
        !passenger.city.trim()
      ) {

        alert(
          `Please enter City for Passenger ${passengerNumber}`
        );

        return false;

      }

    }


    return true;

  };


  // =====================================================
  // PASSENGER LABEL
  // =====================================================

  const getPassengerLabel = (
    type,
    index
  ) => {

    const sameTypePassengers =
      passengers.filter(
        (item) =>
          item.type === type
      );


    const currentIndex =
      sameTypePassengers.findIndex(
        (item) =>
          item === passengers[index]
      );


    if (
      type === "Adult"
    ) {

      return `Adult ${
        currentIndex + 1
      }`;

    }


    if (
      type === "Child"
    ) {

      return `Child ${
        currentIndex + 1
      }`;

    }


    return `Infant ${
      currentIndex + 1
    }`;

  };


  // =====================================================
  // PASSENGER FARE
  // =====================================================

  const getPassengerFare = (
    type
  ) => {

    if (
      type === "Child"
    ) {

      return childFare;

    }


    if (
      type === "Infant"
    ) {

      return infantFare;

    }


    return adultFare;

  };


  // =====================================================
  // BAGGAGE ALLOWANCE
  // =====================================================

  /*
    Admin flight me baggage allowance
    jis bhi field me save ho usko support
    karne ke liye multiple fallbacks.
  */

  // =====================================================
  // EXACT BAGGAGE FROM ADMIN ADD FLIGHT
  // =====================================================

  const cabinBaggage =
    selectedFlight?.cabinBaggage ||
    selectedFlight?.cabins?.[0]?.cabinBaggage ||
    selectedFlight?.cabins?.[0]?.baggageCabin ||
    selectedFlight?.baggage?.cabinBaggage ||
    selectedFlight?.baggage?.cabin ||
    "";

  const checkinBaggage =
    selectedFlight?.checkinBaggage ||
    selectedFlight?.cabins?.[0]?.checkinBaggage ||
    selectedFlight?.cabins?.[0]?.baggage ||
    selectedFlight?.baggage?.checkinBaggage ||
    selectedFlight?.baggage?.checkin ||
    "";

  // React cannot render a baggage object directly.
  // Keep the complete object for the next step, but display text only.
  const baggageAllowance =
    checkinBaggage || cabinBaggage || "";


  // =====================================================
  // CONTINUE TO PAYMENT
  // =====================================================

  const handleContinue = () => {

    // -----------------------------------------------
    // VALIDATE PASSENGERS
    // -----------------------------------------------

    if (
      !validatePassengers()
    ) {

      return;

    }


    // -----------------------------------------------
    // GET FLIGHT ID
    // -----------------------------------------------

    const flightId =
      selectedFlight?._id ||
      selectedFlight?.id ||
      selectedFlight?.flightId;


    if (!flightId) {

      alert(
        "Flight ID is missing. Please go back and select the flight again."
      );

      console.error(
        "FLIGHT ID MISSING:",
        selectedFlight
      );

      return;

    }


    // -----------------------------------------------
    // CLEAN FLIGHT DATA
    // -----------------------------------------------

    const flight = {

      ...selectedFlight,

      _id:
        flightId,

      flightId:
        flightId,


      // ---------------------------------------------
      // FARES
      // ---------------------------------------------

      adultFare:
        adultFare,

      childFare:
        childFare,

      infantFare:
        infantFare,

      // Keep original fare values available for admin/debugging,
      // while adultFare/childFare/infantFare above are role-specific.
      agentAdultFare:
        selectedFlight?.agentAdultFare ??
        null,

      agentChildFare:
        selectedFlight?.agentChildFare ??
        null,

      agentInfantFare:
        selectedFlight?.agentInfantFare ??
        null,

      fareRole:
        loggedInRole,

      adultTotal:
        adultTotal,

      childTotal:
        childTotal,

      infantTotal:
        infantTotal,

      passengerFareTotal:
        passengerFareTotal,


      // ---------------------------------------------
      // BAGGAGE ALLOWANCE
      // ---------------------------------------------

      cabinBaggage:
        cabinBaggage,

      checkinBaggage:
        checkinBaggage,

      baggageAllowance:
        baggageAllowance,

      baggage: {
        cabinBaggage,
        cabin: cabinBaggage,
        checkinBaggage,
        checkin: checkinBaggage,
        weight: checkinBaggage,
      },


      // ---------------------------------------------
      // SEAT
      // Airline will assign seat
      // ---------------------------------------------

      seat:
        "Assigned by Airline",


      // ---------------------------------------------
      // MEAL
      // Airline rules
      // ---------------------------------------------

      meal:
        "As per Airline",

    };


    // =================================================
    // BOOKING STATE
    // =================================================

    const bookingState = {

      // -----------------------------------------------
      // FLIGHT
      // -----------------------------------------------

      flight,

      flightId,


      // -----------------------------------------------
      // TRAVELLERS
      // -----------------------------------------------

      travellers: {

        adults:
          adultCount,

        children:
          childCount,

        infants:
          infantCount,

        totalPassengers:
          totalPassengers,

        cabin:
          travellers.cabin ||
          "Economy",

      },


      // -----------------------------------------------
      // ALL PASSENGERS
      // -----------------------------------------------

      passengers:
        passengers.map(
          (passenger) => ({
            ...passenger,

            type:
              passenger.type ||
              "Adult",
          })
        ),


      // -----------------------------------------------
      // FIRST PASSENGER
      // Backward compatibility
      // -----------------------------------------------

      passenger:
        passengers[0],


      // -----------------------------------------------
      // PRICING
      // -----------------------------------------------

      pricing: {

        adultFare,

        childFare,

        infantFare,

        agentAdultFare:
          selectedFlight?.agentAdultFare ??
          null,

        agentChildFare:
          selectedFlight?.agentChildFare ??
          null,

        agentInfantFare:
          selectedFlight?.agentInfantFare ??
          null,

        fareRole:
          loggedInRole,

        adultTotal:

        childTotal,

        infantTotal,

        passengerFareTotal,

        cabinBaggage,
        checkinBaggage,

        // No seat fee
        totalSeatPrice:
          0,

        // No meal fee
        mealTotal:
          0,

        // No extra baggage fee
        baggagePrice:
          0,

      },


      // -----------------------------------------------
      // AIRLINE INFORMATION
      // -----------------------------------------------

      seat:
        "Assigned by Airline",

      meal:
        "As per Airline",

      cabinBaggage:
        cabinBaggage,

      checkinBaggage:
        checkinBaggage,

      baggage: {
        cabinBaggage,
        cabin: cabinBaggage,
        checkinBaggage,
        checkin: checkinBaggage,
        weight: checkinBaggage,
      },

    };


    // =================================================
    // DEBUG
    // =================================================

    console.log(
      "================================="
    );

    console.log(
      "BOOKING → PAYMENT"
    );

    console.log(
      "Flight:",
      flight
    );

    console.log(
      "Passengers:",
      passengers
    );

    console.log(
      "Adults:",
      adultCount
    );

    console.log(
      "Children:",
      childCount
    );

    console.log(
      "Infants:",
      infantCount
    );

    console.log(
      "Total Fare:",
      passengerFareTotal
    );

    console.log(
      "Baggage:",
      baggageAllowance
    );

    console.log(
      "================================="
    );


    // =================================================
    // DIRECT PAYMENT
    // =================================================

    navigate(
      "/payment",
      {
        state:
          bookingState,
      }
    );

  };


  // =====================================================
  // NO FLIGHT
  // =====================================================

  if (
    !selectedFlight
  ) {

    return (
      <>

        <Navbar />

        <section className="booking-page">

          <div className="no-flight-selected">

            <h2>
              No Flight Selected ✈️
            </h2>

            <p>
              Please search and select a
              flight before continuing
              to booking.
            </p>

            <button
              className="back-home-btn"
              onClick={() =>
                navigate("/")
              }
            >
              Back To Home
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


      <main className="booking-page">

        <div className="booking-container">


          {/* ============================================
                     FLIGHT SUMMARY
          ============================================ */}

          <div className="booking-flight-summary">

            <div className="booking-summary-top">

              <div>

                <span className="booking-small-title">
                  Booking Details
                </span>

                <h2>
                  Passenger Details
                </h2>

                <p>

                  {selectedFlight.airline}

                  {" • "}

                  {selectedFlight.flightNo}

                  {" • "}

                  {selectedFlight.fromCode}

                  {" → "}

                  {selectedFlight.toCode}

                </p>

              </div>


              <div className="booking-flight-price">

                <span>
                  Ticket Fare
                </span>

                <strong>

                  ₹{" "}

                  {passengerFareTotal.toLocaleString(
                    "en-IN"
                  )}

                </strong>

              </div>

            </div>


            {/* ==========================================
                         TRAVELLER BADGES
            ========================================== */}

            <div className="traveller-badges">

              <span className="traveller-badge">

                👤 {adultCount} Adult
                {adultCount > 1
                  ? "s"
                  : ""}

              </span>


              {childCount > 0 && (

                <span className="traveller-badge">

                  🧒 {childCount} Child
                  {childCount > 1
                    ? "ren"
                    : ""}

                </span>

              )}


              {infantCount > 0 && (

                <span className="traveller-badge">

                  👶 {infantCount} Infant
                  {infantCount > 1
                    ? "s"
                    : ""}

                </span>

              )}


              <span className="traveller-badge">

                💺{" "}

                {travellers.cabin ||
                  "Economy"}

              </span>

            </div>


            {/* ==========================================
                       FLIGHT INFORMATION
            ========================================== */}

            <div className="fare-mini-summary">

              <div>

                <span>
                  Adult ({adultCount})
                </span>

                <strong>

                  ₹{" "}

                  {adultTotal.toLocaleString(
                    "en-IN"
                  )}

                </strong>

              </div>


              {childCount > 0 && (

                <div>

                  <span>
                    Child ({childCount})
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

                <div>

                  <span>
                    Infant ({infantCount})
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


            {/* ==========================================
                         AIRLINE SERVICES
            ========================================== */}

            <div className="booking-airline-info">

              <div>

                <span>
                  Seat
                </span>

                <strong>
                  Assigned by Airline
                </strong>

              </div>


              <div>

                <span>
                  Meal
                </span>

                <strong>
                  As per Airline
                </strong>

              </div>


              <div>

                <span>
                  Baggage
                </span>

                <strong>
                  {checkinBaggage || cabinBaggage || "—"}
                </strong>

              </div>

            </div>

          </div>


          {/* ============================================
                       PASSENGER CARDS
          ============================================ */}

          <div className="passengers-list">

            {passengers.map(
              (
                passenger,
                index
              ) => (

                <section
                  key={index}
                  className="passenger-card"
                >

                  {/* HEADER */}

                  <div className="passenger-card-header">

                    <div>

                      <h2>

                        {getPassengerLabel(
                          passenger.type,
                          index
                        )}

                      </h2>

                      <span
                        className={`passenger-type ${passenger.type.toLowerCase()}`}
                      >

                        {passenger.type}

                      </span>

                    </div>


                    <div className="passenger-fare">

                      <span>
                        Ticket Fare
                      </span>

                      <strong>

                        ₹{" "}

                        {getPassengerFare(
                          passenger.type
                        ).toLocaleString(
                          "en-IN"
                        )}

                      </strong>

                    </div>

                  </div>


                  {/* FORM */}

                  <div className="passenger-form">


                    {/* FIRST NAME */}

                    <div className="form-field">

                      <label>
                        First Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter first name"
                        value={
                          passenger.firstName
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "firstName",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* LAST NAME */}

                    <div className="form-field">

                      <label>
                        Last Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter last name"
                        value={
                          passenger.lastName
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "lastName",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* DOB */}

                    <div className="form-field">

                      <label>
                        Date of Birth
                      </label>

                      <input
                        type="date"
                        value={
                          passenger.dob
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "dob",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* GENDER */}

                    <div className="form-field">

                      <label>
                        Gender
                      </label>

                      <select
                        value={
                          passenger.gender
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "gender",
                            e.target.value
                          )
                        }
                      >

                        <option value="">
                          Select Gender
                        </option>

                        <option value="Male">
                          Male
                        </option>

                        <option value="Female">
                          Female
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                    </div>


                    {/* NATIONALITY */}

                    <div className="form-field">

                      <label>
                        Nationality
                      </label>

                      <input
                        type="text"
                        placeholder="Enter nationality"
                        value={
                          passenger.nationality
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "nationality",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* PASSPORT */}

                    <div className="form-field">

                      <label>
                        Passport Number
                      </label>

                      <input
                        type="text"
                        placeholder="Enter passport number"
                        value={
                          passenger.passport
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "passport",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* PASSPORT EXPIRY */}

                    <div className="form-field">

                      <label>
                        Passport Expiry
                      </label>

                      <input
                        type="date"
                        value={
                          passenger.passportExpiry
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "passportExpiry",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* EMAIL */}

                    <div className="form-field">

                      <label>

                        Email Address

                        {index !== 0 && (
                          <span>
                            {" "}Optional
                          </span>
                        )}

                      </label>

                      <input
                        type="email"
                        placeholder="Enter email address"
                        value={
                          passenger.email
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "email",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* PHONE */}

                    <div className="form-field">

                      <label>

                        Phone Number

                        {index !== 0 && (
                          <span>
                            {" "}Optional
                          </span>
                        )}

                      </label>

                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        value={
                          passenger.phone
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "phone",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* CITY */}

                    <div className="form-field">

                      <label>
                        City
                      </label>

                      <input
                        type="text"
                        placeholder="Enter city"
                        value={
                          passenger.city
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "city",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* ADDRESS */}

                    <div className="form-field full-width">

                      <label>
                        Full Address
                      </label>

                      <textarea
                        rows="2"
                        placeholder="Enter full address"
                        value={
                          passenger.address
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "address",
                            e.target.value
                          )
                        }
                      />

                    </div>

                  </div>

                </section>

              )
            )}

          </div>


          {/* ============================================
                    FINAL BOOKING SUMMARY
          ============================================ */}

          <section className="booking-total-box">

            <div className="total-heading">

              <div>

                <span>
                  Final Summary
                </span>

                <h3>
                  Booking Summary
                </h3>

              </div>


              <div className="total-main-price">

                <span>
                  Total
                </span>

                <strong>

                  ₹{" "}

                  {passengerFareTotal.toLocaleString(
                    "en-IN"
                  )}

                </strong>

              </div>

            </div>


            <div className="total-rows">

              <div>

                <span>
                  Adult × {adultCount}
                </span>

                <strong>

                  ₹{" "}

                  {adultTotal.toLocaleString(
                    "en-IN"
                  )}

                </strong>

              </div>


              {childCount > 0 && (

                <div>

                  <span>
                    Child × {childCount}
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

                <div>

                  <span>
                    Infant × {infantCount}
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


            <div className="final-total">

              <span>
                Total Flight Fare
              </span>

              <strong>

                ₹{" "}

                {passengerFareTotal.toLocaleString(
                  "en-IN"
                )}

              </strong>

            </div>

          </section>


          {/* ============================================
                         CONTINUE
          ============================================ */}

          <button
            type="button"
            className="continue-btn"
            onClick={
              handleContinue
            }
          >

            Continue To Payment

          </button>


        </div>

      </main>


      <Footer />

    </>
  );

}


export default Booking;