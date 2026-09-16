import "./PaymentRequests.css";

import { useEffect, useState } from "react";

import {
  FaEye,
  FaCheck,
  FaTimes,
  FaSyncAlt,
  FaMoneyBillWave,
  FaClock,
} from "react-icons/fa";

const API_URL = "https://saiyed-travels-backend-1.onrender.com";

function PaymentRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [adminNote, setAdminNote] = useState("");
  const [error, setError] = useState("");

  // ==========================================
  // GET PAYMENT REQUESTS
  // ==========================================

  const fetchPaymentRequests = async () => {
    try {
      setError("");

      const response = await fetch(
        `${API_URL}/api/payment-requests`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to load payment requests."
        );
      }

      setRequests(
        Array.isArray(data?.requests)
          ? data.requests
          : []
      );
    } catch (error) {
      console.error(
        "PAYMENT REQUESTS ERROR:",
        error
      );

      setError(
        error.message ||
          "Unable to load payment requests."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // INITIAL LOAD + AUTO REFRESH
  // ==========================================

  useEffect(() => {
    fetchPaymentRequests();

    const interval = setInterval(() => {
      fetchPaymentRequests();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // ==========================================
  // FORMAT DATE
  // ==========================================

  const formatDateTime = (date) => {
    if (!date) return "N/A";

    try {
      return new Date(date).toLocaleString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }
      );
    } catch {
      return date;
    }
  };

  // ==========================================
  // GET PASSENGER
  // ==========================================

  const getPassenger = (request) => {
    const bookingData =
      request?.bookingData || {};

    if (
      Array.isArray(
        bookingData?.passengers
      ) &&
      bookingData.passengers.length > 0
    ) {
      return bookingData.passengers[0];
    }

    return (
      bookingData?.passenger || {}
    );
  };

  // ==========================================
  // PASSENGER NAME
  // ==========================================

  const getPassengerName = (request) => {
    const passenger =
      getPassenger(request);

    const name =
      `${passenger?.firstName || ""} ${
        passenger?.lastName || ""
      }`.trim();

    return (
      name ||
      request?.bookingData?.name ||
      "Customer"
    );
  };

  // ==========================================
  // FLIGHT
  // ==========================================

  const getFlight = (request) => {
    const bookingData =
      request?.bookingData || {};

    const flight =
      bookingData?.flight || {};

    return flight;
  };

  // ==========================================
  // ACCEPT
  // ==========================================

  const handleAccept = async (request) => {
    const confirmed = window.confirm(
      "Are you sure you want to ACCEPT this payment and confirm the booking?"
    );

    if (!confirmed) return;

    try {
      setProcessingId(request._id);
      setError("");

      const response = await fetch(
        `${API_URL}/api/payment-requests/${request._id}/accept`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            adminNote:
              adminNote.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to accept payment."
        );
      }

      alert(
        "Payment accepted and booking confirmed successfully."
      );

      setSelectedRequest(null);
      setAdminNote("");

      await fetchPaymentRequests();
    } catch (error) {
      console.error(
        "ACCEPT PAYMENT ERROR:",
        error
      );

      alert(
        error.message ||
          "Unable to accept payment."
      );
    } finally {
      setProcessingId(null);
    }
  };

  // ==========================================
  // REJECT
  // ==========================================

  const handleReject = async (request) => {
    const confirmed = window.confirm(
      "Are you sure you want to REJECT this payment?"
    );

    if (!confirmed) return;

    try {
      setProcessingId(request._id);
      setError("");

      const response = await fetch(
        `${API_URL}/api/payment-requests/${request._id}/reject`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            adminNote:
              adminNote.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to reject payment."
        );
      }

      alert(
        "Payment request rejected successfully."
      );

      setSelectedRequest(null);
      setAdminNote("");

      await fetchPaymentRequests();
    } catch (error) {
      console.error(
        "REJECT PAYMENT ERROR:",
        error
      );

      alert(
        error.message ||
          "Unable to reject payment."
      );
    } finally {
      setProcessingId(null);
    }
  };

  // ==========================================
  // COUNTS
  // ==========================================

  const pendingCount =
    requests.filter(
      (item) =>
        item.status === "Pending"
    ).length;

  const acceptedCount =
    requests.filter(
      (item) =>
        item.status === "Accepted"
    ).length;

  const rejectedCount =
    requests.filter(
      (item) =>
        item.status === "Rejected"
    ).length;

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="payment-requests-page">
        <div className="payment-loading">
          <div className="payment-spinner"></div>

          <p>
            Loading payment requests...
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // MAIN
  // ==========================================

  return (
    <div className="payment-requests-page">

      {/* ======================================
                    HEADER
      ====================================== */}

      <div className="payment-page-header">

        <div>
          <h1>
            Payment Requests
          </h1>

          <p>
            Verify customer payments and
            confirm bookings.
          </p>
        </div>

        <button
          type="button"
          className="refresh-payment-btn"
          onClick={fetchPaymentRequests}
        >
          <FaSyncAlt />

          Refresh
        </button>

      </div>


      {/* ======================================
                    SUMMARY CARDS
      ====================================== */}

      <div className="payment-summary">

        <div className="payment-summary-card pending-card">
          <div className="summary-icon">
            <FaClock />
          </div>

          <div>
            <span>
              Pending
            </span>

            <strong>
              {pendingCount}
            </strong>
          </div>
        </div>


        <div className="payment-summary-card accepted-card">
          <div className="summary-icon">
            <FaCheck />
          </div>

          <div>
            <span>
              Accepted
            </span>

            <strong>
              {acceptedCount}
            </strong>
          </div>
        </div>


        <div className="payment-summary-card rejected-card">
          <div className="summary-icon">
            <FaTimes />
          </div>

          <div>
            <span>
              Rejected
            </span>

            <strong>
              {rejectedCount}
            </strong>
          </div>
        </div>


        <div className="payment-summary-card total-card">
          <div className="summary-icon">
            <FaMoneyBillWave />
          </div>

          <div>
            <span>
              Total Requests
            </span>

            <strong>
              {requests.length}
            </strong>
          </div>
        </div>

      </div>


      {/* ======================================
                    ERROR
      ====================================== */}

      {error && (
        <div className="payment-error">
          {error}
        </div>
      )}


      {/* ======================================
                    EMPTY
      ====================================== */}

      {requests.length === 0 ? (
        <div className="payment-empty">

          <FaMoneyBillWave />

          <h2>
            No Payment Requests
          </h2>

          <p>
            New customer payment requests
            will appear here.
          </p>

        </div>
      ) : (

        /* ======================================
                    TABLE
        ====================================== */

        <div className="payment-table-wrapper">

          <table className="payment-table">

            <thead>
              <tr>
                <th>Customer</th>
                <th>Flight</th>
                <th>Amount</th>
                <th>Bank</th>
                <th>UTR / Payment ID</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>


            <tbody>

              {requests.map(
                (request) => {

                  const flight =
                    getFlight(request);

                  return (
                    <tr
                      key={
                        request._id
                      }
                    >

                      {/* CUSTOMER */}

                      <td>
                        <div className="customer-cell">

                          <strong>
                            {getPassengerName(
                              request
                            )}
                          </strong>

                          <small>
                            {
                              request.customerEmail
                            }
                          </small>

                        </div>
                      </td>


                      {/* FLIGHT */}

                      <td>
                        <div className="flight-cell">

                          <strong>
                            {flight?.flightNo ||
                              request
                                ?.bookingData
                                ?.flightNo ||
                              "N/A"}
                          </strong>

                          <span>
                            {flight?.fromCity ||
                              flight?.from ||
                              request
                                ?.bookingData
                                ?.from ||
                              "From"}

                            {" → "}

                            {flight?.toCity ||
                              flight?.to ||
                              request
                                ?.bookingData
                                ?.to ||
                              "To"}
                          </span>

                        </div>
                      </td>


                      {/* AMOUNT */}

                      <td>
                        <strong className="amount">
                          ₹{" "}
                          {Number(
                            request.amount ||
                              0
                          ).toLocaleString(
                            "en-IN"
                          )}
                        </strong>
                      </td>


                      {/* BANK */}

                      <td>
                        <span className="bank-name">
                          {request.bankName}
                        </span>
                      </td>


                      {/* UTR */}

                      <td>
                        <span className="payment-id">
                          {request.paymentId}
                        </span>
                      </td>


                      {/* DATE */}

                      <td>
                        <span className="payment-date">
                          {formatDateTime(
                            request.paymentDateTime
                          )}
                        </span>
                      </td>


                      {/* STATUS */}

                      <td>
                        <span
                          className={`payment-status ${String(
                            request.status
                          ).toLowerCase()}`}
                        >
                          {request.status}
                        </span>
                      </td>


                      {/* ACTION */}

                      <td>

                        <button
                          type="button"
                          className="view-payment-btn"
                          onClick={() => {
                            setSelectedRequest(
                              request
                            );

                            setAdminNote(
                              request.adminNote ||
                                ""
                            );
                          }}
                        >
                          <FaEye />

                          View
                        </button>

                      </td>

                    </tr>
                  );
                }
              )}

            </tbody>

          </table>

        </div>
      )}


      {/* ======================================
                    DETAIL MODAL
      ====================================== */}

      {selectedRequest && (

        <div
          className="payment-modal-overlay"
          onClick={() =>
            setSelectedRequest(null)
          }
        >

          <div
            className="payment-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* MODAL HEADER */}

            <div className="payment-modal-header">

              <div>
                <h2>
                  Payment Details
                </h2>

                <p>
                  Verify the payment
                  manually before accepting.
                </p>
              </div>

              <button
                type="button"
                className="modal-close-btn"
                onClick={() =>
                  setSelectedRequest(
                    null
                  )
                }
              >
                <FaTimes />
              </button>

            </div>


            {/* PAYMENT INFO */}

            <div className="payment-detail-grid">

              <div className="detail-box">
                <span>
                  Customer
                </span>

                <strong>
                  {getPassengerName(
                    selectedRequest
                  )}
                </strong>
              </div>


              <div className="detail-box">
                <span>
                  Email
                </span>

                <strong>
                  {
                    selectedRequest.customerEmail
                  }
                </strong>
              </div>


              <div className="detail-box">
                <span>
                  Phone
                </span>

                <strong>
                  {getPassenger(
                    selectedRequest
                  )?.phone ||
                    selectedRequest
                      ?.bookingData
                      ?.phone ||
                    "N/A"}
                </strong>
              </div>


              <div className="detail-box">
                <span>
                  Amount
                </span>

                <strong className="detail-amount">
                  ₹{" "}
                  {Number(
                    selectedRequest.amount ||
                      0
                  ).toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>


              <div className="detail-box">
                <span>
                  Bank
                </span>

                <strong>
                  {
                    selectedRequest.bankName
                  }
                </strong>
              </div>


              <div className="detail-box">
                <span>
                  UTR / Payment ID
                </span>

                <strong>
                  {
                    selectedRequest.paymentId
                  }
                </strong>
              </div>


              <div className="detail-box">
                <span>
                  Payment Date & Time
                </span>

                <strong>
                  {formatDateTime(
                    selectedRequest.paymentDateTime
                  )}
                </strong>
              </div>


              <div className="detail-box">
                <span>
                  Status
                </span>

                <strong>
                  {
                    selectedRequest.status
                  }
                </strong>
              </div>

            </div>


            {/* FLIGHT DETAILS */}

            <div className="payment-section">

              <h3>
                Flight Details
              </h3>

              <div className="flight-detail-box">

                <div>
                  <span>
                    Flight
                  </span>

                  <strong>
                    {
                      getFlight(
                        selectedRequest
                      )?.flightNo ||
                      selectedRequest
                        ?.bookingData
                        ?.flightNo ||
                      "N/A"
                    }
                  </strong>
                </div>


                <div>
                  <span>
                    Route
                  </span>

                  <strong>
                    {
                      getFlight(
                        selectedRequest
                      )?.fromCity ||
                      getFlight(
                        selectedRequest
                      )?.from ||
                      selectedRequest
                        ?.bookingData
                        ?.from ||
                      "From"
                    }

                    {" → "}

                    {
                      getFlight(
                        selectedRequest
                      )?.toCity ||
                      getFlight(
                        selectedRequest
                      )?.to ||
                      selectedRequest
                        ?.bookingData
                        ?.to ||
                      "To"
                    }
                  </strong>
                </div>


                <div>
                  <span>
                    Departure
                  </span>

                  <strong>
                    {
                      getFlight(
                        selectedRequest
                      )?.departureDate ||
                      selectedRequest
                        ?.bookingData
                        ?.departureDate ||
                      "N/A"
                    }
                  </strong>
                </div>

              </div>

            </div>


            {/* SCREENSHOT */}

            <div className="payment-section">

              <h3>
                Payment Screenshot
              </h3>

              <div className="screenshot-wrapper">

                {selectedRequest.screenshot ? (
                  <img
                    src={`${API_URL}${selectedRequest.screenshot}`}
                    alt="Payment Screenshot"
                    className="payment-screenshot"
                  />
                ) : (
                  <p>
                    Screenshot not available.
                  </p>
                )}

              </div>

            </div>


            {/* ADMIN NOTE */}

            <div className="payment-section">

              <h3>
                Admin Note
              </h3>

              <textarea
                className="admin-note-input"
                placeholder="Optional note..."
                value={adminNote}
                onChange={(e) =>
                  setAdminNote(
                    e.target.value
                  )
                }
                disabled={
                  selectedRequest.status !==
                  "Pending"
                }
              />

            </div>


            {/* ACTIONS */}

            {selectedRequest.status ===
              "Pending" && (

              <div className="payment-modal-actions">

                <button
                  type="button"
                  className="reject-payment-btn"
                  disabled={
                    processingId ===
                    selectedRequest._id
                  }
                  onClick={() =>
                    handleReject(
                      selectedRequest
                    )
                  }
                >
                  <FaTimes />

                  {processingId ===
                  selectedRequest._id
                    ? "Processing..."
                    : "Reject Payment"}
                </button>


                <button
                  type="button"
                  className="accept-payment-btn"
                  disabled={
                    processingId ===
                    selectedRequest._id
                  }
                  onClick={() =>
                    handleAccept(
                      selectedRequest
                    )
                  }
                >
                  <FaCheck />

                  {processingId ===
                  selectedRequest._id
                    ? "Processing..."
                    : "Accept & Confirm Booking"}
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default PaymentRequests;