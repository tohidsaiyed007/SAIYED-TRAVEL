
// import "./Payment.css";
// import { useLocation, useNavigate } from "react-router-dom";

// function Payment() {

//   const navigate = useNavigate();
//   const location = useLocation();

//   const {
//     flight,
//     seat,
//     meal,
//     baggage,
//   } = location.state || {};

//   if (!flight) {
//     return (
//       <h2
//         style={{
//           textAlign: "center",
//           marginTop: "120px",
//         }}
//       >
//         No Booking Found
//       </h2>
//     );
//   }

//   const seatPrice = seat ? 300 : 0;
//   const mealPrice = meal ? meal.price : 0;
//   const baggagePrice = baggage ? baggage.price : 0;

//   const taxes = 350;
//   const convenienceFee = 100;

//   const total =
//     flight.price +
//     seatPrice +
//     mealPrice +
//     baggagePrice +
//     taxes +
//     convenienceFee;

//   return (

//     <section className="payment-page">

//       <div className="payment-container">

//         {/* Left */}

//         <div className="payment-method">

//           <h2>Choose Payment Method</h2>

//           <div className="payment-card">

//             <label>

//               <input
//                 type="radio"
//                 name="payment"
//                 defaultChecked
//               />

//               UPI Payment

//             </label>

//             <div className="upi-apps">

//               <button>PhonePe</button>

//               <button>Google Pay</button>

//               <button>Paytm</button>

//             </div>

//           </div>

//           <div className="payment-card">

//             <label>

//               <input
//                 type="radio"
//                 name="payment"
//               />

//               Credit / Debit Card

//             </label>

//             <div className="card-form">

//               <input
//                 type="text"
//                 placeholder="Card Number"
//               />

//               <div className="card-row">

//                 <input
//                   type="text"
//                   placeholder="MM/YY"
//                 />

//                 <input
//                   type="password"
//                   placeholder="CVV"
//                 />

//               </div>

//             </div>

//           </div>

//           <div className="payment-card">

//             <label>

//               <input
//                 type="radio"
//                 name="payment"
//               />

//               Net Banking

//             </label>

//             <select>

//               <option>Select Bank</option>

//               <option>State Bank of India</option>

//               <option>HDFC Bank</option>

//               <option>ICICI Bank</option>

//               <option>Axis Bank</option>

//             </select>

//           </div>

//         </div>

//         {/* Right */}

//         <div className="payment-summary">

//           <h2>Booking Summary</h2>

//           <p>
//             <strong>{flight.airline}</strong>
//           </p>

//           <p>
//             {flight.from} → {flight.to}
//           </p>

//           <p>
//             Flight : {flight.flightNo}
//           </p>

//           <hr />

//           <div className="summary-row">
//             <span>Flight Fare</span>
//             <span>₹ {flight.price}</span>
//           </div>

//           <div className="summary-row">
//             <span>Seat</span>
//             <span>{seat || "Not Selected"}</span>
//           </div>

//           <div className="summary-row">
//             <span>Seat Charge</span>
//             <span>₹ {seatPrice}</span>
//           </div>

//           <div className="summary-row">
//             <span>Meal</span>
//             <span>{meal?.name || "No Meal"}</span>
//           </div>

//           <div className="summary-row">
//             <span>Meal Charge</span>
//             <span>₹ {mealPrice}</span>
//           </div>

//           <div className="summary-row">
//             <span>Baggage</span>
//             <span>{baggage?.weight || "15 KG Included"}</span>
//           </div>

//           <div className="summary-row">
//             <span>Baggage Charge</span>
//             <span>₹ {baggagePrice}</span>
//           </div>

//           <div className="summary-row">
//             <span>Taxes</span>
//             <span>₹ {taxes}</span>
//           </div>

//           <div className="summary-row">
//             <span>Convenience Fee</span>
//             <span>₹ {convenienceFee}</span>
//           </div>

//           <hr />

//           <div className="summary-total">

//             <span>Total</span>

//             <span>₹ {total}</span>

//           </div>

//           <button
//             className="pay-btn"
//             onClick={() =>
//               navigate("/success", {
//                 state: {
//                   flight,
//                   seat,
//                   meal,
//                   baggage,
//                   total,
//                 },
//               })
//             }
//           >
//             Pay Now
//           </button>

//         </div>

//       </div>

//     </section>

//   );

// }

// export default Payment;













// // import "./Payment.css";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { useState } from "react";

// // function Payment() {

// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const {
// //     flight,
// //     seat,
// //     meal,
// //     baggage,
// //   } = location.state || {};

// //   const [coupon, setCoupon] = useState("");
// //   const [discount, setDiscount] = useState(0);

// //   if (!flight) {
// //     return (
// //       <h2
// //         style={{
// //           textAlign: "center",
// //           marginTop: "120px",
// //         }}
// //       >
// //         No Booking Found
// //       </h2>
// //     );
// //   }

// //   const seatPrice = seat ? 300 : 0;
// //   const mealPrice = meal ? meal.price : 0;
// //   const baggagePrice = baggage ? baggage.price : 0;

// //   const taxes = 350;
// //   const convenienceFee = 100;

// //   const subtotal =
// //     flight.price +
// //     seatPrice +
// //     mealPrice +
// //     baggagePrice +
// //     taxes +
// //     convenienceFee;

// //   const total = subtotal - discount;

// //   const applyCoupon = () => {

// //     if (coupon.toUpperCase() === "SAVE500") {
// //       setDiscount(500);
// //       alert("Coupon Applied Successfully");
// //     } else {
// //       setDiscount(0);
// //       alert("Invalid Coupon");
// //     }

// //   };

// //   return (

// //     <section className="payment-page">

// //       {/* Progress */}

// //       <div className="payment-progress">

// //         <div className="progress-item completed">
// //           <div className="progress-circle">✓</div>
// //           <span>Booking</span>
// //         </div>

// //         <div className="progress-line"></div>

// //         <div className="progress-item completed">
// //           <div className="progress-circle">✓</div>
// //           <span>Seat</span>
// //         </div>

// //         <div className="progress-line"></div>

// //         <div className="progress-item completed">
// //           <div className="progress-circle">✓</div>
// //           <span>Meal</span>
// //         </div>

// //         <div className="progress-line"></div>

// //         <div className="progress-item completed">
// //           <div className="progress-circle">✓</div>
// //           <span>Baggage</span>
// //         </div>

// //         <div className="progress-line active"></div>

// //         <div className="progress-item active">
// //           <div className="progress-circle">5</div>
// //           <span>Payment</span>
// //         </div>

// //       </div>

// //       <div className="payment-container">

// //         {/* Left */}

// //         <div className="payment-method">

// //           <h2>Choose Payment Method</h2>

// //           <div className="payment-card">

// //             <label>

// //               <input
// //                 type="radio"
// //                 name="payment"
// //                 defaultChecked
// //               />

// //               UPI Payment

// //             </label>

// //             <div className="upi-apps">

// //               <button>PhonePe</button>

// //               <button>Google Pay</button>

// //               <button>Paytm</button>

// //             </div>

// //           </div>

// //           <div className="payment-card">

// //             <label>

// //               <input
// //                 type="radio"
// //                 name="payment"
// //               />

// //               Credit / Debit Card

// //             </label>

// //             <div className="card-form">

// //               <input
// //                 type="text"
// //                 placeholder="Card Number"
// //               />

// //               <div className="card-row">

// //                 <input
// //                   type="text"
// //                   placeholder="MM / YY"
// //                 />

// //                 <input
// //                   type="password"
// //                   placeholder="CVV"
// //                 />

// //               </div>

// //             </div>

// //           </div>

// //           <div className="payment-card">

// //             <label>

// //               <input
// //                 type="radio"
// //                 name="payment"
// //               />

// //               Net Banking

// //             </label>

// //             <select>

// //               <option>Select Bank</option>

// //               <option>State Bank of India</option>

// //               <option>HDFC Bank</option>

// //               <option>ICICI Bank</option>

// //               <option>Axis Bank</option>

// //             </select>

// //           </div>

// //           {/* Coupon */}

// //           <div className="coupon-box">

// //             <h3>Apply Coupon</h3>

// //             <input
// //               type="text"
// //               placeholder="Enter Coupon Code"
// //               value={coupon}
// //               onChange={(e) =>
// //                 setCoupon(e.target.value)
// //               }
// //             />

// //             <button onClick={applyCoupon}>
// //               Apply Coupon
// //             </button>

// //           </div>


// //                       {/* Right */}

// //         <div className="payment-summary">

// //           <h2>Booking Summary</h2>

// //           <p>
// //             <strong>{flight.airline}</strong>
// //           </p>

// //           <p>
// //             {flight.from} → {flight.to}
// //           </p>

// //           <p>
// //             Flight : {flight.flightNo}
// //           </p>

// //           <hr />

// //           <div className="summary-row">
// //             <span>Flight Fare</span>
// //             <span>₹ {flight.price}</span>
// //           </div>

// //           <div className="summary-row">
// //             <span>Seat Charge</span>
// //             <span>₹ {seatPrice}</span>
// //           </div>

// //           <div className="summary-row">
// //             <span>Meal Charge</span>
// //             <span>₹ {mealPrice}</span>
// //           </div>

// //           <div className="summary-row">
// //             <span>Baggage Charge</span>
// //             <span>₹ {baggagePrice}</span>
// //           </div>

// //           <div className="summary-row">
// //             <span>Taxes</span>
// //             <span>₹ {taxes}</span>
// //           </div>

// //           <div className="summary-row">
// //             <span>Convenience Fee</span>
// //             <span>₹ {convenienceFee}</span>
// //           </div>

// //           <div className="summary-row discount">

// //             <span>Coupon Discount</span>

// //             <span>- ₹ {discount}</span>

// //           </div>

// //           <hr />

// //           <div className="summary-total">

// //             <span>Grand Total</span>

// //             <span>₹ {total}</span>

// //           </div>

// //           {/* Secure Payment */}

// //           <div className="secure-payment">

// //             <h4>🔒 100% Secure Payment</h4>

// //             <p>

// //               SSL Encrypted • PCI DSS Compliant • Safe Checkout

// //             </p>

// //           </div>

// //           <button
// //             className="pay-btn"
// //             onClick={() =>
// //               navigate("/success", {
// //                 state: {
// //                   flight,
// //                   seat,
// //                   meal,
// //                   baggage,
// //                   total,
// //                 },
// //               })
// //             }
// //           >
// //             Pay ₹ {total}
// //           </button>

// //         </div>

// //       </div>

// //     </section>

// //   );

// // }

// // export default Payment;








// // // import "./Payment.css";
// // // import { useState } from "react";
// // // import { useLocation, useNavigate } from "react-router-dom";

// // // function Payment() {

// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const {
// // //     flight,
// // //     seat,
// // //     meal,
// // //     baggage,
// // //   } = location.state || {};

// // //   const [coupon, setCoupon] = useState("");
// // //   const [discount, setDiscount] = useState(0);

// // //   if (!flight) {
// // //     return (
// // //       <h2
// // //         style={{
// // //           textAlign: "center",
// // //           marginTop: "120px",
// // //         }}
// // //       >
// // //         No Booking Found
// // //       </h2>
// // //     );
// // //   }

// // //   const seatPrice = seat ? 300 : 0;
// // //   const mealPrice = meal ? meal.price : 0;
// // //   const baggagePrice = baggage ? baggage.price : 0;

// // //   const taxes = 350;
// // //   const convenienceFee = 100;

// // //   const subtotal =
// // //     flight.price +
// // //     seatPrice +
// // //     mealPrice +
// // //     baggagePrice +
// // //     taxes +
// // //     convenienceFee;

// // //   const total = subtotal - discount;

// // //   const applyCoupon = () => {

// // //     if (coupon.toUpperCase() === "SAVE500") {

// // //       setDiscount(500);

// // //       alert("Coupon Applied Successfully");

// // //     } else {

// // //       setDiscount(0);

// // //       alert("Invalid Coupon");

// // //     }

// // //   };

// // //   return (

// // //     <section className="payment-page">

// // //       {/* Progress */}

// // //       <div className="payment-progress">

// // //         <div className="progress-item completed">
// // //           <div className="progress-circle">✓</div>
// // //           <span>Booking</span>
// // //         </div>

// // //         <div className="progress-line"></div>

// // //         <div className="progress-item completed">
// // //           <div className="progress-circle">✓</div>
// // //           <span>Seat</span>
// // //         </div>

// // //         <div className="progress-line"></div>

// // //         <div className="progress-item completed">
// // //           <div className="progress-circle">✓</div>
// // //           <span>Meal</span>
// // //         </div>

// // //         <div className="progress-line"></div>

// // //         <div className="progress-item completed">
// // //           <div className="progress-circle">✓</div>
// // //           <span>Baggage</span>
// // //         </div>

// // //         <div className="progress-line active"></div>

// // //         <div className="progress-item active">
// // //           <div className="progress-circle">5</div>
// // //           <span>Payment</span>
// // //         </div>

// // //       </div>

// // //       <div className="payment-container">

// // //         {/* Left */}

// // //         <div className="payment-method">

// // //           <h2>Choose Payment Method</h2>

// // //           <div className="payment-card">

// // //             <label>

// // //               <input
// // //                 type="radio"
// // //                 name="payment"
// // //                 defaultChecked
// // //               />

// // //               UPI Payment

// // //             </label>

// // //             <div className="upi-apps">

// // //               <button>PhonePe</button>

// // //               <button>Google Pay</button>

// // //               <button>Paytm</button>

// // //             </div>

// // //           </div>

// // //           <div className="payment-card">

// // //             <label>

// // //               <input
// // //                 type="radio"
// // //                 name="payment"
// // //               />

// // //               Credit / Debit Card

// // //             </label>

// // //             <div className="card-form">

// // //               <input
// // //                 type="text"
// // //                 placeholder="Card Number"
// // //               />

// // //               <div className="card-row">

// // //                 <input
// // //                   type="text"
// // //                   placeholder="MM / YY"
// // //                 />

// // //                 <input
// // //                   type="password"
// // //                   placeholder="CVV"
// // //                 />

// // //               </div>

// // //             </div>

// // //           </div>

// // //           <div className="payment-card">

// // //             <label>

// // //               <input
// // //                 type="radio"
// // //                 name="payment"
// // //               />

// // //               Net Banking

// // //             </label>

// // //             <select>

// // //               <option>Select Bank</option>

// // //               <option>State Bank of India</option>

// // //               <option>HDFC Bank</option>

// // //               <option>ICICI Bank</option>

// // //               <option>Axis Bank</option>

// // //             </select>

// // //           </div>

// // //           <div className="coupon-box">

// // //             <h3>Apply Coupon</h3>

// // //             <input
// // //               type="text"
// // //               placeholder="Enter Coupon Code"
// // //               value={coupon}
// // //               onChange={(e) =>
// // //                 setCoupon(e.target.value)
// // //               }
// // //             />

// // //             <button onClick={applyCoupon}>
// // //               Apply Coupon
// // //             </button>

// // //           </div>

// // //         {/* Right */}

// // //         <div className="payment-summary">

// // //           <h2>Booking Summary</h2>

// // //           <p>
// // //             <strong>{flight.airline}</strong>
// // //           </p>

// // //           <p>
// // //             {flight.from} → {flight.to}
// // //           </p>

// // //           <p>
// // //             Flight : {flight.flightNo}
// // //           </p>

// // //           <hr />

// // //           <div className="summary-row">
// // //             <span>Flight Fare</span>
// // //             <span>₹ {flight.price}</span>
// // //           </div>

// // //           <div className="summary-row">
// // //             <span>Seat Charge</span>
// // //             <span>₹ {seatPrice}</span>
// // //           </div>

// // //           <div className="summary-row">
// // //             <span>Meal Charge</span>
// // //             <span>₹ {mealPrice}</span>
// // //           </div>

// // //           <div className="summary-row">
// // //             <span>Baggage Charge</span>
// // //             <span>₹ {baggagePrice}</span>
// // //           </div>

// // //           <div className="summary-row">
// // //             <span>Taxes</span>
// // //             <span>₹ {taxes}</span>
// // //           </div>

// // //           <div className="summary-row">
// // //             <span>Convenience Fee</span>
// // //             <span>₹ {convenienceFee}</span>
// // //           </div>

// // //           <div className="summary-row discount">

// // //             <span>Coupon Discount</span>

// // //             <span>- ₹ {discount}</span>

// // //           </div>

// // //           <hr />

// // //           <div className="summary-total">

// // //             <span>Grand Total</span>

// // //             <span>₹ {total}</span>

// // //           </div>

// // //           <div className="secure-payment">

// // //             <h3>🔒 Secure Payment</h3>

// // //             <p>

// // //               Your payment is protected with
// // //               SSL Encryption & PCI DSS Security.

// // //             </p>

// // //           </div>

// // //           <button
// // //             className="pay-btn"
// // //             onClick={() =>
// // //               navigate("/success", {
// // //                 state: {
// // //                   flight,
// // //                   seat,
// // //                   meal,
// // //                   baggage,
// // //                   total,
// // //                 },
// // //               })
// // //             }
// // //           >
// // //             Pay ₹ {total}
// // //           </button>

// // //         </div>

// // //       </div>

// // //     </section>

// // //   );

// // // }

// // // export default Payment;
          














import "./Payment.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    flight,
    seat,
    meal,
    baggage,
  } = location.state || {};

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  if (!flight) {
    return (
      <div className="payment-error">
        <h2>No Booking Found</h2>
      </div>
    );
  }

  const seatPrice = seat ? 300 : 0;
  const mealPrice = meal ? meal.price : 0;
  const baggagePrice = baggage ? baggage.price : 0;

  const taxes = 350;
  const convenienceFee = 100;

  const subtotal =
    flight.price +
    seatPrice +
    mealPrice +
    baggagePrice +
    taxes +
    convenienceFee;

  const total = subtotal - discount;

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SAVE500") {
      setDiscount(500);
      alert("Coupon Applied Successfully");
    } else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  return (
    <section className="payment-page">

      <div className="payment-progress">

        <div className="step active">
          <span>✓</span>
          <p>Booking</p>
        </div>

        <div className="line active"></div>

        <div className="step active">
          <span>✓</span>
          <p>Seat</p>
        </div>

        <div className="line active"></div>

        <div className="step active">
          <span>✓</span>
          <p>Meal</p>
        </div>

        <div className="line active"></div>

        <div className="step active">
          <span>✓</span>
          <p>Baggage</p>
        </div>

        <div className="line active"></div>

        <div className="step current">
          <span>5</span>
          <p>Payment</p>
        </div>

      </div>

      <div className="payment-container">

        <div className="payment-left">

          <h2>Select Payment Method</h2>

          <div className="payment-card">

            <label>
              <input
                type="radio"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
              />
              UPI Payment
            </label>

            <div className="upi-apps">
              <button>PhonePe</button>
              <button>Google Pay</button>
              <button>Paytm</button>
            </div>

          </div>

          <div className="payment-card">

            <label>
              <input
                type="radio"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Credit / Debit Card
            </label>

            <input
              type="text"
              placeholder="Card Number"
            />

            <div className="card-row">

              <input
                type="text"
                placeholder="MM / YY"
              />

              <input
                type="password"
                placeholder="CVV"
              />

            </div>

          </div>

          <div className="payment-card">

            <label>
              <input
                type="radio"
                checked={paymentMethod === "netbanking"}
                onChange={() => setPaymentMethod("netbanking")}
              />
              Net Banking
            </label>

            <select>
              <option>Select Bank</option>
              <option>State Bank of India</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
            </select>

          </div>

                    <div className="coupon-box">

            <h3>Apply Coupon</h3>

            <div className="coupon-input">

              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />

              <button onClick={applyCoupon}>
                Apply
              </button>

            </div>

            <p className="coupon-note">
              Use <strong>SAVE500</strong> to get ₹500 OFF
            </p>

          </div>

        </div>

        {/* Right Side */}

        <div className="payment-right">

          <div className="booking-summary">

            <h2>Booking Summary</h2>

            <div className="summary-row">
              <span>Airline</span>
              <span>{flight.airline}</span>
            </div>

            <div className="summary-row">
              <span>Route</span>
              <span>{flight.from} → {flight.to}</span>
            </div>

            <div className="summary-row">
              <span>Flight No.</span>
              <span>{flight.flightNo}</span>
            </div>

            <hr />

            <div className="summary-row">
              <span>Flight Fare</span>
              <span>₹ {flight.price}</span>
            </div>

            <div className="summary-row">
              <span>Seat</span>
              <span>₹ {seatPrice}</span>
            </div>

            <div className="summary-row">
              <span>Meal</span>
              <span>₹ {mealPrice}</span>
            </div>

            <div className="summary-row">
              <span>Baggage</span>
              <span>₹ {baggagePrice}</span>
            </div>

            <div className="summary-row">
              <span>Taxes</span>
              <span>₹ {taxes}</span>
            </div>

            <div className="summary-row">
              <span>Convenience Fee</span>
              <span>₹ {convenienceFee}</span>
            </div>

            <div className="summary-row discount">
              <span>Coupon Discount</span>
              <span>- ₹ {discount}</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total Payable</span>
              <span>₹ {total}</span>
            </div>

            <div className="secure-payment">
              🔒 100% Secure Payment
            </div>
                        <button
              className="pay-btn"
              onClick={() =>
                navigate("/success", {
                  state: {
                    flight,
                    seat,
                    meal,
                    baggage,
                    total,
                  },
                })
              }
            >
              Pay ₹ {total}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Payment;