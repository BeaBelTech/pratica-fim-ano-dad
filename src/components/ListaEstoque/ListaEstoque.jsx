import ItemEstoque from "../ItemEstoque/ItemEstoque"

const ListaEstoque = ({produtos, vendaProduto}) => {
  return (
    <ul>
      {produtos.map((produto) => (
        <ItemEstoque
          key={produto.id}
          produto={produto}
          vendaProduto={vendaProduto}
        />
      ))}
    </ul>
  )
}

export default ListaEstoque