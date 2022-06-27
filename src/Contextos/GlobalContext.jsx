import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  //desestruturei "children" das propriedades, para ele reconhecer os elementos que estão dentro dele.

  const [contar, setContar] = React.useState(0);

  function addUm() {
    setContar((contar) => contar + 1);
  }

  function addDois() {
    setContar((contar) => contar + 2);
  }

  return (
    <GlobalContext.Provider value={{ contar, addUm, addDois }}>
      {children}
    </GlobalContext.Provider>
  );
};
