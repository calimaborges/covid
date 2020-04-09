import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import groupBy from "lodash.groupby";

const dataConfig = [
  { dataKey: "casosAcumulados", name: "Casos Acumulados", stroke: "#387002" },
  { dataKey: "casosNovos", name: "Casos Novos", stroke: "#99d066" },
  { dataKey: "obitosAcumulados", name: "Óbitos Acumulados", stroke: "#9a0007" },
  { dataKey: "obitosNovos", name: "Óbitos Novos", stroke: "#ff6659" },
];

function App({ data }) {
  const dataGroupedBySigla = groupBy(data, "sigla");
  const dataGroupedByData = groupBy(data, "date");

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

  const { BRASIL, ...estados } = dataGroupedBySigla;
  const [estado, setEstado] = React.useState("BRASIL");

  function FilterButton({ sigla }) {
    return (
      <button
        onClick={() => setEstado(sigla)}
        style={{
          border: "1px solid black",
          padding: "0.4rem",
          fontSize: "1.2rem",
          margin: "0.1rem",
          fontFamily: "monospace",
          backgroundColor: sigla === estado ? "black" : "white",
          color: sigla === estado ? "white" : "black",
          outline: "none",
        }}
      >
        {sigla}
      </button>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem 0 0rem"
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <FilterButton sigla="BRASIL" />
        {Object.keys(estados)
          .sort()
          .map((sigla) => (
            <FilterButton key={sigla} sigla={sigla} />
          ))}
      </div>
      <ResponsiveContainer width="100%" minHeight={350}>
        <LineChart data={dataGroupedBySigla[estado].slice(26)}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={45} />
          <XAxis dataKey="date" />
          <YAxis type="number" />
          {dataConfig.map((lineProps) => (
            <Line
              animationDuration={500}
              key={lineProps.dataKey}
              type="monotone"
              strokeWidth={2}
              {...lineProps}
            />
          ))}{" "}
        </LineChart>
      </ResponsiveContainer>
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
