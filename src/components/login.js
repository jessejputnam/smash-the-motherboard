// Import React tools
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle
} from "../backend/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Import Components
// import LoadingSpinner from "./LoadingSpinner";

// Import CSS
import "../styles/Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // let loadingIcon = null;

  useEffect(() => {
    if (loading) {
      // loadingIcon = <LoadingSpinner />;
      return;
    }
    if (user) navigate("/user");
  }, [user, loading, navigate]);

  return (
    <div className='Login'>
      <div className='login__container'>
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
        <button
          className='btn login__btn'
          onClick={logInWithEmailAndPassword(email, password)}
        ></button>
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
          Don't have an account? <Link to='/register'>Register</Link> now.
        </div>
      </div>
    </div>
  );
};

export default Login;
