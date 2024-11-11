import styles from "./App.module.css";
import { useState } from "react";
import FormularioProduto from "../FormularioProduto/FormularioProduto";
import ListaEstoque from "../ListaEstoque/ListaEstoque";

const App = () => {
  const [produto, setProduto] = useState([]);

  const addProduto = (nome, quantidade, valor, compra) => {
    const newProduto = {
      id: Date.now(),
      nome,
      quantidade,
      valor,
      compra
    };
    setProduto([...produto, newProduto]);
  };

  const vendaProduto = (produtoId, novaQuant) => {
    setProduto(
      produto.map((produto) =>
        produto.id === produtoId ? { ...produto, quantidade: novaQuant } : produto
      )
    );
  };

  return (
    <div className={styles.aplicativo}>
      <h1 className={styles.titulo}>Gerenciador de Estoque</h1>
      <p className={styles.caixa}>Caixa: R$</p>
      <FormularioProduto addProduto={addProduto} />
      <ListaEstoque
          produtos={produto}
          vendaProduto={vendaProduto}
        />
    </div>
  );
};

export default App;
