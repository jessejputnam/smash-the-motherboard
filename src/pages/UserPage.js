// Import Components
import PatronHome from "./UserPages/PatronHome";
import NavPanel from "../components/NavPanel";

// Import CSS
import "../styles/UserPage.css";

const UserPage = () => {
  return (
    <div className='UserPage'>
      <NavPanel userType='patron' />
      <PatronHome />
    </div>
  );
};

export default UserPage;
