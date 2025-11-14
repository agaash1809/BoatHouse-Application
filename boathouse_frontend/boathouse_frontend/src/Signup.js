
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const BankingSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

   
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let error = '';

    switch (name) {
      case 'email':

        error = value.length === 0 ? 'Email is required' : '';
        break;
      case 'password':

        error = value.length < 6 ? 'Password must be at least 6 characters long' : '';
        break;
      case 'confirmPassword':
        
        error =
          value !== formData.password ? 'Passwords do not match' : '';
        break;
      default:
        break;
    }

    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    validateInput('email', formData.email);
    validateInput('password', formData.password);
    validateInput('confirmPassword', formData.confirmPassword);


    if (!formErrors.email && !formErrors.password && !formErrors.confirmPassword) {

      console.log('Form submitted:', formData);
      axios.post(`http://localhost:3000/users`, formData)
      .then(res => {
        console.log(res.data);
        navigate('/login')
      })
      .catch(error => {
        console.log("Something went wrong " + error);
      });


    } else {
      console.log('Form has errors. Please fix them before submitting.');
    }
  };

  return (
    <div className="banking-sign-up-container">
   
      <form className="banking-sign-up-form" onSubmit={handleSubmit}>
        <h2>NEW REGISTRATION</h2>

        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="error-message">{formErrors.email}</span>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="error-message">{formErrors.password}</span>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <span className="error-message">{formErrors.confirmPassword}</span>
        </div>
<div className='rb'>

        <button type="submit">REGISTER</button>
</div>
  
      </form>
    </div>
  );
};

export default BankingSignUp;
