// // // // import React, { useEffect, useState } from "react";
// // // import "./AgentWallet.css";
// // // import React, { useEffect, useState } from "react";
// // // import { FaWallet } from "react-icons/fa";

// // // const API_BASE_URL =
// // //   import.meta.env.VITE_API_URL ||
// // //   "http://localhost:5000";

// // // function AgentWallet() {
// // //   const [agents, setAgents] = useState([]);
// // //   const [selectedAgent, setSelectedAgent] =
// // //     useState("");

// // //   const [wallet, setWallet] = useState(null);
// // //   const [agent, setAgent] = useState(null);

// // //   const [transactions, setTransactions] =
// // //     useState([]);

// // //   const [amount, setAmount] = useState("");
// // //   const [note, setNote] = useState("");

// // //   const [loadingAgents, setLoadingAgents] =
// // //     useState(true);

// // //   const [loadingWallet, setLoadingWallet] =
// // //     useState(false);

// // //   const [addingMoney, setAddingMoney] =
// // //     useState(false);

// // //   const [loadingTransactions, setLoadingTransactions] =
// // //     useState(false);

// // //   const [message, setMessage] = useState("");
// // //   const [error, setError] = useState("");

// // //   // ==========================================
// // //   // GET TOKEN
// // //   // ==========================================

// // //   const getToken = () => {
// // //     return localStorage.getItem("token");
// // //   };

// // //   // ==========================================
// // //   // COMMON HEADERS
// // //   // ==========================================

// // //   const getHeaders = () => {
// // //     const token = getToken();

// // //     return {
// // //       "Content-Type": "application/json",

// // //       ...(token
// // //         ? {
// // //             Authorization: `Bearer ${token}`,
// // //           }
// // //         : {}),
// // //     };
// // //   };

// // //   // ==========================================
// // //   // FETCH AGENTS
// // //   // ==========================================

// // //   const fetchAgents = async () => {
// // //     try {
// // //       setLoadingAgents(true);
// // //       setError("");

// // //       const response = await fetch(
// // //         `${API_BASE_URL}/api/wallet/admin/agents`,
// // //         {
// // //           method: "GET",
// // //           headers: getHeaders(),
// // //         }
// // //       );

// // //       const data = await response.json();

// // //       if (!response.ok) {
// // //         throw new Error(
// // //           data.message ||
// // //             "Unable to fetch agents."
// // //         );
// // //       }

// // //       setAgents(data.agents || []);
// // //     } catch (err) {
// // //       console.error(
// // //         "FETCH AGENTS ERROR:",
// // //         err
// // //       );

// // //       setError(
// // //         err.message ||
// // //           "Unable to fetch agents."
// // //       );
// // //     } finally {
// // //       setLoadingAgents(false);
// // //     }
// // //   };

// // //   // ==========================================
// // //   // FETCH SELECTED AGENT WALLET
// // //   // ==========================================

// // //   const fetchWallet = async (
// // //     agentId
// // //   ) => {
// // //     if (!agentId) {
// // //       setAgent(null);
// // //       setWallet(null);
// // //       setTransactions([]);
// // //       return;
// // //     }

// // //     try {
// // //       setLoadingWallet(true);
// // //       setLoadingTransactions(true);

// // //       setError("");
// // //       setMessage("");

// // //       const walletResponse =
// // //         await fetch(
// // //           `${API_BASE_URL}/api/wallet/admin/agent/${agentId}`,
// // //           {
// // //             method: "GET",
// // //             headers: getHeaders(),
// // //           }
// // //         );

// // //       const walletData =
// // //         await walletResponse.json();

// // //       if (!walletResponse.ok) {
// // //         throw new Error(
// // //           walletData.message ||
// // //             "Unable to fetch wallet."
// // //         );
// // //       }

// // //       setAgent(
// // //         walletData.agent || null
// // //       );

// // //       setWallet(
// // //         walletData.wallet || null
// // //       );

// // //       // ======================================
// // //       // TRANSACTIONS
// // //       // ======================================

// // //       const transactionResponse =
// // //         await fetch(
// // //           `${API_BASE_URL}/api/wallet/admin/transactions/${agentId}`,
// // //           {
// // //             method: "GET",
// // //             headers: getHeaders(),
// // //           }
// // //         );

// // //       const transactionData =
// // //         await transactionResponse.json();

// // //       if (!transactionResponse.ok) {
// // //         throw new Error(
// // //           transactionData.message ||
// // //             "Unable to fetch transactions."
// // //         );
// // //       }

// // //       setTransactions(
// // //         transactionData.transactions || []
// // //       );
// // //     } catch (err) {
// // //       console.error(
// // //         "FETCH WALLET ERROR:",
// // //         err
// // //       );

// // //       setError(
// // //         err.message ||
// // //           "Unable to load wallet."
// // //       );

// // //       setAgent(null);
// // //       setWallet(null);
// // //       setTransactions([]);
// // //     } finally {
// // //       setLoadingWallet(false);
// // //       setLoadingTransactions(false);
// // //     }
// // //   };

// // //   // ==========================================
// // //   // LOAD AGENTS
// // //   // ==========================================

// // //   useEffect(() => {
// // //     fetchAgents();
// // //   }, []);

// // //   // ==========================================
// // //   // AGENT SELECT
// // //   // ==========================================

// // //   const handleAgentChange = (e) => {
// // //     const agentId = e.target.value;

// // //     setSelectedAgent(agentId);

// // //     setAmount("");
// // //     setNote("");
// // //     setMessage("");
// // //     setError("");

// // //     fetchWallet(agentId);
// // //   };

// // //   // ==========================================
// // //   // ADD MONEY
// // //   // ==========================================

// // //   const handleAddMoney = async (e) => {
// // //     e.preventDefault();

// // //     setMessage("");
// // //     setError("");

// // //     if (!selectedAgent) {
// // //       setError(
// // //         "Please select an agent."
// // //       );
// // //       return;
// // //     }

// // //     const numericAmount =
// // //       Number(amount);

// // //     if (
// // //       !Number.isFinite(
// // //         numericAmount
// // //       ) ||
// // //       numericAmount <= 0
// // //     ) {
// // //       setError(
// // //         "Please enter a valid amount."
// // //       );
// // //       return;
// // //     }

// // //     try {
// // //       setAddingMoney(true);

// // //       const response =
// // //         await fetch(
// // //           `${API_BASE_URL}/api/wallet/admin/add-money`,
// // //           {
// // //             method: "POST",

// // //             headers: getHeaders(),

// // //             body: JSON.stringify({
// // //               agentId:
// // //                 selectedAgent,

// // //               amount:
// // //                 numericAmount,

// // //               note:
// // //                 note.trim(),
// // //             }),
// // //           }
// // //         );

// // //       const data =
// // //         await response.json();

// // //       if (!response.ok) {
// // //         throw new Error(
// // //           data.message ||
// // //             "Unable to add money."
// // //         );
// // //       }

// // //       // ======================================
// // //       // UPDATE WALLET
// // //       // ======================================

// // //       setWallet(
// // //         data.wallet || null
// // //       );

// // //       // ======================================
// // //       // SUCCESS MESSAGE
// // //       // ======================================

// // //       setMessage(
// // //         data.message ||
// // //           "Money added successfully."
// // //       );

// // //       setAmount("");
// // //       setNote("");

// // //       // ======================================
// // //       // REFRESH TRANSACTIONS
// // //       // ======================================

// // //       const transactionResponse =
// // //         await fetch(
// // //           `${API_BASE_URL}/api/wallet/admin/transactions/${selectedAgent}`,
// // //           {
// // //             method: "GET",
// // //             headers: getHeaders(),
// // //           }
// // //         );

// // //       const transactionData =
// // //         await transactionResponse.json();

// // //       if (
// // //         transactionResponse.ok
// // //       ) {
// // //         setTransactions(
// // //           transactionData.transactions ||
// // //             []
// // //         );
// // //       }
// // //     } catch (err) {
// // //       console.error(
// // //         "ADD MONEY ERROR:",
// // //         err
// // //       );

// // //       setError(
// // //         err.message ||
// // //           "Unable to add money."
// // //       );
// // //     } finally {
// // //       setAddingMoney(false);
// // //     }
// // //   };

// // //   // ==========================================
// // //   // FORMAT MONEY
// // //   // ==========================================

// // //   const formatMoney = (value) => {
// // //     return `₹${Number(
// // //       value || 0
// // //     ).toLocaleString("en-IN")}`;
// // //   };

// // //   // ==========================================
// // //   // FORMAT DATE
// // //   // ==========================================

// // //   const formatDate = (date) => {
// // //     if (!date) return "-";

// // //     return new Date(
// // //       date
// // //     ).toLocaleString("en-IN", {
// // //       day: "2-digit",
// // //       month: "short",
// // //       year: "numeric",
// // //       hour: "2-digit",
// // //       minute: "2-digit",
// // //     });
// // //   };

// // //   // ==========================================
// // //   // UI
// // //   // ==========================================

// // //   return (
// // //     <div className="agent-wallet-page">

// // //       {/* ======================================
// // //                     HEADER
// // //       ====================================== */}

// // //       <div className="agent-wallet-header">
// // //         <div>
// // //           <h1>Agent Wallet</h1>

// // //           <p>
// // //             Manage agent wallet balance
// // //             and transactions
// // //           </p>
// // //         </div>
// // //       </div>

// // //       {/* ======================================
// // //                     ERROR
// // //       ====================================== */}

// // //       {error && (
// // //         <div className="wallet-alert wallet-error">
// // //           {error}
// // //         </div>
// // //       )}

// // //       {/* ======================================
// // //                     SUCCESS
// // //       ====================================== */}

// // //       {message && (
// // //         <div className="wallet-alert wallet-success">
// // //           {message}
// // //         </div>
// // //       )}

// // //       {/* ======================================
// // //                     AGENT SELECT
// // //       ====================================== */}

// // //       <div className="wallet-card agent-selector-card">

// // //         <div className="wallet-card-title">
// // //           <h2>Select Agent</h2>

// // //           <span>
// // //             {agents.length} Agents
// // //           </span>
// // //         </div>

// // //         <select
// // //           value={selectedAgent}
// // //           onChange={
// // //             handleAgentChange
// // //           }
// // //           disabled={loadingAgents}
// // //         >
// // //           <option value="">
// // //             {loadingAgents
// // //               ? "Loading agents..."
// // //               : "Select an agent"}
// // //           </option>

// // //           {agents.map((item) => (
// // //             <option
// // //               key={item._id}
// // //               value={item._id}
// // //             >
// // //               {item.agencyName
// // //                 ? `${item.agencyName} - `
// // //                 : ""}
// // //               {item.firstName || ""}
// // //               {item.lastName
// // //                 ? ` ${item.lastName}`
// // //                 : ""}
// // //               {" - "}
// // //               {item.email}
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </div>

// // //       {/* ======================================
// // //                     WALLET DETAILS
// // //       ====================================== */}

// // //       {selectedAgent && (
// // //         <>
// // //           {loadingWallet ? (
// // //             <div className="wallet-loading">
// // //               Loading wallet...
// // //             </div>
// // //           ) : (
// // //             <>
// // //               {/* ==================================
// // //                             AGENT INFO
// // //               ================================== */}

// // //               {agent && (
// // //                 <div className="agent-info-card">

// // //                   <div>
// // //                     <span>
// // //                       Agency
// // //                     </span>

// // //                     <strong>
// // //                       {agent.agencyName ||
// // //                         "N/A"}
// // //                     </strong>
// // //                   </div>

// // //                   <div>
// // //                     <span>
// // //                       Agent
// // //                     </span>

// // //                     <strong>
// // //                       {agent.firstName}{" "}
// // //                       {agent.lastName || ""}
// // //                     </strong>
// // //                   </div>

// // //                   <div>
// // //                     <span>
// // //                       Email
// // //                     </span>

// // //                     <strong>
// // //                       {agent.email}
// // //                     </strong>
// // //                   </div>

// // //                   <div>
// // //                     <span>
// // //                       Phone
// // //                     </span>

// // //                     <strong>
// // //                       {agent.phone ||
// // //                         "N/A"}
// // //                     </strong>
// // //                   </div>

// // //                 </div>
// // //               )}

// // //               {/* ==================================
// // //                         WALLET SUMMARY
// // //               ================================== */}

// // //               <div className="wallet-summary-grid">

// // //                 <div className="wallet-stat-card balance-card">
// // //                   <span>
// // //                     Available Balance
// // //                   </span>

// // //                   <strong>
// // //                     {formatMoney(
// // //                       wallet?.balance
// // //                     )}
// // //                   </strong>
// // //                 </div>

// // //                 <div className="wallet-stat-card">
// // //                   <span>
// // //                     Total Credit
// // //                   </span>

// // //                   <strong>
// // //                     {formatMoney(
// // //                       wallet?.totalCredit
// // //                     )}
// // //                   </strong>
// // //                 </div>

// // //                 <div className="wallet-stat-card">
// // //                   <span>
// // //                     Total Debit
// // //                   </span>

// // //                   <strong>
// // //                     {formatMoney(
// // //                       wallet?.totalDebit
// // //                     )}
// // //                   </strong>
// // //                 </div>

// // //               </div>

// // //               {/* ==================================
// // //                             ADD MONEY
// // //               ================================== */}

// // //               <div className="wallet-content-grid">

// // //                 <div className="wallet-card add-money-card">

// // //                   <div className="wallet-card-title">
// // //                     <div>
// // //                       <h2>
// // //                         Add Money
// // //                       </h2>

// // //                       <p>
// // //                         Add credit to this
// // //                         agent wallet
// // //                       </p>
// // //                     </div>
// // //                   </div>

// // //                   <form
// // //                     onSubmit={
// // //                       handleAddMoney
// // //                     }
// // //                   >

// // //                     <label>
// // //                       Amount
// // //                     </label>

// // //                     <div className="amount-input-wrapper">
// // //                       <span>₹</span>

// // //                       <input
// // //                         type="number"
// // //                         min="1"
// // //                         step="1"
// // //                         placeholder="Enter amount"
// // //                         value={amount}
// // //                         onChange={(e) =>
// // //                           setAmount(
// // //                             e.target.value
// // //                           )
// // //                         }
// // //                       />
// // //                     </div>

// // //                     <label>
// // //                       Note
// // //                     </label>

// // //                     <textarea
// // //                       placeholder="Example: Payment received from agent"
// // //                       value={note}
// // //                       onChange={(e) =>
// // //                         setNote(
// // //                           e.target.value
// // //                         )
// // //                       }
// // //                       rows="4"
// // //                     />

// // //                     <button
// // //                       type="submit"
// // //                       disabled={
// // //                         addingMoney
// // //                       }
// // //                     >
// // //                       {addingMoney
// // //                         ? "Adding..."
// // //                         : "Add Money"}
// // //                     </button>

// // //                   </form>
// // //                 </div>

// // //                 {/* ==================================
// // //                             QUICK AMOUNTS
// // //                 ================================== */}

// // //                 <div className="wallet-card quick-money-card">

// // //                   <div className="wallet-card-title">
// // //                     <div>
// // //                       <h2>
// // //                         Quick Add
// // //                       </h2>

// // //                       <p>
// // //                         Select amount
// // //                       </p>
// // //                     </div>
// // //                   </div>

// // //                   <div className="quick-amounts">

// // //                     {[5000, 10000, 25000, 50000, 100000, 200000].map(
// // //                       (quickAmount) => (
// // //                         <button
// // //                           type="button"
// // //                           key={quickAmount}
// // //                           onClick={() =>
// // //                             setAmount(
// // //                               String(
// // //                                 quickAmount
// // //                               )
// // //                             )
// // //                           }
// // //                         >
// // //                           {formatMoney(
// // //                             quickAmount
// // //                           )}
// // //                         </button>
// // //                       )
// // //                     )}

// // //                   </div>

// // //                 </div>

// // //               </div>

// // //               {/* ==================================
// // //                         TRANSACTIONS
// // //               ================================== */}

// // //               <div className="wallet-card transactions-card">

// // //                 <div className="wallet-card-title">
// // //                   <div>
// // //                     <h2>
// // //                       Transaction History
// // //                     </h2>

// // //                     <p>
// // //                       Wallet credit and
// // //                       debit history
// // //                     </p>
// // //                   </div>

// // //                   <span>
// // //                     {transactions.length}{" "}
// // //                     Transactions
// // //                   </span>
// // //                 </div>

// // //                 {loadingTransactions ? (
// // //                   <div className="wallet-loading">
// // //                     Loading transactions...
// // //                   </div>
// // //                 ) : transactions.length ===
// // //                   0 ? (
// // //                   <div className="empty-wallet">
// // //                     No transactions found.
// // //                   </div>
// // //                 ) : (
// // //                   <div className="transactions-table-wrapper">

// // //                     <table className="transactions-table">

// // //                       <thead>
// // //                         <tr>
// // //                           <th>
// // //                             Date
// // //                           </th>

// // //                           <th>
// // //                             Type
// // //                           </th>

// // //                           <th>
// // //                             Amount
// // //                           </th>

// // //                           <th>
// // //                             Balance Before
// // //                           </th>

// // //                           <th>
// // //                             Balance After
// // //                           </th>

// // //                           <th>
// // //                             Booking / PNR
// // //                           </th>

// // //                           <th>
// // //                             Note
// // //                           </th>
// // //                         </tr>
// // //                       </thead>

// // //                       <tbody>

// // //                         {transactions.map(
// // //                           (transaction) => (
// // //                             <tr
// // //                               key={
// // //                                 transaction._id
// // //                               }
// // //                             >
// // //                               <td>
// // //                                 {formatDate(
// // //                                   transaction.createdAt
// // //                                 )}
// // //                               </td>

// // //                               <td>
// // //                                 <span
// // //                                   className={`transaction-type ${
// // //                                     transaction.type
// // //                                   }`}
// // //                                 >
// // //                                   {transaction.type ===
// // //                                   "credit"
// // //                                     ? "Credit"
// // //                                     : transaction.type ===
// // //                                       "debit"
// // //                                     ? "Debit"
// // //                                     : "Refund"}
// // //                                 </span>
// // //                               </td>

// // //                               <td
// // //                                 className={`transaction-amount ${
// // //                                   transaction.type
// // //                                 }`}
// // //                               >
// // //                                 {transaction.type ===
// // //                                 "debit"
// // //                                   ? "-"
// // //                                   : "+"}

// // //                                 {formatMoney(
// // //                                   transaction.amount
// // //                                 )}
// // //                               </td>

// // //                               <td>
// // //                                 {formatMoney(
// // //                                   transaction.balanceBefore
// // //                                 )}
// // //                               </td>

// // //                               <td>
// // //                                 {formatMoney(
// // //                                   transaction.balanceAfter
// // //                                 )}
// // //                               </td>

// // //                               <td>
// // //                                 {transaction.pnr ? (
// // //                                   <div className="booking-reference">
// // //                                     <strong>
// // //                                       PNR:{" "}
// // //                                       {
// // //                                         transaction.pnr
// // //                                       }
// // //                                     </strong>

// // //                                     {transaction.bookingNumber && (
// // //                                       <small>
// // //                                         {
// // //                                           transaction.bookingNumber
// // //                                         }
// // //                                       </small>
// // //                                     )}
// // //                                   </div>
// // //                                 ) : (
// // //                                   "-"
// // //                                 )}
// // //                               </td>

// // //                               <td>
// // //                                 {transaction.note ||
// // //                                   "-"}
// // //                               </td>
// // //                             </tr>
// // //                           )
// // //                         )}

// // //                       </tbody>

// // //                     </table>

// // //                   </div>
// // //                 )}

// // //               </div>
// // //             </>
// // //           )}
// // //         </>
// // //       )}

// // //       {/* ======================================
// // //                     NO AGENT SELECTED
// // //       ====================================== */}

// // //       {!selectedAgent &&
// // //         !loadingAgents && (
// // //           <div className="wallet-empty-state">

// // //             <FaWallet />

// // //             <h2>
// // //               Select an Agent
// // //             </h2>

// // //             <p>
// // //               Select an agent above to
// // //               view wallet balance and
// // //               add money.
// // //             </p>

// // //           </div>
// // //         )}

// // //     </div>
// // //   );
// // // }

// // // export default AgentWallet;






































































//   // import React, { useEffect, useState } from "react";
//   // import "./AgentWallet.css";
//   // import { FaWallet } from "react-icons/fa";
//   // import * as XLSX from "xlsx";

//   // const API_BASE_URL =
//   //   import.meta.env.VITE_API_URL || "http://localhost:5000";

//   // function AgentWallet() {
//   //   const [agents, setAgents] = useState([]);
//   //   const [selectedAgent, setSelectedAgent] = useState("");

//   //   const [wallet, setWallet] = useState(null);
//   //   const [agent, setAgent] = useState(null);

//   //   const [transactions, setTransactions] = useState([]);

//   //   const [amount, setAmount] = useState("");

//   //   const [loadingAgents, setLoadingAgents] = useState(true);
//   //   const [loadingWallet, setLoadingWallet] = useState(false);
//   //   const [loadingTransactions, setLoadingTransactions] = useState(false);

//   //   const [addingMoney, setAddingMoney] = useState(false);
//   //   const [deductingMoney, setDeductingMoney] = useState(false);

//   //   const [deletingTransaction, setDeletingTransaction] =
//   //     useState(null);

//   //   const [message, setMessage] = useState("");
//   //   const [error, setError] = useState("");

//   //   // =========================================================
//   //   // TOKEN
//   //   // =========================================================

//   //   const getToken = () => {
//   //     return localStorage.getItem("token");
//   //   };

//   //   // =========================================================
//   //   // HEADERS
//   //   // =========================================================

//   //   const getHeaders = () => {
//   //     const token = getToken();

//   //     return {
//   //       "Content-Type": "application/json",
//   //       ...(token
//   //         ? {
//   //             Authorization: `Bearer ${token}`,
//   //           }
//   //         : {}),
//   //     };
//   //   };

//   //   // =========================================================
//   //   // FORMAT MONEY
//   //   // =========================================================

//   //   const formatMoney = (value) => {
//   //     return `₹${Number(value || 0).toLocaleString("en-IN")}`;
//   //   };

//   //   // =========================================================
//   //   // FORMAT DATE
//   //   // =========================================================

//   //   const formatDate = (date) => {
//   //     if (!date) return "-";

//   //     return new Date(date).toLocaleString("en-IN", {
//   //       day: "2-digit",
//   //       month: "short",
//   //       year: "numeric",
//   //       hour: "2-digit",
//   //       minute: "2-digit",
//   //     });
//   //   };

//   //   // =========================================================
//   //   // FETCH AGENTS
//   //   // =========================================================

//   //   const fetchAgents = async () => {
//   //     try {
//   //       setLoadingAgents(true);
//   //       setError("");

//   //       const response = await fetch(
//   //         `${API_BASE_URL}/api/wallet/admin/agents`,
//   //         {
//   //           method: "GET",
//   //           headers: getHeaders(),
//   //         }
//   //       );

//   //       const data = await response.json();

//   //       if (!response.ok) {
//   //         throw new Error(
//   //           data.message || "Unable to fetch agents."
//   //         );
//   //       }

//   //       setAgents(data.agents || []);
//   //     } catch (err) {
//   //       console.error("FETCH AGENTS ERROR:", err);

//   //       setError(
//   //         err.message || "Unable to fetch agents."
//   //       );
//   //     } finally {
//   //       setLoadingAgents(false);
//   //     }
//   //   };

//   //   // =========================================================
//   //   // FETCH WALLET
//   //   // =========================================================

//   //   const fetchWallet = async (agentId) => {
//   //     if (!agentId) {
//   //       setAgent(null);
//   //       setWallet(null);
//   //       setTransactions([]);
//   //       return;
//   //     }

//   //     try {
//   //       setLoadingWallet(true);
//   //       setLoadingTransactions(true);

//   //       setError("");
//   //       setMessage("");

//   //       // -----------------------------------------
//   //       // WALLET
//   //       // -----------------------------------------

//   //       const walletResponse = await fetch(
//   //         `${API_BASE_URL}/api/wallet/admin/agent/${agentId}`,
//   //         {
//   //           method: "GET",
//   //           headers: getHeaders(),
//   //         }
//   //       );

//   //       const walletData = await walletResponse.json();

//   //       if (!walletResponse.ok) {
//   //         throw new Error(
//   //           walletData.message ||
//   //             "Unable to fetch wallet."
//   //         );
//   //       }

//   //       setAgent(walletData.agent || null);
//   //       setWallet(walletData.wallet || null);

//   //       // -----------------------------------------
//   //       // TRANSACTIONS
//   //       // -----------------------------------------

//   //       const transactionResponse = await fetch(
//   //         `${API_BASE_URL}/api/wallet/admin/transactions/${agentId}`,
//   //         {
//   //           method: "GET",
//   //           headers: getHeaders(),
//   //         }
//   //       );

//   //       const transactionData =
//   //         await transactionResponse.json();

//   //       if (!transactionResponse.ok) {
//   //         throw new Error(
//   //           transactionData.message ||
//   //             "Unable to fetch transactions."
//   //         );
//   //       }

//   //       setTransactions(
//   //         transactionData.transactions || []
//   //       );
//   //     } catch (err) {
//   //       console.error(
//   //         "FETCH WALLET ERROR:",
//   //         err
//   //       );

//   //       setError(
//   //         err.message ||
//   //           "Unable to load wallet."
//   //       );

//   //       setAgent(null);
//   //       setWallet(null);
//   //       setTransactions([]);
//   //     } finally {
//   //       setLoadingWallet(false);
//   //       setLoadingTransactions(false);
//   //     }
//   //   };

//   //   // =========================================================
//   //   // INITIAL LOAD
//   //   // =========================================================

//   //   useEffect(() => {
//   //     fetchAgents();
//   //   }, []);

//   //   // =========================================================
//   //   // SELECT AGENT
//   //   // =========================================================

//   //   const handleAgentChange = (e) => {
//   //     const agentId = e.target.value;

//   //     setSelectedAgent(agentId);

//   //     setAmount("");
//   //     setMessage("");
//   //     setError("");

//   //     fetchWallet(agentId);
//   //   };

//   //   // =========================================================
//   //   // REFRESH TRANSACTIONS
//   //   // =========================================================

//   //   const refreshTransactions = async (agentId = selectedAgent) => {
//   //     if (!agentId) return;

//   //     try {
//   //       const response = await fetch(
//   //         `${API_BASE_URL}/api/wallet/admin/transactions/${agentId}`,
//   //         {
//   //           method: "GET",
//   //           headers: getHeaders(),
//   //         }
//   //       );

//   //       const data = await response.json();

//   //       if (response.ok) {
//   //         setTransactions(data.transactions || []);
//   //       }
//   //     } catch (err) {
//   //       console.error(
//   //         "REFRESH TRANSACTIONS ERROR:",
//   //         err
//   //       );
//   //     }
//   //   };

//   //   // =========================================================
//   //   // REFRESH WALLET
//   //   // =========================================================

//   //   const refreshWallet = async (agentId = selectedAgent) => {
//   //     if (!agentId) return;

//   //     try {
//   //       const response = await fetch(
//   //         `${API_BASE_URL}/api/wallet/admin/agent/${agentId}`,
//   //         {
//   //           method: "GET",
//   //           headers: getHeaders(),
//   //         }
//   //       );

//   //       const data = await response.json();

//   //       if (response.ok) {
//   //         setAgent(data.agent || null);
//   //         setWallet(data.wallet || null);
//   //       }
//   //     } catch (err) {
//   //       console.error(
//   //         "REFRESH WALLET ERROR:",
//   //         err
//   //       );
//   //     }
//   //   };

//   //   // =========================================================
//   //   // ADD MONEY
//   //   // =========================================================

//   //   const handleAddMoney = async (e) => {
//   //     e.preventDefault();

//   //     setMessage("");
//   //     setError("");

//   //     if (!selectedAgent) {
//   //       setError("Please select an agent.");
//   //       return;
//   //     }

//   //     const numericAmount = Number(amount);

//   //     if (
//   //       !Number.isFinite(numericAmount) ||
//   //       numericAmount <= 0
//   //     ) {
//   //       setError("Please enter a valid amount.");
//   //       return;
//   //     }

//   //     try {
//   //       setAddingMoney(true);

//   //       const response = await fetch(
//   //         `${API_BASE_URL}/api/wallet/admin/add-money`,
//   //         {
//   //           method: "POST",
//   //           headers: getHeaders(),
//   //           body: JSON.stringify({
//   //             agentId: selectedAgent,
//   //             amount: numericAmount,
//   //           }),
//   //         }
//   //       );

//   //       const data = await response.json();

//   //       if (!response.ok) {
//   //         throw new Error(
//   //           data.message ||
//   //             "Unable to add money."
//   //         );
//   //       }

//   //       setWallet(data.wallet || null);

//   //       setMessage(
//   //         data.message ||
//   //           "Money added successfully."
//   //       );

//   //       setAmount("");

//   //       await refreshWallet();
//   //       await refreshTransactions();
//   //     } catch (err) {
//   //       console.error(
//   //         "ADD MONEY ERROR:",
//   //         err
//   //       );

//   //       setError(
//   //         err.message ||
//   //           "Unable to add money."
//   //       );
//   //     } finally {
//   //       setAddingMoney(false);
//   //     }
//   //   };

//   //   // =========================================================
//   //   // DEDUCT MONEY
//   //   // =========================================================

//   //   const handleDeductMoney = async (e) => {
//   //     e.preventDefault();

//   //     setMessage("");
//   //     setError("");

//   //     if (!selectedAgent) {
//   //       setError("Please select an agent.");
//   //       return;
//   //     }

//   //     const numericAmount = Number(amount);

//   //     if (
//   //       !Number.isFinite(numericAmount) ||
//   //       numericAmount <= 0
//   //     ) {
//   //       setError("Please enter a valid amount.");
//   //       return;
//   //     }

//   //     if (
//   //       numericAmount >
//   //       Number(wallet?.balance || 0)
//   //     ) {
//   //       setError(
//   //         "Deduct amount cannot be greater than available balance."
//   //       );
//   //       return;
//   //     }

//   //     const confirmed = window.confirm(
//   //       `Are you sure you want to deduct ${formatMoney(
//   //         numericAmount
//   //       )} from this agent wallet?`
//   //     );

//   //     if (!confirmed) return;

//   //     try {
//   //       setDeductingMoney(true);

//   //       const response = await fetch(
//   //         `${API_BASE_URL}/api/wallet/admin/deduct-money`,
//   //         {
//   //           method: "POST",
//   //           headers: getHeaders(),
//   //           body: JSON.stringify({
//   //             agentId: selectedAgent,
//   //             amount: numericAmount,
//   //           }),
//   //         }
//   //       );

//   //       const data = await response.json();

//   //       if (!response.ok) {
//   //         throw new Error(
//   //           data.message ||
//   //             "Unable to deduct money."
//   //         );
//   //       }

//   //       setWallet(data.wallet || null);

//   //       setMessage(
//   //         data.message ||
//   //           "Money deducted successfully."
//   //       );

//   //       setAmount("");

//   //       await refreshWallet();
//   //       await refreshTransactions();
//   //     } catch (err) {
//   //       console.error(
//   //         "DEDUCT MONEY ERROR:",
//   //         err
//   //       );

//   //       setError(
//   //         err.message ||
//   //           "Unable to deduct money."
//   //       );
//   //     } finally {
//   //       setDeductingMoney(false);
//   //     }
//   //   };

//   //   // =========================================================
//   //   // DELETE TRANSACTION
//   //   // =========================================================

//   //   const handleDeleteTransaction = async (
//   //     transaction
//   //   ) => {
//   //     if (!transaction?._id) return;

//   //     const confirmed = window.confirm(
//   //       `Delete this ${transaction.type} transaction of ${formatMoney(
//   //         transaction.amount
//   //       )}?\n\nThe wallet balance will also be adjusted by the backend.`
//   //     );

//   //     if (!confirmed) return;

//   //     try {
//   //       setDeletingTransaction(
//   //         transaction._id
//   //       );

//   //       setMessage("");
//   //       setError("");

//   //       const response = await fetch(
//   //         `${API_BASE_URL}/api/wallet/admin/transactions/${transaction._id}`,
//   //         {
//   //           method: "DELETE",
//   //           headers: getHeaders(),
//   //         }
//   //       );

//   //       const data = await response.json();

//   //       if (!response.ok) {
//   //         throw new Error(
//   //           data.message ||
//   //             "Unable to delete transaction."
//   //         );
//   //       }

//   //       setMessage(
//   //         data.message ||
//   //           "Transaction deleted successfully."
//   //       );

//   //       await refreshWallet();
//   //       await refreshTransactions();
//   //     } catch (err) {
//   //       console.error(
//   //         "DELETE TRANSACTION ERROR:",
//   //         err
//   //       );

//   //       setError(
//   //         err.message ||
//   //           "Unable to delete transaction."
//   //       );
//   //     } finally {
//   //       setDeletingTransaction(null);
//   //     }
//   //   };

//   //   // =========================================================
//   //   // EXPORT EXCEL
//   //   // =========================================================

//   //   const handleExportExcel = () => {
//   //     if (!selectedAgent) {
//   //       setError("Please select an agent first.");
//   //       return;
//   //     }

//   //     if (!transactions.length) {
//   //       setError(
//   //         "There are no transactions to export."
//   //       );
//   //       return;
//   //     }

//   //     try {
//   //       const excelData = transactions.map(
//   //         (transaction, index) => ({
//   //           "S.No": index + 1,

//   //           Date: transaction.createdAt
//   //             ? formatDate(transaction.createdAt)
//   //             : "-",

//   //           Type:
//   //             transaction.type === "credit"
//   //               ? "Credit"
//   //               : transaction.type === "debit"
//   //               ? "Debit"
//   //               : "Refund",

//   //           Amount: Number(
//   //             transaction.amount || 0
//   //           ),

//   //           "Balance Before": Number(
//   //             transaction.balanceBefore || 0
//   //           ),

//   //           "Balance After": Number(
//   //             transaction.balanceAfter || 0
//   //           ),

//   //           "Booking Number":
//   //             transaction.bookingNumber || "-",

//   //           PNR:
//   //             transaction.pnr || "-",
//   //         })
//   //       );

//   //       const worksheet =
//   //         XLSX.utils.json_to_sheet(
//   //           excelData
//   //         );

//   //       worksheet["!cols"] = [
//   //         { wch: 8 },
//   //         { wch: 24 },
//   //         { wch: 12 },
//   //         { wch: 16 },
//   //         { wch: 18 },
//   //         { wch: 18 },
//   //         { wch: 20 },
//   //         { wch: 16 },
//   //       ];

//   //       const workbook =
//   //         XLSX.utils.book_new();

//   //       XLSX.utils.book_append_sheet(
//   //         workbook,
//   //         worksheet,
//   //         "Transaction History"
//   //       );

//   //       const agentName =
//   //         `${agent?.firstName || ""} ${
//   //           agent?.lastName || ""
//   //         }`
//   //           .trim()
//   //           .replace(/\s+/g, "_");

//   //       const agencyName =
//   //         (agent?.agencyName || "Agent")
//   //           .replace(/\s+/g, "_");

//   //       const fileName =
//   //         `${agencyName}_${agentName}_Wallet_Transactions.xlsx`;

//   //       XLSX.writeFile(
//   //         workbook,
//   //         fileName
//   //       );

//   //       setMessage(
//   //         "Transaction history exported successfully."
//   //       );
//   //     } catch (err) {
//   //       console.error(
//   //         "EXCEL EXPORT ERROR:",
//   //         err
//   //       );

//   //       setError(
//   //         "Unable to export Excel file."
//   //       );
//   //     }
//   //   };

//   //   // =========================================================
//   //   // UI
//   //   // =========================================================

//   //   return (
//   //     <div className="agent-wallet-page">

//   //       {/* =====================================================
//   //           HEADER
//   //       ===================================================== */}

//   //       <div className="agent-wallet-header">
//   //         <div>
//   //           <h1>Agent Wallet</h1>

//   //           <p>
//   //             Manage agent wallet balance
//   //             and transactions
//   //           </p>
//   //         </div>
//   //       </div>

//   //       {/* =====================================================
//   //           ALERTS
//   //       ===================================================== */}

//   //       {error && (
//   //         <div className="wallet-alert wallet-error">
//   //           {error}

//   //           <button
//   //             type="button"
//   //             onClick={() => setError("")}
//   //           >
//   //             ×
//   //           </button>
//   //         </div>
//   //       )}

//   //       {message && (
//   //         <div className="wallet-alert wallet-success">
//   //           {message}

//   //           <button
//   //             type="button"
//   //             onClick={() => setMessage("")}
//   //           >
//   //             ×
//   //           </button>
//   //         </div>
//   //       )}

//   //       {/* =====================================================
//   //           AGENT SELECT
//   //       ===================================================== */}

//   //       <div className="wallet-card agent-selector-card">

//   //         <div className="wallet-card-title">
//   //           <div>
//   //             <h2>Select Agent</h2>

//   //             <p>
//   //               Select an agent to manage wallet
//   //             </p>
//   //           </div>

//   //           <span>
//   //             {agents.length} Agents
//   //           </span>
//   //         </div>

//   //         <select
//   //           value={selectedAgent}
//   //           onChange={handleAgentChange}
//   //           disabled={loadingAgents}
//   //         >
//   //           <option value="">
//   //             {loadingAgents
//   //               ? "Loading agents..."
//   //               : "Select an agent"}
//   //           </option>

//   //           {agents.map((item) => (
//   //             <option
//   //               key={item._id}
//   //               value={item._id}
//   //             >
//   //               {item.agencyName
//   //                 ? `${item.agencyName} - `
//   //                 : ""}
//   //               {item.firstName || ""}
//   //               {item.lastName
//   //                 ? ` ${item.lastName}`
//   //                 : ""}
//   //               {" - "}
//   //               {item.email}
//   //             </option>
//   //           ))}
//   //         </select>
//   //       </div>

//   //       {/* =====================================================
//   //           WALLET CONTENT
//   //       ===================================================== */}

//   //       {selectedAgent && (
//   //         <>
//   //           {loadingWallet ? (
//   //             <div className="wallet-loading">
//   //               <div className="wallet-spinner"></div>
//   //               Loading wallet...
//   //             </div>
//   //           ) : (
//   //             <>
//   //               {/* =================================================
//   //                   AGENT INFORMATION
//   //               ================================================= */}

//   //               {agent && (
//   //                 <div className="agent-profile-card">

//   //                   <div className="agent-profile-icon">
//   //                     <FaWallet />
//   //                   </div>

//   //                   <div className="agent-profile-details">

//   //                     <div className="agent-detail">
//   //                       <span>Agency</span>
//   //                       <strong>
//   //                         {agent.agencyName ||
//   //                           "N/A"}
//   //                       </strong>
//   //                     </div>

//   //                     <div className="agent-detail">
//   //                       <span>Agent</span>
//   //                       <strong>
//   //                         {agent.firstName || ""}
//   //                         {" "}
//   //                         {agent.lastName || ""}
//   //                       </strong>
//   //                     </div>

//   //                     <div className="agent-detail">
//   //                       <span>Email</span>
//   //                       <strong>
//   //                         {agent.email ||
//   //                           "N/A"}
//   //                       </strong>
//   //                     </div>

//   //                     <div className="agent-detail">
//   //                       <span>Phone</span>
//   //                       <strong>
//   //                         {agent.phone ||
//   //                           "N/A"}
//   //                       </strong>
//   //                     </div>

//   //                   </div>
//   //                 </div>
//   //               )}

//   //               {/* =================================================
//   //                   WALLET SUMMARY
//   //               ================================================= */}

//   //               <div className="wallet-summary-grid">

//   //                 <div className="wallet-stat-card available-card">
//   //                   <span>
//   //                     Available Balance
//   //                   </span>

//   //                   <strong>
//   //                     {formatMoney(
//   //                       wallet?.balance
//   //                     )}
//   //                   </strong>
//   //                 </div>

//   //                 <div className="wallet-stat-card credit-card">
//   //                   <span>
//   //                     Total Credit
//   //                   </span>

//   //                   <strong>
//   //                     {formatMoney(
//   //                       wallet?.totalCredit
//   //                     )}
//   //                   </strong>
//   //                 </div>

//   //                 <div className="wallet-stat-card debit-card">
//   //                   <span>
//   //                     Total Debit
//   //                   </span>

//   //                   <strong>
//   //                     {formatMoney(
//   //                       wallet?.totalDebit
//   //                     )}
//   //                   </strong>
//   //                 </div>

//   //               </div>

//   //               {/* =================================================
//   //                   ADD / DEDUCT MONEY
//   //               ================================================= */}

//   //               <div className="wallet-content-grid">

//   //                 <div className="wallet-card money-card">

//   //                   <div className="wallet-card-title">
//   //                     <div>
//   //                       <h2>
//   //                         Wallet Money
//   //                       </h2>

//   //                       <p>
//   //                         Add or deduct money
//   //                         from agent wallet
//   //                       </p>
//   //                     </div>
//   //                   </div>

//   //                   <form>

//   //                     <label>
//   //                       Amount
//   //                     </label>

//   //                     <div className="amount-input-wrapper">
//   //                       <span>₹</span>

//   //                       <input
//   //                         type="number"
//   //                         min="1"
//   //                         step="1"
//   //                         placeholder="Enter amount"
//   //                         value={amount}
//   //                         onChange={(e) =>
//   //                           setAmount(
//   //                             e.target.value
//   //                           )
//   //                         }
//   //                       />
//   //                     </div>

//   //                     <div className="money-action-buttons">

//   //                       <button
//   //                         type="button"
//   //                         className="add-money-btn"
//   //                         onClick={handleAddMoney}
//   //                         disabled={
//   //                           addingMoney ||
//   //                           deductingMoney
//   //                         }
//   //                       >
//   //                         {addingMoney
//   //                           ? "Adding..."
//   //                           : "Add Money"}
//   //                       </button>

//   //                       <button
//   //                         type="button"
//   //                         className="deduct-money-btn"
//   //                         onClick={handleDeductMoney}
//   //                         disabled={
//   //                           addingMoney ||
//   //                           deductingMoney
//   //                         }
//   //                       >
//   //                         {deductingMoney
//   //                           ? "Deducting..."
//   //                           : "Deduct Money"}
//   //                       </button>

//   //                     </div>

//   //                   </form>

//   //                   <div className="money-help-text">
//   //                     Available balance:{" "}
//   //                     <strong>
//   //                       {formatMoney(
//   //                         wallet?.balance
//   //                       )}
//   //                     </strong>
//   //                   </div>

//   //                 </div>

//   //                 {/* =================================================
//   //                     QUICK AMOUNTS
//   //                 ================================================= */}

//   //                 <div className="wallet-card quick-money-card">

//   //                   <div className="wallet-card-title">
//   //                     <div>
//   //                       <h2>
//   //                         Quick Amount
//   //                       </h2>

//   //                       <p>
//   //                         Select an amount
//   //                       </p>
//   //                     </div>
//   //                   </div>

//   //                   <div className="quick-amounts">

//   //                     {[
//   //                       5000,
//   //                       10000,
//   //                       25000,
//   //                       50000,
//   //                       100000,
//   //                       200000,
//   //                     ].map(
//   //                       (quickAmount) => (
//   //                         <button
//   //                           type="button"
//   //                           key={quickAmount}
//   //                           onClick={() =>
//   //                             setAmount(
//   //                               String(
//   //                                 quickAmount
//   //                               )
//   //                             )
//   //                           }
//   //                         >
//   //                           {formatMoney(
//   //                             quickAmount
//   //                           )}
//   //                         </button>
//   //                       )
//   //                     )}

//   //                   </div>

//   //                   <div className="deduct-info-box">
//   //                     <strong>
//   //                       Deduct Money
//   //                     </strong>

//   //                     <p>
//   //                       Agar admin se galti se
//   //                       zyada amount add ho gaya
//   //                       hai to amount enter karke
//   //                       Deduct Money karein.
//   //                     </p>
//   //                   </div>

//   //                 </div>

//   //               </div>

//   //               {/* =================================================
//   //                   TRANSACTION HISTORY
//   //               ================================================= */}

//   //               <div className="wallet-card transactions-card">

//   //                 <div className="transaction-header">

//   //                   <div className="wallet-card-title">
//   //                     <div>
//   //                       <h2>
//   //                         Transaction History
//   //                       </h2>

//   //                       <p>
//   //                         Wallet credit and
//   //                         debit history
//   //                       </p>
//   //                     </div>

//   //                     <span>
//   //                       {transactions.length}{" "}
//   //                       Transactions
//   //                     </span>
//   //                   </div>

//   //                   <button
//   //                     type="button"
//   //                     className="excel-export-btn"
//   //                     onClick={
//   //                       handleExportExcel
//   //                     }
//   //                     disabled={
//   //                       !transactions.length
//   //                     }
//   //                   >
//   //                     Export Excel
//   //                   </button>

//   //                 </div>

//   //                 {loadingTransactions ? (
//   //                   <div className="wallet-loading">
//   //                     <div className="wallet-spinner"></div>
//   //                     Loading transactions...
//   //                   </div>
//   //                 ) : transactions.length ===
//   //                   0 ? (
//   //                   <div className="empty-wallet">
//   //                     <FaWallet />

//   //                     <h3>
//   //                       No Transactions
//   //                     </h3>

//   //                     <p>
//   //                       No wallet transactions
//   //                       found for this agent.
//   //                     </p>
//   //                   </div>
//   //                 ) : (
//   //                   <div className="transactions-table-wrapper">

//   //                     <table className="transactions-table">

//   //                       <thead>
//   //                         <tr>
//   //                           <th>Date</th>

//   //                           <th>Type</th>

//   //                           <th>Amount</th>

//   //                           <th>
//   //                             Balance Before
//   //                           </th>

//   //                           <th>
//   //                             Balance After
//   //                           </th>

//   //                           <th>
//   //                             Booking / PNR
//   //                           </th>

//   //                           <th>
//   //                             Action
//   //                           </th>
//   //                         </tr>
//   //                       </thead>

//   //                       <tbody>

//   //                         {transactions.map(
//   //                           (transaction) => (
//   //                             <tr
//   //                               key={
//   //                                 transaction._id
//   //                               }
//   //                             >

//   //                               {/* DATE */}
//   //                               <td>
//   //                                 <span className="transaction-date">
//   //                                   {formatDate(
//   //                                     transaction.createdAt
//   //                                   )}
//   //                                 </span>
//   //                               </td>

//   //                               {/* TYPE */}
//   //                               <td>
//   //                                 <span
//   //                                   className={`transaction-type ${
//   //                                     transaction.type
//   //                                   }`}
//   //                                 >
//   //                                   {transaction.type ===
//   //                                   "credit"
//   //                                     ? "Credit"
//   //                                     : transaction.type ===
//   //                                       "debit"
//   //                                     ? "Debit"
//   //                                     : "Refund"}
//   //                                 </span>
//   //                               </td>

//   //                               {/* AMOUNT */}
//   //                               <td
//   //                                 className={`transaction-amount ${
//   //                                   transaction.type
//   //                                 }`}
//   //                               >
//   //                                 {transaction.type ===
//   //                                 "debit"
//   //                                   ? "-"
//   //                                   : "+"}

//   //                                 {formatMoney(
//   //                                   transaction.amount
//   //                                 )}
//   //                               </td>

//   //                               {/* BEFORE */}
//   //                               <td>
//   //                                 {formatMoney(
//   //                                   transaction.balanceBefore
//   //                                 )}
//   //                               </td>

//   //                               {/* AFTER */}
//   //                               <td>
//   //                                 {formatMoney(
//   //                                   transaction.balanceAfter
//   //                                 )}
//   //                               </td>

//   //                               {/* BOOKING / PNR */}
//   //                               <td>
//   //                                 {transaction.pnr ? (
//   //                                   <div className="booking-reference">

//   //                                     <strong>
//   //                                       PNR:{" "}
//   //                                       {
//   //                                         transaction.pnr
//   //                                       }
//   //                                     </strong>

//   //                                     {transaction.bookingNumber && (
//   //                                       <small>
//   //                                         {
//   //                                           transaction.bookingNumber
//   //                                         }
//   //                                       </small>
//   //                                     )}

//   //                                   </div>
//   //                                 ) : (
//   //                                   <span className="no-reference">
//   //                                     -
//   //                                   </span>
//   //                                 )}
//   //                               </td>

//   //                               {/* DELETE */}
//   //                               <td>

//   //                                 <button
//   //                                   type="button"
//   //                                   className="delete-transaction-btn"
//   //                                   onClick={() =>
//   //                                     handleDeleteTransaction(
//   //                                       transaction
//   //                                     )
//   //                                   }
//   //                                   disabled={
//   //                                     deletingTransaction ===
//   //                                     transaction._id
//   //                                   }
//   //                                   title="Delete transaction"
//   //                                 >
//   //                                   {deletingTransaction ===
//   //                                   transaction._id
//   //                                     ? "..."
//   //                                     : "Delete"}
//   //                                 </button>

//   //                               </td>

//   //                             </tr>
//   //                           )
//   //                         )}

//   //                       </tbody>

//   //                     </table>

//   //                   </div>
//   //                 )}

//   //               </div>
//   //             </>
//   //           )}
//   //         </>
//   //       )}

//   //       {/* =====================================================
//   //           NO AGENT SELECTED
//   //       ===================================================== */}

//   //       {!selectedAgent &&
//   //         !loadingAgents && (
//   //           <div className="wallet-empty-state">

//   //             <FaWallet />

//   //             <h2>
//   //               Select an Agent
//   //             </h2>

//   //             <p>
//   //               Select an agent above to
//   //               view wallet balance,
//   //               add money and manage
//   //               transactions.
//   //             </p>

//   //           </div>
//   //         )}

//   //     </div>
//   //   );
//   // }

//   // export default AgentWallet;
































































// import React, { useEffect, useState } from "react";
// import "./AgentWallet.css";
// import { FaWallet } from "react-icons/fa";

// const API_BASE_URL =
//   import.meta.env.VITE_API_URL ||
//   "http://localhost:5000";

// function AgentWallet() {
//   const [agents, setAgents] = useState([]);
//   const [selectedAgent, setSelectedAgent] = useState("");

//   const [wallet, setWallet] = useState(null);
//   const [agent, setAgent] = useState(null);

//   const [transactions, setTransactions] = useState([]);

//   const [amount, setAmount] = useState("");

//   const [correctCreditAmount, setCorrectCreditAmount] =
//     useState("");

//   const [loadingAgents, setLoadingAgents] =
//     useState(true);

//   const [loadingWallet, setLoadingWallet] =
//     useState(false);

//   const [loadingTransactions, setLoadingTransactions] =
//     useState(false);

//   const [addingMoney, setAddingMoney] =
//     useState(false);

//   const [correctingCredit, setCorrectingCredit] =
//     useState(false);

//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   // =========================================================
//   // TOKEN
//   // =========================================================

//   const getToken = () => {
//     return localStorage.getItem("token");
//   };

//   // =========================================================
//   // HEADERS
//   // =========================================================

//   const getHeaders = () => {
//     const token = getToken();

//     return {
//       "Content-Type": "application/json",

//       ...(token
//         ? {
//             Authorization: `Bearer ${token}`,
//           }
//         : {}),
//     };
//   };

//   // =========================================================
//   // FORMAT MONEY
//   // =========================================================

//   const formatMoney = (value) => {
//     return `₹${Number(value || 0).toLocaleString(
//       "en-IN"
//     )}`;
//   };

//   // =========================================================
//   // FORMAT DATE
//   // =========================================================

//   const formatDate = (date) => {
//     if (!date) return "-";

//     return new Date(date).toLocaleString(
//       "en-IN",
//       {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//         hour: "2-digit",
//         minute: "2-digit",
//       }
//     );
//   };

//   // =========================================================
//   // FETCH AGENTS
//   // =========================================================

//   const fetchAgents = async () => {
//     try {
//       setLoadingAgents(true);
//       setError("");

//       const response = await fetch(
//         `${API_BASE_URL}/api/wallet/admin/agents`,
//         {
//           method: "GET",
//           headers: getHeaders(),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message ||
//             "Unable to fetch agents."
//         );
//       }

//       setAgents(data.agents || []);
//     } catch (err) {
//       console.error(
//         "FETCH AGENTS ERROR:",
//         err
//       );

//       setError(
//         err.message ||
//           "Unable to fetch agents."
//       );
//     } finally {
//       setLoadingAgents(false);
//     }
//   };

//   // =========================================================
//   // FETCH WALLET
//   // =========================================================

//   const fetchWallet = async (agentId) => {
//     if (!agentId) {
//       setAgent(null);
//       setWallet(null);
//       setTransactions([]);
//       return;
//     }

//     try {
//       setLoadingWallet(true);
//       setLoadingTransactions(true);

//       setError("");
//       setMessage("");

//       // -----------------------------------------
//       // WALLET
//       // -----------------------------------------

//       const walletResponse = await fetch(
//         `${API_BASE_URL}/api/wallet/admin/agent/${agentId}`,
//         {
//           method: "GET",
//           headers: getHeaders(),
//         }
//       );

//       const walletData =
//         await walletResponse.json();

//       if (!walletResponse.ok) {
//         throw new Error(
//           walletData.message ||
//             "Unable to fetch wallet."
//         );
//       }

//       setAgent(
//         walletData.agent || null
//       );

//       setWallet(
//         walletData.wallet || null
//       );

//       // -----------------------------------------
//       // TRANSACTIONS
//       // -----------------------------------------

//       const transactionResponse =
//         await fetch(
//           `${API_BASE_URL}/api/wallet/admin/transactions/${agentId}`,
//           {
//             method: "GET",
//             headers: getHeaders(),
//           }
//         );

//       const transactionData =
//         await transactionResponse.json();

//       if (!transactionResponse.ok) {
//         throw new Error(
//           transactionData.message ||
//             "Unable to fetch transactions."
//         );
//       }

//       setTransactions(
//         transactionData.transactions || []
//       );
//     } catch (err) {
//       console.error(
//         "FETCH WALLET ERROR:",
//         err
//       );

//       setError(
//         err.message ||
//           "Unable to load wallet."
//       );

//       setAgent(null);
//       setWallet(null);
//       setTransactions([]);
//     } finally {
//       setLoadingWallet(false);
//       setLoadingTransactions(false);
//     }
//   };

//   // =========================================================
//   // INITIAL LOAD
//   // =========================================================

//   useEffect(() => {
//     fetchAgents();
//   }, []);

//   // =========================================================
//   // AGENT SELECT
//   // =========================================================

//   const handleAgentChange = (e) => {
//     const agentId = e.target.value;

//     setSelectedAgent(agentId);

//     setAmount("");
//     setCorrectCreditAmount("");

//     setMessage("");
//     setError("");

//     fetchWallet(agentId);
//   };

//   // =========================================================
//   // REFRESH WALLET
//   // =========================================================

//   const refreshWallet = async () => {
//     if (!selectedAgent) return;

//     try {
//       const response = await fetch(
//         `${API_BASE_URL}/api/wallet/admin/agent/${selectedAgent}`,
//         {
//           method: "GET",
//           headers: getHeaders(),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) return;

//       setAgent(data.agent || null);
//       setWallet(data.wallet || null);
//     } catch (err) {
//       console.error(
//         "REFRESH WALLET ERROR:",
//         err
//       );
//     }
//   };

//   // =========================================================
//   // REFRESH TRANSACTIONS
//   // =========================================================

//   const refreshTransactions = async () => {
//     if (!selectedAgent) return;

//     try {
//       const response = await fetch(
//         `${API_BASE_URL}/api/wallet/admin/transactions/${selectedAgent}`,
//         {
//           method: "GET",
//           headers: getHeaders(),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) return;

//       setTransactions(
//         data.transactions || []
//       );
//     } catch (err) {
//       console.error(
//         "REFRESH TRANSACTIONS ERROR:",
//         err
//       );
//     }
//   };

//   // =========================================================
//   // ADD MONEY
//   // =========================================================

//   const handleAddMoney = async (e) => {
//     e.preventDefault();

//     setMessage("");
//     setError("");

//     if (!selectedAgent) {
//       setError(
//         "Please select an agent."
//       );
//       return;
//     }

//     const numericAmount =
//       Number(amount);

//     if (
//       !Number.isFinite(
//         numericAmount
//       ) ||
//       numericAmount <= 0
//     ) {
//       setError(
//         "Please enter a valid amount."
//       );
//       return;
//     }

//     try {
//       setAddingMoney(true);

//       const response = await fetch(
//         `${API_BASE_URL}/api/wallet/admin/add-money`,
//         {
//           method: "POST",
//           headers: getHeaders(),

//           body: JSON.stringify({
//             agentId:
//               selectedAgent,

//             amount:
//               numericAmount,
//           }),
//         }
//       );

//       const data =
//         await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message ||
//             "Unable to add money."
//         );
//       }

//       setWallet(
//         data.wallet || null
//       );

//       setAmount("");

//       setMessage(
//         data.message ||
//           "Money added successfully."
//       );

//       await refreshWallet();
//       await refreshTransactions();
//     } catch (err) {
//       console.error(
//         "ADD MONEY ERROR:",
//         err
//       );

//       setError(
//         err.message ||
//           "Unable to add money."
//       );
//     } finally {
//       setAddingMoney(false);
//     }
//   };

//   // =========================================================
//   // CORRECT TOTAL CREDIT
//   //
//   // IMPORTANT:
//   // This changes ONLY totalCredit.
//   //
//   // balance       -> NO CHANGE
//   // totalDebit    -> NO CHANGE
//   // transactions  -> NO CHANGE
//   // =========================================================

//   const handleCorrectTotalCredit =
//     async () => {
//       if (!selectedAgent) {
//         setError(
//           "Please select an agent."
//         );
//         return;
//       }

//       const newCredit =
//         Number(correctCreditAmount);

//       if (
//         !Number.isFinite(newCredit) ||
//         newCredit < 0
//       ) {
//         setError(
//           "Please enter a valid Total Credit."
//         );
//         return;
//       }

//       const currentCredit =
//         Number(
//           wallet?.totalCredit || 0
//         );

//       if (
//         newCredit === currentCredit
//       ) {
//         setError(
//           "New Total Credit is same as current Total Credit."
//         );
//         return;
//       }

//       const confirmed =
//         window.confirm(
//           `Are you sure you want to correct Total Credit?\n\n` +
//           `Current Total Credit: ${formatMoney(
//             currentCredit
//           )}\n` +
//           `New Total Credit: ${formatMoney(
//             newCredit
//           )}\n\n` +
//           `Available Balance will NOT change.`
//         );

//       if (!confirmed) {
//         return;
//       }

//       try {
//         setCorrectingCredit(true);

//         setError("");
//         setMessage("");

//         const response =
//           await fetch(
//             `${API_BASE_URL}/api/wallet/admin/correct-credit`,
//             {
//               method: "POST",

//               headers:
//                 getHeaders(),

//               body: JSON.stringify({
//                 agentId:
//                   selectedAgent,

//                 totalCredit:
//                   newCredit,
//               }),
//             }
//           );

//         const data =
//           await response.json();

//         if (!response.ok) {
//           throw new Error(
//             data.message ||
//               "Unable to correct Total Credit."
//           );
//         }

//         // -----------------------------------------
//         // UPDATE WALLET
//         // -----------------------------------------

//         setWallet(
//           data.wallet || null
//         );

//         setCorrectCreditAmount(
//           ""
//         );

//         setMessage(
//           data.message ||
//             "Total Credit corrected successfully."
//         );

//         // -----------------------------------------
//         // REFRESH
//         // -----------------------------------------

//         await refreshWallet();

//         // Transactions intentionally
//         // remain unchanged.
//       } catch (err) {
//         console.error(
//           "CORRECT TOTAL CREDIT ERROR:",
//           err
//         );

//         setError(
//           err.message ||
//             "Unable to correct Total Credit."
//         );
//       } finally {
//         setCorrectingCredit(
//           false
//         );
//       }
//     };

//   // =========================================================
//   // UI
//   // =========================================================

//   return (
//     <div className="agent-wallet-page">

//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <div className="agent-wallet-header">
//         <div>
//           <h1>
//             Agent Wallet
//           </h1>

//           <p>
//             Manage agent wallet balance
//             and transactions
//           </p>
//         </div>
//       </div>

//       {/* =====================================================
//           ERROR
//       ===================================================== */}

//       {error && (
//         <div className="wallet-alert wallet-error">
//           <span>
//             {error}
//           </span>

//           <button
//             type="button"
//             onClick={() =>
//               setError("")
//             }
//           >
//             ×
//           </button>
//         </div>
//       )}

//       {/* =====================================================
//           SUCCESS
//       ===================================================== */}

//       {message && (
//         <div className="wallet-alert wallet-success">
//           <span>
//             {message}
//           </span>

//           <button
//             type="button"
//             onClick={() =>
//               setMessage("")
//             }
//           >
//             ×
//           </button>
//         </div>
//       )}

//       {/* =====================================================
//           SELECT AGENT
//       ===================================================== */}

//       <div className="wallet-card agent-selector-card">

//         <div className="wallet-card-title">
//           <div>
//             <h2>
//               Select Agent
//             </h2>

//             <p>
//               Select an agent to manage
//               wallet
//             </p>
//           </div>

//           <span>
//             {agents.length} Agents
//           </span>
//         </div>

//         <select
//           value={selectedAgent}
//           onChange={
//             handleAgentChange
//           }
//           disabled={
//             loadingAgents
//           }
//         >
//           <option value="">
//             {loadingAgents
//               ? "Loading agents..."
//               : "Select an agent"}
//           </option>

//           {agents.map(
//             (item) => (
//               <option
//                 key={item._id}
//                 value={item._id}
//               >
//                 {item.agencyName
//                   ? `${item.agencyName} - `
//                   : ""}

//                 {item.firstName ||
//                   ""}

//                 {item.lastName
//                   ? ` ${item.lastName}`
//                   : ""}

//                 {" - "}

//                 {item.email}
//               </option>
//             )
//           )}
//         </select>

//       </div>

//       {/* =====================================================
//           WALLET
//       ===================================================== */}

//       {selectedAgent && (
//         <>
//           {loadingWallet ? (
//             <div className="wallet-loading">
//               Loading wallet...
//             </div>
//           ) : (
//             <>
//               {/* =================================================
//                   AGENT INFO
//               ================================================= */}

//               {agent && (
//                 <div className="agent-profile-card">

//                   <div className="agent-profile-icon">
//                     <FaWallet />
//                   </div>

//                   <div className="agent-profile-details">

//                     <div className="agent-detail">
//                       <span>
//                         Agency
//                       </span>

//                       <strong>
//                         {agent.agencyName ||
//                           "N/A"}
//                       </strong>
//                     </div>

//                     <div className="agent-detail">
//                       <span>
//                         Agent
//                       </span>

//                       <strong>
//                         {agent.firstName ||
//                           ""}{" "}
//                         {agent.lastName ||
//                           ""}
//                       </strong>
//                     </div>

//                     <div className="agent-detail">
//                       <span>
//                         Email
//                       </span>

//                       <strong>
//                         {agent.email ||
//                           "N/A"}
//                       </strong>
//                     </div>

//                     <div className="agent-detail">
//                       <span>
//                         Phone
//                       </span>

//                       <strong>
//                         {agent.phone ||
//                           "N/A"}
//                       </strong>
//                     </div>

//                   </div>
//                 </div>
//               )}

//               {/* =================================================
//                   WALLET SUMMARY
//               ================================================= */}

//               <div className="wallet-summary-grid">

//                 {/* AVAILABLE BALANCE */}

//                 <div className="wallet-stat-card available-card">

//                   <span>
//                     Available Balance
//                   </span>

//                   <strong>
//                     {formatMoney(
//                       wallet?.balance
//                     )}
//                   </strong>

//                 </div>

//                 {/* TOTAL CREDIT */}

//                 <div className="wallet-stat-card credit-card">

//                   <span>
//                     Total Credit
//                   </span>

//                   <strong>
//                     {formatMoney(
//                       wallet?.totalCredit
//                     )}
//                   </strong>

//                   <button
//                     type="button"
//                     className="correct-credit-btn"
//                     onClick={() => {
//                       setCorrectCreditAmount(
//                         String(
//                           wallet?.totalCredit ||
//                             ""
//                         )
//                       );

//                       setError("");
//                       setMessage("");
//                     }}
//                   >
//                     Correct Total Credit
//                   </button>

//                 </div>

//                 {/* TOTAL DEBIT */}

//                 <div className="wallet-stat-card debit-card">

//                   <span>
//                     Total Debit
//                   </span>

//                   <strong>
//                     {formatMoney(
//                       wallet?.totalDebit
//                     )}
//                   </strong>

//                 </div>

//               </div>

//               {/* =================================================
//                   CREDIT CORRECTION
//               ================================================= */}

//               {correctCreditAmount !==
//                 "" && (
//                 <div className="credit-correction-card">

//                   <div className="credit-correction-header">

//                     <div>
//                       <h2>
//                         Correct Total Credit
//                       </h2>

//                       <p>
//                         Only Total Credit
//                         will be changed.
//                       </p>
//                     </div>

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setCorrectCreditAmount(
//                           ""
//                         )
//                       }
//                     >
//                       ×
//                     </button>

//                   </div>

//                   <div className="credit-correction-current">

//                     <div>
//                       <span>
//                         Current Total Credit
//                       </span>

//                       <strong>
//                         {formatMoney(
//                           wallet?.totalCredit
//                         )}
//                       </strong>
//                     </div>

//                     <div>
//                       <span>
//                         Available Balance
//                       </span>

//                       <strong>
//                         {formatMoney(
//                           wallet?.balance
//                         )}
//                       </strong>
//                     </div>

//                   </div>

//                   <label>
//                     Correct Total Credit
//                   </label>

//                   <div className="credit-correction-input">

//                     <span>
//                       ₹
//                     </span>

//                     <input
//                       type="number"
//                       min="0"
//                       step="1"
//                       value={
//                         correctCreditAmount
//                       }
//                       onChange={(e) =>
//                         setCorrectCreditAmount(
//                           e.target.value
//                         )
//                       }
//                       placeholder="Enter correct total credit"
//                     />

//                   </div>

//                   <div className="credit-correction-warning">
//                     ⚠️ Available Balance will
//                     NOT change.
//                   </div>

//                   <div className="credit-correction-actions">

//                     <button
//                       type="button"
//                       className="cancel-correction-btn"
//                       onClick={() =>
//                         setCorrectCreditAmount(
//                           ""
//                         )
//                       }
//                       disabled={
//                         correctingCredit
//                       }
//                     >
//                       Cancel
//                     </button>

//                     <button
//                       type="button"
//                       className="save-correction-btn"
//                       onClick={
//                         handleCorrectTotalCredit
//                       }
//                       disabled={
//                         correctingCredit
//                       }
//                     >
//                       {correctingCredit
//                         ? "Saving..."
//                         : "Save Correction"}
//                     </button>

//                   </div>

//                 </div>
//               )}

//               {/* =================================================
//                   ADD MONEY
//               ================================================= */}

//               <div className="wallet-card add-money-card">

//                 <div className="wallet-card-title">

//                   <div>
//                     <h2>
//                       Add Money
//                     </h2>

//                     <p>
//                       Add credit to this
//                       agent wallet
//                     </p>
//                   </div>

//                 </div>

//                 <form
//                   onSubmit={
//                     handleAddMoney
//                   }
//                 >

//                   <label>
//                     Amount
//                   </label>

//                   <div className="amount-input-wrapper">

//                     <span>
//                       ₹
//                     </span>

//                     <input
//                       type="number"
//                       min="1"
//                       step="1"
//                       placeholder="Enter amount"
//                       value={amount}
//                       onChange={(e) =>
//                         setAmount(
//                           e.target.value
//                         )
//                       }
//                     />

//                   </div>

//                   <button
//                     type="submit"
//                     disabled={
//                       addingMoney
//                     }
//                     className="add-money-btn"
//                   >
//                     {addingMoney
//                       ? "Adding..."
//                       : "Add Money"}
//                   </button>

//                 </form>

//               </div>

//               {/* =================================================
//                   TRANSACTION HISTORY
//               ================================================= */}

//               <div className="wallet-card transactions-card">

//                 <div className="wallet-card-title">

//                   <div>
//                     <h2>
//                       Transaction History
//                     </h2>

//                     <p>
//                       Wallet credit and
//                       debit history
//                     </p>
//                   </div>

//                   <span>
//                     {transactions.length}{" "}
//                     Transactions
//                   </span>

//                 </div>

//                 {loadingTransactions ? (
//                   <div className="wallet-loading">
//                     Loading transactions...
//                   </div>
//                 ) : transactions.length ===
//                   0 ? (
//                   <div className="empty-wallet">
//                     No transactions found.
//                   </div>
//                 ) : (
//                   <div className="transactions-table-wrapper">

//                     <table className="transactions-table">

//                       <thead>
//                         <tr>

//                           <th>
//                             Date
//                           </th>

//                           <th>
//                             Type
//                           </th>

//                           <th>
//                             Amount
//                           </th>

//                           <th>
//                             Balance Before
//                           </th>

//                           <th>
//                             Balance After
//                           </th>

//                           <th>
//                             Booking / PNR
//                           </th>

//                         </tr>
//                       </thead>

//                       <tbody>

//                         {transactions.map(
//                           (
//                             transaction
//                           ) => (
//                             <tr
//                               key={
//                                 transaction._id
//                               }
//                             >

//                               <td>
//                                 {formatDate(
//                                   transaction.createdAt
//                                 )}
//                               </td>

//                               <td>
//                                 <span
//                                   className={`transaction-type ${
//                                     transaction.type
//                                   }`}
//                                 >
//                                   {transaction.type ===
//                                   "credit"
//                                     ? "Credit"
//                                     : transaction.type ===
//                                       "debit"
//                                     ? "Debit"
//                                     : "Refund"}
//                                 </span>
//                               </td>

//                               <td
//                                 className={`transaction-amount ${
//                                   transaction.type
//                                 }`}
//                               >
//                                 {transaction.type ===
//                                 "debit"
//                                   ? "-"
//                                   : "+"}

//                                 {formatMoney(
//                                   transaction.amount
//                                 )}
//                               </td>

//                               <td>
//                                 {formatMoney(
//                                   transaction.balanceBefore
//                                 )}
//                               </td>

//                               <td>
//                                 {formatMoney(
//                                   transaction.balanceAfter
//                                 )}
//                               </td>

//                               <td>

//                                 {transaction.pnr ? (
//                                   <div className="booking-reference">

//                                     <strong>
//                                       PNR:{" "}
//                                       {
//                                         transaction.pnr
//                                       }
//                                     </strong>

//                                     {transaction.bookingNumber && (
//                                       <small>
//                                         {
//                                           transaction.bookingNumber
//                                         }
//                                       </small>
//                                     )}

//                                   </div>
//                                 ) : (
//                                   "-"
//                                 )}

//                               </td>

//                             </tr>
//                           )
//                         )}

//                       </tbody>

//                     </table>

//                   </div>
//                 )}

//               </div>

//             </>
//           )}
//         </>
//       )}

//       {/* =====================================================
//           NO AGENT
//       ===================================================== */}

//       {!selectedAgent &&
//         !loadingAgents && (
//           <div className="wallet-empty-state">

//             <FaWallet />

//             <h2>
//               Select an Agent
//             </h2>

//             <p>
//               Select an agent above to
//               view wallet balance and
//               manage credit.
//             </p>

//           </div>
//         )}

//     </div>
//   );
// }

// export default AgentWallet;

















































import React, {
  useEffect,
  useState,
} from "react";

import "./AgentWallet.css";

import { FaWallet } from "react-icons/fa";

import * as XLSX from "xlsx";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

function AgentWallet() {
  // =========================================================
  // STATES
  // =========================================================

  const [agents, setAgents] = useState([]);

  const [selectedAgent, setSelectedAgent] =
    useState("");

  const [wallet, setWallet] =
    useState(null);

  const [agent, setAgent] =
    useState(null);

  const [transactions, setTransactions] =
    useState([]);

  // Add money
  const [amount, setAmount] =
    useState("");

  const [addingMoney, setAddingMoney] =
    useState(false);

  // Total Credit correction
  const [
    correctCreditAmount,
    setCorrectCreditAmount,
  ] = useState("");

  const [
    correctingCredit,
    setCorrectingCredit,
  ] = useState(false);

  // Available Balance correction
  const [
    correctBalanceAmount,
    setCorrectBalanceAmount,
  ] = useState("");

  const [
    correctingBalance,
    setCorrectingBalance,
  ] = useState(false);

  // Loading
  const [
    loadingAgents,
    setLoadingAgents,
  ] = useState(true);

  const [
    loadingWallet,
    setLoadingWallet,
  ] = useState(false);

  const [
    loadingTransactions,
    setLoadingTransactions,
  ] = useState(false);

  // Messages
  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  // =========================================================
  // TOKEN
  // =========================================================

  const getToken = () => {
    return localStorage.getItem(
      "token"
    );
  };

  // =========================================================
  // HEADERS
  // =========================================================

  const getHeaders = () => {
    const token = getToken();

    return {
      "Content-Type":
        "application/json",

      ...(token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
    };
  };

  // =========================================================
  // FORMAT MONEY
  // =========================================================

  const formatMoney = (value) => {
    return `₹${Number(
      value || 0
    ).toLocaleString("en-IN")}`;
  };

  // =========================================================
  // FORMAT DATE
  // =========================================================

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

  // =========================================================
  // FETCH AGENTS
  // =========================================================

  const fetchAgents = async () => {
    try {
      setLoadingAgents(true);
      setError("");

      const response =
        await fetch(
          `${API_BASE_URL}/api/wallet/admin/agents`,
          {
            method: "GET",
            headers: getHeaders(),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to fetch agents."
        );
      }

      setAgents(
        data.agents || []
      );
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

  // =========================================================
  // FETCH WALLET + TRANSACTIONS
  // =========================================================

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

      // -------------------------------
      // WALLET
      // -------------------------------

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

      // -------------------------------
      // TRANSACTIONS
      // -------------------------------

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
        transactionData.transactions ||
          []
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

  // =========================================================
  // INITIAL LOAD
  // =========================================================

  useEffect(() => {
    fetchAgents();
  }, []);

  // =========================================================
  // AGENT CHANGE
  // =========================================================

  const handleAgentChange = (
    e
  ) => {
    const agentId =
      e.target.value;

    setSelectedAgent(agentId);

    setAmount("");

    setCorrectCreditAmount("");

    setCorrectBalanceAmount("");

    setMessage("");

    setError("");

    fetchWallet(agentId);
  };

  // =========================================================
  // REFRESH WALLET
  // =========================================================

  const refreshWallet = async () => {
    if (!selectedAgent) return;

    try {
      const response =
        await fetch(
          `${API_BASE_URL}/api/wallet/admin/agent/${selectedAgent}`,
          {
            method: "GET",
            headers: getHeaders(),
          }
        );

      const data =
        await response.json();

      if (!response.ok) return;

      setAgent(
        data.agent || null
      );

      setWallet(
        data.wallet || null
      );
    } catch (err) {
      console.error(
        "REFRESH WALLET ERROR:",
        err
      );
    }
  };

  // =========================================================
  // REFRESH TRANSACTIONS
  // =========================================================

  const refreshTransactions =
    async () => {
      if (!selectedAgent) return;

      try {
        const response =
          await fetch(
            `${API_BASE_URL}/api/wallet/admin/transactions/${selectedAgent}`,
            {
              method: "GET",
              headers: getHeaders(),
            }
          );

        const data =
          await response.json();

        if (!response.ok) return;

        setTransactions(
          data.transactions || []
        );
      } catch (err) {
        console.error(
          "REFRESH TRANSACTIONS ERROR:",
          err
        );
      }
    };

  // =========================================================
  // ADD MONEY
  // =========================================================

  const handleAddMoney = async (
    e
  ) => {
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

      setWallet(
        data.wallet || null
      );

      setAmount("");

      setMessage(
        data.message ||
          "Money added successfully."
      );

      await refreshWallet();

      await refreshTransactions();
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

  // =========================================================
  // CORRECT TOTAL CREDIT
  // =========================================================

  const handleCorrectTotalCredit =
    async () => {
      if (!selectedAgent) {
        setError(
          "Please select an agent."
        );
        return;
      }

      const newCredit =
        Number(
          correctCreditAmount
        );

      if (
        !Number.isFinite(
          newCredit
        ) ||
        newCredit < 0
      ) {
        setError(
          "Please enter a valid Total Credit."
        );
        return;
      }

      const currentCredit =
        Number(
          wallet?.totalCredit || 0
        );

      if (
        newCredit ===
        currentCredit
      ) {
        setError(
          "New Total Credit is same as current Total Credit."
        );
        return;
      }

      const confirmed =
        window.confirm(
          `Are you sure you want to correct Total Credit?\n\n` +
            `Current Total Credit: ${formatMoney(
              currentCredit
            )}\n` +
            `New Total Credit: ${formatMoney(
              newCredit
            )}\n\n` +
            `Available Balance will NOT change.`
        );

      if (!confirmed) return;

      try {
        setCorrectingCredit(
          true
        );

        setError("");
        setMessage("");

        const response =
          await fetch(
            `${API_BASE_URL}/api/wallet/admin/correct-credit`,
            {
              method: "POST",

              headers:
                getHeaders(),

              body: JSON.stringify({
                agentId:
                  selectedAgent,

                totalCredit:
                  newCredit,
              }),
            }
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to correct Total Credit."
          );
        }

        setWallet(
          data.wallet || null
        );

        setCorrectCreditAmount(
          ""
        );

        setMessage(
          data.message ||
            "Total Credit corrected successfully."
        );

        await refreshWallet();
      } catch (err) {
        console.error(
          "CORRECT TOTAL CREDIT ERROR:",
          err
        );

        setError(
          err.message ||
            "Unable to correct Total Credit."
        );
      } finally {
        setCorrectingCredit(
          false
        );
      }
    };

  // =========================================================
  // CORRECT AVAILABLE BALANCE
  // =========================================================

  const handleCorrectAvailableBalance =
    async () => {
      if (!selectedAgent) {
        setError(
          "Please select an agent."
        );
        return;
      }

      const newBalance =
        Number(
          correctBalanceAmount
        );

      if (
        !Number.isFinite(
          newBalance
        ) ||
        newBalance < 0
      ) {
        setError(
          "Please enter a valid Available Balance."
        );
        return;
      }

      const currentBalance =
        Number(
          wallet?.balance || 0
        );

      if (
        newBalance ===
        currentBalance
      ) {
        setError(
          "New Available Balance is same as current balance."
        );
        return;
      }

      const confirmed =
        window.confirm(
          `Are you sure you want to change Available Balance?\n\n` +
            `Current Balance: ${formatMoney(
              currentBalance
            )}\n` +
            `New Balance: ${formatMoney(
              newBalance
            )}\n\n` +
            `Total Credit and Total Debit will NOT change.`
        );

      if (!confirmed) return;

      try {
        setCorrectingBalance(
          true
        );

        setError("");
        setMessage("");

        const response =
          await fetch(
            `${API_BASE_URL}/api/wallet/admin/correct-balance`,
            {
              method: "POST",

              headers:
                getHeaders(),

              body: JSON.stringify({
                agentId:
                  selectedAgent,

                balance:
                  newBalance,
              }),
            }
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to correct Available Balance."
          );
        }

        setWallet(
          data.wallet || null
        );

        setCorrectBalanceAmount(
          ""
        );

        setMessage(
          data.message ||
            "Available Balance corrected successfully."
        );

        await refreshWallet();

        await refreshTransactions();
      } catch (err) {
        console.error(
          "CORRECT AVAILABLE BALANCE ERROR:",
          err
        );

        setError(
          err.message ||
            "Unable to correct Available Balance."
        );
      } finally {
        setCorrectingBalance(
          false
        );
      }
    };

  // =========================================================
  // EXPORT TRANSACTIONS TO EXCEL
  // =========================================================

  const handleExportExcel = () => {
    if (
      !transactions.length
    ) {
      setError(
        "No transactions available to export."
      );
      return;
    }

    try {
      const excelData =
        transactions.map(
          (
            transaction,
            index
          ) => ({
            "#":
              index + 1,

            Date:
              formatDate(
                transaction.createdAt
              ),

            Type:
              transaction.type ===
              "credit"
                ? "Credit"
                : transaction.type ===
                  "debit"
                ? "Debit"
                : "Refund",

            Amount:
              Number(
                transaction.amount ||
                  0
              ),

            "Balance Before":
              Number(
                transaction.balanceBefore ||
                  0
              ),

            "Balance After":
              Number(
                transaction.balanceAfter ||
                  0
              ),

            "Booking Number":
              transaction.bookingNumber ||
              "",

            PNR:
              transaction.pnr ||
              "",

            "Transaction ID":
              transaction._id ||
              "",
          })
        );

      const worksheet =
        XLSX.utils.json_to_sheet(
          excelData
        );

      const workbook =
        XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "Transactions"
      );

      worksheet["!cols"] = [
        { wch: 6 },
        { wch: 23 },
        { wch: 12 },
        { wch: 15 },
        { wch: 18 },
        { wch: 18 },
        { wch: 22 },
        { wch: 15 },
        { wch: 28 },
      ];

      const agentName =
        `${agent?.firstName || ""} ${
          agent?.lastName || ""
        }`.trim();

      const safeAgentName =
        agentName.replace(
          /[^a-zA-Z0-9-_]/g,
          "-"
        ) || "Agent";

      const fileName =
        `Wallet-Transactions-${safeAgentName}-${new Date()
          .toISOString()
          .slice(0, 10)}.xlsx`;

      XLSX.writeFile(
        workbook,
        fileName
      );

      setMessage(
        "Transaction History exported successfully."
      );
    } catch (err) {
      console.error(
        "EXPORT EXCEL ERROR:",
        err
      );

      setError(
        "Unable to export Transaction History."
      );
    }
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="agent-wallet-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="agent-wallet-header">

        <div>
          <h1>
            Agent Wallet
          </h1>

          <p>
            Manage agent wallet balance
            and transactions
          </p>
        </div>

      </div>

      {/* =====================================================
          ERROR
      ===================================================== */}

      {error && (
        <div className="wallet-alert wallet-error">

          <span>
            {error}
          </span>

          <button
            type="button"
            onClick={() =>
              setError("")
            }
          >
            ×
          </button>

        </div>
      )}

      {/* =====================================================
          SUCCESS
      ===================================================== */}

      {message && (
        <div className="wallet-alert wallet-success">

          <span>
            {message}
          </span>

          <button
            type="button"
            onClick={() =>
              setMessage("")
            }
          >
            ×
          </button>

        </div>
      )}

      {/* =====================================================
          SELECT AGENT
      ===================================================== */}

      <div className="wallet-card agent-selector-card">

        <div className="wallet-card-title">

          <div>
            <h2>
              Select Agent
            </h2>

            <p>
              Select an agent to manage
              wallet
            </p>
          </div>

          <span>
            {agents.length} Agents
          </span>

        </div>

        <select
          value={
            selectedAgent
          }
          onChange={
            handleAgentChange
          }
          disabled={
            loadingAgents
          }
        >

          <option value="">
            {loadingAgents
              ? "Loading agents..."
              : "Select an agent"}
          </option>

          {agents.map(
            (item) => (
              <option
                key={item._id}
                value={item._id}
              >
                {item.agencyName
                  ? `${item.agencyName} - `
                  : ""}

                {item.firstName ||
                  ""}

                {item.lastName
                  ? ` ${item.lastName}`
                  : ""}

                {" - "}

                {item.email}
              </option>
            )
          )}

        </select>

      </div>

      {/* =====================================================
          WALLET
      ===================================================== */}

      {selectedAgent && (
        <>

          {loadingWallet ? (
            <div className="wallet-loading">
              Loading wallet...
            </div>
          ) : (
            <>

              {/* =================================================
                  AGENT INFO
              ================================================= */}

              {agent && (
                <div className="agent-profile-card">

                  <div className="agent-profile-icon">
                    <FaWallet />
                  </div>

                  <div className="agent-profile-details">

                    <div className="agent-detail">

                      <span>
                        Agency
                      </span>

                      <strong>
                        {agent.agencyName ||
                          "N/A"}
                      </strong>

                    </div>

                    <div className="agent-detail">

                      <span>
                        Agent
                      </span>

                      <strong>
                        {agent.firstName ||
                          ""}{" "}
                        {agent.lastName ||
                          ""}
                      </strong>

                    </div>

                    <div className="agent-detail">

                      <span>
                        Email
                      </span>

                      <strong>
                        {agent.email ||
                          "N/A"}
                      </strong>

                    </div>

                    <div className="agent-detail">

                      <span>
                        Phone
                      </span>

                      <strong>
                        {agent.phone ||
                          "N/A"}
                      </strong>

                    </div>

                  </div>

                </div>
              )}

              {/* =================================================
                  WALLET SUMMARY
              ================================================= */}

              <div className="wallet-summary-grid">

                {/* AVAILABLE BALANCE */}

                <div className="wallet-stat-card available-card">

                  <span>
                    Available Balance
                  </span>

                  <strong>
                    {formatMoney(
                      wallet?.balance
                    )}
                  </strong>

                  <button
                    type="button"
                    className="correct-balance-btn"
                    onClick={() => {

                      setCorrectBalanceAmount(
                        String(
                          wallet?.balance ||
                            ""
                        )
                      );

                      setError("");
                      setMessage("");

                    }}
                  >
                    Edit Available Balance
                  </button>

                </div>

                {/* TOTAL CREDIT */}

                <div className="wallet-stat-card credit-card">

                  <span>
                    Total Credit
                  </span>

                  <strong>
                    {formatMoney(
                      wallet?.totalCredit
                    )}
                  </strong>

                  <button
                    type="button"
                    className="correct-credit-btn"
                    onClick={() => {

                      setCorrectCreditAmount(
                        String(
                          wallet?.totalCredit ||
                            ""
                        )
                      );

                      setError("");
                      setMessage("");

                    }}
                  >
                    Correct Total Credit
                  </button>

                </div>

                {/* TOTAL DEBIT */}

                <div className="wallet-stat-card debit-card">

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

              {/* =================================================
                  AVAILABLE BALANCE CORRECTION
              ================================================= */}

              {correctBalanceAmount !==
                "" && (
                <div className="balance-correction-card">

                  <div className="balance-correction-header">

                    <div>

                      <h2>
                        Edit Available Balance
                      </h2>

                      <p>
                        Admin can manually
                        change the available
                        wallet balance.
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setCorrectBalanceAmount(
                          ""
                        )
                      }
                    >
                      ×
                    </button>

                  </div>

                  <div className="balance-correction-current">

                    <div>

                      <span>
                        Current Available Balance
                      </span>

                      <strong>
                        {formatMoney(
                          wallet?.balance
                        )}
                      </strong>

                    </div>

                    <div>

                      <span>
                        Total Credit
                      </span>

                      <strong>
                        {formatMoney(
                          wallet?.totalCredit
                        )}
                      </strong>

                    </div>

                  </div>

                  <label>
                    New Available Balance
                  </label>

                  <div className="balance-correction-input">

                    <span>
                      ₹
                    </span>

                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={
                        correctBalanceAmount
                      }
                      onChange={(e) =>
                        setCorrectBalanceAmount(
                          e.target.value
                        )
                      }
                      placeholder="Enter new balance"
                    />

                  </div>

                  <div className="balance-correction-warning">
                    ⚠️ Only Available Balance
                    will change. Total Credit
                    and Total Debit will NOT
                    change.
                  </div>

                  <div className="balance-correction-actions">

                    <button
                      type="button"
                      className="cancel-balance-btn"
                      onClick={() =>
                        setCorrectBalanceAmount(
                          ""
                        )
                      }
                      disabled={
                        correctingBalance
                      }
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="save-balance-btn"
                      onClick={
                        handleCorrectAvailableBalance
                      }
                      disabled={
                        correctingBalance
                      }
                    >
                      {correctingBalance
                        ? "Saving..."
                        : "Save Balance"}
                    </button>

                  </div>

                </div>
              )}

              {/* =================================================
                  TOTAL CREDIT CORRECTION
              ================================================= */}

              {correctCreditAmount !==
                "" && (
                <div className="credit-correction-card">

                  <div className="credit-correction-header">

                    <div>

                      <h2>
                        Correct Total Credit
                      </h2>

                      <p>
                        Only Total Credit
                        will be changed.
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setCorrectCreditAmount(
                          ""
                        )
                      }
                    >
                      ×
                    </button>

                  </div>

                  <div className="credit-correction-current">

                    <div>

                      <span>
                        Current Total Credit
                      </span>

                      <strong>
                        {formatMoney(
                          wallet?.totalCredit
                        )}
                      </strong>

                    </div>

                    <div>

                      <span>
                        Available Balance
                      </span>

                      <strong>
                        {formatMoney(
                          wallet?.balance
                        )}
                      </strong>

                    </div>

                  </div>

                  <label>
                    Correct Total Credit
                  </label>

                  <div className="credit-correction-input">

                    <span>
                      ₹
                    </span>

                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={
                        correctCreditAmount
                      }
                      onChange={(e) =>
                        setCorrectCreditAmount(
                          e.target.value
                        )
                      }
                      placeholder="Enter correct total credit"
                    />

                  </div>

                  <div className="credit-correction-warning">
                    ⚠️ Available Balance will
                    NOT change.
                  </div>

                  <div className="credit-correction-actions">

                    <button
                      type="button"
                      className="cancel-correction-btn"
                      onClick={() =>
                        setCorrectCreditAmount(
                          ""
                        )
                      }
                      disabled={
                        correctingCredit
                      }
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="save-correction-btn"
                      onClick={
                        handleCorrectTotalCredit
                      }
                      disabled={
                        correctingCredit
                      }
                    >
                      {correctingCredit
                        ? "Saving..."
                        : "Save Correction"}
                    </button>

                  </div>

                </div>
              )}

              {/* =================================================
                  ADD MONEY
              ================================================= */}

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

                    <span>
                      ₹
                    </span>

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

                  <button
                    type="submit"
                    disabled={
                      addingMoney
                    }
                    className="add-money-btn"
                  >
                    {addingMoney
                      ? "Adding..."
                      : "Add Money"}
                  </button>

                </form>

              </div>

              {/* =================================================
                  TRANSACTION HISTORY
              ================================================= */}

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

                  <div className="transaction-header-actions">

                    <button
                      type="button"
                      className="export-excel-btn"
                      onClick={
                        handleExportExcel
                      }
                      disabled={
                        transactions.length ===
                        0
                      }
                    >
                      ↓ Export Excel
                    </button>

                    <span>
                      {transactions.length}{" "}
                      Transactions
                    </span>

                  </div>

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

                        </tr>

                      </thead>

                      <tbody>

                        {transactions.map(
                          (
                            transaction
                          ) => (

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

      {/* =====================================================
          NO AGENT
      ===================================================== */}

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
              manage credit.
            </p>

          </div>
        )}

    </div>
  );
}

export default AgentWallet;