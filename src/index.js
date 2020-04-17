import "typeface-roboto-condensed";
import "typeface-roboto-mono";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import groupBy from "lodash.groupby";
import * as Sentry from "@sentry/browser";
import App from "./App";
import parseCsv from "./parseCsv";
import getCsvInfo from "./getCsvInfo";
import ErrorBoundary from "./ErrorBoundary";
import acumularDadosPorEstadosEscolhidos from "./acumularDadosPorEstadosEscolhidos";

if (process?.env?.NODE_ENV === "production") {
  Sentry.init({
    dsn:
      "https://35cad82a71fd411490b2c9891acb863a@o43943.ingest.sentry.io/5196657",
  });
} else {
  console.log("Sentry desativado.", `NODE_ENV: ${process?.env?.NODE_ENV}`);
}

async function main() {
  const mainComponent = document.getElementById("root");
  mainComponent.innerHTML = `<p>Obtendo endereço do CSV...</p>`;
  const { url, dataAtualizacao } = await getCsvInfo();

  mainComponent.innerHTML = `<p>Obtendo CSV de ${url}...</p>`;
  const csv = await parseCsv(url);

  const dataGroupedBySigla = groupBy(csv.data, "sigla");
  dataGroupedBySigla["BRASIL"] = acumularDadosPorEstadosEscolhidos(dataGroupedBySigla, Object.keys(dataGroupedBySigla), "BRASIL");

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
