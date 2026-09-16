
import "./AddFlight.css";
import { useState } from "react";
import {
  FaTimes,
  FaPlane,
  FaSave,
} from "react-icons/fa";

function AddFlight({ closeModal }) {
  const [formData, setFormData] = useState({
    airline: "",
    flightNo: "",
    from: "",
    to: "",
    departure: "",
    arrival: "",
    duration: "",
    seats: "",
    price: "",
    status: "Scheduled",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    // Basic validation
    if (
      !formData.airline.trim() ||
      !formData.flightNo.trim() ||
      !formData.from.trim() ||
      !formData.to.trim() ||
      !formData.departure.trim() ||
      !formData.arrival.trim() ||
      !formData.duration.trim() ||
      !formData.seats ||
      !formData.price
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const seats = Number(formData.seats);
    const price = Number(formData.price);

    if (seats <= 0) {
      alert("Seats must be greater than 0.");
      return;
    }

    if (price < 0) {
      alert("Price cannot be negative.");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Admin login required. Please login again.");
      return;
    }

    try {
      setLoading(true);

      const flightData = {
        airline: formData.airline.trim(),

        flightNo: formData.flightNo
          .trim()
          .toUpperCase(),

        from: formData.from.trim(),

        to: formData.to.trim(),

        departure: formData.departure.trim(),

        arrival: formData.arrival.trim(),

        duration: formData.duration.trim(),

        seats: seats,

        availableSeats: seats,

        price: price,

        status: formData.status,
      };

      console.log("Sending Flight Data:", flightData);

      const response = await fetch(
        "https://saiyed-travels-backend-1.onrender.com/api/flights",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify(flightData),
        }
      );

      const data = await response.json();

      console.log("Add Flight Response:", data);

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to add flight."
        );
      }

      alert(
        data.message ||
          "Flight added successfully."
      );

      // Close modal
      closeModal();

      // Refresh FlightTable
      window.location.reload();

    } catch (error) {
      console.error(
        "Add Flight Error:",
        error
      );

      alert(
        error.message ||
          "Something went wrong while adding flight."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-flight-overlay">
      <div className="add-flight-modal">

        {/* Header */}

        <div className="add-flight-header">

          <div className="add-flight-title">

            <div className="add-flight-icon">
              <FaPlane />
            </div>

            <div>
              <h2>Add New Flight</h2>

              <p>
                Add a flight to your flight management system.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="close-flight-btn"
            onClick={closeModal}
            disabled={loading}
          >
            <FaTimes />
          </button>

        </div>


        {/* Form */}

        <form
          className="add-flight-form"
          onSubmit={handleSubmit}
        >

          {/* Airline + Flight Number */}

          <div className="form-row">

            <div className="form-group">

              <label>
                Airline
                <span>*</span>
              </label>

              <input
                type="text"
                name="airline"
                placeholder="e.g. Emirates"
                value={formData.airline}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                Flight Number
                <span>*</span>
              </label>

              <input
                type="text"
                name="flightNo"
                placeholder="e.g. EK-501"
                value={formData.flightNo}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* From + To */}

          <div className="form-row">

            <div className="form-group">

              <label>
                From
                <span>*</span>
              </label>

              <input
                type="text"
                name="from"
                placeholder="e.g. Delhi"
                value={formData.from}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                To
                <span>*</span>
              </label>

              <input
                type="text"
                name="to"
                placeholder="e.g. Dubai"
                value={formData.to}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Departure + Arrival */}

          <div className="form-row">

            <div className="form-group">

              <label>
                Departure
                <span>*</span>
              </label>

              <input
                type="text"
                name="departure"
                placeholder="e.g. 09:00 AM"
                value={formData.departure}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                Arrival
                <span>*</span>
              </label>

              <input
                type="text"
                name="arrival"
                placeholder="e.g. 12:10 PM"
                value={formData.arrival}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Duration + Seats */}

          <div className="form-row">

            <div className="form-group">

              <label>
                Duration
                <span>*</span>
              </label>

              <input
                type="text"
                name="duration"
                placeholder="e.g. 3h 10m"
                value={formData.duration}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                Seats
                <span>*</span>
              </label>

              <input
                type="number"
                name="seats"
                placeholder="e.g. 180"
                min="1"
                value={formData.seats}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Price + Status */}

          <div className="form-row">

            <div className="form-group">

              <label>
                Price
                <span>*</span>
              </label>

              <input
                type="number"
                name="price"
                placeholder="e.g. 5500"
                min="0"
                value={formData.price}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >

                <option value="Scheduled">
                  Scheduled
                </option>

                <option value="Delayed">
                  Delayed
                </option>

                <option value="Cancelled">
                  Cancelled
                </option>

              </select>

            </div>

          </div>


          {/* Footer */}

          <div className="add-flight-footer">

            <button
              type="button"
              className="cancel-flight-btn"
              onClick={closeModal}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-flight-btn"
              disabled={loading}
            >

              <FaSave />

              {loading
                ? "Saving..."
                : "Save Flight"}

            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddFlight;