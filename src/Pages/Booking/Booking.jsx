
import "./Booking.css";
import { useLocation, useNavigate } from "react-router-dom";

function Booking() {

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

  return (

    <section className="booking-page">

      <div className="booking-container">

        {/* Flight Summary */}



<div className="fare-summary">

  <h2>Fare Summary</h2>

  <div className="fare-row">
    <span>Base Fare</span>
    <span>₹ {flight.price}</span>
  </div>

  <div className="fare-row">
    <span>Taxes & Fees</span>
    <span>₹ 350</span>
  </div>

  <div className="fare-row">
    <span>Convenience Fee</span>
    <span>₹ 100</span>
  </div>

  <hr />

  <div className="fare-total">
    <span>Total Amount</span>
    <span>₹ {flight.price + 450}</span>
  </div>

  <div className="fare-benefits">

    <p>✅ Free Meal Included</p>

    <p>✅ 20 KG Check-in Baggage</p>

    <p>✅ Refundable Ticket</p>

  </div>

</div>




        <div className="flight-summary">

          <h2>Flight Details</h2>

          <div className="summary-card">

            <img
              src={flight.logo}
              alt={flight.airline}
            />

            <div>

              <h3>{flight.airline}</h3>

              <p>{flight.flightNo}</p>

            </div>

          </div>

          <div className="route">

            <div>

              <h3>{flight.departure}</h3>

              <p>{flight.from}</p>

            </div>

            <div>

              <p>{flight.duration}</p>

            </div>

            <div>

              <h3>{flight.arrival}</h3>

              <p>{flight.to}</p>

            </div>

          </div>

          <h2 className="price">

            ₹ {flight.price}

          </h2>

        </div>

        {/* Passenger Form */}

        <div className="passenger-form">

          <h2>Passenger Details</h2>

          <form>

            {/* Name */}

            <div className="input-group">

              <input
                type="text"
                placeholder="First Name"
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                required
              />

            </div>

            {/* DOB & Gender */}

            <div className="input-group">

              <div className="form-field">

                <label>Date of Birth</label>

                <input
                  type="date"
                  required
                />

              </div>

              <div className="form-field">

                <label>Gender</label>

                <select required>

                  <option value="">
                    Select Gender
                  </option>

                  <option>Male</option>

                  <option>Female</option>

                  <option>Other</option>

                </select>

              </div>

            </div>

            {/* Nationality & Passport */}

            <div className="input-group">

              <input
                type="text"
                placeholder="Nationality"
                required
              />

              <input
                type="text"
                placeholder="Passport Number"
                required
              />

            </div>

            {/* Passport Expiry & Email */}

            <div className="input-group">

              <div className="form-field">

                <label>Passport Expiry</label>

                <input
                  type="date"
                  required
                />

              </div>

              <input
                type="email"
                placeholder="Email Address"
                required
              />

            </div>

            {/* Phone & City */}

            <div className="input-group">

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              <input
                type="text"
                placeholder="City"
                required
              />

            </div>

            {/* Address */}

            <textarea
              rows="4"
              placeholder="Full Address"
            />

            {/* Special Request */}

            <textarea
              rows="4"
              placeholder="Special Request (Optional)"
            />

            {/* <button
              type="button"
              className="continue-btn"
            >
              Continue To Payment
            </button> */}
{/* 
            <button
  type="button"
  className="continue-btn"
  onClick={() =>
    navigate("/payment", {
      state: {
        flight,
      },
    })
  }
>
  Continue To Payment
</button> */}


<button
  type="button"
  className="continue-btn"
  onClick={() =>
    navigate("/seat-selection", {
      state: {
        flight,
      },
    })
  }
>
  Continue To Seat Selection
</button>

          </form>

        </div>

      </div>

    </section>

  );
}

export default Booking;