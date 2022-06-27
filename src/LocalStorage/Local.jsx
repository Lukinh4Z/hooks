import React from "react";
import Produto from "./Produto";

const Local = () => {
  const localProduto = localStorage.getItem("produto");

  const [dados, setDados] = React.useState({ nome: localProduto });

  async function handleClick(event) {
    localStorage.setItem("produto", event.target.innerText);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`
    );
    const json = await response.json();
    setDados(json);
  }

  return (
    <>
      <h1>Preferência: {dados.nome}</h1>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <Produto dados={dados} setDados={setDados} />
    </>
  );
};

export default Local;
