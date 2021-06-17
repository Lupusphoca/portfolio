// == Import : npm
import React from "react";

// == Import : local components
import NavigationBar from "../NavigationBar/NavigationBar";
import Project from "../Project/Project";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";

// == Import : local css
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
        <Footer/>
      </html>
    );
  }
}

export default Application;
