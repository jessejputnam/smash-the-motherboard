// Import React tools
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

// Import Backend
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle
} from "../../../backend/firebase";

// Import CSS
import styles from "./Login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // Sign In Logic
  const handleEmailLogin = () => {
    logInWithEmailAndPassword(email, password);
  };

  // Modal visual logic
  const closeModal = () => {
    return props.setModalVisible(false);
  };

  const handleOpenRegisterModal = () => {
    return props.handleOpenRegisterModal({
      loginModal: false,
      registerModal: true
    });
  };

  const handleOpenResetModal = () => {
    return props.handleOpenResetModal({
      loginModal: false,
      ResetModal: true
    });
  };

  // Classnames that allow modal to hide/reappear
  const LoginClassNames =
    props.modalVisible === false ? `${styles.Login} hidden` : styles.Login;

  // Handle user state change
  useEffect(() => {
    if (loading) {
      return;
    }

    if (user) {
      navigate("/home");
    }
  }, [user, loading, navigate]);

  return (
    <div className={LoginClassNames}>
      <div className={styles.login__container}>
        <button
          onClick={closeModal}
          className={`${styles["btn--close"]} btn--close`}
        >
          X
        </button>
        <input
          type='email'
          className={styles.login__input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        ></input>
        <input
          type='password'
          className={styles.login__input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        ></input>
        <button className={styles.login__btn} onClick={handleEmailLogin}>
          Log in
        </button>
        <button
          className={`${styles.login__btn} ${styles.login__google}`}
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
        <div>
          <button
            onClick={handleOpenResetModal}
            className={styles["change-modal__btn"]}
          >
            Forgot Password?
          </button>
        </div>
        <div>
          Don't have an account?
          <button
            onClick={handleOpenRegisterModal}
            className={styles["change-modal__btn"]}
          >
            Register
          </button>
          now.
        </div>
      </div>
    </div>
  );
};

export default Login;
