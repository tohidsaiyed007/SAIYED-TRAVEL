import "./Offers.css";
import { FaPlaneDeparture, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Offers() {
  const navigate = useNavigate();

  return (
    <section className="offers">

      <div className="offers-main-card">

        {/* Background decoration */}
        <div className="offers-glow offers-glow-one"></div>
        <div className="offers-glow offers-glow-two"></div>

        <div className="offers-card-content">

          {/* LEFT CONTENT */}
          <div className="offers-left">

            <div className="offers-badge">
              <FaPlaneDeparture />
              SAIYED TRAVELS
            </div>

            <h2>
              Your Journey,
              <br />
              <span>Our Responsibility.</span>
            </h2>

            <p className="offers-description">
              Travel with confidence and discover a better way to fly.
              Saiyed Travels makes your flight booking simple, reliable
              and comfortable from start to finish.
            </p>

            <div className="offers-points">

              <div>
                <FaCheckCircle />
                <span>Easy & Fast Flight Booking</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Best Travel Experience</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Trusted & Reliable Service</span>
              </div>

            </div>

            <button
              className="offers-flight-btn"
              onClick={() => navigate("/flights")}
            >
              Explore Flights
              <FaArrowRight />
            </button>

          </div>


          {/* RIGHT SIDE */}
          <div className="offers-right">

            <div className="offers-circle">

              <FaPlaneDeparture />

            </div>

            <div className="offers-travel-text">
              <strong>TRAVEL</strong>
              <span>WITHOUT</span>
              <strong>LIMITS</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Offers;