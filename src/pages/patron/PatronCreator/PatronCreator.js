// Import React tools
import React, { useState } from "react";

// Import CSS
import styles from "./PatronCreator.module.css";

const PatronCreator = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [medium, setMedium] = useState("");
  const [keywords, setKeywords] = useState("");

  return (
    <div className={styles.PatronCreator}>
      <h1>Create a Creator Account</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      {/* < */}
    </div>
  );
};

export default PatronCreator;
