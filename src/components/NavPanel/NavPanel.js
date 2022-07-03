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

const CreatorNavPanel = (props) => {
  return <div className={styles.CreatorNavPanel}></div>;
};

const PatronNavPanel = (props) => {
  const currentPage = props.currentPage.slice(1);

  const btnClass = styles["btn--nav-panel"];
  const btnCurrentClass = `${styles["btn--nav-panel"]} currentPage`;

  return (
    <div className={styles.PatronNavPanel}>
      <button
        className={currentPage === "account" ? btnCurrentClass : btnClass}
      >
        Account
      </button>
      <button className={currentPage === "home" ? btnCurrentClass : btnClass}>
        Home
      </button>
      <button className={currentPage === "search" ? btnCurrentClass : btnClass}>
        Search
      </button>
      <button
        className={currentPage === "settings" ? btnCurrentClass : btnClass}
      >
        Settings
      </button>
    </div>
  );
};

const NavPanel = (props) => {
  const userType = props.userType;

  let panel;

  if (userType === "patron")
    panel = <PatronNavPanel currentPage={props.currentPage} />;
  else if (userType === "creator")
    panel = <CreatorNavPanel currentPage={props.currentPage} />;
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
