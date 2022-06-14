// import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

export default function Register({ isAuth, input }) {
  const [fullName, setFullName] = useState('');
  const [course, setCourse] = useState('');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);

  const postCollection = collection(db, 'POSTS');
  let navigate = useNavigate();
  const addReg = async () => {
    await addDoc(postCollection, {
      course,
      phone,
      nationality,
      email,
      fullName: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        fullName,
      },
    });
    navigate('/');
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/login');
    }
  }, []);

  const styles = {
    marginLeft: '6rem',
    borderRadius: '3rem',
    padding: '.5rem',
    width: '7rem',
    cursor: 'pointer',
  };
  return (
    <div className="register">
      <div className="reg">
        <h1>Register!!</h1>

        <>
          <div>
            <label></label>
            <input
              placeholder="fullName"
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
          </div>
          <div>
            <label></label>
            <input
              placeholder="course"
              onChange={(event) => {
                setCourse(event.target.value);
              }}
            />
          </div>

          <div>
            <label></label>
            <input
              placeholder="phone number"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>
          <div>
            <label></label>
            <input
              placeholder="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div>
            <label></label>
            <input
              placeholder="nationality"
              onChange={(event) => {
                setNationality(event.target.value);
              }}
            />
          </div>

          <div>
            <label></label>
            <input placeholder="qualification" />
          </div>

          <div>
            <label> sex </label> <strong>:</strong>
            <input type="radio" value="male" /> Male
            <input type="radio" value="female" /> Female
          </div>

          <div>
            <button style={styles} disabled={!input} onClick={addReg}>
              submit
            </button>
          </div>
        </>
      </div>
    </div>
  );
}
