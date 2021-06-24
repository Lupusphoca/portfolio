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

    var modalImage = this.props.modalImage;
    var imageAlternative = this.props.imageAlternative;

    var projectLogo = this.props.projectLogo;
    var projectTitle = this.props.projectTitle;

    var projectResume = this.props.projectResume;

    var projectTextLink = this.props.projectTextLink;
    var projectLink = this.props.projectLink;

    function DivProjectInformations() {
      return (
        <ProjectInformations
          side={side}
          projectLogo={projectLogo}
          projectTitle={projectTitle}
          projectResume={projectResume}
          projectTextLink={projectTextLink}
          projectLink={projectLink}
        />
      );
    }

    function DivProjectImages() {
      return (
        <ProjectImages
          side={side}
          modalImage={modalImage}
          imageAlternative={imageAlternative}
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
