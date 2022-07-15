// Import CSS
import styles from "./PatronHome.module.css";

const PatronHome = (props) => {
  return (
    <div className={styles.PatronHome}>
      <h1>Home</h1>
      <h2>{props.userName}</h2>
      <h2>{props.userEmail}</h2>

      <div>
        <h3>Current Subscriptions</h3>
        <ul>
          <li>Sub 1</li>
          <li>Sub 2</li>
        </ul>
      </div>
    </div>
  );
};

export default PatronHome;
