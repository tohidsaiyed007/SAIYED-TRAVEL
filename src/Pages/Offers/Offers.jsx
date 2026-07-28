import "./Offers.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaCopy, FaPlaneDeparture, FaCreditCard } from "react-icons/fa";

function Offers() {

  const offers = [
    {
      id: 1,
      title: "Flat ₹1200 OFF",
      code: "SAIYED1200",
      description: "Valid on domestic flight bookings above ₹5000.",
      icon: <FaPlaneDeparture />,
      color: "offer-blue",
    },
    {
      id: 2,
      title: "10% Instant Discount",
      code: "HDFC10",
      description: "Save instantly using HDFC Cards.",
      icon: <FaCreditCard />,
      color: "offer-orange",
    },
    {
      id: 3,
      title: "₹800 Cashback",
      code: "PAYTM800",
      description: "Applicable on Paytm UPI Payments.",
      icon: <FaCreditCard />,
      color: "offer-green",
    },
    {
      id: 4,
      title: "Student Offer",
      code: "STUDENT15",
      description: "Extra 15% OFF for Students.",
      icon: <FaPlaneDeparture />,
      color: "offer-purple",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="offers-page">

        <div className="offers-banner">

          <h1>Exclusive Flight Offers</h1>

          <p>
            Save more on every booking with Saiyed Travels
          </p>

        </div>

        <div className="offers-container">

          {offers.map((offer) => (

            <div
              className={`offer-box ${offer.color}`}
              key={offer.id}
            >

              <div className="offer-icon">
                {offer.icon}
              </div>

              <h2>{offer.title}</h2>

              <p>{offer.description}</p>

              <div className="coupon">

                <strong>{offer.code}</strong>

                <button>

                  <FaCopy />

                  Copy

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Offers;