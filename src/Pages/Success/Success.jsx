// import "./Success.css";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaCheckCircle, FaDownload, FaHome } from "react-icons/fa";

// function Success() {

//   const navigate = useNavigate();
//   const location = useLocation();

//   const { flight, total } = location.state || {};

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

//   const bookingId =
//     "ST" + Math.floor(Math.random() * 900000 + 100000);

//   const pnr =
//     Math.random().toString(36).substring(2, 8).toUpperCase();

//   return (

//     <section className="success-page">

//       <div className="success-card">

//         <FaCheckCircle className="success-icon" />

//         <h1>Booking Successful!</h1>

//         <p>
//           Your flight has been booked successfully.
//         </p>

//         <div className="booking-details">

//           <div className="detail-row">
//             <span>Booking ID</span>
//             <strong>{bookingId}</strong>
//           </div>

//           <div className="detail-row">
//             <span>PNR</span>
//             <strong>{pnr}</strong>
//           </div>

//           <div className="detail-row">
//             <span>Airline</span>
//             <strong>{flight.airline}</strong>
//           </div>

//           <div className="detail-row">
//             <span>Flight</span>
//             <strong>{flight.flightNo}</strong>
//           </div>

//           <div className="detail-row">
//             <span>Route</span>
//             <strong>
//               {flight.from} → {flight.to}
//             </strong>
//           </div>

//           <div className="detail-row">
//             <span>Departure</span>
//             <strong>{flight.departure}</strong>
//           </div>

//           <div className="detail-row">
//             <span>Arrival</span>
//             <strong>{flight.arrival}</strong>
//           </div>

//           <div className="detail-row">
//             <span>Total Paid</span>
//             <strong>₹ {total}</strong>
//           </div>

//         </div>

//         <div className="success-buttons">

//           <button className="download-btn">
//             <FaDownload />
//             Download Ticket
//           </button>

//           <button
//             className="home-btn"
//             onClick={() => navigate("/")}
//           >
//             <FaHome />
//             Back To Home
//           </button>

//         </div>

//       </div>

//     </section>

//   );
// }

// export default Success;


import "./Success.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaDownload, FaHome } from "react-icons/fa";

function Success() {

  const navigate = useNavigate();
  const location = useLocation();

  const {
    flight,
    seat,
    meal,
    baggage,
    total,
  } = location.state || {};

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

  const bookingId =
    "ST" + Math.floor(Math.random() * 900000 + 100000);

  const pnr =
    Math.random().toString(36).substring(2, 8).toUpperCase();

  return (

    <section className="success-page">

      <div className="success-card">

        <FaCheckCircle className="success-icon" />

        <h1>Booking Successful!</h1>

        <p>
          Your flight has been booked successfully.
        </p>

        <div className="booking-details">

          <div className="detail-row">
            <span>Booking ID</span>
            <strong>{bookingId}</strong>
          </div>

          <div className="detail-row">
            <span>PNR</span>
            <strong>{pnr}</strong>
          </div>

          <div className="detail-row">
            <span>Airline</span>
            <strong>{flight.airline}</strong>
          </div>

          <div className="detail-row">
            <span>Flight</span>
            <strong>{flight.flightNo}</strong>
          </div>

          <div className="detail-row">
            <span>Route</span>
            <strong>
              {flight.from} → {flight.to}
            </strong>
          </div>

          <div className="detail-row">
            <span>Departure</span>
            <strong>{flight.departure}</strong>
          </div>

          <div className="detail-row">
            <span>Arrival</span>
            <strong>{flight.arrival}</strong>
          </div>

          <div className="detail-row">
            <span>Seat</span>
            <strong>{seat || "Not Selected"}</strong>
          </div>

          <div className="detail-row">
            <span>Meal</span>
            <strong>{meal?.name || "No Meal"}</strong>
          </div>

          <div className="detail-row">
            <span>Baggage</span>
            <strong>{baggage?.weight || "15 KG Included"}</strong>
          </div>

          <div className="detail-row">
            <span>Total Paid</span>
            <strong>₹ {total}</strong>
          </div>

        </div>

        <div className="success-buttons">

          <button className="download-btn">
            <FaDownload />
            Download Ticket
          </button>

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            <FaHome />
            Back To Home
          </button>

        </div>

      </div>

    </section>

  );

}

export default Success;