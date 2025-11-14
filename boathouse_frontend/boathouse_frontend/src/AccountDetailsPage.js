
import React, { useState } from 'react';
import './AccountDetailsPage.css';

const AccountDetailsPage = () => {
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: '123456789',
    accountHolder: 'John Doe',
    balance: 5000.0,
    currency: 'USD',
    accountType: 'Savings Account',
    lastTransaction: {
      date: '2023-11-28',
      description: 'Deposit',
      amount: 1000.0,
    },
  });

  return (
    <div>
    
    </div>
  );
};

export default AccountDetailsPage;

