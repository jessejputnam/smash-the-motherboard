// Import React tools
import { useState } from "react";

// Import components
import Login from "./user_auth/Login";

// Import CSS
import "../styles/Header.css";

const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openLoginModal = () => setModalVisible("login");
  const handleCloseModal = (childData) => setModalVisible(childData);

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
        <button
          onClick={openLoginModal}
          type='button'
          className='btn btn--signup'
        >
          Sign Up
        </button>
      </div>
      <Login closeModal={handleCloseModal} modalVisible={modalVisible} />
    </div>
  );
};

export default Header;
