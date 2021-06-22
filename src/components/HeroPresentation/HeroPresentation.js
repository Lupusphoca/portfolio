// == Import : npm
import React from "react";

// == Import : local css
import "./heropresentation.css";

class HeroPresentation extends React.Component {
  render() {
    return (
      <div class="hero-image">
        <div class="hero-text">
          <h1> Pierre ARNAUDET </h1>
          <p> Front-End React.JS & Unity - Developer </p>
          <button> Contact me </button>
        </div>
      </div>
    );
  }
}

export default HeroPresentation;
