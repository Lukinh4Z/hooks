import React from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

const AppCustom = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  function handleClick({ target }) {
    setProduto(target.innerText);
    request("https://ranekapi.origamid.dev/json/api/produto");
  }

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      console.log(response);
      console.log(json);
    }
    fetchData();
  }, [request]);

  return (
    <div>
      <p>Produto preferido: {produto}</p>

      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {error && <h1>{error} !</h1>}
      {!error && loading && <h1>Carregando...</h1>}
      {!error &&
        !loading &&
        data &&
        data.map((produto) => (
          <div key={produto.id}>
            <h3>{produto.nome}</h3>
          </div>
        ))}
    </div>
  );
};

export default AppCustom;
