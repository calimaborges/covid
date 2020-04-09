import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import parseCsv from "./parseCsv";
import getCsvUrl from "./getCsvUrl";

async function main() {
  const url = await getCsvUrl();
  const csv = await parseCsv(url);

  ReactDOM.render(
    <React.StrictMode>
      <App data={csv.data} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

main();
