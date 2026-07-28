// // import "./ExtraBaggage.css";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { useState } from "react";

// // function ExtraBaggage() {

// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const { flight, seat, meal } = location.state || {};

// //   if (!flight) {
// //     return (
// //       <h2
// //         style={{
// //           textAlign: "center",
// //           marginTop: "120px",
// //         }}
// //       >
// //         No Booking Found
// //       </h2>
// //     );
// //   }

// //   const baggageOptions = [
// //     {
// //       id: 1,
// //       weight: "15 KG (Included)",
// //       price: 0,
// //     },
// //     {
// //       id: 2,
// //       weight: "+5 KG",
// //       price: 500,
// //     },
// //     {
// //       id: 3,
// //       weight: "+10 KG",
// //       price: 900,
// //     },
// //     {
// //       id: 4,
// //       weight: "+15 KG",
// //       price: 1200,
// //     },
// //     {
// //       id: 5,
// //       weight: "+20 KG",
// //       price: 1500,
// //     },
// //   ];

// //   const [selectedBag, setSelectedBag] = useState(
// //     baggageOptions[0]
// //   );

// //   return (

// //     <section className="baggage-page">

// //       <div className="baggage-container">

// //         <div className="baggage-header">

// //           <h2>Extra Baggage</h2>

// //           <p>
// //             {flight.from} → {flight.to}
// //           </p>

// //         </div>

// //         <div className="baggage-grid"></div>


        



// import "./ExtraBaggage.css";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";

// function ExtraBaggage() {

//   const navigate = useNavigate();
//   const location = useLocation();

//   const { flight, seat, meal } = location.state || {};

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

//   const baggageOptions = [
//     {
//       id: 1,
//       weight: "15 KG (Included)",
//       price: 0,
//     },
//     {
//       id: 2,
//       weight: "+5 KG",
//       price: 500,
//     },
//     {
//       id: 3,
//       weight: "+10 KG",
//       price: 900,
//     },
//     {
//       id: 4,
//       weight: "+15 KG",
//       price: 1200,
//     },
//     {
//       id: 5,
//       weight: "+20 KG",
//       price: 1500,
//     },
//   ];

//   const [selectedBag, setSelectedBag] = useState(
//     baggageOptions[0]
//   );

//   return (

//     <section className="baggage-page">

//       <div className="baggage-container">

//         <div className="baggage-header">

//           <h2>Extra Baggage</h2>

//           <p>
//             {flight.from} → {flight.to}
//           </p>

//         </div>

//         <div className="baggage-grid"></div>


//                   {baggageOptions.map((bag) => (

//             <div
//               key={bag.id}
//               className={
//                 selectedBag.id === bag.id
//                   ? "baggage-card active"
//                   : "baggage-card"
//               }
//               onClick={() => setSelectedBag(bag)}
//             >

//               <div className="bag-icon">
//                 🧳
//               </div>

//               <h3>{bag.weight}</h3>

//               <p>
//                 {bag.price === 0
//                   ? "Included"
//                   : `₹ ${bag.price}`}
//               </p>

//             </div>

//           ))}

//         </div>

//         {/* Summary */}

//         <div className="baggage-summary">

//           <h3>

//             Selected Baggage

//             <span>{selectedBag.weight}</span>

//           </h3>

//           <p>

//             Extra Charge

//             <strong>

//               {selectedBag.price === 0
//                 ? " Included"
//                 : ` ₹ ${selectedBag.price}`}

//             </strong>

//           </p>

//         </div>

//         <button
//           className="continue-baggage-btn"
//           onClick={() =>
//             navigate("/travel-insurance", {
//               state: {
//                 flight,
//                 seat,
//                 meal,
//                 baggage: selectedBag,
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

// export default ExtraBaggage;



import "./ExtraBaggage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function ExtraBaggage() {

  const navigate = useNavigate();
  const location = useLocation();

  const { flight, seat, meal } = location.state || {};

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

  const baggageOptions = [
    {
      id: 1,
      weight: "15 KG (Included)",
      price: 0,
    },
    {
      id: 2,
      weight: "+5 KG",
      price: 500,
    },
    {
      id: 3,
      weight: "+10 KG",
      price: 900,
    },
    {
      id: 4,
      weight: "+15 KG",
      price: 1200,
    },
    {
      id: 5,
      weight: "+20 KG",
      price: 1500,
    },
  ];

  const [selectedBag, setSelectedBag] = useState(
    baggageOptions[0]
  );

  return (

    <section className="baggage-page">

      <div className="baggage-container">

        {/* Header */}

        <div className="baggage-header">

          <h2>Extra Baggage</h2>

          <p>
            {flight.from} → {flight.to}
          </p>

        </div>

        {/* Baggage Cards */}

        <div className="baggage-grid">

          {baggageOptions.map((bag) => (

            <div
              key={bag.id}
              className={
                selectedBag.id === bag.id
                  ? "baggage-card active"
                  : "baggage-card"
              }
              onClick={() => setSelectedBag(bag)}
            >

              <div className="bag-icon">
                🧳
              </div>

              <h3>{bag.weight}</h3>

              <p>

                {bag.price === 0
                  ? "Included"
                  : `₹ ${bag.price}`}

              </p>

            </div>

          ))}

        </div>

        {/* Summary */}

        <div className="baggage-summary">

          <h3>

            Selected Baggage

            <span>

              {selectedBag.weight}

            </span>

          </h3>

          <p>

            Extra Charge

            <strong>

              {selectedBag.price === 0
                ? " Included"
                : ` ₹ ${selectedBag.price}`}

            </strong>

          </p>

        </div>

        {/* Continue */}

        <button
          className="continue-baggage-btn"
          onClick={() =>
            navigate("/payment", {
              state: {
                flight,
                seat,
                meal,
                baggage: selectedBag,
              },
            })
          }
        >
          Continue To Payment
        </button>

      </div>

    </section>

  );

}

export default ExtraBaggage;