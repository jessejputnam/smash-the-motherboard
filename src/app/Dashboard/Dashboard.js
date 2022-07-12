// Import React tools
import React, { useState, useEffect, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// Import Backend
import {
  auth,
  db,
  getUserDbQuery,
  getUserDbInfo,
  findAndUpdateDbField
} from "../../backend/firebase";
// import { query, collection, doc, getDocs, where } from "firebase/firestore";

// Import Components
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
  const [email, setEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [isCreator, setIsCreator] = useState("");
  const [currentPage, setCurrentPage] = useState("");

  // Functions
  const navigate = useNavigate();
  const location = useLocation();
  const setCurPage = (childData) => {
    setCurrentPage(childData);
  };

  // Fetch data
  const fetchUserData = useCallback(async () => {
    try {
      const ref = await getUserDbQuery(db, user);
      const data = ref.docs[0].data();

      setName(data.name);
      setEmail(data.email);
      setUserID(data.uid);
      setIsCreator(data.creator);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  }, [user]);

  const becomeCreator = async (childData) => {
    await findAndUpdateDbField(db, user, childData.field, childData.value);
    fetchUserData();
  };

  // Listener for user auth
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    // To give time on register to let backend write name
    setTimeout(() => fetchUserData(), 500);
  }, [user, loading, error, navigate, fetchUserData]);

  // Listener for current page
  useEffect(() => {
    const navName = location.pathname.split("/user/")[1];
    setCurrentPage(navName);
  }, [location.pathname]);

  const test = async () => {
    console.log(await getUserDbInfo(db, user));
    // console.log(name, email, userID, isCreator);
  };

  return (
    <div className={styles.Dashboard}>
      <button className={styles.testBtn} onClick={test}>
        test
      </button>
      <div className={styles.navContainer}>
        <NavPanel
          curPage={currentPage}
          setCurPage={setCurPage}
          isCreator={isCreator}
        />
      </div>
      <div className={styles.pageContainer}>
        <Routes>
          <Route
            path='/home'
            element={<PatronHome userName={name} userEmail={user?.email} />}
          ></Route>
          <Route
            path='creator'
            element={
              <CreatorPage
                isCreator={isCreator}
                becomeCreator={becomeCreator}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
