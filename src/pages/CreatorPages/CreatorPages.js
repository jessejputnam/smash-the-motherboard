// Import React tools
import React, { useState } from "react";

// Import Components
import EditBtn from "../../common/components/buttons/EditBtn/EditBtn";

// Import CSS
import styles from "./CreatorPages.module.css";

// Import images
import bannerPlaceholder from "../../assets/images/banner-placeholder.png";
import profilePlaceholder from "../../assets/images/userPlaceholder.png";

const CreatorPages = () => {
  // const [name, setName] = useState("");
  // const [title, setTitle] = useState("");
  // const [genre, setGenre] = useState("");
  // const [medium, setMedium] = useState("");
  // const [keywords, setKeywords] = useState("");
  const [banner, setBanner] = useState(bannerPlaceholder);
  const [profilePhoto, setProfilePhoto] = useState(profilePlaceholder);

  return (
    <div className={styles.CreatorPages}>
      <header
        className={styles.banner}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <EditBtn />
        <div className={styles.profileContainer}>
          <img src={profilePhoto} alt='Profile' />
          <EditBtn />
        </div>
      </header>

      <div className={styles.mainContainer}>
        <div className={styles.mainWrapper}>
          <h1>Project Title</h1>
          <h2>Project Genre</h2>

          <p>
            PROJECT DESCRIPTION: This is a description of the project and what
            it is about. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>

          <div className={styles.tierListContainer}>
            <h2>Membership Tiers</h2>
            <div></div>
          </div>

          <div className={styles.tierRewardsContainer}></div>

          <div className={styles.postsContainer}></div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
};

export default CreatorPages;
