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
    <div className='login-house'>
    <div className='login'>
      <h3>Login...</h3>
<button className='login-with-google-btn' onClick={signInwithGoogle}>
  with Google
  </button>     

    </div>
    </div>
  )
}
