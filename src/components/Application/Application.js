// == Import : npm
import React from "react";

// == Import : local components
import NavigationBar from "../NavigationBar/NavigationBar";
import Project from "../Project/Project";
// import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import HeroPresentation from "../HeroPresentation/HeroPresentation";

// == Import : local css
import "./application.css";

// == Import : local data json
import { stockProjects } from "../../json/data.js";

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.refRushline = React.createRef();
    this.refSesame = React.createRef();
    this.refAlice = React.createRef();
    this.refFramework = React.createRef();
    this.refAFIV = React.createRef();
    this.refIRC = React.createRef();
    this.refCorrompu = React.createRef();
    this.refRainymood = React.createRef();
    this.refContact = React.createRef();
    this.refFooter = React.createRef();
    this.scrollToContent = this.scrollToContent.bind(this);
  }

  scrollToContent(content) {
    var ref = null;
    switch (content) {
      case "rushline":
        ref = this.refRushline;
        break;
      case "sesame":
        ref = this.refSesame;
        break;
      case "alice":
        ref = this.refAlice;
        break;
      case "framework":
        ref = this.refFramework;
        break;
      case "afiv":
        ref = this.refAFIV;
        break;
      case "irc":
        ref = this.refIRC;
        break;
      case "corrompu":
        ref = this.refCorrompu;
        break;
      case "rainymood":
        ref = this.refRainymood;
        break;
      // case "contact":
      //   ref = this.refContact;
      //   break;
      case "footer":
        ref = this.refFooter;
        break;
      default:
        break;
    }
    if (ref !== null) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  render() {
    return (
      <html>
        <body>
          <HeroPresentation />
          <NavigationBar scrollToContent={this.scrollToContent} />
          <main>
            <Project
              side={"normal"}
              projectKey="0"
              modalImage={stockProjects[0].modalImage}
              projectLogo={stockProjects[0].projectLogo}
              projectTitle={stockProjects[0].projectTitle}
              projectResume={stockProjects[0].projectResumeFR}
              projectURL={stockProjects[0].projectURL}
              codeURL={stockProjects[0].codeURL}
              reference={this.refRushline}
            />
            <Project
              side={"reverse"}
              projectKey="1"
              modalImage={stockProjects[1].modalImage}
              projectLogo={stockProjects[1].projectLogo}
              projectTitle={stockProjects[1].projectTitle}
              projectResume={stockProjects[1].projectResumeFR}
              projectURL={stockProjects[1].projectURL}
              codeURL={stockProjects[1].codeURL}
              reference={this.refSesame}
            />
            <Project
              side={"normal"}
              projectKey="2"
              modalImage={stockProjects[2].modalImage}
              projectLogo={stockProjects[2].projectLogo}
              projectTitle={stockProjects[2].projectTitle}
              projectResume={stockProjects[2].projectResumeFR}
              projectURL={stockProjects[2].projectURL}
              codeURL={stockProjects[2].codeURL}
              reference={this.refAlice}
            />
            <Project
              side={"reverse"}
              projectKey="3"
              modalImage={stockProjects[3].modalImage}
              projectLogo={stockProjects[3].projectLogo}
              projectTitle={stockProjects[3].projectTitle}
              projectResume={stockProjects[3].projectResumeFR}
              projectURL={stockProjects[3].projectURL}
              codeURL={stockProjects[3].codeURL}
              reference={this.refFramework}
            />
            <Project
              side={"normal"}
              projectKey="4"
              modalImage={stockProjects[4].modalImage}
              projectLogo={stockProjects[4].projectLogo}
              projectTitle={stockProjects[4].projectTitle}
              projectResume={stockProjects[4].projectResumeFR}
              projectURL={stockProjects[4].projectURL}
              codeURL={stockProjects[4].codeURL}
              reference={this.refAFIV}
            />
            <Project
              side={"reverse"}
              projectKey="5"
              modalImage={stockProjects[5].modalImage}
              projectLogo={stockProjects[5].projectLogo}
              projectTitle={stockProjects[5].projectTitle}
              projectResume={stockProjects[5].projectResumeFR}
              projectURL={stockProjects[5].projectURL}
              codeURL={stockProjects[5].codeURL}
              reference={this.refIRC}
            />
            <Project
              side={"normal"}
              projectKey="6"
              modalImage={stockProjects[6].modalImage}
              projectLogo={stockProjects[6].projectLogo}
              projectTitle={stockProjects[6].projectTitle}
              projectResume={stockProjects[6].projectResumeFR}
              projectURL={stockProjects[6].projectURL}
              codeURL={stockProjects[6].codeURL}
              reference={this.refCorrompu}
            />
            <Project
              side={"reverse"}
              projectKey="7"
              modalImage={stockProjects[7].modalImage}
              projectLogo={stockProjects[7].projectLogo}
              projectTitle={stockProjects[7].projectTitle}
              projectResume={stockProjects[7].projectResumeFR}
              projectURL={stockProjects[7].projectURL}
              codeURL={stockProjects[7].codeURL}
              reference={this.refRainymood}
            />
          </main>
          {/* <ContactForm reference={this.refContact} /> */}
        </body>
        <Footer reference={this.refFooter} />
      </html>
    );
  }
}

export default Application;
