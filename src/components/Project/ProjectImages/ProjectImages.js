// == Import : npm
import React from "react";

// == Import : local css
import "./projectimages.css";

function ModalImage(){
  document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");
    var image = document.getElementById("image");
    var modalImageSource = document.getElementById("modal-image");
    var captionText = document.getElementById("caption");
    image.onclick = function () {
      modal.style.display = "block";
      modalImageSource.src = this.src;
      captionText.innerHTML = this.alt;
    };

    var span = document.getElementById("close");

    span.onclick = function () {
      modal.style.display = "none";
    };
  });
}

class ProjectImages extends React.Component {
  render() {
    var side = this.props.side;

    var modalImage = this.props.modalImage;
    var imageAlternative = this.props.imageAlternative;

    var imagesClass = side === "normal" ? "image-container" : "r-image-container";

    ModalImage();

    return (
      <div id={imagesClass}>
        <img
          id="image"
          src={modalImage}
          alt={imageAlternative}
        ></img>
        <div id="modal" class="modal">
          <span class="close" id="close">&times;</span>
          <img class="modal-content" id="modal-image" alt="Modal Image"></img>
          <div id="caption"></div>
        </div>
      </div>
    );
  }
}

export default ProjectImages;
