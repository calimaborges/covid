import groupBy from "lodash.groupby";
import pick from "lodash.pick";
import flatten from "lodash.flatten";

export default function acumularDadosPorEstadosEscolhidos(
  dadosPorEstado,
  estadosEscolhidos,
  novaSiglaRegiao = "SOMA"
) {
  const dadosPorEstadosEscolhidos = pick(dadosPorEstado, estadosEscolhidos);
  const dados = flatten(Object.values(dadosPorEstadosEscolhidos));
  const dataGroupedByDate = groupBy(dados, "data");

  for (let date in dataGroupedByDate) {
    dataGroupedByDate[date] = dataGroupedByDate[date].reduce(
      (soma, curr) => {
        return {
          sigla: novaSiglaRegiao,
          regiao: novaSiglaRegiao,
          data: date,
          casosNovos: soma.casosNovos + curr.casosNovos,
          casosAcumulados: soma.casosAcumulados + curr.casosAcumulados,
          obitosNovos: soma.obitosNovos + curr.obitosNovos,
          obitosAcumulados: soma.obitosAcumulados + curr.obitosAcumulados,
        };
      },
      { casosNovos: 0, casosAcumulados: 0, obitosNovos: 0, obitosAcumulados: 0 }
    );
  }

  return Object.values(dataGroupedByDate);
}
