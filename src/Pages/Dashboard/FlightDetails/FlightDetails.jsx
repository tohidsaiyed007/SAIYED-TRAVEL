// import "./FlightDetails.css";

// import {
//   FaPlane,
//   FaMapMarkerAlt,
//   FaClock,
//   FaChair,
//   FaMoneyBillWave,
//   FaTimes,
// } from "react-icons/fa";

// function FlightDetails({
//   flight,
//   closeModal,
// }) {

//   const data = flight || {
//     airline: "Emirates",
//     flightNo: "EK-501",
//     from: "Delhi",
//     to: "Dubai",
//     departure: "09:00 AM",
//     arrival: "12:10 PM",
//     duration: "3h 10m",
//     aircraft: "Boeing 777",
//     cabin: "Economy",
//     seats: 42,
//     price: "₹28,500",
//     status: "Scheduled",
//   };

//   return (

//     <div className="flight-details-overlay">

//       <div className="flight-details-modal">

//         {/* Header */}

//         <div className="flight-details-header">

//           <div className="flight-details-title">

//             <div className="flight-details-icon">
//               <FaPlane />
//             </div>

//             <div>
//               <h2>Flight Details</h2>

//               <p>
//                 {data.airline} • {data.flightNo}
//               </p>
//             </div>

//           </div>

//           <button
//             className="flight-details-close"
//             onClick={closeModal}
//           >
//             <FaTimes />
//           </button>

//         </div>

//         {/* Route */}

//         <div className="flight-route">

//           <div className="route-location">

//             <span>FROM</span>

//             <h3>
//               {data.from}
//             </h3>

//             <p>
//               <FaClock />
//               {data.departure}
//             </p>

//           </div>

//           <div className="route-line">

//             <FaPlane />

//             <span>
//               {data.duration}
//             </span>

//           </div>

//           <div className="route-location">

//             <span>TO</span>

//             <h3>
//               {data.to}
//             </h3>

//             <p>
//               <FaClock />
//               {data.arrival}
//             </p>

//           </div>

//         </div>

//         {/* Details */}

//         <div className="flight-info-grid">

//           <div className="flight-info-card">

//             <span>Airline</span>

//             <strong>
//               {data.airline}
//             </strong>

//           </div>

//           <div className="flight-info-card">

//             <span>Flight Number</span>

//             <strong>
//               {data.flightNo}
//             </strong>

//           </div>

//           <div className="flight-info-card">

//             <span>Aircraft</span>

//             <strong>
//               {data.aircraft}
//             </strong>

//           </div>

//           <div className="flight-info-card">

//             <span>Cabin</span>

//             <strong>
//               {data.cabin}
//             </strong>

//           </div>

//           <div className="flight-info-card">

//             <span>
//               <FaChair />
//               Available Seats
//             </span>

//             <strong>
//               {data.seats}
//             </strong>

//           </div>

//           <div className="flight-info-card">

//             <span>
//               <FaMoneyBillWave />
//               Ticket Price
//             </span>

//             <strong>
//               {data.price}
//             </strong>

//           </div>

//         </div>

//         {/* Footer */}

//         <div className="flight-details-footer">

//           <div>

//             <span>Status</span>

//             <strong
//               className={`details-status ${data.status.toLowerCase()}`}
//             >
//               {data.status}
//             </strong>

//           </div>

//           <button
//             className="details-close-btn"
//             onClick={closeModal}
//           >
//             Close
//           </button>

//         </div>

//       </div>

//     </div>

//   );

// }

// export default FlightDetails;








import "./FlightDetails.css";

import {
  FaPlane,
  FaClock,
  FaChair,
  FaMoneyBillWave,
  FaTimes,
  FaSuitcase,
  FaWifi,
  FaUtensils,
  FaBolt,
  FaFilm,
  FaCheckCircle,
  FaExchangeAlt,
} from "react-icons/fa";

function FlightDetails({ flight, closeModal }) {
  // ==========================================
  // DATA
  // ==========================================

  const data = flight || {};

  // ==========================================
  // AIRLINE LOGO
  // ==========================================

  const airlineLogos = {
    indigo: "/airlines/indigo.png",
    "air india": "/airlines/air-india.png",
    spicejet: "/airlines/spicejet.png",
    "air india express": "/airlines/air-india-express.png",
    emirates: "/airlines/emirates.png",
    "qatar airways": "/airlines/qatar-airways.png",
    "etihad airways": "/airlines/etihad-airways.png",
    "oman air": "/airlines/oman-air.png",
    "saudi airlines": "/airlines/saudi-airlines.png",
    "singapore airlines": "/airlines/singapore-airlines.png",
    lufthansa: "/airlines/lufthansa.png",
    "british airways": "/airlines/british-airways.png",
    "turkish airlines": "/airlines/turkish-airlines.png",
    "malaysia airlines": "/airlines/malaysia-airlines.png",
    "thai airways": "/airlines/thai-airways.png",
  };

  const airlineName = String(
    data.airline || ""
  )
    .trim()
    .toLowerCase();

  const airlineLogo =
    airlineLogos[airlineName];

  // ==========================================
  // CABINS
  // ==========================================

  const cabins = Array.isArray(data.cabins)
    ? data.cabins
    : [];

  const totalSeats = cabins.reduce(
    (total, cabin) =>
      total + Number(cabin.totalSeats || 0),
    0
  );

  const availableSeats = cabins.reduce(
    (total, cabin) =>
      total + Number(cabin.availableSeats || 0),
    0
  );

  // ==========================================
  // PRICE
  // ==========================================

  const finalPrice =
    Number(data.finalPrice || 0);

  // ==========================================
  // DATE FORMAT
  // ==========================================

  const formatDate = (date) => {
    if (!date) return "—";

    const parts = String(date).split("-");

    if (parts.length !== 3) {
      return date;
    }

    const [year, month, day] = parts;

    const dateObj = new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    );

    return dateObj.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // ==========================================
  // STATUS CLASS
  // ==========================================

  const statusClass = String(
    data.status || "Scheduled"
  )
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <div className="flight-details-overlay">

      <div className="flight-details-modal">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="flight-details-header">

          <div className="flight-details-title">

            <div className="flight-logo-box">

              {airlineLogo ? (
                <img
                  src={airlineLogo}
                  alt={`${data.airline} logo`}
                />
              ) : (
                <FaPlane />
              )}

            </div>

            <div>
              <h2>
                {data.airline || "Airline"}
              </h2>

              <p>
                {data.flightNo || "Flight Number"}
                {" • "}
                {data.flightType || "Domestic"}
              </p>
            </div>

          </div>

          <button
            className="flight-details-close"
            onClick={closeModal}
          >
            <FaTimes />
          </button>

        </div>


        {/* =====================================
            ROUTE
        ===================================== */}

        <div className="flight-route">

          {/* FROM */}

          <div className="route-location">

            <span>FROM</span>

            <h3>
              {data.fromCity || "—"}
            </h3>

            <strong>
              {data.fromCode || ""}
            </strong>

            {data.fromAirport && (
              <small>
                {data.fromAirport}
              </small>
            )}

            <b>
              {data.departureTime || "--:--"}
            </b>

            <small>
              {formatDate(data.departureDate)}
            </small>

            {data.departureTerminal && (
              <small>
                Terminal {data.departureTerminal}
              </small>
            )}

          </div>


          {/* CENTER */}

          <div className="route-line">

            <FaPlane />

            <span>
              {data.duration || "—"}
            </span>

            <small>
              {data.stops || "Non-stop"}
            </small>

          </div>


          {/* TO */}

          <div className="route-location">

            <span>TO</span>

            <h3>
              {data.toCity || "—"}
            </h3>

            <strong>
              {data.toCode || ""}
            </strong>

            {data.toAirport && (
              <small>
                {data.toAirport}
              </small>
            )}

            <b>
              {data.arrivalTime || "--:--"}
            </b>

            <small>
              {formatDate(data.arrivalDate)}
            </small>

            {data.arrivalTerminal && (
              <small>
                Terminal {data.arrivalTerminal}
              </small>
            )}

          </div>

        </div>


        {/* =====================================
            MAIN INFORMATION
        ===================================== */}

        <div className="flight-info-grid">

          <div className="flight-info-card">
            <span>Aircraft</span>
            <strong>
              {data.aircraft || "—"}
            </strong>
          </div>

          <div className="flight-info-card">
            <span>Available Seats</span>
            <strong>
              {availableSeats}
              {totalSeats > 0 &&
                ` / ${totalSeats}`}
            </strong>
          </div>

          <div className="flight-info-card">
            <span>Ticket Price</span>
            <strong className="price">
              ₹ {finalPrice.toLocaleString("en-IN")}
            </strong>
          </div>

          <div className="flight-info-card">
            <span>Cabin Baggage</span>
            <strong>
              {data.cabinBaggage || "7 KG"}
            </strong>
          </div>

          <div className="flight-info-card">
            <span>Check-in Baggage</span>
            <strong>
              {data.checkinBaggage || "15 KG"}
            </strong>
          </div>

          <div className="flight-info-card">
            <span>Extra Baggage</span>
            <strong>
              ₹{" "}
              {Number(
                data.extraBaggagePrice || 0
              ).toLocaleString("en-IN")}
            </strong>
          </div>

        </div>


        {/* =====================================
            CABINS
        ===================================== */}

        {cabins.length > 0 && (
          <div className="details-section">

            <div className="section-title">
              <FaChair />
              <h3>Cabin & Pricing</h3>
            </div>

            <div className="cabin-list">

              {cabins.map((cabin, index) => (
                <div
                  className="cabin-item"
                  key={`${cabin.name}-${index}`}
                >

                  <div>
                    <strong>
                      {cabin.name}
                    </strong>

                    <small>
                      {cabin.availableSeats || 0}
                      {" / "}
                      {cabin.totalSeats || 0}
                      {" seats"}
                    </small>
                  </div>

                  <b>
                    ₹{" "}
                    {Number(
                      cabin.price || 0
                    ).toLocaleString("en-IN")}
                  </b>

                </div>
              ))}

            </div>

          </div>
        )}


        {/* =====================================
            SERVICES
        ===================================== */}

        <div className="details-section">

          <div className="section-title">
            <FaCheckCircle />
            <h3>Services</h3>
          </div>

          <div className="service-list">

            {data.mealAvailable && (
              <span>
                <FaUtensils />
                Meal
              </span>
            )}

            {data.wifiAvailable && (
              <span>
                <FaWifi />
                Wi-Fi
              </span>
            )}

            {data.entertainmentAvailable && (
              <span>
                <FaFilm />
                Entertainment
              </span>
            )}

            {data.powerAvailable && (
              <span>
                <FaBolt />
                Power
              </span>
            )}

            {data.refundable && (
              <span>
                ✓ Refundable
              </span>
            )}

            {data.changeable && (
              <span>
                <FaExchangeAlt />
                Date Change
              </span>
            )}

            {!data.mealAvailable &&
              !data.wifiAvailable &&
              !data.entertainmentAvailable &&
              !data.powerAvailable &&
              !data.refundable &&
              !data.changeable && (
                <span>
                  Standard Services
                </span>
              )}

          </div>

        </div>


        {/* =====================================
            FARE
        ===================================== */}

        <div className="fare-row">

          <div>
            <span>Base Fare</span>
            <strong>
              ₹{" "}
              {Number(
                data.baseFare || 0
              ).toLocaleString("en-IN")}
            </strong>
          </div>

          <div>
            <span>Taxes</span>
            <strong>
              ₹{" "}
              {Number(
                data.taxes || 0
              ).toLocaleString("en-IN")}
            </strong>
          </div>

          <div>
            <span>Airport Charges</span>
            <strong>
              ₹{" "}
              {Number(
                data.airportCharges || 0
              ).toLocaleString("en-IN")}
            </strong>
          </div>

          <div className="final-fare">
            <span>Final Price</span>
            <strong>
              ₹{" "}
              {finalPrice.toLocaleString("en-IN")}
            </strong>
          </div>

        </div>


        {/* =====================================
            FOOTER
        ===================================== */}

        <div className="flight-details-footer">

          <div>

            <span>Status</span>

            <strong
              className={`details-status ${statusClass}`}
            >
              {data.status || "Scheduled"}
            </strong>

          </div>

          <button
            className="details-close-btn"
            onClick={closeModal}
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default FlightDetails;