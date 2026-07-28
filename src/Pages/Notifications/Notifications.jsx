import "./Notifications.css";
import { useState } from "react";
import {
  FaBell,
  FaCheckCircle,
  FaPlaneDeparture,
  FaTags,
  FaTrash,
} from "react-icons/fa";

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: <FaCheckCircle />,
      title: "Booking Confirmed",
      message:
        "Your Delhi to Dubai flight has been booked successfully.",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      icon: <FaPlaneDeparture />,
      title: "Check-in Reminder",
      message:
        "Online check-in opens 24 hours before departure.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      icon: <FaTags />,
      title: "Special Offer",
      message:
        "Get 20% OFF on your next international booking.",
      time: "Yesterday",
      read: true,
    },
  ]);

  const markAllRead = () => {
    setNotifications(
      notifications.map((item) => ({
        ...item,
        read: true,
      }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter((item) => item.id !== id)
    );
  };

  return (
    <section className="notifications-page">
      <div className="notifications-container">

        <div className="notifications-header">
          <div className="header-left">
            <FaBell className="bell-icon" />
            <div>
              <h1>Notifications</h1>
              <p>Stay updated with your bookings and latest offers.</p>
            </div>
          </div>

          <button
            className="mark-read-btn"
            onClick={markAllRead}
          >
            Mark All Read
          </button>
        </div>

        <div className="notifications-list">

          {notifications.length === 0 ? (
            <div className="empty-notification">
              <FaBell />
              <h3>No Notifications</h3>
              <p>You don't have any notifications yet.</p>
            </div>
          ) : (
            notifications.map((item) => (
              <div
                key={item.id}
                className={`notification-card ${
                  item.read ? "read" : "unread"
                }`}
              >
                <div className="notification-icon">
                  {item.icon}
                </div>

                <div className="notification-content">
                  <h3>{item.title}</h3>
                  <p>{item.message}</p>

                  <span>{item.time}</span>
                </div>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteNotification(item.id)
                  }
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}

        </div>

      </div>
    </section>
  );
}

export default Notifications;