
import React, { useState } from 'react';
import './Contact.css';
import './HHome.css';

import { useNavigate } from 'react-router-dom';
const ContactPage = () => {

  const navigate = useNavigate();

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', contactInfo);
  };

  return (
    <div className='contact-body'>

        {/* start */}
<div>
        <nav class="navbar"> 
        <ul class="nav-list"> 

    

   
         
            <li onClick={()=>navigate('/Nhome')}><a >Home</a></li> 
            <li onClick={()=>navigate('/Offers')} >Offers<a ></a></li> 
            <li onClick={()=>navigate('/ContactPage')}><a >Contact</a></li> 
            <li onClick={()=>navigate('/faq')}><a >FAQ</a></li> 
            <li onClick={()=>navigate('/Aboutpage')}><a >About</a></li>
        </ul> 
         
       
        
            
    </nav> 
</div>


        {/* end */}
      <h2 className='contact-h2'>Contact Us</h2>
    <div className="contact-container">

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={contactInfo.subject}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={contactInfo.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>

        <button onClick={()=>navigate('/home')} type="submit" style={{backgroundColor:"#091a32"}}>Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactPage;
