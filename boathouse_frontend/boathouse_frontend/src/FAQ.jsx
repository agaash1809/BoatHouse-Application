import React, { useState } from 'react';
import './FAQ.css';
import './HHome.css';

import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([
    {
      question: 'How do I make a booking?',
      answer: 'You can make a booking by clicking on the "Book Now" button and following the instructions.',
      isOpen: false,
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking up to 24 hours before the scheduled time.',
      isOpen: false,
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers.',
      isOpen: false,
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Yes, your payment information is processed securely through our encrypted payment gateway.',
      isOpen: false,
    },
    {
      question: 'How will I receive my booking confirmation?',
      answer: 'You will receive a booking confirmation via email immediately after completing your booking.',
      isOpen: false,
    },
    {
      question: 'Can I modify my booking?',
      answer: 'Yes, you can modify your booking by logging into your account and making the necessary changes.',
      isOpen: false,
    },
    {
      question: 'What should I do if I didn’t receive a confirmation email?',
      answer: 'Please check your spam or junk folder. If you still cannot find it, contact our support team.',
      isOpen: false,
    },
    {
      question: 'Do I need to create an account to make a booking?',
      answer: 'No, you can make a booking as a guest, but creating an account allows you to manage your bookings more easily.',
      isOpen: false,
    },
    {
      question: 'Can I book for someone else?',
      answer: 'Yes, you can enter the details of the person for whom you are making the booking.',
      isOpen: false,
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No, all fees are disclosed during the booking process.',
      isOpen: false,
    },
    {
      question: 'What happens if the service provider cancels my booking?',
      answer: 'You will receive a full refund or the option to reschedule your booking.',
      isOpen: false,
    },
    {
      question: 'Can I get a refund if I cancel my booking?',
      answer: 'Refund policies vary depending on the service provider. Please check the cancellation policy before booking.',
      isOpen: false,
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact customer support via email, phone, or live chat on our website.',
      isOpen: false,
    },
    {
      question: 'What if I need special accommodations?',
      answer: 'Please mention any special accommodations needed when making your booking, and we will do our best to accommodate your request.',
      isOpen: false,
    },
    {
      question: 'Can I view my booking history?',
      answer: 'Yes, you can view your booking history by logging into your account.',
      isOpen: false,
    },
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.',
      isOpen: false,
    },
    {
      question: 'Do you offer discounts for bulk bookings?',
      answer: 'Yes, we offer discounts for bulk bookings. Please contact our support team for more details.',
      isOpen: false,
    },
    {
      question: 'What should I do if I encounter an error during booking?',
      answer: 'If you encounter an error, please contact our support team for assistance.',
      isOpen: false,
    },
    {
      question: 'Are there any restrictions on bookings?',
      answer: 'Some bookings may have restrictions. Please read the terms and conditions before booking.',
      isOpen: false,
    },
    {
      question: 'Can I leave a review for the service?',
      answer: 'Yes, you can leave a review after your booking has been completed.',
      isOpen: false,
    },
    {
      question: 'How do I apply a promo code?',
      answer: 'You can apply a promo code during the checkout process.',
      isOpen: false,
    },
    {
      question: 'What should I do if I have a complaint?',
      answer: 'If you have a complaint, please contact our support team, and we will address your issue promptly.',
      isOpen: false,
    },
    {
      question: 'Can I book services internationally?',
      answer: 'Yes, we offer international booking options. Please select the appropriate region when booking.',
      isOpen: false,
    },
    {
      question: 'What happens if I miss my booking?',
      answer: 'If you miss your booking, please contact the service provider directly. Refund policies vary.',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.isOpen = !faq.isOpen;
        } else {
          faq.isOpen = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className='faqbody'>
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
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${faq.isOpen ? 'open' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">{faq.question}</div>
          {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
