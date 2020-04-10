import Papa from "papaparse";

export default function parseCsv(url) {
  return new Promise((resolve) => {
    Papa.parse(url, {
      dynamicTyping: true,
      download: true,
      complete: resolve,
      header: true,
      keepEmptyRows: false,
      skipEmptyLines: true,
      transformHeader: function (header) {
        // region;sigla;date;cases_inc;cases;deaths_inc;deaths
        switch (header) {
          case "region": return "regiao";
          case "date": return "data";
          case "cases_inc": return "casosNovos";
          case "cases": return "casosAcumulados";
          case "deaths_inc": return "obitosNovos";
          case "deaths": return "obitosAcumulados";
          default: return header;
        }
      },
    });
  });
}
