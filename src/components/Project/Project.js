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
    var projectKey =  this.props.projectKey;

    var modalImage = this.props.modalImage;

    var projectLogo = this.props.projectLogo;
    var projectTitle = this.props.projectTitle;

    var projectResume = this.props.projectResume;

    var projectURL = this.props.projectURL;
    var codeURL = this.props.codeURL;

    function DivProjectInformations() {
      return (
        <ProjectInformations
          side={side}
          projectLogo={projectLogo}
          projectTitle={projectTitle}
          projectResume={projectResume}
          projectURL={projectURL}
          codeURL={codeURL}
        />
      );
    }

    function DivProjectImages() {
      return (
        <ProjectImages
          side={side}
          projectKey={projectKey}
          projectTitle={projectTitle}
          modalImage={modalImage}
        />
      );
    }

    function Siding() {
      if (side === "normal") {
        return [DivProjectImages(), DivProjectInformations()];
      } else {
        return [DivProjectInformations(), DivProjectImages()];
      }
    }
    return <div className="project">{Siding()}</div>;
  }
}

export default Project;
