import React from 'react';
import './App.css';
import './Home.css'
import './login.css'
import './Register.css'
import './index.css'
import './NotFound.css'
import ImageSlides from './imageSlides';
import { slideData } from './slideData';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/login';
import Register from './pages/Register';
import Payment from './pages/Payment';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {signOut} from 'firebase/auth'
import { auth } from './firebase-config';
import { collection } from 'firebase/firestore';
import logo from './images/logo.jpg';



function App() {

const[isAuth, setIsAuth] = useState(false);


const signUserOut = () =>{
     
signOut(auth).then(()=>{
  localStorage.clear()
  setIsAuth(false)
  window.location.pathname = '/login';
  

})
}


  return (
   <Router>

     
<nav>

<div className='GU'>
  <img style={{height:'40px', width:'40px', borderRadius:'50%'}} src={logo} alt='logo'></img>
</div>

  <Link to='/'> Home</Link>
  {
   
   !isAuth ? <Link to='/Login'> LogIn</Link> :
   
   (
     <>
    <button className='logout' onClick={signUserOut}>Logout</button>
    {/* <Link to='/Register'> Register </Link>  */}
    </>
   )
  
  
   }
 <Link to = "/About">About</Link>

</nav>
     <Routes>
       <Route path='/' element = {<Home slides={slideData}/>}/>
       <Route path='/About' element = {<About/>}/>
       <Route path='/ImageSlides' element = {<ImageSlides slides={slideData} />}/>
       <Route path='/Login' element = {<Login setIsAuth={setIsAuth}/>}/>
       <Route path='/Register' element = {<Register input={collection} />} isAuth={isAuth}/>
       <Route path='/Payment' element = {<Payment/>}/>
       <Route path='*' element = {<NotFound/>}/>
     </Routes>
   </Router>
  );
}

export default App;
