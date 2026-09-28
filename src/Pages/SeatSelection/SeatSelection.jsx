import "./SeatSelection.css";

import { useState } from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


function SeatSelection() {

  const navigate =
    useNavigate();

  const location =
    useLocation();


  // =====================================================
  // BOOKING DATA
  // =====================================================

  const {
    flight,
    passengers,
    passenger,
    travellers,
    pricing,
  } = location.state || {};


  // =====================================================
  // PASSENGER LIST
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
      ) ||
      passengerList.filter(
        (item) =>
          (item?.type || "Adult") ===
          "Adult"
      ).length ||
      1,

      1
    );


  const childCount =
    Math.max(
      Number(
        travellers?.children
      ) ||
      passengerList.filter(
        (item) =>
          item?.type === "Child"
      ).length ||
      0,

      0
    );


  const infantCount =
    Math.max(
      Number(
        travellers?.infants
      ) ||
      passengerList.filter(
        (item) =>
          item?.type === "Infant"
      ).length ||
      0,

      0
    );


  // =====================================================
  // SEAT REQUIRED
  // INFANT DOES NOT NEED SEAT
  // =====================================================

  const seatRequiredCount =
    adultCount +
    childCount;


  // =====================================================
  // PASSENGERS WHO NEED SEATS
  // =====================================================

  const seatPassengers =
    passengerList.filter(
      (item) =>
        (item?.type || "Adult") !==
        "Infant"
    );


  // =====================================================
  // FALLBACK PASSENGERS
  // =====================================================

  const finalSeatPassengers =
    seatPassengers.length >
    0

      ? seatPassengers

      : Array.from(
          {
            length:
              seatRequiredCount,
          },
          (_, index) => {

            if (
              index <
              adultCount
            ) {

              return {
                type: "Adult",
                firstName:
                  `Adult ${index + 1}`,
                lastName: "",
              };

            }


            return {
              type: "Child",
              firstName:
                `Child ${
                  index -
                  adultCount +
                  1
                }`,
              lastName: "",
            };

          }
        );


  // =====================================================
  // NO BOOKING
  // =====================================================

  if (!flight) {

    return (
      <>
        <Navbar />

        <section className="seat-page">

          <div className="no-flight">

            <h2>
              No Booking Found ✈️
            </h2>

            <p>
              Please select a flight
              and complete passenger
              details first.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate("/booking")
              }
            >
              Back To Booking
            </button>

          </div>

        </section>

        <Footer />
      </>
    );

  }


  // =====================================================
  // SEAT PRICES
  // =====================================================

  const adultSeatPrice =
    Number(
      flight?.adultSeatPrice
    ) || 0;


  const childSeatPrice =
    Number(
      flight?.childSeatPrice
    ) || 0;


  const infantSeatPrice =
    Number(
      flight?.infantSeatPrice
    ) || 0;


  // =====================================================
  // FALLBACK
  // =====================================================

  const fallbackSeatPrice =
    300;


  const finalAdultSeatPrice =
    adultSeatPrice > 0
      ? adultSeatPrice
      : fallbackSeatPrice;


  const finalChildSeatPrice =
    childSeatPrice > 0
      ? childSeatPrice
      : finalAdultSeatPrice;


  const finalInfantSeatPrice =
    infantSeatPrice > 0
      ? infantSeatPrice
      : 0;


  // =====================================================
  // BOOKED SEATS
  // =====================================================

  const bookedSeats = [
    "1C",
    "2D",
    "3A",
    "4C",
    "5F",
    "6B",
  ];


  // =====================================================
  // SELECTED SEATS
  // =====================================================

  const [
    selectedSeats,
    setSelectedSeats,
  ] = useState([]);


  // =====================================================
  // ROWS
  // =====================================================

  const rows = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
  ];


  // =====================================================
  // SEATS
  // =====================================================

  const leftSeats = [
    "A",
    "B",
    "C",
  ];


  const rightSeats = [
    "D",
    "E",
    "F",
  ];


  // =====================================================
  // PASSENGER LABEL
  // =====================================================

  const getPassengerLabel = (
    passengerItem,
    index
  ) => {

    const type =
      passengerItem?.type ||
      "Adult";


    const sameTypeIndex =
      finalSeatPassengers
        .slice(
          0,
          index + 1
        )
        .filter(
          (item) =>
            (item?.type ||
              "Adult") ===
            type
        )
        .length;


    return `${type} ${sameTypeIndex}`;

  };


  // =====================================================
  // TOGGLE SEAT
  // =====================================================

  const handleSeatClick = (
    seat
  ) => {

    // -----------------------------------------------
    // REMOVE
    // -----------------------------------------------

    if (
      selectedSeats.includes(
        seat
      )
    ) {

      setSelectedSeats(
        (previous) =>
          previous.filter(
            (item) =>
              item !== seat
          )
      );

      return;

    }


    // -----------------------------------------------
    // MAXIMUM
    // -----------------------------------------------

    if (
      selectedSeats.length >=
      seatRequiredCount
    ) {

      alert(
        `You need to select only ${seatRequiredCount} seat${
          seatRequiredCount > 1
            ? "s"
            : ""
        }.`
      );

      return;

    }


    // -----------------------------------------------
    // ADD
    // -----------------------------------------------

    setSelectedSeats(
      (previous) => [
        ...previous,
        seat,
      ]
    );

  };


  // =====================================================
  // SEAT ASSIGNMENTS
  // =====================================================

  const seatAssignments =
    selectedSeats.map(
      (
        seat,
        index
      ) => {

        const passengerItem =
          finalSeatPassengers[
            index
          ];


        const type =
          passengerItem?.type ||
          "Adult";


        let price =
          finalAdultSeatPrice;


        if (
          type === "Child"
        ) {

          price =
            finalChildSeatPrice;

        }


        if (
          type === "Infant"
        ) {

          price =
            finalInfantSeatPrice;

        }


        return {

          passengerId:
            passengerItem?._id ||
            null,

          passengerName:
            `${passengerItem?.firstName || ""} ${
              passengerItem?.lastName || ""
            }`.trim() ||
            getPassengerLabel(
              passengerItem,
              index
            ),

          passengerType:
            type,

          seatNumber:
            seat,

          price,

        };

      }
    );


  // =====================================================
  // SEAT TOTAL
  // =====================================================

  const totalSeatPrice =
    seatAssignments.reduce(
      (
        total,
        item
      ) =>
        total +
        Number(
          item.price
        ),

      0
    );


  // =====================================================
  // ADULT SEAT TOTAL
  // =====================================================

  const adultSeatTotal =
    seatAssignments
      .filter(
        (item) =>
          item.passengerType ===
          "Adult"
      )
      .reduce(
        (
          total,
          item
        ) =>
          total +
          Number(
            item.price
          ),

        0
      );


  // =====================================================
  // CHILD SEAT TOTAL
  // =====================================================

  const childSeatTotal =
    seatAssignments
      .filter(
        (item) =>
          item.passengerType ===
          "Child"
      )
      .reduce(
        (
          total,
          item
        ) =>
          total +
          Number(
            item.price
          ),

        0
      );


  // =====================================================
  // INFANT SEAT TOTAL
  // =====================================================

  const infantSeatTotal =
    seatAssignments
      .filter(
        (item) =>
          item.passengerType ===
          "Infant"
      )
      .reduce(
        (
          total,
          item
        ) =>
          total +
          Number(
            item.price
          ),

        0
      );


  // =====================================================
  // CONTINUE
  // =====================================================

  const handleContinue =
    () => {

      // -----------------------------------------------
      // VALIDATION
      // -----------------------------------------------

      if (
        selectedSeats.length !==
        seatRequiredCount
      ) {

        alert(
          `Please select ${seatRequiredCount} seat${
            seatRequiredCount > 1
              ? "s"
              : ""
          } for ${adultCount} Adult${
            adultCount > 1
              ? "s"
              : ""
          }${
            childCount > 0
              ? ` + ${childCount} Child${
                  childCount > 1
                    ? "ren"
                    : ""
                }`
              : ""
          }.`
        );

        return;

      }


      // -----------------------------------------------
      // UPDATED PRICING
      // -----------------------------------------------

      const updatedPricing = {

        ...(pricing || {}),


        // Ticket fare

        adultFare:
          Number(
            pricing?.adultFare ||
            flight?.adultFare ||
            0
          ),

        childFare:
          Number(
            pricing?.childFare ||
            flight?.childFare ||
            0
          ),

        infantFare:
          Number(
            pricing?.infantFare ||
            flight?.infantFare ||
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


        passengerFareTotal:
          Number(
            pricing?.passengerFareTotal ||
            0
          ),


        // Seat price

        adultSeatPrice:
          finalAdultSeatPrice,

        childSeatPrice:
          finalChildSeatPrice,

        infantSeatPrice:
          finalInfantSeatPrice,


        adultSeatTotal,

        childSeatTotal,

        infantSeatTotal,

        totalSeatPrice,

      };


      // -----------------------------------------------
      // GO TO MEAL
      // -----------------------------------------------

      navigate(
        "/meal-selection",
        {
          state: {

            // Flight

            flight,


            // All passengers

            passengers:
              passengerList,


            // Backward compatibility

            passenger:
              passengerList[0],


            // Counts

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


            // Pricing

            pricing:
              updatedPricing,


            // Seat assignments

            seatAssignments,


            // Only seat numbers

            seats:
              selectedSeats,


            // Backward compatibility

            seat:
              selectedSeats[0] ||
              "",

          },
        }
      );

    };


  // =====================================================
  // RENDER SEAT
  // =====================================================

  const renderSeat = (
    row,
    col
  ) => {

    const seat =
      `${row}${col}`;


    const booked =
      bookedSeats.includes(
        seat
      );


    const selected =
      selectedSeats.includes(
        seat
      );


    return (

      <button
        key={seat}
        type="button"
        disabled={booked}
        className={
          booked
            ? "seat booked"
            : selected
            ? "seat selected"
            : "seat available"
        }
        onClick={() =>
          handleSeatClick(
            seat
          )
        }
      >

        {seat}

      </button>

    );

  };


  // =====================================================
  // UI
  // =====================================================

  return (
    <>
      <Navbar />


      <section className="seat-page">

        <div className="seat-container">


          {/* ============================================
                    FLIGHT HEADER
          ============================================ */}

          <div className="seat-header">

            <h2>
              {flight?.airline}
            </h2>


            <p>

              {flight?.fromCity ||
                flight?.from}

              <span>
                {" → "}
              </span>

              {flight?.toCity ||
                flight?.to}

            </p>


            <h4>

              {flight?.departureTime ||
                flight?.departure}

              <span>
                {" - "}
              </span>

              {flight?.arrivalTime ||
                flight?.arrival}

            </h4>


            {/* PASSENGER COUNT */}

            <div
              style={{
                marginTop:
                  "12px",

                display:
                  "flex",

                justifyContent:
                  "center",

                gap:
                  "8px",

                flexWrap:
                  "wrap",
              }}
            >

              <span>

                👤{" "}
                {adultCount} Adult
                {adultCount > 1
                  ? "s"
                  : ""}

              </span>


              {childCount > 0 && (

                <span>

                  🧒{" "}
                  {childCount} Child
                  {childCount > 1
                    ? "ren"
                    : ""}

                </span>

              )}


              {infantCount > 0 && (

                <span>

                  👶{" "}
                  {infantCount} Infant
                  {infantCount > 1
                    ? "s"
                    : ""}

                </span>

              )}

            </div>

          </div>


          {/* ============================================
                PASSENGER ASSIGNMENT
          ============================================ */}

          <div
            style={{
              margin:
                "20px 0",

              padding:
                "16px",

              background:
                "#f8fafc",

              border:
                "1px solid #e2e8f0",

              borderRadius:
                "12px",
            }}
          >

            <h3
              style={{
                marginBottom:
                  "12px",
              }}
            >
              Passenger Seat Assignment
            </h3>


            {finalSeatPassengers.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  style={{
                    display:
                      "flex",

                    justifyContent:
                      "space-between",

                    alignItems:
                      "center",

                    padding:
                      "9px 0",

                    borderBottom:
                      "1px solid #e5e7eb",
                  }}
                >

                  <span>

                    <strong>

                      {getPassengerLabel(
                        item,
                        index
                      )}

                    </strong>

                    {" - "}

                    {item?.firstName ||
                      "Passenger"}

                    {" "}

                    {item?.lastName ||
                      ""}

                  </span>


                  <strong>

                    {selectedSeats[
                      index
                    ] ||
                      "Select Seat"}

                  </strong>

                </div>

              )
            )}


            {infantCount > 0 && (

              <p
                style={{
                  marginTop:
                    "12px",

                  fontSize:
                    "13px",

                  color:
                    "#64748b",
                }}
              >

                👶 Infant does not require
                a separate seat.

              </p>

            )}

          </div>


          {/* ============================================
                    SEAT MAP
          ============================================ */}

          <div className="seat-map">

            <h3>

              Select{" "}
              {seatRequiredCount} Seat
              {seatRequiredCount > 1
                ? "s"
                : ""}

            </h3>


            <p
              style={{
                textAlign:
                  "center",

                color:
                  "#64748b",

                fontSize:
                  "13px",

                marginBottom:
                  "18px",
              }}
            >

              Selected{" "}
              {selectedSeats.length}
              {" / "}
              {seatRequiredCount}

            </p>


            <div className="seat-grid">

              {rows.map(
                (row) => (

                  <div
                    className="seat-row"
                    key={row}
                  >

                    <div className="seat-side">

                      {leftSeats.map(
                        (col) =>
                          renderSeat(
                            row,
                            col
                          )
                      )}

                    </div>


                    <div className="aisle"></div>


                    <div className="seat-side">

                      {rightSeats.map(
                        (col) =>
                          renderSeat(
                            row,
                            col
                          )
                      )}

                    </div>

                  </div>

                )
              )}

            </div>

          </div>


          {/* ============================================
                    LEGEND
          ============================================ */}

          <div className="seat-legend">

            <div>

              <span className="box available"></span>

              Available

            </div>


            <div>

              <span className="box booked"></span>

              Booked

            </div>


            <div>

              <span className="box selected"></span>

              Selected

            </div>

          </div>


          {/* ============================================
                    SUMMARY
          ============================================ */}

          <div className="seat-summary">

            <h3>

              Selected Seats:

              <span>

                {selectedSeats.length > 0

                  ? ` ${selectedSeats.join(
                      ", "
                    )}`

                  : " None"}

              </span>

            </h3>


            <p>

              Adult Seat Price:

              <strong>

                ₹{" "}

                {finalAdultSeatPrice.toLocaleString(
                  "en-IN"
                )}

              </strong>

            </p>


            {childCount > 0 && (

              <p>

                Child Seat Price:

                <strong>

                  ₹{" "}

                  {finalChildSeatPrice.toLocaleString(
                    "en-IN"
                  )}

                </strong>

              </p>

            )}


            {infantCount > 0 && (

              <p>

                Infant Seat Price:

                <strong>

                  ₹{" "}

                  {finalInfantSeatPrice.toLocaleString(
                    "en-IN"
                  )}

                </strong>

              </p>

            )}


            <p>

              Total Seat Price:

              <strong>

                ₹{" "}

                {totalSeatPrice.toLocaleString(
                  "en-IN"
                )}

              </strong>

            </p>


            <button
              type="button"
              className="continue-seat-btn"
              disabled={
                selectedSeats.length !==
                seatRequiredCount
              }
              onClick={
                handleContinue
              }
            >

              Continue

            </button>

          </div>

        </div>

      </section>


      <Footer />

    </>
  );

}


export default SeatSelection;