// import React, { useState } from 'react';
// import './TransactionHistory.css'; // Import your CSS file

// const TransactionPage = () => {
//   const [transactions, setTransactions] = useState([
//     { date: '2023-11-27', description: 'Online Purchase', amount: -50.00 },
//     { date: '2023-11-26', description: 'Deposit', amount: 100.00 },
//     { date: '2023-11-25', description: 'ATM Withdrawal', amount: -20.00 },
//   ]);

//   const loadTransactions = () => {
//     // In a real application, you would fetch data from a server here
//     // For simplicity, we're using the initial state again
//     setTransactions([
//       { date: '2023-11-27', description: 'Online Purchase', amount: -50.00 },
//       { date: '2023-11-26', description: 'Deposit', amount: 100.00 },
//       { date: '2023-11-25', description: 'ATM Withdrawal', amount: -20.00 },
//     ]);
//   };

//   return (
//     <div className="transaction-container">
//       <h2>Bank Transactions</h2>

//       <table className="transaction-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Description</th>
//             <th>Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction, index) => (
//             <tr key={index}>
//               <td>{transaction.date}</td>
//               <td>{transaction.description}</td>
//               <td>{transaction.amount.toFixed(2)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button className="load-button" onClick={loadTransactions}>
//         Load Transactions
//       </button>
//     </div>
//   );
// };

// export default TransactionPage;
import React, { useState } from 'react';
import './TransactionHistory.css';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([
    { date: '2023-11-27', description: 'Online Purchase', amount: -50.00 },
    { date: '2023-11-26', description: 'Deposit', amount: 100.00 },
    { date: '2023-11-25', description: 'ATM Withdrawal', amount: -20.00 },
  ]);

  const loadTransactions = () => {
    // In a real application, you would fetch data from a server here
    // For simplicity, we're using the initial state again
    setTransactions([
      { date: '2023-11-27', description: 'Online Purchase', amount: -50.00 },
      { date: '2023-11-26', description: 'Deposit', amount: 100.00 },
      { date: '2023-11-25', description: 'ATM Withdrawal', amount: -20.00 },
    ]);
  };

  return (
    <div className="transaction-container">
      <h2>Bank Transactions</h2>

      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td className={transaction.amount < 0 ? 'expense' : 'income'}>
                {transaction.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="load-button" onClick={loadTransactions}>
        Load Transactions
      </button>
    </div>
  );
};

export default TransactionPage;
