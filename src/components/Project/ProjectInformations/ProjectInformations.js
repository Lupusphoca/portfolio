import React from "react";
import "./projectinformations.css";

class ProjectInformations extends React.Component {
  render() {
    var side = this.props.side;
    var informationsClass =
      side === "normal" ? "informations" : "reverse-informations";
      
    return (
      <div className={informationsClass}>
        <div className="logo">Petit logo</div>
        <div className="title">Titre du projet</div>
        <div className="resume">Résumé du projet</div>
        <div className="tools">Outils utilisés</div>
        <div className="links">Lien pour retrouver le projet</div>
      </div>
    );
  }
}

export default ProjectInformations;
