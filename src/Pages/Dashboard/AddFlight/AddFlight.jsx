// Customer Fare + Agent Fare added.
// Baaki existing flight fields/flow same rakhe gaye hain.

import "./AddFlight.css";
import { useState } from "react";

function AddFlight({ closeModal }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    airline: "",
    flightNumber: "",
    flightType: "International",
    aircraft: "",

    fromCity: "",
    fromAirport: "",
    fromAirportCode: "",
    fromTerminal: "",

    toCity: "",
    toAirport: "",
    toAirportCode: "",
    toTerminal: "",

    departureDate: "",
    departureTime: "",
    arrivalDate: "",
    arrivalTime: "",
    duration: "",

    stops: "Non-stop",

    stop1City: "",
    stop1Airport: "",
    stop1AirportCode: "",
    stop1Terminal: "",
    stop1Layover: "",

    stop2City: "",
    stop2Airport: "",
    stop2AirportCode: "",
    stop2Terminal: "",
    stop2Layover: "",

    ticketInventory: "",
    pnr: "",

    // =========================
    // FARES
    // =========================

    adultFare: "",
    childFare: "",
    infantFare: "",

    agentAdultFare: "",
    agentChildFare: "",
    agentInfantFare: "",

    cabinBaggage: "",
    checkinBaggage: "",

    bookingRule: "Refundable",
  });

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

    const requiredFields = [
      ["airline", "Airline Name"],
      ["flightNumber", "Flight Number"],
      ["aircraft", "Aircraft"],

      ["fromCity", "From City"],
      ["fromAirport", "From Airport"],
      ["fromAirportCode", "From Airport Code"],
      ["fromTerminal", "From Terminal"],

      ["toCity", "To City"],
      ["toAirport", "To Airport"],
      ["toAirportCode", "To Airport Code"],
      ["toTerminal", "To Terminal"],

      ["departureDate", "Departure Date"],
      ["departureTime", "Departure Time"],
      ["arrivalDate", "Arrival Date"],
      ["arrivalTime", "Arrival Time"],
      ["duration", "Duration"],

      ["ticketInventory", "Ticket Inventory"],
      ["pnr", "PNR"],

      ["adultFare", "Adult Customer Fare"],
      ["childFare", "Child Customer Fare"],
      ["infantFare", "Infant Customer Fare"],

      ["agentAdultFare", "Adult Agent Fare"],
      ["agentChildFare", "Child Agent Fare"],
      ["agentInfantFare", "Infant Agent Fare"],

      ["cabinBaggage", "Cabin Bag"],
      ["checkinBaggage", "Check-in Bag"],
    ];

    for (const [field, label] of requiredFields) {
      if (!String(formData[field] || "").trim()) {
        alert(`Please enter ${label}.`);
        return;
      }
    }

    if (Number(formData.ticketInventory) <= 0) {
      alert("Ticket Inventory must be greater than 0.");
      return;
    }

    if (
      Number(formData.agentAdultFare) >
      Number(formData.adultFare)
    ) {
      alert(
        "Agent Adult Fare should not be greater than Customer Adult Fare."
      );
      return;
    }

    if (
      Number(formData.agentChildFare) >
      Number(formData.childFare)
    ) {
      alert(
        "Agent Child Fare should not be greater than Customer Child Fare."
      );
      return;
    }

    if (
      Number(formData.agentInfantFare) >
      Number(formData.infantFare)
    ) {
      alert(
        "Agent Infant Fare should not be greater than Customer Infant Fare."
      );
      return;
    }

    if (formData.stops === "1 Stop") {
      const stop1Required = [
        ["stop1City", "Stop 1 City"],
        ["stop1Airport", "Stop 1 Airport"],
        ["stop1AirportCode", "Stop 1 Airport Code"],
        ["stop1Terminal", "Stop 1 Terminal"],
        ["stop1Layover", "Stop 1 Layover"],
      ];

      for (const [field, label] of stop1Required) {
        if (!String(formData[field] || "").trim()) {
          alert(`Please enter ${label}.`);
          return;
        }
      }
    }

    if (formData.stops === "2 Stops") {
      const stopRequired = [
        ["stop1City", "Stop 1 City"],
        ["stop1Airport", "Stop 1 Airport"],
        ["stop1AirportCode", "Stop 1 Airport Code"],
        ["stop1Terminal", "Stop 1 Terminal"],
        ["stop1Layover", "Stop 1 Layover"],

        ["stop2City", "Stop 2 City"],
        ["stop2Airport", "Stop 2 Airport"],
        ["stop2AirportCode", "Stop 2 Airport Code"],
        ["stop2Terminal", "Stop 2 Terminal"],
        ["stop2Layover", "Stop 2 Layover"],
      ];

      for (const [field, label] of stopRequired) {
        if (!String(formData[field] || "").trim()) {
          alert(`Please enter ${label}.`);
          return;
        }
      }
    }

    const token =
      localStorage.getItem("token") ||
      localStorage.getItem("authToken") ||
      localStorage.getItem("accessToken");

    if (!token) {
      alert("Please login as admin first.");
      return;
    }

    try {
      setLoading(true);

      const totalTickets =
        Number(formData.ticketInventory);

      const adultFare =
        Number(formData.adultFare);

      const childFare =
        Number(formData.childFare);

      const infantFare =
        Number(formData.infantFare);

      const agentAdultFare =
        Number(formData.agentAdultFare);

      const agentChildFare =
        Number(formData.agentChildFare);

      const agentInfantFare =
        Number(formData.agentInfantFare);

      const stopDetails = [];

      if (
        formData.stops === "1 Stop" ||
        formData.stops === "2 Stops"
      ) {
        stopDetails.push({
          city: formData.stop1City.trim(),
          airport: formData.stop1Airport.trim(),
          airportCode:
            formData.stop1AirportCode
              .trim()
              .toUpperCase(),
          terminal:
            formData.stop1Terminal.trim(),
          layover:
            formData.stop1Layover.trim(),
        });
      }

      if (formData.stops === "2 Stops") {
        stopDetails.push({
          city: formData.stop2City.trim(),
          airport: formData.stop2Airport.trim(),
          airportCode:
            formData.stop2AirportCode
              .trim()
              .toUpperCase(),
          terminal:
            formData.stop2Terminal.trim(),
          layover:
            formData.stop2Layover.trim(),
        });
      }

      const cabins = [
        {
          name: "Economy",
          totalSeats: totalTickets,
          availableSeats: totalTickets,

          // Customer price
          price: adultFare,

          // Agent price
          agentPrice: agentAdultFare,

          baggage:
            formData.checkinBaggage.trim(),

          cabinBaggage:
            formData.cabinBaggage.trim(),

          checkinBaggage:
            formData.checkinBaggage.trim(),

          adultFare,
          childFare,
          infantFare,

          agentAdultFare,
          agentChildFare,
          agentInfantFare,
        },
      ];

      // =====================================================
      // TICKET INVENTORY
      // One PNR can contain multiple tickets.
      // Example: Total Tickets = 10 + PNR = ABC123
      // => 10 available ticket records with the SAME PNR.
      // Each booking will consume one available ticket.
      // =====================================================

      const normalizedPNR =
        formData.pnr
          .trim()
          .toUpperCase();

      const tickets = Array.from(
        { length: totalTickets },
        (_, index) => ({
          // Same PNR for the complete group
          pnr: normalizedPNR,

          // Internal unique ticket number
          // keeps every ticket separately trackable
          ticketNumber:
            `${normalizedPNR}-${String(
              index + 1
            ).padStart(3, "0")}`,

          status: "Available",
          bookingId: "",
          passengerName: "",
          bookedAt: null,
        })
      );

      if (
        tickets.length !== totalTickets
      ) {
        throw new Error(
          "Ticket inventory generation failed."
        );
      }

      const payload = {
        airline:
          formData.airline.trim(),

        flightNo:
          formData.flightNumber
            .trim()
            .toUpperCase(),

        flightType:
          formData.flightType,

        aircraft:
          formData.aircraft.trim(),

        fromCity:
          formData.fromCity.trim(),

        fromAirport:
          formData.fromAirport.trim(),

        fromCode:
          formData.fromAirportCode
            .trim()
            .toUpperCase(),

        toCity:
          formData.toCity.trim(),

        toAirport:
          formData.toAirport.trim(),

        toCode:
          formData.toAirportCode
            .trim()
            .toUpperCase(),

        departureDate:
          formData.departureDate,

        departureTime:
          formData.departureTime,

        departureTerminal:
          formData.fromTerminal.trim(),

        arrivalDate:
          formData.arrivalDate,

        arrivalTime:
          formData.arrivalTime,

        arrivalTerminal:
          formData.toTerminal.trim(),

        duration:
          formData.duration.trim(),

        stops:
          formData.stops,

        stopDetails,

        totalTickets,

        ticketInventory:
          totalTickets,

        remainingTickets:
          totalTickets,

        // =========================
        // CUSTOMER FARES
        // =========================

        adultFare,
        childFare,
        infantFare,

        // =========================
        // AGENT FARES
        // =========================

        agentAdultFare,
        agentChildFare,
        agentInfantFare,

        agentFare: agentAdultFare,

        // =========================
        // DEFAULT PRICE
        // Customer price is public
        // =========================

        baseFare: adultFare,
        finalPrice: adultFare,
        price: adultFare,

        // =========================
        // BAGGAGE
        // =========================

        cabinBaggage:
          formData.cabinBaggage.trim(),

        checkinBaggage:
          formData.checkinBaggage.trim(),

        // =========================
        // RULE
        // =========================

        bookingRule:
          formData.bookingRule,

        refundable:
          formData.bookingRule ===
          "Refundable",

        changeable:
          formData.bookingRule ===
          "Refundable",

        cabins,

        tickets,

        status: "Scheduled",
      };

      console.log(
        "ADD FLIGHT PAYLOAD:",
        payload
      );

      const response = await fetch(
        "https://saiyed-travels-backend-1.onrender.com/api/flights",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body:
            JSON.stringify(payload),
        }
      );

      let data = {};

      try {
        data =
          await response.json();
      } catch {
        data = {};
      }

      console.log(
        "ADD FLIGHT RESPONSE:",
        data
      );

      if (!response.ok) {
        throw new Error(
          data?.message ||
            `Failed to add flight. Status: ${response.status}`
        );
      }

      alert(
        "Flight added successfully!"
      );

      if (
        typeof closeModal ===
        "function"
      ) {
        closeModal();
      }

      window.location.reload();

    } catch (error) {
      console.error(
        "ADD FLIGHT ERROR:",
        error
      );

      alert(
        error.message ||
          "Failed to add flight."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-flight-overlay">
      <div className="add-flight-modal">

        <div className="add-flight-header">
          <div>
            <h2>Add Flight</h2>
            <p>
              Add flight details to your inventory.
            </p>
          </div>

          <button
            type="button"
            className="close-btn"
            onClick={closeModal}
          >
            ×
          </button>
        </div>

        <form
          className="add-flight-form"
          onSubmit={handleSubmit}
        >

          {/* =========================
              FLIGHT INFORMATION
          ========================= */}

          <div className="form-section">
            <h3>Flight Information</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  Airline Name
                </label>

                <input
                  name="airline"
                  value={formData.airline}
                  onChange={handleChange}
                  placeholder="e.g. Oman Air"
                />
              </div>

              <div className="form-group">
                <label>
                  Flight Number
                </label>

                <input
                  name="flightNumber"
                  value={
                    formData.flightNumber
                  }
                  onChange={handleChange}
                  placeholder="e.g. WY123"
                />
              </div>

              <div className="form-group">
                <label>
                  Flight Type
                </label>

                <select
                  name="flightType"
                  value={
                    formData.flightType
                  }
                  onChange={handleChange}
                >
                  <option value="Domestic">
                    Domestic
                  </option>

                  <option value="International">
                    International
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  Aircraft
                </label>

                <input
                  name="aircraft"
                  value={
                    formData.aircraft
                  }
                  onChange={handleChange}
                  placeholder="e.g. Boeing 737"
                />
              </div>

            </div>
          </div>

          {/* =========================
              ROUTE
          ========================= */}

          <div className="form-section">
            <h3>Route</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  From City
                </label>

                <input
                  name="fromCity"
                  value={
                    formData.fromCity
                  }
                  onChange={handleChange}
                  placeholder="e.g. Jaipur"
                />
              </div>

              <div className="form-group">
                <label>
                  From Airport
                </label>

                <input
                  name="fromAirport"
                  value={
                    formData.fromAirport
                  }
                  onChange={handleChange}
                  placeholder="Jaipur International Airport"
                />
              </div>

              <div className="form-group">
                <label>
                  From Airport Code
                </label>

                <input
                  name="fromAirportCode"
                  value={
                    formData.fromAirportCode
                  }
                  onChange={handleChange}
                  placeholder="JAI"
                  maxLength={3}
                />
              </div>

              <div className="form-group">
                <label>
                  From Terminal
                </label>

                <input
                  name="fromTerminal"
                  value={
                    formData.fromTerminal
                  }
                  onChange={handleChange}
                  placeholder="Terminal 2"
                />
              </div>

              <div className="form-group">
                <label>
                  To City
                </label>

                <input
                  name="toCity"
                  value={
                    formData.toCity
                  }
                  onChange={handleChange}
                  placeholder="e.g. Muscat"
                />
              </div>

              <div className="form-group">
                <label>
                  To Airport
                </label>

                <input
                  name="toAirport"
                  value={
                    formData.toAirport
                  }
                  onChange={handleChange}
                  placeholder="Muscat International Airport"
                />
              </div>

              <div className="form-group">
                <label>
                  To Airport Code
                </label>

                <input
                  name="toAirportCode"
                  value={
                    formData.toAirportCode
                  }
                  onChange={handleChange}
                  placeholder="MCT"
                  maxLength={3}
                />
              </div>

              <div className="form-group">
                <label>
                  To Terminal
                </label>

                <input
                  name="toTerminal"
                  value={
                    formData.toTerminal
                  }
                  onChange={handleChange}
                  placeholder="Terminal 1"
                />
              </div>

            </div>
          </div>

          {/* =========================
              SCHEDULE
          ========================= */}

          <div className="form-section">
            <h3>Schedule</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  Departure Date
                </label>

                <input
                  type="date"
                  name="departureDate"
                  value={
                    formData.departureDate
                  }
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>
                  Departure Time
                </label>

                <input
                  type="time"
                  name="departureTime"
                  value={
                    formData.departureTime
                  }
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>
                  Arrival Date
                </label>

                <input
                  type="date"
                  name="arrivalDate"
                  value={
                    formData.arrivalDate
                  }
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>
                  Arrival Time
                </label>

                <input
                  type="time"
                  name="arrivalTime"
                  value={
                    formData.arrivalTime
                  }
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>
                  Duration
                </label>

                <input
                  name="duration"
                  value={
                    formData.duration
                  }
                  onChange={handleChange}
                  placeholder="e.g. 3h 20m"
                />
              </div>

              <div className="form-group">
                <label>
                  Flight Stop
                </label>

                <select
                  name="stops"
                  value={
                    formData.stops
                  }
                  onChange={handleChange}
                >
                  <option value="Non-stop">
                    Non-stop
                  </option>

                  <option value="1 Stop">
                    1 Stop
                  </option>

                  <option value="2 Stops">
                    2 Stops
                  </option>
                </select>
              </div>

            </div>

            {(formData.stops ===
              "1 Stop" ||
              formData.stops ===
                "2 Stops") && (
              <div className="stop-box">

                <h4>
                  Stop 1
                </h4>

                <div className="form-grid">

                  <div className="form-group">
                    <label>
                      Stop City
                    </label>

                    <input
                      name="stop1City"
                      value={
                        formData.stop1City
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Stop Airport
                    </label>

                    <input
                      name="stop1Airport"
                      value={
                        formData.stop1Airport
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Airport Code
                    </label>

                    <input
                      name="stop1AirportCode"
                      value={
                        formData.stop1AirportCode
                      }
                      onChange={
                        handleChange
                      }
                      maxLength={3}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Terminal
                    </label>

                    <input
                      name="stop1Terminal"
                      value={
                        formData.stop1Terminal
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Layover
                    </label>

                    <input
                      name="stop1Layover"
                      value={
                        formData.stop1Layover
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </div>

                </div>
              </div>
            )}

            {formData.stops ===
              "2 Stops" && (
              <div className="stop-box">

                <h4>
                  Stop 2
                </h4>

                <div className="form-grid">

                  <div className="form-group">
                    <label>
                      Stop City
                    </label>

                    <input
                      name="stop2City"
                      value={
                        formData.stop2City
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Stop Airport
                    </label>

                    <input
                      name="stop2Airport"
                      value={
                        formData.stop2Airport
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Airport Code
                    </label>

                    <input
                      name="stop2AirportCode"
                      value={
                        formData.stop2AirportCode
                      }
                      onChange={
                        handleChange
                      }
                      maxLength={3}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Terminal
                    </label>

                    <input
                      name="stop2Terminal"
                      value={
                        formData.stop2Terminal
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Layover
                    </label>

                    <input
                      name="stop2Layover"
                      value={
                        formData.stop2Layover
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </div>

                </div>
              </div>
            )}

          </div>

          {/* =========================
              INVENTORY
          ========================= */}

          <div className="form-section">
            <h3>
              Ticket Inventory
            </h3>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  Ticket Inventory
                </label>

                <input
                  type="number"
                  min="1"
                  name="ticketInventory"
                  value={
                    formData.ticketInventory
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="e.g. 10"
                />
              </div>

              <div className="form-group">
                <label>
                  PNR
                </label>

                <input
                  name="pnr"
                  value={
                    formData.pnr
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="e.g. ABC123"
                />
              </div>

            </div>
          </div>

          {/* =========================
              CUSTOMER + AGENT FARE
          ========================= */}

          <div className="form-section">

            <h3>
              Fare
            </h3>

            <div className="form-grid">

              {/* ADULT */}

              <div className="form-group">
                <label>
                  Adult Customer Fare
                </label>

                <input
                  type="number"
                  min="0"
                  name="adultFare"
                  value={
                    formData.adultFare
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="e.g. 2000"
                />
              </div>

              <div className="form-group">
                <label>
                  Adult Agent Fare
                </label>

                <input
                  type="number"
                  min="0"
                  name="agentAdultFare"
                  value={
                    formData.agentAdultFare
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="e.g. 1900"
                />
              </div>

              {/* CHILD */}

              <div className="form-group">
                <label>
                  Child Customer Fare
                </label>

                <input
                  type="number"
                  min="0"
                  name="childFare"
                  value={
                    formData.childFare
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="e.g. 1500"
                />
              </div>

              <div className="form-group">
                <label>
                  Child Agent Fare
                </label>

                <input
                  type="number"
                  min="0"
                  name="agentChildFare"
                  value={
                    formData.agentChildFare
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="e.g. 1400"
                />
              </div>

              {/* INFANT */}

              <div className="form-group">
                <label>
                  Infant Customer Fare
                </label>

                <input
                  type="number"
                  min="0"
                  name="infantFare"
                  value={
                    formData.infantFare
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="e.g. 500"
                />
              </div>

              <div className="form-group">
                <label>
                  Infant Agent Fare
                </label>

                <input
                  type="number"
                  min="0"
                  name="agentInfantFare"
                  value={
                    formData.agentInfantFare
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="e.g. 450"
                />
              </div>

            </div>
          </div>

          {/* =========================
              BAGGAGE
          ========================= */}

          <div className="form-section">

            <h3>
              Baggage
            </h3>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  Cabin Bag
                </label>

                <input
                  name="cabinBaggage"
                  value={
                    formData.cabinBaggage
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="e.g. 5 KG"
                />
              </div>

              <div className="form-group">
                <label>
                  Check-in Bag
                </label>

                <input
                  name="checkinBaggage"
                  value={
                    formData.checkinBaggage
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="e.g. 20 KG"
                />
              </div>

            </div>
          </div>

          {/* =========================
              BOOKING RULE
          ========================= */}

          <div className="form-section">

            <h3>
              Booking Rules
            </h3>

            <div className="form-group">

              <label>
                Booking Rule
              </label>

              <select
                name="bookingRule"
                value={
                  formData.bookingRule
                }
                onChange={
                  handleChange
                }
              >
                <option value="Refundable">
                  Refundable
                </option>

                <option value="Non-refundable">
                  Non-refundable
                </option>
              </select>

            </div>
          </div>

          {/* =========================
              BUTTONS
          ========================= */}

          <div className="add-flight-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={closeModal}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit-flight-btn"
              disabled={loading}
            >
              {loading
                ? "Adding Flight..."
                : "Add Flight"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default AddFlight;