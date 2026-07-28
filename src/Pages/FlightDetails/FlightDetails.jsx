import "./FlightDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaClock,
  FaSuitcase,
  FaUtensils,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
} from "react-icons/fa";

function FlightDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const flight = location.state?.flight;

  if (!flight) {
    return (
      <>
        <Navbar />

        <div className="flight-details-empty">
          <h2>Flight not found</h2>
          <p>Please go back and select a flight.</p>

          <button onClick={() => navigate("/flights")}>
            Back To Flights
          </button>
        </div>

        <Footer />
      </>
    );
  }

  const handleBooking = () => {
    navigate("/booking", {
      state: {
        flight,
      },
    });
  };

  return (
    <>
      <Navbar />

      <section className="flight-details-page">

        <div className="details-header">

          <img
            src={flight.logo}
            alt={flight.airline}
            className="details-logo"
          />

          <div>

            <h2>{flight.airline}</h2>

            <p>{flight.flightNo}</p>

          </div>

        </div>

        <div className="details-card">

          <div className="details-route">

            <div>

              <h1>{flight.departure}</h1>

              <p>{flight.from}</p>

            </div>

            <div className="route-center">

              <FaPlaneDeparture />

              <span>{flight.duration}</span>

              <FaArrowRight />

              <FaPlaneArrival />

            </div>

            <div>

              <h1>{flight.arrival}</h1>

              <p>{flight.to}</p>

            </div>

          </div>

          <div className="details-grid">

            <div className="info-box">

              <FaClock />

              <h4>Duration</h4>

              <p>{flight.duration}</p>

            </div>

            <div className="info-box">

              <FaSuitcase />

              <h4>Cabin</h4>

              <p>{flight.cabin}</p>

            </div>

            <div className="info-box">

              <FaUtensils />

              <h4>Meal</h4>

              <p>Free Meal Included</p>

            </div>

            <div className="info-box">

              <FaStar />

              <h4>Rating</h4>

              <p>4.8 / 5</p>

            </div>

          </div>

        </div>

        <div className="fare-card">

          <h2>Fare Details</h2>

          <div className="fare-row">
            <span>Base Fare</span>
            <span>₹ {flight.price}</span>
          </div>

          <div className="fare-row">
            <span>Taxes & Fees</span>
            <span>Included</span>
          </div>

          <div className="fare-row total">
            <span>Total Price</span>
            <span>₹ {flight.price}</span>
          </div>

        </div>

        <div className="policy-card">

          <h2>Facilities</h2>

          <ul>

            <li>
              <FaCheckCircle className="green" />
              Free Meal Included
            </li>

            <li>
              <FaCheckCircle className="green" />
              20 KG Check-in Baggage
            </li>

            <li>
              <FaCheckCircle className="green" />
              7 KG Cabin Baggage
            </li>

            <li>
              <FaCheckCircle className="green" />
              Refundable Ticket
            </li>

          </ul>

        </div>

        <div className="policy-card">

          <h2>Cancellation Policy</h2>

          <ul>

            <li>
              <FaCheckCircle className="green" />
              Cancel before 24 Hours.
            </li>

            <li>
              <FaCheckCircle className="green" />
              Partial Refund Available.
            </li>

            <li>
              <FaTimesCircle className="red" />
              No Refund after Check-in.
            </li>

          </ul>

        </div>

        <div className="book-section">

          <div>

            <h2>₹ {flight.price}</h2>

            <p>Inclusive of all taxes</p>

          </div>

          <button onClick={handleBooking}>
            Continue Booking
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default FlightDetails;