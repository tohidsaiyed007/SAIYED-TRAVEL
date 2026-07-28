
// // // import "./Hero.css";
// // // import { FaPlaneDeparture } from "react-icons/fa";
// // // import { MdFlightTakeoff } from "react-icons/md";
// // // import { FaUsers } from "react-icons/fa";
// // // import { FaGlobeAsia } from "react-icons/fa";

// // // function Hero() {
// // //   return (
// // //     <section className="hero">

// // //       <div className="circle one"></div>
// // //       <div className="circle two"></div>

// // //       <div className="hero-left">

// // //         <span className="hero-badge">
// // //           ✈ India's Trusted Flight Booking Platform
// // //         </span>

// // //         <h1 className="hero-title">
// // //           Fly Smarter <br />
// // //           with <span>Saiyed Travels</span>
// // //         </h1>

// // //         <p className="hero-description">
// // //           Compare fares, book domestic & international flights,
// // //           and travel with confidence.
// // //         </p>

// // //         <div className="hero-buttons">
// // //           <button className="hero-btn">
// // //             <FaPlaneDeparture />
// // //             Book Flight
// // //           </button>

// // //           <button className="outline-btn">
// // //             Explore
// // //           </button>
// // //         </div>

// // //       </div>

// // //       <div className="hero-right">

// // //         <img
// // //           src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
// // //           alt=""
// // //         />

// // //         <div className="card card1">
// // //           <MdFlightTakeoff />
// // //           5000+ Flights
// // //         </div>

// // //         <div className="card card2">
// // //           <FaUsers />
// // //           20K+ Customers
// // //         </div>

// // //         <div className="card card3">
// // //           <FaGlobeAsia />
// // //           70+ Countries
// // //         </div>

// // //       </div>

// // //     </section>
// // //   );
// // // }

// // // export default Hero;




// // import "./Hero.css";
// // import { FaPlaneDeparture, FaUsers, FaGlobeAsia } from "react-icons/fa";
// // import { MdFlightTakeoff } from "react-icons/md";

// // function Hero() {
// //   return (
// //     <section className="hero">

// //       <div className="circle one"></div>
// //       <div className="circle two"></div>

// //       {/* ================= LEFT ================= */}

// //       <div className="hero-left">

// //         <span className="hero-badge">
// //           ✈ India's Trusted Flight Booking Platform
// //         </span>

// //         <h1 className="hero-title">
// //           Fly Smarter <br />
// //           with <span>Saiyed Travels</span>
// //         </h1>

// //         <p className="hero-description">
// //           Compare fares, book domestic & international
// //           flights, discover exclusive offers and enjoy
// //           a safe, affordable and seamless travel
// //           experience with Saiyed Travels.
// //         </p>

// //         <div className="hero-buttons">

// //           <button className="hero-btn">

// //             <FaPlaneDeparture />

// //             Book Flight

// //           </button>

// //           <button className="outline-btn">

// //             Explore Offers

// //           </button>

// //         </div>

// //       </div>

// //       {/* ================= RIGHT ================= */}

// //       <div className="hero-right">

// //         <img
// //           src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
// //           alt="Flight"
// //         />

// //         <div className="card card1">

// //           <MdFlightTakeoff />

// //           <div>

// //             <h4>5000+</h4>

// //             <p>Flights Daily</p>

// //           </div>

// //         </div>

// //         <div className="card card2">

// //           <FaUsers />

// //           <div>

// //             <h4>20K+</h4>

// //             <p>Happy Customers</p>

// //           </div>

// //         </div>

// //         <div className="card card3">

// //           <FaGlobeAsia />

// //           <div>

// //             <h4>70+</h4>

// //             <p>Countries</p>

// //           </div>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default Hero;



// import "./Hero.css";
// import { useState } from "react";
// import {
//   FaPlaneDeparture,
//   FaUsers,
//   FaGlobeAsia,
//   FaExchangeAlt,
//   FaSearch,
// } from "react-icons/fa";
// import { MdFlightTakeoff } from "react-icons/md";

// function Hero() {

//   const [tripType, setTripType] = useState("oneway");

//   const [searchData, setSearchData] = useState({
//     from: "",
//     to: "",
//     departure: "",
//     returnDate: "",
//     travellers: "1 Traveller",
//     cabin: "Economy",
//   });

//   const handleChange = (e) => {
//     setSearchData({
//       ...searchData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const swapCities = () => {
//     setSearchData({
//       ...searchData,
//       from: searchData.to,
//       to: searchData.from,
//     });
//   };

//   const handleSearch = () => {
//     if (
//       !searchData.from ||
//       !searchData.to ||
//       !searchData.departure
//     ) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     console.log(searchData);

//     // Later:
//     // navigate("/flights", { state: searchData });
//   };

//   return (
//     <section className="hero">

//       <div className="circle one"></div>
//       <div className="circle two"></div>

//       <div className="hero-left">

//         <span className="hero-badge">
//           ✈ India's Trusted Flight Booking Platform
//         </span>

//         <h1 className="hero-title">
//           Fly Smarter <br />
//           with <span>Saiyed Travels</span>
//         </h1>

//         <p className="hero-description">
//           Compare fares, book domestic &
//           international flights, discover exclusive
//           offers and enjoy a safe, affordable
//           travel experience.
//         </p>

//         <div className="hero-buttons">

//           <button className="hero-btn">
//             <FaPlaneDeparture />
//             Book Flight
//           </button>

//           <button className="outline-btn">
//             Explore Offers
//           </button>

//         </div>  

//                 {/* ================= SEARCH CARD ================= */}

//         <div className="search-card">

//           <div className="trip-type">

//             <button
//               className={tripType === "oneway" ? "active" : ""}
//               onClick={() => setTripType("oneway")}
//             >
//               One Way
//             </button>

//             <button
//               className={tripType === "round" ? "active" : ""}
//               onClick={() => setTripType("round")}
//             >
//               Round Trip
//             </button>

//             <button
//               className={tripType === "multi" ? "active" : ""}
//               onClick={() => setTripType("multi")}
//             >
//               Multi City
//             </button>

//           </div>

//           <div className="search-grid">

//             <div className="field">

//               <label>From</label>

//               <input
//                 type="text"
//                 name="from"
//                 placeholder="Delhi"
//                 value={searchData.from}
//                 onChange={handleChange}
//               />

//             </div>

//             <button
//               type="button"
//               className="swap-btn"
//               onClick={swapCities}
//             >
//               <FaExchangeAlt />
//             </button>

//             <div className="field">

//               <label>To</label>

//               <input
//                 type="text"
//                 name="to"
//                 placeholder="Dubai"
//                 value={searchData.to}
//                 onChange={handleChange}
//               />

//             </div>

//             <div className="field">

//               <label>Departure</label>

//               <input
//                 type="date"
//                 name="departure"
//                 value={searchData.departure}
//                 onChange={handleChange}
//               />

//             </div>

//             {tripType === "round" && (

//               <div className="field">

//                 <label>Return</label>

//                 <input
//                   type="date"
//                   name="returnDate"
//                   value={searchData.returnDate}
//                   onChange={handleChange}
//                 />

//               </div>

//             )}

//             <div className="field">

//               <label>Travellers</label>

//               <select
//                 name="travellers"
//                 value={searchData.travellers}
//                 onChange={handleChange}
//               >
//                 <option>1 Traveller</option>
//                 <option>2 Travellers</option>
//                 <option>3 Travellers</option>
//                 <option>4 Travellers</option>
//                 <option>5+ Travellers</option>
//               </select>

//             </div>

//             <div className="field">

//               <label>Cabin Class</label>

//               <select
//                 name="cabin"
//                 value={searchData.cabin}
//                 onChange={handleChange}
//               >
//                 <option>Economy</option>
//                 <option>Premium Economy</option>
//                 <option>Business</option>
//                 <option>First Class</option>
//               </select>

//             </div>

//           </div>

//           <button
//             className="search-flight-btn"
//             onClick={handleSearch}
//           >
//             <FaSearch />
//             Search Flights
//           </button>

//         </div>

//       </div>

//             {/* ================= RIGHT ================= */}

//       <div className="hero-right">

//         <img
//           src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&auto=format&fit=crop&q=80"
//           alt="Flight"
//           className="hero-image"
//         />

//         {/* Flight Card */}

//         <div className="card card1">

//           <MdFlightTakeoff />

//           <div>

//             <h4>5000+</h4>

//             <p>Flights Daily</p>

//           </div>

//         </div>

//         {/* Customers */}

//         <div className="card card2">

//           <FaUsers />

//           <div>

//             <h4>20K+</h4>

//             <p>Happy Customers</p>

//           </div>

//         </div>

//         {/* Countries */}

//         <div className="card card3">

//           <FaGlobeAsia />

//           <div>

//             <h4>70+</h4>

//             <p>Countries</p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;


import "./Hero.css";

import {
  FaPlaneDeparture,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";

import { MdFlightTakeoff } from "react-icons/md";

function Hero() {

  return (

    <section className="hero">

      {/* Background Shapes */}

      <div className="circle one"></div>
      <div className="circle two"></div>

      {/* ================= LEFT ================= */}

      <div className="hero-left">

        <span className="hero-badge">

          ✈ India's Trusted Flight Booking Platform

        </span>

        <h1 className="hero-title">

          Fly Smarter <br />

          with <span>Saiyed Travels</span>

        </h1>

        <p className="hero-description">

          Compare fares, discover exclusive flight
          deals, and book domestic & international
          flights with confidence. Travel smarter,
          faster and more securely with Saiyed Travels.

        </p>

        <div className="hero-buttons">

          <button className="hero-btn">

            <FaPlaneDeparture />

            Book Flight

          </button>

          <button className="outline-btn">

            Explore Offers

          </button>

        </div>

        {/* Trust Points */}

        <div className="hero-features">

          <div className="feature">

            ✅ Secure Booking

          </div>

          <div className="feature">

            💳 Safe Payments

          </div>

          <div className="feature">

            ☎ 24×7 Support

          </div>

        </div>

      </div>

            {/* ================= RIGHT ================= */}

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80"
          alt="Flight"
          className="hero-image"
        />

        {/* Flights Card */}

        <div className="card card1">

          <MdFlightTakeoff className="card-icon" />

          <div>

            <h4>5000+</h4>

            <p>Flights Daily</p>

          </div>

        </div>

        {/* Customers Card */}

        <div className="card card2">

          <FaUsers className="card-icon" />

          <div>

            <h4>20K+</h4>

            <p>Happy Customers</p>

          </div>

        </div>

        {/* Countries Card */}

        <div className="card card3">

          <FaGlobeAsia className="card-icon" />

          <div>

            <h4>70+</h4>

            <p>Countries</p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Hero;