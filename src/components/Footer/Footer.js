// == Import : npm
import React from "react";

// == Import : local css
import "./footer.css";

// == Import : local components
import SocialMedia from "./SocialMedia/SocialMedia";

// == Import : local images
import TwitterLogo from "../../img/twitter.png";
import InstagramLogo from "../../img/instagram.png";
import LinkedInLogo from "../../img/facebook.png";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <SocialMedia href={"https://twitter.com/Loufhok"} class={"social-media-image"} src={TwitterLogo} alt={"Twitter"} />
                    <SocialMedia href={"https://www.instagram.com/parnaudet/?hl=fr"} class={"social-media-image"} src={InstagramLogo} alt={"Instagram"} />
                    <SocialMedia href={"https://www.linkedin.com/in/pierre-arnaudet/"} class={"social-media-image"} src={LinkedInLogo} alt={"LinkedIn"} />
                </div>
                <div className="copyright">
                    Pierre ARNAUDET - 2021 ©
                </div>
            </footer>
        )
    }
}

export default Footer;