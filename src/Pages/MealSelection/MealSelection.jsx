// // // // // import "./MealSelection.css";
// // // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // // import { useState } from "react";

// // // // // function MealSelection() {

// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();

// // // // //   const { flight, seat } = location.state || {};

// // // // //   if (!flight) {
// // // // //     return (
// // // // //       <h2
// // // // //         style={{
// // // // //           textAlign: "center",
// // // // //           marginTop: "120px",
// // // // //         }}
// // // // //       >
// // // // //         No Booking Found
// // // // //       </h2>
// // // // //     );
// // // // //   }

// // // // //   const meals = [
// // // // //     {
// // // // //       id: 1,
// // // // //       name: "No Meal",
// // // // //       price: 0,
// // // // //       icon: "🥤",
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       name: "Veg Meal",
// // // // //       price: 250,
// // // // //       icon: "🥗",
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       name: "Non Veg Meal",
// // // // //       price: 300,
// // // // //       icon: "🍗",
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       name: "Jain Meal",
// // // // //       price: 250,
// // // // //       icon: "🥬",
// // // // //     },
// // // // //     {
// // // // //       id: 5,
// // // // //       name: "Kids Meal",
// // // // //       price: 200,
// // // // //       icon: "🍔",
// // // // //     },
// // // // //   ];

// // // // //   const [selectedMeal, setSelectedMeal] = useState(meals[0]);

// // // // //   return (

// // // // //     <section className="meal-page">

// // // // //       <div className="meal-container">

// // // // //         <div className="meal-header">

// // // // //           <h2>Choose Your Meal</h2>

// // // // //           <p>
// // // // //             {flight.from} → {flight.to}
// // // // //           </p>

// // // // //         </div>

// // // // //         <div className="meal-grid"></div>
// // // // //                   {meals.map((meal) => (

// // // // //             <div
// // // // //               key={meal.id}
// // // // //               className={
// // // // //                 selectedMeal.id === meal.id
// // // // //                   ? "meal-card active"
// // // // //                   : "meal-card"
// // // // //               }
// // // // //               onClick={() => setSelectedMeal(meal)}
// // // // //             >

// // // // //               <div className="meal-icon">

// // // // //                 {meal.icon}

// // // // //               </div>

// // // // //               <h3>{meal.name}</h3>

// // // // //               <p>

// // // // //                 {meal.price === 0
// // // // //                   ? "Free"
// // // // //                   : `₹ ${meal.price}`}

// // // // //               </p>

// // // // //             </div>

// // // // //           ))}

// // // // //         </div>

// // // // //         <div className="meal-summary">

// // // // //           <h3>

// // // // //             Selected Meal :

// // // // //             <span> {selectedMeal.name}</span>

// // // // //           </h3>

// // // // //           <p>

// // // // //             Price :

// // // // //             <strong>

// // // // //               {selectedMeal.price === 0
// // // // //                 ? " Free"
// // // // //                 : ` ₹ ${selectedMeal.price}`}

// // // // //             </strong>

// // // // //           </p>

// // // // //         </div>

// // // // //         <button
// // // // //           className="continue-meal-btn"
// // // // //           onClick={() =>
// // // // //             navigate("/extra-baggage", {
// // // // //               state: {
// // // // //                 flight,
// // // // //                 seat,
// // // // //                 meal: selectedMeal,
// // // // //               },
// // // // //             })
// // // // //           }
// // // // //         >
// // // // //           Continue
// // // // //         </button>

// // // // //       {/* </div> */}

// // // // //     </section>

// // // // //   );

// // // // // }

// // // // // export default MealSelection;





// // // // import "./MealSelection.css";
// // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // import { useState } from "react";

// // // // function MealSelection() {

// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const { flight, seat } = location.state || {};

// // // //   if (!flight) {
// // // //     return (
// // // //       <h2
// // // //         style={{
// // // //           textAlign: "center",
// // // //           marginTop: "120px",
// // // //         }}
// // // //       >
// // // //         No Booking Found
// // // //       </h2>
// // // //     );
// // // //   }

// // // //   const meals = [
// // // //     {
// // // //       id: 1,
// // // //       name: "No Meal",
// // // //       price: 0,
// // // //       icon: "🥤",
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       name: "Veg Meal",
// // // //       price: 250,
// // // //       icon: "🥗",
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       name: "Non Veg Meal",
// // // //       price: 300,
// // // //       icon: "🍗",
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       name: "Jain Meal",
// // // //       price: 250,
// // // //       icon: "🥬",
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       name: "Kids Meal",
// // // //       price: 200,
// // // //       icon: "🍔",
// // // //     },
// // // //   ];

// // // //   const [selectedMeal, setSelectedMeal] = useState(meals[0]);

// // // //   return (

// // // //     <section className="meal-page">

// // // //       <div className="meal-container">

// // // //         <div className="meal-header">

// // // //           <h2>Choose Your Meal</h2>

// // // //           <p>
// // // //             {flight.from} → {flight.to}
// // // //           </p>

// // // //         </div>

// // // //         {/* Meal Grid */}

// // // //         <div className="meal-grid">

// // // //           {meals.map((meal) => (

// // // //             <div
// // // //               key={meal.id}
// // // //               className={
// // // //                 selectedMeal.id === meal.id
// // // //                   ? "meal-card active"
// // // //                   : "meal-card"
// // // //               }
// // // //               onClick={() => setSelectedMeal(meal)}
// // // //             >

// // // //               <div className="meal-icon">

// // // //                 {meal.icon}

// // // //               </div>

// // // //               <h3>{meal.name}</h3>

// // // //               <p>

// // // //                 {meal.price === 0
// // // //                   ? "Free"
// // // //                   : `₹ ${meal.price}`}

// // // //               </p>

// // // //             </div>

// // // //           ))}

// // // //         </div>

// // // //         {/* Summary */}

// // // //         <div className="meal-summary">

// // // //           <h3>

// // // //             Selected Meal :

// // // //             <span>

// // // //               {selectedMeal.name}

// // // //             </span>

// // // //           </h3>

// // // //           <p>

// // // //             Price :

// // // //             <strong>

// // // //               {selectedMeal.price === 0
// // // //                 ? " Free"
// // // //                 : ` ₹ ${selectedMeal.price}`}

// // // //             </strong>

// // // //           </p>

// // // //         </div>

// // // //         <button
// // // //           className="continue-meal-btn"
// // // //           onClick={() =>
// // // //             navigate("/extra-baggage", {
// // // //               state: {
// // // //                 flight,
// // // //                 seat,
// // // //                 meal: selectedMeal,
// // // //               },
// // // //             })
// // // //           }
// // // //         >
// // // //           Continue
// // // //         </button>

// // // //       </div>

// // // //     </section>

// // // //   );

// // // // }

// // // // export default MealSelection;



// // // import "./MealSelection.css";
// // // import { useLocation, useNavigate } from "react-router-dom";
// // // import { useState } from "react";

// // // import Navbar from "../../Components/Navbar/Navbar";
// // // import Footer from "../../Components/Footer/Footer";

// // // function MealSelection() {

// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const { flight, seat } = location.state || {};

// // //   if (!flight) {
// // //     return (
// // //       <>
// // //         <Navbar />

// // //         <section className="meal-page">

// // //           <div className="no-booking">

// // //             <h2>No Booking Found ✈️</h2>

// // //             <p>
// // //               Please complete your booking before selecting a meal.
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

// // //   const meals = [

// // //     {
// // //       id: 1,
// // //       name: "No Meal",
// // //       price: 0,
// // //       icon: "🥤",
// // //     },

// // //     {
// // //       id: 2,
// // //       name: "Veg Meal",
// // //       price: 250,
// // //       icon: "🥗",
// // //     },

// // //     {
// // //       id: 3,
// // //       name: "Non Veg Meal",
// // //       price: 300,
// // //       icon: "🍗",
// // //     },

// // //     {
// // //       id: 4,
// // //       name: "Jain Meal",
// // //       price: 250,
// // //       icon: "🥬",
// // //     },

// // //     {
// // //       id: 5,
// // //       name: "Kids Meal",
// // //       price: 200,
// // //       icon: "🍔",
// // //     },

// // //   ];

// // //   const [selectedMeal, setSelectedMeal] = useState(meals[0]);

// // //   return (

// // //     <>

// // //       <Navbar />

// // //       <section className="meal-page">

// // //         <div className="meal-container">

// // //           <div className="meal-header">

// // //             <h2>
// // //               Choose Your Meal
// // //             </h2>

// // //             <p>
// // //               {flight.airline}
// // //             </p>

// // //             <h4>
// // //               {flight.from}
// // //               <span> → </span>
// // //               {flight.to}
// // //             </h4>

// // //             <h5>
// // //               Seat :
// // //               <span> {seat}</span>
// // //             </h5>

// // //           </div>


// // //                     {/* Meal Grid */}

// // //           <div className="meal-grid">

// // //             {meals.map((meal) => (

// // //               <div
// // //                 key={meal.id}
// // //                 className={
// // //                   selectedMeal.id === meal.id
// // //                     ? "meal-card active"
// // //                     : "meal-card"
// // //                 }
// // //                 onClick={() => setSelectedMeal(meal)}
// // //               >

// // //                 <div className="meal-icon">
// // //                   {meal.icon}
// // //                 </div>

// // //                 <h3>
// // //                   {meal.name}
// // //                 </h3>

// // //                 <p>

// // //                   {meal.price === 0
// // //                     ? "Free"
// // //                     : `₹ ${meal.price}`}

// // //                 </p>

// // //               </div>

// // //             ))}

// // //           </div>

// // //           {/* Summary */}

// // //           <div className="meal-summary">

// // //             <h3>

// // //               Selected Meal

// // //               <span>
// // //                 {selectedMeal.name}
// // //               </span>

// // //             </h3>

// // //             <p>

// // //               Seat

// // //               <strong>
// // //                 {seat}
// // //               </strong>

// // //             </p>

// // //             <p>

// // //               Meal Price

// // //               <strong>

// // //                 {selectedMeal.price === 0
// // //                   ? "Free"
// // //                   : `₹ ${selectedMeal.price}`}

// // //               </strong>

// // //             </p>

// // //           </div>

// // //           <button
// // //             className="continue-meal-btn"
// // //             onClick={() =>
// // //               navigate("/extra-baggage", {
// // //                 state: {
// // //                   flight,
// // //                   seat,
// // //                   meal: selectedMeal,
// // //                 },
// // //               })
// // //             }
// // //           >
// // //             Continue To Extra Baggage
// // //           </button>

// // //         </div>

// // //       </section>

// // //       <Footer />

// // //     </>

// // //   );

// // // }

// // // export default MealSelection;



// // import "./MealSelection.css";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { useState } from "react";

// // import Navbar from "../../Components/Navbar/Navbar";
// // import Footer from "../../Components/Footer/Footer";

// // function MealSelection() {

// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const {
// //     flight,
// //     passenger,
// //     seat,
// //   } = location.state || {};

// //   // ==========================================
// //   // NO BOOKING
// //   // ==========================================

// //   if (!flight || !passenger) {
// //     return (
// //       <>
// //         <Navbar />

// //         <section className="meal-page">

// //           <div className="no-booking">

// //             <h2>
// //               No Booking Found ✈️
// //             </h2>

// //             <p>
// //               Please complete your passenger
// //               details before selecting a meal.
// //             </p>

// //             <button
// //               onClick={() => navigate("/")}
// //             >
// //               Back To Home
// //             </button>

// //           </div>

// //         </section>

// //         <Footer />
// //       </>
// //     );
// //   }

// //   // ==========================================
// //   // MEALS
// //   // ==========================================

// //   const meals = [

// //     {
// //       id: 1,
// //       name: "No Meal",
// //       price: 0,
// //       icon: "🥤",
// //     },

// //     {
// //       id: 2,
// //       name: "Veg Meal",
// //       price: 250,
// //       icon: "🥗",
// //     },

// //     {
// //       id: 3,
// //       name: "Non Veg Meal",
// //       price: 300,
// //       icon: "🍗",
// //     },

// //     {
// //       id: 4,
// //       name: "Jain Meal",
// //       price: 250,
// //       icon: "🥬",
// //     },

// //     {
// //       id: 5,
// //       name: "Kids Meal",
// //       price: 200,
// //       icon: "🍔",
// //     },

// //   ];

// //   const [selectedMeal, setSelectedMeal] =
// //     useState(meals[0]);

// //   // ==========================================
// //   // CONTINUE
// //   // ==========================================

// //   const handleContinue = () => {

// //     navigate("/extra-baggage", {

// //       state: {

// //         flight,

// //         passenger,

// //         seat,

// //         meal: selectedMeal,

// //       },

// //     });

// //   };

// //   // ==========================================
// //   // UI
// //   // ==========================================

// //   return (
// //     <>
// //       <Navbar />

// //       <section className="meal-page">

// //         <div className="meal-container">

// //           {/* ==================================
// //                       HEADER
// //           ================================== */}

// //           <div className="meal-header">

// //             <h2>
// //               Choose Your Meal
// //             </h2>

// //             <p>
// //               {flight.airline}
// //             </p>

// //             <h4>

// //               {flight.fromCity ||
// //                 flight.from}

// //               <span>
// //                 {" → "}
// //               </span>

// //               {flight.toCity ||
// //                 flight.to}

// //             </h4>

// //             <h5>

// //               Seat :

// //               <span>
// //                 {" "}
// //                 {seat}
// //               </span>

// //             </h5>

// //           </div>

// //           {/* ==================================
// //                     MEAL GRID
// //           ================================== */}

// //           <div className="meal-grid">

// //             {meals.map((meal) => (

// //               <div
// //                 key={meal.id}
// //                 className={
// //                   selectedMeal.id === meal.id
// //                     ? "meal-card active"
// //                     : "meal-card"
// //                 }
// //                 onClick={() =>
// //                   setSelectedMeal(meal)
// //                 }
// //               >

// //                 <div className="meal-icon">
// //                   {meal.icon}
// //                 </div>

// //                 <h3>
// //                   {meal.name}
// //                 </h3>

// //                 <p>

// //                   {meal.price === 0
// //                     ? "Free"
// //                     : `₹ ${meal.price}`}

// //                 </p>

// //               </div>

// //             ))}

// //           </div>

// //           {/* ==================================
// //                     SUMMARY
// //           ================================== */}

// //           <div className="meal-summary">

// //             <h3>

// //               Selected Meal

// //               <span>
// //                 {selectedMeal.name}
// //               </span>

// //             </h3>

// //             <p>

// //               Seat

// //               <strong>
// //                 {seat}
// //               </strong>

// //             </p>

// //             <p>

// //               Meal Price

// //               <strong>

// //                 {selectedMeal.price === 0
// //                   ? "Free"
// //                   : `₹ ${selectedMeal.price}`}

// //               </strong>

// //             </p>

// //           </div>

// //           {/* ==================================
// //                     CONTINUE
// //           ================================== */}

// //           <button
// //             className="continue-meal-btn"
// //             onClick={handleContinue}
// //           >
// //             Continue To Extra Baggage
// //           </button>

// //         </div>

// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }

// // export default MealSelection;



// import "./MealSelection.css";

// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import { useState } from "react";

// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";


// function MealSelection() {

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
//   } = location.state || {};


//   // =====================================================
//   // NO BOOKING
//   // =====================================================

//   if (!flight || !passenger) {

//     return (
//       <>
//         <Navbar />

//         <section className="meal-page">

//           <div className="no-booking">

//             <h2>
//               No Booking Found ✈️
//             </h2>

//             <p>
//               Please complete your passenger
//               details before selecting a meal.
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
//   // SEATS
//   // =====================================================

//   const selectedSeats =
//     Array.isArray(seats)
//       ? seats
//       : seat
//       ? [seat]
//       : [];


//   // =====================================================
//   // MEAL PRICE
//   // =====================================================

//   const adultMealPrice =
//     Number(
//       flight?.adultMealPrice
//     ) || 0;


//   const childMealPrice =
//     Number(
//       flight?.childMealPrice
//     ) || 0;


//   const infantMealPrice =
//     Number(
//       flight?.infantMealPrice
//     ) || 0;


//   // =====================================================
//   // MEALS
//   // =====================================================

//   const meals = [

//     {
//       id: 1,
//       name: "No Meal",
//       price: 0,
//       icon: "🥤",
//       type: "all",
//     },

//     {
//       id: 2,
//       name: "Veg Meal",
//       price:
//         adultMealPrice > 0
//           ? adultMealPrice
//           : 250,
//       icon: "🥗",
//       type: "adult",
//     },

//     {
//       id: 3,
//       name: "Non Veg Meal",
//       price:
//         adultMealPrice > 0
//           ? adultMealPrice
//           : 300,
//       icon: "🍗",
//       type: "adult",
//     },

//     {
//       id: 4,
//       name: "Jain Meal",
//       price:
//         adultMealPrice > 0
//           ? adultMealPrice
//           : 250,
//       icon: "🥬",
//       type: "adult",
//     },

//     {
//       id: 5,
//       name: "Kids Meal",
//       price:
//         childMealPrice > 0
//           ? childMealPrice
//           : 200,
//       icon: "🍔",
//       type: "child",
//     },

//   ];


//   // =====================================================
//   // DEFAULT MEAL
//   // =====================================================

//   const [selectedMeals, setSelectedMeals] =
//     useState(
//       Array.from(
//         {
//           length:
//             totalPassengers,
//         },
//         () => meals[0]
//       )
//     );


//   // =====================================================
//   // SELECT MEAL
//   // =====================================================

//   const handleMealSelect = (
//     passengerIndex,
//     meal
//   ) => {

//     setSelectedMeals(
//       (previous) => {

//         const updated =
//           [...previous];

//         updated[
//           passengerIndex
//         ] = meal;

//         return updated;

//       }
//     );

//   };


//   // =====================================================
//   // GET PASSENGER TYPE
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
//   // GET MEALS FOR PASSENGER
//   // =====================================================

//   const getAvailableMeals =
//     (type) => {

//       if (
//         type === "Child"
//       ) {

//         return meals.filter(
//           (meal) =>
//             meal.type === "all" ||
//             meal.type === "child"
//         );

//       }


//       if (
//         type === "Infant"
//       ) {

//         return meals.filter(
//           (meal) =>
//             meal.type === "all"
//         );

//       }


//       return meals;

//     };


//   // =====================================================
//   // TOTAL MEAL PRICE
//   // =====================================================

//   const mealTotal =
//     selectedMeals.reduce(
//       (
//         total,
//         meal
//       ) =>
//         total +
//         Number(
//           meal?.price || 0
//         ),
//       0
//     );


//   // =====================================================
//   // PASSENGER MEAL BREAKDOWN
//   // =====================================================

//   const adultMealTotal =
//     selectedMeals
//       .slice(
//         0,
//         adultCount
//       )
//       .reduce(
//         (
//           total,
//           meal
//         ) =>
//           total +
//           Number(
//             meal?.price || 0
//           ),
//         0
//       );


//   const childMealTotal =
//     selectedMeals
//       .slice(
//         adultCount,
//         adultCount +
//           childCount
//       )
//       .reduce(
//         (
//           total,
//           meal
//         ) =>
//           total +
//           Number(
//             meal?.price || 0
//           ),
//         0
//       );


//   const infantMealTotal =
//     selectedMeals
//       .slice(
//         adultCount +
//           childCount
//       )
//       .reduce(
//         (
//           total,
//           meal
//         ) =>
//           total +
//           Number(
//             meal?.price || 0
//           ),
//         0
//       );


//   // =====================================================
//   // CONTINUE
//   // =====================================================

//   const handleContinue =
//     () => {

//       // -----------------------------------------------
//       // Make sure every passenger has a meal
//       // -----------------------------------------------

//       if (
//         selectedMeals.length !==
//         totalPassengers
//       ) {

//         alert(
//           "Please select meal for all passengers."
//         );

//         return;

//       }


//       // -----------------------------------------------
//       // UPDATED PRICING
//       // -----------------------------------------------

//       const updatedPricing = {

//         ...pricing,

//         // Ticket
//         passengerFareTotal:
//           Number(
//             pricing?.passengerFareTotal ||
//               0
//           ),

//         // Seat
//         totalSeatPrice:
//           Number(
//             pricing?.totalSeatPrice ||
//               0
//           ),

//         adultSeatTotal:
//           Number(
//             pricing?.adultSeatTotal ||
//               0
//           ),

//         childSeatTotal:
//           Number(
//             pricing?.childSeatTotal ||
//               0
//           ),

//         infantSeatTotal:
//           Number(
//             pricing?.infantSeatTotal ||
//               0
//           ),

//         // Meal
//         adultMealPrice:
//           adultMealPrice,

//         childMealPrice:
//           childMealPrice,

//         infantMealPrice:
//           infantMealPrice,

//         adultMealTotal:
//           adultMealTotal,

//         childMealTotal:
//           childMealTotal,

//         infantMealTotal:
//           infantMealTotal,

//         mealTotal:
//           mealTotal,

//       };


//       // -----------------------------------------------
//       // GO TO BAGGAGE
//       // -----------------------------------------------

//       navigate(
//         "/extra-baggage",
//         {
//           state: {

//             flight,

//             passenger,

//             travellers,

//             pricing:
//               updatedPricing,

//             seats:
//               selectedSeats,

//             seat:
//               selectedSeats[0] || "",

//             meals:
//               selectedMeals,

//             // Backward compatibility
//             meal:
//               selectedMeals[0] ||
//               meals[0],

//           },
//         }
//       );

//     };


//   // =====================================================
//   // UI
//   // =====================================================

//   return (
//     <>
//       <Navbar />


//       <section className="meal-page">

//         <div className="meal-container">


//           {/* =================================================
//               HEADER
//           ================================================= */}

//           <div className="meal-header">

//             <h2>
//               Choose Your Meals
//             </h2>

//             <p>
//               {flight.airline}
//             </p>

//             <h4>

//               {flight.fromCity ||
//                 flight.from}

//               <span>
//                 {" → "}
//               </span>

//               {flight.toCity ||
//                 flight.to}

//             </h4>


//             {/* PASSENGER COUNT */}

//             <div
//               style={{
//                 display:
//                   "flex",
//                 justifyContent:
//                   "center",
//                 gap:
//                   "10px",
//                 flexWrap:
//                   "wrap",
//                 marginTop:
//                   "10px",
//               }}
//             >

//               <span>
//                 👤 {adultCount} Adult
//                 {adultCount >
//                 1
//                   ? "s"
//                   : ""}
//               </span>


//               {childCount >
//                 0 && (

//                 <span>
//                   🧒 {childCount} Child
//                   {childCount >
//                   1
//                     ? "ren"
//                     : ""}
//                 </span>

//               )}


//               {infantCount >
//                 0 && (

//                 <span>
//                   👶 {infantCount} Infant
//                   {infantCount >
//                   1
//                     ? "s"
//                     : ""}
//                 </span>

//               )}

//             </div>


//             {/* SELECTED SEATS */}

//             <h5>

//               Seats:

//               <span>
//                 {" "}
//                 {selectedSeats.length
//                   ? selectedSeats.join(
//                       ", "
//                     )
//                   : "None"}
//               </span>

//             </h5>

//           </div>


//           {/* =================================================
//               PASSENGER MEAL SELECTION
//           ================================================= */}

//           <div className="passenger-meal-list">

//             {Array.from(
//               {
//                 length:
//                   totalPassengers,
//               }
//             ).map(
//               (
//                 _,
//                 index
//               ) => {

//                 const type =
//                   getPassengerType(
//                     index
//                   );


//                 const availableMeals =
//                   getAvailableMeals(
//                     type
//                   );


//                 const selectedMeal =
//                   selectedMeals[
//                     index
//                   ] ||
//                   meals[0];


//                 return (

//                   <div
//                     key={index}
//                     className="passenger-meal-section"
//                     style={{
//                       marginBottom:
//                         "30px",
//                       padding:
//                         "20px",
//                       border:
//                         "1px solid #e5e7eb",
//                       borderRadius:
//                         "14px",
//                       background:
//                         "#ffffff",
//                     }}
//                   >

//                     <div
//                       style={{
//                         display:
//                           "flex",
//                         justifyContent:
//                           "space-between",
//                         alignItems:
//                           "center",
//                         marginBottom:
//                           "15px",
//                       }}
//                     >

//                       <h3>
//                         Passenger{" "}
//                         {index + 1}
//                       </h3>


//                       <span
//                         style={{
//                           padding:
//                             "5px 12px",
//                           borderRadius:
//                             "20px",
//                           background:
//                             "#eff6ff",
//                           color:
//                             "#2563eb",
//                           fontSize:
//                             "13px",
//                           fontWeight:
//                             "600",
//                         }}
//                       >
//                         {type}
//                       </span>

//                     </div>


//                     {/* MEAL GRID */}

//                     <div className="meal-grid">

//                       {availableMeals.map(
//                         (
//                           meal
//                         ) => (

//                           <div
//                             key={
//                               meal.id
//                             }
//                             className={
//                               selectedMeal.id ===
//                               meal.id
//                                 ? "meal-card active"
//                                 : "meal-card"
//                             }
//                             onClick={() =>
//                               handleMealSelect(
//                                 index,
//                                 meal
//                               )
//                             }
//                           >

//                             <div className="meal-icon">
//                               {
//                                 meal.icon
//                               }
//                             </div>


//                             <h3>
//                               {
//                                 meal.name
//                               }
//                             </h3>


//                             <p>

//                               {meal.price ===
//                               0
//                                 ? "Free"
//                                 : `₹ ${meal.price}`}

//                             </p>

//                           </div>

//                         )
//                       )}

//                     </div>


//                     {/* SELECTED */}

//                     <div
//                       style={{
//                         marginTop:
//                           "15px",
//                         display:
//                           "flex",
//                         justifyContent:
//                           "space-between",
//                         alignItems:
//                           "center",
//                         padding:
//                           "10px 12px",
//                         background:
//                           "#f8fafc",
//                         borderRadius:
//                           "8px",
//                       }}
//                     >

//                       <span>
//                         Selected:{" "}
//                         <strong>
//                           {
//                             selectedMeal.name
//                           }
//                         </strong>
//                       </span>


//                       <strong>
//                         {selectedMeal.price ===
//                         0
//                           ? "Free"
//                           : `₹ ${selectedMeal.price}`}
//                       </strong>

//                     </div>

//                   </div>

//                 );

//               }
//             )}

//           </div>


//           {/* =================================================
//               SUMMARY
//           ================================================= */}

//           <div className="meal-summary">

//             <h3>
//               Meal Summary
//             </h3>


//             <p>

//               Adults ({adultCount})

//               <strong>
//                 ₹{" "}
//                 {adultMealTotal.toLocaleString(
//                   "en-IN"
//                 )}
//               </strong>

//             </p>


//             {childCount >
//               0 && (

//               <p>

//                 Children ({childCount})

//                 <strong>
//                   ₹{" "}
//                   {childMealTotal.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>

//               </p>

//             )}


//             {infantCount >
//               0 && (

//               <p>

//                 Infants ({infantCount})

//                 <strong>
//                   ₹{" "}
//                   {infantMealTotal.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>

//               </p>

//             )}


//             <p>

//               Total Meal Price

//               <strong>
//                 ₹{" "}
//                 {mealTotal.toLocaleString(
//                   "en-IN"
//                 )}
//               </strong>

//             </p>

//           </div>


//           {/* =================================================
//               CONTINUE
//           ================================================= */}

//           <button
//             className="continue-meal-btn"
//             onClick={
//               handleContinue
//             }
//           >
//             Continue To Extra Baggage
//           </button>

//         </div>

//       </section>


//       <Footer />

//     </>
//   );

// }


// export default MealSelection;


import "./MealSelection.css";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


function MealSelection() {

  const navigate = useNavigate();
  const location = useLocation();


  // =====================================================
  // BOOKING DATA
  // =====================================================

  const {
    flight,

    passengers,

    passenger,

    travellers,

    pricing,

    seats,

    seat,

    seatAssignments,

  } = location.state || {};


  // =====================================================
  // PASSENGER LIST
  // =====================================================

  const passengerList =
    Array.isArray(passengers) &&
    passengers.length > 0
      ? passengers
      : passenger
      ? [passenger]
      : [];


  // =====================================================
  // NO BOOKING
  // =====================================================

  if (
    !flight ||
    passengerList.length === 0
  ) {

    return (
      <>
        <Navbar />

        <section className="meal-page">

          <div className="no-booking">

            <h2>
              No Booking Found ✈️
            </h2>

            <p>
              Please complete passenger
              details before selecting a meal.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate("/booking")
              }
            >
              Back To Booking
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
    passengerList.filter(
      (item) =>
        (item.type || "Adult") ===
        "Adult"
    ).length;


  const childCount =
    passengerList.filter(
      (item) =>
        item.type ===
        "Child"
    ).length;


  const infantCount =
    passengerList.filter(
      (item) =>
        item.type ===
        "Infant"
    ).length;


  const totalPassengers =
    passengerList.length;


  // =====================================================
  // SELECTED SEATS
  // =====================================================

  const selectedSeats =
    Array.isArray(seats)
      ? seats
      : seat
      ? [seat]
      : [];


  // =====================================================
  // MEAL PRICES FROM ADMIN FLIGHT
  // =====================================================

  const adultMealPrice =
    Number(
      flight?.adultMealPrice
    ) || 0;


  const childMealPrice =
    Number(
      flight?.childMealPrice
    ) || 0;


  const infantMealPrice =
    Number(
      flight?.infantMealPrice
    ) || 0;


  // =====================================================
  // MEALS
  // =====================================================

  const meals = [

    {
      id: "no-meal",

      name: "No Meal",

      price: 0,

      icon: "🥤",

      type: "all",
    },


    {
      id: "veg",

      name: "Veg Meal",

      price:
        adultMealPrice > 0
          ? adultMealPrice
          : 250,

      icon: "🥗",

      type: "adult",
    },


    {
      id: "non-veg",

      name: "Non Veg Meal",

      price:
        adultMealPrice > 0
          ? adultMealPrice
          : 300,

      icon: "🍗",

      type: "adult",
    },


    {
      id: "jain",

      name: "Jain Meal",

      price:
        adultMealPrice > 0
          ? adultMealPrice
          : 250,

      icon: "🥬",

      type: "adult",
    },


    {
      id: "kids",

      name: "Kids Meal",

      price:
        childMealPrice > 0
          ? childMealPrice
          : 200,

      icon: "🍔",

      type: "child",
    },

  ];


  // =====================================================
  // DEFAULT MEALS
  // =====================================================

  const [
    selectedMeals,
    setSelectedMeals,
  ] = useState(() =>
    Array.from(
      {
        length:
          totalPassengers,
      },
      () =>
        meals[0]
    )
  );


  // =====================================================
  // GET PASSENGER TYPE
  // =====================================================

  const getPassengerType =
    (index) => {

      return (
        passengerList[index]
          ?.type ||
        "Adult"
      );

    };


  // =====================================================
  // GET AVAILABLE MEALS
  // =====================================================

  const getAvailableMeals =
    (type) => {

      // -----------------------------------------------
      // INFANT
      // -----------------------------------------------

      if (
        type === "Infant"
      ) {

        return meals.filter(
          (meal) =>
            meal.type ===
            "all"
        );

      }


      // -----------------------------------------------
      // CHILD
      // -----------------------------------------------

      if (
        type === "Child"
      ) {

        return meals.filter(
          (meal) =>
            meal.type === "all" ||
            meal.type === "child"
        );

      }


      // -----------------------------------------------
      // ADULT
      // -----------------------------------------------

      return meals.filter(
        (meal) =>
          meal.type === "all" ||
          meal.type === "adult"
      );

    };


  // =====================================================
  // SELECT MEAL
  // =====================================================

  const handleMealSelect = (
    passengerIndex,
    meal
  ) => {

    setSelectedMeals(
      (previous) => {

        const updated = [
          ...previous,
        ];


        updated[
          passengerIndex
        ] = meal;


        return updated;

      }
    );

  };


  // =====================================================
  // MEAL PRICE BASED ON PASSENGER TYPE
  // =====================================================

  const getActualMealPrice = (
    passengerType,
    meal
  ) => {

    if (
      !meal ||
      meal.name ===
        "No Meal"
    ) {

      return 0;

    }


    if (
      passengerType ===
      "Child"
    ) {

      return childMealPrice ||
        meal.price;

    }


    if (
      passengerType ===
      "Infant"
    ) {

      return infantMealPrice;

    }


    return adultMealPrice ||
      meal.price;

  };


  // =====================================================
  // MEAL ASSIGNMENTS
  // =====================================================

  const mealAssignments =
    passengerList.map(
      (
        passengerItem,
        index
      ) => {

        const selectedMeal =
          selectedMeals[index] ||
          meals[0];


        const passengerType =
          getPassengerType(
            index
          );


        const actualPrice =
          getActualMealPrice(
            passengerType,
            selectedMeal
          );


        return {

          passengerId:
            passengerItem?._id ||
            null,

          passengerName:
            `${passengerItem?.firstName || ""} ${
              passengerItem?.lastName || ""
            }`.trim(),

          passengerType,

          name:
            selectedMeal.name,

          price:
            actualPrice,

          icon:
            selectedMeal.icon,

        };

      }
    );


  // =====================================================
  // TOTAL MEAL PRICE
  // =====================================================

  const mealTotal =
    mealAssignments.reduce(
      (
        total,
        item
      ) =>
        total +
        Number(
          item.price || 0
        ),
      0
    );


  // =====================================================
  // ADULT MEAL TOTAL
  // =====================================================

  const adultMealTotal =
    mealAssignments
      .filter(
        (item) =>
          item.passengerType ===
          "Adult"
      )
      .reduce(
        (
          total,
          item
        ) =>
          total +
          Number(
            item.price || 0
          ),
        0
      );


  // =====================================================
  // CHILD MEAL TOTAL
  // =====================================================

  const childMealTotal =
    mealAssignments
      .filter(
        (item) =>
          item.passengerType ===
          "Child"
      )
      .reduce(
        (
          total,
          item
        ) =>
          total +
          Number(
            item.price || 0
          ),
        0
      );


  // =====================================================
  // INFANT MEAL TOTAL
  // =====================================================

  const infantMealTotal =
    mealAssignments
      .filter(
        (item) =>
          item.passengerType ===
          "Infant"
      )
      .reduce(
        (
          total,
          item
        ) =>
          total +
          Number(
            item.price || 0
          ),
        0
      );


  // =====================================================
  // CONTINUE
  // =====================================================

  const handleContinue =
    () => {

      // -----------------------------------------------
      // Make sure every passenger has meal
      // -----------------------------------------------

      if (
        selectedMeals.length !==
        totalPassengers
      ) {

        alert(
          "Please select meal for all passengers."
        );

        return;

      }


      // -----------------------------------------------
      // UPDATED PRICING
      // -----------------------------------------------

      const updatedPricing = {

        ...(pricing || {}),


        // Ticket

        passengerFareTotal:
          Number(
            pricing?.passengerFareTotal ||
            0
          ),


        adultFare:
          Number(
            pricing?.adultFare ||
            flight?.adultFare ||
            0
          ),


        childFare:
          Number(
            pricing?.childFare ||
            flight?.childFare ||
            0
          ),


        infantFare:
          Number(
            pricing?.infantFare ||
            flight?.infantFare ||
            0
          ),


        // Seat

        totalSeatPrice:
          Number(
            pricing?.totalSeatPrice ||
            0
          ),


        adultSeatTotal:
          Number(
            pricing?.adultSeatTotal ||
            0
          ),


        childSeatTotal:
          Number(
            pricing?.childSeatTotal ||
            0
          ),


        infantSeatTotal:
          Number(
            pricing?.infantSeatTotal ||
            0
          ),


        // Meal

        adultMealPrice:
          adultMealPrice,

        childMealPrice:
          childMealPrice,

        infantMealPrice:
          infantMealPrice,


        adultMealTotal:
          adultMealTotal,

        childMealTotal:
          childMealTotal,

        infantMealTotal:
          infantMealTotal,


        mealTotal:
          mealTotal,

      };


      // -----------------------------------------------
      // GO TO BAGGAGE
      // -----------------------------------------------

      navigate(
        "/extra-baggage",
        {
          state: {

            // Flight

            flight,


            // Multiple passengers

            passengers:
              passengerList,


            // Backward compatibility

            passenger:
              passengerList[0],


            // Traveller counts

            travellers,


            // Pricing

            pricing:
              updatedPricing,


            // Seats

            seats:
              selectedSeats,


            // Seat assignments

            seatAssignments:
              seatAssignments ||
              selectedSeats.map(
                (
                  selectedSeat,
                  index
                ) => ({

                  passengerId:
                    passengerList[index]
                      ?._id ||
                    null,

                  passengerName:
                    `${passengerList[index]?.firstName || ""} ${
                      passengerList[index]?.lastName || ""
                    }`.trim(),

                  passengerType:
                    getPassengerType(
                      index
                    ),

                  seatNumber:
                    selectedSeat,

                })
              ),


            // Backward compatibility

            seat:
              selectedSeats[0] ||
              "",


            // Multiple meals

            meals:
              mealAssignments,


            // IMPORTANT

            mealAssignments:
              mealAssignments,


            // Backward compatibility

            meal:
              mealAssignments[0] ||
              {
                name:
                  "No Meal",

                price:
                  0,
              },

          },
        }
      );

    };


  // =====================================================
  // UI
  // =====================================================

  return (
    <>

      <Navbar />


      <section className="meal-page">

        <div className="meal-container">


          {/* =================================================
                      HEADER
          ================================================= */}

          <div className="meal-header">

            <h2>
              Choose Your Meals
            </h2>


            <p>
              {flight.airline}
            </p>


            <h4>

              {flight.fromCity ||
                flight.from}

              <span>
                {" → "}
              </span>

              {flight.toCity ||
                flight.to}

            </h4>


            {/* PASSENGER COUNT */}

            <div
              style={{
                display:
                  "flex",

                justifyContent:
                  "center",

                gap:
                  "10px",

                flexWrap:
                  "wrap",

                marginTop:
                  "10px",
              }}
            >

              <span>

                👤 {adultCount} Adult
                {adultCount > 1
                  ? "s"
                  : ""}

              </span>


              {childCount > 0 && (

                <span>

                  🧒 {childCount} Child
                  {childCount > 1
                    ? "ren"
                    : ""}

                </span>

              )}


              {infantCount > 0 && (

                <span>

                  👶 {infantCount} Infant
                  {infantCount > 1
                    ? "s"
                    : ""}

                </span>

              )}

            </div>


            {/* SELECTED SEATS */}

            <h5>

              Seats:

              <span>
                {" "}
                {selectedSeats.length
                  ? selectedSeats.join(
                      ", "
                    )
                  : "None"}
              </span>

            </h5>

          </div>


          {/* =================================================
                  PASSENGER MEAL SELECTION
          ================================================= */}

          <div className="passenger-meal-list">

            {passengerList.map(
              (
                passengerItem,
                index
              ) => {

                const type =
                  getPassengerType(
                    index
                  );


                const availableMeals =
                  getAvailableMeals(
                    type
                  );


                const selectedMeal =
                  selectedMeals[
                    index
                  ] ||
                  meals[0];


                return (

                  <div
                    key={index}
                    className="passenger-meal-section"
                    style={{
                      marginBottom:
                        "30px",

                      padding:
                        "20px",

                      border:
                        "1px solid #e5e7eb",

                      borderRadius:
                        "14px",

                      background:
                        "#ffffff",

                      boxShadow:
                        "0 5px 20px rgba(0,0,0,0.04)",
                    }}
                  >

                    {/* PASSENGER HEADER */}

                    <div
                      style={{
                        display:
                          "flex",

                        justifyContent:
                          "space-between",

                        alignItems:
                          "center",

                        marginBottom:
                          "15px",

                        gap:
                          "10px",

                        flexWrap:
                          "wrap",
                      }}
                    >

                      <div>

                        <h3
                          style={{
                            margin:
                              "0 0 5px",
                          }}
                        >

                          {type}{" "}

                          {(() => {

                            const count =
                              passengerList
                                .slice(
                                  0,
                                  index + 1
                                )
                                .filter(
                                  (item) =>
                                    (
                                      item.type ||
                                      "Adult"
                                    ) ===
                                    type
                                ).length;

                            return count;

                          })()}

                        </h3>


                        <p
                          style={{
                            margin:
                              "0",

                            color:
                              "#64748b",

                            fontSize:
                              "14px",
                          }}
                        >

                          {passengerItem.firstName ||
                            "Passenger"}

                          {" "}

                          {passengerItem.lastName ||
                            ""}

                        </p>

                      </div>


                      <span
                        style={{
                          padding:
                            "6px 12px",

                          borderRadius:
                            "20px",

                          background:
                            type ===
                            "Adult"
                              ? "#e0f2fe"
                              : type ===
                                "Child"
                              ? "#dcfce7"
                              : "#fef3c7",

                          color:
                            "#334155",

                          fontSize:
                            "13px",

                          fontWeight:
                            "600",
                        }}
                      >

                        {type}

                      </span>

                    </div>


                    {/* MEAL GRID */}

                    <div className="meal-grid">

                      {availableMeals.map(
                        (
                          meal
                        ) => {

                          const actualPrice =
                            getActualMealPrice(
                              type,
                              meal
                            );


                          return (

                            <div
                              key={
                                meal.id
                              }

                              className={
                                selectedMeal.id ===
                                meal.id
                                  ? "meal-card active"
                                  : "meal-card"
                              }

                              onClick={() =>
                                handleMealSelect(
                                  index,
                                  {
                                    ...meal,
                                    price:
                                      actualPrice,
                                  }
                                )
                              }
                            >

                              <div className="meal-icon">

                                {
                                  meal.icon
                                }

                              </div>


                              <h3>

                                {
                                  meal.name
                                }

                              </h3>


                              <p>

                                {actualPrice ===
                                0
                                  ? "Free"
                                  : `₹ ${actualPrice}`}

                              </p>

                            </div>

                          );

                        }
                      )}

                    </div>


                    {/* SELECTED MEAL */}

                    <div
                      style={{
                        marginTop:
                          "15px",

                        display:
                          "flex",

                        justifyContent:
                          "space-between",

                        alignItems:
                          "center",

                        padding:
                          "12px",

                        background:
                          "#f8fafc",

                        borderRadius:
                          "8px",

                        gap:
                          "10px",

                        flexWrap:
                          "wrap",
                      }}
                    >

                      <span>

                        Selected:

                        {" "}

                        <strong>

                          {
                            selectedMeal.name
                          }

                        </strong>

                      </span>


                      <strong>

                        {getActualMealPrice(
                          type,
                          selectedMeal
                        ) === 0
                          ? "Free"
                          : `₹ ${getActualMealPrice(
                              type,
                              selectedMeal
                            )}`}

                      </strong>

                    </div>

                  </div>

                );

              }
            )}

          </div>


          {/* =================================================
                      SUMMARY
          ================================================= */}

          <div className="meal-summary">

            <h3>
              Meal Summary
            </h3>


            <p>

              Adults ({adultCount})

              <strong>

                ₹{" "}

                {adultMealTotal.toLocaleString(
                  "en-IN"
                )}

              </strong>

            </p>


            {childCount > 0 && (

              <p>

                Children ({childCount})

                <strong>

                  ₹{" "}

                  {childMealTotal.toLocaleString(
                    "en-IN"
                  )}

                </strong>

              </p>

            )}


            {infantCount > 0 && (

              <p>

                Infants ({infantCount})

                <strong>

                  ₹{" "}

                  {infantMealTotal.toLocaleString(
                    "en-IN"
                  )}

                </strong>

              </p>

            )}


            <p>

              Total Meal Price

              <strong>

                ₹{" "}

                {mealTotal.toLocaleString(
                  "en-IN"
                )}

              </strong>

            </p>

          </div>


          {/* =================================================
                        CONTINUE
          ================================================= */}

          <button
            type="button"
            className="continue-meal-btn"
            onClick={
              handleContinue
            }
          >

            Continue To Extra Baggage

          </button>

        </div>

      </section>


      <Footer />

    </>
  );

}


export default MealSelection;