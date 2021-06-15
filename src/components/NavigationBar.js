import React from "react";
import Name from "./Name.js";

class NavigationBar extends React.Component {
  render() {
    return (
      <header>
        <Name/>
        <div className="topics">
          <h2>Projets</h2>
          <h2>Contacts</h2>
        </div>
      </header>
    );
  }
}

export default NavigationBar;
