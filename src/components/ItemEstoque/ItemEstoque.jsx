import styles from "./ItemEstoque.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
const ItemEstoque = ({ produto, vendaProduto }) => {
  const [novaQuant, setNovaQuant] = useState(0);
  const vender = () => {
    setNovaQuant=produto.quantidade--
    // vendaProduto(produto.id, novaQuant);
  };

  return (
    <div
      className={
        produto.quantidade > 5 ? styles.estoqueNormal : styles.estoqueBaixo
      }
    >
      <p className={styles.nomeProduto}>{produto.nome}</p>
      <p className={styles.quantidadeProduto}>{produto.quantidade}</p>
      <p className={styles.valorProduto}>{produto.valor}</p>
      <div className={styles.botoesAcoes}>
        <button className={styles.botaoComprar} onClick={vender()}>
          <AddIcon />
        </button>
        <button className={styles.botaoVender}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
};

export default ItemEstoque;
