import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      const error = this.state.error;
      const errorMessage = error.toString
        ? error.toString()
        : "Erro desconhecido.";
      return (
        <>
          <h1>Ops...</h1>
          <p>
            Provavelmente houve alguma falha ao ler o CSV fornecido. Acesse{" "}
            <a href="https://covid.saude.gov.br">https://covid.saude.gov.br</a>{" "}
            até o problema ser corrigido
          </p>
          <p>{errorMessage}</p>
        </>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
