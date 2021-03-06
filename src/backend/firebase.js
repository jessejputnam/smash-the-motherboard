/**
 * Table Of Contents
 *
 * # Imports
 * # Utilities
 * # App & Service Initialization
 * # Authentication
 * # Cloud Firestore Database
 * # Cloud Storage
 */

// ###############################################
//  # IMPORTS
// ###############################################
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";

import { uuidv4 } from "@firebase/util";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  sendEmailVerification,
  connectAuthEmulator
} from "firebase/auth";

import {
  getFirestore,
  query,
  doc,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc,
  connectFirestoreEmulator
} from "firebase/firestore";

import { getStorage, ref, connectStorageEmulator } from "firebase/storage";

// ###############################################
//  # UTILITIES
// ###############################################
const uuid = uuidv4;

// ###############################################
//  # APP & SERVICE INITIALIZATION
// ###############################################
// Initialize App and Services to use throughout
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Connect Local Emulators for Prototyping
if (window.location.hostname.includes("localhost")) {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}
// ###############################################
//  # AUTHENTICATION
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
//  # CLOUD FIRESTORE DATABASE
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
  try {
  } catch (err) {
    console.error(err);
    alert("Error updating database field");
  }
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
    alert("Error finding and updating database field");
  }
};

const addCreatorPage = async (db, user, data) => {
  try {
    const creatorPage = await addDoc(collection(db, "creatorPages"), {
      desc: data.value.desc,
      genre: data.value.genre,
      keywords: data.value.keywords,
      tier1: data.value.tier1,
      tier2: data.value.tier2,
      tier3: data.value.tier3,
      title: data.value.title
    });

    // Add creatorPage ID to correct creator's user info
    findAndUpdateDbField(db, user, "pageID", creatorPage.id);
  } catch (err) {
    console.error(err);
    alert("Error adding creator data to public facing page");
  }
};

//! EXPERIMENTING BEGINS HERE

// Search through Creators
const findCreatorsByKeyword = async (db, keywords) => {
  // try {
  //   const usersRef = doc(collection(db, "users", "creator"));
  //   const q = query(
  //     usersRef,
  //     where("keywords", "array-contains-any", keywords)
  //   );
  //   const querySnapshot = await getDocs(q);
  //   return querySnapshot;
  // } catch (err) {
  //   console.error(err);
  //   alert("Error finding creators");
  // }
  // const q = query(
  //   collection(db, "users"),
  //   where("keywords", "array-contains-any", keywords)
  // );
  // const docs = await getDocs(q);
  // return docs.docs[0].data;
  // querySnapshot.forEach()
  // console.log();
};

// ###############################################
//  # CLOUD STORAGE
// ###############################################

const storageRef = ref(storage);
console.log(storageRef);

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
  getDocRefFromQuery,
  uuid,
  addCreatorPage,
  findCreatorsByKeyword
};
