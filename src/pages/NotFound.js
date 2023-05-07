import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='not'>
      <div className='cry'>
                    <h1>Oops! You lost path.</h1>
                    <p>Try the links: </p>
                    <Link to="/">Home</Link>
                    <Link to="/Login">Login</Link>
                
      </div>
    </div>
  );
}
