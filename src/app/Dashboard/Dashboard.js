// Import React tools
import React, { useState, useEffect, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Routes, Route, useNavigate } from "react-router-dom";

// Import Backend
import { auth, db } from "../../backend/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

// Import Components
// import DashRouter from "./DashRouter";
import CreatorPage from "../../pages/creator/CreatorPage/CreatorPage";
import PatronHome from "../../pages/patron/PatronHome/PatronHome";
import NavPanel from "../NavPanel/NavPanel";

// Import CSS
import styles from "./Dashboard.module.css";

//TODO Use UID for useState (prop drill --> then check context)

const Dashboard = () => {
  // State
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const [userData, setUserData] = useState("");

  // Functions
  const navigate = useNavigate();
  const setCurPage = (childData) => {
    setCurrentPage(childData);
  };

  //TODO Turn into fetchUserData and begin collecting necessary user info from db and not userAuth
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

  // Listeners
  useEffect(() => {
    if (loading) return;
    if (error) alert(error);
    if (!user) return navigate("/");
    // To give time on register to let backend write name
    setTimeout(() => fetchUserName(), 500);
  }, [user, loading, error, navigate, fetchUserName]);

  const test = () => {
    console.log(user);
  };

  return (
    <div className={styles.Dashboard}>
      <button className={styles.testBtn} onClick={test}>
        test
      </button>
      <NavPanel
        curPage={currentPage}
        setCurPage={setCurPage}
        userType='patron'
      />
      <Routes>
        <Route
          path='/home'
          element={<PatronHome userName={name} userEmail={user?.email} />}
        ></Route>
        <Route path='creator' element={<CreatorPage />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
