// == Import : npm
import React from "react";

// == Import : local css
import "./projectimages.css";

class ProjectImages extends React.Component {
  render() {
    var side = this.props.side;
    var imagesClass =
      side === "normal" ? "images" : "reverse-images";
      
    return (
      <img className={imagesClass}></img>
    );
  }
}

export default ProjectImages;
