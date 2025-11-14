import React, { useState } from 'react';
import './Payment.css';

import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log('Payment details submitted:', formData);
    alert("payment successful")
    navigate('/Nhome')
    // Handle form submission logic here
  };

  return (
    <div className="pay-body">
    <div className="payment-container">
      <h1>Payment Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
       
     
        <button  onClick={()=>handleSubmit()} className="submit-btn">Submit Payment</button>
      </form>
    </div>
    </div>
  );
};

export default Payment;
