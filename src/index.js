import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import parseCsv from "./parseCsv";
import getCsvUrl from "./getCsvUrl";

async function main() {
  const mainComponent = document.getElementById("root")
  mainComponent.innerHTML = `<p>Obtendo endereço do CSV...</p>`;
  const url = await getCsvUrl();

  mainComponent.innerHTML = `<p>Obtendo CSV de ${url}...</p>`;
  const csv = await parseCsv(url);

  ReactDOM.render(
    <React.StrictMode>
      <App data={csv.data} />
    </React.StrictMode>,
    mainComponent
  );
}

main();
