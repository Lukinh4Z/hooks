import React from "react";
import UserContext from "./Context";
import Produto from "./Produto";
import Produto1 from "./Produto1";
import { GlobalStorage } from "./GlobalContext";

const AppContext = () => {
  return (
    //Esse .Provider faz com que tudo aqui dentro tenha acesso à esse UserContext.
    // <UserContext.Provider value={{ nome: "Lucas" }}>
    //   <Produto1 />
    // </UserContext.Provider>
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default AppContext;
