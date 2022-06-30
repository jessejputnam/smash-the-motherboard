// Import React tools
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import App from "./App";
import LandingPage from "./pages/LandingPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/user' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
