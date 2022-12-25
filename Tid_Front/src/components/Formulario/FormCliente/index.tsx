import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../../Context";
import { useParams } from "react-router-dom";
import { ContainerInput, ContainerTipoLista } from "./styles";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export function FormCliente() {
  const { id } = useParams();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
  const { adicionarCliente, cliente, editarCliente, obterClienteId } = useContext(Context);
 
  async function onSubmit(data: Object) {
    if(id) {
      await editarCliente(id, data);
    } else {
      await adicionarCliente(data);
    }
  }

  useEffect(() => {

    if(id) {
      reset(cliente);
    }
  }, [cliente]);

  useEffect(() => {
    if(id) {
      obterClienteId(id);
    }
  }, []);



  return (
    <form onSubmit={handleSubmit(onSubmit)} method="POST">

      <ContainerInput>
        <label htmlFor="nome">Nome</label>
        <input 
          type="text" 
          id="nome"
          placeholder="Nome completo"
          {...register('nome', { required: true })}
        />
      </ContainerInput>
      <ContainerInput>
        <label htmlFor="ultima_visita">Ultima Visita</label>
        <input 
          type="datetime-local" 
          id="ultima_visita"
          {...register("ultima_visita", { required: true })}
        />
      </ContainerInput>
      <ContainerInput>
        <label htmlFor="cpf">CPF</label>
        <input 
          type="number" 
          id="cpf"
          placeholder="000.000.00-00"
          {...register('cpf', { required: true })}
        />
      </ContainerInput>

      <ContainerTipoLista>
        <label htmlFor="genero">
          Gênero
        </label>
        <select 
          id="genero" 
          {...register("genero", { required: true})}
        >
          <option value=""></option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
      </ContainerTipoLista>
      <ContainerInput>
        <label htmlFor="telefone">Telefone</label>
        <input 
          type="number" 
          id="telefone"
          placeholder="(00) 0 0000-0000"
          {...register('telefone', { required: true })}
        />
      </ContainerInput>

      <ContainerTipoLista>
        <label htmlFor="planoId">
          Plano
        </label>
        <select 
          id="planoId" 
          {...register("planoId", { required: true})}
        >
          <option value=""></option>
          <option value="1">Golden</option>
          <option value="2">Silver</option>
          <option value="3">Light</option>
          <option value="4">Casual</option>
          <option value="5">Aula Grátis</option>
        </select>
      </ContainerTipoLista>

      <button>Salvar</button>
      <button>Cancelar</button>

    </form>
  )
}