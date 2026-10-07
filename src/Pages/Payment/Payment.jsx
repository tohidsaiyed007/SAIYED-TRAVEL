
// import "./Payment.css";

// import { useEffect, useState } from "react";
// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";

// // =====================================================
// // QR IMAGES
// // =====================================================

// import ICICIQR from "../../assets/ICICI.jpeg";
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

//   const [whatsappNumber, setWhatsappNumber] =
//     useState(passenger?.phone || "");

//   // FIX: CUSTOMER EMAIL
//   const [customerEmail, setCustomerEmail] =
//     useState(
//       passenger?.email ||
//         passenger?.emailAddress ||
//         ""
//     );

//   const [loading, setLoading] =
//     useState(false);

//   const [submitted, setSubmitted] =
//     useState(false);

//   // Payment request tracking (customer device)
//   const [paymentRequestId, setPaymentRequestId] = useState(null);
//   const [paymentRequestStatus, setPaymentRequestStatus] = useState("Pending");
//   const [paymentTrackingError, setPaymentTrackingError] = useState("");

//   // =====================================================
//   // CROSS-DEVICE PAYMENT STATUS TRACKING
//   // =====================================================
//   // Customer device payment request ko backend se check karta rahega.
//   // Admin kisi bhi device se Accept karega to approved booking milte
//   // hi customer device automatically Success/Ticket page par jayega.
//   useEffect(() => {
//     if (!submitted || !paymentRequestId) return;

//     let stopped = false;
//     let intervalId;

//     const checkPaymentStatus = async () => {
//       try {
//         const email = customerEmail.trim().toLowerCase();
//         if (!email) return;

//         const response = await fetch(
//           `https://saiyed-travels-backend-1.onrender.com/api/payment-requests/${paymentRequestId}/status?email=${encodeURIComponent(email)}`
//         );

//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(data?.message || "Unable to check payment status.");
//         }

//         if (stopped) return;

//         setPaymentRequestStatus(data?.status || "Pending");

//         if (data?.status === "Accepted" && data?.booking) {
//           stopped = true;
//           clearInterval(intervalId);

//           navigate("/success", {
//             state: {
//               booking: data.booking,
//               fromPaymentApproval: true,
//               autoDownload: false,
//             },
//           });
//           return;
//         }

//         if (data?.status === "Rejected") {
//           setPaymentTrackingError(
//             data?.adminNote ||
//               "Payment request was rejected by admin."
//           );
//           clearInterval(intervalId);
//         }
//       } catch (error) {
//         if (!stopped) {
//           console.error("PAYMENT STATUS CHECK ERROR:", error);
//           setPaymentTrackingError(
//             error?.message || "Unable to check payment status."
//           );
//         }
//       }
//     };

//     checkPaymentStatus();
//     intervalId = setInterval(checkPaymentStatus, 3000);

//     return () => {
//       stopped = true;
//       clearInterval(intervalId);
//     };
//   }, [submitted, paymentRequestId, customerEmail, navigate]);

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

  
//       <style>{`
//         .payment-page .payment-container {
//           display: block !important;
//           width: calc(100% - 32px) !important;
//           max-width: 1400px !important;
//           margin: 0 auto !important;
//         }

//         .payment-page .payment-left {
//           width: 100% !important;
//           max-width: none !important;
//         }

//         .payment-page .payment-card {
//           width: 100% !important;
//           box-sizing: border-box !important;
//         }

//         @media (max-width: 900px) {
//           .payment-page .payment-container {
//             width: calc(100% - 18px) !important;
//           }

//           .payment-page .payment-card {
//             padding: 18px !important;
//           }
//         }

//         @media (max-width: 700px) {
//           .payment-page .payment-progress {
//             overflow-x: auto;
//           }
//         }
//       `}</style>

//       <Footer />
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

//   const getStoredUser = () => {
//     const objectKeys = [
//       "user",
//       "currentUser",
//       "loggedInUser",
//       "authUser",
//     ];

//     for (const key of objectKeys) {
//       const raw = localStorage.getItem(key);
//       if (!raw) continue;

//       try {
//         const parsed = JSON.parse(raw);
//         const candidate = parsed?.user || parsed;
//         if (candidate && typeof candidate === "object") {
//           return candidate;
//         }
//       } catch {
//         // Ignore invalid localStorage JSON and continue.
//       }
//     }

//     return null;
//   };

//   const getUserId = () => {
//     const directUserId =
//       localStorage.getItem("userId") ||
//       localStorage.getItem("userID") ||
//       localStorage.getItem("customerId");

//     if (directUserId) {
//       return String(directUserId).trim();
//     }

//     const storedUser = getStoredUser();

//     return (
//       storedUser?._id ||
//       storedUser?.id ||
//       storedUser?.userId ||
//       null
//     );
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
//       throw new Error("Flight ID is missing.");
//     }

//     const userId = getUserId();

//     // =====================================================
//     // BAGGAGE
//     // =====================================================

//     const firstBaggage =
//       selectedBaggage?.[0] || {};

//     const cabinBaggage =
//       firstBaggage?.cabinBaggage ||
//       firstBaggage?.cabin ||
//       firstBaggage?.baggageCabin ||
//       flight?.cabinBaggage ||
//       flight?.baggage?.cabinBaggage ||
//       flight?.baggage?.cabin ||
//       flight?.cabins?.[0]?.cabinBaggage ||
//       flight?.cabins?.[0]?.baggageCabin ||
//       "7 KG";

//     const checkinBaggage =
//       firstBaggage?.checkinBaggage ||
//       firstBaggage?.checkin ||
//       firstBaggage?.weight ||
//       flight?.checkinBaggage ||
//       flight?.baggage?.checkinBaggage ||
//       flight?.baggage?.checkin ||
//       flight?.cabins?.[0]?.checkinBaggage ||
//       flight?.cabins?.[0]?.baggageCheckin ||
//       "15 KG";

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

//       flight: {
//         ...buildFlightData(),

//         cabinBaggage,
//         checkinBaggage,

//         baggage: {
//           ...(flight?.baggage || {}),
//           cabinBaggage,
//           cabin: cabinBaggage,
//           checkinBaggage,
//           checkin: checkinBaggage,
//         },
//       },

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

//       baggage: {
//         ...firstBaggage,
//         cabinBaggage,
//         cabin: cabinBaggage,
//         checkinBaggage,
//         checkin: checkinBaggage,
//         weight: checkinBaggage,
//         price:
//           Number(firstBaggage?.price || 0),
//       },

//       cabinBaggage,
//       checkinBaggage,

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

//       paymentMethod,

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

//       customerEmail:
//         customerEmail
//           .trim()
//           .toLowerCase(),

//       // Keep the logged-in account identity inside the payment request.
//       // Admin approval uses this value to attach the final booking to
//       // the original customer/agent instead of the admin account.
//       userId: userId || null,

//       userRole: userRole,
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

//       // EMAIL FIX
//       if (!customerEmail.trim()) {
//         alert(
//           "Please enter customer email."
//         );
//         return;
//       }

//       const emailPattern =
//         /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//       if (
//         !emailPattern.test(
//           customerEmail.trim()
//         )
//       ) {
//         alert(
//           "Please enter a valid customer email."
//         );
//         return;
//       }

//       if (!whatsappNumber.trim()) {
//         alert(
//           "Please enter WhatsApp number."
//         );
//         return;
//       }

//       const cleanWhatsappNumber =
//         whatsappNumber.replace(/\D/g, "");

//       if (
//         cleanWhatsappNumber.length < 10 ||
//         cleanWhatsappNumber.length > 15
//       ) {
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

//         // Payment date/time backend ke liye automatically current time se bhejo.
//         // User ko form me date/time field nahi dikhaya jayega.
//         formData.append(
//           "paymentDateTime",
//           new Date().toISOString()
//         );

//         // CUSTOMER EMAIL FIX
//         formData.append(
//           "customerEmail",
//           customerEmail
//             .trim()
//             .toLowerCase()
//         );

//         // WHATSAPP
//         formData.append(
//           "whatsappNumber",
//           cleanWhatsappNumber
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

//         // Backend se request ID save karo. Isi ID se customer device
//         // admin approval ka live status check karega.
//         const createdPaymentRequestId =
//           data?.paymentRequest?.id ||
//           data?.paymentRequest?._id ||
//           data?.id ||
//           data?._id;

//         if (!createdPaymentRequestId) {
//           throw new Error(
//             "Payment request ID was not returned by server."
//           );
//         }

//         setPaymentRequestId(String(createdPaymentRequestId));
//         setPaymentRequestStatus("Pending");
//         setPaymentTrackingError("");

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
//                 will be confirmed after admin
//                 verification.
//               </p>

//               <strong>
//                 Email: {customerEmail}
//               </strong>

//               <br />

//               <strong>
//                 WhatsApp: {whatsappNumber}
//               </strong>

//               <div
//                 style={{
//                   marginTop: "25px",
//                   padding: "15px",
//                   borderRadius: "10px",
//                   background:
//                     paymentRequestStatus === "Rejected"
//                       ? "#ffecec"
//                       : "#fff7e6",
//                 }}
//               >
//                 <strong>
//                   Payment Status: {paymentRequestStatus}
//                 </strong>
//                 <br />
//                 {paymentRequestStatus === "Accepted"
//                   ? "Payment approved. Opening your ticket..."
//                   : paymentRequestStatus === "Rejected"
//                   ? paymentTrackingError || "Payment request was rejected by admin."
//                   : "Please wait. This page will automatically open your confirmed ticket as soon as admin accepts the payment."}
//               </div>

//               {paymentRequestId && (
//                 <small
//                   style={{
//                     display: "block",
//                     marginTop: "10px",
//                     color: "#777",
//                   }}
//                 >
//                   Request ID: {paymentRequestId}
//                 </small>
//               )}

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
//           {/* 5 STEP PROGRESS */}
//           <div className="payment-progress">
//             <div className="step active">
//               <span>✓</span>
//               <p>Booking</p>
//             </div>

//             <div className="line active" />

//             <div className="step active">
//               <span>✓</span>
//               <p>Seat</p>
//             </div>

//             <div className="line active" />

//             <div className="step active">
//               <span>✓</span>
//               <p>Meal</p>
//             </div>

//             <div className="line active" />

//             <div className="step active">
//               <span>✓</span>
//               <p>Baggage</p>
//             </div>

//             <div className="line active" />

//             <div className="step current">
//               <span>5</span>
//               <p>Payment</p>
//             </div>
//           </div>

//           <div className="payment-card">
//             {isAdmin ? (
//               <>
//                 <div className="payment-title-row">
//                   <div>
//                     <h2>Confirm Booking</h2>
//                     <p>Review the booking and confirm the ticket.</p>
//                   </div>

//                   <div className="amount-box">
//                     <span>Total Amount</span>
//                     <strong>₹{total.toLocaleString("en-IN")}</strong>
//                   </div>
//                 </div>

//                 <div className="admin-payment-bypass">
//                   <div className="admin-icon">✓</div>
//                   <strong>Admin Booking</strong>
//                   <span>Payment is not required for admin.</span>
//                 </div>

//                 <button
//   type="button"
//   className="pay-btn"
//   onClick={handlePayment}
//   disabled={loading}
//   style={{
//     marginTop: "25px",
//     width: "100%",
//   }}
// >
//   {loading
//     ? "Creating Ticket..."
//     : `Confirm Booking & Generate Ticket • ₹ ${total.toLocaleString(
//         "en-IN"
//       )}`}
// </button>
//               </>
//             ) : (
//               <>
//                 {/* SIMPLE PAYMENT HEADER */}
//                 <div className="payment-title-row">
//                   <div>
//                     <h2>Manual Payment</h2>
//                     <p>
//                       Scan the QR code or use the bank details below to make
//                       your payment.
//                     </p>
//                   </div>

//                   <div className="amount-box">
//                     <span>Total Amount To Pay</span>
//                     <strong>₹{total.toLocaleString("en-IN")}</strong>
//                   </div>
//                 </div>

//                 <style>{`
//                   .selected-bank-card {
//                     box-shadow: 0 0 0 2px #176fe1 inset;
//                     cursor: pointer;
//                   }
//                   .simple-bank-card {
//                     cursor: pointer;
//                   }
//                   .selected-bank-card .bank-dot {
//                     background: #176fe1;
//                     color: #fff;
//                   }
//                 `}</style>

//                 {/* TWO SIMPLE QR CARDS */}
//                 <div className="qr-grid">
//                   <div
//                     className={`simple-bank-card blue-card ${paymentMethod === "ICICI Bank" ? "selected-bank-card" : ""}`}
//                     onClick={() => setPaymentMethod("ICICI Bank")}
//                     role="button"
//                     tabIndex={0}
//                   >
//                     <div className="bank-card-title">
//                       <div>
//                         <span>PAYMENT QR</span>
//                         <h3>ICICI Account 1</h3>
//                       </div>
//                       <div className="bank-dot">{paymentMethod === "ICICI Bank" ? "✓" : "01"}</div>
//                     </div>

//                     <div className="qr-bank-content">
//                       <div className="qr-side">
//                         <div className="qr-frame">
//                           <img
//                             src={ICICIQR}
//                             alt="Payment QR Code 1"
//                           />
//                         </div>

//                         <div className="scan-label">
//                           Scan & Pay
//                         </div>
//                       </div>

//                       <div className="bank-details">
//                         <div className="bank-detail">
//                           <span>Account Number</span>
//                           <strong>079905001743</strong>
//                         </div>

//                         <div className="bank-detail">
//                           <span>Account Holder</span>
//                           <strong>SAIYED TRAVELS</strong>
//                         </div>

//                         <div className="bank-detail">
//                           <span>IFSC Code</span>
//                           <strong>ICIC0000799</strong>
//                         </div>

//                         <div className="bank-detail">
//                           <span>Branch</span>
//                           <strong>JHUNJHUNU</strong>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div
//                     className={`simple-bank-card orange-card ${paymentMethod === "Bank of Baroda" ? "selected-bank-card" : ""}`}
//                     onClick={() => setPaymentMethod("Bank of Baroda")}
//                     role="button"
//                     tabIndex={0}
//                   >
//                     <div className="bank-card-title">
//                       <div>
//                         <span>PAYMENT QR</span>
//                         <h3>Bank of Baroda Account 2</h3>
//                       </div>
//                       <div className="bank-dot">{paymentMethod === "Bank of Baroda" ? "✓" : "02"}</div>
//                     </div>

//                     <div className="qr-bank-content">
//                       <div className="qr-side">
//                         <div className="qr-frame">
//                           <img
//                             src={BankOfBarodaQR}
//                             alt="Payment QR Code 2"
//                           />
//                         </div>

//                         <div className="scan-label">
//                           Scan & Pay
//                         </div>
//                       </div>

//                       <div className="bank-details">
//                         <div className="bank-detail">
//                           <span>Account Number</span>
//                           <strong>16870200000107</strong>
//                         </div>

//                         <div className="bank-detail">
//                           <span>Account Holder</span>
//                           <strong>SAYED TRAVELS</strong>
//                         </div>

//                         <div className="bank-detail">
//                           <span>IFSC Code</span>
//                           <strong>BARB0MOHJHU</strong>
//                         </div>

//                         <div className="bank-detail">
//                           <span>Branch</span>
//                           <strong>JHUNJHUNU</strong>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* BOOKING SUMMARY */}
//                 <div className="compact-summary">
//                   <div className="section-heading">
//                     <div>
//                       <h3>Booking Summary</h3>
//                       <p>Quick details of this booking</p>
//                     </div>

//                     <strong>
//                       ₹{total.toLocaleString("en-IN")}
//                     </strong>
//                   </div>

//                   <div className="summary-grid">
//                     <div>
//                       <span>Customer</span>
//                       <strong>
//                         {passenger?.firstName} {passenger?.lastName}
//                       </strong>
//                     </div>

//                     <div>
//                       <span>Email</span>
//                       <strong>{customerEmail || "-"}</strong>
//                     </div>

//                     <div>
//                       <span>WhatsApp</span>
//                       <strong>{whatsappNumber || "-"}</strong>
//                     </div>

//                     <div>
//                       <span>Passengers</span>
//                       <strong>
//                         {adultCount} Adult
//                         {adultCount > 1 ? "s" : ""}
//                         {childCount > 0 &&
//                           `, ${childCount} Child${
//                             childCount > 1 ? "ren" : ""
//                           }`}
//                         {infantCount > 0 &&
//                           `, ${infantCount} Infant${
//                             infantCount > 1 ? "s" : ""
//                           }`}
//                       </strong>
//                     </div>

//                     <div>
//                       <span>Airline</span>
//                       <strong>{flight?.airline || "-"}</strong>
//                     </div>

//                     <div>
//                       <span>Route</span>
//                       <strong className="capitalize">
//                         {flight?.from ||
//                           flight?.fromCity ||
//                           flight?.fromCode ||
//                           "-"}{" "}
//                         →{" "}
//                         {flight?.to ||
//                           flight?.toCity ||
//                           flight?.toCode ||
//                           "-"}
//                       </strong>
//                     </div>

//                     <div>
//                       <span>Flight No.</span>
//                       <strong>
//                         {flight?.flightNo ||
//                           flight?.flightNumber ||
//                           "-"}
//                       </strong>
//                     </div>

//                     <div>
//                       <span>Baggage</span>
//                       <strong>
//                         {selectedBaggage.length > 0
//                           ? selectedBaggage
//                               .map(
//                                 (item) =>
//                                   item?.weight ||
//                                   "Baggage"
//                               )
//                               .join(", ")
//                           : "15 KG Included"}
//                       </strong>
//                     </div>
//                   </div>

//                   <div className="fare-row">
//                     <span>
//                       Adult Fare ({adultCount}){" "}
//                       <b>
//                         ₹
//                         {(
//                           adultFare * adultCount
//                         ).toLocaleString("en-IN")}
//                       </b>
//                     </span>

//                     {childCount > 0 && (
//                       <span>
//                         Child Fare ({childCount}){" "}
//                         <b>
//                           ₹
//                           {(
//                             childFare * childCount
//                           ).toLocaleString("en-IN")}
//                         </b>
//                       </span>
//                     )}

//                     {infantCount > 0 && (
//                       <span>
//                         Infant Fare ({infantCount}){" "}
//                         <b>
//                           ₹
//                           {(
//                             infantFare * infantCount
//                           ).toLocaleString("en-IN")}
//                         </b>
//                       </span>
//                     )}

//                     <span>
//                       Seat{" "}
//                       <b>
//                         ₹{seatPrice.toLocaleString("en-IN")}
//                       </b>
//                     </span>

//                     <span>
//                       Meal{" "}
//                       <b>
//                         ₹{mealPrice.toLocaleString("en-IN")}
//                       </b>
//                     </span>

//                     <span>
//                       Baggage{" "}
//                       <b>
//                         ₹{baggagePrice.toLocaleString("en-IN")}
//                       </b>
//                     </span>
//                   </div>
//                 </div>

//                 {/* PAYMENT DETAILS */}
//                 <div className="payment-details">
//                   <div className="section-heading payment-details-heading">
//                     <div>
//                       <h3>Payment Details</h3>
//                       <p>
//                         After making the payment, enter the details below.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="payment-form-grid">
//                     <div className="form-field">
//                       <label>UTR / Transaction ID *</label>
//                       <input
//                         type="text"
//                         placeholder="Enter UTR / Transaction ID"
//                         value={paymentId}
//                         onChange={(e) =>
//                           setPaymentId(e.target.value)
//                         }
//                       />
//                     </div>

//                     <div className="form-field">
//                       <label>Customer Email *</label>
//                       <input
//                         type="email"
//                         inputMode="email"
//                         placeholder="Enter your email address"
//                         value={customerEmail}
//                         onChange={(e) =>
//                           setCustomerEmail(e.target.value)
//                         }
//                       />
//                     </div>

//                     <div className="form-field">
//                       <label>WhatsApp Number *</label>
//                       <input
//                         type="tel"
//                         inputMode="numeric"
//                         placeholder="Enter WhatsApp number"
//                         value={whatsappNumber}
//                         onChange={(e) =>
//                           setWhatsappNumber(e.target.value)
//                         }
//                       />
//                     </div>
//                   </div>

//                   <div className="important-message">
//                     <strong>⚠️ Important:</strong> Please pay exactly ₹
//                     {total.toLocaleString("en-IN")}. Your booking will
//                     remain pending until the admin verifies your payment.
//                   </div>
//                 </div>

//                 {/* SUBMIT */}
//                 <button
//                   type="button"
//                   className="pay-btn"
//                   onClick={handlePayment}
//                   disabled={loading}
//                 >
//                   {loading
//                     ? "Submitting..."
//                     : `Submit Payment Request • ₹ ${total.toLocaleString(
//                         "en-IN"
//                       )}`}
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Payment;




import "./Payment.css";

import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

// =====================================================
// QR IMAGES
// =====================================================

import ICICIQR from "../../assets/ICICI.jpeg";
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
  // AGENT WALLET
  // =====================================================

  useEffect(() => {
    if (!isAgent) return;

    const fetchAgentWallet = async () => {
      try {
        setWalletLoading(true);

        const response = await fetch(
          "https://saiyed-travels-backend-1.onrender.com/api/wallet/agent",
          {
            headers: {
              ...(localStorage.getItem("token")
                ? {
                    Authorization:
                      `Bearer ${localStorage.getItem("token")}`,
                  }
                : {}),
              ...(localStorage.getItem("userId")
                ? {
                    "x-user-id":
                      localStorage.getItem("userId"),
                  }
                : {}),
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.message || "Unable to load wallet balance."
          );
        }

        const balance = Number(
          data?.wallet?.balance ??
            data?.balance ??
            0
        );

        setWalletBalance(
          Number.isFinite(balance) ? balance : 0
        );
      } catch (error) {
        console.error(
          "AGENT WALLET LOAD ERROR:",
          error
        );
        setWalletBalance(0);
      } finally {
        setWalletLoading(false);
      }
    };

    fetchAgentWallet();
  }, [isAgent]);

  // =====================================================
  // STATE
  // =====================================================

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const [paymentMethod, setPaymentMethod] =
    useState("ICICI Bank");

  // Agent payment mode: wallet or direct payment
  const [agentPaymentMode, setAgentPaymentMode] =
    useState("wallet");

  const [walletBalance, setWalletBalance] =
    useState(0);

  const [walletLoading, setWalletLoading] =
    useState(false);

  const [paymentId, setPaymentId] =
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

  // Payment request tracking (customer device)
  const [paymentRequestId, setPaymentRequestId] = useState(null);
  const [paymentRequestStatus, setPaymentRequestStatus] = useState("Pending");
  const [paymentTrackingError, setPaymentTrackingError] = useState("");

  // =====================================================
  // CROSS-DEVICE PAYMENT STATUS TRACKING
  // =====================================================
  // Customer device payment request ko backend se check karta rahega.
  // Admin kisi bhi device se Accept karega to approved booking milte
  // hi customer device automatically Success/Ticket page par jayega.
  useEffect(() => {
    if (!submitted || !paymentRequestId) return;

    let stopped = false;
    let intervalId;

    const checkPaymentStatus = async () => {
      try {
        const email = customerEmail.trim().toLowerCase();
        if (!email) return;

        const response = await fetch(
          `https://saiyed-travels-backend-1.onrender.com/api/payment-requests/${paymentRequestId}/status?email=${encodeURIComponent(email)}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Unable to check payment status.");
        }

        if (stopped) return;

        setPaymentRequestStatus(data?.status || "Pending");

        if (data?.status === "Accepted" && data?.booking) {
          stopped = true;
          clearInterval(intervalId);

          navigate("/success", {
            state: {
              booking: data.booking,
              fromPaymentApproval: true,
              autoDownload: false,
            },
          });
          return;
        }

        if (data?.status === "Rejected") {
          setPaymentTrackingError(
            data?.adminNote ||
              "Payment request was rejected by admin."
          );
          clearInterval(intervalId);
        }
      } catch (error) {
        if (!stopped) {
          console.error("PAYMENT STATUS CHECK ERROR:", error);
          setPaymentTrackingError(
            error?.message || "Unable to check payment status."
          );
        }
      }
    };

    checkPaymentStatus();
    intervalId = setInterval(checkPaymentStatus, 3000);

    return () => {
      stopped = true;
      clearInterval(intervalId);
    };
  }, [submitted, paymentRequestId, customerEmail, navigate]);

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

  
      <style>{`
        .payment-page .payment-container {
          display: block !important;
          width: calc(100% - 32px) !important;
          max-width: 1400px !important;
          margin: 0 auto !important;
        }

        .payment-page .payment-left {
          width: 100% !important;
          max-width: none !important;
        }

        .payment-page .payment-card {
          width: 100% !important;
          box-sizing: border-box !important;
        }

        @media (max-width: 900px) {
          .payment-page .payment-container {
            width: calc(100% - 18px) !important;
          }

          .payment-page .payment-card {
            padding: 18px !important;
          }
        }

        @media (max-width: 700px) {
          .payment-page .payment-progress {
            overflow-x: auto;
          }
        }
      `}</style>

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

  const getStoredUser = () => {
    const objectKeys = [
      "user",
      "currentUser",
      "loggedInUser",
      "authUser",
    ];

    for (const key of objectKeys) {
      const raw = localStorage.getItem(key);
      if (!raw) continue;

      try {
        const parsed = JSON.parse(raw);
        const candidate = parsed?.user || parsed;
        if (candidate && typeof candidate === "object") {
          return candidate;
        }
      } catch {
        // Ignore invalid localStorage JSON and continue.
      }
    }

    return null;
  };

  const getUserId = () => {
    const directUserId =
      localStorage.getItem("userId") ||
      localStorage.getItem("userID") ||
      localStorage.getItem("customerId");

    if (directUserId) {
      return String(directUserId).trim();
    }

    const storedUser = getStoredUser();

    return (
      storedUser?._id ||
      storedUser?.id ||
      storedUser?.userId ||
      null
    );
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
      throw new Error("Flight ID is missing.");
    }

    const userId = getUserId();

    // =====================================================
    // BAGGAGE
    // =====================================================

    const firstBaggage =
      selectedBaggage?.[0] || {};

    const cabinBaggage =
      firstBaggage?.cabinBaggage ||
      firstBaggage?.cabin ||
      firstBaggage?.baggageCabin ||
      flight?.cabinBaggage ||
      flight?.baggage?.cabinBaggage ||
      flight?.baggage?.cabin ||
      flight?.cabins?.[0]?.cabinBaggage ||
      flight?.cabins?.[0]?.baggageCabin ||
      "7 KG";

    const checkinBaggage =
      firstBaggage?.checkinBaggage ||
      firstBaggage?.checkin ||
      firstBaggage?.weight ||
      flight?.checkinBaggage ||
      flight?.baggage?.checkinBaggage ||
      flight?.baggage?.checkin ||
      flight?.cabins?.[0]?.checkinBaggage ||
      flight?.cabins?.[0]?.baggageCheckin ||
      "15 KG";

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

      flight: {
        ...buildFlightData(),

        cabinBaggage,
        checkinBaggage,

        baggage: {
          ...(flight?.baggage || {}),
          cabinBaggage,
          cabin: cabinBaggage,
          checkinBaggage,
          checkin: checkinBaggage,
        },
      },

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

      baggage: {
        ...firstBaggage,
        cabinBaggage,
        cabin: cabinBaggage,
        checkinBaggage,
        checkin: checkinBaggage,
        weight: checkinBaggage,
        price:
          Number(firstBaggage?.price || 0),
      },

      cabinBaggage,
      checkinBaggage,

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
        customerEmail
          .trim()
          .toLowerCase(),

      // Keep the logged-in account identity inside the payment request.
      // Admin approval uses this value to attach the final booking to
      // the original customer/agent instead of the admin account.
      userId: userId || null,

      userRole: userRole,
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
  // AGENT WALLET BOOKING
  // =====================================================

  const handleWalletBooking = async () => {
    if (loading) return;

    if (!isAgent) {
      alert("Wallet payment is available only for agents.");
      return;
    }

    if (walletLoading) {
      alert("Please wait while wallet balance is loading.");
      return;
    }

    if (walletBalance < total) {
      alert(
        `Insufficient wallet balance. Available: ₹${walletBalance.toLocaleString(
          "en-IN"
        )} | Required: ₹${total.toLocaleString("en-IN")}`
      );
      return;
    }

    try {
      setLoading(true);

      const bookingData = buildBookingData();

      // Wallet payment = direct confirmed booking.
      bookingData.paymentMethod = "wallet";
      bookingData.paymentVerified = true;
      bookingData.paymentStatus = "Paid";
      bookingData.bookingStatus = "Confirmed";
      bookingData.paymentId = "WALLET_PAYMENT";
      bookingData.orderId = "WALLET_BOOKING";

      const response = await fetch(
        "https://saiyed-travels-backend-1.onrender.com/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(localStorage.getItem("token")
              ? {
                  Authorization:
                    `Bearer ${localStorage.getItem("token")}`,
                }
              : {}),
            ...(localStorage.getItem("userId")
              ? {
                  "x-user-id":
                    localStorage.getItem("userId"),
                }
              : {}),
          },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to create wallet booking."
        );
      }

      if (!data?.success || !data?.booking) {
        throw new Error(
          "Wallet booking was not created."
        );
      }

      navigate("/success", {
        state: {
          booking: data.booking,
          autoDownload: false,
          fromWalletPayment: true,
        },
      });
    } catch (error) {
      console.error(
        "WALLET BOOKING ERROR:",
        error
      );

      alert(
        error?.message ||
          "Unable to complete wallet booking."
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

        // Payment date/time backend ke liye automatically current time se bhejo.
        // User ko form me date/time field nahi dikhaya jayega.
        formData.append(
          "paymentDateTime",
          new Date().toISOString()
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

        // Backend se request ID save karo. Isi ID se customer device
        // admin approval ka live status check karega.
        const createdPaymentRequestId =
          data?.paymentRequest?.id ||
          data?.paymentRequest?._id ||
          data?.id ||
          data?._id;

        if (!createdPaymentRequestId) {
          throw new Error(
            "Payment request ID was not returned by server."
          );
        }

        setPaymentRequestId(String(createdPaymentRequestId));
        setPaymentRequestStatus("Pending");
        setPaymentTrackingError("");

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

      if (isAgent && agentPaymentMode === "wallet") {
        await handleWalletBooking();
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
                    paymentRequestStatus === "Rejected"
                      ? "#ffecec"
                      : "#fff7e6",
                }}
              >
                <strong>
                  Payment Status: {paymentRequestStatus}
                </strong>
                <br />
                {paymentRequestStatus === "Accepted"
                  ? "Payment approved. Opening your ticket..."
                  : paymentRequestStatus === "Rejected"
                  ? paymentTrackingError || "Payment request was rejected by admin."
                  : "Please wait. This page will automatically open your confirmed ticket as soon as admin accepts the payment."}
              </div>

              {paymentRequestId && (
                <small
                  style={{
                    display: "block",
                    marginTop: "10px",
                    color: "#777",
                  }}
                >
                  Request ID: {paymentRequestId}
                </small>
              )}

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
          {/* 5 STEP PROGRESS */}
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
            {isAdmin ? (
              <>
                <div className="payment-title-row">
                  <div>
                    <h2>Confirm Booking</h2>
                    <p>Review the booking and confirm the ticket.</p>
                  </div>

                  <div className="amount-box">
                    <span>Total Amount</span>
                    <strong>₹{total.toLocaleString("en-IN")}</strong>
                  </div>
                </div>

                <div className="admin-payment-bypass">
                  <div className="admin-icon">✓</div>
                  <strong>Admin Booking</strong>
                  <span>Payment is not required for admin.</span>
                </div>

                <button
  type="button"
  className="pay-btn"
  onClick={handlePayment}
  disabled={loading}
  style={{
    marginTop: "25px",
    width: "100%",
  }}
>
  {loading
    ? "Creating Ticket..."
    : `Confirm Booking & Generate Ticket • ₹ ${total.toLocaleString(
        "en-IN"
      )}`}
</button>
              </>
            ) : (
              <>
                {isAgent && (
                  <div
                    className="agent-payment-method"
                    style={{
                      marginBottom: "24px",
                      padding: "20px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "14px",
                      background: "#f8fafc",
                    }}
                  >
                    <div style={{ marginBottom: "14px" }}>
                      <h3 style={{ margin: 0 }}>
                        Choose Payment Method
                      </h3>
                      <p
                        style={{
                          margin: "6px 0 0",
                          color: "#64748b",
                        }}
                      >
                        Agent can pay directly from wallet or use direct payment.
                      </p>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "12px",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setAgentPaymentMode("wallet")
                        }
                        style={{
                          textAlign: "left",
                          padding: "16px",
                          borderRadius: "12px",
                          border:
                            agentPaymentMode === "wallet"
                              ? "2px solid #176fe1"
                              : "1px solid #d1d5db",
                          background:
                            agentPaymentMode === "wallet"
                              ? "#eff6ff"
                              : "#fff",
                          cursor: "pointer",
                        }}
                      >
                        <strong>💳 Pay from Wallet</strong>
                        <div
                          style={{
                            marginTop: "7px",
                            fontSize: "14px",
                            color: "#475569",
                          }}
                        >
                          Wallet Balance:{" "}
                          <strong>
                            ₹{walletBalance.toLocaleString("en-IN")}
                          </strong>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setAgentPaymentMode("direct")
                        }
                        style={{
                          textAlign: "left",
                          padding: "16px",
                          borderRadius: "12px",
                          border:
                            agentPaymentMode === "direct"
                              ? "2px solid #176fe1"
                              : "1px solid #d1d5db",
                          background:
                            agentPaymentMode === "direct"
                              ? "#eff6ff"
                              : "#fff",
                          cursor: "pointer",
                        }}
                      >
                        <strong>💰 Direct Payment</strong>
                        <div
                          style={{
                            marginTop: "7px",
                            fontSize: "14px",
                            color: "#475569",
                          }}
                        >
                          Pay using the existing payment process.
                        </div>
                      </button>
                    </div>

                    {agentPaymentMode === "wallet" && (
                      <div
                        style={{
                          marginTop: "14px",
                          padding: "14px",
                          borderRadius: "10px",
                          background:
                            walletBalance >= total
                              ? "#ecfdf5"
                              : "#fef2f2",
                          color:
                            walletBalance >= total
                              ? "#166534"
                              : "#b91c1c",
                        }}
                      >
                        <strong>
                          {walletLoading
                            ? "Loading wallet balance..."
                            : walletBalance >= total
                            ? `Wallet payment available • ₹${(
                                walletBalance - total
                              ).toLocaleString("en-IN")} will remain after booking.`
                            : `Insufficient balance • Required ₹${total.toLocaleString(
                                "en-IN"
                              )}, Available ₹${walletBalance.toLocaleString(
                                "en-IN"
                              )}`}
                        </strong>
                      </div>
                    )}
                  </div>
                )}

                {(!isAgent || agentPaymentMode === "direct") && (
                  <>
                    {/* SIMPLE PAYMENT HEADER */}
                <div className="payment-title-row">
                  <div>
                    <h2>Manual Payment</h2>
                    <p>
                      Scan the QR code or use the bank details below to make
                      your payment.
                    </p>
                  </div>

                  <div className="amount-box">
                    <span>Total Amount To Pay</span>
                    <strong>₹{total.toLocaleString("en-IN")}</strong>
                  </div>
                </div>

                <style>{`
                  .selected-bank-card {
                    box-shadow: 0 0 0 2px #176fe1 inset;
                    cursor: pointer;
                  }
                  .simple-bank-card {
                    cursor: pointer;
                  }
                  .selected-bank-card .bank-dot {
                    background: #176fe1;
                    color: #fff;
                  }
                `}</style>

                {/* TWO SIMPLE QR CARDS */}
                <div className="qr-grid">
                  <div
                    className={`simple-bank-card blue-card ${paymentMethod === "ICICI Bank" ? "selected-bank-card" : ""}`}
                    onClick={() => setPaymentMethod("ICICI Bank")}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="bank-card-title">
                      <div>
                        <span>PAYMENT QR</span>
                        <h3>ICICI Account 1</h3>
                      </div>
                      <div className="bank-dot">{paymentMethod === "ICICI Bank" ? "✓" : "01"}</div>
                    </div>

                    <div className="qr-bank-content">
                      <div className="qr-side">
                        <div className="qr-frame">
                          <img
                            src={ICICIQR}
                            alt="Payment QR Code 1"
                          />
                        </div>

                        <div className="scan-label">
                          Scan & Pay
                        </div>
                      </div>

                      <div className="bank-details">
                        <div className="bank-detail">
                          <span>Account Number</span>
                          <strong>079905001743</strong>
                        </div>

                        <div className="bank-detail">
                          <span>Account Holder</span>
                          <strong>SAIYED TRAVELS</strong>
                        </div>

                        <div className="bank-detail">
                          <span>IFSC Code</span>
                          <strong>ICIC0000799</strong>
                        </div>

                        <div className="bank-detail">
                          <span>Branch</span>
                          <strong>JHUNJHUNU</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`simple-bank-card orange-card ${paymentMethod === "Bank of Baroda" ? "selected-bank-card" : ""}`}
                    onClick={() => setPaymentMethod("Bank of Baroda")}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="bank-card-title">
                      <div>
                        <span>PAYMENT QR</span>
                        <h3>Bank of Baroda Account 2</h3>
                      </div>
                      <div className="bank-dot">{paymentMethod === "Bank of Baroda" ? "✓" : "02"}</div>
                    </div>

                    <div className="qr-bank-content">
                      <div className="qr-side">
                        <div className="qr-frame">
                          <img
                            src={BankOfBarodaQR}
                            alt="Payment QR Code 2"
                          />
                        </div>

                        <div className="scan-label">
                          Scan & Pay
                        </div>
                      </div>

                      <div className="bank-details">
                        <div className="bank-detail">
                          <span>Account Number</span>
                          <strong>16870200000107</strong>
                        </div>

                        <div className="bank-detail">
                          <span>Account Holder</span>
                          <strong>SAYED TRAVELS</strong>
                        </div>

                        <div className="bank-detail">
                          <span>IFSC Code</span>
                          <strong>BARB0MOHJHU</strong>
                        </div>

                        <div className="bank-detail">
                          <span>Branch</span>
                          <strong>JHUNJHUNU</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOOKING SUMMARY */}
                <div className="compact-summary">
                  <div className="section-heading">
                    <div>
                      <h3>Booking Summary</h3>
                      <p>Quick details of this booking</p>
                    </div>

                    <strong>
                      ₹{total.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <div className="summary-grid">
                    <div>
                      <span>Customer</span>
                      <strong>
                        {passenger?.firstName} {passenger?.lastName}
                      </strong>
                    </div>

                    <div>
                      <span>Email</span>
                      <strong>{customerEmail || "-"}</strong>
                    </div>

                    <div>
                      <span>WhatsApp</span>
                      <strong>{whatsappNumber || "-"}</strong>
                    </div>

                    <div>
                      <span>Passengers</span>
                      <strong>
                        {adultCount} Adult
                        {adultCount > 1 ? "s" : ""}
                        {childCount > 0 &&
                          `, ${childCount} Child${
                            childCount > 1 ? "ren" : ""
                          }`}
                        {infantCount > 0 &&
                          `, ${infantCount} Infant${
                            infantCount > 1 ? "s" : ""
                          }`}
                      </strong>
                    </div>

                    <div>
                      <span>Airline</span>
                      <strong>{flight?.airline || "-"}</strong>
                    </div>

                    <div>
                      <span>Route</span>
                      <strong className="capitalize">
                        {flight?.from ||
                          flight?.fromCity ||
                          flight?.fromCode ||
                          "-"}{" "}
                        →{" "}
                        {flight?.to ||
                          flight?.toCity ||
                          flight?.toCode ||
                          "-"}
                      </strong>
                    </div>

                    <div>
                      <span>Flight No.</span>
                      <strong>
                        {flight?.flightNo ||
                          flight?.flightNumber ||
                          "-"}
                      </strong>
                    </div>

                    <div>
                      <span>Baggage</span>
                      <strong>
                        {selectedBaggage.length > 0
                          ? selectedBaggage
                              .map(
                                (item) =>
                                  item?.weight ||
                                  "Baggage"
                              )
                              .join(", ")
                          : "15 KG Included"}
                      </strong>
                    </div>
                  </div>

                  <div className="fare-row">
                    <span>
                      Adult Fare ({adultCount}){" "}
                      <b>
                        ₹
                        {(
                          adultFare * adultCount
                        ).toLocaleString("en-IN")}
                      </b>
                    </span>

                    {childCount > 0 && (
                      <span>
                        Child Fare ({childCount}){" "}
                        <b>
                          ₹
                          {(
                            childFare * childCount
                          ).toLocaleString("en-IN")}
                        </b>
                      </span>
                    )}

                    {infantCount > 0 && (
                      <span>
                        Infant Fare ({infantCount}){" "}
                        <b>
                          ₹
                          {(
                            infantFare * infantCount
                          ).toLocaleString("en-IN")}
                        </b>
                      </span>
                    )}

                    <span>
                      Seat{" "}
                      <b>
                        ₹{seatPrice.toLocaleString("en-IN")}
                      </b>
                    </span>

                    <span>
                      Meal{" "}
                      <b>
                        ₹{mealPrice.toLocaleString("en-IN")}
                      </b>
                    </span>

                    <span>
                      Baggage{" "}
                      <b>
                        ₹{baggagePrice.toLocaleString("en-IN")}
                      </b>
                    </span>
                  </div>
                </div>

                {/* PAYMENT DETAILS */}
                <div className="payment-details">
                  <div className="section-heading payment-details-heading">
                    <div>
                      <h3>Payment Details</h3>
                      <p>
                        After making the payment, enter the details below.
                      </p>
                    </div>
                  </div>

                  <div className="payment-form-grid">
                    <div className="form-field">
                      <label>UTR / Transaction ID *</label>
                      <input
                        type="text"
                        placeholder="Enter UTR / Transaction ID"
                        value={paymentId}
                        onChange={(e) =>
                          setPaymentId(e.target.value)
                        }
                      />
                    </div>

                    <div className="form-field">
                      <label>Customer Email *</label>
                      <input
                        type="email"
                        inputMode="email"
                        placeholder="Enter your email address"
                        value={customerEmail}
                        onChange={(e) =>
                          setCustomerEmail(e.target.value)
                        }
                      />
                    </div>

                    <div className="form-field">
                      <label>WhatsApp Number *</label>
                      <input
                        type="tel"
                        inputMode="numeric"
                        placeholder="Enter WhatsApp number"
                        value={whatsappNumber}
                        onChange={(e) =>
                          setWhatsappNumber(e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="important-message">
                    <strong>⚠️ Important:</strong> Please pay exactly ₹
                    {total.toLocaleString("en-IN")}. Your booking will
                    remain pending until the admin verifies your payment.
                  </div>
                </div>

                {/* SUBMIT */}
                <button
                  type="button"
                  className="pay-btn"
                  onClick={handlePayment}
                  disabled={loading}
                >
                  {loading
                    ? "Submitting..."
                    : `Submit Payment Request • ₹ ${total.toLocaleString(
                        "en-IN"
                      )}`}
                </button>
                  </>
                )}

                {isAgent && agentPaymentMode === "wallet" && (
                  <button
                    type="button"
                    className="pay-btn"
                    onClick={handlePayment}
                    disabled={
                      loading ||
                      walletLoading ||
                      walletBalance < total
                    }
                    style={{
                      width: "100%",
                      marginTop: "8px",
                    }}
                  >
                    {loading
                      ? "Creating Ticket..."
                      : walletLoading
                      ? "Loading Wallet..."
                      : `Pay From Wallet & Generate Ticket • ₹ ${total.toLocaleString(
                          "en-IN"
                        )}`}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Payment;