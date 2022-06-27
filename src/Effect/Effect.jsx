import React from "react";
import Produto from "./Produto";

const Effect = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? "Desativar" : "Ativar"}
      </button>
    </>
  );
};

export default Effect;
