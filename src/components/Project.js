import React from "react";
import ProjectImages from "./Project/ProjectImages.js";
import ProjectInformations from "./Project/ProjectInformations.js";

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
