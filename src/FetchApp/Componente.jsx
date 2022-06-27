import React from "react";

const Componente = ({ produto }) => {
  return (
    <>
      <div>
        <h2>{produto.nome}</h2>
        <h3>R$ {produto.preco}</h3>
        <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
      </div>
    </>
  );
};

export default Componente;
