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
        if (/regi.o/.test(header)) {
          return "regiao";
        } else {
          return header;
        }
      },
    });
  });
}
