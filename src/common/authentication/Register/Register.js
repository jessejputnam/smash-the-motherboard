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
import styles from "./Register.module.css";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  // Register email function
  const register = () => {
    if (!name) alert("Please enter a name");
    registerWithEmailAndPassword(name, email, password);
  };

  // Modal visual logic
  const closeModal = () => {
    return props.setModalVisible(false);
  };

  // Handle user state change
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/user/home");
  });

  // Classnames that allow modal to hide/reappear
  const RegisterClassNames =
    props.modalVisible === false
      ? `${styles.Register} hidden`
      : styles.Register;

  return (
    <div className={RegisterClassNames}>
      <div className={styles.register__container}>
        <button
          onClick={closeModal}
          className={`${styles["btn--close"]} btn--close`}
        >
          X
        </button>
        <input
          type='text'
          className={styles.register__input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
        ></input>
        <input
          type='text'
          className={styles.register__input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        ></input>
        <input
          type='password'
          className={styles.register__input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        ></input>
        <button className={styles.register__btn} onClick={register}>
          Register
        </button>
        <button
          className={`${styles.register__btn} ${styles.register__google}`}
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
