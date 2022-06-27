// Import React tools
import { Link } from "react-router-dom";

// Import CSS
import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className='Header'>
      <div>
        <button type='button'>Browse Creators</button>
        <input
          type='text'
          className='searchbar header__searchbar'
          placeholder='Search for artists...'
        ></input>
      </div>
      <div>
        <Link to='/login'>
          <button type='button' className='btn btn--signup'>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
