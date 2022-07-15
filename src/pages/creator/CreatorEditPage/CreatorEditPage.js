// Import React tools
import React, { useState } from "react";

// Import Components
import BecomeCreatorForm from "../../../common/components/forms/BecomeCreatorForm/BecomeCreatorForm";
import CreatorPages from "../../CreatorPages/CreatorPages";

// Import CSS
import styles from "./CreatorEditPage.module.css";

// Import images

const CreatorEditPage = (props) => {
  const test = async () => {
    // console.log(await bannerImg);
  };

  return (
    <div className={styles.CreatorEditPage}>
      <h1>Creator Edit Page</h1>
      {!props.isCreator ? <BecomeCreatorForm /> : <CreatorPages />}
      <button onClick={test}>Test</button>
    </div>
  );
};

export default CreatorEditPage;
