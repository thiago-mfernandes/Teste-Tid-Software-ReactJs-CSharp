import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../../Context";
import { Link, useParams } from "react-router-dom";
import { ContainerForm, ContainerInput, ContainerTipoLista } from "./styles";
import { Erro } from "../Erro";
import InputMask from "react-input-mask";

type Inputs = {
  nome: string,
  ultima_visita: Date,
  cpf: number,
  genero: string,
  telefone: number,
  planoId: number
};

export function FormCliente() {
  
  const { id } = useParams();  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
  const { adicionarCliente, cliente, editarCliente, obterClienteId, planos } = useContext(Context);
 
  async function onSubmit(data: Object) {
    if(id) {
      await editarCliente(parseInt(id), data);
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
      obterClienteId(parseInt(id));
    }
  }, []);

  return (
    <ContainerForm 
      onSubmit={handleSubmit(onSubmit)} 
      method="POST"
      initial={{y: "-100%"}} 
			animate={{y: "0%"}}
			transition={{duration: 0.75, ease: "easeInOut"}}
			exit={{ opacity: 1 }}
    >

      <ContainerInput>
        <label htmlFor="nome">Nome</label>
        <input 
          type="text" 
          placeholder="Nome completo"
          {...register("nome", { required: true })}
        />
        {errors.nome && <Erro />}
      </ContainerInput>
      <ContainerInput>
        <label htmlFor="ultima_visita">Ultima Visita</label>
        <input 
          type="datetime-local" 
          id="ultima_visita"
          {...register("ultima_visita", { required: true })}
        />
        {errors.ultima_visita && <Erro />}
      </ContainerInput>
      <ContainerInput>
        <label htmlFor="cpf">CPF</label>
        <InputMask 
          mask="999.999.999-99"
          type="text" 
          id="cpf"
          placeholder="000.000.00-00"
          {...register("cpf", { required: true })}
        />
        {errors.cpf && <Erro />}
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
        {errors.genero && <Erro />}
      </ContainerTipoLista>
      <ContainerInput>
        <label htmlFor="telefone">Telefone</label>
        <InputMask 
          mask="(99)99999-9999"
          type="text" 
          id="telefone"
          placeholder="(00) 0 0000-0000"
          {...register("telefone", { required: true })}
        />
        {errors.telefone && <Erro />}
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
          {
            planos.map((plano) =>(
              <option key={plano.id} value={plano.id}>
                {plano.filiacao}
              </option>
            ))
          }
        </select>
        {errors.planoId && <Erro />}
      </ContainerTipoLista>

      <button type="submit" name="Salvar">Salvar</button>  
      <button type="reset" name="cancelar">
          <Link to="/Clientes">Cancelar</Link>
      </button> 
    </ContainerForm>
  )
}