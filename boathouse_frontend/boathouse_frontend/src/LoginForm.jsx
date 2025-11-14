import React, {useState} from 'react';
import './RegisterCss.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

  const navigate = useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleSubmit= async (event)=>{
       event.preventDefault();

       try {
        const response = await axios.get('http://localhost:8080/boathouse/get');
        const users = response.data;
        console.log("Fetched Users: ", users); 

        const user = users.find(
            (user) => user.email === email && user.password === password
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
            <div className="reglogo"></div>
          <div className='box'>
            <span className='text-center'>Login</span>
         <form onSubmit={handleSubmit}>
            <div className='input-container'>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                <label>Username/Email</label>
                </div>
                {/* <div className='input-container'>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                <label>Password</label>
            </div> */}
            <div className='input-container'>
              <div className='password-container'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="toggle-password"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
                <label>Password</label>
              </div>
            </div>
            {/* <button className='rbutton' type="submit">LOGIN</button> */}
            <div className='logAdmin'>
            <button className='rbutton' type="submit">LOGIN</button>
            <button className='rbutton' type="submit" onClick={()=>navigate('/admin')}>ADMIN</button>
            </div>
            </form>
        
            <br/>
            <h5 className='alreadylogin' onClick={()=>navigate('/signup')}  style={{color:"white"}}>New User? Register Here</h5>
        </div>
      
    </div>
  );
};
