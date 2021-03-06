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
  findAndUpdateDbField,
  addCreatorPage
} from "../../backend/firebase";

// Import Components
import CreatorEditPage from "../../pages/creator/editPages/CreatorEditPage/CreatorEditPage";
import PatronHome from "../../pages/patron/PatronHome/PatronHome";
import PatronSearch from "../../pages/patron/PatronSearch/PatronSearch";
import NavPanel from "../NavPanel/NavPanel";

// Import CSS
import styles from "./Dashboard.module.css";

//TODO Use UID for useState (prop drill --> then check context)

const Dashboard = () => {
  // State
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState({});
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

      setUserData({
        name: data.name,
        uid: data.uid,
        email: data.email,
        creator: data.creator
      });
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  }, [user]);

  const becomeCreator = async (childData) => {
    await findAndUpdateDbField(db, user, childData.field, childData.value);

    await addCreatorPage(db, user, childData);
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
  };

  return (
    <div className={styles.Dashboard}>
      <button className={styles.testBtn} onClick={test}>
        test
      </button>
      <div className={styles.navContainer}>
        <NavPanel curPage={currentPage} setCurPage={setCurPage} />
      </div>
      <div className={styles.pageContainer}>
        <Routes>
          <Route
            path='home'
            element={
              <PatronHome userName={userData.name} userEmail={userData.email} />
            }
          />

          <Route
            path='creator'
            element={
              <CreatorEditPage
                userData={userData}
                becomeCreator={becomeCreator}
              />
            }
          />

          <Route path='search' element={<PatronSearch />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
