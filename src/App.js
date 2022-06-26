// Import Pages
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";

// Import Components

// Import styles
import "./styles/App.css";

function App() {
  let user = "test_user";

  return <div className='App'>{!user ? <LandingPage /> : <UserPage />}</div>;
}

export default App;
