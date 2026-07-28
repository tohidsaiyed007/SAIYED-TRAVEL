// import "./FlightCard.css";
// import { useNavigate } from "react-router-dom";
// import { FaClock, FaSuitcase } from "react-icons/fa";

// function FlightCard({ flight }) {

//   const navigate = useNavigate();

//   const handleBooking = () => {
//     navigate("/booking", {
//       state: {
//         flight,
//       },
//     });
//   };

//   return (
//     <div className="flight-card">

//       <div className="flight-left">

//         <img
//           src={flight.logo}
//           alt={flight.airline}
//           className="airline-logo"
//         />

//         <div>

//           <h3>{flight.airline}</h3>

//           <p>{flight.flightNo}</p>

//         </div>

//       </div>

//       <div className="flight-middle">

//         <div>

//           <h2>{flight.departure}</h2>

//           <span>{flight.from}</span>

//         </div>

//         <div className="flight-info">

//           <FaClock />

//           <p>{flight.duration}</p>

//           <hr />

//           <small>{flight.stops}</small>

//         </div>

//         <div>

//           <h2>{flight.arrival}</h2>

//           <span>{flight.to}</span>

//         </div>

//       </div>

//       <div className="flight-right">

//         <span className="offer-badge">
//           Limited Offer
//         </span>

//         <h2>₹ {flight.price}</h2>

//         <p>
//           <FaSuitcase /> {flight.cabin}
//         </p>

//         <div className="flight-extra">

//           <span>🟢 Refundable</span>

//           <span>🍽️ Free Meal</span>

//           <span>🧳 20 KG Check-in</span>

//           <span>🪑 Only 5 Seats Left</span>

//         </div>

//         <button
//           onClick={handleBooking}
//         >
//           Book Now
//         </button>

//       </div>

//     </div>
//   );
// }

// export default FlightCard;



import "./FlightCard.css";
import { useNavigate } from "react-router-dom";
import { FaClock, FaSuitcase } from "react-icons/fa";

function FlightCard({ flight }) {

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/flight-details", {
      state: {
        flight,
      },
    });
  };

  const handleBooking = () => {
    navigate("/booking", {
      state: {
        flight,
      },
    });
  };

  return (
    <div className="flight-card">

      <div className="flight-left">

        <img
          src={flight.logo}
          alt={flight.airline}
          className="airline-logo"
        />

        <div>

          <h3>{flight.airline}</h3>

          <p>{flight.flightNo}</p>

        </div>

      </div>

      <div className="flight-middle">

        <div>

          <h2>{flight.departure}</h2>

          <span>{flight.from}</span>

        </div>

        <div className="flight-info">

          <FaClock />

          <p>{flight.duration}</p>

          <hr />

          <small>{flight.stops}</small>

        </div>

        <div>

          <h2>{flight.arrival}</h2>

          <span>{flight.to}</span>

        </div>

      </div>

      <div className="flight-right">

        <span className="offer-badge">
          Limited Offer
        </span>

        <h2>₹ {flight.price}</h2>

        <p>
          <FaSuitcase /> {flight.cabin}
        </p>

        <div className="flight-extra">

          <span>🟢 Refundable</span>

          <span>🍽️ Free Meal</span>

          <span>🧳 20 KG Check-in</span>

          <span>🪑 Only 5 Seats Left</span>

        </div>

        <div className="flight-buttons">

          <button
            className="details-btn"
            onClick={handleViewDetails}
          >
            View Details
          </button>

          <button
            className="book-btn"
            onClick={handleBooking}
          >
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default FlightCard;