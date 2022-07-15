// Import React tools
import React, { useEffect, useState } from "react";

// Import Components
import EditBtn from "../../common/components/buttons/EditBtn/EditBtn";
import Footer from "../../common/components/Footer/Footer";

// Import CSS
import styles from "./CreatorPages.module.css";

// Import images
import bannerPlaceholder from "../../assets/images/banner-placeholder.png";
import profilePlaceholder from "../../assets/images/userPlaceholder.png";
import TierSelection from "../../common/components/TierSelection/TierSelection";
import Post from "../../common/components/Post/Post";

const CreatorPages = (props) => {
  // const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [desc, setDesc] = useState("");
  const [tier1, setTier1] = useState([]);
  const [tier2, setTier2] = useState([]);
  const [tier3, setTier3] = useState([]);
  // const [posts, setPosts] = useState([]);
  // const [medium, setMedium] = useState("");
  // const [keywords, setKeywords] = useState("");
  const [banner, setBanner] = useState(bannerPlaceholder);
  const [profilePhoto, setProfilePhoto] = useState(profilePlaceholder);

  useEffect(() => {
    setTitle(props.userData.creator.title);
    setGenre(props.userData.creator.genre);
    setDesc(props.userData.creator.desc);
    setTier1(props.userData.creator.tier1);
    setTier2(props.userData.creator.tier2);
    setTier3(props.userData.creator.tier3);
    // setPosts(props.data.posts);
    // setBanner(props.data.bannerURL);
    // setProfilePhoto(props.data.profilePhotoURL);
  }, [props, title, genre, desc, tier1, tier2, tier3]);

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
          <h1>{title}</h1>
          <h2>{genre}</h2>

          <p>{desc}</p>

          <div className={styles.tierListContainer}>
            <h2>Membership Tiers</h2>

            <div className={styles.tiersContainer}>
              <TierSelection tierPrice='5' tierRewards={tier1} />
              <TierSelection tierPrice='10' tierRewards={tier2} />
              <TierSelection tierPrice='15' tierRewards={tier3} />
            </div>
          </div>

          <div className={styles.tierRewardsContainer}></div>

          <div className={styles.postsContainer}>
            <h2>Posts</h2>
            <div className={styles.postsWrapper}>
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorPages;
