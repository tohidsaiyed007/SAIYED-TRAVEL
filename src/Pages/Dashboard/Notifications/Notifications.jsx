import "./Notifications.css";

import {
  FaBell,
  FaCheckCircle,
  FaPlaneDeparture,
  FaMoneyBillWave,
  FaExclamationTriangle,
} from "react-icons/fa";

function Notifications() {

  const notifications = [

    {
      id:1,
      icon:<FaPlaneDeparture />,
      title:"New Booking",
      message:"A new Dubai flight booking has been received.",
      time:"2 min ago",
      color:"#0B5ED7"
    },

    {
      id:2,
      icon:<FaMoneyBillWave />,
      title:"Payment Success",
      message:"₹28,500 payment received successfully.",
      time:"15 min ago",
      color:"#198754"
    },

    {
      id:3,
      icon:<FaCheckCircle />,
      title:"Ticket Confirmed",
      message:"Booking #ST10245 has been confirmed.",
      time:"40 min ago",
      color:"#fd7e14"
    },

    {
      id:4,
      icon:<FaExclamationTriangle />,
      title:"Refund Request",
      message:"Customer requested ticket refund.",
      time:"1 hour ago",
      color:"#dc3545"
    }

  ];

  return (

    <section className="dashboard-notifications">

      <div className="notification-header">

        <h2>

          Notifications

        </h2>

        <FaBell className="notification-bell"/>

      </div>

      <div className="notification-list">

        {

          notifications.map((item)=>(

            <div
              className="notification-item"
              key={item.id}
            >

              <div
                className="notification-icon"
                style={{
                  background:item.color
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

        }

      </div>

    </section>

  );

}

export default Notifications;