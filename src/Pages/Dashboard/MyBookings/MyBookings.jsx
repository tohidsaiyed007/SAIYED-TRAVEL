import "./MyBookings.css";
import { useEffect, useState } from "react";

import {
  FaEye,
  FaTrash,
  FaPlane,
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaTimes,
} from "react-icons/fa";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] =
    useState([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [selectedBooking, setSelectedBooking] =
    useState(null);

  // ==========================================
  // GET BOOKINGS
  // ==========================================

  const fetchBookings = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://saiyed-travels-backend-1.onrender.com/api/bookings"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to fetch bookings"
        );
      }

      setBookings(data.bookings || []);
      setFilteredBookings(
        data.bookings || []
      );
    } catch (error) {
      console.error(
        "Bookings Error:",
        error
      );

      alert(
        "Unable to load bookings. Please make sure backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // LOAD BOOKINGS
  // ==========================================

  useEffect(() => {
    fetchBookings();
  }, []);

  // ==========================================
  // SEARCH
  // ==========================================

  useEffect(() => {
    const value =
      search.trim().toLowerCase();

    if (!value) {
      setFilteredBookings(bookings);
      return;
    }

    const result = bookings.filter(
      (booking) => {
        const passenger =
          booking.passenger || {};

        const flight =
          booking.flight || {};

        const customerName =
          `${passenger.firstName || ""} ${
            passenger.lastName || ""
          }`.toLowerCase();

        const email =
          (
            passenger.email || ""
          ).toLowerCase();

        const phone =
          (
            passenger.phone || ""
          ).toLowerCase();

        const flightNo =
          (
            flight.flightNo || ""
          ).toLowerCase();

        const airline =
          (
            flight.airline || ""
          ).toLowerCase();

        const from =
          (
            flight.fromCity || ""
          ).toLowerCase();

        const to =
          (
            flight.toCity || ""
          ).toLowerCase();

        const pnr =
          (
            booking.pnr || ""
          ).toLowerCase();

        return (
          customerName.includes(value) ||
          email.includes(value) ||
          phone.includes(value) ||
          flightNo.includes(value) ||
          airline.includes(value) ||
          from.includes(value) ||
          to.includes(value) ||
          pnr.includes(value)
        );
      }
    );

    setFilteredBookings(result);
  }, [search, bookings]);

  // ==========================================
  // DELETE BOOKING
  // ==========================================

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this booking?"
      );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `https://saiyed-travels-backend-1.onrender.com/api/bookings/${id}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to delete booking"
        );
      }

      alert(
        "Booking deleted successfully."
      );

      fetchBookings();

      if (
        selectedBooking &&
        selectedBooking._id === id
      ) {
        setSelectedBooking(null);
      }
    } catch (error) {
      console.error(
        "Delete Booking Error:",
        error
      );

      alert(
        error.message ||
          "Unable to delete booking."
      );
    }
  };

  // ==========================================
  // FORMAT DATE
  // ==========================================

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    try {
      return new Date(
        date
      ).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      );
    } catch {
      return date;
    }
  };

  // ==========================================
  // FORMAT PRICE
  // ==========================================

  const formatPrice = (price) => {
    return Number(
      price || 0
    ).toLocaleString(
      "en-IN"
    );
  };

  // ==========================================
  // CUSTOMER NAME
  // ==========================================

  const getCustomerName = (
    booking
  ) => {
    const passenger =
      booking.passenger || {};

    return `${passenger.firstName || ""} ${
      passenger.lastName || ""
    }`.trim() || "Unknown Customer";
  };

  // ==========================================
  // FLIGHT LOGO
  // ==========================================

  const getFlightLogo = (
    booking
  ) => {
    return booking.flight?.logo || "";
  };

  // ==========================================
  // ROUTE
  // ==========================================

  const getRoute = (
    booking
  ) => {
    const flight =
      booking.flight || {};

    const from =
      flight.fromCity || "-";

    const to =
      flight.toCity || "-";

    return `${from} → ${to}`;
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <section className="my-bookings-page">
        <div className="bookings-loading">
          <div className="loading-spinner"></div>

          <p>
            Loading customer bookings...
          </p>
        </div>
      </section>
    );
  }

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <section className="my-bookings-page">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="bookings-top">

        <div>
          <h1>
            My Bookings
          </h1>

          <p>
            Manage all customer flight bookings
          </p>
        </div>

        <div className="booking-count">
          <FaPlane />

          <span>
            {bookings.length}{" "}
            {bookings.length === 1
              ? "Booking"
              : "Bookings"}
          </span>
        </div>

      </div>

      {/* ======================================
          SEARCH
      ====================================== */}

      <div className="bookings-toolbar">

        <div className="booking-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Search customer, flight, PNR, route..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        <button
          className="refresh-btn"
          onClick={fetchBookings}
        >
          Refresh
        </button>

      </div>

      {/* ======================================
          TABLE
      ====================================== */}

      {filteredBookings.length === 0 ? (

        <div className="no-bookings">

          <div className="no-bookings-icon">
            <FaPlane />
          </div>

          <h2>
            No Bookings Found
          </h2>

          <p>
            Customer bookings will appear here
            after a successful payment.
          </p>

        </div>

      ) : (

        <div className="bookings-card">

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>#</th>

                  <th>
                    Customer
                  </th>

                  <th>
                    Flight
                  </th>

                  <th>
                    Route
                  </th>

                  <th>
                    Travel Date
                  </th>

                  <th>
                    Seat
                  </th>

                  <th>
                    Amount
                  </th>

                  <th>
                    Payment
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredBookings.map(
                  (booking, index) => {

                    const passenger =
                      booking.passenger ||
                      {};

                    const flight =
                      booking.flight ||
                      {};

                    return (

                      <tr
                        key={
                          booking._id
                        }
                      >

                        {/* NUMBER */}

                        <td>
                          {index + 1}
                        </td>

                        {/* CUSTOMER */}

                        <td>

                          <div className="customer-cell">

                            <div className="customer-avatar">
                              {(
                                passenger
                                  .firstName ||
                                "U"
                              )
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <div>

                              <strong>
                                {getCustomerName(
                                  booking
                                )}
                              </strong>

                              <small>
                                {
                                  passenger.email ||
                                  "-"
                                }
                              </small>

                            </div>

                          </div>

                        </td>

                        {/* FLIGHT */}

                        <td>

                          <div className="flight-cell">

                            {getFlightLogo(
                              booking
                            ) ? (

                              <img
                                src={getFlightLogo(
                                  booking
                                )}
                                alt={
                                  flight.airline ||
                                  "Airline"
                                }
                                onError={(e) => {
                                  e.currentTarget.style.display =
                                    "none";
                                }}
                              />

                            ) : (

                              <div className="flight-logo-placeholder">
                                <FaPlane />
                              </div>

                            )}

                            <div>

                              <strong>
                                {
                                  flight.airline ||
                                  "-"
                                }
                              </strong>

                              <small>
                                {
                                  flight.flightNo ||
                                  "-"
                                }
                              </small>

                            </div>

                          </div>

                        </td>

                        {/* ROUTE */}

                        <td>

                          <div className="route-cell">

                            <strong>
                              {getRoute(
                                booking
                              )}
                            </strong>

                            <small>

                              {
                                flight.fromCode ||
                                ""
                              }

                              {flight.fromCode &&
                                flight.toCode
                                ? " → "
                                : ""}

                              {
                                flight.toCode ||
                                ""
                              }

                            </small>

                          </div>

                        </td>

                        {/* DATE */}

                        <td>

                          <div className="date-cell">

                            <FaCalendarAlt />

                            <span>
                              {
                                flight.departureDate ||
                                "-"
                              }
                            </span>

                          </div>

                        </td>

                        {/* SEAT */}

                        <td>

                          <span className="seat-badge">
                            {booking.seat ||
                              "-"}
                          </span>

                        </td>

                        {/* AMOUNT */}

                        <td>

                          <strong className="amount">
                            ₹{" "}
                            {formatPrice(
                              booking.total
                            )}
                          </strong>

                        </td>

                        {/* PAYMENT */}

                        <td>

                          <span
                            className={`status-badge ${
                              (
                                booking.paymentStatus ||
                                "Pending"
                              )
                                .toLowerCase()
                            }`}
                          >
                            {
                              booking.paymentStatus ||
                              "Pending"
                            }
                          </span>

                        </td>

                        {/* BOOKING STATUS */}

                        <td>

                          <span
                            className={`booking-status ${
                              (
                                booking.bookingStatus ||
                                "Pending"
                              )
                                .toLowerCase()
                            }`}
                          >
                            {
                              booking.bookingStatus ||
                              "Pending"
                            }
                          </span>

                        </td>

                        {/* ACTION */}

                        <td>

                          <div className="action-buttons">

                            <button
                              className="view-btn"
                              title="View Booking"
                              onClick={() =>
                                setSelectedBooking(
                                  booking
                                )
                              }
                            >
                              <FaEye />
                            </button>

                            <button
                              className="delete-btn"
                              title="Delete Booking"
                              onClick={() =>
                                handleDelete(
                                  booking._id
                                )
                              }
                            >
                              <FaTrash />
                            </button>

                          </div>

                        </td>

                      </tr>

                    );
                  }
                )}

              </tbody>

            </table>

          </div>

        </div>

      )}

      {/* ======================================
          DETAILS MODAL
      ====================================== */}

      {selectedBooking && (

        <div
          className="booking-modal-overlay"
          onClick={() =>
            setSelectedBooking(
              null
            )
          }
        >

          <div
            className="booking-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="booking-modal-header">

              <div>

                <h2>
                  Booking Details
                </h2>

                <p>
                  {
                    selectedBooking.bookingId
                  }
                  {" • "}
                  {
                    selectedBooking.pnr
                  }
                </p>

              </div>

              <button
                className="modal-close"
                onClick={() =>
                  setSelectedBooking(
                    null
                  )
                }
              >
                <FaTimes />
              </button>

            </div>

            {/* CUSTOMER */}

            <div className="details-section">

              <h3>
                <FaUser />
                Customer Details
              </h3>

              <div className="details-grid">

                <div>
                  <span>
                    Name
                  </span>

                  <strong>
                    {getCustomerName(
                      selectedBooking
                    )}
                  </strong>
                </div>

                <div>
                  <span>
                    Email
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .passenger
                        ?.email || "-"
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Phone
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .passenger
                        ?.phone || "-"
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Nationality
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .passenger
                        ?.nationality ||
                      "-"
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Passport
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .passenger
                        ?.passport ||
                      "-"
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    City
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .passenger
                        ?.city ||
                      "-"
                    }
                  </strong>
                </div>

              </div>

            </div>

            {/* FLIGHT */}

            <div className="details-section">

              <h3>
                <FaPlane />
                Flight Details
              </h3>

              <div className="flight-detail-header">

                {selectedBooking.flight
                  ?.logo ? (

                  <img
                    src={
                      selectedBooking
                        .flight
                        .logo
                    }
                    alt="Airline"
                    onError={(e) => {
                      e.currentTarget.style.display =
                        "none";
                    }}
                  />

                ) : (

                  <div className="detail-logo-placeholder">
                    <FaPlane />
                  </div>

                )}

                <div>

                  <strong>
                    {
                      selectedBooking
                        .flight
                        ?.airline ||
                      "-"
                    }
                  </strong>

                  <span>
                    {
                      selectedBooking
                        .flight
                        ?.flightNo ||
                      "-"
                    }
                  </span>

                </div>

              </div>

              <div className="route-detail">

                <div>

                  <span>
                    FROM
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .flight
                        ?.fromCity ||
                      "-"
                    }
                  </strong>

                  <small>
                    {
                      selectedBooking
                        .flight
                        ?.fromAirport ||
                      ""
                    }

                    {" "}

                    (
                    {
                      selectedBooking
                        .flight
                        ?.fromCode ||
                      ""
                    }
                    )
                  </small>

                </div>

                <div className="route-arrow">
                  →
                </div>

                <div>

                  <span>
                    TO
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .flight
                        ?.toCity ||
                      "-"
                    }
                  </strong>

                  <small>
                    {
                      selectedBooking
                        .flight
                        ?.toAirport ||
                      ""
                    }

                    {" "}

                    (
                    {
                      selectedBooking
                        .flight
                        ?.toCode ||
                      ""
                    }
                    )
                  </small>

                </div>

              </div>

              <div className="details-grid">

                <div>
                  <span>
                    Departure
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .flight
                        ?.departureDate ||
                      "-"
                    }

                    {" • "}

                    {
                      selectedBooking
                        .flight
                        ?.departureTime ||
                      "-"
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Arrival
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .flight
                        ?.arrivalDate ||
                      "-"
                    }

                    {" • "}

                    {
                      selectedBooking
                        .flight
                        ?.arrivalTime ||
                      "-"
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Duration
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .flight
                        ?.duration ||
                      "-"
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Aircraft
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .flight
                        ?.aircraft ||
                      "-"
                    }
                  </strong>
                </div>

              </div>

            </div>

            {/* TRAVEL */}

            <div className="details-section">

              <h3>
                Booking Information
              </h3>

              <div className="details-grid">

                <div>
                  <span>
                    Seat
                  </span>

                  <strong>
                    {
                      selectedBooking.seat ||
                      "-"
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Meal
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .meal
                        ?.name ||
                      "No Meal"
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Baggage
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .baggage
                        ?.weight ||
                      "-"
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Total
                  </span>

                  <strong className="modal-price">
                    ₹{" "}
                    {formatPrice(
                      selectedBooking.total
                    )}
                  </strong>
                </div>

                <div>
                  <span>
                    Payment
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .paymentStatus ||
                      "-"
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Booking Status
                  </span>

                  <strong>
                    {
                      selectedBooking
                        .bookingStatus ||
                      "-"
                    }
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default MyBookings;