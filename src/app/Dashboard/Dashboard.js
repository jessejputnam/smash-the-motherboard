// Import React tools
import React, { useState, useEffect, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// Import Backend
import { auth, db } from "../../backend/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

// Import Components
import PatronHome from "../../pages/patron/PatronHome/PatronHome";
import NavPanel from "../NavPanel/NavPanel";

// Import CSS
import styles from "./Dashboard.module.css";

// Use UID for useState (prop drill --> then check context)

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState("/home");

  const navigate = useNavigate();

  const fetchUserName = useCallback(async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  }, [user]);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    setTimeout(() => fetchUserName(), 500);
  }, [user, loading, navigate, fetchUserName]);

  const test = () => {
    console.log(user);
  };

  return (
    <div className={styles.Dashboard}>
      <button onClick={test}>test</button>
      <NavPanel currentPage={currentPage} userType='patron' />
      <Routes>
        <Route
          path='/home'
          element={<PatronHome userName={name} userEmail={user?.email} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Dashboard;
