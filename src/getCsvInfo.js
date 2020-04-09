export default async function getCsvInfo() {
  const response = await fetch(
    "https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeral",
    {
      credentials: "omit",
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-parse-application-id": "unAFkcaNDeXajurGB7LChj8SgQYS2ptm",
      },
      referrer: "https://covid.saude.gov.br/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: null,
      method: "GET",
      mode: "cors",
    }
  );
  const json = await response.json();
  return {
    url: json?.results[0]?.arquivo?.url,
    dataAtualizacao: json?.results[0]?.dt_atualizacao,
  };
}
