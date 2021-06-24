// == Import : npm
import React from "react";

// == Import : local css
import "./socialmedia.css";

class SocialMedia extends React.Component {
    render() {
        return (
            /*target blank allow to open a new tab when button are clicked*/
            <a href={this.props.href} target="_blank" rel="noreferrer">
                <img class={this.props.class} src={this.props.src} alt={this.props.alt}></img>
            </a>
        );
    }
}

export default SocialMedia;
