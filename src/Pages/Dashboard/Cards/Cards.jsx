// // import "./Cards.css";

// // import {
// //   FaTicketAlt,
// //   FaRupeeSign,
// //   FaUsers,
// //   FaPlaneDeparture,
// // } from "react-icons/fa";

// // function Cards() {

// //   const dashboardCards = [

// //     {
// //       id:1,
// //       title:"Total Bookings",
// //       value:"1,245",
// //       icon:<FaTicketAlt />,
// //       color:"#0B5ED7",
// //       growth:"+12%"
// //     },

// //     {
// //       id:2,
// //       title:"Total Revenue",
// //       value:"₹18.5L",
// //       icon:<FaRupeeSign />,
// //       color:"#198754",
// //       growth:"+18%"
// //     },

// //     {
// //       id:3,
// //       title:"Customers",
// //       value:"856",
// //       icon:<FaUsers />,
// //       color:"#fd7e14",
// //       growth:"+8%"
// //     },

// //     {
// //       id:4,
// //       title:"Flights",
// //       value:"152",
// //       icon:<FaPlaneDeparture />,
// //       color:"#dc3545",
// //       growth:"+5%"
// //     }

// //   ];

// //   return (

// //     <section className="dashboard-cards">

// //       {

// //         dashboardCards.map((card)=>(

// //           <div
// //             className="card-box"
// //             key={card.id}
// //           >

// //             <div className="card-top">

// //               <div
// //                 className="card-icon"
// //                 style={{
// //                   background:card.color
// //                 }}
// //               >

// //                 {card.icon}

// //               </div>

// //               <span className="growth">

// //                 {card.growth}

// //               </span>

// //             </div>

// //             <h3>

// //               {card.value}

// //             </h3>

// //             <p>

// //               {card.title}

// //             </p>

// //           </div>

// //         ))

// //       }

// //     </section>

// //   );
// // }

// // export default Cards;










// import "./Cards.css";

// import { useEffect, useState } from "react";

// import {
//   FaTicketAlt,
//   FaRupeeSign,
//   FaUsers,
//   FaPlaneDeparture,
// } from "react-icons/fa";

// function Cards() {
//   const [stats, setStats] = useState({
//     totalBookings: 0,
//     totalRevenue: 0,
//     customers: 0,
//     flights: 0,
//   });

//   const [loading, setLoading] = useState(true);

//   // ==========================================
//   // GET REAL DASHBOARD DATA
//   // ==========================================

//   const fetchDashboardData = async () => {
//     try {
//       setLoading(true);

//       const response = await fetch(
//         "https://saiyed-travels-backend-1.onrender.com/api/bookings"
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message ||
//             "Unable to fetch bookings"
//         );
//       }

//       const bookings = data.bookings || [];

//       // ========================================
//       // TOTAL BOOKINGS
//       // ========================================

//       const totalBookings =
//         bookings.length;

//       // ========================================
//       // TOTAL REVENUE
//       // ========================================

//       const totalRevenue =
//         bookings.reduce(
//           (total, booking) => {
//             return (
//               total +
//               Number(
//                 booking.total || 0
//               )
//             );
//           },
//           0
//         );

//       // ========================================
//       // UNIQUE CUSTOMERS
//       // ========================================

//       const customerSet =
//         new Set();

//       bookings.forEach(
//         (booking) => {
//           const passenger =
//             booking.passenger || {};

//           const email =
//             passenger.email
//               ?.trim()
//               .toLowerCase();

//           const phone =
//             passenger.phone
//               ?.trim();

//           const name =
//             `${passenger.firstName || ""} ${
//               passenger.lastName || ""
//             }`
//               .trim()
//               .toLowerCase();

//           // Email ko priority
//           if (email) {
//             customerSet.add(
//               `email-${email}`
//             );
//           } else if (phone) {
//             customerSet.add(
//               `phone-${phone}`
//             );
//           } else if (name) {
//             customerSet.add(
//               `name-${name}`
//             );
//           }
//         }
//       );

//       // ========================================
//       // UNIQUE FLIGHTS
//       // ========================================

//       const flightSet =
//         new Set();

//       bookings.forEach(
//         (booking) => {
//           const flight =
//             booking.flight || {};

//           const flightNo =
//             flight.flightNo
//               ?.trim()
//               .toLowerCase();

//           if (flightNo) {
//             flightSet.add(
//               flightNo
//             );
//           }
//         }
//       );

//       setStats({
//         totalBookings,
//         totalRevenue,
//         customers:
//           customerSet.size,
//         flights:
//           flightSet.size,
//       });

//     } catch (error) {
//       console.error(
//         "Dashboard Cards Error:",
//         error
//       );

//       setStats({
//         totalBookings: 0,
//         totalRevenue: 0,
//         customers: 0,
//         flights: 0,
//       });

//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // LOAD
//   // ==========================================

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   // ==========================================
//   // FORMAT REVENUE
//   // ==========================================

//   const formatRevenue = (amount) => {
//     const value =
//       Number(amount || 0);

//     if (value >= 10000000) {
//       return `₹${(
//         value / 10000000
//       ).toFixed(1)}Cr`;
//     }

//     if (value >= 100000) {
//       return `₹${(
//         value / 100000
//       ).toFixed(1)}L`;
//     }

//     if (value >= 1000) {
//       return `₹${(
//         value / 1000
//       ).toFixed(1)}K`;
//     }

//     return `₹${value.toLocaleString(
//       "en-IN"
//     )}`;
//   };

//   // ==========================================
//   // CARDS
//   // ==========================================

//   const dashboardCards = [
//     {
//       id: 1,

//       title: "Total Bookings",

//       value: loading
//         ? "..."
//         : stats.totalBookings.toLocaleString(
//             "en-IN"
//           ),

//       icon: <FaTicketAlt />,

//       color: "#0B5ED7",
//     },

//     {
//       id: 2,

//       title: "Total Revenue",

//       value: loading
//         ? "..."
//         : formatRevenue(
//             stats.totalRevenue
//           ),

//       icon: <FaRupeeSign />,

//       color: "#198754",
//     },

//     {
//       id: 3,

//       title: "Customers",

//       value: loading
//         ? "..."
//         : stats.customers.toLocaleString(
//             "en-IN"
//           ),

//       icon: <FaUsers />,

//       color: "#fd7e14",
//     },

//     {
//       id: 4,

//       title: "Flights",

//       value: loading
//         ? "..."
//         : stats.flights.toLocaleString(
//             "en-IN"
//           ),

//       icon: <FaPlaneDeparture />,

//       color: "#dc3545",
//     },
//   ];

//   // ==========================================
//   // UI
//   // ==========================================

//   return (
//     <section className="dashboard-cards">

//       {dashboardCards.map(
//         (card) => (

//           <div
//             className="card-box"
//             key={card.id}
//           >

//             <div className="card-top">

//               <div
//                 className="card-icon"
//                 style={{
//                   background:
//                     card.color,
//                 }}
//               >
//                 {card.icon}
//               </div>

//             </div>

//             <h3>
//               {card.value}
//             </h3>

//             <p>
//               {card.title}
//             </p>

//           </div>

//         )
//       )}

//     </section>
//   );
// }

// export default Cards;
















import "./Cards.css";

function Cards() {
  return (
    <section className="dashboard-cards">
      <div className="islamic-card">

        {/* Animated Light */}
        <div className="card-light"></div>

        {/* Decorative Stars */}
        <span className="decor-star star-one">✦</span>
        <span className="decor-star star-two">✧</span>
        <span className="decor-star star-three">✦</span>
        <span className="decor-star star-four">✧</span>

        <div className="islamic-content">

          {/* Bismillah */}
          <div className="bismillah">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </div>

          {/* Small Line */}
          <div className="gold-line">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>

          {/* First Kalma */}
          <div className="kalma-arabic">
            لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَّسُولُ اللّٰهِ
          </div>

          {/* English */}
          <div className="kalma-english">
            La ilaha illallahu Muhammadur Rasulullah
          </div>

          {/* Brand */}
          <div className="brand-name">
            SAIYED <span>TRAVELS</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Cards;