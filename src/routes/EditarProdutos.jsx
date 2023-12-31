import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {
    
    //Utilizar o HOOK useParams() para recuperar o ID passado no path
    const {id} = useParams();

    document.title = "EDITAR PRODUTOS " + id;

    const produtoRetornadoDoFiltro = ListaProdutos.filter( produto => produto.id == id );

    //useState()

    const [produto, setProduto] = useState("NOME"); 

    return (
      <div>
          <h1>EditarProdutos</h1>
            <p>Valor do state = {produto}</p>
            <button onClick={()=> setProduto("JOAQUIM GOSTA DE XUXU!")}>MUDAR O STATE</button>
          <div>
            <form>
              <fieldset>
                <legend>Produto Selecionado</legend>
                <input type="hidden" name="id" defaultValue={produtoRetornadoDoFiltro[0].id}/>
                <div>
                  <label htmlFor="idProd">Nome do Produto</label>
                  <input type="text" name="nome" id="idProd" defaultValue={produtoRetornadoDoFiltro[0].nome}/>
                </div>
                <div>
                  <label htmlFor="idDesc">Descrição</label>
                  <input type="text" name="desc" id="idDesc" defaultValue={produtoRetornadoDoFiltro[0].desc}/>
                </div>
                <div>
                  <label htmlFor="idPreco">Preço</label>
                  <input type="text" name="preco" id="idPreco" defaultValue={produtoRetornadoDoFiltro[0].preco}/>
                </div>
                <div>
                  <button>EDITAR</button>
                </div>
              </fieldset>
            </form>
          </div>



      </div>
    )
  }
  