import React from "react";

const Produto = () => {
  React.useEffect(() => {
    //Toda essa função é um callback, por isso o 'return' é outra função.
    function handleScroll(event) {
      console.log(event);
    }

    window.addEventListener("scroll", handleScroll);

    //Essa função do return só será executada quando o componente for removido da tela
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <p>Produto a </p>
      <p>Produto b</p>
      <p>Produto c</p>
    </div>
  );
};

export default Produto;
