import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Context";
import { FormCliente } from "./FormCliente";
import { FormPlano } from "./FormPlano";
import { ContainerTipoFormulario } from "./styles";


export function Formulario() {

  const { id } = useParams();

  const FORM_TYPES = {
    Cliente: "Cliente",
    Plano: "Plano"
  }

  const { formType, alterarTipoFormulario } = useContext(Context); 

  interface FormuProps {
    id?: string | undefined;
    // id: any;
  }
  
  function escolherTitulo(id: FormuProps) {
    if(id != undefined) {
      return "Edite o cliente ou o plano do cliente selecionando abaixo o tipo de formulário:"
    } else {
      return "Adicionar Novo" 
    }
  }

  return (
    <ContainerTipoFormulario>
      <h2>{escolherTitulo(id)}</h2>      
        <fieldset>
          <legend>Tipo:</legend>
          <div>
            <label>
              <input
                type="radio"
                name="form-type"
                value={FORM_TYPES.Cliente}
                checked={formType === FORM_TYPES.Cliente}
                onChange={alterarTipoFormulario}
              />
              {FORM_TYPES.Cliente}
            </label>
            <label>
              <input
                type="radio"
                name="form-type"
                value={FORM_TYPES.Plano}
                checked={formType === FORM_TYPES.Plano}
                onChange={alterarTipoFormulario}
              />
              {FORM_TYPES.Plano}
            </label>
          </div>
        </fieldset>
        {
          formType === FORM_TYPES.Cliente
            ? <FormCliente />
            : <FormPlano />
        }
    </ContainerTipoFormulario>
  )
}