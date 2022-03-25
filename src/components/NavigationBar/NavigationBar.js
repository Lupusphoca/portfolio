// == Import : npm
import React from "react";

// == Import : local components
import Name from "./Name/Name.js";

// == Import : local css
import "./navigationbar.css";

class NavigationBar extends React.Component {
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      window.addEventListener("scroll", StickyHeaderDetection);
      var navbar = document.getElementById("sticky-navbar");
      var emptyNavbar = document.getElementById("empty-div");
      var sticky = navbar.offsetTop;

      function StickyHeaderDetection() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
          emptyNavbar.classList.add("empty-navbar");
        } else {
          navbar.classList.remove("sticky");
          emptyNavbar.classList.remove("empty-navbar");
        }
      }
    });

    return (
      <div>
        <div className="navbar" id="sticky-navbar">
          <Name />
          <div className="topics">
            <h2 onClick={() => this.props.scrollToContent("rushline")}>Projets</h2>
            <h2 onClick={() => this.props.scrollToContent("footer")}>Social</h2>
          </div>
        </div>
        <div id="empty-div" />
      </div>
    );
  }
}

export default NavigationBar;
