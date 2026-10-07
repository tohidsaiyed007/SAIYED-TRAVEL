// import React, { useEffect, useState } from "react";
import "./AgentWallet.css";
import React, { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

function AgentWallet() {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] =
    useState("");

  const [wallet, setWallet] = useState(null);
  const [agent, setAgent] = useState(null);

  const [transactions, setTransactions] =
    useState([]);

  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const [loadingAgents, setLoadingAgents] =
    useState(true);

  const [loadingWallet, setLoadingWallet] =
    useState(false);

  const [addingMoney, setAddingMoney] =
    useState(false);

  const [loadingTransactions, setLoadingTransactions] =
    useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // ==========================================
  // GET TOKEN
  // ==========================================

  const getToken = () => {
    return localStorage.getItem("token");
  };

  // ==========================================
  // COMMON HEADERS
  // ==========================================

  const getHeaders = () => {
    const token = getToken();

    return {
      "Content-Type": "application/json",

      ...(token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
    };
  };

  // ==========================================
  // FETCH AGENTS
  // ==========================================

  const fetchAgents = async () => {
    try {
      setLoadingAgents(true);
      setError("");

      const response = await fetch(
        `${API_BASE_URL}/api/wallet/admin/agents`,
        {
          method: "GET",
          headers: getHeaders(),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to fetch agents."
        );
      }

      setAgents(data.agents || []);
    } catch (err) {
      console.error(
        "FETCH AGENTS ERROR:",
        err
      );

      setError(
        err.message ||
          "Unable to fetch agents."
      );
    } finally {
      setLoadingAgents(false);
    }
  };

  // ==========================================
  // FETCH SELECTED AGENT WALLET
  // ==========================================

  const fetchWallet = async (
    agentId
  ) => {
    if (!agentId) {
      setAgent(null);
      setWallet(null);
      setTransactions([]);
      return;
    }

    try {
      setLoadingWallet(true);
      setLoadingTransactions(true);

      setError("");
      setMessage("");

      const walletResponse =
        await fetch(
          `${API_BASE_URL}/api/wallet/admin/agent/${agentId}`,
          {
            method: "GET",
            headers: getHeaders(),
          }
        );

      const walletData =
        await walletResponse.json();

      if (!walletResponse.ok) {
        throw new Error(
          walletData.message ||
            "Unable to fetch wallet."
        );
      }

      setAgent(
        walletData.agent || null
      );

      setWallet(
        walletData.wallet || null
      );

      // ======================================
      // TRANSACTIONS
      // ======================================

      const transactionResponse =
        await fetch(
          `${API_BASE_URL}/api/wallet/admin/transactions/${agentId}`,
          {
            method: "GET",
            headers: getHeaders(),
          }
        );

      const transactionData =
        await transactionResponse.json();

      if (!transactionResponse.ok) {
        throw new Error(
          transactionData.message ||
            "Unable to fetch transactions."
        );
      }

      setTransactions(
        transactionData.transactions || []
      );
    } catch (err) {
      console.error(
        "FETCH WALLET ERROR:",
        err
      );

      setError(
        err.message ||
          "Unable to load wallet."
      );

      setAgent(null);
      setWallet(null);
      setTransactions([]);
    } finally {
      setLoadingWallet(false);
      setLoadingTransactions(false);
    }
  };

  // ==========================================
  // LOAD AGENTS
  // ==========================================

  useEffect(() => {
    fetchAgents();
  }, []);

  // ==========================================
  // AGENT SELECT
  // ==========================================

  const handleAgentChange = (e) => {
    const agentId = e.target.value;

    setSelectedAgent(agentId);

    setAmount("");
    setNote("");
    setMessage("");
    setError("");

    fetchWallet(agentId);
  };

  // ==========================================
  // ADD MONEY
  // ==========================================

  const handleAddMoney = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!selectedAgent) {
      setError(
        "Please select an agent."
      );
      return;
    }

    const numericAmount =
      Number(amount);

    if (
      !Number.isFinite(
        numericAmount
      ) ||
      numericAmount <= 0
    ) {
      setError(
        "Please enter a valid amount."
      );
      return;
    }

    try {
      setAddingMoney(true);

      const response =
        await fetch(
          `${API_BASE_URL}/api/wallet/admin/add-money`,
          {
            method: "POST",

            headers: getHeaders(),

            body: JSON.stringify({
              agentId:
                selectedAgent,

              amount:
                numericAmount,

              note:
                note.trim(),
            }),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to add money."
        );
      }

      // ======================================
      // UPDATE WALLET
      // ======================================

      setWallet(
        data.wallet || null
      );

      // ======================================
      // SUCCESS MESSAGE
      // ======================================

      setMessage(
        data.message ||
          "Money added successfully."
      );

      setAmount("");
      setNote("");

      // ======================================
      // REFRESH TRANSACTIONS
      // ======================================

      const transactionResponse =
        await fetch(
          `${API_BASE_URL}/api/wallet/admin/transactions/${selectedAgent}`,
          {
            method: "GET",
            headers: getHeaders(),
          }
        );

      const transactionData =
        await transactionResponse.json();

      if (
        transactionResponse.ok
      ) {
        setTransactions(
          transactionData.transactions ||
            []
        );
      }
    } catch (err) {
      console.error(
        "ADD MONEY ERROR:",
        err
      );

      setError(
        err.message ||
          "Unable to add money."
      );
    } finally {
      setAddingMoney(false);
    }
  };

  // ==========================================
  // FORMAT MONEY
  // ==========================================

  const formatMoney = (value) => {
    return `₹${Number(
      value || 0
    ).toLocaleString("en-IN")}`;
  };

  // ==========================================
  // FORMAT DATE
  // ==========================================

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(
      date
    ).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="agent-wallet-page">

      {/* ======================================
                    HEADER
      ====================================== */}

      <div className="agent-wallet-header">
        <div>
          <h1>Agent Wallet</h1>

          <p>
            Manage agent wallet balance
            and transactions
          </p>
        </div>
      </div>

      {/* ======================================
                    ERROR
      ====================================== */}

      {error && (
        <div className="wallet-alert wallet-error">
          {error}
        </div>
      )}

      {/* ======================================
                    SUCCESS
      ====================================== */}

      {message && (
        <div className="wallet-alert wallet-success">
          {message}
        </div>
      )}

      {/* ======================================
                    AGENT SELECT
      ====================================== */}

      <div className="wallet-card agent-selector-card">

        <div className="wallet-card-title">
          <h2>Select Agent</h2>

          <span>
            {agents.length} Agents
          </span>
        </div>

        <select
          value={selectedAgent}
          onChange={
            handleAgentChange
          }
          disabled={loadingAgents}
        >
          <option value="">
            {loadingAgents
              ? "Loading agents..."
              : "Select an agent"}
          </option>

          {agents.map((item) => (
            <option
              key={item._id}
              value={item._id}
            >
              {item.agencyName
                ? `${item.agencyName} - `
                : ""}
              {item.firstName || ""}
              {item.lastName
                ? ` ${item.lastName}`
                : ""}
              {" - "}
              {item.email}
            </option>
          ))}
        </select>
      </div>

      {/* ======================================
                    WALLET DETAILS
      ====================================== */}

      {selectedAgent && (
        <>
          {loadingWallet ? (
            <div className="wallet-loading">
              Loading wallet...
            </div>
          ) : (
            <>
              {/* ==================================
                            AGENT INFO
              ================================== */}

              {agent && (
                <div className="agent-info-card">

                  <div>
                    <span>
                      Agency
                    </span>

                    <strong>
                      {agent.agencyName ||
                        "N/A"}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Agent
                    </span>

                    <strong>
                      {agent.firstName}{" "}
                      {agent.lastName || ""}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Email
                    </span>

                    <strong>
                      {agent.email}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Phone
                    </span>

                    <strong>
                      {agent.phone ||
                        "N/A"}
                    </strong>
                  </div>

                </div>
              )}

              {/* ==================================
                        WALLET SUMMARY
              ================================== */}

              <div className="wallet-summary-grid">

                <div className="wallet-stat-card balance-card">
                  <span>
                    Available Balance
                  </span>

                  <strong>
                    {formatMoney(
                      wallet?.balance
                    )}
                  </strong>
                </div>

                <div className="wallet-stat-card">
                  <span>
                    Total Credit
                  </span>

                  <strong>
                    {formatMoney(
                      wallet?.totalCredit
                    )}
                  </strong>
                </div>

                <div className="wallet-stat-card">
                  <span>
                    Total Debit
                  </span>

                  <strong>
                    {formatMoney(
                      wallet?.totalDebit
                    )}
                  </strong>
                </div>

              </div>

              {/* ==================================
                            ADD MONEY
              ================================== */}

              <div className="wallet-content-grid">

                <div className="wallet-card add-money-card">

                  <div className="wallet-card-title">
                    <div>
                      <h2>
                        Add Money
                      </h2>

                      <p>
                        Add credit to this
                        agent wallet
                      </p>
                    </div>
                  </div>

                  <form
                    onSubmit={
                      handleAddMoney
                    }
                  >

                    <label>
                      Amount
                    </label>

                    <div className="amount-input-wrapper">
                      <span>₹</span>

                      <input
                        type="number"
                        min="1"
                        step="1"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) =>
                          setAmount(
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <label>
                      Note
                    </label>

                    <textarea
                      placeholder="Example: Payment received from agent"
                      value={note}
                      onChange={(e) =>
                        setNote(
                          e.target.value
                        )
                      }
                      rows="4"
                    />

                    <button
                      type="submit"
                      disabled={
                        addingMoney
                      }
                    >
                      {addingMoney
                        ? "Adding..."
                        : "Add Money"}
                    </button>

                  </form>
                </div>

                {/* ==================================
                            QUICK AMOUNTS
                ================================== */}

                <div className="wallet-card quick-money-card">

                  <div className="wallet-card-title">
                    <div>
                      <h2>
                        Quick Add
                      </h2>

                      <p>
                        Select amount
                      </p>
                    </div>
                  </div>

                  <div className="quick-amounts">

                    {[5000, 10000, 25000, 50000, 100000, 200000].map(
                      (quickAmount) => (
                        <button
                          type="button"
                          key={quickAmount}
                          onClick={() =>
                            setAmount(
                              String(
                                quickAmount
                              )
                            )
                          }
                        >
                          {formatMoney(
                            quickAmount
                          )}
                        </button>
                      )
                    )}

                  </div>

                </div>

              </div>

              {/* ==================================
                        TRANSACTIONS
              ================================== */}

              <div className="wallet-card transactions-card">

                <div className="wallet-card-title">
                  <div>
                    <h2>
                      Transaction History
                    </h2>

                    <p>
                      Wallet credit and
                      debit history
                    </p>
                  </div>

                  <span>
                    {transactions.length}{" "}
                    Transactions
                  </span>
                </div>

                {loadingTransactions ? (
                  <div className="wallet-loading">
                    Loading transactions...
                  </div>
                ) : transactions.length ===
                  0 ? (
                  <div className="empty-wallet">
                    No transactions found.
                  </div>
                ) : (
                  <div className="transactions-table-wrapper">

                    <table className="transactions-table">

                      <thead>
                        <tr>
                          <th>
                            Date
                          </th>

                          <th>
                            Type
                          </th>

                          <th>
                            Amount
                          </th>

                          <th>
                            Balance Before
                          </th>

                          <th>
                            Balance After
                          </th>

                          <th>
                            Booking / PNR
                          </th>

                          <th>
                            Note
                          </th>
                        </tr>
                      </thead>

                      <tbody>

                        {transactions.map(
                          (transaction) => (
                            <tr
                              key={
                                transaction._id
                              }
                            >
                              <td>
                                {formatDate(
                                  transaction.createdAt
                                )}
                              </td>

                              <td>
                                <span
                                  className={`transaction-type ${
                                    transaction.type
                                  }`}
                                >
                                  {transaction.type ===
                                  "credit"
                                    ? "Credit"
                                    : transaction.type ===
                                      "debit"
                                    ? "Debit"
                                    : "Refund"}
                                </span>
                              </td>

                              <td
                                className={`transaction-amount ${
                                  transaction.type
                                }`}
                              >
                                {transaction.type ===
                                "debit"
                                  ? "-"
                                  : "+"}

                                {formatMoney(
                                  transaction.amount
                                )}
                              </td>

                              <td>
                                {formatMoney(
                                  transaction.balanceBefore
                                )}
                              </td>

                              <td>
                                {formatMoney(
                                  transaction.balanceAfter
                                )}
                              </td>

                              <td>
                                {transaction.pnr ? (
                                  <div className="booking-reference">
                                    <strong>
                                      PNR:{" "}
                                      {
                                        transaction.pnr
                                      }
                                    </strong>

                                    {transaction.bookingNumber && (
                                      <small>
                                        {
                                          transaction.bookingNumber
                                        }
                                      </small>
                                    )}
                                  </div>
                                ) : (
                                  "-"
                                )}
                              </td>

                              <td>
                                {transaction.note ||
                                  "-"}
                              </td>
                            </tr>
                          )
                        )}

                      </tbody>

                    </table>

                  </div>
                )}

              </div>
            </>
          )}
        </>
      )}

      {/* ======================================
                    NO AGENT SELECTED
      ====================================== */}

      {!selectedAgent &&
        !loadingAgents && (
          <div className="wallet-empty-state">

            <FaWallet />

            <h2>
              Select an Agent
            </h2>

            <p>
              Select an agent above to
              view wallet balance and
              add money.
            </p>

          </div>
        )}

    </div>
  );
}

export default AgentWallet;