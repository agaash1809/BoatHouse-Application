

import React from 'react';
import Home from './Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nhome from './Nhome';
import AboutPage from './About.jsx';
import TransactionPage from './TransactionHistory.js';
import HomeLoanPage from './Loan.js';
import TransPage from './Transaction.js';
import AccountDetailsPage from './AccountDetailsPage.js';
import ContactPage from './Contact.js';
import TransSuc from './TransSuc.js';
import { ThemeProvider } from './UseContext.js';
import Paymentssss from './Paymentssss.js';

import Book from './Book.jsx';


import LoginForm from './LoginForm.jsx'
import RegisterForm from './RegisterForm.jsx'
import FAQ from './FAQ.jsx';
import Offers from './Offers.jsx';
import Payment from './Payment.jsx';

import AdminDash from './AdminDash.jsx';
import PaymentSuccessful from './PaymentSuccessful.jsx';
function App() {
  return (
    <div>
      <ThemeProvider>
      {/* <BrowserRouter> */}

      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/signup' element={<RegisterForm />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/Nhome' element={<Nhome/>}/>
        <Route path='/Aboutpage' element={<AboutPage/>}></Route>
        <Route path='/Transaction' element={<TransPage/>}></Route>
        <Route path='/Loans' element={<HomeLoanPage/>}></Route>
        <Route path='/TransactionHistory' element={<TransactionPage/>}></Route>
        <Route path='/AccountDetailsPage' element={<AccountDetailsPage/>}></Route>
        <Route path='/ContactPage' element={<ContactPage/>}></Route>
        <Route path='/transsuc' element={<TransSuc/>}></Route>
        <Route path='/Book' element={<Book/>}></Route>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/Offers' element={<Offers/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/admin' element={<AdminDash/>}/>
        <Route path='/paysuc' element={<PaymentSuccessful/>}></Route>
        <Route path='/paysuccc' element={<Paymentssss/>}></Route>

        
        
        </Routes>
      </Router>
     {/* </BrowserRouter> */}
      </ThemeProvider>
  
      
          
    </div>
  );
}

export default App;
