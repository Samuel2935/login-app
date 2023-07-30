import React from 'react';
import './App.css';
import './Home.css';
import './login.css';
import './Register.css';
import './index.css';
import './NotFound.css';
import styles from './pages/header/header.css';
import ImageSlides from './imageSlides';
import { slideData } from './slideData';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Payment from './pages/Payment';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import { collection } from 'firebase/firestore';
import logo from './images/logo2.jpg';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/Login';
    });
  };

  return (
    <Router>
      <nav className="navigation">
        <Link to="/" className="brand-name">
          <img src={logo} alt="logo" className='logo' />
          {/* GUVI */}
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!isAuth ? (
              <li>
                <Link to="/Login">login</Link>
              </li>
            ) : (
              <>
                <li className="logout" onClick={signUserOut}>
                  Logout
                </li>
              </>
            )}

            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home slides={slideData} />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/ImageSlides"
          element={<ImageSlides slides={slideData} />}
        />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
        <Route
          path="/Register"
          element={<Register input={collection} />}
          isAuth={isAuth}
        />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
