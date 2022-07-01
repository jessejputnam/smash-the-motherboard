// Import React Tools
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

// Import Backend
import { auth, sendPasswordReset } from "../../../backend/firebase";

// Import CSS
import styles from "./Reset.module.css";

const Reset = (props) => {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const closeModal = () => {
    return props.setModalVisible(false);
  };

  const ResetClassNames =
    props.modalVisible === false ? `${styles.Reset} hidden` : styles.Reset;

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/user");
  }, [loading, user, navigate]);

  return (
    <div className={ResetClassNames}>
      <div className={styles.reset__container}>
        <button
          onClick={closeModal}
          className={`${styles["btn--close"]} btn--close`}
        >
          X
        </button>
        <input
          type='text'
          className={styles.reset__input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        ></input>
        <button className={styles.reset__btn} onClick={sendPasswordReset}>
          Send password reset email
        </button>
      </div>
    </div>
  );
};

export default Reset;
