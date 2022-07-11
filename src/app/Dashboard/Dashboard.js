// Import React tools
import { doc } from "firebase/firestore";
import React, { useState, useEffect, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Routes, Route, useNavigate } from "react-router-dom";

// Import Backend
import {
  auth,
  db,
  getUserDbData,
  updateUserDbField
} from "../../backend/firebase";
// import { query, collection, doc, getDocs, where } from "firebase/firestore";

// Import Components
import CreatorPage from "../../pages/creator/CreatorPage/CreatorPage";
import PatronHome from "../../pages/patron/PatronHome/PatronHome";
import NavPanel from "../NavPanel/NavPanel";

// Import CSS
import styles from "./Dashboard.module.css";
// import { getUserDbData } from "../../backend/interface";

//TODO Use UID for useState (prop drill --> then check context)

const Dashboard = () => {
  // State
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  // const [userData, setUserData] = useState("");

  // Functions
  const navigate = useNavigate();
  const setCurPage = (childData) => {
    setCurrentPage(childData);
  };

  const addCreator = async (childData) => {
    try {
      // const docRef = (doc(db, "users", ))
      const querySnapshot = await getUserDbData(db, user);
      const ref = querySnapshot.docs[0].ref;

      if (querySnapshot.docs[0].data().creator === "false") {
        updateUserDbField(ref, "creator", childData);
      } else console.log(querySnapshot.docs[0].data());
      // console.log("ref:", ref.docs[0].ref);
      // console.log("doc:", doc(db, "users", "8vg3UUoLI1AECChdpfkd"));
      // const data = ref.docs[0].data();

      // if (!data.creator) {
      // }

      // console.log();
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  //TODO Turn into fetchUserData and begin collecting necessary user info from db and not userAuth
  // Fetch data
  const fetchUserName = useCallback(async () => {
    try {
      const ref = await getUserDbData(db, user);
      const data = ref.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  }, [user]);

  // Listeners
  useEffect(() => {
    if (loading) return;
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
        <Route
          path='creator'
          element={<CreatorPage addCreator={addCreator} />}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;
