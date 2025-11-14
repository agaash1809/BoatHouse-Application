import React from 'react';
import './Offers.css';
import './HHome.css';

import { useNavigate } from 'react-router-dom';

const offers = [
  { id: 1, title: '50% off on your first booking', description: 'Enjoy half price on your first reservation with us.' },
  { id: 2, title: 'Free breakfast included', description: 'Book a stay and enjoy a complimentary breakfast.' },
  { id: 3, title: 'Stay 3 nights, get 1 free', description: 'Book for three nights and get the fourth night free.' },
  { id: 4, title: '20% off on weekend stays', description: 'Enjoy a weekend getaway with a 20% discount.' },
  { id: 5, title: 'Early bird discount', description: 'Book at least a month in advance and save 25%.' },
  { id: 6, title: 'Last-minute deal', description: 'Get a 30% discount on last-minute bookings.' },
  { id: 7, title: 'Romantic getaway package', description: 'Book a romantic package and get a free bottle of wine.' },
  { id: 8, title: 'Family special offer', description: 'Discounted rates for families with kids.' },
  { id: 9, title: 'Adventure package', description: 'Book an adventure package and save 15%.' },
  { id: 10, title: 'Business travel discount', description: 'Special rates for business travelers.' },
  { id: 11, title: 'Student discount', description: 'Show your student ID and get 20% off.' },
  { id: 12, title: 'Senior citizen discount', description: 'Special rates for senior citizens.' },
  { id: 13, title: 'Military discount', description: 'Active and retired military personnel get 25% off.' },
  { id: 14, title: 'Honeymoon package', description: 'Special honeymoon packages with exclusive offers.' },
  { id: 15, title: 'Spa package', description: 'Book a stay with a spa package and save 20%.' },
  { id: 16, title: 'Extended stay discount', description: 'Stay for a week or more and get special rates.' },
  { id: 17, title: 'Refer a friend', description: 'Refer a friend and both of you get a discount.' },
  { id: 18, title: 'Seasonal special', description: 'Enjoy seasonal discounts on reservations.' },
  { id: 19, title: 'Holiday special', description: 'Special rates for holiday bookings.' },
  { id: 20, title: 'Birthday special', description: 'Celebrate your birthday with a discount.' },
  { id: 21, title: 'Anniversary special', description: 'Special offers for anniversary celebrations.' },
  { id: 22, title: 'Group booking discount', description: 'Discounts for group bookings of 5 or more.' },
  { id: 23, title: 'Eco-friendly discount', description: 'Get a discount for choosing our eco-friendly options.' },
  { id: 24, title: 'Complimentary airport transfer', description: 'Book a stay and get free airport transfer.' }
];

const Offer = ({ title, description }) => (
  
  <div className="offer">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Offers = () => {
  const navigate = useNavigate();
  return (
      <div className='offer-body'>
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

    <div className="offers-container">
      {offers.map((offer) => (
        <Offer key={offer.id} title={offer.title} description={offer.description} />
      ))}
      </div>
    </div>
  );
}

export default Offers;
