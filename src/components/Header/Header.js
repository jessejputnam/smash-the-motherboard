// Import React tools
import { useState } from "react";

// Import components
import Login from "../userAuthModals/Login/Login";
import Register from "../userAuthModals/Register/Register";
import Reset from "../userAuthModals/Reset/Reset";

// Import CSS
import styles from "./Header.module.css";

const Header = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false);

  // User_auth Modal Display Logic
  const openLoginModal = () => {
    setLoginModalVisible(true);
  };
  const handleCloseLoginModal = (childData) => {
    setLoginModalVisible(childData);
  };

  const openRegisterModal = (childData) => {
    setLoginModalVisible(childData.loginModal);
    setRegisterModalVisible(childData.registerModal);
  };
  const handleCloseRegisterModal = (childData) => {
    setRegisterModalVisible(childData);
  };

  const openResetModal = (childData) => {
    setLoginModalVisible(childData.loginModal);
    setResetModalVisible(childData.resetModal);
  };
  const handleCloseResetModal = (childData) => {
    setResetModalVisible(childData);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.header__search}>
        <button type='button'>Browse Creators</button>
        <input
          type='text'
          className={`searchbar ${styles.header__searchbar}`}
          placeholder='Search for artists...'
        ></input>
      </div>
      <div>
        <button
          onClick={openLoginModal}
          type='button'
          className={"btn--signup"}
        >
          Sign Up
        </button>
      </div>
      <Login
        setModalVisible={handleCloseLoginModal}
        modalVisible={loginModalVisible}
        handleOpenRegisterModal={openRegisterModal}
        handleOpenResetModal={openResetModal}
      />
      <Register
        setModalVisible={handleCloseRegisterModal}
        modalVisible={registerModalVisible}
      />
      <Reset
        setModalVisible={handleCloseResetModal}
        modalVisible={resetModalVisible}
      />
    </div>
  );
};

export default Header;
