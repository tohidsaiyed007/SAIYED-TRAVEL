import "./Wishlist.css";
import { useState } from "react";
import { FaHeart, FaStar, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      airline: "IndiGo",
      from: "Delhi",
      to: "Dubai",
      departure: "09:30 AM",
      arrival: "12:55 PM",
      duration: "4h 25m",
      price: "₹18,499",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
    },
    {
      id: 2,
      airline: "Air India",
      from: "Mumbai",
      to: "London",
      departure: "10:15 PM",
      arrival: "07:20 AM",
      duration: "9h 05m",
      price: "₹42,999",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=800",
    },
  ]);

  const removeFlight = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <section className="wishlist-page">
      <div className="wishlist-container">

        <div className="wishlist-header">
          <h1>
            <FaHeart /> My Wishlist
          </h1>

          <p>Your saved flights for future booking.</p>
        </div>

        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <FaHeart />
            <h2>No Flights Saved</h2>
            <p>Add your favourite flights to your wishlist.</p>
          </div>
        ) : (
          wishlist.map((flight) => (
            <div className="wishlist-card" key={flight.id}>

              <img
                src={flight.image}
                alt={flight.airline}
              />

              <div className="wishlist-content">

                <h2>{flight.airline}</h2>

                <div className="route">
                  <strong>{flight.from}</strong>
                  <span>→</span>
                  <strong>{flight.to}</strong>
                </div>

                <p>
                  {flight.departure} • {flight.arrival}
                </p>

                <p>{flight.duration}</p>

                <div className="rating">
                  <FaStar />
                  {flight.rating}
                </div>

              </div>

              <div className="wishlist-right">

                <h2>{flight.price}</h2>

                <button
                  className="book-btn"
                  onClick={() => navigate("/booking")}
                >
                  Book Now
                </button>

                <button
                  className="remove-btn"
                  onClick={() => removeFlight(flight.id)}
                >
                  <FaTrash /> Remove
                </button>

              </div>

            </div>
          ))
        )}

      </div>
    </section>
  );
}

export default Wishlist;