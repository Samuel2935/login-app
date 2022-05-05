import React from 'react';
import './App.css';
import './Home.css'
import './login.css'
import './Register.css'
import ImageSlides from './imageSlides';
import { slideData } from './slideData';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/login';
import Register from './pages/Register';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import {signOut} from 'firebase/auth'
import { auth } from './firebase-config';
import { collection } from 'firebase/firestore';


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

<div className='GU'>GUVI</div>

  <Link to='/'> Home</Link>
  {
   
   !isAuth ? <Link to='/Login'> LogIn</Link> :
   
   (
     <>
    <button className='logout' onClick={signUserOut}>log out</button>
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
     </Routes>
   </Router>
  );
}

export default App;
