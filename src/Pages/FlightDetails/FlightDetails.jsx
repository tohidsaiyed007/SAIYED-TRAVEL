import "./FlightDetails.css";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import {
  FaPlane,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaUtensils,
  FaWifi,
  FaBolt,
  FaFilm,
  FaCheckCircle,
  FaArrowRight,
  FaChair,
} from "react-icons/fa";


function FlightDetails() {

  const location = useLocation();
  const navigate = useNavigate();

  const flight =
    location.state?.flight || null;


  // =====================================================
  // NO FLIGHT
  // =====================================================

  if (!flight) {

    return (
      <>
        <Navbar />

        <main className="flight-details-empty">

          <div className="empty-content">

            <FaPlane className="empty-icon" />

            <h2>
              Flight Not Found
            </h2>

            <p>
              Please go back and select a flight.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate("/flights")
              }
            >
              Back To Flights
            </button>

          </div>

        </main>

        <Footer />
      </>
    );
  }


  // =====================================================
  // AIRLINE LOGOS
  // =====================================================

  const airlineLogos = {

    indigo:
      "https://images.kiwi.com/airlines/64/6E.png",

    "air india":
      "https://images.kiwi.com/airlines/64/AI.png",

    spicejet:
      "https://images.kiwi.com/airlines/64/SG.png",

    "air india express":
      "https://images.kiwi.com/airlines/64/IX.png",

    emirates:
      "https://images.kiwi.com/airlines/64/EK.png",

    "qatar airways":
      "https://images.kiwi.com/airlines/64/QR.png",

    "etihad airways":
      "https://images.kiwi.com/airlines/64/EY.png",

    "oman air":
      "https://images.kiwi.com/airlines/64/WY.png",

    "saudi airlines":
      "https://images.kiwi.com/airlines/64/SV.png",

    "singapore airlines":
      "https://images.kiwi.com/airlines/64/SQ.png",

    lufthansa:
      "https://images.kiwi.com/airlines/64/LH.png",

    "british airways":
      "https://images.kiwi.com/airlines/64/BA.png",

    "turkish airlines":
      "https://images.kiwi.com/airlines/64/TK.png",

    "malaysia airlines":
      "https://images.kiwi.com/airlines/64/MH.png",

    "thai airways":
      "https://images.kiwi.com/airlines/64/TG.png",

  };


  const airlineName =
    String(
      flight.airline || ""
    )
      .trim()
      .toLowerCase();


  const airlineLogo =
    airlineLogos[airlineName];


  // =====================================================
  // CABINS
  // =====================================================

  const cabins =
    Array.isArray(flight.cabins)
      ? flight.cabins
      : [];


  // =====================================================
  // SEATS
  // =====================================================

  const totalSeats =
    cabins.reduce(
      (total, cabin) =>
        total +
        Number(
          cabin.totalSeats || 0
        ),
      0
    );


  const availableSeats =
    cabins.reduce(
      (total, cabin) =>
        total +
        Number(
          cabin.availableSeats || 0
        ),
      0
    );


  // =====================================================
  // PRICE
  // =====================================================

  const finalPrice =
    Number(
      flight.finalPrice ??
      flight.price ??
      flight.cabins?.[0]?.price ??
      0
    );


  // =====================================================
  // DATE
  // =====================================================

  const formatDate = (value) => {

    if (!value) {
      return "—";
    }

    const stringValue =
      String(value);


    if (
      /^\d{4}-\d{2}-\d{2}$/.test(
        stringValue
      )
    ) {

      const [
        year,
        month,
        day,
      ] =
        stringValue.split("-");


      return new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
      ).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      );

    }


    return stringValue;

  };


  // =====================================================
  // BOOKING STATE
  // =====================================================

  const createBookingState = () => {

    const flightId =
      flight?._id ||
      flight?.id ||
      flight?.flightId;


    const incomingTravellers =
      location.state?.travellers ||
      flight?.travellers ||
      {
        adults: 1,
        children: 0,
        infants: 0,
        cabin:
          flight?.cabin ||
          flight?.cabinClass ||
          "Economy",
      };


    const adultCount =
      Math.max(
        Number(
          incomingTravellers.adults
        ) || 1,
        1
      );


    const childCount =
      Math.max(
        Number(
          incomingTravellers.children
        ) || 0,
        0
      );


    const infantCount =
      Math.max(
        Number(
          incomingTravellers.infants
        ) || 0,
        0
      );


    const adultFare =
      Number(
        location.state?.pricing?.adultFare ??
        flight.adultFare ??
        flight.finalPrice ??
        flight.price ??
        0
      );


    const childFare =
      Number(
        location.state?.pricing?.childFare ??
        flight.childFare ??
        0
      );


    const infantFare =
      Number(
        location.state?.pricing?.infantFare ??
        flight.infantFare ??
        0
      );


    const adultTotal =
      adultFare *
      adultCount;


    const childTotal =
      childFare *
      childCount;


    const infantTotal =
      infantFare *
      infantCount;


    const passengerFareTotal =
      adultTotal +
      childTotal +
      infantTotal;


    return {

      flight: {

        ...flight,

        _id:
          flightId,

        flightId:
          flightId,

        adultFare,

        childFare,

        infantFare,

        adultTotal,

        childTotal,

        infantTotal,

        passengerFareTotal,

      },


      flightId,


      travellers: {

        adults:
          adultCount,

        children:
          childCount,

        infants:
          infantCount,

        totalPassengers:
          adultCount +
          childCount +
          infantCount,

        cabin:
          incomingTravellers.cabin ||
          "Economy",

      },


      pricing: {

        adultFare,

        childFare,

        infantFare,

        adultTotal,

        childTotal,

        infantTotal,

        passengerFareTotal,

      },

    };

  };


  // =====================================================
  // BOOK NOW
  //
  // NEW USER:
  // Flight Details -> Login -> Booking
  //
  // LOGGED USER:
  // Flight Details -> Booking
  // =====================================================

  const handleBooking = () => {

    const bookingState =
      createBookingState();


    const token =
      localStorage.getItem(
        "token"
      );


    const user =
      localStorage.getItem(
        "user"
      );


    // ===================================================
    // NEW USER
    // ===================================================

    if (
      !token ||
      !user
    ) {

      navigate(
        "/login",
        {
          state: {

            from:
              "/booking",

            returnPath:
              "/booking",

            bookingState,

          },
        }
      );

      return;

    }


    // ===================================================
    // LOGGED USER
    // ===================================================

    navigate(
      "/booking",
      {
        state:
          bookingState,
      }
    );

  };


  // =====================================================
  // STATUS
  // =====================================================

  const status =
    flight.status ||
    "Scheduled";


  const statusClass =
    String(status)
      .toLowerCase()
      .replace(
        /\s+/g,
        "-"
      );


  // =====================================================
  // UI
  // =====================================================

  return (
    <>

      <Navbar />


      <main className="flight-details-page">


        {/* =================================================
                         HEADER
        ================================================= */}

        <section className="details-header">

          <div className="details-airline">

            <div className="details-logo-box">

              {airlineLogo ? (

                <img
                  src={airlineLogo}
                  alt={
                    flight.airline ||
                    "Airline"
                  }
                  className="details-logo"

                  onError={(event) => {

                    event.currentTarget.style.display =
                      "none";

                  }}

                />

              ) : (

                <span className="logo-initials">

                  {String(
                    flight.airline ||
                    "FL"
                  )
                    .slice(0, 2)
                    .toUpperCase()}

                </span>

              )}

            </div>


            <div>

              <h2>

                {flight.airline ||
                  "Airline"}

              </h2>


              <p>

                {flight.flightNo ||
                  "Flight Number"}

              </p>


              <span>

                {flight.flightType ||
                  "Domestic"}

                {" • "}

                {flight.aircraft ||
                  "Aircraft"}

              </span>

            </div>

          </div>


          <div
            className={
              `details-status ${statusClass}`
            }
          >

            {status}

          </div>

        </section>


        {/* =================================================
                           ROUTE
        ================================================= */}

        <section className="details-card">

          <div className="details-route">


            <div className="route-point">

              <span>
                DEPARTURE
              </span>


              <h1>

                {flight.departureTime ||
                  "--:--"}

              </h1>


              <h3>

                {flight.fromCity ||
                  flight.from ||
                  "—"}

                {flight.fromCode &&
                  ` (${flight.fromCode})`}

              </h3>


              {flight.fromAirport && (

                <p>
                  {flight.fromAirport}
                </p>

              )}


              <small>

                {formatDate(
                  flight.departureDate
                )}

              </small>


              {flight.departureTerminal && (

                <small>

                  Terminal{" "}
                  {flight.departureTerminal}

                </small>

              )}

            </div>


            <div className="route-center">

              <span>

                {flight.duration ||
                  "—"}

              </span>


              <div className="route-line">

                <FaPlaneDeparture />

                <div />

                <FaPlane />

                <div />

                <FaPlaneArrival />

              </div>


              <small>

                {flight.stops ||
                  "Non-stop"}

              </small>

            </div>


            <div className="route-point">

              <span>
                ARRIVAL
              </span>


              <h1>

                {flight.arrivalTime ||
                  "--:--"}

              </h1>


              <h3>

                {flight.toCity ||
                  flight.to ||
                  "—"}

                {flight.toCode &&
                  ` (${flight.toCode})`}

              </h3>


              {flight.toAirport && (

                <p>
                  {flight.toAirport}
                </p>

              )}


              <small>

                {formatDate(
                  flight.arrivalDate
                )}

              </small>


              {flight.arrivalTerminal && (

                <small>

                  Terminal{" "}
                  {flight.arrivalTerminal}

                </small>

              )}

            </div>

          </div>

        </section>


        {/* =================================================
                    FLIGHT INFORMATION
        ================================================= */}

        <section className="details-section">

          <div className="section-heading">

            <h2>
              Flight Information
            </h2>

            <p>
              Details of your selected flight
            </p>

          </div>


          <div className="details-grid">


            <div className="info-box">

              <span>
                Flight Number
              </span>

              <strong>

                {flight.flightNo ||
                  "—"}

              </strong>

            </div>


            <div className="info-box">

              <span>
                Aircraft
              </span>

              <strong>

                {flight.aircraft ||
                  "—"}

              </strong>

            </div>


            <div className="info-box">

              <span>
                Duration
              </span>

              <strong>

                {flight.duration ||
                  "—"}

              </strong>

            </div>


            <div className="info-box">

              <span>
                Stops
              </span>

              <strong>

                {flight.stops ||
                  "Non-stop"}

              </strong>

            </div>


            <div className="info-box">

              <span>
                Available Seats
              </span>

              <strong>

                {availableSeats}

                {totalSeats > 0 &&
                  ` / ${totalSeats}`}

              </strong>

            </div>


            <div className="info-box">

              <span>
                Cabin Baggage
              </span>

              <strong>

                {flight.cabinBaggage ||
                  "7 KG"}

              </strong>

            </div>


            <div className="info-box">

              <span>
                Check-in Baggage
              </span>

              <strong>

                {flight.checkinBaggage ||
                  "15 KG"}

              </strong>

            </div>


            <div className="info-box">

              <span>
                Extra Baggage
              </span>

              <strong>

                ₹{" "}

                {Number(
                  flight.extraBaggagePrice ||
                  0
                ).toLocaleString(
                  "en-IN"
                )}

              </strong>

            </div>

          </div>

        </section>


        {/* =================================================
                       CABIN
        ================================================= */}

        {cabins.length > 0 && (

          <section className="details-section">

            <div className="section-heading">

              <h2>
                Cabin & Pricing
              </h2>

              <p>
                Available cabin classes
              </p>

            </div>


            <div className="cabin-grid">

              {cabins.map(
                (cabin, index) => (

                  <div
                    className="cabin-card"
                    key={index}
                  >

                    <div className="cabin-top">

                      <div>

                        <span>
                          CABIN
                        </span>

                        <h3>

                          {cabin.name ||
                            "Economy"}

                        </h3>

                      </div>


                      <FaChair />

                    </div>


                    <div className="cabin-details">

                      <span>
                        Available
                      </span>

                      <strong>

                        {cabin.availableSeats ||
                          0}

                        {" / "}

                        {cabin.totalSeats ||
                          0}

                      </strong>

                    </div>


                    <div className="cabin-bottom">

                      <span>
                        Price
                      </span>

                      <strong>

                        ₹{" "}

                        {Number(
                          cabin.price ||
                          0
                        ).toLocaleString(
                          "en-IN"
                        )}

                      </strong>

                    </div>


                    {cabin.baggage && (

                      <div className="cabin-baggage">

                        🧳{" "}
                        {cabin.baggage}

                      </div>

                    )}

                  </div>

                )
              )}

            </div>

          </section>

        )}


        {/* =================================================
                         FACILITIES
        ================================================= */}

        <section className="details-section">

          <div className="section-heading">

            <h2>
              Facilities
            </h2>

            <p>
              Services available on this flight
            </p>

          </div>


          <div className="facility-list">


            {flight.mealAvailable && (

              <span>

                <FaUtensils />

                Free Meal

              </span>

            )}


            {flight.wifiAvailable && (

              <span>

                <FaWifi />

                Wi-Fi

              </span>

            )}


            {flight.entertainmentAvailable && (

              <span>

                <FaFilm />

                Entertainment

              </span>

            )}


            {flight.powerAvailable && (

              <span>

                <FaBolt />

                Power

              </span>

            )}


            {flight.refundable && (

              <span>

                <FaCheckCircle />

                Refundable

              </span>

            )}


            {flight.changeable && (

              <span>

                <FaCheckCircle />

                Date Change

              </span>

            )}


            {!flight.mealAvailable &&
              !flight.wifiAvailable &&
              !flight.entertainmentAvailable &&
              !flight.powerAvailable &&
              !flight.refundable &&
              !flight.changeable && (

                <span>

                  Standard Services

                </span>

              )}

          </div>

        </section>


        {/* =================================================
                         FARE
        ================================================= */}

        <section className="fare-card">

          <div className="section-heading">

            <h2>
              Fare Details
            </h2>

            <p>
              Price breakdown
            </p>

          </div>


          <div className="fare-row">

            <span>
              Base Fare
            </span>

            <strong>

              ₹{" "}

              {Number(
                flight.baseFare ||
                finalPrice
              ).toLocaleString(
                "en-IN"
              )}

            </strong>

          </div>


          <div className="fare-row">

            <span>
              Taxes
            </span>

            <strong>

              ₹{" "}

              {Number(
                flight.taxes ||
                0
              ).toLocaleString(
                "en-IN"
              )}

            </strong>

          </div>


          <div className="fare-row">

            <span>
              Airport Charges
            </span>

            <strong>

              ₹{" "}

              {Number(
                flight.airportCharges ||
                0
              ).toLocaleString(
                "en-IN"
              )}

            </strong>

          </div>


          <div className="fare-row">

            <span>
              Service Fee
            </span>

            <strong>

              ₹{" "}

              {Number(
                flight.serviceFee ||
                0
              ).toLocaleString(
                "en-IN"
              )}

            </strong>

          </div>


          {Number(
            flight.discount ||
            0
          ) > 0 && (

            <div className="fare-row">

              <span>
                Discount
              </span>

              <strong>

                - ₹{" "}

                {Number(
                  flight.discount
                ).toLocaleString(
                  "en-IN"
                )}

              </strong>

            </div>

          )}


          <div className="fare-row total">

            <span>
              Total Price
            </span>

            <strong>

              ₹{" "}

              {finalPrice.toLocaleString(
                "en-IN"
              )}

            </strong>

          </div>

        </section>


        {/* =================================================
                         BOOK NOW
        ================================================= */}

        <section className="book-section">

          <div>

            <span>
              Total Price
            </span>

            <h2>

              ₹{" "}

              {finalPrice.toLocaleString(
                "en-IN"
              )}

            </h2>

            <small>

              {flight.currency ||
                "INR"}

              {" • "}

              Taxes included

            </small>

          </div>


          <button
            type="button"
            onClick={
              handleBooking
            }
          >

            Book Now

            <FaArrowRight />

          </button>

        </section>


      </main>


      <Footer />

    </>
  );
}


export default FlightDetails;