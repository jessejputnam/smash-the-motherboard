// Import React tools
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import App from "../App";
import LandingPage from "../pages/LandingPage";
// import Login from "./Login";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/user' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
