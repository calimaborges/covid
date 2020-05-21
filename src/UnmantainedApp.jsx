import React from "react";
import styles from "./App.module.css";

function UnmantainedApp() {
  return (
    <div className={styles.Container}>
      <h1>Site fora do ar</h1>
      <p>
        Página não está mais sendo mantida desde a mudança do formato dos dados
        fornecido pelo Ministério da Saúde.
      </p>
      <p>
        Não se preocupe! Os dados, na realidade, estão até mais completos porém
        não tive tempo para adaptar a página. Além disso o próprio Ministério da
        Saúde atualizou a página deles com novos gráficos. Acesse{" "}
        <a href="https://covid.saude.gov.br/">https://covid.saude.gov.br/</a>.
      </p>
      <p>
        O código fonte do sistema antigo ainda está disponível no GitHub. Acesse{" "}
        <a href="https://github.com/calimaborges/covid.git">
          https://github.com/calimaborges/covid.git
        </a>
      </p>
    </div>
  );
}

export default UnmantainedApp;
