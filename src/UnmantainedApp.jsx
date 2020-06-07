import React from "react";
import styles from "./App.module.css";

function UnmantainedApp({ dadosArquivo }) {
  return (
    <div className={styles.Container}>
      <h1>Site fora do ar</h1>
      <p>
        Página não está mais sendo mantida desde a mudança do formato dos dados
        fornecido pelo Ministério da Saúde.
      </p>
      <p>
        O código fonte do sistema antigo ainda está disponível no GitHub. Acesse{" "}
        <a href="https://github.com/calimaborges/covid.git">
          https://github.com/calimaborges/covid.git
        </a>
      </p>
      <p>
        <a href={dadosArquivo.url}>Clique aqui para baixar o arquivo de dados</a>
        <br />
        Atualizado em {dadosArquivo.dataAtualizacao}
      </p>
    </div>
  );
}

export default UnmantainedApp;
