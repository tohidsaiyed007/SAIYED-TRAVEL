import "./ExtraBaggage.css";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


function ExtraBaggage() {

  const navigate = useNavigate();

  const location = useLocation();


  // =====================================================
  // BOOKING DATA
  // =====================================================

  const {
    flight,

    passenger,

    passengers,

    travellers,

    pricing,

    seats,

    seat,

    seatAssignments,

    meals,

    meal,

    mealAssignments,

  } = location.state || {};


  // =====================================================
  // FINAL PASSENGER LIST
  // =====================================================

  const passengerList =
    Array.isArray(passengers) &&
    passengers.length > 0

      ? passengers

      : passenger
      ? [passenger]
      : [];


  // =====================================================
  // PASSENGER COUNTS
  // =====================================================

  const adultCount =
    Math.max(
      Number(
        travellers?.adults
      ) || 1,

      1
    );


  const childCount =
    Math.max(
      Number(
        travellers?.children
      ) || 0,

      0
    );


  const infantCount =
    Math.max(
      Number(
        travellers?.infants
      ) || 0,

      0
    );


  const totalPassengers =
    adultCount +
    childCount +
    infantCount;


  // =====================================================
  // SELECTED SEATS
  // =====================================================

  const selectedSeats =
    Array.isArray(seats)

      ? seats

      : seat
      ? [seat]
      : [];


  // =====================================================
  // SELECTED MEALS
  // =====================================================

  const selectedMeals =
    Array.isArray(meals)

      ? meals

      : meal
      ? [meal]
      : [];


  // =====================================================
  // NO BOOKING
  // =====================================================

  if (!flight) {

    return (
      <>
        <Navbar />

        <section className="baggage-page">

          <div className="no-booking">

            <h2>
              No Booking Found ✈️
            </h2>

            <p>
              Please complete your
              passenger details first.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate("/")
              }
            >
              Back To Home
            </button>

          </div>

        </section>

        <Footer />
      </>
    );

  }


  // =====================================================
  // BAGGAGE PRICES FROM ADMIN
  // =====================================================

  const adultBaggagePrice =
    Number(
      flight?.adultBaggagePrice
    ) || 0;


  const childBaggagePrice =
    Number(
      flight?.childBaggagePrice
    ) || 0;


  const infantBaggagePrice =
    Number(
      flight?.infantBaggagePrice
    ) || 0;


  // =====================================================
  // BAGGAGE OPTIONS
  // =====================================================

  const baggageOptions = [

    {
      id: 1,
      weight: "15 KG (Included)",
      price: 0,
    },

    {
      id: 2,
      weight: "+5 KG",
      price:
        adultBaggagePrice > 0
          ? adultBaggagePrice
          : 500,
    },

    {
      id: 3,
      weight: "+10 KG",
      price:
        adultBaggagePrice > 0
          ? adultBaggagePrice
          : 900,
    },

    {
      id: 4,
      weight: "+15 KG",
      price:
        adultBaggagePrice > 0
          ? adultBaggagePrice
          : 1200,
    },

    {
      id: 5,
      weight: "+20 KG",
      price:
        adultBaggagePrice > 0
          ? adultBaggagePrice
          : 1500,
    },

  ];


  // =====================================================
  // DEFAULT BAGGAGE
  // =====================================================

  const [
    selectedBaggage,
    setSelectedBaggage,
  ] = useState(

    Array.from(
      {
        length:
          totalPassengers,
      },

      () =>
        baggageOptions[0]
    )

  );


  // =====================================================
  // GET PASSENGER TYPE
  // =====================================================

  const getPassengerType =
    (index) => {

      if (
        index <
        adultCount
      ) {

        return "Adult";

      }


      if (
        index <
        adultCount +
          childCount
      ) {

        return "Child";

      }


      return "Infant";

    };


  // =====================================================
  // GET BAGGAGE PRICE
  // =====================================================

  const getBaggagePrice =
    (
      passengerType,
      option
    ) => {

      // Included baggage
      if (
        option.price === 0
      ) {

        return 0;

      }


      // Child
      if (
        passengerType ===
        "Child"
      ) {

        return (
          childBaggagePrice >
          0

            ? childBaggagePrice

            : option.price
        );

      }


      // Infant
      if (
        passengerType ===
        "Infant"
      ) {

        return (
          infantBaggagePrice >
          0

            ? infantBaggagePrice

            : 0
        );

      }


      // Adult
      return option.price;

    };


  // =====================================================
  // SELECT BAGGAGE
  // =====================================================

  const handleBaggageSelect =
    (
      passengerIndex,
      option
    ) => {

      const passengerType =
        getPassengerType(
          passengerIndex
        );


      const finalPrice =
        getBaggagePrice(
          passengerType,
          option
        );


      const updatedOption = {

        ...option,

        price:
          finalPrice,

      };


      setSelectedBaggage(
        (previous) => {

          const updated =
            [...previous];


          updated[
            passengerIndex
          ] =
            updatedOption;


          return updated;

        }
      );

    };


  // =====================================================
  // BAGGAGE TOTAL
  // =====================================================

  const baggageTotal =
    selectedBaggage.reduce(
      (
        total,
        bag
      ) => {

        return (
          total +
          Number(
            bag?.price || 0
          )
        );

      },

      0
    );


  // =====================================================
  // PASSENGER-WISE TOTALS
  // =====================================================

  const adultBaggageTotal =
    selectedBaggage
      .slice(
        0,
        adultCount
      )
      .reduce(
        (
          total,
          bag
        ) => {

          return (
            total +
            Number(
              bag?.price || 0
            )
          );

        },

        0
      );


  const childBaggageTotal =
    selectedBaggage
      .slice(
        adultCount,

        adultCount +
          childCount
      )
      .reduce(
        (
          total,
          bag
        ) => {

          return (
            total +
            Number(
              bag?.price || 0
            )
          );

        },

        0
      );


  const infantBaggageTotal =
    selectedBaggage
      .slice(
        adultCount +
          childCount
      )
      .reduce(
        (
          total,
          bag
        ) => {

          return (
            total +
            Number(
              bag?.price || 0
            )
          );

        },

        0
      );


  // =====================================================
  // CONTINUE TO PAYMENT
  // =====================================================

  const handleContinue =
    () => {

      // -----------------------------------------------
      // BAGGAGE VALIDATION
      // -----------------------------------------------

      if (
        selectedBaggage.length !==
        totalPassengers
      ) {

        alert(
          "Please select baggage for all passengers."
        );

        return;

      }


      // -----------------------------------------------
      // PRICING
      // -----------------------------------------------

      const updatedPricing = {

        ...(pricing || {}),


        // Ticket

        passengerFareTotal:
          Number(
            pricing?.passengerFareTotal ||
            0
          ),


        adultTotal:
          Number(
            pricing?.adultTotal ||
            0
          ),


        childTotal:
          Number(
            pricing?.childTotal ||
            0
          ),


        infantTotal:
          Number(
            pricing?.infantTotal ||
            0
          ),


        // Seat

        totalSeatPrice:
          Number(
            pricing?.totalSeatPrice ||
            0
          ),


        adultSeatTotal:
          Number(
            pricing?.adultSeatTotal ||
            0
          ),


        childSeatTotal:
          Number(
            pricing?.childSeatTotal ||
            0
          ),


        infantSeatTotal:
          Number(
            pricing?.infantSeatTotal ||
            0
          ),


        // Meal

        mealTotal:
          Number(
            pricing?.mealTotal ||
            0
          ),


        adultMealTotal:
          Number(
            pricing?.adultMealTotal ||
            0
          ),


        childMealTotal:
          Number(
            pricing?.childMealTotal ||
            0
          ),


        infantMealTotal:
          Number(
            pricing?.infantMealTotal ||
            0
          ),


        // Baggage

        adultBaggagePrice,

        childBaggagePrice,

        infantBaggagePrice,


        adultBaggageTotal,

        childBaggageTotal,

        infantBaggageTotal,

        baggageTotal,

      };


      // =================================================
      // FINAL PAYMENT STATE
      // =================================================

      navigate(
        "/payment",
        {
          state: {

            // -----------------------------------------
            // FLIGHT
            // -----------------------------------------

            flight,


            // -----------------------------------------
            // ALL PASSENGERS
            // -----------------------------------------

            passengers:
              passengerList,


            // Backward compatibility

            passenger:
              passenger ||
              passengerList[0] ||
              null,


            // -----------------------------------------
            // TRAVELLERS
            // -----------------------------------------

            travellers: {

              adults:
                adultCount,

              children:
                childCount,

              infants:
                infantCount,

              cabin:
                travellers?.cabin ||
                "Economy",

            },


            // -----------------------------------------
            // PRICING
            // -----------------------------------------

            pricing:
              updatedPricing,


            // -----------------------------------------
            // SEATS
            // -----------------------------------------

            seats:
              selectedSeats,


            seat:
              selectedSeats[0] ||
              "",


            // IMPORTANT

            seatAssignments:
              seatAssignments || [],


            // -----------------------------------------
            // MEALS
            // -----------------------------------------

            meals:
              selectedMeals,


            meal:
              selectedMeals[0] ||
              null,


            mealAssignments:
              mealAssignments || [],


            // -----------------------------------------
            // BAGGAGE
            // -----------------------------------------

            baggage:
              selectedBaggage,


            baggageTotal,

          },
        }
      );

    };


  // =====================================================
  // UI
  // =====================================================

  return (
    <>
      <Navbar />


      <section className="baggage-page">

        <div className="baggage-container">


          {/* =========================================
                HEADER
          ========================================= */}

          <div className="baggage-header">

            <h2>
              Extra Baggage
            </h2>


            <p>
              {flight.airline}
            </p>


            <h4>

              {flight.fromCity ||
                flight.from}

              <span>
                {" → "}
              </span>

              {flight.toCity ||
                flight.to}

            </h4>


            {/* PASSENGERS */}

            <div
              style={{
                display:
                  "flex",

                justifyContent:
                  "center",

                gap:
                  "10px",

                flexWrap:
                  "wrap",

                marginTop:
                  "10px",
              }}
            >

              <span>

                👤 {adultCount} Adult
                {adultCount > 1
                  ? "s"
                  : ""}

              </span>


              {childCount > 0 && (

                <span>

                  🧒 {childCount} Child
                  {childCount > 1
                    ? "ren"
                    : ""}

                </span>

              )}


              {infantCount > 0 && (

                <span>

                  👶 {infantCount} Infant
                  {infantCount > 1
                    ? "s"
                    : ""}

                </span>

              )}

            </div>


            {/* SEATS */}

            <h5>

              Seats:

              <span>

                {" "}

                {selectedSeats.length >
                0

                  ? selectedSeats.join(
                      ", "
                    )

                  : "None"}

              </span>

            </h5>


            {/* MEALS */}

            <h5>

              Meals:

              <span>

                {" "}

                {selectedMeals.length >
                0

                  ? selectedMeals
                      .map(
                        (
                          item
                        ) =>
                          item?.name
                      )
                      .join(
                        ", "
                      )

                  : "No Meal"}

              </span>

            </h5>

          </div>


          {/* =========================================
                PASSENGER BAGGAGE
          ========================================= */}

          <div className="passenger-baggage-list">

            {Array.from(
              {
                length:
                  totalPassengers,
              }
            ).map(
              (
                _,
                index
              ) => {

                const type =
                  getPassengerType(
                    index
                  );


                const currentBag =
                  selectedBaggage[
                    index
                  ] ||
                  baggageOptions[0];


                return (

                  <div
                    key={index}
                    className="passenger-baggage-section"
                    style={{
                      marginBottom:
                        "25px",

                      padding:
                        "20px",

                      border:
                        "1px solid #e5e7eb",

                      borderRadius:
                        "14px",

                      background:
                        "#ffffff",
                    }}
                  >

                    {/* PASSENGER */}

                    <div
                      style={{
                        display:
                          "flex",

                        justifyContent:
                          "space-between",

                        alignItems:
                          "center",

                        marginBottom:
                          "15px",
                      }}
                    >

                      <h3>

                        Passenger{" "}
                        {index + 1}

                      </h3>


                      <span
                        style={{
                          padding:
                            "5px 12px",

                          borderRadius:
                            "20px",

                          background:
                            "#eff6ff",

                          color:
                            "#2563eb",

                          fontSize:
                            "13px",

                          fontWeight:
                            "600",
                        }}
                      >

                        {type}

                      </span>

                    </div>


                    {/* BAGGAGE OPTIONS */}

                    <div className="baggage-grid">

                      {baggageOptions.map(
                        (
                          bag
                        ) => {

                          const price =
                            getBaggagePrice(
                              type,
                              bag
                            );


                          const isSelected =
                            currentBag.id ===
                            bag.id;


                          return (

                            <div
                              key={
                                bag.id
                              }

                              className={
                                isSelected
                                  ? "baggage-card active"
                                  : "baggage-card"
                              }

                              onClick={() =>
                                handleBaggageSelect(
                                  index,
                                  bag
                                )
                              }
                            >

                              <div className="bag-icon">

                                🧳

                              </div>


                              <h3>

                                {
                                  bag.weight
                                }

                              </h3>


                              <p>

                                {price ===
                                0

                                  ? "Included"

                                  : `₹ ${price}`}

                              </p>

                            </div>

                          );

                        }
                      )}

                    </div>


                    {/* SELECTED */}

                    <div
                      style={{
                        marginTop:
                          "15px",

                        display:
                          "flex",

                        justifyContent:
                          "space-between",

                        alignItems:
                          "center",

                        padding:
                          "10px 12px",

                        background:
                          "#f8fafc",

                        borderRadius:
                          "8px",
                      }}
                    >

                      <span>

                        Selected:{" "}

                        <strong>

                          {
                            currentBag.weight
                          }

                        </strong>

                      </span>


                      <strong>

                        {currentBag.price ===
                        0

                          ? "Included"

                          : `₹ ${currentBag.price}`}

                      </strong>

                    </div>

                  </div>

                );

              }
            )}

          </div>


          {/* =========================================
                SUMMARY
          ========================================= */}

          <div className="baggage-summary">

            <h3>
              Baggage Summary
            </h3>


            <p>

              Adults ({adultCount})

              <strong>

                ₹{" "}

                {adultBaggageTotal.toLocaleString(
                  "en-IN"
                )}

              </strong>

            </p>


            {childCount > 0 && (

              <p>

                Children ({childCount})

                <strong>

                  ₹{" "}

                  {childBaggageTotal.toLocaleString(
                    "en-IN"
                  )}

                </strong>

              </p>

            )}


            {infantCount > 0 && (

              <p>

                Infants ({infantCount})

                <strong>

                  ₹{" "}

                  {infantBaggageTotal.toLocaleString(
                    "en-IN"
                  )}

                </strong>

              </p>

            )}


            <p>

              Total Extra Baggage

              <strong>

                ₹{" "}

                {baggageTotal.toLocaleString(
                  "en-IN"
                )}

              </strong>

            </p>

          </div>


          {/* =========================================
                CONTINUE
          ========================================= */}

          <button
            className="continue-baggage-btn"
            type="button"
            onClick={
              handleContinue
            }
          >
            Continue To Payment
          </button>

        </div>

      </section>


      <Footer />

    </>
  );

}


export default ExtraBaggage;