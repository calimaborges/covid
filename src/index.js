import "typeface-roboto-condensed";
import "typeface-roboto-mono";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import groupBy from "lodash.groupby";
import * as Sentry from '@sentry/browser';
import App from "./App";
import parseCsv from "./parseCsv";
import getCsvInfo from "./getCsvInfo";
import ErrorBoundary from "./ErrorBoundary";

if (window.env && window.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://af6f260b6d2d478f9ad3430c0f67102f@sentry.io/5172534",
  });
}

async function main() {
  const mainComponent = document.getElementById("root");
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
      <ErrorBoundary>
        <App data={dataGroupedBySigla} dataAtualizacao={dataAtualizacao} />
      </ErrorBoundary>
    </React.StrictMode>,
    mainComponent
  );
}

main();
