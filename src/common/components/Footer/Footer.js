// Import social icons
import instagramIcon from "../../../assets/icons/instagram.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import linkedinIcon from "../../../assets/icons/linkedin.png";
import twitterIcon from "../../../assets/icons/twitter.png";

// Import CSS
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.socials}>
        <h3 className={styles["company-name"]}>Smash The Motherboard</h3>
        <ul className={styles.socials__list}>
          <li>
            <a href='https://www.facebook.com' target='blank'>
              <img src={facebookIcon} alt='Facebook' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com' target='blank'>
              <img src={instagramIcon} alt='Facebook' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com' target='blank'>
              <img src={linkedinIcon} alt='Facebook' />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' target='blank'>
              <img src={twitterIcon} alt='Facebook' />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.address}>
        <ul>
          <li>P.O. Box 20135</li>
          <li>Sante Fe, NM 91093</li>
          <li>smashthemotherboard@email.com</li>
        </ul>
      </div>
      <div className={styles.attribution}>
        <a
          href='https://www.flaticon.com/free-icons/facebook'
          title='facebook icons'
        >
          Social icons created by Freepik - Flaticon
        </a>
      </div>
    </div>
  );
};

export default Footer;
