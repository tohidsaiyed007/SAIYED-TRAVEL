// // // // import "./PopularRoutes.css";

// // // // function PopularRoutes() {
// // // //   return (
// // // //     <section className="popular-routes">

// // // //       <div className="section-title">
// // // //         <h2>Popular Flight Routes</h2>
// // // //         <p>Book the most searched destinations at the best fares.</p>
// // // //       </div>

// // // //       <div className="routes-grid">

// // // //         <div className="route-card">
// // // //           <img
// // // //             src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600"
// // // //             alt="Delhi"
// // // //           />
// // // //           <div className="route-content">
// // // //             <h3>Delhi → Mumbai</h3>
// // // //             <p>Starting From</p>
// // // //             <h4>₹2,499</h4>
// // // //             <button>Book Now</button>
// // // //           </div>
// // // //         </div>

// // // //         <div className="route-card">
// // // //           <img
// // // //             src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600"
// // // //             alt="Dubai"
// // // //           />
// // // //           <div className="route-content">
// // // //             <h3>Delhi → Dubai</h3>
// // // //             <p>Starting From</p>
// // // //             <h4>₹12,999</h4>
// // // //             <button>Book Now</button>
// // // //           </div>
// // // //         </div>

// // // //         <div className="route-card">
// // // //           <img
// // // //             src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600"
// // // //             alt="Goa"
// // // //           />
// // // //           <div className="route-content">
// // // //             <h3>Jaipur → Goa</h3>
// // // //             <p>Starting From</p>
// // // //             <h4>₹4,199</h4>
// // // //             <button>Book Now</button>
// // // //           </div>
// // // //         </div>

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }

// // // // export default PopularRoutes;


// // // import "./PopularRoutes.css";
// // // import { useEffect, useState } from "react";

// // // function PopularRoutes() {
// // //   const [routes, setRoutes] = useState([]);

// // //   useEffect(() => {
// // //     fetch("https://dummyjson.com/products?limit=6")
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         setRoutes(data.products);
// // //       });
// // //   }, []);

// // //   return (
// // //     <section className="popular-routes">

// // //       <div className="section-title">
// // //         <h2>Popular Flight Routes</h2>
// // //         <p>Book the most searched destinations at the best fares.</p>
// // //       </div>

// // //       <div className="routes-grid">

// // //         {routes.map((item) => (

// // //           <div className="route-card" key={item.id}>

// // //             <img src={item.thumbnail} alt={item.title} />

// // //             <div className="route-content">

// // //               <h3>{item.title}</h3>

// // //               <p>Starting From</p>

// // //               <h4>₹ {item.price * 100}</h4>

// // //               <button>Book Now</button>

// // //             </div>

// // //           </div>

// // //         ))}

// // //       </div>

// // //     </section>
// // //   );
// // // }

// // // export default PopularRoutes;


// // // import "./PopularRoutes.css";

// // // function PopularRoutes() {

// // //   const routes = [
// // //     {
// // //       id: 1,
// // //       from: "Delhi",
// // //       to: "Mumbai",
// // //       price: "₹2,499",
// // //       image: "https://picsum.photos/600/400?random=101"
// // //     },
// // //     {
// // //       id: 2,
// // //       from: "Delhi",
// // //       to: "Dubai",
// // //       price: "₹12,999",
// // //       image: "https://picsum.photos/600/400?random=102"
// // //     },
// // //     {
// // //       id: 3,
// // //       from: "Mumbai",
// // //       to: "Goa",
// // //       price: "₹3,199",
// // //       image: "https://picsum.photos/600/400?random=103"
// // //     },
// // //     {
// // //       id: 4,
// // //       from: "Mumbai",
// // //       to: "Singapore",
// // //       price: "₹15,999",
// // //       image: "https://picsum.photos/600/400?random=104"
// // //     }
// // //   ];

// // //   return (
// // //     <section className="popular-routes">

// // //       <div className="section-title">
// // //         <h2>Popular Flight Routes</h2>
// // //         <p>Book the most searched destinations at the best fares.</p>
// // //       </div>

// // //       <div className="routes-grid">

// // //         {routes.map((item) => (

// // //           <div className="route-card" key={item.id}>

// // //             <img src={item.image} alt={item.from} />

// // //             <div className="route-content">

// // //               <h3>{item.from} → {item.to}</h3>

// // //               <p>Starting From</p>

// // //               <h4>{item.price}</h4>

// // //               <button>Book Now →</button>

// // //             </div>

// // //           </div>

// // //         ))}

// // //       </div>

// // //     </section>
// // //   );
// // // }

// // // export default PopularRoutes;




// // import "./PopularRoutes.css";

// // function PopularRoutes() {

// //   const routes = [
// //     {
// //       id: 1,
// //       from: "Delhi",
// //       to: "Mumbai",
// //       airline: "IndiGo",
// //       price: "₹2,499",
// //       image:
// //         "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
// //     },
// //     {
// //       id: 2,
// //       from: "Delhi",
// //       to: "Dubai",
// //       airline: "Emirates",
// //       price: "₹12,999",
// //       image:
// //         "https://images.unsplash.com/photo-1540339832862-474599807836?w=800&auto=format&fit=crop",
// //     },
// //     {
// //       id: 3,
// //       from: "Mumbai",
// //       to: "Goa",
// //       airline: "Air India",
// //       price: "₹3,199",
// //       image:
// //         "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
// //     },
// //     {
// //       id: 4,
// //       from: "Mumbai",
// //       to: "Singapore",
// //       airline: "Singapore Airlines",
// //       price: "₹15,999",
// //       image:
// //         "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop",
// //     },
// //   ];

// //   return (
// //     <section className="popular-routes">

// //       <div className="section-title">
// //         <h2>Popular Flight Routes</h2>
// //         <p>Discover the most booked domestic & international flights.</p>
// //       </div>

// //       <div className="routes-grid">

// //         {routes.map((item) => (
// //           <div className="route-card" key={item.id}>

// //             <img src={item.image} alt={item.to} />

// //             <div className="route-content">

// //               <span className="airline">{item.airline}</span>

// //               <h3>
// //                 {item.from} → {item.to}
// //               </h3>

// //               <p>Starting From</p>

// //               <h4>{item.price}</h4>

// //               <button>Book Flight</button>

// //             </div>

// //           </div>
// //         ))}

// //       </div>

// //     </section>
// //   );
// // }

// // export default PopularRoutes;


// import "./PopularRoutes.css";
// import flights from "../../Data/flights";
// // import popularRoutes from "../../Data/popularRoutes";

// function PopularRoutes() {
//   return (
//     <section className="popular-routes">

//       <div className="section-title">
//         <h2>Popular Flight Routes</h2>
//         <p>Discover the most booked routes.</p>
//       </div>

//       <div className="routes-grid">

//         {flights.map((flight) => (
//           <div className="route-card" key={flight.id}>

//             <img src={flight.image} alt={flight.to} />

//             <div className="route-content">

//               <span className="airline">
//                 {flight.airline}
//               </span>

//               <h3>
//                 {flight.from} → {flight.to}
//               </h3>

//               <p>{flight.duration}</p>

//               <h4>₹ {flight.price}</h4>

//               <button>Book Flight</button>

//             </div>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }

// export default PopularRoutes;


import "./PopularRoutes.css";
import popularRoutes from "../../Data/popularRoutes";

function PopularRoutes() {
  return (
    <section className="popular-routes">

      <div className="section-title">
        <h2>Popular Flight Routes</h2>
        <p>Discover the most booked routes.</p>
      </div>

      <div className="routes-grid">

        {popularRoutes.map((flight) => (

          <div className="route-card" key={flight.id}>

            <img src={flight.image} alt={flight.to} />

            <div className="route-content">

              <span className="airline">
                {flight.airline}
              </span>

              <h3>
                {flight.from} → {flight.to}
              </h3>

              <p>{flight.duration}</p>

              <h4>₹ {flight.price}</h4>

              <button>Book Flight</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default PopularRoutes;