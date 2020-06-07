import "typeface-roboto-condensed";
import "typeface-roboto-mono";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./UnmantainedApp";
import ErrorBoundary from "./ErrorBoundary";
import getCsvInfo from "./getCsvInfo";

async function main() {
  const dadosArquivo = await getCsvInfo();

  ReactDOM.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App dadosArquivo={dadosArquivo} />
      </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

main();
