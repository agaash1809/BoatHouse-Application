import React, {useState} from 'react';
import './RegisterCss.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {

  const navigate = useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit= async (event)=>{
       event.preventDefault();

       try {
        const response = await axios.get('http://localhost:8080/users');
        const users = response.data;
        console.log("Fetched Users: ", users); 

        const user = users.find(
            (user) => user.Email === email && user.Password === password
        );
        console.log("Matched User: ", user); 

        if (user) {
            navigate('/Nhome'); 
        } else {
            alert('Invalid email or password');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
        console.error("Error fetching users: ", error); 
    }

    };
  return (
    <div className='Mbody'>
          <div className='box'>
            <span className='text-center'>Login</span>
         <form onSubmit={handleSubmit}>
            <div className='input-container'>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                <label>Username/Email</label>
                </div>
                <div className='input-container'>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                <label>Password</label>
            </div>
            <div className='logAdmin'>
            <button className='rbutton' type="submit">LOGIN</button>
            <button className='rbutton' type="submit">ADMIN</button>
            </div>
            </form>
        
            <br/>
            <a onClick={()=>navigate('/signup')}  style={{color:"white"}}>New User? Register Here</a>
        </div>
      
    </div>
  );
};
