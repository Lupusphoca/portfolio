// == Import : npm
import React from "react";

// == Import : local components
import ProjectImages from "./ProjectImages/ProjectImages.js";
import ProjectInformations from "./ProjectInformations/ProjectInformations.js";

// == Import : local css
import "./project.css";

class Project extends React.Component {
  render() {
    var side = this.props.side;

    function Siding() {
      if (side === "normal") {
        return [
          <ProjectImages side={side} />,
          <ProjectInformations side={side} />,
        ];
      } else {
        return [
          <ProjectInformations side={side} />,
          <ProjectImages side={side} />,
        ];
      }
    }
    return <div className="project">{Siding()}</div>;
  }
}

export default Project;
