import React, { useState } from 'react';
import './Loan.css';

import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();

const TransPage = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [name, setName] = useState('');

  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mpin, setMpin] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
 
    const principal = parseFloat(loanAmount);
    const term = parseInt(loanTerm);
    const rate = parseFloat(interestRate) / 100 / 12;

    const numerator = principal * rate * Math.pow(1 + rate, term);
    const denominator = Math.pow(1 + rate, term) - 1;

    const monthlyPaymentResult = (numerator / denominator).toFixed(2);
    setMonthlyPayment(monthlyPaymentResult);
  };

  const navigate = useNavigate();
  return (
    <div className="home-loan-container">
      <h2>Transaction</h2>

      <div className="form-container">
        <label>
          
          Beneficiary Name:*
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          
          Beneficiary Account Number:*
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </label>

        <label>
          Amount:*
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </label>

        <label>
          Purpose
          <input
            type="text"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
        <label>
          MPIN*
          <input
            type="password" required
            value={mpin}
            onChange={(e) => setMpin(e.target.value)}
          />
        </label>
        

        <button onClick={()=>navigate('/transsuc')}>Transfer Amount</button>
      </div>


    </div>
  );
};

export default TransPage;
