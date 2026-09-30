// import "./Hero.css";
// import { useEffect, useState } from "react";

// import {
//   FaPlaneDeparture,
//   FaUsers,
//   FaGlobeAsia,
// } from "react-icons/fa";

// import { MdFlightTakeoff } from "react-icons/md";

// function Hero() {
//   const images = [
//     "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90",
//     "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1400&q=90",
//     "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1400&q=90",
//     "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1400&q=90",
//     // "https://images.unsplash.com/photo-1464037866556-6812c9c1c72e?auto=format&fit=crop&w=1400&q=90",
//     "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1400&q=90",
//     "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1400&q=90",
//     "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90",
//     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1400&q=90",
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const slider = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(slider);
//   }, [images.length]);

//   return (
//     <section className="hero">

//       {/* Background Shapes */}
//       <div className="circle one"></div>
//       <div className="circle two"></div>

//       {/* ================= LEFT ================= */}

//       <div className="hero-left">

//         <span className="hero-badge">
//           <span className="badge-icon">✈</span>
//           <span>India's Trusted Flight Booking Platform</span>
//         </span>

//         <h1 className="hero-title">

//           <span className="hero-small-title">
//             Welcome to
//           </span>

//           <span className="brand-name">
//             Saiyed Travels
//           </span>

//           <span className="hero-main-line">
//             Fly Smarter.
//           </span>

//           <span className="hero-main-line">
//             Travel Better.
//           </span>

//         </h1>

//         <div className="brand-tagline">
//           <span></span>
//           Your Journey, Our Responsibility
//           <span></span>
//         </div>

//         <p className="hero-description">
//           Discover the best domestic and international flight
//           fares with <strong>Saiyed Travels</strong>. Compare,
//           choose and book your journey with a fast, secure and
//           reliable travel experience.
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

//         <div className="hero-features">

//           <div className="feature">
//             <span>✓</span>
//             Secure Booking
//           </div>

//           <div className="feature">
//             <span>✓</span>
//             Safe Payments
//           </div>

//           <div className="feature">
//             <span>✓</span>
//             24×7 Support
//           </div>

//         </div>

//       </div>

//       {/* ================= RIGHT ================= */}

//       <div className="hero-right">

//         <div className="hero-image-box">

//           {images.map((image, index) => (
//             <img
//               key={`${image}-${index}`}
//               src={image}
//               alt={`Saiyed Travels Flight ${index + 1}`}
//               className={`hero-image ${
//                 index === currentImage ? "active" : ""
//               }`}
//             />
//           ))}

//           <div className="hero-image-overlay"></div>

//           {/* LOGO INSIDE IMAGE */}
//           <div className="image-logo">

//             <div className="image-logo-mark">
//               <MdFlightTakeoff />
//             </div>

//             <div className="image-logo-text">
//               <strong>SAIYED TRAVELS</strong>
//               <span>FLY • TRAVEL • EXPLORE</span>
//             </div>

//           </div>

//           {/* IMAGE NUMBER */}
//           <div className="image-counter">
//             <span>
//               {String(currentImage + 1).padStart(2, "0")}
//             </span>
//             <i>/</i>
//             <span>
//               {String(images.length).padStart(2, "0")}
//             </span>
//           </div>

//           {/* DOTS */}
//           <div className="hero-dots">

//             {images.map((_, index) => (
//               <span
//                 key={index}
//                 className={`hero-dot ${
//                   index === currentImage ? "active" : ""
//                 }`}
//               ></span>
//             ))}

//           </div>

//         </div>

//         {/* Flights Card */}

//         <div className="card card1">

//           <MdFlightTakeoff className="card-icon" />

//           <div>
//             <h4>5000+</h4>
//             <p>Flights Daily</p>
//           </div>

//         </div>

//         {/* Customers Card */}

//         <div className="card card2">

//           <FaUsers className="card-icon" />

//           <div>
//             <h4>20K+</h4>
//             <p>Happy Customers</p>
//           </div>

//         </div>

//         {/* Destinations Card */}

//         <div className="card card3">

//           <FaGlobeAsia className="card-icon" />

//           <div>
//             <h4>70+</h4>
//             <p>Destinations</p>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;













import "./Hero.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaPlaneDeparture,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";

import { MdFlightTakeoff } from "react-icons/md";

function Hero() {

  const navigate = useNavigate();

  const images = [
    // "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90",
    // "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1400&q=90",
    // "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1400&q=90",
    // "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1400&q=90",
    // "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1400&q=90",
    // "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1400&q=90",
    // "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90",
    // "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1400&q=90",


     "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1400&q=90",
    // "https://images.unsplash.com/photo-1464037866556-6812c9c1c72e?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90",
   "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1400&q=90",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const slider = setInterval(() => {

      setCurrentImage(
        (prev) => (prev + 1) % images.length
      );

    }, 4000);

    return () => clearInterval(slider);

  }, [images.length]);


  /* ==========================================
     BOOK FLIGHT
  ========================================== */

  const handleBookFlight = () => {
    navigate("/flights");
  };


  /* ==========================================
     EXPLORE OFFERS
  ========================================== */

  const handleExploreOffers = () => {
    navigate("/flights");
  };


  return (

    <section className="hero">

      {/* ==========================================
          BACKGROUND SHAPES
      ========================================== */}

      <div className="circle one"></div>
      <div className="circle two"></div>


      {/* ==========================================
          LEFT SIDE
      ========================================== */}

      <div className="hero-left">

        <span className="hero-badge">

          <span className="badge-icon">
            ✈
          </span>

          <span>
            India's Trusted Flight Booking Platform
          </span>

        </span>


        <h1 className="hero-title">

          <span className="hero-small-title">
            Welcome to
          </span>

          <span className="brand-name">
            Saiyed Travels
          </span>

          <span className="hero-main-line">
            Fly Smarter.
          </span>

          <span className="hero-main-line">
            Travel Better.
          </span>

        </h1>


        <div className="brand-tagline">

          <span></span>

          Your Journey, Our Responsibility

          <span></span>

        </div>


        <p className="hero-description">

          Discover the best domestic and international flight
          fares with <strong>Saiyed Travels</strong>. Compare,
          choose and book your journey with a fast, secure and
          reliable travel experience.

        </p>


        {/* ==========================================
            HERO BUTTONS
        ========================================== */}

        <div className="hero-buttons">

          <button
            className="hero-btn"
            onClick={handleBookFlight}
          >

            <FaPlaneDeparture />

            Book Flight

          </button>


          <button
            className="outline-btn"
            onClick={handleExploreOffers}
          >

            Explore Offers

          </button>

        </div>


        {/* ==========================================
            FEATURES
        ========================================== */}

        <div className="hero-features">

          <div className="feature">

            <span>✓</span>

            Secure Booking

          </div>


          <div className="feature">

            <span>✓</span>

            Safe Payments

          </div>


          <div className="feature">

            <span>✓</span>

            24×7 Support

          </div>

        </div>

      </div>


      {/* ==========================================
          RIGHT SIDE
      ========================================== */}

      <div className="hero-right">


        {/* ==========================================
            STATS CARDS
            IMAGE KE BAHAR
        ========================================== */}

        <div className="hero-stats">

          {/* FLIGHTS */}

          <div className="card card1">

            <div className="card-icon-box">
              <MdFlightTakeoff />
            </div>

            <div className="card-content">

              <h4>5000+</h4>

              <p>
                Flights Daily
              </p>

            </div>

          </div>


          {/* DESTINATIONS */}

          <div className="card card3">

            <div className="card-icon-box">
              <FaGlobeAsia />
            </div>

            <div className="card-content">

              <h4>70+</h4>

              <p>
                Destinations
              </p>

            </div>

          </div>


          {/* CUSTOMERS */}

          <div className="card card2">

            <div className="card-icon-box">
              <FaUsers />
            </div>

            <div className="card-content">

              <h4>20K+</h4>

              <p>
                Happy Customers
              </p>

            </div>

          </div>

        </div>


        {/* ==========================================
            FLIGHT IMAGE
        ========================================== */}

        <div className="hero-image-box">


          {/* SLIDER IMAGES */}

          {images.map((image, index) => (

            <img
              key={`${image}-${index}`}
              src={image}
              alt={`Saiyed Travels Flight ${index + 1}`}
              className={`hero-image ${
                index === currentImage
                  ? "active"
                  : ""
              }`}
            />

          ))}


          {/* IMAGE OVERLAY */}

          <div className="hero-image-overlay"></div>


          {/* LOGO */}

          <div className="image-logo">

            <div className="image-logo-mark">

              <MdFlightTakeoff />

            </div>


            <div className="image-logo-text">

              <strong>
                SAIYED TRAVELS
              </strong>

              <span>
                FLY • TRAVEL • EXPLORE
              </span>

            </div>

          </div>


          {/* IMAGE COUNTER */}

          <div className="image-counter">

            <span>
              {String(currentImage + 1).padStart(2, "0")}
            </span>

            <i>/</i>

            <span>
              {String(images.length).padStart(2, "0")}
            </span>

          </div>


          {/* DOTS */}

          <div className="hero-dots">

            {images.map((_, index) => (

              <span
                key={index}
                className={`hero-dot ${
                  index === currentImage
                    ? "active"
                    : ""
                }`}
              ></span>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;