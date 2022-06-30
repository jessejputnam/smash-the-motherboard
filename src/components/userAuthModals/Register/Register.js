// Import React tools
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

// Import Backend
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle
} from "../../../backend/firebase";

// Import CSS
// import "../../styles/Register.css";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter a name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/user");
  });

  const closeModal = () => {
    return props.setModalVisible(false);
  };

  const RegisterClassNames =
    props.modalVisible === false ? "Register hidden" : "Register";

  return (
    <div className={RegisterClassNames}>
      <div className='register__container'>
        <button onClick={closeModal} className='btn btn--close'>
          X
        </button>
        <input
          type='text'
          className='register__input'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
        ></input>
        <input
          type='text'
          className='register__input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        ></input>
        <input
          type='password'
          className='register__input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        ></input>
        <button className='register__btn' onClick={register}>
          Register
        </button>
        <button
          className='register__btn register__google'
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
