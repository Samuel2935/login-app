import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import styles from '../Register.css'


export default function Register({ isAuth, input }) {
  const [fullName, setFullName] = useState('');
  const [skill, setSkill] = useState('');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);

  const postCollection = collection(db, 'POSTS');
  let navigate = useNavigate();
  const addReg = async () => {
    await addDoc(postCollection, {
      skill,
      phone,
      nationality,
      email,
      fullName: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        fullName,
      },
      
    });
    navigate('/Payment');
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="register">
      <div className="reg">
        <h3>Register here!! </h3>

        <form name="myForm" className="myForm">
          <div>
            <input
              placeholder="Name"
              onChange={(event) => {
                setFullName(event.target.value);
              }}
              required
            />
          </div>
          <div>
            <input
              placeholder="skill"
              onChange={(event) => {
                setSkill(event.target.value);
              }}
              required
            />
          </div>

          <div>
            <input
              placeholder="phone"
              type="number"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              required
            />
          </div>
          <div>
            <input
              placeholder="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
          </div>

          <div>
            <input
              placeholder="nationality"
              onChange={(event) => {
                setNationality(event.target.value);
              }}
              required
            />
          </div>

          <div>
            <input placeholder="qualification" required />
          </div>
          <div>
            <select>
              <option>sex</option>
              <option>male</option>
              <option>female</option>
            </select>
          </div>
          <div>
            <select placeholder="skill">
              <option>select skill</option>
              <option>web development</option>
              <option>web design</option>
              <option>Barbering</option>
            </select>
          </div>

          <div>
            <button type="submit" className="btn-1" onClick={addReg}>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
