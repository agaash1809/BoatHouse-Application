import React from 'react';
import './About.css';
import './HHome.css';

import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();
  return (
    <div className="about-container">

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

      <header className="about-header">
        <h1>About Us</h1>
        <p>Your comfort, our priority</p>
      </header>
      <section className="about-content">
        <article className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, we started with a simple mission: to make online reservations
            easier and more accessible for everyone. With years of experience in the
            hospitality industry, our team is dedicated to providing you with the best
            service and unforgettable experiences.
          </p>
        </article>
        <article className="about-section">
          <h2>Our Values</h2>
          <p>
            We believe in transparency, customer satisfaction, and continuous improvement.
            Our platform is designed to offer seamless booking experiences, ensuring that
            every guest feels valued and appreciated.
          </p>
        </article>
        <article className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team consists of passionate professionals from various fields, including
            hospitality, technology, and customer service. Together, we work hard to meet
            your needs and exceed your expectations.
          </p>
        </article>
        <article className="about-section">
          <h2>Our Services</h2>
          <p>
            We offer a wide range of services to make your stay comfortable and enjoyable.
            From easy online reservations to personalized customer support, we are here
            to help you every step of the way.
          </p>
        </article>
        <article className="about-section">
          <h2>Contact Us</h2>
          <p>
            We love to hear from you! If you have any questions, feedback, or need
            assistance, please do not hesitate to contact us. Our support team is available
            24/7 to assist you.
          </p>
        </article>
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 Fix My Journey. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
