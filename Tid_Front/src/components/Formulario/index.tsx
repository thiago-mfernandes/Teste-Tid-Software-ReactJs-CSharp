import { useContext } from "react";
import { Context } from "../../Context";
import { FormCliente } from "./FormCliente";
import { FormPlano } from "./FormPlano";
import { ContainerTipoFormulario } from "./styles";


export function Formulario() {

  const FORM_TYPES = {
    Cliente: "Cliente",
    Plano: "Plano"
  }

  const { formType, setFormType, handleChangeFormType } = useContext(Context);  

  return (
    <ContainerTipoFormulario>
      <h2>Adicionar Novo</h2>      
        <fieldset>
          <legend>Tipo:</legend>
          <div>
            <label>
              <input
                type="radio"
                name="form-type"
                value={FORM_TYPES.Cliente}
                checked={formType === FORM_TYPES.Cliente}
                onChange={handleChangeFormType}
              />
              {FORM_TYPES.Cliente}
            </label>
            <label>
              <input
                type="radio"
                name="form-type"
                value={FORM_TYPES.Plano}
                checked={formType === FORM_TYPES.Plano}
                onChange={handleChangeFormType}
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