import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PopularRoutes.css";

import { FaPlaneDeparture, FaArrowRight } from "react-icons/fa";

function PopularRoutes() {
  const navigate = useNavigate();

  const [imageIndex, setImageIndex] = useState(0);

  const flightImages = [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1800&q=90",
    "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1800&q=90",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % flightImages.length);
    }, 900);

    return () => clearInterval(interval);
  }, [flightImages.length]);

  const goToFlights = () => {
    navigate("/flights");
  };

  return (
    <section className="popular-routes">

      <div className="section-title">
        <span>EXPLORE FLIGHTS</span>

        <h2>Fly With Saiyed Travels</h2>

        <p>
          Discover amazing destinations and book your
          next journey with us.
        </p>
      </div>

      <div className="flight-showcase-card">

        <img
          key={imageIndex}
          src={flightImages[imageIndex]}
          alt="Flight"
          className="flight-showcase-image"
        />

        <div className="flight-showcase-overlay"></div>

        <div className="flight-showcase-content">

          <div className="flight-badge">
            <FaPlaneDeparture />
            <span>FLIGHT TRAVEL</span>
          </div>

          <h2>
            Your Journey
            <br />
            Starts Here
          </h2>

          <p>
            Find the best flights, explore new
            destinations and travel comfortably
            with Saiyed Travels.
          </p>

          <button
            type="button"
            className="view-flights-btn"
            onClick={goToFlights}
          >
            <span>View Flights</span>
            <FaArrowRight />
          </button>

        </div>

        <div className="flight-image-dots">
          {flightImages.map((_, index) => (
            <span
              key={index}
              className={
                index === imageIndex ? "active" : ""
              }
            ></span>
          ))}
        </div>

      </div>

    </section>
  );
}

export default PopularRoutes;