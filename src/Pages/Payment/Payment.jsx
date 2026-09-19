// import "./Payment.css";

// import { useState } from "react";
// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";

// // =====================================================
// // QR IMAGES
// // =====================================================

// import ICICIQR from "../../assets/ANANT.jpeg";
// import BankOfBarodaQR from "../../assets/Bankof.jpeg";

// // =====================================================
// // PAYMENT PAGE
// // =====================================================

// function Payment() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // =====================================================
//   // BOOKING DATA
//   // =====================================================

//   const {
//     flight,
//     passenger,
//     passengers,
//     travellers,
//     pricing,
//     seats,
//     seat,
//     meals,
//     meal,
//     baggage,
//     baggages,
//     baggageTotal,
//   } = location.state || {};

//   // =====================================================
//   // ROLE
//   // =====================================================

//   const getStoredRole = () => {
//     const directKeys = [
//       "userRole",
//       "role",
//       "accountType",
//     ];

//     for (const key of directKeys) {
//       const value = localStorage.getItem(key);

//       if (value) {
//         return String(value)
//           .toLowerCase()
//           .trim();
//       }
//     }

//     const objectKeys = [
//       "user",
//       "currentUser",
//       "loggedInUser",
//       "authUser",
//     ];

//     for (const key of objectKeys) {
//       const value = localStorage.getItem(key);

//       if (!value) continue;

//       try {
//         const parsed = JSON.parse(value);

//         const role =
//           parsed?.role ||
//           parsed?.user?.role ||
//           parsed?.accountType;

//         if (role) {
//           return String(role)
//             .toLowerCase()
//             .trim();
//         }
//       } catch (error) {
//         console.log(
//           "Role parsing error:",
//           error
//         );
//       }
//     }

//     return "customer";
//   };

//   const userRole = getStoredRole();

//   const isAdmin = userRole === "admin";
//   const isAgent = userRole === "agent";

//   // =====================================================
//   // STATE
//   // =====================================================

//   const [coupon, setCoupon] = useState("");
//   const [discount, setDiscount] = useState(0);

//   const [paymentMethod, setPaymentMethod] =
//     useState("ICICI Bank");

//   const [paymentId, setPaymentId] =
//     useState("");

//   const [paymentScreenshot, setPaymentScreenshot] =
//     useState(null);

//   const [paymentDateTime, setPaymentDateTime] =
//     useState("");

//   const [whatsappNumber, setWhatsappNumber] =
//     useState(passenger?.phone || "");

//   const [loading, setLoading] =
//     useState(false);

//   const [submitted, setSubmitted] =
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
//               type="button"
//               onClick={() => navigate("/")}
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

//   const adultCount = Math.max(
//     Number(travellers?.adults) ||
//       Number(pricing?.adultCount) ||
//       1,
//     1
//   );

//   const childCount = Math.max(
//     Number(travellers?.children) || 0,
//     0
//   );

//   const infantCount = Math.max(
//     Number(travellers?.infants) || 0,
//     0
//   );

//   const totalPassengers =
//     adultCount +
//     childCount +
//     infantCount;

//   // =====================================================
//   // NORMALIZE ARRAYS
//   // =====================================================

//   const selectedSeats = Array.isArray(seats)
//     ? seats
//     : seat
//     ? [seat]
//     : [];

//   const selectedMeals = Array.isArray(meals)
//     ? meals
//     : meal
//     ? [meal]
//     : [];

//   const selectedBaggage = Array.isArray(
//     baggages
//   )
//     ? baggages
//     : Array.isArray(baggage)
//     ? baggage
//     : baggage
//     ? [baggage]
//     : [];

//   // =====================================================
//   // FARE
//   // =====================================================

//   const adultFare =
//     Number(
//       isAgent
//         ? (
//             pricing?.agentAdultFare ??
//             flight?.agentAdultFare ??
//             pricing?.adultFare ??
//             flight?.adultFare ??
//             flight?.price
//           )
//         : (
//             pricing?.adultFare ??
//             flight?.adultFare ??
//             flight?.price
//           )
//     ) || 0;

//   const childFare =
//     Number(
//       isAgent
//         ? (
//             pricing?.agentChildFare ??
//             flight?.agentChildFare ??
//             pricing?.childFare ??
//             flight?.childFare ??
//             adultFare
//           )
//         : (
//             pricing?.childFare ??
//             flight?.childFare ??
//             adultFare
//           )
//     ) || 0;

//   const infantFare =
//     Number(
//       isAgent
//         ? (
//             pricing?.agentInfantFare ??
//             flight?.agentInfantFare ??
//             pricing?.infantFare ??
//             flight?.infantFare
//           )
//         : (
//             pricing?.infantFare ??
//             flight?.infantFare
//           )
//     ) || 0;

//   // =====================================================
//   // FLIGHT FARE
//   // =====================================================

//   const calculatedPassengerFare =
//     adultFare * adultCount +
//     childFare * childCount +
//     infantFare * infantCount;

//   const finalFlightFare =
//     pricing?.passengerFareTotal !== undefined
//       ? Number(
//           pricing.passengerFareTotal
//         ) || 0
//       : calculatedPassengerFare;

//   // =====================================================
//   // SEAT
//   // =====================================================

//   const seatPrice =
//     Number(pricing?.totalSeatPrice) || 0;

//   // =====================================================
//   // MEAL
//   // =====================================================

//   const calculatedMealPrice =
//     Number(pricing?.mealTotal);

//   const fallbackMealPrice =
//     selectedMeals.reduce(
//       (sum, item) =>
//         sum +
//         Number(item?.price || 0),
//       0
//     );

//   const mealPrice = Number.isFinite(
//     calculatedMealPrice
//   )
//     ? calculatedMealPrice
//     : fallbackMealPrice;

//   // =====================================================
//   // BAGGAGE
//   // =====================================================

//   const calculatedBaggagePrice =
//     Number(pricing?.baggageTotal);

//   const fallbackBaggagePrice =
//     Number(baggageTotal) ||
//     selectedBaggage.reduce(
//       (sum, item) =>
//         sum +
//         Number(item?.price || 0),
//       0
//     );

//   const baggagePrice = Number.isFinite(
//     calculatedBaggagePrice
//   )
//     ? calculatedBaggagePrice
//     : fallbackBaggagePrice;

//   // =====================================================
//   // TAX
//   // =====================================================

//   const taxes =
//     Number(flight?.taxes) || 0;

//   // =====================================================
//   // CONVENIENCE FEE
//   // =====================================================

//   const convenienceFee = 0;

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
//   // TOTAL
//   // =====================================================

//   const total = Math.max(
//     0,
//     subtotal - discount
//   );

//   // =====================================================
//   // COUPON
//   // =====================================================

//   const applyCoupon = () => {
//     const code =
//       coupon.trim().toUpperCase();

//     if (code === "SAVE500") {
//       const finalDiscount = Math.min(
//         500,
//         subtotal
//       );

//       setDiscount(finalDiscount);

//       alert(
//         "Coupon Applied Successfully"
//       );
//     } else {
//       setDiscount(0);

//       alert("Invalid Coupon");
//     }
//   };

//   // =====================================================
//   // USER ID
//   // =====================================================

//   const getUserId = () => {
//     let userId =
//       localStorage.getItem("userId");

//     if (userId) {
//       return userId;
//     }

//     try {
//       const storedUser =
//         JSON.parse(
//           localStorage.getItem("user") ||
//             "{}"
//         );

//       return (
//         storedUser?._id ||
//         storedUser?.id ||
//         null
//       );
//     } catch {
//       return null;
//     }
//   };

//   // =====================================================
//   // FLIGHT ID
//   // =====================================================

//   const getFlightId = () => {
//     return (
//       flight?._id ||
//       flight?.id ||
//       flight?.flightId ||
//       ""
//     );
//   };

//   // =====================================================
//   // COMMON FLIGHT DATA
//   // =====================================================

//   const buildFlightData = () => {
//     const flightId = getFlightId();

//     return {
//       _id: flightId,

//       airline:
//         flight?.airline || "",

//       flightNo:
//         flight?.flightNo ||
//         flight?.flightNumber ||
//         "",

//       flightType:
//         flight?.flightType ||
//         "Domestic",

//       aircraft:
//         flight?.aircraft || "",

//       fromCity:
//         flight?.fromCity ||
//         flight?.from ||
//         "",

//       fromAirport:
//         flight?.fromAirport || "",

//       fromCode:
//         flight?.fromCode || "",

//       toCity:
//         flight?.toCity ||
//         flight?.to ||
//         "",

//       toAirport:
//         flight?.toAirport || "",

//       toCode:
//         flight?.toCode || "",

//       departureDate:
//         flight?.departureDate || "",

//       departureTime:
//         flight?.departureTime ||
//         flight?.departure ||
//         "",

//       departureTerminal:
//         flight?.departureTerminal ||
//         "",

//       arrivalDate:
//         flight?.arrivalDate || "",

//       arrivalTime:
//         flight?.arrivalTime ||
//         flight?.arrival ||
//         "",

//       arrivalTerminal:
//         flight?.arrivalTerminal ||
//         "",

//       duration:
//         flight?.duration || "",

//       stops:
//         flight?.stops ||
//         "Non-stop",

//       price:
//         Number(flight?.price) || 0,

//       finalPrice:
//         Number(flight?.finalPrice) ||
//         Number(flight?.price) ||
//         0,

//       adultFare,
//       childFare,
//       infantFare,

//       agentAdultFare:
//         Number(
//           flight?.agentAdultFare
//         ) || 0,

//       agentChildFare:
//         Number(
//           flight?.agentChildFare
//         ) || 0,

//       agentInfantFare:
//         Number(
//           flight?.agentInfantFare
//         ) || 0,

//       fareRole: userRole,

//       adultSeatPrice:
//         Number(
//           flight?.adultSeatPrice
//         ) || 0,

//       childSeatPrice:
//         Number(
//           flight?.childSeatPrice
//         ) || 0,

//       infantSeatPrice:
//         Number(
//           flight?.infantSeatPrice
//         ) || 0,

//       adultMealPrice:
//         Number(
//           flight?.adultMealPrice
//         ) || 0,

//       childMealPrice:
//         Number(
//           flight?.childMealPrice
//         ) || 0,

//       infantMealPrice:
//         Number(
//           flight?.infantMealPrice
//         ) || 0,

//       adultBaggagePrice:
//         Number(
//           flight?.adultBaggagePrice
//         ) || 0,

//       childBaggagePrice:
//         Number(
//           flight?.childBaggagePrice
//         ) || 0,

//       infantBaggagePrice:
//         Number(
//           flight?.infantBaggagePrice
//         ) || 0,

//       taxes,

//       serviceFee:
//         convenienceFee,

//       logo:
//         flight?.logo ||
//         flight?.airlineLogo ||
//         "",
//     };
//   };

//   // =====================================================
//   // BUILD BOOKING DATA
//   // =====================================================

//   const buildBookingData = () => {
//     const flightId = getFlightId();

//     if (!flightId) {
//       throw new Error(
//         "Flight ID is missing."
//       );
//     }

//     const userId = getUserId();

//     return {
//       userId,

//       passenger,

//       passengers:
//         Array.isArray(passengers) &&
//         passengers.length > 0
//           ? passengers
//           : [passenger],

//       travellers: {
//         adults: adultCount,
//         children: childCount,
//         infants: infantCount,
//         total: totalPassengers,
//       },

//       adults: adultCount,
//       children: childCount,
//       infants: infantCount,

//       flight:
//         buildFlightData(),

//       flightId,

//       seats: selectedSeats,

//       seat:
//         selectedSeats[0] || "",

//       seatCount:
//         selectedSeats.length,

//       seatPrice,

//       meals: selectedMeals,

//       meal:
//         selectedMeals[0] || {
//           name: "No Meal",
//           price: 0,
//         },

//       mealCount:
//         selectedMeals.length,

//       mealPrice,

//       baggages: selectedBaggage,

//       baggage:
//         selectedBaggage[0] || {
//           weight: "15 KG (Included)",
//           price: 0,
//         },

//       baggageCount:
//         selectedBaggage.length,

//       baggagePrice,

//       priceDetails: {
//         adultFare:
//           adultFare * adultCount,

//         childFare:
//           childFare * childCount,

//         infantFare:
//           infantFare * infantCount,

//         flightFare:
//           finalFlightFare,

//         seatCharges:
//           seatPrice,

//         mealCharges:
//           mealPrice,

//         baggageCharges:
//           baggagePrice,

//         taxes,

//         convenienceFee,

//         discount,

//         subtotal,

//         total,
//       },

//       paymentMethod:
//         paymentMethod,

//       paymentVerified: false,

//       paymentStatus: "Pending",

//       bookingStatus: "Pending",

//       paymentId:
//         paymentId.trim(),

//       orderId: "",

//       fareRole: userRole,

//       discount,

//       total,

//       whatsappNumber:
//         whatsappNumber.trim(),
//     };
//   };

//   // =====================================================
//   // ADMIN BOOKING
//   // =====================================================

//   const handleAdminBooking = async () => {
//     try {
//       setLoading(true);

//       const bookingData =
//         buildBookingData();

//       bookingData.paymentMethod =
//         "admin";

//       bookingData.paymentVerified =
//         true;

//       bookingData.paymentStatus =
//         "Paid";

//       bookingData.bookingStatus =
//         "Confirmed";

//       bookingData.paymentId =
//         "ADMIN_NO_PAYMENT";

//       bookingData.orderId =
//         "ADMIN_BOOKING";

//       const response =
//         await fetch(
//           "https://saiyed-travels-backend-1.onrender.com/api/bookings",
//           {
//             method: "POST",

//             headers: {
//               "Content-Type":
//                 "application/json",

//               ...(localStorage.getItem(
//                 "token"
//               )
//                 ? {
//                     Authorization:
//                       `Bearer ${localStorage.getItem(
//                         "token"
//                       )}`,
//                   }
//                 : {}),
//             },

//             body:
//               JSON.stringify(
//                 bookingData
//               ),
//           }
//         );

//       const data =
//         await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message ||
//             "Unable to create admin booking."
//         );
//       }

//       if (
//         !data.success ||
//         !data.booking
//       ) {
//         throw new Error(
//           "Booking was not created."
//         );
//       }

//       navigate("/success", {
//         state: {
//           booking: data.booking,
//           autoDownload: false,
//         },
//       });
//     } catch (error) {
//       console.error(
//         "ADMIN BOOKING ERROR:",
//         error
//       );

//       alert(
//         error.message ||
//           "Unable to create admin booking."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =====================================================
//   // SUBMIT MANUAL PAYMENT REQUEST
//   // =====================================================

//   const handlePaymentRequest =
//     async () => {
//       if (loading) {
//         return;
//       }

//       // -------------------------------------------------
//       // VALIDATION
//       // -------------------------------------------------

//       if (!paymentMethod) {
//         alert(
//           "Please select a bank."
//         );
//         return;
//       }

//       if (!paymentId.trim()) {
//         alert(
//           "Please enter Payment ID / UTR."
//         );
//         return;
//       }

//       if (!paymentScreenshot) {
//         alert(
//           "Please upload payment screenshot."
//         );
//         return;
//       }

//       if (!paymentDateTime) {
//         alert(
//           "Please select payment date and time."
//         );
//         return;
//       }

//       if (!whatsappNumber.trim()) {
//         alert(
//           "Please enter WhatsApp number."
//         );
//         return;
//       }

//       const cleanWhatsappNumber = whatsappNumber.replace(/\D/g, "");

//       if (cleanWhatsappNumber.length < 10 || cleanWhatsappNumber.length > 15) {
//         alert(
//           "Please enter a valid WhatsApp number."
//         );
//         return;
//       }

//       try {
//         setLoading(true);

//         // -------------------------------------------------
//         // BUILD BOOKING SNAPSHOT
//         // -------------------------------------------------

//         const bookingData =
//           buildBookingData();

//         // -------------------------------------------------
//         // FORM DATA
//         // -------------------------------------------------

//         const formData =
//           new FormData();

//         formData.append(
//           "bookingData",
//           JSON.stringify(
//             bookingData
//           )
//         );

//         formData.append(
//           "amount",
//           String(total)
//         );

//         formData.append(
//           "bankName",
//           paymentMethod
//         );

//         formData.append(
//           "paymentId",
//           paymentId.trim()
//         );

//         formData.append(
//           "paymentDateTime",
//           paymentDateTime
//         );

//         formData.append(
//           "whatsappNumber",
//           cleanWhatsappNumber
//         );

//         formData.append(
//           "screenshot",
//           paymentScreenshot
//         );

//         // -------------------------------------------------
//         // SEND TO BACKEND
//         // -------------------------------------------------

//         const response =
//           await fetch(
//             "https://saiyed-travels-backend-1.onrender.com/api/payment-requests",
//             {
//               method: "POST",

//               headers: {
//                 ...(localStorage.getItem(
//                   "token"
//                 )
//                   ? {
//                       Authorization:
//                         `Bearer ${localStorage.getItem(
//                           "token"
//                         )}`,
//                     }
//                   : {}),
//               },

//               body: formData,
//             }
//           );

//         const data =
//           await response.json();

//         console.log(
//           "PAYMENT REQUEST RESPONSE:",
//           data
//         );

//         if (!response.ok) {
//           throw new Error(
//             data.message ||
//               "Unable to submit payment request."
//           );
//         }

//         if (!data.success) {
//           throw new Error(
//             data.message ||
//               "Payment request failed."
//           );
//         }

//         // -------------------------------------------------
//         // SUCCESS
//         // -------------------------------------------------

//         setSubmitted(true);

//         alert(
//           "Payment request submitted successfully. Admin will verify your payment and confirm the ticket."
//         );
//       } catch (error) {
//         console.error(
//           "PAYMENT REQUEST ERROR:",
//           error
//         );

//         alert(
//           error.message ||
//             "Unable to submit payment request."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//   // =====================================================
//   // MAIN PAYMENT BUTTON
//   // =====================================================

//   const handlePayment =
//     async () => {
//       if (isAdmin) {
//         await handleAdminBooking();
//         return;
//       }

//       await handlePaymentRequest();
//     };

//   // =====================================================
//   // SUCCESS / PENDING SCREEN
//   // =====================================================

//   if (submitted) {
//     return (
//       <>
//         <Navbar />

//         <section className="payment-page">
//           <div
//             className="payment-container"
//             style={{
//               display: "flex",
//               justifyContent:
//                 "center",
//               width: "100%",
//             }}
//           >
//             <div
//               className="payment-card"
//               style={{
//                 maxWidth: "650px",
//                 width: "100%",
//                 textAlign: "center",
//                 padding: "40px 25px",
//               }}
//             >
//               <div
//                 style={{
//                   fontSize: "60px",
//                   marginBottom: "15px",
//                 }}
//               >
//                 ⏳
//               </div>

//               <h2>
//                 Payment Request Submitted
//               </h2>

//               <p
//                 style={{
//                   marginTop: "15px",
//                   lineHeight: "1.7",
//                 }}
//               >
//                 Your payment details and
//                 screenshot have been
//                 submitted successfully.
//               </p>

//               <p
//                 style={{
//                   marginTop: "10px",
//                   lineHeight: "1.7",
//                 }}
//               >
//                 Our admin team will manually
//                 verify your payment.
//                 <br />
//                 After approval, your booking
//                 will be confirmed after admin verification.
//               </p>

//               <strong>
//                 WhatsApp: {whatsappNumber}
//               </strong>

//               <div
//                 style={{
//                   marginTop: "25px",
//                   padding: "15px",
//                   borderRadius: "10px",
//                   background:
//                     "#fff7e6",
//                 }}
//               >
//                 <strong>
//                   Payment Status: Pending
//                 </strong>
//                 <br />
//                 Please wait for admin
//                 verification.
//               </div>

//               <button
//                 type="button"
//                 className="pay-btn"
//                 style={{
//                   marginTop: "25px",
//                 }}
//                 onClick={() =>
//                   navigate("/")
//                 }
//               >
//                 Back To Home
//               </button>
//             </div>
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

//       <section className="payment-page">
//         <div className="payment-container">

//           {/* =================================================
//               LEFT
//           ================================================= */}

//           <div className="payment-left">

//             {/* PROGRESS */}

//             <div className="payment-progress">

//               <div className="step active">
//                 <span>✓</span>
//                 <p>Booking</p>
//               </div>

//               <div className="line active" />

//               <div className="step active">
//                 <span>✓</span>
//                 <p>Seat</p>
//               </div>

//               <div className="line active" />

//               <div className="step active">
//                 <span>✓</span>
//                 <p>Meal</p>
//               </div>

//               <div className="line active" />

//               <div className="step active">
//                 <span>✓</span>
//                 <p>Baggage</p>
//               </div>

//               <div className="line active" />

//               <div className="step current">
//                 <span>5</span>
//                 <p>Payment</p>
//               </div>

//             </div>

//             <div className="payment-card">

//               <h2>
//                 {isAdmin
//                   ? "Confirm Booking"
//                   : "Manual Payment"}
//               </h2>

//               {/* =================================================
//                   CUSTOMER PAYMENT
//               ================================================= */}

//               {!isAdmin ? (
//                 <>

//                   {/* SECURITY */}

//                   <div className="secure-payment">
//                     🔒

//                     <span>
//                       Pay using the QR code below.
//                       Your payment will be manually
//                       verified by the admin.
//                     </span>
//                   </div>

//                   {/* AMOUNT */}

//                   <div
//                     style={{
//                       marginTop: "20px",
//                       padding: "18px",
//                       borderRadius: "12px",
//                       background:
//                         "#f5f8ff",
//                       textAlign: "center",
//                     }}
//                   >
//                     <p
//                       style={{
//                         margin: 0,
//                       }}
//                     >
//                       Total Amount To Pay
//                     </p>

//                     <h2
//                       style={{
//                         margin:
//                           "8px 0 0",
//                       }}
//                     >
//                       ₹
//                       {total.toLocaleString(
//                         "en-IN"
//                       )}
//                     </h2>
//                   </div>

//                   {/* BANK SELECT */}

//                   <div
//                     className="payment-bank-selection"
//                     style={{
//                       marginTop: "25px",
//                     }}
//                   >
//                     <h3>
//                       Select Bank
//                     </h3>

//                     <div
//                       style={{
//                         display: "grid",
//                         gridTemplateColumns:
//                           "1fr 1fr",
//                         gap: "12px",
//                         marginTop: "12px",
//                       }}
//                     >

//                       <button
//                         type="button"
//                         onClick={() =>
//                           setPaymentMethod(
//                             "ICICI Bank"
//                           )
//                         }
//                         style={{
//                           padding:
//                             "14px",
//                           borderRadius:
//                             "10px",
//                           border:
//                             paymentMethod ===
//                             "ICICI Bank"
//                               ? "2px solid #176fe1"
//                               : "1px solid #ddd",
//                           background:
//                             paymentMethod ===
//                             "ICICI Bank"
//                               ? "#eef5ff"
//                               : "#fff",
//                           cursor:
//                             "pointer",
//                           fontWeight:
//                             "600",
//                         }}
//                       >
//                         ICICI Bank
//                       </button>

//                       <button
//                         type="button"
//                         onClick={() =>
//                           setPaymentMethod(
//                             "Bank of Baroda"
//                           )
//                         }
//                         style={{
//                           padding:
//                             "14px",
//                           borderRadius:
//                             "10px",
//                           border:
//                             paymentMethod ===
//                             "Bank of Baroda"
//                               ? "2px solid #176fe1"
//                               : "1px solid #ddd",
//                           background:
//                             paymentMethod ===
//                             "Bank of Baroda"
//                               ? "#eef5ff"
//                               : "#fff",
//                           cursor:
//                             "pointer",
//                           fontWeight:
//                             "600",
//                         }}
//                       >
//                         Bank of Baroda
//                       </button>

//                     </div>
//                   </div>

//                   {/* QR CODE */}

//                   <div
//                     style={{
//                       marginTop: "25px",
//                       textAlign: "center",
//                     }}
//                   >

//                     <h3>
//                       {paymentMethod}
//                     </h3>

//                     <p
//                       style={{
//                         marginTop:
//                           "8px",
//                         marginBottom:
//                           "15px",
//                       }}
//                     >
//                       Scan this QR and pay
//                       <strong>
//                         {" "}
//                         ₹
//                         {total.toLocaleString(
//                           "en-IN"
//                         )}
//                       </strong>
//                     </p>

//                     <div
//                       style={{
//                         display:
//                           "flex",
//                         justifyContent:
//                           "center",
//                       }}
//                     >
//                       <img
//                         src={
//                           paymentMethod ===
//                           "ICICI Bank"
//                             ? ICICIQR
//                             : BankOfBarodaQR
//                         }
//                         alt={`${paymentMethod} QR Code`}
//                         style={{
//                           width:
//                             "260px",
//                           height:
//                             "260px",
//                           objectFit:
//                             "contain",
//                           border:
//                             "1px solid #ddd",
//                           borderRadius:
//                             "12px",
//                           padding:
//                             "10px",
//                           background:
//                             "#fff",
//                         }}
//                       />
//                     </div>

//                   </div>

//                   {/* PAYMENT DETAILS */}

//                   <div
//                     style={{
//                       marginTop: "30px",
//                     }}
//                   >

//                     <h3>
//                       Payment Details
//                     </h3>

//                     {/* UTR */}

//                     <div
//                       style={{
//                         marginTop:
//                           "15px",
//                       }}
//                     >
//                       <label>
//                         Payment ID / UTR
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="Enter UTR / Transaction ID"
//                         value={paymentId}
//                         onChange={(e) =>
//                           setPaymentId(
//                             e.target.value
//                           )
//                         }
//                         style={{
//                           width:
//                             "100%",
//                           marginTop:
//                             "8px",
//                           padding:
//                             "13px",
//                           borderRadius:
//                             "8px",
//                           border:
//                             "1px solid #ddd",
//                           boxSizing:
//                             "border-box",
//                         }}
//                       />
//                     </div>

//                     {/* SCREENSHOT */}

//                     <div
//                       style={{
//                         marginTop:
//                           "18px",
//                       }}
//                     >
//                       <label>
//                         Payment Screenshot
//                       </label>

//                       <input
//                         type="file"
//                         accept="image/jpeg,image/jpg,image/png,image/webp"
//                         onChange={(e) =>
//                           setPaymentScreenshot(
//                             e.target
//                               .files?.[0] ||
//                               null
//                           )
//                         }
//                         style={{
//                           width:
//                             "100%",
//                           marginTop:
//                             "8px",
//                         }}
//                       />

//                       {paymentScreenshot && (
//                         <p
//                           style={{
//                             marginTop:
//                               "7px",
//                             fontSize:
//                               "14px",
//                           }}
//                         >
//                           Selected:{" "}
//                           {
//                             paymentScreenshot.name
//                           }
//                         </p>
//                       )}
//                     </div>

//                     {/* DATE TIME */}

//                     <div
//                       style={{
//                         marginTop:
//                           "18px",
//                       }}
//                     >
//                       <label>
//                         Payment Date & Time
//                       </label>

//                       <input
//                         type="datetime-local"
//                         value={
//                           paymentDateTime
//                         }
//                         onChange={(e) =>
//                           setPaymentDateTime(
//                             e.target
//                               .value
//                           )
//                         }
//                         style={{
//                           width:
//                             "100%",
//                           marginTop:
//                             "8px",
//                           padding:
//                             "13px",
//                           borderRadius:
//                             "8px",
//                           border:
//                             "1px solid #ddd",
//                           boxSizing:
//                             "border-box",
//                         }}
//                       />
//                     </div>

//                     {/* EMAIL */}

//                     <div
//                       style={{
//                         marginTop:
//                           "18px",
//                       }}
//                     >
//                       <label>
//                         WhatsApp Number
//                       </label>

//                       <input
//                         type="tel"
//                         inputMode="numeric"
//                         placeholder="Enter WhatsApp number"
//                         value={
//                           whatsappNumber
//                         }
//                         onChange={(e) =>
//                           setWhatsappNumber(
//                             e.target.value
//                           )
//                         }
//                         style={{
//                           width:
//                             "100%",
//                           marginTop:
//                             "8px",
//                           padding:
//                             "13px",
//                           borderRadius:
//                             "8px",
//                           border:
//                             "1px solid #ddd",
//                           boxSizing:
//                             "border-box",
//                         }}
//                       />
//                     </div>

//                   </div>

//                   {/* IMPORTANT MESSAGE */}

//                   <div
//                     style={{
//                       marginTop: "22px",
//                       padding: "15px",
//                       borderRadius: "10px",
//                       background:
//                         "#fff7e6",
//                       lineHeight: "1.6",
//                       fontSize: "14px",
//                     }}
//                   >
//                     ⚠️ <strong>Important:</strong>
//                     <br />
//                     Please pay exactly ₹
//                     {total.toLocaleString(
//                       "en-IN"
//                     )}
//                     . After submitting the
//                     payment details, your booking
//                     will remain pending until the
//                     admin verifies your payment.
//                   </div>

//                 </>
//               ) : (

//                 /* =================================================
//                    ADMIN
//                 ================================================= */

//                 <div className="admin-payment-bypass">
//                   👑

//                   <strong>
//                     Admin Booking
//                   </strong>

//                   <span>
//                     Payment is not required
//                     for admin.
//                   </span>
//                 </div>

//               )}

//               {/* =================================================
//                   COUPON
//               ================================================= */}

//               <div className="coupon-box">

//                 <h3>
//                   Apply Coupon
//                 </h3>

//                 <div className="coupon-input">

//                   <input
//                     type="text"
//                     placeholder="Enter Coupon Code"
//                     value={coupon}
//                     onChange={(e) =>
//                       setCoupon(
//                         e.target.value
//                       )
//                     }
//                   />

//                   <button
//                     type="button"
//                     onClick={
//                       applyCoupon
//                     }
//                   >
//                     Apply
//                   </button>

//                 </div>

//                 <p className="coupon-note">
//                   Use{" "}
//                   <strong>
//                     SAVE500
//                   </strong>{" "}
//                   to get ₹500 OFF
//                 </p>

//               </div>

//             </div>
//           </div>

//           {/* =================================================
//               RIGHT - BOOKING SUMMARY
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
//                   {passenger?.firstName}{" "}
//                   {passenger?.lastName}
//                 </span>
//               </div>

//               {/* PASSENGERS */}

//               <div className="summary-row">
//                 <span>
//                   Passengers
//                 </span>

//                 <span>
//                   {adultCount} Adult
//                   {adultCount > 1
//                     ? "s"
//                     : ""}

//                   {childCount > 0 &&
//                     `, ${childCount} Child${
//                       childCount > 1
//                         ? "ren"
//                         : ""
//                     }`}

//                   {infantCount > 0 &&
//                     `, ${infantCount} Infant${
//                       infantCount > 1
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
//                   {flight?.airline}
//                 </span>
//               </div>

//               {/* ROUTE */}

//               <div className="summary-row">
//                 <span>
//                   Route
//                 </span>

//                 <span>
//                   {flight?.from ||
//                     flight?.fromCity ||
//                     flight?.fromCode}

//                   {" → "}

//                   {flight?.to ||
//                     flight?.toCity ||
//                     flight?.toCode}
//                 </span>
//               </div>

//               {/* FLIGHT */}

//               <div className="summary-row">
//                 <span>
//                   Flight No.
//                 </span>

//                 <span>
//                   {flight?.flightNo ||
//                     flight?.flightNumber}
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
//                     ? selectedSeats
//                         .map(
//                           (item) =>
//                             typeof item ===
//                             "object"
//                               ? item?.seatNumber ||
//                                 item?.seat ||
//                                 ""
//                               : item
//                         )
//                         .filter(Boolean)
//                         .join(", ")
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
//                         .join(", ")
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
//                             item?.weight ||
//                             "Baggage"
//                         )
//                         .join(", ")
//                     : "15 KG Included"}
//                 </span>
//               </div>

//               <hr />

//               {/* ADULT */}

//               <div className="summary-row">
//                 <span>
//                   Adult Fare ({adultCount})
//                 </span>

//                 <span>
//                   ₹
//                   {(
//                     adultFare *
//                     adultCount
//                   ).toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>
//               </div>

//               {/* CHILD */}

//               {childCount > 0 && (
//                 <div className="summary-row">
//                   <span>
//                     Child Fare ({childCount})
//                   </span>

//                   <span>
//                     ₹
//                     {(
//                       childFare *
//                       childCount
//                     ).toLocaleString(
//                       "en-IN"
//                     )}
//                   </span>
//                 </div>
//               )}

//               {/* INFANT */}

//               {infantCount > 0 && (
//                 <div className="summary-row">
//                   <span>
//                     Infant Fare ({infantCount})
//                   </span>

//                   <span>
//                     ₹
//                     {(
//                       infantFare *
//                       infantCount
//                     ).toLocaleString(
//                       "en-IN"
//                     )}
//                   </span>
//                 </div>
//               )}

//               {/* SEAT */}

//               <div className="summary-row">
//                 <span>
//                   Seat Charges
//                 </span>

//                 <span>
//                   ₹
//                   {seatPrice.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>
//               </div>

//               {/* MEAL */}

//               <div className="summary-row">
//                 <span>
//                   Meal Charges
//                 </span>

//                 <span>
//                   ₹
//                   {mealPrice.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>
//               </div>

//               {/* BAGGAGE */}

//               <div className="summary-row">
//                 <span>
//                   Baggage Charges
//                 </span>

//                 <span>
//                   ₹
//                   {baggagePrice.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>
//               </div>

//               {/* TAX */}

//               <div className="summary-row">
//                 <span>
//                   Taxes
//                 </span>

//                 <span>
//                   ₹
//                   {taxes.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>
//               </div>

//               {/* CONVENIENCE */}

//               <div className="summary-row">
//                 <span>
//                   Convenience Fee
//                 </span>

//                 <span>
//                   ₹
//                   {convenienceFee.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>
//               </div>

//               {/* DISCOUNT */}

//               <div className="summary-row discount">
//                 <span>
//                   Coupon Discount
//                 </span>

//                 <span>
//                   - ₹
//                   {discount.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>
//               </div>

//               <hr />

//               {/* TOTAL */}

//               <div className="summary-total">
//                 <span>
//                   Total Payable
//                 </span>

//                 <span>
//                   ₹
//                   {total.toLocaleString(
//                     "en-IN"
//                   )}
//                 </span>
//               </div>

//               {/* SECURITY */}

//               {!isAdmin && (
//                 <div className="secure-payment">
//                   🔒

//                   <span>
//                     Your payment will be
//                     manually verified before
//                     ticket confirmation.
//                   </span>
//                 </div>
//               )}

//               {/* BUTTON */}

//               <button
//                 type="button"
//                 className="pay-btn"
//                 onClick={
//                   handlePayment
//                 }
//                 disabled={loading}
//               >
//                 {loading
//                   ? "Submitting..."
//                   : isAdmin
//                   ? "Confirm Ticket"
//                   : `Submit Payment Request • ₹ ${total.toLocaleString(
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
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

// =====================================================
// QR IMAGES
// =====================================================

import ICICIQR from "../../assets/ANANT.jpeg";
import BankOfBarodaQR from "../../assets/Bankof.jpeg";

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
    passengers,
    travellers,
    pricing,
    seats,
    seat,
    meals,
    meal,
    baggage,
    baggages,
    baggageTotal,
  } = location.state || {};

  // =====================================================
  // ROLE
  // =====================================================

  const getStoredRole = () => {
    const directKeys = [
      "userRole",
      "role",
      "accountType",
    ];

    for (const key of directKeys) {
      const value = localStorage.getItem(key);

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
      const value = localStorage.getItem(key);

      if (!value) continue;

      try {
        const parsed = JSON.parse(value);

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

  const userRole = getStoredRole();

  const isAdmin = userRole === "admin";
  const isAgent = userRole === "agent";

  // =====================================================
  // STATE
  // =====================================================

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const [paymentMethod, setPaymentMethod] =
    useState("ICICI Bank");

  const [paymentId, setPaymentId] =
    useState("");

  const [paymentScreenshot, setPaymentScreenshot] =
    useState(null);

  const [paymentDateTime, setPaymentDateTime] =
    useState("");

  const [whatsappNumber, setWhatsappNumber] =
    useState(passenger?.phone || "");

  // FIX: CUSTOMER EMAIL
  const [customerEmail, setCustomerEmail] =
    useState(
      passenger?.email ||
        passenger?.emailAddress ||
        ""
    );

  const [loading, setLoading] =
    useState(false);

  const [submitted, setSubmitted] =
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
              type="button"
              onClick={() => navigate("/")}
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

  const adultCount = Math.max(
    Number(travellers?.adults) ||
      Number(pricing?.adultCount) ||
      1,
    1
  );

  const childCount = Math.max(
    Number(travellers?.children) || 0,
    0
  );

  const infantCount = Math.max(
    Number(travellers?.infants) || 0,
    0
  );

  const totalPassengers =
    adultCount +
    childCount +
    infantCount;

  // =====================================================
  // NORMALIZE ARRAYS
  // =====================================================

  const selectedSeats = Array.isArray(seats)
    ? seats
    : seat
    ? [seat]
    : [];

  const selectedMeals = Array.isArray(meals)
    ? meals
    : meal
    ? [meal]
    : [];

  const selectedBaggage = Array.isArray(
    baggages
  )
    ? baggages
    : Array.isArray(baggage)
    ? baggage
    : baggage
    ? [baggage]
    : [];

  // =====================================================
  // FARE
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
  // FLIGHT FARE
  // =====================================================

  const calculatedPassengerFare =
    adultFare * adultCount +
    childFare * childCount +
    infantFare * infantCount;

  const finalFlightFare =
    pricing?.passengerFareTotal !== undefined
      ? Number(
          pricing.passengerFareTotal
        ) || 0
      : calculatedPassengerFare;

  // =====================================================
  // SEAT
  // =====================================================

  const seatPrice =
    Number(pricing?.totalSeatPrice) || 0;

  // =====================================================
  // MEAL
  // =====================================================

  const calculatedMealPrice =
    Number(pricing?.mealTotal);

  const fallbackMealPrice =
    selectedMeals.reduce(
      (sum, item) =>
        sum +
        Number(item?.price || 0),
      0
    );

  const mealPrice = Number.isFinite(
    calculatedMealPrice
  )
    ? calculatedMealPrice
    : fallbackMealPrice;

  // =====================================================
  // BAGGAGE
  // =====================================================

  const calculatedBaggagePrice =
    Number(pricing?.baggageTotal);

  const fallbackBaggagePrice =
    Number(baggageTotal) ||
    selectedBaggage.reduce(
      (sum, item) =>
        sum +
        Number(item?.price || 0),
      0
    );

  const baggagePrice = Number.isFinite(
    calculatedBaggagePrice
  )
    ? calculatedBaggagePrice
    : fallbackBaggagePrice;

  // =====================================================
  // TAX
  // =====================================================

  const taxes =
    Number(flight?.taxes) || 0;

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
  // TOTAL
  // =====================================================

  const total = Math.max(
    0,
    subtotal - discount
  );

  // =====================================================
  // COUPON
  // =====================================================

  const applyCoupon = () => {
    const code =
      coupon.trim().toUpperCase();

    if (code === "SAVE500") {
      const finalDiscount = Math.min(
        500,
        subtotal
      );

      setDiscount(finalDiscount);

      alert(
        "Coupon Applied Successfully"
      );
    } else {
      setDiscount(0);

      alert("Invalid Coupon");
    }
  };

  // =====================================================
  // USER ID
  // =====================================================

  const getUserId = () => {
    let userId =
      localStorage.getItem("userId");

    if (userId) {
      return userId;
    }

    try {
      const storedUser =
        JSON.parse(
          localStorage.getItem("user") ||
            "{}"
        );

      return (
        storedUser?._id ||
        storedUser?.id ||
        null
      );
    } catch {
      return null;
    }
  };

  // =====================================================
  // FLIGHT ID
  // =====================================================

  const getFlightId = () => {
    return (
      flight?._id ||
      flight?.id ||
      flight?.flightId ||
      ""
    );
  };

  // =====================================================
  // COMMON FLIGHT DATA
  // =====================================================

  const buildFlightData = () => {
    const flightId = getFlightId();

    return {
      _id: flightId,

      airline:
        flight?.airline || "",

      flightNo:
        flight?.flightNo ||
        flight?.flightNumber ||
        "",

      flightType:
        flight?.flightType ||
        "Domestic",

      aircraft:
        flight?.aircraft || "",

      fromCity:
        flight?.fromCity ||
        flight?.from ||
        "",

      fromAirport:
        flight?.fromAirport || "",

      fromCode:
        flight?.fromCode || "",

      toCity:
        flight?.toCity ||
        flight?.to ||
        "",

      toAirport:
        flight?.toAirport || "",

      toCode:
        flight?.toCode || "",

      departureDate:
        flight?.departureDate || "",

      departureTime:
        flight?.departureTime ||
        flight?.departure ||
        "",

      departureTerminal:
        flight?.departureTerminal ||
        "",

      arrivalDate:
        flight?.arrivalDate || "",

      arrivalTime:
        flight?.arrivalTime ||
        flight?.arrival ||
        "",

      arrivalTerminal:
        flight?.arrivalTerminal ||
        "",

      duration:
        flight?.duration || "",

      stops:
        flight?.stops ||
        "Non-stop",

      price:
        Number(flight?.price) || 0,

      finalPrice:
        Number(flight?.finalPrice) ||
        Number(flight?.price) ||
        0,

      adultFare,
      childFare,
      infantFare,

      agentAdultFare:
        Number(
          flight?.agentAdultFare
        ) || 0,

      agentChildFare:
        Number(
          flight?.agentChildFare
        ) || 0,

      agentInfantFare:
        Number(
          flight?.agentInfantFare
        ) || 0,

      fareRole: userRole,

      adultSeatPrice:
        Number(
          flight?.adultSeatPrice
        ) || 0,

      childSeatPrice:
        Number(
          flight?.childSeatPrice
        ) || 0,

      infantSeatPrice:
        Number(
          flight?.infantSeatPrice
        ) || 0,

      adultMealPrice:
        Number(
          flight?.adultMealPrice
        ) || 0,

      childMealPrice:
        Number(
          flight?.childMealPrice
        ) || 0,

      infantMealPrice:
        Number(
          flight?.infantMealPrice
        ) || 0,

      adultBaggagePrice:
        Number(
          flight?.adultBaggagePrice
        ) || 0,

      childBaggagePrice:
        Number(
          flight?.childBaggagePrice
        ) || 0,

      infantBaggagePrice:
        Number(
          flight?.infantBaggagePrice
        ) || 0,

      taxes,

      serviceFee:
        convenienceFee,

      logo:
        flight?.logo ||
        flight?.airlineLogo ||
        "",
    };
  };

  // =====================================================
  // BUILD BOOKING DATA
  // =====================================================

  const buildBookingData = () => {
    const flightId = getFlightId();

    if (!flightId) {
      throw new Error(
        "Flight ID is missing."
      );
    }

    const userId = getUserId();

    return {
      userId,

      passenger,

      passengers:
        Array.isArray(passengers) &&
        passengers.length > 0
          ? passengers
          : [passenger],

      travellers: {
        adults: adultCount,
        children: childCount,
        infants: infantCount,
        total: totalPassengers,
      },

      adults: adultCount,
      children: childCount,
      infants: infantCount,

      flight:
        buildFlightData(),

      flightId,

      seats: selectedSeats,

      seat:
        selectedSeats[0] || "",

      seatCount:
        selectedSeats.length,

      seatPrice,

      meals: selectedMeals,

      meal:
        selectedMeals[0] || {
          name: "No Meal",
          price: 0,
        },

      mealCount:
        selectedMeals.length,

      mealPrice,

      baggages: selectedBaggage,

      baggage:
        selectedBaggage[0] || {
          weight: "15 KG (Included)",
          price: 0,
        },

      baggageCount:
        selectedBaggage.length,

      baggagePrice,

      priceDetails: {
        adultFare:
          adultFare * adultCount,

        childFare:
          childFare * childCount,

        infantFare:
          infantFare * infantCount,

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

      paymentMethod:
        paymentMethod,

      paymentVerified: false,

      paymentStatus: "Pending",

      bookingStatus: "Pending",

      paymentId:
        paymentId.trim(),

      orderId: "",

      fareRole: userRole,

      discount,

      total,

      whatsappNumber:
        whatsappNumber.trim(),

      customerEmail:
        customerEmail.trim().toLowerCase(),
    };
  };

  // =====================================================
  // ADMIN BOOKING
  // =====================================================

  const handleAdminBooking = async () => {
    try {
      setLoading(true);

      const bookingData =
        buildBookingData();

      bookingData.paymentMethod =
        "admin";

      bookingData.paymentVerified =
        true;

      bookingData.paymentStatus =
        "Paid";

      bookingData.bookingStatus =
        "Confirmed";

      bookingData.paymentId =
        "ADMIN_NO_PAYMENT";

      bookingData.orderId =
        "ADMIN_BOOKING";

      const response =
        await fetch(
          "https://saiyed-travels-backend-1.onrender.com/api/bookings",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              ...(localStorage.getItem(
                "token"
              )
                ? {
                    Authorization:
                      `Bearer ${localStorage.getItem(
                        "token"
                      )}`,
                  }
                : {}),
            },

            body:
              JSON.stringify(
                bookingData
              ),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to create admin booking."
        );
      }

      if (
        !data.success ||
        !data.booking
      ) {
        throw new Error(
          "Booking was not created."
        );
      }

      navigate("/success", {
        state: {
          booking: data.booking,
          autoDownload: false,
        },
      });
    } catch (error) {
      console.error(
        "ADMIN BOOKING ERROR:",
        error
      );

      alert(
        error.message ||
          "Unable to create admin booking."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // SUBMIT MANUAL PAYMENT REQUEST
  // =====================================================

  const handlePaymentRequest =
    async () => {
      if (loading) {
        return;
      }

      // -------------------------------------------------
      // VALIDATION
      // -------------------------------------------------

      if (!paymentMethod) {
        alert(
          "Please select a bank."
        );
        return;
      }

      if (!paymentId.trim()) {
        alert(
          "Please enter Payment ID / UTR."
        );
        return;
      }

      if (!paymentScreenshot) {
        alert(
          "Please upload payment screenshot."
        );
        return;
      }

      if (!paymentDateTime) {
        alert(
          "Please select payment date and time."
        );
        return;
      }

      // EMAIL FIX
      if (!customerEmail.trim()) {
        alert(
          "Please enter customer email."
        );
        return;
      }

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailPattern.test(
          customerEmail.trim()
        )
      ) {
        alert(
          "Please enter a valid customer email."
        );
        return;
      }

      if (!whatsappNumber.trim()) {
        alert(
          "Please enter WhatsApp number."
        );
        return;
      }

      const cleanWhatsappNumber =
        whatsappNumber.replace(/\D/g, "");

      if (
        cleanWhatsappNumber.length < 10 ||
        cleanWhatsappNumber.length > 15
      ) {
        alert(
          "Please enter a valid WhatsApp number."
        );
        return;
      }

      try {
        setLoading(true);

        // -------------------------------------------------
        // BUILD BOOKING SNAPSHOT
        // -------------------------------------------------

        const bookingData =
          buildBookingData();

        // -------------------------------------------------
        // FORM DATA
        // -------------------------------------------------

        const formData =
          new FormData();

        formData.append(
          "bookingData",
          JSON.stringify(
            bookingData
          )
        );

        formData.append(
          "amount",
          String(total)
        );

        formData.append(
          "bankName",
          paymentMethod
        );

        formData.append(
          "paymentId",
          paymentId.trim()
        );

        formData.append(
          "paymentDateTime",
          paymentDateTime
        );

        // CUSTOMER EMAIL FIX
        formData.append(
          "customerEmail",
          customerEmail
            .trim()
            .toLowerCase()
        );

        // WHATSAPP
        formData.append(
          "whatsappNumber",
          cleanWhatsappNumber
        );

        formData.append(
          "screenshot",
          paymentScreenshot
        );

        // -------------------------------------------------
        // SEND TO BACKEND
        // -------------------------------------------------

        const response =
          await fetch(
            "https://saiyed-travels-backend-1.onrender.com/api/payment-requests",
            {
              method: "POST",

              headers: {
                ...(localStorage.getItem(
                  "token"
                )
                  ? {
                      Authorization:
                        `Bearer ${localStorage.getItem(
                          "token"
                        )}`,
                    }
                  : {}),
              },

              body: formData,
            }
          );

        const data =
          await response.json();

        console.log(
          "PAYMENT REQUEST RESPONSE:",
          data
        );

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to submit payment request."
          );
        }

        if (!data.success) {
          throw new Error(
            data.message ||
              "Payment request failed."
          );
        }

        // -------------------------------------------------
        // SUCCESS
        // -------------------------------------------------

        setSubmitted(true);

        alert(
          "Payment request submitted successfully. Admin will verify your payment and confirm the ticket."
        );
      } catch (error) {
        console.error(
          "PAYMENT REQUEST ERROR:",
          error
        );

        alert(
          error.message ||
            "Unable to submit payment request."
        );
      } finally {
        setLoading(false);
      }
    };

  // =====================================================
  // MAIN PAYMENT BUTTON
  // =====================================================

  const handlePayment =
    async () => {
      if (isAdmin) {
        await handleAdminBooking();
        return;
      }

      await handlePaymentRequest();
    };

  // =====================================================
  // SUCCESS / PENDING SCREEN
  // =====================================================

  if (submitted) {
    return (
      <>
        <Navbar />

        <section className="payment-page">
          <div
            className="payment-container"
            style={{
              display: "flex",
              justifyContent:
                "center",
              width: "100%",
            }}
          >
            <div
              className="payment-card"
              style={{
                maxWidth: "650px",
                width: "100%",
                textAlign: "center",
                padding: "40px 25px",
              }}
            >
              <div
                style={{
                  fontSize: "60px",
                  marginBottom: "15px",
                }}
              >
                ⏳
              </div>

              <h2>
                Payment Request Submitted
              </h2>

              <p
                style={{
                  marginTop: "15px",
                  lineHeight: "1.7",
                }}
              >
                Your payment details and
                screenshot have been
                submitted successfully.
              </p>

              <p
                style={{
                  marginTop: "10px",
                  lineHeight: "1.7",
                }}
              >
                Our admin team will manually
                verify your payment.
                <br />
                After approval, your booking
                will be confirmed after admin
                verification.
              </p>

              <strong>
                Email: {customerEmail}
              </strong>

              <br />

              <strong>
                WhatsApp: {whatsappNumber}
              </strong>

              <div
                style={{
                  marginTop: "25px",
                  padding: "15px",
                  borderRadius: "10px",
                  background:
                    "#fff7e6",
                }}
              >
                <strong>
                  Payment Status: Pending
                </strong>
                <br />
                Please wait for admin
                verification.
              </div>

              <button
                type="button"
                className="pay-btn"
                style={{
                  marginTop: "25px",
                }}
                onClick={() =>
                  navigate("/")
                }
              >
                Back To Home
              </button>
            </div>
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

      <section className="payment-page">
        <div className="payment-container">

          {/* =================================================
              LEFT
          ================================================= */}

          <div className="payment-left">

            {/* PROGRESS */}

            <div className="payment-progress">

              <div className="step active">
                <span>✓</span>
                <p>Booking</p>
              </div>

              <div className="line active" />

              <div className="step active">
                <span>✓</span>
                <p>Seat</p>
              </div>

              <div className="line active" />

              <div className="step active">
                <span>✓</span>
                <p>Meal</p>
              </div>

              <div className="line active" />

              <div className="step active">
                <span>✓</span>
                <p>Baggage</p>
              </div>

              <div className="line active" />

              <div className="step current">
                <span>5</span>
                <p>Payment</p>
              </div>

            </div>

            <div className="payment-card">

              <h2>
                {isAdmin
                  ? "Confirm Booking"
                  : "Manual Payment"}
              </h2>

              {/* =================================================
                  CUSTOMER PAYMENT
              ================================================= */}

              {!isAdmin ? (
                <>

                  {/* SECURITY */}

                  <div className="secure-payment">
                    🔒

                    <span>
                      Pay using the QR code below.
                      Your payment will be manually
                      verified by the admin.
                    </span>
                  </div>

                  {/* AMOUNT */}

                  <div
                    style={{
                      marginTop: "20px",
                      padding: "18px",
                      borderRadius: "12px",
                      background:
                        "#f5f8ff",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                      }}
                    >
                      Total Amount To Pay
                    </p>

                    <h2
                      style={{
                        margin:
                          "8px 0 0",
                      }}
                    >
                      ₹
                      {total.toLocaleString(
                        "en-IN"
                      )}
                    </h2>
                  </div>

                  {/* BANK SELECT */}

                  <div
                    className="payment-bank-selection"
                    style={{
                      marginTop: "25px",
                    }}
                  >
                    <h3>
                      Select Bank
                    </h3>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "1fr 1fr",
                        gap: "12px",
                        marginTop: "12px",
                      }}
                    >

                      <button
                        type="button"
                        onClick={() =>
                          setPaymentMethod(
                            "ICICI Bank"
                          )
                        }
                        style={{
                          padding:
                            "14px",
                          borderRadius:
                            "10px",
                          border:
                            paymentMethod ===
                            "ICICI Bank"
                              ? "2px solid #176fe1"
                              : "1px solid #ddd",
                          background:
                            paymentMethod ===
                            "ICICI Bank"
                              ? "#eef5ff"
                              : "#fff",
                          cursor:
                            "pointer",
                          fontWeight:
                            "600",
                        }}
                      >
                        ICICI Bank
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setPaymentMethod(
                            "Bank of Baroda"
                          )
                        }
                        style={{
                          padding:
                            "14px",
                          borderRadius:
                            "10px",
                          border:
                            paymentMethod ===
                            "Bank of Baroda"
                              ? "2px solid #176fe1"
                              : "1px solid #ddd",
                          background:
                            paymentMethod ===
                            "Bank of Baroda"
                              ? "#eef5ff"
                              : "#fff",
                          cursor:
                            "pointer",
                          fontWeight:
                            "600",
                        }}
                      >
                        Bank of Baroda
                      </button>

                    </div>
                  </div>

                  {/* QR CODE */}

                  <div
                    style={{
                      marginTop: "25px",
                      textAlign: "center",
                    }}
                  >

                    <h3>
                      {paymentMethod}
                    </h3>

                    <p
                      style={{
                        marginTop:
                          "8px",
                        marginBottom:
                          "15px",
                      }}
                    >
                      Scan this QR and pay
                      <strong>
                        {" "}
                        ₹
                        {total.toLocaleString(
                          "en-IN"
                        )}
                      </strong>
                    </p>

                    <div
                      style={{
                        display:
                          "flex",
                        justifyContent:
                          "center",
                      }}
                    >
                      <img
                        src={
                          paymentMethod ===
                          "ICICI Bank"
                            ? ICICIQR
                            : BankOfBarodaQR
                        }
                        alt={`${paymentMethod} QR Code`}
                        style={{
                          width:
                            "260px",
                          height:
                            "260px",
                          objectFit:
                            "contain",
                          border:
                            "1px solid #ddd",
                          borderRadius:
                            "12px",
                          padding:
                            "10px",
                          background:
                            "#fff",
                        }}
                      />
                    </div>

                  </div>

                  {/* PAYMENT DETAILS */}

                  <div
                    style={{
                      marginTop: "30px",
                    }}
                  >

                    <h3>
                      Payment Details
                    </h3>

                    {/* UTR */}

                    <div
                      style={{
                        marginTop:
                          "15px",
                      }}
                    >
                      <label>
                        Payment ID / UTR
                      </label>

                      <input
                        type="text"
                        placeholder="Enter UTR / Transaction ID"
                        value={paymentId}
                        onChange={(e) =>
                          setPaymentId(
                            e.target.value
                          )
                        }
                        style={{
                          width:
                            "100%",
                          marginTop:
                            "8px",
                          padding:
                            "13px",
                          borderRadius:
                            "8px",
                          border:
                            "1px solid #ddd",
                          boxSizing:
                            "border-box",
                        }}
                      />
                    </div>

                    {/* SCREENSHOT */}

                    <div
                      style={{
                        marginTop:
                          "18px",
                      }}
                    >
                      <label>
                        Payment Screenshot
                      </label>

                      <input
                        type="file"
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={(e) =>
                          setPaymentScreenshot(
                            e.target
                              .files?.[0] ||
                              null
                          )
                        }
                        style={{
                          width:
                            "100%",
                          marginTop:
                            "8px",
                        }}
                      />

                      {paymentScreenshot && (
                        <p
                          style={{
                            marginTop:
                              "7px",
                            fontSize:
                              "14px",
                          }}
                        >
                          Selected:{" "}
                          {
                            paymentScreenshot.name
                          }
                        </p>
                      )}
                    </div>

                    {/* DATE TIME */}

                    <div
                      style={{
                        marginTop:
                          "18px",
                      }}
                    >
                      <label>
                        Payment Date & Time
                      </label>

                      <input
                        type="datetime-local"
                        value={
                          paymentDateTime
                        }
                        onChange={(e) =>
                          setPaymentDateTime(
                            e.target
                              .value
                          )
                        }
                        style={{
                          width:
                            "100%",
                          marginTop:
                            "8px",
                          padding:
                            "13px",
                          borderRadius:
                            "8px",
                          border:
                            "1px solid #ddd",
                          boxSizing:
                            "border-box",
                        }}
                      />
                    </div>

                    {/* CUSTOMER EMAIL */}

                    <div
                      style={{
                        marginTop:
                          "18px",
                      }}
                    >
                      <label>
                        Customer Email *
                      </label>

                      <input
                        type="email"
                        inputMode="email"
                        placeholder="Enter customer email"
                        value={
                          customerEmail
                        }
                        onChange={(e) =>
                          setCustomerEmail(
                            e.target.value
                          )
                        }
                        style={{
                          width:
                            "100%",
                          marginTop:
                            "8px",
                          padding:
                            "13px",
                          borderRadius:
                            "8px",
                          border:
                            "1px solid #ddd",
                          boxSizing:
                            "border-box",
                        }}
                      />
                    </div>

                    {/* WHATSAPP */}

                    <div
                      style={{
                        marginTop:
                          "18px",
                      }}
                    >
                      <label>
                        WhatsApp Number *
                      </label>

                      <input
                        type="tel"
                        inputMode="numeric"
                        placeholder="Enter WhatsApp number"
                        value={
                          whatsappNumber
                        }
                        onChange={(e) =>
                          setWhatsappNumber(
                            e.target.value
                          )
                        }
                        style={{
                          width:
                            "100%",
                          marginTop:
                            "8px",
                          padding:
                            "13px",
                          borderRadius:
                            "8px",
                          border:
                            "1px solid #ddd",
                          boxSizing:
                            "border-box",
                        }}
                      />
                    </div>

                  </div>

                  {/* IMPORTANT MESSAGE */}

                  <div
                    style={{
                      marginTop: "22px",
                      padding: "15px",
                      borderRadius: "10px",
                      background:
                        "#fff7e6",
                      lineHeight: "1.6",
                      fontSize: "14px",
                    }}
                  >
                    ⚠️ <strong>Important:</strong>
                    <br />
                    Please pay exactly ₹
                    {total.toLocaleString(
                      "en-IN"
                    )}
                    .
                    After submitting the
                    payment details, your booking
                    will remain pending until the
                    admin verifies your payment.
                  </div>

                </>
              ) : (

                /* =================================================
                   ADMIN
                ================================================= */

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
                  </strong>{" "}
                  to get ₹500 OFF
                </p>

              </div>

            </div>
          </div>

          {/* =================================================
              RIGHT - BOOKING SUMMARY
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
                  {passenger?.firstName}{" "}
                  {passenger?.lastName}
                </span>
              </div>

              {/* EMAIL */}

              {!isAdmin && (
                <div className="summary-row">
                  <span>
                    Email
                  </span>

                  <span>
                    {customerEmail ||
                      "-"}
                  </span>
                </div>
              )}

              {/* WHATSAPP */}

              <div className="summary-row">
                <span>
                  WhatsApp
                </span>

                <span>
                  {whatsappNumber ||
                    "-"}
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
                  {flight?.airline}
                </span>
              </div>

              {/* ROUTE */}

              <div className="summary-row">
                <span>
                  Route
                </span>

                <span>
                  {flight?.from ||
                    flight?.fromCity ||
                    flight?.fromCode}

                  {" → "}

                  {flight?.to ||
                    flight?.toCity ||
                    flight?.toCode}
                </span>
              </div>

              {/* FLIGHT */}

              <div className="summary-row">
                <span>
                  Flight No.
                </span>

                <span>
                  {flight?.flightNo ||
                    flight?.flightNumber}
                </span>
              </div>

              {/* SEATS */}

              <div className="summary-row">
                <span>
                  Seats
                </span>

                <span>
                  {selectedSeats.length >
                  0
                    ? selectedSeats
                        .map(
                          (item) =>
                            typeof item ===
                            "object"
                              ? item?.seatNumber ||
                                item?.seat ||
                                ""
                              : item
                        )
                        .filter(Boolean)
                        .join(", ")
                    : "-"}
                </span>
              </div>

              {/* MEALS */}

              <div className="summary-row">
                <span>
                  Meals
                </span>

                <span>
                  {selectedMeals.length >
                  0
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
                  {selectedBaggage.length >
                  0
                    ? selectedBaggage
                        .map(
                          (item) =>
                            item?.weight ||
                            "Baggage"
                        )
                        .join(", ")
                    : "15 KG Included"}
                </span>
              </div>

              <hr />

              {/* ADULT */}

              <div className="summary-row">
                <span>
                  Adult Fare ({adultCount})
                </span>

                <span>
                  ₹
                  {(
                    adultFare *
                    adultCount
                  ).toLocaleString(
                    "en-IN"
                  )}
                </span>
              </div>

              {/* CHILD */}

              {childCount > 0 && (
                <div className="summary-row">
                  <span>
                    Child Fare ({childCount})
                  </span>

                  <span>
                    ₹
                    {(
                      childFare *
                      childCount
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </span>
                </div>
              )}

              {/* INFANT */}

              {infantCount > 0 && (
                <div className="summary-row">
                  <span>
                    Infant Fare ({infantCount})
                  </span>

                  <span>
                    ₹
                    {(
                      infantFare *
                      infantCount
                    ).toLocaleString(
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

              {/* SECURITY */}

              {!isAdmin && (
                <div className="secure-payment">
                  🔒

                  <span>
                    Your payment will be
                    manually verified before
                    ticket confirmation.
                  </span>
                </div>
              )}

              {/* BUTTON */}

              <button
                type="button"
                className="pay-btn"
                onClick={
                  handlePayment
                }
                disabled={loading}
              >
                {loading
                  ? "Submitting..."
                  : isAdmin
                  ? "Confirm Ticket"
                  : `Submit Payment Request • ₹ ${total.toLocaleString(
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