// Import social icons
import instagramIcon from "../../icons/instagram.png";
import facebookIcon from "../../icons/facebook.png";
import linkedinIcon from "../../icons/linkedin.png";
import twitterIcon from "../../icons/twitter.png";

// Import CSS
// import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='socials'>
        <h3 className='company-name'>Smash The Motherboard</h3>
        <ul className='socials__list'>
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

      <div className='address'>
        <ul>
          <li>P.O. Box 20135</li>
          <li>Sante Fe, NM 91093</li>
          <li>smashthemotherboard@email.com</li>
        </ul>
      </div>
      <div className='attribution'>
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
