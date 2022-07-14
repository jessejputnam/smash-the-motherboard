// Import React tools
import React, { useState } from "react";

// Import Compnonets
import CreatorPages from "../../CreatorPages/CreatorPages";

// Import CSS
import styles from "./CreatorEditPage.module.css";

// Import images

const CreatorEditPage = (props) => {
  const becomeCreator = () => {
    props.becomeCreator({ field: "creator", value: true });
  };

  const test = async () => {
    // console.log(await bannerImg);
  };

  const creatorForm = () => {
    return (
      <form className={styles.creatorForm}>
        <input type='text' placeholder='Project Title' />
        <br />
        <input type='text' placeholder='Project Genre' />
        <br />
        <textarea type='text' placeholder='Project Description' />
        <br />
      </form>
    );
  };

  return (
    <div className={styles.CreatorEditPage}>
      <h1>Creator Edit Page</h1>
      {props.isCreator === false ? (
        <button onClick={becomeCreator} className={styles.createBtn}>
          Become a Creator
        </button>
      ) : null}
      <CreatorPages />
      <button onClick={test}>Test</button>
    </div>
  );
};

export default CreatorEditPage;
