import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Project from "../Project/Project";
import ContactForm from "../ContactForm/ContactForm";
import "./application.css";

class Application extends React.Component {
  render() {
    return (
      <html>
        <body>
          <NavigationBar />
          <main>
            <Project side={"normal"} />
            <Project side={"reverse"} />
            <Project side={"normal"} />
            <Project side={"reverse"} />
          </main>
          <ContactForm />
        </body>
      </html>
    );
  }
}

export default Application;
