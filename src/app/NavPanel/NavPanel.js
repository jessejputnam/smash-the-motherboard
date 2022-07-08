// Import React tools
import { useNavigate } from "react-router-dom";

// Import Backend
import { logout } from "../../backend/firebase";

// Import CSS
import styles from "./NavPanel.module.css";

//TODO Create sub-list under CREATOR for creator page -- analytics, posts, edit page

const NavPanel = (props) => {
  // Data
  const currentPage = props.curPage;

  // Functions
  const navigate = useNavigate();

  const goToPage = (e) => {
    props.setCurPage(e.target.id);
    navigate(e.target.id);
  };

  // Classes for components
  const btnClass = styles["btn--nav-panel"];
  const btnCurrentClass = `${styles["btn--nav-panel"]} currentPage`;

  return (
    <div className={styles.NavPanel}>
      <button
        id='creator'
        onClick={goToPage}
        className={currentPage === "creator" ? btnCurrentClass : btnClass}
      >
        Creator
      </button>
      <button
        id='home'
        onClick={goToPage}
        className={currentPage === "home" ? btnCurrentClass : btnClass}
      >
        Home
      </button>
      <button
        id='search'
        onClick={goToPage}
        className={currentPage === "search" ? btnCurrentClass : btnClass}
      >
        Search
      </button>
      <button
        id='settings'
        onClick={goToPage}
        className={currentPage === "settings" ? btnCurrentClass : btnClass}
      >
        Settings
      </button>
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
