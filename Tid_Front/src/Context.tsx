import { ChangeEvent, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cliente, setCliente] = useState({});
  const [planos, setPlanos] = useState<Plano[]>([]);
  const [plano, setPlano] = useState({});
  const [mostrarModal, setMostrarModal] = useState(false);
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
  async function obterClienteId(id: number) {
    //passar o id pela rota e receber atraves de data
    const { data } = await api.get(`/Cliente/${id}`);
    setCliente(data);
  }

  async function obterPlanoId(id: number) {
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
      Ultima_visita: cliente.ultima_visita,
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
        toast.success("Cliente cadastrado com sucesso!", {
          autoClose: 2000
        });
        //forçar um get na rota clientes
        api.get("/Cliente")
          //e setar a lista de clientes com a resposta para a exibição nas tabelas
          .then(response => setClientes(response.data))
      });

      navigate("/Clientes");
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
        toast.success("Plano cadastrado com sucesso!", {
          autoClose: 2000
        })
        //forçar um get na rota clientes
        api.get("/Plano")
          //e setar a lista de clientes com a resposta para a exibição nas tabelas
          .then(response => setPlanos(response.data))
      })
    
      navigate("/Planos");
  }

  async function editarCliente(id: number, data: Object) {
    //console.log("inside context =>", data);
    await api.put(`/Cliente/${id}`, data)
    .then(() => {
      toast.success("Cliente editado com sucesso!", {
        autoClose: 2000
      })
      api.get("/Cliente")
        .then(response => setClientes(response.data))
    });
    navigate("/Clientes")
  }

  async function editarPlano(id: number, data: Object) {
    await api.put(`/Plano/${id}`, data)
    .then(() => {
      toast.success("Plano editado com sucesso!", {
        autoClose: 2000
      })
      api.get("/Plano")
        .then(response => setPlanos(response.data))
    });
    navigate("/Planos")
  }

  function deletarCliente(id: number | null | undefined) {
    fecharModal();
    api.delete(`/Cliente/${id}`)
    .then(() => {
      toast.success("Cliente excluido com sucesso!", {
        autoClose: 2000
      })
      api.get("/Cliente")
        .then(response => setClientes(response.data))
    });
  }

  function deletarPlano(id: number | null | undefined) {
    fecharModal();
    api.delete(`/Plano/${id}`)
    .then(() => {
      toast.success("Plano excluido com sucesso!", {
        autoClose: 2000
      })
      api.get("/Plano")
        .then(response => setPlanos(response.data))
    });
  }

  /**-------------FUNÇÕES DO MODAL*------------- */

  function abrirModal() {
    setMostrarModal(true);
  }

  function fecharModal() {
    setMostrarModal(false);
  }
  
  return (
    <Context.Provider value={{
      
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
      editarPlano,

      mostrarModal,
      abrirModal,
      fecharModal,

      }}>
      {children}
    </Context.Provider>
  )
}