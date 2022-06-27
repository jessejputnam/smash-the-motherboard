// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Components
import PatronHome from "./UserPages/PatronHome";
import NavPanel from "../components/NavPanel";

// Import CSS
import "../styles/UserApp.css";

const UserApp = () => {
  return (
    <div className='UserPage'>
      <NavPanel userType='patron' />
      <PatronHome />
    </div>
  );
};

export default UserApp;
