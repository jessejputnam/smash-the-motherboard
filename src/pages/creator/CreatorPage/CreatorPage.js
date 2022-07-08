// Import React tools
import React, { useState } from "react";

// Import CSS
import styles from "./CreatorPage.module.css";

const CreatorPage = (props) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [medium, setMedium] = useState("");
  const [keywords, setKeywords] = useState("");

  return (
    <div className={styles.CreatorPage}>
      <h1>Creator Acount</h1>
      <button className={styles.createBtn}>Become a Creator</button>
    </div>
  );
};

export default CreatorPage;
