import React from 'react';

import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInwithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem = ('isAuth', true);
      setIsAuth(true);
      navigate('/Register');
    });
  };

  return (
    <div className="login-house">
      <div className="login">
      <h3>Click to login!! </h3>
        <button  onClick={signInwithGoogle}>
          Login
        </button>
      </div>
    </div>
  );
}
