import React from "react";

const Button = ({ nome, setProduto, setLoading }) => {
  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.id}`
    );
    const json = await response.json();
    setProduto(json);
    setLoading(false);
  }

  return (
    <button
      onClick={handleClick}
      style={{ margin: "1rem" }}
      id={nome.toLowerCase()}
    >
      {nome}
    </button>
  );
};

export default Button;
