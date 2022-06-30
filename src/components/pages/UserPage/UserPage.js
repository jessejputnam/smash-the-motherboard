// Import React tools

// Import Components
import PatronHome from "../UserPages/PatronHome/PatronHome";
import NavPanel from "../../NavPanel/NavPanel";

// Import CSS
// import "../styles/UserPage.css";

// Use UID for useState (prop drill --> then check context)

const UserPage = () => {
  return (
    <div className='UserPage'>
      <NavPanel userType='patron' />
      <PatronHome />
    </div>
  );
};

export default UserPage;
