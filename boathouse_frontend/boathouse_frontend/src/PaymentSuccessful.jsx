import React, { useState } from 'react';
import './PaymentSuccessful.css';


function PaymentSuccessful() {
    const [paid, setPaid] = useState(false);


    const handlePayNow = () => {
        // Simulate payment processing
        setPaid(true);
        setTimeout(() => setPaid(false), 3000); // Reset after 3 seconds
  
    };

    return (
        <div className="App">
            {paid ? (
                <div className="success-checkmark">
                    <div className="check-icon">
                        <span className="icon-line line-tip"></span>
                        <span className="icon-line line-long"></span>
                        <div className="icon-circle"></div>
                        <div className="icon-fix"></div>
                    </div>
                </div>
            ) : (
                <button className="pay-now-btn" onClick={handlePayNow}>
                    Pay Now
                </button>
            )}
        </div>
    );
}

export default PaymentSuccessful;
