import React from 'react'

import {auth, provider} from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export default function login({setIsAuth}) {
  let navigate = useNavigate();

  const signInwithGoogle = ()=>{
    signInWithPopup(auth, provider).then((result)=>{
      localStorage.setItem=("isAuth", true)
      setIsAuth(true)
      navigate('/Register')
    })
  }

  return (
    <>
    <div className='login'>
      <h3>Login...</h3>
<p>signUp with Google to continue</p> 
<button className='login-with-google-btn' onClick={signInwithGoogle}>
  sign up with Google
  </button>     

    </div>
    </>
  )
}
