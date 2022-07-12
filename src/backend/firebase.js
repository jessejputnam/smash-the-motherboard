// IMPORTS
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc
} from "firebase/firestore";

// Initialize App and Services to use throughout
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ###############################################
//  AUTHENTICATION
// ###############################################

// Google Authentication
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        creator: false
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Email authentication
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    let user;
    const res = await createUserWithEmailAndPassword(auth, email, password);

    // Add displayName to user profile in database
    await updateProfile(auth.currentUser, { displayName: name })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      })
      .then((user = res.user));

    // Add user to database
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      creator: false
    });

    await sendEmailVerification(auth.currentUser)
      .catch((err) => {
        console.error(err);
        alert(err.message);
      })
      .then(alert("Email verification sent!"));
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");

    // Return success to give check to close modal
    return "success";
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

// ###############################################
//  Cloud Firestore Database
// ###############################################

// Get Unique User data from firestore Users db as QuerySnapshot
const getUserDbQuery = async (db, user) => {
  const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  return await getDocs(q);
};

// Get docRef from QuertSnapshot
const getDocRefFromQuery = async (db, user) => {
  const querySnapshot = await getUserDbQuery(db, user);
  return querySnapshot.docs[0].ref;
};

// Get readable object of user db info for user
const getUserDbInfo = async (db, user) => {
  const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  const docs = await getDocs(q);
  return docs.docs[0].data();
};

// Update specific fields in User Database
const updateDbFieldValue = async (docRef, field, value) => {
  await updateDoc(docRef, { [field]: value });
};

// Change firestore db field
const findAndUpdateDbField = async (db, user, field, value) => {
  try {
    const querySnapshot = await getUserDbQuery(db, user);
    const ref = querySnapshot.docs[0].ref;
    updateDbFieldValue(ref, field, value);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  getUserDbQuery,
  getUserDbInfo,
  findAndUpdateDbField,
  getDocRefFromQuery
};
