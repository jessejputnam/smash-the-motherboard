// Import React tools
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle
} from "../backend/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Import CSS
import "../styles/Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleEmailLogin = () => {
    logInWithEmailAndPassword(email, password);
  };

  const closeModal = () => {
    return props.closeModal(false);
  };

  const LoginClassNames =
    props.modalVisible === false ? "Login hidden" : "Login";

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/user");
  }, [user, loading, navigate]);

  return (
    <div className={LoginClassNames}>
      <div className='login__container'>
        <button onClick={closeModal} className='btn btn--close'>
          X
        </button>
        <input
          type='text'
          className='login__input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        ></input>
        <input
          type='password'
          className='login__input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        ></input>
        <button className='btn login__btn' onClick={handleEmailLogin}>
          Log in
        </button>
        <button
          className='btn login__btn login__google'
          onClick={signInWithGoogle}
        >
          Login with Google
        </button>
        <div>
          <Link to='/reset'>Forgot Password?</Link>
        </div>
        <div>
          Don't have an account?{" "}
          <Link to='/register'>
            <span className='register__btn'>Register</span>
          </Link>{" "}
          now.
        </div>
      </div>
    </div>
  );
};

export default Login;
