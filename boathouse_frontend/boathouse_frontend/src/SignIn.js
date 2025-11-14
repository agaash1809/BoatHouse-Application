

import React, { useRef, useState, useContext } from 'react';
import { TextField , Button , Container} from '@mui/material';
import {Link, useNavigate } from 'react-router-dom';
import './SignIn.css'

import axios from 'axios';

const SignIn= () => {

  const [email, setMailid] = useState('');
  const handleMail = (event) => { 
      setMailid(event.target.value) 
  }
  const [password, setPassword] = useState('');
  const handlePassword = (event) => { 
      setPassword(event.target.value) 
  }
  const handleSubmit = (event) => {

    event.preventDefault();
    axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
      .then(res=>{
        if(res.data.length>0)
        {
           navigate("/Nhome");
        }
        else{
          alert("User account doesn't exist");
        }
      }

        )
      
  }

  let navigate=useNavigate();
  let gotosignup=useNavigate();

  return (
    <div className='sbody'>
    <>
    <div className='logoof'>
    </div>
    <div className='bigrow'>

    <Container  maxWidth='xs' className="column2" >

        <h1 id="head">Login</h1>
        <form onSubmit={handleSubmit}>

          <TextField variant="outlined" margin="normal" required fullWidth label="Email" onChange={handleMail}>
              {email}
          </TextField>

          <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password" onChange={handlePassword}>
              {password}
          </TextField>

          

          <Button type="submit" fullWidth variant="contained" color="primary">
            Log In
          </Button>
          <br></br>
          <br></br>
       
           <br></br>      
             <div className="rs">         
              <label onClick={()=>navigate('/signup') }  >New User? Register</label>
       </div>
        </form>
    </Container>
    </div>
    </>
    </div>
  );
};

export default SignIn ;