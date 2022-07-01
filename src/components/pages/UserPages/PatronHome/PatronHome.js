// Import CSS
import styles from "./PatronHome.module.css";

const PatronHome = (props) => {
  return (
    <div className={styles.PatronHome}>
      <h1>Home</h1>
      <h2>{props.userName}</h2>
      <h2>{props.userEmail}</h2>
    </div>
  );
};

export default PatronHome;
