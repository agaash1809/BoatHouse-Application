// src/SidePanel.js
import React from 'react';
import './SidePanel.css';
import { useNavigate } from 'react-router-dom';
const SidePanel = ({ isOpen, togglePanel }) => {
  const navigate = useNavigate();
  return (
    <div className='tbody'>
    <div className={`side-panel ${isOpen ? 'open' : ''}`}>
      <button onClick={togglePanel} className="close-btn">
        &times;
      </button>
      <div className="content">
        
        <h3 className='sli-content'>Home</h3><br/>
        <h3 onClick={()=>navigate('/Offers')} className='sli-content'>Offer</h3><br/>
        <h3  onClick={()=>navigate("/ContactPage")} className='sli-content'>Contact</h3><br/>
        <h3 onClick={()=>navigate("/AboutPage")} className='sli-content'>About</h3><br/>
        <button  className='sli-content sli-btn' onClick={()=>navigate('/home')}>Log out</button><br/>
    
      </div>
    </div>
    </div>
  );
};

export default SidePanel;
