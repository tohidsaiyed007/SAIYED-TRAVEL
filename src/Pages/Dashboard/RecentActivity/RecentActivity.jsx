import "./RecentActivity.css";

import {
  FaCheckCircle,
  FaMoneyBillWave,
  FaPlaneDeparture,
  FaTimesCircle,
} from "react-icons/fa";

function RecentActivity() {

  const activities = [

    {
      id:1,
      icon:<FaPlaneDeparture />,
      title:"New Flight Booked",
      description:"Delhi → Dubai | Emirates",
      time:"2 Minutes Ago",
      color:"#0B5ED7"
    },

    {
      id:2,
      icon:<FaMoneyBillWave />,
      title:"Payment Received",
      description:"₹28,500 Successfully Paid",
      time:"12 Minutes Ago",
      color:"#198754"
    },

    {
      id:3,
      icon:<FaCheckCircle />,
      title:"Ticket Confirmed",
      description:"Booking #ST10245 Confirmed",
      time:"35 Minutes Ago",
      color:"#fd7e14"
    },

    {
      id:4,
      icon:<FaTimesCircle />,
      title:"Booking Cancelled",
      description:"Customer Cancelled Ticket",
      time:"1 Hour Ago",
      color:"#dc3545"
    }

  ];

  return (

    <section className="recent-activity">

      <div className="activity-header">

        <h2>

          Recent Activity

        </h2>

        <p>

          Latest Dashboard Updates

        </p>

      </div>

      <div className="activity-list">

        {

          activities.map((item)=>(

            <div
              className="activity-item"
              key={item.id}
            >

              <div
                className="activity-icon"
                style={{
                  background:item.color
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

        }

      </div>

    </section>

  );

}

export default RecentActivity;