// Import Components
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";

// Import CSS
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <Header />
      <main>
        <div className={styles.section}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png'
            alt='placeholder'
            height={300}
          ></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
