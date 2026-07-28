// // import "./MyBookings.css";
// // import Navbar from "../../Components/Navbar/Navbar";
// // import Footer from "../../Components/Footer/Footer";

// // import {
// //   FaPlaneDeparture,
// //   FaSearch,
// // } from "react-icons/fa";

// // function MyBookings() {

// //   const bookings = [

// //     {
// //       id: "ST240001",
// //       pnr: "AB12CD",
// //       airline: "IndiGo",
// //       flightNo: "6E-214",
// //       from: "Delhi",
// //       to: "Mumbai",
// //       departure: "08:20",
// //       arrival: "10:30",
// //       seat: "3A",
// //       meal: "Veg Meal",
// //       baggage: "20 KG",
// //       price: 2499,
// //       status: "Confirmed",
// //     },

// //     {
// //       id: "ST240002",
// //       pnr: "XY45PQ",
// //       airline: "Air India",
// //       flightNo: "AI-302",
// //       from: "Jaipur",
// //       to: "Bangalore",
// //       departure: "11:45",
// //       arrival: "02:15",
// //       seat: "7C",
// //       meal: "No Meal",
// //       baggage: "15 KG",
// //       price: 4299,
// //       status: "Upcoming",
// //     },

// //   ];

// //   return (

// //     <>

// //       <Navbar />

// //       <section className="bookings-page">

// //         {/* Hero */}

// //         <div className="booking-hero">

// //           <h1>My Bookings</h1>

// //           <p>

// //             View, manage and track all your flight bookings in one place.

// //           </p>

// //         </div>

// //         {/* Search */}

// //         <div className="booking-search">

// //           <div className="search-box">

// //             <FaSearch />

// //             <input
// //               type="text"
// //               placeholder="Search by Booking ID or PNR"
// //             />

// //           </div>

// //         </div>

// //         {/* Tabs */}

// //         <div className="booking-tabs">

// //           <button className="active">
// //             Upcoming
// //           </button>

// //           <button>
// //             Completed
// //           </button>

// //           <button>
// //             Cancelled
// //           </button>

// //         </div>

// //         {/* Booking List */}

// //         <div className="booking-list">

// //             import "./MyBookings.css";
// // import Navbar from "../../Components/Navbar/Navbar";
// // import Footer from "../../Components/Footer/Footer";

// // import {
// //   FaPlaneDeparture,
// //   FaSearch,
// // } from "react-icons/fa";

// // function MyBookings() {

// //   const bookings = [

// //     {
// //       id: "ST240001",
// //       pnr: "AB12CD",
// //       airline: "IndiGo",
// //       flightNo: "6E-214",
// //       from: "Delhi",
// //       to: "Mumbai",
// //       departure: "08:20",
// //       arrival: "10:30",
// //       seat: "3A",
// //       meal: "Veg Meal",
// //       baggage: "20 KG",
// //       price: 2499,
// //       status: "Confirmed",
// //     },

// //     {
// //       id: "ST240002",
// //       pnr: "XY45PQ",
// //       airline: "Air India",
// //       flightNo: "AI-302",
// //       from: "Jaipur",
// //       to: "Bangalore",
// //       departure: "11:45",
// //       arrival: "02:15",
// //       seat: "7C",
// //       meal: "No Meal",
// //       baggage: "15 KG",
// //       price: 4299,
// //       status: "Upcoming",
// //     },

// //   ];

// //   return (

// //     <>

// //       <Navbar />

// //       <section className="bookings-page">

// //         {/* Hero */}

// //         <div className="booking-hero">

// //           <h1>My Bookings</h1>

// //           <p>

// //             View, manage and track all your flight bookings in one place.

// //           </p>

// //         </div>

// //         {/* Search */}

// //         <div className="booking-search">

// //           <div className="search-box">

// //             <FaSearch />

// //             <input
// //               type="text"
// //               placeholder="Search by Booking ID or PNR"
// //             />

// //           </div>

// //         </div>

// //         {/* Tabs */}

// //         <div className="booking-tabs">

// //           <button className="active">
// //             Upcoming
// //           </button>

// //           <button>
// //             Completed
// //           </button>

// //           <button>
// //             Cancelled
// //           </button>

// //         </div>

// //         {/* Booking List */}

// //         <div className="booking-list">
// //         </div>


// //                 {bookings.map((booking) => (

// //           <div
// //             className="booking-card"
// //             key={booking.id}
// //           >

// //             {/* Left */}

// //             <div className="booking-left">

// //               <div className="airline-icon">

// //                 <FaPlaneDeparture />

// //               </div>

// //               <div>

// //                 <h2>{booking.airline}</h2>

// //                 <p>{booking.flightNo}</p>

// //                 <span>

// //                   {booking.from} → {booking.to}

// //                 </span>

// //               </div>

// //             </div>

// //             {/* Middle */}

// //             <div className="booking-middle">

// //               <div>

// //                 <strong>Booking ID</strong>

// //                 <p>{booking.id}</p>

// //               </div>

// //               <div>

// //                 <strong>PNR</strong>

// //                 <p>{booking.pnr}</p>

// //               </div>

// //               <div>

// //                 <strong>Departure</strong>

// //                 <p>{booking.departure}</p>

// //               </div>

// //               <div>

// //                 <strong>Arrival</strong>

// //                 <p>{booking.arrival}</p>

// //               </div>

// //               <div>

// //                 <strong>Seat</strong>

// //                 <p>{booking.seat}</p>

// //               </div>

// //               <div>

// //                 <strong>Meal</strong>

// //                 <p>{booking.meal}</p>

// //               </div>

// //               <div>

// //                 <strong>Baggage</strong>

// //                 <p>{booking.baggage}</p>

// //               </div>

// //             </div>

// //             {/* Right */}

// //             <div className="booking-right">

// //               <span className="status">

// //                 {booking.status}

// //               </span>

// //               <h2>

// //                 ₹ {booking.price}

// //               </h2>

// //               <button className="view-btn">
// //                 View Ticket
// //               </button>

// //               <button className="download-btn">
// //                 Download Ticket
// //               </button>

// //               <button className="cancel-btn">
// //                 Cancel Booking
// //               </button>

// //             </div>

// //           </div>

// //         ))}

// //         </div>

// //       </section>

// //       <Footer />

// //     </>

// //   );

// // }

// // export default MyBookings;



        
       


        



// //         import "./MyBookings.css";
// // import Navbar from "../../Components/Navbar/Navbar";
// // import Footer from "../../Components/Footer/Footer";

// // import {
// //   FaPlaneDeparture,
// //   FaSearch,
// //   FaEye,
// //   FaDownload,
// //   FaTimesCircle,
// // } from "react-icons/fa";


// import "./MyBookings.css";
// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";
// import { useNavigate } from "react-router-dom";

// import {
//   FaPlaneDeparture,
//   FaSearch,
//   FaEye,
//   FaDownload,
//   FaTimesCircle,
// } from "react-icons/fa";

// function MyBookings() {

//   const navigate = useNavigate();

//   const bookings = [

//     {
//       id: "ST240001",
//       pnr: "AB12CD",
//       airline: "IndiGo",
//       flightNo: "6E-214",
//       from: "Delhi",
//       to: "Mumbai",
//       departure: "08:20 AM",
//       arrival: "10:30 AM",
//       seat: "3A",
//       meal: "Veg Meal",
//       baggage: "20 KG",
//       price: 2499,
//       status: "Confirmed",
//     },

//     {
//       id: "ST240002",
//       pnr: "XY45PQ",
//       airline: "Air India",
//       flightNo: "AI-302",
//       from: "Jaipur",
//       to: "Bangalore",
//       departure: "11:45 AM",
//       arrival: "02:15 PM",
//       seat: "7C",
//       meal: "No Meal",
//       baggage: "15 KG",
//       price: 4299,
//       status: "Upcoming",
//     },

//   ];

//   return (

//     <>

//       <Navbar />

//       <section className="bookings-page">

//         <div className="booking-hero">

//           <h1>My Bookings</h1>

//           <p>

//             View, manage and track all your
//             flight bookings in one place.

//           </p>

//         </div>

//         <div className="booking-search">

//           <div className="search-box">

//             <FaSearch />

//             <input
//               type="text"
//               placeholder="Search Booking ID or PNR"
//             />

//           </div>

//         </div>

//         <div className="booking-tabs">

//           <button className="active">
//             Upcoming
//           </button>

//           <button>
//             Completed
//           </button>

//           <button>
//             Cancelled
//           </button>

//         </div>

//         <div className="booking-list">

//           {bookings.map((booking) => (

//             <div
//               className="booking-card"
//               key={booking.id}
//             >

//               <div className="booking-left">

//                 <div className="airline-icon">

//                   <FaPlaneDeparture />

//                 </div>

//                 <div>

//                   <h2>{booking.airline}</h2>

//                   <p>{booking.flightNo}</p>

//                   <span>

//                     {booking.from} → {booking.to}

//                   </span>

//                 </div>

//               </div>

//               <div className="booking-middle">

                

//                   <strong>Booking ID</strong>

//                   <p>{booking.id}</p>

//                 </div>

//                 <div>

//                   <strong>PNR</strong>

//                   <p>{booking.pnr}</p>

//                 </div>

//                 <div>

//                   <strong>Departure</strong>

//                   <p>{booking.departure}</p>

//                 </div>

//                 <div>

//                   <strong>Arrival</strong>

//                   <p>{booking.arrival}</p>

//                 </div>

//                 <div>

//                   <strong>Seat</strong>

//                   <p>{booking.seat}</p>

//                 </div>

//                 <div>

//                   <strong>Meal</strong>

//                   <p>{booking.meal}</p>

//                 </div>

//                 <div>

//                   <strong>Baggage</strong>

//                   <p>{booking.baggage}</p>

//                 </div>


//                                 <div className="booking-right">

//                   <span
//                     className={
//                       booking.status === "Confirmed"
//                         ? "status confirmed"
//                         : booking.status === "Upcoming"
//                         ? "status upcoming"
//                         : "status cancelled"
//                     }
//                   >
//                     {booking.status}
//                   </span>

//                   <h2 className="booking-price">

//                     ₹ {booking.price}

//                   </h2>

//                   <div className="booking-buttons">

//                     {/* <button className="view-btn">

//                       <FaEye />

//                       View Ticket

//                     </button> */}

//                     <button
//   className="view-btn"
//   onClick={() => navigate("/ticket")}
// >

//   <FaEye />

//   View Ticket

// </button>

//                     <button className="download-btn">

//                       <FaDownload />

//                       Download

//                     </button>

//                     <button className="cancel-btn">

//                       <FaTimesCircle />

//                       Cancel

//                     </button>

//                   </div>

//                 </div>

//               </div>

//             ))}

//         </div>

//       </section>

//       <Footer />

//     </>

//   );

// }

// export default MyBookings;



                

import "./MyBookings.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

import {
  FaPlaneDeparture,
  FaSearch,
  FaEye,
  FaDownload,
  FaTimesCircle,
} from "react-icons/fa";

function MyBookings() {

  const navigate = useNavigate();

  const bookings = [
    {
      id: "ST240001",
      pnr: "AB12CD",
      airline: "IndiGo",
      flightNo: "6E-214",
      from: "Delhi",
      to: "Mumbai",
      departure: "08:20 AM",
      arrival: "10:30 AM",
      seat: "3A",
      meal: "Veg Meal",
      baggage: "20 KG",
      price: 2499,
      status: "Confirmed",
    },
    {
      id: "ST240002",
      pnr: "XY45PQ",
      airline: "Air India",
      flightNo: "AI-302",
      from: "Jaipur",
      to: "Bangalore",
      departure: "11:45 AM",
      arrival: "02:15 PM",
      seat: "7C",
      meal: "No Meal",
      baggage: "15 KG",
      price: 4299,
      status: "Upcoming",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bookings-page">

        {/* Hero */}

        <div className="booking-hero">

          <h1>My Bookings</h1>

          <p>
            View, manage and track all your
            flight bookings in one place.
          </p>

        </div>

        {/* Search */}

        <div className="booking-search">

          <div className="search-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search Booking ID or PNR"
            />

          </div>

        </div>

        {/* Tabs */}

        <div className="booking-tabs">

          <button className="active">
            Upcoming
          </button>

          <button>
            Completed
          </button>

          <button>
            Cancelled
          </button>

        </div>

        {/* Booking List */}

        <div className="booking-list">

          {bookings.map((booking) => (

            <div
              className="booking-card"
              key={booking.id}
            >

              {/* Left */}

              <div className="booking-left">

                <div className="airline-icon">

                  <FaPlaneDeparture />

                </div>

                <div>

                  <h2>{booking.airline}</h2>

                  <p>{booking.flightNo}</p>

                  <span>
                    {booking.from} → {booking.to}
                  </span>

                </div>

              </div>

              {/* Middle */}

              <div className="booking-middle">

                <div>

                  <strong>Booking ID</strong>

                  <p>{booking.id}</p>

                </div>

                <div>

                  <strong>PNR</strong>

                  <p>{booking.pnr}</p>

                </div>

                <div>

                  <strong>Departure</strong>

                  <p>{booking.departure}</p>

                </div>

                <div>

                  <strong>Arrival</strong>

                  <p>{booking.arrival}</p>

                </div>

                <div>

                  <strong>Seat</strong>

                  <p>{booking.seat}</p>

                </div>

                <div>

                  <strong>Meal</strong>

                  <p>{booking.meal}</p>

                </div>

                <div>

                  <strong>Baggage</strong>

                  <p>{booking.baggage}</p>

                </div>

              </div>

              {/* Right */}

              <div className="booking-right">

                <span
                  className={
                    booking.status === "Confirmed"
                      ? "status confirmed"
                      : booking.status === "Upcoming"
                      ? "status upcoming"
                      : "status cancelled"
                  }
                >
                  {booking.status}
                </span>

                <h2 className="booking-price">
                  ₹ {booking.price}
                </h2>

                <div className="booking-buttons">

                  <button
                    className="view-btn"
                    onClick={() => navigate("/ticket")}
                  >
                    <FaEye />
                    View Ticket
                  </button>

                  <button className="download-btn">
                    <FaDownload />
                    Download
                  </button>

                  <button className="cancel-btn">
                    <FaTimesCircle />
                    Cancel
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </>
  );

}

export default MyBookings;