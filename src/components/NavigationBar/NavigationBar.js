// == Import : npm
import React from "react";

// == Import : local components
import Name from "./Name/Name.js";

// == Import : local css
import "./navigationbar.css";

class NavigationBar extends React.Component {
  render() {
    return (
      <header>
        <Name />
        <div className="topics">
          <h2>Projets</h2>
          <h2>Contacts</h2>
        </div>
      </header>
    );
  }
}

export default NavigationBar;
