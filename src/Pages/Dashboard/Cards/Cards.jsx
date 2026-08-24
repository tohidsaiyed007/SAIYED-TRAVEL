import "./Cards.css";

import {
  FaTicketAlt,
  FaRupeeSign,
  FaUsers,
  FaPlaneDeparture,
} from "react-icons/fa";

function Cards() {

  const dashboardCards = [

    {
      id:1,
      title:"Total Bookings",
      value:"1,245",
      icon:<FaTicketAlt />,
      color:"#0B5ED7",
      growth:"+12%"
    },

    {
      id:2,
      title:"Total Revenue",
      value:"₹18.5L",
      icon:<FaRupeeSign />,
      color:"#198754",
      growth:"+18%"
    },

    {
      id:3,
      title:"Customers",
      value:"856",
      icon:<FaUsers />,
      color:"#fd7e14",
      growth:"+8%"
    },

    {
      id:4,
      title:"Flights",
      value:"152",
      icon:<FaPlaneDeparture />,
      color:"#dc3545",
      growth:"+5%"
    }

  ];

  return (

    <section className="dashboard-cards">

      {

        dashboardCards.map((card)=>(

          <div
            className="card-box"
            key={card.id}
          >

            <div className="card-top">

              <div
                className="card-icon"
                style={{
                  background:card.color
                }}
              >

                {card.icon}

              </div>

              <span className="growth">

                {card.growth}

              </span>

            </div>

            <h3>

              {card.value}

            </h3>

            <p>

              {card.title}

            </p>

          </div>

        ))

      }

    </section>

  );

}

export default Cards;