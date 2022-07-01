// Import Backend
import { logout } from "../../backend/firebase";

// Import CSS
import styles from "./NavPanel.module.css";

const ErrNavPanel = () => {
  return (
    <div className={styles.ErrNavPanel}>
      <p>Error: improper user-type for NavPanel</p>
    </div>
  );
};

const CreatorNavPanel = () => {
  return <div className={styles.CreatorNavPanel}></div>;
};

const PatronNavPanel = () => {
  return (
    <div className={styles.PatronNavPanel}>
      <button className={styles["btn--nav-panel"]}>Account</button>
      <button className={styles["btn--nav-panel"]}>Home</button>
      <button className={styles["btn--nav-panel"]}>Search</button>
      <button className={styles["btn--nav-panel"]}>Settings</button>
    </div>
  );
};

const NavPanel = (props) => {
  const userType = props.userType;

  let panel;

  if (userType === "patron") panel = <PatronNavPanel />;
  else if (userType === "creator") panel = <CreatorNavPanel />;
  else panel = <ErrNavPanel />;

  return (
    <div className={styles.NavPanel}>
      <div>{panel}</div>
      <button
        className={`${styles["btn--nav-panel"]} ${styles["btn--logout"]}`}
        onClick={logout}
      >
        Sign Out
      </button>
    </div>
  );
};

export default NavPanel;
