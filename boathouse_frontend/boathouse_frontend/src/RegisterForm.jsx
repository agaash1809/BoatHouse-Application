import React,{useState} from 'react';
import './RegisterCss.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegisterForm=()=>{
     const[email,setEmail]=useState( '');
     const[password,setPassword]=useState( '');
     const[name,setName]=useState('');
     const[confirmpassword,setConfirmpassword]=useState('');
     const navigate=useNavigate();

     //show password
     const [showPassword, setShowPassword] = useState(false);
     const [showCpassword, setShowCpassword] = useState(false);

     const togglePasswordVisibility = () => {
       setShowPassword(!showPassword);
     };
     const toggleCpasswordVisibility = () => {
       setShowCpassword(!showCpassword);
     };
   
    

     const handleSubmit=(event)=>{
        event.preventDefault();
        // const userdata={
        //  Email:email,
        //  Password:password,
        //  Name:name}
         const user={name,email,password}
     
     axios.post('http://localhost:8080/boathouse/adduser', user)
     .then(res => {
         console.log(res.data);
         navigate('/login');
       })
       .catch(error => {
         console.log("Something went wrong " + error);
       });

      //   axios.post("http://localhost:8080/boathouse/adduser",user).then(()=>{console.log("New user added")},
      // navigate('/login'))
     };
     return(
        <div className='mmbody'>
         <div className='Mbody'>
          <div className="reglogo">

          </div>
            <div className='box'>
             <span className='text-center'>Register</span>
               <form onSubmit={handleSubmit}>
              <div className='input-container'>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
                <label>Name</label>
                </div>
                <div className='input-container'>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                <label>Email</label>
                </div>
                {/* <div className='input-container'>
                  <div className='passwordshow'>
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)} required style={{width:"90%"}}></input>
                 <label>Password</label> 
                <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            padding: '0px 0px',
            cursor: 'pointer',
          
         
          }}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
 
        </div>
                </div> */}
                <div className='input-container'>
              <div className='password-container'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  />
                  <label>Password</label>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="toggle-password"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
                {/* <div className='input-container'>
                <input type="password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} required></input>
                <label>Confirm Password</label>
                </div> */}
                <div className='input-container'>
              <div className='password-container'>
                <input
                  type={showCpassword ? 'text' : 'password'}
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={toggleCpasswordVisibility}
                  className="toggle-password"
                >
                  {showCpassword ? 'Hide' : 'Show'}
                </button>
                <label>Confirm Password</label>
              </div>
            </div>
                
        
             <button   type="submit" >REGISTER</button>
<br/>
             <h5 className='alreadylogin' onClick={()=>navigate('/login')}>Already have a account? login</h5>
               </form>
             
        
          
             </div>
             </div>
             </div>

     
     );


};
export default RegisterForm;