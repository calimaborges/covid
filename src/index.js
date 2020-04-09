import "typeface-roboto-condensed";
import "typeface-roboto-mono";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import groupBy from "lodash.groupby";
import App from "./App";
import parseCsv from "./parseCsv";
import getCsvInfo from "./getCsvInfo";


async function main() {
  const mainComponent = document.getElementById("root")
  mainComponent.innerHTML = `<p>Obtendo endereço do CSV...</p>`;
  const { url, dataAtualizacao } = await getCsvInfo();

  mainComponent.innerHTML = `<p>Obtendo CSV de ${url}...</p>`;
  const csv = await parseCsv(url);

  const dataGroupedBySigla = groupBy(csv.data, "sigla");
  const dataGroupedByData = groupBy(csv.data, "data");

  for (let key in dataGroupedByData) {
    dataGroupedByData[key] = dataGroupedByData[key].reduce((soma, curr) => {
      return {
        sigla: "BRASIL",
        regiao: "BRASIL",
        data: key,
        casosNovos: (soma.casosNovos || 0) + curr.casosNovos,
        casosAcumulados: (soma.casosAcumulados || 0) + curr.casosAcumulados,
        obitosNovos: (soma.obitosNovos || 0) + curr.obitosNovos,
        obitosAcumulados: (soma.obitosAcumulados || 0) + curr.obitosAcumulados,
      };
    });
  }
  dataGroupedBySigla["BRASIL"] = Object.values(dataGroupedByData);

  ReactDOM.render(
    <React.StrictMode>
      <App data={dataGroupedBySigla} dataAtualizacao={dataAtualizacao} />
    </React.StrictMode>,
    mainComponent
  );
}

main();
