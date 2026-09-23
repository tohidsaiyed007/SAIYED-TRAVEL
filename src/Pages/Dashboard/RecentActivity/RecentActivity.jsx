import "./RecentActivity.css";

import { useEffect, useState } from "react";

import {
  FaCheckCircle,
  FaMoneyBillWave,
  FaPlaneDeparture,
  FaTimesCircle,
} from "react-icons/fa";

const API_URL =
  "https://saiyed-travels-backend-1.onrender.com/api/bookings";

function RecentActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // FETCH REAL BOOKINGS
  // ==========================================

  const fetchActivities = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to fetch bookings"
        );
      }

      const bookings = data.bookings || [];

      // Latest bookings first
      const latestBookings = [...bookings]
        .sort((a, b) => {
          const dateA = new Date(
            a.createdAt ||
              a.bookingDate ||
              0
          );

          const dateB = new Date(
            b.createdAt ||
              b.bookingDate ||
              0
          );

          return dateB - dateA;
        })
        .slice(0, 6);

      const formattedActivities =
        latestBookings.map(
          (booking, index) => {
            const passenger =
              booking.passenger || {};

            const flight =
              booking.flight || {};

            const customerName =
              `${passenger.firstName || ""} ${
                passenger.lastName || ""
              }`.trim() || "Customer";

            const airline =
              flight.airline || "Flight";

            const from =
              flight.from || "Departure";

            const to =
              flight.to || "Destination";

            const amount =
              Number(booking.total || 0);

            const bookingStatus =
              String(
                booking.bookingStatus ||
                  ""
              ).toLowerCase();

            const paymentStatus =
              String(
                booking.paymentStatus ||
                  ""
              ).toLowerCase();

            let title =
              "New Flight Booked";

            let description =
              `${customerName} | ${from} → ${to} | ${airline}`;

            let icon = (
              <FaPlaneDeparture />
            );

            let color = "#0B5ED7";

            // ==============================
            // CANCELLED
            // ==============================

            if (
              bookingStatus.includes(
                "cancel"
              ) ||
              bookingStatus.includes(
                "reject"
              )
            ) {
              title = "Booking Cancelled";

              description =
                `${customerName} cancelled booking`;

              icon = (
                <FaTimesCircle />
              );

              color = "#dc3545";
            }

            // ==============================
            // CONFIRMED
            // ==============================

            else if (
              bookingStatus.includes(
                "confirm"
              ) ||
              bookingStatus.includes(
                "approved"
              )
            ) {
              title = "Ticket Confirmed";

              description =
                `${customerName} | ${from} → ${to}`;

              icon = (
                <FaCheckCircle />
              );

              color = "#fd7e14";
            }

            // ==============================
            // PAYMENT
            // ==============================

            else if (
              paymentStatus === "paid" ||
              paymentStatus ===
                "completed" ||
              paymentStatus ===
                "success" ||
              paymentStatus ===
                "successful"
            ) {
              title =
                "Payment Received";

              description =
                `${customerName} paid ₹${amount.toLocaleString(
                  "en-IN"
                )}`;

              icon = (
                <FaMoneyBillWave />
              );

              color = "#198754";
            }

            return {
              id:
                booking._id ||
                index,

              title,

              description,

              time: getTimeAgo(
                booking.createdAt ||
                  booking.bookingDate
              ),

              icon,

              color,
            };
          }
        );

      setActivities(
        formattedActivities
      );
    } catch (error) {
      console.error(
        "Recent Activity Error:",
        error
      );

      setActivities([]);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // TIME AGO
  // ==========================================

  const getTimeAgo = (dateValue) => {
    if (!dateValue) {
      return "Recently";
    }

    const date = new Date(dateValue);

    if (isNaN(date.getTime())) {
      return "Recently";
    }

    const now = new Date();

    const seconds = Math.floor(
      (now - date) / 1000
    );

    if (seconds < 60) {
      return "Just now";
    }

    const minutes = Math.floor(
      seconds / 60
    );

    if (minutes < 60) {
      return `${minutes} min ago`;
    }

    const hours = Math.floor(
      minutes / 60
    );

    if (hours < 24) {
      return `${hours} hour${
        hours > 1 ? "s" : ""
      } ago`;
    }

    const days = Math.floor(
      hours / 24
    );

    if (days < 30) {
      return `${days} day${
        days > 1 ? "s" : ""
      } ago`;
    }

    return date.toLocaleDateString(
      "en-IN"
    );
  };

  // ==========================================
  // LOAD
  // ==========================================

  useEffect(() => {
    fetchActivities();

    // Automatically refresh
    const interval = setInterval(
      fetchActivities,
      30000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  // ==========================================
  // UI
  // ==========================================

  return (
    <section className="recent-activity">

      <div className="activity-header">

        <div>
          <h2>
            Recent Activity
          </h2>

          <p>
            Latest Dashboard Updates
          </p>
        </div>

        <button
          className="activity-refresh"
          onClick={fetchActivities}
        >
          Refresh
        </button>

      </div>

      <div className="activity-list">

        {loading ? (
          <div className="activity-empty">
            Loading activity...
          </div>
        ) : activities.length === 0 ? (
          <div className="activity-empty">
            No recent activity
          </div>
        ) : (
          activities.map((item) => (
            <div
              className="activity-item"
              key={item.id}
            >

              <div
                className="activity-icon"
                style={{
                  background:
                    item.color,
                }}
              >
                {item.icon}
              </div>

              <div className="activity-content">

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.description}
                </p>

              </div>

              <span className="activity-time">
                {item.time}
              </span>

            </div>
          ))
        )}

      </div>

    </section>
  );
}

export default RecentActivity;