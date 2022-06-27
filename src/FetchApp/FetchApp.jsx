import React from "react";
import Button from "./Button";
import Componente from "./Componente";

const FetchApp = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  return (
    <div>
      <h1>FetchApp</h1>
      <Button nome="Tablet" setProduto={setProduto} setLoading={setLoading} />
      <Button
        nome="Smartphone"
        setProduto={setProduto}
        setLoading={setLoading}
      />
      <Button nome="Notebook" setProduto={setProduto} setLoading={setLoading} />
      {loading && <p>Carregando ...</p>}
      {!loading && produto && <Componente produto={produto} />}
    </div>
  );
};

export default FetchApp;
