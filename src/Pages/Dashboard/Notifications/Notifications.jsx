// import "./Notifications.css";

// import {
//   FaBell,
//   FaCheckCircle,
//   FaPlaneDeparture,
//   FaMoneyBillWave,
//   FaExclamationTriangle,
// } from "react-icons/fa";

// function Notifications() {

//   const notifications = [

//     {
//       id:1,
//       icon:<FaPlaneDeparture />,
//       title:"New Booking",
//       message:"A new Dubai flight booking has been received.",
//       time:"2 min ago",
//       color:"#0B5ED7"
//     },

//     {
//       id:2,
//       icon:<FaMoneyBillWave />,
//       title:"Payment Success",
//       message:"₹28,500 payment received successfully.",
//       time:"15 min ago",
//       color:"#198754"
//     },

//     {
//       id:3,
//       icon:<FaCheckCircle />,
//       title:"Ticket Confirmed",
//       message:"Booking #ST10245 has been confirmed.",
//       time:"40 min ago",
//       color:"#fd7e14"
//     },

//     {
//       id:4,
//       icon:<FaExclamationTriangle />,
//       title:"Refund Request",
//       message:"Customer requested ticket refund.",
//       time:"1 hour ago",
//       color:"#dc3545"
//     }

//   ];

//   return (

//     <section className="dashboard-notifications">

//       <div className="notification-header">

//         <h2>

//           Notifications

//         </h2>

//         <FaBell className="notification-bell"/>

//       </div>

//       <div className="notification-list">

//         {

//           notifications.map((item)=>(

//             <div
//               className="notification-item"
//               key={item.id}
//             >

//               <div
//                 className="notification-icon"
//                 style={{
//                   background:item.color
//                 }}
//               >

//                 {item.icon}

//               </div>

//               <div className="notification-content">

//                 <h4>

//                   {item.title}

//                 </h4>

//                 <p>

//                   {item.message}

//                 </p>

//                 <span>

//                   {item.time}

//                 </span>

//               </div>

//             </div>

//           ))

//         }

//       </div>

//     </section>

//   );

// }

// export default Notifications;











import "./Notifications.css";

import { useEffect, useState } from "react";

import {
  FaBell,
  FaPlaneDeparture,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://saiyed-travels-backend-1.onrender.com/api/bookings";

  // ==========================================
  // FETCH REAL BOOKINGS
  // ==========================================

  const fetchNotifications = async () => {
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
            a.createdAt || a.bookingDate || 0
          );

          const dateB = new Date(
            b.createdAt || b.bookingDate || 0
          );

          return dateB - dateA;
        })
        .slice(0, 5);

      const formatted = latestBookings.map(
        (booking, index) => {
          const passenger =
            booking.passenger || {};

          const flight =
            booking.flight || {};

          const name =
            `${passenger.firstName || ""} ${
              passenger.lastName || ""
            }`.trim() || "Customer";

          const amount =
            Number(booking.total || 0);

          const bookingId =
            booking.bookingId ||
            booking.pnr ||
            booking._id;

          const createdAt = new Date(
            booking.createdAt ||
              booking.bookingDate ||
              Date.now()
          );

          return {
            id:
              booking._id || index,

            icon:
              booking.paymentStatus ===
              "paid" ? (
                <FaMoneyBillWave />
              ) : (
                <FaPlaneDeparture />
              ),

            title:
              booking.paymentStatus ===
              "paid"
                ? "Payment Received"
                : "New Booking",

            message:
              booking.paymentStatus ===
              "paid"
                ? `${name} paid ₹${amount.toLocaleString(
                    "en-IN"
                  )}.`
                : `${name} booked ${
                    flight.airline ||
                    "a flight"
                  }.`,

            time: getTimeAgo(createdAt),

            color:
              booking.paymentStatus ===
              "paid"
                ? "#198754"
                : "#0B5ED7",

            bookingId,
          };
        }
      );

      setNotifications(formatted);
    } catch (error) {
      console.error(
        "Notifications Error:",
        error
      );

      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // TIME AGO
  // ==========================================

  const getTimeAgo = (date) => {
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
    fetchNotifications();

    // Refresh every 30 seconds
    const interval = setInterval(
      fetchNotifications,
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
    <section className="dashboard-notifications">

      <div className="notification-header">

        <div>
          <h2>Notifications</h2>

          <p>
            Latest booking activity
          </p>
        </div>

        <FaBell className="notification-bell" />

      </div>

      <div className="notification-list">

        {loading ? (
          <div className="notification-empty">
            Loading notifications...
          </div>
        ) : notifications.length === 0 ? (
          <div className="notification-empty">
            No new notifications
          </div>
        ) : (
          notifications.map((item) => (
            <div
              className="notification-item"
              key={item.id}
            >

              <div
                className="notification-icon"
                style={{
                  background: item.color,
                }}
              >
                {item.icon}
              </div>

              <div className="notification-content">

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.message}
                </p>

                <span>
                  {item.time}
                </span>

              </div>

            </div>
          ))
        )}

      </div>

    </section>
  );
}

export default Notifications;