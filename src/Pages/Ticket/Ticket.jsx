import "./Ticket.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import {
  FaPlaneDeparture,
  FaQrcode,
  FaDownload,
  FaPrint,
  FaCheckCircle,
} from "react-icons/fa";

function Ticket() {

  const ticket = {
    bookingId: "ST240001",
    pnr: "AB12CD",
    passenger: "Tohid Saiyed",
    airline: "IndiGo",
    flightNo: "6E-214",
    from: "Delhi",
    to: "Mumbai",
    departure: "08:20 AM",
    arrival: "10:30 AM",
    date: "15 July 2026",
    seat: "3A",
    meal: "Veg Meal",
    baggage: "20 KG",
    payment: "Paid",
    amount: "₹2499",
  };

  return (

    <>

      <Navbar />

      <section className="ticket-page">

        <div className="ticket-card">

          <div className="ticket-header">

            <FaPlaneDeparture className="plane-icon"/>

            <div>

              <h1>Saiyed Travels</h1>

              <p>E-Ticket / Boarding Pass</p>

            </div>

          </div>

          <div className="ticket-status">

            <FaCheckCircle />

            Booking Confirmed

          </div>

          <div className="ticket-grid">

            <div>

              <span>Passenger</span>

              <h3>{ticket.passenger}</h3>

            </div>

            <div>

              <span>Booking ID</span>

              <h3>{ticket.bookingId}</h3>

            </div>

            <div>

              <span>PNR</span>

              <h3>{ticket.pnr}</h3>

            </div>

            <div>

              <span>Flight</span>

              <h3>{ticket.flightNo}</h3>

            </div>

            <div>

              <span>Airline</span>

              <h3>{ticket.airline}</h3>

            </div>

            <div>

              <span>Date</span>

              <h3>{ticket.date}</h3>

            </div>

            <div>

              <span>Departure</span>

              <h3>{ticket.departure}</h3>

            </div>

            <div>

              <span>Arrival</span>

              <h3>{ticket.arrival}</h3>

            </div>

            <div>

              <span>From</span>

              <h3>{ticket.from}</h3>

            </div>

            <div>

              <span>To</span>

              <h3>{ticket.to}</h3>

            </div>

                        <div>

              <span>Seat</span>

              <h3>{ticket.seat}</h3>

            </div>

            <div>

              <span>Meal</span>

              <h3>{ticket.meal}</h3>

            </div>

            <div>

              <span>Baggage</span>

              <h3>{ticket.baggage}</h3>

            </div>

            <div>

              <span>Amount Paid</span>

              <h3>{ticket.amount}</h3>

            </div>

          </div>

          {/* Route */}

          <div className="route-box">

            <div>

              <h2>{ticket.from}</h2>

              <span>Departure</span>

            </div>

            <div className="route-line">

              ✈──────────────✈

            </div>

            <div>

              <h2>{ticket.to}</h2>

              <span>Arrival</span>

            </div>

          </div>

          {/* QR & Payment */}

          <div className="ticket-footer">

            <div className="qr-box">

              <FaQrcode className="qr-icon"/>

              <p>Scan at Airport</p>

            </div>

            <div className="payment-box">

              <h3>Payment Status</h3>

              <span className="paid-status">

                <FaCheckCircle />

                {ticket.payment}

              </span>

            </div>

          </div>

          {/* Buttons */}

          <div className="ticket-buttons">

            <button className="download-btn">

              <FaDownload />

              Download Ticket

            </button>

            <button
              className="print-btn"
              onClick={() => window.print()}
            >

              <FaPrint />

              Print Ticket

            </button>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default Ticket;