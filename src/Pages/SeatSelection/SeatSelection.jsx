// import "./SeatSelection.css";
// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function SeatSelection() {

//   const navigate = useNavigate();
//   const location = useLocation();

//   const { flight } = location.state || {};

//   if (!flight) {
//     return (
//       <h2
//         style={{
//           textAlign: "center",
//           marginTop: "120px",
//         }}
//       >
//         No Flight Selected
//       </h2>
//     );
//   }

//   const bookedSeats = ["1C", "2D", "3A", "4C"];

//   const [selectedSeat, setSelectedSeat] = useState("");

//   const rows = [1,2,3,4,5,6,7,8];
//   const cols = ["A","B","C","D"];

//   return (

//     <section className="seat-page">

//       <div className="seat-container">

//         {/* Flight Info */}

//         <div className="seat-header">

//           <h2>
//             {flight.airline}
//           </h2>

//           <p>
//             {flight.from} → {flight.to}
//           </p>

//           <span>
//             {flight.departure} - {flight.arrival}
//           </span>

//         </div>

//         {/* Seat Map */}

//         <div className="seat-map">

//           <h3>Select Your Seat</h3>

//           <div className="seat-grid"></div>

//                     {rows.map((row) => (

//             cols.map((col) => {

//               const seat = `${row}${col}`;

//               const booked = bookedSeats.includes(seat);

//               const selected = selectedSeat === seat;

//               return (

//                 <button
//                   key={seat}
//                   disabled={booked}
//                   className={
//                     booked
//                       ? "seat booked"
//                       : selected
//                       ? "seat selected"
//                       : "seat available"
//                   }
//                   onClick={() => setSelectedSeat(seat)}
//                 >
//                   {seat}
//                 </button>

//               );

//             })

//           ))}

//           </div>

//         </div>

//         {/* Legend */}

//         <div className="seat-legend">

//           <div>
//             <span className="box available"></span>
//             Available
//           </div>

//           <div>
//             <span className="box booked"></span>
//             Booked
//           </div>

//           <div>
//             <span className="box selected"></span>
//             Selected
//           </div>

//         </div>

//         {/* Selected Seat */}

//         <div className="seat-summary">

//           <h3>

//             Selected Seat :

//             <span>

//               {selectedSeat || " None"}

//             </span>

//           </h3>

//           <p>

//             Seat Price :

//             <strong> ₹300</strong>

//           </p>

//         </div>

//         <button
//           className="continue-seat-btn"
//           disabled={!selectedSeat}
//           onClick={() =>
//             navigate("/payment", {
//               state: {
//                 flight,
//                 seat: selectedSeat,
//               },
//             })
//           }
//         >
//           Continue To Payment
//         </button>

//       {/* </div> */}

//     </section>

//   );

// }

// export default SeatSelection;


import "./SeatSelection.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SeatSelection() {

  const navigate = useNavigate();
  const location = useLocation();

  const { flight } = location.state || {};

  if (!flight) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "120px",
        }}
      >
        No Flight Selected
      </h2>
    );
  }

  const bookedSeats = ["1C", "2D", "3A", "4C"];

  const [selectedSeat, setSelectedSeat] = useState("");

  const rows = [1, 2, 3, 4, 5, 6, 7, 8];
  const cols = ["A", "B", "C", "D"];

  return (
    <section className="seat-page">

      <div className="seat-container">

        {/* Flight Info */}

        <div className="seat-header">

          <h2>{flight.airline}</h2>

          <p>
            {flight.from} → {flight.to}
          </p>

          <span>
            {flight.departure} - {flight.arrival}
          </span>

        </div>

        {/* Seat Map */}

        <div className="seat-map">

          <h3>Select Your Seat</h3>

          <div className="seat-grid">

            {rows.map((row) =>
              cols.map((col) => {

                const seat = `${row}${col}`;

                const booked = bookedSeats.includes(seat);

                const selected = selectedSeat === seat;

                return (
                  <button
                    key={seat}
                    disabled={booked}
                    className={
                      booked
                        ? "seat booked"
                        : selected
                        ? "seat selected"
                        : "seat available"
                    }
                    onClick={() => setSelectedSeat(seat)}
                  >
                    {seat}
                  </button>
                );

              })
            )}

          </div>

        </div>

        {/* Legend */}

        <div className="seat-legend">

          <div>
            <span className="box available"></span>
            Available
          </div>

          <div>
            <span className="box booked"></span>
            Booked
          </div>

          <div>
            <span className="box selected"></span>
            Selected
          </div>

        </div>

        {/* Summary */}

        <div className="seat-summary">

          <h3>

            Selected Seat :

            <span>{selectedSeat || " None"}</span>

          </h3>

          <p>

            Seat Price :

            <strong> ₹300</strong>

          </p>

        </div>

        <button
          className="continue-seat-btn"
          disabled={!selectedSeat}
          onClick={() =>
            navigate("/meal-selection", {
              state: {
                flight,
                seat: selectedSeat,
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

export default SeatSelection;