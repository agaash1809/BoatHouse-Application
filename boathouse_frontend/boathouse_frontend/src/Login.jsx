import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import axios from 'axios';
const Login=()=>{
    const[username,setUsername]=useState(' ');
    const[password,setPassword]=useState(' ');
    const[error,setError] = useState(' ');
    const HandleSubmit = async (event)=>{
        event.preventDefault();
        // console.log("Success");
        try {
            // Fetch users from the mock server
            const response = await axios.get(`http://localhost:8080/users`);
            const users = response.data;
            console.log("Fetched Users: ", users); // Debug log
    
            // Check if credentials match any user
            const user = users.find(
                (user) =>  user.password === password && user.username === username
            );
            console.log("Matched User: ", user); // Debug log
    
            if (user) {
                // Redirect to another page upon successful login
                navigate('/NHome'); // Update with the correct path
            } else {
                // Show error message if login fails
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error("Error fetching users: ", error); // Debug log
        }
        
    }
    const navigate=useNavigate();



   


    return(
        <div id="abc">
        <div id="sc">
            <br></br>
            <h2>
                Login Form
            </h2>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>USERNAME</label>
                    <br></br>
                    <input type='text'
                     value = {username}
                     onChange={(e) =>setUsername(e.target.value)}
                     required
                     />
                </div>
                <br></br>
                <div>
                    <label>PASSWORD</label>
                     <br></br>
                    <input type='password' 
                     value = {password}
                    onChange={(e) =>setPassword(e.target.value)}
                    required
                    />
                </div>
                <br></br>
                <div className="sub">
                    <button>Login</button>
                    </div>

            </form>
            <br></br>
        </div>
            <div className="dont">
            <a>Don't have an account?   </a>
                    <button onClick={()=>{navigate("/Register")}}>Register</button>
                 {error && <p id='error'>{error}</p>}
                    </div>
            </div>  
                
    )
}
export default Login;
