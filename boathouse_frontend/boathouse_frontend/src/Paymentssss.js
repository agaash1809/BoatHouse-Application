import React,{useState} from 'react';
import './Paymentsss.css';

export default function Paymentssss() {

    const [amount,setamount] = useState('');
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(amount === ""){
        alert("please enter amount");
      }
      else{
        var options = {
          key: "rzp_test_s8PR8vRnD734bI",
          key_secret:"QprI5zV7T27H4wcCfsCYcKUz",
          amount: amount *100,
          currency:"INR",
          name:"ASHWIN",
          description:"for payment",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name:"Ashwin",
            email:"ashwin@gmail.com",
            contact:"8548285832"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
    }
  return (
    <div className="App">
      <h2>Razorpay payment integration</h2>
      <br/>
      <input type="text" placeholder='Enter Amount' value={amount}onChange={(e)=>setamount(e.target.value)}/>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    
  )
}



