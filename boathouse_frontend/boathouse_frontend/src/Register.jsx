import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'
import axios from 'axios'
import Login from './Login.jsx';
import Home from './Home';
const Register=()=>{
    const navigate=useNavigate();
    const[firstname,setfirstname]=useState(' ');
    const[lastname,setlastname]=useState(' ');
    const[username,setUsername]=useState(' ');
    const[password,setPassword]=useState(' ');
    const HandleSubmit = (event)=>{
        event.preventDefault();
        // console.log("Success");
        const userdata={
            firstname:firstname,
            lastname:lastname,
            username:username,
            password:password,
        }
        axios.post('http://localhost:8080/users', userdata)
        .then(res => {
            console.log(res.data);
            navigate('/login');
          })
          .catch(error => {
            console.log("Something went wrong " + error);
          });
        // setUsername(' ');
        // setPassword(' ');
        // alert(The name you entered was :${username})
    }
    return(
        <div id="abc">
           <div id="de">
            <br></br>
            <h2>
                Registration Form
            </h2>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>FIRSTNAME</label>
                    {/* <br></br> */}
                    <input type='text'
                     value = {firstname}
                     onChange={(e) =>setfirstname(e.target.value)}
                     required
                     />
                </div>
                <br></br>
                <div>
                    <label>LASTNAME</label>
                    {/* <br></br> */}
                    <input type='text'
                     value = {lastname}
                     onChange={(e) =>setlastname(e.target.value)}
                     required
                     />
                </div>
                <br></br>
                <div>
                    <label>USERNAME</label>
                    {/* <br></br> */}
                    <input type='text'
                     value = {username}
                     onChange={(e) =>setUsername(e.target.value)}
                    required
                    />
                </div>
                <br></br>
                <div>
                    <label>PASSWORD</label>
                    <input type='password' minLength={8}
                     value = {password}
                     onChange={(e) =>setPassword(e.target.value)}
                     required
                     />
                </div>
                <br></br>
                <div className="sub">
                    <button>Register</button>
                    </div>
            </form>
            <br></br>
            <div>
            <a>Already have an account?   </a>
                    <button onClick={()=>{navigate("/Login")}}>Login</button>
                    </div>
            </div>  
        </div>
           
    )
}
export default Register;
