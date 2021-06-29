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

// == Import : local data json
import {stockProjects} from "../../json/data.js";

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
              projectKey="0"
              modalImage={stockProjects[0].modalImage}
              projectLogo={stockProjects[0].projectLogo}
              projectTitle={stockProjects[0].projectTitle}
              projectResume={stockProjects[0].projectResume}
              projectURL={stockProjects[0].projectURL}
              codeURL={stockProjects[0].codeURL}
            />
            <Project
              side={"reverse"}
              projectKey="1"
              modalImage={stockProjects[1].modalImage}
              projectLogo={stockProjects[1].projectLogo}
              projectTitle={stockProjects[1].projectTitle}
              projectResume={stockProjects[1].projectResume}
              projectURL={stockProjects[1].projectURL}
              codeURL={stockProjects[1].codeURL}
            />
            <Project
              side={"normal"}
              projectKey="2"
              modalImage={stockProjects[2].modalImage}
              projectLogo={stockProjects[2].projectLogo}
              projectTitle={stockProjects[2].projectTitle}
              projectResume={stockProjects[2].projectResume}
              projectURL={stockProjects[2].projectURL}
              codeURL={stockProjects[2].codeURL}
            />
            <Project
              side={"reverse"}
              projectKey="3"
              modalImage={stockProjects[3].modalImage}
              projectLogo={stockProjects[3].projectLogo}
              projectTitle={stockProjects[3].projectTitle}
              projectResume={stockProjects[3].projectResume}
              projectURL={stockProjects[3].projectURL}
              codeURL={stockProjects[3].codeURL}
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
