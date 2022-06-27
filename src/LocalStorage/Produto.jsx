import React from "react";

const Produto = ({ dados, setDados }) => {
  React.useEffect(() => {
    async function fetchProduto(dados) {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${dados.nome.toLowerCase()}`
      );
      const json = await response.json();
      setDados(json);
    }

    const result = fetchProduto(dados);
  }, []);

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produto;
