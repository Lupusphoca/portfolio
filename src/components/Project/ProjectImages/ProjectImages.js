// == Import : npm
import React from "react";

// == Import : local css
import "./projectimages.css";

function ModalImage(newKey) {
  document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal" + newKey);
    var image = document.getElementById("projectImage" + newKey);
    var modalImageSource = document.getElementById("modal-image" + newKey);
    var captionText = document.getElementById("caption" + newKey);
    image.onclick = function () {
      modal.style.display = "block";
      modalImageSource.src = this.src;
      captionText.innerHTML = this.alt;
    };

    var span = document.getElementById("close" + newKey);

    span.onclick = function () {
      modal.style.display = "none";
    };
  });
}

class ProjectImages extends React.Component {
  render() {
    var side = this.props.side;
    var projectKey = this.props.projectKey;
    var projectTitle = this.props.projectTitle;
    var modalImage = this.props.modalImage;

    var imagesClass =
      side === "normal" ? "image-container" : "r-image-container";

    ModalImage(projectKey);

    return (
      <div id={imagesClass}>
        <img
          id={"projectImage" + projectKey}
          className="projectImage"
          src={modalImage}
          alt={projectTitle}
        ></img>
        <div id={"modal" + projectKey} className="modal">
          <span id={"close" + projectKey} className="close">&times;</span>
          <img
            id={"modal-image" + projectKey}
            className="modal-content"
            alt="Modal Image"
          ></img>
          <div id={"caption" + projectKey} className="caption"></div>
        </div>
      </div>
    );
  }
}

export default ProjectImages;
