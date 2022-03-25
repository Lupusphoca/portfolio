// == Import : npm
import React from "react";

// == Import : local css
import "./footer.css";

// == Import : local components
import SocialMedia from "./SocialMedia/SocialMedia";

// == Import : local images
import TwitterLogo from "../../images/social-media/twitter.png";
import InstagramLogo from "../../images/social-media/instagram.png";
import LinkedInLogo from "../../images/social-media/linkedin.png";

class Footer extends React.Component {
  render() {
    var reference = this.props.reference;
    return (
      <footer ref={reference}>
        <div className="container">
          <SocialMedia
            href="https://twitter.com/Loufhok"
            src={TwitterLogo}
            alt="Twitter"
          />
          <SocialMedia
            href="https://www.instagram.com/parnaudet/?hl=fr"
            src={InstagramLogo}
            alt="Instagram"
          />
          <SocialMedia
            href="https://www.linkedin.com/in/pierre-arnaudet/"
            src={LinkedInLogo}
            alt="LinkedIn"
          />
        </div>
        <div className="copyright">Pierre ARNAUDET - 2021 ©</div>
      </footer>
    );
  }
}

export default Footer;
