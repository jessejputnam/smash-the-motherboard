// Import React tools
import React, { useState } from "react";

// Import CSS
import styles from "./CreatorPage.module.css";

// Import images
import bannerPlaceholder from "../../../assets/images/banner-placeholder.png";

const CreatorPage = (props) => {
  // const [name, setName] = useState("");
  // const [title, setTitle] = useState("");
  // const [genre, setGenre] = useState("");
  // const [medium, setMedium] = useState("");
  // const [keywords, setKeywords] = useState("");
  const [banner, setBanner] = useState(bannerPlaceholder);

  //TODO Become creator adds creator to user db, change in dashboard state, rerender this page with new props

  const becomeCreator = () => {
    props.becomeCreator({ field: "creator", value: true });
  };

  const test = async () => {
    // console.log(await bannerImg);
  };

  return (
    <div className={styles.CreatorPage}>
      <h1>Creator Acount</h1>
      {props.isCreator === false ? (
        <button onClick={becomeCreator} className={styles.createBtn}>
          Become a Creator
        </button>
      ) : null}
      <main>
        <div
          className={styles.banner}
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
        <button onClick={test}>Test</button>
      </main>
    </div>
  );
};

export default CreatorPage;
