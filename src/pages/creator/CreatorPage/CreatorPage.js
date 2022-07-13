// Import React tools
import React, { useState } from "react";

// Import CSS
import styles from "./CreatorPage.module.css";

// Import images
import bannerPlaceholder from "../../../assets/images/banner-placeholder.png";
import profilePlaceholder from "../../../assets/images/userPlaceholder.png";
import editIcon from "../../../assets/icons/edit-icon.svg";

const EditBtn = () => {
  const getEl = (e) => {
    console.log(e.target.parentElement);
  };

  return (
    <button onClick={getEl} className={styles.EditBtn}>
      <img src={editIcon} alt='Edit' />
    </button>
  );
};

const CreatorPage = (props) => {
  // const [name, setName] = useState("");
  // const [title, setTitle] = useState("");
  // const [genre, setGenre] = useState("");
  // const [medium, setMedium] = useState("");
  // const [keywords, setKeywords] = useState("");
  const [banner, setBanner] = useState(bannerPlaceholder);

  const becomeCreator = () => {
    props.becomeCreator({ field: "creator", value: true });
  };

  const test = async () => {
    // console.log(await bannerImg);
  };

  return (
    <div className={styles.CreatorPage}>
      <h1>Creator Page</h1>
      {props.isCreator === false ? (
        <button onClick={becomeCreator} className={styles.createBtn}>
          Become a Creator
        </button>
      ) : null}
      <div className={styles.pageContainer}>
        <header
          className={styles.banner}
          style={{ backgroundImage: `url(${banner})` }}
        >
          <EditBtn />
          <div className={styles.profileContainer}>
            <img src={profilePlaceholder} alt='Profile' />
            <EditBtn />
          </div>
        </header>

        <div className={styles.mainContainer}>
          <h1>Project Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <footer></footer>
        <button onClick={test}>Test</button>
      </div>
    </div>
  );
};

export default CreatorPage;
