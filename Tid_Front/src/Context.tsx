import { ChangeEvent, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./services/api";
import { Cliente, ClienteContextProps, ContextProviderProps, Plano } from './types/interfaces'


export const Context = createContext<ClienteContextProps>({} as ClienteContextProps);

export function ContextProvider({children}: ContextProviderProps) {

  const FORM_TYPES = {
    Cliente: "Cliente",
    Plano: "Plano"
  }

  //colocar todos os estados aqui
  const navigate = useNavigate();  
                                        //array do tipo clientes
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cliente, setCliente] = useState({});
  const [planos, setPlanos] = useState<Plano[]>([]);
  const [plano, setPlano] = useState({});
  const [formType, setFormType] = useState(FORM_TYPES.Cliente);

  /**
   * Função para escolher o tipo de formulario
   * e para passar dinamicamente na rota???
   */

  const handleChangeFormType = (event: ChangeEvent<HTMLInputElement>) => {
    setFormType(event.target.value);
  }

  //colocar a lista de funcoes de clientes abaixo:

  //obter todos os clientes
  useEffect(() => {
    api.get("/Cliente")
      .then((response) => setClientes(response.data))
  }, []) 

  //obter todos os planos
  useEffect(() => {
    api.get("/Plano")
      .then((response) => setPlanos(response.data))
  }, []) 

  //obter cliente por id
  async function obterClienteId(id: string) {
    //passar o id pela rota e receber atraves de data
    const { data } = await api.get(`/Cliente/${id}`);
    setCliente(data);
  }

  async function obterPlanoId(id: string) {
    const { data } = await api.get(`/Plano/${id}`);
    setPlano(data);
  }

  //aqui esta tipado como any para poder receber um objeto
  async function adicionarCliente(cliente: any) {
    //aqui vou popular um objeto
    //chave: estado cliente.chave

    const clienteForm = {
      id: cliente.id,
      nome: cliente.nome,
      Ultima_visita: cliente.Ultima_visita,
      cpf: cliente.cpf,
      genero: cliente.genero,
      telefone: cliente.telefone,
      planoId: cliente.planoId
    }

    //atualmente, aqui eh onde roda meu json-server: "http://localhost:3333/"
    await api
      //na rota de clientes, enviar o objeto
      .post("/Cliente", clienteForm)
      .then(() => {
        //forçar um get na rota clientes
        api.get("/Cliente")
          //e setar a lista de clientes com a resposta para a exibição nas tabelas
          .then(response => setClientes(response.data))
      })
  }
  //aqui esta tipado como any para poder receber um objeto
  async function adicionarPlano(plano: any) {
    //aqui vou popular um objeto
    //chave: estado plano.chave

    const planoForm = {
      id: plano.id,
      filiacao: plano.filiacao,
      preco: plano.preco
    }

    //atualmente, aqui eh onde roda meu json-server: "http://localhost:3333/"
    await api
      //na rota de clientes, enviar o objeto
      .post("/Plano", planoForm)
      .then(() => {
        //forçar um get na rota clientes
        api.get("/Plano")
          //e setar a lista de clientes com a resposta para a exibição nas tabelas
          .then(response => setPlanos(response.data))
      })
  }

  async function editarCliente(id: string, data: Object) {
    //console.log("inside context =>", data);
    await api.put(`/Cliente/${id}`, data)
    .then(() => {
      api.get("/Cliente")
        .then(response => setClientes(response.data))
    });
    //navigate("/")
  }

  async function editarPlano(id: string, data: Object) {
    //console.log("inside context =>", data);
    await api.put(`/Plano/${id}`, data)
    .then(() => {
      api.get("/Plano")
        .then(response => setPlanos(response.data))
    });
    //navigate("/")
  }

  function deletarCliente(id: string) {
    api.delete(`/Cliente/${id}`)
    .then(() => {
      api.get("/Cliente")
        .then(response => setClientes(response.data))
    });
  }

  function deletarPlano(id: string) {
    api.delete(`/Plano/${id}`)
    .then(() => {
      api.get("/Plano")
        .then(response => setPlanos(response.data))
    });
  }
  
  return (
    <Context.Provider value={{
      //retornar estados e funcoes para os componentes
      formType, 
      setFormType,
      handleChangeFormType,

      clientes, 
      setClientes, 
      cliente, 
      setCliente,

      adicionarCliente, 
      deletarCliente, 
      obterClienteId, 
      editarCliente,

      planos,
      setPlanos,

      plano,
      setPlano,

      adicionarPlano,
      deletarPlano,
      obterPlanoId,
      editarPlano

      }}>
      {children}
    </Context.Provider>
  )
}