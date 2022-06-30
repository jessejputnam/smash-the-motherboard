// Import React tools

// Import Components
import PatronHome from "./UserPages/PatronHome";
import NavPanel from "../components/NavPanel";

// Import CSS
import "../styles/UserApp.css";

// Use UID for useState (prop drill --> then check context)

const UserApp = () => {
  return (
    <div className='UserPage'>
      <NavPanel userType='patron' />
      <PatronHome />
    </div>
  );
};

export default UserApp;
