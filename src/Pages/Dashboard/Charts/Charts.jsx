import "./Charts.css";

import {
  FaArrowTrendUp,
  FaChartLine,
} from "react-icons/fa6";

function Charts() {

  return (

    <section className="dashboard-charts">

      {/* Revenue */}

      <div className="chart-card">

        <div className="chart-header">

          <div>

            <h2>Revenue Overview</h2>

            <p>Monthly Revenue Statistics</p>

          </div>

          <FaArrowTrendUp className="chart-icon" />

        </div>

        <div className="chart-placeholder revenue-chart">

          <div className="graph-line"></div>

          <span>Revenue Chart</span>

        </div>

      </div>

      {/* Booking */}

      <div className="chart-card">

        <div className="chart-header">

          <div>

            <h2>Bookings</h2>

            <p>Flight Booking Analytics</p>

          </div>

          <FaChartLine className="chart-icon" />

        </div>

        <div className="chart-placeholder booking-chart">

          <div className="graph-bars">

            <span></span>

            <span></span>

            <span></span>

            <span></span>

            <span></span>

            <span></span>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Charts;