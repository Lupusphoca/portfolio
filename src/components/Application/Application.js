// == Import : npm
import React from "react";

// == Import : local components
import NavigationBar from "../NavigationBar/NavigationBar";
import Project from "../Project/Project";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import HeroPresentation from "../HeroPresentation/HeroPresentation";

// == Import : local css
import "./application.css";

// == Import : local images
import RushlineModalImage from "../../images/rushline/rushline-3.jpg";
import RushlineLogo from "../../images/rushline/rushline-logo.png";

class Application extends React.Component {
  render() {
    return (
      <html>
        <body>
          <HeroPresentation />
          <NavigationBar />
          <main>
            <Project
              side={"normal"}
              modalImage={RushlineModalImage}
              imageAlternative={"Rushline - Hikokawa Ascend"}
              projectLogo={RushlineLogo}
              projectTitle={"Rushline - Hikokawa Ascend"}
              projectResume={
                "Rushline is a 4v4 game where you have to capture the enemy s ball in your side to score. You have two guns to achieve this, a gun to teleport and a gun to shoot enemies. Meet Hikokawa, the city where the fight takes place with its intricate design and secret passage, and master its layout to stealth your way through the enemy side and  get that ball back in your temple. Fight your friends in accuracy-based long-ranged battles or in the tense, frenetic close combat that the mastery of both guns enables."
              }
              projectTextLink={
                "Itch.io - Rushline"
              }
              projectLink={
                "https://pierre-arnaudet.itch.io/rushline-hikokawa-ascend"
              }
            />
          </main>
          <ContactForm />
        </body>
        <Footer />
      </html>
    );
  }
}

export default Application;
