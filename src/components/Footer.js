import "../styles/Footer.css";

import instagramIcon from "../icons/instagram.png";
import facebookIcon from "../icons/facebook.png";
import linkedinIcon from "../icons/linkedin.png";
import twitterIcon from "../icons/twitter.png";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='socials'>
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
          <li>360 West St</li>
          <li>Hatfield, MA 01030</li>
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
