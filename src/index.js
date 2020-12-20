import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

window.renderStopWatchApp = (containerId) => {
  ReactDOM.render(<App />, document.getElementById(containerId));
  // serviceWorker.unregister();
};

window.unmountStopWatchApp = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("StopWatchApp-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
  // serviceWorker.unregister();
}
