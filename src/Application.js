import React from "react";
import NavigationBar from "./components/NavigationBar";
import Project from "./components/Project";

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
        </body>
      </html>
    );
  }
}

export default Application;
