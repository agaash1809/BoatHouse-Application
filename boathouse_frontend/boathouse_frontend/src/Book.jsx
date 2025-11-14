import React, { useState } from 'react'
import './Book.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Book() {
  const navigate = useNavigate();
    const [name,setName]=useState('');
    const[numOfPeople,setNumofPeople]=useState('');
    const[time,setTime]=useState('');
    const[date,setDate]=useState('');
    const[totalhrs,setTotalhts]=useState('');
    
    
    const handleSubmit=(event)=>
      {
        event.preventDefault();
        // setName(' ');
        // setNumofPeople(' ');
        // setTime(' ');
        // setDate(' ');
        // setTotalhts(' ');
        const details={name,numOfPeople,time,date,totalhrs}

      axios.post("http://localhost:8080/boathouse/book",details).then(()=>{console.log("booking")},navigate('/payment'))

    }

  return (
    <div>
          <div className='Mbody'>
            <div className="reglogo"></div>
            <div className='box'>
             <span className='text-center'>Make My Weekend</span>
               <form onSubmit={handleSubmit}>
              <div className='input-container'>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
                <label>Name</label>
                </div>
                <div className='input-container'>
                <input type="number" value={numOfPeople} onChange={(e)=>setNumofPeople(e.target.value)} required></input>
                <label>Total Number of People</label>
                </div>
                <div className='input-container'>
                <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} required></input>
                <label>Time</label>
                </div>
                <div className='input-container'>
                <input type="number" value={totalhrs} onChange={(e)=>setTotalhts(e.target.value)} required></input>
                <label>Total Hours</label>
                </div>
                <div className='input-container'>
                <input type="Date" value={date} onChange={(e)=>setDate(e.target.value)} required></input>
                <label>Date</label>
                </div>
          
                
               <button   type="submit" className='btnnn' >Book Now</button>
        
               </form>
             
        
          
             </div>
             </div>
      
    </div>
  )
}
