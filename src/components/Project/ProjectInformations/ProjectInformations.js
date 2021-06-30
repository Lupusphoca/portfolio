// == Import : npm
import React from "react";

// == Import : local css
import "./projectinformations.css";

function DisplayURL(url, name) {
  if (url !== "") {
    return (
      <a className="url-button" href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    );
  }
}

class ProjectInformations extends React.Component {
  render() {
    var side = this.props.side;

    var projectLogo = this.props.projectLogo;
    var projectTitle = this.props.projectTitle;

    var projectResume = this.props.projectResume;

    var projectURL = this.props.projectURL;
    var codeURL = this.props.codeURL;
    var reference = this.props.reference;

    var informationsClass =
      side === "normal" ? "informations" : "r-informations";

    return (
      <div className={informationsClass} ref={reference}>
        <div className="logo-container">
          <img className="logo" src={projectLogo} alt="Logo"></img>
        </div>
        <h1 className="title">{projectTitle}</h1>

        <div className="resume">
          <div className="resume-content">{projectResume}</div>
        </div>
        <div className="links">
          {DisplayURL(projectURL, "PROJET")}
          {DisplayURL(codeURL, "CODE")}
        </div>
      </div>
    );
  }
}

export default ProjectInformations;
