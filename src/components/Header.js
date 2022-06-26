// Import CSS
import "../styles/Header.css";

const Header = () => {
  return (
    <div className='Header'>
      <div>
        <p>Browse Creators</p>
        <input
          type='text'
          className='searchbar header__searchbar'
          placeholder='Search for artists...'
        ></input>
      </div>
      <div>
        <button type='button' className='btn btn--login'>
          Log In
        </button>
        <button type='button' className='btn btn--signup'>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
