// import "./Charts.css";

// import {
//   FaArrowTrendUp,
//   FaChartLine,
// } from "react-icons/fa6";

// function Charts() {

//   return (

//     <section className="dashboard-charts">

//       {/* Revenue */}

//       <div className="chart-card">

//         <div className="chart-header">

//           <div>

//             <h2>Revenue Overview</h2>

//             <p>Monthly Revenue Statistics</p>

//           </div>

//           <FaArrowTrendUp className="chart-icon" />

//         </div>

//         <div className="chart-placeholder revenue-chart">

//           <div className="graph-line"></div>

//           <span>Revenue Chart</span>

//         </div>

//       </div>

//       {/* Booking */}

//       <div className="chart-card">

//         <div className="chart-header">

//           <div>

//             <h2>Bookings</h2>

//             <p>Flight Booking Analytics</p>

//           </div>

//           <FaChartLine className="chart-icon" />

//         </div>

//         <div className="chart-placeholder booking-chart">

//           <div className="graph-bars">

//             <span></span>

//             <span></span>

//             <span></span>

//             <span></span>

//             <span></span>

//             <span></span>

//           </div>

//         </div>

//       </div>

//     </section>

//   );

// }

// export default Charts;



















import "./Charts.css";

import { useEffect, useMemo, useState } from "react";

import {
  FaArrowTrendUp,
  FaChartLine,
} from "react-icons/fa6";

const API_URL =
  "https://saiyed-travels-backend-1.onrender.com/api/bookings";

function Charts() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // ==========================================
  // FETCH REAL BOOKINGS
  // ==========================================

  const fetchBookings = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to fetch bookings"
        );
      }

      setBookings(data.bookings || []);
    } catch (error) {
      console.error(
        "Charts Booking Error:",
        error
      );

      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // ==========================================
  // MONTHLY DATA
  // ==========================================

  const monthlyData = useMemo(() => {
    const currentYear =
      new Date().getFullYear();

    const revenue = Array(12).fill(0);
    const bookingCount = Array(12).fill(0);

    bookings.forEach((booking) => {
      const dateValue =
        booking.createdAt ||
        booking.bookingDate ||
        booking.created_at;

      if (!dateValue) return;

      const date = new Date(dateValue);

      if (isNaN(date.getTime())) return;

      if (date.getFullYear() !== currentYear) {
        return;
      }

      const month = date.getMonth();

      bookingCount[month] += 1;

      revenue[month] += Number(
        booking.total || 0
      );
    });

    return {
      revenue,
      bookingCount,
    };
  }, [bookings]);

  // ==========================================
  // MAX VALUES
  // ==========================================

  const maxRevenue =
    Math.max(...monthlyData.revenue, 1);

  const maxBookings =
    Math.max(
      ...monthlyData.bookingCount,
      1
    );

  // ==========================================
  // REVENUE FORMAT
  // ==========================================

  const formatRevenue = (amount) => {
    const value = Number(amount || 0);

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    }

    if (value >= 1000) {
      return `₹${(value / 1000).toFixed(1)}K`;
    }

    return `₹${value.toLocaleString("en-IN")}`;
  };

  // ==========================================
  // BAR HEIGHT
  // ==========================================

  const getBarHeight = (value, max) => {
    if (!value) return 4;

    return Math.max(
      (value / max) * 100,
      6
    );
  };

  return (
    <section className="dashboard-charts">

      {/* ======================================
          REVENUE
      ====================================== */}

      <div className="chart-card">

        <div className="chart-header">

          <div>
            <h2>Revenue Overview</h2>

            <p>
              Monthly Revenue Statistics
            </p>
          </div>

          <FaArrowTrendUp className="chart-icon" />
        </div>

        <div className="real-chart">

          {loading ? (
            <div className="chart-loading">
              Loading revenue...
            </div>
          ) : (
            <div className="bar-chart">

              {months.map((month, index) => {

                const value =
                  monthlyData.revenue[index];

                const height =
                  getBarHeight(
                    value,
                    maxRevenue
                  );

                return (
                  <div
                    className="bar-item"
                    key={month}
                  >

                    <div className="bar-value">
                      {value > 0
                        ? formatRevenue(value)
                        : ""}
                    </div>

                    <div className="bar-area">

                      <div
                        className="revenue-bar"
                        style={{
                          height: `${height}%`,
                        }}
                        title={`${month}: ${formatRevenue(
                          value
                        )}`}
                      ></div>

                    </div>

                    <span>
                      {month}
                    </span>

                  </div>
                );
              })}

            </div>
          )}

        </div>
      </div>


      {/* ======================================
          BOOKINGS
      ====================================== */}

      <div className="chart-card">

        <div className="chart-header">

          <div>
            <h2>Bookings</h2>

            <p>
              Monthly Flight Booking Analytics
            </p>
          </div>

          <FaChartLine className="chart-icon" />
        </div>

        <div className="real-chart">

          {loading ? (
            <div className="chart-loading">
              Loading bookings...
            </div>
          ) : (
            <div className="bar-chart">

              {months.map((month, index) => {

                const value =
                  monthlyData.bookingCount[index];

                const height =
                  getBarHeight(
                    value,
                    maxBookings
                  );

                return (
                  <div
                    className="bar-item"
                    key={month}
                  >

                    <div className="bar-value booking-value">
                      {value > 0
                        ? value
                        : ""}
                    </div>

                    <div className="bar-area">

                      <div
                        className="booking-bar"
                        style={{
                          height: `${height}%`,
                        }}
                        title={`${month}: ${value} bookings`}
                      ></div>

                    </div>

                    <span>
                      {month}
                    </span>

                  </div>
                );
              })}

            </div>
          )}

        </div>
      </div>

    </section>
  );
}

export default Charts;