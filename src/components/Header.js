// Import React tools
import { useState } from "react";

// Import components
import Login from "./user_auth/Login";
import Register from "./user_auth/Register";

// Import CSS
import "../styles/Header.css";

const Header = (props) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };
  const openRegisterModal = (childData) => {
    setLoginModalVisible(childData.loginModal);
    setRegisterModalVisible(childData.registerModal);
  };
  const handleCloseLoginModal = (childData) => {
    setLoginModalVisible(childData);
  };
  const handleCloseRegisterModal = (childData) => {
    setRegisterModalVisible(childData);
  };

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
      <Login
        setModalVisible={handleCloseLoginModal}
        modalVisible={loginModalVisible}
        handleOpenRegisterModal={openRegisterModal}
      />
      <Register
        setModalVisible={handleCloseRegisterModal}
        modalVisible={registerModalVisible}
      />
    </div>
  );
};

export default Header;
