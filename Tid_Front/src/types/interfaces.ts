import { ChangeEvent, ReactNode } from "react";

export interface Cliente {
  id?: number | null;
  nome: string;
  Ultima_visita: Date;
  cpf: string;
  genero: string;
  telefone: string;
  planoId: number;
}

export interface Plano {
  id?: number | null;
  filiacao: string;
  preco: number;
}

export interface ClienteContextProps {
  formType: string;
  setFormType: React.Dispatch<React.SetStateAction<string>>;
  alterarTipoFormulario: (event: ChangeEvent<HTMLInputElement>) => void;

  clientes: Cliente[];
  setClientes: React.Dispatch<React.SetStateAction<Cliente[]>>

  cliente: Object;
  setCliente: React.Dispatch<React.SetStateAction<Cliente[]>>

  adicionarCliente: (cliente: Object) => Promise<void>;
  deletarCliente: (id: number) => void;
  obterClienteId: (id: number) => Promise<void>;
  editarCliente: (id: number, cliente: Object) => Promise<void>;

  planos: Plano[];
  setPlanos: React.Dispatch<React.SetStateAction<Plano[]>>

  plano: Object;
  setPlano: React.Dispatch<React.SetStateAction<Plano[]>>

  adicionarPlano: (plano: Object) => Promise<void>;
  deletarPlano: (id: number) => void;
  obterPlanoId: (id: number) => Promise<void>;
  editarPlano: (id: number, plano: Object) => Promise<void>;
}

export interface ContextProviderProps {
  children: ReactNode;
}