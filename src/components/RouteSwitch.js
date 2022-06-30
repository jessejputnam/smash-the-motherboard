// Import React tools
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import LandingPage from "./pages/LandingPage/LandingPage";
import UserPage from "./pages/UserApp/UserPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
