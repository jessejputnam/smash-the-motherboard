// Import Pages
import LandingPage from "./pages/LandingPage";
import UserApp from "./pages/UserApp";

// Import Components

// Import styles
import "./styles/App.css";

function App() {
  let user;

  return <div className='App'>{!user ? <LandingPage /> : <UserApp />}</div>;
}

export default App;
