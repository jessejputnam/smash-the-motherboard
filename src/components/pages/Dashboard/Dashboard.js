// Import React tools
import React, { useState, useEffect, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

// Import Backend
import { auth, db } from "../../../backend/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
// import { logout } from "../../../backend/firebase";

// Import Components
import PatronHome from "../UserPages/PatronHome/PatronHome";
import NavPanel from "../../NavPanel/NavPanel";

// Import CSS
import styles from "./Dashboard.module.css";

// Use UID for useState (prop drill --> then check context)

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

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
    fetchUserName();
  }, [user, loading, navigate, fetchUserName]);

  return (
    <div className={styles.Dashboard}>
      <NavPanel userType='patron' />
      <PatronHome />
    </div>
  );
};

export default Dashboard;
