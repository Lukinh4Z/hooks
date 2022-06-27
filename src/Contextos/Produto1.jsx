import React from "react";
import UserContext from "./Context";

const Produto1 = () => {
  const dados = React.useContext(UserContext);

  return <div>{dados.nome}</div>;
};

export default Produto1;
