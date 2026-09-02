
// // import "./Payment.css";

// // import { useState } from "react";
// // import {
// //   useLocation,
// //   useNavigate,
// // } from "react-router-dom";

// // import Navbar from "../../Components/Navbar/Navbar";
// // import Footer from "../../Components/Footer/Footer";


// // function Payment() {

// //   const navigate = useNavigate();
// //   const location = useLocation();


// //   // =====================================================
// //   // BOOKING DATA
// //   // =====================================================

// //   const {
// //     flight,
// //     passenger,
// //     travellers,
// //     pricing,

// //     seats,
// //     seat,

// //     meals,
// //     meal,

// //     baggage,
// //     baggageTotal,
// //   } = location.state || {};

// //   // =====================================================
// //   // USER ROLE
// //   // =====================================================

// //   const getStoredRole = () => {
// //     const directKeys = ["userRole", "role", "accountType"];

// //     for (const key of directKeys) {
// //       const value = localStorage.getItem(key);
// //       if (value) return String(value).toLowerCase();
// //     }

// //     const objectKeys = ["user", "currentUser", "loggedInUser", "authUser"];

// //     for (const key of objectKeys) {
// //       const value = localStorage.getItem(key);
// //       if (!value) continue;

// //       try {
// //         const parsed = JSON.parse(value);
// //         const role = parsed?.role || parsed?.user?.role || parsed?.accountType;
// //         if (role) return String(role).toLowerCase();
// //       } catch {}
// //     }

// //     return "customer";
// //   };

// //   const userRole = getStoredRole();
// //   const isAgent = userRole === "agent";


// //   // =====================================================
// //   // PAYMENT STATE
// //   // =====================================================

// //   const [coupon, setCoupon] =
// //     useState("");

// //   const [discount, setDiscount] =
// //     useState(0);

// //   const [paymentMethod, setPaymentMethod] =
// //     useState("upi");

// //   const [loading, setLoading] =
// //     useState(false);


// //   // =====================================================
// //   // NO BOOKING
// //   // =====================================================

// //   if (!flight || !passenger) {

// //     return (
// //       <>
// //         <Navbar />

// //         <section className="payment-page">

// //           <div className="no-booking">

// //             <h2>
// //               No Booking Found ✈️
// //             </h2>

// //             <p>
// //               Please complete your passenger
// //               details before making payment.
// //             </p>

// //             <button
// //               onClick={() =>
// //                 navigate("/")
// //               }
// //             >
// //               Back To Home
// //             </button>

// //           </div>

// //         </section>

// //         <Footer />
// //       </>
// //     );

// //   }


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


// //   const totalPassengers =
// //     adultCount +
// //     childCount +
// //     infantCount;


// //   // =====================================================
// //   // ARRAYS
// //   // =====================================================

// //   const selectedSeats =
// //     Array.isArray(seats)
// //       ? seats
// //       : seat
// //       ? [seat]
// //       : [];


// //   const selectedMeals =
// //     Array.isArray(meals)
// //       ? meals
// //       : meal
// //       ? [meal]
// //       : [];


// //   const selectedBaggage =
// //     Array.isArray(baggage)
// //       ? baggage
// //       : baggage
// //       ? [baggage]
// //       : [];


// //   // =====================================================
// //   // TICKET FARE
// //   // =====================================================

// //   /*
// //     Priority:

// //     1. pricing calculated by Booking page
// //     2. passengerFareTotal
// //     3. flight finalPrice
// //   */


// //   const flightPrice =
// //     Number(
// //       pricing?.passengerFareTotal ??
// //       flight?.passengerFareTotal ??
// //       flight?.finalPrice ??
// //       flight?.price ??
// //       0
// //     );


// //   // =====================================================
// //   // FALLBACK TICKET CALCULATION
// //   // =====================================================

// //   const adultFare =
// //     Number(
// //       isAgent
// //         ? (pricing?.agentAdultFare ?? flight?.agentAdultFare)
// //         : (pricing?.adultFare ?? flight?.adultFare ?? flight?.price)
// //     ) || 0;


// //   const childFare =
// //     Number(
// //       isAgent
// //         ? (pricing?.agentChildFare ?? flight?.agentChildFare)
// //         : (pricing?.childFare ?? flight?.childFare ?? adultFare)
// //     ) || 0;


// //   const infantFare =
// //     Number(
// //       isAgent
// //         ? (pricing?.agentInfantFare ?? flight?.agentInfantFare)
// //         : (pricing?.infantFare ?? flight?.infantFare)
// //     ) || 0;



// //   /*
// //     Agar Booking page ne passengerFareTotal
// //     nahi bheja hai to yahan calculate hoga.
// //   */

// //   const calculatedPassengerFare =
// //     pricing?.passengerFareTotal !==
// //       undefined
// //       ? Number(
// //           pricing.passengerFareTotal
// //         )
// //       : (
// //           adultFare *
// //             adultCount
// //         ) +
// //         (
// //           childFare *
// //             childCount
// //         ) +
// //         (
// //           infantFare *
// //             infantCount
// //         );


// //   // =====================================================
// //   // SEAT PRICE
// //   // =====================================================

// //   const calculatedSeatPrice =
// //     Number(
// //       pricing?.totalSeatPrice
// //     );


// //   const fallbackSeatPrice = 0;


// //   const seatPrice =
// //     Number.isFinite(
// //       calculatedSeatPrice
// //     ) &&
// //     calculatedSeatPrice > 0
// //       ? calculatedSeatPrice
// //       : fallbackSeatPrice;


// //   // =====================================================
// //   // MEAL PRICE
// //   // =====================================================

// //   const calculatedMealPrice =
// //     Number(
// //       pricing?.mealTotal
// //     );


// //   const fallbackMealPrice =
// //     selectedMeals.reduce(
// //       (
// //         total,
// //         item
// //       ) =>
// //         total +
// //         Number(
// //           item?.price || 0
// //         ),
// //       0
// //     );


// //   const mealPrice =
// //     Number.isFinite(
// //       calculatedMealPrice
// //     )
// //       ? calculatedMealPrice
// //       : fallbackMealPrice;


// //   // =====================================================
// //   // BAGGAGE PRICE
// //   // =====================================================

// //   const calculatedBaggagePrice =
// //     Number(
// //       pricing?.baggageTotal
// //     );


// //   const fallbackBaggagePrice =
// //     Number(
// //       baggageTotal
// //     ) ||
// //     selectedBaggage.reduce(
// //       (
// //         total,
// //         item
// //       ) =>
// //         total +
// //         Number(
// //           item?.price || 0
// //         ),
// //       0
// //     );


// //   const baggagePrice =
// //     Number.isFinite(
// //       calculatedBaggagePrice
// //     )
// //       ? calculatedBaggagePrice
// //       : fallbackBaggagePrice;


// //   // =====================================================
// //   // TAXES
// //   // =====================================================

// //   const taxes =
// //     Number(
// //       flight?.taxes
// //     ) || 0;


// //   // =====================================================
// //   // CONVENIENCE FEE
// //   // =====================================================

// //   const convenienceFee = 0;


// //   // =====================================================
// //   // PASSENGER FARE
// //   // =====================================================

// //   /*
// //     Agar pricing passengerFareTotal
// //     nahi hai to calculated value use hogi.
// //   */

// //   const finalFlightFare =
// //     pricing?.passengerFareTotal !==
// //       undefined
// //       ? Number(
// //           pricing.passengerFareTotal
// //         )
// //       : calculatedPassengerFare;


// //   // =====================================================
// //   // SUBTOTAL
// //   // =====================================================

// //   const subtotal =
// //     finalFlightFare +
// //     seatPrice +
// //     mealPrice +
// //     baggagePrice +
// //     taxes +
// //     convenienceFee;


// //   // =====================================================
// //   // FINAL TOTAL
// //   // =====================================================

// //   const total =
// //     Math.max(
// //       0,
// //       subtotal -
// //         discount
// //     );


// //   // =====================================================
// //   // COUPON
// //   // =====================================================

// //   const applyCoupon = () => {

// //     const code =
// //       coupon
// //         .trim()
// //         .toUpperCase();


// //     if (
// //       code ===
// //       "SAVE500"
// //     ) {

// //       /*
// //         Discount subtotal se zyada
// //         nahi hona chahiye.
// //       */

// //       const finalDiscount =
// //         Math.min(
// //           500,
// //           subtotal
// //         );


// //       setDiscount(
// //         finalDiscount
// //       );


// //       alert(
// //         "Coupon Applied Successfully"
// //       );

// //     } else {

// //       setDiscount(0);

// //       alert(
// //         "Invalid Coupon"
// //       );

// //     }

// //   };


// //   // =====================================================
// //   // PASSENGER TYPE
// //   // =====================================================

// //   const getPassengerType =
// //     (index) => {

// //       if (
// //         index <
// //         adultCount
// //       ) {

// //         return "Adult";

// //       }


// //       if (
// //         index <
// //         adultCount +
// //           childCount
// //       ) {

// //         return "Child";

// //       }


// //       return "Infant";

// //     };


// //   // =====================================================
// //   // TOTALS BY PASSENGER TYPE
// //   // =====================================================

// //   const adultFareTotal =
// //     adultFare *
// //     adultCount;


// //   const childFareTotal =
// //     childFare *
// //     childCount;


// //   const infantFareTotal =
// //     infantFare *
// //     infantCount;


// //   // =====================================================
// //   // COMPLETE BOOKING
// //   // =====================================================

// //   const handlePayment =
// //     async () => {

// //       if (loading) {
// //         return;
// //       }


// //       try {

// //         setLoading(true);


// //         // =================================================
// //         // CHECK FLIGHT ID
// //         // =================================================

// //         const flightId =
// //           flight?._id ||
// //           flight?.id ||
// //           flight?.flightId ||
// //           "";


// //         if (!flightId) {

// //           throw new Error(
// //             "Flight ID is missing."
// //           );

// //         }


// //         // =================================================
// //         // CHECK PASSENGER DATA
// //         // =================================================

// //         if (
// //           totalPassengers <=
// //           0
// //         ) {

// //           throw new Error(
// //             "Passenger information is missing."
// //           );

// //         }


// //         // =================================================
// //         // BOOKING DATA
// //         // =================================================

// //         const bookingData = {

// //           // ===============================================
// //           // CUSTOMER USER ID
// //           // IMPORTANT FOR MY BOOKINGS
// //           // ===============================================

// //           userId:
// //             localStorage.getItem("userId") ||
// //             (() => {
// //               try {
// //                 const user =
// //                   JSON.parse(
// //                     localStorage.getItem("user") || "{}"
// //                   );

// //                 return (
// //                   user?._id ||
// //                   user?.id ||
// //                   null
// //                 );
// //               } catch (error) {
// //                 return null;
// //               }
// //             })(),


// //           // ===============================================
// //           // CUSTOMER / MAIN PASSENGER
// //           // ===============================================

// //           passenger,


// //           // ===============================================
// //           // PASSENGER COUNTS
// //           // ===============================================

// //           travellers: {

// //             adults:
// //               adultCount,

// //             children:
// //               childCount,

// //             infants:
// //               infantCount,

// //             total:
// //               totalPassengers,

// //           },


// //           // ===============================================
// //           // FLIGHT
// //           // ===============================================

// //           flight: {

// //             _id:
// //               flightId,

// //             airline:
// //               flight.airline ||
// //               "",

// //             flightNo:
// //               flight.flightNo ||
// //               "",

// //             flightType:
// //               flight.flightType ||
// //               "Domestic",

// //             aircraft:
// //               flight.aircraft ||
// //               "",

// //             fromCity:
// //               flight.fromCity ||
// //               flight.from ||
// //               "",

// //             fromAirport:
// //               flight.fromAirport ||
// //               "",

// //             fromCode:
// //               flight.fromCode ||
// //               "",

// //             toCity:
// //               flight.toCity ||
// //               flight.to ||
// //               "",

// //             toAirport:
// //               flight.toAirport ||
// //               "",

// //             toCode:
// //               flight.toCode ||
// //               "",

// //             departureDate:
// //               flight.departureDate ||
// //               "",

// //             departureTime:
// //               flight.departureTime ||
// //               flight.departure ||
// //               "",

// //             departureTerminal:
// //               flight.departureTerminal ||
// //               "",

// //             arrivalDate:
// //               flight.arrivalDate ||
// //               "",

// //             arrivalTime:
// //               flight.arrivalTime ||
// //               flight.arrival ||
// //               "",

// //             arrivalTerminal:
// //               flight.arrivalTerminal ||
// //               "",

// //             duration:
// //               flight.duration ||
// //               "",

// //             stops:
// //               flight.stops ||
// //               "Non-stop",

// //             stopAirport:
// //               flight.stopAirport ||
// //               "",


// //             // ===========================================
// //             // ORIGINAL FLIGHT PRICE
// //             // ===========================================

// //             price:
// //               Number(
// //                 flight.price
// //               ) || 0,

// //             finalPrice:
// //               Number(
// //                 flight.finalPrice
// //               ) ||
// //               Number(
// //                 flight.price
// //               ) ||
// //               0,


// //             // ===========================================
// //             // PASSENGER PRICES
// //             // ===========================================

// //             adultFare:
// //               adultFare,

// //             childFare:
// //               childFare,

// //             infantFare:
// //               infantFare,

// //             agentAdultFare:
// //               Number(flight.agentAdultFare) || 0,

// //             agentChildFare:
// //               Number(flight.agentChildFare) || 0,

// //             agentInfantFare:
// //               Number(flight.agentInfantFare) || 0,

// //             fareRole:
// //               userRole,


// //             // ===========================================
// //             // EXTRA SERVICE PRICES
// //             // ===========================================

// //             adultSeatPrice:
// //               Number(
// //                 flight.adultSeatPrice
// //               ) || 0,

// //             childSeatPrice:
// //               Number(
// //                 flight.childSeatPrice
// //               ) || 0,

// //             infantSeatPrice:
// //               Number(
// //                 flight.infantSeatPrice
// //               ) || 0,


// //             adultMealPrice:
// //               Number(
// //                 flight.adultMealPrice
// //               ) || 0,

// //             childMealPrice:
// //               Number(
// //                 flight.childMealPrice
// //               ) || 0,

// //             infantMealPrice:
// //               Number(
// //                 flight.infantMealPrice
// //               ) || 0,


// //             adultBaggagePrice:
// //               Number(
// //                 flight.adultBaggagePrice
// //               ) || 0,

// //             childBaggagePrice:
// //               Number(
// //                 flight.childBaggagePrice
// //               ) || 0,

// //             infantBaggagePrice:
// //               Number(
// //                 flight.infantBaggagePrice
// //               ) || 0,


// //             taxes:
// //               taxes,

// //             serviceFee:
// //               convenienceFee,

// //             logo:
// //               flight.logo ||
// //               "",

// //           },


// //           // ===============================================
// //           // SEATS
// //           // ===============================================

// //           seats:
// //             selectedSeats,

// //           seat:
// //             selectedSeats[0] ||
// //             "",


// //           seatCount:
// //             selectedSeats.length,

// //           seatPrice:
// //             seatPrice,


// //           // ===============================================
// //           // MEALS
// //           // ===============================================

// //           meals:
// //             selectedMeals,

// //           meal:
// //             selectedMeals[0] ||
// //             {
// //               name:
// //                 "No Meal",

// //               price:
// //                 0,
// //             },


// //           mealCount:
// //             selectedMeals.length,

// //           mealPrice:
// //             mealPrice,


// //           // ===============================================
// //           // BAGGAGE
// //           // ===============================================

// //           baggage:
// //             selectedBaggage,

// //           baggageCount:
// //             selectedBaggage.length,

// //           baggagePrice:
// //             baggagePrice,


// //           // ===============================================
// //           // PRICE BREAKDOWN
// //           // ===============================================

// //           priceDetails: {

// //             adultFare:
// //               adultFareTotal,

// //             childFare:
// //               childFareTotal,

// //             infantFare:
// //               infantFareTotal,


// //             flightFare:
// //               finalFlightFare,


// //             seatCharges:
// //               seatPrice,

// //             mealCharges:
// //               mealPrice,

// //             baggageCharges:
// //               baggagePrice,


// //             taxes:
// //               taxes,

// //             convenienceFee:
// //               convenienceFee,

// //             discount:
// //               discount,


// //             subtotal:
// //               subtotal,

// //             total:
// //               total,

// //           },


// //           // ===============================================
// //           // PAYMENT
// //           // ===============================================

// //           paymentMethod:
// //             paymentMethod ||
// //             "upi",

// //           paymentStatus:
// //             "Paid",

// //           fareRole:
// //             userRole,

// //           farePerPassenger:
// //             adultFare,

// //           agentAdultFare:
// //             Number(flight.agentAdultFare) || 0,

// //           bookingStatus:
// //             "Confirmed",


// //           // ===============================================
// //           // OLD / BACKWARD COMPATIBILITY
// //           // ===============================================

// //           discount:
// //             discount,

// //           total:
// //             total,

// //         };


// //         // =================================================
// //         // DEBUG
// //         // =================================================

// //         console.log(
// //           "===================================="
// //         );

// //         console.log(
// //           "ADULTS:",
// //           adultCount
// //         );

// //         console.log(
// //           "CHILDREN:",
// //           childCount
// //         );

// //         console.log(
// //           "INFANTS:",
// //           infantCount
// //         );

// //         console.log(
// //           "FLIGHT FARE:",
// //           finalFlightFare
// //         );

// //         console.log(
// //           "SEAT PRICE:",
// //           seatPrice
// //         );

// //         console.log(
// //           "MEAL PRICE:",
// //           mealPrice
// //         );

// //         console.log(
// //           "BAGGAGE PRICE:",
// //           baggagePrice
// //         );

// //         console.log(
// //           "TAXES:",
// //           taxes
// //         );

// //         console.log(
// //           "CONVENIENCE FEE:",
// //           convenienceFee
// //         );

// //         console.log(
// //           "DISCOUNT:",
// //           discount
// //         );

// //         console.log(
// //           "FINAL TOTAL:",
// //           total
// //         );

// //         console.log(
// //           "CUSTOMER USER ID:",
// //           bookingData.userId
// //         );

// //         console.log(
// //           "BOOKING DATA:",
// //           bookingData
// //         );

// //         console.log(
// //           "===================================="
// //         );


// //         // =================================================
// //         // API
// //         // =================================================

// //         const response =
// //           await fetch(
// //             "http://localhost:5000/api/bookings",
// //             {
// //               method:
// //                 "POST",

// //               headers: {
// //                 "Content-Type":
// //                   "application/json",
// //               },

// //               body:
// //                 JSON.stringify(
// //                   bookingData
// //                 ),
// //             }
// //           );


// //         const data =
// //           await response.json();


// //         console.log(
// //           "BOOKING RESPONSE:",
// //           data
// //         );


// //         // =================================================
// //         // ERROR
// //         // =================================================

// //         if (!response.ok) {

// //           throw new Error(
// //             data.message ||
// //             "Payment failed."
// //           );

// //         }


// //         if (
// //           !data.booking
// //         ) {

// //           throw new Error(
// //             "Booking was not created."
// //           );

// //         }


// //         // =================================================
// //         // SUCCESS
// //         // =================================================

// //         navigate(
// //           "/success",
// //           {
// //             state: {

// //               flight,

// //               passenger,

// //               travellers,

// //               pricing: {
// //                 ...pricing,

// //                 finalFlightFare,

// //                 seatPrice,

// //                 mealPrice,

// //                 baggagePrice,

// //                 taxes,

// //                 convenienceFee,

// //                 discount,

// //                 subtotal,

// //                 total,

// //               },


// //               seats:
// //                 selectedSeats,

// //               seat:
// //                 selectedSeats[0] ||
// //                 "",


// //               meals:
// //                 selectedMeals,

// //               meal:
// //                 selectedMeals[0] ||
// //                 null,


// //               baggage:
// //                 selectedBaggage,


// //               total:
// //                 data.booking.total ??
// //                 total,


// //               bookingId:
// //                 data.booking.bookingId,


// //               pnr:
// //                 data.booking.pnr,

// //             },

// //           }
// //         );


// //       } catch (error) {

// //         console.error(
// //           "PAYMENT ERROR:",
// //           error
// //         );


// //         alert(
// //           error.message ||
// //           "Unable to complete booking."
// //         );

// //       } finally {

// //         setLoading(false);

// //       }

// //     };


// //   // =====================================================
// //   // UI
// //   // =====================================================

// //   return (
// //     <>
// //       <Navbar />


// //       <section className="payment-page">


// //         {/* =================================================
// //                     PROGRESS
// //         ================================================= */}

// //         <div className="payment-progress">

// //           <div className="step active">
// //             <span>✓</span>
// //             <p>Booking</p>
// //           </div>

// //           <div className="line active"></div>

// //           <div className="step active">
// //             <span>✓</span>
// //             <p>Seat</p>
// //           </div>

// //           <div className="line active"></div>

// //           <div className="step active">
// //             <span>✓</span>
// //             <p>Meal</p>
// //           </div>

// //           <div className="line active"></div>

// //           <div className="step active">
// //             <span>✓</span>
// //             <p>Baggage</p>
// //           </div>

// //           <div className="line active"></div>

// //           <div className="step current">
// //             <span>5</span>
// //             <p>Payment</p>
// //           </div>

// //         </div>


// //         {/* =================================================
// //                     CONTAINER
// //         ================================================= */}

// //         <div className="payment-container">


// //           {/* =================================================
// //                     LEFT
// //           ================================================= */}

// //           <div className="payment-left">

// //             <h2>
// //               Select Payment Method
// //             </h2>


// //             {/* UPI */}

// //             <div className="payment-card">

// //               <label>

// //                 <input
// //                   type="radio"
// //                   checked={
// //                     paymentMethod ===
// //                     "upi"
// //                   }
// //                   onChange={() =>
// //                     setPaymentMethod(
// //                       "upi"
// //                     )
// //                   }
// //                 />

// //                 UPI Payment

// //               </label>


// //               {paymentMethod ===
// //                 "upi" && (

// //                 <div className="upi-apps">

// //                   <button type="button">
// //                     PhonePe
// //                   </button>

// //                   <button type="button">
// //                     Google Pay
// //                   </button>

// //                   <button type="button">
// //                     Paytm
// //                   </button>

// //                 </div>

// //               )}

// //             </div>


// //             {/* CARD */}

// //             <div className="payment-card">

// //               <label>

// //                 <input
// //                   type="radio"
// //                   checked={
// //                     paymentMethod ===
// //                     "card"
// //                   }
// //                   onChange={() =>
// //                     setPaymentMethod(
// //                       "card"
// //                     )
// //                   }
// //                 />

// //                 Credit / Debit Card

// //               </label>


// //               {paymentMethod ===
// //                 "card" && (

// //                 <>

// //                   <input
// //                     type="text"
// //                     placeholder="Card Number"
// //                   />

// //                   <div className="card-row">

// //                     <input
// //                       type="text"
// //                       placeholder="MM / YY"
// //                     />

// //                     <input
// //                       type="password"
// //                       placeholder="CVV"
// //                     />

// //                   </div>

// //                 </>

// //               )}

// //             </div>


// //             {/* NET BANKING */}

// //             <div className="payment-card">

// //               <label>

// //                 <input
// //                   type="radio"
// //                   checked={
// //                     paymentMethod ===
// //                     "netbanking"
// //                   }
// //                   onChange={() =>
// //                     setPaymentMethod(
// //                       "netbanking"
// //                     )
// //                   }
// //                 />

// //                 Net Banking

// //               </label>


// //               {paymentMethod ===
// //                 "netbanking" && (

// //                 <select>

// //                   <option>
// //                     Select Bank
// //                   </option>

// //                   <option>
// //                     State Bank of India
// //                   </option>

// //                   <option>
// //                     HDFC Bank
// //                   </option>

// //                   <option>
// //                     ICICI Bank
// //                   </option>

// //                   <option>
// //                     Axis Bank
// //                   </option>

// //                 </select>

// //               )}

// //             </div>


// //             {/* COUPON */}

// //             <div className="coupon-box">

// //               <h3>
// //                 Apply Coupon
// //               </h3>


// //               <div className="coupon-input">

// //                 <input
// //                   type="text"
// //                   placeholder="Enter Coupon Code"
// //                   value={coupon}
// //                   onChange={(e) =>
// //                     setCoupon(
// //                       e.target.value
// //                     )
// //                   }
// //                 />


// //                 <button
// //                   type="button"
// //                   onClick={
// //                     applyCoupon
// //                   }
// //                 >
// //                   Apply
// //                 </button>

// //               </div>


// //               <p className="coupon-note">

// //                 Use{" "}

// //                 <strong>
// //                   SAVE500
// //                 </strong>

// //                 {" "}
// //                 to get ₹500 OFF

// //               </p>

// //             </div>

// //           </div>


// //           {/* =================================================
// //                     RIGHT
// //           ================================================= */}

// //           <div className="payment-right">

// //             <div className="booking-summary">

// //               <h2>
// //                 Booking Summary
// //               </h2>


// //               {/* CUSTOMER */}

// //               <div className="summary-row">

// //                 <span>
// //                   Customer
// //                 </span>

// //                 <span>
// //                   {passenger.firstName}{" "}
// //                   {passenger.lastName}
// //                 </span>

// //               </div>


// //               {/* PASSENGERS */}

// //               <div className="summary-row">

// //                 <span>
// //                   Passengers
// //                 </span>

// //                 <span>

// //                   {adultCount} Adult
// //                   {adultCount >
// //                   1
// //                     ? "s"
// //                     : ""}

// //                   {childCount >
// //                     0 &&
// //                     `, ${childCount} Child${
// //                       childCount >
// //                       1
// //                         ? "ren"
// //                         : ""
// //                     }`}

// //                   {infantCount >
// //                     0 &&
// //                     `, ${infantCount} Infant${
// //                       infantCount >
// //                       1
// //                         ? "s"
// //                         : ""
// //                     }`}

// //                 </span>

// //               </div>


// //               {/* AIRLINE */}

// //               <div className="summary-row">

// //                 <span>
// //                   Airline
// //                 </span>

// //                 <span>
// //                   {flight.airline}
// //                 </span>

// //               </div>


// //               {/* ROUTE */}

// //               <div className="summary-row">

// //                 <span>
// //                   Route
// //                 </span>

// //                 <span>

// //                   {flight.from ||
// //                     flight.fromCity}

// //                   {" → "}

// //                   {flight.to ||
// //                     flight.toCity}

// //                 </span>

// //               </div>


// //               {/* FLIGHT */}

// //               <div className="summary-row">

// //                 <span>
// //                   Flight No.
// //                 </span>

// //                 <span>
// //                   {flight.flightNo}
// //                 </span>

// //               </div>


// //               {/* SEATS */}

// //               <div className="summary-row">

// //                 <span>
// //                   Seats
// //                 </span>

// //                 <span>

// //                   {selectedSeats.length >
// //                   0
// //                     ? selectedSeats.join(
// //                         ", "
// //                       )
// //                     : "-"}

// //                 </span>

// //               </div>


// //               {/* MEALS */}

// //               <div className="summary-row">

// //                 <span>
// //                   Meals
// //                 </span>

// //                 <span>

// //                   {selectedMeals.length >
// //                   0
// //                     ? selectedMeals
// //                         .map(
// //                           (item) =>
// //                             item?.name ||
// //                             "No Meal"
// //                         )
// //                         .join(
// //                           ", "
// //                         )
// //                     : "No Meal"}

// //                 </span>

// //               </div>


// //               {/* BAGGAGE */}

// //               <div className="summary-row">

// //                 <span>
// //                   Baggage
// //                 </span>

// //                 <span>

// //                   {selectedBaggage.length >
// //                   0
// //                     ? selectedBaggage
// //                         .map(
// //                           (item) =>
// //                             item?.weight
// //                         )
// //                         .join(
// //                           ", "
// //                         )
// //                     : "15 KG Included"}

// //                 </span>

// //               </div>


// //               <hr />


// //               {/* =================================================
// //                         PRICE BREAKDOWN
// //               ================================================= */}


// //               <div className="summary-row">

// //                 <span>
// //                   Adult Fare
// //                   ({adultCount})
// //                 </span>

// //                 <span>
// //                   ₹{" "}
// //                   {adultFareTotal.toLocaleString(
// //                     "en-IN"
// //                   )}
// //                 </span>

// //               </div>


// //               {childCount >
// //                 0 && (

// //                 <div className="summary-row">

// //                   <span>
// //                     Child Fare
// //                     ({childCount})
// //                   </span>

// //                   <span>
// //                     ₹{" "}
// //                     {childFareTotal.toLocaleString(
// //                       "en-IN"
// //                     )}
// //                   </span>

// //                 </div>

// //               )}


// //               {infantCount >
// //                 0 && (

// //                 <div className="summary-row">

// //                   <span>
// //                     Infant Fare
// //                     ({infantCount})
// //                   </span>

// //                   <span>
// //                     ₹{" "}
// //                     {infantFareTotal.toLocaleString(
// //                       "en-IN"
// //                     )}
// //                   </span>

// //                 </div>

// //               )}


// //               <div className="summary-row">

// //                 <span>
// //                   Seat Charges
// //                 </span>

// //                 <span>
// //                   ₹{" "}
// //                   {seatPrice.toLocaleString(
// //                     "en-IN"
// //                   )}
// //                 </span>

// //               </div>


// //               <div className="summary-row">

// //                 <span>
// //                   Meal Charges
// //                 </span>

// //                 <span>
// //                   ₹{" "}
// //                   {mealPrice.toLocaleString(
// //                     "en-IN"
// //                   )}
// //                 </span>

// //               </div>


// //               <div className="summary-row">

// //                 <span>
// //                   Baggage Charges
// //                 </span>

// //                 <span>
// //                   ₹{" "}
// //                   {baggagePrice.toLocaleString(
// //                     "en-IN"
// //                   )}
// //                 </span>

// //               </div>


// //               <div className="summary-row">

// //                 <span>
// //                   Taxes
// //                 </span>

// //                 <span>
// //                   ₹{" "}
// //                   {taxes.toLocaleString(
// //                     "en-IN"
// //                   )}
// //                 </span>

// //               </div>


// //               <div className="summary-row">

// //                 <span>
// //                   Convenience Fee
// //                 </span>

// //                 <span>
// //                   ₹{" "}
// //                   {convenienceFee.toLocaleString(
// //                     "en-IN"
// //                   )}
// //                 </span>

// //               </div>


// //               <div className="summary-row discount">

// //                 <span>
// //                   Coupon Discount
// //                 </span>

// //                 <span>
// //                   - ₹{" "}
// //                   {discount.toLocaleString(
// //                     "en-IN"
// //                   )}
// //                 </span>

// //               </div>


// //               <hr />


// //               {/* FINAL */}

// //               <div className="summary-total">

// //                 <span>
// //                   Total Payable
// //                 </span>

// //                 <span>
// //                   ₹{" "}
// //                   {total.toLocaleString(
// //                     "en-IN"
// //                   )}
// //                 </span>

// //               </div>


// //               <div className="secure-payment">

// //                 🔒 100% Secure Payment

// //               </div>


// //               <button
// //                 className="pay-btn"
// //                 onClick={
// //                   handlePayment
// //                 }
// //                 disabled={
// //                   loading
// //                 }
// //               >

// //                 {loading
// //                   ? "Processing..."
// //                   : `Pay ₹ ${total.toLocaleString(
// //                       "en-IN"
// //                     )}`}

// //               </button>

// //             </div>

// //           </div>

// //         </div>

// //       </section>


// //       <Footer />

// //     </>
// //   );

// // }


// // export default Payment;

















// import "./Payment.css";

// import { useState } from "react";
// import { QRCodeSVG } from "qrcode.react";
// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";


// function Payment() {

//   const navigate = useNavigate();
//   const location = useLocation();


//   // =====================================================
//   // BOOKING DATA
//   // =====================================================

//   const {
//     flight,
//     passenger,
//     travellers,
//     pricing,

//     seats,
//     seat,

//     meals,
//     meal,

//     baggage,
//     baggageTotal,
//   } = location.state || {};

//   // =====================================================
//   // USER ROLE
//   // =====================================================

//   const getStoredRole = () => {
//     const directKeys = ["userRole", "role", "accountType"];

//     for (const key of directKeys) {
//       const value = localStorage.getItem(key);
//       if (value) return String(value).toLowerCase();
//     }

//     const objectKeys = ["user", "currentUser", "loggedInUser", "authUser"];

//     for (const key of objectKeys) {
//       const value = localStorage.getItem(key);
//       if (!value) continue;

//       try {
//         const parsed = JSON.parse(value);
//         const role = parsed?.role || parsed?.user?.role || parsed?.accountType;
//         if (role) return String(role).toLowerCase();
//       } catch {}
//     }

//     return "customer";
//   };

//   const userRole = getStoredRole();
//   const isAgent = userRole === "agent";
//   const isAdmin = userRole === "admin";


//   // =====================================================
//   // PAYMENT STATE
//   // =====================================================

//   const [coupon, setCoupon] =
//     useState("");

//   const [discount, setDiscount] =
//     useState(0);

//   const [paymentMethod, setPaymentMethod] =
//     useState("upi");

//   const [loading, setLoading] =
//     useState(false);


//   // =====================================================
//   // NO BOOKING
//   // =====================================================

//   if (!flight || !passenger) {

//     return (
//       <>
//         <Navbar />

//         <section className="payment-page">

//           <div className="no-booking">

//             <h2>
//               No Booking Found ✈️
//             </h2>

//             <p>
//               Please complete your passenger
//               details before making payment.
//             </p>

//             <button
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


//   const totalPassengers =
//     adultCount +
//     childCount +
//     infantCount;


//   // =====================================================
//   // ARRAYS
//   // =====================================================

//   const selectedSeats =
//     Array.isArray(seats)
//       ? seats
//       : seat
//       ? [seat]
//       : [];


//   const selectedMeals =
//     Array.isArray(meals)
//       ? meals
//       : meal
//       ? [meal]
//       : [];


//   const selectedBaggage =
//     Array.isArray(baggage)
//       ? baggage
//       : baggage
//       ? [baggage]
//       : [];


//   // =====================================================
//   // TICKET FARE
//   // =====================================================

//   /*
//     Priority:

//     1. pricing calculated by Booking page
//     2. passengerFareTotal
//     3. flight finalPrice
//   */


//   const flightPrice =
//     Number(
//       pricing?.passengerFareTotal ??
//       flight?.passengerFareTotal ??
//       flight?.finalPrice ??
//       flight?.price ??
//       0
//     );


//   // =====================================================
//   // FALLBACK TICKET CALCULATION
//   // =====================================================

//   const adultFare =
//     Number(
//       isAgent
//         ? (pricing?.agentAdultFare ?? flight?.agentAdultFare)
//         : (pricing?.adultFare ?? flight?.adultFare ?? flight?.price)
//     ) || 0;


//   const childFare =
//     Number(
//       isAgent
//         ? (pricing?.agentChildFare ?? flight?.agentChildFare)
//         : (pricing?.childFare ?? flight?.childFare ?? adultFare)
//     ) || 0;


//   const infantFare =
//     Number(
//       isAgent
//         ? (pricing?.agentInfantFare ?? flight?.agentInfantFare)
//         : (pricing?.infantFare ?? flight?.infantFare)
//     ) || 0;



//   /*
//     Agar Booking page ne passengerFareTotal
//     nahi bheja hai to yahan calculate hoga.
//   */

//   const calculatedPassengerFare =
//     pricing?.passengerFareTotal !==
//       undefined
//       ? Number(
//           pricing.passengerFareTotal
//         )
//       : (
//           adultFare *
//             adultCount
//         ) +
//         (
//           childFare *
//             childCount
//         ) +
//         (
//           infantFare *
//             infantCount
//         );


//   // =====================================================
//   // SEAT PRICE
//   // =====================================================

//   const calculatedSeatPrice =
//     Number(
//       pricing?.totalSeatPrice
//     );


//   const fallbackSeatPrice = 0;


//   const seatPrice =
//     Number.isFinite(
//       calculatedSeatPrice
//     ) &&
//     calculatedSeatPrice > 0
//       ? calculatedSeatPrice
//       : fallbackSeatPrice;


//   // =====================================================
//   // MEAL PRICE
//   // =====================================================

//   const calculatedMealPrice =
//     Number(
//       pricing?.mealTotal
//     );


//   const fallbackMealPrice =
//     selectedMeals.reduce(
//       (
//         total,
//         item
//       ) =>
//         total +
//         Number(
//           item?.price || 0
//         ),
//       0
//     );


//   const mealPrice =
//     Number.isFinite(
//       calculatedMealPrice
//     )
//       ? calculatedMealPrice
//       : fallbackMealPrice;


//   // =====================================================
//   // BAGGAGE PRICE
//   // =====================================================

//   const calculatedBaggagePrice =
//     Number(
//       pricing?.baggageTotal
//     );


//   const fallbackBaggagePrice =
//     Number(
//       baggageTotal
//     ) ||
//     selectedBaggage.reduce(
//       (
//         total,
//         item
//       ) =>
//         total +
//         Number(
//           item?.price || 0
//         ),
//       0
//     );


//   const baggagePrice =
//     Number.isFinite(
//       calculatedBaggagePrice
//     )
//       ? calculatedBaggagePrice
//       : fallbackBaggagePrice;


//   // =====================================================
//   // TAXES
//   // =====================================================

//   const taxes =
//     Number(
//       flight?.taxes
//     ) || 0;


//   // =====================================================
//   // CONVENIENCE FEE
//   // =====================================================

//   const convenienceFee = 0;


//   // =====================================================
//   // PASSENGER FARE
//   // =====================================================

//   /*
//     Agar pricing passengerFareTotal
//     nahi hai to calculated value use hogi.
//   */

//   const finalFlightFare =
//     pricing?.passengerFareTotal !==
//       undefined
//       ? Number(
//           pricing.passengerFareTotal
//         )
//       : calculatedPassengerFare;


//   // =====================================================
//   // SUBTOTAL
//   // =====================================================

//   const subtotal =
//     finalFlightFare +
//     seatPrice +
//     mealPrice +
//     baggagePrice +
//     taxes +
//     convenienceFee;


//   // =====================================================
//   // FINAL TOTAL
//   // =====================================================

//   const total =
//     Math.max(
//       0,
//       subtotal -
//         discount
//     );


//   // =====================================================
//   // DYNAMIC UPI PAYMENT QR
//   // =====================================================

//   const UPI_ID = "eazypay.0000064618@icici";
//   const UPI_NAME = "Saiyed Travels";
//   const upiAmount = Number(total || 0).toFixed(2);

//   const upiPaymentUrl =
//     `upi://pay?pa=${encodeURIComponent(UPI_ID)}` +
//     `&pn=${encodeURIComponent(UPI_NAME)}` +
//     `&am=${upiAmount}` +
//     `&cu=INR` +
//     `&tn=${encodeURIComponent("Saiyed Travels Flight Booking")}`;


//   // =====================================================
//   // COUPON
//   // =====================================================

//   const applyCoupon = () => {

//     const code =
//       coupon
//         .trim()
//         .toUpperCase();


//     if (
//       code ===
//       "SAVE500"
//     ) {

//       /*
//         Discount subtotal se zyada
//         nahi hona chahiye.
//       */

//       const finalDiscount =
//         Math.min(
//           500,
//           subtotal
//         );


//       setDiscount(
//         finalDiscount
//       );


//       alert(
//         "Coupon Applied Successfully"
//       );

//     } else {

//       setDiscount(0);

//       alert(
//         "Invalid Coupon"
//       );

//     }

//   };


//   // =====================================================
//   // PASSENGER TYPE
//   // =====================================================

//   const getPassengerType =
//     (index) => {

//       if (
//         index <
//         adultCount
//       ) {

//         return "Adult";

//       }


//       if (
//         index <
//         adultCount +
//           childCount
//       ) {

//         return "Child";

//       }


//       return "Infant";

//     };


//   // =====================================================
//   // TOTALS BY PASSENGER TYPE
//   // =====================================================

//   const adultFareTotal =
//     adultFare *
//     adultCount;


//   const childFareTotal =
//     childFare *
//     childCount;


//   const infantFareTotal =
//     infantFare *
//     infantCount;


//   // =====================================================
//   // COMPLETE BOOKING
//   // =====================================================

//   const handlePayment =
//     async () => {

//       if (loading) {
//         return;
//       }


//       try {

//         setLoading(true);


//         // =================================================
//         // CHECK FLIGHT ID
//         // =================================================

//         const flightId =
//           flight?._id ||
//           flight?.id ||
//           flight?.flightId ||
//           "";


//         if (!flightId) {

//           throw new Error(
//             "Flight ID is missing."
//           );

//         }


//         // =================================================
//         // CHECK PASSENGER DATA
//         // =================================================

//         if (
//           totalPassengers <=
//           0
//         ) {

//           throw new Error(
//             "Passenger information is missing."
//           );

//         }


//         // =================================================
//         // BOOKING DATA
//         // =================================================

//         const bookingData = {

//           // ===============================================
//           // CUSTOMER USER ID
//           // IMPORTANT FOR MY BOOKINGS
//           // ===============================================

//           userId:
//             localStorage.getItem("userId") ||
//             (() => {
//               try {
//                 const user =
//                   JSON.parse(
//                     localStorage.getItem("user") || "{}"
//                   );

//                 return (
//                   user?._id ||
//                   user?.id ||
//                   null
//                 );
//               } catch (error) {
//                 return null;
//               }
//             })(),


//           // ===============================================
//           // CUSTOMER / MAIN PASSENGER
//           // ===============================================

//           passenger,


//           // ===============================================
//           // PASSENGER COUNTS
//           // ===============================================

//           travellers: {

//             adults:
//               adultCount,

//             children:
//               childCount,

//             infants:
//               infantCount,

//             total:
//               totalPassengers,

//           },


//           // ===============================================
//           // FLIGHT
//           // ===============================================

//           flight: {

//             _id:
//               flightId,

//             airline:
//               flight.airline ||
//               "",

//             flightNo:
//               flight.flightNo ||
//               "",

//             flightType:
//               flight.flightType ||
//               "Domestic",

//             aircraft:
//               flight.aircraft ||
//               "",

//             fromCity:
//               flight.fromCity ||
//               flight.from ||
//               "",

//             fromAirport:
//               flight.fromAirport ||
//               "",

//             fromCode:
//               flight.fromCode ||
//               "",

//             toCity:
//               flight.toCity ||
//               flight.to ||
//               "",

//             toAirport:
//               flight.toAirport ||
//               "",

//             toCode:
//               flight.toCode ||
//               "",

//             departureDate:
//               flight.departureDate ||
//               "",

//             departureTime:
//               flight.departureTime ||
//               flight.departure ||
//               "",

//             departureTerminal:
//               flight.departureTerminal ||
//               "",

//             arrivalDate:
//               flight.arrivalDate ||
//               "",

//             arrivalTime:
//               flight.arrivalTime ||
//               flight.arrival ||
//               "",

//             arrivalTerminal:
//               flight.arrivalTerminal ||
//               "",

//             duration:
//               flight.duration ||
//               "",

//             stops:
//               flight.stops ||
//               "Non-stop",

//             stopAirport:
//               flight.stopAirport ||
//               "",


//             // ===========================================
//             // ORIGINAL FLIGHT PRICE
//             // ===========================================

//             price:
//               Number(
//                 flight.price
//               ) || 0,

//             finalPrice:
//               Number(
//                 flight.finalPrice
//               ) ||
//               Number(
//                 flight.price
//               ) ||
//               0,


//             // ===========================================
//             // PASSENGER PRICES
//             // ===========================================

//             adultFare:
//               adultFare,

//             childFare:
//               childFare,

//             infantFare:
//               infantFare,

//             agentAdultFare:
//               Number(flight.agentAdultFare) || 0,

//             agentChildFare:
//               Number(flight.agentChildFare) || 0,

//             agentInfantFare:
//               Number(flight.agentInfantFare) || 0,

//             fareRole:
//               userRole,


//             // ===========================================
//             // EXTRA SERVICE PRICES
//             // ===========================================

//             adultSeatPrice:
//               Number(
//                 flight.adultSeatPrice
//               ) || 0,

//             childSeatPrice:
//               Number(
//                 flight.childSeatPrice
//               ) || 0,

//             infantSeatPrice:
//               Number(
//                 flight.infantSeatPrice
//               ) || 0,


//             adultMealPrice:
//               Number(
//                 flight.adultMealPrice
//               ) || 0,

//             childMealPrice:
//               Number(
//                 flight.childMealPrice
//               ) || 0,

//             infantMealPrice:
//               Number(
//                 flight.infantMealPrice
//               ) || 0,


//             adultBaggagePrice:
//               Number(
//                 flight.adultBaggagePrice
//               ) || 0,

//             childBaggagePrice:
//               Number(
//                 flight.childBaggagePrice
//               ) || 0,

//             infantBaggagePrice:
//               Number(
//                 flight.infantBaggagePrice
//               ) || 0,


//             taxes:
//               taxes,

//             serviceFee:
//               convenienceFee,

//             logo:
//               flight.logo ||
//               "",

//           },


//           // ===============================================
//           // SEATS
//           // ===============================================

//           seats:
//             selectedSeats,

//           seat:
//             selectedSeats[0] ||
//             "",


//           seatCount:
//             selectedSeats.length,

//           seatPrice:
//             seatPrice,


//           // ===============================================
//           // MEALS
//           // ===============================================

//           meals:
//             selectedMeals,

//           meal:
//             selectedMeals[0] ||
//             {
//               name:
//                 "No Meal",

//               price:
//                 0,
//             },


//           mealCount:
//             selectedMeals.length,

//           mealPrice:
//             mealPrice,


//           // ===============================================
//           // BAGGAGE
//           // ===============================================

//           baggage:
//             selectedBaggage,

//           baggageCount:
//             selectedBaggage.length,

//           baggagePrice:
//             baggagePrice,


//           // ===============================================
//           // PRICE BREAKDOWN
//           // ===============================================

//           priceDetails: {

//             adultFare:
//               adultFareTotal,

//             childFare:
//               childFareTotal,

//             infantFare:
//               infantFareTotal,


//             flightFare:
//               finalFlightFare,


//             seatCharges:
//               seatPrice,

//             mealCharges:
//               mealPrice,

//             baggageCharges:
//               baggagePrice,


//             taxes:
//               taxes,

//             convenienceFee:
//               convenienceFee,

//             discount:
//               discount,


//             subtotal:
//               subtotal,

//             total:
//               total,

//           },


//           // ===============================================
//           // PAYMENT
//           // ===============================================

//           paymentMethod:
//             paymentMethod ||
//             "upi",

//           paymentStatus:
//             isAdmin ? "Paid" : "Pending",

//           fareRole:
//             userRole,

//           farePerPassenger:
//             adultFare,

//           agentAdultFare:
//             Number(flight.agentAdultFare) || 0,

//           bookingStatus:
//             isAdmin ? "Confirmed" : "Pending Payment",


//           // ===============================================
//           // OLD / BACKWARD COMPATIBILITY
//           // ===============================================

//           discount:
//             discount,

//           total:
//             total,

//         };


//         // =================================================
//         // DEBUG
//         // =================================================

//         console.log(
//           "===================================="
//         );

//         console.log(
//           "ADULTS:",
//           adultCount
//         );

//         console.log(
//           "CHILDREN:",
//           childCount
//         );

//         console.log(
//           "INFANTS:",
//           infantCount
//         );

//         console.log(
//           "FLIGHT FARE:",
//           finalFlightFare
//         );

//         console.log(
//           "SEAT PRICE:",
//           seatPrice
//         );

//         console.log(
//           "MEAL PRICE:",
//           mealPrice
//         );

//         console.log(
//           "BAGGAGE PRICE:",
//           baggagePrice
//         );

//         console.log(
//           "TAXES:",
//           taxes
//         );

//         console.log(
//           "CONVENIENCE FEE:",
//           convenienceFee
//         );

//         console.log(
//           "DISCOUNT:",
//           discount
//         );

//         console.log(
//           "FINAL TOTAL:",
//           total
//         );

//         console.log(
//           "CUSTOMER USER ID:",
//           bookingData.userId
//         );

//         console.log(
//           "BOOKING DATA:",
//           bookingData
//         );

//         console.log(
//           "===================================="
//         );


//         // =================================================
//         // API
//         // =================================================

//         const response =
//           await fetch(
//             "http://localhost:5000/api/bookings",
//             {
//               method:
//                 "POST",

//               headers: {
//                 "Content-Type":
//                   "application/json",
//               },

//               body:
//                 JSON.stringify(
//                   bookingData
//                 ),
//             }
//           );


//         const data =
//           await response.json();


//         console.log(
//           "BOOKING RESPONSE:",
//           data
//         );


//         // =================================================
//         // ERROR
//         // =================================================

//         if (!response.ok) {

//           throw new Error(
//             data.message ||
//             "Payment failed."
//           );

//         }


//         if (
//           !data.booking
//         ) {

//           throw new Error(
//             "Booking was not created."
//           );

//         }


//         // =================================================
//         // SUCCESS
//         // =================================================

//         navigate(
//           "/success",
//           {
//             state: {

//               flight,

//               passenger,

//               travellers,

//               pricing: {
//                 ...pricing,

//                 finalFlightFare,

//                 seatPrice,

//                 mealPrice,

//                 baggagePrice,

//                 taxes,

//                 convenienceFee,

//                 discount,

//                 subtotal,

//                 total,

//               },


//               seats:
//                 selectedSeats,

//               seat:
//                 selectedSeats[0] ||
//                 "",


//               meals:
//                 selectedMeals,

//               meal:
//                 selectedMeals[0] ||
//                 null,


//               baggage:
//                 selectedBaggage,


//               total:
//                 data.booking.total ??
//                 total,


//               bookingId:
//                 data.booking.bookingId,


//               pnr:
//                 data.booking.pnr,

//             },

//           }
//         );


//       } catch (error) {

//         console.error(
//           "PAYMENT ERROR:",
//           error
//         );


//         alert(
//           error.message ||
//           "Unable to complete booking."
//         );

//       } finally {

//         setLoading(false);

//       }

//     };


//   // =====================================================
//   // UI
//   // =====================================================

//   return (
//     <>
//       <Navbar />


//       <section className="payment-page">


//         {/* =================================================
//                     PROGRESS
//         ================================================= */}

//         <div className="payment-progress">

//           <div className="step active">
//             <span>✓</span>
//             <p>Booking</p>
//           </div>

//           <div className="line active"></div>

//           <div className="step active">
//             <span>✓</span>
//             <p>Seat</p>
//           </div>

//           <div className="line active"></div>

//           <div className="step active">
//             <span>✓</span>
//             <p>Meal</p>
//           </div>

//           <div className="line active"></div>

//           <div className="step active">
//             <span>✓</span>
//             <p>Baggage</p>
//           </div>

//           <div className="line active"></div>

//           <div className="step current">
//             <span>5</span>
//             <p>Payment</p>
//           </div>

//         </div>


//         {/* =================================================
//                     CONTAINER
//         ================================================= */}

//         <div className="payment-container">


//           {/* =================================================
//                     LEFT
//           ================================================= */}

//           <div className="payment-left">

//             <h2>
//               Select Payment Method
//             </h2>


//             {/* UPI */}

//             <div className="payment-card">

//               <label>

//                 <input
//                   type="radio"
//                   checked={
//                     paymentMethod ===
//                     "upi"
//                   }
//                   onChange={() =>
//                     setPaymentMethod(
//                       "upi"
//                     )
//                   }
//                 />

//                 UPI Payment

//               </label>


//               {paymentMethod === "upi" && (
//                 <div className="dynamic-upi-payment">

//                   <div className="upi-amount-box">
//                     <span>Amount Payable</span>
//                     <strong>
//                       ₹{Number(total || 0).toLocaleString("en-IN")}
//                     </strong>
//                   </div>

//                   <div className="upi-qr-card">
//                     <h3>Scan & Pay</h3>
//                     <p className="upi-subtitle">
//                       Scan this QR with PhonePe, Google Pay, Paytm or any UPI app.
//                     </p>

//                     <div className="upi-qr-wrapper">
//                       <QRCodeSVG
//                         value={upiPaymentUrl}
//                         size={230}
//                         level="H"
//                         includeMargin={true}
//                       />
//                     </div>

//                     <div className="upi-details">
//                       <p>UPI ID</p>
//                       <strong>{UPI_ID}</strong>
//                     </div>

//                     <div className="upi-payment-info">
//                       <span>💰 Pay exactly</span>
//                       <strong>
//                         ₹{Number(total || 0).toLocaleString("en-IN")}
//                       </strong>
//                     </div>

//                     <button
//                       type="button"
//                       className="open-upi-btn"
//                       onClick={() => {
//                         window.location.href = upiPaymentUrl;
//                       }}
//                     >
//                       Open UPI App
//                     </button>
//                   </div>

//                 </div>
//               )}

//             </div>


//             {/* CARD */}

//             <div className="payment-card">

//               <label>

//                 <input
//                   type="radio"
//                   checked={
//                     paymentMethod ===
//                     "card"
//                   }
//                   onChange={() =>
//                     setPaymentMethod(
//                       "card"
//                     )
//                   }
//                 />

//                 Credit / Debit Card

//               </label>


//               {paymentMethod ===
//                 "card" && (

//                 <>

//                   <input
//                     type="text"
//                     placeholder="Card Number"
//                   />

//                   <div className="card-row">

//                     <input
//                       type="text"
//                       placeholder="MM / YY"
//                     />

//                     <input
//                       type="password"
//                       placeholder="CVV"
//                     />

//                   </div>

//                 </>

//               )}

//             </div>


//             {/* NET BANKING */}

//             <div className="payment-card">

//               <label>

//                 <input
//                   type="radio"
//                   checked={
//                     paymentMethod ===
//                     "netbanking"
//                   }
//                   onChange={() =>
//                     setPaymentMethod(
//                       "netbanking"
//                     )
//                   }
//                 />

//                 Net Banking

//               </label>


//               {paymentMethod ===
//                 "netbanking" && (

//                 <select>

//                   <option>
//                     Select Bank
//                   </option>

//                   <option>
//                     State Bank of India
//                   </option>

//                   <option>
//                     HDFC Bank
//                   </option>

//                   <option>
//                     ICICI Bank
//                   </option>

//                   <option>
//                     Axis Bank
//                   </option>

//                 </select>

//               )}

//             </div>


//             {/* COUPON */}

//             <div className="coupon-box">

//               <h3>
//                 Apply Coupon
//               </h3>


//               <div className="coupon-input">

//                 <input
//                   type="text"
//                   placeholder="Enter Coupon Code"
//                   value={coupon}
//                   onChange={(e) =>
//                     setCoupon(
//                       e.target.value
//                     )
//                   }
//                 />


//                 <button
//                   type="button"
//                   onClick={
//                     applyCoupon
//                   }
//                 >
//                   Apply
//                 </button>

//               </div>


//               <p className="coupon-note">

//                 Use{" "}

//                 <strong>
//                   SAVE500
//                 </strong>

//                 {" "}
//                 to get ₹500 OFF

//               </p>

//             </div>

//           </div>


//           {/* =================================================
//                     RIGHT
//           ================================================= */}

//           <div className="payment-right">

//             <div className="booking-summary">

//               <h2>
//                 Booking Summary
//               </h2>


//               {/* CUSTOMER */}

//               <div className="summary-row">

//                 <span>
//                   Customer
//                 </span>

//                 <span>
//                   {passenger.firstName}{" "}
//                   {passenger.lastName}
//                 </span>

//               </div>


//               {/* PASSENGERS */}

//               <div className="summary-row">

//                 <span>
//                   Passengers
//                 </span>

//                 <span>

//                   {adultCount} Adult
//                   {adultCount >
//                   1
//                     ? "s"
//                     : ""}

//                   {childCount >
//                     0 &&
//                     `, ${childCount} Child${
//                       childCount >
//                       1
//                         ? "ren"
//                         : ""
//                     }`}

//                   {infantCount >
//                     0 &&
//                     `, ${infantCount} Infant${
//                       infantCount >
//                       1
//                         ? "s"
//                         : ""
//                     }`}

//                 </span>

//               </div>


//               {/* AIRLINE */}

//               <div className="summary-row">

//                 <span>
//                   Airline
//                 </span>

//                 <span>
//                   {flight.airline}
//                 </span>

//               </div>


//               {/* ROUTE */}

//               <div className="summary-row">

//                 <span>
//                   Route
//                 </span>

//                 <span>

//                   {flight.from ||
//                     flight.fromCity}

//                   {" → "}

//                   {flight.to ||
//                     flight.toCity}

//                 </span>

//               </div>


//               {/* FLIGHT */}

//               <div className="summary-row">

//                 <span>
//                   Flight No.
//                 </span>

//                 <span>
//                   {flight.flightNo}
//                 </span>

//               </div>


//               {/* SEATS */}

//               <div className="summary-row">

//                 <span>
//                   Seats
//                 </span>

//                 <span>

//                   {selectedSeats.length >
//                   0
//                     ? selectedSeats.join(
//                         ", "
//                       )
//                     : "-"}

//                 </span>

//               </div>


//               {/* MEALS */}

//               <div className="summary-row">

//                 <span>
//                   Meals
//                 </span>

//                 <span>

//                   {selectedMeals.length >
//                   0
//                     ? selectedMeals
//                         .map(
//                           (item) =>
//                             item?.name ||
//                             "No Meal"
//                         )
//                         .join(
//                           ", "
//                         )
//                     : "No Meal"}

//                 </span>

//               </div>


//               {/* BAGGAGE */}

//               <div className="summary-row">

//                 <span>
//                   Baggage
//                 </span>

//                 <span>

//                   {selectedBaggage.length >
//                   0
//                     ? selectedBaggage
//                         .map(
//                           (item) =>
//                             item?.weight
//                         )
//                         .join(
//                           ", "
//                         )
//                     : "15 KG Included"}

//                 </span>

//               </div>


//               <hr />


//               {/* =================================================
//                         PRICE BREAKDOWN
//               ================================================= */}


//               <div className="summary-row">

//                 <span>
//                   Adult Fare
//                   ({adultCount})
//                 </span>

//                 <span>
//                   ₹{" "}
//                   {adultFareTotal.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>

//               </div>


//               {childCount >
//                 0 && (

//                 <div className="summary-row">

//                   <span>
//                     Child Fare
//                     ({childCount})
//                   </span>

//                   <span>
//                     ₹{" "}
//                     {childFareTotal.toLocaleString(
//                       "en-IN"
//                     )}
//                   </span>

//                 </div>

//               )}


//               {infantCount >
//                 0 && (

//                 <div className="summary-row">

//                   <span>
//                     Infant Fare
//                     ({infantCount})
//                   </span>

//                   <span>
//                     ₹{" "}
//                     {infantFareTotal.toLocaleString(
//                       "en-IN"
//                     )}
//                   </span>

//                 </div>

//               )}


//               <div className="summary-row">

//                 <span>
//                   Seat Charges
//                 </span>

//                 <span>
//                   ₹{" "}
//                   {seatPrice.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>

//               </div>


//               <div className="summary-row">

//                 <span>
//                   Meal Charges
//                 </span>

//                 <span>
//                   ₹{" "}
//                   {mealPrice.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>

//               </div>


//               <div className="summary-row">

//                 <span>
//                   Baggage Charges
//                 </span>

//                 <span>
//                   ₹{" "}
//                   {baggagePrice.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>

//               </div>


//               <div className="summary-row">

//                 <span>
//                   Taxes
//                 </span>

//                 <span>
//                   ₹{" "}
//                   {taxes.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>

//               </div>


//               <div className="summary-row">

//                 <span>
//                   Convenience Fee
//                 </span>

//                 <span>
//                   ₹{" "}
//                   {convenienceFee.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>

//               </div>


//               <div className="summary-row discount">

//                 <span>
//                   Coupon Discount
//                 </span>

//                 <span>
//                   - ₹{" "}
//                   {discount.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>

//               </div>


//               <hr />


//               {/* FINAL */}

//               <div className="summary-total">

//                 <span>
//                   Total Payable
//                 </span>

//                 <span>
//                   ₹{" "}
//                   {total.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>

//               </div>


//               <div className="secure-payment">

//                 🔒 100% Secure Payment

//               </div>


//               <button
//                 className="pay-btn"
//                 onClick={
//                   handlePayment
//                 }
//                 disabled={
//                   loading
//                 }
//               >

//                 {loading
//                   ? "Processing..."
//                   : `Pay ₹ ${total.toLocaleString(
//                       "en-IN"
//                     )}`}

//               </button>

//             </div>

//           </div>

//         </div>

//       </section>


//       <Footer />

//     </>
//   );

// }


// export default Payment;

































































import "./Payment.css";

import { useState } from "react";

import { QRCodeSVG } from "qrcode.react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

// =====================================================
// BANK OF BARODA QR IMAGE
// =====================================================

import BankofQR from "../../assets/Bankof.jpeg";


// =====================================================
// PAYMENT PAGE
// =====================================================

function Payment() {

  const navigate = useNavigate();

  const location = useLocation();


  // =====================================================
  // BOOKING DATA
  // =====================================================

  const {
    flight,
    passenger,
    travellers,
    pricing,

    seats,
    seat,

    meals,
    meal,

    baggage,
    baggageTotal,

  } = location.state || {};


  // =====================================================
  // USER ROLE
  // =====================================================

  const getStoredRole = () => {

    const directKeys = [
      "userRole",
      "role",
      "accountType",
    ];

    for (const key of directKeys) {

      const value =
        localStorage.getItem(key);

      if (value) {

        return String(value)
          .toLowerCase()
          .trim();

      }

    }


    const objectKeys = [
      "user",
      "currentUser",
      "loggedInUser",
      "authUser",
    ];


    for (const key of objectKeys) {

      const value =
        localStorage.getItem(key);

      if (!value) continue;


      try {

        const parsed =
          JSON.parse(value);

        const role =
          parsed?.role ||
          parsed?.user?.role ||
          parsed?.accountType;


        if (role) {

          return String(role)
            .toLowerCase()
            .trim();

        }

      } catch (error) {

        console.log(
          "Role parsing error:",
          error
        );

      }

    }


    return "customer";

  };


  const userRole =
    getStoredRole();


  const isAdmin =
    userRole === "admin";


  const isAgent =
    userRole === "agent";


  const isCustomer =
    userRole === "customer";


  // =====================================================
  // PAYMENT STATE
  // =====================================================

  const [coupon, setCoupon] =
    useState("");


  const [discount, setDiscount] =
    useState(0);


  const [paymentMethod, setPaymentMethod] =
    useState("upi");


  const [loading, setLoading] =
    useState(false);


  // =====================================================
  // NO BOOKING
  // =====================================================

  if (!flight || !passenger) {

    return (
      <>
        <Navbar />

        <section className="payment-page">

          <div className="no-booking">

            <h2>
              No Booking Found ✈️
            </h2>

            <p>
              Please complete your passenger
              details before making payment.
            </p>

            <button
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


  const totalPassengers =
    adultCount +
    childCount +
    infantCount;


  // =====================================================
  // ARRAYS
  // =====================================================

  const selectedSeats =
    Array.isArray(seats)
      ? seats
      : seat
      ? [seat]
      : [];


  const selectedMeals =
    Array.isArray(meals)
      ? meals
      : meal
      ? [meal]
      : [];


  const selectedBaggage =
    Array.isArray(baggage)
      ? baggage
      : baggage
      ? [baggage]
      : [];


  // =====================================================
  // ADULT FARE
  // =====================================================

  const adultFare =
    Number(
      isAgent
        ? (
            pricing?.agentAdultFare ??
            flight?.agentAdultFare ??
            pricing?.adultFare ??
            flight?.adultFare ??
            flight?.price
          )
        : (
            pricing?.adultFare ??
            flight?.adultFare ??
            flight?.price
          )
    ) || 0;


  // =====================================================
  // CHILD FARE
  // =====================================================

  const childFare =
    Number(
      isAgent
        ? (
            pricing?.agentChildFare ??
            flight?.agentChildFare ??
            pricing?.childFare ??
            flight?.childFare ??
            adultFare
          )
        : (
            pricing?.childFare ??
            flight?.childFare ??
            adultFare
          )
    ) || 0;


  // =====================================================
  // INFANT FARE
  // =====================================================

  const infantFare =
    Number(
      isAgent
        ? (
            pricing?.agentInfantFare ??
            flight?.agentInfantFare ??
            pricing?.infantFare ??
            flight?.infantFare
          )
        : (
            pricing?.infantFare ??
            flight?.infantFare
          )
    ) || 0;


  // =====================================================
  // PASSENGER FARE
  // =====================================================

  const calculatedPassengerFare =
    pricing?.passengerFareTotal !==
    undefined

      ? Number(
          pricing.passengerFareTotal
        )

      : (
          adultFare *
          adultCount
        ) +

        (
          childFare *
          childCount
        ) +

        (
          infantFare *
          infantCount
        );


  const finalFlightFare =
    pricing?.passengerFareTotal !==
    undefined

      ? Number(
          pricing.passengerFareTotal
        )

      : calculatedPassengerFare;


  // =====================================================
  // SEAT PRICE
  // =====================================================

  const calculatedSeatPrice =
    Number(
      pricing?.totalSeatPrice
    );


  const seatPrice =
    Number.isFinite(
      calculatedSeatPrice
    ) &&
    calculatedSeatPrice > 0

      ? calculatedSeatPrice

      : 0;


  // =====================================================
  // MEAL PRICE
  // =====================================================

  const calculatedMealPrice =
    Number(
      pricing?.mealTotal
    );


  const fallbackMealPrice =
    selectedMeals.reduce(
      (
        total,
        item
      ) => {

        return (
          total +
          Number(
            item?.price || 0
          )
        );

      },
      0
    );


  const mealPrice =
    Number.isFinite(
      calculatedMealPrice
    )

      ? calculatedMealPrice

      : fallbackMealPrice;


  // =====================================================
  // BAGGAGE PRICE
  // =====================================================

  const calculatedBaggagePrice =
    Number(
      pricing?.baggageTotal
    );


  const fallbackBaggagePrice =
    Number(
      baggageTotal
    ) ||

    selectedBaggage.reduce(
      (
        total,
        item
      ) => {

        return (
          total +
          Number(
            item?.price || 0
          )
        );

      },
      0
    );


  const baggagePrice =
    Number.isFinite(
      calculatedBaggagePrice
    )

      ? calculatedBaggagePrice

      : fallbackBaggagePrice;


  // =====================================================
  // TAXES
  // =====================================================

  const taxes =
    Number(
      flight?.taxes
    ) || 0;


  // =====================================================
  // CONVENIENCE FEE
  // =====================================================

  const convenienceFee = 0;


  // =====================================================
  // SUBTOTAL
  // =====================================================

  const subtotal =
    finalFlightFare +
    seatPrice +
    mealPrice +
    baggagePrice +
    taxes +
    convenienceFee;


  // =====================================================
  // FINAL TOTAL
  // =====================================================

  const total =
    Math.max(
      0,
      subtotal -
      discount
    );


  // =====================================================
  // ICICI BANK UPI
  // =====================================================

  const ICICI_UPI_ID =
    "eazypay.0000064618@icici";


  const ICICI_UPI_NAME =
    "Saiyed Travels";


  const upiAmount =
    Number(total || 0)
      .toFixed(2);


  const iciciPaymentUrl =
    `upi://pay?pa=${encodeURIComponent(
      ICICI_UPI_ID
    )}` +

    `&pn=${encodeURIComponent(
      ICICI_UPI_NAME
    )}` +

    `&am=${upiAmount}` +

    `&cu=INR` +

    `&tn=${encodeURIComponent(
      "Saiyed Travels Flight Booking"
    )}`;


  // =====================================================
  // BANK OF BARODA DETAILS
  // =====================================================

  const BARODA_UPI_ID =
    "9414080277@barodampay";


  const BARODA_ACCOUNT_NAME =
    "SAYED TRAVELS";


  const BARODA_ACCOUNT_NUMBER =
    "1687020000107";


  const BARODA_IFSC =
    "BARB0MOJHHU";


  const BARODA_CITY =
    "JHUNJHUNU";


  // =====================================================
  // COUPON
  // =====================================================

  const applyCoupon = () => {

    const code =
      coupon
        .trim()
        .toUpperCase();


    if (
      code ===
      "SAVE500"
    ) {

      const finalDiscount =
        Math.min(
          500,
          subtotal
        );


      setDiscount(
        finalDiscount
      );


      alert(
        "Coupon Applied Successfully"
      );

    } else {

      setDiscount(0);


      alert(
        "Invalid Coupon"
      );

    }

  };


  // =====================================================
  // PASSENGER TYPE
  // =====================================================

  const getPassengerType =
    (index) => {

      if (
        index <
        adultCount
      ) {

        return "Adult";

      }


      if (
        index <
        adultCount +
        childCount
      ) {

        return "Child";

      }


      return "Infant";

    };


  // =====================================================
  // FARE TOTALS
  // =====================================================

  const adultFareTotal =
    adultFare *
    adultCount;


  const childFareTotal =
    childFare *
    childCount;


  const infantFareTotal =
    infantFare *
    infantCount;


  // =====================================================
  // COMPLETE BOOKING
  // =====================================================

  const handlePayment =
    async () => {

      if (loading) {
        return;
      }


      try {

        setLoading(true);


        // =================================================
        // FLIGHT ID
        // =================================================

        const flightId =
          flight?._id ||
          flight?.id ||
          flight?.flightId ||
          "";


        if (!flightId) {

          throw new Error(
            "Flight ID is missing."
          );

        }


        // =================================================
        // PASSENGER CHECK
        // =================================================

        if (
          totalPassengers <=
          0
        ) {

          throw new Error(
            "Passenger information is missing."
          );

        }


        // =================================================
        // USER ID
        // =================================================

        let userId =
          localStorage.getItem(
            "userId"
          );


        if (!userId) {

          try {

            const user =
              JSON.parse(
                localStorage.getItem(
                  "user"
                ) || "{}"
              );


            userId =
              user?._id ||
              user?.id ||
              null;

          } catch (error) {

            userId = null;

          }

        }


        // =================================================
        // BOOKING DATA
        // =================================================

        const bookingData = {

          userId,

          passenger,

          travellers: {

            adults:
              adultCount,

            children:
              childCount,

            infants:
              infantCount,

            total:
              totalPassengers,

          },


          // ===============================================
          // FLIGHT
          // ===============================================

          flight: {

            _id:
              flightId,

            airline:
              flight.airline ||
              "",

            flightNo:
              flight.flightNo ||
              "",

            flightType:
              flight.flightType ||
              "Domestic",

            aircraft:
              flight.aircraft ||
              "",

            fromCity:
              flight.fromCity ||
              flight.from ||
              "",

            fromAirport:
              flight.fromAirport ||
              "",

            fromCode:
              flight.fromCode ||
              "",

            toCity:
              flight.toCity ||
              flight.to ||
              "",

            toAirport:
              flight.toAirport ||
              "",

            toCode:
              flight.toCode ||
              "",

            departureDate:
              flight.departureDate ||
              "",

            departureTime:
              flight.departureTime ||
              flight.departure ||
              "",

            departureTerminal:
              flight.departureTerminal ||
              "",

            arrivalDate:
              flight.arrivalDate ||
              "",

            arrivalTime:
              flight.arrivalTime ||
              flight.arrival ||
              "",

            arrivalTerminal:
              flight.arrivalTerminal ||
              "",

            duration:
              flight.duration ||
              "",

            stops:
              flight.stops ||
              "Non-stop",

            stopAirport:
              flight.stopAirport ||
              "",


            price:
              Number(
                flight.price
              ) || 0,


            finalPrice:
              Number(
                flight.finalPrice
              ) ||

              Number(
                flight.price
              ) ||

              0,


            // PASSENGER FARES

            adultFare:
              adultFare,

            childFare:
              childFare,

            infantFare:
              infantFare,


            agentAdultFare:
              Number(
                flight.agentAdultFare
              ) || 0,

            agentChildFare:
              Number(
                flight.agentChildFare
              ) || 0,

            agentInfantFare:
              Number(
                flight.agentInfantFare
              ) || 0,


            fareRole:
              userRole,


            // SERVICES

            adultSeatPrice:
              Number(
                flight.adultSeatPrice
              ) || 0,

            childSeatPrice:
              Number(
                flight.childSeatPrice
              ) || 0,

            infantSeatPrice:
              Number(
                flight.infantSeatPrice
              ) || 0,


            adultMealPrice:
              Number(
                flight.adultMealPrice
              ) || 0,

            childMealPrice:
              Number(
                flight.childMealPrice
              ) || 0,

            infantMealPrice:
              Number(
                flight.infantMealPrice
              ) || 0,


            adultBaggagePrice:
              Number(
                flight.adultBaggagePrice
              ) || 0,

            childBaggagePrice:
              Number(
                flight.childBaggagePrice
              ) || 0,

            infantBaggagePrice:
              Number(
                flight.infantBaggagePrice
              ) || 0,


            taxes,

            serviceFee:
              convenienceFee,

            logo:
              flight.logo ||
              "",

          },


          // ===============================================
          // SEATS
          // ===============================================

          seats:
            selectedSeats,

          seat:
            selectedSeats[0] ||
            "",

          seatCount:
            selectedSeats.length,

          seatPrice,


          // ===============================================
          // MEALS
          // ===============================================

          meals:
            selectedMeals,

          meal:
            selectedMeals[0] ||
            {
              name:
                "No Meal",

              price:
                0,
            },

          mealCount:
            selectedMeals.length,

          mealPrice,


          // ===============================================
          // BAGGAGE
          // ===============================================

          baggage:
            selectedBaggage,

          baggageCount:
            selectedBaggage.length,

          baggagePrice,


          // ===============================================
          // PRICE DETAILS
          // ===============================================

          priceDetails: {

            adultFare:
              adultFareTotal,

            childFare:
              childFareTotal,

            infantFare:
              infantFareTotal,

            flightFare:
              finalFlightFare,

            seatCharges:
              seatPrice,

            mealCharges:
              mealPrice,

            baggageCharges:
              baggagePrice,

            taxes,

            convenienceFee,

            discount,

            subtotal,

            total,

          },


          // ===============================================
          // PAYMENT
          // ===============================================

          paymentMethod:
            paymentMethod ||
            "upi",


          /*
            ADMIN:
            payment automatically Paid

            CUSTOMER / AGENT:
            payment Pending until
            payment verification
          */

          paymentStatus:
            isAdmin
              ? "Paid"
              : "Pending",


          fareRole:
            userRole,


          farePerPassenger:
            adultFare,


          agentAdultFare:
            Number(
              flight.agentAdultFare
            ) || 0,


          bookingStatus:
            isAdmin
              ? "Confirmed"
              : "Pending Payment",


          // OLD COMPATIBILITY

          discount,

          total,

        };


        // =================================================
        // ADMIN PAYMENT BYPASS
        // =================================================

        if (isAdmin) {

          console.log(
            "ADMIN BOOKING - PAYMENT BYPASS"
          );

        } else {

          console.log(
            "CUSTOMER / AGENT PAYMENT REQUIRED"
          );

        }


        // =================================================
        // API
        // =================================================

        const response =
          await fetch(
            "http://localhost:5000/api/bookings",
            {

              method:
                "POST",

              headers: {

                "Content-Type":
                  "application/json",

              },

              body:
                JSON.stringify(
                  bookingData
                ),

            }
          );


        const data =
          await response.json();


        console.log(
          "BOOKING RESPONSE:",
          data
        );


        // =================================================
        // ERROR
        // =================================================

        if (!response.ok) {

          throw new Error(
            data.message ||
            "Payment failed."
          );

        }


        if (
          !data.booking
        ) {

          throw new Error(
            "Booking was not created."
          );

        }


        // =================================================
        // SUCCESS
        // =================================================

        navigate(
          "/success",
          {

            state: {

              flight,

              passenger,

              travellers,


              pricing: {

                ...pricing,

                finalFlightFare,

                seatPrice,

                mealPrice,

                baggagePrice,

                taxes,

                convenienceFee,

                discount,

                subtotal,

                total,

              },


              seats:
                selectedSeats,

              seat:
                selectedSeats[0] ||
                "",


              meals:
                selectedMeals,

              meal:
                selectedMeals[0] ||
                null,


              baggage:
                selectedBaggage,


              total:
                data.booking.total ??
                total,


              bookingId:
                data.booking.bookingId,


              pnr:
                data.booking.pnr,

            },

          }
        );


      } catch (error) {

        console.error(
          "PAYMENT ERROR:",
          error
        );


        alert(
          error.message ||
          "Unable to complete booking."
        );


      } finally {

        setLoading(false);

      }

    };


  // =====================================================
  // UI
  // =====================================================

  return (
    <>

      <Navbar />


      <section className="payment-page">


        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="payment-progress">

          <div className="step active">
            <span>✓</span>
            <p>Booking</p>
          </div>

          <div className="line active"></div>

          <div className="step active">
            <span>✓</span>
            <p>Seat</p>
          </div>

          <div className="line active"></div>

          <div className="step active">
            <span>✓</span>
            <p>Meal</p>
          </div>

          <div className="line active"></div>

          <div className="step active">
            <span>✓</span>
            <p>Baggage</p>
          </div>

          <div className="line active"></div>

          <div className="step current">
            <span>5</span>
            <p>Payment</p>
          </div>

        </div>


        {/* =================================================
            PAYMENT CONTAINER
        ================================================= */}

        <div className="payment-container">


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="payment-left">

            <h2>
              Select Payment Method
            </h2>


            {/* =================================================
                UPI
            ================================================= */}

            <div className="payment-card">

              <label>

                <input
                  type="radio"

                  checked={
                    paymentMethod ===
                    "upi"
                  }

                  onChange={() =>
                    setPaymentMethod(
                      "upi"
                    )
                  }

                />

                UPI Payment

              </label>


              {paymentMethod === "upi" && (

                <div className="dynamic-upi-payment">


                  {/* AMOUNT */}

                  <div className="upi-amount-box">

                    <span>
                      Amount Payable
                    </span>

                    <strong>
                      ₹
                      {Number(
                        total || 0
                      ).toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                  </div>


                  {/* =================================================
                      ICICI QR
                  ================================================= */}

                  <div className="upi-qr-card">

                    <div className="upi-bank-title">

                      <strong>
                        ICICI Bank
                      </strong>

                      <span>
                        UPI Payment
                      </span>

                    </div>


                    <h3>
                      Scan & Pay
                    </h3>


                    <p className="upi-subtitle">

                      Scan this QR using
                      PhonePe, Google Pay,
                      Paytm or any UPI app.

                    </p>


                    <div className="upi-qr-wrapper">

                      <QRCodeSVG

                        value={
                          iciciPaymentUrl
                        }

                        size={230}

                        level="H"

                        includeMargin={true}

                      />

                    </div>


                    <div className="upi-details">

                      <span>
                        UPI ID
                      </span>

                      <strong>
                        {ICICI_UPI_ID}
                      </strong>

                    </div>


                    <div className="upi-payment-info">

                      <span>
                        💰 Pay Exactly
                      </span>

                      <strong>
                        ₹
                        {Number(
                          total || 0
                        ).toLocaleString(
                          "en-IN"
                        )}
                      </strong>

                    </div>


                    <button

                      type="button"

                      className="open-upi-btn"

                      onClick={() => {

                        window.location.href =
                          iciciPaymentUrl;

                      }}

                    >
                      Open UPI App
                    </button>

                  </div>


                  {/* =================================================
                      BANK OF BARODA QR
                  ================================================= */}

                  <div className="upi-qr-card baroda-card">

                    <div className="upi-bank-title">

                      <strong>
                        Bank of Baroda
                      </strong>

                      <span>
                        UPI Payment
                      </span>

                    </div>


                    <h3>
                      Scan & Pay
                    </h3>


                    <p className="upi-subtitle">

                      Scan this Bank of Baroda
                      QR using any UPI app.

                    </p>


                    <div className="upi-qr-wrapper">

                      <img

                        src={BankofQR}

                        alt="Saiyed Travels Bank of Baroda UPI QR"

                        className="bankof-qr-image"

                      />

                    </div>


                    <div className="upi-details">

                      <span>
                        UPI ID
                      </span>

                      <strong>
                        {BARODA_UPI_ID}
                      </strong>

                    </div>


                    <div className="bank-details-box">

                      <div>
                        <span>
                          Account Name
                        </span>

                        <strong>
                          {BARODA_ACCOUNT_NAME}
                        </strong>
                      </div>


                      <div>
                        <span>
                          Account Number
                        </span>

                        <strong>
                          {BARODA_ACCOUNT_NUMBER}
                        </strong>
                      </div>


                      <div>
                        <span>
                          IFSC Code
                        </span>

                        <strong>
                          {BARODA_IFSC}
                        </strong>
                      </div>


                      <div>
                        <span>
                          City
                        </span>

                        <strong>
                          {BARODA_CITY}
                        </strong>
                      </div>

                    </div>


                    <div className="upi-payment-info">

                      <span>
                        💰 Amount Payable
                      </span>

                      <strong>
                        ₹
                        {Number(
                          total || 0
                        ).toLocaleString(
                          "en-IN"
                        )}
                      </strong>

                    </div>


                    <div className="upi-payment-note">

                      🔒

                      <span>
                        After making payment,
                        your booking will be
                        processed according to
                        payment verification.
                      </span>

                    </div>

                  </div>


                  {/* =================================================
                      PAYMENT SECURITY
                  ================================================= */}

                  <div className="upi-security-note">

                    🔒 Secure UPI Payment

                    <span>
                      Pay the exact amount shown
                      above.
                    </span>

                  </div>

                </div>

              )}

            </div>


            {/* =================================================
                CREDIT / DEBIT CARD
            ================================================= */}

            <div className="payment-card">

              <label>

                <input
                  type="radio"

                  checked={
                    paymentMethod ===
                    "card"
                  }

                  onChange={() =>
                    setPaymentMethod(
                      "card"
                    )
                  }

                />

                Credit / Debit Card

              </label>


              {paymentMethod === "card" && (

                <div className="card-payment-form">

                  <input
                    type="text"
                    placeholder="Card Number"
                    maxLength="19"
                  />


                  <div className="card-row">

                    <input
                      type="text"
                      placeholder="MM / YY"
                      maxLength="5"
                    />

                    <input
                      type="password"
                      placeholder="CVV"
                      maxLength="4"
                    />

                  </div>


                  <input
                    type="text"
                    placeholder="Card Holder Name"
                  />

                </div>

              )}

            </div>


            {/* =================================================
                NET BANKING
            ================================================= */}

            <div className="payment-card">

              <label>

                <input
                  type="radio"

                  checked={
                    paymentMethod ===
                    "netbanking"
                  }

                  onChange={() =>
                    setPaymentMethod(
                      "netbanking"
                    )
                  }

                />

                Net Banking

              </label>


              {paymentMethod ===
                "netbanking" && (

                <div className="netbanking-box">

                  <select>

                    <option value="">
                      Select Bank
                    </option>

                    <option>
                      Bank of Baroda
                    </option>

                    <option>
                      State Bank of India
                    </option>

                    <option>
                      HDFC Bank
                    </option>

                    <option>
                      ICICI Bank
                    </option>

                    <option>
                      Axis Bank
                    </option>

                    <option>
                      Punjab National Bank
                    </option>

                  </select>


                  <div className="netbanking-info">

                    <strong>
                      Saiyed Travels Bank Details
                    </strong>

                    <p>
                      Bank of Baroda -
                      Account ending 0107
                    </p>

                    <p>
                      IFSC: BARB0MOJHHU
                    </p>

                  </div>

                </div>

              )}

            </div>


            {/* =================================================
                COUPON
            ================================================= */}

            <div className="coupon-box">

              <h3>
                Apply Coupon
              </h3>


              <div className="coupon-input">

                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  value={coupon}
                  onChange={(e) =>
                    setCoupon(
                      e.target.value
                    )
                  }
                />


                <button
                  type="button"
                  onClick={
                    applyCoupon
                  }
                >
                  Apply
                </button>

              </div>


              <p className="coupon-note">

                Use{" "}

                <strong>
                  SAVE500
                </strong>

                {" "}
                to get ₹500 OFF

              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="payment-right">

            <div className="booking-summary">

              <h2>
                Booking Summary
              </h2>


              {/* CUSTOMER */}

              <div className="summary-row">

                <span>
                  Customer
                </span>

                <span>
                  {passenger.firstName}{" "}
                  {passenger.lastName}
                </span>

              </div>


              {/* PASSENGERS */}

              <div className="summary-row">

                <span>
                  Passengers
                </span>

                <span>

                  {adultCount} Adult
                  {adultCount > 1
                    ? "s"
                    : ""}

                  {childCount > 0 &&
                    `, ${childCount} Child${
                      childCount > 1
                        ? "ren"
                        : ""
                    }`}

                  {infantCount > 0 &&
                    `, ${infantCount} Infant${
                      infantCount > 1
                        ? "s"
                        : ""
                    }`}

                </span>

              </div>


              {/* AIRLINE */}

              <div className="summary-row">

                <span>
                  Airline
                </span>

                <span>
                  {flight.airline}
                </span>

              </div>


              {/* ROUTE */}

              <div className="summary-row">

                <span>
                  Route
                </span>

                <span>

                  {flight.from ||
                    flight.fromCity}

                  {" → "}

                  {flight.to ||
                    flight.toCity}

                </span>

              </div>


              {/* FLIGHT */}

              <div className="summary-row">

                <span>
                  Flight No.
                </span>

                <span>
                  {flight.flightNo}
                </span>

              </div>


              {/* SEATS */}

              <div className="summary-row">

                <span>
                  Seats
                </span>

                <span>

                  {selectedSeats.length > 0
                    ? selectedSeats.join(
                        ", "
                      )
                    : "-"}

                </span>

              </div>


              {/* MEALS */}

              <div className="summary-row">

                <span>
                  Meals
                </span>

                <span>

                  {selectedMeals.length > 0

                    ? selectedMeals
                        .map(
                          (item) =>
                            item?.name ||
                            "No Meal"
                        )
                        .join(", ")

                    : "No Meal"}

                </span>

              </div>


              {/* BAGGAGE */}

              <div className="summary-row">

                <span>
                  Baggage
                </span>

                <span>

                  {selectedBaggage.length > 0

                    ? selectedBaggage
                        .map(
                          (item) =>
                            item?.weight
                        )
                        .join(", ")

                    : "15 KG Included"}

                </span>

              </div>


              <hr />


              {/* ADULT FARE */}

              <div className="summary-row">

                <span>
                  Adult Fare
                  ({adultCount})
                </span>

                <span>
                  ₹
                  {adultFareTotal.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              {/* CHILD */}

              {childCount > 0 && (

                <div className="summary-row">

                  <span>
                    Child Fare
                    ({childCount})
                  </span>

                  <span>
                    ₹
                    {childFareTotal.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

              )}


              {/* INFANT */}

              {infantCount > 0 && (

                <div className="summary-row">

                  <span>
                    Infant Fare
                    ({infantCount})
                  </span>

                  <span>
                    ₹
                    {infantFareTotal.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

              )}


              {/* SEAT */}

              <div className="summary-row">

                <span>
                  Seat Charges
                </span>

                <span>
                  ₹
                  {seatPrice.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              {/* MEAL */}

              <div className="summary-row">

                <span>
                  Meal Charges
                </span>

                <span>
                  ₹
                  {mealPrice.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              {/* BAGGAGE */}

              <div className="summary-row">

                <span>
                  Baggage Charges
                </span>

                <span>
                  ₹
                  {baggagePrice.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              {/* TAX */}

              <div className="summary-row">

                <span>
                  Taxes
                </span>

                <span>
                  ₹
                  {taxes.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              {/* CONVENIENCE */}

              <div className="summary-row">

                <span>
                  Convenience Fee
                </span>

                <span>
                  ₹
                  {convenienceFee.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              {/* DISCOUNT */}

              <div className="summary-row discount">

                <span>
                  Coupon Discount
                </span>

                <span>
                  - ₹
                  {discount.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              <hr />


              {/* TOTAL */}

              <div className="summary-total">

                <span>
                  Total Payable
                </span>

                <span>
                  ₹
                  {total.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              {/* ADMIN MESSAGE */}

              {isAdmin && (

                <div className="admin-payment-bypass">

                  👑

                  <strong>
                    Admin Booking
                  </strong>

                  <span>
                    Payment is not required
                    for admin.
                  </span>

                </div>

              )}


              {/* CUSTOMER / AGENT MESSAGE */}

              {!isAdmin && (

                <div className="secure-payment">

                  🔒

                  <span>
                    Payment is required
                    before ticket confirmation.
                  </span>

                </div>

              )}


              {/* PAY BUTTON */}

              <button

                className="pay-btn"

                onClick={
                  handlePayment
                }

                disabled={
                  loading
                }

              >

                {loading

                  ? "Processing..."

                  : isAdmin

                  ? "Confirm Ticket"

                  : `Pay ₹ ${total.toLocaleString(
                      "en-IN"
                    )}`}

              </button>

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </>
  );
}


export default Payment;























































