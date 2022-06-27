import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      Produto: {global.contar}{" "}
      <button onClick={() => global.addUm()}>Add 1</button>
      <button onClick={() => global.addDois()}>Add 2</button>
    </div>
  );
};

export default Produto;
