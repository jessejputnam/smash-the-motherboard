// Import Components
import BecomeCreatorForm from "../../../../common/components/forms/BecomeCreatorForm/BecomeCreatorForm";
import PersonalPage from "../PersonalPage/PersonalPage";

// Import CSS
import styles from "./CreatorEditPage.module.css";

// Import images

const CreatorEditPage = (props) => {
  const becomeCreator = (childData) => {
    props.becomeCreator(childData);
  };

  const test = async () => {
    // console.log();
  };

  return (
    <div className={styles.CreatorEditPage}>
      <h1>Creator Edit Page</h1>
      {!props.userData.creator ? (
        <BecomeCreatorForm becomeCreator={becomeCreator} />
      ) : (
        <PersonalPage userData={props.userData} />
      )}
      <button onClick={test}>Test</button>
    </div>
  );
};

export default CreatorEditPage;
