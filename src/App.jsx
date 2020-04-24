import React from "react";
import ResponsiveLineChart from "./components/ResponsiveLineChart";
import ResponsiveAreaChart from "./components/ResponsiveAreaChart";
import ToggleButton from "./components/ToggleButton";
import CounterBox from "./components/CounterBox";
import styles from "./App.module.css";

const novosConfig = [
  { dataKey: "casosNovos", name: "Casos novos", stroke: "#99d066" },
  { dataKey: "obitosNovos", name: "Óbitos novos", stroke: "#ff6659" },
];

const acumuladosConfig = [
  {
    dataKey: "casosAcumulados",
    name: "Casos acumulados",
    stroke: "#99d066",
    fill: "#99d066",
  },
  {
    dataKey: "obitosAcumulados",
    name: "Óbitos acumulados",
    stroke: "#ff6659",
    fill: "#ff6659",
  },
];

function App({ data, dataAtualizacao }) {
  const { BRASIL, ...estados } = data;
  const [scale, setScale] = React.useState("linear");
  const [estado, setEstado] = React.useState("BRASIL");

  const relevantData = data[estado].slice(26);
  const [currentBox, setCurrentBox] = React.useState(relevantData.length - 1);

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
      <div className={styles.BoxGroupTitle}>
        {relevantData[currentBox].data}
      </div>
      <div className={styles.BoxGroup}>
        <button
          disabled={currentBox === 0}
          onClick={() => setCurrentBox(currentBox - 1)}
        >
          {"<"}
        </button>
        <CounterBox
          legend={acumuladosConfig[0].name}
          color={acumuladosConfig[0].stroke}
          amount={relevantData[currentBox].casosAcumulados}
        />
        <CounterBox
          legend={acumuladosConfig[1].name}
          color={acumuladosConfig[1].stroke}
          amount={relevantData[currentBox].obitosAcumulados}
        />
        <CounterBox
          legend={novosConfig[0].name}
          color={novosConfig[0].stroke}
          amount={relevantData[currentBox].casosNovos}
          bgColor="#ffffff"
        />
        <CounterBox
          legend={novosConfig[1].name}
          color={novosConfig[1].stroke}
          amount={relevantData[currentBox].obitosNovos}
          bgColor="#ffffff"
        />
        <button
          disabled={currentBox === relevantData.length - 1}
          onClick={() => setCurrentBox(currentBox + 1)}
        >
          {">"}
        </button>
      </div>

      <h3>Acumulado</h3>
      <ResponsiveAreaChart
        data={relevantData}
        scale={scale}
        config={acumuladosConfig}
        reference={currentBox}
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

      <h3>Novos</h3>
      <ResponsiveLineChart
        data={relevantData}
        scale="linear"
        config={novosConfig}
        reference={currentBox}
      />
      <p style={{ textAlign: "center" }}>
        Fonte:{" "}
        <a
          href="https://covid.saude.gov.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://covid.saude.gov.br/
        </a>
        <br />
        Última atualização: {dataAtualizacao}
      </p>

      <p style={{ textAlign: "center" }}>
        <a
          href="https://github.com/calimaborges/covid.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}

export default App;
