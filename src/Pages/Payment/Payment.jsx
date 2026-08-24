// // // // // // import "./Payment.css";
// // // // // // import { useState } from "react";
// // // // // // import { useLocation, useNavigate } from "react-router-dom";

// // // // // // import Navbar from "../../Components/Navbar/Navbar";
// // // // // // import Footer from "../../Components/Footer/Footer";

// // // // // // function Payment() {

// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();

// // // // // //   const {
// // // // // //     flight,
// // // // // //     seat,
// // // // // //     meal,
// // // // // //     baggage,
// // // // // //   } = location.state || {};

// // // // // //   const [coupon, setCoupon] = useState("");
// // // // // //   const [discount, setDiscount] = useState(0);
// // // // // //   const [paymentMethod, setPaymentMethod] = useState("upi");

// // // // // //   if (!flight) {

// // // // // //     return (

// // // // // //       <>

// // // // // //         <Navbar />

// // // // // //         <section className="payment-page">

// // // // // //           <div className="no-booking">

// // // // // //             <h2>No Booking Found ✈️</h2>

// // // // // //             <p>
// // // // // //               Please complete your booking before making payment.
// // // // // //             </p>

// // // // // //             <button
// // // // // //               onClick={() => navigate("/")}
// // // // // //             >
// // // // // //               Back To Home
// // // // // //             </button>

// // // // // //           </div>

// // // // // //         </section>

// // // // // //         <Footer />

// // // // // //       </>

// // // // // //     );

// // // // // //   }

// // // // // //   const seatPrice = seat ? 300 : 0;
// // // // // //   const mealPrice = meal ? meal.price : 0;
// // // // // //   const baggagePrice = baggage ? baggage.price : 0;

// // // // // //   const taxes = 350;
// // // // // //   const convenienceFee = 100;

// // // // // //   const subtotal =
// // // // // //     flight.price +
// // // // // //     seatPrice +
// // // // // //     mealPrice +
// // // // // //     baggagePrice +
// // // // // //     taxes +
// // // // // //     convenienceFee;

// // // // // //   const total = subtotal - discount;

// // // // // //   const applyCoupon = () => {

// // // // // //     if (coupon.trim().toUpperCase() === "SAVE500") {

// // // // // //       setDiscount(500);

// // // // // //       alert("Coupon Applied Successfully");

// // // // // //     }

// // // // // //     else {

// // // // // //       setDiscount(0);

// // // // // //       alert("Invalid Coupon");

// // // // // //     }

// // // // // //   };

// // // // // //   return (

// // // // // //     <>

// // // // // //       <Navbar />

// // // // // //       <section className="payment-page">

// // // // // //         <div className="payment-progress">

// // // // // //           <div className="step active">
// // // // // //             <span>✓</span>
// // // // // //             <p>Booking</p>
// // // // // //           </div>

// // // // // //           <div className="line active"></div>

// // // // // //           <div className="step active">
// // // // // //             <span>✓</span>
// // // // // //             <p>Seat</p>
// // // // // //           </div>

// // // // // //           <div className="line active"></div>

// // // // // //           <div className="step active">
// // // // // //             <span>✓</span>
// // // // // //             <p>Meal</p>
// // // // // //           </div>

// // // // // //           <div className="line active"></div>

// // // // // //           <div className="step active">
// // // // // //             <span>✓</span>
// // // // // //             <p>Baggage</p>
// // // // // //           </div>

// // // // // //           <div className="line active"></div>

// // // // // //           <div className="step current">
// // // // // //             <span>5</span>
// // // // // //             <p>Payment</p>
// // // // // //           </div>

// // // // // //         </div>

// // // // // //         <div className="payment-container">

// // // // // //           <div className="payment-left">

// // // // // //             <h2>
// // // // // //               Select Payment Method
// // // // // //             </h2>

// // // // // //             {/* UPI */}

// // // // // //             <div className="payment-card">

// // // // // //               <label>

// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   checked={paymentMethod === "upi"}
// // // // // //                   onChange={() => setPaymentMethod("upi")}
// // // // // //                 />

// // // // // //                 UPI Payment

// // // // // //               </label>

// // // // // //               <div className="upi-apps">

// // // // // //                 <button>
// // // // // //                   PhonePe
// // // // // //                 </button>

// // // // // //                 <button>
// // // // // //                   Google Pay
// // // // // //                 </button>

// // // // // //                 <button>
// // // // // //                   Paytm
// // // // // //                 </button>

// // // // // //               </div>

// // // // // //             </div>

// // // // // //             {/* CARD */}

// // // // // //             <div className="payment-card">

// // // // // //               <label>

// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   checked={paymentMethod === "card"}
// // // // // //                   onChange={() => setPaymentMethod("card")}
// // // // // //                 />

// // // // // //                 Credit / Debit Card

// // // // // //               </label>

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Card Number"
// // // // // //               />

// // // // // //               <div className="card-row">

// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   placeholder="MM / YY"
// // // // // //                 />

// // // // // //                 <input
// // // // // //                   type="password"
// // // // // //                   placeholder="CVV"
// // // // // //                 />

// // // // // //               </div>

// // // // // //             </div>

// // // // // //             {/* NET BANKING */}

// // // // // //             <div className="payment-card">

// // // // // //               <label>

// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   checked={paymentMethod === "netbanking"}
// // // // // //                   onChange={() => setPaymentMethod("netbanking")}
// // // // // //                 />

// // // // // //                 Net Banking

// // // // // //               </label>

// // // // // //               <select>

// // // // // //                 <option>Select Bank</option>

// // // // // //                 <option>State Bank of India</option>

// // // // // //                 <option>HDFC Bank</option>

// // // // // //                 <option>ICICI Bank</option>

// // // // // //                 <option>Axis Bank</option>

// // // // // //               </select>

// // // // // //             </div>

// // // // // //             {/* Coupon */}

// // // // // //             <div className="coupon-box">

// // // // // //               <h3>
// // // // // //                 Apply Coupon
// // // // // //               </h3>

// // // // // //               <div className="coupon-input">

// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   placeholder="Enter Coupon Code"
// // // // // //                   value={coupon}
// // // // // //                   onChange={(e) =>
// // // // // //                     setCoupon(e.target.value)
// // // // // //                   }
// // // // // //                 />

// // // // // //                 <button
// // // // // //                   onClick={applyCoupon}
// // // // // //                 >
// // // // // //                   Apply
// // // // // //                 </button>

// // // // // //               </div>

// // // // // //               <p className="coupon-note">
// // // // // //                 Use <strong>SAVE500</strong> to get ₹500 OFF
// // // // // //               </p>

// // // // // //             </div>          {/* Right Side */}

// // // // // //           <div className="payment-right">

// // // // // //             <div className="booking-summary">

// // // // // //               <h2>
// // // // // //                 Booking Summary
// // // // // //               </h2>

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Airline</span>
// // // // // //                 <span>{flight.airline}</span>
// // // // // //               </div>

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Route</span>
// // // // // //                 <span>
// // // // // //                   {flight.from} → {flight.to}
// // // // // //                 </span>
// // // // // //               </div>

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Flight No.</span>
// // // // // //                 <span>{flight.flightNo}</span>
// // // // // //               </div>

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Selected Seat</span>
// // // // // //                 <span>{seat}</span>
// // // // // //               </div>

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Meal</span>
// // // // // //                 <span>{meal.name}</span>
// // // // // //               </div>

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Baggage</span>
// // // // // //                 <span>{baggage.weight}</span>
// // // // // //               </div>

// // // // // //               <hr />

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Flight Fare</span>
// // // // // //                 <span>₹ {flight.price}</span>
// // // // // //               </div>

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Seat Charges</span>
// // // // // //                 <span>₹ {seatPrice}</span>
// // // // // //               </div>

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Meal Charges</span>
// // // // // //                 <span>₹ {mealPrice}</span>
// // // // // //               </div>

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Baggage Charges</span>
// // // // // //                 <span>₹ {baggagePrice}</span>
// // // // // //               </div>

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Taxes</span>
// // // // // //                 <span>₹ {taxes}</span>
// // // // // //               </div>

// // // // // //               <div className="summary-row">
// // // // // //                 <span>Convenience Fee</span>
// // // // // //                 <span>₹ {convenienceFee}</span>
// // // // // //               </div>

// // // // // //               <div className="summary-row discount">
// // // // // //                 <span>Coupon Discount</span>
// // // // // //                 <span>- ₹ {discount}</span>
// // // // // //               </div>

// // // // // //               <hr />

// // // // // //               <div className="summary-total">

// // // // // //                 <span>
// // // // // //                   Total Payable
// // // // // //                 </span>

// // // // // //                 <span>
// // // // // //                   ₹ {total}
// // // // // //                 </span>

// // // // // //               </div>

// // // // // //               <div className="secure-payment">
// // // // // //                 🔒 100% Secure Payment
// // // // // //               </div>

// // // // // //               <button
// // // // // //                 className="pay-btn"
// // // // // //                 onClick={() =>
// // // // // //                   navigate("/success", {
// // // // // //                     state: {
// // // // // //                       flight,
// // // // // //                       seat,
// // // // // //                       meal,
// // // // // //                       baggage,
// // // // // //                       total,
// // // // // //                     },
// // // // // //                   })
// // // // // //                 }
// // // // // //               >
// // // // // //                 Pay ₹ {total}
// // // // // //               </button>
// // // // // //  </div>
// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </div>

        

// // // // // //       </section>

// // // // // //       <Footer />

// // // // // //     </>

// // // // // //   );

// // // // // // }

// // // // // // export default Payment;




// // // // // import "./Payment.css";

// // // // // import { useState } from "react";
// // // // // import { useLocation, useNavigate } from "react-router-dom";

// // // // // import Navbar from "../../Components/Navbar/Navbar";
// // // // // import Footer from "../../Components/Footer/Footer";

// // // // // function Payment() {
// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();

// // // // //   // ==========================================
// // // // //   // BOOKING DATA
// // // // //   // ==========================================

// // // // //   const {
// // // // //     flight,
// // // // //     passenger,
// // // // //     seat,
// // // // //     meal,
// // // // //     baggage,
// // // // //   } = location.state || {};

// // // // //   // ==========================================
// // // // //   // STATES
// // // // //   // ==========================================

// // // // //   const [coupon, setCoupon] = useState("");
// // // // //   const [discount, setDiscount] = useState(0);
// // // // //   const [paymentMethod, setPaymentMethod] =
// // // // //     useState("upi");

// // // // //   const [loading, setLoading] = useState(false);

// // // // //   // ==========================================
// // // // //   // NO FLIGHT
// // // // //   // ==========================================

// // // // //   if (!flight) {
// // // // //     return (
// // // // //       <>
// // // // //         <Navbar />

// // // // //         <section className="payment-page">
// // // // //           <div className="no-booking">
// // // // //             <h2>No Booking Found ✈️</h2>

// // // // //             <p>
// // // // //               Please complete your booking before
// // // // //               making payment.
// // // // //             </p>

// // // // //             <button
// // // // //               onClick={() => navigate("/")}
// // // // //             >
// // // // //               Back To Home
// // // // //             </button>
// // // // //           </div>
// // // // //         </section>

// // // // //         <Footer />
// // // // //       </>
// // // // //     );
// // // // //   }

// // // // //   // ==========================================
// // // // //   // PRICE
// // // // //   // ==========================================

// // // // //   const flightPrice = Number(
// // // // //     flight.finalPrice ??
// // // // //     flight.price ??
// // // // //     flight.cabins?.[0]?.price ??
// // // // //     0
// // // // //   );

// // // // //   const seatPrice = seat ? 300 : 0;

// // // // //   const mealPrice = Number(
// // // // //     meal?.price ?? 0
// // // // //   );

// // // // //   const baggagePrice = Number(
// // // // //     baggage?.price ?? 0
// // // // //   );

// // // // //   const taxes = 350;

// // // // //   const convenienceFee = 100;

// // // // //   const subtotal =
// // // // //     flightPrice +
// // // // //     seatPrice +
// // // // //     mealPrice +
// // // // //     baggagePrice +
// // // // //     taxes +
// // // // //     convenienceFee;

// // // // //   const total =
// // // // //     Math.max(
// // // // //       0,
// // // // //       subtotal - discount
// // // // //     );

// // // // //   // ==========================================
// // // // //   // COUPON
// // // // //   // ==========================================

// // // // //   const applyCoupon = () => {
// // // // //     if (
// // // // //       coupon.trim().toUpperCase() ===
// // // // //       "SAVE500"
// // // // //     ) {
// // // // //       setDiscount(500);

// // // // //       alert(
// // // // //         "Coupon Applied Successfully"
// // // // //       );
// // // // //     } else {
// // // // //       setDiscount(0);

// // // // //       alert("Invalid Coupon");
// // // // //     }
// // // // //   };

// // // // //   // ==========================================
// // // // //   // CREATE BOOKING
// // // // //   // ==========================================

// // // // //   const handlePayment = async () => {
// // // // //     // ----------------------------------------
// // // // //     // Passenger validation
// // // // //     // ----------------------------------------

// // // // //     if (!passenger) {
// // // // //       alert(
// // // // //         "Passenger details are missing. Please start booking again."
// // // // //       );

// // // // //       navigate("/flights");

// // // // //       return;
// // // // //     }

// // // // //     if (!seat) {
// // // // //       alert(
// // // // //         "Please select a seat."
// // // // //       );

// // // // //       navigate("/seat-selection", {
// // // // //         state: {
// // // // //           flight,
// // // // //           passenger,
// // // // //         },
// // // // //       });

// // // // //       return;
// // // // //     }

// // // // //     // ----------------------------------------
// // // // //     // Prevent double click
// // // // //     // ----------------------------------------

// // // // //     if (loading) {
// // // // //       return;
// // // // //     }

// // // // //     setLoading(true);

// // // // //     try {
// // // // //       // ======================================
// // // // //       // BOOKING DATA
// // // // //       // ======================================

// // // // //       const bookingData = {
// // // // //         passenger: {
// // // // //           firstName:
// // // // //             passenger.firstName || "",

// // // // //           lastName:
// // // // //             passenger.lastName || "",

// // // // //           dob:
// // // // //             passenger.dob || "",

// // // // //           gender:
// // // // //             passenger.gender || "",

// // // // //           nationality:
// // // // //             passenger.nationality || "",

// // // // //           passport:
// // // // //             passenger.passport || "",

// // // // //           passportExpiry:
// // // // //             passenger.passportExpiry || "",

// // // // //           email:
// // // // //             passenger.email || "",

// // // // //           phone:
// // // // //             passenger.phone || "",

// // // // //           city:
// // // // //             passenger.city || "",

// // // // //           address:
// // // // //             passenger.address || "",

// // // // //           request:
// // // // //             passenger.request || "",
// // // // //         },

// // // // //         // ====================================
// // // // //         // FLIGHT
// // // // //         // ====================================

// // // // //         flight: {
// // // // //           airline:
// // // // //             flight.airline || "",

// // // // //           flightNo:
// // // // //             flight.flightNo || "",

// // // // //           flightType:
// // // // //             flight.flightType ||
// // // // //             "Domestic",

// // // // //           aircraft:
// // // // //             flight.aircraft || "",

// // // // //           fromCity:
// // // // //             flight.fromCity ||
// // // // //             flight.from ||
// // // // //             "",

// // // // //           fromAirport:
// // // // //             flight.fromAirport || "",

// // // // //           fromCode:
// // // // //             flight.fromCode || "",

// // // // //           toCity:
// // // // //             flight.toCity ||
// // // // //             flight.to ||
// // // // //             "",

// // // // //           toAirport:
// // // // //             flight.toAirport || "",

// // // // //           toCode:
// // // // //             flight.toCode || "",

// // // // //           departureDate:
// // // // //             flight.departureDate || "",

// // // // //           departureTime:
// // // // //             flight.departureTime ||
// // // // //             flight.departure ||
// // // // //             "",

// // // // //           departureTerminal:
// // // // //             flight.departureTerminal ||
// // // // //             "",

// // // // //           arrivalDate:
// // // // //             flight.arrivalDate || "",

// // // // //           arrivalTime:
// // // // //             flight.arrivalTime ||
// // // // //             flight.arrival ||
// // // // //             "",

// // // // //           arrivalTerminal:
// // // // //             flight.arrivalTerminal || "",

// // // // //           duration:
// // // // //             flight.duration || "",

// // // // //           stops:
// // // // //             flight.stops ||
// // // // //             "Non-stop",

// // // // //           stopAirport:
// // // // //             flight.stopAirport || "",

// // // // //           price:
// // // // //             flightPrice,

// // // // //           logo:
// // // // //             flight.logo || "",
// // // // //         },

// // // // //         // ====================================
// // // // //         // SEAT
// // // // //         // ====================================

// // // // //         seat: seat,

// // // // //         seatPrice:
// // // // //           seatPrice,

// // // // //         // ====================================
// // // // //         // MEAL
// // // // //         // ====================================

// // // // //         meal: {
// // // // //           name:
// // // // //             meal?.name ||
// // // // //             "No Meal",

// // // // //           price:
// // // // //             mealPrice,
// // // // //         },

// // // // //         // ====================================
// // // // //         // BAGGAGE
// // // // //         // ====================================

// // // // //         baggage: {
// // // // //           weight:
// // // // //             baggage?.weight ||
// // // // //             "15 KG (Included)",

// // // // //           price:
// // // // //             baggagePrice,
// // // // //         },

// // // // //         // ====================================
// // // // //         // PAYMENT
// // // // //         // ====================================

// // // // //         paymentMethod:
// // // // //           paymentMethod,

// // // // //         discount:
// // // // //           discount,

// // // // //         taxes:
// // // // //           taxes,

// // // // //         convenienceFee:
// // // // //           convenienceFee,

// // // // //         total:
// // // // //           total,
// // // // //       };

// // // // //       console.log(
// // // // //         "Sending Booking:",
// // // // //         bookingData
// // // // //       );

// // // // //       // ======================================
// // // // //       // API REQUEST
// // // // //       // ======================================

// // // // //       const response = await fetch(
// // // // //         "http://localhost:5000/api/bookings",
// // // // //         {
// // // // //           method: "POST",

// // // // //           headers: {
// // // // //             "Content-Type":
// // // // //               "application/json",
// // // // //           },

// // // // //           body:
// // // // //             JSON.stringify(
// // // // //               bookingData
// // // // //             ),
// // // // //         }
// // // // //       );

// // // // //       // ======================================
// // // // //       // RESPONSE
// // // // //       // ======================================

// // // // //       const data =
// // // // //         await response.json();

// // // // //       console.log(
// // // // //         "Booking API Response:",
// // // // //         data
// // // // //       );

// // // // //       // ======================================
// // // // //       // API ERROR
// // // // //       // ======================================

// // // // //       if (!response.ok) {
// // // // //         throw new Error(
// // // // //           data.message ||
// // // // //             "Unable to create booking."
// // // // //         );
// // // // //       }

// // // // //       // ======================================
// // // // //       // SUCCESS
// // // // //       // ======================================

// // // // //       if (
// // // // //         !data.success ||
// // // // //         !data.booking
// // // // //       ) {
// // // // //         throw new Error(
// // // // //           "Booking was not created."
// // // // //         );
// // // // //       }

// // // // //       // ======================================
// // // // //       // SUCCESS PAGE
// // // // //       // ======================================

// // // // //       navigate("/success", {
// // // // //         state: {
// // // // //           flight:
// // // // //             data.booking.flight,

// // // // //           passenger:
// // // // //             data.booking.passenger,

// // // // //           seat:
// // // // //             data.booking.seat,

// // // // //           meal:
// // // // //             data.booking.meal,

// // // // //           baggage:
// // // // //             data.booking.baggage,

// // // // //           total:
// // // // //             data.booking.total,

// // // // //           bookingId:
// // // // //             data.booking.bookingId,

// // // // //           pnr:
// // // // //             data.booking.pnr,

// // // // //           paymentStatus:
// // // // //             data.booking.paymentStatus,

// // // // //           bookingStatus:
// // // // //             data.booking.bookingStatus,
// // // // //         },
// // // // //       });

// // // // //     } catch (error) {
// // // // //       console.error(
// // // // //         "Booking Error:",
// // // // //         error
// // // // //       );

// // // // //       alert(
// // // // //         error.message ||
// // // // //           "Unable to create booking. Please make sure backend is running."
// // // // //       );

// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // ==========================================
// // // // //   // UI
// // // // //   // ==========================================

// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />

// // // // //       <section className="payment-page">

// // // // //         {/* ====================================
// // // // //             PROGRESS
// // // // //         ==================================== */}

// // // // //         <div className="payment-progress">

// // // // //           <div className="step active">
// // // // //             <span>✓</span>
// // // // //             <p>Booking</p>
// // // // //           </div>

// // // // //           <div className="line active"></div>

// // // // //           <div className="step active">
// // // // //             <span>✓</span>
// // // // //             <p>Seat</p>
// // // // //           </div>

// // // // //           <div className="line active"></div>

// // // // //           <div className="step active">
// // // // //             <span>✓</span>
// // // // //             <p>Meal</p>
// // // // //           </div>

// // // // //           <div className="line active"></div>

// // // // //           <div className="step active">
// // // // //             <span>✓</span>
// // // // //             <p>Baggage</p>
// // // // //           </div>

// // // // //           <div className="line active"></div>

// // // // //           <div className="step current">
// // // // //             <span>5</span>
// // // // //             <p>Payment</p>
// // // // //           </div>

// // // // //         </div>

// // // // //         {/* ====================================
// // // // //             PAYMENT CONTAINER
// // // // //         ==================================== */}

// // // // //         <div className="payment-container">

// // // // //           {/* ==================================
// // // // //               LEFT
// // // // //           ================================== */}

// // // // //           <div className="payment-left">

// // // // //             <h2>
// // // // //               Select Payment Method
// // // // //             </h2>

// // // // //             {/* UPI */}

// // // // //             <div className="payment-card">

// // // // //               <label>

// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   checked={
// // // // //                     paymentMethod ===
// // // // //                     "upi"
// // // // //                   }
// // // // //                   onChange={() =>
// // // // //                     setPaymentMethod(
// // // // //                       "upi"
// // // // //                     )
// // // // //                   }
// // // // //                 />

// // // // //                 UPI Payment

// // // // //               </label>

// // // // //               <div className="upi-apps">

// // // // //                 <button
// // // // //                   type="button"
// // // // //                 >
// // // // //                   PhonePe
// // // // //                 </button>

// // // // //                 <button
// // // // //                   type="button"
// // // // //                 >
// // // // //                   Google Pay
// // // // //                 </button>

// // // // //                 <button
// // // // //                   type="button"
// // // // //                 >
// // // // //                   Paytm
// // // // //                 </button>

// // // // //               </div>

// // // // //             </div>

// // // // //             {/* CARD */}

// // // // //             <div className="payment-card">

// // // // //               <label>

// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   checked={
// // // // //                     paymentMethod ===
// // // // //                     "card"
// // // // //                   }
// // // // //                   onChange={() =>
// // // // //                     setPaymentMethod(
// // // // //                       "card"
// // // // //                     )
// // // // //                   }
// // // // //                 />

// // // // //                 Credit / Debit Card

// // // // //               </label>

// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Card Number"
// // // // //               />

// // // // //               <div className="card-row">

// // // // //                 <input
// // // // //                   type="text"
// // // // //                   placeholder="MM / YY"
// // // // //                 />

// // // // //                 <input
// // // // //                   type="password"
// // // // //                   placeholder="CVV"
// // // // //                 />

// // // // //               </div>

// // // // //             </div>

// // // // //             {/* NET BANKING */}

// // // // //             <div className="payment-card">

// // // // //               <label>

// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   checked={
// // // // //                     paymentMethod ===
// // // // //                     "netbanking"
// // // // //                   }
// // // // //                   onChange={() =>
// // // // //                     setPaymentMethod(
// // // // //                       "netbanking"
// // // // //                     )
// // // // //                   }
// // // // //                 />

// // // // //                 Net Banking

// // // // //               </label>

// // // // //               <select>

// // // // //                 <option>
// // // // //                   Select Bank
// // // // //                 </option>

// // // // //                 <option>
// // // // //                   State Bank of India
// // // // //                 </option>

// // // // //                 <option>
// // // // //                   HDFC Bank
// // // // //                 </option>

// // // // //                 <option>
// // // // //                   ICICI Bank
// // // // //                 </option>

// // // // //                 <option>
// // // // //                   Axis Bank
// // // // //                 </option>

// // // // //               </select>

// // // // //             </div>

// // // // //             {/* COUPON */}

// // // // //             <div className="coupon-box">

// // // // //               <h3>
// // // // //                 Apply Coupon
// // // // //               </h3>

// // // // //               <div className="coupon-input">

// // // // //                 <input
// // // // //                   type="text"
// // // // //                   placeholder="Enter Coupon Code"
// // // // //                   value={coupon}
// // // // //                   onChange={(e) =>
// // // // //                     setCoupon(
// // // // //                       e.target.value
// // // // //                     )
// // // // //                   }
// // // // //                 />

// // // // //                 <button
// // // // //                   type="button"
// // // // //                   onClick={
// // // // //                     applyCoupon
// // // // //                   }
// // // // //                 >
// // // // //                   Apply
// // // // //                 </button>

// // // // //               </div>

// // // // //               <p className="coupon-note">
// // // // //                 Use{" "}
// // // // //                 <strong>
// // // // //                   SAVE500
// // // // //                 </strong>{" "}
// // // // //                 to get ₹500 OFF
// // // // //               </p>

// // // // //             </div>

// // // // //           </div>

// // // // //           {/* ==================================
// // // // //               RIGHT
// // // // //           ================================== */}

// // // // //           <div className="payment-right">

// // // // //             <div className="booking-summary">

// // // // //               <h2>
// // // // //                 Booking Summary
// // // // //               </h2>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Passenger
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   {passenger?.firstName}{" "}
// // // // //                   {passenger?.lastName}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Airline
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   {flight.airline}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Route
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   {flight.fromCity ||
// // // // //                     flight.from ||
// // // // //                     "-"}{" "}
// // // // //                   →{" "}
// // // // //                   {flight.toCity ||
// // // // //                     flight.to ||
// // // // //                     "-"}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Flight No.
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   {flight.flightNo}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Travel Date
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   {flight.departureDate ||
// // // // //                     "-"}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Departure
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   {flight.departureTime ||
// // // // //                     flight.departure ||
// // // // //                     "-"}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Selected Seat
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   {seat || "-"}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Meal
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   {meal?.name ||
// // // // //                     "No Meal"}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Baggage
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   {baggage?.weight ||
// // // // //                     "15 KG Included"}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <hr />

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Flight Fare
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   ₹ {flightPrice}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Seat Charges
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   ₹ {seatPrice}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Meal Charges
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   ₹ {mealPrice}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Baggage Charges
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   ₹ {baggagePrice}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Taxes
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   ₹ {taxes}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row">
// // // // //                 <span>
// // // // //                   Convenience Fee
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   ₹ {convenienceFee}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="summary-row discount">

// // // // //                 <span>
// // // // //                   Coupon Discount
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   - ₹ {discount}
// // // // //                 </span>

// // // // //               </div>

// // // // //               <hr />

// // // // //               <div className="summary-total">

// // // // //                 <span>
// // // // //                   Total Payable
// // // // //                 </span>

// // // // //                 <span>
// // // // //                   ₹ {total}
// // // // //                 </span>

// // // // //               </div>

// // // // //               <div className="secure-payment">
// // // // //                 🔒 100% Secure Payment
// // // // //               </div>

// // // // //               {/* ==================================
// // // // //                   PAY BUTTON
// // // // //               ================================== */}

// // // // //               <button
// // // // //                 type="button"
// // // // //                 className="pay-btn"
// // // // //                 onClick={
// // // // //                   handlePayment
// // // // //                 }
// // // // //                 disabled={loading}
// // // // //               >

// // // // //                 {loading
// // // // //                   ? "Processing Booking..."
// // // // //                   : `Pay ₹ ${total}`}

// // // // //               </button>

// // // // //             </div>

// // // // //           </div>

// // // // //         </div>

// // // // //       </section>

// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // export default Payment;


// // // // import "./Payment.css";
// // // // import { useState } from "react";
// // // // import { useLocation, useNavigate } from "react-router-dom";

// // // // import Navbar from "../../Components/Navbar/Navbar";
// // // // import Footer from "../../Components/Footer/Footer";

// // // // function Payment() {

// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const {
// // // //     flight,
// // // //     passenger,
// // // //     seat,
// // // //     meal,
// // // //     baggage,
// // // //   } = location.state || {};

// // // //   const [coupon, setCoupon] = useState("");
// // // //   const [discount, setDiscount] = useState(0);
// // // //   const [paymentMethod, setPaymentMethod] =
// // // //     useState("upi");

// // // //   const [loading, setLoading] = useState(false);

// // // //   // ==========================================
// // // //   // NO BOOKING
// // // //   // ==========================================

// // // //   if (!flight || !passenger) {
// // // //     return (
// // // //       <>
// // // //         <Navbar />

// // // //         <section className="payment-page">

// // // //           <div className="no-booking">

// // // //             <h2>
// // // //               No Booking Found ✈️
// // // //             </h2>

// // // //             <p>
// // // //               Please complete your passenger
// // // //               details before making payment.
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

// // // //   // ==========================================
// // // //   // PRICES
// // // //   // ==========================================

// // // //   const flightPrice =
// // // //     Number(flight.price) || 0;

// // // //   const seatPrice =
// // // //     seat ? 300 : 0;

// // // //   const mealPrice =
// // // //     Number(meal?.price) || 0;

// // // //   const baggagePrice =
// // // //     Number(baggage?.price) || 0;

// // // //   const taxes = 350;

// // // //   const convenienceFee = 100;

// // // //   const subtotal =
// // // //     flightPrice +
// // // //     seatPrice +
// // // //     mealPrice +
// // // //     baggagePrice +
// // // //     taxes +
// // // //     convenienceFee;

// // // //   const total =
// // // //     Math.max(
// // // //       0,
// // // //       subtotal - discount
// // // //     );

// // // //   // ==========================================
// // // //   // COUPON
// // // //   // ==========================================

// // // //   const applyCoupon = () => {

// // // //     if (
// // // //       coupon.trim().toUpperCase() ===
// // // //       "SAVE500"
// // // //     ) {

// // // //       setDiscount(500);

// // // //       alert(
// // // //         "Coupon Applied Successfully"
// // // //       );

// // // //     } else {

// // // //       setDiscount(0);

// // // //       alert(
// // // //         "Invalid Coupon"
// // // //       );
// // // //     }
// // // //   };

// // // //   // ==========================================
// // // //   // COMPLETE BOOKING
// // // //   // ==========================================

// // // //   const handlePayment = async () => {

// // // //     if (loading) {
// // // //       return;
// // // //     }

// // // //     try {

// // // //       setLoading(true);

// // // //       const bookingData = {

// // // //         passenger,

// // // //         flight: {
// // // //           airline:
// // // //             flight.airline || "",

// // // //           flightNo:
// // // //             flight.flightNo || "",

// // // //           flightType:
// // // //             flight.flightType ||
// // // //             "Domestic",

// // // //           aircraft:
// // // //             flight.aircraft || "",

// // // //           fromCity:
// // // //             flight.fromCity ||
// // // //             flight.from ||
// // // //             "",

// // // //           fromAirport:
// // // //             flight.fromAirport ||
// // // //             "",

// // // //           fromCode:
// // // //             flight.fromCode ||
// // // //             "",

// // // //           toCity:
// // // //             flight.toCity ||
// // // //             flight.to ||
// // // //             "",

// // // //           toAirport:
// // // //             flight.toAirport ||
// // // //             "",

// // // //           toCode:
// // // //             flight.toCode ||
// // // //             "",

// // // //           departureDate:
// // // //             flight.departureDate ||
// // // //             "",

// // // //           departureTime:
// // // //             flight.departureTime ||
// // // //             flight.departure ||
// // // //             "",

// // // //           departureTerminal:
// // // //             flight.departureTerminal ||
// // // //             "",

// // // //           arrivalDate:
// // // //             flight.arrivalDate ||
// // // //             "",

// // // //           arrivalTime:
// // // //             flight.arrivalTime ||
// // // //             flight.arrival ||
// // // //             "",

// // // //           arrivalTerminal:
// // // //             flight.arrivalTerminal ||
// // // //             "",

// // // //           duration:
// // // //             flight.duration || "",

// // // //           stops:
// // // //             flight.stops ||
// // // //             "Non-stop",

// // // //           stopAirport:
// // // //             flight.stopAirport ||
// // // //             "",

// // // //           price:
// // // //             flightPrice,

// // // //           logo:
// // // //             flight.logo || "",
// // // //         },

// // // //         seat:
// // // //           seat || "",

// // // //         seatPrice,

// // // //         meal: {
// // // //           name:
// // // //             meal?.name ||
// // // //             "No Meal",

// // // //           price:
// // // //             mealPrice,
// // // //         },

// // // //         baggage: {
// // // //           weight:
// // // //             baggage?.weight ||
// // // //             "15 KG (Included)",

// // // //           price:
// // // //             baggagePrice,
// // // //         },

// // // //         paymentMethod,

// // // //         discount,

// // // //         taxes,

// // // //         convenienceFee,

// // // //         total,
// // // //       };

// // // //       console.log(
// // // //         "SENDING BOOKING:",
// // // //         bookingData
// // // //       );

// // // //       const response =
// // // //         await fetch(
// // // //           "http://localhost:5000/api/bookings",
// // // //           {
// // // //             method: "POST",

// // // //             headers: {
// // // //               "Content-Type":
// // // //                 "application/json",
// // // //             },

// // // //             body:
// // // //               JSON.stringify(
// // // //                 bookingData
// // // //               ),
// // // //           }
// // // //         );

// // // //       const data =
// // // //         await response.json();

// // // //       console.log(
// // // //         "BOOKING RESPONSE:",
// // // //         data
// // // //       );

// // // //       if (!response.ok) {

// // // //         throw new Error(
// // // //           data.message ||
// // // //           "Payment failed"
// // // //         );
// // // //       }

// // // //       // ======================================
// // // //       // SUCCESS
// // // //       // ======================================

// // // //       navigate("/success", {

// // // //         state: {

// // // //           flight,

// // // //           passenger,

// // // //           seat,

// // // //           meal,

// // // //           baggage,

// // // //           total,

// // // //           bookingId:
// // // //             data.booking.bookingId,

// // // //           pnr:
// // // //             data.booking.pnr,

// // // //         },

// // // //       });

// // // //     } catch (error) {

// // // //       console.error(
// // // //         "PAYMENT ERROR:",
// // // //         error
// // // //       );

// // // //       alert(
// // // //         error.message ||
// // // //         "Unable to complete booking."
// // // //       );

// // // //     } finally {

// // // //       setLoading(false);

// // // //     }

// // // //   };

// // // //   // ==========================================
// // // //   // UI
// // // //   // ==========================================

// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       <section className="payment-page">

// // // //         {/* ==================================
// // // //                     PROGRESS
// // // //         ================================== */}

// // // //         <div className="payment-progress">

// // // //           <div className="step active">
// // // //             <span>✓</span>
// // // //             <p>Booking</p>
// // // //           </div>

// // // //           <div className="line active"></div>

// // // //           <div className="step active">
// // // //             <span>✓</span>
// // // //             <p>Seat</p>
// // // //           </div>

// // // //           <div className="line active"></div>

// // // //           <div className="step active">
// // // //             <span>✓</span>
// // // //             <p>Meal</p>
// // // //           </div>

// // // //           <div className="line active"></div>

// // // //           <div className="step active">
// // // //             <span>✓</span>
// // // //             <p>Baggage</p>
// // // //           </div>

// // // //           <div className="line active"></div>

// // // //           <div className="step current">
// // // //             <span>5</span>
// // // //             <p>Payment</p>
// // // //           </div>

// // // //         </div>

// // // //         {/* ==================================
// // // //                     CONTAINER
// // // //         ================================== */}

// // // //         <div className="payment-container">

// // // //           {/* =================================
// // // //                     LEFT
// // // //           ================================= */}

// // // //           <div className="payment-left">

// // // //             <h2>
// // // //               Select Payment Method
// // // //             </h2>

// // // //             {/* UPI */}

// // // //             <div className="payment-card">

// // // //               <label>

// // // //                 <input
// // // //                   type="radio"
// // // //                   checked={
// // // //                     paymentMethod === "upi"
// // // //                   }
// // // //                   onChange={() =>
// // // //                     setPaymentMethod(
// // // //                       "upi"
// // // //                     )
// // // //                   }
// // // //                 />

// // // //                 UPI Payment

// // // //               </label>

// // // //               {paymentMethod ===
// // // //                 "upi" && (

// // // //                 <div className="upi-apps">

// // // //                   <button type="button">
// // // //                     PhonePe
// // // //                   </button>

// // // //                   <button type="button">
// // // //                     Google Pay
// // // //                   </button>

// // // //                   <button type="button">
// // // //                     Paytm
// // // //                   </button>

// // // //                 </div>

// // // //               )}

// // // //             </div>

// // // //             {/* CARD */}

// // // //             <div className="payment-card">

// // // //               <label>

// // // //                 <input
// // // //                   type="radio"
// // // //                   checked={
// // // //                     paymentMethod ===
// // // //                     "card"
// // // //                   }
// // // //                   onChange={() =>
// // // //                     setPaymentMethod(
// // // //                       "card"
// // // //                     )
// // // //                   }
// // // //                 />

// // // //                 Credit / Debit Card

// // // //               </label>

// // // //               {paymentMethod ===
// // // //                 "card" && (

// // // //                 <>
// // // //                   <input
// // // //                     type="text"
// // // //                     placeholder="Card Number"
// // // //                   />

// // // //                   <div className="card-row">

// // // //                     <input
// // // //                       type="text"
// // // //                       placeholder="MM / YY"
// // // //                     />

// // // //                     <input
// // // //                       type="password"
// // // //                       placeholder="CVV"
// // // //                     />

// // // //                   </div>
// // // //                 </>

// // // //               )}

// // // //             </div>

// // // //             {/* NET BANKING */}

// // // //             <div className="payment-card">

// // // //               <label>

// // // //                 <input
// // // //                   type="radio"
// // // //                   checked={
// // // //                     paymentMethod ===
// // // //                     "netbanking"
// // // //                   }
// // // //                   onChange={() =>
// // // //                     setPaymentMethod(
// // // //                       "netbanking"
// // // //                     )
// // // //                   }
// // // //                 />

// // // //                 Net Banking

// // // //               </label>

// // // //               {paymentMethod ===
// // // //                 "netbanking" && (

// // // //                 <select>

// // // //                   <option>
// // // //                     Select Bank
// // // //                   </option>

// // // //                   <option>
// // // //                     State Bank of India
// // // //                   </option>

// // // //                   <option>
// // // //                     HDFC Bank
// // // //                   </option>

// // // //                   <option>
// // // //                     ICICI Bank
// // // //                   </option>

// // // //                   <option>
// // // //                     Axis Bank
// // // //                   </option>

// // // //                 </select>

// // // //               )}

// // // //             </div>

// // // //             {/* COUPON */}

// // // //             <div className="coupon-box">

// // // //               <h3>
// // // //                 Apply Coupon
// // // //               </h3>

// // // //               <div className="coupon-input">

// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="Enter Coupon Code"
// // // //                   value={coupon}
// // // //                   onChange={(e) =>
// // // //                     setCoupon(
// // // //                       e.target.value
// // // //                     )
// // // //                   }
// // // //                 />

// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={
// // // //                     applyCoupon
// // // //                   }
// // // //                 >
// // // //                   Apply
// // // //                 </button>

// // // //               </div>

// // // //               <p className="coupon-note">

// // // //                 Use{" "}

// // // //                 <strong>
// // // //                   SAVE500
// // // //                 </strong>

// // // //                 {" "}
// // // //                 to get ₹500 OFF

// // // //               </p>

// // // //             </div>

// // // //           </div>

// // // //           {/* =================================
// // // //                     RIGHT
// // // //           ================================= */}

// // // //           <div className="payment-right">

// // // //             <div className="booking-summary">

// // // //               <h2>
// // // //                 Booking Summary
// // // //               </h2>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Customer
// // // //                 </span>

// // // //                 <span>
// // // //                   {passenger.firstName}{" "}
// // // //                   {passenger.lastName}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Airline
// // // //                 </span>

// // // //                 <span>
// // // //                   {flight.airline}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Route
// // // //                 </span>

// // // //                 <span>
// // // //                   {flight.from ||
// // // //                     flight.fromCity}{" "}
// // // //                   →{" "}
// // // //                   {flight.to ||
// // // //                     flight.toCity}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Flight No.
// // // //                 </span>

// // // //                 <span>
// // // //                   {flight.flightNo}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Seat
// // // //                 </span>

// // // //                 <span>
// // // //                   {seat || "-"}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Meal
// // // //                 </span>

// // // //                 <span>
// // // //                   {meal?.name ||
// // // //                     "No Meal"}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Baggage
// // // //                 </span>

// // // //                 <span>
// // // //                   {baggage?.weight ||
// // // //                     "15 KG Included"}
// // // //                 </span>

// // // //               </div>

// // // //               <hr />

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Flight Fare
// // // //                 </span>

// // // //                 <span>
// // // //                   ₹ {flightPrice}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Seat Charges
// // // //                 </span>

// // // //                 <span>
// // // //                   ₹ {seatPrice}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Meal Charges
// // // //                 </span>

// // // //                 <span>
// // // //                   ₹ {mealPrice}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Baggage Charges
// // // //                 </span>

// // // //                 <span>
// // // //                   ₹ {baggagePrice}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Taxes
// // // //                 </span>

// // // //                 <span>
// // // //                   ₹ {taxes}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row">

// // // //                 <span>
// // // //                   Convenience Fee
// // // //                 </span>

// // // //                 <span>
// // // //                   ₹ {convenienceFee}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="summary-row discount">

// // // //                 <span>
// // // //                   Coupon Discount
// // // //                 </span>

// // // //                 <span>
// // // //                   - ₹ {discount}
// // // //                 </span>

// // // //               </div>

// // // //               <hr />

// // // //               <div className="summary-total">

// // // //                 <span>
// // // //                   Total Payable
// // // //                 </span>

// // // //                 <span>
// // // //                   ₹ {total}
// // // //                 </span>

// // // //               </div>

// // // //               <div className="secure-payment">

// // // //                 🔒 100% Secure Payment

// // // //               </div>

// // // //               <button
// // // //                 className="pay-btn"
// // // //                 onClick={
// // // //                   handlePayment
// // // //                 }
// // // //                 disabled={loading}
// // // //               >

// // // //                 {loading
// // // //                   ? "Processing..."
// // // //                   : `Pay ₹ ${total}`}

// // // //               </button>

// // // //             </div>

// // // //           </div>

// // // //         </div>

// // // //       </section>

// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }

// // // // export default Payment;



// // // import "./Payment.css";

// // // import { useState } from "react";
// // // import { useLocation, useNavigate } from "react-router-dom";

// // // import Navbar from "../../Components/Navbar/Navbar";
// // // import Footer from "../../Components/Footer/Footer";

// // // function Payment() {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const {
// // //     flight,
// // //     passenger,
// // //     seat,
// // //     meal,
// // //     baggage,
// // //   } = location.state || {};

// // //   const [coupon, setCoupon] = useState("");
// // //   const [discount, setDiscount] = useState(0);
// // //   const [paymentMethod, setPaymentMethod] =
// // //     useState("upi");

// // //   const [loading, setLoading] = useState(false);

// // //   // =====================================================
// // //   // NO BOOKING
// // //   // =====================================================

// // //   if (!flight || !passenger) {
// // //     return (
// // //       <>
// // //         <Navbar />

// // //         <section className="payment-page">
// // //           <div className="no-booking">

// // //             <h2>
// // //               No Booking Found ✈️
// // //             </h2>

// // //             <p>
// // //               Please complete your passenger
// // //               details before making payment.
// // //             </p>

// // //             <button
// // //               onClick={() => navigate("/")}
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
// // //   // PRICE CALCULATION
// // //   // =====================================================

// // //   /*
// // //     IMPORTANT:

// // //     Admin Flight model me actual ticket price:
// // //     finalPrice

// // //     Isliye finalPrice ko sabse pehle use karenge.
// // //     Agar finalPrice available nahi hai to price use hoga.
// // //   */

// // //   const flightPrice =
// // //     Number(
// // //       flight.finalPrice ??
// // //       flight.price ??
// // //       0
// // //     );

// // //   // Seat selected hai to ₹300
// // //   const seatPrice =
// // //     seat ? 300 : 0;

// // //   // Meal
// // //   const mealPrice =
// // //     Number(meal?.price) || 0;

// // //   // Baggage
// // //   const baggagePrice =
// // //     Number(baggage?.price) || 0;

// // //   /*
// // //     Admin ke flight data se taxes.
// // //     Agar admin ne 0 rakha hai to 0 hi rahega.
// // //   */
// // //   const taxes =
// // //     Number(flight.taxes) || 0;

// // //   /*
// // //     Convenience fee ke liye serviceFee use kar rahe hain.

// // //     Agar admin ne serviceFee = 0 rakha hai
// // //     to convenience fee bhi 0 hogi.
// // //   */
// // //   const convenienceFee =
// // //     Number(flight.serviceFee) || 0;

// // //   // =====================================================
// // //   // SUBTOTAL
// // //   // =====================================================

// // //   const subtotal =
// // //     flightPrice +
// // //     seatPrice +
// // //     mealPrice +
// // //     baggagePrice +
// // //     taxes +
// // //     convenienceFee;

// // //   // =====================================================
// // //   // FINAL TOTAL
// // //   // =====================================================

// // //   const total =
// // //     Math.max(
// // //       0,
// // //       subtotal - discount
// // //     );

// // //   // =====================================================
// // //   // COUPON
// // //   // =====================================================

// // //   const applyCoupon = () => {

// // //     if (
// // //       coupon
// // //         .trim()
// // //         .toUpperCase() ===
// // //       "SAVE500"
// // //     ) {

// // //       setDiscount(500);

// // //       alert(
// // //         "Coupon Applied Successfully"
// // //       );

// // //     } else {

// // //       setDiscount(0);

// // //       alert(
// // //         "Invalid Coupon"
// // //       );
// // //     }
// // //   };

// // //   // =====================================================
// // //   // COMPLETE BOOKING
// // //   // =====================================================

// // //   const handlePayment = async () => {

// // //     if (loading) {
// // //       return;
// // //     }

// // //     try {

// // //       setLoading(true);

// // //       // =================================================
// // //       // CHECK FLIGHT ID
// // //       // =================================================

// // //       const flightId =
// // //         flight._id ||
// // //         flight.id ||
// // //         flight.flightId ||
// // //         "";

// // //       if (!flightId) {

// // //         console.warn(
// // //           "Flight ID missing:",
// // //           flight
// // //         );

// // //         throw new Error(
// // //           "Flight ID is missing."
// // //         );
// // //       }

// // //       // =================================================
// // //       // BOOKING DATA
// // //       // =================================================

// // //       const bookingData = {

// // //         passenger,

// // //         // ===============================================
// // //         // FLIGHT
// // //         // ===============================================

// // //         flight: {

// // //           _id:
// // //             flightId,

// // //           airline:
// // //             flight.airline || "",

// // //           flightNo:
// // //             flight.flightNo || "",

// // //           flightType:
// // //             flight.flightType ||
// // //             "Domestic",

// // //           aircraft:
// // //             flight.aircraft || "",

// // //           fromCity:
// // //             flight.fromCity ||
// // //             flight.from ||
// // //             "",

// // //           fromAirport:
// // //             flight.fromAirport ||
// // //             "",

// // //           fromCode:
// // //             flight.fromCode ||
// // //             "",

// // //           toCity:
// // //             flight.toCity ||
// // //             flight.to ||
// // //             "",

// // //           toAirport:
// // //             flight.toAirport ||
// // //             "",

// // //           toCode:
// // //             flight.toCode ||
// // //             "",

// // //           departureDate:
// // //             flight.departureDate ||
// // //             "",

// // //           departureTime:
// // //             flight.departureTime ||
// // //             flight.departure ||
// // //             "",

// // //           departureTerminal:
// // //             flight.departureTerminal ||
// // //             "",

// // //           arrivalDate:
// // //             flight.arrivalDate ||
// // //             "",

// // //           arrivalTime:
// // //             flight.arrivalTime ||
// // //             flight.arrival ||
// // //             "",

// // //           arrivalTerminal:
// // //             flight.arrivalTerminal ||
// // //             "",

// // //           duration:
// // //             flight.duration ||
// // //             "",

// // //           stops:
// // //             flight.stops ||
// // //             "Non-stop",

// // //           stopAirport:
// // //             flight.stopAirport ||
// // //             "",

// // //           // =============================================
// // //           // IMPORTANT PRICE
// // //           // =============================================

// // //           price:
// // //             flightPrice,

// // //           finalPrice:
// // //             flightPrice,

// // //           taxes:
// // //             taxes,

// // //           serviceFee:
// // //             convenienceFee,

// // //           logo:
// // //             flight.logo || "",
// // //         },

// // //         // ===============================================
// // //         // SEAT
// // //         // ===============================================

// // //         seat:
// // //           seat || "",

// // //         seatPrice:
// // //           seatPrice,

// // //         // ===============================================
// // //         // MEAL
// // //         // ===============================================

// // //         meal: {

// // //           name:
// // //             meal?.name ||
// // //             "No Meal",

// // //           price:
// // //             mealPrice,
// // //         },

// // //         // ===============================================
// // //         // BAGGAGE
// // //         // ===============================================

// // //         baggage: {

// // //           weight:
// // //             baggage?.weight ||
// // //             "15 KG (Included)",

// // //           price:
// // //             baggagePrice,
// // //         },

// // //         // ===============================================
// // //         // PAYMENT
// // //         // ===============================================

// // //         paymentMethod:

// // //           paymentMethod ||
// // //           "upi",

// // //         paymentStatus:
// // //           "Paid",

// // //         bookingStatus:
// // //           "Confirmed",

// // //         // ===============================================
// // //         // PRICE DETAILS
// // //         // ===============================================

// // //         discount:
// // //           discount,

// // //         taxes:
// // //           taxes,

// // //         convenienceFee:
// // //           convenienceFee,

// // //         total:
// // //           total,
// // //       };

// // //       // =================================================
// // //       // DEBUG
// // //       // =================================================

// // //       console.log(
// // //         "===================================="
// // //       );

// // //       console.log(
// // //         "FLIGHT PRICE:",
// // //         flightPrice
// // //       );

// // //       console.log(
// // //         "SEAT PRICE:",
// // //         seatPrice
// // //       );

// // //       console.log(
// // //         "MEAL PRICE:",
// // //         mealPrice
// // //       );

// // //       console.log(
// // //         "BAGGAGE PRICE:",
// // //         baggagePrice
// // //       );

// // //       console.log(
// // //         "TAXES:",
// // //         taxes
// // //       );

// // //       console.log(
// // //         "CONVENIENCE FEE:",
// // //         convenienceFee
// // //       );

// // //       console.log(
// // //         "DISCOUNT:",
// // //         discount
// // //       );

// // //       console.log(
// // //         "FINAL TOTAL:",
// // //         total
// // //       );

// // //       console.log(
// // //         "BOOKING DATA:",
// // //         bookingData
// // //       );

// // //       console.log(
// // //         "===================================="
// // //       );

// // //       // =================================================
// // //       // API
// // //       // =================================================

// // //       const response =
// // //         await fetch(
// // //           "http://localhost:5000/api/bookings",
// // //           {
// // //             method: "POST",

// // //             headers: {
// // //               "Content-Type":
// // //                 "application/json",
// // //             },

// // //             body:
// // //               JSON.stringify(
// // //                 bookingData
// // //               ),
// // //           }
// // //         );

// // //       const data =
// // //         await response.json();

// // //       console.log(
// // //         "BOOKING RESPONSE:",
// // //         data
// // //       );

// // //       // =================================================
// // //       // ERROR
// // //       // =================================================

// // //       if (!response.ok) {

// // //         throw new Error(
// // //           data.message ||
// // //           "Payment failed"
// // //         );
// // //       }

// // //       if (
// // //         !data.booking
// // //       ) {

// // //         throw new Error(
// // //           "Booking was not created."
// // //         );
// // //       }

// // //       // =================================================
// // //       // SUCCESS
// // //       // =================================================

// // //       navigate(
// // //         "/success",
// // //         {
// // //           state: {

// // //             flight,

// // //             passenger,

// // //             seat,

// // //             meal,

// // //             baggage,

// // //             // IMPORTANT
// // //             total:
// // //               data.booking.total ??
// // //               total,

// // //             bookingId:
// // //               data.booking.bookingId,

// // //             pnr:
// // //               data.booking.pnr,
// // //           },
// // //         }
// // //       );

// // //     } catch (error) {

// // //       console.error(
// // //         "PAYMENT ERROR:",
// // //         error
// // //       );

// // //       alert(
// // //         error.message ||
// // //         "Unable to complete booking."
// // //       );

// // //     } finally {

// // //       setLoading(false);
// // //     }
// // //   };

// // //   // =====================================================
// // //   // UI
// // //   // =====================================================

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <section className="payment-page">

// // //         {/* =============================================
// // //                     PROGRESS
// // //         ============================================== */}

// // //         <div className="payment-progress">

// // //           <div className="step active">
// // //             <span>✓</span>
// // //             <p>Booking</p>
// // //           </div>

// // //           <div className="line active"></div>

// // //           <div className="step active">
// // //             <span>✓</span>
// // //             <p>Seat</p>
// // //           </div>

// // //           <div className="line active"></div>

// // //           <div className="step active">
// // //             <span>✓</span>
// // //             <p>Meal</p>
// // //           </div>

// // //           <div className="line active"></div>

// // //           <div className="step active">
// // //             <span>✓</span>
// // //             <p>Baggage</p>
// // //           </div>

// // //           <div className="line active"></div>

// // //           <div className="step current">
// // //             <span>5</span>
// // //             <p>Payment</p>
// // //           </div>

// // //         </div>

// // //         {/* =============================================
// // //                     CONTAINER
// // //         ============================================== */}

// // //         <div className="payment-container">

// // //           {/* =========================================
// // //                         LEFT
// // //           ========================================== */}

// // //           <div className="payment-left">

// // //             <h2>
// // //               Select Payment Method
// // //             </h2>

// // //             {/* UPI */}

// // //             <div className="payment-card">

// // //               <label>

// // //                 <input
// // //                   type="radio"
// // //                   checked={
// // //                     paymentMethod ===
// // //                     "upi"
// // //                   }
// // //                   onChange={() =>
// // //                     setPaymentMethod(
// // //                       "upi"
// // //                     )
// // //                   }
// // //                 />

// // //                 UPI Payment

// // //               </label>

// // //               {paymentMethod ===
// // //                 "upi" && (

// // //                 <div className="upi-apps">

// // //                   <button
// // //                     type="button"
// // //                   >
// // //                     PhonePe
// // //                   </button>

// // //                   <button
// // //                     type="button"
// // //                   >
// // //                     Google Pay
// // //                   </button>

// // //                   <button
// // //                     type="button"
// // //                   >
// // //                     Paytm
// // //                   </button>

// // //                 </div>

// // //               )}

// // //             </div>

// // //             {/* CARD */}

// // //             <div className="payment-card">

// // //               <label>

// // //                 <input
// // //                   type="radio"
// // //                   checked={
// // //                     paymentMethod ===
// // //                     "card"
// // //                   }
// // //                   onChange={() =>
// // //                     setPaymentMethod(
// // //                       "card"
// // //                     )
// // //                   }
// // //                 />

// // //                 Credit / Debit Card

// // //               </label>

// // //               {paymentMethod ===
// // //                 "card" && (

// // //                 <>
// // //                   <input
// // //                     type="text"
// // //                     placeholder="Card Number"
// // //                   />

// // //                   <div className="card-row">

// // //                     <input
// // //                       type="text"
// // //                       placeholder="MM / YY"
// // //                     />

// // //                     <input
// // //                       type="password"
// // //                       placeholder="CVV"
// // //                     />

// // //                   </div>
// // //                 </>

// // //               )}

// // //             </div>

// // //             {/* NET BANKING */}

// // //             <div className="payment-card">

// // //               <label>

// // //                 <input
// // //                   type="radio"
// // //                   checked={
// // //                     paymentMethod ===
// // //                     "netbanking"
// // //                   }
// // //                   onChange={() =>
// // //                     setPaymentMethod(
// // //                       "netbanking"
// // //                     )
// // //                   }
// // //                 />

// // //                 Net Banking

// // //               </label>

// // //               {paymentMethod ===
// // //                 "netbanking" && (

// // //                 <select>

// // //                   <option>
// // //                     Select Bank
// // //                   </option>

// // //                   <option>
// // //                     State Bank of India
// // //                   </option>

// // //                   <option>
// // //                     HDFC Bank
// // //                   </option>

// // //                   <option>
// // //                     ICICI Bank
// // //                   </option>

// // //                   <option>
// // //                     Axis Bank
// // //                   </option>

// // //                 </select>

// // //               )}

// // //             </div>

// // //             {/* COUPON */}

// // //             <div className="coupon-box">

// // //               <h3>
// // //                 Apply Coupon
// // //               </h3>

// // //               <div className="coupon-input">

// // //                 <input
// // //                   type="text"
// // //                   placeholder="Enter Coupon Code"
// // //                   value={coupon}
// // //                   onChange={(e) =>
// // //                     setCoupon(
// // //                       e.target.value
// // //                     )
// // //                   }
// // //                 />

// // //                 <button
// // //                   type="button"
// // //                   onClick={
// // //                     applyCoupon
// // //                   }
// // //                 >
// // //                   Apply
// // //                 </button>

// // //               </div>

// // //               <p className="coupon-note">

// // //                 Use{" "}

// // //                 <strong>
// // //                   SAVE500
// // //                 </strong>

// // //                 {" "}
// // //                 to get ₹500 OFF

// // //               </p>

// // //             </div>

// // //           </div>

// // //           {/* =========================================
// // //                         RIGHT
// // //           ========================================== */}

// // //           <div className="payment-right">

// // //             <div className="booking-summary">

// // //               <h2>
// // //                 Booking Summary
// // //               </h2>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Customer
// // //                 </span>

// // //                 <span>
// // //                   {passenger.firstName}{" "}
// // //                   {passenger.lastName}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Airline
// // //                 </span>

// // //                 <span>
// // //                   {flight.airline}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Route
// // //                 </span>

// // //                 <span>
// // //                   {flight.from ||
// // //                     flight.fromCity}
// // //                   {" → "}
// // //                   {flight.to ||
// // //                     flight.toCity}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Flight No.
// // //                 </span>

// // //                 <span>
// // //                   {flight.flightNo}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Seat
// // //                 </span>

// // //                 <span>
// // //                   {seat || "-"}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Meal
// // //                 </span>

// // //                 <span>
// // //                   {meal?.name ||
// // //                     "No Meal"}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Baggage
// // //                 </span>

// // //                 <span>
// // //                   {baggage?.weight ||
// // //                     "15 KG Included"}
// // //                 </span>

// // //               </div>

// // //               <hr />

// // //               {/* =====================================
// // //                         PRICE BREAKDOWN
// // //               ====================================== */}

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Flight Fare
// // //                 </span>

// // //                 <span>
// // //                   ₹ {flightPrice.toLocaleString("en-IN")}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Seat Charges
// // //                 </span>

// // //                 <span>
// // //                   ₹ {seatPrice.toLocaleString("en-IN")}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Meal Charges
// // //                 </span>

// // //                 <span>
// // //                   ₹ {mealPrice.toLocaleString("en-IN")}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Baggage Charges
// // //                 </span>

// // //                 <span>
// // //                   ₹ {baggagePrice.toLocaleString("en-IN")}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Taxes
// // //                 </span>

// // //                 <span>
// // //                   ₹ {taxes.toLocaleString("en-IN")}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row">

// // //                 <span>
// // //                   Convenience Fee
// // //                 </span>

// // //                 <span>
// // //                   ₹ {convenienceFee.toLocaleString("en-IN")}
// // //                 </span>

// // //               </div>

// // //               <div className="summary-row discount">

// // //                 <span>
// // //                   Coupon Discount
// // //                 </span>

// // //                 <span>
// // //                   - ₹ {discount.toLocaleString("en-IN")}
// // //                 </span>

// // //               </div>

// // //               <hr />

// // //               {/* =====================================
// // //                             FINAL TOTAL
// // //               ====================================== */}

// // //               <div className="summary-total">

// // //                 <span>
// // //                   Total Payable
// // //                 </span>

// // //                 <span>
// // //                   ₹ {total.toLocaleString("en-IN")}
// // //                 </span>

// // //               </div>

// // //               <div className="secure-payment">

// // //                 🔒 100% Secure Payment

// // //               </div>

// // //               <button
// // //                 className="pay-btn"
// // //                 onClick={
// // //                   handlePayment
// // //                 }
// // //                 disabled={loading}
// // //               >

// // //                 {loading
// // //                   ? "Processing..."
// // //                   : `Pay ₹ ${total.toLocaleString("en-IN")}`}

// // //               </button>

// // //             </div>

// // //           </div>

// // //         </div>

// // //       </section>

// // //       <Footer />
// // //     </>
// // //   );
// // // }

// // // export default Payment;



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
// //       pricing?.adultFare ??
// //       flight?.adultFare ??
// //       flight?.price ??
// //       0
// //     );


// //   const childFare =
// //     Number(
// //       pricing?.childFare ??
// //       flight?.childFare ??
// //       adultFare
// //     );


// //   const infantFare =
// //     Number(
// //       pricing?.infantFare ??
// //       flight?.infantFare ??
// //       0
// //     );


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


// //   const fallbackSeatPrice =
// //     selectedSeats.length > 0
// //       ? selectedSeats.length *
// //         300
// //       : 0;


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

// //   const convenienceFee =
// //     Number(
// //       flight?.serviceFee
// //     ) || 0;


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

//     passengers,

//     travellers,

//     pricing,

//     seats,

//     seat,

//     seatAssignments,

//     meals,

//     meal,

//     mealAssignments,

//     baggage,

//     baggageTotal,

//   } = location.state || {};


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
//   // FINAL PASSENGER LIST
//   //
//   // IMPORTANT:
//   // Backend ko complete passengers array bhejna hai.
//   // =====================================================

//   const existingPassengers =
//     Array.isArray(passengers)
//       ? passengers
//       : [];


//   const existingAdults =
//     existingPassengers.filter(
//       (item) =>
//         String(
//           item?.type || "Adult"
//         ).toLowerCase() ===
//         "adult"
//     );


//   const existingChildren =
//     existingPassengers.filter(
//       (item) =>
//         String(
//           item?.type || ""
//         ).toLowerCase() ===
//         "child"
//     );


//   const existingInfants =
//     existingPassengers.filter(
//       (item) =>
//         String(
//           item?.type || ""
//         ).toLowerCase() ===
//         "infant"
//     );


//   const finalPassengers = [];


//   // =====================================================
//   // ADULTS
//   // =====================================================

//   for (
//     let i = 0;
//     i < adultCount;
//     i++
//   ) {

//     finalPassengers.push(
//       existingAdults[i] || {

//         type: "Adult",

//         firstName:
//           i === 0 &&
//           passenger?.firstName
//             ? passenger.firstName
//             : `Adult ${i + 1}`,

//         lastName:
//           i === 0 &&
//           passenger?.lastName
//             ? passenger.lastName
//             : "",

//         email:
//           i === 0
//             ? passenger?.email || ""
//             : "",

//         phone:
//           i === 0
//             ? passenger?.phone || ""
//             : "",

//       }
//     );

//   }


//   // =====================================================
//   // CHILDREN
//   // =====================================================

//   for (
//     let i = 0;
//     i < childCount;
//     i++
//   ) {

//     finalPassengers.push(
//       existingChildren[i] || {

//         type: "Child",

//         firstName:
//           `Child ${i + 1}`,

//         lastName: "",

//       }
//     );

//   }


//   // =====================================================
//   // INFANTS
//   // =====================================================

//   for (
//     let i = 0;
//     i < infantCount;
//     i++
//   ) {

//     finalPassengers.push(
//       existingInfants[i] || {

//         type: "Infant",

//         firstName:
//           `Infant ${i + 1}`,

//         lastName: "",

//       }
//     );

//   }


//   // =====================================================
//   // DEBUG PASSENGERS
//   // =====================================================

//   console.log(
//     "===================================="
//   );

//   console.log(
//     "PAYMENT PASSENGERS:",
//     finalPassengers
//   );

//   console.log(
//     "ADULT COUNT:",
//     adultCount
//   );

//   console.log(
//     "CHILD COUNT:",
//     childCount
//   );

//   console.log(
//     "INFANT COUNT:",
//     infantCount
//   );

//   console.log(
//     "TOTAL PASSENGERS:",
//     totalPassengers
//   );

//   console.log(
//     "REQUIRED SEATS:",
//     adultCount + childCount
//   );

//   console.log(
//     "===================================="
//   );


//   // =====================================================
//   // NO BOOKING
//   // =====================================================

//   if (!flight) {

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
//   // TICKET FARES
//   // =====================================================

//   const adultFare =
//     Number(
//       pricing?.adultFare ??
//       flight?.adultFare ??
//       flight?.price ??
//       0
//     );


//   const childFare =
//     Number(
//       pricing?.childFare ??
//       flight?.childFare ??
//       adultFare
//     );


//   const infantFare =
//     Number(
//       pricing?.infantFare ??
//       flight?.infantFare ??
//       0
//     );


//   // =====================================================
//   // FARE TOTALS
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


//   const calculatedPassengerFare =
//     adultFareTotal +
//     childFareTotal +
//     infantFareTotal;


//   const finalFlightFare =
//     pricing?.passengerFareTotal !==
//     undefined
//       ? Number(
//           pricing.passengerFareTotal
//         )
//       : calculatedPassengerFare;


//   // =====================================================
//   // SEAT PRICE
//   // =====================================================

//   const calculatedSeatPrice =
//     Number(
//       pricing?.totalSeatPrice
//     );


//   const fallbackSeatPrice =
//     selectedSeats.length *
//     300;


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
//   // TAX
//   // =====================================================

//   const taxes =
//     Number(
//       flight?.taxes
//     ) || 0;


//   // =====================================================
//   // CONVENIENCE FEE
//   // =====================================================

//   const convenienceFee =
//     Number(
//       flight?.serviceFee
//     ) || 0;


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
//   // PAYMENT
//   // =====================================================

//   const handlePayment =
//     async () => {

//       if (loading) {
//         return;
//       }


//       try {

//         setLoading(true);


//         // =================================================
//         // FLIGHT ID
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
//         // PASSENGER VALIDATION
//         // =================================================

//         if (
//           finalPassengers.length !==
//           totalPassengers
//         ) {

//           throw new Error(
//             `Passenger data mismatch. Expected ${totalPassengers} passengers but found ${finalPassengers.length}.`
//           );

//         }


//         // =================================================
//         // SEAT VALIDATION
//         //
//         // Infant does NOT require seat
//         // =================================================

//         const requiredSeatCount =
//           adultCount +
//           childCount;


//         if (
//           selectedSeats.length !==
//           requiredSeatCount
//         ) {

//           throw new Error(
//             `Please select exactly ${requiredSeatCount} seat(s) for ${adultCount} adult(s) and ${childCount} child(ren).`
//           );

//         }


//         // =================================================
//         // BOOKING DATA
//         // =================================================

//         const bookingData = {

//           // ===============================================
//           // IMPORTANT:
//           // ALL PASSENGERS
//           // ===============================================

//           passengers:
//             finalPassengers,


//           // ===============================================
//           // BACKWARD COMPATIBILITY
//           // ===============================================

//           passenger:
//             finalPassengers[0],


//           // ===============================================
//           // TRAVELLERS
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
//           // ALSO SEND COUNTS DIRECTLY
//           // ===============================================

//           adults:
//             adultCount,

//           children:
//             childCount,

//           infants:
//             infantCount,


//           // ===============================================
//           // FLIGHT ID
//           // ===============================================

//           flightId:


//             flightId,


//           // ===============================================
//           // FLIGHT
//           // ===============================================

//           flight: {

//             _id:
//               flightId,

//             flightId:
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

//             arrivalDate:
//               flight.arrivalDate ||
//               "",

//             arrivalTime:
//               flight.arrivalTime ||
//               flight.arrival ||
//               "",

//             duration:
//               flight.duration ||
//               "",

//             stops:
//               flight.stops ||
//               "Non-stop",

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


//             // PASSENGER FARES

//             adultFare:
//               adultFare,

//             childFare:
//               childFare,

//             infantFare:
//               infantFare,


//             // SEAT

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


//             // MEAL

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


//             // BAGGAGE

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


//           seatAssignments:
//             Array.isArray(
//               seatAssignments
//             )
//               ? seatAssignments
//               : [],


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


//           mealAssignments:
//             Array.isArray(
//               mealAssignments
//             )
//               ? mealAssignments
//               : [],


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
//           // PRICE DETAILS
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
//             "Paid",

//           bookingStatus:
//             "Confirmed",


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
//           "FINAL PASSENGERS SENT:",
//           finalPassengers
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
//           "TOTAL PASSENGERS:",
//           totalPassengers
//         );

//         console.log(
//           "REQUIRED SEATS:",
//           requiredSeatCount
//         );

//         console.log(
//           "SELECTED SEATS:",
//           selectedSeats
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

//         if (
//           !response.ok
//         ) {

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

//               passenger:
//                 finalPassengers[0],

//               passengers:
//                 finalPassengers,


//               travellers: {

//                 adults:
//                   adultCount,

//                 children:
//                   childCount,

//                 infants:
//                   infantCount,

//                 total:
//                   totalPassengers,

//               },


//               pricing: {

//                 ...pricing,

//                 finalFlightFare,

//                 adultFareTotal,

//                 childFareTotal,

//                 infantFareTotal,

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


//       } catch (
//         error
//       ) {

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


//         {/* ===============================================
//                     PROGRESS
//         =============================================== */}

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


//         {/* ===============================================
//                     CONTAINER
//         =============================================== */}

//         <div className="payment-container">


//           {/* =============================================
//                     LEFT
//           ============================================= */}

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


//               {paymentMethod ===
//                 "upi" && (

//                 <div className="upi-apps">

//                   <button type="button">
//                     PhonePe
//                   </button>

//                   <button type="button">
//                     Google Pay
//                   </button>

//                   <button type="button">
//                     Paytm
//                   </button>

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


//           {/* =============================================
//                     RIGHT
//           ============================================= */}

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

//                   {finalPassengers[0]
//                     ?.firstName ||
//                     "Passenger"}

//                   {" "}

//                   {finalPassengers[0]
//                     ?.lastName ||
//                     ""}

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


//               {/* ADULT FARE */}

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


//               {/* CHILD FARE */}

//               {childCount > 0 && (

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


//               {/* INFANT FARE */}

//               {infantCount > 0 && (

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


//               {/* SEAT */}

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


//               {/* MEAL */}

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


//               {/* BAGGAGE */}

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


//               {/* TAX */}

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


//               {/* CONVENIENCE */}

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


//               {/* DISCOUNT */}

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


//               {/* FINAL TOTAL */}

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
//                 type="button"
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
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


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
  // TICKET FARE
  // =====================================================

  /*
    Priority:

    1. pricing calculated by Booking page
    2. passengerFareTotal
    3. flight finalPrice
  */


  const flightPrice =
    Number(
      pricing?.passengerFareTotal ??
      flight?.passengerFareTotal ??
      flight?.finalPrice ??
      flight?.price ??
      0
    );


  // =====================================================
  // FALLBACK TICKET CALCULATION
  // =====================================================

  const adultFare =
    Number(
      pricing?.adultFare ??
      flight?.adultFare ??
      flight?.price ??
      0
    );


  const childFare =
    Number(
      pricing?.childFare ??
      flight?.childFare ??
      adultFare
    );


  const infantFare =
    Number(
      pricing?.infantFare ??
      flight?.infantFare ??
      0
    );


  /*
    Agar Booking page ne passengerFareTotal
    nahi bheja hai to yahan calculate hoga.
  */

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


  // =====================================================
  // SEAT PRICE
  // =====================================================

  const calculatedSeatPrice =
    Number(
      pricing?.totalSeatPrice
    );


  const fallbackSeatPrice =
    selectedSeats.length > 0
      ? selectedSeats.length *
        300
      : 0;


  const seatPrice =
    Number.isFinite(
      calculatedSeatPrice
    ) &&
    calculatedSeatPrice > 0
      ? calculatedSeatPrice
      : fallbackSeatPrice;


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
      ) =>
        total +
        Number(
          item?.price || 0
        ),
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
      ) =>
        total +
        Number(
          item?.price || 0
        ),
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

  const convenienceFee =
    Number(
      flight?.serviceFee
    ) || 0;


  // =====================================================
  // PASSENGER FARE
  // =====================================================

  /*
    Agar pricing passengerFareTotal
    nahi hai to calculated value use hogi.
  */

  const finalFlightFare =
    pricing?.passengerFareTotal !==
      undefined
      ? Number(
          pricing.passengerFareTotal
        )
      : calculatedPassengerFare;


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

      /*
        Discount subtotal se zyada
        nahi hona chahiye.
      */

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
  // TOTALS BY PASSENGER TYPE
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
        // CHECK FLIGHT ID
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
        // CHECK PASSENGER DATA
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
        // BOOKING DATA
        // =================================================

        const bookingData = {

          // ===============================================
          // CUSTOMER USER ID
          // IMPORTANT FOR MY BOOKINGS
          // ===============================================

          userId:
            localStorage.getItem("userId") ||
            (() => {
              try {
                const user =
                  JSON.parse(
                    localStorage.getItem("user") || "{}"
                  );

                return (
                  user?._id ||
                  user?.id ||
                  null
                );
              } catch (error) {
                return null;
              }
            })(),


          // ===============================================
          // CUSTOMER / MAIN PASSENGER
          // ===============================================

          passenger,


          // ===============================================
          // PASSENGER COUNTS
          // ===============================================

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


            // ===========================================
            // ORIGINAL FLIGHT PRICE
            // ===========================================

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


            // ===========================================
            // PASSENGER PRICES
            // ===========================================

            adultFare:
              adultFare,

            childFare:
              childFare,

            infantFare:
              infantFare,


            // ===========================================
            // EXTRA SERVICE PRICES
            // ===========================================

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


            taxes:
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

          seatPrice:
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

          mealPrice:
            mealPrice,


          // ===============================================
          // BAGGAGE
          // ===============================================

          baggage:
            selectedBaggage,

          baggageCount:
            selectedBaggage.length,

          baggagePrice:
            baggagePrice,


          // ===============================================
          // PRICE BREAKDOWN
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


            taxes:
              taxes,

            convenienceFee:
              convenienceFee,

            discount:
              discount,


            subtotal:
              subtotal,

            total:
              total,

          },


          // ===============================================
          // PAYMENT
          // ===============================================

          paymentMethod:
            paymentMethod ||
            "upi",

          paymentStatus:
            "Paid",

          bookingStatus:
            "Confirmed",


          // ===============================================
          // OLD / BACKWARD COMPATIBILITY
          // ===============================================

          discount:
            discount,

          total:
            total,

        };


        // =================================================
        // DEBUG
        // =================================================

        console.log(
          "===================================="
        );

        console.log(
          "ADULTS:",
          adultCount
        );

        console.log(
          "CHILDREN:",
          childCount
        );

        console.log(
          "INFANTS:",
          infantCount
        );

        console.log(
          "FLIGHT FARE:",
          finalFlightFare
        );

        console.log(
          "SEAT PRICE:",
          seatPrice
        );

        console.log(
          "MEAL PRICE:",
          mealPrice
        );

        console.log(
          "BAGGAGE PRICE:",
          baggagePrice
        );

        console.log(
          "TAXES:",
          taxes
        );

        console.log(
          "CONVENIENCE FEE:",
          convenienceFee
        );

        console.log(
          "DISCOUNT:",
          discount
        );

        console.log(
          "FINAL TOTAL:",
          total
        );

        console.log(
          "CUSTOMER USER ID:",
          bookingData.userId
        );

        console.log(
          "BOOKING DATA:",
          bookingData
        );

        console.log(
          "===================================="
        );


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
                    CONTAINER
        ================================================= */}

        <div className="payment-container">


          {/* =================================================
                    LEFT
          ================================================= */}

          <div className="payment-left">

            <h2>
              Select Payment Method
            </h2>


            {/* UPI */}

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


              {paymentMethod ===
                "upi" && (

                <div className="upi-apps">

                  <button type="button">
                    PhonePe
                  </button>

                  <button type="button">
                    Google Pay
                  </button>

                  <button type="button">
                    Paytm
                  </button>

                </div>

              )}

            </div>


            {/* CARD */}

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


              {paymentMethod ===
                "card" && (

                <>

                  <input
                    type="text"
                    placeholder="Card Number"
                  />

                  <div className="card-row">

                    <input
                      type="text"
                      placeholder="MM / YY"
                    />

                    <input
                      type="password"
                      placeholder="CVV"
                    />

                  </div>

                </>

              )}

            </div>


            {/* NET BANKING */}

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

                <select>

                  <option>
                    Select Bank
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

                </select>

              )}

            </div>


            {/* COUPON */}

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
                    RIGHT
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
                  {adultCount >
                  1
                    ? "s"
                    : ""}

                  {childCount >
                    0 &&
                    `, ${childCount} Child${
                      childCount >
                      1
                        ? "ren"
                        : ""
                    }`}

                  {infantCount >
                    0 &&
                    `, ${infantCount} Infant${
                      infantCount >
                      1
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

                  {selectedSeats.length >
                  0
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

                  {selectedMeals.length >
                  0
                    ? selectedMeals
                        .map(
                          (item) =>
                            item?.name ||
                            "No Meal"
                        )
                        .join(
                          ", "
                        )
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
                            item?.weight
                        )
                        .join(
                          ", "
                        )
                    : "15 KG Included"}

                </span>

              </div>


              <hr />


              {/* =================================================
                        PRICE BREAKDOWN
              ================================================= */}


              <div className="summary-row">

                <span>
                  Adult Fare
                  ({adultCount})
                </span>

                <span>
                  ₹{" "}
                  {adultFareTotal.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              {childCount >
                0 && (

                <div className="summary-row">

                  <span>
                    Child Fare
                    ({childCount})
                  </span>

                  <span>
                    ₹{" "}
                    {childFareTotal.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

              )}


              {infantCount >
                0 && (

                <div className="summary-row">

                  <span>
                    Infant Fare
                    ({infantCount})
                  </span>

                  <span>
                    ₹{" "}
                    {infantFareTotal.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

              )}


              <div className="summary-row">

                <span>
                  Seat Charges
                </span>

                <span>
                  ₹{" "}
                  {seatPrice.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Meal Charges
                </span>

                <span>
                  ₹{" "}
                  {mealPrice.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Baggage Charges
                </span>

                <span>
                  ₹{" "}
                  {baggagePrice.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Taxes
                </span>

                <span>
                  ₹{" "}
                  {taxes.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Convenience Fee
                </span>

                <span>
                  ₹{" "}
                  {convenienceFee.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              <div className="summary-row discount">

                <span>
                  Coupon Discount
                </span>

                <span>
                  - ₹{" "}
                  {discount.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              <hr />


              {/* FINAL */}

              <div className="summary-total">

                <span>
                  Total Payable
                </span>

                <span>
                  ₹{" "}
                  {total.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              <div className="secure-payment">

                🔒 100% Secure Payment

              </div>


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