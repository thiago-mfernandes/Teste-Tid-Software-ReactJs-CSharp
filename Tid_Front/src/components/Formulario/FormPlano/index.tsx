import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../../Context";
import { Link, useParams } from "react-router-dom";
import { ContainerForm, ContainerInput } from "./styles";
import { Erro } from "../Erro";

type Inputs = {
  filiacao: string,
  preco: number,
};

export function FormPlano() {

  const { id } = useParams();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
  const { adicionarPlano, plano, editarPlano, obterPlanoId } = useContext(Context);

  async function onSubmit(data: Object) {
    if(id) {
      await editarPlano(parseInt(id), data);
    } else {
      await adicionarPlano(data);
    }
  }

  useEffect(() => {
    if(id) {
      reset(plano);
    }
  }, [plano]);
  
  useEffect(() => {
    if(id) {
      obterPlanoId(parseInt(id));
    }
  }, []);
  
  return (
    <ContainerForm 
      onSubmit={handleSubmit(onSubmit)} 
      method="POST"
    >

      <ContainerInput>
        <label htmlFor="filiacao">Tipo de Plano:</label>
        <input 
          type="text" 
          id="filiacao"
          placeholder="Inform o tipo de plano.."
          {...register("filiacao", { required: true })}
        />
        {errors.filiacao && <Erro />}
      </ContainerInput>
      <ContainerInput>
        <label htmlFor="preco">Preço</label>
        <input 
          type="number" 
          id="preco"
          placeholder="R$..."
          {...register("preco", { required: true })}
        />
        {errors.preco && <Erro />}
      </ContainerInput>     

      <button type="submit" name="Salvar">Salvar</button>
      <button type="reset" name="cancelar">
          <Link to="/Planos">Cancelar</Link>
      </button> 
    </ContainerForm>
  )
}
