import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function EditarProdutos() {
    
    //Utilizar o HOOK useParams() para recuperar o ID passado no path
    const {id} = useParams();

    document.title = "EDITAR PRODUTOS " + id;

    const produtoRetornadoDoFiltro = ListaProdutos.filter( produto => produto.id == id );


    return (
      <div>
          <h1>EditarProdutos</h1>

          <p>Objeto selecionado : { produtoRetornadoDoFiltro[0].nome }</p>

          <div>
            <form>
              <fieldset>
                <legend>Produto Selecionado</legend>
                <div>
                  <label htmlFor="idProd">Nome do Produto</label>
                  <input type="text" name="nome" id="idProd" value/>
                </div>

              </fieldset>
            </form>
          </div>



      </div>
    )
  }
  