// Import React tools
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='user/*' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
