// import "./MealSelection.css";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";

// function MealSelection() {

//   const navigate = useNavigate();
//   const location = useLocation();

//   const { flight, seat } = location.state || {};

//   if (!flight) {
//     return (
//       <h2
//         style={{
//           textAlign: "center",
//           marginTop: "120px",
//         }}
//       >
//         No Booking Found
//       </h2>
//     );
//   }

//   const meals = [
//     {
//       id: 1,
//       name: "No Meal",
//       price: 0,
//       icon: "🥤",
//     },
//     {
//       id: 2,
//       name: "Veg Meal",
//       price: 250,
//       icon: "🥗",
//     },
//     {
//       id: 3,
//       name: "Non Veg Meal",
//       price: 300,
//       icon: "🍗",
//     },
//     {
//       id: 4,
//       name: "Jain Meal",
//       price: 250,
//       icon: "🥬",
//     },
//     {
//       id: 5,
//       name: "Kids Meal",
//       price: 200,
//       icon: "🍔",
//     },
//   ];

//   const [selectedMeal, setSelectedMeal] = useState(meals[0]);

//   return (

//     <section className="meal-page">

//       <div className="meal-container">

//         <div className="meal-header">

//           <h2>Choose Your Meal</h2>

//           <p>
//             {flight.from} → {flight.to}
//           </p>

//         </div>

//         <div className="meal-grid"></div>
//                   {meals.map((meal) => (

//             <div
//               key={meal.id}
//               className={
//                 selectedMeal.id === meal.id
//                   ? "meal-card active"
//                   : "meal-card"
//               }
//               onClick={() => setSelectedMeal(meal)}
//             >

//               <div className="meal-icon">

//                 {meal.icon}

//               </div>

//               <h3>{meal.name}</h3>

//               <p>

//                 {meal.price === 0
//                   ? "Free"
//                   : `₹ ${meal.price}`}

//               </p>

//             </div>

//           ))}

//         </div>

//         <div className="meal-summary">

//           <h3>

//             Selected Meal :

//             <span> {selectedMeal.name}</span>

//           </h3>

//           <p>

//             Price :

//             <strong>

//               {selectedMeal.price === 0
//                 ? " Free"
//                 : ` ₹ ${selectedMeal.price}`}

//             </strong>

//           </p>

//         </div>

//         <button
//           className="continue-meal-btn"
//           onClick={() =>
//             navigate("/extra-baggage", {
//               state: {
//                 flight,
//                 seat,
//                 meal: selectedMeal,
//               },
//             })
//           }
//         >
//           Continue
//         </button>

//       {/* </div> */}

//     </section>

//   );

// }

// export default MealSelection;





import "./MealSelection.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function MealSelection() {

  const navigate = useNavigate();
  const location = useLocation();

  const { flight, seat } = location.state || {};

  if (!flight) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "120px",
        }}
      >
        No Booking Found
      </h2>
    );
  }

  const meals = [
    {
      id: 1,
      name: "No Meal",
      price: 0,
      icon: "🥤",
    },
    {
      id: 2,
      name: "Veg Meal",
      price: 250,
      icon: "🥗",
    },
    {
      id: 3,
      name: "Non Veg Meal",
      price: 300,
      icon: "🍗",
    },
    {
      id: 4,
      name: "Jain Meal",
      price: 250,
      icon: "🥬",
    },
    {
      id: 5,
      name: "Kids Meal",
      price: 200,
      icon: "🍔",
    },
  ];

  const [selectedMeal, setSelectedMeal] = useState(meals[0]);

  return (

    <section className="meal-page">

      <div className="meal-container">

        <div className="meal-header">

          <h2>Choose Your Meal</h2>

          <p>
            {flight.from} → {flight.to}
          </p>

        </div>

        {/* Meal Grid */}

        <div className="meal-grid">

          {meals.map((meal) => (

            <div
              key={meal.id}
              className={
                selectedMeal.id === meal.id
                  ? "meal-card active"
                  : "meal-card"
              }
              onClick={() => setSelectedMeal(meal)}
            >

              <div className="meal-icon">

                {meal.icon}

              </div>

              <h3>{meal.name}</h3>

              <p>

                {meal.price === 0
                  ? "Free"
                  : `₹ ${meal.price}`}

              </p>

            </div>

          ))}

        </div>

        {/* Summary */}

        <div className="meal-summary">

          <h3>

            Selected Meal :

            <span>

              {selectedMeal.name}

            </span>

          </h3>

          <p>

            Price :

            <strong>

              {selectedMeal.price === 0
                ? " Free"
                : ` ₹ ${selectedMeal.price}`}

            </strong>

          </p>

        </div>

        <button
          className="continue-meal-btn"
          onClick={() =>
            navigate("/extra-baggage", {
              state: {
                flight,
                seat,
                meal: selectedMeal,
              },
            })
          }
        >
          Continue
        </button>

      </div>

    </section>

  );

}

export default MealSelection;