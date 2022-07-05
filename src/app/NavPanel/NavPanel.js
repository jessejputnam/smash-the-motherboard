// Import React tools
import { useNavigate } from "react-router-dom";

// Import Backend
import { logout } from "../../backend/firebase";

// Import CSS
import styles from "./NavPanel.module.css";

const NavPanel = (props) => {
  // const navigate = useNavigate();

  const currentPage = props.currentPage.slice(1);

  const goToCreatorPage = () => {
    // const
  };

  const btnClass = styles["btn--nav-panel"];
  const btnCurrentClass = `${styles["btn--nav-panel"]} currentPage`;

  return (
    <div className={styles.NavPanel}>
      <button
        onClick={goToCreatorPage}
        className={currentPage === "creator" ? btnCurrentClass : btnClass}
      >
        Creator
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
      <button
        className={`${styles["btn--nav-panel"]} ${styles["btn--logout"]}`}
        onClick={logout}
      >
        Sign Out
      </button>
    </div>
  );
};

// const NavPanel = (props) => {
//   const userType = props.userType;

//   let panel;

//   if (userType === "patron")
//     panel = <PatronNavPanel currentPage={props.currentPage} />;
//   else if (userType === "creator")
//     panel = <CreatorNavPanel currentPage={props.currentPage} />;
//   else panel = <ErrNavPanel />;

//   return (
//     <div className={styles.NavPanel}>
//       <div>{panel}</div>
//       <button
//         className={`${styles["btn--nav-panel"]} ${styles["btn--logout"]}`}
//         onClick={logout}
//       >
//         Sign Out
//       </button>
//     </div>
//   );
// };

export default NavPanel;
