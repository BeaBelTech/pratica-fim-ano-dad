import { useState } from "react";
import styles from "./FormularioProduto.module.css";
const FormularioProduto = (props) => {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(0);
  const [compra, setCompra] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addProduto(nome, quantidade, valor, compra);
    setNome("");
    setQuantidade(0)
    setCompra(0)
    setValor(0)
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.formulario}>
        <div>
          <label htmlFor="nome" className={styles.label}>
            Nome do produto:
          </label>
          <input
            className={styles.input}
            type="text"
            name="nome"
            id="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quant" className={styles.label}>
            Quantidade em estoque
          </label>
          <input
            className={styles.input}
            type="text"
            name="quant"
            id="quant"
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="compra" className={styles.label}>
            Valor da compra:
          </label>
          <input
            className={styles.input}
            type="text"
            name="compra"
            id="compra"
            onChange={(e) => setCompra(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="valor" className={styles.label}>
            Valor da venda:
          </label>
          <input
            className={styles.input}
            type="text"
            name="valor"
            id="valor"
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <button className={styles.botao}>Adicionar Produto</button>
      </form>
    </>
  );
};

export default FormularioProduto;
