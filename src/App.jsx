import React from "react";
import ResponsiveLineChart from "./components/ResponsiveLineChart";
import ResponsiveAreaChart from "./components/ResponsiveAreaChart";
import ToggleButton from "./components/ToggleButton";
import styles from "./App.module.css";

const casosNovosConfig = [
  { dataKey: "casosNovos", name: "Casos Novos", stroke: "#99d066" },
  { dataKey: "obitosNovos", name: "Óbitos Novos", stroke: "#ff6659" },
];

const casosAcumuladosConfig = [
  { dataKey: "casosAcumulados", name: "Casos Acumulados", stroke: "#99d066", fill: "#99d066" },
  { dataKey: "obitosAcumulados", name: "Óbitos Acumulados", stroke: "#ff6659", fill: "#ff6659" },
];

function App({ data }) {
  const { BRASIL, ...estados } = data;
  const [estado, setEstado] = React.useState("BRASIL");
  const [scale, setScale] = React.useState("linear");

  return (
    <div className={styles.Container}>
      <div className={styles.ButtonGroup}>
        <ToggleButton
          onClick={() => setEstado("BRASIL")}
          active={estado === "BRASIL"}
        >
          BRASIL
        </ToggleButton>
        {Object.keys(estados)
          .sort()
          .map((sigla) => (
            <ToggleButton
              key={sigla}
              onClick={() => setEstado(sigla)}
              active={estado === sigla}
            >
              {sigla}
            </ToggleButton>
          ))}
      </div>
      <ResponsiveAreaChart
        data={data[estado].slice(26)}
        scale={scale}
        config={casosAcumuladosConfig}
      />
      <div className={styles.ButtonGroup}>
        <ToggleButton
          onClick={() => setScale("linear")}
          active={"linear" === scale}
        >
          linear
        </ToggleButton>
        <ToggleButton onClick={() => setScale("log")} active={"log" === scale}>
          log
        </ToggleButton>
      </div>
      <ResponsiveLineChart
        data={data[estado].slice(26)}
        scale="linear"
        config={casosNovosConfig}
      />
      <p>
        Fonte:{" "}
        <a
          href="https://covid.saude.gov.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://covid.saude.gov.br/
        </a>
      </p>
    </div>
  );
}

export default App;
