// == Import : npm
import React from "react";

// == Import : local css
import "./projectinformations.css";

class ProjectInformations extends React.Component {
  render() {
    var side = this.props.side;

    var projectLogo = this.props.projectLogo;
    var projectTitle = this.props.projectTitle;

    var projectResume = this.props.projectResume;

    var projectTextLink = this.props.projectTextLink;
    var projectLink = this.props.projectLink;

    var informationsClass =
      side === "normal" ? "informations" : "r-informations";

    return (
      <div id={informationsClass}>
        <div id="logo-container">
          <img id="logo" src={projectLogo} alt="Logo"></img>
        </div>
        <h1 id="title">{projectTitle}</h1>
        <div id="resume">{projectResume}</div>
        <a id="link" href={projectLink}  target="_blank" rel="noreferrer">
          {projectTextLink}
        </a>
      </div>
    );
  }
}

export default ProjectInformations;
