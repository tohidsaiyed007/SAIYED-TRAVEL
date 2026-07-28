import "./Offers.css";

function Offers() {
  return (
    <section className="offers">

      <div className="offer-card offer-one">

        <div className="offer-content">
          <span>LIMITED TIME</span>

          <h2>Summer Flight Sale</h2>

          <p>Save up to 40% on Domestic & International Flights.</p>

          <button>Book Now</button>
        </div>

      </div>

      <div className="offer-card offer-two">

        <div className="offer-content">
          <span>SPECIAL OFFER</span>

          <h2>Dubai Starting ₹12,999</h2>

          <p>Book your dream vacation with exclusive discounts.</p>

          <button>Explore</button>
        </div>

      </div>

      <div className="offer-card offer-three">

        <div className="offer-content">
          <span>CASHBACK</span>

          <h2>Get ₹1500 Cashback</h2>

          <p>Pay using selected bank cards and save more.</p>

          <button>Claim</button>
        </div>

      </div>

    </section>
  );
}

export default Offers;