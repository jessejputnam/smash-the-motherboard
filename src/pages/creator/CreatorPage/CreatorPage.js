// Import React tools
// import React, { useState } from "react";

// Import CSS
import styles from "./CreatorPage.module.css";

const CreatorPage = (props) => {
  // const [name, setName] = useState("");
  // const [title, setTitle] = useState("");
  // const [genre, setGenre] = useState("");
  // const [medium, setMedium] = useState("");
  // const [keywords, setKeywords] = useState("");

  //TODO Become creator adds creator to user db, change in dashboard state, rerender this page with new props

  const becomeCreator = () => {
    props.addCreator(true);
  };

  return (
    <div className={styles.CreatorPage}>
      <h1>Creator Acount</h1>
      <button onClick={becomeCreator} className={styles.createBtn}>
        Become a Creator
      </button>
    </div>
  );
};

export default CreatorPage;
