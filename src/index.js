import "typeface-roboto-condensed";
import "typeface-roboto-mono";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./UnmantainedApp";
import ErrorBoundary from "./ErrorBoundary";

async function main() {
  ReactDOM.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

main();
