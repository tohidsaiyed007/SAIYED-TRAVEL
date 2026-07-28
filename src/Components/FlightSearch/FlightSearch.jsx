
import "./FlightSearch.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CitySelector from "../CitySelector/CitySelector";
import TravellerSelector from "../TravellerSelector/TravellerSelector";

import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExchangeAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaSearch,
} from "react-icons/fa";

function FlightSearch() {

  const navigate = useNavigate();

  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Mumbai");

  const [departureDate, setDepartureDate] = useState(new Date());

  const [showFromSelector, setShowFromSelector] = useState(false);
  const [showToSelector, setShowToSelector] = useState(false);
  const [showTraveller, setShowTraveller] = useState(false);

  const [travellers, setTravellers] = useState({
  adults: 1,
  children: 0,
  infants: 0,
  cabin: "Economy",
});
  

  const fromRef = useRef(null);
  const toRef = useRef(null);

    const handleSearch = () => {

    if (!from.trim() || !to.trim()) {
      alert("Please select departure and destination.");
      return;
    }

    if (from === to) {
      alert("Departure and Destination cannot be the same.");
      return;
    }

    // navigate("/flights", {
    //   state: {
    //     from,
    //     to,
    //     departureDate,
    //   },
    // });


    navigate("/flights", {
  state: {
    from,
    to,
    departureDate,
    travellers,
  },
});

  };

  const handleFromSelect = (city) => {
    setFrom(city);
    setShowFromSelector(false);
  };

  const handleToSelect = (city) => {
    setTo(city);
    setShowToSelector(false);
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };



  const handleTravellerDone = (data) => {
  setTravellers(data);
  setShowTraveller(false);
};



  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        fromRef.current &&
        !fromRef.current.contains(event.target)
      ) {
        setShowFromSelector(false);
      }

    //   if (
    //     toRef.current &&
    //     !toRef.current.contains(event.target)
    //   ) {
    //     setShowToSelector(false);
    //   }

    if (
  !event.target.closest(".traveller-popup") &&
  !event.target.closest(".selector-content")
) {
  setShowTraveller(false);
}

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  return (     <section className="flight-search">

      <div className="search-card">

        <div className="trip-tabs">
          <button className="active">One Way</button>
          <button>Round Trip</button>
          <button>Multi City</button>
        </div>

        <div className="search-row">

          {/* FROM */}

          <div
            className="field selector-field"
            ref={fromRef}
          >

            <FaPlaneDeparture className="icon" />

            <div
              className="selector-content"
              onClick={() => setShowFromSelector(true)}
            >
              <p>From</p>

              <h3>{from}</h3>

              <span>Select Departure City</span>

            </div>

            {showFromSelector && (

              <div className="selector-popup">

                <CitySelector onSelect={handleFromSelect} />

              </div>

            )}

          </div>

          {/* SWAP */}

          <button
            className="swap-btn"
            onClick={handleSwap}
          >

            <FaExchangeAlt />

          </button>

          {/* TO */}

          <div
            className="field selector-field"
            ref={toRef}
          >

            <FaPlaneArrival className="icon" />

            <div
              className="selector-content"
              onClick={() => setShowToSelector(true)}
            >

              <p>To</p>

              <h3>{to}</h3>

              <span>Select Destination</span>

            </div>

            {showToSelector && (

              <div className="selector-popup">

                <CitySelector onSelect={handleToSelect} />

              </div>

            )}

          </div>

          {/* DATE */}

          <div className="field">

            <FaCalendarAlt className="icon" />

            <div>

              <p>Departure</p>

              <DatePicker
                selected={departureDate}
                onChange={(date) => setDepartureDate(date)}
                dateFormat="dd MMM yyyy"
                minDate={new Date()}
                className="date-picker"
              />

              <span>Select Travel Date</span>

            </div>

          </div>

          {/* TRAVELLERS */}

          {/* <div className="field">

            <FaUserFriends className="icon" />

            <div>

              <p>Travellers</p>

              <h3>1 Adult</h3>

              <span>Economy</span>

            </div>

          </div> */}

          <div className="field selector-field">

  <FaUserFriends className="icon" />

  <div
    className="selector-content"
    onClick={() => setShowTraveller(true)}
  >

    <p>Travellers</p>

    {/* <h3>1 Adult</h3>

    <span>Economy</span> */}

    <h3>
  {travellers.adults} Adult
  {travellers.adults > 1 ? "s" : ""}
</h3>

<span>{travellers.cabin}</span>

  </div>

  {showTraveller && (

    <div className="selector-popup">

      {/* <TravellerSelector
        onClose={() => setShowTraveller(false)}
      /> */}


<TravellerSelector
  travellers={travellers}
  onDone={handleTravellerDone}
  onClose={() => setShowTraveller(false)}
/>
    </div>

  )}

</div>

          {/* SEARCH */}

          <button
            className="search-btn"
            onClick={handleSearch}
          >

            <FaSearch />

          </button>

        </div>

      </div>

    </section>
      );
}

export default FlightSearch;