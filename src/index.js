import React from "react";
import ReactDOM from "react-dom";
import groupBy from "lodash.groupby";
import App from "./App";
import parseCsv from "./parseCsv";
import getCsvUrl from "./getCsvUrl";


async function main() {
  const mainComponent = document.getElementById("root")
  mainComponent.innerHTML = `<p>Obtendo endereço do CSV...</p>`;
  const url = await getCsvUrl();

  mainComponent.innerHTML = `<p>Obtendo CSV de ${url}...</p>`;
  const csv = await parseCsv(url);

  const dataGroupedBySigla = groupBy(csv.data, "sigla");
  const dataGroupedByData = groupBy(csv.data, "date");

  for (let key in dataGroupedByData) {
    dataGroupedByData[key] = dataGroupedByData[key].reduce((soma, curr) => {
      return {
        sigla: "BRASIL",
        regiao: "BRASIL",
        date: key,
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
      <App data={dataGroupedBySigla} />
    </React.StrictMode>,
    mainComponent
  );
}

main();
