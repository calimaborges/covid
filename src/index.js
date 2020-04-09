import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import parseCsv from "./parseCsv";

const kCsvUrl =
  "https://mobileapps.saude.gov.br/esus-vepi/files/unAFkcaNDeXajurGB7LChj8SgQYS2ptm/b350824dbfad17f083e62d4b41e88cb7_Download_COVID19_20200408.csv";

async function main() {
  const csv = await parseCsv(kCsvUrl);

  ReactDOM.render(
    <React.StrictMode>
      <App data={csv.data} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

main();
