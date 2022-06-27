import React from "react";

const ButtonModal = ({ modal, setModal }) => {
  return (
    // Dentro de 'setModal' eu posso usar a função de callback
    // e não preciso mais passar o parâmetro 'modal' o 'ativo' já chama esse parâmetro.
    <button onClick={() => setModal((ativo) => !ativo)}>
      {modal ? "Fechar" : "Abrir"}
    </button>
  );
};

export default ButtonModal;
